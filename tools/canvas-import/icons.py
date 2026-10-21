import json, re, glob, sys
pack = json.load(open(sys.argv[1])); out = sys.argv[2]
names = set()
for f in glob.glob(out + '/src/**/*.tsx', recursive=True):
    names |= set(re.findall(r'<Icon name="([a-z0-9-]+)"', open(f).read()))
for f in glob.glob(out + '/src/**/*.js', recursive=True):
    s = open(f).read()
    names |= {x for x in re.findall(r"'([a-z0-9-]+)'", s) if x in pack and re.search(r"icon|Icon", s)}
names = sorted(n for n in names if n in pack)
body = ',\n'.join(f'  {json.dumps(n)}: {json.dumps(pack[n], separators=(",", ":"))}' for n in names)
open(out + '/src/components/icons.ts', 'w').write('/* Сгенерировано: только используемые на сайте иконки Hugeicons (stroke rounded). */\nexport const icons = {\n' + body + '\n} as const;\n')
print(len(names))
