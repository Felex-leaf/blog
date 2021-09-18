(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [5],
    {
        '0lfv': function (e, a, n) {
            'use strict';
            n.d(a, 'a', function () {
                return s;
            });
            var t = n('nxO9'),
                c = n('9kvl'),
                r = (e) => '/blog' + e,
                i = new Audio();
            i.src = r('/snow.mp3');
            var s = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                if (e) {
                    var a = c['a'].location;
                    a.pathname.includes(e) ||
                        (e === t['a'].SNOW ? (i.load(), i.play()) : i.pause(), c['a'].push(e));
                }
            };
        },
        lpNK: function (e, a, n) {
            'use strict';
            n.r(a),
                n.d(a, 'default', function () {
                    return p;
                });
            n('lUTK');
            var t = n('BvKs'),
                c = n('tJVT'),
                r = n('TSYQ'),
                i = n.n(r),
                s = n('q1tI'),
                o = n('nxO9'),
                l = n('0lfv'),
                d = n('u/ki'),
                u = n.n(d),
                h = n('nKUr');
            function p(e) {
                var a = e.route.routes,
                    n = (e.history, e.location),
                    r = e.children,
                    d = Object(s['useState'])(''),
                    p = Object(c['a'])(d, 2),
                    m = p[0],
                    j = p[1];
                return (
                    Object(s['useEffect'])(() => {
                        j(n.pathname);
                    }, [n.pathname]),
                    Object(h['jsxs'])('main', {
                        className: u.a.container,
                        children: [
                            Object(h['jsx'])('header', {
                                className: u.a.header,
                                children: Object(h['jsxs'])('div', {
                                    className: i()(['typeArea', u.a.warp]),
                                    children: [
                                        Object(h['jsx'])('h1', {
                                            className: i()([u.a.logo, 'scaleAnm']),
                                            onClick: l['a'].bind(null, o['a'].HOME),
                                            children: 'Felex',
                                        }),
                                        Object(h['jsx'])(t['a'], {
                                            theme: 'dark',
                                            mode: 'horizontal',
                                            selectedKeys: [m],
                                            children:
                                                a &&
                                                a.map(
                                                    (e) =>
                                                        !e.hidden &&
                                                        Object(h['jsx'])(
                                                            t['a'].Item,
                                                            {
                                                                onClick: l['a'].bind(null, e.path),
                                                                children: e.name,
                                                            },
                                                            e.path,
                                                        ),
                                                ),
                                        }),
                                    ],
                                }),
                            }),
                            Object(h['jsx'])('main', { className: u.a.main, children: r }),
                        ],
                    })
                );
            }
        },
        nxO9: function (e, a, n) {
            'use strict';
            n.d(a, 'a', function () {
                return t;
            });
            var t = {
                HOME: '/home',
                RANKING: '/ranking',
                STAR: '/star',
                THREE: '/3d',
                SNOW: '/snow',
            };
        },
        'u/ki': function (e, a, n) {
            e.exports = {
                container: 'container___BwdS6',
                header: 'header___1jpXJ',
                warp: 'warp___wBxx8',
                logo: 'logo___1jTDk',
                main: 'main___1XX41',
            };
        },
    },
]);
