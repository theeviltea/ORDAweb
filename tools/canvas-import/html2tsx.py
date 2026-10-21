"""Convert canvas .dc.html markup (the x-dc body) into JSX for the ORDA web repo."""
import re, sys, json
from html.parser import HTMLParser

BLOB = {
 '0745645d2aecce7d63ebe81f3d5ad107': 'news-trio.webp', '08afe8a040f25cc1ddaa650f2e960143': 'jacket.webp', '0d2f2d7c50a0d77a1ee5c4d5cb01f341': 'avatar.webp',
 '1ea5bd152c7e4e312fc1be4cf9678acd': 'club-tobyl.webp', '24929f48786bfc6ebbbe70b47b584b4f': 'photo-action.webp', '25e29e12f7f93b02c8537aebe1770bd0': 'team-cutout.webp',
 '2f7305bce77367049cd8639226678a7b': 'jersey.webp', '3567dd74e0e12b90534d956c94fee54a': 'training-kit.webp', '3fd3cd209aa915a6df09337514208806': 'photo-fans.webp',
 '42132e9425566cbb39dfc39dbb8cbefe': 'flag.webp', '422b1260a83e7661a19f69e845f35b78': 'player-shaizada.webp', '451a65d4c728c0c123a8b6ee77c6feaf': 'player-astanov.webp',
 '45a77801c66e8a02023d98ffdc0f3641': 'mug.webp', '57cf016499bd7d0b4981f6ded45e24bd': 'video-training.webp', '5cc82d38a94b6843191f09c25fcd5f6c': 'club-kairat.webp',
 '6ac67cb63f6032b91fdcf04bb39e891d': 'coin.webp', '74b41e4683ce9ffa29401db2f66c3ca3': 'photo-solo.webp', '7502cdf2745c18b64e8a4e94831f7625': 'video-goal.webp',
 '7d7e72eeb47455c24a3a0c474a0baf0c': 'backpack.webp', '8634a54b8936feceb41e130402de2636': 'media-natel.webp', '91c0078186a4de355c825a6165877934': 'news-lineup.webp',
 '941d5fa33c25469c18bc36d52fadc5ee': 'hoodie.webp', '976f007ac43f66a04e4744a32d9a984c': 'news-shout.webp', 'a178dcb54fd6277837303f6fefd67927': 'media-team.webp',
 'aeb7cf2c19d2c9d049e515305eb0636c': 'player-amir.webp', 'b6ab680e70d11388a1dfd6d58b9e062a': 'people/amanovich.webp', 'b7729bb8398612e01112f23e6b534321': 'photo-smoke.webp',
 'e041b4e885b592102cba4c521fd93656': 'news-teamphoto.webp', 'e1c3eea64e739fdfe176bcd6f53d1aa7': 'trophy.webp', 'e3f6fff2b13b30b00b4a145794a08b63': 'news-huddle.webp',
 'e870cd650ed647fdb24d5a26e1d0d2d1': 'club-astana.webp', 'f8ea0e318b414cca2faba5731dac4d2e': 'news-stadium.webp', '4168d6d5fedba2ea760f3193fa042c58': 'icon3d-interactive.png',
 '4d67ab61286e744506c62d829f1e53db': 'crest.png', '6974ca45c15be3a51d29ba644593c128': 'icon3d-quiz.png', '7be8c8b03264166eb514582a06b625f2': 'sponsor-erg.png',
 '7c04acf1080dde2562f4bfbb0af16813': 'sponsor-eurasia.png', '868fedd7e2c0c2e7b802528b42433680': 'sponsor-integra.png', 'a461dde96634135f6084c23d62db82a2': 'icon3d-contest.png',
 'a51849775be2a9d841522a04b4ce8080': 'icon3d-results.png', 'c9e29517ee64fc85fee10710a4dd201d': 'icon3d-poll.png', 'ca6a7a1ab81619d1a06dd7d22efdd32c': 'icon3d-tasks.png',
 '1075887fbca7645452c2a7bcf7abc8f7': 'news-bg.svg', 'e661484092743226ca8f5450b5a024bd': 'hero-flag.webp', '4a1d46527a3920434ba2d04b53a3aa2f': 'crest-white.svg',
}
ROUTE = {
 'WebMain': '/', 'WebTeam': '/team', 'WebMatches': '/matches', 'WebMatchesResults': '/matches', 'WebMatchesTable': '/matches', 'WebMedia': '/media',
 'WebShop': '/shop', 'WebProduct': '/shop/product', 'WebShopOrders': '/shop/orders', 'WebFans': '/fans', 'WebProfile': '/profile',
 'WebProfileTickets': '/profile', 'WebProfileOrders': '/profile', 'WebProfileAchievements': '/profile', 'WebProfileData': '/profile', 'WebProfileSettings': '/profile',
 'Tickets': '/tickets', 'WebTickets': '/tickets', 'Lineup': '/matches/lineup', 'WebLineup': '/matches/lineup', 'Matches': '/matches', 'MatchesTable': '/matches', 'Article': '/news/article', 'News': '/news', 'StoryInterview': '/media', 'StoryLongread': '/media',
 'Interviews': '/media', 'Videos': '/media', 'VideoPlayer': '/media', 'Photos': '/media/photos', 'PhotoAlbum': '/media/photos/album', 'WebPhotos': '/media/photos', 'WebPhotoAlbum': '/media/photos/album', 'PressConf': '/media', 'MomentViewer': '/media',
 'Login': '/profile', 'Support': '/profile', 'TicketQR': '/profile', 'NewPassword': '/profile', 'Achievements': '/profile',
 'Quizzes': '/fans', 'Contests': '/fans', 'Contest': '/fans', 'ContestApplyFilled': '/fans', 'ContestWinners': '/fans', 'Polls': '/fans', 'Predictions': '/fans', 'Tasks': '/fans',
 'Interactive': '/fans', 'Offer': '/fans', 'ForYou': '/fans', 'FanZone': '/fans', 'Product': '/shop/product', 'ProductNoPhoto': '/shop/product', 'ShopOrders': '/shop/orders',
 'Shop': '/shop', 'Team': '/team', 'Player': '/team/player',
 'WebPlayer': '/team/player', 'WebNews': '/news', 'WebArticle': '/news/article',
}
SVG_ATTR = {'viewbox': 'viewBox', 'preserveaspectratio': 'preserveAspectRatio', 'fill-opacity': 'fillOpacity', 'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
            'stroke-linejoin': 'strokeLinejoin', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'xmlns': None, 'stop-color': 'stopColor', 'gradientunits': 'gradientUnits',
            'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex', 'onclick': 'onClick', 'colspan': 'colSpan', 'rowspan': 'rowSpan', 'readonly': 'readOnly',
            'maxlength': 'maxLength', 'checked': 'defaultChecked', 'srcset': 'srcSet', 'datetime': 'dateTime'}
