(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [5],
    {
        lpNK: function (e, a, n) {
            'use strict';
            n.r(a),
                n.d(a, 'default', function () {
                    return p;
                });
            n('lUTK');
            var t = n('BvKs'),
                c = n('tJVT'),
                s = n('TSYQ'),
                i = n.n(s),
                l = n('q1tI'),
                r = n('nxO9'),
                o = n('0lfv'),
                d = n('u/ki'),
                h = n.n(d),
                j = n('nKUr');
            function p(e) {
                var a = e.route.routes,
                    n = e.location,
                    s = e.children,
                    d = Object(l['useState'])(''),
                    p = Object(c['a'])(d, 2),
                    m = p[0],
                    u = p[1];
                return (
                    Object(l['useEffect'])(() => {
                        u(n.pathname);
                    }, [n.pathname]),
                    Object(j['jsxs'])('main', {
                        className: h.a.container,
                        style: { paddingTop: 60 },
                        children: [
                            Object(j['jsx'])('header', {
                                className: h.a.header,
                                children: Object(j['jsxs'])('div', {
                                    className: i()(['typeArea', h.a.warp]),
                                    children: [
                                        Object(j['jsx'])('h1', {
                                            className: i()([h.a.logo, 'scaleAnm']),
                                            style: { fontSize: 32 },
                                            onClick: o['b'].bind(null, r['a'].HOME),
                                            children: 'Felex',
                                        }),
                                        Object(j['jsx'])(t['a'], {
                                            theme: 'dark',
                                            mode: 'horizontal',
                                            selectedKeys: [m],
                                            children:
                                                a &&
                                                a.map(
                                                    (e) =>
                                                        !e.hidden &&
                                                        Object(j['jsx'])(
                                                            t['a'].Item,
                                                            {
                                                                onClick: o['b'].bind(null, e.path),
                                                                children: e.name,
                                                            },
                                                            e.path,
                                                        ),
                                                ),
                                        }),
                                    ],
                                }),
                            }),
                            Object(j['jsx'])('main', { className: h.a.main, children: s }),
                        ],
                    })
                );
            }
        },
        'u/ki': function (e, a, n) {
            e.exports = {
                header: 'header___1jpXJ',
                warp: 'warp___wBxx8',
                logo: 'logo___1jTDk',
                main: 'main___1XX41',
            };
        },
    },
]);
