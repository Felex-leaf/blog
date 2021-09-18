(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [6],
    {
        '0lfv': function (n, t, e) {
            'use strict';
            e.d(t, 'a', function () {
                return o;
            });
            var a = e('nxO9'),
                c = e('9kvl'),
                r = (n) => '/blog' + n,
                i = new Audio();
            i.src = r('/snow.mp3');
            var o = function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                if (n) {
                    var t = c['a'].location;
                    t.pathname.includes(n) ||
                        (n === a['a'].SNOW ? (i.load(), i.play()) : i.pause(), c['a'].push(n));
                }
            };
        },
        GEoZ: function (n, t, e) {
            'use strict';
            e.r(t),
                e.d(t, 'default', function () {
                    return f;
                });
            var a = e('tJVT'),
                c = e('nxO9'),
                r = e('0lfv'),
                i = e('q1tI'),
                o = e('fROf'),
                s = e.n(o),
                u = e('nKUr'),
                l = 5;
            function f() {
                var n = null,
                    t = null,
                    e = Object(i['useState'])(5),
                    o = Object(a['a'])(e, 2),
                    f = o[0],
                    O = o[1];
                return (
                    Object(i['useEffect'])(
                        () => (
                            (n = setTimeout(() => {
                                Object(r['a'])(c['a'].HOME);
                            }, 5e3)),
                            (t = setInterval(() => {
                                O(l > 0 ? l - 1 : 0), l--;
                            }, 1e3)),
                            () => {
                                n && clearTimeout(n), t && clearInterval(t);
                            }
                        ),
                        [],
                    ),
                    Object(u['jsx'])('div', {
                        className: s.a.container,
                        children: Object(u['jsxs'])('h1', {
                            className: s.a.title,
                            children: [
                                f,
                                '\u79d2\u540e\uff0c',
                                Object(u['jsx'])('a', {
                                    onClick: r['a'].bind(null, c['a'].HOME),
                                    children: '\u8fd4\u56de\u9996\u9875',
                                }),
                            ],
                        }),
                    })
                );
            }
        },
        fROf: function (n, t, e) {
            n.exports = { container: 'container___2FSFc' };
        },
        nxO9: function (n, t, e) {
            'use strict';
            e.d(t, 'a', function () {
                return a;
            });
            var a = {
                HOME: '/home',
                RANKING: '/ranking',
                STAR: '/star',
                THREE: '/3d',
                SNOW: '/snow',
            };
        },
    },
]);
