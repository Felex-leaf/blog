"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[741],{16165:function(Gt,We,u){var R=u(1413),d=u(4942),Z=u(91),V=u(67294),y=u(94184),A=u.n(y),Ue=u(63017),G=u(41755),e=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],$=V.forwardRef(function(z,oe){var ee=z.className,Me=z.component,ce=z.viewBox,te=z.spin,Ce=z.rotate,Pt=z.tabIndex,ft=z.onClick,Ne=z.children,nt=(0,Z.Z)(z,e);(0,G.Kp)(Boolean(Me||Ne),"Should have `component` prop or `children`."),(0,G.C3)();var mt=V.useContext(Ue.Z),ht=mt.prefixCls,rt=ht===void 0?"anticon":ht,pt=mt.rootClassName,Nt=A()(pt,rt,ee),x=A()((0,d.Z)({},"".concat(rt,"-spin"),!!te)),U=Ce?{msTransform:"rotate(".concat(Ce,"deg)"),transform:"rotate(".concat(Ce,"deg)")}:void 0,T=(0,R.Z)((0,R.Z)({},G.vD),{},{className:x,style:U,viewBox:ce});ce||delete T.viewBox;var F=function(){return Me?V.createElement(Me,(0,R.Z)({},T),Ne):Ne?((0,G.Kp)(Boolean(ce)||V.Children.count(Ne)===1&&V.isValidElement(Ne)&&V.Children.only(Ne).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),V.createElement("svg",(0,R.Z)((0,R.Z)({},T),{},{viewBox:ce}),Ne)):null},ne=Pt;return ne===void 0&&ft&&(ne=-1),V.createElement("span",(0,R.Z)((0,R.Z)({role:"img"},nt),{},{ref:oe,tabIndex:ne,onClick:ft,className:Nt}),F())});$.displayName="AntdIcon",We.Z=$},89705:function(Gt,We,u){u.d(We,{Z:function(){return Ue}});var R=u(1413),d=u(67294),Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},V=Z,y=u(84089),A=function(e,$){return d.createElement(y.Z,(0,R.Z)((0,R.Z)({},e),{},{ref:$,icon:V}))};A.displayName="EllipsisOutlined";var Ue=d.forwardRef(A)},2029:function(Gt,We,u){u.d(We,{iz:function(){return pn},ck:function(){return $t},BW:function(){return qt},sN:function(){return $t},GP:function(){return qt},Wd:function(){return _t},ZP:function(){return Pr},Xl:function(){return ke}});var R=u(87462),d=u(4942),Z=u(1413),V=u(74902),y=u(97685),A=u(91),Ue=u(94184),G=u.n(Ue),e=u(67294),$=u(48555),z=u(8410),oe=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],ee=void 0;function Me(n,t){var a=n.prefixCls,i=n.invalidate,r=n.item,l=n.renderItem,o=n.responsive,s=n.responsiveDisabled,c=n.registerSize,v=n.itemKey,f=n.className,P=n.style,N=n.children,K=n.display,p=n.order,S=n.component,O=S===void 0?"div":S,D=(0,A.Z)(n,oe),C=o&&!K;function E(j){c(v,j)}e.useEffect(function(){return function(){E(null)}},[]);var h=l&&r!==ee?l(r):N,M;i||(M={opacity:C?0:1,height:C?0:ee,overflowY:C?"hidden":ee,order:o?p:ee,pointerEvents:C?"none":ee,position:C?"absolute":ee});var I={};C&&(I["aria-hidden"]=!0);var b=e.createElement(O,(0,R.Z)({className:G()(!i&&a,f),style:(0,Z.Z)((0,Z.Z)({},M),P)},I,D,{ref:t}),h);return o&&(b=e.createElement($.Z,{onResize:function(L){var re=L.offsetWidth;E(re)},disabled:s},b)),b}var ce=e.forwardRef(Me);ce.displayName="Item";var te=ce,Ce=u(75164),Pt=u(30470);function ft(){var n=(0,Pt.Z)({}),t=(0,y.Z)(n,2),a=t[1],i=(0,e.useRef)([]),r=0,l=0;function o(s){var c=r;r+=1,i.current.length<c+1&&(i.current[c]=s);var v=i.current[c];function f(P){i.current[c]=typeof P=="function"?P(i.current[c]):P,Ce.Z.cancel(l),l=(0,Ce.Z)(function(){a({},!0)})}return[v,f]}return o}var Ne=["component"],nt=["className"],mt=["className"],ht=function(t,a){var i=e.useContext(x);if(!i){var r=t.component,l=r===void 0?"div":r,o=(0,A.Z)(t,Ne);return e.createElement(l,(0,R.Z)({},o,{ref:a}))}var s=i.className,c=(0,A.Z)(i,nt),v=t.className,f=(0,A.Z)(t,mt);return e.createElement(x.Provider,{value:null},e.createElement(te,(0,R.Z)({ref:a,className:G()(s,v)},c,f)))},rt=e.forwardRef(ht);rt.displayName="RawItem";var pt=rt,Nt=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],x=e.createContext(null),U="responsive",T="invalidate";function F(n){return"+ ".concat(n.length," ...")}function ne(n,t){var a=n.prefixCls,i=a===void 0?"rc-overflow":a,r=n.data,l=r===void 0?[]:r,o=n.renderItem,s=n.renderRawItem,c=n.itemKey,v=n.itemWidth,f=v===void 0?10:v,P=n.ssr,N=n.style,K=n.className,p=n.maxCount,S=n.renderRest,O=n.renderRawRest,D=n.suffix,C=n.component,E=C===void 0?"div":C,h=n.itemComponent,M=n.onVisibleChange,I=(0,A.Z)(n,Nt),b=ft(),j=P==="full",L=b(null),re=(0,y.Z)(L,2),ae=re[0],Y=re[1],B=ae||0,Ee=b(new Map),X=(0,y.Z)(Ee,2),J=X[0],Q=X[1],Ke=b(0),Be=(0,y.Z)(Ke,2),He=Be[0],we=Be[1],Oe=b(0),Ae=(0,y.Z)(Oe,2),be=Ae[0],le=Ae[1],ue=b(0),Ge=(0,y.Z)(ue,2),Ze=Ge[0],je=Ge[1],ie=(0,e.useState)(null),fe=(0,y.Z)(ie,2),xe=fe[0],ot=fe[1],Mt=(0,e.useState)(null),Le=(0,y.Z)(Mt,2),Te=Le[0],Wt=Le[1],$e=e.useMemo(function(){return Te===null&&j?Number.MAX_SAFE_INTEGER:Te||0},[Te,ae]),Ut=(0,e.useState)(!1),lt=(0,y.Z)(Ut,2),ut=lt[0],Ft=lt[1],me="".concat(i,"-item"),st=Math.max(He,be),Je=p===U,he=l.length&&Je,Et=p===T,Qe=he||typeof p=="number"&&l.length>p,Ie=(0,e.useMemo)(function(){var m=l;return he?ae===null&&j?m=l:m=l.slice(0,Math.min(l.length,B/f)):typeof p=="number"&&(m=l.slice(0,p)),m},[l,f,ae,p,he]),De=(0,e.useMemo)(function(){return he?l.slice($e+1):l.slice(Ie.length)},[l,Ie,he,$e]),ze=(0,e.useCallback)(function(m,g){var H;return typeof c=="function"?c(m):(H=c&&(m==null?void 0:m[c]))!==null&&H!==void 0?H:g},[c]),_e=(0,e.useCallback)(o||function(m){return m},[o]);function q(m,g,H){Te===m&&(g===void 0||g===xe)||(Wt(m),H||(Ft(m<l.length-1),M==null||M(m)),g!==void 0&&ot(g))}function qe(m,g){Y(g.clientWidth)}function se(m,g){Q(function(H){var Pe=new Map(H);return g===null?Pe.delete(m):Pe.set(m,g),Pe})}function Re(m,g){le(g),we(be)}function en(m,g){je(g)}function kt(m){return J.get(ze(Ie[m],m))}(0,z.Z)(function(){if(B&&st&&Ie){var m=Ze,g=Ie.length,H=g-1;if(!g){q(0,null);return}for(var Pe=0;Pe<g;Pe+=1){var tt=kt(Pe);if(j&&(tt=tt||0),tt===void 0){q(Pe-1,void 0,!0);break}if(m+=tt,H===0&&m<=B||Pe===H-1&&m+kt(H)<=B){q(H,null);break}else if(m+st>B){q(Pe-1,m-tt-Ze+be);break}}D&&kt(0)+Ze>B&&ot(null)}},[B,J,be,Ze,ze,Ie]);var tn=ut&&!!De.length,bt={};xe!==null&&he&&(bt={position:"absolute",left:xe,top:0});var ct={prefixCls:me,responsive:he,component:h,invalidate:Et},nn=s?function(m,g){var H=ze(m,g);return e.createElement(x.Provider,{key:H,value:(0,Z.Z)((0,Z.Z)({},ct),{},{order:g,item:m,itemKey:H,registerSize:se,display:g<=$e})},s(m,g))}:function(m,g){var H=ze(m,g);return e.createElement(te,(0,R.Z)({},ct,{order:g,key:H,item:m,renderItem:_e,itemKey:H,registerSize:se,display:g<=$e}))},et,Zt={order:tn?$e:Number.MAX_SAFE_INTEGER,className:"".concat(me,"-rest"),registerSize:Re,display:tn};if(O)O&&(et=e.createElement(x.Provider,{value:(0,Z.Z)((0,Z.Z)({},ct),Zt)},O(De)));else{var xt=S||F;et=e.createElement(te,(0,R.Z)({},ct,Zt),typeof xt=="function"?xt(De):xt)}var Vt=e.createElement(E,(0,R.Z)({className:G()(!Et&&i,K),style:N,ref:t},I),Ie.map(nn),Qe?et:null,D&&e.createElement(te,(0,R.Z)({},ct,{responsive:Je,responsiveDisabled:!he,order:$e,className:"".concat(me,"-suffix"),registerSize:en,display:!0,style:bt}),D));return Je&&(Vt=e.createElement($.Z,{onResize:qe,disabled:!he},Vt)),Vt}var _=e.forwardRef(ne);_.displayName="Overflow",_.Item=pt,_.RESPONSIVE=U,_.INVALIDATE=T;var Ct=_,ve=Ct,ge=u(21770),Ye=u(80334),gt=u(73935),on=u(96774),Kt=u.n(on),Ot=e.createContext(null);function ye(n,t){return n===void 0?null:"".concat(n,"-").concat(t)}function Dt(n){var t=e.useContext(Ot);return ye(t,n)}var jt=u(56982),ln=["children","locked"],de=e.createContext(null);function wt(n,t){var a=(0,Z.Z)({},n);return Object.keys(t).forEach(function(i){var r=t[i];r!==void 0&&(a[i]=r)}),a}function Fe(n){var t=n.children,a=n.locked,i=(0,A.Z)(n,ln),r=e.useContext(de),l=(0,jt.Z)(function(){return wt(r,i)},[r,i],function(o,s){return!a&&(o[0]!==s[0]||!Kt()(o[1],s[1]))});return e.createElement(de.Provider,{value:l},t)}var yt=[],at=e.createContext(null);function it(){return e.useContext(at)}var At=e.createContext(yt);function ke(n){var t=e.useContext(At);return e.useMemo(function(){return n!==void 0?[].concat((0,V.Z)(t),[n]):t},[t,n])}var Yt=e.createContext(null),un=e.createContext({}),It=un,Ve=u(15105),Wn=u(88603),sn=Ve.Z.LEFT,cn=Ve.Z.RIGHT,vn=Ve.Z.UP,Xt=Ve.Z.DOWN,Jt=Ve.Z.ENTER,yn=Ve.Z.ESC,Lt=Ve.Z.HOME,Tt=Ve.Z.END,In=[vn,Xt,sn,cn];function Un(n,t,a,i){var r,l,o,s,c="prev",v="next",f="children",P="parent";if(n==="inline"&&i===Jt)return{inlineTrigger:!0};var N=(r={},(0,d.Z)(r,vn,c),(0,d.Z)(r,Xt,v),r),K=(l={},(0,d.Z)(l,sn,a?v:c),(0,d.Z)(l,cn,a?c:v),(0,d.Z)(l,Xt,f),(0,d.Z)(l,Jt,f),l),p=(o={},(0,d.Z)(o,vn,c),(0,d.Z)(o,Xt,v),(0,d.Z)(o,Jt,f),(0,d.Z)(o,yn,P),(0,d.Z)(o,sn,a?f:P),(0,d.Z)(o,cn,a?P:f),o),S={inline:N,horizontal:K,vertical:p,inlineSub:N,horizontalSub:p,verticalSub:p},O=(s=S["".concat(n).concat(t?"":"Sub")])===null||s===void 0?void 0:s[i];switch(O){case c:return{offset:-1,sibling:!0};case v:return{offset:1,sibling:!0};case P:return{offset:-1,sibling:!1};case f:return{offset:1,sibling:!1};default:return null}}function Fn(n){for(var t=n;t;){if(t.getAttribute("data-menu-list"))return t;t=t.parentElement}return null}function kn(n,t){for(var a=n||document.activeElement;a;){if(t.has(a))return a;a=a.parentElement}return null}function Rn(n,t){var a=(0,Wn.tS)(n,!0);return a.filter(function(i){return t.has(i)})}function Sn(n,t,a){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!n)return null;var r=Rn(n,t),l=r.length,o=r.findIndex(function(s){return a===s});return i<0?o===-1?o=l-1:o-=1:i>0&&(o+=1),o=(o+l)%l,r[o]}function Vn(n,t,a,i,r,l,o,s,c,v){var f=e.useRef(),P=e.useRef();P.current=t;var N=function(){Ce.Z.cancel(f.current)};return e.useEffect(function(){return function(){N()}},[]),function(K){var p=K.which;if([].concat(In,[Jt,yn,Lt,Tt]).includes(p)){var S,O,D,C=function(){S=new Set,O=new Map,D=new Map;var X=l();return X.forEach(function(J){var Q=document.querySelector("[data-menu-id='".concat(ye(i,J),"']"));Q&&(S.add(Q),D.set(Q,J),O.set(J,Q))}),S};C();var E=O.get(t),h=kn(E,S),M=D.get(h),I=Un(n,o(M,!0).length===1,a,p);if(!I&&p!==Lt&&p!==Tt)return;(In.includes(p)||[Lt,Tt].includes(p))&&K.preventDefault();var b=function(X){if(X){var J=X,Q=X.querySelector("a");Q!=null&&Q.getAttribute("href")&&(J=Q);var Ke=D.get(X);s(Ke),N(),f.current=(0,Ce.Z)(function(){P.current===Ke&&J.focus()})}};if([Lt,Tt].includes(p)||I.sibling||!h){var j;!h||n==="inline"?j=r.current:j=Fn(h);var L,re=Rn(j,S);p===Lt?L=re[0]:p===Tt?L=re[re.length-1]:L=Sn(j,S,h,I.offset),b(L)}else if(I.inlineTrigger)c(M);else if(I.offset>0)c(M,!0),N(),f.current=(0,Ce.Z)(function(){C();var Ee=h.getAttribute("aria-controls"),X=document.getElementById(Ee),J=Sn(X,S);b(J)},5);else if(I.offset<0){var ae=o(M,!0),Y=ae[ae.length-2],B=O.get(Y);c(Y,!1),b(B)}}v==null||v(K)}}function Bn(n){Promise.resolve().then(n)}var dn="__RC_UTIL_PATH_SPLIT__",Mn=function(t){return t.join(dn)},Hn=function(t){return t.split(dn)},fn="rc-menu-more";function Gn(){var n=e.useState({}),t=(0,y.Z)(n,2),a=t[1],i=(0,e.useRef)(new Map),r=(0,e.useRef)(new Map),l=e.useState([]),o=(0,y.Z)(l,2),s=o[0],c=o[1],v=(0,e.useRef)(0),f=(0,e.useRef)(!1),P=function(){f.current||a({})},N=(0,e.useCallback)(function(E,h){var M=Mn(h);r.current.set(M,E),i.current.set(E,M),v.current+=1;var I=v.current;Bn(function(){I===v.current&&P()})},[]),K=(0,e.useCallback)(function(E,h){var M=Mn(h);r.current.delete(M),i.current.delete(E)},[]),p=(0,e.useCallback)(function(E){c(E)},[]),S=(0,e.useCallback)(function(E,h){var M=i.current.get(E)||"",I=Hn(M);return h&&s.includes(I[0])&&I.unshift(fn),I},[s]),O=(0,e.useCallback)(function(E,h){return E.some(function(M){var I=S(M,!0);return I.includes(h)})},[S]),D=function(){var h=(0,V.Z)(i.current.keys());return s.length&&h.push(fn),h},C=(0,e.useCallback)(function(E){var h="".concat(i.current.get(E)).concat(dn),M=new Set;return(0,V.Z)(r.current.keys()).forEach(function(I){I.startsWith(h)&&M.add(r.current.get(I))}),M},[]);return e.useEffect(function(){return function(){f.current=!0}},[]),{registerPath:N,unregisterPath:K,refreshOverflowKeys:p,isSubPathKey:O,getKeyPath:S,getKeys:D,getSubPathKeys:C}}function Rt(n){var t=e.useRef(n);t.current=n;var a=e.useCallback(function(){for(var i,r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(i=t.current)===null||i===void 0?void 0:i.call.apply(i,[t].concat(l))},[]);return n?a:void 0}var jn=Math.random().toFixed(5).toString().slice(2),En=0;function Yn(n){var t=(0,ge.Z)(n,{value:n}),a=(0,y.Z)(t,2),i=a[0],r=a[1];return e.useEffect(function(){En+=1;var l="".concat(jn,"-").concat(En);r("rc-menu-uuid-".concat(l))},[]),i}var Xn=u(15671),Jn=u(43144),Qn=u(32531),_n=u(73568),bn=u(98423);function Zn(n,t,a,i){var r=e.useContext(de),l=r.activeKey,o=r.onActive,s=r.onInactive,c={active:l===n};return t||(c.onMouseEnter=function(v){a==null||a({key:n,domEvent:v}),o(n)},c.onMouseLeave=function(v){i==null||i({key:n,domEvent:v}),s(n)}),c}var qn=["item"];function Qt(n){var t=n.item,a=(0,A.Z)(n,qn);return Object.defineProperty(a,"item",{get:function(){return(0,Ye.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),t}}),a}function xn(n){var t=n.icon,a=n.props,i=n.children,r;return typeof t=="function"?r=e.createElement(t,(0,Z.Z)({},a)):r=t,r||i||null}function Pn(n){var t=e.useContext(de),a=t.mode,i=t.rtl,r=t.inlineIndent;if(a!=="inline")return null;var l=n;return i?{paddingRight:l*r}:{paddingLeft:l*r}}var er=["title","attribute","elementRef"],tr=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],nr=["active"],rr=function(n){(0,Qn.Z)(a,n);var t=(0,_n.Z)(a);function a(){return(0,Xn.Z)(this,a),t.apply(this,arguments)}return(0,Jn.Z)(a,[{key:"render",value:function(){var r=this.props,l=r.title,o=r.attribute,s=r.elementRef,c=(0,A.Z)(r,er),v=(0,bn.Z)(c,["eventKey"]);return(0,Ye.ZP)(!o,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),e.createElement(ve.Item,(0,R.Z)({},o,{title:typeof l=="string"?l:void 0},v,{ref:s}))}}]),a}(e.Component),ar=function(t){var a,i=t.style,r=t.className,l=t.eventKey,o=t.warnKey,s=t.disabled,c=t.itemIcon,v=t.children,f=t.role,P=t.onMouseEnter,N=t.onMouseLeave,K=t.onClick,p=t.onKeyDown,S=t.onFocus,O=(0,A.Z)(t,tr),D=Dt(l),C=e.useContext(de),E=C.prefixCls,h=C.onItemClick,M=C.disabled,I=C.overflowDisabled,b=C.itemIcon,j=C.selectedKeys,L=C.onActive,re=e.useContext(It),ae=re._internalRenderMenuItem,Y="".concat(E,"-item"),B=e.useRef(),Ee=e.useRef(),X=M||s,J=ke(l),Q=function(ie){return{key:l,keyPath:(0,V.Z)(J).reverse(),item:B.current,domEvent:ie}},Ke=c||b,Be=Zn(l,X,P,N),He=Be.active,we=(0,A.Z)(Be,nr),Oe=j.includes(l),Ae=Pn(J.length),be=function(ie){if(!X){var fe=Q(ie);K==null||K(Qt(fe)),h(fe)}},le=function(ie){if(p==null||p(ie),ie.which===Ve.Z.ENTER){var fe=Q(ie);K==null||K(Qt(fe)),h(fe)}},ue=function(ie){L(l),S==null||S(ie)},Ge={};t.role==="option"&&(Ge["aria-selected"]=Oe);var Ze=e.createElement(rr,(0,R.Z)({ref:B,elementRef:Ee,role:f===null?"none":f||"menuitem",tabIndex:s?null:-1,"data-menu-id":I&&D?null:D},O,we,Ge,{component:"li","aria-disabled":s,style:(0,Z.Z)((0,Z.Z)({},Ae),i),className:G()(Y,(a={},(0,d.Z)(a,"".concat(Y,"-active"),He),(0,d.Z)(a,"".concat(Y,"-selected"),Oe),(0,d.Z)(a,"".concat(Y,"-disabled"),X),a),r),onClick:be,onKeyDown:le,onFocus:ue}),v,e.createElement(xn,{props:(0,Z.Z)((0,Z.Z)({},t),{},{isSelected:Oe}),icon:Ke}));return ae&&(Ze=ae(Ze,t,{selected:Oe})),Ze};function ir(n){var t=n.eventKey,a=it(),i=ke(t);return e.useEffect(function(){if(a)return a.registerPath(t,i),function(){a.unregisterPath(t,i)}},[i]),a?null:e.createElement(ar,n)}var $t=ir,or=["className","children"],lr=function(t,a){var i=t.className,r=t.children,l=(0,A.Z)(t,or),o=e.useContext(de),s=o.prefixCls,c=o.mode,v=o.rtl;return e.createElement("ul",(0,R.Z)({className:G()(s,v&&"".concat(s,"-rtl"),"".concat(s,"-sub"),"".concat(s,"-").concat(c==="inline"?"inline":"vertical"),i)},l,{"data-menu-list":!0,ref:a}),r)},Nn=e.forwardRef(lr);Nn.displayName="SubMenuList";var Kn=Nn,ur=u(71002),sr=u(50344),cr=["label","children","key","type"];function mn(n,t){return(0,sr.Z)(n).map(function(a,i){if(e.isValidElement(a)){var r,l,o=a.key,s=(r=(l=a.props)===null||l===void 0?void 0:l.eventKey)!==null&&r!==void 0?r:o,c=s==null;c&&(s="tmp_key-".concat([].concat((0,V.Z)(t),[i]).join("-")));var v={key:s,eventKey:s};return e.cloneElement(a,v)}return a})}function hn(n){return(n||[]).map(function(t,a){if(t&&(0,ur.Z)(t)==="object"){var i=t,r=i.label,l=i.children,o=i.key,s=i.type,c=(0,A.Z)(i,cr),v=o!=null?o:"tmp-".concat(a);return l||s==="group"?s==="group"?e.createElement(qt,(0,R.Z)({key:v},c,{title:r}),hn(l)):e.createElement(_t,(0,R.Z)({key:v},c,{title:r}),hn(l)):s==="divider"?e.createElement(pn,(0,R.Z)({key:v},c)):e.createElement($t,(0,R.Z)({key:v},c),r)}return null}).filter(function(t){return t})}function vr(n,t,a){var i=n;return t&&(i=hn(t)),mn(i,a)}var dr=u(11276),Xe={adjustX:1,adjustY:1},fr={topLeft:{points:["bl","tl"],overflow:Xe,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Xe,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Xe,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Xe,offset:[4,0]}},mr={topLeft:{points:["bl","tl"],overflow:Xe,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Xe,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Xe,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Xe,offset:[4,0]}},qr=null;function On(n,t,a){if(t)return t;if(a)return a[n]||a.other}var hr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function pr(n){var t=n.prefixCls,a=n.visible,i=n.children,r=n.popup,l=n.popupClassName,o=n.popupOffset,s=n.disabled,c=n.mode,v=n.onVisibleChange,f=e.useContext(de),P=f.getPopupContainer,N=f.rtl,K=f.subMenuOpenDelay,p=f.subMenuCloseDelay,S=f.builtinPlacements,O=f.triggerSubMenuAction,D=f.forceSubMenuRender,C=f.rootClassName,E=f.motion,h=f.defaultMotions,M=e.useState(!1),I=(0,y.Z)(M,2),b=I[0],j=I[1],L=N?(0,Z.Z)((0,Z.Z)({},mr),S):(0,Z.Z)((0,Z.Z)({},fr),S),re=hr[c],ae=On(c,E,h),Y=(0,Z.Z)((0,Z.Z)({},ae),{},{leavedClassName:"".concat(t,"-hidden"),removeOnLeave:!1,motionAppear:!0}),B=e.useRef();return e.useEffect(function(){return B.current=(0,Ce.Z)(function(){j(a)}),function(){Ce.Z.cancel(B.current)}},[a]),e.createElement(dr.Z,{prefixCls:t,popupClassName:G()("".concat(t,"-popup"),(0,d.Z)({},"".concat(t,"-rtl"),N),l,C),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:P,builtinPlacements:L,popupPlacement:re,popupVisible:b,popup:r,popupAlign:o&&{offset:o},action:s?[]:[O],mouseEnterDelay:K,mouseLeaveDelay:p,onPopupVisibleChange:v,forceRender:D,popupMotion:Y},i)}var Cr=u(62874);function gr(n){var t=n.id,a=n.open,i=n.keyPath,r=n.children,l="inline",o=e.useContext(de),s=o.prefixCls,c=o.forceSubMenuRender,v=o.motion,f=o.defaultMotions,P=o.mode,N=e.useRef(!1);N.current=P===l;var K=e.useState(!N.current),p=(0,y.Z)(K,2),S=p[0],O=p[1],D=N.current?a:!1;e.useEffect(function(){N.current&&O(!1)},[P]);var C=(0,Z.Z)({},On(l,v,f));i.length>1&&(C.motionAppear=!1);var E=C.onVisibleChanged;return C.onVisibleChanged=function(h){return!N.current&&!h&&O(!0),E==null?void 0:E(h)},S?null:e.createElement(Fe,{mode:l,locked:!N.current},e.createElement(Cr.Z,(0,R.Z)({visible:D},C,{forceRender:c,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden")}),function(h){var M=h.className,I=h.style;return e.createElement(Kn,{id:t,className:M,style:I},r)}))}var yr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Ir=["active"],Rr=function(t){var a,i=t.style,r=t.className,l=t.title,o=t.eventKey,s=t.warnKey,c=t.disabled,v=t.internalPopupClose,f=t.children,P=t.itemIcon,N=t.expandIcon,K=t.popupClassName,p=t.popupOffset,S=t.onClick,O=t.onMouseEnter,D=t.onMouseLeave,C=t.onTitleClick,E=t.onTitleMouseEnter,h=t.onTitleMouseLeave,M=(0,A.Z)(t,yr),I=Dt(o),b=e.useContext(de),j=b.prefixCls,L=b.mode,re=b.openKeys,ae=b.disabled,Y=b.overflowDisabled,B=b.activeKey,Ee=b.selectedKeys,X=b.itemIcon,J=b.expandIcon,Q=b.onItemClick,Ke=b.onOpenChange,Be=b.onActive,He=e.useContext(It),we=He._internalRenderSubMenuItem,Oe=e.useContext(Yt),Ae=Oe.isSubPathKey,be=ke(),le="".concat(j,"-submenu"),ue=ae||c,Ge=e.useRef(),Ze=e.useRef(),je=P||X,ie=N||J,fe=re.includes(o),xe=!Y&&fe,ot=Ae(Ee,o),Mt=Zn(o,ue,E,h),Le=Mt.active,Te=(0,A.Z)(Mt,Ir),Wt=e.useState(!1),$e=(0,y.Z)(Wt,2),Ut=$e[0],lt=$e[1],ut=function(Re){ue||lt(Re)},Ft=function(Re){ut(!0),O==null||O({key:o,domEvent:Re})},me=function(Re){ut(!1),D==null||D({key:o,domEvent:Re})},st=e.useMemo(function(){return Le||(L!=="inline"?Ut||Ae([B],o):!1)},[L,Le,B,Ut,o,Ae]),Je=Pn(be.length),he=function(Re){ue||(C==null||C({key:o,domEvent:Re}),L==="inline"&&Ke(o,!fe))},Et=Rt(function(se){S==null||S(Qt(se)),Q(se)}),Qe=function(Re){L!=="inline"&&Ke(o,Re)},Ie=function(){Be(o)},De=I&&"".concat(I,"-popup"),ze=e.createElement("div",(0,R.Z)({role:"menuitem",style:Je,className:"".concat(le,"-title"),tabIndex:ue?null:-1,ref:Ge,title:typeof l=="string"?l:null,"data-menu-id":Y&&I?null:I,"aria-expanded":xe,"aria-haspopup":!0,"aria-controls":De,"aria-disabled":ue,onClick:he,onFocus:Ie},Te),l,e.createElement(xn,{icon:L!=="horizontal"?ie:null,props:(0,Z.Z)((0,Z.Z)({},t),{},{isOpen:xe,isSubMenu:!0})},e.createElement("i",{className:"".concat(le,"-arrow")}))),_e=e.useRef(L);if(L!=="inline"&&be.length>1?_e.current="vertical":_e.current=L,!Y){var q=_e.current;ze=e.createElement(pr,{mode:q,prefixCls:le,visible:!v&&xe&&L!=="inline",popupClassName:K,popupOffset:p,popup:e.createElement(Fe,{mode:q==="horizontal"?"vertical":q},e.createElement(Kn,{id:De,ref:Ze},f)),disabled:ue,onVisibleChange:Qe},ze)}var qe=e.createElement(ve.Item,(0,R.Z)({role:"none"},M,{component:"li",style:i,className:G()(le,"".concat(le,"-").concat(L),r,(a={},(0,d.Z)(a,"".concat(le,"-open"),xe),(0,d.Z)(a,"".concat(le,"-active"),st),(0,d.Z)(a,"".concat(le,"-selected"),ot),(0,d.Z)(a,"".concat(le,"-disabled"),ue),a)),onMouseEnter:Ft,onMouseLeave:me}),ze,!Y&&e.createElement(gr,{id:De,open:xe,keyPath:be},f));return we&&(qe=we(qe,t,{selected:ot,active:st,open:xe,disabled:ue})),e.createElement(Fe,{onItemClick:Et,mode:L==="horizontal"?"vertical":L,itemIcon:je,expandIcon:ie},qe)};function _t(n){var t=n.eventKey,a=n.children,i=ke(t),r=mn(a,i),l=it();e.useEffect(function(){if(l)return l.registerPath(t,i),function(){l.unregisterPath(t,i)}},[i]);var o;return l?o=r:o=e.createElement(Rr,n,r),e.createElement(At.Provider,{value:i},o)}var Sr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],St=[],Mr=e.forwardRef(function(n,t){var a,i,r=n,l=r.prefixCls,o=l===void 0?"rc-menu":l,s=r.rootClassName,c=r.style,v=r.className,f=r.tabIndex,P=f===void 0?0:f,N=r.items,K=r.children,p=r.direction,S=r.id,O=r.mode,D=O===void 0?"vertical":O,C=r.inlineCollapsed,E=r.disabled,h=r.disabledOverflow,M=r.subMenuOpenDelay,I=M===void 0?.1:M,b=r.subMenuCloseDelay,j=b===void 0?.1:b,L=r.forceSubMenuRender,re=r.defaultOpenKeys,ae=r.openKeys,Y=r.activeKey,B=r.defaultActiveFirst,Ee=r.selectable,X=Ee===void 0?!0:Ee,J=r.multiple,Q=J===void 0?!1:J,Ke=r.defaultSelectedKeys,Be=r.selectedKeys,He=r.onSelect,we=r.onDeselect,Oe=r.inlineIndent,Ae=Oe===void 0?24:Oe,be=r.motion,le=r.defaultMotions,ue=r.triggerSubMenuAction,Ge=ue===void 0?"hover":ue,Ze=r.builtinPlacements,je=r.itemIcon,ie=r.expandIcon,fe=r.overflowedIndicator,xe=fe===void 0?"...":fe,ot=r.overflowedIndicatorPopupClassName,Mt=r.getPopupContainer,Le=r.onClick,Te=r.onOpenChange,Wt=r.onKeyDown,$e=r.openAnimation,Ut=r.openTransitionName,lt=r._internalRenderMenuItem,ut=r._internalRenderSubMenuItem,Ft=(0,A.Z)(r,Sr),me=e.useMemo(function(){return vr(K,N,St)},[K,N]),st=e.useState(!1),Je=(0,y.Z)(st,2),he=Je[0],Et=Je[1],Qe=e.useRef(),Ie=Yn(S),De=p==="rtl",ze=(0,ge.Z)(re,{value:ae,postState:function(w){return w||St}}),_e=(0,y.Z)(ze,2),q=_e[0],qe=_e[1],se=function(w){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function pe(){qe(w),Te==null||Te(w)}W?(0,gt.flushSync)(pe):pe()},Re=e.useState(q),en=(0,y.Z)(Re,2),kt=en[0],tn=en[1],bt=e.useRef(!1),ct=e.useMemo(function(){return(D==="inline"||D==="vertical")&&C?["vertical",C]:[D,!1]},[D,C]),nn=(0,y.Z)(ct,2),et=nn[0],Zt=nn[1],xt=et==="inline",Vt=e.useState(et),m=(0,y.Z)(Vt,2),g=m[0],H=m[1],Pe=e.useState(Zt),tt=(0,y.Z)(Pe,2),Nr=tt[0],Kr=tt[1];e.useEffect(function(){H(et),Kr(Zt),bt.current&&(xt?qe(kt):se(St))},[et,Zt]);var Or=e.useState(0),Dn=(0,y.Z)(Or,2),rn=Dn[0],Dr=Dn[1],Cn=rn>=me.length-1||g!=="horizontal"||h;e.useEffect(function(){xt&&tn(q)},[q]),e.useEffect(function(){return bt.current=!0,function(){bt.current=!1}},[]);var vt=Gn(),wn=vt.registerPath,An=vt.unregisterPath,wr=vt.refreshOverflowKeys,Ln=vt.isSubPathKey,Ar=vt.getKeyPath,Lr=vt.getKeys,Tr=vt.getSubPathKeys,$r=e.useMemo(function(){return{registerPath:wn,unregisterPath:An}},[wn,An]),zr=e.useMemo(function(){return{isSubPathKey:Ln}},[Ln]);e.useEffect(function(){wr(Cn?St:me.slice(rn+1).map(function(k){return k.key}))},[rn,Cn]);var Wr=(0,ge.Z)(Y||B&&((a=me[0])===null||a===void 0?void 0:a.key),{value:Y}),Tn=(0,y.Z)(Wr,2),Bt=Tn[0],gn=Tn[1],Ur=Rt(function(k){gn(k)}),Fr=Rt(function(){gn(void 0)});(0,e.useImperativeHandle)(t,function(){return{list:Qe.current,focus:function(w){var W,pe=Bt!=null?Bt:(W=me.find(function(_r){return!_r.props.disabled}))===null||W===void 0?void 0:W.key;if(pe){var Se,dt,Ht;(Se=Qe.current)===null||Se===void 0||(dt=Se.querySelector("li[data-menu-id='".concat(ye(Ie,pe),"']")))===null||dt===void 0||(Ht=dt.focus)===null||Ht===void 0||Ht.call(dt,w)}}}});var kr=(0,ge.Z)(Ke||[],{value:Be,postState:function(w){return Array.isArray(w)?w:w==null?St:[w]}}),$n=(0,y.Z)(kr,2),an=$n[0],Vr=$n[1],Br=function(w){if(X){var W=w.key,pe=an.includes(W),Se;Q?pe?Se=an.filter(function(Ht){return Ht!==W}):Se=[].concat((0,V.Z)(an),[W]):Se=[W],Vr(Se);var dt=(0,Z.Z)((0,Z.Z)({},w),{},{selectedKeys:Se});pe?we==null||we(dt):He==null||He(dt)}!Q&&q.length&&g!=="inline"&&se(St)},Hr=Rt(function(k){Le==null||Le(Qt(k)),Br(k)}),zn=Rt(function(k,w){var W=q.filter(function(Se){return Se!==k});if(w)W.push(k);else if(g!=="inline"){var pe=Tr(k);W=W.filter(function(Se){return!pe.has(Se)})}Kt()(q,W)||se(W,!0)}),Gr=Rt(Mt),jr=function(w,W){var pe=W!=null?W:!q.includes(w);zn(w,pe)},Yr=Vn(g,Bt,De,Ie,Qe,Lr,Ar,gn,jr,Wt);e.useEffect(function(){Et(!0)},[]);var Xr=e.useMemo(function(){return{_internalRenderMenuItem:lt,_internalRenderSubMenuItem:ut}},[lt,ut]),Jr=g!=="horizontal"||h?me:me.map(function(k,w){return e.createElement(Fe,{key:k.key,overflowDisabled:w>rn},k)}),Qr=e.createElement(ve,(0,R.Z)({id:S,ref:Qe,prefixCls:"".concat(o,"-overflow"),component:"ul",itemComponent:$t,className:G()(o,"".concat(o,"-root"),"".concat(o,"-").concat(g),v,(i={},(0,d.Z)(i,"".concat(o,"-inline-collapsed"),Nr),(0,d.Z)(i,"".concat(o,"-rtl"),De),i),s),dir:p,style:c,role:"menu",tabIndex:P,data:Jr,renderRawItem:function(w){return w},renderRawRest:function(w){var W=w.length,pe=W?me.slice(-W):null;return e.createElement(_t,{eventKey:fn,title:xe,disabled:Cn,internalPopupClose:W===0,popupClassName:ot},pe)},maxCount:g!=="horizontal"||h?ve.INVALIDATE:ve.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(w){Dr(w)},onKeyDown:Yr},Ft));return e.createElement(It.Provider,{value:Xr},e.createElement(Ot.Provider,{value:Ie},e.createElement(Fe,{prefixCls:o,rootClassName:s,mode:g,openKeys:q,rtl:De,disabled:E,motion:he?be:null,defaultMotions:he?le:null,activeKey:Bt,onActive:Ur,onInactive:Fr,selectedKeys:an,inlineIndent:Ae,subMenuOpenDelay:I,subMenuCloseDelay:j,forceSubMenuRender:L,builtinPlacements:Ze,triggerSubMenuAction:Ge,getPopupContainer:Gr,itemIcon:je,expandIcon:ie,onItemClick:Hr,onOpenChange:zn},e.createElement(Yt.Provider,{value:zr},Qr),e.createElement("div",{style:{display:"none"},"aria-hidden":!0},e.createElement(at.Provider,{value:$r},me)))))}),Er=Mr,br=["className","title","eventKey","children"],Zr=["children"],xr=function(t){var a=t.className,i=t.title,r=t.eventKey,l=t.children,o=(0,A.Z)(t,br),s=e.useContext(de),c=s.prefixCls,v="".concat(c,"-item-group");return e.createElement("li",(0,R.Z)({},o,{onClick:function(P){return P.stopPropagation()},className:G()(v,a)}),e.createElement("div",{className:"".concat(v,"-title"),title:typeof i=="string"?i:void 0},i),e.createElement("ul",{className:"".concat(v,"-list")},l))};function qt(n){var t=n.children,a=(0,A.Z)(n,Zr),i=ke(a.eventKey),r=mn(t,i),l=it();return l?r:e.createElement(xr,(0,bn.Z)(a,["warnKey"]),r)}function pn(n){var t=n.className,a=n.style,i=e.useContext(de),r=i.prefixCls,l=it();return l?null:e.createElement("li",{className:G()("".concat(r,"-item-divider"),t),style:a})}var zt=Er;zt.Item=$t,zt.SubMenu=_t,zt.ItemGroup=qt,zt.Divider=pn;var Pr=zt},48555:function(Gt,We,u){u.d(We,{Z:function(){return Nt}});var R=u(87462),d=u(67294),Z=u(50344),V=u(80334),y=u(1413),A=u(42550),Ue=u(34203),G=u(91033),e=new Map;function $(x){x.forEach(function(U){var T,F=U.target;(T=e.get(F))===null||T===void 0||T.forEach(function(ne){return ne(F)})})}var z=new G.Z($),oe=null,ee=null;function Me(x,U){e.has(x)||(e.set(x,new Set),z.observe(x)),e.get(x).add(U)}function ce(x,U){e.has(x)&&(e.get(x).delete(U),e.get(x).size||(z.unobserve(x),e.delete(x)))}var te=u(15671),Ce=u(43144),Pt=u(32531),ft=u(73568),Ne=function(x){(0,Pt.Z)(T,x);var U=(0,ft.Z)(T);function T(){return(0,te.Z)(this,T),U.apply(this,arguments)}return(0,Ce.Z)(T,[{key:"render",value:function(){return this.props.children}}]),T}(d.Component),nt=d.createContext(null);function mt(x){var U=x.children,T=x.onBatchResize,F=d.useRef(0),ne=d.useRef([]),_=d.useContext(nt),Ct=d.useCallback(function(ve,ge,Ye){F.current+=1;var gt=F.current;ne.current.push({size:ve,element:ge,data:Ye}),Promise.resolve().then(function(){gt===F.current&&(T==null||T(ne.current),ne.current=[])}),_==null||_(ve,ge,Ye)},[T,_]);return d.createElement(nt.Provider,{value:Ct},U)}function ht(x){var U=x.children,T=x.disabled,F=d.useRef(null),ne=d.useRef(null),_=d.useContext(nt),Ct=typeof U=="function",ve=Ct?U(F):U,ge=d.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),Ye=!Ct&&d.isValidElement(ve)&&(0,A.Yr)(ve),gt=Ye?ve.ref:null,on=d.useMemo(function(){return(0,A.sQ)(gt,F)},[gt,F]),Kt=d.useRef(x);Kt.current=x;var Ot=d.useCallback(function(ye){var Dt=Kt.current,jt=Dt.onResize,ln=Dt.data,de=ye.getBoundingClientRect(),wt=de.width,Fe=de.height,yt=ye.offsetWidth,at=ye.offsetHeight,it=Math.floor(wt),At=Math.floor(Fe);if(ge.current.width!==it||ge.current.height!==At||ge.current.offsetWidth!==yt||ge.current.offsetHeight!==at){var ke={width:it,height:At,offsetWidth:yt,offsetHeight:at};ge.current=ke;var Yt=yt===Math.round(wt)?wt:yt,un=at===Math.round(Fe)?Fe:at,It=(0,y.Z)((0,y.Z)({},ke),{},{offsetWidth:Yt,offsetHeight:un});_==null||_(It,ye,ln),jt&&Promise.resolve().then(function(){jt(It,ye)})}},[]);return d.useEffect(function(){var ye=(0,Ue.Z)(F.current)||(0,Ue.Z)(ne.current);return ye&&!T&&Me(ye,Ot),function(){return ce(ye,Ot)}},[F.current,T]),d.createElement(Ne,{ref:ne},Ye?d.cloneElement(ve,{ref:on}):ve)}var rt="rc-observer-key";function pt(x){var U=x.children,T=typeof U=="function"?[U]:(0,Z.Z)(U);return T.map(function(F,ne){var _=(F==null?void 0:F.key)||"".concat(rt,"-").concat(ne);return d.createElement(ht,(0,R.Z)({},x,{key:_}),F)})}pt.Collection=mt;var Nt=pt},88603:function(Gt,We,u){u.d(We,{tS:function(){return V}});var R=u(74902),d=u(5110);function Z($){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if((0,d.Z)($)){var oe=$.nodeName.toLowerCase(),ee=["input","select","textarea","button"].includes(oe)||$.isContentEditable||oe==="a"&&!!$.getAttribute("href"),Me=$.getAttribute("tabindex"),ce=Number(Me),te=null;return Me&&!Number.isNaN(ce)?te=ce:ee&&te===null&&(te=0),ee&&$.disabled&&(te=null),te!==null&&(te>=0||z&&te<0)}return!1}function V($){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,oe=(0,R.Z)($.querySelectorAll("*")).filter(function(ee){return Z(ee,z)});return Z($,z)&&oe.unshift($),oe}var y=null;function A(){y=document.activeElement}function Ue(){y=null}function G(){if(y)try{y.focus()}catch($){}}function e($,z){if(z.keyCode===9){var oe=V($),ee=oe[z.shiftKey?0:oe.length-1],Me=ee===document.activeElement||$===document.activeElement;if(Me){var ce=oe[z.shiftKey?oe.length-1:0];ce.focus(),z.preventDefault()}}}}}]);
