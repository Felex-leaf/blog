(self['webpackChunk'] = self['webpackChunk'] || []).push([
    [571],
    {
        92317: function (e) {
            e.exports = { container: 'container___2FSFc' };
        },
        24416: function (e, n, t) {
            'use strict';
            t.r(n),
                t.d(n, {
                    default: function () {
                        return f;
                    },
                });
            var c = t(57337),
                l = t(42600),
                r = t(19228),
                a = t(67294),
                s = t(92317),
                u = t.n(s),
                i = t(85893),
                o = 5;
            function f() {
                var e = null,
                    n = null,
                    t = (0, a.useState)(5),
                    s = (0, c.Z)(t, 2),
                    f = s[0],
                    d = s[1];
                return (
                    (0, a.useEffect)(
                        () => (
                            (e = setTimeout(() => {
                                (0, r.cW)(l.N.HOME);
                            }, 5e3)),
                            (n = setInterval(() => {
                                d(o > 0 ? o - 1 : 0), o--;
                            }, 1e3)),
                            () => {
                                e && clearTimeout(e), n && clearInterval(n), (o = 5);
                            }
                        ),
                        [],
                    ),
                    (0, i.jsx)('div', {
                        className: u().container,
                        children: (0, i.jsxs)('h1', {
                            className: u().title,
                            children: [
                                f,
                                '\u79d2\u540e\uff0c',
                                (0, i.jsx)('a', {
                                    onClick: r.cW.bind(null, l.N.HOME),
                                    children: '\u8fd4\u56de\u9996\u9875',
                                }),
                            ],
                        }),
                    })
                );
            }
        },
    },
]);
