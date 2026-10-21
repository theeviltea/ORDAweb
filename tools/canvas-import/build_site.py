"""Generate ORDAweb Next.js views from the canvas .dc.html boards."""
import re, sys, os, json
sys.path.insert(0, os.path.dirname(__file__))
import html2tsx as H
H.BLOB.update(json.load(open(os.path.join(os.path.dirname(__file__), 'teamblobs.json'))))

SRC = sys.argv[1]   # canvas project dir
OUT = sys.argv[2]   # ordaweb repo

BASE_CSS = ["body{margin:0}", "@font-face", "a{color:#0B7DB0}a:hover{color:#086891}"]

PAGES = [
    # board, view name, route dir ('' = root), title, description
    ('WebMain', 'Home', '', 'ORDA — официальный сайт ФК «Ордабасы»', 'Новости, матчи, команда, билеты и магазин футбольного клуба «Ордабасы».'),
    ('WebTeam', 'Team', 'team', 'Команды клуба', 'Основной состав, молодёжная и женская команды, академия «Ордабасы».'),
    ('WebMatches', 'Matches', 'matches', 'Матчи', 'Календарь, результаты и турнирная таблица.'),
    ('WebMedia', 'Media', 'media', 'Медиацентр', 'Новости, видео, фото, интервью и пресс-конференции.'),
    ('WebShop', 'Shop', 'shop', 'Клубный магазин', 'Официальная экипировка «Ордабасы».'),
    ('WebProduct', 'Product', 'shop/product', 'Домашняя джерси 2024/25', 'Карточка товара клубного магазина.'),
    ('WebShopOrders', 'ShopOrders', 'shop/orders', 'Мои заказы', 'Статусы доставки и история покупок.'),
    ('WebFans', 'Fans', 'fans', 'Фан-зона', 'Викторины, конкурсы, опросы и прогнозы.'),
    ('WebProfile', 'Profile', 'profile', 'Личный кабинет', 'Билеты, покупки, достижения и настройки.'),
]


def parts(path):
    s = open(path).read()
    xdc = s[s.index('<x-dc>') + 6: s.index('</x-dc>')]
    helmet = re.search(r'<helmet>(.*?)</helmet>', xdc, re.S)
    css = ''
    if helmet:
        st = re.search(r'<style>(.*?)</style>', helmet.group(1), re.S)
        if st:
            lines = [l for l in st.group(1).strip().split('\n') if l.strip() and not any(l.strip().startswith(b) for b in BASE_CSS)]
            css = '\n'.join(lines)
        xdc = xdc.replace(helmet.group(0), '')
    sc = re.search(r'class Component extends DCLogic \{(.*)\}\s*</script>', s, re.S).group(1)
    return xdc.strip(), css, sc


def js_logic(sc):
    """class body -> plain JS module: export function vals(self) {...}; export const tick = bool"""
    tick = 'setInterval' in sc
    m = re.search(r'renderVals\(\)\s*\{', sc)
    i = m.end(); depth = 1; j = i
    while depth:
        c = sc[j]
        if c == '{': depth += 1
        elif c == '}': depth -= 1
        j += 1
    body = sc[i:j - 1]
    body = re.sub(r'\bthis\b', 'self', body).replace('Date.now()', 'self.now')
    body = re.sub(r"\n\s*const B = '/_blob/';", "", body)
    body = re.sub(r"'/_blob/([0-9a-f]{32})'", r"blob('\1')", body)
    body = re.sub(r"\bB \+ ", "blob(", body)
    body = re.sub(r"blob\((id|'[0-9a-f]{32}')(?!\))", r"blob(\1)", body)
    ids = sorted(set(re.findall(r"[0-9a-f]{32}", body)))
    pre = ''
    if 'blob(' in body:
        mp = {i: H.BLOB.get(i, i) for i in ids}
        pre = "import { asset } from '@/lib/asset';\n\nconst BLOB = " + json.dumps(mp, ensure_ascii=False) + ";\nconst blob = (id) => asset('/img/' + (BLOB[id] || id));\n"
    return pre + f'/* eslint-disable */\n// Логика экрана, перенесённая из дизайн-макета (canvas). self = {{ state, setState, props }}.\nexport const tick = {str(tick).lower()};\n\nexport function vals(self) {{{body}}}\n'


