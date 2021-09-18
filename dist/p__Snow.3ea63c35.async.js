(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [10],
    {
        J9gd: function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, 'default', function () {
                    return s;
                });
            var o = n('q1tI'),
                a = n('gXu6'),
                d = n.n(a),
                r = n('nKUr'),
                i = [],
                u = null,
                c = new Image();
            function s() {
                var e = Object(o['useRef'])(null),
                    t = Object(o['useMemo'])(
                        () => document.body.offsetWidth,
                        [document.body.offsetWidth],
                    ),
                    n = Object(o['useMemo'])(
                        () => document.body.offsetHeight - 60,
                        [document.body.offsetHeight],
                    );
                function a() {
                    d(), s(), f(), window.requestAnimationFrame(a);
                }
                function d() {
                    i.length < 200 &&
                        i.push({
                            x: Math.random() * t,
                            y: 0,
                            speed: 2 + 1 * Math.random(),
                            radius: 3 + 4 * Math.random(),
                        });
                }
                function s() {
                    i.forEach((e) => {
                        (e.y += e.speed),
                            e.y > n &&
                                ((e.x = Math.random() * t),
                                (e.y = 0),
                                (e.speed = 2 + 1 * Math.random()),
                                (e.radius = 3 + 4 * Math.random()));
                    });
                }
                function f() {
                    var e;
                    u &&
                        c &&
                        (null === (e = u) || void 0 === e || e.drawImage(c, 0, 0, t, n),
                        i.forEach((e) => {
                            u &&
                                (u.beginPath(),
                                u.arc(e.x, e.y, e.radius, 0, 2 * Math.PI),
                                u.closePath(),
                                (u.fillStyle = 'white'),
                                u.fill());
                        }));
                }
                return (
                    Object(o['useEffect'])(() => {
                        var t = e.current;
                        t && ((u = t.getContext('2d')), window.requestAnimationFrame(a));
                    }, []),
                    Object(r['jsx'])(r['Fragment'], {
                        children: Object(r['jsx'])('canvas', {
                            ref: e,
                            height: n,
                            width: t,
                            style: { overflow: 'hidden' },
                        }),
                    })
                );
            }
            c.src = d.a;
        },
        gXu6: function (e, t, n) {
            e.exports = n.p + 'static/snow.4bfb6b1e.jpg';
        },
    },
]);
