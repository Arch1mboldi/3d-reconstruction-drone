(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Yf={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function Qx(){if(q_)return Uo;q_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=t,Uo.jsx=i,Uo.jsxs=i,Uo}var j_;function Jx(){return j_||(j_=1,Yf.exports=Qx()),Yf.exports}var ct=Jx(),qf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function $x(){if(Z_)return oe;Z_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(L,at,Tt){this.props=L,this.context=at,this.refs=w,this.updater=Tt||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,at){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,at,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=y.prototype;function P(L,at,Tt){this.props=L,this.context=at,this.refs=w,this.updater=Tt||M}var O=P.prototype=new g;O.constructor=P,E(O,y.prototype),O.isPureReactComponent=!0;var D=Array.isArray,H={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function B(L,at,Tt,Rt,q,mt){return Tt=mt.ref,{$$typeof:r,type:L,key:at,ref:Tt!==void 0?Tt:null,props:mt}}function Y(L,at){return B(L.type,at,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function b(L){var at={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Tt){return at[Tt]})}var I=/\/+/g;function st(L,at){return typeof L=="object"&&L!==null&&L.key!=null?b(""+L.key):at.toString(36)}function nt(){}function ut(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(nt,nt):(L.status="pending",L.then(function(at){L.status==="pending"&&(L.status="fulfilled",L.value=at)},function(at){L.status==="pending"&&(L.status="rejected",L.reason=at)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ht(L,at,Tt,Rt,q){var mt=typeof L;(mt==="undefined"||mt==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(mt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case r:case t:St=!0;break;case _:return St=L._init,ht(St(L._payload),at,Tt,Rt,q)}}if(St)return q=q(L),St=Rt===""?"."+st(L,0):Rt,D(q)?(Tt="",St!=null&&(Tt=St.replace(I,"$&/")+"/"),ht(q,at,Tt,"",function(Qt){return Qt})):q!=null&&(C(q)&&(q=Y(q,Tt+(q.key==null||L&&L.key===q.key?"":(""+q.key).replace(I,"$&/")+"/")+St)),at.push(q)),1;St=0;var bt=Rt===""?".":Rt+":";if(D(L))for(var Ct=0;Ct<L.length;Ct++)Rt=L[Ct],mt=bt+st(Rt,Ct),St+=ht(Rt,at,Tt,mt,q);else if(Ct=x(L),typeof Ct=="function")for(L=Ct.call(L),Ct=0;!(Rt=L.next()).done;)Rt=Rt.value,mt=bt+st(Rt,Ct++),St+=ht(Rt,at,Tt,mt,q);else if(mt==="object"){if(typeof L.then=="function")return ht(ut(L),at,Tt,Rt,q);throw at=String(L),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return St}function V(L,at,Tt){if(L==null)return L;var Rt=[],q=0;return ht(L,Rt,"","",function(mt){return at.call(Tt,mt,q++)}),Rt}function rt(L){if(L._status===-1){var at=L._result;at=at(),at.then(function(Tt){(L._status===0||L._status===-1)&&(L._status=1,L._result=Tt)},function(Tt){(L._status===0||L._status===-1)&&(L._status=2,L._result=Tt)}),L._status===-1&&(L._status=0,L._result=at)}if(L._status===1)return L._result.default;throw L._result}var Z=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function yt(){}return oe.Children={map:V,forEach:function(L,at,Tt){V(L,function(){at.apply(this,arguments)},Tt)},count:function(L){var at=0;return V(L,function(){at++}),at},toArray:function(L){return V(L,function(at){return at})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},oe.Component=y,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.act=function(){throw Error("act(...) is not supported in production builds of React.")},oe.cache=function(L){return function(){return L.apply(null,arguments)}},oe.cloneElement=function(L,at,Tt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Rt=E({},L.props),q=L.key,mt=void 0;if(at!=null)for(St in at.ref!==void 0&&(mt=void 0),at.key!==void 0&&(q=""+at.key),at)!F.call(at,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&at.ref===void 0||(Rt[St]=at[St]);var St=arguments.length-2;if(St===1)Rt.children=Tt;else if(1<St){for(var bt=Array(St),Ct=0;Ct<St;Ct++)bt[Ct]=arguments[Ct+2];Rt.children=bt}return B(L.type,q,void 0,void 0,mt,Rt)},oe.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},oe.createElement=function(L,at,Tt){var Rt,q={},mt=null;if(at!=null)for(Rt in at.key!==void 0&&(mt=""+at.key),at)F.call(at,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(q[Rt]=at[Rt]);var St=arguments.length-2;if(St===1)q.children=Tt;else if(1<St){for(var bt=Array(St),Ct=0;Ct<St;Ct++)bt[Ct]=arguments[Ct+2];q.children=bt}if(L&&L.defaultProps)for(Rt in St=L.defaultProps,St)q[Rt]===void 0&&(q[Rt]=St[Rt]);return B(L,mt,void 0,void 0,null,q)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(L){return{$$typeof:d,render:L}},oe.isValidElement=C,oe.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:rt}},oe.memo=function(L,at){return{$$typeof:p,type:L,compare:at===void 0?null:at}},oe.startTransition=function(L){var at=H.T,Tt={};H.T=Tt;try{var Rt=L(),q=H.S;q!==null&&q(Tt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(yt,Z)}catch(mt){Z(mt)}finally{H.T=at}},oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(L){return H.H.use(L)},oe.useActionState=function(L,at,Tt){return H.H.useActionState(L,at,Tt)},oe.useCallback=function(L,at){return H.H.useCallback(L,at)},oe.useContext=function(L){return H.H.useContext(L)},oe.useDebugValue=function(){},oe.useDeferredValue=function(L,at){return H.H.useDeferredValue(L,at)},oe.useEffect=function(L,at){return H.H.useEffect(L,at)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(L,at,Tt){return H.H.useImperativeHandle(L,at,Tt)},oe.useInsertionEffect=function(L,at){return H.H.useInsertionEffect(L,at)},oe.useLayoutEffect=function(L,at){return H.H.useLayoutEffect(L,at)},oe.useMemo=function(L,at){return H.H.useMemo(L,at)},oe.useOptimistic=function(L,at){return H.H.useOptimistic(L,at)},oe.useReducer=function(L,at,Tt){return H.H.useReducer(L,at,Tt)},oe.useRef=function(L){return H.H.useRef(L)},oe.useState=function(L){return H.H.useState(L)},oe.useSyncExternalStore=function(L,at,Tt){return H.H.useSyncExternalStore(L,at,Tt)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.0.0",oe}var K_;function _d(){return K_||(K_=1,qf.exports=$x()),qf.exports}var en=_d();const tc=()=>({trajectory:[],ground_truth:[],map_points:[]});function tS(){const[r,t]=en.useState(tc);return en.useEffect(()=>{const i=new AbortController;let s=tc(),l="",u;async function h(){const d=new URLSearchParams({session:l,points:s.map_points.length,poses:s.trajectory.length});try{const m=await fetch("/live/state?"+d,{signal:i.signal,cache:"no-store"});if(!m.ok)throw new Error("Dashboard HTTP "+m.status);const p=await m.json();if(l!==p.session&&(s=tc(),l=p.session),p.pointStart!==s.map_points.length||p.poseStart!==s.trajectory.length)throw s=tc(),l="",new Error("Resynchronizing map");for(const[_,v]of p.poses)s.trajectory.push(_),s.ground_truth.push(v);for(const _ of p.points)s.map_points.push(_);t({...p,...s})}catch(m){i.signal.aborted||t(p=>({...p,tracking:"offline",message:m.message}))}finally{i.signal.aborted||(u=setTimeout(h,180))}}return h(),()=>{i.abort(),clearTimeout(u)}},[]),r}const Lo=(r,t=2)=>Number.isFinite(r)?r.toFixed(t):"—";function eS({Scene:r,Metric:t}){const i=tS(),s=["tracking","lost","initializing"].includes(i.tracking),[l,u]=en.useState(0),[h,d]=en.useState(0);return ct.jsxs("main",{children:[ct.jsxs("header",{children:[ct.jsx("h1",{children:"3D Reconstruction Drone"}),ct.jsxs("div",{className:"connection "+(s?"online":"offline"),children:[ct.jsx("i",{}),s?"ORANGE PI CONNECTED":i.message||"CONNECTING"]})]}),ct.jsxs("section",{className:"status-strip panel",children:[ct.jsx(t,{label:"ENGINE",value:"Laptop stereo VO"}),ct.jsx(t,{label:"TRACKING",value:i.tracking||"waiting"}),ct.jsx(t,{label:"STEREO PAIRS / S",value:Lo(i.fps,1)}),ct.jsx(t,{label:"VO TIME",value:Lo(i.processing_ms,1)+" ms"}),ct.jsx(t,{label:"FRAME",value:i.frame??"—"}),ct.jsx(t,{label:"SOURCE RATE",value:"20 Hz"})]}),ct.jsxs("section",{className:"workspace",children:[ct.jsxs("div",{className:"left-column",children:[ct.jsxs("section",{className:"panel",children:[ct.jsxs("div",{className:"panel-title",children:[ct.jsx("span",{children:"CAMERA 0 · LEFT"}),ct.jsx("span",{children:"CAMERA 1 · RIGHT"})]}),ct.jsx("img",{className:"stereo-pair",src:"/live/stereo.mjpg?v="+l,alt:"Rectified stereo pair",onError:()=>setTimeout(()=>u(m=>m+1),1200)})]}),ct.jsxs("section",{className:"panel viewport-panel",children:[ct.jsxs("div",{className:"panel-title",children:[ct.jsx("span",{children:"WORLD VIEW"}),ct.jsxs("div",{className:"legend",children:[ct.jsx("b",{className:"estimate"}),"Estimated ",ct.jsx("b",{className:"truth"}),"Aligned ground truth",ct.jsx("b",{className:"points"}),"Map points"," ",ct.jsx("button",{onClick:()=>d(m=>m+1),children:"Fit map"})]})]}),ct.jsx(r,{state:i,fit:h})]})]}),ct.jsxs("aside",{children:[ct.jsxs("section",{className:"panel telemetry-panel",children:[ct.jsx("div",{className:"panel-title",children:"SLAM TELEMETRY"}),ct.jsx(t,{label:"Map points",value:i.map_points.length}),ct.jsx(t,{label:"Tracked features",value:i.features??"—"}),ct.jsx(t,{label:"PnP inliers",value:i.inliers??"—"}),ct.jsx(t,{label:"Position error (m)",value:Lo(i.position_error_m,3)}),ct.jsx(t,{label:"Trajectory RMSE (m)",value:Lo(i.ate_rmse_m,3)}),ct.jsx(t,{label:"Compared poses",value:i.compared??0}),ct.jsx(t,{label:"Position (m)",value:i.position?.map(m=>Lo(m,2)).join("  ")||"—"})]}),ct.jsxs("section",{className:"panel telemetry-panel",children:[ct.jsx("div",{className:"panel-title",children:"EUROC V1_01_EASY"}),ct.jsx(t,{label:"Wi-Fi image source",value:i.source||"—"})]})]})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gd="173",Sr={ROTATE:0,DOLLY:1,PAN:2},vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nS=0,Q_=1,iS=2,f0=1,aS=2,ia=3,Ga=0,Xn=1,aa=2,Fa=0,yr=1,J_=2,$_=3,tg=4,sS=5,_s=100,rS=101,oS=102,lS=103,cS=104,uS=200,fS=201,hS=202,dS=203,Ch=204,wh=205,pS=206,mS=207,_S=208,gS=209,vS=210,xS=211,SS=212,yS=213,MS=214,Dh=0,Uh=1,Lh=2,Tr=3,Nh=4,Oh=5,Ph=6,zh=7,h0=0,ES=1,TS=2,Ha=0,bS=1,AS=2,RS=3,CS=4,wS=5,DS=6,US=7,d0=300,br=301,Ar=302,Bh=303,Ih=304,Fc=306,Fh=1e3,vs=1001,Hh=1002,Ei=1003,LS=1004,ec=1005,Li=1006,jf=1007,xs=1008,la=1009,p0=1010,m0=1011,ko=1012,vd=1013,Ss=1014,sa=1015,Yo=1016,xd=1017,Sd=1018,Rr=1020,_0=35902,g0=1021,v0=1022,Mi=1023,x0=1024,S0=1025,Mr=1026,Cr=1027,y0=1028,yd=1029,M0=1030,Md=1031,Ed=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,Gh=35840,Vh=35841,kh=35842,Xh=35843,Wh=36196,Yh=37492,qh=37496,jh=37808,Zh=37809,Kh=37810,Qh=37811,Jh=37812,$h=37813,td=37814,ed=37815,nd=37816,id=37817,ad=37818,sd=37819,rd=37820,od=37821,Uc=36492,ld=36494,cd=36495,E0=36283,ud=36284,fd=36285,hd=36286,NS=3200,OS=3201,PS=0,zS=1,Ia="",fi="srgb",wr="srgb-linear",Nc="linear",Pe="srgb",nr=7680,eg=519,BS=512,IS=513,FS=514,T0=515,HS=516,GS=517,VS=518,kS=519,ng=35044,XS=35048,ig="300 es",ra=2e3,Oc=2001;class Es{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ag=1234567;const Go=Math.PI/180,Xo=180/Math.PI;function Ur(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function pe(r,t,i){return Math.max(t,Math.min(i,r))}function Td(r,t){return(r%t+t)%t}function WS(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function YS(r,t,i){return r!==t?(i-r)/(t-r):0}function Vo(r,t,i){return(1-i)*r+i*t}function qS(r,t,i,s){return Vo(r,t,1-Math.exp(-i*s))}function jS(r,t=1){return t-Math.abs(Td(r,t*2)-t)}function ZS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function KS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function QS(r,t){return r+Math.floor(Math.random()*(t-r+1))}function JS(r,t){return r+Math.random()*(t-r)}function $S(r){return r*(.5-Math.random())}function ty(r){r!==void 0&&(ag=r);let t=ag+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ey(r){return r*Go}function ny(r){return r*Xo}function iy(r){return(r&r-1)===0&&r!==0}function ay(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ry(r,t,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),m=h(i/2),p=u((t+s)/2),_=h((t+s)/2),v=u((t-s)/2),x=h((t-s)/2),M=u((s-t)/2),E=h((s-t)/2);switch(l){case"XYX":r.set(d*_,m*v,m*x,d*p);break;case"YZY":r.set(m*x,d*_,m*v,d*p);break;case"ZXZ":r.set(m*v,m*x,d*_,d*p);break;case"XZX":r.set(d*_,m*E,m*M,d*p);break;case"YXY":r.set(m*M,d*_,m*E,d*p);break;case"ZYZ":r.set(m*E,m*M,d*_,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function _r(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const b0={DEG2RAD:Go,RAD2DEG:Xo,generateUUID:Ur,clamp:pe,euclideanModulo:Td,mapLinear:WS,inverseLerp:YS,lerp:Vo,damp:qS,pingpong:jS,smoothstep:ZS,smootherstep:KS,randInt:QS,randFloat:JS,randFloatSpread:$S,seededRandom:ty,degToRad:ey,radToDeg:ny,isPowerOfTwo:iy,ceilPowerOfTwo:ay,floorPowerOfTwo:sy,setQuaternionFromProperEuler:ry,normalize:zn,denormalize:_r};class fe{constructor(t=0,i=0){fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,i,s,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],x=s[2],M=s[5],E=s[8],w=l[0],y=l[3],g=l[6],P=l[1],O=l[4],D=l[7],H=l[2],F=l[5],B=l[8];return u[0]=h*w+d*P+m*H,u[3]=h*y+d*O+m*F,u[6]=h*g+d*D+m*B,u[1]=p*w+_*P+v*H,u[4]=p*y+_*O+v*F,u[7]=p*g+_*D+v*B,u[2]=x*w+M*P+E*H,u[5]=x*y+M*O+E*F,u[8]=x*g+M*D+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*u*_+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*h-d*p,x=d*m-_*u,M=p*u-h*m,E=i*v+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*h)*w,t[3]=x*w,t[4]=(_*i-l*m)*w,t[5]=(l*u-d*i)*w,t[6]=M*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Zf.makeScale(t,i)),this}rotate(t){return this.premultiply(Zf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Zf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new le;function A0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Pc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function oy(){const r=Pc("canvas");return r.style.display="block",r}const sg={};function gr(r){r in sg||(sg[r]=!0,console.warn(r))}function ly(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function cy(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uy(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const rg=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),og=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fy(){const r={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=Er(l.r),l.g=Er(l.g),l.b=Er(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?Nc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[wr]:{primaries:t,whitePoint:s,transfer:Nc,toXYZ:rg,fromXYZ:og,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:s,transfer:Pe,toXYZ:rg,fromXYZ:og,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),r}const Ce=fy();function oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Er(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ir;class hy{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ir===void 0&&(ir=Pc("canvas")),ir.width=t.width,ir.height=t.height;const s=ir.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ir}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=oa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(oa(i[s]/255)*255):i[s]=oa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dy=0;class R0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Ur(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Kf(l[h].image)):u.push(Kf(l[h]))}else u=Kf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Kf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let py=0;class Wn extends Es{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=vs,l=vs,u=Li,h=xs,d=Mi,m=la,p=Wn.DEFAULT_ANISOTROPY,_=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Ur(),this.name="",this.source=new R0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==d0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fh:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case Hh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fh:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case Hh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=d0;Wn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,s=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],_=m[4],v=m[8],x=m[1],M=m[5],E=m[9],w=m[2],y=m[6],g=m[10];if(Math.abs(_-x)<.01&&Math.abs(v-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(M+1)/2,H=(g+1)/2,F=(_+x)/4,B=(v+w)/4,Y=(E+y)/4;return O>D&&O>H?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=F/s,u=B/s):D>H?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=F/l,u=Y/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=B/u,l=Y/u),this.set(s,l,u,i),this}let P=Math.sqrt((y-E)*(y-E)+(v-w)*(v-w)+(x-_)*(x-_));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(v-w)/P,this.z=(x-_)/P,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this.w=pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this.w=pe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class my extends Es{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new Wn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new R0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends my{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class C0 extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _y extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3];const x=u[h+0],M=u[h+1],E=u[h+2],w=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=w;return}if(v!==w||m!==x||p!==M||_!==E){let y=1-d;const g=m*x+p*M+_*E+v*w,P=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const H=Math.sqrt(O),F=Math.atan2(H,g*P);y=Math.sin(y*F)/H,d=Math.sin(d*F)/H}const D=d*P;if(m=m*y+x*D,p=p*y+M*D,_=_*y+E*D,v=v*y+w*D,y===1-d){const H=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=H,p*=H,_*=H,v*=H}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=u[h],x=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+_*v+m*M-p*x,t[i+1]=m*E+_*x+p*v-d*M,t[i+2]=p*E+_*M+d*x-m*v,t[i+3]=_*E-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(u/2),x=m(s/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=x*_*v+p*M*E,this._y=p*M*v-x*_*E,this._z=p*_*E+x*M*v,this._w=p*_*v-x*M*E;break;case"YXZ":this._x=x*_*v+p*M*E,this._y=p*M*v-x*_*E,this._z=p*_*E-x*M*v,this._w=p*_*v+x*M*E;break;case"ZXY":this._x=x*_*v-p*M*E,this._y=p*M*v+x*_*E,this._z=p*_*E+x*M*v,this._w=p*_*v-x*M*E;break;case"ZYX":this._x=x*_*v-p*M*E,this._y=p*M*v+x*_*E,this._z=p*_*E-x*M*v,this._w=p*_*v+x*M*E;break;case"YZX":this._x=x*_*v+p*M*E,this._y=p*M*v+x*_*E,this._z=p*_*E-x*M*v,this._w=p*_*v-x*M*E;break;case"XZY":this._x=x*_*v-p*M*E,this._y=p*M*v-x*_*E,this._z=p*_*E+x*M*v,this._w=p*_*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],x=s+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-s*p,this._z=u*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(lg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(lg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*_,this.y=s+m*_+d*p-u*v,this.z=l+m*v+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qf.copy(this).projectOnVector(t),this.sub(Qf)}reflect(t){return this.sub(Qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new J,lg=new Ms;class Lr{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,vi):vi.fromBufferAttribute(u,h),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),nc.copy(s.boundingBox)),nc.applyMatrix4(t.matrixWorld),this.union(nc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),ic.subVectors(this.max,No),ar.subVectors(t.a,No),sr.subVectors(t.b,No),rr.subVectors(t.c,No),Ua.subVectors(sr,ar),La.subVectors(rr,sr),cs.subVectors(ar,rr);let i=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-cs.z,cs.y,Ua.z,0,-Ua.x,La.z,0,-La.x,cs.z,0,-cs.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-cs.y,cs.x,0];return!Jf(i,ar,sr,rr,ic)||(i=[1,0,0,0,1,0,0,0,1],!Jf(i,ar,sr,rr,ic))?!1:(ac.crossVectors(Ua,La),i=[ac.x,ac.y,ac.z],Jf(i,ar,sr,rr,ic))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ji=[new J,new J,new J,new J,new J,new J,new J,new J],vi=new J,nc=new Lr,ar=new J,sr=new J,rr=new J,Ua=new J,La=new J,cs=new J,No=new J,ic=new J,ac=new J,us=new J;function Jf(r,t,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){us.fromArray(r,u);const d=l.x*Math.abs(us.x)+l.y*Math.abs(us.y)+l.z*Math.abs(us.z),m=t.dot(us),p=i.dot(us),_=s.dot(us);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const gy=new Lr,Oo=new J,$f=new J;class Nr{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):gy.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Oo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($f.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add($f)),this.expandByPoint(Oo.copy(t.center).sub($f))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new J,th=new J,sc=new J,Na=new J,eh=new J,rc=new J,nh=new J;class Hc{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){th.copy(t).add(i).multiplyScalar(.5),sc.copy(i).sub(t).normalize(),Na.copy(this.origin).sub(th);const u=t.distanceTo(i)*.5,h=-this.direction.dot(sc),d=Na.dot(this.direction),m=-Na.dot(sc),p=Na.lengthSq(),_=Math.abs(1-h*h);let v,x,M,E;if(_>0)if(v=h*m-d,x=h*d-m,E=u*_,v>=0)if(x>=-E)if(x<=E){const w=1/_;v*=w,x*=w,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(th).addScaledVector(sc,x),M}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(u=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(u=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,s,l,u){eh.subVectors(i,t),rc.subVectors(s,t),nh.crossVectors(eh,rc);let h=this.direction.dot(nh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,t);const m=d*this.direction.dot(rc.crossVectors(Na,rc));if(m<0)return null;const p=d*this.direction.dot(eh.cross(Na));if(p<0||m+p>h)return null;const _=-d*Na.dot(nh);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,s,l,u,h,d,m,p,_,v,x,M,E,w,y){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,_,v,x,M,E,w,y)}set(t,i,s,l,u,h,d,m,p,_,v,x,M,E,w,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=x,g[3]=M,g[7]=E,g[11]=w,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/or.setFromMatrixColumn(t,0).length(),u=1/or.setFromMatrixColumn(t,1).length(),h=1/or.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*_,M=h*v,E=d*_,w=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=x-w*p,i[9]=-d*m,i[2]=w-x*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*_,M=m*v,E=p*_,w=p*v;i[0]=x+w*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-E,i[6]=w+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*_,M=m*v,E=p*_,w=p*v;i[0]=x-w*d,i[4]=-h*v,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*_,i[9]=w-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*_,M=h*v,E=d*_,w=d*v;i[0]=m*_,i[4]=E*p-M,i[8]=x*p+w,i[1]=m*v,i[5]=w*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,E=d*m,w=d*p;i[0]=m*_,i[4]=w-x*v,i[8]=E*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+E,i[10]=x-w*v}else if(t.order==="XZY"){const x=h*m,M=h*p,E=d*m,w=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=x*v+w,i[5]=h*_,i[9]=M*v-E,i[2]=E*v-M,i[6]=d*_,i[10]=w*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vy,t,xy)}lookAt(t,i,s){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Oa.crossVectors(s,Jn),Oa.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Oa.crossVectors(s,Jn)),Oa.normalize(),oc.crossVectors(Jn,Oa),l[0]=Oa.x,l[4]=oc.x,l[8]=Jn.x,l[1]=Oa.y,l[5]=oc.y,l[9]=Jn.y,l[2]=Oa.z,l[6]=oc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],x=s[9],M=s[13],E=s[2],w=s[6],y=s[10],g=s[14],P=s[3],O=s[7],D=s[11],H=s[15],F=l[0],B=l[4],Y=l[8],C=l[12],b=l[1],I=l[5],st=l[9],nt=l[13],ut=l[2],ht=l[6],V=l[10],rt=l[14],Z=l[3],yt=l[7],L=l[11],at=l[15];return u[0]=h*F+d*b+m*ut+p*Z,u[4]=h*B+d*I+m*ht+p*yt,u[8]=h*Y+d*st+m*V+p*L,u[12]=h*C+d*nt+m*rt+p*at,u[1]=_*F+v*b+x*ut+M*Z,u[5]=_*B+v*I+x*ht+M*yt,u[9]=_*Y+v*st+x*V+M*L,u[13]=_*C+v*nt+x*rt+M*at,u[2]=E*F+w*b+y*ut+g*Z,u[6]=E*B+w*I+y*ht+g*yt,u[10]=E*Y+w*st+y*V+g*L,u[14]=E*C+w*nt+y*rt+g*at,u[3]=P*F+O*b+D*ut+H*Z,u[7]=P*B+O*I+D*ht+H*yt,u[11]=P*Y+O*st+D*V+H*L,u[15]=P*C+O*nt+D*rt+H*at,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],x=t[10],M=t[14],E=t[3],w=t[7],y=t[11],g=t[15];return E*(+u*m*v-l*p*v-u*d*x+s*p*x+l*d*M-s*m*M)+w*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*_-u*m*_)+y*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*_-s*p*_)+g*(-l*d*_-i*m*v+i*d*x+l*h*v-s*h*x+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],x=t[10],M=t[11],E=t[12],w=t[13],y=t[14],g=t[15],P=v*y*p-w*x*p+w*m*M-d*y*M-v*m*g+d*x*g,O=E*x*p-_*y*p-E*m*M+h*y*M+_*m*g-h*x*g,D=_*w*p-E*v*p+E*d*M-h*w*M-_*d*g+h*v*g,H=E*v*m-_*w*m-E*d*x+h*w*x+_*d*y-h*v*y,F=i*P+s*O+l*D+u*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/F;return t[0]=P*B,t[1]=(w*x*u-v*y*u-w*l*M+s*y*M+v*l*g-s*x*g)*B,t[2]=(d*y*u-w*m*u+w*l*p-s*y*p-d*l*g+s*m*g)*B,t[3]=(v*m*u-d*x*u-v*l*p+s*x*p+d*l*M-s*m*M)*B,t[4]=O*B,t[5]=(_*y*u-E*x*u+E*l*M-i*y*M-_*l*g+i*x*g)*B,t[6]=(E*m*u-h*y*u-E*l*p+i*y*p+h*l*g-i*m*g)*B,t[7]=(h*x*u-_*m*u+_*l*p-i*x*p-h*l*M+i*m*M)*B,t[8]=D*B,t[9]=(E*v*u-_*w*u-E*s*M+i*w*M+_*s*g-i*v*g)*B,t[10]=(h*w*u-E*d*u+E*s*p-i*w*p-h*s*g+i*d*g)*B,t[11]=(_*d*u-h*v*u-_*s*p+i*v*p+h*s*M-i*d*M)*B,t[12]=H*B,t[13]=(_*w*l-E*v*l+E*s*x-i*w*x-_*s*y+i*v*y)*B,t[14]=(E*d*l-h*w*l-E*s*m+i*w*m+h*s*y-i*d*y)*B,t[15]=(h*v*l-_*d*l+_*s*m-i*v*m-h*s*x+i*d*x)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,v=d+d,x=u*p,M=u*_,E=u*v,w=h*_,y=h*v,g=d*v,P=m*p,O=m*_,D=m*v,H=s.x,F=s.y,B=s.z;return l[0]=(1-(w+g))*H,l[1]=(M+D)*H,l[2]=(E-O)*H,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(x+g))*F,l[6]=(y+P)*F,l[7]=0,l[8]=(E+O)*B,l[9]=(y-P)*B,l[10]=(1-(x+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=or.set(l[0],l[1],l[2]).length();const h=or.set(l[4],l[5],l[6]).length(),d=or.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const p=1/u,_=1/h,v=1/d;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=_,xi.elements[5]*=_,xi.elements[6]*=_,xi.elements[8]*=v,xi.elements[9]*=v,xi.elements[10]*=v,i.setFromRotationMatrix(xi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=ra){const m=this.elements,p=2*u/(i-t),_=2*u/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let M,E;if(d===ra)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Oc)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=ra){const m=this.elements,p=1/(i-t),_=1/(s-l),v=1/(h-u),x=(i+t)*p,M=(s+l)*_;let E,w;if(d===ra)E=(h+u)*v,w=-2*v;else if(d===Oc)E=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const or=new J,xi=new je,vy=new J(0,0,0),xy=new J(1,1,1),Oa=new J,oc=new J,Jn=new J,cg=new je,ug=new Ms;class ca{constructor(t=0,i=0,s=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(pe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-pe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return cg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ug.setFromEuler(this),this.setFromQuaternion(ug,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class w0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sy=0;const fg=new J,lr=new Ms,ta=new je,lc=new J,Po=new J,yy=new J,My=new Ms,hg=new J(1,0,0),dg=new J(0,1,0),pg=new J(0,0,1),mg={type:"added"},Ey={type:"removed"},cr={type:"childadded",child:null},ih={type:"childremoved",child:null};class In extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new J,i=new ca,s=new Ms,l=new J(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new le}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new w0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return lr.setFromAxisAngle(t,i),this.quaternion.multiply(lr),this}rotateOnWorldAxis(t,i){return lr.setFromAxisAngle(t,i),this.quaternion.premultiply(lr),this}rotateX(t){return this.rotateOnAxis(hg,t)}rotateY(t){return this.rotateOnAxis(dg,t)}rotateZ(t){return this.rotateOnAxis(pg,t)}translateOnAxis(t,i){return fg.copy(t).applyQuaternion(this.quaternion),this.position.add(fg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(hg,t)}translateY(t){return this.translateOnAxis(dg,t)}translateZ(t){return this.translateOnAxis(pg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?lc.copy(t):lc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Po,lc,this.up):ta.lookAt(lc,Po,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),lr.setFromRotationMatrix(ta),this.quaternion.premultiply(lr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mg),cr.child=t,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ey),ih.child=t,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mg),cr.child=t,this.dispatchEvent(cr),cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,yy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,My,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}In.DEFAULT_UP=new J(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new J,ea=new J,ah=new J,na=new J,ur=new J,fr=new J,_g=new J,sh=new J,rh=new J,oh=new J,lh=new Ke,ch=new Ke,uh=new Ke;class yi{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Si.subVectors(t,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Si.subVectors(l,i),ea.subVectors(s,i),ah.subVectors(t,i);const h=Si.dot(Si),d=Si.dot(ea),m=Si.dot(ah),p=ea.dot(ea),_=ea.dot(ah),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*_)*x,E=(h*_-d*m)*x;return u.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(h,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return lh.setScalar(0),ch.setScalar(0),uh.setScalar(0),lh.fromBufferAttribute(t,i),ch.fromBufferAttribute(t,s),uh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(lh,u.x),h.addScaledVector(ch,u.y),h.addScaledVector(uh,u.z),h}static isFrontFacing(t,i,s,l){return Si.subVectors(s,i),ea.subVectors(t,i),Si.cross(ea).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),Si.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;ur.subVectors(l,s),fr.subVectors(u,s),sh.subVectors(t,s);const m=ur.dot(sh),p=fr.dot(sh);if(m<=0&&p<=0)return i.copy(s);rh.subVectors(t,l);const _=ur.dot(rh),v=fr.dot(rh);if(_>=0&&v<=_)return i.copy(l);const x=m*v-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(ur,h);oh.subVectors(t,u);const M=ur.dot(oh),E=fr.dot(oh);if(E>=0&&M<=E)return i.copy(u);const w=M*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(fr,d);const y=_*E-M*v;if(y<=0&&v-_>=0&&M-E>=0)return _g.subVectors(u,l),d=(v-_)/(v-_+(M-E)),i.copy(l).addScaledVector(_g,d);const g=1/(y+w+x);return h=w*g,d=x*g,i.copy(s).addScaledVector(ur,h).addScaledVector(fr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},cc={h:0,s:0,l:0};function fh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=Td(t,1),i=pe(i,0,1),s=pe(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=fh(h,u,t+1/3),this.g=fh(h,u,t),this.b=fh(h,u,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=fi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const s=D0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Ce.fromWorkingColorSpace(Cn.copy(this),t),Math.round(pe(Cn.r*255,0,255))*65536+Math.round(pe(Cn.g*255,0,255))*256+Math.round(pe(Cn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=fi){Ce.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,s=Cn.g,l=Cn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Pa),this.setHSL(Pa.h+t,Pa.s+i,Pa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Pa),t.getHSL(cc);const s=Vo(Pa.h,cc.h,i),l=Vo(Pa.s,cc.s,i),u=Vo(Pa.l,cc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Me;Me.NAMES=D0;let Ty=0;class Or extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=yr,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=wh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(s.blending=this.blending),this.side!==Ga&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ch&&(s.blendSrc=this.blendSrc),this.blendDst!==wh&&(s.blendDst=this.blendDst),this.blendEquation!==_s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bd extends Or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=h0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tn=new J,uc=new fe;let by=0;class Oi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:by++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=ng,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)uc.fromBufferAttribute(this,i),uc.applyMatrix3(t),this.setXY(i,uc.x,uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix3(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix4(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyNormalMatrix(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.transformDirection(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=_r(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=_r(i,this.array)),i}setX(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=_r(i,this.array)),i}setY(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=_r(i,this.array)),i}setZ(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=_r(i,this.array)),i}setW(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),s=zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),s=zn(s,this.array),l=zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),s=zn(s,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ng&&(t.usage=this.usage),t}}class U0 extends Oi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class L0 extends Oi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class En extends Oi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Ay=0;const ui=new je,hh=new In,hr=new J,$n=new Lr,zo=new Lr,_n=new J;class Tn extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(A0(t)?L0:U0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new le().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,s){return ui.makeTranslation(t,i,s),this.applyMatrix4(ui),this}scale(t,i,s){return ui.makeScale(t,i,s),this.applyMatrix4(ui),this}lookAt(t){return hh.lookAt(t),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new En(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors($n.min,zo.min),$n.expandByPoint(_n),_n.addVectors($n.max,zo.max),$n.expandByPoint(_n)):($n.expandByPoint(zo.min),$n.expandByPoint(zo.max))}$n.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)_n.fromBufferAttribute(d,p),m&&(hr.fromBufferAttribute(t,p),_n.add(hr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<s.count;Y++)d[Y]=new J,m[Y]=new J;const p=new J,_=new J,v=new J,x=new fe,M=new fe,E=new fe,w=new J,y=new J;function g(Y,C,b){p.fromBufferAttribute(s,Y),_.fromBufferAttribute(s,C),v.fromBufferAttribute(s,b),x.fromBufferAttribute(u,Y),M.fromBufferAttribute(u,C),E.fromBufferAttribute(u,b),_.sub(p),v.sub(p),M.sub(x),E.sub(x);const I=1/(M.x*E.y-E.x*M.y);isFinite(I)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(I),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(I),d[Y].add(w),d[C].add(w),d[b].add(w),m[Y].add(y),m[C].add(y),m[b].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let Y=0,C=P.length;Y<C;++Y){const b=P[Y],I=b.start,st=b.count;for(let nt=I,ut=I+st;nt<ut;nt+=3)g(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const O=new J,D=new J,H=new J,F=new J;function B(Y){H.fromBufferAttribute(l,Y),F.copy(H);const C=d[Y];O.copy(C),O.sub(H.multiplyScalar(H.dot(C))).normalize(),D.crossVectors(F,C);const I=D.dot(m[Y])<0?-1:1;h.setXYZW(Y,O.x,O.y,O.z,I)}for(let Y=0,C=P.length;Y<C;++Y){const b=P[Y],I=b.start,st=b.count;for(let nt=I,ut=I+st;nt<ut;nt+=3)B(t.getX(nt+0)),B(t.getX(nt+1)),B(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new J,u=new J,h=new J,d=new J,m=new J,p=new J,_=new J,v=new J;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),w=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,x=new p.constructor(m.length*_);let M=0,E=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*_;for(let g=0;g<_;g++)x[E++]=p[M++]}return new Oi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Tn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,v=p.length;_<v;_++){const x=p[_],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],v=u[p];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gg=new je,fs=new Hc,fc=new Nr,vg=new J,hc=new J,dc=new J,pc=new J,dh=new J,mc=new J,xg=new J,_c=new J;class Ni extends In{constructor(t=new Tn,i=new bd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){mc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],v=u[m];_!==0&&(dh.fromBufferAttribute(v,t),h?mc.addScaledVector(dh,_):mc.addScaledVector(dh.sub(i),_))}i.add(mc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),fc.copy(s.boundingSphere),fc.applyMatrix4(u),fs.copy(t.ray).recast(t.near),!(fc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(fc,vg)===null||fs.origin.distanceToSquared(vg)>(t.far-t.near)**2))&&(gg.copy(u).invert(),fs.copy(t.ray).applyMatrix4(gg),!(s.boundingBox!==null&&fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,fs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,w=x.length;E<w;E++){const y=x[E],g=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,H=O;D<H;D+=3){const F=d.getX(D),B=d.getX(D+1),Y=d.getX(D+2);l=gc(this,g,t,s,p,_,v,F,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=E,g=w;y<g;y+=3){const P=d.getX(y),O=d.getX(y+1),D=d.getX(y+2);l=gc(this,h,t,s,p,_,v,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,w=x.length;E<w;E++){const y=x[E],g=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,H=O;D<H;D+=3){const F=D,B=D+1,Y=D+2;l=gc(this,g,t,s,p,_,v,F,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=E,g=w;y<g;y+=3){const P=y,O=y+1,D=y+2;l=gc(this,h,t,s,p,_,v,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Ry(r,t,i,s,l,u,h,d){let m;if(t.side===Xn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Ga,d),m===null)return null;_c.copy(d),_c.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(_c);return p<i.near||p>i.far?null:{distance:p,point:_c.clone(),object:r}}function gc(r,t,i,s,l,u,h,d,m,p){r.getVertexPosition(d,hc),r.getVertexPosition(m,dc),r.getVertexPosition(p,pc);const _=Ry(r,t,i,s,hc,dc,pc,xg);if(_){const v=new J;yi.getBarycoord(xg,hc,dc,pc,v),l&&(_.uv=yi.getInterpolatedAttribute(l,d,m,p,v,new fe)),u&&(_.uv1=yi.getInterpolatedAttribute(u,d,m,p,v,new fe)),h&&(_.normal=yi.getInterpolatedAttribute(h,d,m,p,v,new J),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new J,materialIndex:0};yi.getNormal(hc,dc,pc,x.normal),_.face=x,_.barycoord=v}return _}class qo extends Tn{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,t,h,u,0),E("z","y","x",1,-1,s,i,-t,h,u,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new En(p,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(v,2));function E(w,y,g,P,O,D,H,F,B,Y,C){const b=D/B,I=H/Y,st=D/2,nt=H/2,ut=F/2,ht=B+1,V=Y+1;let rt=0,Z=0;const yt=new J;for(let L=0;L<V;L++){const at=L*I-nt;for(let Tt=0;Tt<ht;Tt++){const Rt=Tt*b-st;yt[w]=Rt*P,yt[y]=at*O,yt[g]=ut,p.push(yt.x,yt.y,yt.z),yt[w]=0,yt[y]=0,yt[g]=F>0?1:-1,_.push(yt.x,yt.y,yt.z),v.push(Tt/B),v.push(1-L/Y),rt+=1}}for(let L=0;L<Y;L++)for(let at=0;at<B;at++){const Tt=x+at+ht*L,Rt=x+at+ht*(L+1),q=x+(at+1)+ht*(L+1),mt=x+(at+1)+ht*L;m.push(Tt,Rt,mt),m.push(Rt,q,mt),Z+=6}d.addGroup(M,Z,C),M+=Z,x+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Bn(r){const t={};for(let i=0;i<r.length;i++){const s=Dr(r[i]);for(const l in s)t[l]=s[l]}return t}function Cy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function N0(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const wy={clone:Dr,merge:Bn};var Dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Va extends Or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dy,this.fragmentShader=Uy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=Cy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class O0 extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ra}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new J,Sg=new fe,yg=new fe;class hi extends O0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,Sg,yg),i.subVectors(yg,Sg)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Go*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const dr=-90,pr=1;class Ly extends In{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(dr,pr,t,i);l.layers=this.layers,this.add(l);const u=new hi(dr,pr,t,i);u.layers=this.layers,this.add(u);const h=new hi(dr,pr,t,i);h.layers=this.layers,this.add(h);const d=new hi(dr,pr,t,i);d.layers=this.layers,this.add(d);const m=new hi(dr,pr,t,i);m.layers=this.layers,this.add(m);const p=new hi(dr,pr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(v,x,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class P0 extends Wn{constructor(t,i,s,l,u,h,d,m,p,_){t=t!==void 0?t:[],i=i!==void 0?i:br,super(t,i,s,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ny extends ys{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new P0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qo(5,5,5),u=new Va({name:"CubemapFromEquirect",uniforms:Dr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:Fa});u.uniforms.tEquirect.value=i;const h=new Ni(l,u),d=i.minFilter;return i.minFilter===xs&&(i.minFilter=Li),new Ly(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Fo extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Oy={type:"move"};class ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),g=this._getHandJoint(p,w);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Oy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Py extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const mh=new J,zy=new J,By=new le;class Ba{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=mh.subVectors(s,i).cross(zy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(mh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||By.getNormalMatrix(t),l=this.coplanarPoint(mh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Nr,vc=new J;class z0{constructor(t=new Ba,i=new Ba,s=new Ba,l=new Ba,u=new Ba,h=new Ba){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ra){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],v=l[6],x=l[7],M=l[8],E=l[9],w=l[10],y=l[11],g=l[12],P=l[13],O=l[14],D=l[15];if(s[0].setComponents(m-u,x-p,y-M,D-g).normalize(),s[1].setComponents(m+u,x+p,y+M,D+g).normalize(),s[2].setComponents(m+h,x+_,y+E,D+P).normalize(),s[3].setComponents(m-h,x-_,y-E,D-P).normalize(),s[4].setComponents(m-d,x-v,y-w,D-O).normalize(),i===ra)s[5].setComponents(m+d,x+v,y+w,D+O).normalize();else if(i===Oc)s[5].setComponents(d,v,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(vc.x=l.normal.x>0?t.max.x:t.min.x,vc.y=l.normal.y>0?t.max.y:t.min.y,vc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(vc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wo extends Or{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zc=new J,Bc=new J,Mg=new je,Bo=new Hc,xc=new Nr,_h=new J,Eg=new J;class Iy extends In{constructor(t=new Tn,i=new Wo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)zc.fromBufferAttribute(i,l-1),Bc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=zc.distanceTo(Bc);t.setAttribute("lineDistance",new En(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(l),xc.radius+=u,t.ray.intersectsSphere(xc)===!1)return;Mg.copy(l).invert(),Bo.copy(t.ray).applyMatrix4(Mg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const M=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let w=M,y=E-1;w<y;w+=p){const g=_.getX(w),P=_.getX(w+1),O=Sc(this,t,Bo,m,g,P,w);O&&i.push(O)}if(this.isLineLoop){const w=_.getX(E-1),y=_.getX(M),g=Sc(this,t,Bo,m,w,y,E-1);g&&i.push(g)}}else{const M=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let w=M,y=E-1;w<y;w+=p){const g=Sc(this,t,Bo,m,w,w+1,w);g&&i.push(g)}if(this.isLineLoop){const w=Sc(this,t,Bo,m,E-1,M,E-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Sc(r,t,i,s,l,u,h){const d=r.geometry.attributes.position;if(zc.fromBufferAttribute(d,l),Bc.fromBufferAttribute(d,u),i.distanceSqToSegment(zc,Bc,_h,Eg)>s)return;_h.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(_h);if(!(p<t.near||p>t.far))return{distance:p,point:Eg.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const Tg=new J,bg=new J;class Ic extends Iy{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)Tg.fromBufferAttribute(i,l),bg.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Tg.distanceTo(bg);t.setAttribute("lineDistance",new En(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B0 extends Or{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ag=new je,dd=new Hc,yc=new Nr,Mc=new J;class Fy extends In{constructor(t=new Tn,i=new B0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(l),yc.radius+=u,t.ray.intersectsSphere(yc)===!1)return;Ag.copy(l).invert(),dd.copy(t.ray).applyMatrix4(Ag);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let E=x,w=M;E<w;E++){const y=p.getX(E);Mc.fromBufferAttribute(v,y),Rg(Mc,y,m,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let E=x,w=M;E<w;E++)Mc.fromBufferAttribute(v,E),Rg(Mc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Rg(r,t,i,s,l,u,h){const d=dd.distanceSqToPoint(r);if(d<i){const m=new J;dd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class I0 extends Wn{constructor(t,i,s,l,u,h,d,m,p,_=Mr){if(_!==Mr&&_!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Mr&&(s=Ss),s===void 0&&_===Cr&&(s=Rr),super(null,l,u,h,d,m,_,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ei,this.minFilter=m!==void 0?m:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ad extends Tn{constructor(t=1,i=1,s=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const _=[],v=[],x=[],M=[];let E=0;const w=[],y=s/2;let g=0;P(),h===!1&&(t>0&&O(!0),i>0&&O(!1)),this.setIndex(_),this.setAttribute("position",new En(v,3)),this.setAttribute("normal",new En(x,3)),this.setAttribute("uv",new En(M,2));function P(){const D=new J,H=new J;let F=0;const B=(i-t)/s;for(let Y=0;Y<=u;Y++){const C=[],b=Y/u,I=b*(i-t)+t;for(let st=0;st<=l;st++){const nt=st/l,ut=nt*m+d,ht=Math.sin(ut),V=Math.cos(ut);H.x=I*ht,H.y=-b*s+y,H.z=I*V,v.push(H.x,H.y,H.z),D.set(ht,B,V).normalize(),x.push(D.x,D.y,D.z),M.push(nt,1-b),C.push(E++)}w.push(C)}for(let Y=0;Y<l;Y++)for(let C=0;C<u;C++){const b=w[C][Y],I=w[C+1][Y],st=w[C+1][Y+1],nt=w[C][Y+1];(t>0||C!==0)&&(_.push(b,I,nt),F+=3),(i>0||C!==u-1)&&(_.push(I,st,nt),F+=3)}p.addGroup(g,F,0),g+=F}function O(D){const H=E,F=new fe,B=new J;let Y=0;const C=D===!0?t:i,b=D===!0?1:-1;for(let st=1;st<=l;st++)v.push(0,y*b,0),x.push(0,b,0),M.push(.5,.5),E++;const I=E;for(let st=0;st<=l;st++){const ut=st/l*m+d,ht=Math.cos(ut),V=Math.sin(ut);B.x=C*V,B.y=y*b,B.z=C*ht,v.push(B.x,B.y,B.z),x.push(0,b,0),F.x=ht*.5+.5,F.y=V*.5*b+.5,M.push(F.x,F.y),E++}for(let st=0;st<l;st++){const nt=H+st,ut=I+st;D===!0?_.push(ut,ut+1,nt):_.push(ut+1,ut,nt),Y+=3}p.addGroup(g,Y,D===!0?1:2),g+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ad(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rd extends Ad{constructor(t=1,i=1,s=32,l=1,u=!1,h=0,d=Math.PI*2){super(0,t,i,s,l,u,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d}}static fromJSON(t){return new Rd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gc extends Tn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,x=i/m,M=[],E=[],w=[],y=[];for(let g=0;g<_;g++){const P=g*x-h;for(let O=0;O<p;O++){const D=O*v-u;E.push(D,-P,0),w.push(0,0,1),y.push(O/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let P=0;P<d;P++){const O=P+p*g,D=P+p*(g+1),H=P+1+p*(g+1),F=P+1+p*g;M.push(O,D,F),M.push(D,H,F)}this.setIndex(M),this.setAttribute("position",new En(E,3)),this.setAttribute("normal",new En(w,3)),this.setAttribute("uv",new En(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hy extends Or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gy extends Or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Vy extends O0{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ky extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Cg{constructor(t=1,i=0,s=0){return this.radius=t,this.phi=i,this.theta=s,this}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(pe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xy extends Ic{constructor(t=10,i=10,s=4473924,l=8947848){s=new Me(s),l=new Me(l);const u=i/2,h=t/i,d=t/2,m=[],p=[];for(let x=0,M=0,E=-d;x<=i;x++,E+=h){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const w=x===u?s:l;w.toArray(p,M),M+=3,w.toArray(p,M),M+=3,w.toArray(p,M),M+=3,w.toArray(p,M),M+=3}const _=new Tn;_.setAttribute("position",new En(m,3)),_.setAttribute("color",new En(p,3));const v=new Wo({vertexColors:!0,toneMapped:!1});super(_,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wy extends Ic{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new Tn;l.setAttribute("position",new En(i,3)),l.setAttribute("color",new En(s,3));const u=new Wo({vertexColors:!0,toneMapped:!1});super(l,u),this.type="AxesHelper"}setColors(t,i,s){const l=new Me,u=this.geometry.attributes.color.array;return l.set(t),l.toArray(u,0),l.toArray(u,3),l.set(i),l.toArray(u,6),l.toArray(u,9),l.set(s),l.toArray(u,12),l.toArray(u,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Yy extends Es{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function wg(r,t,i,s){const l=qy(s);switch(i){case g0:return r*t;case x0:return r*t;case S0:return r*t*2;case y0:return r*t/l.components*l.byteLength;case yd:return r*t/l.components*l.byteLength;case M0:return r*t*2/l.components*l.byteLength;case Md:return r*t*2/l.components*l.byteLength;case v0:return r*t*3/l.components*l.byteLength;case Mi:return r*t*4/l.components*l.byteLength;case Ed:return r*t*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wc:case Dc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vh:case Xh:return Math.max(r,16)*Math.max(t,8)/4;case Gh:case kh:return Math.max(r,8)*Math.max(t,8)/2;case Wh:case Yh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case $h:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case td:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ed:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case nd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case id:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ad:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case sd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case rd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case od:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Uc:case ld:case cd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case E0:case ud:return Math.ceil(r/4)*Math.ceil(t/4)*8;case fd:case hd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qy(r){switch(r){case la:case p0:return{byteLength:1,components:1};case ko:case m0:case Yo:return{byteLength:2,components:1};case xd:case Sd:return{byteLength:2,components:4};case Ss:case vd:case sa:return{byteLength:4,components:1};case _0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function F0(){let r=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function jy(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],w=v[M];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++x,v[x]=w)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const w=v[M];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ky=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bM="gl_FragColor = linearToOutputTexel( gl_FragColor );",AM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,TE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_T=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,AT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Zy,alphahash_pars_fragment:Ky,alphamap_fragment:Qy,alphamap_pars_fragment:Jy,alphatest_fragment:$y,alphatest_pars_fragment:tM,aomap_fragment:eM,aomap_pars_fragment:nM,batching_pars_vertex:iM,batching_vertex:aM,begin_vertex:sM,beginnormal_vertex:rM,bsdfs:oM,iridescence_fragment:lM,bumpmap_pars_fragment:cM,clipping_planes_fragment:uM,clipping_planes_pars_fragment:fM,clipping_planes_pars_vertex:hM,clipping_planes_vertex:dM,color_fragment:pM,color_pars_fragment:mM,color_pars_vertex:_M,color_vertex:gM,common:vM,cube_uv_reflection_fragment:xM,defaultnormal_vertex:SM,displacementmap_pars_vertex:yM,displacementmap_vertex:MM,emissivemap_fragment:EM,emissivemap_pars_fragment:TM,colorspace_fragment:bM,colorspace_pars_fragment:AM,envmap_fragment:RM,envmap_common_pars_fragment:CM,envmap_pars_fragment:wM,envmap_pars_vertex:DM,envmap_physical_pars_fragment:GM,envmap_vertex:UM,fog_vertex:LM,fog_pars_vertex:NM,fog_fragment:OM,fog_pars_fragment:PM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:BM,lights_lambert_fragment:IM,lights_lambert_pars_fragment:FM,lights_pars_begin:HM,lights_toon_fragment:VM,lights_toon_pars_fragment:kM,lights_phong_fragment:XM,lights_phong_pars_fragment:WM,lights_physical_fragment:YM,lights_physical_pars_fragment:qM,lights_fragment_begin:jM,lights_fragment_maps:ZM,lights_fragment_end:KM,logdepthbuf_fragment:QM,logdepthbuf_pars_fragment:JM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:tE,map_fragment:eE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:aE,metalnessmap_fragment:sE,metalnessmap_pars_fragment:rE,morphinstance_vertex:oE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:fE,normal_fragment_begin:hE,normal_fragment_maps:dE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:_E,normalmap_pars_fragment:gE,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:SE,iridescence_pars_fragment:yE,opaque_fragment:ME,packing:EE,premultiplied_alpha_fragment:TE,project_vertex:bE,dithering_fragment:AE,dithering_pars_fragment:RE,roughnessmap_fragment:CE,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:DE,shadowmap_pars_vertex:UE,shadowmap_vertex:LE,shadowmask_pars_fragment:NE,skinbase_vertex:OE,skinning_pars_vertex:PE,skinning_vertex:zE,skinnormal_vertex:BE,specularmap_fragment:IE,specularmap_pars_fragment:FE,tonemapping_fragment:HE,tonemapping_pars_fragment:GE,transmission_fragment:VE,transmission_pars_fragment:kE,uv_pars_fragment:XE,uv_pars_vertex:WE,uv_vertex:YE,worldpos_vertex:qE,background_vert:jE,background_frag:ZE,backgroundCube_vert:KE,backgroundCube_frag:QE,cube_vert:JE,cube_frag:$E,depth_vert:tT,depth_frag:eT,distanceRGBA_vert:nT,distanceRGBA_frag:iT,equirect_vert:aT,equirect_frag:sT,linedashed_vert:rT,linedashed_frag:oT,meshbasic_vert:lT,meshbasic_frag:cT,meshlambert_vert:uT,meshlambert_frag:fT,meshmatcap_vert:hT,meshmatcap_frag:dT,meshnormal_vert:pT,meshnormal_frag:mT,meshphong_vert:_T,meshphong_frag:gT,meshphysical_vert:vT,meshphysical_frag:xT,meshtoon_vert:ST,meshtoon_frag:yT,points_vert:MT,points_frag:ET,shadow_vert:TT,shadow_frag:bT,sprite_vert:AT,sprite_frag:RT},Lt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ui={basic:{uniforms:Bn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Bn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Bn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Bn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Bn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Bn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Bn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Bn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Bn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Bn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Bn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Bn([Lt.common,Lt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Bn([Lt.lights,Lt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ui.physical={uniforms:Bn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Ec={r:0,b:0,g:0},ds=new ca,CT=new je;function wT(r,t,i,s,l,u,h){const d=new Me(0);let m=u===!0?0:1,p,_,v=null,x=0,M=null;function E(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function w(O){let D=!1;const H=E(O);H===null?g(d,m):H&&H.isColor&&(g(H,1),D=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(O,D){const H=E(D);H&&(H.isCubeTexture||H.mapping===Fc)?(_===void 0&&(_=new Ni(new qo(1,1,1),new Va({name:"BackgroundCubeMaterial",uniforms:Dr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,B,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ds.copy(D.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(CT.makeRotationFromEuler(ds)),_.material.toneMapped=Ce.getTransfer(H.colorSpace)!==Pe,(v!==H||x!==H.version||M!==r.toneMapping)&&(_.material.needsUpdate=!0,v=H,x=H.version,M=r.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Ni(new Gc(2,2),new Va({name:"BackgroundMaterial",uniforms:Dr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(H.colorSpace)!==Pe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||x!==H.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,v=H,x=H.version,M=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function g(O,D){O.getRGB(Ec,N0(r)),s.buffers.color.setClear(Ec.r,Ec.g,Ec.b,D,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,g(d,m)},render:w,addToRenderList:y,dispose:P}}function DT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(b,I,st,nt,ut){let ht=!1;const V=v(nt,st,I);u!==V&&(u=V,p(u.object)),ht=M(b,nt,st,ut),ht&&E(b,nt,st,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,D(b,I,st,nt),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return r.createVertexArray()}function p(b){return r.bindVertexArray(b)}function _(b){return r.deleteVertexArray(b)}function v(b,I,st){const nt=st.wireframe===!0;let ut=s[b.id];ut===void 0&&(ut={},s[b.id]=ut);let ht=ut[I.id];ht===void 0&&(ht={},ut[I.id]=ht);let V=ht[nt];return V===void 0&&(V=x(m()),ht[nt]=V),V}function x(b){const I=[],st=[],nt=[];for(let ut=0;ut<i;ut++)I[ut]=0,st[ut]=0,nt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:st,attributeDivisors:nt,object:b,attributes:{},index:null}}function M(b,I,st,nt){const ut=u.attributes,ht=I.attributes;let V=0;const rt=st.getAttributes();for(const Z in rt)if(rt[Z].location>=0){const L=ut[Z];let at=ht[Z];if(at===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),L===void 0||L.attribute!==at||at&&L.data!==at.data)return!0;V++}return u.attributesNum!==V||u.index!==nt}function E(b,I,st,nt){const ut={},ht=I.attributes;let V=0;const rt=st.getAttributes();for(const Z in rt)if(rt[Z].location>=0){let L=ht[Z];L===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(L=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(L=b.instanceColor));const at={};at.attribute=L,L&&L.data&&(at.data=L.data),ut[Z]=at,V++}u.attributes=ut,u.attributesNum=V,u.index=nt}function w(){const b=u.newAttributes;for(let I=0,st=b.length;I<st;I++)b[I]=0}function y(b){g(b,0)}function g(b,I){const st=u.newAttributes,nt=u.enabledAttributes,ut=u.attributeDivisors;st[b]=1,nt[b]===0&&(r.enableVertexAttribArray(b),nt[b]=1),ut[b]!==I&&(r.vertexAttribDivisor(b,I),ut[b]=I)}function P(){const b=u.newAttributes,I=u.enabledAttributes;for(let st=0,nt=I.length;st<nt;st++)I[st]!==b[st]&&(r.disableVertexAttribArray(st),I[st]=0)}function O(b,I,st,nt,ut,ht,V){V===!0?r.vertexAttribIPointer(b,I,st,ut,ht):r.vertexAttribPointer(b,I,st,nt,ut,ht)}function D(b,I,st,nt){w();const ut=nt.attributes,ht=st.getAttributes(),V=I.defaultAttributeValues;for(const rt in ht){const Z=ht[rt];if(Z.location>=0){let yt=ut[rt];if(yt===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(yt=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(yt=b.instanceColor)),yt!==void 0){const L=yt.normalized,at=yt.itemSize,Tt=t.get(yt);if(Tt===void 0)continue;const Rt=Tt.buffer,q=Tt.type,mt=Tt.bytesPerElement,St=q===r.INT||q===r.UNSIGNED_INT||yt.gpuType===vd;if(yt.isInterleavedBufferAttribute){const bt=yt.data,Ct=bt.stride,Qt=yt.offset;if(bt.isInstancedInterleavedBuffer){for(let zt=0;zt<Z.locationSize;zt++)g(Z.location+zt,bt.meshPerAttribute);b.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let zt=0;zt<Z.locationSize;zt++)y(Z.location+zt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let zt=0;zt<Z.locationSize;zt++)O(Z.location+zt,at/Z.locationSize,q,L,Ct*mt,(Qt+at/Z.locationSize*zt)*mt,St)}else{if(yt.isInstancedBufferAttribute){for(let bt=0;bt<Z.locationSize;bt++)g(Z.location+bt,yt.meshPerAttribute);b.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let bt=0;bt<Z.locationSize;bt++)y(Z.location+bt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let bt=0;bt<Z.locationSize;bt++)O(Z.location+bt,at/Z.locationSize,q,L,at*mt,at/Z.locationSize*bt*mt,St)}}else if(V!==void 0){const L=V[rt];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(Z.location,L);break;case 3:r.vertexAttrib3fv(Z.location,L);break;case 4:r.vertexAttrib4fv(Z.location,L);break;default:r.vertexAttrib1fv(Z.location,L)}}}}P()}function H(){Y();for(const b in s){const I=s[b];for(const st in I){const nt=I[st];for(const ut in nt)_(nt[ut].object),delete nt[ut];delete I[st]}delete s[b]}}function F(b){if(s[b.id]===void 0)return;const I=s[b.id];for(const st in I){const nt=I[st];for(const ut in nt)_(nt[ut].object),delete nt[ut];delete I[st]}delete s[b.id]}function B(b){for(const I in s){const st=s[I];if(st[b.id]===void 0)continue;const nt=st[b.id];for(const ut in nt)_(nt[ut].object),delete nt[ut];delete st[b.id]}}function Y(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function UT(r,t,i){let s;function l(p){s=p}function u(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let M=0;for(let E=0;E<v;E++)M+=_[E];i.update(M,s,1)}function m(p,_,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],_[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,x,0,v);let E=0;for(let w=0;w<v;w++)E+=_[w]*x[w];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function LT(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Mi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const Y=B===Yo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==la&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==sa&&!Y)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:H,maxSamples:F}}function NT(r){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Ba,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||l;return l=x,s=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,g=r.get(v);if(!l||E===null||E.length===0||u&&!y)u?_(null):p();else{const P=u?0:s,O=P*4;let D=g.clippingState||null;m.value=D,D=_(E,x,O,M);for(let H=0;H!==O;++H)D[H]=i[H];g.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,x,M,E){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=m.value,E!==!0||y===null){const g=M+w*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<g)&&(y=new Float32Array(g));for(let O=0,D=M;O!==w;++O,D+=4)h.copy(v[O]).applyMatrix4(P,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function OT(r){let t=new WeakMap;function i(h,d){return d===Bh?h.mapping=br:d===Ih&&(h.mapping=Ar),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Bh||d===Ih)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ny(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const xr=4,Dg=[.125,.215,.35,.446,.526,.582],gs=20,gh=new Vy,Ug=new Me;let vh=null,xh=0,Sh=0,yh=!1;const ms=(1+Math.sqrt(5))/2,mr=1/ms,Lg=[new J(-ms,mr,0),new J(ms,mr,0),new J(-mr,0,ms),new J(mr,0,ms),new J(0,ms,-mr),new J(0,ms,mr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Ng{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vh,xh,Sh),this._renderer.xr.enabled=yh,t.scissorTest=!1,Tc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===br||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Yo,format:Mi,colorSpace:wr,depthBuffer:!1},l=Og(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Og(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PT(u)),this._blurMaterial=zT(u,t,i)}return l}_compileMaterial(t){const i=new Ni(this._lodPlanes[0],t);this._renderer.compile(i,gh)}_sceneToCubeUV(t,i,s,l){const d=new hi(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Ug),_.toneMapping=Ha,_.autoClear=!1;const M=new bd({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),E=new Ni(new qo,M);let w=!1;const y=t.background;y?y.isColor&&(M.color.copy(y),t.background=null,w=!0):(M.color.copy(Ug),w=!0);for(let g=0;g<6;g++){const P=g%3;P===0?(d.up.set(0,m[g],0),d.lookAt(p[g],0,0)):P===1?(d.up.set(0,0,m[g]),d.lookAt(0,p[g],0)):(d.up.set(0,m[g],0),d.lookAt(0,0,p[g]));const O=this._cubeSize;Tc(l,P*O,g>2?O:0,O,O),_.setRenderTarget(l),w&&_.render(E,d),_.render(t,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=v,t.background=y}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===br||t.mapping===Ar;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ni(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Tc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,gh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Lg[(l-u-1)%Lg.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Ni(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gs-1),w=u/E,y=isFinite(u)?1+Math.floor(_*w):gs;y>gs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gs}`);const g=[];let P=0;for(let B=0;B<gs;++B){const Y=B/w,C=Math.exp(-Y*Y/2);g.push(C),B===0?P+=C:B<y&&(P+=2*C)}for(let B=0;B<g.length;B++)g[B]=g[B]/P;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=E,x.mipInt.value=O-s;const D=this._sizeLods[l],H=3*D*(l>O-xr?l-O+xr:0),F=4*(this._cubeSize-D);Tc(i,H,F,3*D,2*D),m.setRenderTarget(i),m.render(v,gh)}}function PT(r){const t=[],i=[],s=[];let l=r;const u=r-xr+1+Dg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-xr?m=Dg[h-r+xr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),_=-p,v=1+p,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,E=6,w=3,y=2,g=1,P=new Float32Array(w*E*M),O=new Float32Array(y*E*M),D=new Float32Array(g*E*M);for(let F=0;F<M;F++){const B=F%3*2/3-1,Y=F>2?0:-1,C=[B,Y,0,B+2/3,Y,0,B+2/3,Y+1,0,B,Y,0,B+2/3,Y+1,0,B,Y+1,0];P.set(C,w*E*F),O.set(x,y*E*F);const b=[F,F,F,F,F,F];D.set(b,g*E*F)}const H=new Tn;H.setAttribute("position",new Oi(P,w)),H.setAttribute("uv",new Oi(O,y)),H.setAttribute("faceIndex",new Oi(D,g)),t.push(H),l>xr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Og(r,t,i){const s=new ys(r,t,i);return s.texture.mapping=Fc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Tc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function zT(r,t,i){const s=new Float32Array(gs),l=new J(0,1,0);return new Va({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Pg(){return new Va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function zg(){return new Va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Cd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Bh||m===Ih,_=m===br||m===Ar;if(p||_){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Ng(r)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Ng(r)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function IT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&gr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function FT(r,t,i,s){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],r.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,E=v.attributes.position;let w=0;if(M!==null){const P=M.array;w=M.version;for(let O=0,D=P.length;O<D;O+=3){const H=P[O+0],F=P[O+1],B=P[O+2];x.push(H,F,F,B,B,H)}}else if(E!==void 0){const P=E.array;w=E.version;for(let O=0,D=P.length/3-1;O<D;O+=3){const H=O+0,F=O+1,B=O+2;x.push(H,F,F,B,B,H)}}else return;const y=new(A0(x)?L0:U0)(x,1);y.version=w;const g=u.get(v);g&&t.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function HT(r,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){r.drawElements(s,M,u,x*h),i.update(M,s,1)}function p(x,M,E){E!==0&&(r.drawElementsInstanced(s,M,u,x*h,E),i.update(M,s,E))}function _(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,x,0,E);let y=0;for(let g=0;g<E;g++)y+=M[g];i.update(y,s,1)}function v(x,M,E,w){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)p(x[g]/h,M[g],w[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,x,0,w,0,E);let g=0;for(let P=0;P<E;P++)g+=M[P]*w[P];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function GT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function VT(r,t,i){const s=new WeakMap,l=new Ke;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let b=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",b)};var M=b;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let H=d.attributes.position.count*D,F=1;H>t.maxTextureSize&&(F=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const B=new Float32Array(H*F*4*v),Y=new C0(B,H,F,v);Y.type=sa,Y.needsUpdate=!0;const C=D*4;for(let I=0;I<v;I++){const st=g[I],nt=P[I],ut=O[I],ht=H*F*4*I;for(let V=0;V<st.count;V++){const rt=V*C;E===!0&&(l.fromBufferAttribute(st,V),B[ht+rt+0]=l.x,B[ht+rt+1]=l.y,B[ht+rt+2]=l.z,B[ht+rt+3]=0),w===!0&&(l.fromBufferAttribute(nt,V),B[ht+rt+4]=l.x,B[ht+rt+5]=l.y,B[ht+rt+6]=l.z,B[ht+rt+7]=0),y===!0&&(l.fromBufferAttribute(ut,V),B[ht+rt+8]=l.x,B[ht+rt+9]=l.y,B[ht+rt+10]=l.z,B[ht+rt+11]=ut.itemSize===4?l.w:1)}}x={count:v,texture:Y,size:new fe(H,F)},s.set(d,x),d.addEventListener("dispose",b)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const w=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:u}}function kT(r,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,v=t.get(m,_);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const H0=new Wn,Bg=new I0(1,1),G0=new C0,V0=new _y,k0=new P0,Ig=[],Fg=[],Hg=new Float32Array(16),Gg=new Float32Array(9),Vg=new Float32Array(4);function Pr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=Ig[l];if(u===void 0&&(u=new Float32Array(l),Ig[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(u,d)}return u}function un(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function fn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Vc(r,t){let i=Fg[t];i===void 0&&(i=new Int32Array(t),Fg[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function XT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function WT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2fv(this.addr,t),fn(i,t)}}function YT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(un(i,t))return;r.uniform3fv(this.addr,t),fn(i,t)}}function qT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4fv(this.addr,t),fn(i,t)}}function jT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Vg.set(s),r.uniformMatrix2fv(this.addr,!1,Vg),fn(i,s)}}function ZT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Gg.set(s),r.uniformMatrix3fv(this.addr,!1,Gg),fn(i,s)}}function KT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Hg.set(s),r.uniformMatrix4fv(this.addr,!1,Hg),fn(i,s)}}function QT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function JT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2iv(this.addr,t),fn(i,t)}}function $T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;r.uniform3iv(this.addr,t),fn(i,t)}}function tb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4iv(this.addr,t),fn(i,t)}}function eb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function nb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;r.uniform2uiv(this.addr,t),fn(i,t)}}function ib(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;r.uniform3uiv(this.addr,t),fn(i,t)}}function ab(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;r.uniform4uiv(this.addr,t),fn(i,t)}}function sb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(Bg.compareFunction=T0,u=Bg):u=H0,i.setTexture2D(t||u,l)}function rb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||V0,l)}function ob(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||k0,l)}function lb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||G0,l)}function cb(r){switch(r){case 5126:return XT;case 35664:return WT;case 35665:return YT;case 35666:return qT;case 35674:return jT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return tb;case 5125:return eb;case 36294:return nb;case 36295:return ib;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}function ub(r,t){r.uniform1fv(this.addr,t)}function fb(r,t){const i=Pr(t,this.size,2);r.uniform2fv(this.addr,i)}function hb(r,t){const i=Pr(t,this.size,3);r.uniform3fv(this.addr,i)}function db(r,t){const i=Pr(t,this.size,4);r.uniform4fv(this.addr,i)}function pb(r,t){const i=Pr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function mb(r,t){const i=Pr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function _b(r,t){const i=Pr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function gb(r,t){r.uniform1iv(this.addr,t)}function vb(r,t){r.uniform2iv(this.addr,t)}function xb(r,t){r.uniform3iv(this.addr,t)}function Sb(r,t){r.uniform4iv(this.addr,t)}function yb(r,t){r.uniform1uiv(this.addr,t)}function Mb(r,t){r.uniform2uiv(this.addr,t)}function Eb(r,t){r.uniform3uiv(this.addr,t)}function Tb(r,t){r.uniform4uiv(this.addr,t)}function bb(r,t,i){const s=this.cache,l=t.length,u=Vc(i,l);un(s,u)||(r.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||H0,u[h])}function Ab(r,t,i){const s=this.cache,l=t.length,u=Vc(i,l);un(s,u)||(r.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||V0,u[h])}function Rb(r,t,i){const s=this.cache,l=t.length,u=Vc(i,l);un(s,u)||(r.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||k0,u[h])}function Cb(r,t,i){const s=this.cache,l=t.length,u=Vc(i,l);un(s,u)||(r.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||G0,u[h])}function wb(r){switch(r){case 5126:return ub;case 35664:return fb;case 35665:return hb;case 35666:return db;case 35674:return pb;case 35675:return mb;case 35676:return _b;case 5124:case 35670:return gb;case 35667:case 35671:return vb;case 35668:case 35672:return xb;case 35669:case 35673:return Sb;case 5125:return yb;case 36294:return Mb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Cb}}class Db{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=cb(i.type)}}class Ub{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=wb(i.type)}}class Lb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Mh=/(\w+)(\])?(\[|\.)?/g;function kg(r,t){r.seq.push(t),r.map[t.id]=t}function Nb(r,t,i){const s=r.name,l=s.length;for(Mh.lastIndex=0;;){const u=Mh.exec(s),h=Mh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){kg(i,p===void 0?new Db(d,r,t):new Ub(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new Lb(d),kg(i,v)),i=v}}}class Lc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);Nb(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Xg(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const Ob=37297;let Pb=0;function zb(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Wg=new le;function Bb(r){Ce._getMatrix(Wg,Ce.workingColorSpace,r);const t=`mat3( ${Wg.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case Nc:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Yg(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+zb(r.getShaderSource(t),h)}else return l}function Ib(r,t){const i=Bb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Fb(r,t){let i;switch(t){case bS:i="Linear";break;case AS:i="Reinhard";break;case RS:i="Cineon";break;case CS:i="ACESFilmic";break;case DS:i="AgX";break;case US:i="Neutral";break;case wS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new J;function Hb(){Ce.getLuminanceCoefficients(bc);const r=bc.x.toFixed(4),t=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function Vb(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function kb(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Ho(r){return r!==""}function qg(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jg(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(r){return r.replace(Xb,Yb)}const Wb=new Map;function Yb(r,t){let i=ce[t];if(i===void 0){const s=Wb.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return pd(i)}const qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(r){return r.replace(qb,jb)}function jb(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Kg(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===f0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===aS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ia&&(t="SHADOWMAP_TYPE_VSM"),t}function Kb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case br:case Ar:t="ENVMAP_TYPE_CUBE";break;case Fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function Jb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case h0:t="ENVMAP_BLENDING_MULTIPLY";break;case ES:t="ENVMAP_BLENDING_MIX";break;case TS:t="ENVMAP_BLENDING_ADD";break}return t}function $b(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function tA(r,t,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Zb(i),p=Kb(i),_=Qb(i),v=Jb(i),x=$b(i),M=Gb(i),E=Vb(u),w=l.createProgram();let y,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),g.length>0&&(g+=`
`)):(y=[Kg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),g=[Kg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ha?Fb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Ib("linearToOutputTexel",i.outputColorSpace),Hb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=pd(h),h=qg(h,i),h=jg(h,i),d=pd(d),d=qg(d,i),d=jg(d,i),h=Zg(h),d=Zg(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=P+y+h,D=P+g+d,H=Xg(l,l.VERTEX_SHADER,O),F=Xg(l,l.FRAGMENT_SHADER,D);l.attachShader(w,H),l.attachShader(w,F),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(I){if(r.debug.checkShaderErrors){const st=l.getProgramInfoLog(w).trim(),nt=l.getShaderInfoLog(H).trim(),ut=l.getShaderInfoLog(F).trim();let ht=!0,V=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,H,F);else{const rt=Yg(l,H,"vertex"),Z=Yg(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+st+`
`+rt+`
`+Z)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(nt===""||ut==="")&&(V=!1);V&&(I.diagnostics={runnable:ht,programLog:st,vertexShader:{log:nt,prefix:y},fragmentShader:{log:ut,prefix:g}})}l.deleteShader(H),l.deleteShader(F),Y=new Lc(l,w),C=kb(l,w)}let Y;this.getUniforms=function(){return Y===void 0&&B(this),Y};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(w,Ob)),b},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Pb++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=F,this}let eA=0;class nA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new iA(t),i.set(t,s)),s}}class iA{constructor(t){this.id=eA++,this.code=t,this.usedTimes=0}}function aA(r,t,i,s,l,u,h){const d=new w0,m=new nA,p=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,b,I,st,nt){const ut=st.fog,ht=nt.geometry,V=C.isMeshStandardMaterial?st.environment:null,rt=(C.isMeshStandardMaterial?i:t).get(C.envMap||V),Z=rt&&rt.mapping===Fc?rt.image.height:null,yt=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const L=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,at=L!==void 0?L.length:0;let Tt=0;ht.morphAttributes.position!==void 0&&(Tt=1),ht.morphAttributes.normal!==void 0&&(Tt=2),ht.morphAttributes.color!==void 0&&(Tt=3);let Rt,q,mt,St;if(yt){const Te=Ui[yt];Rt=Te.vertexShader,q=Te.fragmentShader}else Rt=C.vertexShader,q=C.fragmentShader,m.update(C),mt=m.getVertexShaderID(C),St=m.getFragmentShaderID(C);const bt=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),Qt=nt.isInstancedMesh===!0,zt=nt.isBatchedMesh===!0,Ee=!!C.map,we=!!C.matcap,ae=!!rt,z=!!C.aoMap,vn=!!C.lightMap,re=!!C.bumpMap,he=!!C.normalMap,Xt=!!C.displacementMap,De=!!C.emissiveMap,Wt=!!C.metalnessMap,U=!!C.roughnessMap,T=C.anisotropy>0,et=C.clearcoat>0,dt=C.dispersion>0,xt=C.iridescence>0,pt=C.sheen>0,Gt=C.transmission>0,Dt=T&&!!C.anisotropyMap,Bt=et&&!!C.clearcoatMap,_e=et&&!!C.clearcoatNormalMap,Et=et&&!!C.clearcoatRoughnessMap,It=xt&&!!C.iridescenceMap,qt=xt&&!!C.iridescenceThicknessMap,Vt=pt&&!!C.sheenColorMap,Ft=pt&&!!C.sheenRoughnessMap,se=!!C.specularMap,Zt=!!C.specularColorMap,Ue=!!C.specularIntensityMap,X=Gt&&!!C.transmissionMap,Nt=Gt&&!!C.thicknessMap,ot=!!C.gradientMap,gt=!!C.alphaMap,wt=C.alphaTest>0,Ut=!!C.alphaHash,$t=!!C.extensions;let Ge=Ha;C.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ge=r.toneMapping);const nn={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:Rt,fragmentShader:q,defines:C.defines,customVertexShaderID:mt,customFragmentShaderID:St,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:zt,batchingColor:zt&&nt._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&nt.instanceColor!==null,instancingMorph:Qt&&nt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:wr,alphaToCoverage:!!C.alphaToCoverage,map:Ee,matcap:we,envMap:ae,envMapMode:ae&&rt.mapping,envMapCubeUVHeight:Z,aoMap:z,lightMap:vn,bumpMap:re,normalMap:he,displacementMap:x&&Xt,emissiveMap:De,normalMapObjectSpace:he&&C.normalMapType===zS,normalMapTangentSpace:he&&C.normalMapType===PS,metalnessMap:Wt,roughnessMap:U,anisotropy:T,anisotropyMap:Dt,clearcoat:et,clearcoatMap:Bt,clearcoatNormalMap:_e,clearcoatRoughnessMap:Et,dispersion:dt,iridescence:xt,iridescenceMap:It,iridescenceThicknessMap:qt,sheen:pt,sheenColorMap:Vt,sheenRoughnessMap:Ft,specularMap:se,specularColorMap:Zt,specularIntensityMap:Ue,transmission:Gt,transmissionMap:X,thicknessMap:Nt,gradientMap:ot,opaque:C.transparent===!1&&C.blending===yr&&C.alphaToCoverage===!1,alphaMap:gt,alphaTest:wt,alphaHash:Ut,combine:C.combine,mapUv:Ee&&w(C.map.channel),aoMapUv:z&&w(C.aoMap.channel),lightMapUv:vn&&w(C.lightMap.channel),bumpMapUv:re&&w(C.bumpMap.channel),normalMapUv:he&&w(C.normalMap.channel),displacementMapUv:Xt&&w(C.displacementMap.channel),emissiveMapUv:De&&w(C.emissiveMap.channel),metalnessMapUv:Wt&&w(C.metalnessMap.channel),roughnessMapUv:U&&w(C.roughnessMap.channel),anisotropyMapUv:Dt&&w(C.anisotropyMap.channel),clearcoatMapUv:Bt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:_e&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&w(C.sheenRoughnessMap.channel),specularMapUv:se&&w(C.specularMap.channel),specularColorMapUv:Zt&&w(C.specularColorMap.channel),specularIntensityMapUv:Ue&&w(C.specularIntensityMap.channel),transmissionMapUv:X&&w(C.transmissionMap.channel),thicknessMapUv:Nt&&w(C.thicknessMap.channel),alphaMapUv:gt&&w(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(he||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ht.attributes.uv&&(Ee||gt),fog:!!ut,useFog:C.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:nt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Tt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ee&&C.map.isVideoTexture===!0&&Ce.getTransfer(C.map.colorSpace)===Pe,decodeVideoTextureEmissive:De&&C.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(C.emissiveMap.colorSpace)===Pe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===aa,flipSided:C.side===Xn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:$t&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&C.extensions.multiDraw===!0||zt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return nn.vertexUv1s=p.has(1),nn.vertexUv2s=p.has(2),nn.vertexUv3s=p.has(3),p.clear(),nn}function g(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const I in C.defines)b.push(I),b.push(C.defines[I]);return C.isRawShaderMaterial===!1&&(P(b,C),O(b,C),b.push(r.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function P(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function O(C,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reverseDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const b=E[C.type];let I;if(b){const st=Ui[b];I=wy.clone(st.uniforms)}else I=C.uniforms;return I}function H(C,b){let I;for(let st=0,nt=_.length;st<nt;st++){const ut=_[st];if(ut.cacheKey===b){I=ut,++I.usedTimes;break}}return I===void 0&&(I=new tA(r,b,C,u),_.push(I)),I}function F(C){if(--C.usedTimes===0){const b=_.indexOf(C);_[b]=_[_.length-1],_.pop(),C.destroy()}}function B(C){m.remove(C)}function Y(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:F,releaseShaderCache:B,programs:_,dispose:Y}}function sA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function rA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Qg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Jg(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,x,M,E,w,y){let g=r[t];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:w,group:y},r[t]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=w,g.group=y),t++,g}function d(v,x,M,E,w,y){const g=h(v,x,M,E,w,y);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,x,M,E,w,y){const g=h(v,x,M,E,w,y);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,x){i.length>1&&i.sort(v||rA),s.length>1&&s.sort(x||Qg),l.length>1&&l.sort(x||Qg)}function _(){for(let v=t,x=r.length;v<x;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function oA(){let r=new WeakMap;function t(s,l){const u=r.get(s);let h;return u===void 0?(h=new Jg,r.set(s,[h])):l>=u.length?(h=new Jg,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function lA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new Me};break;case"SpotLight":i={position:new J,direction:new J,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function cA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let uA=0;function fA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function hA(r){const t=new lA,i=cA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,u=new je,h=new je;function d(p){let _=0,v=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,E=0,w=0,y=0,g=0,P=0,O=0,D=0,H=0,F=0,B=0;p.sort(fA);for(let C=0,b=p.length;C<b;C++){const I=p[C],st=I.color,nt=I.intensity,ut=I.distance,ht=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)_+=st.r*nt,v+=st.g*nt,x+=st.b*nt;else if(I.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(I.sh.coefficients[V],nt);B++}else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const rt=I.shadow,Z=i.get(I);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=ht,s.directionalShadowMatrix[M]=I.shadow.matrix,P++}s.directional[M]=V,M++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(st).multiplyScalar(nt),V.distance=ut,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,s.spot[w]=V;const rt=I.shadow;if(I.map&&(s.spotLightMap[H]=I.map,H++,rt.updateMatrices(I),I.castShadow&&F++),s.spotLightMatrix[w]=rt.matrix,I.castShadow){const Z=i.get(I);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,s.spotShadow[w]=Z,s.spotShadowMap[w]=ht,D++}w++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(st).multiplyScalar(nt),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),s.rectArea[y]=V,y++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const rt=I.shadow,Z=i.get(I);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,Z.shadowCameraNear=rt.camera.near,Z.shadowCameraFar=rt.camera.far,s.pointShadow[E]=Z,s.pointShadowMap[E]=ht,s.pointShadowMatrix[E]=I.shadow.matrix,O++}s.point[E]=V,E++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(nt),V.groundColor.copy(I.groundColor).multiplyScalar(nt),s.hemi[g]=V,g++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=x;const Y=s.hash;(Y.directionalLength!==M||Y.pointLength!==E||Y.spotLength!==w||Y.rectAreaLength!==y||Y.hemiLength!==g||Y.numDirectionalShadows!==P||Y.numPointShadows!==O||Y.numSpotShadows!==D||Y.numSpotMaps!==H||Y.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+H-F,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=B,Y.directionalLength=M,Y.pointLength=E,Y.spotLength=w,Y.rectAreaLength=y,Y.hemiLength=g,Y.numDirectionalShadows=P,Y.numPointShadows=O,Y.numSpotShadows=D,Y.numSpotMaps=H,Y.numLightProbes=B,s.version=uA++)}function m(p,_){let v=0,x=0,M=0,E=0,w=0;const y=_.matrixWorldInverse;for(let g=0,P=p.length;g<P;g++){const O=p[g];if(O.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(O.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(O.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:m,state:s}}function $g(r){const t=new hA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function dA(r){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new $g(r),t.set(l,[d])):u>=h.length?(d=new $g(r),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const pA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _A(r,t,i){let s=new z0;const l=new fe,u=new fe,h=new Ke,d=new Hy({depthPacking:OS}),m=new Gy,p={},_=i.maxTextureSize,v={[Ga]:Xn,[Xn]:Ga,[aa]:aa},x=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:pA,fragmentShader:mA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Tn;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ni(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f0;let g=this.type;this.render=function(F,B,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const C=r.getRenderTarget(),b=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),st=r.state;st.setBlending(Fa),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const nt=g!==ia&&this.type===ia,ut=g===ia&&this.type!==ia;for(let ht=0,V=F.length;ht<V;ht++){const rt=F[ht],Z=rt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const yt=Z.getFrameExtents();if(l.multiply(yt),u.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/yt.x),l.x=u.x*yt.x,Z.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/yt.y),l.y=u.y*yt.y,Z.mapSize.y=u.y)),Z.map===null||nt===!0||ut===!0){const at=this.type!==ia?{minFilter:Ei,magFilter:Ei}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ys(l.x,l.y,at),Z.map.texture.name=rt.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const L=Z.getViewportCount();for(let at=0;at<L;at++){const Tt=Z.getViewport(at);h.set(u.x*Tt.x,u.y*Tt.y,u.x*Tt.z,u.y*Tt.w),st.viewport(h),Z.updateMatrices(rt,at),s=Z.getFrustum(),D(B,Y,Z.camera,rt,this.type)}Z.isPointLightShadow!==!0&&this.type===ia&&P(Z,Y),Z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(C,b,I)};function P(F,B){const Y=t.update(w);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ys(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(B,null,Y,x,w,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(B,null,Y,M,w,null)}function O(F,B,Y,C){let b=null;const I=Y.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(I!==void 0)b=I;else if(b=Y.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const st=b.uuid,nt=B.uuid;let ut=p[st];ut===void 0&&(ut={},p[st]=ut);let ht=ut[nt];ht===void 0&&(ht=b.clone(),ut[nt]=ht,B.addEventListener("dispose",H)),b=ht}if(b.visible=B.visible,b.wireframe=B.wireframe,C===ia?b.side=B.shadowSide!==null?B.shadowSide:B.side:b.side=B.shadowSide!==null?B.shadowSide:v[B.side],b.alphaMap=B.alphaMap,b.alphaTest=B.alphaTest,b.map=B.map,b.clipShadows=B.clipShadows,b.clippingPlanes=B.clippingPlanes,b.clipIntersection=B.clipIntersection,b.displacementMap=B.displacementMap,b.displacementScale=B.displacementScale,b.displacementBias=B.displacementBias,b.wireframeLinewidth=B.wireframeLinewidth,b.linewidth=B.linewidth,Y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const st=r.properties.get(b);st.light=Y}return b}function D(F,B,Y,C,b){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&b===ia)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,F.matrixWorld);const nt=t.update(F),ut=F.material;if(Array.isArray(ut)){const ht=nt.groups;for(let V=0,rt=ht.length;V<rt;V++){const Z=ht[V],yt=ut[Z.materialIndex];if(yt&&yt.visible){const L=O(F,yt,C,b);F.onBeforeShadow(r,F,B,Y,nt,L,Z),r.renderBufferDirect(Y,null,nt,L,F,Z),F.onAfterShadow(r,F,B,Y,nt,L,Z)}}}else if(ut.visible){const ht=O(F,ut,C,b);F.onBeforeShadow(r,F,B,Y,nt,ht,null),r.renderBufferDirect(Y,null,nt,ht,F,null),F.onAfterShadow(r,F,B,Y,nt,ht,null)}}const st=F.children;for(let nt=0,ut=st.length;nt<ut;nt++)D(st[nt],B,Y,C,b)}function H(F){F.target.removeEventListener("dispose",H);for(const Y in p){const C=p[Y],b=F.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const gA={[Dh]:Uh,[Lh]:Ph,[Nh]:zh,[Tr]:Oh,[Uh]:Dh,[Ph]:Lh,[zh]:Nh,[Oh]:Tr};function vA(r,t){function i(){let X=!1;const Nt=new Ke;let ot=null;const gt=new Ke(0,0,0,0);return{setMask:function(wt){ot!==wt&&!X&&(r.colorMask(wt,wt,wt,wt),ot=wt)},setLocked:function(wt){X=wt},setClear:function(wt,Ut,$t,Ge,nn){nn===!0&&(wt*=Ge,Ut*=Ge,$t*=Ge),Nt.set(wt,Ut,$t,Ge),gt.equals(Nt)===!1&&(r.clearColor(wt,Ut,$t,Ge),gt.copy(Nt))},reset:function(){X=!1,ot=null,gt.set(-1,0,0,0)}}}function s(){let X=!1,Nt=!1,ot=null,gt=null,wt=null;return{setReversed:function(Ut){if(Nt!==Ut){const $t=t.get("EXT_clip_control");Nt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Ge=wt;wt=null,this.setClear(Ge)}Nt=Ut},getReversed:function(){return Nt},setTest:function(Ut){Ut?bt(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(Ut){ot!==Ut&&!X&&(r.depthMask(Ut),ot=Ut)},setFunc:function(Ut){if(Nt&&(Ut=gA[Ut]),gt!==Ut){switch(Ut){case Dh:r.depthFunc(r.NEVER);break;case Uh:r.depthFunc(r.ALWAYS);break;case Lh:r.depthFunc(r.LESS);break;case Tr:r.depthFunc(r.LEQUAL);break;case Nh:r.depthFunc(r.EQUAL);break;case Oh:r.depthFunc(r.GEQUAL);break;case Ph:r.depthFunc(r.GREATER);break;case zh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=Ut}},setLocked:function(Ut){X=Ut},setClear:function(Ut){wt!==Ut&&(Nt&&(Ut=1-Ut),r.clearDepth(Ut),wt=Ut)},reset:function(){X=!1,ot=null,gt=null,wt=null,Nt=!1}}}function l(){let X=!1,Nt=null,ot=null,gt=null,wt=null,Ut=null,$t=null,Ge=null,nn=null;return{setTest:function(Te){X||(Te?bt(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(Te){Nt!==Te&&!X&&(r.stencilMask(Te),Nt=Te)},setFunc:function(Te,Dn,Un){(ot!==Te||gt!==Dn||wt!==Un)&&(r.stencilFunc(Te,Dn,Un),ot=Te,gt=Dn,wt=Un)},setOp:function(Te,Dn,Un){(Ut!==Te||$t!==Dn||Ge!==Un)&&(r.stencilOp(Te,Dn,Un),Ut=Te,$t=Dn,Ge=Un)},setLocked:function(Te){X=Te},setClear:function(Te){nn!==Te&&(r.clearStencil(Te),nn=Te)},reset:function(){X=!1,Nt=null,ot=null,gt=null,wt=null,Ut=null,$t=null,Ge=null,nn=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},x=new WeakMap,M=[],E=null,w=!1,y=null,g=null,P=null,O=null,D=null,H=null,F=null,B=new Me(0,0,0),Y=0,C=!1,b=null,I=null,st=null,nt=null,ut=null;const ht=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,rt=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=rt>=1):Z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=rt>=2);let yt=null,L={};const at=r.getParameter(r.SCISSOR_BOX),Tt=r.getParameter(r.VIEWPORT),Rt=new Ke().fromArray(at),q=new Ke().fromArray(Tt);function mt(X,Nt,ot,gt){const wt=new Uint8Array(4),Ut=r.createTexture();r.bindTexture(X,Ut),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<ot;$t++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,gt,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(Nt+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return Ut}const St={};St[r.TEXTURE_2D]=mt(r.TEXTURE_2D,r.TEXTURE_2D,1),St[r.TEXTURE_CUBE_MAP]=mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[r.TEXTURE_2D_ARRAY]=mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),St[r.TEXTURE_3D]=mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),bt(r.DEPTH_TEST),h.setFunc(Tr),re(!1),he(Q_),bt(r.CULL_FACE),z(Fa);function bt(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Ct(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function Qt(X,Nt){return v[X]!==Nt?(r.bindFramebuffer(X,Nt),v[X]=Nt,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Nt),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function zt(X,Nt){let ot=M,gt=!1;if(X){ot=x.get(Nt),ot===void 0&&(ot=[],x.set(Nt,ot));const wt=X.textures;if(ot.length!==wt.length||ot[0]!==r.COLOR_ATTACHMENT0){for(let Ut=0,$t=wt.length;Ut<$t;Ut++)ot[Ut]=r.COLOR_ATTACHMENT0+Ut;ot.length=wt.length,gt=!0}}else ot[0]!==r.BACK&&(ot[0]=r.BACK,gt=!0);gt&&r.drawBuffers(ot)}function Ee(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const we={[_s]:r.FUNC_ADD,[rS]:r.FUNC_SUBTRACT,[oS]:r.FUNC_REVERSE_SUBTRACT};we[lS]=r.MIN,we[cS]=r.MAX;const ae={[uS]:r.ZERO,[fS]:r.ONE,[hS]:r.SRC_COLOR,[Ch]:r.SRC_ALPHA,[vS]:r.SRC_ALPHA_SATURATE,[_S]:r.DST_COLOR,[pS]:r.DST_ALPHA,[dS]:r.ONE_MINUS_SRC_COLOR,[wh]:r.ONE_MINUS_SRC_ALPHA,[gS]:r.ONE_MINUS_DST_COLOR,[mS]:r.ONE_MINUS_DST_ALPHA,[xS]:r.CONSTANT_COLOR,[SS]:r.ONE_MINUS_CONSTANT_COLOR,[yS]:r.CONSTANT_ALPHA,[MS]:r.ONE_MINUS_CONSTANT_ALPHA};function z(X,Nt,ot,gt,wt,Ut,$t,Ge,nn,Te){if(X===Fa){w===!0&&(Ct(r.BLEND),w=!1);return}if(w===!1&&(bt(r.BLEND),w=!0),X!==sS){if(X!==y||Te!==C){if((g!==_s||D!==_s)&&(r.blendEquation(r.FUNC_ADD),g=_s,D=_s),Te)switch(X){case yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case J_:r.blendFunc(r.ONE,r.ONE);break;case $_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case J_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,O=null,H=null,F=null,B.set(0,0,0),Y=0,y=X,C=Te}return}wt=wt||Nt,Ut=Ut||ot,$t=$t||gt,(Nt!==g||wt!==D)&&(r.blendEquationSeparate(we[Nt],we[wt]),g=Nt,D=wt),(ot!==P||gt!==O||Ut!==H||$t!==F)&&(r.blendFuncSeparate(ae[ot],ae[gt],ae[Ut],ae[$t]),P=ot,O=gt,H=Ut,F=$t),(Ge.equals(B)===!1||nn!==Y)&&(r.blendColor(Ge.r,Ge.g,Ge.b,nn),B.copy(Ge),Y=nn),y=X,C=!1}function vn(X,Nt){X.side===aa?Ct(r.CULL_FACE):bt(r.CULL_FACE);let ot=X.side===Xn;Nt&&(ot=!ot),re(ot),X.blending===yr&&X.transparent===!1?z(Fa):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const gt=X.stencilWrite;d.setTest(gt),gt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),De(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function re(X){b!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),b=X)}function he(X){X!==nS?(bt(r.CULL_FACE),X!==I&&(X===Q_?r.cullFace(r.BACK):X===iS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),I=X}function Xt(X){X!==st&&(V&&r.lineWidth(X),st=X)}function De(X,Nt,ot){X?(bt(r.POLYGON_OFFSET_FILL),(nt!==Nt||ut!==ot)&&(r.polygonOffset(Nt,ot),nt=Nt,ut=ot)):Ct(r.POLYGON_OFFSET_FILL)}function Wt(X){X?bt(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function U(X){X===void 0&&(X=r.TEXTURE0+ht-1),yt!==X&&(r.activeTexture(X),yt=X)}function T(X,Nt,ot){ot===void 0&&(yt===null?ot=r.TEXTURE0+ht-1:ot=yt);let gt=L[ot];gt===void 0&&(gt={type:void 0,texture:void 0},L[ot]=gt),(gt.type!==X||gt.texture!==Nt)&&(yt!==ot&&(r.activeTexture(ot),yt=ot),r.bindTexture(X,Nt||St[X]),gt.type=X,gt.texture=Nt)}function et(){const X=L[yt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function dt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(X){Rt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Rt.copy(X))}function Ft(X){q.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),q.copy(X))}function se(X,Nt){let ot=p.get(Nt);ot===void 0&&(ot=new WeakMap,p.set(Nt,ot));let gt=ot.get(X);gt===void 0&&(gt=r.getUniformBlockIndex(Nt,X.name),ot.set(X,gt))}function Zt(X,Nt){const gt=p.get(Nt).get(X);m.get(Nt)!==gt&&(r.uniformBlockBinding(Nt,gt,X.__bindingPointIndex),m.set(Nt,gt))}function Ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},yt=null,L={},v={},x=new WeakMap,M=[],E=null,w=!1,y=null,g=null,P=null,O=null,D=null,H=null,F=null,B=new Me(0,0,0),Y=0,C=!1,b=null,I=null,st=null,nt=null,ut=null,Rt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:bt,disable:Ct,bindFramebuffer:Qt,drawBuffers:zt,useProgram:Ee,setBlending:z,setMaterial:vn,setFlipSided:re,setCullFace:he,setLineWidth:Xt,setPolygonOffset:De,setScissorTest:Wt,activeTexture:U,bindTexture:T,unbindTexture:et,compressedTexImage2D:dt,compressedTexImage3D:xt,texImage2D:It,texImage3D:qt,updateUBOMapping:se,uniformBlockBinding:Zt,texStorage2D:_e,texStorage3D:Et,texSubImage2D:pt,texSubImage3D:Gt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Bt,scissor:Vt,viewport:Ft,reset:Ue}}function xA(r,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new fe,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,T){return M?new OffscreenCanvas(U,T):Pc("canvas")}function w(U,T,et){let dt=1;const xt=Wt(U);if((xt.width>et||xt.height>et)&&(dt=et/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pt=Math.floor(dt*xt.width),Gt=Math.floor(dt*xt.height);v===void 0&&(v=E(pt,Gt));const Dt=T?E(pt,Gt):v;return Dt.width=pt,Dt.height=Gt,Dt.getContext("2d").drawImage(U,0,0,pt,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+pt+"x"+Gt+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function y(U){return U.generateMipmaps}function g(U){r.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(U,T,et,dt,xt=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pt=T;if(T===r.RED&&(et===r.FLOAT&&(pt=r.R32F),et===r.HALF_FLOAT&&(pt=r.R16F),et===r.UNSIGNED_BYTE&&(pt=r.R8)),T===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.R8UI),et===r.UNSIGNED_SHORT&&(pt=r.R16UI),et===r.UNSIGNED_INT&&(pt=r.R32UI),et===r.BYTE&&(pt=r.R8I),et===r.SHORT&&(pt=r.R16I),et===r.INT&&(pt=r.R32I)),T===r.RG&&(et===r.FLOAT&&(pt=r.RG32F),et===r.HALF_FLOAT&&(pt=r.RG16F),et===r.UNSIGNED_BYTE&&(pt=r.RG8)),T===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.RG8UI),et===r.UNSIGNED_SHORT&&(pt=r.RG16UI),et===r.UNSIGNED_INT&&(pt=r.RG32UI),et===r.BYTE&&(pt=r.RG8I),et===r.SHORT&&(pt=r.RG16I),et===r.INT&&(pt=r.RG32I)),T===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),et===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),et===r.UNSIGNED_INT&&(pt=r.RGB32UI),et===r.BYTE&&(pt=r.RGB8I),et===r.SHORT&&(pt=r.RGB16I),et===r.INT&&(pt=r.RGB32I)),T===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),et===r.UNSIGNED_INT&&(pt=r.RGBA32UI),et===r.BYTE&&(pt=r.RGBA8I),et===r.SHORT&&(pt=r.RGBA16I),et===r.INT&&(pt=r.RGBA32I)),T===r.RGB&&et===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),T===r.RGBA){const Gt=xt?Nc:Ce.getTransfer(dt);et===r.FLOAT&&(pt=r.RGBA32F),et===r.HALF_FLOAT&&(pt=r.RGBA16F),et===r.UNSIGNED_BYTE&&(pt=Gt===Pe?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function D(U,T){let et;return U?T===null||T===Ss||T===Rr?et=r.DEPTH24_STENCIL8:T===sa?et=r.DEPTH32F_STENCIL8:T===ko&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ss||T===Rr?et=r.DEPTH_COMPONENT24:T===sa?et=r.DEPTH_COMPONENT32F:T===ko&&(et=r.DEPTH_COMPONENT16),et}function H(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ei&&U.minFilter!==Li?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function F(U){const T=U.target;T.removeEventListener("dispose",F),Y(T),T.isVideoTexture&&_.delete(T)}function B(U){const T=U.target;T.removeEventListener("dispose",B),b(T)}function Y(U){const T=s.get(U);if(T.__webglInit===void 0)return;const et=U.source,dt=x.get(et);if(dt){const xt=dt[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(U),Object.keys(dt).length===0&&x.delete(et)}s.remove(U)}function C(U){const T=s.get(U);r.deleteTexture(T.__webglTexture);const et=U.source,dt=x.get(et);delete dt[T.__cacheKey],h.memory.textures--}function b(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let xt=0;xt<T.__webglFramebuffer[dt].length;xt++)r.deleteFramebuffer(T.__webglFramebuffer[dt][xt]);else r.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)r.deleteFramebuffer(T.__webglFramebuffer[dt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=U.textures;for(let dt=0,xt=et.length;dt<xt;dt++){const pt=s.get(et[dt]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(et[dt])}s.remove(U)}let I=0;function st(){I=0}function nt(){const U=I;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),I+=1,U}function ut(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ht(U,T){const et=s.get(U);if(U.isVideoTexture&&Xt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(et,U,T);return}}i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+T)}function V(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){q(et,U,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+T)}function rt(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){q(et,U,T);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+T)}function Z(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){mt(et,U,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+T)}const yt={[Fh]:r.REPEAT,[vs]:r.CLAMP_TO_EDGE,[Hh]:r.MIRRORED_REPEAT},L={[Ei]:r.NEAREST,[LS]:r.NEAREST_MIPMAP_NEAREST,[ec]:r.NEAREST_MIPMAP_LINEAR,[Li]:r.LINEAR,[jf]:r.LINEAR_MIPMAP_NEAREST,[xs]:r.LINEAR_MIPMAP_LINEAR},at={[BS]:r.NEVER,[kS]:r.ALWAYS,[IS]:r.LESS,[T0]:r.LEQUAL,[FS]:r.EQUAL,[VS]:r.GEQUAL,[HS]:r.GREATER,[GS]:r.NOTEQUAL};function Tt(U,T){if(T.type===sa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Li||T.magFilter===jf||T.magFilter===ec||T.magFilter===xs||T.minFilter===Li||T.minFilter===jf||T.minFilter===ec||T.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,yt[T.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,yt[T.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,yt[T.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,L[T.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,at[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ei||T.minFilter!==ec&&T.minFilter!==xs||T.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Rt(U,T){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",F));const dt=T.source;let xt=x.get(dt);xt===void 0&&(xt={},x.set(dt,xt));const pt=ut(T);if(pt!==U.__cacheKey){xt[pt]===void 0&&(xt[pt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,et=!0),xt[pt].usedTimes++;const Gt=xt[U.__cacheKey];Gt!==void 0&&(xt[U.__cacheKey].usedTimes--,Gt.usedTimes===0&&C(T)),U.__cacheKey=pt,U.__webglTexture=xt[pt].texture}return et}function q(U,T,et){let dt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=r.TEXTURE_3D);const xt=Rt(U,T),pt=T.source;i.bindTexture(dt,U.__webglTexture,r.TEXTURE0+et);const Gt=s.get(pt);if(pt.version!==Gt.__version||xt===!0){i.activeTexture(r.TEXTURE0+et);const Dt=Ce.getPrimaries(Ce.workingColorSpace),Bt=T.colorSpace===Ia?null:Ce.getPrimaries(T.colorSpace),_e=T.colorSpace===Ia||Dt===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Et=w(T.image,!1,l.maxTextureSize);Et=De(T,Et);const It=u.convert(T.format,T.colorSpace),qt=u.convert(T.type);let Vt=O(T.internalFormat,It,qt,T.colorSpace,T.isVideoTexture);Tt(dt,T);let Ft;const se=T.mipmaps,Zt=T.isVideoTexture!==!0,Ue=Gt.__version===void 0||xt===!0,X=pt.dataReady,Nt=H(T,Et);if(T.isDepthTexture)Vt=D(T.format===Cr,T.type),Ue&&(Zt?i.texStorage2D(r.TEXTURE_2D,1,Vt,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,Vt,Et.width,Et.height,0,It,qt,null));else if(T.isDataTexture)if(se.length>0){Zt&&Ue&&i.texStorage2D(r.TEXTURE_2D,Nt,Vt,se[0].width,se[0].height);for(let ot=0,gt=se.length;ot<gt;ot++)Ft=se[ot],Zt?X&&i.texSubImage2D(r.TEXTURE_2D,ot,0,0,Ft.width,Ft.height,It,qt,Ft.data):i.texImage2D(r.TEXTURE_2D,ot,Vt,Ft.width,Ft.height,0,It,qt,Ft.data);T.generateMipmaps=!1}else Zt?(Ue&&i.texStorage2D(r.TEXTURE_2D,Nt,Vt,Et.width,Et.height),X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Et.width,Et.height,It,qt,Et.data)):i.texImage2D(r.TEXTURE_2D,0,Vt,Et.width,Et.height,0,It,qt,Et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&Ue&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Vt,se[0].width,se[0].height,Et.depth);for(let ot=0,gt=se.length;ot<gt;ot++)if(Ft=se[ot],T.format!==Mi)if(It!==null)if(Zt){if(X)if(T.layerUpdates.size>0){const wt=wg(Ft.width,Ft.height,T.format,T.type);for(const Ut of T.layerUpdates){const $t=Ft.data.subarray(Ut*wt/Ft.data.BYTES_PER_ELEMENT,(Ut+1)*wt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,Ut,Ft.width,Ft.height,1,It,$t)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,Ft.width,Ft.height,Et.depth,It,Ft.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ot,Vt,Ft.width,Ft.height,Et.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,Ft.width,Ft.height,Et.depth,It,qt,Ft.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ot,Vt,Ft.width,Ft.height,Et.depth,0,It,qt,Ft.data)}else{Zt&&Ue&&i.texStorage2D(r.TEXTURE_2D,Nt,Vt,se[0].width,se[0].height);for(let ot=0,gt=se.length;ot<gt;ot++)Ft=se[ot],T.format!==Mi?It!==null?Zt?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,ot,0,0,Ft.width,Ft.height,It,Ft.data):i.compressedTexImage2D(r.TEXTURE_2D,ot,Vt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?X&&i.texSubImage2D(r.TEXTURE_2D,ot,0,0,Ft.width,Ft.height,It,qt,Ft.data):i.texImage2D(r.TEXTURE_2D,ot,Vt,Ft.width,Ft.height,0,It,qt,Ft.data)}else if(T.isDataArrayTexture)if(Zt){if(Ue&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Vt,Et.width,Et.height,Et.depth),X)if(T.layerUpdates.size>0){const ot=wg(Et.width,Et.height,T.format,T.type);for(const gt of T.layerUpdates){const wt=Et.data.subarray(gt*ot/Et.data.BYTES_PER_ELEMENT,(gt+1)*ot/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,gt,Et.width,Et.height,1,It,qt,wt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,It,qt,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Vt,Et.width,Et.height,Et.depth,0,It,qt,Et.data);else if(T.isData3DTexture)Zt?(Ue&&i.texStorage3D(r.TEXTURE_3D,Nt,Vt,Et.width,Et.height,Et.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,It,qt,Et.data)):i.texImage3D(r.TEXTURE_3D,0,Vt,Et.width,Et.height,Et.depth,0,It,qt,Et.data);else if(T.isFramebufferTexture){if(Ue)if(Zt)i.texStorage2D(r.TEXTURE_2D,Nt,Vt,Et.width,Et.height);else{let ot=Et.width,gt=Et.height;for(let wt=0;wt<Nt;wt++)i.texImage2D(r.TEXTURE_2D,wt,Vt,ot,gt,0,It,qt,null),ot>>=1,gt>>=1}}else if(se.length>0){if(Zt&&Ue){const ot=Wt(se[0]);i.texStorage2D(r.TEXTURE_2D,Nt,Vt,ot.width,ot.height)}for(let ot=0,gt=se.length;ot<gt;ot++)Ft=se[ot],Zt?X&&i.texSubImage2D(r.TEXTURE_2D,ot,0,0,It,qt,Ft):i.texImage2D(r.TEXTURE_2D,ot,Vt,It,qt,Ft);T.generateMipmaps=!1}else if(Zt){if(Ue){const ot=Wt(Et);i.texStorage2D(r.TEXTURE_2D,Nt,Vt,ot.width,ot.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,It,qt,Et)}else i.texImage2D(r.TEXTURE_2D,0,Vt,It,qt,Et);y(T)&&g(dt),Gt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function mt(U,T,et){if(T.image.length!==6)return;const dt=Rt(U,T),xt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+et);const pt=s.get(xt);if(xt.version!==pt.__version||dt===!0){i.activeTexture(r.TEXTURE0+et);const Gt=Ce.getPrimaries(Ce.workingColorSpace),Dt=T.colorSpace===Ia?null:Ce.getPrimaries(T.colorSpace),Bt=T.colorSpace===Ia||Gt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,It=[];for(let gt=0;gt<6;gt++)!_e&&!Et?It[gt]=w(T.image[gt],!0,l.maxCubemapSize):It[gt]=Et?T.image[gt].image:T.image[gt],It[gt]=De(T,It[gt]);const qt=It[0],Vt=u.convert(T.format,T.colorSpace),Ft=u.convert(T.type),se=O(T.internalFormat,Vt,Ft,T.colorSpace),Zt=T.isVideoTexture!==!0,Ue=pt.__version===void 0||dt===!0,X=xt.dataReady;let Nt=H(T,qt);Tt(r.TEXTURE_CUBE_MAP,T);let ot;if(_e){Zt&&Ue&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,se,qt.width,qt.height);for(let gt=0;gt<6;gt++){ot=It[gt].mipmaps;for(let wt=0;wt<ot.length;wt++){const Ut=ot[wt];T.format!==Mi?Vt!==null?Zt?X&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,0,0,Ut.width,Ut.height,Vt,Ut.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,se,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,0,0,Ut.width,Ut.height,Vt,Ft,Ut.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,se,Ut.width,Ut.height,0,Vt,Ft,Ut.data)}}}else{if(ot=T.mipmaps,Zt&&Ue){ot.length>0&&Nt++;const gt=Wt(It[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Et){Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It[gt].width,It[gt].height,Vt,Ft,It[gt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,It[gt].width,It[gt].height,0,Vt,Ft,It[gt].data);for(let wt=0;wt<ot.length;wt++){const $t=ot[wt].image[gt].image;Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,0,0,$t.width,$t.height,Vt,Ft,$t.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,se,$t.width,$t.height,0,Vt,Ft,$t.data)}}else{Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Vt,Ft,It[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Vt,Ft,It[gt]);for(let wt=0;wt<ot.length;wt++){const Ut=ot[wt];Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,0,0,Vt,Ft,Ut.image[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,se,Vt,Ft,Ut.image[gt])}}}y(T)&&g(r.TEXTURE_CUBE_MAP),pt.__version=xt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function St(U,T,et,dt,xt,pt){const Gt=u.convert(et.format,et.colorSpace),Dt=u.convert(et.type),Bt=O(et.internalFormat,Gt,Dt,et.colorSpace),_e=s.get(T),Et=s.get(et);if(Et.__renderTarget=T,!_e.__hasExternalTextures){const It=Math.max(1,T.width>>pt),qt=Math.max(1,T.height>>pt);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?i.texImage3D(xt,pt,Bt,It,qt,T.depth,0,Gt,Dt,null):i.texImage2D(xt,pt,Bt,It,qt,0,Gt,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),he(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,xt,Et.__webglTexture,0,re(T)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,xt,Et.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(U,T,et){if(r.bindRenderbuffer(r.RENDERBUFFER,U),T.depthBuffer){const dt=T.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,pt=D(T.stencilBuffer,xt),Gt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=re(T);he(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,pt,T.width,T.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Gt,r.RENDERBUFFER,U)}else{const dt=T.textures;for(let xt=0;xt<dt.length;xt++){const pt=dt[xt],Gt=u.convert(pt.format,pt.colorSpace),Dt=u.convert(pt.type),Bt=O(pt.internalFormat,Gt,Dt,pt.colorSpace),_e=re(T);et&&he(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,Bt,T.width,T.height):he(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,Bt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Bt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const xt=dt.__webglTexture,pt=re(T);if(T.depthTexture.format===Mr)he(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xt,0);else if(T.depthTexture.format===Cr)he(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Qt(U){const T=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=dt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Ct(T.__webglFramebuffer,U)}else if(et){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=r.createRenderbuffer(),bt(T.__webglDepthbuffer[dt],U,!1);else{const xt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),bt(T.__webglDepthbuffer,U,!1);else{const dt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,xt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(U,T,et){const dt=s.get(U);T!==void 0&&St(dt.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&Qt(U)}function Ee(U){const T=U.texture,et=s.get(U),dt=s.get(T);U.addEventListener("dispose",B);const xt=U.textures,pt=U.isWebGLCubeRenderTarget===!0,Gt=xt.length>1;if(Gt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=T.version,h.memory.textures++),pt){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Bt=0;Bt<T.mipmaps.length;Bt++)et.__webglFramebuffer[Dt][Bt]=r.createFramebuffer()}else et.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(Gt)for(let Dt=0,Bt=xt.length;Dt<Bt;Dt++){const _e=s.get(xt[Dt]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&he(U)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<xt.length;Dt++){const Bt=xt[Dt];et.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const _e=u.convert(Bt.format,Bt.colorSpace),Et=u.convert(Bt.type),It=O(Bt.internalFormat,_e,Et,Bt.colorSpace,U.isXRRenderTarget===!0),qt=re(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,It,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)St(et.__webglFramebuffer[Dt][Bt],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Bt);else St(et.__webglFramebuffer[Dt],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(T)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let Dt=0,Bt=xt.length;Dt<Bt;Dt++){const _e=xt[Dt],Et=s.get(_e);i.bindTexture(r.TEXTURE_2D,Et.__webglTexture),Tt(r.TEXTURE_2D,_e),St(et.__webglFramebuffer,U,_e,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,0),y(_e)&&g(r.TEXTURE_2D)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,dt.__webglTexture),Tt(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)St(et.__webglFramebuffer[Bt],U,T,r.COLOR_ATTACHMENT0,Dt,Bt);else St(et.__webglFramebuffer,U,T,r.COLOR_ATTACHMENT0,Dt,0);y(T)&&g(Dt),i.unbindTexture()}U.depthBuffer&&Qt(U)}function we(U){const T=U.textures;for(let et=0,dt=T.length;et<dt;et++){const xt=T[et];if(y(xt)){const pt=P(U),Gt=s.get(xt).__webglTexture;i.bindTexture(pt,Gt),g(pt),i.unbindTexture()}}}const ae=[],z=[];function vn(U){if(U.samples>0){if(he(U)===!1){const T=U.textures,et=U.width,dt=U.height;let xt=r.COLOR_BUFFER_BIT;const pt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Gt=s.get(U),Dt=T.length>1;if(Dt)for(let Bt=0;Bt<T.length;Bt++)i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Bt=0;Bt<T.length;Bt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const _e=s.get(T[Bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,et,dt,0,0,et,dt,xt,r.NEAREST),m===!0&&(ae.length=0,z.length=0,ae.push(r.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ae.push(pt),z.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let Bt=0;Bt<T.length;Bt++){i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const _e=s.get(T[Bt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,_e,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function re(U){return Math.min(l.maxSamples,U.samples)}function he(U){const T=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(U){const T=h.render.frame;_.get(U)!==T&&(_.set(U,T),U.update())}function De(U,T){const et=U.colorSpace,dt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==wr&&et!==Ia&&(Ce.getTransfer(et)===Pe?(dt!==Mi||xt!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=st,this.setTexture2D=ht,this.setTexture2DArray=V,this.setTexture3D=rt,this.setTextureCube=Z,this.rebindTextures=zt,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=he}function SA(r,t){function i(s,l=Ia){let u;const h=Ce.getTransfer(l);if(s===la)return r.UNSIGNED_BYTE;if(s===xd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Sd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===_0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===p0)return r.BYTE;if(s===m0)return r.SHORT;if(s===ko)return r.UNSIGNED_SHORT;if(s===vd)return r.INT;if(s===Ss)return r.UNSIGNED_INT;if(s===sa)return r.FLOAT;if(s===Yo)return r.HALF_FLOAT;if(s===g0)return r.ALPHA;if(s===v0)return r.RGB;if(s===Mi)return r.RGBA;if(s===x0)return r.LUMINANCE;if(s===S0)return r.LUMINANCE_ALPHA;if(s===Mr)return r.DEPTH_COMPONENT;if(s===Cr)return r.DEPTH_STENCIL;if(s===y0)return r.RED;if(s===yd)return r.RED_INTEGER;if(s===M0)return r.RG;if(s===Md)return r.RG_INTEGER;if(s===Ed)return r.RGBA_INTEGER;if(s===Rc||s===Cc||s===wc||s===Dc)if(h===Pe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Rc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Rc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gh||s===Vh||s===kh||s===Xh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Gh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wh||s===Yh||s===qh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Wh||s===Yh)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$h)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===td)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ed)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===id)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ad)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===od)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uc||s===ld||s===cd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Uc)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ld)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===E0||s===ud||s===fd||s===hd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Uc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===ud)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rr?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const yA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Wn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Va({vertexShader:yA,fragmentShader:MA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new Gc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TA extends Es{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,x=null,M=null,E=null;const w=new EA,y=i.getContextAttributes();let g=null,P=null;const O=[],D=[],H=new fe;let F=null;const B=new hi;B.viewport=new Ke;const Y=new hi;Y.viewport=new Ke;const C=[B,Y],b=new ky;let I=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let mt=O[q];return mt===void 0&&(mt=new ph,O[q]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(q){let mt=O[q];return mt===void 0&&(mt=new ph,O[q]=mt),mt.getGripSpace()},this.getHand=function(q){let mt=O[q];return mt===void 0&&(mt=new ph,O[q]=mt),mt.getHandSpace()};function nt(q){const mt=D.indexOf(q.inputSource);if(mt===-1)return;const St=O[mt];St!==void 0&&(St.update(q.inputSource,q.frame,p||h),St.dispatchEvent({type:q.type,data:q.inputSource}))}function ut(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",ht);for(let q=0;q<O.length;q++){const mt=D[q];mt!==null&&(D[q]=null,O[q].disconnect(mt))}I=null,st=null,w.reset(),t.setRenderTarget(g),M=null,x=null,v=null,l=null,P=null,Rt.stop(),s.isPresenting=!1,t.setPixelRatio(F),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,bt=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=y.stencil?Cr:Mr,bt=y.stencil?Rr:Ss);const Qt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(Qt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new ys(x.textureWidth,x.textureHeight,{format:Mi,type:la,depthTexture:new I0(x.textureWidth,x.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const St={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new ys(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:la,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ht(q){for(let mt=0;mt<q.removed.length;mt++){const St=q.removed[mt],bt=D.indexOf(St);bt>=0&&(D[bt]=null,O[bt].disconnect(St))}for(let mt=0;mt<q.added.length;mt++){const St=q.added[mt];let bt=D.indexOf(St);if(bt===-1){for(let Qt=0;Qt<O.length;Qt++)if(Qt>=D.length){D.push(St),bt=Qt;break}else if(D[Qt]===null){D[Qt]=St,bt=Qt;break}if(bt===-1)break}const Ct=O[bt];Ct&&Ct.connect(St)}}const V=new J,rt=new J;function Z(q,mt,St){V.setFromMatrixPosition(mt.matrixWorld),rt.setFromMatrixPosition(St.matrixWorld);const bt=V.distanceTo(rt),Ct=mt.projectionMatrix.elements,Qt=St.projectionMatrix.elements,zt=Ct[14]/(Ct[10]-1),Ee=Ct[14]/(Ct[10]+1),we=(Ct[9]+1)/Ct[5],ae=(Ct[9]-1)/Ct[5],z=(Ct[8]-1)/Ct[0],vn=(Qt[8]+1)/Qt[0],re=zt*z,he=zt*vn,Xt=bt/(-z+vn),De=Xt*-z;if(mt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(Xt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ct[10]===-1)q.projectionMatrix.copy(mt.projectionMatrix),q.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Wt=zt+Xt,U=Ee+Xt,T=re-De,et=he+(bt-De),dt=we*Ee/U*Wt,xt=ae*Ee/U*Wt;q.projectionMatrix.makePerspective(T,et,dt,xt,Wt,U),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function yt(q,mt){mt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(mt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let mt=q.near,St=q.far;w.texture!==null&&(w.depthNear>0&&(mt=w.depthNear),w.depthFar>0&&(St=w.depthFar)),b.near=Y.near=B.near=mt,b.far=Y.far=B.far=St,(I!==b.near||st!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,st=b.far),B.layers.mask=q.layers.mask|2,Y.layers.mask=q.layers.mask|4,b.layers.mask=B.layers.mask|Y.layers.mask;const bt=q.parent,Ct=b.cameras;yt(b,bt);for(let Qt=0;Qt<Ct.length;Qt++)yt(Ct[Qt],bt);Ct.length===2?Z(b,B,Y):b.projectionMatrix.copy(B.projectionMatrix),L(q,b,bt)};function L(q,mt,St){St===null?q.matrix.copy(mt.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(mt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(mt.projectionMatrix),q.projectionMatrixInverse.copy(mt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(q){m=q,x!==null&&(x.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(b)};let at=null;function Tt(q,mt){if(_=mt.getViewerPose(p||h),E=mt,_!==null){const St=_.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let bt=!1;St.length!==b.cameras.length&&(b.cameras.length=0,bt=!0);for(let zt=0;zt<St.length;zt++){const Ee=St[zt];let we=null;if(M!==null)we=M.getViewport(Ee);else{const z=v.getViewSubImage(x,Ee);we=z.viewport,zt===0&&(t.setRenderTargetTextures(P,z.colorTexture,x.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(P))}let ae=C[zt];ae===void 0&&(ae=new hi,ae.layers.enable(zt),ae.viewport=new Ke,C[zt]=ae),ae.matrix.fromArray(Ee.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Ee.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(we.x,we.y,we.width,we.height),zt===0&&(b.matrix.copy(ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),bt===!0&&b.cameras.push(ae)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const zt=v.getDepthInformation(St[0]);zt&&zt.isValid&&zt.texture&&w.init(t,zt,l.renderState)}}for(let St=0;St<O.length;St++){const bt=D[St],Ct=O[St];bt!==null&&Ct!==void 0&&Ct.update(bt,mt,p||h)}at&&at(q,mt),mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:mt}),E=null}const Rt=new F0;Rt.setAnimationLoop(Tt),this.setAnimationLoop=function(q){at=q},this.dispose=function(){}}}const ps=new ca,bA=new je;function AA(r,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,N0(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,P,O,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,D)):g.isMeshMatcapMaterial?(u(y,g),E(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),w(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,P,O):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Xn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Xn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const P=t.get(g),O=P.envMap,D=P.envMapRotation;O&&(y.envMap.value=O,ps.copy(D),ps.x*=-1,ps.y*=-1,ps.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),y.envMapRotation.value.setFromMatrix4(bA.makeRotationFromEuler(ps)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,P,O){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*P,y.scale.value=O*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,P){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function w(y,g){const P=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function RA(r,t,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const D=O.program;s.uniformBlockBinding(P,D)}function p(P,O){let D=l[P.id];D===void 0&&(E(P),D=_(P),l[P.id]=D,P.addEventListener("dispose",y));const H=O.program;s.updateUBOMapping(P,H);const F=t.render.frame;u[P.id]!==F&&(x(P),u[P.id]=F)}function _(P){const O=v();P.__bindingPointIndex=O;const D=r.createBuffer(),H=P.__size,F=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,H,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function v(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const O=l[P.id],D=P.uniforms,H=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let F=0,B=D.length;F<B;F++){const Y=Array.isArray(D[F])?D[F]:[D[F]];for(let C=0,b=Y.length;C<b;C++){const I=Y[C];if(M(I,F,C,H)===!0){const st=I.__offset,nt=Array.isArray(I.value)?I.value:[I.value];let ut=0;for(let ht=0;ht<nt.length;ht++){const V=nt[ht],rt=w(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,st+ut,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,ut),ut+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,st,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(P,O,D,H){const F=P.value,B=O+"_"+D;if(H[B]===void 0)return typeof F=="number"||typeof F=="boolean"?H[B]=F:H[B]=F.clone(),!0;{const Y=H[B];if(typeof F=="number"||typeof F=="boolean"){if(Y!==F)return H[B]=F,!0}else if(Y.equals(F)===!1)return Y.copy(F),!0}return!1}function E(P){const O=P.uniforms;let D=0;const H=16;for(let B=0,Y=O.length;B<Y;B++){const C=Array.isArray(O[B])?O[B]:[O[B]];for(let b=0,I=C.length;b<I;b++){const st=C[b],nt=Array.isArray(st.value)?st.value:[st.value];for(let ut=0,ht=nt.length;ut<ht;ut++){const V=nt[ut],rt=w(V),Z=D%H,yt=Z%rt.boundary,L=Z+yt;D+=yt,L!==0&&H-L<rt.storage&&(D+=H-L),st.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=D,D+=rt.storage}}}const F=D%H;return F>0&&(D+=H-F),P.__size=D,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function g(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class CA{constructor(t={}){const{canvas:i=oy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,g=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=Ha,this.toneMappingExposure=1;const D=this;let H=!1,F=0,B=0,Y=null,C=-1,b=null;const I=new Ke,st=new Ke;let nt=null;const ut=new Me(0);let ht=0,V=i.width,rt=i.height,Z=1,yt=null,L=null;const at=new Ke(0,0,V,rt),Tt=new Ke(0,0,V,rt);let Rt=!1;const q=new z0;let mt=!1,St=!1;this.transmissionResolutionScale=1;const bt=new je,Ct=new je,Qt=new J,zt=new Ke,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function ae(){return Y===null?Z:1}let z=s;function vn(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gd}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),z===null){const W="webgl2";if(z=vn(W,R),z===null)throw vn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let re,he,Xt,De,Wt,U,T,et,dt,xt,pt,Gt,Dt,Bt,_e,Et,It,qt,Vt,Ft,se,Zt,Ue,X;function Nt(){re=new IT(z),re.init(),Zt=new SA(z,re),he=new LT(z,re,t,Zt),Xt=new vA(z,re),he.reverseDepthBuffer&&x&&Xt.buffers.depth.setReversed(!0),De=new GT(z),Wt=new sA,U=new xA(z,re,Xt,Wt,he,Zt,De),T=new OT(D),et=new BT(D),dt=new jy(z),Ue=new DT(z,dt),xt=new FT(z,dt,De,Ue),pt=new kT(z,xt,dt,De),Vt=new VT(z,he,U),Et=new NT(Wt),Gt=new aA(D,T,et,re,he,Ue,Et),Dt=new AA(D,Wt),Bt=new oA,_e=new dA(re),qt=new wT(D,T,et,Xt,pt,M,m),It=new _A(D,pt,he),X=new RA(z,De,he,Xt),Ft=new UT(z,re,De),se=new HT(z,re,De),De.programs=Gt.programs,D.capabilities=he,D.extensions=re,D.properties=Wt,D.renderLists=Bt,D.shadowMap=It,D.state=Xt,D.info=De}Nt();const ot=new TA(D,z);this.xr=ot,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(V,rt,!1))},this.getSize=function(R){return R.set(V,rt)},this.setSize=function(R,W,tt=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,rt=W,i.width=Math.floor(R*Z),i.height=Math.floor(W*Z),tt===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(V*Z,rt*Z).floor()},this.setDrawingBufferSize=function(R,W,tt){V=R,rt=W,Z=tt,i.width=Math.floor(R*tt),i.height=Math.floor(W*tt),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,W,tt,Q){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,W,tt,Q),Xt.viewport(I.copy(at).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(Tt)},this.setScissor=function(R,W,tt,Q){R.isVector4?Tt.set(R.x,R.y,R.z,R.w):Tt.set(R,W,tt,Q),Xt.scissor(st.copy(Tt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(R){Xt.setScissorTest(Rt=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(R=!0,W=!0,tt=!0){let Q=0;if(R){let j=!1;if(Y!==null){const Mt=Y.texture.format;j=Mt===Ed||Mt===Md||Mt===yd}if(j){const Mt=Y.texture.type,At=Mt===la||Mt===Ss||Mt===ko||Mt===Rr||Mt===xd||Mt===Sd,Pt=qt.getClearColor(),Ot=qt.getClearAlpha(),te=Pt.r,ee=Pt.g,jt=Pt.b;At?(E[0]=te,E[1]=ee,E[2]=jt,E[3]=Ot,z.clearBufferuiv(z.COLOR,0,E)):(w[0]=te,w[1]=ee,w[2]=jt,w[3]=Ot,z.clearBufferiv(z.COLOR,0,w))}else Q|=z.COLOR_BUFFER_BIT}W&&(Q|=z.DEPTH_BUFFER_BIT),tt&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),qt.dispose(),Bt.dispose(),_e.dispose(),Wt.dispose(),T.dispose(),et.dispose(),pt.dispose(),Ue.dispose(),X.dispose(),Gt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",jo),ot.removeEventListener("sessionend",zr),Ti.stop()};function gt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=De.autoReset,W=It.enabled,tt=It.autoUpdate,Q=It.needsUpdate,j=It.type;Nt(),De.autoReset=R,It.enabled=W,It.autoUpdate=tt,It.needsUpdate=Q,It.type=j}function Ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $t(R){const W=R.target;W.removeEventListener("dispose",$t),Ge(W)}function Ge(R){nn(R),Wt.remove(R)}function nn(R){const W=Wt.get(R).programs;W!==void 0&&(W.forEach(function(tt){Gt.releaseProgram(tt)}),R.isShaderMaterial&&Gt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,tt,Q,j,Mt){W===null&&(W=Ee);const At=j.isMesh&&j.matrixWorld.determinant()<0,Pt=kc(R,W,tt,Q,j);Xt.setMaterial(Q,At);let Ot=tt.index,te=1;if(Q.wireframe===!0){if(Ot=xt.getWireframeAttribute(tt),Ot===void 0)return;te=2}const ee=tt.drawRange,jt=tt.attributes.position;let ge=ee.start*te,ve=(ee.start+ee.count)*te;Mt!==null&&(ge=Math.max(ge,Mt.start*te),ve=Math.min(ve,(Mt.start+Mt.count)*te)),Ot!==null?(ge=Math.max(ge,0),ve=Math.min(ve,Ot.count)):jt!=null&&(ge=Math.max(ge,0),ve=Math.min(ve,jt.count));const He=ve-ge;if(He<0||He===1/0)return;Ue.setup(j,Q,Pt,tt,Ot);let be,ne=Ft;if(Ot!==null&&(be=dt.get(Ot),ne=se,ne.setIndex(be)),j.isMesh)Q.wireframe===!0?(Xt.setLineWidth(Q.wireframeLinewidth*ae()),ne.setMode(z.LINES)):ne.setMode(z.TRIANGLES);else if(j.isLine){let Kt=Q.linewidth;Kt===void 0&&(Kt=1),Xt.setLineWidth(Kt*ae()),j.isLineSegments?ne.setMode(z.LINES):j.isLineLoop?ne.setMode(z.LINE_LOOP):ne.setMode(z.LINE_STRIP)}else j.isPoints?ne.setMode(z.POINTS):j.isSprite&&ne.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ne.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ne.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,rn=j._multiDrawCounts,xe=j._multiDrawCount,Fn=Ot?dt.get(Ot).bytesPerElement:1,di=Wt.get(Q).currentProgram.getUniforms();for(let Ln=0;Ln<xe;Ln++)di.setValue(z,"_gl_DrawID",Ln),ne.render(Kt[Ln]/Fn,rn[Ln])}else if(j.isInstancedMesh)ne.renderInstances(ge,He,j.count);else if(tt.isInstancedBufferGeometry){const Kt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,rn=Math.min(tt.instanceCount,Kt);ne.renderInstances(ge,He,rn)}else ne.render(ge,He)};function Te(R,W,tt){R.transparent===!0&&R.side===aa&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,sn(R,W,tt),R.side=Ga,R.needsUpdate=!0,sn(R,W,tt),R.side=aa):sn(R,W,tt)}this.compile=function(R,W,tt=null){tt===null&&(tt=R),g=_e.get(tt),g.init(W),O.push(g),tt.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),R!==tt&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const Q=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Mt=j.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const Pt=Mt[At];Te(Pt,tt,j),Q.add(Pt)}else Te(Mt,tt,j),Q.add(Mt)}),O.pop(),g=null,Q},this.compileAsync=function(R,W,tt=null){const Q=this.compile(R,W,tt);return new Promise(j=>{function Mt(){if(Q.forEach(function(At){Wt.get(At).currentProgram.isReady()&&Q.delete(At)}),Q.size===0){j(R);return}setTimeout(Mt,10)}re.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Dn=null;function Un(R){Dn&&Dn(R)}function jo(){Ti.stop()}function zr(){Ti.start()}const Ti=new F0;Ti.setAnimationLoop(Un),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(R){Dn=R,ot.setAnimationLoop(R),R===null?Ti.stop():Ti.start()},ot.addEventListener("sessionstart",jo),ot.addEventListener("sessionend",zr),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,Y),g=_e.get(R,O.length),g.init(W),O.push(g),Ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(Ct),St=this.localClippingEnabled,mt=Et.init(this.clippingPlanes,St),y=Bt.get(R,P.length),y.init(),P.push(y),ot.enabled===!0&&ot.isPresenting===!0){const Mt=D.xr.getDepthSensingMesh();Mt!==null&&Ts(Mt,W,-1/0,D.sortObjects)}Ts(R,W,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(yt,L),we=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,we&&qt.addToRenderList(y,R),this.info.render.frame++,mt===!0&&Et.beginShadows();const tt=g.state.shadowsArray;It.render(tt,R,W),mt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,j=y.transmissive;if(g.setupLights(),W.isArrayCamera){const Mt=W.cameras;if(j.length>0)for(let At=0,Pt=Mt.length;At<Pt;At++){const Ot=Mt[At];Zo(Q,j,R,Ot)}we&&qt.render(R);for(let At=0,Pt=Mt.length;At<Pt;At++){const Ot=Mt[At];Br(y,R,Ot,Ot.viewport)}}else j.length>0&&Zo(Q,j,R,W),we&&qt.render(R),Br(y,R,W);Y!==null&&B===0&&(U.updateMultisampleRenderTarget(Y),U.updateRenderTargetMipmap(Y)),R.isScene===!0&&R.onAfterRender(D,R,W),Ue.resetDefaultState(),C=-1,b=null,O.pop(),O.length>0?(g=O[O.length-1],mt===!0&&Et.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function Ts(R,W,tt,Q){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)tt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){Q&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ct);const At=pt.update(R),Pt=R.material;Pt.visible&&y.push(R,At,Pt,tt,zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const At=pt.update(R),Pt=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),zt.copy(At.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(Ct)),Array.isArray(Pt)){const Ot=At.groups;for(let te=0,ee=Ot.length;te<ee;te++){const jt=Ot[te],ge=Pt[jt.materialIndex];ge&&ge.visible&&y.push(R,At,ge,tt,zt.z,jt)}}else Pt.visible&&y.push(R,At,Pt,tt,zt.z,null)}}const Mt=R.children;for(let At=0,Pt=Mt.length;At<Pt;At++)Ts(Mt[At],W,tt,Q)}function Br(R,W,tt,Q){const j=R.opaque,Mt=R.transmissive,At=R.transparent;g.setupLightsView(tt),mt===!0&&Et.setGlobalState(D.clippingPlanes,tt),Q&&Xt.viewport(I.copy(Q)),j.length>0&&Yn(j,W,tt),Mt.length>0&&Yn(Mt,W,tt),At.length>0&&Yn(At,W,tt),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Zo(R,W,tt,Q){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new ys(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Yo:la,minFilter:xs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Mt=g.state.transmissionRenderTarget[Q.id],At=Q.viewport||I;Mt.setSize(At.z*D.transmissionResolutionScale,At.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget();D.setRenderTarget(Mt),D.getClearColor(ut),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),we&&qt.render(tt);const Ot=D.toneMapping;D.toneMapping=Ha;const te=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),mt===!0&&Et.setGlobalState(D.clippingPlanes,Q),Yn(R,tt,Q),U.updateMultisampleRenderTarget(Mt),U.updateRenderTargetMipmap(Mt),re.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let jt=0,ge=W.length;jt<ge;jt++){const ve=W[jt],He=ve.object,be=ve.geometry,ne=ve.material,Kt=ve.group;if(ne.side===aa&&He.layers.test(Q.layers)){const rn=ne.side;ne.side=Xn,ne.needsUpdate=!0,an(He,tt,Q,be,ne,Kt),ne.side=rn,ne.needsUpdate=!0,ee=!0}}ee===!0&&(U.updateMultisampleRenderTarget(Mt),U.updateRenderTargetMipmap(Mt))}D.setRenderTarget(Pt),D.setClearColor(ut,ht),te!==void 0&&(Q.viewport=te),D.toneMapping=Ot}function Yn(R,W,tt){const Q=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Mt=R.length;j<Mt;j++){const At=R[j],Pt=At.object,Ot=At.geometry,te=Q===null?At.material:Q,ee=At.group;Pt.layers.test(tt.layers)&&an(Pt,W,tt,Ot,te,ee)}}function an(R,W,tt,Q,j,Mt){R.onBeforeRender(D,W,tt,Q,j,Mt),R.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(D,W,tt,Q,R,Mt),j.transparent===!0&&j.side===aa&&j.forceSinglePass===!1?(j.side=Xn,j.needsUpdate=!0,D.renderBufferDirect(tt,W,Q,j,R,Mt),j.side=Ga,j.needsUpdate=!0,D.renderBufferDirect(tt,W,Q,j,R,Mt),j.side=aa):D.renderBufferDirect(tt,W,Q,j,R,Mt),R.onAfterRender(D,W,tt,Q,j,Mt)}function sn(R,W,tt){W.isScene!==!0&&(W=Ee);const Q=Wt.get(R),j=g.state.lights,Mt=g.state.shadowsArray,At=j.state.version,Pt=Gt.getParameters(R,j.state,Mt,W,tt),Ot=Gt.getProgramCacheKey(Pt);let te=Q.programs;Q.environment=R.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(R.isMeshStandardMaterial?et:T).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",$t),te=new Map,Q.programs=te);let ee=te.get(Ot);if(ee!==void 0){if(Q.currentProgram===ee&&Q.lightsStateVersion===At)return bs(R,Pt),ee}else Pt.uniforms=Gt.getUniforms(R),R.onBeforeCompile(Pt,D),ee=Gt.acquireProgram(Pt,Ot),te.set(Ot,ee),Q.uniforms=Pt.uniforms;const jt=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=Et.uniform),bs(R,Pt),Q.needsLights=Ko(R),Q.lightsStateVersion=At,Q.needsLights&&(jt.ambientLightColor.value=j.state.ambient,jt.lightProbe.value=j.state.probe,jt.directionalLights.value=j.state.directional,jt.directionalLightShadows.value=j.state.directionalShadow,jt.spotLights.value=j.state.spot,jt.spotLightShadows.value=j.state.spotShadow,jt.rectAreaLights.value=j.state.rectArea,jt.ltc_1.value=j.state.rectAreaLTC1,jt.ltc_2.value=j.state.rectAreaLTC2,jt.pointLights.value=j.state.point,jt.pointLightShadows.value=j.state.pointShadow,jt.hemisphereLights.value=j.state.hemi,jt.directionalShadowMap.value=j.state.directionalShadowMap,jt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,jt.spotShadowMap.value=j.state.spotShadowMap,jt.spotLightMatrix.value=j.state.spotLightMatrix,jt.spotLightMap.value=j.state.spotLightMap,jt.pointShadowMap.value=j.state.pointShadowMap,jt.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=ee,Q.uniformsList=null,ee}function Pi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Lc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function bs(R,W){const tt=Wt.get(R);tt.outputColorSpace=W.outputColorSpace,tt.batching=W.batching,tt.batchingColor=W.batchingColor,tt.instancing=W.instancing,tt.instancingColor=W.instancingColor,tt.instancingMorph=W.instancingMorph,tt.skinning=W.skinning,tt.morphTargets=W.morphTargets,tt.morphNormals=W.morphNormals,tt.morphColors=W.morphColors,tt.morphTargetsCount=W.morphTargetsCount,tt.numClippingPlanes=W.numClippingPlanes,tt.numIntersection=W.numClipIntersection,tt.vertexAlphas=W.vertexAlphas,tt.vertexTangents=W.vertexTangents,tt.toneMapping=W.toneMapping}function kc(R,W,tt,Q,j){W.isScene!==!0&&(W=Ee),U.resetTextureUnits();const Mt=W.fog,At=Q.isMeshStandardMaterial?W.environment:null,Pt=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:wr,Ot=(Q.isMeshStandardMaterial?et:T).get(Q.envMap||At),te=Q.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ee=!!tt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),jt=!!tt.morphAttributes.position,ge=!!tt.morphAttributes.normal,ve=!!tt.morphAttributes.color;let He=Ha;Q.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(He=D.toneMapping);const be=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ne=be!==void 0?be.length:0,Kt=Wt.get(Q),rn=g.state.lights;if(mt===!0&&(St===!0||R!==b)){const Xe=R===b&&Q.id===C;Et.setState(Q,R,Xe)}let xe=!1;Q.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==rn.state.version||Kt.outputColorSpace!==Pt||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Ot||Q.fog===!0&&Kt.fog!==Mt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Et.numPlanes||Kt.numIntersection!==Et.numIntersection)||Kt.vertexAlphas!==te||Kt.vertexTangents!==ee||Kt.morphTargets!==jt||Kt.morphNormals!==ge||Kt.morphColors!==ve||Kt.toneMapping!==He||Kt.morphTargetsCount!==ne)&&(xe=!0):(xe=!0,Kt.__version=Q.version);let Fn=Kt.currentProgram;xe===!0&&(Fn=sn(Q,W,j));let di=!1,Ln=!1,hn=!1;const Le=Fn.getUniforms(),Nn=Kt.uniforms;if(Xt.useProgram(Fn.program)&&(di=!0,Ln=!0,hn=!0),Q.id!==C&&(C=Q.id,Ln=!0),di||b!==R){Xt.buffers.depth.getReversed()?(bt.copy(R.projectionMatrix),cy(bt),uy(bt),Le.setValue(z,"projectionMatrix",bt)):Le.setValue(z,"projectionMatrix",R.projectionMatrix),Le.setValue(z,"viewMatrix",R.matrixWorldInverse);const xn=Le.map.cameraPosition;xn!==void 0&&xn.setValue(z,Qt.setFromMatrixPosition(R.matrixWorld)),he.logarithmicDepthBuffer&&Le.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Le.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Ln=!0,hn=!0)}if(j.isSkinnedMesh){Le.setOptional(z,j,"bindMatrix"),Le.setOptional(z,j,"bindMatrixInverse");const Xe=j.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),Le.setValue(z,"boneTexture",Xe.boneTexture,U))}j.isBatchedMesh&&(Le.setOptional(z,j,"batchingTexture"),Le.setValue(z,"batchingTexture",j._matricesTexture,U),Le.setOptional(z,j,"batchingIdTexture"),Le.setValue(z,"batchingIdTexture",j._indirectTexture,U),Le.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Le.setValue(z,"batchingColorTexture",j._colorsTexture,U));const bn=tt.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Vt.update(j,tt,Fn),(Ln||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Le.setValue(z,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Nn.envMap.value=Ot,Nn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Nn.envMapIntensity.value=W.environmentIntensity),Ln&&(Le.setValue(z,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&Xc(Nn,hn),Mt&&Q.fog===!0&&Dt.refreshFogUniforms(Nn,Mt),Dt.refreshMaterialUniforms(Nn,Q,Z,rt,g.state.transmissionRenderTarget[R.id]),Lc.upload(z,Pi(Kt),Nn,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Lc.upload(z,Pi(Kt),Nn,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Le.setValue(z,"center",j.center),Le.setValue(z,"modelViewMatrix",j.modelViewMatrix),Le.setValue(z,"normalMatrix",j.normalMatrix),Le.setValue(z,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Xe=Q.uniformsGroups;for(let xn=0,As=Xe.length;xn<As;xn++){const Hn=Xe[xn];X.update(Hn,Fn),X.bind(Hn,Fn)}}return Fn}function Xc(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Ko(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,W,tt){Wt.get(R.texture).__webglTexture=W,Wt.get(R.depthTexture).__webglTexture=tt;const Q=Wt.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=tt===void 0,Q.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const tt=Wt.get(R);tt.__webglFramebuffer=W,tt.__useDefaultFramebuffer=W===void 0};const ka=z.createFramebuffer();this.setRenderTarget=function(R,W=0,tt=0){Y=R,F=W,B=tt;let Q=!0,j=null,Mt=!1,At=!1;if(R){const Ot=Wt.get(R);if(Ot.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(Ot.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Ot.__hasExternalTextures)U.rebindTextures(R,Wt.get(R.texture).__webglTexture,Wt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const jt=R.depthTexture;if(Ot.__boundDepthTexture!==jt){if(jt!==null&&Wt.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(At=!0);const ee=Wt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?j=ee[W][tt]:j=ee[W],Mt=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?j=Wt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?j=ee[tt]:j=ee,I.copy(R.viewport),st.copy(R.scissor),nt=R.scissorTest}else I.copy(at).multiplyScalar(Z).floor(),st.copy(Tt).multiplyScalar(Z).floor(),nt=Rt;if(tt!==0&&(j=ka),Xt.bindFramebuffer(z.FRAMEBUFFER,j)&&Q&&Xt.drawBuffers(R,j),Xt.viewport(I),Xt.scissor(st),Xt.setScissorTest(nt),Mt){const Ot=Wt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,tt)}else if(At){const Ot=Wt.get(R.texture),te=W;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.__webglTexture,tt,te)}else if(R!==null&&tt!==0){const Ot=Wt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ot.__webglTexture,tt)}C=-1},this.readRenderTargetPixels=function(R,W,tt,Q,j,Mt,At){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){Xt.bindFramebuffer(z.FRAMEBUFFER,Pt);try{const Ot=R.texture,te=Ot.format,ee=Ot.type;if(!he.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Q&&tt>=0&&tt<=R.height-j&&z.readPixels(W,tt,Q,j,Zt.convert(te),Zt.convert(ee),Mt)}finally{const Ot=Y!==null?Wt.get(Y).__webglFramebuffer:null;Xt.bindFramebuffer(z.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(R,W,tt,Q,j,Mt,At){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){const Ot=R.texture,te=Ot.format,ee=Ot.type;if(!he.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-Q&&tt>=0&&tt<=R.height-j){Xt.bindFramebuffer(z.FRAMEBUFFER,Pt);const jt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,jt),z.bufferData(z.PIXEL_PACK_BUFFER,Mt.byteLength,z.STREAM_READ),z.readPixels(W,tt,Q,j,Zt.convert(te),Zt.convert(ee),0);const ge=Y!==null?Wt.get(Y).__webglFramebuffer:null;Xt.bindFramebuffer(z.FRAMEBUFFER,ge);const ve=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ly(z,ve,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,jt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Mt),z.deleteBuffer(jt),z.deleteSync(ve),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,tt=0){R.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const Q=Math.pow(2,-tt),j=Math.floor(R.image.width*Q),Mt=Math.floor(R.image.height*Q),At=W!==null?W.x:0,Pt=W!==null?W.y:0;U.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,tt,0,0,At,Pt,j,Mt),Xt.unbindTexture()};const Ir=z.createFramebuffer(),zi=z.createFramebuffer();this.copyTextureToTexture=function(R,W,tt=null,Q=null,j=0,Mt=null){R.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],W=arguments[2],Mt=arguments[3]||0,tt=null),Mt===null&&(j!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=j,j=0):Mt=0);let At,Pt,Ot,te,ee,jt,ge,ve,He;const be=R.isCompressedTexture?R.mipmaps[Mt]:R.image;if(tt!==null)At=tt.max.x-tt.min.x,Pt=tt.max.y-tt.min.y,Ot=tt.isBox3?tt.max.z-tt.min.z:1,te=tt.min.x,ee=tt.min.y,jt=tt.isBox3?tt.min.z:0;else{const bn=Math.pow(2,-j);At=Math.floor(be.width*bn),Pt=Math.floor(be.height*bn),R.isDataArrayTexture?Ot=be.depth:R.isData3DTexture?Ot=Math.floor(be.depth*bn):Ot=1,te=0,ee=0,jt=0}Q!==null?(ge=Q.x,ve=Q.y,He=Q.z):(ge=0,ve=0,He=0);const ne=Zt.convert(W.format),Kt=Zt.convert(W.type);let rn;W.isData3DTexture?(U.setTexture3D(W,0),rn=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),rn=z.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),rn=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const xe=z.getParameter(z.UNPACK_ROW_LENGTH),Fn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),di=z.getParameter(z.UNPACK_SKIP_PIXELS),Ln=z.getParameter(z.UNPACK_SKIP_ROWS),hn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,be.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,be.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,te),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,jt);const Le=R.isDataArrayTexture||R.isData3DTexture,Nn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const bn=Wt.get(R),Xe=Wt.get(W),xn=Wt.get(bn.__renderTarget),As=Wt.get(Xe.__renderTarget);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,xn.__webglFramebuffer),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let Hn=0;Hn<Ot;Hn++)Le&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wt.get(R).__webglTexture,j,jt+Hn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wt.get(W).__webglTexture,Mt,He+Hn)),z.blitFramebuffer(te,ee,At,Pt,ge,ve,At,Pt,z.DEPTH_BUFFER_BIT,z.NEAREST);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Wt.has(R)){const bn=Wt.get(R),Xe=Wt.get(W);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,Ir),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,zi);for(let xn=0;xn<Ot;xn++)Le?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,bn.__webglTexture,j,jt+xn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,bn.__webglTexture,j),Nn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.__webglTexture,Mt,He+xn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xe.__webglTexture,Mt),j!==0?z.blitFramebuffer(te,ee,At,Pt,ge,ve,At,Pt,z.COLOR_BUFFER_BIT,z.NEAREST):Nn?z.copyTexSubImage3D(rn,Mt,ge,ve,He+xn,te,ee,At,Pt):z.copyTexSubImage2D(rn,Mt,ge,ve,te,ee,At,Pt);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Nn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(rn,Mt,ge,ve,He,At,Pt,Ot,ne,Kt,be.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(rn,Mt,ge,ve,He,At,Pt,Ot,ne,be.data):z.texSubImage3D(rn,Mt,ge,ve,He,At,Pt,Ot,ne,Kt,be):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Mt,ge,ve,At,Pt,ne,Kt,be.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Mt,ge,ve,be.width,be.height,ne,be.data):z.texSubImage2D(z.TEXTURE_2D,Mt,ge,ve,At,Pt,ne,Kt,be);z.pixelStorei(z.UNPACK_ROW_LENGTH,xe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Fn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,di),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ln),z.pixelStorei(z.UNPACK_SKIP_IMAGES,hn),Mt===0&&W.generateMipmaps&&z.generateMipmap(rn),Xt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,tt=null,Q=null,j=0){return R.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],W=arguments[3],j=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,tt,Q,j)},this.initRenderTarget=function(R){Wt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Xt.unbindTexture()},this.resetState=function(){F=0,B=0,Y=null,Xt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const t0={type:"change"},wd={type:"start"},X0={type:"end"},Ac=new Hc,e0=new Ba,wA=Math.cos(70*b0.DEG2RAD),cn=new J,kn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eh=1e-6;class DA extends Yy{constructor(t,i=null){super(t,i),this.state=ze.NONE,this.enabled=!0,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:vr.ROTATE,TWO:vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Ms,this._lastTargetPosition=new J,this._quat=new Ms().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cg,this._sphericalDelta=new Cg,this._scale=1,this._panOffset=new J,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new J,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=LA.bind(this),this._onPointerDown=UA.bind(this),this._onPointerUp=NA.bind(this),this._onContextMenu=HA.bind(this),this._onMouseWheel=zA.bind(this),this._onKeyDown=BA.bind(this),this._onTouchStart=IA.bind(this),this._onTouchMove=FA.bind(this),this._onMouseDown=OA.bind(this),this._onMouseMove=PA.bind(this),this._interceptControlDown=GA.bind(this),this._interceptControlUp=VA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(t0),this.update(),this.state=ze.NONE}update(t=null){const i=this.object.position;cn.copy(i).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),l<-Math.PI?l+=kn:l>Math.PI&&(l-=kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=cn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<wA?this.object.lookAt(this.target):(e0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(e0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Eh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eh||this._lastTargetPosition.distanceToSquared(this.target)>Eh?(this.dispatchEvent(t0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?kn/60*this.autoRotateSpeed*t:kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){cn.setFromMatrixColumn(i,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,i){this.screenSpacePanning===!0?cn.setFromMatrixColumn(i,1):(cn.setFromMatrixColumn(i,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;cn.copy(l).sub(this.target);let u=cn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new fe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function UA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function LA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function NA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(X0),this.state=ze.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function OA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ze.DOLLY;break;case Sr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ze.ROTATE}break;case Sr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(wd)}function PA(r){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function zA(r){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(r.preventDefault(),this.dispatchEvent(wd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(X0))}function BA(r){this.enabled!==!1&&this._handleKeyDown(r)}function IA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case vr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ze.TOUCH_ROTATE;break;case vr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case vr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ze.TOUCH_DOLLY_PAN;break;case vr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(wd)}function FA(r){switch(this._trackPointer(r),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ze.NONE}}function HA(r){this.enabled!==!1&&r.preventDefault()}function GA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function VA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function md([r,t,i]){return new J(r,-t,-i)}function kA(r,t,i){let l=r.geometry.getAttribute("position"),u=r.userData.session===i&&r.userData.count||0;if(!l||t.length>l.count){const h=2**Math.ceil(Math.log2(Math.max(256,t.length)));r.geometry.dispose(),r.geometry=new Tn,l=new En(new Float32Array(3*h),3),l.setUsage(XS),r.geometry.setAttribute("position",l),u=0}for(let h=u;h<t.length;++h){const[d,m,p]=t[h];l.setXYZ(h,d,-m,-p)}t.length>u&&(l.addUpdateRange(3*u,3*(t.length-u)),l.needsUpdate=!0),r.geometry.setDrawRange(0,t.length),r.frustumCulled=!1,r.userData={session:i,count:t.length}}function n0(r,t,i){const s=t.map(h=>h&&md(h)),l=[];for(let h=1;h<s.length;h+=1)s[h-1]&&s[h]&&l.push(s[h-1],s[h]);const u=new Tn().setFromPoints(l);r.geometry.dispose(),r.geometry=u,r.material.color.set(i)}function W0({state:r,fit:t}){const i=en.useRef(null),s=en.useRef(null);return en.useEffect(()=>{const l=i.current,u=new Py;u.background=new Me(462871);const h=new hi(55,1,.01,500);h.position.set(7,6,8),h.lookAt(0,0,0);const d=new CA({antialias:!0});d.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.appendChild(d.domElement);const m=new DA(h,d.domElement);m.enableDamping=!0,u.add(new Xy(30,30,2377563,1189425)),u.add(new Wy(1.2));const p=new Ic(new Tn,new Wo({color:3270305})),_=new Ic(new Tn,new Wo({color:16757322})),v=new Fy(new Tn,new B0({color:6076927,size:.025,sizeAttenuation:!0})),x=new Fo,M=new Ni(new Rd(.14,.38,4),new bd({color:16777215,wireframe:!0}));M.rotation.x=Math.PI/2,x.add(M),u.add(p,_,v,x),s.current={estimated:p,truth:_,cloud:v,body:x,camera:h,controls:m};const E=()=>{const P=Math.max(l.clientWidth,1),O=Math.max(l.clientHeight,1);d.setSize(P,O,!0),h.aspect=P/O,h.updateProjectionMatrix()},w=new ResizeObserver(E);w.observe(l),E();let y;const g=()=>{m.update(),d.render(u,h),y=requestAnimationFrame(g)};return g(),()=>{cancelAnimationFrame(y),w.disconnect(),d.dispose(),l.removeChild(d.domElement)}},[]),en.useEffect(()=>{const l=s.current;l&&(n0(l.estimated,r.trajectory||[],3270305),n0(l.truth,r.ground_truth||[],16757322),kA(l.cloud,r.map_points||[],r.session??r.map_points),l.body.visible=!!r.position,r.position&&l.body.position.copy(md(r.position)))},[r.trajectory,r.ground_truth,r.map_points,r.position,r.poseCount,r.pointCount,r.session]),en.useEffect(()=>{if(!t||!s.current||!r.map_points.length)return;const{camera:l,controls:u}=s.current,h=new Lr;for(const p of r.map_points)h.expandByPoint(md(p));const d=h.getBoundingSphere(new Nr);u.target.copy(d.center);const m=d.radius*1.2/Math.sin(b0.degToRad(l.fov/2));l.position.copy(d.center).addScaledVector(new J(1,.8,1).normalize(),m),l.far=Math.max(500,m*3),l.updateProjectionMatrix(),u.update()},[t]),ct.jsx("div",{className:"scene",ref:i})}var Th={exports:{}},Io={},bh={exports:{}},Ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function XA(){return i0||(i0=1,(function(r){function t(V,rt){var Z=V.length;V.push(rt);t:for(;0<Z;){var yt=Z-1>>>1,L=V[yt];if(0<l(L,rt))V[yt]=rt,V[Z]=L,Z=yt;else break t}}function i(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var rt=V[0],Z=V.pop();if(Z!==rt){V[0]=Z;t:for(var yt=0,L=V.length,at=L>>>1;yt<at;){var Tt=2*(yt+1)-1,Rt=V[Tt],q=Tt+1,mt=V[q];if(0>l(Rt,Z))q<L&&0>l(mt,Rt)?(V[yt]=mt,V[q]=Z,yt=q):(V[yt]=Rt,V[Tt]=Z,yt=Tt);else if(q<L&&0>l(mt,Z))V[yt]=mt,V[q]=Z,yt=q;else break t}}return rt}function l(V,rt){var Z=V.sortIndex-rt.sortIndex;return Z!==0?Z:V.id-rt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,x=3,M=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(V){for(var rt=i(p);rt!==null;){if(rt.callback===null)s(p);else if(rt.startTime<=V)s(p),rt.sortIndex=rt.expirationTime,t(m,rt);else break;rt=i(p)}}function D(V){if(w=!1,O(V),!E)if(i(m)!==null)E=!0,ut();else{var rt=i(p);rt!==null&&ht(D,rt.startTime-V)}}var H=!1,F=-1,B=5,Y=-1;function C(){return!(r.unstable_now()-Y<B)}function b(){if(H){var V=r.unstable_now();Y=V;var rt=!0;try{t:{E=!1,w&&(w=!1,g(F),F=-1),M=!0;var Z=x;try{e:{for(O(V),v=i(m);v!==null&&!(v.expirationTime>V&&C());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var L=yt(v.expirationTime<=V);if(V=r.unstable_now(),typeof L=="function"){v.callback=L,O(V),rt=!0;break e}v===i(m)&&s(m),O(V)}else s(m);v=i(m)}if(v!==null)rt=!0;else{var at=i(p);at!==null&&ht(D,at.startTime-V),rt=!1}}break t}finally{v=null,x=Z,M=!1}rt=void 0}}finally{rt?I():H=!1}}}var I;if(typeof P=="function")I=function(){P(b)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,nt=st.port2;st.port1.onmessage=b,I=function(){nt.postMessage(null)}}else I=function(){y(b,0)};function ut(){H||(H=!0,I())}function ht(V,rt){F=y(function(){V(r.unstable_now())},rt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,ut())},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return i(m)},r.unstable_next=function(V){switch(x){case 1:case 2:case 3:var rt=3;break;default:rt=x}var Z=x;x=rt;try{return V()}finally{x=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,rt){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Z=x;x=V;try{return rt()}finally{x=Z}},r.unstable_scheduleCallback=function(V,rt,Z){var yt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?yt+Z:yt):Z=yt,V){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Z+L,V={id:_++,callback:rt,priorityLevel:V,startTime:Z,expirationTime:L,sortIndex:-1},Z>yt?(V.sortIndex=Z,t(p,V),i(m)===null&&V===i(p)&&(w?(g(F),F=-1):w=!0,ht(D,Z-yt))):(V.sortIndex=L,t(m,V),E||M||(E=!0,ut())),V},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(V){var rt=x;return function(){var Z=x;x=rt;try{return V.apply(this,arguments)}finally{x=Z}}}})(Ah)),Ah}var a0;function WA(){return a0||(a0=1,bh.exports=XA()),bh.exports}var Rh={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function YA(){if(s0)return wn;s0=1;var r=_d();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},wn.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var r0;function qA(){if(r0)return Rh.exports;r0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Rh.exports=YA(),Rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function jA(){if(o0)return Io;o0=1;var r=WA(),t=_d(),i=qA();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),M=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var B=Symbol.for("react.client.reference");function Y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===B?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case d:return"Portal";case _:return"Profiler";case p:return"StrictMode";case w:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case E:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case g:return n=e.displayName||null,n!==null?n:Y(e.type)||"Memo";case P:n=e._payload,e=e._init;try{return Y(e(n))}catch{}}return null}var C=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=Object.assign,I,st;function nt(e){if(I===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+I+e+st}var ut=!1;function ht(e,n){if(!e||ut)return"";ut=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var it=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){it=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var N=S.split(`
`),k=A.split(`
`);for(c=o=0;o<N.length&&!N[o].includes("DetermineComponentFrameRoot");)o++;for(;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;if(o===N.length||c===k.length)for(o=N.length-1,c=k.length-1;1<=o&&0<=c&&N[o]!==k[c];)c--;for(;1<=o&&0<=c;o--,c--)if(N[o]!==k[c]){if(o!==1||c!==1)do if(o--,c--,0>c||N[o]!==k[c]){var ft=`
`+N[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=c);break}}}finally{ut=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?nt(a):""}function V(e){switch(e.tag){case 26:case 27:case 5:return nt(e.type);case 16:return nt("Lazy");case 13:return nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return e=ht(e.type,!1),e;case 11:return e=ht(e.type.render,!1),e;case 1:return e=ht(e.type,!0),e;default:return""}}function rt(e){try{var n="";do n+=V(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Z(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function yt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function L(e){if(Z(e)!==e)throw Error(s(188))}function at(e){var n=e.alternate;if(!n){if(n=Z(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return L(c),e;if(f===o)return L(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,o=f;break}if(A===o){S=!0,o=c,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=c;break}if(A===o){S=!0,o=f,a=c;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function Tt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Tt(e),n!==null)return n;e=e.sibling}return null}var Rt=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mt={pending:!1,data:null,method:null,action:null},St=[],bt=-1;function Ct(e){return{current:e}}function Qt(e){0>bt||(e.current=St[bt],St[bt]=null,bt--)}function zt(e,n){bt++,St[bt]=e.current,e.current=n}var Ee=Ct(null),we=Ct(null),ae=Ct(null),z=Ct(null);function vn(e,n){switch(zt(ae,n),zt(we,e),zt(Ee,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?M_(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=M_(e),n=E_(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Qt(Ee),zt(Ee,n)}function re(){Qt(Ee),Qt(we),Qt(ae)}function he(e){e.memoizedState!==null&&zt(z,e);var n=Ee.current,a=E_(n,e.type);n!==a&&(zt(we,e),zt(Ee,a))}function Xt(e){we.current===e&&(Qt(Ee),Qt(we)),z.current===e&&(Qt(z),Ao._currentValue=mt)}var De=Object.prototype.hasOwnProperty,Wt=r.unstable_scheduleCallback,U=r.unstable_cancelCallback,T=r.unstable_shouldYield,et=r.unstable_requestPaint,dt=r.unstable_now,xt=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,Gt=r.unstable_UserBlockingPriority,Dt=r.unstable_NormalPriority,Bt=r.unstable_LowPriority,_e=r.unstable_IdlePriority,Et=r.log,It=r.unstable_setDisableYieldValue,qt=null,Vt=null;function Ft(e){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(qt,e,void 0,(e.current.flags&128)===128)}catch{}}function se(e){if(typeof Et=="function"&&It(e),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(qt,e)}catch{}}var Zt=Math.clz32?Math.clz32:Nt,Ue=Math.log,X=Math.LN2;function Nt(e){return e>>>=0,e===0?32:31-(Ue(e)/X|0)|0}var ot=128,gt=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ut(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,c=e.suspendedLanes,f=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var A=a&134217727;return A!==0?(a=A&~c,a!==0?o=wt(a):(f&=A,f!==0?o=wt(f):e||(S=A&~S,S!==0&&(o=wt(S))))):(A=a&~c,A!==0?o=wt(A):f!==0?o=wt(f):e||(S=a&~S,S!==0&&(o=wt(S)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:o}function $t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ge(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nn(){var e=ot;return ot<<=1,(ot&4194176)===0&&(ot=128),e}function Te(){var e=gt;return gt<<=1,(gt&62914560)===0&&(gt=4194304),e}function Dn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jo(e,n,a,o,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,N=e.expirationTimes,k=e.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-Zt(a),vt=1<<ft;A[ft]=0,N[ft]=-1;var it=k[ft];if(it!==null)for(k[ft]=null,ft=0;ft<it.length;ft++){var lt=it[ft];lt!==null&&(lt.lane&=-536870913)}a&=~vt}o!==0&&zr(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function zr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function Ti(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Zt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Ts(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Br(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:G_(e.type))}function Zo(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Yn=Math.random().toString(36).slice(2),an="__reactFiber$"+Yn,sn="__reactProps$"+Yn,Pi="__reactContainer$"+Yn,bs="__reactEvents$"+Yn,kc="__reactListeners$"+Yn,Xc="__reactHandles$"+Yn,Ko="__reactResources$"+Yn,ka="__reactMarker$"+Yn;function Ir(e){delete e[an],delete e[sn],delete e[bs],delete e[kc],delete e[Xc]}function zi(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=A_(e);e!==null;){if(a=e[an])return a;e=A_(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[an]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function W(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function tt(e){var n=e[Ko];return n||(n=e[Ko]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[ka]=!0}var j=new Set,Mt={};function At(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(Mt[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},jt={};function ge(e){return De.call(jt,e)?!0:De.call(ee,e)?!1:te.test(e)?jt[e]=!0:(ee[e]=!0,!1)}function ve(e,n,a){if(ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function He(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function be(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rn(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xe(e){e._valueTracker||(e._valueTracker=rn(e))}function Fn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function hn(e){return e.replace(Ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Le(e,n,a,o,c,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?bn(e,S,ne(n)):a!=null?bn(e,S,ne(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ne(A):e.removeAttribute("name")}function Nn(e,n,a,o,c,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function bn(e,n,a){n==="number"&&di(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xe(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function xn(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function As(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Rt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var j0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||j0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ud(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Dd(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Dd(e,f,n[f])}function Wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return K0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Yc=null;function qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,Cs=null;function Ld(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Le(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[sn]||null;if(!c)throw Error(s(90));Le(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Fn(o)}break t;case"textarea":xn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Xe(e,!!a.multiple,n,!1)}}}var jc=!1;function Nd(e,n,a){if(jc)return e(n,a);jc=!0;try{var o=e(n);return o}finally{if(jc=!1,(Rs!==null||Cs!==null)&&(Ol(),Rs&&(n=Rs,e=Cs,Cs=Rs=null,Ld(n),e)))for(n=0;n<e.length;n++)Ld(e[n])}}function Fr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zc=!1;if(Ot)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Zc=!1}var ua=null,Kc=null,Jo=null;function Od(){if(Jo)return Jo;var e,n=Kc,a=n.length,o,c="value"in ua?ua.value:ua.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return Jo=c.slice(e,1<o?1-o:void 0)}function $o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Pd(){return!1}function Gn(e){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Pd,this.isPropagationStopped=Pd,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Gn(Xa),Gr=b({},Xa,{view:0,detail:0}),Q0=Gn(Gr),Qc,Jc,Vr,nl=b({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Qc=e.screenX-Vr.screenX,Jc=e.screenY-Vr.screenY):Jc=Qc=0,Vr=e),Qc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),zd=Gn(nl),J0=b({},nl,{dataTransfer:0}),$0=Gn(J0),tv=b({},Gr,{relatedTarget:0}),$c=Gn(tv),ev=b({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=Gn(ev),iv=b({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),av=Gn(iv),sv=b({},Xa,{data:0}),Bd=Gn(sv),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=lv[e])?!!n[e]:!1}function tu(){return cv}var uv=b({},Gr,{key:function(e){if(e.key){var n=rv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ov[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fv=Gn(uv),hv=b({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=Gn(hv),dv=b({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),pv=Gn(dv),mv=b({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),_v=Gn(mv),gv=b({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=Gn(gv),xv=b({},Xa,{newState:0,oldState:0}),Sv=Gn(xv),yv=[9,13,27,32],eu=Ot&&"CompositionEvent"in window,kr=null;Ot&&"documentMode"in document&&(kr=document.documentMode);var Mv=Ot&&"TextEvent"in window&&!kr,Fd=Ot&&(!eu||kr&&8<kr&&11>=kr),Hd=" ",Gd=!1;function Vd(e,n){switch(e){case"keyup":return yv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ws=!1;function Ev(e,n){switch(e){case"compositionend":return kd(n);case"keypress":return n.which!==32?null:(Gd=!0,Hd);case"textInput":return e=n.data,e===Hd&&Gd?null:e;default:return null}}function Tv(e,n){if(ws)return e==="compositionend"||!eu&&Vd(e,n)?(e=Od(),Jo=Kc=ua=null,ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fd&&n.locale!=="ko"?null:n.data;default:return null}}var bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bv[e.type]:n==="textarea"}function Wd(e,n,a,o){Rs?Cs?Cs.push(o):Cs=[o]:Rs=o,n=Fl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Xr=null,Wr=null;function Av(e){g_(e,0)}function il(e){var n=W(e);if(Fn(n))return e}function Yd(e,n){if(e==="change")return n}var qd=!1;if(Ot){var nu;if(Ot){var iu="oninput"in document;if(!iu){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),iu=typeof jd.oninput=="function"}nu=iu}else nu=!1;qd=nu&&(!document.documentMode||9<document.documentMode)}function Zd(){Xr&&(Xr.detachEvent("onpropertychange",Kd),Wr=Xr=null)}function Kd(e){if(e.propertyName==="value"&&il(Wr)){var n=[];Wd(n,Wr,e,qc(e)),Nd(Av,n)}}function Rv(e,n,a){e==="focusin"?(Zd(),Xr=n,Wr=a,Xr.attachEvent("onpropertychange",Kd)):e==="focusout"&&Zd()}function Cv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(Wr)}function wv(e,n){if(e==="click")return il(n)}function Dv(e,n){if(e==="input"||e==="change")return il(n)}function Uv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Uv;function Yr(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!De.call(n,c)||!qn(e[c],n[c]))return!1}return!0}function Qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jd(e,n){var a=Qd(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Qd(a)}}function $d(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$d(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function tp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=di(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=di(e.document)}return n}function au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Lv(e,n){var a=tp(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&$d(n.ownerDocument.documentElement,n)){if(o!==null&&au(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(o.start,c);o=o.end===void 0?f:Math.min(o.end,c),!a.extend&&f>o&&(c=o,o=f,f=c),c=Jd(n,f);var S=Jd(n,o);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),f>o?(a.addRange(e),a.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Nv=Ot&&"documentMode"in document&&11>=document.documentMode,Ds=null,su=null,qr=null,ru=!1;function ep(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ru||Ds==null||Ds!==di(o)||(o=Ds,"selectionStart"in o&&au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qr&&Yr(qr,o)||(qr=o,o=Fl(su,"onSelect"),0<o.length&&(n=new el("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ds)))}function Wa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Us={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},ou={},np={};Ot&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Ya(e){if(ou[e])return ou[e];if(!Us[e])return e;var n=Us[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in np)return ou[e]=n[a];return e}var ip=Ya("animationend"),ap=Ya("animationiteration"),sp=Ya("animationstart"),Ov=Ya("transitionrun"),Pv=Ya("transitionstart"),zv=Ya("transitioncancel"),rp=Ya("transitionend"),op=new Map,lp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function pi(e,n){op.set(e,n),At(n,[e])}var ti=[],Ls=0,lu=0;function al(){for(var e=Ls,n=lu=Ls=0;n<e;){var a=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&cp(a,c,f)}}function sl(e,n,a,o){ti[Ls++]=e,ti[Ls++]=n,ti[Ls++]=a,ti[Ls++]=o,lu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function cu(e,n,a,o){return sl(e,n,a,o),rl(e)}function fa(e,n){return sl(e,null,null,n),rl(e)}function cp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-Zt(a),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=a|536870912)}function rl(e){if(50<xo)throw xo=0,_f=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ns={},up=new WeakMap;function ei(e,n){if(typeof e=="object"&&e!==null){var a=up.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rt(n)},up.set(e,n),n)}return{value:e,source:n,stack:rt(n)}}var Os=[],Ps=0,ol=null,ll=0,ni=[],ii=0,qa=null,Bi=1,Ii="";function ja(e,n){Os[Ps++]=ll,Os[Ps++]=ol,ol=e,ll=n}function fp(e,n,a){ni[ii++]=Bi,ni[ii++]=Ii,ni[ii++]=qa,qa=e;var o=Bi;e=Ii;var c=32-Zt(o)-1;o&=~(1<<c),a+=1;var f=32-Zt(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Bi=1<<32-Zt(n)+c|a<<c|o,Ii=f+e}else Bi=1<<f|a<<c|o,Ii=e}function uu(e){e.return!==null&&(ja(e,1),fp(e,1,0))}function fu(e){for(;e===ol;)ol=Os[--Ps],Os[Ps]=null,ll=Os[--Ps],Os[Ps]=null;for(;e===qa;)qa=ni[--ii],ni[ii]=null,Ii=ni[--ii],ni[ii]=null,Bi=ni[--ii],ni[ii]=null}var On=null,Sn=null,Ae=!1,mi=null,bi=!1,hu=Error(s(519));function Za(e){var n=Error(s(418,""));throw Kr(ei(n,e)),hu}function hp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[an]=e,n[sn]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)Se(yo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),xe(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),As(n,o.value,o.defaultValue,o.children),xe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||y_(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=Hl),n=!0):n=!1,n||Za(e)}function dp(e){for(On=e.return;On;)switch(On.tag){case 3:case 27:bi=!0;return;case 5:case 13:bi=!1;return;default:On=On.return}}function jr(e){if(e!==On)return!1;if(!Ae)return dp(e),Ae=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Nf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&Sn&&Za(e),dp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Sn=gi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Sn=null}}else Sn=On?gi(e.stateNode.nextSibling):null;return!0}function Zr(){Sn=On=null,Ae=!1}function Kr(e){mi===null?mi=[e]:mi.push(e)}var Qr=Error(s(460)),pp=Error(s(474)),du={then:function(){}};function mp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cl(){}function _p(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(cl,cl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Qr?Error(s(483)):e;default:if(typeof n.status=="string")n.then(cl,cl);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Qr?Error(s(483)):e}throw Jr=n,Qr}}var Jr=null;function gp(){if(Jr===null)throw Error(s(459));var e=Jr;return Jr=null,e}var zs=null,$r=0;function ul(e){var n=$r;return $r+=1,zs===null&&(zs=[]),_p(zs,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function fl(e,n){throw n.$$typeof===u?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function vp(e){var n=e._init;return n(e._payload)}function xp(e){function n(K,G){if(e){var $=K.deletions;$===null?(K.deletions=[G],K.flags|=16):$.push(G)}}function a(K,G){if(!e)return null;for(;G!==null;)n(K,G),G=G.sibling;return null}function o(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function c(K,G){return K=Ea(K,G),K.index=0,K.sibling=null,K}function f(K,G,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<G?(K.flags|=33554434,G):$):(K.flags|=33554434,G)):(K.flags|=1048576,G)}function S(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function A(K,G,$,_t){return G===null||G.tag!==6?(G=lf($,K.mode,_t),G.return=K,G):(G=c(G,$),G.return=K,G)}function N(K,G,$,_t){var Ht=$.type;return Ht===m?ft(K,G,$.props.children,_t,$.key):G!==null&&(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===P&&vp(Ht)===G.type)?(G=c(G,$.props),to(G,$),G.return=K,G):(G=wl($.type,$.key,$.props,null,K.mode,_t),to(G,$),G.return=K,G)}function k(K,G,$,_t){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=cf($,K.mode,_t),G.return=K,G):(G=c(G,$.children||[]),G.return=K,G)}function ft(K,G,$,_t,Ht){return G===null||G.tag!==7?(G=ss($,K.mode,_t,Ht),G.return=K,G):(G=c(G,$),G.return=K,G)}function vt(K,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=lf(""+G,K.mode,$),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case h:return $=wl(G.type,G.key,G.props,null,K.mode,$),to($,G),$.return=K,$;case d:return G=cf(G,K.mode,$),G.return=K,G;case P:var _t=G._init;return G=_t(G._payload),vt(K,G,$)}if(Rt(G)||F(G))return G=ss(G,K.mode,$,null),G.return=K,G;if(typeof G.then=="function")return vt(K,ul(G),$);if(G.$$typeof===M)return vt(K,Al(K,G),$);fl(K,G)}return null}function it(K,G,$,_t){var Ht=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:A(K,G,""+$,_t);if(typeof $=="object"&&$!==null){switch($.$$typeof){case h:return $.key===Ht?N(K,G,$,_t):null;case d:return $.key===Ht?k(K,G,$,_t):null;case P:return Ht=$._init,$=Ht($._payload),it(K,G,$,_t)}if(Rt($)||F($))return Ht!==null?null:ft(K,G,$,_t,null);if(typeof $.then=="function")return it(K,G,ul($),_t);if($.$$typeof===M)return it(K,G,Al(K,$),_t);fl(K,$)}return null}function lt(K,G,$,_t,Ht){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get($)||null,A(G,K,""+_t,Ht);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case h:return K=K.get(_t.key===null?$:_t.key)||null,N(G,K,_t,Ht);case d:return K=K.get(_t.key===null?$:_t.key)||null,k(G,K,_t,Ht);case P:var de=_t._init;return _t=de(_t._payload),lt(K,G,$,_t,Ht)}if(Rt(_t)||F(_t))return K=K.get($)||null,ft(G,K,_t,Ht,null);if(typeof _t.then=="function")return lt(K,G,$,ul(_t),Ht);if(_t.$$typeof===M)return lt(K,G,$,Al(G,_t),Ht);fl(G,_t)}return null}function kt(K,G,$,_t){for(var Ht=null,de=null,Yt=G,Jt=G=0,mn=null;Yt!==null&&Jt<$.length;Jt++){Yt.index>Jt?(mn=Yt,Yt=null):mn=Yt.sibling;var Re=it(K,Yt,$[Jt],_t);if(Re===null){Yt===null&&(Yt=mn);break}e&&Yt&&Re.alternate===null&&n(K,Yt),G=f(Re,G,Jt),de===null?Ht=Re:de.sibling=Re,de=Re,Yt=mn}if(Jt===$.length)return a(K,Yt),Ae&&ja(K,Jt),Ht;if(Yt===null){for(;Jt<$.length;Jt++)Yt=vt(K,$[Jt],_t),Yt!==null&&(G=f(Yt,G,Jt),de===null?Ht=Yt:de.sibling=Yt,de=Yt);return Ae&&ja(K,Jt),Ht}for(Yt=o(Yt);Jt<$.length;Jt++)mn=lt(Yt,K,Jt,$[Jt],_t),mn!==null&&(e&&mn.alternate!==null&&Yt.delete(mn.key===null?Jt:mn.key),G=f(mn,G,Jt),de===null?Ht=mn:de.sibling=mn,de=mn);return e&&Yt.forEach(function(Da){return n(K,Da)}),Ae&&ja(K,Jt),Ht}function ie(K,G,$,_t){if($==null)throw Error(s(151));for(var Ht=null,de=null,Yt=G,Jt=G=0,mn=null,Re=$.next();Yt!==null&&!Re.done;Jt++,Re=$.next()){Yt.index>Jt?(mn=Yt,Yt=null):mn=Yt.sibling;var Da=it(K,Yt,Re.value,_t);if(Da===null){Yt===null&&(Yt=mn);break}e&&Yt&&Da.alternate===null&&n(K,Yt),G=f(Da,G,Jt),de===null?Ht=Da:de.sibling=Da,de=Da,Yt=mn}if(Re.done)return a(K,Yt),Ae&&ja(K,Jt),Ht;if(Yt===null){for(;!Re.done;Jt++,Re=$.next())Re=vt(K,Re.value,_t),Re!==null&&(G=f(Re,G,Jt),de===null?Ht=Re:de.sibling=Re,de=Re);return Ae&&ja(K,Jt),Ht}for(Yt=o(Yt);!Re.done;Jt++,Re=$.next())Re=lt(Yt,K,Jt,Re.value,_t),Re!==null&&(e&&Re.alternate!==null&&Yt.delete(Re.key===null?Jt:Re.key),G=f(Re,G,Jt),de===null?Ht=Re:de.sibling=Re,de=Re);return e&&Yt.forEach(function(Kx){return n(K,Kx)}),Ae&&ja(K,Jt),Ht}function qe(K,G,$,_t){if(typeof $=="object"&&$!==null&&$.type===m&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case h:t:{for(var Ht=$.key;G!==null;){if(G.key===Ht){if(Ht=$.type,Ht===m){if(G.tag===7){a(K,G.sibling),_t=c(G,$.props.children),_t.return=K,K=_t;break t}}else if(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===P&&vp(Ht)===G.type){a(K,G.sibling),_t=c(G,$.props),to(_t,$),_t.return=K,K=_t;break t}a(K,G);break}else n(K,G);G=G.sibling}$.type===m?(_t=ss($.props.children,K.mode,_t,$.key),_t.return=K,K=_t):(_t=wl($.type,$.key,$.props,null,K.mode,_t),to(_t,$),_t.return=K,K=_t)}return S(K);case d:t:{for(Ht=$.key;G!==null;){if(G.key===Ht)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(K,G.sibling),_t=c(G,$.children||[]),_t.return=K,K=_t;break t}else{a(K,G);break}else n(K,G);G=G.sibling}_t=cf($,K.mode,_t),_t.return=K,K=_t}return S(K);case P:return Ht=$._init,$=Ht($._payload),qe(K,G,$,_t)}if(Rt($))return kt(K,G,$,_t);if(F($)){if(Ht=F($),typeof Ht!="function")throw Error(s(150));return $=Ht.call($),ie(K,G,$,_t)}if(typeof $.then=="function")return qe(K,G,ul($),_t);if($.$$typeof===M)return qe(K,G,Al(K,$),_t);fl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(K,G.sibling),_t=c(G,$),_t.return=K,K=_t):(a(K,G),_t=lf($,K.mode,_t),_t.return=K,K=_t),S(K)):a(K,G)}return function(K,G,$,_t){try{$r=0;var Ht=qe(K,G,$,_t);return zs=null,Ht}catch(Yt){if(Yt===Qr)throw Yt;var de=oi(29,Yt,null,K.mode);return de.lanes=_t,de.return=K,de}finally{}}}var Ka=xp(!0),Sp=xp(!1),Bs=Ct(null),hl=Ct(0);function yp(e,n){e=Zi,zt(hl,e),zt(Bs,n),Zi=e|n.baseLanes}function pu(){zt(hl,Zi),zt(Bs,Bs.current)}function mu(){Zi=hl.current,Qt(Bs),Qt(hl)}var ai=Ct(null),Ai=null;function ha(e){var n=e.alternate;zt(on,on.current&1),zt(ai,e),Ai===null&&(n===null||Bs.current!==null||n.memoizedState!==null)&&(Ai=e)}function Mp(e){if(e.tag===22){if(zt(on,on.current),zt(ai,e),Ai===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ai=e)}}else da()}function da(){zt(on,on.current),zt(ai,ai.current)}function Fi(e){Qt(ai),Ai===e&&(Ai=null),Qt(on)}var on=Ct(0);function dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Iv=r.unstable_scheduleCallback,Fv=r.unstable_NormalPriority,ln={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new Bv,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&Iv(Fv,function(){e.controller.abort()})}var no=null,gu=0,Is=0,Fs=null;function Hv(e,n){if(no===null){var a=no=[];gu=0,Is=Tf(),Fs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return gu++,n.then(Ep,Ep),n}function Ep(){if(--gu===0&&no!==null){Fs!==null&&(Fs.status="fulfilled");var e=no;no=null,Is=0,Fs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Gv(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Tp=C.S;C.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hv(e,n),Tp!==null&&Tp(e,n)};var Qa=Ct(null);function vu(){var e=Qa.current;return e!==null?e:Ie.pooledCache}function pl(e,n){n===null?zt(Qa,Qa.current):zt(Qa,n.pool)}function bp(){var e=vu();return e===null?null:{parent:ln._currentValue,pool:e}}var pa=0,ue=null,Ne=null,Qe=null,ml=!1,Hs=!1,Ja=!1,_l=0,io=0,Gs=null,Vv=0;function Ze(){throw Error(s(321))}function xu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Su(e,n,a,o,c,f){return pa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?$a:ma,Ja=!1,f=a(o,c),Ja=!1,Hs&&(f=Rp(n,a,o,c)),Ap(e),f}function Ap(e){C.H=Ri;var n=Ne!==null&&Ne.next!==null;if(pa=0,Qe=Ne=ue=null,ml=!1,io=0,Gs=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&bl(e)&&(dn=!0))}function Rp(e,n,a,o){ue=e;var c=0;do{if(Hs&&(Gs=null),io=0,Hs=!1,25<=c)throw Error(s(301));if(c+=1,Qe=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}C.H=ts,f=n(a,o)}while(Hs);return f}function kv(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ue.flags|=1024),n}function yu(){var e=_l!==0;return _l=0,e}function Mu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Eu(e){if(ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ml=!1}pa=0,Qe=Ne=ue=null,Hs=!1,io=_l=0,Gs=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ue.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Je(){if(Ne===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=Qe===null?ue.memoizedState:Qe.next;if(n!==null)Qe=n,Ne=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Qe===null?ue.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}var gl;gl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function ao(e){var n=io;return io+=1,Gs===null&&(Gs=[]),e=_p(Gs,e,n),n=ue,(Qe===null?n.memoizedState:Qe.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?$a:ma),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===M)return An(e)}throw Error(s(438,String(e)))}function Tu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=gl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=Je();return bu(n,Ne,e)}function bu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var A=S=null,N=null,k=n,ft=!1;do{var vt=k.lane&-536870913;if(vt!==k.lane?(ye&vt)===vt:(pa&vt)===vt){var it=k.revertLane;if(it===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),vt===Is&&(ft=!0);else if((pa&it)===it){k=k.next,it===Is&&(ft=!0);continue}else vt={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},N===null?(A=N=vt,S=f):N=N.next=vt,ue.lanes|=it,Ta|=it;vt=k.action,Ja&&a(f,vt),f=k.hasEagerState?k.eagerState:a(f,vt)}else it={lane:vt,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},N===null?(A=N=it,S=f):N=N.next=it,ue.lanes|=vt,Ta|=vt;k=k.next}while(k!==null&&k!==n);if(N===null?S=f:N.next=A,!qn(f,e.memoizedState)&&(dn=!0,ft&&(a=Fs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=N,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Au(e){var n=Je(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);qn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Cp(e,n,a){var o=ue,c=Je(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!qn((Ne||c).memoizedState,a);if(S&&(c.memoizedState=a,dn=!0),c=c.queue,wu(Up.bind(null,o,c,e),[e]),c.getSnapshot!==n||S||Qe!==null&&Qe.memoizedState.tag&1){if(o.flags|=2048,Vs(9,Dp.bind(null,o,c,a,n),{destroy:void 0},null),Ie===null)throw Error(s(349));f||(pa&60)!==0||wp(o,n,a)}return a}function wp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=gl(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Dp(e,n,a,o){n.value=a,n.getSnapshot=o,Lp(n)&&Np(e)}function Up(e,n,a){return a(function(){Lp(n)&&Np(e)})}function Lp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Np(e){var n=fa(e,2);n!==null&&Pn(n,e,2)}function Ru(e){var n=Vn();if(typeof e=="function"){var a=e;if(e=a(),Ja){se(!0);try{a()}finally{se(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function Op(e,n,a,o){return e.baseState=a,bu(e,Ne,typeof o=="function"?o:Hi)}function Xv(e,n,a,o,c){if(Ml(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};C.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Pp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Pp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=C.T,S={};C.T=S;try{var A=a(c,o),N=C.S;N!==null&&N(S,A),zp(e,n,A)}catch(k){Cu(e,n,k)}finally{C.T=f}}else try{f=a(c,o),zp(e,n,f)}catch(k){Cu(e,n,k)}}function zp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Bp(e,n,o)},function(o){return Cu(e,n,o)}):Bp(e,n,a)}function Bp(e,n,a){n.status="fulfilled",n.value=a,Ip(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Pp(e,a)))}function Cu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Ip(n),n=n.next;while(n!==o)}e.action=null}function Ip(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Fp(e,n){return n}function Hp(e,n){if(Ae){var a=Ie.formState;if(a!==null){t:{var o=ue;if(Ae){if(Sn){e:{for(var c=Sn,f=bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=gi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Sn=gi(c.nextSibling),o=c.data==="F!";break t}}Za(o)}o=!1}o&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fp,lastRenderedState:n},a.queue=o,a=am.bind(null,ue,o),o.dispatch=a,o=Ru(!1),f=Ou.bind(null,ue,!1,o.queue),o=Vn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Xv.bind(null,ue,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Gp(e){var n=Je();return Vp(n,Ne,e)}function Vp(e,n,a){n=bu(e,n,Fp)[0],e=xl(Hi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?ao(n):n;var o=Je(),c=o.queue,f=c.dispatch;return a!==o.memoizedState&&(ue.flags|=2048,Vs(9,Wv.bind(null,c,a),{destroy:void 0},null)),[n,f,e]}function Wv(e,n){e.action=n}function kp(e){var n=Je(),a=Ne;if(a!==null)return Vp(n,a,e);Je(),n=n.memoizedState,a=Je();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Vs(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=ue.updateQueue,n===null&&(n=gl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Xp(){return Je().memoizedState}function Sl(e,n,a,o){var c=Vn();ue.flags|=e,c.memoizedState=Vs(1|n,a,{destroy:void 0},o===void 0?null:o)}function yl(e,n,a,o){var c=Je();o=o===void 0?null:o;var f=c.memoizedState.inst;Ne!==null&&o!==null&&xu(o,Ne.memoizedState.deps)?c.memoizedState=Vs(n,a,f,o):(ue.flags|=e,c.memoizedState=Vs(1|n,a,f,o))}function Wp(e,n){Sl(8390656,8,e,n)}function wu(e,n){yl(2048,8,e,n)}function Yp(e,n){return yl(4,2,e,n)}function qp(e,n){return yl(4,4,e,n)}function jp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zp(e,n,a){a=a!=null?a.concat([e]):null,yl(4,4,jp.bind(null,n,e),a)}function Du(){}function Kp(e,n){var a=Je();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&xu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Qp(e,n){var a=Je();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&xu(n,o[1]))return o[0];if(o=e(),Ja){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[o,n],o}function Uu(e,n,a){return a===void 0||(pa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=$m(),ue.lanes|=e,Ta|=e,a)}function Jp(e,n,a,o){return qn(a,n)?a:Bs.current!==null?(e=Uu(e,a,o),qn(e,n)||(dn=!0),e):(pa&42)===0?(dn=!0,e.memoizedState=a):(e=$m(),ue.lanes|=e,Ta|=e,n)}function $p(e,n,a,o,c){var f=q.p;q.p=f!==0&&8>f?f:8;var S=C.T,A={};C.T=A,Ou(e,!1,n,a);try{var N=c(),k=C.S;if(k!==null&&k(A,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ft=Gv(N,o);so(e,n,ft,Qn(e))}else so(e,n,o,Qn(e))}catch(vt){so(e,n,{then:function(){},status:"rejected",reason:vt},Qn())}finally{q.p=f,C.T=S}}function Yv(){}function Lu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=tm(e).queue;$p(e,c,n,mt,a===null?Yv:function(){return em(e),a(o)})}function tm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:mt,baseState:mt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:mt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function em(e){var n=tm(e).next.queue;so(e,n,{},Qn())}function Nu(){return An(Ao)}function nm(){return Je().memoizedState}function im(){return Je().memoizedState}function qv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=va(a);var o=xa(n,e,a);o!==null&&(Pn(o,n,a),lo(o,n,a)),n={cache:_u()},e.payload=n;return}n=n.return}}function jv(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(e)?sm(n,a):(a=cu(e,n,a,o),a!==null&&(Pn(a,e,o),rm(a,n,o)))}function am(e,n,a){var o=Qn();so(e,n,a,o)}function so(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(e))sm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(c.hasEagerState=!0,c.eagerState=A,qn(A,S))return sl(e,n,c,0),Ie===null&&al(),!1}catch{}finally{}if(a=cu(e,n,c,o),a!==null)return Pn(a,e,o),rm(a,n,o),!0}return!1}function Ou(e,n,a,o){if(o={lane:2,revertLane:Tf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ml(e)){if(n)throw Error(s(479))}else n=cu(e,a,o,2),n!==null&&Pn(n,e,2)}function Ml(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function sm(e,n){Hs=ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function rm(e,n,a){if((a&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ti(e,a)}}var Ri={readContext:An,use:vl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze};Ri.useCacheRefresh=Ze,Ri.useMemoCache=Ze,Ri.useHostTransitionStatus=Ze,Ri.useFormState=Ze,Ri.useActionState=Ze,Ri.useOptimistic=Ze;var $a={readContext:An,use:vl,useCallback:function(e,n){return Vn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Wp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Sl(4194308,4,jp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Sl(4194308,4,e,n)},useInsertionEffect:function(e,n){Sl(4,2,e,n)},useMemo:function(e,n){var a=Vn();n=n===void 0?null:n;var o=e();if(Ja){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Vn();if(a!==void 0){var c=a(n);if(Ja){se(!0);try{a(n)}finally{se(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=jv.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Vn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ru(e);var n=e.queue,a=am.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Du,useDeferredValue:function(e,n){var a=Vn();return Uu(a,e,n)},useTransition:function(){var e=Ru(!1);return e=$p.bind(null,ue,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,c=Vn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ie===null)throw Error(s(349));(ye&60)!==0||wp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Wp(Up.bind(null,o,f,e),[e]),o.flags|=2048,Vs(9,Dp.bind(null,o,f,a,n),{destroy:void 0},null),a},useId:function(){var e=Vn(),n=Ie.identifierPrefix;if(Ae){var a=Ii,o=Bi;a=(o&~(1<<32-Zt(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=_l++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Vv++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Vn().memoizedState=qv.bind(null,ue)}};$a.useMemoCache=Tu,$a.useHostTransitionStatus=Nu,$a.useFormState=Hp,$a.useActionState=Hp,$a.useOptimistic=function(e){var n=Vn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ou.bind(null,ue,!0,a),a.dispatch=n,[e,n]};var ma={readContext:An,use:vl,useCallback:Kp,useContext:An,useEffect:wu,useImperativeHandle:Zp,useInsertionEffect:Yp,useLayoutEffect:qp,useMemo:Qp,useReducer:xl,useRef:Xp,useState:function(){return xl(Hi)},useDebugValue:Du,useDeferredValue:function(e,n){var a=Je();return Jp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=xl(Hi)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Cp,useId:nm};ma.useCacheRefresh=im,ma.useMemoCache=Tu,ma.useHostTransitionStatus=Nu,ma.useFormState=Gp,ma.useActionState=Gp,ma.useOptimistic=function(e,n){var a=Je();return Op(a,Ne,e,n)};var ts={readContext:An,use:vl,useCallback:Kp,useContext:An,useEffect:wu,useImperativeHandle:Zp,useInsertionEffect:Yp,useLayoutEffect:qp,useMemo:Qp,useReducer:Au,useRef:Xp,useState:function(){return Au(Hi)},useDebugValue:Du,useDeferredValue:function(e,n){var a=Je();return Ne===null?Uu(a,e,n):Jp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Au(Hi)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Cp,useId:nm};ts.useCacheRefresh=im,ts.useMemoCache=Tu,ts.useHostTransitionStatus=Nu,ts.useFormState=kp,ts.useActionState=kp,ts.useOptimistic=function(e,n){var a=Je();return Ne!==null?Op(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Pu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:b({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var zu={isMounted:function(e){return(e=e._reactInternals)?Z(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=va(o);c.payload=n,a!=null&&(c.callback=a),n=xa(e,c,o),n!==null&&(Pn(n,e,o),lo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=va(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=xa(e,c,o),n!==null&&(Pn(n,e,o),lo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(Pn(n,e,a),lo(n,e,a))}};function om(e,n,a,o,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,o)||!Yr(c,f):!0}function lm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&zu.enqueueReplaceState(n,n.state,null)}function es(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=b({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var El=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function cm(e){El(e)}function um(e){console.error(e)}function fm(e){El(e)}function Tl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function hm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Bu(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Tl(e,n)},a}function dm(e){return e=va(e),e.tag=3,e}function pm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){hm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){hm(n,a,o),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Zv(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&oo(n,a,c,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Ai===null?xf():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===du?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),yf(e,o,c)),!1;case 22:return a.flags|=65536,o===du?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),yf(e,o,c)),!1}throw Error(s(435,a.tag))}return yf(e,o,c),xf(),!1}if(Ae)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==hu&&(e=Error(s(422),{cause:o}),Kr(ei(e,a)))):(o!==hu&&(n=Error(s(423),{cause:o}),Kr(ei(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ei(o,a),c=Bu(e.stateNode,o,c),Ju(e,c),Ye!==4&&(Ye=2)),!1;var f=Error(s(520),{cause:o});if(f=ei(f,a),go===null?go=[f]:go.push(f),Ye!==4&&(Ye=2),n===null)return!0;o=ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Bu(a.stateNode,o,e),Ju(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=dm(c),pm(c,e,a,o),Ju(a,c),!1}a=a.return}while(a!==null);return!1}var mm=Error(s(461)),dn=!1;function yn(e,n,a,o){n.child=e===null?Sp(n,null,a,o):Ka(n,e.child,a,o)}function _m(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return is(n),o=Su(e,n,a,S,f,c),A=yu(),e!==null&&!dn?(Mu(e,n,c),Gi(e,n,c)):(Ae&&A&&uu(n),n.flags|=1,yn(e,n,o,c),n.child)}function gm(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!of(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,vm(e,n,f,o,c)):(e=wl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Yu(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(S,o)&&e.ref===n.ref)return Gi(e,n,c)}return n.flags|=1,e=Ea(f,o),e.ref=n.ref,e.return=n,n.child=e}function vm(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Yr(f,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=f,Yu(e,c))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,Gi(e,n,c)}return Iu(e,n,a,o,c)}function xm(e,n,a){var o=n.pendingProps,c=o.children,f=(n.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if(ro(e,n),o.mode==="hidden"||f){if((n.flags&128)!==0){if(o=S!==null?S.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Sm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&pl(n,S!==null?S.cachePool:null),S!==null?yp(n,S):pu(),Mp(n);else return n.lanes=n.childLanes=536870912,Sm(e,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(pl(n,S.cachePool),yp(n,S),da(),n.memoizedState=null):(e!==null&&pl(n,null),pu(),da());return yn(e,n,c,a),n.child}function Sm(e,n,a,o){var c=vu();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&pl(n,null),pu(),Mp(n),e!==null&&oo(e,n,o,!0),null}function ro(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Iu(e,n,a,o,c){return is(n),a=Su(e,n,a,o,void 0,c),o=yu(),e!==null&&!dn?(Mu(e,n,c),Gi(e,n,c)):(Ae&&o&&uu(n),n.flags|=1,yn(e,n,a,c),n.child)}function ym(e,n,a,o,c,f){return is(n),n.updateQueue=null,a=Rp(n,o,a,c),Ap(e),o=yu(),e!==null&&!dn?(Mu(e,n,f),Gi(e,n,f)):(Ae&&o&&uu(n),n.flags|=1,yn(e,n,a,f),n.child)}function Mm(e,n,a,o,c){if(is(n),n.stateNode===null){var f=Ns,S=a.contextType;typeof S=="object"&&S!==null&&(f=An(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ku(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?An(S):Ns,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Pu(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&zu.enqueueReplaceState(f,f.state,null),uo(n,o,f,c),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,N=es(a,A);f.props=N;var k=f.context,ft=a.contextType;S=Ns,typeof ft=="object"&&ft!==null&&(S=An(ft));var vt=a.getDerivedStateFromProps;ft=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||k!==S)&&lm(n,f,o,S),ga=!1;var it=n.memoizedState;f.state=it,uo(n,o,f,c),co(),k=n.memoizedState,A||it!==k||ga?(typeof vt=="function"&&(Pu(n,a,vt,o),k=n.memoizedState),(N=ga||om(n,a,N,o,it,k,S))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=k),f.props=o,f.state=k,f.context=S,o=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Qu(e,n),S=n.memoizedProps,ft=es(a,S),f.props=ft,vt=n.pendingProps,it=f.context,k=a.contextType,N=Ns,typeof k=="object"&&k!==null&&(N=An(k)),A=a.getDerivedStateFromProps,(k=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==vt||it!==N)&&lm(n,f,o,N),ga=!1,it=n.memoizedState,f.state=it,uo(n,o,f,c),co();var lt=n.memoizedState;S!==vt||it!==lt||ga||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof A=="function"&&(Pu(n,a,A,o),lt=n.memoizedState),(ft=ga||om(n,a,ft,o,it,lt,N)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(k||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,lt,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,lt,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=N,o=ft):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,ro(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ka(n,e.child,null,c),n.child=Ka(n,null,a,c)):yn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Gi(e,n,c),e}function Em(e,n,a,o){return Zr(),n.flags|=256,yn(e,n,a,o),n.child}var Fu={dehydrated:null,treeContext:null,retryLane:0};function Hu(e){return{baseLanes:e,cachePool:bp()}}function Gu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function Tm(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(c?ha(n):da(),Ae){var A=Sn,N;if(N=A){t:{for(N=A,A=bi;N.nodeType!==8;){if(!A){A=null;break t}if(N=gi(N.nextSibling),N===null){A=null;break t}}A=N}A!==null?(n.memoizedState={dehydrated:A,treeContext:qa!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912},N=oi(18,null,null,0),N.stateNode=A,N.return=n,n.child=N,On=n,Sn=null,N=!0):N=!1}N||Za(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?n.lanes=16:n.lanes=536870912,null;Fi(n)}return A=o.children,o=o.fallback,c?(da(),c=n.mode,A=ku({mode:"hidden",children:A},c),o=ss(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,c=n.child,c.memoizedState=Hu(a),c.childLanes=Gu(e,S,a),n.memoizedState=Fu,o):(ha(n),Vu(n,A))}if(N=e.memoizedState,N!==null&&(A=N.dehydrated,A!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Xu(e,n,a)):n.memoizedState!==null?(da(),n.child=e.child,n.flags|=128,n=null):(da(),c=o.fallback,A=n.mode,o=ku({mode:"visible",children:o.children},A),c=ss(c,A,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Ka(n,e.child,null,a),o=n.child,o.memoizedState=Hu(a),o.childLanes=Gu(e,S,a),n.memoizedState=Fu,n=c);else if(ha(n),A.data==="$!"){if(S=A.nextSibling&&A.nextSibling.dataset,S)var k=S.dgst;S=k,o=Error(s(419)),o.stack="",o.digest=S,Kr({value:o,source:null,stack:null}),n=Xu(e,n,a)}else if(dn||oo(e,n,a,!1),S=(a&e.childLanes)!==0,dn||S){if(S=Ie,S!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==N.retryLane)throw N.retryLane=o,fa(e,o),Pn(S,e,o),mm}A.data==="$?"||xf(),n=Xu(e,n,a)}else A.data==="$?"?(n.flags|=128,n.child=e.child,n=ux.bind(null,e),A._reactRetry=n,n=null):(e=N.treeContext,Sn=gi(A.nextSibling),On=n,Ae=!0,mi=null,bi=!1,e!==null&&(ni[ii++]=Bi,ni[ii++]=Ii,ni[ii++]=qa,Bi=e.id,Ii=e.overflow,qa=n),n=Vu(n,o.children),n.flags|=4096);return n}return c?(da(),c=o.fallback,A=n.mode,N=e.child,k=N.sibling,o=Ea(N,{mode:"hidden",children:o.children}),o.subtreeFlags=N.subtreeFlags&31457280,k!==null?c=Ea(k,c):(c=ss(c,A,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,A=e.child.memoizedState,A===null?A=Hu(a):(N=A.cachePool,N!==null?(k=ln._currentValue,N=N.parent!==k?{parent:k,pool:k}:N):N=bp(),A={baseLanes:A.baseLanes|a,cachePool:N}),c.memoizedState=A,c.childLanes=Gu(e,S,a),n.memoizedState=Fu,o):(ha(n),a=e.child,e=a.sibling,a=Ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Vu(e,n){return n=ku({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ku(e,n){return Km(e,n,0,null)}function Xu(e,n,a){return Ka(n,e.child,null,a),e=Vu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ju(e.return,n,a)}function Wu(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Am(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(yn(e,n,o.children,a),o=on.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bm(e,a,n);else if(e.tag===19)bm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(zt(on,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&dl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Wu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&dl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Wu(n,!0,a,null,f);break;case"together":Wu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(oo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Yu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function Kv(e,n,a){switch(n.tag){case 3:vn(n,n.stateNode.containerInfo),_a(n,ln,e.memoizedState.cache),Zr();break;case 27:case 5:he(n);break;case 4:vn(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Tm(e,n,a):(ha(n),e=Gi(e,n,a),e!==null?e.sibling:null);ha(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(oo(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Am(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),zt(on,on.current),o)break;return null;case 22:case 23:return n.lanes=0,xm(e,n,a);case 24:_a(n,ln,e.memoizedState.cache)}return Gi(e,n,a)}function Rm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Yu(e,a)&&(n.flags&128)===0)return dn=!1,Kv(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Ae&&(n.flags&1048576)!==0&&fp(n,ll,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")of(o)?(e=es(o,e),n.tag=1,n=Mm(null,n,o,e,a)):(n.tag=0,n=Iu(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===E){n.tag=11,n=_m(null,n,o,e,a);break t}else if(c===g){n.tag=14,n=gm(null,n,o,e,a);break t}}throw n=Y(o)||o,Error(s(306,n,""))}}return n;case 0:return Iu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=es(o,n.pendingProps),Mm(e,n,o,c,a);case 3:t:{if(vn(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var f=n.pendingProps;c=n.memoizedState,o=c.element,Qu(e,n),uo(n,f,null,a);var S=n.memoizedState;if(f=S.cache,_a(n,ln,f),f!==c.cache&&Zu(n,[ln],a,!0),co(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Em(e,n,f,a);break t}else if(f!==o){o=ei(Error(s(424)),n),Kr(o),n=Em(e,n,f,a);break t}else for(Sn=gi(n.stateNode.containerInfo.firstChild),On=n,Ae=!0,mi=null,bi=!0,a=Sp(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Zr(),f===o){n=Gi(e,n,a);break t}yn(e,n,f,a)}n=n.child}return n;case 26:return ro(e,n),e===null?(a=D_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Gl(ae.current).createElement(a),o[an]=n,o[sn]=e,Mn(o,a,e),Q(o),n.stateNode=o):n.memoizedState=D_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return he(n),e===null&&Ae&&(o=n.stateNode=R_(n.type,n.pendingProps,ae.current),On=n,bi=!0,Sn=gi(o.firstChild)),o=n.pendingProps.children,e!==null||Ae?yn(e,n,o,a):n.child=Ka(n,null,o,a),ro(e,n),n.child;case 5:return e===null&&Ae&&((c=o=Sn)&&(o=Ax(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,On=n,Sn=gi(o.firstChild),bi=!1,c=!0):c=!1),c||Za(n)),he(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Nf(c,f)?o=null:S!==null&&Nf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Su(e,n,kv,null,null,a),Ao._currentValue=c),ro(e,n),yn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Sn)&&(a=Rx(a,n.pendingProps,bi),a!==null?(n.stateNode=a,On=n,Sn=null,e=!0):e=!1),e||Za(n)),null;case 13:return Tm(e,n,a);case 4:return vn(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ka(n,null,o,a):yn(e,n,o,a),n.child;case 11:return _m(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,_a(n,n.type,o.value),yn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,is(n),c=An(c),o=o(c),n.flags|=1,yn(e,n,o,a),n.child;case 14:return gm(e,n,n.type,n.pendingProps,a);case 15:return vm(e,n,n.type,n.pendingProps,a);case 19:return Am(e,n,a);case 22:return xm(e,n,a);case 24:return is(n),o=An(ln),e===null?(c=vu(),c===null&&(c=Ie,f=_u(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Ku(n),_a(n,ln,c)):((e.lanes&a)!==0&&(Qu(e,n),uo(n,null,null,a),co()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),_a(n,ln,o)):(o=f.cache,_a(n,ln,o),o!==c.cache&&Zu(n,[ln],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var qu=Ct(null),ns=null,Vi=null;function _a(e,n,a){zt(qu,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=qu.current,Qt(qu)}function ju(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Zu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var N=0;N<n.length;N++)if(A.context===n[N]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),ju(f.return,a,e),o||(S=null);break t}f=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),ju(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function oo(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=c.type;qn(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===z.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}c=c.return}e!==null&&Zu(n,e,a,o),n.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function is(e){ns=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Cm(ns,e)}function Al(e,n){return ns===null&&is(e),Cm(e,n)}function Cm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var ga=!1;function Ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ke&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=rl(e),cp(e,null,a),n}return sl(e,o,n,a),rl(e)}function lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ti(e,a)}}function Ju(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var $u=!1;function co(){if($u){var e=Fs;if(e!==null)throw e}}function uo(e,n,a,o){$u=!1;var c=e.updateQueue;ga=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var N=A,k=N.next;N.next=null,S===null?f=k:S.next=k,S=N;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==S&&(A===null?ft.firstBaseUpdate=k:A.next=k,ft.lastBaseUpdate=N))}if(f!==null){var vt=c.baseState;S=0,ft=k=N=null,A=f;do{var it=A.lane&-536870913,lt=it!==A.lane;if(lt?(ye&it)===it:(o&it)===it){it!==0&&it===Is&&($u=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var kt=e,ie=A;it=n;var qe=a;switch(ie.tag){case 1:if(kt=ie.payload,typeof kt=="function"){vt=kt.call(qe,vt,it);break t}vt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ie.payload,it=typeof kt=="function"?kt.call(qe,vt,it):kt,it==null)break t;vt=b({},vt,it);break t;case 2:ga=!0}}it=A.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(k=ft=lt,N=vt):ft=ft.next=lt,S|=it;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ft===null&&(N=vt),c.baseState=N,c.firstBaseUpdate=k,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Ta|=S,e.lanes=S,e.memoizedState=vt}}function wm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Dm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)wm(a[e],n)}function fo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(A){Be(n,n.return,A)}}function Sa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var N=a;try{A()}catch(k){Be(c,N,k)}}}o=o.next}while(o!==f)}}catch(k){Be(n,n.return,k)}}function Um(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Dm(n,a)}catch(o){Be(e,e.return,o)}}}function Lm(e,n,a){a.props=es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function as(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(f){Be(e,n,f)}}function jn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Be(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(e,n,c)}else a.current=null}function Nm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Be(e,e.return,c)}}function Om(e,n,a){try{var o=e.stateNode;yx(o,e.type,a,n),o[sn]=n}catch(c){Be(e,e.return,c)}}function Pm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ef(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hl));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(ef(e,n,a),e=e.sibling;e!==null;)ef(e,n,a),e=e.sibling}function Rl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Rl(e,n,a),e=e.sibling;e!==null;)Rl(e,n,a),e=e.sibling}var Xi=!1,We=!1,nf=!1,zm=typeof WeakSet=="function"?WeakSet:Set,pn=null,Bm=!1;function Qv(e,n){if(e=e.containerInfo,Uf=ql,e=tp(e),au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,N=-1,k=0,ft=0,vt=e,it=null;e:for(;;){for(var lt;vt!==a||c!==0&&vt.nodeType!==3||(A=S+c),vt!==f||o!==0&&vt.nodeType!==3||(N=S+o),vt.nodeType===3&&(S+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)it=vt,vt=lt;for(;;){if(vt===e)break e;if(it===a&&++k===c&&(A=S),it===f&&++ft===o&&(N=S),(lt=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=lt}a=A===-1||N===-1?null:{start:A,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:e,selectionRange:a},ql=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var kt=es(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(kt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Be(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}return kt=Bm,Bm=!1,kt}function Im(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(e,a),o&4&&fo(5,a);break;case 1:if(Yi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(A){Be(a,a.return,A)}else{var c=es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(A){Be(a,a.return,A)}}o&64&&Um(a),o&512&&as(a,a.return);break;case 3:if(Yi(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Dm(o,e)}catch(A){Be(a,a.return,A)}}break;case 26:Yi(e,a),o&512&&as(a,a.return);break;case 27:case 5:Yi(e,a),n===null&&o&4&&Nm(a),o&512&&as(a,a.return);break;case 12:Yi(e,a);break;case 13:Yi(e,a),o&4&&Gm(e,a);break;case 22:if(c=a.memoizedState!==null||Xi,!c){n=n!==null&&n.memoizedState!==null||We;var f=Xi,S=We;Xi=c,(We=n)&&!S?ya(e,a,(a.subtreeFlags&8772)!==0):Yi(e,a),Xi=f,We=S}o&512&&(a.memoizedProps.mode==="manual"?as(a,a.return):jn(a,a.return));break;default:Yi(e,a)}}function Fm(e){var n=e.alternate;n!==null&&(e.alternate=null,Fm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ir(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Zn=!1;function Wi(e,n,a){for(a=a.child;a!==null;)Hm(e,n,a),a=a.sibling}function Hm(e,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:We||jn(a,n),Wi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||jn(a,n);var o=$e,c=Zn;for($e=a.stateNode,Wi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Ir(a),$e=o,Zn=c;break;case 5:We||jn(a,n);case 6:c=$e;var f=Zn;if($e=null,Wi(e,n,a),$e=c,Zn=f,$e!==null)if(Zn)try{e=$e,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(S){Be(a,n,S)}else try{$e.removeChild(a.stateNode)}catch(S){Be(a,n,S)}break;case 18:$e!==null&&(Zn?(n=$e,a=a.stateNode,n.nodeType===8?Pf(n.parentNode,a):n.nodeType===1&&Pf(n,a),Do(n)):Pf($e,a.stateNode));break;case 4:o=$e,c=Zn,$e=a.stateNode.containerInfo,Zn=!0,Wi(e,n,a),$e=o,Zn=c;break;case 0:case 11:case 14:case 15:We||Sa(2,a,n),We||Sa(4,a,n),Wi(e,n,a);break;case 1:We||(jn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Lm(a,n,o)),Wi(e,n,a);break;case 21:Wi(e,n,a);break;case 22:We||jn(a,n),We=(o=We)||a.memoizedState!==null,Wi(e,n,a),We=o;break;default:Wi(e,n,a)}}function Gm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Do(e)}catch(a){Be(n,n.return,a)}}function Jv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new zm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new zm),n;default:throw Error(s(435,e.tag))}}function af(e,n){var a=Jv(e);n.forEach(function(o){var c=fx.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function si(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:case 5:$e=A.stateNode,Zn=!1;break t;case 3:$e=A.stateNode.containerInfo,Zn=!0;break t;case 4:$e=A.stateNode.containerInfo,Zn=!0;break t}A=A.return}if($e===null)throw Error(s(160));Hm(f,S,c),$e=null,Zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Vm(n,e),n=n.sibling}var _i=null;function Vm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:si(n,e),ri(e),o&4&&(Sa(3,e,e.return),fo(3,e),Sa(5,e,e.return));break;case 1:si(n,e),ri(e),o&512&&(We||a===null||jn(a,a.return)),o&64&&Xi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=_i;if(si(n,e),ri(e),o&512&&(We||a===null||jn(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ka]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,o,a),f[an]=e,Q(f),o=f;break t;case"link":var S=N_("link","href",c).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=c.createElement(o),Mn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=N_("meta","content",c).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=c.createElement(o),Mn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[an]=e,Q(f),o=f}e.stateNode=o}else O_(c,e.type,e.stateNode);else e.stateNode=L_(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?O_(c,e.type,e.stateNode):L_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Om(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var N=c.firstChild;N;){var k=N.nextSibling,ft=N.nodeName;N[ka]||ft==="HEAD"||ft==="BODY"||ft==="SCRIPT"||ft==="STYLE"||ft==="LINK"&&N.rel.toLowerCase()==="stylesheet"||c.removeChild(N),N=k}for(var vt=e.type,it=c.attributes;it.length;)c.removeAttributeNode(it[0]);Mn(c,vt,f),c[an]=e,c[sn]=f}catch(kt){Be(e,e.return,kt)}}case 5:if(si(n,e),ri(e),o&512&&(We||a===null||jn(a,a.return)),e.flags&32){c=e.stateNode;try{Hn(c,"")}catch(kt){Be(e,e.return,kt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Om(e,c,a!==null?a.memoizedProps:c)),o&1024&&(nf=!0);break;case 6:if(si(n,e),ri(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){Be(e,e.return,kt)}}break;case 3:if(Xl=null,c=_i,_i=Vl(n.containerInfo),si(n,e),_i=c,ri(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Do(n.containerInfo)}catch(kt){Be(e,e.return,kt)}nf&&(nf=!1,km(e));break;case 4:o=_i,_i=Vl(e.stateNode.containerInfo),si(n,e),ri(e),_i=o;break;case 12:si(n,e),ri(e);break;case 13:si(n,e),ri(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(df=dt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,af(e,o)));break;case 22:if(o&512&&(We||a===null||jn(a,a.return)),N=e.memoizedState!==null,k=a!==null&&a.memoizedState!==null,ft=Xi,vt=We,Xi=ft||N,We=vt||k,si(n,e),We=vt,Xi=ft,ri(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=Xi||We,a===null||k||n||ks(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){k=a=n;try{if(c=k.stateNode,N)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=k.stateNode,A=k.memoizedProps.style;var lt=A!=null&&A.hasOwnProperty("display")?A.display:null;S.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(kt){Be(k,k.return,kt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=N?"":k.memoizedProps}catch(kt){Be(k,k.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,af(e,a))));break;case 19:si(n,e),ri(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,af(e,o)));break;case 21:break;default:si(n,e),ri(e)}}function ri(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Pm(a)){var o=a;break t}a=a.return}throw Error(s(160))}switch(o.tag){case 27:var c=o.stateNode,f=tf(e);Rl(e,f,c);break;case 5:var S=o.stateNode;o.flags&32&&(Hn(S,""),o.flags&=-33);var A=tf(e);Rl(e,A,S);break;case 3:case 4:var N=o.stateNode.containerInfo,k=tf(e);ef(e,k,N);break;default:throw Error(s(161))}}}catch(ft){Be(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function km(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;km(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Yi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Im(e,n.alternate,n),n=n.sibling}function ks(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),ks(n);break;case 1:jn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Lm(n,n.return,a),ks(n);break;case 26:case 27:case 5:jn(n,n.return),ks(n);break;case 22:jn(n,n.return),n.memoizedState===null&&ks(n);break;default:ks(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ya(c,f,a),fo(4,f);break;case 1:if(ya(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(k){Be(o,o.return,k)}if(o=f,c=o.updateQueue,c!==null){var A=o.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)wm(N[c],A)}catch(k){Be(o,o.return,k)}}a&&S&64&&Um(f),as(f,f.return);break;case 26:case 27:case 5:ya(c,f,a),a&&o===null&&S&4&&Nm(f),as(f,f.return);break;case 12:ya(c,f,a);break;case 13:ya(c,f,a),a&&S&4&&Gm(c,f);break;case 22:f.memoizedState===null&&ya(c,f,a),as(f,f.return);break;default:ya(c,f,a)}n=n.sibling}}function sf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function Ma(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Xm(e,n,a,o),n=n.sibling}function Xm(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ma(e,n,a,o),c&2048&&fo(9,n);break;case 3:Ma(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(c&2048){Ma(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Be(n,n.return,N)}}else Ma(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Ma(e,n,a,o):ho(e,n):f._visibility&4?Ma(e,n,a,o):(f._visibility|=4,Xs(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&sf(n.alternate,n);break;case 24:Ma(e,n,a,o),c&2048&&rf(n.alternate,n);break;default:Ma(e,n,a,o)}}function Xs(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,A=a,N=o,k=S.flags;switch(S.tag){case 0:case 11:case 15:Xs(f,S,A,N,c),fo(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&4?Xs(f,S,A,N,c):ho(f,S):(ft._visibility|=4,Xs(f,S,A,N,c)),c&&k&2048&&sf(S.alternate,S);break;case 24:Xs(f,S,A,N,c),c&&k&2048&&rf(S.alternate,S);break;default:Xs(f,S,A,N,c)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:ho(a,o),c&2048&&sf(o.alternate,o);break;case 24:ho(a,o),c&2048&&rf(o.alternate,o);break;default:ho(a,o)}n=n.sibling}}var po=8192;function Ws(e){if(e.subtreeFlags&po)for(e=e.child;e!==null;)Wm(e),e=e.sibling}function Wm(e){switch(e.tag){case 26:Ws(e),e.flags&po&&e.memoizedState!==null&&Hx(_i,e.memoizedState,e.memoizedProps);break;case 5:Ws(e);break;case 3:case 4:var n=_i;_i=Vl(e.stateNode.containerInfo),Ws(e),_i=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=po,po=16777216,Ws(e),po=n):Ws(e));break;default:Ws(e)}}function Ym(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];pn=o,jm(o,e)}Ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qm(e),e=e.sibling}function qm(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Cl(e)):mo(e);break;default:mo(e)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];pn=o,jm(o,e)}Ym(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Cl(n));break;default:Cl(n)}e=e.sibling}}function jm(e,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,pn=o;else t:for(a=e;pn!==null;){o=pn;var c=o.sibling,f=o.return;if(Fm(o),o===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}function $v(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,n,a,o){return new $v(e,n,a,o)}function of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,n){var a=e.alternate;return a===null?(a=oi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Zm(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function wl(e,n,a,o,c,f){var S=0;if(o=e,typeof e=="function")of(e)&&(S=1);else if(typeof e=="string")S=Ix(e,a,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return ss(a.children,c,f,n);case p:S=8,c|=24;break;case _:return e=oi(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case w:return e=oi(13,a,n,c),e.elementType=w,e.lanes=f,e;case y:return e=oi(19,a,n,c),e.elementType=y,e.lanes=f,e;case O:return Km(a,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case M:S=10;break t;case x:S=9;break t;case E:S=11;break t;case g:S=14;break t;case P:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=oi(S,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function ss(e,n,a,o){return e=oi(7,e,o,n),e.lanes=a,e}function Km(e,n,a,o){e=oi(22,e,o,n),e.elementType=O,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(s(456));if((c._pendingVisibility&2)===0){var S=fa(f,2);S!==null&&(c._pendingVisibility|=2,Pn(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(s(456));if((c._pendingVisibility&2)!==0){var S=fa(f,2);S!==null&&(c._pendingVisibility&=-3,Pn(S,f,2))}}};return e.stateNode=c,e}function lf(e,n,a){return e=oi(6,e,null,n),e.lanes=a,e}function cf(e,n,a){return n=oi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function qi(e){e.flags|=4}function Qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P_(n)){if(n=ai.current,n!==null&&((ye&4194176)===ye?Ai!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Ai))throw Jr=du,pp;e.flags|=8192}}function Dl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Te():536870912,e.lanes|=n,qs|=n)}function _o(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function tx(e,n,a){var o=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(ln),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(jr(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mi!==null&&(gf(mi),mi=null))),Ve(n),null;case 26:return a=n.memoizedState,e===null?(qi(n),a!==null?(Ve(n),Qm(n,a)):(Ve(n),n.flags&=-16777217)):a?a!==e.memoizedState?(qi(n),Ve(n),Qm(n,a)):(Ve(n),n.flags&=-16777217):(e.memoizedProps!==o&&qi(n),Ve(n),n.flags&=-16777217),null;case 27:Xt(n),a=ae.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}e=Ee.current,jr(n)?hp(n):(e=R_(c,o,a),n.stateNode=e,qi(n))}return Ve(n),null;case 5:if(Xt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}if(e=Ee.current,jr(n))hp(n);else{switch(c=Gl(ae.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[an]=n,e[sn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Mn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&qi(n)}}return Ve(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=ae.current,jr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=On,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||y_(e.nodeValue,a)),e||Za(n)}else e=Gl(e).createTextNode(o),e[an]=n,n.stateNode=e}return Ve(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=jr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[an]=n}else Zr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),c=!1}else mi!==null&&(gf(mi),mi=null),c=!0;if(!c)return n.flags&256?(Fi(n),n):(Fi(n),null)}if(Fi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),Ve(n),null;case 4:return re(),e===null&&Cf(n.stateNode.containerInfo),Ve(n),null;case 10:return ki(n.type),Ve(n),null;case 19:if(Qt(on),c=n.memoizedState,c===null)return Ve(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)_o(c,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=dl(e),f!==null){for(n.flags|=128,_o(c,!1),e=f.updateQueue,n.updateQueue=e,Dl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Zm(a,e),a=a.sibling;return zt(on,on.current&1|2),n.child}e=e.sibling}c.tail!==null&&dt()>Ul&&(n.flags|=128,o=!0,_o(c,!1),n.lanes=4194304)}else{if(!o)if(e=dl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Dl(n,e),_o(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ae)return Ve(n),null}else 2*dt()-c.renderingStartTime>Ul&&a!==536870912&&(n.flags|=128,o=!0,_o(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=dt(),n.sibling=null,e=on.current,zt(on,o?e&1|2:e&1),n):(Ve(n),null);case 22:case 23:return Fi(n),mu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Qt(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(ln),Ve(n),null;case 25:return null}throw Error(s(156,n.tag))}function ex(e,n){switch(fu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(ln),re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Xt(n),null;case 13:if(Fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Zr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Qt(on),null;case 4:return re(),null;case 10:return ki(n.type),null;case 22:case 23:return Fi(n),mu(),e!==null&&Qt(Qa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(ln),null;case 25:return null;default:return null}}function Jm(e,n){switch(fu(n),n.tag){case 3:ki(ln),re();break;case 26:case 27:case 5:Xt(n);break;case 4:re();break;case 13:Fi(n);break;case 19:Qt(on);break;case 10:ki(n.type);break;case 22:case 23:Fi(n),mu(),e!==null&&Qt(Qa);break;case 24:ki(ln)}}var nx={getCacheForType:function(e){var n=An(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},ix=typeof WeakMap=="function"?WeakMap:Map,ke=0,Ie=null,me=null,ye=0,Fe=0,Kn=null,ji=!1,Ys=!1,uf=!1,Zi=0,Ye=0,Ta=0,rs=0,ff=0,li=0,qs=0,go=null,Ci=null,hf=!1,df=0,Ul=1/0,Ll=null,ba=null,Nl=!1,os=null,vo=0,pf=0,mf=null,xo=0,_f=null;function Qn(){if((ke&2)!==0&&ye!==0)return ye&-ye;if(C.T!==null){var e=Is;return e!==0?e:Tf()}return Br()}function $m(){li===0&&(li=(ye&536870912)===0||Ae?nn():536870912);var e=ai.current;return e!==null&&(e.flags|=32),li}function Pn(e,n,a){(e===Ie&&Fe===2||e.cancelPendingCommit!==null)&&(js(e,0),Ki(e,ye,li,!1)),Un(e,a),((ke&2)===0||e!==Ie)&&(e===Ie&&((ke&2)===0&&(rs|=a),Ye===4&&Ki(e,ye,li,!1)),wi(e))}function t_(e,n,a){if((ke&6)!==0)throw Error(s(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||$t(e,n),c=o?rx(e,n):Sf(e,n,!0),f=o;do{if(c===0){Ys&&!o&&Ki(e,n,0,!1);break}else if(c===6)Ki(e,n,0,!ji);else{if(a=e.current.alternate,f&&!ax(a)){c=Sf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;c=go;var N=A.current.memoizedState.isDehydrated;if(N&&(js(A,S).flags|=256),S=Sf(A,S,!1),S!==2){if(uf&&!N){A.errorRecoveryDisabledLanes|=f,rs|=f,c=4;break t}f=Ci,Ci=c,f!==null&&gf(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){js(e,0),Ki(e,n,0,!0);break}t:{switch(o=e,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){Ki(o,n,li,!ji);break t}break;case 2:Ci=null;break;case 3:case 5:break;default:throw Error(s(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(f=df+300-dt(),10<f)){if(Ki(o,n,li,!ji),Ut(o,0)!==0)break t;o.timeoutHandle=T_(e_.bind(null,o,a,Ci,Ll,hf,n,li,rs,qs,ji,2,-0,0),f);break t}e_(o,a,Ci,Ll,hf,n,li,rs,qs,ji,0,-0,0)}}break}while(!0);wi(e)}function gf(e){Ci===null?Ci=e:Ci.push.apply(Ci,e)}function e_(e,n,a,o,c,f,S,A,N,k,ft,vt,it){var lt=n.subtreeFlags;if((lt&8192||(lt&16785408)===16785408)&&(bo={stylesheets:null,count:0,unsuspend:Fx},Wm(n),n=Gx(),n!==null)){e.cancelPendingCommit=n(l_.bind(null,e,a,o,c,S,A,N,1,vt,it)),Ki(e,f,S,!k);return}l_(e,a,o,c,S,A,N,ft,vt,it)}function ax(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ki(e,n,a,o){n&=~ff,n&=~rs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Zt(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&zr(e,a,n)}function Ol(){return(ke&6)===0?(So(0),!1):!0}function vf(){if(me!==null){if(Fe===0)var e=me.return;else e=me,Vi=ns=null,Eu(e),zs=null,$r=0,e=me;for(;e!==null;)Jm(e.alternate,e),e=e.return;me=null}}function js(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ex(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),vf(),Ie=e,me=a=Ea(e.current,null),ye=n,Fe=0,Kn=null,ji=!1,Ys=$t(e,n),uf=!1,qs=li=ff=rs=Ta=Ye=0,Ci=go=null,hf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Zt(o),f=1<<c;n|=e[c],o&=~f}return Zi=n,al(),a}function n_(e,n){ue=null,C.H=Ri,n===Qr?(n=gp(),Fe=3):n===pp?(n=gp(),Fe=4):Fe=n===mm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,me===null&&(Ye=1,Tl(e,ei(n,e.current)))}function i_(){var e=C.H;return C.H=Ri,e===null?Ri:e}function a_(){var e=C.A;return C.A=nx,e}function xf(){Ye=4,ji||(ye&4194176)!==ye&&ai.current!==null||(Ys=!0),(Ta&134217727)===0&&(rs&134217727)===0||Ie===null||Ki(Ie,ye,li,!1)}function Sf(e,n,a){var o=ke;ke|=2;var c=i_(),f=a_();(Ie!==e||ye!==n)&&(Ll=null,js(e,n)),n=!1;var S=Ye;t:do try{if(Fe!==0&&me!==null){var A=me,N=Kn;switch(Fe){case 8:vf(),S=6;break t;case 3:case 2:case 6:ai.current===null&&(n=!0);var k=Fe;if(Fe=0,Kn=null,Zs(e,A,N,k),a&&Ys){S=0;break t}break;default:k=Fe,Fe=0,Kn=null,Zs(e,A,N,k)}}sx(),S=Ye;break}catch(ft){n_(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Vi=ns=null,ke=o,C.H=c,C.A=f,me===null&&(Ie=null,ye=0,al()),S}function sx(){for(;me!==null;)s_(me)}function rx(e,n){var a=ke;ke|=2;var o=i_(),c=a_();Ie!==e||ye!==n?(Ll=null,Ul=dt()+500,js(e,n)):Ys=$t(e,n);t:do try{if(Fe!==0&&me!==null){n=me;var f=Kn;e:switch(Fe){case 1:Fe=0,Kn=null,Zs(e,n,f,1);break;case 2:if(mp(f)){Fe=0,Kn=null,r_(n);break}n=function(){Fe===2&&Ie===e&&(Fe=7),wi(e)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:mp(f)?(Fe=0,Kn=null,r_(n)):(Fe=0,Kn=null,Zs(e,n,f,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var A=me;if(!S||P_(S)){Fe=0,Kn=null;var N=A.sibling;if(N!==null)me=N;else{var k=A.return;k!==null?(me=k,Pl(k)):me=null}break e}}Fe=0,Kn=null,Zs(e,n,f,5);break;case 6:Fe=0,Kn=null,Zs(e,n,f,6);break;case 8:vf(),Ye=6;break t;default:throw Error(s(462))}}ox();break}catch(ft){n_(e,ft)}while(!0);return Vi=ns=null,C.H=o,C.A=c,ke=a,me!==null?0:(Ie=null,ye=0,al(),Ye)}function ox(){for(;me!==null&&!T();)s_(me)}function s_(e){var n=Rm(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Pl(e):me=n}function r_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=ym(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=ym(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Eu(n);default:Jm(a,n),n=me=Zm(n,Zi),n=Rm(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Pl(e):me=n}function Zs(e,n,a,o){Vi=ns=null,Eu(n),zs=null,$r=0;var c=n.return;try{if(Zv(e,c,n,a,ye)){Ye=1,Tl(e,ei(a,e.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Ye=1,Tl(e,ei(a,e.current)),me=null;return}n.flags&32768?(Ae||o===1?e=!0:Ys||(ye&536870912)!==0?e=!1:(ji=e=!0,(o===2||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),o_(n,e)):Pl(n)}function Pl(e){var n=e;do{if((n.flags&32768)!==0){o_(n,ji);return}e=n.return;var a=tx(n.alternate,n,Zi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ye===0&&(Ye=5)}function o_(e,n){do{var a=ex(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ye=6,me=null}function l_(e,n,a,o,c,f,S,A,N,k){var ft=C.T,vt=q.p;try{q.p=2,C.T=null,lx(e,n,a,o,vt,c,f,S,A,N,k)}finally{C.T=ft,q.p=vt}}function lx(e,n,a,o,c,f,S,A){do Ks();while(os!==null);if((ke&6)!==0)throw Error(s(327));var N=e.finishedWork;if(o=e.finishedLanes,N===null)return null;if(e.finishedWork=null,e.finishedLanes=0,N===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var k=N.lanes|N.childLanes;if(k|=lu,jo(e,o,k,f,S,A),e===Ie&&(me=Ie=null,ye=0),(N.subtreeFlags&10256)===0&&(N.flags&10256)===0||Nl||(Nl=!0,pf=k,mf=a,hx(Dt,function(){return Ks(),null})),a=(N.flags&15990)!==0,(N.subtreeFlags&15990)!==0||a?(a=C.T,C.T=null,f=q.p,q.p=2,S=ke,ke|=4,Qv(e,N),Vm(N,e),Lv(Lf,e.containerInfo),ql=!!Uf,Lf=Uf=null,e.current=N,Im(e,N.alternate,N),et(),ke=S,q.p=f,C.T=a):e.current=N,Nl?(Nl=!1,os=e,vo=o):c_(e,k),k=e.pendingLanes,k===0&&(ba=null),Ft(N.stateNode),wi(e),n!==null)for(c=e.onRecoverableError,N=0;N<n.length;N++)k=n[N],c(k.value,{componentStack:k.stack});return(vo&3)!==0&&Ks(),k=e.pendingLanes,(o&4194218)!==0&&(k&42)!==0?e===_f?xo++:(xo=0,_f=e):xo=0,So(0),null}function c_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function Ks(){if(os!==null){var e=os,n=pf;pf=0;var a=Ts(vo),o=C.T,c=q.p;try{if(q.p=32>a?32:a,C.T=null,os===null)var f=!1;else{a=mf,mf=null;var S=os,A=vo;if(os=null,vo=0,(ke&6)!==0)throw Error(s(331));var N=ke;if(ke|=4,qm(S.current),Xm(S,S.current,A,a),ke=N,So(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(qt,S)}catch{}f=!0}return f}finally{q.p=c,C.T=o,c_(e,n)}}return!1}function u_(e,n,a){n=ei(a,n),n=Bu(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(Un(e,2),wi(e))}function Be(e,n,a){if(e.tag===3)u_(e,e,a);else for(;n!==null;){if(n.tag===3){u_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ba===null||!ba.has(o))){e=ei(a,e),a=dm(2),o=xa(n,a,2),o!==null&&(pm(a,o,n,e),Un(o,2),wi(o));break}}n=n.return}}function yf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ix;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(uf=!0,c.add(a),e=cx.bind(null,e,n,a),n.then(e,e))}function cx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ie===e&&(ye&a)===a&&(Ye===4||Ye===3&&(ye&62914560)===ye&&300>dt()-df?(ke&2)===0&&js(e,0):ff|=a,qs===ye&&(qs=0)),wi(e)}function f_(e,n){n===0&&(n=Te()),e=fa(e,n),e!==null&&(Un(e,n),wi(e))}function ux(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),f_(e,a)}function fx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),f_(e,a)}function hx(e,n){return Wt(e,n)}var zl=null,Qs=null,Mf=!1,Bl=!1,Ef=!1,ls=0;function wi(e){e!==Qs&&e.next===null&&(Qs===null?zl=Qs=e:Qs=Qs.next=e),Bl=!0,Mf||(Mf=!0,px(dx))}function So(e,n){if(!Ef&&Bl){Ef=!0;do for(var a=!1,o=zl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Zt(42|e)+1)-1,f&=c&~(S&~A),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,p_(o,f))}else f=ye,f=Ut(o,o===Ie?f:0),(f&3)===0||$t(o,f)||(a=!0,p_(o,f));o=o.next}while(a);Ef=!1}}function dx(){Bl=Mf=!1;var e=0;ls!==0&&(Mx()&&(e=ls),ls=0);for(var n=dt(),a=null,o=zl;o!==null;){var c=o.next,f=h_(o,n);f===0?(o.next=null,a===null?zl=c:a.next=c,c===null&&(Qs=a)):(a=o,(e!==0||(f&3)!==0)&&(Bl=!0)),o=c}So(e)}function h_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Zt(f),A=1<<S,N=c[S];N===-1?((A&a)===0||(A&o)!==0)&&(c[S]=Ge(A,n)):N<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ie,a=ye,a=Ut(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&Fe===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&U(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&U(o),Ts(a)){case 2:case 8:a=Gt;break;case 32:a=Dt;break;case 268435456:a=_e;break;default:a=Dt}return o=d_.bind(null,e),a=Wt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&U(o),e.callbackPriority=2,e.callbackNode=null,2}function d_(e,n){var a=e.callbackNode;if(Ks()&&e.callbackNode!==a)return null;var o=ye;return o=Ut(e,e===Ie?o:0),o===0?null:(t_(e,o,n),h_(e,dt()),e.callbackNode!=null&&e.callbackNode===a?d_.bind(null,e):null)}function p_(e,n){if(Ks())return null;t_(e,n,!0)}function px(e){Tx(function(){(ke&6)!==0?Wt(pt,e):e()})}function Tf(){return ls===0&&(ls=nn()),ls}function m_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function __(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function mx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=m_((c[sn]||null).action),S=o.submitter;S&&(n=(n=S[sn]||null)?m_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new el("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ls!==0){var N=S?__(c,S):new FormData(c);Lu(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(A.preventDefault(),N=S?__(c,S):new FormData(c),Lu(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var bf=0;bf<lp.length;bf++){var Af=lp[bf],_x=Af.toLowerCase(),gx=Af[0].toUpperCase()+Af.slice(1);pi(_x,"on"+gx)}pi(ip,"onAnimationEnd"),pi(ap,"onAnimationIteration"),pi(sp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Ov,"onTransitionRun"),pi(Pv,"onTransitionStart"),pi(zv,"onTransitionCancel"),pi(rp,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function g_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],N=A.instance,k=A.currentTarget;if(A=A.listener,N!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=k;try{f(c)}catch(ft){El(ft)}c.currentTarget=null,f=N}else for(S=0;S<o.length;S++){if(A=o[S],N=A.instance,k=A.currentTarget,A=A.listener,N!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=k;try{f(c)}catch(ft){El(ft)}c.currentTarget=null,f=N}}}}function Se(e,n){var a=n[bs];a===void 0&&(a=n[bs]=new Set);var o=e+"__bubble";a.has(o)||(v_(n,e,2,!1),a.add(o))}function Rf(e,n,a){var o=0;n&&(o|=4),v_(a,e,o,n)}var Il="_reactListening"+Math.random().toString(36).slice(2);function Cf(e){if(!e[Il]){e[Il]=!0,j.forEach(function(a){a!=="selectionchange"&&(vx.has(a)||Rf(a,!1,e),Rf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Il]||(n[Il]=!0,Rf("selectionchange",!1,n))}}function v_(e,n,a,o){switch(G_(n)){case 2:var c=Xx;break;case 8:c=Wx;break;default:c=Gf}a=c.bind(null,n,a,e),c=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function wf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===c||A.nodeType===8&&A.parentNode===c)break;if(S===4)for(S=o.return;S!==null;){var N=S.tag;if((N===3||N===4)&&(N=S.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;S=S.return}for(;A!==null;){if(S=zi(A),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){o=f=S;continue t}A=A.parentNode}}o=o.return}Nd(function(){var k=f,ft=qc(a),vt=[];t:{var it=op.get(e);if(it!==void 0){var lt=el,kt=e;switch(e){case"keypress":if($o(a)===0)break t;case"keydown":case"keyup":lt=fv;break;case"focusin":kt="focus",lt=$c;break;case"focusout":kt="blur",lt=$c;break;case"beforeblur":case"afterblur":lt=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=pv;break;case ip:case ap:case sp:lt=nv;break;case rp:lt=_v;break;case"scroll":case"scrollend":lt=Q0;break;case"wheel":lt=vv;break;case"copy":case"cut":case"paste":lt=av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Id;break;case"toggle":case"beforetoggle":lt=Sv}var ie=(n&4)!==0,qe=!ie&&(e==="scroll"||e==="scrollend"),K=ie?it!==null?it+"Capture":null:it;ie=[];for(var G=k,$;G!==null;){var _t=G;if($=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||$===null||K===null||(_t=Fr(G,K),_t!=null&&ie.push(Mo(G,_t,$))),qe)break;G=G.return}0<ie.length&&(it=new lt(it,kt,null,a,ft),vt.push({event:it,listeners:ie}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==Yc&&(kt=a.relatedTarget||a.fromElement)&&(zi(kt)||kt[Pi]))break t;if((lt||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(kt=a.relatedTarget||a.toElement,lt=k,kt=kt?zi(kt):null,kt!==null&&(qe=Z(kt),ie=kt.tag,kt!==qe||ie!==5&&ie!==27&&ie!==6)&&(kt=null)):(lt=null,kt=k),lt!==kt)){if(ie=zd,_t="onMouseLeave",K="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Id,_t="onPointerLeave",K="onPointerEnter",G="pointer"),qe=lt==null?it:W(lt),$=kt==null?it:W(kt),it=new ie(_t,G+"leave",lt,a,ft),it.target=qe,it.relatedTarget=$,_t=null,zi(ft)===k&&(ie=new ie(K,G+"enter",kt,a,ft),ie.target=$,ie.relatedTarget=qe,_t=ie),qe=_t,lt&&kt)e:{for(ie=lt,K=kt,G=0,$=ie;$;$=Js($))G++;for($=0,_t=K;_t;_t=Js(_t))$++;for(;0<G-$;)ie=Js(ie),G--;for(;0<$-G;)K=Js(K),$--;for(;G--;){if(ie===K||K!==null&&ie===K.alternate)break e;ie=Js(ie),K=Js(K)}ie=null}else ie=null;lt!==null&&x_(vt,it,lt,ie,!1),kt!==null&&qe!==null&&x_(vt,qe,kt,ie,!0)}}t:{if(it=k?W(k):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var Ht=Yd;else if(Xd(it))if(qd)Ht=Dv;else{Ht=Cv;var de=Rv}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?k&&Wc(k.elementType)&&(Ht=Yd):Ht=wv;if(Ht&&(Ht=Ht(e,k))){Wd(vt,Ht,a,ft);break t}de&&de(e,it,k),e==="focusout"&&k&&it.type==="number"&&k.memoizedProps.value!=null&&bn(it,"number",it.value)}switch(de=k?W(k):window,e){case"focusin":(Xd(de)||de.contentEditable==="true")&&(Ds=de,su=k,qr=null);break;case"focusout":qr=su=Ds=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,ep(vt,a,ft);break;case"selectionchange":if(Nv)break;case"keydown":case"keyup":ep(vt,a,ft)}var Yt;if(eu)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else ws?Vd(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Fd&&a.locale!=="ko"&&(ws||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&ws&&(Yt=Od()):(ua=ft,Kc="value"in ua?ua.value:ua.textContent,ws=!0)),de=Fl(k,Jt),0<de.length&&(Jt=new Bd(Jt,e,null,a,ft),vt.push({event:Jt,listeners:de}),Yt?Jt.data=Yt:(Yt=kd(a),Yt!==null&&(Jt.data=Yt)))),(Yt=Mv?Ev(e,a):Tv(e,a))&&(Jt=Fl(k,"onBeforeInput"),0<Jt.length&&(de=new Bd("onBeforeInput","beforeinput",null,a,ft),vt.push({event:de,listeners:Jt}),de.data=Yt)),mx(vt,e,k,a,ft)}g_(vt,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Fr(e,a),c!=null&&o.unshift(Mo(e,c,f)),c=Fr(e,n),c!=null&&o.push(Mo(e,c,f))),e=e.return}return o}function Js(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x_(e,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,N=A.alternate,k=A.stateNode;if(A=A.tag,N!==null&&N===o)break;A!==5&&A!==26&&A!==27||k===null||(N=k,c?(k=Fr(a,f),k!=null&&S.unshift(Mo(a,k,N))):c||(k=Fr(a,f),k!=null&&S.push(Mo(a,k,N)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var xx=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function S_(e){return(typeof e=="string"?e:""+e).replace(xx,`
`).replace(Sx,"")}function y_(e,n){return n=S_(n),S_(e)===n}function Hl(){}function Oe(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(e,""+o);break;case"className":He(e,"class",o);break;case"tabIndex":He(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":He(e,a,o);break;case"style":Ud(e,o,f);break;case"data":if(n!=="object"){He(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Qo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",c.name,c,null),Oe(e,n,"formEncType",c.formEncType,c,null),Oe(e,n,"formMethod",c.formMethod,c,null),Oe(e,n,"formTarget",c.formTarget,c,null)):(Oe(e,n,"encType",c.encType,c,null),Oe(e,n,"method",c.method,c,null),Oe(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Qo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Hl);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Qo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),ve(e,"popover",o);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ve(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Z0.get(a)||a,ve(e,a,o))}}function Df(e,n,a,o,c,f){switch(a){case"style":Ud(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Hl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ve(e,a,o)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,f,S,a,null)}}c&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var A=f=S=c=null,N=null,k=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":c=ft;break;case"type":S=ft;break;case"checked":N=ft;break;case"defaultChecked":k=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Oe(e,n,o,ft,a,null)}}Nn(e,f,A,N,k,S,c,!1),xe(e);return;case"select":Se("invalid",e),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Oe(e,n,c,A,a,null)}n=f,a=S,e.multiple=!!o,n!=null?Xe(e,!!o,n,!1):a!=null&&Xe(e,!!o,a,!0);return;case"textarea":Se("invalid",e),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Oe(e,n,S,A,a,null)}As(e,o,c,f),xe(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(o=a[N],o!=null))switch(N){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,N,o,a,null)}return;case"dialog":Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<yo.length;o++)Se(yo[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,k,o,a,null)}return;default:if(Wc(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Df(e,n,ft,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Oe(e,n,A,o,a,null))}function yx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,A=null,N=null,k=null,ft=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":N=vt;default:o.hasOwnProperty(lt)||Oe(e,n,lt,null,o,vt)}}for(var it in o){var lt=o[it];if(vt=a[it],o.hasOwnProperty(it)&&(lt!=null||vt!=null))switch(it){case"type":f=lt;break;case"name":c=lt;break;case"checked":k=lt;break;case"defaultChecked":ft=lt;break;case"value":S=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==vt&&Oe(e,n,it,lt,o,vt)}}Le(e,S,A,N,k,ft,f,c);return;case"select":lt=S=A=it=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":lt=N;default:o.hasOwnProperty(f)||Oe(e,n,f,null,o,N)}for(c in o)if(f=o[c],N=a[c],o.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==N&&Oe(e,n,c,f,o,N)}n=A,a=S,o=lt,it!=null?Xe(e,!!a,it,!1):!!o!=!!a&&(n!=null?Xe(e,!!a,n,!0):Xe(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Oe(e,n,A,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Oe(e,n,S,c,o,f)}xn(e,it,lt);return;case"option":for(var kt in a)if(it=a[kt],a.hasOwnProperty(kt)&&it!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Oe(e,n,kt,null,o,it)}for(N in o)if(it=o[N],lt=a[N],o.hasOwnProperty(N)&&it!==lt&&(it!=null||lt!=null))switch(N){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Oe(e,n,N,it,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)it=a[ie],a.hasOwnProperty(ie)&&it!=null&&!o.hasOwnProperty(ie)&&Oe(e,n,ie,null,o,it);for(k in o)if(it=o[k],lt=a[k],o.hasOwnProperty(k)&&it!==lt&&(it!=null||lt!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Oe(e,n,k,it,o,lt)}return;default:if(Wc(n)){for(var qe in a)it=a[qe],a.hasOwnProperty(qe)&&it!==void 0&&!o.hasOwnProperty(qe)&&Df(e,n,qe,void 0,o,it);for(ft in o)it=o[ft],lt=a[ft],!o.hasOwnProperty(ft)||it===lt||it===void 0&&lt===void 0||Df(e,n,ft,it,o,lt);return}}for(var K in a)it=a[K],a.hasOwnProperty(K)&&it!=null&&!o.hasOwnProperty(K)&&Oe(e,n,K,null,o,it);for(vt in o)it=o[vt],lt=a[vt],!o.hasOwnProperty(vt)||it===lt||it==null&&lt==null||Oe(e,n,vt,it,o,lt)}var Uf=null,Lf=null;function Gl(e){return e.nodeType===9?e:e.ownerDocument}function M_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Nf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Of=null;function Mx(){var e=window.event;return e&&e.type==="popstate"?e===Of?!1:(Of=e,!0):(Of=null,!1)}var T_=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0,b_=typeof Promise=="function"?Promise:void 0,Tx=typeof queueMicrotask=="function"?queueMicrotask:typeof b_<"u"?function(e){return b_.resolve(null).then(e).catch(bx)}:T_;function bx(e){setTimeout(function(){throw e})}function Pf(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(o===0){e.removeChild(c),Do(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=c}while(a);Do(n)}function zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),Ir(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ax(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function Rx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function A_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function R_(e,n,a){switch(n=Gl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var ci=new Map,C_=new Set;function Vl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Qi=q.d;q.d={f:Cx,r:wx,D:Dx,C:Ux,L:Lx,m:Nx,X:Px,S:Ox,M:zx};function Cx(){var e=Qi.f(),n=Ol();return e||n}function wx(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?em(n):Qi.r(e)}var $s=typeof document>"u"?null:document;function w_(e,n,a){var o=$s;if(o&&typeof n=="string"&&n){var c=hn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),C_.has(c)||(C_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Mn(n,"link",e),Q(n),o.head.appendChild(n)))}}function Dx(e){Qi.D(e),w_("dns-prefetch",e,null)}function Ux(e,n){Qi.C(e,n),w_("preconnect",e,n)}function Lx(e,n,a){Qi.L(e,n,a);var o=$s;if(o&&e&&n){var c='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+hn(a.imageSizes)+'"]')):c+='[href="'+hn(e)+'"]';var f=c;switch(n){case"style":f=tr(e);break;case"script":f=er(e)}ci.has(f)||(e=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Eo(f))||n==="script"&&o.querySelector(To(f))||(n=o.createElement("link"),Mn(n,"link",e),Q(n),o.head.appendChild(n)))}}function Nx(e,n){Qi.m(e,n);var a=$s;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+hn(o)+'"][href="'+hn(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=er(e)}if(!ci.has(f)&&(e=b({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}o=a.createElement("link"),Mn(o,"link",e),Q(o),a.head.appendChild(o)}}}function Ox(e,n,a){Qi.S(e,n,a);var o=$s;if(o&&e){var c=tt(o).hoistableStyles,f=tr(e);n=n||"default";var S=c.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Eo(f)))A.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&Bf(e,a);var N=S=o.createElement("link");Q(N),Mn(N,"link",e),N._p=new Promise(function(k,ft){N.onload=k,N.onerror=ft}),N.addEventListener("load",function(){A.loading|=1}),N.addEventListener("error",function(){A.loading|=2}),A.loading|=4,kl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(f,S)}}}function Px(e,n){Qi.X(e,n);var a=$s;if(a&&e){var o=tt(a).hoistableScripts,c=er(e),f=o.get(c);f||(f=a.querySelector(To(c)),f||(e=b({src:e,async:!0},n),(n=ci.get(c))&&If(e,n),f=a.createElement("script"),Q(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function zx(e,n){Qi.M(e,n);var a=$s;if(a&&e){var o=tt(a).hoistableScripts,c=er(e),f=o.get(c);f||(f=a.querySelector(To(c)),f||(e=b({src:e,async:!0,type:"module"},n),(n=ci.get(c))&&If(e,n),f=a.createElement("script"),Q(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function D_(e,n,a,o){var c=(c=ae.current)?Vl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=tr(a.href),a=tt(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=tr(a.href);var f=tt(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(Eo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||Bx(c,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=er(a),a=tt(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function tr(e){return'href="'+hn(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function U_(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Bx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),Q(n),e.head.appendChild(n))}function er(e){return'[src="'+hn(e)+'"]'}function To(e){return"script[async]"+e}function L_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+hn(a.href)+'"]');if(o)return n.instance=o,Q(o),o;var c=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Q(o),Mn(o,"style",c),kl(o,a.precedence,e),n.instance=o;case"stylesheet":c=tr(a.href);var f=e.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;o=U_(a),(c=ci.get(c))&&Bf(o,c),f=(e.ownerDocument||e).createElement("link"),Q(f);var S=f;return S._p=new Promise(function(A,N){S.onload=A,S.onerror=N}),Mn(f,"link",o),n.state.loading|=4,kl(f,a.precedence,e),n.instance=f;case"script":return f=er(a.src),(c=e.querySelector(To(f)))?(n.instance=c,Q(c),c):(o=a,(c=ci.get(f))&&(o=b({},a),If(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Q(c),Mn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,kl(o,a.precedence,e));return n.instance}function kl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function If(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Xl=null;function N_(e,n,a){if(Xl===null){var o=new Map,c=Xl=new Map;c.set(a,o)}else c=Xl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ka]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function O_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ix(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function P_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bo=null;function Fx(){}function Hx(e,n,a){if(bo===null)throw Error(s(475));var o=bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=tr(a.href),f=e.querySelector(Eo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Wl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,Q(f);return}f=e.ownerDocument||e,a=U_(a),(c=ci.get(c))&&Bf(a,c),f=f.createElement("link"),Q(f);var S=f;S._p=new Promise(function(A,N){S.onload=A,S.onerror=N}),Mn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Wl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Gx(){if(bo===null)throw Error(s(475));var e=bo;return e.stylesheets&&e.count===0&&Ff(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ff(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Wl(){if(this.count--,this.count===0){if(this.stylesheets)Ff(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yl=null;function Ff(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yl=new Map,n.forEach(Vx,e),Yl=null,Wl.call(e))}function Vx(e,n){if(!(n.state.loading&4)){var a=Yl.get(e);if(a)var o=a.get(null);else{a=new Map,Yl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=Wl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:M,Provider:null,Consumer:null,_currentValue:mt,_currentValue2:mt,_threadCount:0};function kx(e,n,a,o,c,f,S,A){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.hiddenUpdates=Dn(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function z_(e,n,a,o,c,f,S,A,N,k,ft,vt){return e=new kx(e,n,a,S,A,N,k,vt),n=1,f===!0&&(n|=24),f=oi(3,null,null,n),e.current=f,f.stateNode=e,n=_u(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ku(f),e}function B_(e){return e?(e=Ns,e):Ns}function I_(e,n,a,o,c,f){c=B_(c),o.context===null?o.context=c:o.pendingContext=c,o=va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=xa(e,o,n),a!==null&&(Pn(a,e,n),lo(a,e,n))}function F_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Hf(e,n){F_(e,n),(e=e.alternate)&&F_(e,n)}function H_(e){if(e.tag===13){var n=fa(e,67108864);n!==null&&Pn(n,e,67108864),Hf(e,67108864)}}var ql=!0;function Xx(e,n,a,o){var c=C.T;C.T=null;var f=q.p;try{q.p=2,Gf(e,n,a,o)}finally{q.p=f,C.T=c}}function Wx(e,n,a,o){var c=C.T;C.T=null;var f=q.p;try{q.p=8,Gf(e,n,a,o)}finally{q.p=f,C.T=c}}function Gf(e,n,a,o){if(ql){var c=Vf(o);if(c===null)wf(e,n,o,jl,a),V_(e,o);else if(qx(c,e,n,a,o))o.stopPropagation();else if(V_(e,o),n&4&&-1<Yx.indexOf(e)){for(;c!==null;){var f=R(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=wt(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var N=1<<31-Zt(S);A.entanglements[1]|=N,S&=~N}wi(f),(ke&6)===0&&(Ul=dt()+500,So(0))}}break;case 13:A=fa(f,2),A!==null&&Pn(A,f,2),Ol(),Hf(f,2)}if(f=Vf(o),f===null&&wf(e,n,o,jl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else wf(e,n,o,null,a)}}function Vf(e){return e=qc(e),kf(e)}var jl=null;function kf(e){if(jl=null,e=zi(e),e!==null){var n=Z(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=yt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return jl=e,null}function G_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case pt:return 2;case Gt:return 8;case Dt:case Bt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Xf=!1,Aa=null,Ra=null,Ca=null,Ro=new Map,Co=new Map,wa=[],Yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function V_(e,n){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=R(n),n!==null&&H_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function qx(e,n,a,o,c){switch(n){case"focusin":return Aa=wo(Aa,e,n,a,o,c),!0;case"dragenter":return Ra=wo(Ra,e,n,a,o,c),!0;case"mouseover":return Ca=wo(Ca,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Ro.set(f,wo(Ro.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Co.set(f,wo(Co.get(f)||null,e,n,a,o,c)),!0}return!1}function k_(e){var n=zi(e.target);if(n!==null){var a=Z(n);if(a!==null){if(n=a.tag,n===13){if(n=yt(a),n!==null){e.blockedOn=n,Zo(e.priority,function(){if(a.tag===13){var o=Qn(),c=fa(a,o);c!==null&&Pn(c,a,o),Hf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Vf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Yc=o,a.target.dispatchEvent(o),Yc=null}else return n=R(a),n!==null&&H_(n),e.blockedOn=a,!1;n.shift()}return!0}function X_(e,n,a){Zl(e)&&a.delete(n)}function jx(){Xf=!1,Aa!==null&&Zl(Aa)&&(Aa=null),Ra!==null&&Zl(Ra)&&(Ra=null),Ca!==null&&Zl(Ca)&&(Ca=null),Ro.forEach(X_),Co.forEach(X_)}function Kl(e,n){e.blockedOn===n&&(e.blockedOn=null,Xf||(Xf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jx)))}var Ql=null;function W_(e){Ql!==e&&(Ql=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(kf(o||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,Lu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Do(e){function n(N){return Kl(N,e)}Aa!==null&&Kl(Aa,e),Ra!==null&&Kl(Ra,e),Ca!==null&&Kl(Ca,e),Ro.forEach(n),Co.forEach(n);for(var a=0;a<wa.length;a++){var o=wa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)k_(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[sn]||null;if(typeof f=="function")S||W_(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[sn]||null)A=S.formAction;else if(kf(c)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),W_(a)}}}function Wf(e){this._internalRoot=e}Jl.prototype.render=Wf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Qn();I_(a,o,e,n,null,null)},Jl.prototype.unmount=Wf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Ks(),I_(e.current,2,null,e,null,null),Ol(),n[Pi]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Br();e={blockedOn:null,target:e,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,e),a===0&&k_(e)}};var Y_=t.version;if(Y_!=="19.0.0")throw Error(s(527,Y_,"19.0.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=at(n),e=e!==null?Tt(e):null,e=e===null?null:e.stateNode,e};var Zx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:zi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{qt=$l.inject(Zx),Vt=$l}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=cm,f=um,S=fm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=z_(e,1,!1,null,null,a,o,c,f,S,A,null),e[Pi]=n.current,Cf(e.nodeType===8?e.parentNode:e),new Wf(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",f=cm,S=um,A=fm,N=null,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(k=a.formState)),n=z_(e,1,!0,n,a??null,o,c,f,S,A,N,k),n.context=B_(null),a=n.current,o=Qn(),c=va(o),c.callback=null,xa(a,c,o),n.current.lanes=o,Un(n,o),wi(n),e[Pi]=n.current,Cf(e),new Jl(n)},Io.version="19.0.0",Io}var l0;function ZA(){if(l0)return Th.exports;l0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Th.exports=jA(),Th.exports}var KA=ZA();const Y0="http://192.168.1.105:8000",QA="http://orangepizero3w.local:8000",JA="camera-ui-2026.11.04",c0={trajectory:[],ground_truth:[],map_points:[],logs:[],device:{},transport:{}},q0=r=>(/^https?:\/\//i.test(r.trim())?r.trim():`http://${r.trim()}`).replace(/\/+$/,""),$A=()=>{const r=new URLSearchParams(window.location.search).get("backend");return q0(r||localStorage.getItem("orangepi-backend")||Y0)};function t1(r){const[t,i]=en.useState(c0),[s,l]=en.useState(!1),[u,h]=en.useState(0),[d,m]=en.useState({rtt_ms:null,telemetry_kbps:0,message_hz:0,disconnects:0}),p=en.useRef(null);return en.useEffect(()=>{let _=!1,v,x,M,E=0,w=0,y=0;l(!1),i(c0),m({rtt_ms:null,telemetry_kbps:0,message_hz:0,disconnects:0});const g=()=>{const P=new WebSocket(r.replace(/^http/i,"ws")+"/ws");p.current=P,P.onopen=()=>{l(!0),h(O=>O+1),x=setInterval(()=>{P.readyState===WebSocket.OPEN&&P.send(JSON.stringify({type:"ping",client_time_ms:performance.now()}))},1e3)},P.onmessage=O=>{E+=new Blob([O.data]).size,w+=1;try{const D=JSON.parse(O.data);if(D.type==="pong"){const H=Math.max(0,performance.now()-Number(D.client_time_ms));m(F=>({...F,rtt_ms:H}))}else D.type==="state"&&i(D)}catch{}},P.onclose=()=>{clearInterval(x),l(!1),_||(y+=1,m(O=>({...O,disconnects:y})),v=setTimeout(g,1200))},P.onerror=()=>P.close()};return M=setInterval(()=>{m(P=>({...P,telemetry_kbps:E*8/1e3,message_hz:w})),E=0,w=0},1e3),g(),()=>{_=!0,clearTimeout(v),clearInterval(x),clearInterval(M),p.current?.close()}},[r]),{state:t,connected:s,connectionRevision:u,network:d}}const Di=(r,t="")=>r==null?"—":`${typeof r=="number"?r.toFixed(1):r}${t}`;function gn({label:r,value:t,accent:i}){return ct.jsxs("div",{className:"metric",children:[ct.jsx("span",{children:r}),ct.jsx("strong",{className:i||"",children:t})]})}function u0({side:r,label:t,endpoint:i,connectionRevision:s}){const[l,u]=en.useState(0),[h,d]=en.useState(!1);en.useEffect(()=>{d(!1),u(p=>p+1)},[i,s]);const m=()=>{d(!1),window.setTimeout(()=>u(p=>p+1),1200)};return ct.jsxs("section",{className:"camera-card panel",children:[ct.jsxs("div",{className:"panel-title",children:[ct.jsx("span",{children:t}),ct.jsx("small",{children:"WIFI MJPEG · LIVE"})]}),ct.jsxs("div",{className:"camera-frame",children:[ct.jsx("img",{src:`${i}/stream/${r}.mjpg?session=${s}-${l}`,alt:`${t} camera stream`,onLoad:()=>d(!0),onError:m},`${i}-${r}-${l}`),!h&&ct.jsx("div",{className:"stream-status",children:"VIDEO RECONNECTING"}),ct.jsx("div",{className:"reticle"})]})]})}function e1(){const[r,t]=en.useState($A),[i,s]=en.useState(r),{state:l,connected:u,connectionRevision:h,network:d}=t1(r),m=(l.ground_truth?.length||0)>1,p=l.tracking==="tracking"?"good":l.tracking==="lost"?"bad":"warn",_=(v=i)=>{const x=q0(v);localStorage.setItem("orangepi-backend",x),s(x),t(x)};return ct.jsxs("main",{children:[ct.jsxs("header",{children:[ct.jsxs("div",{children:[ct.jsxs("div",{className:"eyebrow",children:["EECS 159A · LAPTOP DEBUG CONSOLE · ",JA]}),ct.jsx("h1",{children:"3D Reconstruction Drone"})]}),ct.jsxs("div",{className:`connection ${u?"online":"offline"}`,children:[ct.jsx("i",{}),u?"ORANGE PI CONNECTED":"RECONNECTING"]})]}),ct.jsxs("section",{className:"status-strip panel",children:[ct.jsx(gn,{label:"ENGINE",value:l.engine_label||"Waiting"}),ct.jsx(gn,{label:"TRACKING",value:(l.tracking||"idle").toUpperCase(),accent:p}),ct.jsx(gn,{label:"PROCESS",value:Di(l.processing_fps," FPS")}),ct.jsx(gn,{label:"RTT",value:Di(d.rtt_ms," ms")}),ct.jsx(gn,{label:"CPU",value:Di(l.device?.cpu_percent,"%")}),ct.jsx(gn,{label:"TEMP",value:Di(l.device?.temperature_c,"°C"),accent:(l.device?.temperature_c||0)>75?"bad":""})]}),ct.jsxs("section",{className:"workspace",children:[ct.jsxs("div",{className:"left-column",children:[ct.jsxs("div",{className:"camera-grid",children:[ct.jsx(u0,{side:"left",label:"CAMERA 0 · LEFT",endpoint:r,connectionRevision:h}),ct.jsx(u0,{side:"right",label:"CAMERA 1 · RIGHT",endpoint:r,connectionRevision:h})]}),ct.jsxs("section",{className:"panel viewport-panel",children:[ct.jsxs("div",{className:"panel-title",children:[ct.jsx("span",{children:"WORLD VIEW"}),ct.jsxs("div",{className:"legend",children:[ct.jsx("b",{className:"estimate"}),"Estimated ",m&&ct.jsxs(ct.Fragment,{children:[ct.jsx("b",{className:"truth"}),"Aligned ground truth"]})," ",ct.jsx("b",{className:"points"}),"Map points"]})]}),ct.jsx(W0,{state:l})]})]}),ct.jsxs("aside",{children:[ct.jsxs("section",{className:"panel endpoint-panel",children:[ct.jsxs("div",{className:"panel-title",children:[ct.jsx("span",{children:"ORANGE PI ENDPOINT"}),ct.jsx("small",{children:"Wi‑Fi 6 LAN"})]}),ct.jsxs("div",{className:"endpoint-form",children:[ct.jsx("input",{value:i,onChange:v=>s(v.target.value),onKeyDown:v=>v.key==="Enter"&&_()}),ct.jsx("button",{onClick:()=>_(),children:"CONNECT"})]}),ct.jsxs("div",{className:"endpoint-presets",children:[ct.jsx("button",{onClick:()=>_(Y0),children:"192.168.1.105"}),ct.jsx("button",{onClick:()=>_(QA),children:"mDNS"})]})]}),ct.jsxs("section",{className:"panel telemetry-panel",children:[ct.jsx("div",{className:"panel-title",children:ct.jsx("span",{children:"SLAM TELEMETRY"})}),ct.jsx(gn,{label:"ORB features",value:l.features??"—"}),ct.jsx(gn,{label:"Stereo depths",value:l.stereo_points??"—"}),ct.jsx(gn,{label:"PnP inliers",value:l.inliers??"—"}),ct.jsx(gn,{label:"Map points",value:l.map_points?.length??0}),m&&ct.jsx(gn,{label:"Position error",value:Di(l.position_error_m," m")}),m&&ct.jsx(gn,{label:"ATE RMSE",value:Di(l.ate_rmse_m," m")}),ct.jsxs("div",{className:"pose",children:[ct.jsx("span",{children:"POSITION · METRES"}),ct.jsx("code",{children:l.position?l.position.map(v=>Number(v).toFixed(3)).join("   "):"—   —   —"})]})]}),ct.jsxs("section",{className:"panel telemetry-panel",children:[ct.jsxs("div",{className:"panel-title",children:[ct.jsx("span",{children:"WIFI TRANSPORT"}),ct.jsx("small",{children:"SSH NOT IN DATA PATH"})]}),ct.jsx(gn,{label:"Round trip",value:Di(d.rtt_ms," ms")}),ct.jsx(gn,{label:"Telemetry",value:Di(d.telemetry_kbps," kbps")}),ct.jsx(gn,{label:"Messages",value:Di(d.message_hz," Hz")}),ct.jsx(gn,{label:"Video estimate",value:Di(l.transport?.video_estimated_kbps," kbps")}),ct.jsx(gn,{label:"Disconnects",value:d.disconnects})]}),ct.jsxs("section",{className:"panel logs-panel",children:[ct.jsxs("div",{className:"panel-title",children:[ct.jsx("span",{children:"EVENT LOG"}),ct.jsx("small",{children:"LIVE"})]}),ct.jsx("div",{className:"logs",children:(l.logs||[]).slice().reverse().map((v,x)=>ct.jsxs("div",{className:"log",children:[ct.jsx("time",{children:v.time}),ct.jsx("span",{children:v.message})]},`${v.time}-${x}`))})]})]})]}),ct.jsx("footer",{children:"LAPTOP UI · WIFI DATA PLANE · ORANGE PI ON-BOARD STEREO VO · LIVE STEREO INPUT"})]})}KA.createRoot(document.getElementById("root")).render(new URLSearchParams(location.search).has("legacy")?ct.jsx(e1,{}):ct.jsx(eS,{Scene:W0,Metric:gn}));
