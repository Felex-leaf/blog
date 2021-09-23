(self['webpackChunk'] = self['webpackChunk'] || []).push([
    [735],
    {
        84328: function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, {
                    default: function () {
                        return h;
                    },
                });
            var a = n(57337),
                o = n(67294),
                r = n(18130),
                i = n.n(r),
                u = n(85893),
                d = [],
                s = null,
                c = null,
                f = new Image(),
                l = 0;
            function h() {
                var e = (0, o.useState)(!1),
                    t = (0, a.Z)(e, 2),
                    n = t[0],
                    r = t[1],
                    i = (0, o.useState)(document.body.offsetHeight - 60),
                    h = (0, a.Z)(i, 2),
                    m = h[0],
                    w = h[1],
                    g = (0, o.useState)(document.body.offsetWidth),
                    b = (0, a.Z)(g, 2),
                    y = b[0],
                    p = b[1],
                    v = (0, o.useRef)(null);
                function x(e, t) {
                    M(t), I(e, t), k(e), (l = window.requestAnimationFrame(x.bind(null, e, t)));
                }
                function M(e) {
                    d.length < 100 &&
                        d.push({
                            x: Math.random() * e,
                            y: 0,
                            speed: 2 + 1 * Math.random(),
                            radius: 3 + 2 * Math.random(),
                        });
                }
                function I(e, t) {
                    d.forEach((n) => {
                        (n.y += n.speed),
                            n.y > e &&
                                ((n.x = Math.random() * t),
                                (n.y = 0),
                                (n.speed = 2 + 1 * Math.random()),
                                (n.radius = 3 + 4 * Math.random()));
                    });
                }
                function k(e) {
                    var t;
                    s &&
                        f &&
                        (null === (t = s) || void 0 === t || t.drawImage(f, 0, 0, 2 * e, e),
                        d.forEach((e) => {
                            s &&
                                (s.beginPath(),
                                s.arc(e.x, e.y, e.radius, 0, 2 * Math.PI),
                                s.closePath(),
                                (s.fillStyle = 'white'),
                                s.fill());
                        }));
                }
                return (
                    (0, o.useEffect)(() => {
                        var e = v.current;
                        if (e)
                            return (
                                (s = e.getContext('2d')),
                                x(m, y),
                                window.addEventListener('resize', () => {
                                    c && clearTimeout(c),
                                        (c = setTimeout(() => {
                                            if (s) {
                                                var t = e.toDataURL(),
                                                    a = document.body.offsetWidth,
                                                    o = document.body.offsetHeight - 60;
                                                s.scale(y / a, m / o);
                                                var i = new Image();
                                                (i.onload = function () {
                                                    s &&
                                                        (s.drawImage(i, 0, 0, a, o),
                                                        l && cancelAnimationFrame(l),
                                                        x(o, a),
                                                        r(!n),
                                                        w(o),
                                                        p(a));
                                                }),
                                                    (i.src = t);
                                            }
                                        }, 500));
                                }),
                                () => {
                                    (s = null), c && clearTimeout(c), l && cancelAnimationFrame(l);
                                }
                            );
                    }, []),
                    (0, u.jsx)(u.Fragment, {
                        children: (0, u.jsx)('canvas', {
                            ref: v,
                            height: m,
                            width: y,
                            style: { overflow: 'hidden' },
                        }),
                    })
                );
            }
            f.src = i();
        },
        18130: function (e, t, n) {
            e.exports = n.p + 'static/snow.4bfb6b1e.jpg';
        },
    },
]);
