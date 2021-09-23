(self['webpackChunk'] = self['webpackChunk'] || []).push([
    [281],
    {
        79432: function (a, e, n) {
            'use strict';
            n.r(e),
                n.d(e, {
                    default: function () {
                        return x;
                    },
                });
            n(20228);
            var i = n(11382),
                r = n(57337),
                t = n(67294),
                l = n(2212),
                o = n(36194),
                s = n(52886),
                m = n(17047),
                c = n(85893),
                d = null,
                h = null,
                p = null,
                u = null,
                _ = null,
                w = (a, e, n, i, r) => {
                    var t = new o.ZP.Tween({
                        x1: a.x,
                        y1: a.y,
                        z1: a.z,
                        x2: e.x,
                        y2: e.y,
                        z2: e.z,
                    });
                    t.to({ x1: n.x, y1: n.y, z1: n.z, x2: i.x, y2: i.y, z2: i.z }, 2e3),
                        t.onUpdate((a) => {
                            h &&
                                _ &&
                                (h.position.set(a.x1, a.y1, a.z1),
                                (_.target.x = a.x2),
                                (_.target.y = a.y2),
                                (_.target.z = a.z2),
                                _.update());
                        }),
                        t.onComplete(() => {
                            _ && (_.enabled = !0), r && r();
                        }),
                        t.easing(o.ZP.Easing.Cubic.InOut),
                        t.start();
                    var l = () => {
                        requestAnimationFrame(l), o.ZP.update();
                    };
                    l();
                },
                g = [{ x: 0.8, y: 1, z: 0.4, frame: 1 }],
                k = [],
                v = { x: 0, y: 0, z: 3 },
                y = { x: 0, y: 0, z: 0 };
            function x() {
                var a = (0, t.useRef)(null),
                    e = (0, t.useState)(!0),
                    n = (0, r.Z)(e, 2),
                    o = n[0],
                    x = n[1],
                    b = () => {
                        (d = new l.xsS()),
                            (h = new l.cPb(
                                90,
                                document.body.clientWidth / document.body.clientHeight,
                                0.1,
                                100,
                            )),
                            (p = new l.CP7()),
                            (u = new l.dpR()),
                            h.position.set(0, 0, 3),
                            p.setSize(document.body.clientWidth, document.body.clientHeight);
                        var e = a.current;
                        e && e.appendChild(p.domElement),
                            (_ = new s.z(h, p.domElement)),
                            _.addEventListener('change', () => {
                                var a, e;
                                (v = null === (a = h) || void 0 === a ? void 0 : a.position),
                                    (y = null === (e = _) || void 0 === e ? void 0 : e.target);
                            }),
                            I(),
                            M(),
                            f(),
                            z();
                    },
                    f = () => {
                        if (d) {
                            var a = new l.Mig(14013909);
                            (a.intensity = 1.2), d.add(a);
                            var e = new l.Ox3();
                            (e.position.x = 5),
                                (e.position.y = 3),
                                (e.position.z = -5),
                                (e.intensity = 0.8),
                                d.add(e);
                            var n = new l.Ox3(16777215);
                            (n.position.x = -5),
                                (n.position.y = 3),
                                (n.position.z = 5),
                                (n.intensity = 0.8),
                                d.add(n);
                        }
                    },
                    z = () => {
                        if (d) {
                            for (
                                var a = new l.dpR().load('car3d/point.png'),
                                    e = new l.ZAu(),
                                    n = new l.xeV({ map: a, color: 16777215, fog: !1 }),
                                    i = 0;
                                i < g.length;
                                i++
                            ) {
                                var r = g[i].x,
                                    t = g[i].y - 0.5,
                                    o = g[i].z,
                                    s = new l.jyi(n);
                                s.scale.set(0.15, 0.15, 1),
                                    s.position.set(r, t, o),
                                    e.add(s),
                                    k.push(s);
                            }
                            d.add(e),
                                document.body.addEventListener('click', function (a) {
                                    if ((a.preventDefault(), h)) {
                                        var e = new l.iMs(),
                                            n = new l.FM8();
                                        (n.x = (a.clientX / window.innerWidth) * 2 - 1),
                                            (n.y = (-a.clientY / window.innerHeight) * 2 + 1),
                                            e.setFromCamera(n, h);
                                        var i = e.intersectObjects(k);
                                        if (i.length > 0) {
                                            var r = i[0].point,
                                                t = r.x,
                                                o = r.y,
                                                s = r.z;
                                            v &&
                                                y &&
                                                w(
                                                    v,
                                                    y,
                                                    { x: t + 0.1, y: o - 0.1, z: s - 0.4 },
                                                    { x: 1, y: 0.5, z: 1.5 },
                                                );
                                        }
                                    }
                                });
                        }
                    },
                    M = () => {
                        p && d && h && (requestAnimationFrame(M), p.render(d, h));
                    },
                    I = () => {
                        var a = new m.E();
                        a.load(
                            'car3d/model.gltf',
                            function (a) {
                                d && d.add(a.scene);
                                var e = a.scene.children[0].children;
                                j(e);
                            },
                            function (a) {
                                console.log((a.loaded / 13970297) * 100 + '% loaded'),
                                    a.loaded >= 13970297 && console.log('end');
                            },
                            function (a) {
                                console.log(a), console.log('An error happened');
                            },
                        );
                    },
                    j = (a) => {
                        var e = 0,
                            n = {},
                            i = [
                                'skymap',
                                'shache_occ',
                                'shache_nor',
                                'shache_col',
                                'neishi_occ',
                                'neishi_nor',
                                'mennei_col',
                                'luntai_nor',
                                'luntai_col',
                                'lungu_occ',
                                'lungu_nor',
                                'lungu_col',
                                'linjian_occ',
                                'linjian_nor',
                                'linjian_col',
                                'floor',
                                'deng_occ',
                                'deng_nor',
                                'deng_col',
                                'cheshen_occ',
                                'cheshen_nor',
                                'chejia_occ',
                                'chejia_nor',
                                'chedengzhao_nor',
                            ],
                            r = () => {
                                var t,
                                    o = i[e];
                                null === (t = u) ||
                                    void 0 === t ||
                                    t.load('car3d/textures/' + o + '.jpg', function (t) {
                                        if (e < i.length - 1) (n[o] = t), e++, r();
                                        else
                                            for (var s in a)
                                                if (Object.prototype.hasOwnProperty.call(a, s)) {
                                                    var m = a[s];
                                                    switch (m.name) {
                                                        case 'smart_lungu0':
                                                        case 'smart_lungu1':
                                                        case 'smart_lungu2':
                                                        case 'smart_lungu3':
                                                            (m.material = new l.Wid()),
                                                                (m.material.map = n['lungu_col']),
                                                                (m.material.normalMap =
                                                                    n['lungu_nor']),
                                                                (m.material.aoMap = n['lungu_occ']);
                                                            break;
                                                        case 'smart_chelun0':
                                                        case 'smart_chelun1':
                                                        case 'smart_chelun2':
                                                        case 'smart_chelun3':
                                                            (m.material = new l.Wid()),
                                                                (m.material.map = n['luntai_col']),
                                                                (m.material.normalMap =
                                                                    n['luntai_nor']);
                                                            break;
                                                        case 'smart_boli':
                                                            (m.material = new l.xoR()),
                                                                (m.material.color = new l.Ilk(
                                                                    3355443,
                                                                )),
                                                                (m.material.transparent = !0),
                                                                (m.material.opacity = 0.2),
                                                                (m.material.envMap = n['skymap']),
                                                                (m.material.envMap.mapping = l.dSO);
                                                            break;
                                                        case 'smart_tianchuang':
                                                            (m.material = new l.xoR()),
                                                                (m.material.color = new l.Ilk(0)),
                                                                (m.material.transparent = !0),
                                                                (m.material.opacity = 0.5),
                                                                (m.material.envMap = n['skymap']),
                                                                (m.material.envMap.mapping = l.dSO);
                                                            break;
                                                        case 'smart_shachepan':
                                                            (m.material = new l.Wid()),
                                                                (m.material.color = new l.Ilk(
                                                                    15921906,
                                                                )),
                                                                (m.material.emissive = new l.Ilk(
                                                                    0,
                                                                )),
                                                                (m.material.metalness = 0.5),
                                                                (m.material.roughness = 0.62),
                                                                (m.material.map = n['shache_col']),
                                                                (m.material.normalMap =
                                                                    n['shache_nor']),
                                                                (m.material.aoMap =
                                                                    n['shache_occ']);
                                                            break;
                                                        case 'smart_neishi':
                                                        case 'smart_neishi2':
                                                            (m.material = new l.xoR()),
                                                                (m.material.color = new l.Ilk(
                                                                    3355443,
                                                                )),
                                                                (m.material.emissive = new l.Ilk(
                                                                    0,
                                                                )),
                                                                (m.material.normalMap =
                                                                    n['neishi_nor']),
                                                                (m.material.aoMap =
                                                                    n['neishi_occ']);
                                                            break;
                                                        case 'smart_neibao':
                                                            (m.material = new l.xoR()),
                                                                (m.material.color = new l.Ilk(
                                                                    3026478,
                                                                )),
                                                                (m.material.map = n['mennei_col']);
                                                            break;
                                                        case 'smart_linjian':
                                                            (m.material = new l.Wid()),
                                                                (m.material.color = new l.Ilk(
                                                                    3026478,
                                                                )),
                                                                (m.material.metalness = 0.5),
                                                                (m.material.roughness = 0.62),
                                                                (m.material.map = n['linjian_col']),
                                                                (m.material.normalMap =
                                                                    n['linjian_nor']),
                                                                (m.material.aoMap =
                                                                    n['linjian_occ']);
                                                            break;
                                                        case 'smart_daochejing':
                                                            (m.material = new l.xoR()),
                                                                (m.material.color = new l.Ilk(
                                                                    16777215,
                                                                ));
                                                            break;
                                                        case 'smart_bolinei':
                                                            (m.material = new l.xoR()),
                                                                (m.material.color = new l.Ilk(
                                                                    3355443,
                                                                ));
                                                            break;
                                                        case 'smart_chedeng':
                                                        case 'smart_shachedeng':
                                                        case 'smart_wudeng':
                                                            (m.material = new l.Wid()),
                                                                (m.material.color = new l.Ilk(
                                                                    16777215,
                                                                )),
                                                                (m.material.emissive = new l.Ilk(
                                                                    3355443,
                                                                )),
                                                                (m.material.metalness = 1),
                                                                (m.material.roughness = 0.4),
                                                                (m.material.normalMap =
                                                                    n['deng_nor']);
                                                            break;
                                                        case 'smart_chedengzhao':
                                                            (m.material = new l.xoR()),
                                                                (m.material.color = new l.Ilk(
                                                                    16777215,
                                                                )),
                                                                (m.material.emissive = new l.Ilk(
                                                                    0,
                                                                )),
                                                                (m.material.transparent = !0),
                                                                (m.material.opacity = 0.3),
                                                                (m.material.normalMap =
                                                                    n['chedengzhao_nor']);
                                                            break;
                                                        case 'smart_shachedengzhao':
                                                            (m.material = new l.xoR()),
                                                                (m.material.color = new l.Ilk(
                                                                    13240342,
                                                                )),
                                                                (m.material.transparent = !0),
                                                                (m.material.opacity = 0.4),
                                                                (m.material.normalMap =
                                                                    n['chedengzhao_nor']);
                                                            break;
                                                        case 'smart_shangeshang':
                                                            (m.material = new l.Wid()),
                                                                (m.material.color = new l.Ilk(
                                                                    986895,
                                                                )),
                                                                (m.material.emissive = new l.Ilk(
                                                                    0,
                                                                )),
                                                                (m.material.metalness = 1),
                                                                (m.material.roughness = 0);
                                                            break;
                                                        case 'smart_shangexia':
                                                            (m.material = new l.xoR()),
                                                                (m.material.color = new l.Ilk(0)),
                                                                x(!1);
                                                            break;
                                                        case 'smart_LOGO':
                                                        case 'smart_paiqiguan':
                                                            (m.material = new l.Wid()),
                                                                (m.material.color = new l.Ilk(
                                                                    7105644,
                                                                )),
                                                                (m.material.emissive = new l.Ilk(
                                                                    4473924,
                                                                )),
                                                                (m.material.metalness = 1),
                                                                (m.material.roughness = 0.32);
                                                            break;
                                                        case 'smart_cheshen':
                                                            (m.material = new l.Wid()),
                                                                (m.material.color = new l.Ilk(
                                                                    7365403,
                                                                )),
                                                                (m.material.metalness = 0.44),
                                                                (m.material.roughness = 0),
                                                                (m.material.normalMap =
                                                                    n['cheshen_nor']),
                                                                (m.material.aoMap =
                                                                    n['cheshen_occ']),
                                                                (m.material.envMap = n['skymap']),
                                                                (m.material.envMap.mapping = l.dSO),
                                                                (m.material.envMapIntensity = 1);
                                                            break;
                                                        case 'smart_chejia':
                                                            (m.material = new l.Wid()),
                                                                (m.material.color = new l.Ilk(
                                                                    2435369,
                                                                )),
                                                                (m.material.metalness = 0.44),
                                                                (m.material.roughness = 0.4),
                                                                (m.material.normalMap =
                                                                    n['chejia_nor']),
                                                                (m.material.aoMap =
                                                                    n['chejia_occ']);
                                                            break;
                                                    }
                                                }
                                    });
                            };
                        r();
                    };
                return (
                    (0, t.useEffect)(() => {
                        b();
                    }, []),
                    (0, c.jsx)('div', {
                        style: {
                            position: 'absolute',
                            top: 0,
                            height: '100vh',
                            width: '100vw',
                            background: 'rgba(0, 0, 0, .7)',
                        },
                        children: (0, c.jsx)(i.Z, {
                            tip: '\u6a21\u578b\u52a0\u8f7d\u4e2d...',
                            spinning: o,
                            style: { height: '100vh' },
                            children: (0, c.jsx)('div', {
                                style: {
                                    position: 'absolute',
                                    top: 0,
                                    height: '100vh',
                                    width: '100vw',
                                },
                                ref: a,
                            }),
                        }),
                    })
                );
            }
        },
    },
]);
