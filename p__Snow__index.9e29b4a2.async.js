(self.webpackChunk=self.webpackChunk||[]).push([[509],{60419:function(t,a,e){"use strict";e.r(a),e.d(a,{default:function(){return y}});var s=e(27424),n=e.n(s),r=e(67294),p=e.p+"static/snow.f17c2116.jpg",f=e(85893),d=[],o=null,l=null,u=new Image,h=0;u.src=p;function y(){var x=(0,r.useState)(!1),b=n()(x,2),g=b[0],E=b[1],R=(0,r.useState)(document.body.offsetHeight-60),I=n()(R,2),S=I[0],L=I[1],P=(0,r.useState)(document.body.offsetWidth),M=n()(P,2),w=M[0],W=M[1],O=(0,r.useRef)(null);function C(c){d.length<100&&d.push({x:Math.random()*c,y:0,speed:1+Math.random()*4,radius:3+Math.random()*4})}function F(c,v){d.forEach(function(i){i.y+=i.speed,i.y>c&&(i.x=Math.random()*v,i.y=0,i.speed=1+Math.random()*4,i.radius=3+Math.random()*4)})}function H(c){var v;!o||!u||((v=o)===null||v===void 0||v.drawImage(u,0,0,c*2,c),d.forEach(function(i){o&&(o.beginPath(),o.arc(i.x,i.y,i.radius,0,2*Math.PI),o.closePath(),o.fillStyle="white",o.fill())}))}function A(c,v){C(v),F(c,v),H(c),h=window.requestAnimationFrame(A.bind(null,c,v))}var j=function(){o=null,l&&clearTimeout(l),h&&cancelAnimationFrame(h)};return(0,r.useEffect)(function(){var c=O.current;return c&&(o=c.getContext("2d"),A(S,w),window.addEventListener("resize",function(){l&&clearTimeout(l),l=setTimeout(function(){if(o){var v=c.toDataURL(),i=document.body.offsetWidth,m=document.body.offsetHeight-60;o.scale(w/i,S/m);var T=new Image;T.onload=function(){o&&(o.drawImage(T,0,0,i,m),h&&cancelAnimationFrame(h),A(m,i),E(!g),L(m),W(i))},T.src=v}},500)})),j},[]),(0,f.jsx)("canvas",{ref:O,height:S,width:w,style:{overflow:"hidden"}})}},75251:function(t,a,e){"use strict";e(27418);var s=e(67294),n=60103;if(a.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var r=Symbol.for;n=r("react.element"),a.Fragment=r("react.fragment")}var p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function o(l,u,h){var y,x={},b=null,g=null;h!==void 0&&(b=""+h),u.key!==void 0&&(b=""+u.key),u.ref!==void 0&&(g=u.ref);for(y in u)f.call(u,y)&&!d.hasOwnProperty(y)&&(x[y]=u[y]);if(l&&l.defaultProps)for(y in u=l.defaultProps,u)x[y]===void 0&&(x[y]=u[y]);return{$$typeof:n,type:l,key:b,ref:g,props:x,_owner:p.current}}a.jsx=o,a.jsxs=o},85893:function(t,a,e){"use strict";t.exports=e(75251)},73897:function(t){function a(e,s){(s==null||s>e.length)&&(s=e.length);for(var n=0,r=new Array(s);n<s;n++)r[n]=e[n];return r}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},85372:function(t){function a(e){if(Array.isArray(e))return e}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},68872:function(t){function a(e,s){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,p,f,d,o=[],l=!0,u=!1;try{if(f=(n=n.call(e)).next,s===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=f.call(n)).done)&&(o.push(r.value),o.length!==s);l=!0);}catch(h){u=!0,p=h}finally{try{if(!l&&n.return!=null&&(d=n.return(),Object(d)!==d))return}finally{if(u)throw p}}return o}}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},12218:function(t){function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},27424:function(t,a,e){var s=e(85372),n=e(68872),r=e(86116),p=e(12218);function f(d,o){return s(d)||n(d,o)||r(d,o)||p()}t.exports=f,t.exports.__esModule=!0,t.exports.default=t.exports},86116:function(t,a,e){var s=e(73897);function n(r,p){if(r){if(typeof r=="string")return s(r,p);var f=Object.prototype.toString.call(r).slice(8,-1);if(f==="Object"&&r.constructor&&(f=r.constructor.name),f==="Map"||f==="Set")return Array.from(r);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return s(r,p)}}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports}}]);