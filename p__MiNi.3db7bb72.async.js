(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{dWhr:function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return M}));var t=n("tJVT"),r=n("IrXD"),i=n("W9HT"),l=n("q1tI"),o=n.n(l),s=n("Womt"),m=n("RyHr"),c=n("NK00"),h=null,p=null,d=null,u=null,w=null,_=(a,e,n,t,i)=>{var l=new r["a"].Tween({x1:a.x,y1:a.y,z1:a.z,x2:e.x,y2:e.y,z2:e.z});l.to({x1:n.x,y1:n.y,z1:n.z,x2:t.x,y2:t.y,z2:t.z},2e3),l.onUpdate((a=>{p&&w&&(p.position.set(a.x1,a.y1,a.z1),w.target.x=a.x2,w.target.y=a.y2,w.target.z=a.z2,w.update())})),l.onComplete((()=>{w&&(w.enabled=!0),null===i||void 0===i||i()})),l.easing(r["a"].Easing.Cubic.InOut),l.start();var o=()=>{requestAnimationFrame(o),r["a"].update()};o()},g=[{x:.8,y:1,z:.4,frame:1}],v=[],b={x:0,y:0,z:3},y={x:0,y:0,z:0};function M(){var a=Object(l["useRef"])(null),e=Object(l["useState"])(!0),n=Object(t["a"])(e,2),r=n[0],M=n[1],k=()=>{d&&h&&p&&(requestAnimationFrame(k),d.render(h,p))},f=a=>{var e=0,n={},t=["skymap","shache_occ","shache_nor","shache_col","neishi_occ","neishi_nor","mennei_col","luntai_nor","luntai_col","lungu_occ","lungu_nor","lungu_col","linjian_occ","linjian_nor","linjian_col","floor","deng_occ","deng_nor","deng_col","cheshen_occ","cheshen_nor","chejia_occ","chejia_nor","chedengzhao_nor"],r=()=>{var i,l=t[e];null===(i=u)||void 0===i||i.load("car3d/textures/".concat(l,".jpg"),(i=>{if(e<t.length-1)n[l]=i,e+=1,r();else for(var o in a)if(Object.prototype.hasOwnProperty.call(a,o)){var m=a[o];switch(m.name){case"smart_lungu0":case"smart_lungu1":case"smart_lungu2":case"smart_lungu3":m.material=new s["M"],m.material.map=n.lungu_col,m.material.normalMap=n.lungu_nor,m.material.aoMap=n.lungu_occ;break;case"smart_chelun0":case"smart_chelun1":case"smart_chelun2":case"smart_chelun3":m.material=new s["M"],m.material.map=n.luntai_col,m.material.normalMap=n.luntai_nor;break;case"smart_boli":m.material=new s["K"],m.material.color=new s["h"](3355443),m.material.transparent=!0,m.material.opacity=.2,m.material.envMap=n.skymap,m.material.envMap.mapping=s["k"];break;case"smart_tianchuang":m.material=new s["K"],m.material.color=new s["h"](0),m.material.transparent=!0,m.material.opacity=.5,m.material.envMap=n.skymap,m.material.envMap.mapping=s["k"];break;case"smart_shachepan":m.material=new s["M"],m.material.color=new s["h"](15921906),m.material.emissive=new s["h"](0),m.material.metalness=.5,m.material.roughness=.62,m.material.map=n.shache_col,m.material.normalMap=n.shache_nor,m.material.aoMap=n.shache_occ;break;case"smart_neishi":case"smart_neishi2":m.material=new s["K"],m.material.color=new s["h"](3355443),m.material.emissive=new s["h"](0),m.material.normalMap=n.neishi_nor,m.material.aoMap=n.neishi_occ;break;case"smart_neibao":m.material=new s["K"],m.material.color=new s["h"](3026478),m.material.map=n.mennei_col;break;case"smart_linjian":m.material=new s["M"],m.material.color=new s["h"](3026478),m.material.metalness=.5,m.material.roughness=.62,m.material.map=n.linjian_col,m.material.normalMap=n.linjian_nor,m.material.aoMap=n.linjian_occ;break;case"smart_daochejing":m.material=new s["K"],m.material.color=new s["h"](16777215);break;case"smart_bolinei":m.material=new s["K"],m.material.color=new s["h"](3355443);break;case"smart_chedeng":case"smart_shachedeng":case"smart_wudeng":m.material=new s["M"],m.material.color=new s["h"](16777215),m.material.emissive=new s["h"](3355443),m.material.metalness=1,m.material.roughness=.4,m.material.normalMap=n.deng_nor;break;case"smart_chedengzhao":m.material=new s["K"],m.material.color=new s["h"](16777215),m.material.emissive=new s["h"](0),m.material.transparent=!0,m.material.opacity=.3,m.material.normalMap=n.chedengzhao_nor;break;case"smart_shachedengzhao":m.material=new s["K"],m.material.color=new s["h"](13240342),m.material.transparent=!0,m.material.opacity=.4,m.material.normalMap=n.chedengzhao_nor;break;case"smart_shangeshang":m.material=new s["M"],m.material.color=new s["h"](986895),m.material.emissive=new s["h"](0),m.material.metalness=1,m.material.roughness=0;break;case"smart_shangexia":m.material=new s["K"],m.material.color=new s["h"](0),M(!1);break;case"smart_LOGO":case"smart_paiqiguan":m.material=new s["M"],m.material.color=new s["h"](7105644),m.material.emissive=new s["h"](4473924),m.material.metalness=1,m.material.roughness=.32;break;case"smart_cheshen":m.material=new s["M"],m.material.color=new s["h"](7365403),m.material.metalness=.44,m.material.roughness=0,m.material.normalMap=n.cheshen_nor,m.material.aoMap=n.cheshen_occ,m.material.envMap=n.skymap,m.material.envMap.mapping=s["k"],m.material.envMapIntensity=1;break;case"smart_chejia":m.material=new s["M"],m.material.color=new s["h"](2435369),m.material.metalness=.44,m.material.roughness=.4,m.material.normalMap=n.chejia_nor,m.material.aoMap=n.chejia_occ;break;default:}}}))};r()},z=()=>{if(h){var a=new s["a"](14013909);a.intensity=1.2,h.add(a);var e=new s["i"];e.position.x=5,e.position.y=3,e.position.z=-5,e.intensity=.8,h.add(e);var n=new s["i"](16777215);n.position.x=-5,n.position.y=3,n.position.z=5,n.intensity=.8,h.add(n)}},x=()=>{var a=new c["a"];a.load("car3d/model.gltf",(a=>{h&&h.add(a.scene);var e=a.scene.children[0].children;f(e)}),(a=>{console.info("".concat(a.loaded/13970297*100,"% loaded")),a.loaded>=13970297&&console.info("end")}),(a=>{console.info(a),console.info("An error happened")}))},j=()=>{if(h){for(var a=(new s["pb"]).load("car3d/point.png"),e=new s["o"],n=new s["lb"]({map:a,color:16777215,fog:!1}),t=0;t<g.length;t++){var r=g[t].x,i=g[t].y-.5,l=g[t].z,o=new s["kb"](n);o.scale.set(.15,.15,1),o.position.set(r,i,l),e.add(o),v.push(o)}h.add(e),document.body.addEventListener("click",(a=>{if(a.preventDefault(),p){var e=new s["cb"],n=new s["sb"];n.x=a.clientX/window.innerWidth*2-1,n.y=-a.clientY/window.innerHeight*2+1,e.setFromCamera(n,p);var t=e.intersectObjects(v);if(t.length>0){var r=t[0].point,i=r.x,l=r.y,o=r.z;b&&y&&_(b,y,{x:i+.1,y:l-.1,z:o-.4},{x:1,y:.5,z:1.5})}}}))}},K=()=>{h=new s["eb"],p=new s["U"](90,document.body.clientWidth/document.body.clientHeight,.1,100),d=new s["vb"],u=new s["pb"],p.position.set(0,0,3),d.setSize(document.body.clientWidth,document.body.clientHeight);var e=a.current;e&&e.appendChild(d.domElement),w=new m["a"](p,d.domElement),w.addEventListener("change",(()=>{var a,e;b=null===(a=p)||void 0===a?void 0:a.position,y=null===(e=w)||void 0===e?void 0:e.target})),x(),k(),z(),j()};return Object(l["useEffect"])((()=>{K()}),[]),o.a.createElement("div",{style:{position:"absolute",top:0,height:"100vh",width:"100vw",background:"rgba(0, 0, 0, .7)"}},o.a.createElement(i["a"],{tip:"\u6a21\u578b\u52a0\u8f7d\u4e2d...",spinning:r,style:{height:"100vh"}},o.a.createElement("div",{style:{position:"absolute",top:0,height:"100vh",width:"100vw"},ref:a})))}}}]);