def view_tsx(name, body, uses, css_file, client=True, props_type='{}', extra_imports=''):
    imp = []
    react = ['Fragment'] if 'Fragment' in uses else []
    if react: imp.append(f"import {{ {', '.join(react)} }} from 'react';")
    if 'Link' in uses: imp.append("import Link from 'next/link';")
    if 'route(' in body: imp.append("import { route } from '@/lib/route';")
    if 'asset' in uses or 'asset(' in body: imp.append("import { asset } from '@/lib/asset';")
    if 'Icon' in uses: imp.append("import { Icon } from '@/components/Icon';")
    if 'Star' in uses: imp.append("import { Star } from '@/components/Star';")
    if 'PlayerCard' in uses: imp.append("import { PlayerCard } from '@/components/PlayerCard';")
    imp.append("import { useDC } from '@/lib/dc';")
    imp.append(f"import {{ vals, tick }} from './{name}.vals';")
    if css_file: imp.append(f"import './{name}.css';")
    if extra_imports: imp.append(extra_imports)
    return ("'use client';\n\n/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */\n"
            + '\n'.join(imp)
            + f"\n\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nexport function {name}View(props: {props_type}) {{\n  const self = useDC(props, tick);\n  // eslint-disable-next-line @typescript-eslint/no-explicit-any\n  const v: any = vals(self);\n  return (\n    <>{body}</>\n  );\n}}\n")


def gen_page(board, name, route, title, desc):
    xdc, css, sc = parts(f'{SRC}/{board}.dc.html')
    H.LOOPVARS.clear()
    body, uses = H.convert(xdc, H.COMMON)
    d = f'{OUT}/src/views/{name}'
    os.makedirs(d, exist_ok=True)
    open(f'{d}/{name}.vals.js', 'w').write(js_logic(sc))
    open(f'{d}/{name}.vals.d.ts', 'w').write('/* eslint-disable @typescript-eslint/no-explicit-any */\nexport const tick: boolean;\nexport function vals(self: any): any;\n')
    if css: open(f'{d}/{name}.css', 'w').write(css + '\n')
    open(f'{d}/{name}View.tsx', 'w').write(view_tsx(name, body, uses, bool(css)))
    pd = f'{OUT}/src/app/{route}' if route else f'{OUT}/src/app'
    os.makedirs(pd, exist_ok=True)
    meta_title = title if route else {'absolute': title}
    open(f'{pd}/page.tsx', 'w').write(
        f"import type {{ Metadata }} from 'next';\nimport {{ {name}View }} from '@/views/{name}/{name}View';\n\n"
        f"export const metadata: Metadata = {{ title: {json.dumps(meta_title, ensure_ascii=False)}, description: {json.dumps(desc, ensure_ascii=False)} }};\n\n"
        (f"export default function Page() {{\n  return <{name}View />;\n}}\n" if name != 'Home' else "export default function Page() {\n  return (\n    <>\n      <HomeView />\n      <HomeMotion />\n    </>\n  );\n}\n"))
    if name == 'Home':
        fp = f'{pd}/page.tsx'
        open(fp, 'w').write(open(fp).read().replace("from '@/views/Home/HomeView';", "from '@/views/Home/HomeView';\nimport { HomeMotion } from '@/components/HomeMotion';"))


for p in PAGES:
    gen_page(*p)

# components: PlayerCard, Header, Footer
def gen_comp(board, name, props_type):
    xdc, css, sc = parts(f'{SRC}/{board}.dc.html')
    H.LOOPVARS.clear()
    body, uses = H.convert(xdc, H.COMMON)
    d = f'{OUT}/src/views/{name}'
    os.makedirs(d, exist_ok=True)
    open(f'{d}/{name}.vals.js', 'w').write(js_logic(sc))
    open(f'{d}/{name}.vals.d.ts', 'w').write('/* eslint-disable @typescript-eslint/no-explicit-any */\nexport const tick: boolean;\nexport function vals(self: any): any;\n')
    if css: open(f'{d}/{name}.css', 'w').write(css + '\n')
    open(f'{d}/{name}View.tsx', 'w').write(view_tsx(name, body, uses, bool(css), props_type=props_type))

gen_comp('PlayerCard', 'PlayerCardInner', '{ person?: unknown }')
gen_comp('WebHeader', 'Header', '{ active?: string }')
gen_comp('WebFooter', 'Footer', '{}')
print('ok')