VOID = {'img', 'input', 'br', 'hr', 'path', 'circle', 'rect', 'source', 'meta', 'link', 'stop'}
STAR = 'M12 0C12.8 8 16 11.2 24 12 16 12.8 12.8 16 12 24 11.2 16 8 12.8 0 12 8 11.2 11.2 8 12 0z'
HOLE = re.compile(r'\{\{\s*([^}]+?)\s*\}\}')
LOOPVARS = []
LIT = {'true', 'false', 'null', 'undefined'}


def fx(expr):
    """prefix top-level render values with v. (loop variables stay as-is)"""
    expr = expr.strip()
    root = re.split(r'[.\[]', expr, 1)[0]
    if root in LOOPVARS or root in LIT or root == '$index' or re.fullmatch(r'-?\d+(\.\d+)?', expr) or expr.startswith(("'", '"')):
        return expr.replace('$index', LOOPVARS[-1] + 'Idx') if root == '$index' else expr
    return 'v.' + expr


class Node:
    def __init__(s, tag, attrs, parent=None):
        s.tag, s.attrs, s.kids, s.parent = tag, attrs, [], parent


class P(HTMLParser):
    def __init__(s):
        super().__init__(convert_charrefs=True)
        s.root = Node('#root', []); s.cur = s.root
    def handle_starttag(s, tag, attrs):
        n = Node(tag, attrs, s.cur); s.cur.kids.append(n)
        if tag not in VOID: s.cur = n
    def handle_startendtag(s, tag, attrs):
        s.cur.kids.append(Node(tag, attrs, s.cur))
    def handle_endtag(s, tag):
        if tag in VOID: return
        c = s.cur
        while c is not s.root and c.tag != tag: c = c.parent
        if c is not s.root: s.cur = c.parent
    def handle_data(s, d):
        s.cur.kids.append(d)


