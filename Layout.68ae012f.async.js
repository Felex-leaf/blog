(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [5],
    {
        lpNK: function (e, a, r) {
            'use strict';
            r.r(a),
                r.d(a, 'default', function () {
                    return j;
                });
            r('lUTK');
            var n = r('BvKs'),
                t = r('tJVT'),
                s = r('TSYQ'),
                c = r.n(s),
                _ = r('q1tI'),
                o = r('z1Vm'),
                d = r.n(o),
                i = r('nKUr');
            function m(e) {
                var a = Object(_['useState'])(!1),
                    r = Object(t['a'])(a, 2),
                    n = r[0],
                    s = r[1],
                    o = e.onClick,
                    m = e.style,
                    u = e.type,
                    b = void 0 === u ? 1 : u,
                    l = e.className,
                    h = e.isActive,
                    j = () => {
                        s(!n), o && o(!n);
                    };
                return Object(i['jsxs'])('div', {
                    className: c()([
                        d.a.dontRHamburger,
                        l,
                        { [d.a.isActive]: null !== h && void 0 !== h ? h : n },
                    ]),
                    onClick: j,
                    id: d.a['hamburger'.concat(b)],
                    style: m,
                    children: [
                        Object(i['jsx'])('span', { className: d.a.dontRLine }),
                        Object(i['jsx'])('span', { className: d.a.dontRLine }),
                        Object(i['jsx'])('span', { className: d.a.dontRLine }),
                    ],
                });
            }
            var u = r('nxO9'),
                b = r('0lfv'),
                l = r('u/ki'),
                h = r.n(l);
            function j(e) {
                var a = e.route.routes,
                    r = e.location,
                    s = e.children,
                    o = Object(_['useState'])(''),
                    d = Object(t['a'])(o, 2),
                    l = d[0],
                    j = d[1],
                    g = Object(_['useState'])(!1),
                    O = Object(t['a'])(g, 2),
                    p = O[0],
                    v = O[1];
                Object(_['useEffect'])(() => {
                    j(r.pathname);
                }, [r.pathname]);
                var x = (e) => {
                        v(e), (document.body.style.overflow = e ? 'hidden' : 'auto');
                    },
                    R = (e) => {
                        Object(b['b'])(e), p && (v(!1), (document.body.style.overflow = 'auto'));
                    };
                return Object(i['jsxs'])('main', {
                    className: h.a.container,
                    children: [
                        Object(i['jsx'])('header', {
                            className: h.a.dontRHeader,
                            children: Object(i['jsxs'])('div', {
                                className: c()(['typeArea', h.a.warp]),
                                children: [
                                    Object(i['jsx'])('h1', {
                                        className: c()([h.a.logo, 'scaleAnm']),
                                        style: { fontSize: 32 },
                                        onClick: b['b'].bind(null, u['a'].HOME),
                                        children: 'Felex',
                                    }),
                                    Object(i['jsx'])('div', {
                                        className: c()([{ [h.a.dontRMenuModal]: p }, h.a.menuWrap]),
                                        children: Object(i['jsx'])(n['a'], {
                                            theme: 'dark',
                                            mode: 'horizontal',
                                            selectedKeys: [l],
                                            children:
                                                a &&
                                                a.map(
                                                    (e) =>
                                                        !e.hidden &&
                                                        Object(i['jsx'])(
                                                            n['a'].Item,
                                                            {
                                                                onClick: R.bind(null, e.path),
                                                                children: e.name,
                                                            },
                                                            e.path,
                                                        ),
                                                ),
                                        }),
                                    }),
                                    Object(i['jsx'])(m, {
                                        className: h.a.dontRhamburger,
                                        onClick: x,
                                        isActive: p,
                                    }),
                                ],
                            }),
                        }),
                        Object(i['jsx'])('div', { className: h.a.dontRDiv }),
                        Object(i['jsx'])('main', { className: h.a.main, children: s }),
                    ],
                });
            }
        },
        'u/ki': function (e, a, r) {
            e.exports = {
                dontRHeader: 'dontRHeader___2LNs9',
                warp: 'warp___wBxx8',
                menuWrap: 'menuWrap___jd-3g',
                dontRMenuModal: 'dontRMenuModal___3nhUU',
                dontRhamburger: 'dontRhamburger___1ZT7D',
                logo: 'logo___1jTDk',
                main: 'main___1XX41',
                dontRDiv: 'dontRDiv___1x577',
            };
        },
        z1Vm: function (e, a, r) {
            e.exports = {
                dontRHamburger: 'dontRHamburger___1t_wu',
                dontRLine: 'dontRLine___2EVqt',
                hamburger1: 'hamburger1___3V1N3',
                isActive: 'isActive___2Qchd',
                hamburger2: 'hamburger2___rdA9T',
                hamburger3: 'hamburger3___Obw5S',
                hamburger4: 'hamburger4___1KsID',
                hamburger5: 'hamburger5___2t3K9',
                hamburger6: 'hamburger6___16UdI',
                hamburger7: 'hamburger7___1rhCG',
                hamburger8: 'hamburger8___2Kz8J',
                hamburger9: 'hamburger9___3AdxG',
                hamburger10: 'hamburger10___3KxAN',
                hamburger11: 'hamburger11___3YZBP',
                smallbig: 'smallbig___3Zle9',
                hamburger12: 'hamburger12___3WsPn',
            };
        },
    },
]);
