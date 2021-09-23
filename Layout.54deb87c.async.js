(self['webpackChunk'] = self['webpackChunk'] || []).push([
    [496],
    {
        45616: function (e) {
            e.exports = {
                header: 'header___1jpXJ',
                warp: 'warp___wBxx8',
                logo: 'logo___1jTDk',
                main: 'main___1XX41',
            };
        },
        8116: function () {},
        24090: function () {},
        73165: function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, {
                    default: function () {
                        return Re;
                    },
                });
            n(65056), n(8116), n(24090);
            var o = n(22122),
                r = n(6610),
                a = n(5991),
                l = n(10379),
                i = n(44144),
                c = n(67294),
                s = n(67591),
                f = n(94184),
                p = n.n(f),
                u = n(98423),
                d = n(44545),
                m = (0, c.createContext)({ prefixCls: '', firstLevel: !0, inlineCollapsed: !1 }),
                v = m,
                h = n(96159);
            function g(e) {
                var t,
                    n,
                    r = e.popupClassName,
                    a = e.icon,
                    l = e.title,
                    i = c.useContext(v),
                    f = i.prefixCls,
                    d = i.inlineCollapsed,
                    m = i.antdMenuTheme,
                    g = (0, s.Xl)();
                if (a) {
                    var y = (0, h.l$)(l) && 'span' === l.type;
                    n = c.createElement(
                        c.Fragment,
                        null,
                        (0, h.Tm)(a, {
                            className: p()(
                                (0, h.l$)(a)
                                    ? null === (t = a.props) || void 0 === t
                                        ? void 0
                                        : t.className
                                    : '',
                                ''.concat(f, '-item-icon'),
                            ),
                        }),
                        y
                            ? l
                            : c.createElement(
                                  'span',
                                  { className: ''.concat(f, '-title-content') },
                                  l,
                              ),
                    );
                } else
                    n =
                        d && !g.length && l && 'string' === typeof l
                            ? c.createElement(
                                  'div',
                                  { className: ''.concat(f, '-inline-collapsed-noicon') },
                                  l.charAt(0),
                              )
                            : c.createElement(
                                  'span',
                                  { className: ''.concat(f, '-title-content') },
                                  l,
                              );
                return c.createElement(
                    v.Provider,
                    { value: (0, o.Z)((0, o.Z)({}, i), { firstLevel: !1 }) },
                    c.createElement(
                        s.Wd,
                        (0, o.Z)({}, (0, u.Z)(e, ['icon']), {
                            title: n,
                            popupClassName: p()(f, ''.concat(f, '-').concat(m), r),
                        }),
                    ),
                );
            }
            var y = g,
                b = n(96156),
                C = n(50344),
                x = n(28481),
                N = n(90484),
                w = n(28991),
                O = n(81253),
                Z = n(52052),
                E = { adjustX: 1, adjustY: 1 },
                S = [0, 0],
                P = {
                    left: { points: ['cr', 'cl'], overflow: E, offset: [-4, 0], targetOffset: S },
                    right: { points: ['cl', 'cr'], overflow: E, offset: [4, 0], targetOffset: S },
                    top: { points: ['bc', 'tc'], overflow: E, offset: [0, -4], targetOffset: S },
                    bottom: { points: ['tc', 'bc'], overflow: E, offset: [0, 4], targetOffset: S },
                    topLeft: {
                        points: ['bl', 'tl'],
                        overflow: E,
                        offset: [0, -4],
                        targetOffset: S,
                    },
                    leftTop: {
                        points: ['tr', 'tl'],
                        overflow: E,
                        offset: [-4, 0],
                        targetOffset: S,
                    },
                    topRight: {
                        points: ['br', 'tr'],
                        overflow: E,
                        offset: [0, -4],
                        targetOffset: S,
                    },
                    rightTop: {
                        points: ['tl', 'tr'],
                        overflow: E,
                        offset: [4, 0],
                        targetOffset: S,
                    },
                    bottomRight: {
                        points: ['tr', 'br'],
                        overflow: E,
                        offset: [0, 4],
                        targetOffset: S,
                    },
                    rightBottom: {
                        points: ['bl', 'br'],
                        overflow: E,
                        offset: [4, 0],
                        targetOffset: S,
                    },
                    bottomLeft: {
                        points: ['tl', 'bl'],
                        overflow: E,
                        offset: [0, 4],
                        targetOffset: S,
                    },
                    leftBottom: {
                        points: ['br', 'bl'],
                        overflow: E,
                        offset: [-4, 0],
                        targetOffset: S,
                    },
                },
                j = function (e) {
                    var t = e.overlay,
                        n = e.prefixCls,
                        o = e.id,
                        r = e.overlayInnerStyle;
                    return c.createElement(
                        'div',
                        { className: ''.concat(n, '-inner'), id: o, role: 'tooltip', style: r },
                        'function' === typeof t ? t() : t,
                    );
                },
                k = j,
                T = function (e, t) {
                    var n = e.overlayClassName,
                        r = e.trigger,
                        a = void 0 === r ? ['hover'] : r,
                        l = e.mouseEnterDelay,
                        i = void 0 === l ? 0 : l,
                        s = e.mouseLeaveDelay,
                        f = void 0 === s ? 0.1 : s,
                        p = e.overlayStyle,
                        u = e.prefixCls,
                        d = void 0 === u ? 'rc-tooltip' : u,
                        m = e.children,
                        v = e.onVisibleChange,
                        h = e.afterVisibleChange,
                        g = e.transitionName,
                        y = e.animation,
                        b = e.motion,
                        C = e.placement,
                        x = void 0 === C ? 'right' : C,
                        E = e.align,
                        S = void 0 === E ? {} : E,
                        j = e.destroyTooltipOnHide,
                        T = void 0 !== j && j,
                        A = e.defaultVisible,
                        I = e.getTooltipContainer,
                        L = e.overlayInnerStyle,
                        _ = (0, O.Z)(e, [
                            'overlayClassName',
                            'trigger',
                            'mouseEnterDelay',
                            'mouseLeaveDelay',
                            'overlayStyle',
                            'prefixCls',
                            'children',
                            'onVisibleChange',
                            'afterVisibleChange',
                            'transitionName',
                            'animation',
                            'motion',
                            'placement',
                            'align',
                            'destroyTooltipOnHide',
                            'defaultVisible',
                            'getTooltipContainer',
                            'overlayInnerStyle',
                        ]),
                        z = (0, c.useRef)(null);
                    (0, c.useImperativeHandle)(t, function () {
                        return z.current;
                    });
                    var V = (0, w.Z)({}, _);
                    'visible' in e && (V.popupVisible = e.visible);
                    var B = function () {
                            var t = e.arrowContent,
                                n = void 0 === t ? null : t,
                                o = e.overlay,
                                r = e.id;
                            return [
                                c.createElement(
                                    'div',
                                    { className: ''.concat(d, '-arrow'), key: 'arrow' },
                                    n,
                                ),
                                c.createElement(k, {
                                    key: 'content',
                                    prefixCls: d,
                                    id: r,
                                    overlay: o,
                                    overlayInnerStyle: L,
                                }),
                            ];
                        },
                        H = !1,
                        M = !1;
                    if ('boolean' === typeof T) H = T;
                    else if (T && 'object' === (0, N.Z)(T)) {
                        var R = T.keepParent;
                        (H = !0 === R), (M = !1 === R);
                    }
                    return c.createElement(
                        Z.Z,
                        (0, o.Z)(
                            {
                                popupClassName: n,
                                prefixCls: d,
                                popup: B,
                                action: a,
                                builtinPlacements: P,
                                popupPlacement: x,
                                ref: z,
                                popupAlign: S,
                                getPopupContainer: I,
                                onPopupVisibleChange: v,
                                afterPopupVisibleChange: h,
                                popupTransitionName: g,
                                popupAnimation: y,
                                popupMotion: b,
                                defaultPopupVisible: A,
                                destroyPopupOnHide: H,
                                autoDestroy: M,
                                mouseLeaveDelay: f,
                                popupStyle: p,
                                mouseEnterDelay: i,
                            },
                            V,
                        ),
                        m,
                    );
                },
                A = (0, c.forwardRef)(T),
                I = A,
                L = n(21770),
                _ = { adjustX: 1, adjustY: 1 },
                z = { adjustX: 0, adjustY: 0 },
                V = [0, 0];
            function B(e) {
                return 'boolean' === typeof e ? (e ? _ : z) : (0, o.Z)((0, o.Z)({}, z), e);
            }
            function H(e) {
                var t = e.arrowWidth,
                    n = void 0 === t ? 4 : t,
                    r = e.horizontalArrowShift,
                    a = void 0 === r ? 16 : r,
                    l = e.verticalArrowShift,
                    i = void 0 === l ? 8 : l,
                    c = e.autoAdjustOverflow,
                    s = {
                        left: { points: ['cr', 'cl'], offset: [-4, 0] },
                        right: { points: ['cl', 'cr'], offset: [4, 0] },
                        top: { points: ['bc', 'tc'], offset: [0, -4] },
                        bottom: { points: ['tc', 'bc'], offset: [0, 4] },
                        topLeft: { points: ['bl', 'tc'], offset: [-(a + n), -4] },
                        leftTop: { points: ['tr', 'cl'], offset: [-4, -(i + n)] },
                        topRight: { points: ['br', 'tc'], offset: [a + n, -4] },
                        rightTop: { points: ['tl', 'cr'], offset: [4, -(i + n)] },
                        bottomRight: { points: ['tr', 'bc'], offset: [a + n, 4] },
                        rightBottom: { points: ['bl', 'cr'], offset: [4, i + n] },
                        bottomLeft: { points: ['tl', 'bc'], offset: [-(a + n), 4] },
                        leftBottom: { points: ['br', 'cl'], offset: [-4, i + n] },
                    };
                return (
                    Object.keys(s).forEach(function (t) {
                        (s[t] = e.arrowPointAtCenter
                            ? (0, o.Z)((0, o.Z)({}, s[t]), { overflow: B(c), targetOffset: V })
                            : (0, o.Z)((0, o.Z)({}, P[t]), { overflow: B(c) })),
                            (s[t].ignoreShake = !0);
                    }),
                    s
                );
            }
            var M = n(86032),
                R = n(93355),
                D =
                    ((0, R.b)('success', 'processing', 'error', 'default', 'warning'),
                    (0, R.b)(
                        'pink',
                        'red',
                        'yellow',
                        'orange',
                        'cyan',
                        'green',
                        'blue',
                        'purple',
                        'geekblue',
                        'magenta',
                        'volcano',
                        'gold',
                        'lime',
                    )),
                W = function () {
                    return { height: 0, opacity: 0 };
                },
                X = function (e) {
                    return { height: e.scrollHeight, opacity: 1 };
                },
                F = function (e) {
                    return { height: e ? e.offsetHeight : 0 };
                },
                $ = function (e, t) {
                    return (
                        !0 === (null === t || void 0 === t ? void 0 : t.deadline) ||
                        'height' === t.propertyName
                    );
                },
                Y = {
                    motionName: 'ant-motion-collapse',
                    onAppearStart: W,
                    onEnterStart: W,
                    onAppearActive: X,
                    onEnterActive: X,
                    onLeaveStart: F,
                    onLeaveActive: W,
                    onAppearEnd: $,
                    onEnterEnd: $,
                    onLeaveEnd: $,
                    motionDeadline: 500,
                },
                K = function (e, t, n) {
                    return void 0 !== n ? n : ''.concat(e, '-').concat(t);
                },
                G = Y,
                J = function (e, t) {
                    var n = {};
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) &&
                            t.indexOf(o) < 0 &&
                            (n[o] = e[o]);
                    if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                            t.indexOf(o[r]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                (n[o[r]] = e[o[r]]);
                    }
                    return n;
                },
                U = function (e, t) {
                    var n = {},
                        r = (0, o.Z)({}, e);
                    return (
                        t.forEach(function (t) {
                            e && t in e && ((n[t] = e[t]), delete r[t]);
                        }),
                        { picked: n, omitted: r }
                    );
                },
                q = new RegExp('^('.concat(D.join('|'), ')(-inverse)?$'));
            function Q(e, t) {
                var n = e.type;
                if (
                    (!0 === n.__ANT_BUTTON ||
                        !0 === n.__ANT_SWITCH ||
                        !0 === n.__ANT_CHECKBOX ||
                        'button' === e.type) &&
                    e.props.disabled
                ) {
                    var r = U(e.props.style, [
                            'position',
                            'left',
                            'right',
                            'top',
                            'bottom',
                            'float',
                            'display',
                            'zIndex',
                        ]),
                        a = r.picked,
                        l = r.omitted,
                        i = (0, o.Z)((0, o.Z)({ display: 'inline-block' }, a), {
                            cursor: 'not-allowed',
                            width: e.props.block ? '100%' : null,
                        }),
                        s = (0, o.Z)((0, o.Z)({}, l), { pointerEvents: 'none' }),
                        f = (0, h.Tm)(e, { style: s, className: null });
                    return c.createElement(
                        'span',
                        {
                            style: i,
                            className: p()(
                                e.props.className,
                                ''.concat(t, '-disabled-compatible-wrapper'),
                            ),
                        },
                        f,
                    );
                }
                return e;
            }
            var ee = c.forwardRef(function (e, t) {
                var n,
                    r = c.useContext(M.E_),
                    a = r.getPopupContainer,
                    l = r.getPrefixCls,
                    i = r.direction,
                    s = (0, L.Z)(!1, { value: e.visible, defaultValue: e.defaultVisible }),
                    f = (0, x.Z)(s, 2),
                    u = f[0],
                    d = f[1],
                    m = function () {
                        var t = e.title,
                            n = e.overlay;
                        return !t && !n && 0 !== t;
                    },
                    v = function (t) {
                        var n;
                        d(!m() && t),
                            m() || null === (n = e.onVisibleChange) || void 0 === n || n.call(e, t);
                    },
                    g = function () {
                        var t = e.builtinPlacements,
                            n = e.arrowPointAtCenter,
                            o = e.autoAdjustOverflow;
                        return t || H({ arrowPointAtCenter: n, autoAdjustOverflow: o });
                    },
                    y = function (e, t) {
                        var n = g(),
                            o = Object.keys(n).filter(function (e) {
                                return (
                                    n[e].points[0] === t.points[0] && n[e].points[1] === t.points[1]
                                );
                            })[0];
                        if (o) {
                            var r = e.getBoundingClientRect(),
                                a = { top: '50%', left: '50%' };
                            o.indexOf('top') >= 0 || o.indexOf('Bottom') >= 0
                                ? (a.top = ''.concat(r.height - t.offset[1], 'px'))
                                : (o.indexOf('Top') >= 0 || o.indexOf('bottom') >= 0) &&
                                  (a.top = ''.concat(-t.offset[1], 'px')),
                                o.indexOf('left') >= 0 || o.indexOf('Right') >= 0
                                    ? (a.left = ''.concat(r.width - t.offset[0], 'px'))
                                    : (o.indexOf('right') >= 0 || o.indexOf('Left') >= 0) &&
                                      (a.left = ''.concat(-t.offset[0], 'px')),
                                (e.style.transformOrigin = ''.concat(a.left, ' ').concat(a.top));
                        }
                    },
                    C = function () {
                        var t = e.title,
                            n = e.overlay;
                        return 0 === t ? t : n || t || '';
                    },
                    N = e.getPopupContainer,
                    w = J(e, ['getPopupContainer']),
                    O = e.prefixCls,
                    Z = e.openClassName,
                    E = e.getTooltipContainer,
                    S = e.overlayClassName,
                    P = e.color,
                    j = e.overlayInnerStyle,
                    k = e.children,
                    T = l('tooltip', O),
                    A = l(),
                    _ = u;
                !('visible' in e) && m() && (_ = !1);
                var z,
                    V = Q((0, h.l$)(k) ? k : c.createElement('span', null, k), T),
                    B = V.props,
                    R = p()(B.className, (0, b.Z)({}, Z || ''.concat(T, '-open'), !0)),
                    D = p()(
                        S,
                        ((n = {}),
                        (0, b.Z)(n, ''.concat(T, '-rtl'), 'rtl' === i),
                        (0, b.Z)(n, ''.concat(T, '-').concat(P), P && q.test(P)),
                        n),
                    ),
                    W = j;
                return (
                    P &&
                        !q.test(P) &&
                        ((W = (0, o.Z)((0, o.Z)({}, j), { background: P })),
                        (z = { background: P })),
                    c.createElement(
                        I,
                        (0, o.Z)({}, w, {
                            prefixCls: T,
                            overlayClassName: D,
                            getTooltipContainer: N || E || a,
                            ref: t,
                            builtinPlacements: g(),
                            overlay: C(),
                            visible: _,
                            onVisibleChange: v,
                            onPopupAlign: y,
                            overlayInnerStyle: W,
                            arrowContent: c.createElement('span', {
                                className: ''.concat(T, '-arrow-content'),
                                style: z,
                            }),
                            motion: {
                                motionName: K(A, 'zoom-big-fast', e.transitionName),
                                motionDeadline: 1e3,
                            },
                        }),
                        _ ? (0, h.Tm)(V, { className: R }) : V,
                    )
                );
            });
            (ee.displayName = 'Tooltip'),
                (ee.defaultProps = {
                    placement: 'top',
                    mouseEnterDelay: 0.1,
                    mouseLeaveDelay: 0.1,
                    arrowPointAtCenter: !1,
                    autoAdjustOverflow: !0,
                });
            var te = ee,
                ne = {
                    icon: {
                        tag: 'svg',
                        attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
                        children: [
                            {
                                tag: 'path',
                                attrs: {
                                    d: 'M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z',
                                },
                            },
                        ],
                    },
                    name: 'bars',
                    theme: 'outlined',
                },
                oe = ne,
                re = n(27029),
                ae = function (e, t) {
                    return c.createElement(
                        re.Z,
                        (0, w.Z)((0, w.Z)({}, e), {}, { ref: t, icon: oe }),
                    );
                };
            ae.displayName = 'BarsOutlined';
            var le = c.forwardRef(ae),
                ie = {
                    icon: {
                        tag: 'svg',
                        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
                        children: [
                            {
                                tag: 'path',
                                attrs: {
                                    d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
                                },
                            },
                        ],
                    },
                    name: 'right',
                    theme: 'outlined',
                },
                ce = ie,
                se = function (e, t) {
                    return c.createElement(
                        re.Z,
                        (0, w.Z)((0, w.Z)({}, e), {}, { ref: t, icon: ce }),
                    );
                };
            se.displayName = 'RightOutlined';
            var fe = c.forwardRef(se),
                pe = {
                    icon: {
                        tag: 'svg',
                        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
                        children: [
                            {
                                tag: 'path',
                                attrs: {
                                    d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
                                },
                            },
                        ],
                    },
                    name: 'left',
                    theme: 'outlined',
                },
                ue = pe,
                de = function (e, t) {
                    return c.createElement(
                        re.Z,
                        (0, w.Z)((0, w.Z)({}, e), {}, { ref: t, icon: ue }),
                    );
                };
            de.displayName = 'LeftOutlined';
            var me = c.forwardRef(de),
                ve = n(85061),
                he = function (e, t) {
                    var n = {};
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) &&
                            t.indexOf(o) < 0 &&
                            (n[o] = e[o]);
                    if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                            t.indexOf(o[r]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                (n[o[r]] = e[o[r]]);
                    }
                    return n;
                },
                ge = c.createContext({
                    siderHook: {
                        addSider: function () {
                            return null;
                        },
                        removeSider: function () {
                            return null;
                        },
                    },
                });
            function ye(e) {
                var t = e.suffixCls,
                    n = e.tagName,
                    r = e.displayName;
                return function (e) {
                    var a = function (r) {
                        var a = c.useContext(M.E_),
                            l = a.getPrefixCls,
                            i = r.prefixCls,
                            s = l(t, i);
                        return c.createElement(e, (0, o.Z)({ prefixCls: s, tagName: n }, r));
                    };
                    return (a.displayName = r), a;
                };
            }
            var be = function (e) {
                    var t = e.prefixCls,
                        n = e.className,
                        r = e.children,
                        a = e.tagName,
                        l = he(e, ['prefixCls', 'className', 'children', 'tagName']),
                        i = p()(t, n);
                    return c.createElement(a, (0, o.Z)({ className: i }, l), r);
                },
                Ce = function (e) {
                    var t,
                        n = c.useContext(M.E_),
                        r = n.direction,
                        a = c.useState([]),
                        l = (0, x.Z)(a, 2),
                        i = l[0],
                        s = l[1],
                        f = e.prefixCls,
                        u = e.className,
                        d = e.children,
                        m = e.hasSider,
                        v = e.tagName,
                        h = he(e, ['prefixCls', 'className', 'children', 'hasSider', 'tagName']),
                        g = p()(
                            f,
                            ((t = {}),
                            (0, b.Z)(
                                t,
                                ''.concat(f, '-has-sider'),
                                'boolean' === typeof m ? m : i.length > 0,
                            ),
                            (0, b.Z)(t, ''.concat(f, '-rtl'), 'rtl' === r),
                            t),
                            u,
                        );
                    return c.createElement(
                        ge.Provider,
                        {
                            value: {
                                siderHook: {
                                    addSider: function (e) {
                                        s(function (t) {
                                            return [].concat((0, ve.Z)(t), [e]);
                                        });
                                    },
                                    removeSider: function (e) {
                                        s(function (t) {
                                            return t.filter(function (t) {
                                                return t !== e;
                                            });
                                        });
                                    },
                                },
                            },
                        },
                        c.createElement(v, (0, o.Z)({ className: g }, h), d),
                    );
                },
                xe =
                    (ye({ suffixCls: 'layout', tagName: 'section', displayName: 'Layout' })(Ce),
                    ye({ suffixCls: 'layout-header', tagName: 'header', displayName: 'Header' })(
                        be,
                    ),
                    ye({ suffixCls: 'layout-footer', tagName: 'footer', displayName: 'Footer' })(
                        be,
                    ),
                    ye({ suffixCls: 'layout-content', tagName: 'main', displayName: 'Content' })(
                        be,
                    ),
                    function (e) {
                        return !isNaN(parseFloat(e)) && isFinite(e);
                    }),
                Ne = xe,
                we = function (e, t) {
                    var n = {};
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) &&
                            t.indexOf(o) < 0 &&
                            (n[o] = e[o]);
                    if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                            t.indexOf(o[r]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                (n[o[r]] = e[o[r]]);
                    }
                    return n;
                },
                Oe = {
                    xs: '479.98px',
                    sm: '575.98px',
                    md: '767.98px',
                    lg: '991.98px',
                    xl: '1199.98px',
                    xxl: '1599.98px',
                },
                Ze = c.createContext({}),
                Ee = (function () {
                    var e = 0;
                    return function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                        return (e += 1), ''.concat(t).concat(e);
                    };
                })(),
                Se = c.forwardRef(function (e, t) {
                    var n = e.prefixCls,
                        r = e.className,
                        a = e.trigger,
                        l = e.children,
                        i = e.defaultCollapsed,
                        s = void 0 !== i && i,
                        f = e.theme,
                        d = void 0 === f ? 'dark' : f,
                        m = e.style,
                        v = void 0 === m ? {} : m,
                        h = e.collapsible,
                        g = void 0 !== h && h,
                        y = e.reverseArrow,
                        C = void 0 !== y && y,
                        N = e.width,
                        w = void 0 === N ? 200 : N,
                        O = e.collapsedWidth,
                        Z = void 0 === O ? 80 : O,
                        E = e.zeroWidthTriggerStyle,
                        S = e.breakpoint,
                        P = e.onCollapse,
                        j = e.onBreakpoint,
                        k = we(e, [
                            'prefixCls',
                            'className',
                            'trigger',
                            'children',
                            'defaultCollapsed',
                            'theme',
                            'style',
                            'collapsible',
                            'reverseArrow',
                            'width',
                            'collapsedWidth',
                            'zeroWidthTriggerStyle',
                            'breakpoint',
                            'onCollapse',
                            'onBreakpoint',
                        ]),
                        T = (0, c.useContext)(ge),
                        A = T.siderHook,
                        I = (0, c.useState)('collapsed' in k ? k.collapsed : s),
                        L = (0, x.Z)(I, 2),
                        _ = L[0],
                        z = L[1],
                        V = (0, c.useState)(!1),
                        B = (0, x.Z)(V, 2),
                        H = B[0],
                        R = B[1];
                    (0, c.useEffect)(
                        function () {
                            'collapsed' in k && z(k.collapsed);
                        },
                        [k.collapsed],
                    );
                    var D = function (e, t) {
                            'collapsed' in k || z(e), null === P || void 0 === P || P(e, t);
                        },
                        W = (0, c.useRef)();
                    (W.current = function (e) {
                        R(e.matches),
                            null === j || void 0 === j || j(e.matches),
                            _ !== e.matches && D(e.matches, 'responsive');
                    }),
                        (0, c.useEffect)(function () {
                            function e(e) {
                                return W.current(e);
                            }
                            var t;
                            if ('undefined' !== typeof window) {
                                var n = window,
                                    o = n.matchMedia;
                                if (o && S && S in Oe) {
                                    t = o('(max-width: '.concat(Oe[S], ')'));
                                    try {
                                        t.addEventListener('change', e);
                                    } catch (r) {
                                        t.addListener(e);
                                    }
                                    e(t);
                                }
                            }
                            return function () {
                                try {
                                    null === t ||
                                        void 0 === t ||
                                        t.removeEventListener('change', e);
                                } catch (r) {
                                    null === t || void 0 === t || t.removeListener(e);
                                }
                            };
                        }, []),
                        (0, c.useEffect)(function () {
                            var e = Ee('ant-sider-');
                            return (
                                A.addSider(e),
                                function () {
                                    return A.removeSider(e);
                                }
                            );
                        }, []);
                    var X = function () {
                            D(!_, 'clickTrigger');
                        },
                        F = (0, c.useContext)(M.E_),
                        $ = F.getPrefixCls,
                        Y = function () {
                            var e,
                                i = $('layout-sider', n),
                                s = (0, u.Z)(k, ['collapsed']),
                                f = _ ? Z : w,
                                m = Ne(f) ? ''.concat(f, 'px') : String(f),
                                h =
                                    0 === parseFloat(String(Z || 0))
                                        ? c.createElement(
                                              'span',
                                              {
                                                  onClick: X,
                                                  className: p()(
                                                      ''.concat(i, '-zero-width-trigger'),
                                                      ''
                                                          .concat(i, '-zero-width-trigger-')
                                                          .concat(C ? 'right' : 'left'),
                                                  ),
                                                  style: E,
                                              },
                                              a || c.createElement(le, null),
                                          )
                                        : null,
                                y = {
                                    expanded: C
                                        ? c.createElement(fe, null)
                                        : c.createElement(me, null),
                                    collapsed: C
                                        ? c.createElement(me, null)
                                        : c.createElement(fe, null),
                                },
                                x = _ ? 'collapsed' : 'expanded',
                                N = y[x],
                                O =
                                    null !== a
                                        ? h ||
                                          c.createElement(
                                              'div',
                                              {
                                                  className: ''.concat(i, '-trigger'),
                                                  onClick: X,
                                                  style: { width: m },
                                              },
                                              a || N,
                                          )
                                        : null,
                                S = (0, o.Z)((0, o.Z)({}, v), {
                                    flex: '0 0 '.concat(m),
                                    maxWidth: m,
                                    minWidth: m,
                                    width: m,
                                }),
                                P = p()(
                                    i,
                                    ''.concat(i, '-').concat(d),
                                    ((e = {}),
                                    (0, b.Z)(e, ''.concat(i, '-collapsed'), !!_),
                                    (0, b.Z)(
                                        e,
                                        ''.concat(i, '-has-trigger'),
                                        g && null !== a && !h,
                                    ),
                                    (0, b.Z)(e, ''.concat(i, '-below'), !!H),
                                    (0, b.Z)(e, ''.concat(i, '-zero-width'), 0 === parseFloat(m)),
                                    e),
                                    r,
                                );
                            return c.createElement(
                                'aside',
                                (0, o.Z)({ className: P }, s, { style: S, ref: t }),
                                c.createElement('div', { className: ''.concat(i, '-children') }, l),
                                g || (H && h) ? O : null,
                            );
                        };
                    return c.createElement(Ze.Provider, { value: { siderCollapsed: _ } }, Y());
                });
            Se.displayName = 'Sider';
            var Pe = function (e, t) {
                    var n = {};
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) &&
                            t.indexOf(o) < 0 &&
                            (n[o] = e[o]);
                    if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                            t.indexOf(o[r]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                (n[o[r]] = e[o[r]]);
                    }
                    return n;
                },
                je = (function (e) {
                    (0, l.Z)(n, e);
                    var t = (0, i.Z)(n);
                    function n() {
                        var e;
                        return (
                            (0, r.Z)(this, n),
                            (e = t.apply(this, arguments)),
                            (e.renderItem = function (t) {
                                var n,
                                    r,
                                    a = t.siderCollapsed,
                                    l = e.context,
                                    i = l.prefixCls,
                                    f = l.firstLevel,
                                    u = l.inlineCollapsed,
                                    d = l.direction,
                                    m = e.props,
                                    v = m.className,
                                    g = m.children,
                                    y = e.props,
                                    x = y.title,
                                    N = y.icon,
                                    w = y.danger,
                                    O = Pe(y, ['title', 'icon', 'danger']),
                                    Z = x;
                                'undefined' === typeof x ? (Z = f ? g : '') : !1 === x && (Z = '');
                                var E = { title: Z };
                                a || u || ((E.title = null), (E.visible = !1));
                                var S = (0, C.Z)(g).length;
                                return c.createElement(
                                    te,
                                    (0, o.Z)({}, E, {
                                        placement: 'rtl' === d ? 'left' : 'right',
                                        overlayClassName: ''.concat(i, '-inline-collapsed-tooltip'),
                                    }),
                                    c.createElement(
                                        s.ck,
                                        (0, o.Z)({}, O, {
                                            className: p()(
                                                ((n = {}),
                                                (0, b.Z)(n, ''.concat(i, '-item-danger'), w),
                                                (0, b.Z)(
                                                    n,
                                                    ''.concat(i, '-item-only-child'),
                                                    1 === (N ? S + 1 : S),
                                                ),
                                                n),
                                                v,
                                            ),
                                            title: 'string' === typeof x ? x : void 0,
                                        }),
                                        (0, h.Tm)(N, {
                                            className: p()(
                                                (0, h.l$)(N)
                                                    ? null === (r = N.props) || void 0 === r
                                                        ? void 0
                                                        : r.className
                                                    : '',
                                                ''.concat(i, '-item-icon'),
                                            ),
                                        }),
                                        e.renderItemChildren(u),
                                    ),
                                );
                            }),
                            e
                        );
                    }
                    return (
                        (0, a.Z)(n, [
                            {
                                key: 'renderItemChildren',
                                value: function (e) {
                                    var t = this.context,
                                        n = t.prefixCls,
                                        o = t.firstLevel,
                                        r = this.props,
                                        a = r.icon,
                                        l = r.children,
                                        i = c.createElement(
                                            'span',
                                            { className: ''.concat(n, '-title-content') },
                                            l,
                                        );
                                    return (!a || ((0, h.l$)(l) && 'span' === l.type)) &&
                                        l &&
                                        e &&
                                        o &&
                                        'string' === typeof l
                                        ? c.createElement(
                                              'div',
                                              {
                                                  className: ''.concat(
                                                      n,
                                                      '-inline-collapsed-noicon',
                                                  ),
                                              },
                                              l.charAt(0),
                                          )
                                        : i;
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    return c.createElement(Ze.Consumer, null, this.renderItem);
                                },
                            },
                        ]),
                        n
                    );
                })(c.Component);
            je.contextType = v;
            var ke = n(21687),
                Te = function (e, t) {
                    var n = {};
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) &&
                            t.indexOf(o) < 0 &&
                            (n[o] = e[o]);
                    if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                            t.indexOf(o[r]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                                (n[o[r]] = e[o[r]]);
                    }
                    return n;
                },
                Ae = (function (e) {
                    (0, l.Z)(n, e);
                    var t = (0, i.Z)(n);
                    function n(e) {
                        var a;
                        return (
                            (0, r.Z)(this, n),
                            (a = t.call(this, e)),
                            (a.renderMenu = function (e) {
                                var t = e.getPopupContainer,
                                    n = e.getPrefixCls,
                                    r = e.direction,
                                    l = n(),
                                    i = a.props,
                                    f = i.prefixCls,
                                    m = i.className,
                                    g = i.theme,
                                    y = i.expandIcon,
                                    b = Te(i, ['prefixCls', 'className', 'theme', 'expandIcon']),
                                    C = (0, u.Z)(b, ['siderCollapsed', 'collapsedWidth']),
                                    x = a.getInlineCollapsed(),
                                    N = {
                                        horizontal: { motionName: ''.concat(l, '-slide-up') },
                                        inline: G,
                                        other: { motionName: ''.concat(l, '-zoom-big') },
                                    },
                                    w = n('menu', f),
                                    O = p()(''.concat(w, '-').concat(g), m);
                                return c.createElement(
                                    v.Provider,
                                    {
                                        value: {
                                            prefixCls: w,
                                            inlineCollapsed: x || !1,
                                            antdMenuTheme: g,
                                            direction: r,
                                            firstLevel: !0,
                                        },
                                    },
                                    c.createElement(
                                        s.ZP,
                                        (0, o.Z)(
                                            {
                                                getPopupContainer: t,
                                                overflowedIndicator: c.createElement(d.Z, null),
                                                overflowedIndicatorPopupClassName: ''
                                                    .concat(w, '-')
                                                    .concat(g),
                                            },
                                            C,
                                            {
                                                inlineCollapsed: x,
                                                className: O,
                                                prefixCls: w,
                                                direction: r,
                                                defaultMotions: N,
                                                expandIcon: (0, h.Tm)(y, {
                                                    className: ''.concat(w, '-submenu-expand-icon'),
                                                }),
                                            },
                                        ),
                                    ),
                                );
                            }),
                            (0, ke.Z)(
                                !('inlineCollapsed' in e && 'inline' !== e.mode),
                                'Menu',
                                '`inlineCollapsed` should only be used when `mode` is inline.',
                            ),
                            (0, ke.Z)(
                                !(void 0 !== e.siderCollapsed && 'inlineCollapsed' in e),
                                'Menu',
                                '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.',
                            ),
                            a
                        );
                    }
                    return (
                        (0, a.Z)(n, [
                            {
                                key: 'getInlineCollapsed',
                                value: function () {
                                    var e = this.props,
                                        t = e.inlineCollapsed,
                                        n = e.siderCollapsed;
                                    return void 0 !== n ? n : t;
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    return c.createElement(M.C, null, this.renderMenu);
                                },
                            },
                        ]),
                        n
                    );
                })(c.Component);
            Ae.defaultProps = { theme: 'light' };
            var Ie = (function (e) {
                (0, l.Z)(n, e);
                var t = (0, i.Z)(n);
                function n() {
                    return (0, r.Z)(this, n), t.apply(this, arguments);
                }
                return (
                    (0, a.Z)(n, [
                        {
                            key: 'render',
                            value: function () {
                                var e = this;
                                return c.createElement(Ze.Consumer, null, function (t) {
                                    return c.createElement(Ae, (0, o.Z)({}, e.props, t));
                                });
                            },
                        },
                    ]),
                    n
                );
            })(c.Component);
            (Ie.Divider = s.iz), (Ie.Item = je), (Ie.SubMenu = y), (Ie.ItemGroup = s.BW);
            var Le = Ie,
                _e = n(57337),
                ze = n(42600),
                Ve = n(19228),
                Be = n(45616),
                He = n.n(Be),
                Me = n(85893);
            function Re(e) {
                var t = e.route.routes,
                    n = e.location,
                    o = e.children,
                    r = (0, c.useState)(''),
                    a = (0, _e.Z)(r, 2),
                    l = a[0],
                    i = a[1];
                return (
                    (0, c.useEffect)(() => {
                        i(n.pathname);
                    }, [n.pathname]),
                    (0, Me.jsxs)('main', {
                        className: He().container,
                        style: { paddingTop: 60 },
                        children: [
                            (0, Me.jsx)('header', {
                                className: He().header,
                                children: (0, Me.jsxs)('div', {
                                    className: p()(['typeArea', He().warp]),
                                    children: [
                                        (0, Me.jsx)('h1', {
                                            className: p()([He().logo, 'scaleAnm']),
                                            style: { fontSize: 32 },
                                            onClick: Ve.cW.bind(null, ze.N.HOME),
                                            children: 'Felex',
                                        }),
                                        (0, Me.jsx)(Le, {
                                            theme: 'dark',
                                            mode: 'horizontal',
                                            selectedKeys: [l],
                                            children:
                                                t &&
                                                t.map(
                                                    (e) =>
                                                        !e.hidden &&
                                                        (0, Me.jsx)(
                                                            Le.Item,
                                                            {
                                                                onClick: Ve.cW.bind(null, e.path),
                                                                children: e.name,
                                                            },
                                                            e.path,
                                                        ),
                                                ),
                                        }),
                                    ],
                                }),
                            }),
                            (0, Me.jsx)('main', { className: He().main, children: o }),
                        ],
                    })
                );
            }
        },
        96159: function (e, t, n) {
            'use strict';
            n.d(t, {
                l$: function () {
                    return r;
                },
                Tm: function () {
                    return l;
                },
            });
            var o = n(67294),
                r = o.isValidElement;
            function a(e, t, n) {
                return r(e) ? o.cloneElement(e, 'function' === typeof n ? n(e.props || {}) : n) : t;
            }
            function l(e, t) {
                return a(e, e, t);
            }
        },
        93355: function (e, t, n) {
            'use strict';
            n.d(t, {
                b: function () {
                    return o;
                },
            });
            var o = function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return t;
            };
        },
        98423: function (e, t, n) {
            'use strict';
            n.d(t, {
                Z: function () {
                    return r;
                },
            });
            var o = n(28991);
            function r(e, t) {
                var n = (0, o.Z)({}, e);
                return (
                    Array.isArray(t) &&
                        t.forEach(function (e) {
                            delete n[e];
                        }),
                    n
                );
            }
        },
    },
]);
