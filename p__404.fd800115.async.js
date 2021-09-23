(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [6],
    {
        GEoZ: function (e, n, t) {
            'use strict';
            t.r(n),
                t.d(n, 'default', function () {
                    return b;
                });
            var c = t('tJVT'),
                a = t('nxO9'),
                r = t('0lfv'),
                i = t('q1tI'),
                l = t('fROf'),
                s = t.n(l),
                o = t('nKUr'),
                u = 5;
            function b() {
                var e = null,
                    n = null,
                    t = Object(i['useState'])(5),
                    l = Object(c['a'])(t, 2),
                    b = l[0],
                    f = l[1];
                return (
                    Object(i['useEffect'])(
                        () => (
                            (e = setTimeout(() => {
                                Object(r['b'])(a['a'].HOME);
                            }, 5e3)),
                            (n = setInterval(() => {
                                f(u > 0 ? u - 1 : 0), u--;
                            }, 1e3)),
                            () => {
                                e && clearTimeout(e), n && clearInterval(n), (u = 5);
                            }
                        ),
                        [],
                    ),
                    Object(o['jsx'])('div', {
                        className: s.a.container,
                        children: Object(o['jsxs'])('h1', {
                            className: s.a.title,
                            children: [
                                b,
                                '\u79d2\u540e\uff0c',
                                Object(o['jsx'])('a', {
                                    onClick: r['b'].bind(null, a['a'].HOME),
                                    children: '\u8fd4\u56de\u9996\u9875',
                                }),
                            ],
                        }),
                    })
                );
            }
        },
        fROf: function (e, n, t) {
            e.exports = { container: 'container___2FSFc' };
        },
    },
]);