def camel(p):
    p = p.strip()
    if p.startswith('--'): return json.dumps(p, ensure_ascii=False)
    parts = p.split('-')
    if parts[0] == '': parts = parts[1:]; parts[0] = parts[0].capitalize()  # -webkit-
    return parts[0] + ''.join(x.capitalize() for x in parts[1:])


def blobfix(v):
    return re.sub(r"/_blob/([0-9a-f]{32})", lambda m: '/img/' + BLOB.get(m.group(1), m.group(1)), v)


def jsval(v):
    """attribute/style value that may contain holes -> JS expression string"""
    v = blobfix(v)
    m = HOLE.fullmatch(v.strip())
    if m: return fx(m.group(1))
    if HOLE.search(v):
        return '`' + HOLE.sub(lambda m: '${' + fx(m.group(1)) + '}', v.replace('`', '\\`')) + '`'
    if '/img/' in v:
        return 'asset(' + json.dumps(v, ensure_ascii=False) + ')' if v.startswith('/img/') else '`' + re.sub(r"(/img/[^'\")\s]+)", lambda m: '${asset("' + m.group(1) + '")}', v) + '`'
    return json.dumps(v, ensure_ascii=False)


def style_obj(css):
    out = []
    for decl in re.split(r';(?![^(]*\))', css):
        if ':' not in decl: continue
        k, v = decl.split(':', 1)
        k = k.strip(); v = v.strip()
        if not k: continue
        key = camel(k)
        out = [o for o in out if not o.startswith(key + ': ')]
        out.append(f'{key}: {jsval(v)}')
    return '{{ ' + ', '.join(out) + ' }}'


def route(h):
    if h.startswith('#') or h.startswith('http') or h.startswith('mailto'): return h, False
    m = re.match(r'([A-Za-z0-9]+)\.dc\.html(#.*)?$', h)
    if not m: return h, False
    r = ROUTE.get(m.group(1), '/')
    return r + (m.group(2) or ''), True


def text(t, pre=False):
    if not t.strip():
        return ' ' if (' ' in t and '\n' not in t) else ''
    if HOLE.search(t):
        parts = HOLE.split(t)
        out = ''
        for i, p in enumerate(parts):
            if i % 2: out += '{' + fx(p) + '}'
            elif p: out += esc(p, pre)
        return out
    return esc(t, pre)


def esc(t, pre):
    if pre and '\n' in t:
        return '{' + json.dumps(t.strip('\n') if t.strip() else t, ensure_ascii=False) + '}'
    t = re.sub(r'\s+', ' ', t)
    if any(c in t for c in '{}<>'):
        return '{' + json.dumps(t, ensure_ascii=False) + '}'
    return t


class Emit:
    def __init__(s, comps):
        s.comps = comps  # dc-import name -> handler
        s.uses = set()
        s.loop = 0

    def attrs(s, n, tag):
        out = []
        style = None
        is_link = False
        for k, v in n.attrs:
            v = '' if v is None else v
            if k.startswith('hint-'): continue
            if k == 'style': style = v; continue
            if k == 'href' and tag == 'a':
                if HOLE.search(v):
                    is_link = True
                    out.append('href={route(' + jsval(v) + ')}')
                    continue
                h, internal = route(v)
                is_link = internal
                out.append(f'href="{h}"')
                continue
            kk = SVG_ATTR.get(k, k)
            if kk is None: continue
            if kk == 'defaultChecked': out.append('defaultChecked'); continue
            if kk.startswith('on') and not HOLE.fullmatch(v.strip()):
                continue
            if kk.startswith('on') and HOLE.fullmatch(v.strip()):
                out.append(f'{kk}={{{fx(HOLE.fullmatch(v.strip()).group(1))}}}'); continue
            if k in ('src',) or HOLE.search(v):
                out.append(f'{kk}={{{jsval(v)}}}'); continue
            out.append(f'{kk}={json.dumps(v, ensure_ascii=False)}')
        if style is not None:
            out.insert(0, 'style=' + style_obj(style))
        return out, is_link

    def node(s, n, ind=0):
        if isinstance(n, str):
            pre = False
            p = n and None
            return text(n)
        tag = n.tag
        pad = ''
        kids_pre = 'pre-line' in dict(n.attrs).get('style', '') or 'pre-wrap' in dict(n.attrs).get('style', '')
        if tag == 'sc-for':
            a = dict(n.attrs); lst = fx(HOLE.fullmatch(a['list'].strip()).group(1)); var = a.get('as', 'item')
            idx = var + 'Idx'
            LOOPVARS.append(var)
            inner = s.children(n, kids_pre)
            LOOPVARS.pop()
            s.uses.add('Fragment')
            return f'{{{lst}.map(({var}: any, {idx}: number) => (<Fragment key={{{idx}}}>{inner}</Fragment>))}}'
        if tag == 'sc-if':
            a = dict(n.attrs); cond = fx(HOLE.fullmatch(a['value'].strip()).group(1))
            return f'{{{cond} && (<>{s.children(n, kids_pre)}</>)}}'
        if tag == 'dc-import':
            a = dict(n.attrs); name = a['name']
            return s.comps[name](a, s)
        if tag == 'svg':
            paths = [k for k in n.kids if not isinstance(k, str)]
            if len(paths) == 1 and paths[0].tag == 'path' and dict(paths[0].attrs).get('d') == STAR:
                a = dict(n.attrs); pa = dict(paths[0].attrs)
                s.uses.add('Star')
                props = [f'w={{{a.get("width", 24)}}}', f'h={{{a.get("height", 24)}}}', f'fill={jsval(pa.get("fill", "#FFFFFF"))}']
                if pa.get('fill-opacity'): props.append(f'opacity={{{pa["fill-opacity"]}}}')
                if a.get('style'): props.append('style=' + style_obj(a['style']))
                if a.get('preserveaspectratio') != 'none': props.append('keepRatio')
                return '<Star ' + ' '.join(props) + ' />'
        attrs, is_link = s.attrs(n, tag)
        t = {'lineargradient': 'linearGradient', 'radialgradient': 'radialGradient', 'clippath': 'clipPath', 'foreignobject': 'foreignObject'}.get(tag, tag)
        if tag == 'a' and is_link:
            t = 'Link'; s.uses.add('Link')
        if tag == 'img': s.uses.add('asset')
        if any('asset(' in x for x in attrs): s.uses.add('asset')
        open_ = f'<{t}' + (' ' + ' '.join(attrs) if attrs else '')
        if tag in VOID:
            return open_ + ' />'
        inner = s.children(n, kids_pre)
        if not inner.strip() and tag not in ('textarea',):
            return open_ + ' />' if tag in ('span', 'div', 'svg', 'a', 'button', 'label', 'td', 'th', 'tr', 'section', 'figure') or True else open_ + f'></{t}>'
        return f'{open_}>{inner}</{t}>'

    def children(s, n, pre=False):
        out = ''
        for k in n.kids:
            if isinstance(k, str):
                out += text(k, pre)
            else:
                out += s.node(k)
        return out


def convert(html, comps):
    p = P(); p.feed(html)
    e = Emit(comps)
    body = e.children(p.root)
    return body, e.uses


# --- common dc-import handlers -------------------------------------------------
def h_icon(a, e):
    e.uses.add('Icon')
    props = []
    nm = a.get('icon', 'football')
    props.append(f'name={{{jsval(nm)}}}' if HOLE.search(nm) else f'name="{nm}"')
    for k in ('size', 'weight'):
        if k in a:
            props.append(f'{k}={{{fx(HOLE.fullmatch(a[k].strip()).group(1)) if HOLE.search(a[k]) else a[k]}}}')
    if 'color' in a: props.append(f'color={{{jsval(a["color"])}}}' if HOLE.search(a['color']) else f'color="{a["color"]}"')
    if 'filled' in a: props.append('filled')
    return '<Icon ' + ' '.join(props) + ' />'


def h_player(a, e):
    e.uses.add('PlayerCard')
    return f'<PlayerCard person={{{fx(HOLE.fullmatch(a["person"].strip()).group(1))}}} />'


def h_drop(a, e):
    return ''


COMMON = {'Icon': h_icon, 'PlayerCard': h_player, 'WebHeader': h_drop, 'WebFooter': h_drop}
