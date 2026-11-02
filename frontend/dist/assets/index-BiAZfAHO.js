(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Gf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function qx(){if(X_)return Ro;X_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=t,Ro.jsx=i,Ro.jsxs=i,Ro}var W_;function Yx(){return W_||(W_=1,Gf.exports=qx()),Gf.exports}var Mt=Yx(),Vf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function jx(){if(q_)return oe;q_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(L,at,Tt){this.props=L,this.context=at,this.refs=w,this.updater=Tt||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,at){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,at,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=y.prototype;function P(L,at,Tt){this.props=L,this.context=at,this.refs=w,this.updater=Tt||M}var O=P.prototype=new _;O.constructor=P,E(O,y.prototype),O.isPureReactComponent=!0;var D=Array.isArray,F={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function B(L,at,Tt,Rt,Y,pt){return Tt=pt.ref,{$$typeof:r,type:L,key:at,ref:Tt!==void 0?Tt:null,props:pt}}function q(L,at){return B(L.type,at,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function b(L){var at={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Tt){return at[Tt]})}var I=/\/+/g;function st(L,at){return typeof L=="object"&&L!==null&&L.key!=null?b(""+L.key):at.toString(36)}function nt(){}function ct(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(nt,nt):(L.status="pending",L.then(function(at){L.status==="pending"&&(L.status="fulfilled",L.value=at)},function(at){L.status==="pending"&&(L.status="rejected",L.reason=at)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ft(L,at,Tt,Rt,Y){var pt=typeof L;(pt==="undefined"||pt==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(pt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case r:case t:xt=!0;break;case g:return xt=L._init,ft(xt(L._payload),at,Tt,Rt,Y)}}if(xt)return Y=Y(L),xt=Rt===""?"."+st(L,0):Rt,D(Y)?(Tt="",xt!=null&&(Tt=xt.replace(I,"$&/")+"/"),ft(Y,at,Tt,"",function(Qt){return Qt})):Y!=null&&(C(Y)&&(Y=q(Y,Tt+(Y.key==null||L&&L.key===Y.key?"":(""+Y.key).replace(I,"$&/")+"/")+xt)),at.push(Y)),1;xt=0;var bt=Rt===""?".":Rt+":";if(D(L))for(var Ct=0;Ct<L.length;Ct++)Rt=L[Ct],pt=bt+st(Rt,Ct),xt+=ft(Rt,at,Tt,pt,Y);else if(Ct=x(L),typeof Ct=="function")for(L=Ct.call(L),Ct=0;!(Rt=L.next()).done;)Rt=Rt.value,pt=bt+st(Rt,Ct++),xt+=ft(Rt,at,Tt,pt,Y);else if(pt==="object"){if(typeof L.then=="function")return ft(ct(L),at,Tt,Rt,Y);throw at=String(L),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return xt}function V(L,at,Tt){if(L==null)return L;var Rt=[],Y=0;return ft(L,Rt,"","",function(pt){return at.call(Tt,pt,Y++)}),Rt}function rt(L){if(L._status===-1){var at=L._result;at=at(),at.then(function(Tt){(L._status===0||L._status===-1)&&(L._status=1,L._result=Tt)},function(Tt){(L._status===0||L._status===-1)&&(L._status=2,L._result=Tt)}),L._status===-1&&(L._status=0,L._result=at)}if(L._status===1)return L._result.default;throw L._result}var Z=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function St(){}return oe.Children={map:V,forEach:function(L,at,Tt){V(L,function(){at.apply(this,arguments)},Tt)},count:function(L){var at=0;return V(L,function(){at++}),at},toArray:function(L){return V(L,function(at){return at})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},oe.Component=y,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,oe.act=function(){throw Error("act(...) is not supported in production builds of React.")},oe.cache=function(L){return function(){return L.apply(null,arguments)}},oe.cloneElement=function(L,at,Tt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Rt=E({},L.props),Y=L.key,pt=void 0;if(at!=null)for(xt in at.ref!==void 0&&(pt=void 0),at.key!==void 0&&(Y=""+at.key),at)!H.call(at,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&at.ref===void 0||(Rt[xt]=at[xt]);var xt=arguments.length-2;if(xt===1)Rt.children=Tt;else if(1<xt){for(var bt=Array(xt),Ct=0;Ct<xt;Ct++)bt[Ct]=arguments[Ct+2];Rt.children=bt}return B(L.type,Y,void 0,void 0,pt,Rt)},oe.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},oe.createElement=function(L,at,Tt){var Rt,Y={},pt=null;if(at!=null)for(Rt in at.key!==void 0&&(pt=""+at.key),at)H.call(at,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Y[Rt]=at[Rt]);var xt=arguments.length-2;if(xt===1)Y.children=Tt;else if(1<xt){for(var bt=Array(xt),Ct=0;Ct<xt;Ct++)bt[Ct]=arguments[Ct+2];Y.children=bt}if(L&&L.defaultProps)for(Rt in xt=L.defaultProps,xt)Y[Rt]===void 0&&(Y[Rt]=xt[Rt]);return B(L,pt,void 0,void 0,null,Y)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(L){return{$$typeof:d,render:L}},oe.isValidElement=C,oe.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:rt}},oe.memo=function(L,at){return{$$typeof:p,type:L,compare:at===void 0?null:at}},oe.startTransition=function(L){var at=F.T,Tt={};F.T=Tt;try{var Rt=L(),Y=F.S;Y!==null&&Y(Tt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(St,Z)}catch(pt){Z(pt)}finally{F.T=at}},oe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},oe.use=function(L){return F.H.use(L)},oe.useActionState=function(L,at,Tt){return F.H.useActionState(L,at,Tt)},oe.useCallback=function(L,at){return F.H.useCallback(L,at)},oe.useContext=function(L){return F.H.useContext(L)},oe.useDebugValue=function(){},oe.useDeferredValue=function(L,at){return F.H.useDeferredValue(L,at)},oe.useEffect=function(L,at){return F.H.useEffect(L,at)},oe.useId=function(){return F.H.useId()},oe.useImperativeHandle=function(L,at,Tt){return F.H.useImperativeHandle(L,at,Tt)},oe.useInsertionEffect=function(L,at){return F.H.useInsertionEffect(L,at)},oe.useLayoutEffect=function(L,at){return F.H.useLayoutEffect(L,at)},oe.useMemo=function(L,at){return F.H.useMemo(L,at)},oe.useOptimistic=function(L,at){return F.H.useOptimistic(L,at)},oe.useReducer=function(L,at,Tt){return F.H.useReducer(L,at,Tt)},oe.useRef=function(L){return F.H.useRef(L)},oe.useState=function(L){return F.H.useState(L)},oe.useSyncExternalStore=function(L,at,Tt){return F.H.useSyncExternalStore(L,at,Tt)},oe.useTransition=function(){return F.H.useTransition()},oe.version="19.0.0",oe}var Y_;function dd(){return Y_||(Y_=1,Vf.exports=jx()),Vf.exports}var Si=dd(),kf={exports:{}},Co={},Xf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function Zx(){return j_||(j_=1,(function(r){function t(V,rt){var Z=V.length;V.push(rt);t:for(;0<Z;){var St=Z-1>>>1,L=V[St];if(0<l(L,rt))V[St]=rt,V[Z]=L,Z=St;else break t}}function i(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var rt=V[0],Z=V.pop();if(Z!==rt){V[0]=Z;t:for(var St=0,L=V.length,at=L>>>1;St<at;){var Tt=2*(St+1)-1,Rt=V[Tt],Y=Tt+1,pt=V[Y];if(0>l(Rt,Z))Y<L&&0>l(pt,Rt)?(V[St]=pt,V[Y]=Z,St=Y):(V[St]=Rt,V[Tt]=Z,St=Tt);else if(Y<L&&0>l(pt,Z))V[St]=pt,V[Y]=Z,St=Y;else break t}}return rt}function l(V,rt){var Z=V.sortIndex-rt.sortIndex;return Z!==0?Z:V.id-rt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,M=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(V){for(var rt=i(p);rt!==null;){if(rt.callback===null)s(p);else if(rt.startTime<=V)s(p),rt.sortIndex=rt.expirationTime,t(m,rt);else break;rt=i(p)}}function D(V){if(w=!1,O(V),!E)if(i(m)!==null)E=!0,ct();else{var rt=i(p);rt!==null&&ft(D,rt.startTime-V)}}var F=!1,H=-1,B=5,q=-1;function C(){return!(r.unstable_now()-q<B)}function b(){if(F){var V=r.unstable_now();q=V;var rt=!0;try{t:{E=!1,w&&(w=!1,_(H),H=-1),M=!0;var Z=x;try{e:{for(O(V),v=i(m);v!==null&&!(v.expirationTime>V&&C());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var L=St(v.expirationTime<=V);if(V=r.unstable_now(),typeof L=="function"){v.callback=L,O(V),rt=!0;break e}v===i(m)&&s(m),O(V)}else s(m);v=i(m)}if(v!==null)rt=!0;else{var at=i(p);at!==null&&ft(D,at.startTime-V),rt=!1}}break t}finally{v=null,x=Z,M=!1}rt=void 0}}finally{rt?I():F=!1}}}var I;if(typeof P=="function")I=function(){P(b)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,nt=st.port2;st.port1.onmessage=b,I=function(){nt.postMessage(null)}}else I=function(){y(b,0)};function ct(){F||(F=!0,I())}function ft(V,rt){H=y(function(){V(r.unstable_now())},rt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,ct())},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return i(m)},r.unstable_next=function(V){switch(x){case 1:case 2:case 3:var rt=3;break;default:rt=x}var Z=x;x=rt;try{return V()}finally{x=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,rt){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Z=x;x=V;try{return rt()}finally{x=Z}},r.unstable_scheduleCallback=function(V,rt,Z){var St=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?St+Z:St):Z=St,V){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Z+L,V={id:g++,callback:rt,priorityLevel:V,startTime:Z,expirationTime:L,sortIndex:-1},Z>St?(V.sortIndex=Z,t(p,V),i(m)===null&&V===i(p)&&(w?(_(H),H=-1):w=!0,ft(D,Z-St))):(V.sortIndex=L,t(m,V),E||M||(E=!0,ct())),V},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(V){var rt=x;return function(){var Z=x;x=rt;try{return V.apply(this,arguments)}finally{x=Z}}}})(Wf)),Wf}var Z_;function Kx(){return Z_||(Z_=1,Xf.exports=Zx()),Xf.exports}var qf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function Qx(){if(K_)return bn;K_=1;var r=dd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,bn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},bn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},bn.requestFormReset=function(m){s.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.0.0",bn}var Q_;function Jx(){if(Q_)return qf.exports;Q_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),qf.exports=Qx(),qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function $x(){if(J_)return Co;J_=1;var r=Kx(),t=dd(),i=Jx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),M=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var B=Symbol.for("react.client.reference");function q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===B?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case d:return"Portal";case g:return"Profiler";case p:return"StrictMode";case w:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case E:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return n=e.displayName||null,n!==null?n:q(e.type)||"Memo";case P:n=e._payload,e=e._init;try{return q(e(n))}catch{}}return null}var C=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=Object.assign,I,st;function nt(e){if(I===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+I+e+st}var ct=!1;function ft(e,n){if(!e||ct)return"";ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(lt){var it=lt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(lt){it=lt}e.call(gt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var N=S.split(`
`),k=A.split(`
`);for(c=o=0;o<N.length&&!N[o].includes("DetermineComponentFrameRoot");)o++;for(;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;if(o===N.length||c===k.length)for(o=N.length-1,c=k.length-1;1<=o&&0<=c&&N[o]!==k[c];)c--;for(;1<=o&&0<=c;o--,c--)if(N[o]!==k[c]){if(o!==1||c!==1)do if(o--,c--,0>c||N[o]!==k[c]){var ut=`
`+N[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=c);break}}}finally{ct=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?nt(a):""}function V(e){switch(e.tag){case 26:case 27:case 5:return nt(e.type);case 16:return nt("Lazy");case 13:return nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return e=ft(e.type,!1),e;case 11:return e=ft(e.type.render,!1),e;case 1:return e=ft(e.type,!0),e;default:return""}}function rt(e){try{var n="";do n+=V(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Z(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function St(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function L(e){if(Z(e)!==e)throw Error(s(188))}function at(e){var n=e.alternate;if(!n){if(n=Z(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return L(c),e;if(f===o)return L(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,o=f;break}if(A===o){S=!0,o=c,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=c;break}if(A===o){S=!0,o=f,a=c;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function Tt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Tt(e),n!==null)return n;e=e.sibling}return null}var Rt=Array.isArray,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},xt=[],bt=-1;function Ct(e){return{current:e}}function Qt(e){0>bt||(e.current=xt[bt],xt[bt]=null,bt--)}function zt(e,n){bt++,xt[bt]=e.current,e.current=n}var Ee=Ct(null),we=Ct(null),ae=Ct(null),z=Ct(null);function _n(e,n){switch(zt(ae,n),zt(we,e),zt(Ee,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?x_(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=x_(e),n=S_(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Qt(Ee),zt(Ee,n)}function re(){Qt(Ee),Qt(we),Qt(ae)}function he(e){e.memoizedState!==null&&zt(z,e);var n=Ee.current,a=S_(n,e.type);n!==a&&(zt(we,e),zt(Ee,a))}function Xt(e){we.current===e&&(Qt(Ee),Qt(we)),z.current===e&&(Qt(z),Mo._currentValue=pt)}var De=Object.prototype.hasOwnProperty,Wt=r.unstable_scheduleCallback,U=r.unstable_cancelCallback,T=r.unstable_shouldYield,et=r.unstable_requestPaint,ht=r.unstable_now,vt=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,Gt=r.unstable_UserBlockingPriority,Dt=r.unstable_NormalPriority,Bt=r.unstable_LowPriority,_e=r.unstable_IdlePriority,Et=r.log,It=r.unstable_setDisableYieldValue,Yt=null,Vt=null;function Ft(e){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Yt,e,void 0,(e.current.flags&128)===128)}catch{}}function se(e){if(typeof Et=="function"&&It(e),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Yt,e)}catch{}}var Zt=Math.clz32?Math.clz32:Nt,Ue=Math.log,X=Math.LN2;function Nt(e){return e>>>=0,e===0?32:31-(Ue(e)/X|0)|0}var ot=128,_t=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ut(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,c=e.suspendedLanes,f=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var A=a&134217727;return A!==0?(a=A&~c,a!==0?o=wt(a):(f&=A,f!==0?o=wt(f):e||(S=A&~S,S!==0&&(o=wt(S))))):(A=a&~c,A!==0?o=wt(A):f!==0?o=wt(f):e||(S=a&~S,S!==0&&(o=wt(S)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:o}function $t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ge(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function en(){var e=ot;return ot<<=1,(ot&4194176)===0&&(ot=128),e}function Te(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function wn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xo(e,n,a,o,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,N=e.expirationTimes,k=e.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-Zt(a),gt=1<<ut;A[ut]=0,N[ut]=-1;var it=k[ut];if(it!==null)for(k[ut]=null,ut=0;ut<it.length;ut++){var lt=it[ut];lt!==null&&(lt.lane&=-536870913)}a&=~gt}o!==0&&Lr(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Lr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function Ti(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Zt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Ts(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nr(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:I_(e.type))}function Wo(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var Wn=Math.random().toString(36).slice(2),nn="__reactFiber$"+Wn,an="__reactProps$"+Wn,Pi="__reactContainer$"+Wn,bs="__reactEvents$"+Wn,Ic="__reactListeners$"+Wn,Fc="__reactHandles$"+Wn,qo="__reactResources$"+Wn,ka="__reactMarker$"+Wn;function Or(e){delete e[nn],delete e[an],delete e[bs],delete e[Ic],delete e[Fc]}function zi(e){var n=e[nn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=E_(e);e!==null;){if(a=e[nn])return a;e=E_(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[nn]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function W(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function tt(e){var n=e[qo];return n||(n=e[qo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[ka]=!0}var j=new Set,yt={};function At(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(yt[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},jt={};function ge(e){return De.call(jt,e)?!0:De.call(ee,e)?!1:te.test(e)?jt[e]=!0:(ee[e]=!0,!1)}function ve(e,n,a){if(ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function He(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function be(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sn(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xe(e){e._valueTracker||(e._valueTracker=sn(e))}function Bn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Un=/[\n"\\]/g;function fn(e){return e.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Le(e,n,a,o,c,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?En(e,S,ne(n)):a!=null?En(e,S,ne(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ne(A):e.removeAttribute("name")}function Ln(e,n,a,o,c,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function En(e,n,a){n==="number"&&hi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xe(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function gn(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function As(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Rt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function In(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var k0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||k0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Cd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Rd(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Rd(e,f,n[f])}function Hc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(e){return W0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Gc=null;function Vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,Cs=null;function wd(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[an]||null;t:switch(e=n.stateNode,n.type){case"input":if(Le(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[an]||null;if(!c)throw Error(s(90));Le(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Bn(o)}break t;case"textarea":gn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Xe(e,!!a.multiple,n,!1)}}}var kc=!1;function Dd(e,n,a){if(kc)return e(n,a);kc=!0;try{var o=e(n);return o}finally{if(kc=!1,(Rs!==null||Cs!==null)&&(Dl(),Rs&&(n=Rs,e=Cs,Cs=Rs=null,wd(n),e)))for(n=0;n<e.length;n++)wd(e[n])}}function Pr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[an]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Xc=!1;if(Ot)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Xc=!1}var ua=null,Wc=null,jo=null;function Ud(){if(jo)return jo;var e,n=Wc,a=n.length,o,c="value"in ua?ua.value:ua.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return jo=c.slice(e,1<o?1-o:void 0)}function Zo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function Ld(){return!1}function Fn(e){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:Ld,this.isPropagationStopped=Ld,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=Fn(Xa),Br=b({},Xa,{view:0,detail:0}),q0=Fn(Br),qc,Yc,Ir,Jo=b({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(qc=e.screenX-Ir.screenX,Yc=e.screenY-Ir.screenY):Yc=qc=0,Ir=e),qc)},movementY:function(e){return"movementY"in e?e.movementY:Yc}}),Nd=Fn(Jo),Y0=b({},Jo,{dataTransfer:0}),j0=Fn(Y0),Z0=b({},Br,{relatedTarget:0}),jc=Fn(Z0),K0=b({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=Fn(K0),J0=b({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$0=Fn(J0),tv=b({},Xa,{data:0}),Od=Fn(tv),ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function av(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=iv[e])?!!n[e]:!1}function Zc(){return av}var sv=b({},Br,{key:function(e){if(e.key){var n=ev[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rv=Fn(sv),ov=b({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=Fn(ov),lv=b({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),cv=Fn(lv),uv=b({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=Fn(uv),hv=b({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dv=Fn(hv),pv=b({},Xa,{newState:0,oldState:0}),mv=Fn(pv),_v=[9,13,27,32],Kc=Ot&&"CompositionEvent"in window,Fr=null;Ot&&"documentMode"in document&&(Fr=document.documentMode);var gv=Ot&&"TextEvent"in window&&!Fr,zd=Ot&&(!Kc||Fr&&8<Fr&&11>=Fr),Bd=" ",Id=!1;function Fd(e,n){switch(e){case"keyup":return _v.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ws=!1;function vv(e,n){switch(e){case"compositionend":return Hd(n);case"keypress":return n.which!==32?null:(Id=!0,Bd);case"textInput":return e=n.data,e===Bd&&Id?null:e;default:return null}}function xv(e,n){if(ws)return e==="compositionend"||!Kc&&Fd(e,n)?(e=Ud(),jo=Wc=ua=null,ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zd&&n.locale!=="ko"?null:n.data;default:return null}}var Sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sv[e.type]:n==="textarea"}function Vd(e,n,a,o){Rs?Cs?Cs.push(o):Cs=[o]:Rs=o,n=Pl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Hr=null,Gr=null;function yv(e){p_(e,0)}function $o(e){var n=W(e);if(Bn(n))return e}function kd(e,n){if(e==="change")return n}var Xd=!1;if(Ot){var Qc;if(Ot){var Jc="oninput"in document;if(!Jc){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),Jc=typeof Wd.oninput=="function"}Qc=Jc}else Qc=!1;Xd=Qc&&(!document.documentMode||9<document.documentMode)}function qd(){Hr&&(Hr.detachEvent("onpropertychange",Yd),Gr=Hr=null)}function Yd(e){if(e.propertyName==="value"&&$o(Gr)){var n=[];Vd(n,Gr,e,Vc(e)),Dd(yv,n)}}function Mv(e,n,a){e==="focusin"?(qd(),Hr=n,Gr=a,Hr.attachEvent("onpropertychange",Yd)):e==="focusout"&&qd()}function Ev(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Gr)}function Tv(e,n){if(e==="click")return $o(n)}function bv(e,n){if(e==="input"||e==="change")return $o(n)}function Av(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Av;function Vr(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!De.call(n,c)||!qn(e[c],n[c]))return!1}return!0}function jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zd(e,n){var a=jd(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=jd(a)}}function Kd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Kd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=hi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=hi(e.document)}return n}function $c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Rv(e,n){var a=Qd(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&Kd(n.ownerDocument.documentElement,n)){if(o!==null&&$c(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(o.start,c);o=o.end===void 0?f:Math.min(o.end,c),!a.extend&&f>o&&(c=o,o=f,f=c),c=Zd(n,f);var S=Zd(n,o);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),f>o?(a.addRange(e),a.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Cv=Ot&&"documentMode"in document&&11>=document.documentMode,Ds=null,tu=null,kr=null,eu=!1;function Jd(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||Ds==null||Ds!==hi(o)||(o=Ds,"selectionStart"in o&&$c(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),kr&&Vr(kr,o)||(kr=o,o=Pl(tu,"onSelect"),0<o.length&&(n=new Qo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ds)))}function Wa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Us={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},nu={},$d={};Ot&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function qa(e){if(nu[e])return nu[e];if(!Us[e])return e;var n=Us[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in $d)return nu[e]=n[a];return e}var tp=qa("animationend"),ep=qa("animationiteration"),np=qa("animationstart"),wv=qa("transitionrun"),Dv=qa("transitionstart"),Uv=qa("transitioncancel"),ip=qa("transitionend"),ap=new Map,sp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function di(e,n){ap.set(e,n),At(n,[e])}var $n=[],Ls=0,iu=0;function tl(){for(var e=Ls,n=iu=Ls=0;n<e;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&rp(a,c,f)}}function el(e,n,a,o){$n[Ls++]=e,$n[Ls++]=n,$n[Ls++]=a,$n[Ls++]=o,iu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function au(e,n,a,o){return el(e,n,a,o),nl(e)}function fa(e,n){return el(e,null,null,n),nl(e)}function rp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-Zt(a),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=a|536870912)}function nl(e){if(50<mo)throw mo=0,ff=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ns={},op=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=op.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rt(n)},op.set(e,n),n)}return{value:e,source:n,stack:rt(n)}}var Os=[],Ps=0,il=null,al=0,ei=[],ni=0,Ya=null,Bi=1,Ii="";function ja(e,n){Os[Ps++]=al,Os[Ps++]=il,il=e,al=n}function lp(e,n,a){ei[ni++]=Bi,ei[ni++]=Ii,ei[ni++]=Ya,Ya=e;var o=Bi;e=Ii;var c=32-Zt(o)-1;o&=~(1<<c),a+=1;var f=32-Zt(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Bi=1<<32-Zt(n)+c|a<<c|o,Ii=f+e}else Bi=1<<f|a<<c|o,Ii=e}function su(e){e.return!==null&&(ja(e,1),lp(e,1,0))}function ru(e){for(;e===il;)il=Os[--Ps],Os[Ps]=null,al=Os[--Ps],Os[Ps]=null;for(;e===Ya;)Ya=ei[--ni],ei[ni]=null,Ii=ei[--ni],ei[ni]=null,Bi=ei[--ni],ei[ni]=null}var Nn=null,vn=null,Ae=!1,pi=null,bi=!1,ou=Error(s(519));function Za(e){var n=Error(s(418,""));throw qr(ti(n,e)),ou}function cp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[nn]=e,n[an]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)Se(go[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),xe(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),As(n,o.value,o.defaultValue,o.children),xe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||v_(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=zl),n=!0):n=!1,n||Za(e)}function up(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 3:case 27:bi=!0;return;case 5:case 13:bi=!1;return;default:Nn=Nn.return}}function Xr(e){if(e!==Nn)return!1;if(!Ae)return up(e),Ae=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Cf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&vn&&Za(e),up(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){vn=_i(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}vn=null}}else vn=Nn?_i(e.stateNode.nextSibling):null;return!0}function Wr(){vn=Nn=null,Ae=!1}function qr(e){pi===null?pi=[e]:pi.push(e)}var Yr=Error(s(460)),fp=Error(s(474)),lu={then:function(){}};function hp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sl(){}function dp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(sl,sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Yr?Error(s(483)):e;default:if(typeof n.status=="string")n.then(sl,sl);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Yr?Error(s(483)):e}throw jr=n,Yr}}var jr=null;function pp(){if(jr===null)throw Error(s(459));var e=jr;return jr=null,e}var zs=null,Zr=0;function rl(e){var n=Zr;return Zr+=1,zs===null&&(zs=[]),dp(zs,e,n)}function Kr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ol(e,n){throw n.$$typeof===u?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function mp(e){var n=e._init;return n(e._payload)}function _p(e){function n(K,G){if(e){var $=K.deletions;$===null?(K.deletions=[G],K.flags|=16):$.push(G)}}function a(K,G){if(!e)return null;for(;G!==null;)n(K,G),G=G.sibling;return null}function o(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function c(K,G){return K=Ea(K,G),K.index=0,K.sibling=null,K}function f(K,G,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<G?(K.flags|=33554434,G):$):(K.flags|=33554434,G)):(K.flags|=1048576,G)}function S(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function A(K,G,$,mt){return G===null||G.tag!==6?(G=nf($,K.mode,mt),G.return=K,G):(G=c(G,$),G.return=K,G)}function N(K,G,$,mt){var Ht=$.type;return Ht===m?ut(K,G,$.props.children,mt,$.key):G!==null&&(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===P&&mp(Ht)===G.type)?(G=c(G,$.props),Kr(G,$),G.return=K,G):(G=bl($.type,$.key,$.props,null,K.mode,mt),Kr(G,$),G.return=K,G)}function k(K,G,$,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=af($,K.mode,mt),G.return=K,G):(G=c(G,$.children||[]),G.return=K,G)}function ut(K,G,$,mt,Ht){return G===null||G.tag!==7?(G=ss($,K.mode,mt,Ht),G.return=K,G):(G=c(G,$),G.return=K,G)}function gt(K,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=nf(""+G,K.mode,$),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case h:return $=bl(G.type,G.key,G.props,null,K.mode,$),Kr($,G),$.return=K,$;case d:return G=af(G,K.mode,$),G.return=K,G;case P:var mt=G._init;return G=mt(G._payload),gt(K,G,$)}if(Rt(G)||H(G))return G=ss(G,K.mode,$,null),G.return=K,G;if(typeof G.then=="function")return gt(K,rl(G),$);if(G.$$typeof===M)return gt(K,Ml(K,G),$);ol(K,G)}return null}function it(K,G,$,mt){var Ht=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:A(K,G,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case h:return $.key===Ht?N(K,G,$,mt):null;case d:return $.key===Ht?k(K,G,$,mt):null;case P:return Ht=$._init,$=Ht($._payload),it(K,G,$,mt)}if(Rt($)||H($))return Ht!==null?null:ut(K,G,$,mt,null);if(typeof $.then=="function")return it(K,G,rl($),mt);if($.$$typeof===M)return it(K,G,Ml(K,$),mt);ol(K,$)}return null}function lt(K,G,$,mt,Ht){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get($)||null,A(G,K,""+mt,Ht);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case h:return K=K.get(mt.key===null?$:mt.key)||null,N(G,K,mt,Ht);case d:return K=K.get(mt.key===null?$:mt.key)||null,k(G,K,mt,Ht);case P:var de=mt._init;return mt=de(mt._payload),lt(K,G,$,mt,Ht)}if(Rt(mt)||H(mt))return K=K.get($)||null,ut(G,K,mt,Ht,null);if(typeof mt.then=="function")return lt(K,G,$,rl(mt),Ht);if(mt.$$typeof===M)return lt(K,G,$,Ml(G,mt),Ht);ol(G,mt)}return null}function kt(K,G,$,mt){for(var Ht=null,de=null,qt=G,Jt=G=0,pn=null;qt!==null&&Jt<$.length;Jt++){qt.index>Jt?(pn=qt,qt=null):pn=qt.sibling;var Re=it(K,qt,$[Jt],mt);if(Re===null){qt===null&&(qt=pn);break}e&&qt&&Re.alternate===null&&n(K,qt),G=f(Re,G,Jt),de===null?Ht=Re:de.sibling=Re,de=Re,qt=pn}if(Jt===$.length)return a(K,qt),Ae&&ja(K,Jt),Ht;if(qt===null){for(;Jt<$.length;Jt++)qt=gt(K,$[Jt],mt),qt!==null&&(G=f(qt,G,Jt),de===null?Ht=qt:de.sibling=qt,de=qt);return Ae&&ja(K,Jt),Ht}for(qt=o(qt);Jt<$.length;Jt++)pn=lt(qt,K,Jt,$[Jt],mt),pn!==null&&(e&&pn.alternate!==null&&qt.delete(pn.key===null?Jt:pn.key),G=f(pn,G,Jt),de===null?Ht=pn:de.sibling=pn,de=pn);return e&&qt.forEach(function(Da){return n(K,Da)}),Ae&&ja(K,Jt),Ht}function ie(K,G,$,mt){if($==null)throw Error(s(151));for(var Ht=null,de=null,qt=G,Jt=G=0,pn=null,Re=$.next();qt!==null&&!Re.done;Jt++,Re=$.next()){qt.index>Jt?(pn=qt,qt=null):pn=qt.sibling;var Da=it(K,qt,Re.value,mt);if(Da===null){qt===null&&(qt=pn);break}e&&qt&&Da.alternate===null&&n(K,qt),G=f(Da,G,Jt),de===null?Ht=Da:de.sibling=Da,de=Da,qt=pn}if(Re.done)return a(K,qt),Ae&&ja(K,Jt),Ht;if(qt===null){for(;!Re.done;Jt++,Re=$.next())Re=gt(K,Re.value,mt),Re!==null&&(G=f(Re,G,Jt),de===null?Ht=Re:de.sibling=Re,de=Re);return Ae&&ja(K,Jt),Ht}for(qt=o(qt);!Re.done;Jt++,Re=$.next())Re=lt(qt,K,Jt,Re.value,mt),Re!==null&&(e&&Re.alternate!==null&&qt.delete(Re.key===null?Jt:Re.key),G=f(Re,G,Jt),de===null?Ht=Re:de.sibling=Re,de=Re);return e&&qt.forEach(function(Wx){return n(K,Wx)}),Ae&&ja(K,Jt),Ht}function Ye(K,G,$,mt){if(typeof $=="object"&&$!==null&&$.type===m&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case h:t:{for(var Ht=$.key;G!==null;){if(G.key===Ht){if(Ht=$.type,Ht===m){if(G.tag===7){a(K,G.sibling),mt=c(G,$.props.children),mt.return=K,K=mt;break t}}else if(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===P&&mp(Ht)===G.type){a(K,G.sibling),mt=c(G,$.props),Kr(mt,$),mt.return=K,K=mt;break t}a(K,G);break}else n(K,G);G=G.sibling}$.type===m?(mt=ss($.props.children,K.mode,mt,$.key),mt.return=K,K=mt):(mt=bl($.type,$.key,$.props,null,K.mode,mt),Kr(mt,$),mt.return=K,K=mt)}return S(K);case d:t:{for(Ht=$.key;G!==null;){if(G.key===Ht)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(K,G.sibling),mt=c(G,$.children||[]),mt.return=K,K=mt;break t}else{a(K,G);break}else n(K,G);G=G.sibling}mt=af($,K.mode,mt),mt.return=K,K=mt}return S(K);case P:return Ht=$._init,$=Ht($._payload),Ye(K,G,$,mt)}if(Rt($))return kt(K,G,$,mt);if(H($)){if(Ht=H($),typeof Ht!="function")throw Error(s(150));return $=Ht.call($),ie(K,G,$,mt)}if(typeof $.then=="function")return Ye(K,G,rl($),mt);if($.$$typeof===M)return Ye(K,G,Ml(K,$),mt);ol(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(K,G.sibling),mt=c(G,$),mt.return=K,K=mt):(a(K,G),mt=nf($,K.mode,mt),mt.return=K,K=mt),S(K)):a(K,G)}return function(K,G,$,mt){try{Zr=0;var Ht=Ye(K,G,$,mt);return zs=null,Ht}catch(qt){if(qt===Yr)throw qt;var de=ri(29,qt,null,K.mode);return de.lanes=mt,de.return=K,de}finally{}}}var Ka=_p(!0),gp=_p(!1),Bs=Ct(null),ll=Ct(0);function vp(e,n){e=Zi,zt(ll,e),zt(Bs,n),Zi=e|n.baseLanes}function cu(){zt(ll,Zi),zt(Bs,Bs.current)}function uu(){Zi=ll.current,Qt(Bs),Qt(ll)}var ii=Ct(null),Ai=null;function ha(e){var n=e.alternate;zt(rn,rn.current&1),zt(ii,e),Ai===null&&(n===null||Bs.current!==null||n.memoizedState!==null)&&(Ai=e)}function xp(e){if(e.tag===22){if(zt(rn,rn.current),zt(ii,e),Ai===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ai=e)}}else da()}function da(){zt(rn,rn.current),zt(ii,ii.current)}function Fi(e){Qt(ii),Ai===e&&(Ai=null),Qt(rn)}var rn=Ct(0);function cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Lv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Nv=r.unstable_scheduleCallback,Ov=r.unstable_NormalPriority,on={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fu(){return{controller:new Lv,data:new Map,refCount:0}}function Qr(e){e.refCount--,e.refCount===0&&Nv(Ov,function(){e.controller.abort()})}var Jr=null,hu=0,Is=0,Fs=null;function Pv(e,n){if(Jr===null){var a=Jr=[];hu=0,Is=xf(),Fs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return hu++,n.then(Sp,Sp),n}function Sp(){if(--hu===0&&Jr!==null){Fs!==null&&(Fs.status="fulfilled");var e=Jr;Jr=null,Is=0,Fs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function zv(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var yp=C.S;C.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Pv(e,n),yp!==null&&yp(e,n)};var Qa=Ct(null);function du(){var e=Qa.current;return e!==null?e:Ie.pooledCache}function ul(e,n){n===null?zt(Qa,Qa.current):zt(Qa,n.pool)}function Mp(){var e=du();return e===null?null:{parent:on._currentValue,pool:e}}var pa=0,ue=null,Ne=null,Qe=null,fl=!1,Hs=!1,Ja=!1,hl=0,$r=0,Gs=null,Bv=0;function Ze(){throw Error(s(321))}function pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function mu(e,n,a,o,c,f){return pa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?$a:ma,Ja=!1,f=a(o,c),Ja=!1,Hs&&(f=Tp(n,a,o,c)),Ep(e),f}function Ep(e){C.H=Ri;var n=Ne!==null&&Ne.next!==null;if(pa=0,Qe=Ne=ue=null,fl=!1,$r=0,Gs=null,n)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&yl(e)&&(hn=!0))}function Tp(e,n,a,o){ue=e;var c=0;do{if(Hs&&(Gs=null),$r=0,Hs=!1,25<=c)throw Error(s(301));if(c+=1,Qe=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}C.H=ts,f=n(a,o)}while(Hs);return f}function Iv(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?to(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ue.flags|=1024),n}function _u(){var e=hl!==0;return hl=0,e}function gu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function vu(e){if(fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}fl=!1}pa=0,Qe=Ne=ue=null,Hs=!1,$r=hl=0,Gs=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ue.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Je(){if(Ne===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=Qe===null?ue.memoizedState:Qe.next;if(n!==null)Qe=n,Ne=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Qe===null?ue.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}var dl;dl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function to(e){var n=$r;return $r+=1,Gs===null&&(Gs=[]),e=dp(Gs,e,n),n=ue,(Qe===null?n.memoizedState:Qe.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?$a:ma),e}function pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return to(e);if(e.$$typeof===M)return Tn(e)}throw Error(s(438,String(e)))}function xu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function ml(e){var n=Je();return Su(n,Ne,e)}function Su(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var A=S=null,N=null,k=n,ut=!1;do{var gt=k.lane&-536870913;if(gt!==k.lane?(Me&gt)===gt:(pa&gt)===gt){var it=k.revertLane;if(it===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),gt===Is&&(ut=!0);else if((pa&it)===it){k=k.next,it===Is&&(ut=!0);continue}else gt={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},N===null?(A=N=gt,S=f):N=N.next=gt,ue.lanes|=it,Ta|=it;gt=k.action,Ja&&a(f,gt),f=k.hasEagerState?k.eagerState:a(f,gt)}else it={lane:gt,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},N===null?(A=N=it,S=f):N=N.next=it,ue.lanes|=gt,Ta|=gt;k=k.next}while(k!==null&&k!==n);if(N===null?S=f:N.next=A,!qn(f,e.memoizedState)&&(hn=!0,ut&&(a=Fs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=N,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function yu(e){var n=Je(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);qn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function bp(e,n,a){var o=ue,c=Je(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!qn((Ne||c).memoizedState,a);if(S&&(c.memoizedState=a,hn=!0),c=c.queue,Tu(Cp.bind(null,o,c,e),[e]),c.getSnapshot!==n||S||Qe!==null&&Qe.memoizedState.tag&1){if(o.flags|=2048,Vs(9,Rp.bind(null,o,c,a,n),{destroy:void 0},null),Ie===null)throw Error(s(349));f||(pa&60)!==0||Ap(o,n,a)}return a}function Ap(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=dl(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Rp(e,n,a,o){n.value=a,n.getSnapshot=o,wp(n)&&Dp(e)}function Cp(e,n,a){return a(function(){wp(n)&&Dp(e)})}function wp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Dp(e){var n=fa(e,2);n!==null&&On(n,e,2)}function Mu(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Ja){se(!0);try{a()}finally{se(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function Up(e,n,a,o){return e.baseState=a,Su(e,Ne,typeof o=="function"?o:Hi)}function Fv(e,n,a,o,c){if(vl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};C.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Lp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Lp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=C.T,S={};C.T=S;try{var A=a(c,o),N=C.S;N!==null&&N(S,A),Np(e,n,A)}catch(k){Eu(e,n,k)}finally{C.T=f}}else try{f=a(c,o),Np(e,n,f)}catch(k){Eu(e,n,k)}}function Np(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Op(e,n,o)},function(o){return Eu(e,n,o)}):Op(e,n,a)}function Op(e,n,a){n.status="fulfilled",n.value=a,Pp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Lp(e,a)))}function Eu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Pp(n),n=n.next;while(n!==o)}e.action=null}function Pp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function zp(e,n){return n}function Bp(e,n){if(Ae){var a=Ie.formState;if(a!==null){t:{var o=ue;if(Ae){if(vn){e:{for(var c=vn,f=bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=_i(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){vn=_i(c.nextSibling),o=c.data==="F!";break t}}Za(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zp,lastRenderedState:n},a.queue=o,a=em.bind(null,ue,o),o.dispatch=a,o=Mu(!1),f=wu.bind(null,ue,!1,o.queue),o=Hn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Fv.bind(null,ue,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Ip(e){var n=Je();return Fp(n,Ne,e)}function Fp(e,n,a){n=Su(e,n,zp)[0],e=ml(Hi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?to(n):n;var o=Je(),c=o.queue,f=c.dispatch;return a!==o.memoizedState&&(ue.flags|=2048,Vs(9,Hv.bind(null,c,a),{destroy:void 0},null)),[n,f,e]}function Hv(e,n){e.action=n}function Hp(e){var n=Je(),a=Ne;if(a!==null)return Fp(n,a,e);Je(),n=n.memoizedState,a=Je();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Vs(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=ue.updateQueue,n===null&&(n=dl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Gp(){return Je().memoizedState}function _l(e,n,a,o){var c=Hn();ue.flags|=e,c.memoizedState=Vs(1|n,a,{destroy:void 0},o===void 0?null:o)}function gl(e,n,a,o){var c=Je();o=o===void 0?null:o;var f=c.memoizedState.inst;Ne!==null&&o!==null&&pu(o,Ne.memoizedState.deps)?c.memoizedState=Vs(n,a,f,o):(ue.flags|=e,c.memoizedState=Vs(1|n,a,f,o))}function Vp(e,n){_l(8390656,8,e,n)}function Tu(e,n){gl(2048,8,e,n)}function kp(e,n){return gl(4,2,e,n)}function Xp(e,n){return gl(4,4,e,n)}function Wp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qp(e,n,a){a=a!=null?a.concat([e]):null,gl(4,4,Wp.bind(null,n,e),a)}function bu(){}function Yp(e,n){var a=Je();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&pu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function jp(e,n){var a=Je();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&pu(n,o[1]))return o[0];if(o=e(),Ja){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[o,n],o}function Au(e,n,a){return a===void 0||(pa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Km(),ue.lanes|=e,Ta|=e,a)}function Zp(e,n,a,o){return qn(a,n)?a:Bs.current!==null?(e=Au(e,a,o),qn(e,n)||(hn=!0),e):(pa&42)===0?(hn=!0,e.memoizedState=a):(e=Km(),ue.lanes|=e,Ta|=e,n)}function Kp(e,n,a,o,c){var f=Y.p;Y.p=f!==0&&8>f?f:8;var S=C.T,A={};C.T=A,wu(e,!1,n,a);try{var N=c(),k=C.S;if(k!==null&&k(A,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ut=zv(N,o);eo(e,n,ut,Kn(e))}else eo(e,n,o,Kn(e))}catch(gt){eo(e,n,{then:function(){},status:"rejected",reason:gt},Kn())}finally{Y.p=f,C.T=S}}function Gv(){}function Ru(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=Qp(e).queue;Kp(e,c,n,pt,a===null?Gv:function(){return Jp(e),a(o)})}function Qp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:pt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Jp(e){var n=Qp(e).next.queue;eo(e,n,{},Kn())}function Cu(){return Tn(Mo)}function $p(){return Je().memoizedState}function tm(){return Je().memoizedState}function Vv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();e=va(a);var o=xa(n,e,a);o!==null&&(On(o,n,a),ao(o,n,a)),n={cache:fu()},e.payload=n;return}n=n.return}}function kv(e,n,a){var o=Kn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},vl(e)?nm(n,a):(a=au(e,n,a,o),a!==null&&(On(a,e,o),im(a,n,o)))}function em(e,n,a){var o=Kn();eo(e,n,a,o)}function eo(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(e))nm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(c.hasEagerState=!0,c.eagerState=A,qn(A,S))return el(e,n,c,0),Ie===null&&tl(),!1}catch{}finally{}if(a=au(e,n,c,o),a!==null)return On(a,e,o),im(a,n,o),!0}return!1}function wu(e,n,a,o){if(o={lane:2,revertLane:xf(),action:o,hasEagerState:!1,eagerState:null,next:null},vl(e)){if(n)throw Error(s(479))}else n=au(e,a,o,2),n!==null&&On(n,e,2)}function vl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function nm(e,n){Hs=fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function im(e,n,a){if((a&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ti(e,a)}}var Ri={readContext:Tn,use:pl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze};Ri.useCacheRefresh=Ze,Ri.useMemoCache=Ze,Ri.useHostTransitionStatus=Ze,Ri.useFormState=Ze,Ri.useActionState=Ze,Ri.useOptimistic=Ze;var $a={readContext:Tn,use:pl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Vp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_l(4194308,4,Wp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _l(4194308,4,e,n)},useInsertionEffect:function(e,n){_l(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(Ja){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var c=a(n);if(Ja){se(!0);try{a(n)}finally{se(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=kv.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Mu(e);var n=e.queue,a=em.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:bu,useDeferredValue:function(e,n){var a=Hn();return Au(a,e,n)},useTransition:function(){var e=Mu(!1);return e=Kp.bind(null,ue,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,c=Hn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ie===null)throw Error(s(349));(Me&60)!==0||Ap(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Vp(Cp.bind(null,o,f,e),[e]),o.flags|=2048,Vs(9,Rp.bind(null,o,f,a,n),{destroy:void 0},null),a},useId:function(){var e=Hn(),n=Ie.identifierPrefix;if(Ae){var a=Ii,o=Bi;a=(o&~(1<<32-Zt(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Bv++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Hn().memoizedState=Vv.bind(null,ue)}};$a.useMemoCache=xu,$a.useHostTransitionStatus=Cu,$a.useFormState=Bp,$a.useActionState=Bp,$a.useOptimistic=function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=wu.bind(null,ue,!0,a),a.dispatch=n,[e,n]};var ma={readContext:Tn,use:pl,useCallback:Yp,useContext:Tn,useEffect:Tu,useImperativeHandle:qp,useInsertionEffect:kp,useLayoutEffect:Xp,useMemo:jp,useReducer:ml,useRef:Gp,useState:function(){return ml(Hi)},useDebugValue:bu,useDeferredValue:function(e,n){var a=Je();return Zp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=ml(Hi)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:bp,useId:$p};ma.useCacheRefresh=tm,ma.useMemoCache=xu,ma.useHostTransitionStatus=Cu,ma.useFormState=Ip,ma.useActionState=Ip,ma.useOptimistic=function(e,n){var a=Je();return Up(a,Ne,e,n)};var ts={readContext:Tn,use:pl,useCallback:Yp,useContext:Tn,useEffect:Tu,useImperativeHandle:qp,useInsertionEffect:kp,useLayoutEffect:Xp,useMemo:jp,useReducer:yu,useRef:Gp,useState:function(){return yu(Hi)},useDebugValue:bu,useDeferredValue:function(e,n){var a=Je();return Ne===null?Au(a,e,n):Zp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=yu(Hi)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:bp,useId:$p};ts.useCacheRefresh=tm,ts.useMemoCache=xu,ts.useHostTransitionStatus=Cu,ts.useFormState=Hp,ts.useActionState=Hp,ts.useOptimistic=function(e,n){var a=Je();return Ne!==null?Up(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Du(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:b({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Uu={isMounted:function(e){return(e=e._reactInternals)?Z(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Kn(),c=va(o);c.payload=n,a!=null&&(c.callback=a),n=xa(e,c,o),n!==null&&(On(n,e,o),ao(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Kn(),c=va(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=xa(e,c,o),n!==null&&(On(n,e,o),ao(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Kn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(On(n,e,a),ao(n,e,a))}};function am(e,n,a,o,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Vr(a,o)||!Vr(c,f):!0}function sm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Uu.enqueueReplaceState(n,n.state,null)}function es(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=b({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function rm(e){xl(e)}function om(e){console.error(e)}function lm(e){xl(e)}function Sl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function cm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Lu(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(e,n)},a}function um(e){return e=va(e),e.tag=3,e}function fm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){cm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){cm(n,a,o),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Xv(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&io(n,a,c,!0),a=ii.current,a!==null){switch(a.tag){case 13:return Ai===null?pf():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===lu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),_f(e,o,c)),!1;case 22:return a.flags|=65536,o===lu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),_f(e,o,c)),!1}throw Error(s(435,a.tag))}return _f(e,o,c),pf(),!1}if(Ae)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==ou&&(e=Error(s(422),{cause:o}),qr(ti(e,a)))):(o!==ou&&(n=Error(s(423),{cause:o}),qr(ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ti(o,a),c=Lu(e.stateNode,o,c),Yu(e,c),qe!==4&&(qe=2)),!1;var f=Error(s(520),{cause:o});if(f=ti(f,a),ho===null?ho=[f]:ho.push(f),qe!==4&&(qe=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Lu(a.stateNode,o,e),Yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=um(c),fm(c,e,a,o),Yu(a,c),!1}a=a.return}while(a!==null);return!1}var hm=Error(s(461)),hn=!1;function xn(e,n,a,o){n.child=e===null?gp(n,null,a,o):Ka(n,e.child,a,o)}function dm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return is(n),o=mu(e,n,a,S,f,c),A=_u(),e!==null&&!hn?(gu(e,n,c),Gi(e,n,c)):(Ae&&A&&su(n),n.flags|=1,xn(e,n,o,c),n.child)}function pm(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!ef(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,mm(e,n,f,o,c)):(e=bl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Gu(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vr,a(S,o)&&e.ref===n.ref)return Gi(e,n,c)}return n.flags|=1,e=Ea(f,o),e.ref=n.ref,e.return=n,n.child=e}function mm(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Vr(f,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=f,Gu(e,c))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,Gi(e,n,c)}return Nu(e,n,a,o,c)}function _m(e,n,a){var o=n.pendingProps,c=o.children,f=(n.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if(no(e,n),o.mode==="hidden"||f){if((n.flags&128)!==0){if(o=S!==null?S.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return gm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(n,S!==null?S.cachePool:null),S!==null?vp(n,S):cu(),xp(n);else return n.lanes=n.childLanes=536870912,gm(e,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(ul(n,S.cachePool),vp(n,S),da(),n.memoizedState=null):(e!==null&&ul(n,null),cu(),da());return xn(e,n,c,a),n.child}function gm(e,n,a,o){var c=du();return c=c===null?null:{parent:on._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&ul(n,null),cu(),xp(n),e!==null&&io(e,n,o,!0),null}function no(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Nu(e,n,a,o,c){return is(n),a=mu(e,n,a,o,void 0,c),o=_u(),e!==null&&!hn?(gu(e,n,c),Gi(e,n,c)):(Ae&&o&&su(n),n.flags|=1,xn(e,n,a,c),n.child)}function vm(e,n,a,o,c,f){return is(n),n.updateQueue=null,a=Tp(n,o,a,c),Ep(e),o=_u(),e!==null&&!hn?(gu(e,n,f),Gi(e,n,f)):(Ae&&o&&su(n),n.flags|=1,xn(e,n,a,f),n.child)}function xm(e,n,a,o,c){if(is(n),n.stateNode===null){var f=Ns,S=a.contextType;typeof S=="object"&&S!==null&&(f=Tn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Uu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Wu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Tn(S):Ns,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Du(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Uu.enqueueReplaceState(f,f.state,null),ro(n,o,f,c),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,N=es(a,A);f.props=N;var k=f.context,ut=a.contextType;S=Ns,typeof ut=="object"&&ut!==null&&(S=Tn(ut));var gt=a.getDerivedStateFromProps;ut=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||k!==S)&&sm(n,f,o,S),ga=!1;var it=n.memoizedState;f.state=it,ro(n,o,f,c),so(),k=n.memoizedState,A||it!==k||ga?(typeof gt=="function"&&(Du(n,a,gt,o),k=n.memoizedState),(N=ga||am(n,a,N,o,it,k,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=k),f.props=o,f.state=k,f.context=S,o=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,qu(e,n),S=n.memoizedProps,ut=es(a,S),f.props=ut,gt=n.pendingProps,it=f.context,k=a.contextType,N=Ns,typeof k=="object"&&k!==null&&(N=Tn(k)),A=a.getDerivedStateFromProps,(k=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==gt||it!==N)&&sm(n,f,o,N),ga=!1,it=n.memoizedState,f.state=it,ro(n,o,f,c),so();var lt=n.memoizedState;S!==gt||it!==lt||ga||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof A=="function"&&(Du(n,a,A,o),lt=n.memoizedState),(ut=ga||am(n,a,ut,o,it,lt,N)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(k||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,lt,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,lt,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=N,o=ut):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,no(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ka(n,e.child,null,c),n.child=Ka(n,null,a,c)):xn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Gi(e,n,c),e}function Sm(e,n,a,o){return Wr(),n.flags|=256,xn(e,n,a,o),n.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function Pu(e){return{baseLanes:e,cachePool:Mp()}}function zu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function ym(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(c?ha(n):da(),Ae){var A=vn,N;if(N=A){t:{for(N=A,A=bi;N.nodeType!==8;){if(!A){A=null;break t}if(N=_i(N.nextSibling),N===null){A=null;break t}}A=N}A!==null?(n.memoizedState={dehydrated:A,treeContext:Ya!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912},N=ri(18,null,null,0),N.stateNode=A,N.return=n,n.child=N,Nn=n,vn=null,N=!0):N=!1}N||Za(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?n.lanes=16:n.lanes=536870912,null;Fi(n)}return A=o.children,o=o.fallback,c?(da(),c=n.mode,A=Iu({mode:"hidden",children:A},c),o=ss(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,c=n.child,c.memoizedState=Pu(a),c.childLanes=zu(e,S,a),n.memoizedState=Ou,o):(ha(n),Bu(n,A))}if(N=e.memoizedState,N!==null&&(A=N.dehydrated,A!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Fu(e,n,a)):n.memoizedState!==null?(da(),n.child=e.child,n.flags|=128,n=null):(da(),c=o.fallback,A=n.mode,o=Iu({mode:"visible",children:o.children},A),c=ss(c,A,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Ka(n,e.child,null,a),o=n.child,o.memoizedState=Pu(a),o.childLanes=zu(e,S,a),n.memoizedState=Ou,n=c);else if(ha(n),A.data==="$!"){if(S=A.nextSibling&&A.nextSibling.dataset,S)var k=S.dgst;S=k,o=Error(s(419)),o.stack="",o.digest=S,qr({value:o,source:null,stack:null}),n=Fu(e,n,a)}else if(hn||io(e,n,a,!1),S=(a&e.childLanes)!==0,hn||S){if(S=Ie,S!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==N.retryLane)throw N.retryLane=o,fa(e,o),On(S,e,o),hm}A.data==="$?"||pf(),n=Fu(e,n,a)}else A.data==="$?"?(n.flags|=128,n.child=e.child,n=sx.bind(null,e),A._reactRetry=n,n=null):(e=N.treeContext,vn=_i(A.nextSibling),Nn=n,Ae=!0,pi=null,bi=!1,e!==null&&(ei[ni++]=Bi,ei[ni++]=Ii,ei[ni++]=Ya,Bi=e.id,Ii=e.overflow,Ya=n),n=Bu(n,o.children),n.flags|=4096);return n}return c?(da(),c=o.fallback,A=n.mode,N=e.child,k=N.sibling,o=Ea(N,{mode:"hidden",children:o.children}),o.subtreeFlags=N.subtreeFlags&31457280,k!==null?c=Ea(k,c):(c=ss(c,A,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,A=e.child.memoizedState,A===null?A=Pu(a):(N=A.cachePool,N!==null?(k=on._currentValue,N=N.parent!==k?{parent:k,pool:k}:N):N=Mp(),A={baseLanes:A.baseLanes|a,cachePool:N}),c.memoizedState=A,c.childLanes=zu(e,S,a),n.memoizedState=Ou,o):(ha(n),a=e.child,e=a.sibling,a=Ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Bu(e,n){return n=Iu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Iu(e,n){return Ym(e,n,0,null)}function Fu(e,n,a){return Ka(n,e.child,null,a),e=Bu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Mm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ku(e.return,n,a)}function Hu(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Em(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(xn(e,n,o.children,a),o=rn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mm(e,a,n);else if(e.tag===19)Mm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(zt(rn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&cl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Hu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&cl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Hu(n,!0,a,null,f);break;case"together":Hu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(io(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Gu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function Wv(e,n,a){switch(n.tag){case 3:_n(n,n.stateNode.containerInfo),_a(n,on,e.memoizedState.cache),Wr();break;case 27:case 5:he(n);break;case 4:_n(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ym(e,n,a):(ha(n),e=Gi(e,n,a),e!==null?e.sibling:null);ha(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(io(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Em(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),zt(rn,rn.current),o)break;return null;case 22:case 23:return n.lanes=0,_m(e,n,a);case 24:_a(n,on,e.memoizedState.cache)}return Gi(e,n,a)}function Tm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Gu(e,a)&&(n.flags&128)===0)return hn=!1,Wv(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Ae&&(n.flags&1048576)!==0&&lp(n,al,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")ef(o)?(e=es(o,e),n.tag=1,n=xm(null,n,o,e,a)):(n.tag=0,n=Nu(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===E){n.tag=11,n=dm(null,n,o,e,a);break t}else if(c===_){n.tag=14,n=pm(null,n,o,e,a);break t}}throw n=q(o)||o,Error(s(306,n,""))}}return n;case 0:return Nu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=es(o,n.pendingProps),xm(e,n,o,c,a);case 3:t:{if(_n(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var f=n.pendingProps;c=n.memoizedState,o=c.element,qu(e,n),ro(n,f,null,a);var S=n.memoizedState;if(f=S.cache,_a(n,on,f),f!==c.cache&&Xu(n,[on],a,!0),so(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Sm(e,n,f,a);break t}else if(f!==o){o=ti(Error(s(424)),n),qr(o),n=Sm(e,n,f,a);break t}else for(vn=_i(n.stateNode.containerInfo.firstChild),Nn=n,Ae=!0,pi=null,bi=!0,a=gp(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Wr(),f===o){n=Gi(e,n,a);break t}xn(e,n,f,a)}n=n.child}return n;case 26:return no(e,n),e===null?(a=R_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Bl(ae.current).createElement(a),o[nn]=n,o[an]=e,Sn(o,a,e),Q(o),n.stateNode=o):n.memoizedState=R_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return he(n),e===null&&Ae&&(o=n.stateNode=T_(n.type,n.pendingProps,ae.current),Nn=n,bi=!0,vn=_i(o.firstChild)),o=n.pendingProps.children,e!==null||Ae?xn(e,n,o,a):n.child=Ka(n,null,o,a),no(e,n),n.child;case 5:return e===null&&Ae&&((c=o=vn)&&(o=yx(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,Nn=n,vn=_i(o.firstChild),bi=!1,c=!0):c=!1),c||Za(n)),he(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Cf(c,f)?o=null:S!==null&&Cf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=mu(e,n,Iv,null,null,a),Mo._currentValue=c),no(e,n),xn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=vn)&&(a=Mx(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Nn=n,vn=null,e=!0):e=!1),e||Za(n)),null;case 13:return ym(e,n,a);case 4:return _n(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ka(n,null,o,a):xn(e,n,o,a),n.child;case 11:return dm(e,n,n.type,n.pendingProps,a);case 7:return xn(e,n,n.pendingProps,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,_a(n,n.type,o.value),xn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,is(n),c=Tn(c),o=o(c),n.flags|=1,xn(e,n,o,a),n.child;case 14:return pm(e,n,n.type,n.pendingProps,a);case 15:return mm(e,n,n.type,n.pendingProps,a);case 19:return Em(e,n,a);case 22:return _m(e,n,a);case 24:return is(n),o=Tn(on),e===null?(c=du(),c===null&&(c=Ie,f=fu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Wu(n),_a(n,on,c)):((e.lanes&a)!==0&&(qu(e,n),ro(n,null,null,a),so()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),_a(n,on,o)):(o=f.cache,_a(n,on,o),o!==c.cache&&Xu(n,[on],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var Vu=Ct(null),ns=null,Vi=null;function _a(e,n,a){zt(Vu,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=Vu.current,Qt(Vu)}function ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Xu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var N=0;N<n.length;N++)if(A.context===n[N]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),ku(f.return,a,e),o||(S=null);break t}f=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),ku(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function io(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=c.type;qn(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===z.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}c=c.return}e!==null&&Xu(n,e,a,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function is(e){ns=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return bm(ns,e)}function Ml(e,n){return ns===null&&is(e),bm(e,n)}function bm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var ga=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ke&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=nl(e),rp(e,null,a),n}return el(e,o,n,a),nl(e)}function ao(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ti(e,a)}}function Yu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ju=!1;function so(){if(ju){var e=Fs;if(e!==null)throw e}}function ro(e,n,a,o){ju=!1;var c=e.updateQueue;ga=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var N=A,k=N.next;N.next=null,S===null?f=k:S.next=k,S=N;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,A=ut.lastBaseUpdate,A!==S&&(A===null?ut.firstBaseUpdate=k:A.next=k,ut.lastBaseUpdate=N))}if(f!==null){var gt=c.baseState;S=0,ut=k=N=null,A=f;do{var it=A.lane&-536870913,lt=it!==A.lane;if(lt?(Me&it)===it:(o&it)===it){it!==0&&it===Is&&(ju=!0),ut!==null&&(ut=ut.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var kt=e,ie=A;it=n;var Ye=a;switch(ie.tag){case 1:if(kt=ie.payload,typeof kt=="function"){gt=kt.call(Ye,gt,it);break t}gt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ie.payload,it=typeof kt=="function"?kt.call(Ye,gt,it):kt,it==null)break t;gt=b({},gt,it);break t;case 2:ga=!0}}it=A.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ut===null?(k=ut=lt,N=gt):ut=ut.next=lt,S|=it;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ut===null&&(N=gt),c.baseState=N,c.firstBaseUpdate=k,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ta|=S,e.lanes=S,e.memoizedState=gt}}function Am(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Rm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Am(a[e],n)}function oo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(A){Be(n,n.return,A)}}function Sa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var N=a;try{A()}catch(k){Be(c,N,k)}}}o=o.next}while(o!==f)}}catch(k){Be(n,n.return,k)}}function Cm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Rm(n,a)}catch(o){Be(e,e.return,o)}}}function wm(e,n,a){a.props=es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function as(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(f){Be(e,n,f)}}function Yn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Be(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(e,n,c)}else a.current=null}function Dm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Be(e,e.return,c)}}function Um(e,n,a){try{var o=e.stateNode;_x(o,e.type,a,n),o[an]=n}catch(c){Be(e,e.return,c)}}function Lm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Zu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ku(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zl));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Ku(e,n,a),e=e.sibling;e!==null;)Ku(e,n,a),e=e.sibling}function El(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(El(e,n,a),e=e.sibling;e!==null;)El(e,n,a),e=e.sibling}var Xi=!1,We=!1,Qu=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,dn=null,Om=!1;function qv(e,n){if(e=e.containerInfo,Af=kl,e=Qd(e),$c(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,N=-1,k=0,ut=0,gt=e,it=null;e:for(;;){for(var lt;gt!==a||c!==0&&gt.nodeType!==3||(A=S+c),gt!==f||o!==0&&gt.nodeType!==3||(N=S+o),gt.nodeType===3&&(S+=gt.nodeValue.length),(lt=gt.firstChild)!==null;)it=gt,gt=lt;for(;;){if(gt===e)break e;if(it===a&&++k===c&&(A=S),it===f&&++ut===o&&(N=S),(lt=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=lt}a=A===-1||N===-1?null:{start:A,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:e,selectionRange:a},kl=!1,dn=n;dn!==null;)if(n=dn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,dn=e;else for(;dn!==null;){switch(n=dn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var kt=es(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(kt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Be(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Uf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,dn=e;break}dn=n.return}return kt=Om,Om=!1,kt}function Pm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:qi(e,a),o&4&&oo(5,a);break;case 1:if(qi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(A){Be(a,a.return,A)}else{var c=es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(A){Be(a,a.return,A)}}o&64&&Cm(a),o&512&&as(a,a.return);break;case 3:if(qi(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Rm(o,e)}catch(A){Be(a,a.return,A)}}break;case 26:qi(e,a),o&512&&as(a,a.return);break;case 27:case 5:qi(e,a),n===null&&o&4&&Dm(a),o&512&&as(a,a.return);break;case 12:qi(e,a);break;case 13:qi(e,a),o&4&&Im(e,a);break;case 22:if(c=a.memoizedState!==null||Xi,!c){n=n!==null&&n.memoizedState!==null||We;var f=Xi,S=We;Xi=c,(We=n)&&!S?ya(e,a,(a.subtreeFlags&8772)!==0):qi(e,a),Xi=f,We=S}o&512&&(a.memoizedProps.mode==="manual"?as(a,a.return):Yn(a,a.return));break;default:qi(e,a)}}function zm(e){var n=e.alternate;n!==null&&(e.alternate=null,zm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Or(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,jn=!1;function Wi(e,n,a){for(a=a.child;a!==null;)Bm(e,n,a),a=a.sibling}function Bm(e,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Yt,a)}catch{}switch(a.tag){case 26:We||Yn(a,n),Wi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||Yn(a,n);var o=$e,c=jn;for($e=a.stateNode,Wi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Or(a),$e=o,jn=c;break;case 5:We||Yn(a,n);case 6:c=$e;var f=jn;if($e=null,Wi(e,n,a),$e=c,jn=f,$e!==null)if(jn)try{e=$e,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(S){Be(a,n,S)}else try{$e.removeChild(a.stateNode)}catch(S){Be(a,n,S)}break;case 18:$e!==null&&(jn?(n=$e,a=a.stateNode,n.nodeType===8?Df(n.parentNode,a):n.nodeType===1&&Df(n,a),Ao(n)):Df($e,a.stateNode));break;case 4:o=$e,c=jn,$e=a.stateNode.containerInfo,jn=!0,Wi(e,n,a),$e=o,jn=c;break;case 0:case 11:case 14:case 15:We||Sa(2,a,n),We||Sa(4,a,n),Wi(e,n,a);break;case 1:We||(Yn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&wm(a,n,o)),Wi(e,n,a);break;case 21:Wi(e,n,a);break;case 22:We||Yn(a,n),We=(o=We)||a.memoizedState!==null,Wi(e,n,a),We=o;break;default:Wi(e,n,a)}}function Im(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(a){Be(n,n.return,a)}}function Yv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Nm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Nm),n;default:throw Error(s(435,e.tag))}}function Ju(e,n){var a=Yv(e);n.forEach(function(o){var c=rx.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function ai(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:case 5:$e=A.stateNode,jn=!1;break t;case 3:$e=A.stateNode.containerInfo,jn=!0;break t;case 4:$e=A.stateNode.containerInfo,jn=!0;break t}A=A.return}if($e===null)throw Error(s(160));Bm(f,S,c),$e=null,jn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Fm(n,e),n=n.sibling}var mi=null;function Fm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ai(n,e),si(e),o&4&&(Sa(3,e,e.return),oo(3,e),Sa(5,e,e.return));break;case 1:ai(n,e),si(e),o&512&&(We||a===null||Yn(a,a.return)),o&64&&Xi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=mi;if(ai(n,e),si(e),o&512&&(We||a===null||Yn(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ka]||f[nn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Sn(f,o,a),f[nn]=e,Q(f),o=f;break t;case"link":var S=D_("link","href",c).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=c.createElement(o),Sn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=D_("meta","content",c).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=c.createElement(o),Sn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[nn]=e,Q(f),o=f}e.stateNode=o}else U_(c,e.type,e.stateNode);else e.stateNode=w_(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?U_(c,e.type,e.stateNode):w_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Um(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var N=c.firstChild;N;){var k=N.nextSibling,ut=N.nodeName;N[ka]||ut==="HEAD"||ut==="BODY"||ut==="SCRIPT"||ut==="STYLE"||ut==="LINK"&&N.rel.toLowerCase()==="stylesheet"||c.removeChild(N),N=k}for(var gt=e.type,it=c.attributes;it.length;)c.removeAttributeNode(it[0]);Sn(c,gt,f),c[nn]=e,c[an]=f}catch(kt){Be(e,e.return,kt)}}case 5:if(ai(n,e),si(e),o&512&&(We||a===null||Yn(a,a.return)),e.flags&32){c=e.stateNode;try{In(c,"")}catch(kt){Be(e,e.return,kt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Um(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Qu=!0);break;case 6:if(ai(n,e),si(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){Be(e,e.return,kt)}}break;case 3:if(Hl=null,c=mi,mi=Il(n.containerInfo),ai(n,e),mi=c,si(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(kt){Be(e,e.return,kt)}Qu&&(Qu=!1,Hm(e));break;case 4:o=mi,mi=Il(e.stateNode.containerInfo),ai(n,e),si(e),mi=o;break;case 12:ai(n,e),si(e);break;case 13:ai(n,e),si(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lf=ht()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ju(e,o)));break;case 22:if(o&512&&(We||a===null||Yn(a,a.return)),N=e.memoizedState!==null,k=a!==null&&a.memoizedState!==null,ut=Xi,gt=We,Xi=ut||N,We=gt||k,ai(n,e),We=gt,Xi=ut,si(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=Xi||We,a===null||k||n||ks(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){k=a=n;try{if(c=k.stateNode,N)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=k.stateNode,A=k.memoizedProps.style;var lt=A!=null&&A.hasOwnProperty("display")?A.display:null;S.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(kt){Be(k,k.return,kt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=N?"":k.memoizedProps}catch(kt){Be(k,k.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ju(e,a))));break;case 19:ai(n,e),si(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ju(e,o)));break;case 21:break;default:ai(n,e),si(e)}}function si(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Lm(a)){var o=a;break t}a=a.return}throw Error(s(160))}switch(o.tag){case 27:var c=o.stateNode,f=Zu(e);El(e,f,c);break;case 5:var S=o.stateNode;o.flags&32&&(In(S,""),o.flags&=-33);var A=Zu(e);El(e,A,S);break;case 3:case 4:var N=o.stateNode.containerInfo,k=Zu(e);Ku(e,k,N);break;default:throw Error(s(161))}}}catch(ut){Be(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Hm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Pm(e,n.alternate,n),n=n.sibling}function ks(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),ks(n);break;case 1:Yn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&wm(n,n.return,a),ks(n);break;case 26:case 27:case 5:Yn(n,n.return),ks(n);break;case 22:Yn(n,n.return),n.memoizedState===null&&ks(n);break;default:ks(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ya(c,f,a),oo(4,f);break;case 1:if(ya(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(k){Be(o,o.return,k)}if(o=f,c=o.updateQueue,c!==null){var A=o.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)Am(N[c],A)}catch(k){Be(o,o.return,k)}}a&&S&64&&Cm(f),as(f,f.return);break;case 26:case 27:case 5:ya(c,f,a),a&&o===null&&S&4&&Dm(f),as(f,f.return);break;case 12:ya(c,f,a);break;case 13:ya(c,f,a),a&&S&4&&Im(c,f);break;case 22:f.memoizedState===null&&ya(c,f,a),as(f,f.return);break;default:ya(c,f,a)}n=n.sibling}}function $u(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qr(a))}function tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e))}function Ma(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gm(e,n,a,o),n=n.sibling}function Gm(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ma(e,n,a,o),c&2048&&oo(9,n);break;case 3:Ma(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e)));break;case 12:if(c&2048){Ma(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Be(n,n.return,N)}}else Ma(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Ma(e,n,a,o):lo(e,n):f._visibility&4?Ma(e,n,a,o):(f._visibility|=4,Xs(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&$u(n.alternate,n);break;case 24:Ma(e,n,a,o),c&2048&&tf(n.alternate,n);break;default:Ma(e,n,a,o)}}function Xs(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,A=a,N=o,k=S.flags;switch(S.tag){case 0:case 11:case 15:Xs(f,S,A,N,c),oo(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&4?Xs(f,S,A,N,c):lo(f,S):(ut._visibility|=4,Xs(f,S,A,N,c)),c&&k&2048&&$u(S.alternate,S);break;case 24:Xs(f,S,A,N,c),c&&k&2048&&tf(S.alternate,S);break;default:Xs(f,S,A,N,c)}n=n.sibling}}function lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:lo(a,o),c&2048&&$u(o.alternate,o);break;case 24:lo(a,o),c&2048&&tf(o.alternate,o);break;default:lo(a,o)}n=n.sibling}}var co=8192;function Ws(e){if(e.subtreeFlags&co)for(e=e.child;e!==null;)Vm(e),e=e.sibling}function Vm(e){switch(e.tag){case 26:Ws(e),e.flags&co&&e.memoizedState!==null&&Px(mi,e.memoizedState,e.memoizedProps);break;case 5:Ws(e);break;case 3:case 4:var n=mi;mi=Il(e.stateNode.containerInfo),Ws(e),mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Ws(e),co=n):Ws(e));break;default:Ws(e)}}function km(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];dn=o,Wm(o,e)}km(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xm(e),e=e.sibling}function Xm(e){switch(e.tag){case 0:case 11:case 15:uo(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:uo(e);break;case 12:uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Tl(e)):uo(e);break;default:uo(e)}}function Tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];dn=o,Wm(o,e)}km(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Tl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Tl(n));break;default:Tl(n)}e=e.sibling}}function Wm(e,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Qr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,dn=o;else t:for(a=e;dn!==null;){o=dn;var c=o.sibling,f=o.return;if(zm(o),o===a){dn=null;break t}if(c!==null){c.return=f,dn=c;break t}dn=f}}}function jv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,n,a,o){return new jv(e,n,a,o)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,n){var a=e.alternate;return a===null?(a=ri(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qm(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bl(e,n,a,o,c,f){var S=0;if(o=e,typeof e=="function")ef(e)&&(S=1);else if(typeof e=="string")S=Nx(e,a,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return ss(a.children,c,f,n);case p:S=8,c|=24;break;case g:return e=ri(12,a,n,c|2),e.elementType=g,e.lanes=f,e;case w:return e=ri(13,a,n,c),e.elementType=w,e.lanes=f,e;case y:return e=ri(19,a,n,c),e.elementType=y,e.lanes=f,e;case O:return Ym(a,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case M:S=10;break t;case x:S=9;break t;case E:S=11;break t;case _:S=14;break t;case P:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ri(S,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function ss(e,n,a,o){return e=ri(7,e,o,n),e.lanes=a,e}function Ym(e,n,a,o){e=ri(22,e,o,n),e.elementType=O,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(s(456));if((c._pendingVisibility&2)===0){var S=fa(f,2);S!==null&&(c._pendingVisibility|=2,On(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(s(456));if((c._pendingVisibility&2)!==0){var S=fa(f,2);S!==null&&(c._pendingVisibility&=-3,On(S,f,2))}}};return e.stateNode=c,e}function nf(e,n,a){return e=ri(6,e,null,n),e.lanes=a,e}function af(e,n,a){return n=ri(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yi(e){e.flags|=4}function jm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!L_(n)){if(n=ii.current,n!==null&&((Me&4194176)===Me?Ai!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Ai))throw jr=lu,fp;e.flags|=8192}}function Al(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Te():536870912,e.lanes|=n,Ys|=n)}function fo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Zv(e,n,a){var o=n.pendingProps;switch(ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(on),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pi!==null&&(hf(pi),pi=null))),Ve(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(Ve(n),jm(n,a)):(Ve(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),Ve(n),jm(n,a)):(Ve(n),n.flags&=-16777217):(e.memoizedProps!==o&&Yi(n),Ve(n),n.flags&=-16777217),null;case 27:Xt(n),a=ae.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}e=Ee.current,Xr(n)?cp(n):(e=T_(c,o,a),n.stateNode=e,Yi(n))}return Ve(n),null;case 5:if(Xt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}if(e=Ee.current,Xr(n))cp(n);else{switch(c=Bl(ae.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[nn]=n,e[an]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Sn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return Ve(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=ae.current,Xr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Nn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[nn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||v_(e.nodeValue,a)),e||Za(n)}else e=Bl(e).createTextNode(o),e[nn]=n,n.stateNode=e}return Ve(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Xr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[nn]=n}else Wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),c=!1}else pi!==null&&(hf(pi),pi=null),c=!0;if(!c)return n.flags&256?(Fi(n),n):(Fi(n),null)}if(Fi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Al(n,n.updateQueue),Ve(n),null;case 4:return re(),e===null&&Ef(n.stateNode.containerInfo),Ve(n),null;case 10:return ki(n.type),Ve(n),null;case 19:if(Qt(rn),c=n.memoizedState,c===null)return Ve(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)fo(c,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=cl(e),f!==null){for(n.flags|=128,fo(c,!1),e=f.updateQueue,n.updateQueue=e,Al(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)qm(a,e),a=a.sibling;return zt(rn,rn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ht()>Rl&&(n.flags|=128,o=!0,fo(c,!1),n.lanes=4194304)}else{if(!o)if(e=cl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Al(n,e),fo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ae)return Ve(n),null}else 2*ht()-c.renderingStartTime>Rl&&a!==536870912&&(n.flags|=128,o=!0,fo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ht(),n.sibling=null,e=rn.current,zt(rn,o?e&1|2:e&1),n):(Ve(n),null);case 22:case 23:return Fi(n),uu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&Al(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Qt(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(on),Ve(n),null;case 25:return null}throw Error(s(156,n.tag))}function Kv(e,n){switch(ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(on),re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Xt(n),null;case 13:if(Fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Wr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Qt(rn),null;case 4:return re(),null;case 10:return ki(n.type),null;case 22:case 23:return Fi(n),uu(),e!==null&&Qt(Qa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(on),null;case 25:return null;default:return null}}function Zm(e,n){switch(ru(n),n.tag){case 3:ki(on),re();break;case 26:case 27:case 5:Xt(n);break;case 4:re();break;case 13:Fi(n);break;case 19:Qt(rn);break;case 10:ki(n.type);break;case 22:case 23:Fi(n),uu(),e!==null&&Qt(Qa);break;case 24:ki(on)}}var Qv={getCacheForType:function(e){var n=Tn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Jv=typeof WeakMap=="function"?WeakMap:Map,ke=0,Ie=null,pe=null,Me=0,Fe=0,Zn=null,ji=!1,qs=!1,sf=!1,Zi=0,qe=0,Ta=0,rs=0,rf=0,oi=0,Ys=0,ho=null,Ci=null,of=!1,lf=0,Rl=1/0,Cl=null,ba=null,wl=!1,os=null,po=0,cf=0,uf=null,mo=0,ff=null;function Kn(){if((ke&2)!==0&&Me!==0)return Me&-Me;if(C.T!==null){var e=Is;return e!==0?e:xf()}return Nr()}function Km(){oi===0&&(oi=(Me&536870912)===0||Ae?en():536870912);var e=ii.current;return e!==null&&(e.flags|=32),oi}function On(e,n,a){(e===Ie&&Fe===2||e.cancelPendingCommit!==null)&&(js(e,0),Ki(e,Me,oi,!1)),Dn(e,a),((ke&2)===0||e!==Ie)&&(e===Ie&&((ke&2)===0&&(rs|=a),qe===4&&Ki(e,Me,oi,!1)),wi(e))}function Qm(e,n,a){if((ke&6)!==0)throw Error(s(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||$t(e,n),c=o?ex(e,n):mf(e,n,!0),f=o;do{if(c===0){qs&&!o&&Ki(e,n,0,!1);break}else if(c===6)Ki(e,n,0,!ji);else{if(a=e.current.alternate,f&&!$v(a)){c=mf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;c=ho;var N=A.current.memoizedState.isDehydrated;if(N&&(js(A,S).flags|=256),S=mf(A,S,!1),S!==2){if(sf&&!N){A.errorRecoveryDisabledLanes|=f,rs|=f,c=4;break t}f=Ci,Ci=c,f!==null&&hf(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){js(e,0),Ki(e,n,0,!0);break}t:{switch(o=e,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){Ki(o,n,oi,!ji);break t}break;case 2:Ci=null;break;case 3:case 5:break;default:throw Error(s(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(f=lf+300-ht(),10<f)){if(Ki(o,n,oi,!ji),Ut(o,0)!==0)break t;o.timeoutHandle=y_(Jm.bind(null,o,a,Ci,Cl,of,n,oi,rs,Ys,ji,2,-0,0),f);break t}Jm(o,a,Ci,Cl,of,n,oi,rs,Ys,ji,0,-0,0)}}break}while(!0);wi(e)}function hf(e){Ci===null?Ci=e:Ci.push.apply(Ci,e)}function Jm(e,n,a,o,c,f,S,A,N,k,ut,gt,it){var lt=n.subtreeFlags;if((lt&8192||(lt&16785408)===16785408)&&(yo={stylesheets:null,count:0,unsuspend:Ox},Vm(n),n=zx(),n!==null)){e.cancelPendingCommit=n(s_.bind(null,e,a,o,c,S,A,N,1,gt,it)),Ki(e,f,S,!k);return}s_(e,a,o,c,S,A,N,ut,gt,it)}function $v(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ki(e,n,a,o){n&=~rf,n&=~rs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Zt(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&Lr(e,a,n)}function Dl(){return(ke&6)===0?(_o(0),!1):!0}function df(){if(pe!==null){if(Fe===0)var e=pe.return;else e=pe,Vi=ns=null,vu(e),zs=null,Zr=0,e=pe;for(;e!==null;)Zm(e.alternate,e),e=e.return;pe=null}}function js(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,vx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),df(),Ie=e,pe=a=Ea(e.current,null),Me=n,Fe=0,Zn=null,ji=!1,qs=$t(e,n),sf=!1,Ys=oi=rf=rs=Ta=qe=0,Ci=ho=null,of=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Zt(o),f=1<<c;n|=e[c],o&=~f}return Zi=n,tl(),a}function $m(e,n){ue=null,C.H=Ri,n===Yr?(n=pp(),Fe=3):n===fp?(n=pp(),Fe=4):Fe=n===hm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,pe===null&&(qe=1,Sl(e,ti(n,e.current)))}function t_(){var e=C.H;return C.H=Ri,e===null?Ri:e}function e_(){var e=C.A;return C.A=Qv,e}function pf(){qe=4,ji||(Me&4194176)!==Me&&ii.current!==null||(qs=!0),(Ta&134217727)===0&&(rs&134217727)===0||Ie===null||Ki(Ie,Me,oi,!1)}function mf(e,n,a){var o=ke;ke|=2;var c=t_(),f=e_();(Ie!==e||Me!==n)&&(Cl=null,js(e,n)),n=!1;var S=qe;t:do try{if(Fe!==0&&pe!==null){var A=pe,N=Zn;switch(Fe){case 8:df(),S=6;break t;case 3:case 2:case 6:ii.current===null&&(n=!0);var k=Fe;if(Fe=0,Zn=null,Zs(e,A,N,k),a&&qs){S=0;break t}break;default:k=Fe,Fe=0,Zn=null,Zs(e,A,N,k)}}tx(),S=qe;break}catch(ut){$m(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Vi=ns=null,ke=o,C.H=c,C.A=f,pe===null&&(Ie=null,Me=0,tl()),S}function tx(){for(;pe!==null;)n_(pe)}function ex(e,n){var a=ke;ke|=2;var o=t_(),c=e_();Ie!==e||Me!==n?(Cl=null,Rl=ht()+500,js(e,n)):qs=$t(e,n);t:do try{if(Fe!==0&&pe!==null){n=pe;var f=Zn;e:switch(Fe){case 1:Fe=0,Zn=null,Zs(e,n,f,1);break;case 2:if(hp(f)){Fe=0,Zn=null,i_(n);break}n=function(){Fe===2&&Ie===e&&(Fe=7),wi(e)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:hp(f)?(Fe=0,Zn=null,i_(n)):(Fe=0,Zn=null,Zs(e,n,f,7));break;case 5:var S=null;switch(pe.tag){case 26:S=pe.memoizedState;case 5:case 27:var A=pe;if(!S||L_(S)){Fe=0,Zn=null;var N=A.sibling;if(N!==null)pe=N;else{var k=A.return;k!==null?(pe=k,Ul(k)):pe=null}break e}}Fe=0,Zn=null,Zs(e,n,f,5);break;case 6:Fe=0,Zn=null,Zs(e,n,f,6);break;case 8:df(),qe=6;break t;default:throw Error(s(462))}}nx();break}catch(ut){$m(e,ut)}while(!0);return Vi=ns=null,C.H=o,C.A=c,ke=a,pe!==null?0:(Ie=null,Me=0,tl(),qe)}function nx(){for(;pe!==null&&!T();)n_(pe)}function n_(e){var n=Tm(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Ul(e):pe=n}function i_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=vm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=vm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:vu(n);default:Zm(a,n),n=pe=qm(n,Zi),n=Tm(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Ul(e):pe=n}function Zs(e,n,a,o){Vi=ns=null,vu(n),zs=null,Zr=0;var c=n.return;try{if(Xv(e,c,n,a,Me)){qe=1,Sl(e,ti(a,e.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;qe=1,Sl(e,ti(a,e.current)),pe=null;return}n.flags&32768?(Ae||o===1?e=!0:qs||(Me&536870912)!==0?e=!1:(ji=e=!0,(o===2||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),a_(n,e)):Ul(n)}function Ul(e){var n=e;do{if((n.flags&32768)!==0){a_(n,ji);return}e=n.return;var a=Zv(n.alternate,n,Zi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);qe===0&&(qe=5)}function a_(e,n){do{var a=Kv(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);qe=6,pe=null}function s_(e,n,a,o,c,f,S,A,N,k){var ut=C.T,gt=Y.p;try{Y.p=2,C.T=null,ix(e,n,a,o,gt,c,f,S,A,N,k)}finally{C.T=ut,Y.p=gt}}function ix(e,n,a,o,c,f,S,A){do Ks();while(os!==null);if((ke&6)!==0)throw Error(s(327));var N=e.finishedWork;if(o=e.finishedLanes,N===null)return null;if(e.finishedWork=null,e.finishedLanes=0,N===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var k=N.lanes|N.childLanes;if(k|=iu,Xo(e,o,k,f,S,A),e===Ie&&(pe=Ie=null,Me=0),(N.subtreeFlags&10256)===0&&(N.flags&10256)===0||wl||(wl=!0,cf=k,uf=a,ox(Dt,function(){return Ks(),null})),a=(N.flags&15990)!==0,(N.subtreeFlags&15990)!==0||a?(a=C.T,C.T=null,f=Y.p,Y.p=2,S=ke,ke|=4,qv(e,N),Fm(N,e),Rv(Rf,e.containerInfo),kl=!!Af,Rf=Af=null,e.current=N,Pm(e,N.alternate,N),et(),ke=S,Y.p=f,C.T=a):e.current=N,wl?(wl=!1,os=e,po=o):r_(e,k),k=e.pendingLanes,k===0&&(ba=null),Ft(N.stateNode),wi(e),n!==null)for(c=e.onRecoverableError,N=0;N<n.length;N++)k=n[N],c(k.value,{componentStack:k.stack});return(po&3)!==0&&Ks(),k=e.pendingLanes,(o&4194218)!==0&&(k&42)!==0?e===ff?mo++:(mo=0,ff=e):mo=0,_o(0),null}function r_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Qr(n)))}function Ks(){if(os!==null){var e=os,n=cf;cf=0;var a=Ts(po),o=C.T,c=Y.p;try{if(Y.p=32>a?32:a,C.T=null,os===null)var f=!1;else{a=uf,uf=null;var S=os,A=po;if(os=null,po=0,(ke&6)!==0)throw Error(s(331));var N=ke;if(ke|=4,Xm(S.current),Gm(S,S.current,A,a),ke=N,_o(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Yt,S)}catch{}f=!0}return f}finally{Y.p=c,C.T=o,r_(e,n)}}return!1}function o_(e,n,a){n=ti(a,n),n=Lu(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(Dn(e,2),wi(e))}function Be(e,n,a){if(e.tag===3)o_(e,e,a);else for(;n!==null;){if(n.tag===3){o_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ba===null||!ba.has(o))){e=ti(a,e),a=um(2),o=xa(n,a,2),o!==null&&(fm(a,o,n,e),Dn(o,2),wi(o));break}}n=n.return}}function _f(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Jv;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(sf=!0,c.add(a),e=ax.bind(null,e,n,a),n.then(e,e))}function ax(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ie===e&&(Me&a)===a&&(qe===4||qe===3&&(Me&62914560)===Me&&300>ht()-lf?(ke&2)===0&&js(e,0):rf|=a,Ys===Me&&(Ys=0)),wi(e)}function l_(e,n){n===0&&(n=Te()),e=fa(e,n),e!==null&&(Dn(e,n),wi(e))}function sx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),l_(e,a)}function rx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),l_(e,a)}function ox(e,n){return Wt(e,n)}var Ll=null,Qs=null,gf=!1,Nl=!1,vf=!1,ls=0;function wi(e){e!==Qs&&e.next===null&&(Qs===null?Ll=Qs=e:Qs=Qs.next=e),Nl=!0,gf||(gf=!0,cx(lx))}function _o(e,n){if(!vf&&Nl){vf=!0;do for(var a=!1,o=Ll;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Zt(42|e)+1)-1,f&=c&~(S&~A),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,f_(o,f))}else f=Me,f=Ut(o,o===Ie?f:0),(f&3)===0||$t(o,f)||(a=!0,f_(o,f));o=o.next}while(a);vf=!1}}function lx(){Nl=gf=!1;var e=0;ls!==0&&(gx()&&(e=ls),ls=0);for(var n=ht(),a=null,o=Ll;o!==null;){var c=o.next,f=c_(o,n);f===0?(o.next=null,a===null?Ll=c:a.next=c,c===null&&(Qs=a)):(a=o,(e!==0||(f&3)!==0)&&(Nl=!0)),o=c}_o(e)}function c_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Zt(f),A=1<<S,N=c[S];N===-1?((A&a)===0||(A&o)!==0)&&(c[S]=Ge(A,n)):N<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ie,a=Me,a=Ut(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&Fe===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&U(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&U(o),Ts(a)){case 2:case 8:a=Gt;break;case 32:a=Dt;break;case 268435456:a=_e;break;default:a=Dt}return o=u_.bind(null,e),a=Wt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&U(o),e.callbackPriority=2,e.callbackNode=null,2}function u_(e,n){var a=e.callbackNode;if(Ks()&&e.callbackNode!==a)return null;var o=Me;return o=Ut(e,e===Ie?o:0),o===0?null:(Qm(e,o,n),c_(e,ht()),e.callbackNode!=null&&e.callbackNode===a?u_.bind(null,e):null)}function f_(e,n){if(Ks())return null;Qm(e,n,!0)}function cx(e){xx(function(){(ke&6)!==0?Wt(dt,e):e()})}function xf(){return ls===0&&(ls=en()),ls}function h_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yo(""+e)}function d_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ux(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=h_((c[an]||null).action),S=o.submitter;S&&(n=(n=S[an]||null)?h_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new Qo("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ls!==0){var N=S?d_(c,S):new FormData(c);Ru(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(A.preventDefault(),N=S?d_(c,S):new FormData(c),Ru(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var Sf=0;Sf<sp.length;Sf++){var yf=sp[Sf],fx=yf.toLowerCase(),hx=yf[0].toUpperCase()+yf.slice(1);di(fx,"on"+hx)}di(tp,"onAnimationEnd"),di(ep,"onAnimationIteration"),di(np,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(wv,"onTransitionRun"),di(Dv,"onTransitionStart"),di(Uv,"onTransitionCancel"),di(ip,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function p_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],N=A.instance,k=A.currentTarget;if(A=A.listener,N!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=k;try{f(c)}catch(ut){xl(ut)}c.currentTarget=null,f=N}else for(S=0;S<o.length;S++){if(A=o[S],N=A.instance,k=A.currentTarget,A=A.listener,N!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=k;try{f(c)}catch(ut){xl(ut)}c.currentTarget=null,f=N}}}}function Se(e,n){var a=n[bs];a===void 0&&(a=n[bs]=new Set);var o=e+"__bubble";a.has(o)||(m_(n,e,2,!1),a.add(o))}function Mf(e,n,a){var o=0;n&&(o|=4),m_(a,e,o,n)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function Ef(e){if(!e[Ol]){e[Ol]=!0,j.forEach(function(a){a!=="selectionchange"&&(dx.has(a)||Mf(a,!1,e),Mf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ol]||(n[Ol]=!0,Mf("selectionchange",!1,n))}}function m_(e,n,a,o){switch(I_(n)){case 2:var c=Fx;break;case 8:c=Hx;break;default:c=zf}a=c.bind(null,n,a,e),c=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Tf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===c||A.nodeType===8&&A.parentNode===c)break;if(S===4)for(S=o.return;S!==null;){var N=S.tag;if((N===3||N===4)&&(N=S.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;S=S.return}for(;A!==null;){if(S=zi(A),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){o=f=S;continue t}A=A.parentNode}}o=o.return}Dd(function(){var k=f,ut=Vc(a),gt=[];t:{var it=ap.get(e);if(it!==void 0){var lt=Qo,kt=e;switch(e){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":lt=rv;break;case"focusin":kt="focus",lt=jc;break;case"focusout":kt="blur",lt=jc;break;case"beforeblur":case"afterblur":lt=jc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=cv;break;case tp:case ep:case np:lt=Q0;break;case ip:lt=fv;break;case"scroll":case"scrollend":lt=q0;break;case"wheel":lt=dv;break;case"copy":case"cut":case"paste":lt=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Pd;break;case"toggle":case"beforetoggle":lt=mv}var ie=(n&4)!==0,Ye=!ie&&(e==="scroll"||e==="scrollend"),K=ie?it!==null?it+"Capture":null:it;ie=[];for(var G=k,$;G!==null;){var mt=G;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||K===null||(mt=Pr(G,K),mt!=null&&ie.push(vo(G,mt,$))),Ye)break;G=G.return}0<ie.length&&(it=new lt(it,kt,null,a,ut),gt.push({event:it,listeners:ie}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==Gc&&(kt=a.relatedTarget||a.fromElement)&&(zi(kt)||kt[Pi]))break t;if((lt||it)&&(it=ut.window===ut?ut:(it=ut.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(kt=a.relatedTarget||a.toElement,lt=k,kt=kt?zi(kt):null,kt!==null&&(Ye=Z(kt),ie=kt.tag,kt!==Ye||ie!==5&&ie!==27&&ie!==6)&&(kt=null)):(lt=null,kt=k),lt!==kt)){if(ie=Nd,mt="onMouseLeave",K="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Pd,mt="onPointerLeave",K="onPointerEnter",G="pointer"),Ye=lt==null?it:W(lt),$=kt==null?it:W(kt),it=new ie(mt,G+"leave",lt,a,ut),it.target=Ye,it.relatedTarget=$,mt=null,zi(ut)===k&&(ie=new ie(K,G+"enter",kt,a,ut),ie.target=$,ie.relatedTarget=Ye,mt=ie),Ye=mt,lt&&kt)e:{for(ie=lt,K=kt,G=0,$=ie;$;$=Js($))G++;for($=0,mt=K;mt;mt=Js(mt))$++;for(;0<G-$;)ie=Js(ie),G--;for(;0<$-G;)K=Js(K),$--;for(;G--;){if(ie===K||K!==null&&ie===K.alternate)break e;ie=Js(ie),K=Js(K)}ie=null}else ie=null;lt!==null&&__(gt,it,lt,ie,!1),kt!==null&&Ye!==null&&__(gt,Ye,kt,ie,!0)}}t:{if(it=k?W(k):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var Ht=kd;else if(Gd(it))if(Xd)Ht=bv;else{Ht=Ev;var de=Mv}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?k&&Hc(k.elementType)&&(Ht=kd):Ht=Tv;if(Ht&&(Ht=Ht(e,k))){Vd(gt,Ht,a,ut);break t}de&&de(e,it,k),e==="focusout"&&k&&it.type==="number"&&k.memoizedProps.value!=null&&En(it,"number",it.value)}switch(de=k?W(k):window,e){case"focusin":(Gd(de)||de.contentEditable==="true")&&(Ds=de,tu=k,kr=null);break;case"focusout":kr=tu=Ds=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Jd(gt,a,ut);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":Jd(gt,a,ut)}var qt;if(Kc)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else ws?Fd(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(zd&&a.locale!=="ko"&&(ws||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&ws&&(qt=Ud()):(ua=ut,Wc="value"in ua?ua.value:ua.textContent,ws=!0)),de=Pl(k,Jt),0<de.length&&(Jt=new Od(Jt,e,null,a,ut),gt.push({event:Jt,listeners:de}),qt?Jt.data=qt:(qt=Hd(a),qt!==null&&(Jt.data=qt)))),(qt=gv?vv(e,a):xv(e,a))&&(Jt=Pl(k,"onBeforeInput"),0<Jt.length&&(de=new Od("onBeforeInput","beforeinput",null,a,ut),gt.push({event:de,listeners:Jt}),de.data=qt)),ux(gt,e,k,a,ut)}p_(gt,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Pl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Pr(e,a),c!=null&&o.unshift(vo(e,c,f)),c=Pr(e,n),c!=null&&o.push(vo(e,c,f))),e=e.return}return o}function Js(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function __(e,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,N=A.alternate,k=A.stateNode;if(A=A.tag,N!==null&&N===o)break;A!==5&&A!==26&&A!==27||k===null||(N=k,c?(k=Pr(a,f),k!=null&&S.unshift(vo(a,k,N))):c||(k=Pr(a,f),k!=null&&S.push(vo(a,k,N)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var px=/\r\n?/g,mx=/\u0000|\uFFFD/g;function g_(e){return(typeof e=="string"?e:""+e).replace(px,`
`).replace(mx,"")}function v_(e,n){return n=g_(n),g_(e)===n}function zl(){}function Oe(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||In(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&In(e,""+o);break;case"className":He(e,"class",o);break;case"tabIndex":He(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":He(e,a,o);break;case"style":Cd(e,o,f);break;case"data":if(n!=="object"){He(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Yo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",c.name,c,null),Oe(e,n,"formEncType",c.formEncType,c,null),Oe(e,n,"formMethod",c.formMethod,c,null),Oe(e,n,"formTarget",c.formTarget,c,null)):(Oe(e,n,"encType",c.encType,c,null),Oe(e,n,"method",c.method,c,null),Oe(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Yo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=zl);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Yo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),ve(e,"popover",o);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ve(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=X0.get(a)||a,ve(e,a,o))}}function bf(e,n,a,o,c,f){switch(a){case"style":Cd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?In(e,o):(typeof o=="number"||typeof o=="bigint")&&In(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[an]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ve(e,a,o)}}}function Sn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,f,S,a,null)}}c&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var A=f=S=c=null,N=null,k=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":c=ut;break;case"type":S=ut;break;case"checked":N=ut;break;case"defaultChecked":k=ut;break;case"value":f=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Oe(e,n,o,ut,a,null)}}Ln(e,f,A,N,k,S,c,!1),xe(e);return;case"select":Se("invalid",e),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Oe(e,n,c,A,a,null)}n=f,a=S,e.multiple=!!o,n!=null?Xe(e,!!o,n,!1):a!=null&&Xe(e,!!o,a,!0);return;case"textarea":Se("invalid",e),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Oe(e,n,S,A,a,null)}As(e,o,c,f),xe(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(o=a[N],o!=null))switch(N){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,N,o,a,null)}return;case"dialog":Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<go.length;o++)Se(go[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,k,o,a,null)}return;default:if(Hc(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&bf(e,n,ut,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Oe(e,n,A,o,a,null))}function _x(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,A=null,N=null,k=null,ut=null;for(lt in a){var gt=a[lt];if(a.hasOwnProperty(lt)&&gt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":N=gt;default:o.hasOwnProperty(lt)||Oe(e,n,lt,null,o,gt)}}for(var it in o){var lt=o[it];if(gt=a[it],o.hasOwnProperty(it)&&(lt!=null||gt!=null))switch(it){case"type":f=lt;break;case"name":c=lt;break;case"checked":k=lt;break;case"defaultChecked":ut=lt;break;case"value":S=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==gt&&Oe(e,n,it,lt,o,gt)}}Le(e,S,A,N,k,ut,f,c);return;case"select":lt=S=A=it=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":lt=N;default:o.hasOwnProperty(f)||Oe(e,n,f,null,o,N)}for(c in o)if(f=o[c],N=a[c],o.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==N&&Oe(e,n,c,f,o,N)}n=A,a=S,o=lt,it!=null?Xe(e,!!a,it,!1):!!o!=!!a&&(n!=null?Xe(e,!!a,n,!0):Xe(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Oe(e,n,A,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Oe(e,n,S,c,o,f)}gn(e,it,lt);return;case"option":for(var kt in a)if(it=a[kt],a.hasOwnProperty(kt)&&it!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Oe(e,n,kt,null,o,it)}for(N in o)if(it=o[N],lt=a[N],o.hasOwnProperty(N)&&it!==lt&&(it!=null||lt!=null))switch(N){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Oe(e,n,N,it,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)it=a[ie],a.hasOwnProperty(ie)&&it!=null&&!o.hasOwnProperty(ie)&&Oe(e,n,ie,null,o,it);for(k in o)if(it=o[k],lt=a[k],o.hasOwnProperty(k)&&it!==lt&&(it!=null||lt!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Oe(e,n,k,it,o,lt)}return;default:if(Hc(n)){for(var Ye in a)it=a[Ye],a.hasOwnProperty(Ye)&&it!==void 0&&!o.hasOwnProperty(Ye)&&bf(e,n,Ye,void 0,o,it);for(ut in o)it=o[ut],lt=a[ut],!o.hasOwnProperty(ut)||it===lt||it===void 0&&lt===void 0||bf(e,n,ut,it,o,lt);return}}for(var K in a)it=a[K],a.hasOwnProperty(K)&&it!=null&&!o.hasOwnProperty(K)&&Oe(e,n,K,null,o,it);for(gt in o)it=o[gt],lt=a[gt],!o.hasOwnProperty(gt)||it===lt||it==null&&lt==null||Oe(e,n,gt,it,o,lt)}var Af=null,Rf=null;function Bl(e){return e.nodeType===9?e:e.ownerDocument}function x_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Cf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function gx(){var e=window.event;return e&&e.type==="popstate"?e===wf?!1:(wf=e,!0):(wf=null,!1)}var y_=typeof setTimeout=="function"?setTimeout:void 0,vx=typeof clearTimeout=="function"?clearTimeout:void 0,M_=typeof Promise=="function"?Promise:void 0,xx=typeof queueMicrotask=="function"?queueMicrotask:typeof M_<"u"?function(e){return M_.resolve(null).then(e).catch(Sx)}:y_;function Sx(e){setTimeout(function(){throw e})}function Df(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(o===0){e.removeChild(c),Ao(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=c}while(a);Ao(n)}function Uf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uf(a),Or(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function yx(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function Mx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function E_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function T_(e,n,a){switch(n=Bl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var li=new Map,b_=new Set;function Il(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Qi=Y.d;Y.d={f:Ex,r:Tx,D:bx,C:Ax,L:Rx,m:Cx,X:Dx,S:wx,M:Ux};function Ex(){var e=Qi.f(),n=Dl();return e||n}function Tx(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?Jp(n):Qi.r(e)}var $s=typeof document>"u"?null:document;function A_(e,n,a){var o=$s;if(o&&typeof n=="string"&&n){var c=fn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),b_.has(c)||(b_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Sn(n,"link",e),Q(n),o.head.appendChild(n)))}}function bx(e){Qi.D(e),A_("dns-prefetch",e,null)}function Ax(e,n){Qi.C(e,n),A_("preconnect",e,n)}function Rx(e,n,a){Qi.L(e,n,a);var o=$s;if(o&&e&&n){var c='link[rel="preload"][as="'+fn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+fn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+fn(a.imageSizes)+'"]')):c+='[href="'+fn(e)+'"]';var f=c;switch(n){case"style":f=tr(e);break;case"script":f=er(e)}li.has(f)||(e=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(xo(f))||n==="script"&&o.querySelector(So(f))||(n=o.createElement("link"),Sn(n,"link",e),Q(n),o.head.appendChild(n)))}}function Cx(e,n){Qi.m(e,n);var a=$s;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+fn(o)+'"][href="'+fn(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=er(e)}if(!li.has(f)&&(e=b({rel:"modulepreload",href:e},n),li.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}o=a.createElement("link"),Sn(o,"link",e),Q(o),a.head.appendChild(o)}}}function wx(e,n,a){Qi.S(e,n,a);var o=$s;if(o&&e){var c=tt(o).hoistableStyles,f=tr(e);n=n||"default";var S=c.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(xo(f)))A.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(f))&&Lf(e,a);var N=S=o.createElement("link");Q(N),Sn(N,"link",e),N._p=new Promise(function(k,ut){N.onload=k,N.onerror=ut}),N.addEventListener("load",function(){A.loading|=1}),N.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Fl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(f,S)}}}function Dx(e,n){Qi.X(e,n);var a=$s;if(a&&e){var o=tt(a).hoistableScripts,c=er(e),f=o.get(c);f||(f=a.querySelector(So(c)),f||(e=b({src:e,async:!0},n),(n=li.get(c))&&Nf(e,n),f=a.createElement("script"),Q(f),Sn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Ux(e,n){Qi.M(e,n);var a=$s;if(a&&e){var o=tt(a).hoistableScripts,c=er(e),f=o.get(c);f||(f=a.querySelector(So(c)),f||(e=b({src:e,async:!0,type:"module"},n),(n=li.get(c))&&Nf(e,n),f=a.createElement("script"),Q(f),Sn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function R_(e,n,a,o){var c=(c=ae.current)?Il(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=tr(a.href),a=tt(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=tr(a.href);var f=tt(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(xo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),f||Lx(c,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=er(a),a=tt(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function tr(e){return'href="'+fn(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function C_(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Lx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Sn(n,"link",a),Q(n),e.head.appendChild(n))}function er(e){return'[src="'+fn(e)+'"]'}function So(e){return"script[async]"+e}function w_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+fn(a.href)+'"]');if(o)return n.instance=o,Q(o),o;var c=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Q(o),Sn(o,"style",c),Fl(o,a.precedence,e),n.instance=o;case"stylesheet":c=tr(a.href);var f=e.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;o=C_(a),(c=li.get(c))&&Lf(o,c),f=(e.ownerDocument||e).createElement("link"),Q(f);var S=f;return S._p=new Promise(function(A,N){S.onload=A,S.onerror=N}),Sn(f,"link",o),n.state.loading|=4,Fl(f,a.precedence,e),n.instance=f;case"script":return f=er(a.src),(c=e.querySelector(So(f)))?(n.instance=c,Q(c),c):(o=a,(c=li.get(f))&&(o=b({},a),Nf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Q(c),Sn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Fl(o,a.precedence,e));return n.instance}function Fl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Hl=null;function D_(e,n,a){if(Hl===null){var o=new Map,c=Hl=new Map;c.set(a,o)}else c=Hl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ka]||f[nn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function U_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Nx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function L_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var yo=null;function Ox(){}function Px(e,n,a){if(yo===null)throw Error(s(475));var o=yo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=tr(a.href),f=e.querySelector(xo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Gl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,Q(f);return}f=e.ownerDocument||e,a=C_(a),(c=li.get(c))&&Lf(a,c),f=f.createElement("link"),Q(f);var S=f;S._p=new Promise(function(A,N){S.onload=A,S.onerror=N}),Sn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Gl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function zx(){if(yo===null)throw Error(s(475));var e=yo;return e.stylesheets&&e.count===0&&Of(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Of(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Gl(){if(this.count--,this.count===0){if(this.stylesheets)Of(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vl=null;function Of(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vl=new Map,n.forEach(Bx,e),Vl=null,Gl.call(e))}function Bx(e,n){if(!(n.state.loading&4)){var a=Vl.get(e);if(a)var o=a.get(null);else{a=new Map,Vl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=Gl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:M,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function Ix(e,n,a,o,c,f,S,A){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.hiddenUpdates=wn(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function N_(e,n,a,o,c,f,S,A,N,k,ut,gt){return e=new Ix(e,n,a,S,A,N,k,gt),n=1,f===!0&&(n|=24),f=ri(3,null,null,n),e.current=f,f.stateNode=e,n=fu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Wu(f),e}function O_(e){return e?(e=Ns,e):Ns}function P_(e,n,a,o,c,f){c=O_(c),o.context===null?o.context=c:o.pendingContext=c,o=va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=xa(e,o,n),a!==null&&(On(a,e,n),ao(a,e,n))}function z_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Pf(e,n){z_(e,n),(e=e.alternate)&&z_(e,n)}function B_(e){if(e.tag===13){var n=fa(e,67108864);n!==null&&On(n,e,67108864),Pf(e,67108864)}}var kl=!0;function Fx(e,n,a,o){var c=C.T;C.T=null;var f=Y.p;try{Y.p=2,zf(e,n,a,o)}finally{Y.p=f,C.T=c}}function Hx(e,n,a,o){var c=C.T;C.T=null;var f=Y.p;try{Y.p=8,zf(e,n,a,o)}finally{Y.p=f,C.T=c}}function zf(e,n,a,o){if(kl){var c=Bf(o);if(c===null)Tf(e,n,o,Xl,a),F_(e,o);else if(Vx(c,e,n,a,o))o.stopPropagation();else if(F_(e,o),n&4&&-1<Gx.indexOf(e)){for(;c!==null;){var f=R(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=wt(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var N=1<<31-Zt(S);A.entanglements[1]|=N,S&=~N}wi(f),(ke&6)===0&&(Rl=ht()+500,_o(0))}}break;case 13:A=fa(f,2),A!==null&&On(A,f,2),Dl(),Pf(f,2)}if(f=Bf(o),f===null&&Tf(e,n,o,Xl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Tf(e,n,o,null,a)}}function Bf(e){return e=Vc(e),If(e)}var Xl=null;function If(e){if(Xl=null,e=zi(e),e!==null){var n=Z(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=St(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Xl=e,null}function I_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case dt:return 2;case Gt:return 8;case Dt:case Bt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Ff=!1,Aa=null,Ra=null,Ca=null,Eo=new Map,To=new Map,wa=[],Gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F_(e,n){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=R(n),n!==null&&B_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Vx(e,n,a,o,c){switch(n){case"focusin":return Aa=bo(Aa,e,n,a,o,c),!0;case"dragenter":return Ra=bo(Ra,e,n,a,o,c),!0;case"mouseover":return Ca=bo(Ca,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,bo(Eo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,bo(To.get(f)||null,e,n,a,o,c)),!0}return!1}function H_(e){var n=zi(e.target);if(n!==null){var a=Z(n);if(a!==null){if(n=a.tag,n===13){if(n=St(a),n!==null){e.blockedOn=n,Wo(e.priority,function(){if(a.tag===13){var o=Kn(),c=fa(a,o);c!==null&&On(c,a,o),Pf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Bf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Gc=o,a.target.dispatchEvent(o),Gc=null}else return n=R(a),n!==null&&B_(n),e.blockedOn=a,!1;n.shift()}return!0}function G_(e,n,a){Wl(e)&&a.delete(n)}function kx(){Ff=!1,Aa!==null&&Wl(Aa)&&(Aa=null),Ra!==null&&Wl(Ra)&&(Ra=null),Ca!==null&&Wl(Ca)&&(Ca=null),Eo.forEach(G_),To.forEach(G_)}function ql(e,n){e.blockedOn===n&&(e.blockedOn=null,Ff||(Ff=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,kx)))}var Yl=null;function V_(e){Yl!==e&&(Yl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(If(o||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,Ru(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ao(e){function n(N){return ql(N,e)}Aa!==null&&ql(Aa,e),Ra!==null&&ql(Ra,e),Ca!==null&&ql(Ca,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<wa.length;a++){var o=wa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)H_(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[an]||null;if(typeof f=="function")S||V_(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[an]||null)A=S.formAction;else if(If(c)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),V_(a)}}}function Hf(e){this._internalRoot=e}jl.prototype.render=Hf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Kn();P_(a,o,e,n,null,null)},jl.prototype.unmount=Hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Ks(),P_(e.current,2,null,e,null,null),Dl(),n[Pi]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,e),a===0&&H_(e)}};var k_=t.version;if(k_!=="19.0.0")throw Error(s(527,k_,"19.0.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=at(n),e=e!==null?Tt(e):null,e=e===null?null:e.stateNode,e};var Xx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:zi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Yt=Zl.inject(Xx),Vt=Zl}catch{}}return Co.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=rm,f=om,S=lm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=N_(e,1,!1,null,null,a,o,c,f,S,A,null),e[Pi]=n.current,Ef(e.nodeType===8?e.parentNode:e),new Hf(n)},Co.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",f=rm,S=om,A=lm,N=null,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(k=a.formState)),n=N_(e,1,!0,n,a??null,o,c,f,S,A,N,k),n.context=O_(null),a=n.current,o=Kn(),c=va(o),c.callback=null,xa(a,c,o),n.current.lanes=o,Dn(n,o),wi(n),e[Pi]=n.current,Ef(e),new jl(n)},Co.version="19.0.0",Co}var $_;function tS(){if($_)return kf.exports;$_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),kf.exports=$x(),kf.exports}var eS=tS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pd="173",xr={ROTATE:0,DOLLY:1,PAN:2},gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nS=0,tg=1,iS=2,o0=1,aS=2,ia=3,Ga=0,kn=1,aa=2,Fa=0,Sr=1,eg=2,ng=3,ig=4,sS=5,_s=100,rS=101,oS=102,lS=103,cS=104,uS=200,fS=201,hS=202,dS=203,Th=204,bh=205,pS=206,mS=207,_S=208,gS=209,vS=210,xS=211,SS=212,yS=213,MS=214,Ah=0,Rh=1,Ch=2,Er=3,wh=4,Dh=5,Uh=6,Lh=7,l0=0,ES=1,TS=2,Ha=0,bS=1,AS=2,RS=3,CS=4,wS=5,DS=6,US=7,c0=300,Tr=301,br=302,Nh=303,Oh=304,Oc=306,Ph=1e3,vs=1001,zh=1002,Ei=1003,LS=1004,Kl=1005,Li=1006,Yf=1007,xs=1008,la=1009,u0=1010,f0=1011,Bo=1012,md=1013,Ss=1014,sa=1015,Fo=1016,_d=1017,gd=1018,Ar=1020,h0=35902,d0=1021,p0=1022,Mi=1023,m0=1024,_0=1025,yr=1026,Rr=1027,g0=1028,vd=1029,v0=1030,xd=1031,Sd=1033,Mc=33776,Ec=33777,Tc=33778,bc=33779,Bh=35840,Ih=35841,Fh=35842,Hh=35843,Gh=36196,Vh=37492,kh=37496,Xh=37808,Wh=37809,qh=37810,Yh=37811,jh=37812,Zh=37813,Kh=37814,Qh=37815,Jh=37816,$h=37817,td=37818,ed=37819,nd=37820,id=37821,Ac=36492,ad=36494,sd=36495,x0=36283,rd=36284,od=36285,ld=36286,NS=3200,OS=3201,PS=0,zS=1,Ia="",ui="srgb",Cr="srgb-linear",wc="linear",Pe="srgb",nr=7680,ag=519,BS=512,IS=513,FS=514,S0=515,HS=516,GS=517,VS=518,kS=519,sg=35044,rg="300 es",ra=2e3,Dc=2001;class Es{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,cd=180/Math.PI;function Ho(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function me(r,t,i){return Math.max(t,Math.min(i,r))}function XS(r,t){return(r%t+t)%t}function jf(r,t,i){return(1-i)*r+i*t}function wo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const WS={DEG2RAD:Rc};class fe{constructor(t=0,i=0){fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,i,s,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],x=s[2],M=s[5],E=s[8],w=l[0],y=l[3],_=l[6],P=l[1],O=l[4],D=l[7],F=l[2],H=l[5],B=l[8];return u[0]=h*w+d*P+m*F,u[3]=h*y+d*O+m*H,u[6]=h*_+d*D+m*B,u[1]=p*w+g*P+v*F,u[4]=p*y+g*O+v*H,u[7]=p*_+g*D+v*B,u[2]=x*w+M*P+E*F,u[5]=x*y+M*O+E*H,u[8]=x*_+M*D+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,x=d*m-g*u,M=p*u-h*m,E=i*v+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(l*p-g*s)*w,t[2]=(d*s-l*h)*w,t[3]=x*w,t[4]=(g*i-l*m)*w,t[5]=(l*u-d*i)*w,t[6]=M*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Zf.makeScale(t,i)),this}rotate(t){return this.premultiply(Zf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Zf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new le;function y0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Uc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qS(){const r=Uc("canvas");return r.style.display="block",r}const og={};function _r(r){r in og||(og[r]=!0,console.warn(r))}function YS(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function jS(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ZS(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const lg=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cg=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KS(){const r={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=Mr(l.r),l.g=Mr(l.g),l.b=Mr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?wc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Cr]:{primaries:t,whitePoint:s,transfer:wc,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:s,transfer:Pe,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),r}const Ce=KS();function oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Mr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ir;class QS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ir===void 0&&(ir=Uc("canvas")),ir.width=t.width,ir.height=t.height;const s=ir.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ir}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Uc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=oa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(oa(i[s]/255)*255):i[s]=oa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let JS=0;class M0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Ho(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Kf(l[h].image)):u.push(Kf(l[h]))}else u=Kf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Kf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?QS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $S=0;class Xn extends Es{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=vs,l=vs,u=Li,h=xs,d=Mi,m=la,p=Xn.DEFAULT_ANISOTROPY,g=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Ho(),this.name="",this.source=new M0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==c0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ph:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ph:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=c0;Xn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,s=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],E=m[9],w=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(M+1)/2,F=(_+1)/2,H=(g+x)/4,B=(v+w)/4,q=(E+y)/4;return O>D&&O>F?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=H/s,u=B/s):D>F?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=H/l,u=q/l):F<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),s=B/u,l=q/u),this.set(s,l,u,i),this}let P=Math.sqrt((y-E)*(y-E)+(v-w)*(v-w)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(v-w)/P,this.z=(x-g)/P,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ty extends Es{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new Xn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new M0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends ty{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class E0 extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ey extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const x=u[h+0],M=u[h+1],E=u[h+2],w=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=w;return}if(v!==w||m!==x||p!==M||g!==E){let y=1-d;const _=m*x+p*M+g*E+v*w,P=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const F=Math.sqrt(O),H=Math.atan2(F,_*P);y=Math.sin(y*H)/F,d=Math.sin(d*H)/F}const D=d*P;if(m=m*y+x*D,p=p*y+M*D,g=g*y+E*D,v=v*y+w*D,y===1-d){const F=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=F,p*=F,g*=F,v*=F}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=u[h],x=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+g*v+m*M-p*x,t[i+1]=m*E+g*x+p*v-d*M,t[i+2]=p*E+g*M+d*x-m*v,t[i+3]=g*E-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(u/2),x=m(s/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v-x*M*E;break;case"YXZ":this._x=x*g*v+p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v+x*M*E;break;case"ZXY":this._x=x*g*v-p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v-x*M*E;break;case"ZYX":this._x=x*g*v-p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v+x*M*E;break;case"YZX":this._x=x*g*v+p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v-x*M*E;break;case"XZY":this._x=x*g*v-p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=s+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ug.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ug.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*g,this.y=s+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qf.copy(this).projectOnVector(t),this.sub(Qf)}reflect(t){return this.sub(Qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new J,ug=new Ms;class Go{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,gi):gi.fromBufferAttribute(u,h),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ql.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ql.copy(s.boundingBox)),Ql.applyMatrix4(t.matrixWorld),this.union(Ql)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),Jl.subVectors(this.max,Do),ar.subVectors(t.a,Do),sr.subVectors(t.b,Do),rr.subVectors(t.c,Do),Ua.subVectors(sr,ar),La.subVectors(rr,sr),cs.subVectors(ar,rr);let i=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-cs.z,cs.y,Ua.z,0,-Ua.x,La.z,0,-La.x,cs.z,0,-cs.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-cs.y,cs.x,0];return!Jf(i,ar,sr,rr,Jl)||(i=[1,0,0,0,1,0,0,0,1],!Jf(i,ar,sr,rr,Jl))?!1:($l.crossVectors(Ua,La),i=[$l.x,$l.y,$l.z],Jf(i,ar,sr,rr,Jl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ji=[new J,new J,new J,new J,new J,new J,new J,new J],gi=new J,Ql=new Go,ar=new J,sr=new J,rr=new J,Ua=new J,La=new J,cs=new J,Do=new J,Jl=new J,$l=new J,us=new J;function Jf(r,t,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){us.fromArray(r,u);const d=l.x*Math.abs(us.x)+l.y*Math.abs(us.y)+l.z*Math.abs(us.z),m=t.dot(us),p=i.dot(us),g=s.dot(us);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const ny=new Go,Uo=new J,$f=new J;class Vo{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ny.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Uo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($f.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add($f)),this.expandByPoint(Uo.copy(t.center).sub($f))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new J,th=new J,tc=new J,Na=new J,eh=new J,ec=new J,nh=new J;class Pc{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){th.copy(t).add(i).multiplyScalar(.5),tc.copy(i).sub(t).normalize(),Na.copy(this.origin).sub(th);const u=t.distanceTo(i)*.5,h=-this.direction.dot(tc),d=Na.dot(this.direction),m=-Na.dot(tc),p=Na.lengthSq(),g=Math.abs(1-h*h);let v,x,M,E;if(g>0)if(v=h*m-d,x=h*d-m,E=u*g,v>=0)if(x>=-E)if(x<=E){const w=1/g;v*=w,x*=w,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(th).addScaledVector(tc,x),M}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,s,l,u){eh.subVectors(i,t),ec.subVectors(s,t),nh.crossVectors(eh,ec);let h=this.direction.dot(nh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,t);const m=d*this.direction.dot(ec.crossVectors(Na,ec));if(m<0)return null;const p=d*this.direction.dot(eh.cross(Na));if(p<0||m+p>h)return null;const g=-d*Na.dot(nh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,s,l,u,h,d,m,p,g,v,x,M,E,w,y){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,g,v,x,M,E,w,y)}set(t,i,s,l,u,h,d,m,p,g,v,x,M,E,w,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=E,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/or.setFromMatrixColumn(t,0).length(),u=1/or.setFromMatrixColumn(t,1).length(),h=1/or.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*g,M=h*v,E=d*g,w=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=x-w*p,i[9]=-d*m,i[2]=w-x*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*v,E=p*g,w=p*v;i[0]=x+w*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=w+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*v,E=p*g,w=p*v;i[0]=x-w*d,i[4]=-h*v,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=w-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*v,E=d*g,w=d*v;i[0]=m*g,i[4]=E*p-M,i[8]=x*p+w,i[1]=m*v,i[5]=w*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,E=d*m,w=d*p;i[0]=m*g,i[4]=w-x*v,i[8]=E*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+E,i[10]=x-w*v}else if(t.order==="XZY"){const x=h*m,M=h*p,E=d*m,w=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+w,i[5]=h*g,i[9]=M*v-E,i[2]=E*v-M,i[6]=d*g,i[10]=w*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iy,t,ay)}lookAt(t,i,s){const l=this.elements;return Qn.subVectors(t,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Oa.crossVectors(s,Qn),Oa.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Oa.crossVectors(s,Qn)),Oa.normalize(),nc.crossVectors(Qn,Oa),l[0]=Oa.x,l[4]=nc.x,l[8]=Qn.x,l[1]=Oa.y,l[5]=nc.y,l[9]=Qn.y,l[2]=Oa.z,l[6]=nc.z,l[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],x=s[9],M=s[13],E=s[2],w=s[6],y=s[10],_=s[14],P=s[3],O=s[7],D=s[11],F=s[15],H=l[0],B=l[4],q=l[8],C=l[12],b=l[1],I=l[5],st=l[9],nt=l[13],ct=l[2],ft=l[6],V=l[10],rt=l[14],Z=l[3],St=l[7],L=l[11],at=l[15];return u[0]=h*H+d*b+m*ct+p*Z,u[4]=h*B+d*I+m*ft+p*St,u[8]=h*q+d*st+m*V+p*L,u[12]=h*C+d*nt+m*rt+p*at,u[1]=g*H+v*b+x*ct+M*Z,u[5]=g*B+v*I+x*ft+M*St,u[9]=g*q+v*st+x*V+M*L,u[13]=g*C+v*nt+x*rt+M*at,u[2]=E*H+w*b+y*ct+_*Z,u[6]=E*B+w*I+y*ft+_*St,u[10]=E*q+w*st+y*V+_*L,u[14]=E*C+w*nt+y*rt+_*at,u[3]=P*H+O*b+D*ct+F*Z,u[7]=P*B+O*I+D*ft+F*St,u[11]=P*q+O*st+D*V+F*L,u[15]=P*C+O*nt+D*rt+F*at,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],M=t[14],E=t[3],w=t[7],y=t[11],_=t[15];return E*(+u*m*v-l*p*v-u*d*x+s*p*x+l*d*M-s*m*M)+w*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*g-u*m*g)+y*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*g-s*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-s*h*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],M=t[11],E=t[12],w=t[13],y=t[14],_=t[15],P=v*y*p-w*x*p+w*m*M-d*y*M-v*m*_+d*x*_,O=E*x*p-g*y*p-E*m*M+h*y*M+g*m*_-h*x*_,D=g*w*p-E*v*p+E*d*M-h*w*M-g*d*_+h*v*_,F=E*v*m-g*w*m-E*d*x+h*w*x+g*d*y-h*v*y,H=i*P+s*O+l*D+u*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=P*B,t[1]=(w*x*u-v*y*u-w*l*M+s*y*M+v*l*_-s*x*_)*B,t[2]=(d*y*u-w*m*u+w*l*p-s*y*p-d*l*_+s*m*_)*B,t[3]=(v*m*u-d*x*u-v*l*p+s*x*p+d*l*M-s*m*M)*B,t[4]=O*B,t[5]=(g*y*u-E*x*u+E*l*M-i*y*M-g*l*_+i*x*_)*B,t[6]=(E*m*u-h*y*u-E*l*p+i*y*p+h*l*_-i*m*_)*B,t[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*M+i*m*M)*B,t[8]=D*B,t[9]=(E*v*u-g*w*u-E*s*M+i*w*M+g*s*_-i*v*_)*B,t[10]=(h*w*u-E*d*u+E*s*p-i*w*p-h*s*_+i*d*_)*B,t[11]=(g*d*u-h*v*u-g*s*p+i*v*p+h*s*M-i*d*M)*B,t[12]=F*B,t[13]=(g*w*l-E*v*l+E*s*x-i*w*x-g*s*y+i*v*y)*B,t[14]=(E*d*l-h*w*l-E*s*m+i*w*m+h*s*y-i*d*y)*B,t[15]=(h*v*l-g*d*l+g*s*m-i*v*m-h*s*x+i*d*x)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,M=u*g,E=u*v,w=h*g,y=h*v,_=d*v,P=m*p,O=m*g,D=m*v,F=s.x,H=s.y,B=s.z;return l[0]=(1-(w+_))*F,l[1]=(M+D)*F,l[2]=(E-O)*F,l[3]=0,l[4]=(M-D)*H,l[5]=(1-(x+_))*H,l[6]=(y+P)*H,l[7]=0,l[8]=(E+O)*B,l[9]=(y-P)*B,l[10]=(1-(x+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=or.set(l[0],l[1],l[2]).length();const h=or.set(l[4],l[5],l[6]).length(),d=or.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const p=1/u,g=1/h,v=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=v,vi.elements[9]*=v,vi.elements[10]*=v,i.setFromRotationMatrix(vi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=ra){const m=this.elements,p=2*u/(i-t),g=2*u/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let M,E;if(d===ra)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Dc)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=ra){const m=this.elements,p=1/(i-t),g=1/(s-l),v=1/(h-u),x=(i+t)*p,M=(s+l)*g;let E,w;if(d===ra)E=(h+u)*v,w=-2*v;else if(d===Dc)E=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const or=new J,vi=new je,iy=new J(0,0,0),ay=new J(1,1,1),Oa=new J,nc=new J,Qn=new J,fg=new je,hg=new Ms;class ca{constructor(t=0,i=0,s=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return fg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return hg.setFromEuler(this),this.setFromQuaternion(hg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class T0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sy=0;const dg=new J,lr=new Ms,ta=new je,ic=new J,Lo=new J,ry=new J,oy=new Ms,pg=new J(1,0,0),mg=new J(0,1,0),_g=new J(0,0,1),gg={type:"added"},ly={type:"removed"},cr={type:"childadded",child:null},ih={type:"childremoved",child:null};class zn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const t=new J,i=new ca,s=new Ms,l=new J(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new le}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new T0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return lr.setFromAxisAngle(t,i),this.quaternion.multiply(lr),this}rotateOnWorldAxis(t,i){return lr.setFromAxisAngle(t,i),this.quaternion.premultiply(lr),this}rotateX(t){return this.rotateOnAxis(pg,t)}rotateY(t){return this.rotateOnAxis(mg,t)}rotateZ(t){return this.rotateOnAxis(_g,t)}translateOnAxis(t,i){return dg.copy(t).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(pg,t)}translateY(t){return this.translateOnAxis(mg,t)}translateZ(t){return this.translateOnAxis(_g,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?ic.copy(t):ic.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Lo,ic,this.up):ta.lookAt(ic,Lo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),lr.setFromRotationMatrix(ta),this.quaternion.premultiply(lr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gg),cr.child=t,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ly),ih.child=t,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gg),cr.child=t,this.dispatchEvent(cr),cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,t,ry),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,oy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}zn.DEFAULT_UP=new J(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new J,ea=new J,ah=new J,na=new J,ur=new J,fr=new J,vg=new J,sh=new J,rh=new J,oh=new J,lh=new Ke,ch=new Ke,uh=new Ke;class yi{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),xi.subVectors(t,i),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){xi.subVectors(l,i),ea.subVectors(s,i),ah.subVectors(t,i);const h=xi.dot(xi),d=xi.dot(ea),m=xi.dot(ah),p=ea.dot(ea),g=ea.dot(ah),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*g)*x,E=(h*g-d*m)*x;return u.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(h,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return lh.setScalar(0),ch.setScalar(0),uh.setScalar(0),lh.fromBufferAttribute(t,i),ch.fromBufferAttribute(t,s),uh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(lh,u.x),h.addScaledVector(ch,u.y),h.addScaledVector(uh,u.z),h}static isFrontFacing(t,i,s,l){return xi.subVectors(s,i),ea.subVectors(t,i),xi.cross(ea).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),xi.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;ur.subVectors(l,s),fr.subVectors(u,s),sh.subVectors(t,s);const m=ur.dot(sh),p=fr.dot(sh);if(m<=0&&p<=0)return i.copy(s);rh.subVectors(t,l);const g=ur.dot(rh),v=fr.dot(rh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(ur,h);oh.subVectors(t,u);const M=ur.dot(oh),E=fr.dot(oh);if(E>=0&&M<=E)return i.copy(u);const w=M*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(fr,d);const y=g*E-M*v;if(y<=0&&v-g>=0&&M-E>=0)return vg.subVectors(u,l),d=(v-g)/(v-g+(M-E)),i.copy(l).addScaledVector(vg,d);const _=1/(y+w+x);return h=w*_,d=x*_,i.copy(s).addScaledVector(ur,h).addScaledVector(fr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},ac={h:0,s:0,l:0};function fh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ye{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=XS(t,1),i=me(i,0,1),s=me(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=fh(h,u,t+1/3),this.g=fh(h,u,t),this.b=fh(h,u,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=ui){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const s=b0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Ce.fromWorkingColorSpace(Rn.copy(this),t),Math.round(me(Rn.r*255,0,255))*65536+Math.round(me(Rn.g*255,0,255))*256+Math.round(me(Rn.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Rn.copy(this),i);const s=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=ui){Ce.fromWorkingColorSpace(Rn.copy(this),t);const i=Rn.r,s=Rn.g,l=Rn.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Pa),this.setHSL(Pa.h+t,Pa.s+i,Pa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Pa),t.getHSL(ac);const s=jf(Pa.h,ac.h,i),l=jf(Pa.s,ac.s,i),u=jf(Pa.l,ac.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new ye;ye.NAMES=b0;let cy=0;class Dr extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Sr,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=bh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(s.blending=this.blending),this.side!==Ga&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Th&&(s.blendSrc=this.blendSrc),this.blendDst!==bh&&(s.blendDst=this.blendDst),this.blendEquation!==_s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ag&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yd extends Dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tn=new J,sc=new fe;let uy=0;class Oi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=sg,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)sc.fromBufferAttribute(this,i),sc.applyMatrix3(t),this.setXY(i,sc.x,sc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix3(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix4(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.applyNormalMatrix(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)tn.fromBufferAttribute(this,i),tn.transformDirection(t),this.setXYZ(i,tn.x,tn.y,tn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=wo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=wo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=wo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=wo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=wo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sg&&(t.usage=this.usage),t}}class A0 extends Oi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class R0 extends Oi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Cn extends Oi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let fy=0;const ci=new je,hh=new zn,hr=new J,Jn=new Go,No=new Go,mn=new J;class Mn extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(y0(t)?R0:A0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new le().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,s){return ci.makeTranslation(t,i,s),this.applyMatrix4(ci),this}scale(t,i,s){return ci.makeScale(t,i,s),this.applyMatrix4(ci),this}lookAt(t){return hh.lookAt(t),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Cn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(Jn.min,No.min),Jn.expandByPoint(mn),mn.addVectors(Jn.max,No.max),Jn.expandByPoint(mn)):(Jn.expandByPoint(No.min),Jn.expandByPoint(No.max))}Jn.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)mn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)mn.fromBufferAttribute(d,p),m&&(hr.fromBufferAttribute(t,p),mn.add(hr)),l=Math.max(l,s.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<s.count;q++)d[q]=new J,m[q]=new J;const p=new J,g=new J,v=new J,x=new fe,M=new fe,E=new fe,w=new J,y=new J;function _(q,C,b){p.fromBufferAttribute(s,q),g.fromBufferAttribute(s,C),v.fromBufferAttribute(s,b),x.fromBufferAttribute(u,q),M.fromBufferAttribute(u,C),E.fromBufferAttribute(u,b),g.sub(p),v.sub(p),M.sub(x),E.sub(x);const I=1/(M.x*E.y-E.x*M.y);isFinite(I)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(I),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(I),d[q].add(w),d[C].add(w),d[b].add(w),m[q].add(y),m[C].add(y),m[b].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let q=0,C=P.length;q<C;++q){const b=P[q],I=b.start,st=b.count;for(let nt=I,ct=I+st;nt<ct;nt+=3)_(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const O=new J,D=new J,F=new J,H=new J;function B(q){F.fromBufferAttribute(l,q),H.copy(F);const C=d[q];O.copy(C),O.sub(F.multiplyScalar(F.dot(C))).normalize(),D.crossVectors(H,C);const I=D.dot(m[q])<0?-1:1;h.setXYZW(q,O.x,O.y,O.z,I)}for(let q=0,C=P.length;q<C;++q){const b=P[q],I=b.start,st=b.count;for(let nt=I,ct=I+st;nt<ct;nt+=3)B(t.getX(nt+0)),B(t.getX(nt+1)),B(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new J,u=new J,h=new J,d=new J,m=new J,p=new J,g=new J,v=new J;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),w=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)mn.fromBufferAttribute(t,i),mn.normalize(),t.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let M=0,E=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*g;for(let _=0;_<g;_++)x[E++]=p[M++]}return new Oi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Mn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xg=new je,fs=new Pc,rc=new Vo,Sg=new J,oc=new J,lc=new J,cc=new J,dh=new J,uc=new J,yg=new J,fc=new J;class Ni extends zn{constructor(t=new Mn,i=new yd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){uc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(dh.fromBufferAttribute(v,t),h?uc.addScaledVector(dh,g):uc.addScaledVector(dh.sub(i),g))}i.add(uc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),rc.copy(s.boundingSphere),rc.applyMatrix4(u),fs.copy(t.ray).recast(t.near),!(rc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(rc,Sg)===null||fs.origin.distanceToSquared(Sg)>(t.far-t.near)**2))&&(xg.copy(u).invert(),fs.copy(t.ray).applyMatrix4(xg),!(s.boundingBox!==null&&fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,fs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,w=x.length;E<w;E++){const y=x[E],_=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,F=O;D<F;D+=3){const H=d.getX(D),B=d.getX(D+1),q=d.getX(D+2);l=hc(this,_,t,s,p,g,v,H,B,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=E,_=w;y<_;y+=3){const P=d.getX(y),O=d.getX(y+1),D=d.getX(y+2);l=hc(this,h,t,s,p,g,v,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,w=x.length;E<w;E++){const y=x[E],_=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,F=O;D<F;D+=3){const H=D,B=D+1,q=D+2;l=hc(this,_,t,s,p,g,v,H,B,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=E,_=w;y<_;y+=3){const P=y,O=y+1,D=y+2;l=hc(this,h,t,s,p,g,v,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function hy(r,t,i,s,l,u,h,d){let m;if(t.side===kn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Ga,d),m===null)return null;fc.copy(d),fc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(fc);return p<i.near||p>i.far?null:{distance:p,point:fc.clone(),object:r}}function hc(r,t,i,s,l,u,h,d,m,p){r.getVertexPosition(d,oc),r.getVertexPosition(m,lc),r.getVertexPosition(p,cc);const g=hy(r,t,i,s,oc,lc,cc,yg);if(g){const v=new J;yi.getBarycoord(yg,oc,lc,cc,v),l&&(g.uv=yi.getInterpolatedAttribute(l,d,m,p,v,new fe)),u&&(g.uv1=yi.getInterpolatedAttribute(u,d,m,p,v,new fe)),h&&(g.normal=yi.getInterpolatedAttribute(h,d,m,p,v,new J),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new J,materialIndex:0};yi.getNormal(oc,lc,cc,x.normal),g.face=x,g.barycoord=v}return g}class ko extends Mn{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,t,h,u,0),E("z","y","x",1,-1,s,i,-t,h,u,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Cn(p,3)),this.setAttribute("normal",new Cn(g,3)),this.setAttribute("uv",new Cn(v,2));function E(w,y,_,P,O,D,F,H,B,q,C){const b=D/B,I=F/q,st=D/2,nt=F/2,ct=H/2,ft=B+1,V=q+1;let rt=0,Z=0;const St=new J;for(let L=0;L<V;L++){const at=L*I-nt;for(let Tt=0;Tt<ft;Tt++){const Rt=Tt*b-st;St[w]=Rt*P,St[y]=at*O,St[_]=ct,p.push(St.x,St.y,St.z),St[w]=0,St[y]=0,St[_]=H>0?1:-1,g.push(St.x,St.y,St.z),v.push(Tt/B),v.push(1-L/q),rt+=1}}for(let L=0;L<q;L++)for(let at=0;at<B;at++){const Tt=x+at+ft*L,Rt=x+at+ft*(L+1),Y=x+(at+1)+ft*(L+1),pt=x+(at+1)+ft*L;m.push(Tt,Rt,pt),m.push(Rt,Y,pt),Z+=6}d.addGroup(M,Z,C),M+=Z,x+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Pn(r){const t={};for(let i=0;i<r.length;i++){const s=wr(r[i]);for(const l in s)t[l]=s[l]}return t}function dy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function C0(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const py={clone:wr,merge:Pn};var my=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_y=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Va extends Dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=my,this.fragmentShader=_y,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=dy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class w0 extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ra}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new J,Mg=new fe,Eg=new fe;class fi extends w0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=cd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cd*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,Mg,Eg),i.subVectors(Eg,Mg)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Rc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const dr=-90,pr=1;class gy extends zn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(dr,pr,t,i);l.layers=this.layers,this.add(l);const u=new fi(dr,pr,t,i);u.layers=this.layers,this.add(u);const h=new fi(dr,pr,t,i);h.layers=this.layers,this.add(h);const d=new fi(dr,pr,t,i);d.layers=this.layers,this.add(d);const m=new fi(dr,pr,t,i);m.layers=this.layers,this.add(m);const p=new fi(dr,pr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Dc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,x,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class D0 extends Xn{constructor(t,i,s,l,u,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Tr,super(t,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vy extends ys{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new D0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ko(5,5,5),u=new Va({name:"CubemapFromEquirect",uniforms:wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Fa});u.uniforms.tEquirect.value=i;const h=new Ni(l,u),d=i.minFilter;return i.minFilter===xs&&(i.minFilter=Li),new gy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Po extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xy={type:"move"};class ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),_=this._getHandJoint(p,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Po;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Md{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=i}clone(){return new Md(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sy extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const mh=new J,yy=new J,My=new le;class Ba{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=mh.subVectors(s,i).cross(yy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(mh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||My.getNormalMatrix(t),l=this.coplanarPoint(mh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Vo,dc=new J;class U0{constructor(t=new Ba,i=new Ba,s=new Ba,l=new Ba,u=new Ba,h=new Ba){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ra){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],E=l[9],w=l[10],y=l[11],_=l[12],P=l[13],O=l[14],D=l[15];if(s[0].setComponents(m-u,x-p,y-M,D-_).normalize(),s[1].setComponents(m+u,x+p,y+M,D+_).normalize(),s[2].setComponents(m+h,x+g,y+E,D+P).normalize(),s[3].setComponents(m-h,x-g,y-E,D-P).normalize(),s[4].setComponents(m-d,x-v,y-w,D-O).normalize(),i===ra)s[5].setComponents(m+d,x+v,y+w,D+O).normalize();else if(i===Dc)s[5].setComponents(d,v,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(dc.x=l.normal.x>0?t.max.x:t.min.x,dc.y=l.normal.y>0?t.max.y:t.min.y,dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Io extends Dr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lc=new J,Nc=new J,Tg=new je,Oo=new Pc,pc=new Vo,_h=new J,bg=new J;class ud extends zn{constructor(t=new Mn,i=new Io){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Lc.fromBufferAttribute(i,l-1),Nc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Lc.distanceTo(Nc);t.setAttribute("lineDistance",new Cn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(l),pc.radius+=u,t.ray.intersectsSphere(pc)===!1)return;Tg.copy(l).invert(),Oo.copy(t.ray).applyMatrix4(Tg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let w=M,y=E-1;w<y;w+=p){const _=g.getX(w),P=g.getX(w+1),O=mc(this,t,Oo,m,_,P,w);O&&i.push(O)}if(this.isLineLoop){const w=g.getX(E-1),y=g.getX(M),_=mc(this,t,Oo,m,w,y,E-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let w=M,y=E-1;w<y;w+=p){const _=mc(this,t,Oo,m,w,w+1,w);_&&i.push(_)}if(this.isLineLoop){const w=mc(this,t,Oo,m,E-1,M,E-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function mc(r,t,i,s,l,u,h){const d=r.geometry.attributes.position;if(Lc.fromBufferAttribute(d,l),Nc.fromBufferAttribute(d,u),i.distanceSqToSegment(Lc,Nc,_h,bg)>s)return;_h.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(_h);if(!(p<t.near||p>t.far))return{distance:p,point:bg.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const Ag=new J,Rg=new J;class L0 extends ud{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)Ag.fromBufferAttribute(i,l),Rg.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Ag.distanceTo(Rg);t.setAttribute("lineDistance",new Cn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class N0 extends Dr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cg=new je,fd=new Pc,_c=new Vo,gc=new J;class Ey extends zn{constructor(t=new Mn,i=new N0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(l),_c.radius+=u,t.ray.intersectsSphere(_c)===!1)return;Cg.copy(l).invert(),fd.copy(t.ray).applyMatrix4(Cg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let E=x,w=M;E<w;E++){const y=p.getX(E);gc.fromBufferAttribute(v,y),wg(gc,y,m,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let E=x,w=M;E<w;E++)gc.fromBufferAttribute(v,E),wg(gc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function wg(r,t,i,s,l,u,h){const d=fd.distanceSqToPoint(r);if(d<i){const m=new J;fd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class O0 extends Xn{constructor(t,i,s,l,u,h,d,m,p,g=yr){if(g!==yr&&g!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===yr&&(s=Ss),s===void 0&&g===Rr&&(s=Ar),super(null,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ei,this.minFilter=m!==void 0?m:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ed extends Mn{constructor(t=1,i=1,s=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const g=[],v=[],x=[],M=[];let E=0;const w=[],y=s/2;let _=0;P(),h===!1&&(t>0&&O(!0),i>0&&O(!1)),this.setIndex(g),this.setAttribute("position",new Cn(v,3)),this.setAttribute("normal",new Cn(x,3)),this.setAttribute("uv",new Cn(M,2));function P(){const D=new J,F=new J;let H=0;const B=(i-t)/s;for(let q=0;q<=u;q++){const C=[],b=q/u,I=b*(i-t)+t;for(let st=0;st<=l;st++){const nt=st/l,ct=nt*m+d,ft=Math.sin(ct),V=Math.cos(ct);F.x=I*ft,F.y=-b*s+y,F.z=I*V,v.push(F.x,F.y,F.z),D.set(ft,B,V).normalize(),x.push(D.x,D.y,D.z),M.push(nt,1-b),C.push(E++)}w.push(C)}for(let q=0;q<l;q++)for(let C=0;C<u;C++){const b=w[C][q],I=w[C+1][q],st=w[C+1][q+1],nt=w[C][q+1];(t>0||C!==0)&&(g.push(b,I,nt),H+=3),(i>0||C!==u-1)&&(g.push(I,st,nt),H+=3)}p.addGroup(_,H,0),_+=H}function O(D){const F=E,H=new fe,B=new J;let q=0;const C=D===!0?t:i,b=D===!0?1:-1;for(let st=1;st<=l;st++)v.push(0,y*b,0),x.push(0,b,0),M.push(.5,.5),E++;const I=E;for(let st=0;st<=l;st++){const ct=st/l*m+d,ft=Math.cos(ct),V=Math.sin(ct);B.x=C*V,B.y=y*b,B.z=C*ft,v.push(B.x,B.y,B.z),x.push(0,b,0),H.x=ft*.5+.5,H.y=V*.5*b+.5,M.push(H.x,H.y),E++}for(let st=0;st<l;st++){const nt=F+st,ct=I+st;D===!0?g.push(ct,ct+1,nt):g.push(ct+1,ct,nt),q+=3}p.addGroup(_,q,D===!0?1:2),_+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ed(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Td extends Ed{constructor(t=1,i=1,s=32,l=1,u=!1,h=0,d=Math.PI*2){super(0,t,i,s,l,u,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d}}static fromJSON(t){return new Td(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zc extends Mn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=t/d,x=i/m,M=[],E=[],w=[],y=[];for(let _=0;_<g;_++){const P=_*x-h;for(let O=0;O<p;O++){const D=O*v-u;E.push(D,-P,0),w.push(0,0,1),y.push(O/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<d;P++){const O=P+p*_,D=P+p*(_+1),F=P+1+p*(_+1),H=P+1+p*_;M.push(O,D,H),M.push(D,F,H)}this.setIndex(M),this.setAttribute("position",new Cn(E,3)),this.setAttribute("normal",new Cn(w,3)),this.setAttribute("uv",new Cn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ty extends Dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class by extends Dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ay extends w0{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ry extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Dg{constructor(t=1,i=0,s=0){return this.radius=t,this.phi=i,this.theta=s,this}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cy extends L0{constructor(t=10,i=10,s=4473924,l=8947848){s=new ye(s),l=new ye(l);const u=i/2,h=t/i,d=t/2,m=[],p=[];for(let x=0,M=0,E=-d;x<=i;x++,E+=h){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const w=x===u?s:l;w.toArray(p,M),M+=3,w.toArray(p,M),M+=3,w.toArray(p,M),M+=3,w.toArray(p,M),M+=3}const g=new Mn;g.setAttribute("position",new Cn(m,3)),g.setAttribute("color",new Cn(p,3));const v=new Io({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class wy extends L0{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new Mn;l.setAttribute("position",new Cn(i,3)),l.setAttribute("color",new Cn(s,3));const u=new Io({vertexColors:!0,toneMapped:!1});super(l,u),this.type="AxesHelper"}setColors(t,i,s){const l=new ye,u=this.geometry.attributes.color.array;return l.set(t),l.toArray(u,0),l.toArray(u,3),l.set(i),l.toArray(u,6),l.toArray(u,9),l.set(s),l.toArray(u,12),l.toArray(u,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Dy extends Es{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Ug(r,t,i,s){const l=Uy(s);switch(i){case d0:return r*t;case m0:return r*t;case _0:return r*t*2;case g0:return r*t/l.components*l.byteLength;case vd:return r*t/l.components*l.byteLength;case v0:return r*t*2/l.components*l.byteLength;case xd:return r*t*2/l.components*l.byteLength;case p0:return r*t*3/l.components*l.byteLength;case Mi:return r*t*4/l.components*l.byteLength;case Sd:return r*t*4/l.components*l.byteLength;case Mc:case Ec:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Tc:case bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ih:case Hh:return Math.max(r,16)*Math.max(t,8)/4;case Bh:case Fh:return Math.max(r,8)*Math.max(t,8)/2;case Gh:case Vh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case kh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case qh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case jh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case td:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ed:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case nd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case id:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ac:case ad:case sd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case x0:case rd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case od:case ld:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Uy(r){switch(r){case la:case u0:return{byteLength:1,components:1};case Bo:case f0:case Fo:return{byteLength:2,components:1};case _d:case gd:return{byteLength:2,components:4};case Ss:case md:case sa:return{byteLength:4,components:1};case h0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function P0(){let r=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function Ly(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,g);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],w=v[M];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++x,v[x]=w)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const w=v[M];r.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oy=`#ifdef USE_ALPHAHASH
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
#endif`,Py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
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
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
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
#endif`,Vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ky=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qy=`#ifdef USE_IRIDESCENCE
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
#endif`,Yy=`#ifdef USE_BUMPMAP
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nM=`#define PI 3.141592653589793
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
} // validated`,iM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aM=`vec3 transformedNormal = objectNormal;
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
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cM="gl_FragColor = linearToOutputTexel( gl_FragColor );",uM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SM=`#ifdef USE_GRADIENTMAP
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
}`,yM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TM=`uniform bool receiveShadow;
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
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,AM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DM=`PhysicalMaterial material;
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
#endif`,UM=`struct PhysicalMaterial {
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
}`,LM=`
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
#endif`,NM=`#if defined( RE_IndirectDiffuse )
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
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VM=`#if defined( USE_POINTS_UV )
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
#endif`,kM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`#ifdef USE_MORPHTARGETS
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
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
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
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gE=`float getShadowMask() {
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
}`,vE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
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
#endif`,RE=`#ifdef USE_TRANSMISSION
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
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
}`,FE=`#if DEPTH_PACKING == 3200
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
}`,HE=`#define DISTANCE
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
}`,GE=`#define DISTANCE
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
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
}`,WE=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,YE=`uniform vec3 diffuse;
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
}`,jE=`#define LAMBERT
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
}`,ZE=`#define LAMBERT
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
}`,KE=`#define MATCAP
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
}`,QE=`#define MATCAP
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
}`,JE=`#define NORMAL
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
}`,$E=`#define NORMAL
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
}`,tT=`#define PHONG
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
}`,eT=`#define PHONG
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
}`,nT=`#define STANDARD
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
}`,iT=`#define STANDARD
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
}`,aT=`#define TOON
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
}`,sT=`#define TOON
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
}`,rT=`uniform float size;
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#include <common>
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
}`,cT=`uniform vec3 color;
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
}`,uT=`uniform float rotation;
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
}`,fT=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Ny,alphahash_pars_fragment:Oy,alphamap_fragment:Py,alphamap_pars_fragment:zy,alphatest_fragment:By,alphatest_pars_fragment:Iy,aomap_fragment:Fy,aomap_pars_fragment:Hy,batching_pars_vertex:Gy,batching_vertex:Vy,begin_vertex:ky,beginnormal_vertex:Xy,bsdfs:Wy,iridescence_fragment:qy,bumpmap_pars_fragment:Yy,clipping_planes_fragment:jy,clipping_planes_pars_fragment:Zy,clipping_planes_pars_vertex:Ky,clipping_planes_vertex:Qy,color_fragment:Jy,color_pars_fragment:$y,color_pars_vertex:tM,color_vertex:eM,common:nM,cube_uv_reflection_fragment:iM,defaultnormal_vertex:aM,displacementmap_pars_vertex:sM,displacementmap_vertex:rM,emissivemap_fragment:oM,emissivemap_pars_fragment:lM,colorspace_fragment:cM,colorspace_pars_fragment:uM,envmap_fragment:fM,envmap_common_pars_fragment:hM,envmap_pars_fragment:dM,envmap_pars_vertex:pM,envmap_physical_pars_fragment:bM,envmap_vertex:mM,fog_vertex:_M,fog_pars_vertex:gM,fog_fragment:vM,fog_pars_fragment:xM,gradientmap_pars_fragment:SM,lightmap_pars_fragment:yM,lights_lambert_fragment:MM,lights_lambert_pars_fragment:EM,lights_pars_begin:TM,lights_toon_fragment:AM,lights_toon_pars_fragment:RM,lights_phong_fragment:CM,lights_phong_pars_fragment:wM,lights_physical_fragment:DM,lights_physical_pars_fragment:UM,lights_fragment_begin:LM,lights_fragment_maps:NM,lights_fragment_end:OM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:zM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:IM,map_fragment:FM,map_pars_fragment:HM,map_particle_fragment:GM,map_particle_pars_fragment:VM,metalnessmap_fragment:kM,metalnessmap_pars_fragment:XM,morphinstance_vertex:WM,morphcolor_vertex:qM,morphnormal_vertex:YM,morphtarget_pars_vertex:jM,morphtarget_vertex:ZM,normal_fragment_begin:KM,normal_fragment_maps:QM,normal_pars_fragment:JM,normal_pars_vertex:$M,normal_vertex:tE,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:aE,iridescence_pars_fragment:sE,opaque_fragment:rE,packing:oE,premultiplied_alpha_fragment:lE,project_vertex:cE,dithering_fragment:uE,dithering_pars_fragment:fE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:dE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:_E,shadowmask_pars_fragment:gE,skinbase_vertex:vE,skinning_pars_vertex:xE,skinning_vertex:SE,skinnormal_vertex:yE,specularmap_fragment:ME,specularmap_pars_fragment:EE,tonemapping_fragment:TE,tonemapping_pars_fragment:bE,transmission_fragment:AE,transmission_pars_fragment:RE,uv_pars_fragment:CE,uv_pars_vertex:wE,uv_vertex:DE,worldpos_vertex:UE,background_vert:LE,background_frag:NE,backgroundCube_vert:OE,backgroundCube_frag:PE,cube_vert:zE,cube_frag:BE,depth_vert:IE,depth_frag:FE,distanceRGBA_vert:HE,distanceRGBA_frag:GE,equirect_vert:VE,equirect_frag:kE,linedashed_vert:XE,linedashed_frag:WE,meshbasic_vert:qE,meshbasic_frag:YE,meshlambert_vert:jE,meshlambert_frag:ZE,meshmatcap_vert:KE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:$E,meshphong_vert:tT,meshphong_frag:eT,meshphysical_vert:nT,meshphysical_frag:iT,meshtoon_vert:aT,meshtoon_frag:sT,points_vert:rT,points_frag:oT,shadow_vert:lT,shadow_frag:cT,sprite_vert:uT,sprite_frag:fT},Lt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ui={basic:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Pn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Pn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Pn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Pn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Pn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Pn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Pn([Lt.common,Lt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Pn([Lt.lights,Lt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ui.physical={uniforms:Pn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const vc={r:0,b:0,g:0},ds=new ca,hT=new je;function dT(r,t,i,s,l,u,h){const d=new ye(0);let m=u===!0?0:1,p,g,v=null,x=0,M=null;function E(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function w(O){let D=!1;const F=E(O);F===null?_(d,m):F&&F.isColor&&(_(F,1),D=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(O,D){const F=E(D);F&&(F.isCubeTexture||F.mapping===Oc)?(g===void 0&&(g=new Ni(new ko(1,1,1),new Va({name:"BackgroundCubeMaterial",uniforms:wr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,B,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ds.copy(D.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(hT.makeRotationFromEuler(ds)),g.material.toneMapped=Ce.getTransfer(F.colorSpace)!==Pe,(v!==F||x!==F.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,v=F,x=F.version,M=r.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Ni(new zc(2,2),new Va({name:"BackgroundMaterial",uniforms:wr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(F.colorSpace)!==Pe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(v!==F||x!==F.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,v=F,x=F.version,M=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,D){O.getRGB(vc,C0(r)),s.buffers.color.setClear(vc.r,vc.g,vc.b,D,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:w,addToRenderList:y,dispose:P}}function pT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(b,I,st,nt,ct){let ft=!1;const V=v(nt,st,I);u!==V&&(u=V,p(u.object)),ft=M(b,nt,st,ct),ft&&E(b,nt,st,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,D(b,I,st,nt),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return r.createVertexArray()}function p(b){return r.bindVertexArray(b)}function g(b){return r.deleteVertexArray(b)}function v(b,I,st){const nt=st.wireframe===!0;let ct=s[b.id];ct===void 0&&(ct={},s[b.id]=ct);let ft=ct[I.id];ft===void 0&&(ft={},ct[I.id]=ft);let V=ft[nt];return V===void 0&&(V=x(m()),ft[nt]=V),V}function x(b){const I=[],st=[],nt=[];for(let ct=0;ct<i;ct++)I[ct]=0,st[ct]=0,nt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:st,attributeDivisors:nt,object:b,attributes:{},index:null}}function M(b,I,st,nt){const ct=u.attributes,ft=I.attributes;let V=0;const rt=st.getAttributes();for(const Z in rt)if(rt[Z].location>=0){const L=ct[Z];let at=ft[Z];if(at===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),L===void 0||L.attribute!==at||at&&L.data!==at.data)return!0;V++}return u.attributesNum!==V||u.index!==nt}function E(b,I,st,nt){const ct={},ft=I.attributes;let V=0;const rt=st.getAttributes();for(const Z in rt)if(rt[Z].location>=0){let L=ft[Z];L===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(L=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(L=b.instanceColor));const at={};at.attribute=L,L&&L.data&&(at.data=L.data),ct[Z]=at,V++}u.attributes=ct,u.attributesNum=V,u.index=nt}function w(){const b=u.newAttributes;for(let I=0,st=b.length;I<st;I++)b[I]=0}function y(b){_(b,0)}function _(b,I){const st=u.newAttributes,nt=u.enabledAttributes,ct=u.attributeDivisors;st[b]=1,nt[b]===0&&(r.enableVertexAttribArray(b),nt[b]=1),ct[b]!==I&&(r.vertexAttribDivisor(b,I),ct[b]=I)}function P(){const b=u.newAttributes,I=u.enabledAttributes;for(let st=0,nt=I.length;st<nt;st++)I[st]!==b[st]&&(r.disableVertexAttribArray(st),I[st]=0)}function O(b,I,st,nt,ct,ft,V){V===!0?r.vertexAttribIPointer(b,I,st,ct,ft):r.vertexAttribPointer(b,I,st,nt,ct,ft)}function D(b,I,st,nt){w();const ct=nt.attributes,ft=st.getAttributes(),V=I.defaultAttributeValues;for(const rt in ft){const Z=ft[rt];if(Z.location>=0){let St=ct[rt];if(St===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(St=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(St=b.instanceColor)),St!==void 0){const L=St.normalized,at=St.itemSize,Tt=t.get(St);if(Tt===void 0)continue;const Rt=Tt.buffer,Y=Tt.type,pt=Tt.bytesPerElement,xt=Y===r.INT||Y===r.UNSIGNED_INT||St.gpuType===md;if(St.isInterleavedBufferAttribute){const bt=St.data,Ct=bt.stride,Qt=St.offset;if(bt.isInstancedInterleavedBuffer){for(let zt=0;zt<Z.locationSize;zt++)_(Z.location+zt,bt.meshPerAttribute);b.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let zt=0;zt<Z.locationSize;zt++)y(Z.location+zt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let zt=0;zt<Z.locationSize;zt++)O(Z.location+zt,at/Z.locationSize,Y,L,Ct*pt,(Qt+at/Z.locationSize*zt)*pt,xt)}else{if(St.isInstancedBufferAttribute){for(let bt=0;bt<Z.locationSize;bt++)_(Z.location+bt,St.meshPerAttribute);b.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let bt=0;bt<Z.locationSize;bt++)y(Z.location+bt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let bt=0;bt<Z.locationSize;bt++)O(Z.location+bt,at/Z.locationSize,Y,L,at*pt,at/Z.locationSize*bt*pt,xt)}}else if(V!==void 0){const L=V[rt];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(Z.location,L);break;case 3:r.vertexAttrib3fv(Z.location,L);break;case 4:r.vertexAttrib4fv(Z.location,L);break;default:r.vertexAttrib1fv(Z.location,L)}}}}P()}function F(){q();for(const b in s){const I=s[b];for(const st in I){const nt=I[st];for(const ct in nt)g(nt[ct].object),delete nt[ct];delete I[st]}delete s[b]}}function H(b){if(s[b.id]===void 0)return;const I=s[b.id];for(const st in I){const nt=I[st];for(const ct in nt)g(nt[ct].object),delete nt[ct];delete I[st]}delete s[b.id]}function B(b){for(const I in s){const st=s[I];if(st[b.id]===void 0)continue;const nt=st[b.id];for(const ct in nt)g(nt[ct].object),delete nt[ct];delete st[b.id]}}function q(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function mT(r,t,i){let s;function l(p){s=p}function u(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E];i.update(M,s,1)}function m(p,g,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,v);let E=0;for(let w=0;w<v;w++)E+=g[w]*x[w];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function _T(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Mi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const q=B===Fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==la&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==sa&&!q)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:F,maxSamples:H}}function gT(r){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Ba,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||l;return l=x,s=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,_=r.get(v);if(!l||E===null||E.length===0||u&&!y)u?g(null):p();else{const P=u?0:s,O=P*4;let D=_.clippingState||null;m.value=D,D=g(E,x,O,M);for(let F=0;F!==O;++F)D[F]=i[F];_.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,x,M,E){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=m.value,E!==!0||y===null){const _=M+w*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,D=M;O!==w;++O,D+=4)h.copy(v[O]).applyMatrix4(P,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function vT(r){let t=new WeakMap;function i(h,d){return d===Nh?h.mapping=Tr:d===Oh&&(h.mapping=br),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Nh||d===Oh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new vy(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const vr=4,Lg=[.125,.215,.35,.446,.526,.582],gs=20,gh=new Ay,Ng=new ye;let vh=null,xh=0,Sh=0,yh=!1;const ms=(1+Math.sqrt(5))/2,mr=1/ms,Og=[new J(-ms,mr,0),new J(ms,mr,0),new J(-mr,0,ms),new J(mr,0,ms),new J(0,ms,-mr),new J(0,ms,mr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Pg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vh,xh,Sh),this._renderer.xr.enabled=yh,t.scissorTest=!1,xc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Tr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Fo,format:Mi,colorSpace:Cr,depthBuffer:!1},l=zg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xT(u)),this._blurMaterial=ST(u,t,i)}return l}_compileMaterial(t){const i=new Ni(this._lodPlanes[0],t);this._renderer.compile(i,gh)}_sceneToCubeUV(t,i,s,l){const d=new fi(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Ng),g.toneMapping=Ha,g.autoClear=!1;const M=new yd({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),E=new Ni(new ko,M);let w=!1;const y=t.background;y?y.isColor&&(M.color.copy(y),t.background=null,w=!0):(M.color.copy(Ng),w=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):P===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const O=this._cubeSize;xc(l,P*O,_>2?O:0,O,O),g.setRenderTarget(l),w&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=v,t.background=y}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Tr||t.mapping===br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ni(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;xc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,gh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Og[(l-u-1)%Og.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ni(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gs-1),w=u/E,y=isFinite(u)?1+Math.floor(g*w):gs;y>gs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gs}`);const _=[];let P=0;for(let B=0;B<gs;++B){const q=B/w,C=Math.exp(-q*q/2);_.push(C),B===0?P+=C:B<y&&(P+=2*C)}for(let B=0;B<_.length;B++)_[B]=_[B]/P;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=E,x.mipInt.value=O-s;const D=this._sizeLods[l],F=3*D*(l>O-vr?l-O+vr:0),H=4*(this._cubeSize-D);xc(i,F,H,3*D,2*D),m.setRenderTarget(i),m.render(v,gh)}}function xT(r){const t=[],i=[],s=[];let l=r;const u=r-vr+1+Lg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-vr?m=Lg[h-r+vr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,w=3,y=2,_=1,P=new Float32Array(w*E*M),O=new Float32Array(y*E*M),D=new Float32Array(_*E*M);for(let H=0;H<M;H++){const B=H%3*2/3-1,q=H>2?0:-1,C=[B,q,0,B+2/3,q,0,B+2/3,q+1,0,B,q,0,B+2/3,q+1,0,B,q+1,0];P.set(C,w*E*H),O.set(x,y*E*H);const b=[H,H,H,H,H,H];D.set(b,_*E*H)}const F=new Mn;F.setAttribute("position",new Oi(P,w)),F.setAttribute("uv",new Oi(O,y)),F.setAttribute("faceIndex",new Oi(D,_)),t.push(F),l>vr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function zg(r,t,i){const s=new ys(r,t,i);return s.texture.mapping=Oc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function xc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function ST(r,t,i){const s=new Float32Array(gs),l=new J(0,1,0);return new Va({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bd(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Bg(){return new Va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bd(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Ig(){return new Va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function bd(){return`

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
	`}function yT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Nh||m===Oh,g=m===Tr||m===br;if(p||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Pg(r)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Pg(r)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function MT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&_r("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function ET(r,t,i,s){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],r.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,E=v.attributes.position;let w=0;if(M!==null){const P=M.array;w=M.version;for(let O=0,D=P.length;O<D;O+=3){const F=P[O+0],H=P[O+1],B=P[O+2];x.push(F,H,H,B,B,F)}}else if(E!==void 0){const P=E.array;w=E.version;for(let O=0,D=P.length/3-1;O<D;O+=3){const F=O+0,H=O+1,B=O+2;x.push(F,H,H,B,B,F)}}else return;const y=new(y0(x)?R0:A0)(x,1);y.version=w;const _=u.get(v);_&&t.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function TT(r,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){r.drawElements(s,M,u,x*h),i.update(M,s,1)}function p(x,M,E){E!==0&&(r.drawElementsInstanced(s,M,u,x*h,E),i.update(M,s,E))}function g(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,x,0,E);let y=0;for(let _=0;_<E;_++)y+=M[_];i.update(y,s,1)}function v(x,M,E,w){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,x,0,w,0,E);let _=0;for(let P=0;P<E;P++)_+=M[P]*w[P];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function bT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function AT(r,t,i){const s=new WeakMap,l=new Ke;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let b=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",b)};var M=b;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let F=d.attributes.position.count*D,H=1;F>t.maxTextureSize&&(H=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const B=new Float32Array(F*H*4*v),q=new E0(B,F,H,v);q.type=sa,q.needsUpdate=!0;const C=D*4;for(let I=0;I<v;I++){const st=_[I],nt=P[I],ct=O[I],ft=F*H*4*I;for(let V=0;V<st.count;V++){const rt=V*C;E===!0&&(l.fromBufferAttribute(st,V),B[ft+rt+0]=l.x,B[ft+rt+1]=l.y,B[ft+rt+2]=l.z,B[ft+rt+3]=0),w===!0&&(l.fromBufferAttribute(nt,V),B[ft+rt+4]=l.x,B[ft+rt+5]=l.y,B[ft+rt+6]=l.z,B[ft+rt+7]=0),y===!0&&(l.fromBufferAttribute(ct,V),B[ft+rt+8]=l.x,B[ft+rt+9]=l.y,B[ft+rt+10]=l.z,B[ft+rt+11]=ct.itemSize===4?l.w:1)}}x={count:v,texture:q,size:new fe(F,H)},s.set(d,x),d.addEventListener("dispose",b)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const w=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:u}}function RT(r,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const z0=new Xn,Fg=new O0(1,1),B0=new E0,I0=new ey,F0=new D0,Hg=[],Gg=[],Vg=new Float32Array(16),kg=new Float32Array(9),Xg=new Float32Array(4);function Ur(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=Hg[l];if(u===void 0&&(u=new Float32Array(l),Hg[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(u,d)}return u}function cn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function un(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Bc(r,t){let i=Gg[t];i===void 0&&(i=new Int32Array(t),Gg[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function CT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function wT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;r.uniform2fv(this.addr,t),un(i,t)}}function DT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;r.uniform3fv(this.addr,t),un(i,t)}}function UT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;r.uniform4fv(this.addr,t),un(i,t)}}function LT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(cn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),un(i,t)}else{if(cn(i,s))return;Xg.set(s),r.uniformMatrix2fv(this.addr,!1,Xg),un(i,s)}}function NT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(cn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),un(i,t)}else{if(cn(i,s))return;kg.set(s),r.uniformMatrix3fv(this.addr,!1,kg),un(i,s)}}function OT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(cn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),un(i,t)}else{if(cn(i,s))return;Vg.set(s),r.uniformMatrix4fv(this.addr,!1,Vg),un(i,s)}}function PT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function zT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;r.uniform2iv(this.addr,t),un(i,t)}}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;r.uniform3iv(this.addr,t),un(i,t)}}function IT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;r.uniform4iv(this.addr,t),un(i,t)}}function FT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function HT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;r.uniform2uiv(this.addr,t),un(i,t)}}function GT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;r.uniform3uiv(this.addr,t),un(i,t)}}function VT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;r.uniform4uiv(this.addr,t),un(i,t)}}function kT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(Fg.compareFunction=S0,u=Fg):u=z0,i.setTexture2D(t||u,l)}function XT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||I0,l)}function WT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||F0,l)}function qT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||B0,l)}function YT(r){switch(r){case 5126:return CT;case 35664:return wT;case 35665:return DT;case 35666:return UT;case 35674:return LT;case 35675:return NT;case 35676:return OT;case 5124:case 35670:return PT;case 35667:case 35671:return zT;case 35668:case 35672:return BT;case 35669:case 35673:return IT;case 5125:return FT;case 36294:return HT;case 36295:return GT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return qT}}function jT(r,t){r.uniform1fv(this.addr,t)}function ZT(r,t){const i=Ur(t,this.size,2);r.uniform2fv(this.addr,i)}function KT(r,t){const i=Ur(t,this.size,3);r.uniform3fv(this.addr,i)}function QT(r,t){const i=Ur(t,this.size,4);r.uniform4fv(this.addr,i)}function JT(r,t){const i=Ur(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function $T(r,t){const i=Ur(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function tb(r,t){const i=Ur(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function eb(r,t){r.uniform1iv(this.addr,t)}function nb(r,t){r.uniform2iv(this.addr,t)}function ib(r,t){r.uniform3iv(this.addr,t)}function ab(r,t){r.uniform4iv(this.addr,t)}function sb(r,t){r.uniform1uiv(this.addr,t)}function rb(r,t){r.uniform2uiv(this.addr,t)}function ob(r,t){r.uniform3uiv(this.addr,t)}function lb(r,t){r.uniform4uiv(this.addr,t)}function cb(r,t,i){const s=this.cache,l=t.length,u=Bc(i,l);cn(s,u)||(r.uniform1iv(this.addr,u),un(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||z0,u[h])}function ub(r,t,i){const s=this.cache,l=t.length,u=Bc(i,l);cn(s,u)||(r.uniform1iv(this.addr,u),un(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||I0,u[h])}function fb(r,t,i){const s=this.cache,l=t.length,u=Bc(i,l);cn(s,u)||(r.uniform1iv(this.addr,u),un(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||F0,u[h])}function hb(r,t,i){const s=this.cache,l=t.length,u=Bc(i,l);cn(s,u)||(r.uniform1iv(this.addr,u),un(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||B0,u[h])}function db(r){switch(r){case 5126:return jT;case 35664:return ZT;case 35665:return KT;case 35666:return QT;case 35674:return JT;case 35675:return $T;case 35676:return tb;case 5124:case 35670:return eb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return ab;case 5125:return sb;case 36294:return rb;case 36295:return ob;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return hb}}class pb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=YT(i.type)}}class mb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=db(i.type)}}class _b{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Mh=/(\w+)(\])?(\[|\.)?/g;function Wg(r,t){r.seq.push(t),r.map[t.id]=t}function gb(r,t,i){const s=r.name,l=s.length;for(Mh.lastIndex=0;;){const u=Mh.exec(s),h=Mh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Wg(i,p===void 0?new pb(d,r,t):new mb(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new _b(d),Wg(i,v)),i=v}}}class Cc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);gb(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function qg(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const vb=37297;let xb=0;function Sb(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Yg=new le;function yb(r){Ce._getMatrix(Yg,Ce.workingColorSpace,r);const t=`mat3( ${Yg.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case wc:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function jg(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Sb(r.getShaderSource(t),h)}else return l}function Mb(r,t){const i=yb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Eb(r,t){let i;switch(t){case bS:i="Linear";break;case AS:i="Reinhard";break;case RS:i="Cineon";break;case CS:i="ACESFilmic";break;case DS:i="AgX";break;case US:i="Neutral";break;case wS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new J;function Tb(){Ce.getLuminanceCoefficients(Sc);const r=Sc.x.toFixed(4),t=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function Ab(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Rb(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function zo(r){return r!==""}function Zg(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kg(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(r){return r.replace(Cb,Db)}const wb=new Map;function Db(r,t){let i=ce[t];if(i===void 0){const s=wb.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return hd(i)}const Ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qg(r){return r.replace(Ub,Lb)}function Lb(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Jg(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Nb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===o0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===aS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ia&&(t="SHADOWMAP_TYPE_VSM"),t}function Ob(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Tr:case br:t="ENVMAP_TYPE_CUBE";break;case Oc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function zb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case l0:t="ENVMAP_BLENDING_MULTIPLY";break;case ES:t="ENVMAP_BLENDING_MIX";break;case TS:t="ENVMAP_BLENDING_ADD";break}return t}function Bb(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Ib(r,t,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Nb(i),p=Ob(i),g=Pb(i),v=zb(i),x=Bb(i),M=bb(i),E=Ab(u),w=l.createProgram();let y,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(zo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(zo).join(`
`),_.length>0&&(_+=`
`)):(y=[Jg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),_=[Jg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ha?Eb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Mb("linearToOutputTexel",i.outputColorSpace),Tb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zo).join(`
`)),h=hd(h),h=Zg(h,i),h=Kg(h,i),d=hd(d),d=Zg(d,i),d=Kg(d,i),h=Qg(h),d=Qg(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=P+y+h,D=P+_+d,F=qg(l,l.VERTEX_SHADER,O),H=qg(l,l.FRAGMENT_SHADER,D);l.attachShader(w,F),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(I){if(r.debug.checkShaderErrors){const st=l.getProgramInfoLog(w).trim(),nt=l.getShaderInfoLog(F).trim(),ct=l.getShaderInfoLog(H).trim();let ft=!0,V=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ft=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,F,H);else{const rt=jg(l,F,"vertex"),Z=jg(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+st+`
`+rt+`
`+Z)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(nt===""||ct==="")&&(V=!1);V&&(I.diagnostics={runnable:ft,programLog:st,vertexShader:{log:nt,prefix:y},fragmentShader:{log:ct,prefix:_}})}l.deleteShader(F),l.deleteShader(H),q=new Cc(l,w),C=Rb(l,w)}let q;this.getUniforms=function(){return q===void 0&&B(this),q};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(w,vb)),b},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xb++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=H,this}let Fb=0;class Hb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Gb(t),i.set(t,s)),s}}class Gb{constructor(t){this.id=Fb++,this.code=t,this.usedTimes=0}}function Vb(r,t,i,s,l,u,h){const d=new T0,m=new Hb,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,b,I,st,nt){const ct=st.fog,ft=nt.geometry,V=C.isMeshStandardMaterial?st.environment:null,rt=(C.isMeshStandardMaterial?i:t).get(C.envMap||V),Z=rt&&rt.mapping===Oc?rt.image.height:null,St=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const L=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,at=L!==void 0?L.length:0;let Tt=0;ft.morphAttributes.position!==void 0&&(Tt=1),ft.morphAttributes.normal!==void 0&&(Tt=2),ft.morphAttributes.color!==void 0&&(Tt=3);let Rt,Y,pt,xt;if(St){const Te=Ui[St];Rt=Te.vertexShader,Y=Te.fragmentShader}else Rt=C.vertexShader,Y=C.fragmentShader,m.update(C),pt=m.getVertexShaderID(C),xt=m.getFragmentShaderID(C);const bt=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),Qt=nt.isInstancedMesh===!0,zt=nt.isBatchedMesh===!0,Ee=!!C.map,we=!!C.matcap,ae=!!rt,z=!!C.aoMap,_n=!!C.lightMap,re=!!C.bumpMap,he=!!C.normalMap,Xt=!!C.displacementMap,De=!!C.emissiveMap,Wt=!!C.metalnessMap,U=!!C.roughnessMap,T=C.anisotropy>0,et=C.clearcoat>0,ht=C.dispersion>0,vt=C.iridescence>0,dt=C.sheen>0,Gt=C.transmission>0,Dt=T&&!!C.anisotropyMap,Bt=et&&!!C.clearcoatMap,_e=et&&!!C.clearcoatNormalMap,Et=et&&!!C.clearcoatRoughnessMap,It=vt&&!!C.iridescenceMap,Yt=vt&&!!C.iridescenceThicknessMap,Vt=dt&&!!C.sheenColorMap,Ft=dt&&!!C.sheenRoughnessMap,se=!!C.specularMap,Zt=!!C.specularColorMap,Ue=!!C.specularIntensityMap,X=Gt&&!!C.transmissionMap,Nt=Gt&&!!C.thicknessMap,ot=!!C.gradientMap,_t=!!C.alphaMap,wt=C.alphaTest>0,Ut=!!C.alphaHash,$t=!!C.extensions;let Ge=Ha;C.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ge=r.toneMapping);const en={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:Rt,fragmentShader:Y,defines:C.defines,customVertexShaderID:pt,customFragmentShaderID:xt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:zt,batchingColor:zt&&nt._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&nt.instanceColor!==null,instancingMorph:Qt&&nt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Cr,alphaToCoverage:!!C.alphaToCoverage,map:Ee,matcap:we,envMap:ae,envMapMode:ae&&rt.mapping,envMapCubeUVHeight:Z,aoMap:z,lightMap:_n,bumpMap:re,normalMap:he,displacementMap:x&&Xt,emissiveMap:De,normalMapObjectSpace:he&&C.normalMapType===zS,normalMapTangentSpace:he&&C.normalMapType===PS,metalnessMap:Wt,roughnessMap:U,anisotropy:T,anisotropyMap:Dt,clearcoat:et,clearcoatMap:Bt,clearcoatNormalMap:_e,clearcoatRoughnessMap:Et,dispersion:ht,iridescence:vt,iridescenceMap:It,iridescenceThicknessMap:Yt,sheen:dt,sheenColorMap:Vt,sheenRoughnessMap:Ft,specularMap:se,specularColorMap:Zt,specularIntensityMap:Ue,transmission:Gt,transmissionMap:X,thicknessMap:Nt,gradientMap:ot,opaque:C.transparent===!1&&C.blending===Sr&&C.alphaToCoverage===!1,alphaMap:_t,alphaTest:wt,alphaHash:Ut,combine:C.combine,mapUv:Ee&&w(C.map.channel),aoMapUv:z&&w(C.aoMap.channel),lightMapUv:_n&&w(C.lightMap.channel),bumpMapUv:re&&w(C.bumpMap.channel),normalMapUv:he&&w(C.normalMap.channel),displacementMapUv:Xt&&w(C.displacementMap.channel),emissiveMapUv:De&&w(C.emissiveMap.channel),metalnessMapUv:Wt&&w(C.metalnessMap.channel),roughnessMapUv:U&&w(C.roughnessMap.channel),anisotropyMapUv:Dt&&w(C.anisotropyMap.channel),clearcoatMapUv:Bt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:_e&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&w(C.sheenRoughnessMap.channel),specularMapUv:se&&w(C.specularMap.channel),specularColorMapUv:Zt&&w(C.specularColorMap.channel),specularIntensityMapUv:Ue&&w(C.specularIntensityMap.channel),transmissionMapUv:X&&w(C.transmissionMap.channel),thicknessMapUv:Nt&&w(C.thicknessMap.channel),alphaMapUv:_t&&w(C.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(he||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ft.attributes.uv&&(Ee||_t),fog:!!ct,useFog:C.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:nt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Tt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ee&&C.map.isVideoTexture===!0&&Ce.getTransfer(C.map.colorSpace)===Pe,decodeVideoTextureEmissive:De&&C.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(C.emissiveMap.colorSpace)===Pe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===aa,flipSided:C.side===kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:$t&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&C.extensions.multiDraw===!0||zt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return en.vertexUv1s=p.has(1),en.vertexUv2s=p.has(2),en.vertexUv3s=p.has(3),p.clear(),en}function _(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const I in C.defines)b.push(I),b.push(C.defines[I]);return C.isRawShaderMaterial===!1&&(P(b,C),O(b,C),b.push(r.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function P(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function O(C,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reverseDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const b=E[C.type];let I;if(b){const st=Ui[b];I=py.clone(st.uniforms)}else I=C.uniforms;return I}function F(C,b){let I;for(let st=0,nt=g.length;st<nt;st++){const ct=g[st];if(ct.cacheKey===b){I=ct,++I.usedTimes;break}}return I===void 0&&(I=new Ib(r,b,C,u),g.push(I)),I}function H(C){if(--C.usedTimes===0){const b=g.indexOf(C);g[b]=g[g.length-1],g.pop(),C.destroy()}}function B(C){m.remove(C)}function q(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:F,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:q}}function kb(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Xb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function $g(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function t0(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,x,M,E,w,y){let _=r[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:w,group:y},r[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=w,_.group=y),t++,_}function d(v,x,M,E,w,y){const _=h(v,x,M,E,w,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,E,w,y){const _=h(v,x,M,E,w,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||Xb),s.length>1&&s.sort(x||$g),l.length>1&&l.sort(x||$g)}function g(){for(let v=t,x=r.length;v<x;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function Wb(){let r=new WeakMap;function t(s,l){const u=r.get(s);let h;return u===void 0?(h=new t0,r.set(s,[h])):l>=u.length?(h=new t0,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function qb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new ye};break;case"SpotLight":i={position:new J,direction:new J,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function Yb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let jb=0;function Zb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Kb(r){const t=new qb,i=Yb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,u=new je,h=new je;function d(p){let g=0,v=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,E=0,w=0,y=0,_=0,P=0,O=0,D=0,F=0,H=0,B=0;p.sort(Zb);for(let C=0,b=p.length;C<b;C++){const I=p[C],st=I.color,nt=I.intensity,ct=I.distance,ft=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=st.r*nt,v+=st.g*nt,x+=st.b*nt;else if(I.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(I.sh.coefficients[V],nt);B++}else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const rt=I.shadow,Z=i.get(I);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=ft,s.directionalShadowMatrix[M]=I.shadow.matrix,P++}s.directional[M]=V,M++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(st).multiplyScalar(nt),V.distance=ct,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,s.spot[w]=V;const rt=I.shadow;if(I.map&&(s.spotLightMap[F]=I.map,F++,rt.updateMatrices(I),I.castShadow&&H++),s.spotLightMatrix[w]=rt.matrix,I.castShadow){const Z=i.get(I);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,s.spotShadow[w]=Z,s.spotShadowMap[w]=ft,D++}w++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(st).multiplyScalar(nt),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),s.rectArea[y]=V,y++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const rt=I.shadow,Z=i.get(I);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,Z.shadowCameraNear=rt.camera.near,Z.shadowCameraFar=rt.camera.far,s.pointShadow[E]=Z,s.pointShadowMap[E]=ft,s.pointShadowMatrix[E]=I.shadow.matrix,O++}s.point[E]=V,E++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(nt),V.groundColor.copy(I.groundColor).multiplyScalar(nt),s.hemi[_]=V,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const q=s.hash;(q.directionalLength!==M||q.pointLength!==E||q.spotLength!==w||q.rectAreaLength!==y||q.hemiLength!==_||q.numDirectionalShadows!==P||q.numPointShadows!==O||q.numSpotShadows!==D||q.numSpotMaps!==F||q.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+F-H,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=B,q.directionalLength=M,q.pointLength=E,q.spotLength=w,q.rectAreaLength=y,q.hemiLength=_,q.numDirectionalShadows=P,q.numPointShadows=O,q.numSpotShadows=D,q.numSpotMaps=F,q.numLightProbes=B,s.version=jb++)}function m(p,g){let v=0,x=0,M=0,E=0,w=0;const y=g.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const O=p[_];if(O.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(O.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(O.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:m,state:s}}function e0(r){const t=new Kb(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Qb(r){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new e0(r),t.set(l,[d])):u>=h.length?(d=new e0(r),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Jb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$b=`uniform sampler2D shadow_pass;
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
}`;function tA(r,t,i){let s=new U0;const l=new fe,u=new fe,h=new Ke,d=new Ty({depthPacking:OS}),m=new by,p={},g=i.maxTextureSize,v={[Ga]:kn,[kn]:Ga,[aa]:aa},x=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Jb,fragmentShader:$b}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Mn;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ni(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=o0;let _=this.type;this.render=function(H,B,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const C=r.getRenderTarget(),b=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),st=r.state;st.setBlending(Fa),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const nt=_!==ia&&this.type===ia,ct=_===ia&&this.type!==ia;for(let ft=0,V=H.length;ft<V;ft++){const rt=H[ft],Z=rt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const St=Z.getFrameExtents();if(l.multiply(St),u.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/St.x),l.x=u.x*St.x,Z.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/St.y),l.y=u.y*St.y,Z.mapSize.y=u.y)),Z.map===null||nt===!0||ct===!0){const at=this.type!==ia?{minFilter:Ei,magFilter:Ei}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ys(l.x,l.y,at),Z.map.texture.name=rt.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const L=Z.getViewportCount();for(let at=0;at<L;at++){const Tt=Z.getViewport(at);h.set(u.x*Tt.x,u.y*Tt.y,u.x*Tt.z,u.y*Tt.w),st.viewport(h),Z.updateMatrices(rt,at),s=Z.getFrustum(),D(B,q,Z.camera,rt,this.type)}Z.isPointLightShadow!==!0&&this.type===ia&&P(Z,q),Z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(C,b,I)};function P(H,B){const q=t.update(w);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new ys(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(B,null,q,x,w,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(B,null,q,M,w,null)}function O(H,B,q,C){let b=null;const I=q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(I!==void 0)b=I;else if(b=q.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const st=b.uuid,nt=B.uuid;let ct=p[st];ct===void 0&&(ct={},p[st]=ct);let ft=ct[nt];ft===void 0&&(ft=b.clone(),ct[nt]=ft,B.addEventListener("dispose",F)),b=ft}if(b.visible=B.visible,b.wireframe=B.wireframe,C===ia?b.side=B.shadowSide!==null?B.shadowSide:B.side:b.side=B.shadowSide!==null?B.shadowSide:v[B.side],b.alphaMap=B.alphaMap,b.alphaTest=B.alphaTest,b.map=B.map,b.clipShadows=B.clipShadows,b.clippingPlanes=B.clippingPlanes,b.clipIntersection=B.clipIntersection,b.displacementMap=B.displacementMap,b.displacementScale=B.displacementScale,b.displacementBias=B.displacementBias,b.wireframeLinewidth=B.wireframeLinewidth,b.linewidth=B.linewidth,q.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const st=r.properties.get(b);st.light=q}return b}function D(H,B,q,C,b){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&b===ia)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,H.matrixWorld);const nt=t.update(H),ct=H.material;if(Array.isArray(ct)){const ft=nt.groups;for(let V=0,rt=ft.length;V<rt;V++){const Z=ft[V],St=ct[Z.materialIndex];if(St&&St.visible){const L=O(H,St,C,b);H.onBeforeShadow(r,H,B,q,nt,L,Z),r.renderBufferDirect(q,null,nt,L,H,Z),H.onAfterShadow(r,H,B,q,nt,L,Z)}}}else if(ct.visible){const ft=O(H,ct,C,b);H.onBeforeShadow(r,H,B,q,nt,ft,null),r.renderBufferDirect(q,null,nt,ft,H,null),H.onAfterShadow(r,H,B,q,nt,ft,null)}}const st=H.children;for(let nt=0,ct=st.length;nt<ct;nt++)D(st[nt],B,q,C,b)}function F(H){H.target.removeEventListener("dispose",F);for(const q in p){const C=p[q],b=H.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const eA={[Ah]:Rh,[Ch]:Uh,[wh]:Lh,[Er]:Dh,[Rh]:Ah,[Uh]:Ch,[Lh]:wh,[Dh]:Er};function nA(r,t){function i(){let X=!1;const Nt=new Ke;let ot=null;const _t=new Ke(0,0,0,0);return{setMask:function(wt){ot!==wt&&!X&&(r.colorMask(wt,wt,wt,wt),ot=wt)},setLocked:function(wt){X=wt},setClear:function(wt,Ut,$t,Ge,en){en===!0&&(wt*=Ge,Ut*=Ge,$t*=Ge),Nt.set(wt,Ut,$t,Ge),_t.equals(Nt)===!1&&(r.clearColor(wt,Ut,$t,Ge),_t.copy(Nt))},reset:function(){X=!1,ot=null,_t.set(-1,0,0,0)}}}function s(){let X=!1,Nt=!1,ot=null,_t=null,wt=null;return{setReversed:function(Ut){if(Nt!==Ut){const $t=t.get("EXT_clip_control");Nt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Ge=wt;wt=null,this.setClear(Ge)}Nt=Ut},getReversed:function(){return Nt},setTest:function(Ut){Ut?bt(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(Ut){ot!==Ut&&!X&&(r.depthMask(Ut),ot=Ut)},setFunc:function(Ut){if(Nt&&(Ut=eA[Ut]),_t!==Ut){switch(Ut){case Ah:r.depthFunc(r.NEVER);break;case Rh:r.depthFunc(r.ALWAYS);break;case Ch:r.depthFunc(r.LESS);break;case Er:r.depthFunc(r.LEQUAL);break;case wh:r.depthFunc(r.EQUAL);break;case Dh:r.depthFunc(r.GEQUAL);break;case Uh:r.depthFunc(r.GREATER);break;case Lh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=Ut}},setLocked:function(Ut){X=Ut},setClear:function(Ut){wt!==Ut&&(Nt&&(Ut=1-Ut),r.clearDepth(Ut),wt=Ut)},reset:function(){X=!1,ot=null,_t=null,wt=null,Nt=!1}}}function l(){let X=!1,Nt=null,ot=null,_t=null,wt=null,Ut=null,$t=null,Ge=null,en=null;return{setTest:function(Te){X||(Te?bt(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(Te){Nt!==Te&&!X&&(r.stencilMask(Te),Nt=Te)},setFunc:function(Te,wn,Dn){(ot!==Te||_t!==wn||wt!==Dn)&&(r.stencilFunc(Te,wn,Dn),ot=Te,_t=wn,wt=Dn)},setOp:function(Te,wn,Dn){(Ut!==Te||$t!==wn||Ge!==Dn)&&(r.stencilOp(Te,wn,Dn),Ut=Te,$t=wn,Ge=Dn)},setLocked:function(Te){X=Te},setClear:function(Te){en!==Te&&(r.clearStencil(Te),en=Te)},reset:function(){X=!1,Nt=null,ot=null,_t=null,wt=null,Ut=null,$t=null,Ge=null,en=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],E=null,w=!1,y=null,_=null,P=null,O=null,D=null,F=null,H=null,B=new ye(0,0,0),q=0,C=!1,b=null,I=null,st=null,nt=null,ct=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,rt=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=rt>=1):Z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=rt>=2);let St=null,L={};const at=r.getParameter(r.SCISSOR_BOX),Tt=r.getParameter(r.VIEWPORT),Rt=new Ke().fromArray(at),Y=new Ke().fromArray(Tt);function pt(X,Nt,ot,_t){const wt=new Uint8Array(4),Ut=r.createTexture();r.bindTexture(X,Ut),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<ot;$t++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(Nt+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return Ut}const xt={};xt[r.TEXTURE_2D]=pt(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),bt(r.DEPTH_TEST),h.setFunc(Er),re(!1),he(tg),bt(r.CULL_FACE),z(Fa);function bt(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function Ct(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function Qt(X,Nt){return v[X]!==Nt?(r.bindFramebuffer(X,Nt),v[X]=Nt,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Nt),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function zt(X,Nt){let ot=M,_t=!1;if(X){ot=x.get(Nt),ot===void 0&&(ot=[],x.set(Nt,ot));const wt=X.textures;if(ot.length!==wt.length||ot[0]!==r.COLOR_ATTACHMENT0){for(let Ut=0,$t=wt.length;Ut<$t;Ut++)ot[Ut]=r.COLOR_ATTACHMENT0+Ut;ot.length=wt.length,_t=!0}}else ot[0]!==r.BACK&&(ot[0]=r.BACK,_t=!0);_t&&r.drawBuffers(ot)}function Ee(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const we={[_s]:r.FUNC_ADD,[rS]:r.FUNC_SUBTRACT,[oS]:r.FUNC_REVERSE_SUBTRACT};we[lS]=r.MIN,we[cS]=r.MAX;const ae={[uS]:r.ZERO,[fS]:r.ONE,[hS]:r.SRC_COLOR,[Th]:r.SRC_ALPHA,[vS]:r.SRC_ALPHA_SATURATE,[_S]:r.DST_COLOR,[pS]:r.DST_ALPHA,[dS]:r.ONE_MINUS_SRC_COLOR,[bh]:r.ONE_MINUS_SRC_ALPHA,[gS]:r.ONE_MINUS_DST_COLOR,[mS]:r.ONE_MINUS_DST_ALPHA,[xS]:r.CONSTANT_COLOR,[SS]:r.ONE_MINUS_CONSTANT_COLOR,[yS]:r.CONSTANT_ALPHA,[MS]:r.ONE_MINUS_CONSTANT_ALPHA};function z(X,Nt,ot,_t,wt,Ut,$t,Ge,en,Te){if(X===Fa){w===!0&&(Ct(r.BLEND),w=!1);return}if(w===!1&&(bt(r.BLEND),w=!0),X!==sS){if(X!==y||Te!==C){if((_!==_s||D!==_s)&&(r.blendEquation(r.FUNC_ADD),_=_s,D=_s),Te)switch(X){case Sr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eg:r.blendFunc(r.ONE,r.ONE);break;case ng:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ig:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Sr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ng:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ig:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,O=null,F=null,H=null,B.set(0,0,0),q=0,y=X,C=Te}return}wt=wt||Nt,Ut=Ut||ot,$t=$t||_t,(Nt!==_||wt!==D)&&(r.blendEquationSeparate(we[Nt],we[wt]),_=Nt,D=wt),(ot!==P||_t!==O||Ut!==F||$t!==H)&&(r.blendFuncSeparate(ae[ot],ae[_t],ae[Ut],ae[$t]),P=ot,O=_t,F=Ut,H=$t),(Ge.equals(B)===!1||en!==q)&&(r.blendColor(Ge.r,Ge.g,Ge.b,en),B.copy(Ge),q=en),y=X,C=!1}function _n(X,Nt){X.side===aa?Ct(r.CULL_FACE):bt(r.CULL_FACE);let ot=X.side===kn;Nt&&(ot=!ot),re(ot),X.blending===Sr&&X.transparent===!1?z(Fa):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const _t=X.stencilWrite;d.setTest(_t),_t&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),De(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function re(X){b!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),b=X)}function he(X){X!==nS?(bt(r.CULL_FACE),X!==I&&(X===tg?r.cullFace(r.BACK):X===iS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),I=X}function Xt(X){X!==st&&(V&&r.lineWidth(X),st=X)}function De(X,Nt,ot){X?(bt(r.POLYGON_OFFSET_FILL),(nt!==Nt||ct!==ot)&&(r.polygonOffset(Nt,ot),nt=Nt,ct=ot)):Ct(r.POLYGON_OFFSET_FILL)}function Wt(X){X?bt(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function U(X){X===void 0&&(X=r.TEXTURE0+ft-1),St!==X&&(r.activeTexture(X),St=X)}function T(X,Nt,ot){ot===void 0&&(St===null?ot=r.TEXTURE0+ft-1:ot=St);let _t=L[ot];_t===void 0&&(_t={type:void 0,texture:void 0},L[ot]=_t),(_t.type!==X||_t.texture!==Nt)&&(St!==ot&&(r.activeTexture(ot),St=ot),r.bindTexture(X,Nt||xt[X]),_t.type=X,_t.texture=Nt)}function et(){const X=L[St];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ht(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(X){Rt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Rt.copy(X))}function Ft(X){Y.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Y.copy(X))}function se(X,Nt){let ot=p.get(Nt);ot===void 0&&(ot=new WeakMap,p.set(Nt,ot));let _t=ot.get(X);_t===void 0&&(_t=r.getUniformBlockIndex(Nt,X.name),ot.set(X,_t))}function Zt(X,Nt){const _t=p.get(Nt).get(X);m.get(Nt)!==_t&&(r.uniformBlockBinding(Nt,_t,X.__bindingPointIndex),m.set(Nt,_t))}function Ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},St=null,L={},v={},x=new WeakMap,M=[],E=null,w=!1,y=null,_=null,P=null,O=null,D=null,F=null,H=null,B=new ye(0,0,0),q=0,C=!1,b=null,I=null,st=null,nt=null,ct=null,Rt.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:bt,disable:Ct,bindFramebuffer:Qt,drawBuffers:zt,useProgram:Ee,setBlending:z,setMaterial:_n,setFlipSided:re,setCullFace:he,setLineWidth:Xt,setPolygonOffset:De,setScissorTest:Wt,activeTexture:U,bindTexture:T,unbindTexture:et,compressedTexImage2D:ht,compressedTexImage3D:vt,texImage2D:It,texImage3D:Yt,updateUBOMapping:se,uniformBlockBinding:Zt,texStorage2D:_e,texStorage3D:Et,texSubImage2D:dt,texSubImage3D:Gt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Bt,scissor:Vt,viewport:Ft,reset:Ue}}function iA(r,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new fe,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,T){return M?new OffscreenCanvas(U,T):Uc("canvas")}function w(U,T,et){let ht=1;const vt=Wt(U);if((vt.width>et||vt.height>et)&&(ht=et/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(ht*vt.width),Gt=Math.floor(ht*vt.height);v===void 0&&(v=E(dt,Gt));const Dt=T?E(dt,Gt):v;return Dt.width=dt,Dt.height=Gt,Dt.getContext("2d").drawImage(U,0,0,dt,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+dt+"x"+Gt+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function y(U){return U.generateMipmaps}function _(U){r.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(U,T,et,ht,vt=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=T;if(T===r.RED&&(et===r.FLOAT&&(dt=r.R32F),et===r.HALF_FLOAT&&(dt=r.R16F),et===r.UNSIGNED_BYTE&&(dt=r.R8)),T===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(dt=r.R8UI),et===r.UNSIGNED_SHORT&&(dt=r.R16UI),et===r.UNSIGNED_INT&&(dt=r.R32UI),et===r.BYTE&&(dt=r.R8I),et===r.SHORT&&(dt=r.R16I),et===r.INT&&(dt=r.R32I)),T===r.RG&&(et===r.FLOAT&&(dt=r.RG32F),et===r.HALF_FLOAT&&(dt=r.RG16F),et===r.UNSIGNED_BYTE&&(dt=r.RG8)),T===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(dt=r.RG8UI),et===r.UNSIGNED_SHORT&&(dt=r.RG16UI),et===r.UNSIGNED_INT&&(dt=r.RG32UI),et===r.BYTE&&(dt=r.RG8I),et===r.SHORT&&(dt=r.RG16I),et===r.INT&&(dt=r.RG32I)),T===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),et===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),et===r.UNSIGNED_INT&&(dt=r.RGB32UI),et===r.BYTE&&(dt=r.RGB8I),et===r.SHORT&&(dt=r.RGB16I),et===r.INT&&(dt=r.RGB32I)),T===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),et===r.UNSIGNED_INT&&(dt=r.RGBA32UI),et===r.BYTE&&(dt=r.RGBA8I),et===r.SHORT&&(dt=r.RGBA16I),et===r.INT&&(dt=r.RGBA32I)),T===r.RGB&&et===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),T===r.RGBA){const Gt=vt?wc:Ce.getTransfer(ht);et===r.FLOAT&&(dt=r.RGBA32F),et===r.HALF_FLOAT&&(dt=r.RGBA16F),et===r.UNSIGNED_BYTE&&(dt=Gt===Pe?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(U,T){let et;return U?T===null||T===Ss||T===Ar?et=r.DEPTH24_STENCIL8:T===sa?et=r.DEPTH32F_STENCIL8:T===Bo&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ss||T===Ar?et=r.DEPTH_COMPONENT24:T===sa?et=r.DEPTH_COMPONENT32F:T===Bo&&(et=r.DEPTH_COMPONENT16),et}function F(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ei&&U.minFilter!==Li?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function H(U){const T=U.target;T.removeEventListener("dispose",H),q(T),T.isVideoTexture&&g.delete(T)}function B(U){const T=U.target;T.removeEventListener("dispose",B),b(T)}function q(U){const T=s.get(U);if(T.__webglInit===void 0)return;const et=U.source,ht=x.get(et);if(ht){const vt=ht[T.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(U),Object.keys(ht).length===0&&x.delete(et)}s.remove(U)}function C(U){const T=s.get(U);r.deleteTexture(T.__webglTexture);const et=U.source,ht=x.get(et);delete ht[T.__cacheKey],h.memory.textures--}function b(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let vt=0;vt<T.__webglFramebuffer[ht].length;vt++)r.deleteFramebuffer(T.__webglFramebuffer[ht][vt]);else r.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)r.deleteFramebuffer(T.__webglFramebuffer[ht]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=U.textures;for(let ht=0,vt=et.length;ht<vt;ht++){const dt=s.get(et[ht]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(et[ht])}s.remove(U)}let I=0;function st(){I=0}function nt(){const U=I;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),I+=1,U}function ct(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ft(U,T){const et=s.get(U);if(U.isVideoTexture&&Xt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(et,U,T);return}}i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+T)}function V(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){Y(et,U,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+T)}function rt(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){Y(et,U,T);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+T)}function Z(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){pt(et,U,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+T)}const St={[Ph]:r.REPEAT,[vs]:r.CLAMP_TO_EDGE,[zh]:r.MIRRORED_REPEAT},L={[Ei]:r.NEAREST,[LS]:r.NEAREST_MIPMAP_NEAREST,[Kl]:r.NEAREST_MIPMAP_LINEAR,[Li]:r.LINEAR,[Yf]:r.LINEAR_MIPMAP_NEAREST,[xs]:r.LINEAR_MIPMAP_LINEAR},at={[BS]:r.NEVER,[kS]:r.ALWAYS,[IS]:r.LESS,[S0]:r.LEQUAL,[FS]:r.EQUAL,[VS]:r.GEQUAL,[HS]:r.GREATER,[GS]:r.NOTEQUAL};function Tt(U,T){if(T.type===sa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Li||T.magFilter===Yf||T.magFilter===Kl||T.magFilter===xs||T.minFilter===Li||T.minFilter===Yf||T.minFilter===Kl||T.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,St[T.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,St[T.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,St[T.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,L[T.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,at[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ei||T.minFilter!==Kl&&T.minFilter!==xs||T.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Rt(U,T){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",H));const ht=T.source;let vt=x.get(ht);vt===void 0&&(vt={},x.set(ht,vt));const dt=ct(T);if(dt!==U.__cacheKey){vt[dt]===void 0&&(vt[dt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,et=!0),vt[dt].usedTimes++;const Gt=vt[U.__cacheKey];Gt!==void 0&&(vt[U.__cacheKey].usedTimes--,Gt.usedTimes===0&&C(T)),U.__cacheKey=dt,U.__webglTexture=vt[dt].texture}return et}function Y(U,T,et){let ht=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=r.TEXTURE_3D);const vt=Rt(U,T),dt=T.source;i.bindTexture(ht,U.__webglTexture,r.TEXTURE0+et);const Gt=s.get(dt);if(dt.version!==Gt.__version||vt===!0){i.activeTexture(r.TEXTURE0+et);const Dt=Ce.getPrimaries(Ce.workingColorSpace),Bt=T.colorSpace===Ia?null:Ce.getPrimaries(T.colorSpace),_e=T.colorSpace===Ia||Dt===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Et=w(T.image,!1,l.maxTextureSize);Et=De(T,Et);const It=u.convert(T.format,T.colorSpace),Yt=u.convert(T.type);let Vt=O(T.internalFormat,It,Yt,T.colorSpace,T.isVideoTexture);Tt(ht,T);let Ft;const se=T.mipmaps,Zt=T.isVideoTexture!==!0,Ue=Gt.__version===void 0||vt===!0,X=dt.dataReady,Nt=F(T,Et);if(T.isDepthTexture)Vt=D(T.format===Rr,T.type),Ue&&(Zt?i.texStorage2D(r.TEXTURE_2D,1,Vt,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,Vt,Et.width,Et.height,0,It,Yt,null));else if(T.isDataTexture)if(se.length>0){Zt&&Ue&&i.texStorage2D(r.TEXTURE_2D,Nt,Vt,se[0].width,se[0].height);for(let ot=0,_t=se.length;ot<_t;ot++)Ft=se[ot],Zt?X&&i.texSubImage2D(r.TEXTURE_2D,ot,0,0,Ft.width,Ft.height,It,Yt,Ft.data):i.texImage2D(r.TEXTURE_2D,ot,Vt,Ft.width,Ft.height,0,It,Yt,Ft.data);T.generateMipmaps=!1}else Zt?(Ue&&i.texStorage2D(r.TEXTURE_2D,Nt,Vt,Et.width,Et.height),X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Et.width,Et.height,It,Yt,Et.data)):i.texImage2D(r.TEXTURE_2D,0,Vt,Et.width,Et.height,0,It,Yt,Et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&Ue&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Vt,se[0].width,se[0].height,Et.depth);for(let ot=0,_t=se.length;ot<_t;ot++)if(Ft=se[ot],T.format!==Mi)if(It!==null)if(Zt){if(X)if(T.layerUpdates.size>0){const wt=Ug(Ft.width,Ft.height,T.format,T.type);for(const Ut of T.layerUpdates){const $t=Ft.data.subarray(Ut*wt/Ft.data.BYTES_PER_ELEMENT,(Ut+1)*wt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,Ut,Ft.width,Ft.height,1,It,$t)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,Ft.width,Ft.height,Et.depth,It,Ft.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ot,Vt,Ft.width,Ft.height,Et.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,Ft.width,Ft.height,Et.depth,It,Yt,Ft.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ot,Vt,Ft.width,Ft.height,Et.depth,0,It,Yt,Ft.data)}else{Zt&&Ue&&i.texStorage2D(r.TEXTURE_2D,Nt,Vt,se[0].width,se[0].height);for(let ot=0,_t=se.length;ot<_t;ot++)Ft=se[ot],T.format!==Mi?It!==null?Zt?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,ot,0,0,Ft.width,Ft.height,It,Ft.data):i.compressedTexImage2D(r.TEXTURE_2D,ot,Vt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?X&&i.texSubImage2D(r.TEXTURE_2D,ot,0,0,Ft.width,Ft.height,It,Yt,Ft.data):i.texImage2D(r.TEXTURE_2D,ot,Vt,Ft.width,Ft.height,0,It,Yt,Ft.data)}else if(T.isDataArrayTexture)if(Zt){if(Ue&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Vt,Et.width,Et.height,Et.depth),X)if(T.layerUpdates.size>0){const ot=Ug(Et.width,Et.height,T.format,T.type);for(const _t of T.layerUpdates){const wt=Et.data.subarray(_t*ot/Et.data.BYTES_PER_ELEMENT,(_t+1)*ot/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Et.width,Et.height,1,It,Yt,wt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,It,Yt,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Vt,Et.width,Et.height,Et.depth,0,It,Yt,Et.data);else if(T.isData3DTexture)Zt?(Ue&&i.texStorage3D(r.TEXTURE_3D,Nt,Vt,Et.width,Et.height,Et.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,It,Yt,Et.data)):i.texImage3D(r.TEXTURE_3D,0,Vt,Et.width,Et.height,Et.depth,0,It,Yt,Et.data);else if(T.isFramebufferTexture){if(Ue)if(Zt)i.texStorage2D(r.TEXTURE_2D,Nt,Vt,Et.width,Et.height);else{let ot=Et.width,_t=Et.height;for(let wt=0;wt<Nt;wt++)i.texImage2D(r.TEXTURE_2D,wt,Vt,ot,_t,0,It,Yt,null),ot>>=1,_t>>=1}}else if(se.length>0){if(Zt&&Ue){const ot=Wt(se[0]);i.texStorage2D(r.TEXTURE_2D,Nt,Vt,ot.width,ot.height)}for(let ot=0,_t=se.length;ot<_t;ot++)Ft=se[ot],Zt?X&&i.texSubImage2D(r.TEXTURE_2D,ot,0,0,It,Yt,Ft):i.texImage2D(r.TEXTURE_2D,ot,Vt,It,Yt,Ft);T.generateMipmaps=!1}else if(Zt){if(Ue){const ot=Wt(Et);i.texStorage2D(r.TEXTURE_2D,Nt,Vt,ot.width,ot.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,It,Yt,Et)}else i.texImage2D(r.TEXTURE_2D,0,Vt,It,Yt,Et);y(T)&&_(ht),Gt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function pt(U,T,et){if(T.image.length!==6)return;const ht=Rt(U,T),vt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+et);const dt=s.get(vt);if(vt.version!==dt.__version||ht===!0){i.activeTexture(r.TEXTURE0+et);const Gt=Ce.getPrimaries(Ce.workingColorSpace),Dt=T.colorSpace===Ia?null:Ce.getPrimaries(T.colorSpace),Bt=T.colorSpace===Ia||Gt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,It=[];for(let _t=0;_t<6;_t++)!_e&&!Et?It[_t]=w(T.image[_t],!0,l.maxCubemapSize):It[_t]=Et?T.image[_t].image:T.image[_t],It[_t]=De(T,It[_t]);const Yt=It[0],Vt=u.convert(T.format,T.colorSpace),Ft=u.convert(T.type),se=O(T.internalFormat,Vt,Ft,T.colorSpace),Zt=T.isVideoTexture!==!0,Ue=dt.__version===void 0||ht===!0,X=vt.dataReady;let Nt=F(T,Yt);Tt(r.TEXTURE_CUBE_MAP,T);let ot;if(_e){Zt&&Ue&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,se,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){ot=It[_t].mipmaps;for(let wt=0;wt<ot.length;wt++){const Ut=ot[wt];T.format!==Mi?Vt!==null?Zt?X&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Ut.width,Ut.height,Vt,Ut.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,se,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Ut.width,Ut.height,Vt,Ft,Ut.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,se,Ut.width,Ut.height,0,Vt,Ft,Ut.data)}}}else{if(ot=T.mipmaps,Zt&&Ue){ot.length>0&&Nt++;const _t=Wt(It[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Et){Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It[_t].width,It[_t].height,Vt,Ft,It[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,It[_t].width,It[_t].height,0,Vt,Ft,It[_t].data);for(let wt=0;wt<ot.length;wt++){const $t=ot[wt].image[_t].image;Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,$t.width,$t.height,Vt,Ft,$t.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,se,$t.width,$t.height,0,Vt,Ft,$t.data)}}else{Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt,Ft,It[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Vt,Ft,It[_t]);for(let wt=0;wt<ot.length;wt++){const Ut=ot[wt];Zt?X&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,Vt,Ft,Ut.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,se,Vt,Ft,Ut.image[_t])}}}y(T)&&_(r.TEXTURE_CUBE_MAP),dt.__version=vt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function xt(U,T,et,ht,vt,dt){const Gt=u.convert(et.format,et.colorSpace),Dt=u.convert(et.type),Bt=O(et.internalFormat,Gt,Dt,et.colorSpace),_e=s.get(T),Et=s.get(et);if(Et.__renderTarget=T,!_e.__hasExternalTextures){const It=Math.max(1,T.width>>dt),Yt=Math.max(1,T.height>>dt);vt===r.TEXTURE_3D||vt===r.TEXTURE_2D_ARRAY?i.texImage3D(vt,dt,Bt,It,Yt,T.depth,0,Gt,Dt,null):i.texImage2D(vt,dt,Bt,It,Yt,0,Gt,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),he(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,vt,Et.__webglTexture,0,re(T)):(vt===r.TEXTURE_2D||vt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,vt,Et.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(U,T,et){if(r.bindRenderbuffer(r.RENDERBUFFER,U),T.depthBuffer){const ht=T.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,dt=D(T.stencilBuffer,vt),Gt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=re(T);he(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,dt,T.width,T.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,dt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,dt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Gt,r.RENDERBUFFER,U)}else{const ht=T.textures;for(let vt=0;vt<ht.length;vt++){const dt=ht[vt],Gt=u.convert(dt.format,dt.colorSpace),Dt=u.convert(dt.type),Bt=O(dt.internalFormat,Gt,Dt,dt.colorSpace),_e=re(T);et&&he(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,Bt,T.width,T.height):he(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,Bt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Bt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const vt=ht.__webglTexture,dt=re(T);if(T.depthTexture.format===yr)he(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,vt,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,vt,0);else if(T.depthTexture.format===Rr)he(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,vt,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Qt(U){const T=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const vt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),T.__depthDisposeCallback=vt}T.__boundDepthTexture=ht}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Ct(T.__webglFramebuffer,U)}else if(et){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=r.createRenderbuffer(),bt(T.__webglDepthbuffer[ht],U,!1);else{const vt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,dt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),bt(T.__webglDepthbuffer,U,!1);else{const ht=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,vt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,vt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(U,T,et){const ht=s.get(U);T!==void 0&&xt(ht.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&Qt(U)}function Ee(U){const T=U.texture,et=s.get(U),ht=s.get(T);U.addEventListener("dispose",B);const vt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,Gt=vt.length>1;if(Gt||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=T.version,h.memory.textures++),dt){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Bt=0;Bt<T.mipmaps.length;Bt++)et.__webglFramebuffer[Dt][Bt]=r.createFramebuffer()}else et.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(Gt)for(let Dt=0,Bt=vt.length;Dt<Bt;Dt++){const _e=s.get(vt[Dt]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&he(U)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<vt.length;Dt++){const Bt=vt[Dt];et.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const _e=u.convert(Bt.format,Bt.colorSpace),Et=u.convert(Bt.type),It=O(Bt.internalFormat,_e,Et,Bt.colorSpace,U.isXRRenderTarget===!0),Yt=re(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,It,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)xt(et.__webglFramebuffer[Dt][Bt],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Bt);else xt(et.__webglFramebuffer[Dt],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(T)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let Dt=0,Bt=vt.length;Dt<Bt;Dt++){const _e=vt[Dt],Et=s.get(_e);i.bindTexture(r.TEXTURE_2D,Et.__webglTexture),Tt(r.TEXTURE_2D,_e),xt(et.__webglFramebuffer,U,_e,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,0),y(_e)&&_(r.TEXTURE_2D)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ht.__webglTexture),Tt(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)xt(et.__webglFramebuffer[Bt],U,T,r.COLOR_ATTACHMENT0,Dt,Bt);else xt(et.__webglFramebuffer,U,T,r.COLOR_ATTACHMENT0,Dt,0);y(T)&&_(Dt),i.unbindTexture()}U.depthBuffer&&Qt(U)}function we(U){const T=U.textures;for(let et=0,ht=T.length;et<ht;et++){const vt=T[et];if(y(vt)){const dt=P(U),Gt=s.get(vt).__webglTexture;i.bindTexture(dt,Gt),_(dt),i.unbindTexture()}}}const ae=[],z=[];function _n(U){if(U.samples>0){if(he(U)===!1){const T=U.textures,et=U.width,ht=U.height;let vt=r.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Gt=s.get(U),Dt=T.length>1;if(Dt)for(let Bt=0;Bt<T.length;Bt++)i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Bt=0;Bt<T.length;Bt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const _e=s.get(T[Bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,et,ht,0,0,et,ht,vt,r.NEAREST),m===!0&&(ae.length=0,z.length=0,ae.push(r.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ae.push(dt),z.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let Bt=0;Bt<T.length;Bt++){i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const _e=s.get(T[Bt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,_e,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function re(U){return Math.min(l.maxSamples,U.samples)}function he(U){const T=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(U){const T=h.render.frame;g.get(U)!==T&&(g.set(U,T),U.update())}function De(U,T){const et=U.colorSpace,ht=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==Cr&&et!==Ia&&(Ce.getTransfer(et)===Pe?(ht!==Mi||vt!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=st,this.setTexture2D=ft,this.setTexture2DArray=V,this.setTexture3D=rt,this.setTextureCube=Z,this.rebindTextures=zt,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=he}function aA(r,t){function i(s,l=Ia){let u;const h=Ce.getTransfer(l);if(s===la)return r.UNSIGNED_BYTE;if(s===_d)return r.UNSIGNED_SHORT_4_4_4_4;if(s===gd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===h0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===u0)return r.BYTE;if(s===f0)return r.SHORT;if(s===Bo)return r.UNSIGNED_SHORT;if(s===md)return r.INT;if(s===Ss)return r.UNSIGNED_INT;if(s===sa)return r.FLOAT;if(s===Fo)return r.HALF_FLOAT;if(s===d0)return r.ALPHA;if(s===p0)return r.RGB;if(s===Mi)return r.RGBA;if(s===m0)return r.LUMINANCE;if(s===_0)return r.LUMINANCE_ALPHA;if(s===yr)return r.DEPTH_COMPONENT;if(s===Rr)return r.DEPTH_STENCIL;if(s===g0)return r.RED;if(s===vd)return r.RED_INTEGER;if(s===v0)return r.RG;if(s===xd)return r.RG_INTEGER;if(s===Sd)return r.RGBA_INTEGER;if(s===Mc||s===Ec||s===Tc||s===bc)if(h===Pe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Mc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Mc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bh||s===Ih||s===Fh||s===Hh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Bh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ih)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gh||s===Vh||s===kh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Gh||s===Vh)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xh||s===Wh||s===qh||s===Yh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Xh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$h)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===td)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ed)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===id)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ac||s===ad||s===sd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Ac)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ad)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===x0||s===rd||s===od||s===ld)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Ac)return u.COMPRESSED_RED_RGTC1_EXT;if(s===rd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===od)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ld)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ar?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const sA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rA=`
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

}`;class oA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Xn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Va({vertexShader:sA,fragmentShader:rA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new zc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lA extends Es{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,E=null;const w=new oA,y=i.getContextAttributes();let _=null,P=null;const O=[],D=[],F=new fe;let H=null;const B=new fi;B.viewport=new Ke;const q=new fi;q.viewport=new Ke;const C=[B,q],b=new Ry;let I=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pt=O[Y];return pt===void 0&&(pt=new ph,O[Y]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Y){let pt=O[Y];return pt===void 0&&(pt=new ph,O[Y]=pt),pt.getGripSpace()},this.getHand=function(Y){let pt=O[Y];return pt===void 0&&(pt=new ph,O[Y]=pt),pt.getHandSpace()};function nt(Y){const pt=D.indexOf(Y.inputSource);if(pt===-1)return;const xt=O[pt];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,p||h),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ct(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",ft);for(let Y=0;Y<O.length;Y++){const pt=D[Y];pt!==null&&(D[Y]=null,O[Y].disconnect(pt))}I=null,st=null,w.reset(),t.setRenderTarget(_),M=null,x=null,v=null,l=null,P=null,Rt.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,bt=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=y.stencil?Rr:yr,bt=y.stencil?Ar:Ss);const Qt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(Qt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new ys(x.textureWidth,x.textureHeight,{format:Mi,type:la,depthTexture:new O0(x.textureWidth,x.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new ys(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:la,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ft(Y){for(let pt=0;pt<Y.removed.length;pt++){const xt=Y.removed[pt],bt=D.indexOf(xt);bt>=0&&(D[bt]=null,O[bt].disconnect(xt))}for(let pt=0;pt<Y.added.length;pt++){const xt=Y.added[pt];let bt=D.indexOf(xt);if(bt===-1){for(let Qt=0;Qt<O.length;Qt++)if(Qt>=D.length){D.push(xt),bt=Qt;break}else if(D[Qt]===null){D[Qt]=xt,bt=Qt;break}if(bt===-1)break}const Ct=O[bt];Ct&&Ct.connect(xt)}}const V=new J,rt=new J;function Z(Y,pt,xt){V.setFromMatrixPosition(pt.matrixWorld),rt.setFromMatrixPosition(xt.matrixWorld);const bt=V.distanceTo(rt),Ct=pt.projectionMatrix.elements,Qt=xt.projectionMatrix.elements,zt=Ct[14]/(Ct[10]-1),Ee=Ct[14]/(Ct[10]+1),we=(Ct[9]+1)/Ct[5],ae=(Ct[9]-1)/Ct[5],z=(Ct[8]-1)/Ct[0],_n=(Qt[8]+1)/Qt[0],re=zt*z,he=zt*_n,Xt=bt/(-z+_n),De=Xt*-z;if(pt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(De),Y.translateZ(Xt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ct[10]===-1)Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Wt=zt+Xt,U=Ee+Xt,T=re-De,et=he+(bt-De),ht=we*Ee/U*Wt,vt=ae*Ee/U*Wt;Y.projectionMatrix.makePerspective(T,et,ht,vt,Wt,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function St(Y,pt){pt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let pt=Y.near,xt=Y.far;w.texture!==null&&(w.depthNear>0&&(pt=w.depthNear),w.depthFar>0&&(xt=w.depthFar)),b.near=q.near=B.near=pt,b.far=q.far=B.far=xt,(I!==b.near||st!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,st=b.far),B.layers.mask=Y.layers.mask|2,q.layers.mask=Y.layers.mask|4,b.layers.mask=B.layers.mask|q.layers.mask;const bt=Y.parent,Ct=b.cameras;St(b,bt);for(let Qt=0;Qt<Ct.length;Qt++)St(Ct[Qt],bt);Ct.length===2?Z(b,B,q):b.projectionMatrix.copy(B.projectionMatrix),L(Y,b,bt)};function L(Y,pt,xt){xt===null?Y.matrix.copy(pt.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Y){m=Y,x!==null&&(x.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(b)};let at=null;function Tt(Y,pt){if(g=pt.getViewerPose(p||h),E=pt,g!==null){const xt=g.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let bt=!1;xt.length!==b.cameras.length&&(b.cameras.length=0,bt=!0);for(let zt=0;zt<xt.length;zt++){const Ee=xt[zt];let we=null;if(M!==null)we=M.getViewport(Ee);else{const z=v.getViewSubImage(x,Ee);we=z.viewport,zt===0&&(t.setRenderTargetTextures(P,z.colorTexture,x.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(P))}let ae=C[zt];ae===void 0&&(ae=new fi,ae.layers.enable(zt),ae.viewport=new Ke,C[zt]=ae),ae.matrix.fromArray(Ee.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Ee.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(we.x,we.y,we.width,we.height),zt===0&&(b.matrix.copy(ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),bt===!0&&b.cameras.push(ae)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const zt=v.getDepthInformation(xt[0]);zt&&zt.isValid&&zt.texture&&w.init(t,zt,l.renderState)}}for(let xt=0;xt<O.length;xt++){const bt=D[xt],Ct=O[xt];bt!==null&&Ct!==void 0&&Ct.update(bt,pt,p||h)}at&&at(Y,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),E=null}const Rt=new P0;Rt.setAnimationLoop(Tt),this.setAnimationLoop=function(Y){at=Y},this.dispose=function(){}}}const ps=new ca,cA=new je;function uA(r,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,C0(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,P,O,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),E(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),w(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,P,O):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===kn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===kn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const P=t.get(_),O=P.envMap,D=P.envMapRotation;O&&(y.envMap.value=O,ps.copy(D),ps.x*=-1,ps.y*=-1,ps.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),y.envMapRotation.value.setFromMatrix4(cA.makeRotationFromEuler(ps)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,P,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*P,y.scale.value=O*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,P){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const P=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function fA(r,t,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const D=O.program;s.uniformBlockBinding(P,D)}function p(P,O){let D=l[P.id];D===void 0&&(E(P),D=g(P),l[P.id]=D,P.addEventListener("dispose",y));const F=O.program;s.updateUBOMapping(P,F);const H=t.render.frame;u[P.id]!==H&&(x(P),u[P.id]=H)}function g(P){const O=v();P.__bindingPointIndex=O;const D=r.createBuffer(),F=P.__size,H=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function v(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const O=l[P.id],D=P.uniforms,F=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let H=0,B=D.length;H<B;H++){const q=Array.isArray(D[H])?D[H]:[D[H]];for(let C=0,b=q.length;C<b;C++){const I=q[C];if(M(I,H,C,F)===!0){const st=I.__offset,nt=Array.isArray(I.value)?I.value:[I.value];let ct=0;for(let ft=0;ft<nt.length;ft++){const V=nt[ft],rt=w(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,st+ct,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,ct),ct+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,st,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(P,O,D,F){const H=P.value,B=O+"_"+D;if(F[B]===void 0)return typeof H=="number"||typeof H=="boolean"?F[B]=H:F[B]=H.clone(),!0;{const q=F[B];if(typeof H=="number"||typeof H=="boolean"){if(q!==H)return F[B]=H,!0}else if(q.equals(H)===!1)return q.copy(H),!0}return!1}function E(P){const O=P.uniforms;let D=0;const F=16;for(let B=0,q=O.length;B<q;B++){const C=Array.isArray(O[B])?O[B]:[O[B]];for(let b=0,I=C.length;b<I;b++){const st=C[b],nt=Array.isArray(st.value)?st.value:[st.value];for(let ct=0,ft=nt.length;ct<ft;ct++){const V=nt[ct],rt=w(V),Z=D%F,St=Z%rt.boundary,L=Z+St;D+=St,L!==0&&F-L<rt.storage&&(D+=F-L),st.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=D,D+=rt.storage}}}const H=D%F;return H>0&&(D+=F-H),P.__size=D,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class hA{constructor(t={}){const{canvas:i=qS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=Ha,this.toneMappingExposure=1;const D=this;let F=!1,H=0,B=0,q=null,C=-1,b=null;const I=new Ke,st=new Ke;let nt=null;const ct=new ye(0);let ft=0,V=i.width,rt=i.height,Z=1,St=null,L=null;const at=new Ke(0,0,V,rt),Tt=new Ke(0,0,V,rt);let Rt=!1;const Y=new U0;let pt=!1,xt=!1;this.transmissionResolutionScale=1;const bt=new je,Ct=new je,Qt=new J,zt=new Ke,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function ae(){return q===null?Z:1}let z=s;function _n(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),z===null){const W="webgl2";if(z=_n(W,R),z===null)throw _n(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let re,he,Xt,De,Wt,U,T,et,ht,vt,dt,Gt,Dt,Bt,_e,Et,It,Yt,Vt,Ft,se,Zt,Ue,X;function Nt(){re=new MT(z),re.init(),Zt=new aA(z,re),he=new _T(z,re,t,Zt),Xt=new nA(z,re),he.reverseDepthBuffer&&x&&Xt.buffers.depth.setReversed(!0),De=new bT(z),Wt=new kb,U=new iA(z,re,Xt,Wt,he,Zt,De),T=new vT(D),et=new yT(D),ht=new Ly(z),Ue=new pT(z,ht),vt=new ET(z,ht,De,Ue),dt=new RT(z,vt,ht,De),Vt=new AT(z,he,U),Et=new gT(Wt),Gt=new Vb(D,T,et,re,he,Ue,Et),Dt=new uA(D,Wt),Bt=new Wb,_e=new Qb(re),Yt=new dT(D,T,et,Xt,dt,M,m),It=new tA(D,dt,he),X=new fA(z,De,he,Xt),Ft=new mT(z,re,De),se=new TT(z,re,De),De.programs=Gt.programs,D.capabilities=he,D.extensions=re,D.properties=Wt,D.renderLists=Bt,D.shadowMap=It,D.state=Xt,D.info=De}Nt();const ot=new lA(D,z);this.xr=ot,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(V,rt,!1))},this.getSize=function(R){return R.set(V,rt)},this.setSize=function(R,W,tt=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,rt=W,i.width=Math.floor(R*Z),i.height=Math.floor(W*Z),tt===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(V*Z,rt*Z).floor()},this.setDrawingBufferSize=function(R,W,tt){V=R,rt=W,Z=tt,i.width=Math.floor(R*tt),i.height=Math.floor(W*tt),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,W,tt,Q){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,W,tt,Q),Xt.viewport(I.copy(at).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(Tt)},this.setScissor=function(R,W,tt,Q){R.isVector4?Tt.set(R.x,R.y,R.z,R.w):Tt.set(R,W,tt,Q),Xt.scissor(st.copy(Tt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(R){Xt.setScissorTest(Rt=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(R=!0,W=!0,tt=!0){let Q=0;if(R){let j=!1;if(q!==null){const yt=q.texture.format;j=yt===Sd||yt===xd||yt===vd}if(j){const yt=q.texture.type,At=yt===la||yt===Ss||yt===Bo||yt===Ar||yt===_d||yt===gd,Pt=Yt.getClearColor(),Ot=Yt.getClearAlpha(),te=Pt.r,ee=Pt.g,jt=Pt.b;At?(E[0]=te,E[1]=ee,E[2]=jt,E[3]=Ot,z.clearBufferuiv(z.COLOR,0,E)):(w[0]=te,w[1]=ee,w[2]=jt,w[3]=Ot,z.clearBufferiv(z.COLOR,0,w))}else Q|=z.COLOR_BUFFER_BIT}W&&(Q|=z.DEPTH_BUFFER_BIT),tt&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Yt.dispose(),Bt.dispose(),_e.dispose(),Wt.dispose(),T.dispose(),et.dispose(),dt.dispose(),Ue.dispose(),X.dispose(),Gt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Xo),ot.removeEventListener("sessionend",Lr),Ti.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=De.autoReset,W=It.enabled,tt=It.autoUpdate,Q=It.needsUpdate,j=It.type;Nt(),De.autoReset=R,It.enabled=W,It.autoUpdate=tt,It.needsUpdate=Q,It.type=j}function Ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $t(R){const W=R.target;W.removeEventListener("dispose",$t),Ge(W)}function Ge(R){en(R),Wt.remove(R)}function en(R){const W=Wt.get(R).programs;W!==void 0&&(W.forEach(function(tt){Gt.releaseProgram(tt)}),R.isShaderMaterial&&Gt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,tt,Q,j,yt){W===null&&(W=Ee);const At=j.isMesh&&j.matrixWorld.determinant()<0,Pt=Ic(R,W,tt,Q,j);Xt.setMaterial(Q,At);let Ot=tt.index,te=1;if(Q.wireframe===!0){if(Ot=vt.getWireframeAttribute(tt),Ot===void 0)return;te=2}const ee=tt.drawRange,jt=tt.attributes.position;let ge=ee.start*te,ve=(ee.start+ee.count)*te;yt!==null&&(ge=Math.max(ge,yt.start*te),ve=Math.min(ve,(yt.start+yt.count)*te)),Ot!==null?(ge=Math.max(ge,0),ve=Math.min(ve,Ot.count)):jt!=null&&(ge=Math.max(ge,0),ve=Math.min(ve,jt.count));const He=ve-ge;if(He<0||He===1/0)return;Ue.setup(j,Q,Pt,tt,Ot);let be,ne=Ft;if(Ot!==null&&(be=ht.get(Ot),ne=se,ne.setIndex(be)),j.isMesh)Q.wireframe===!0?(Xt.setLineWidth(Q.wireframeLinewidth*ae()),ne.setMode(z.LINES)):ne.setMode(z.TRIANGLES);else if(j.isLine){let Kt=Q.linewidth;Kt===void 0&&(Kt=1),Xt.setLineWidth(Kt*ae()),j.isLineSegments?ne.setMode(z.LINES):j.isLineLoop?ne.setMode(z.LINE_LOOP):ne.setMode(z.LINE_STRIP)}else j.isPoints?ne.setMode(z.POINTS):j.isSprite&&ne.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ne.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ne.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,sn=j._multiDrawCounts,xe=j._multiDrawCount,Bn=Ot?ht.get(Ot).bytesPerElement:1,hi=Wt.get(Q).currentProgram.getUniforms();for(let Un=0;Un<xe;Un++)hi.setValue(z,"_gl_DrawID",Un),ne.render(Kt[Un]/Bn,sn[Un])}else if(j.isInstancedMesh)ne.renderInstances(ge,He,j.count);else if(tt.isInstancedBufferGeometry){const Kt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,sn=Math.min(tt.instanceCount,Kt);ne.renderInstances(ge,He,sn)}else ne.render(ge,He)};function Te(R,W,tt){R.transparent===!0&&R.side===aa&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,an(R,W,tt),R.side=Ga,R.needsUpdate=!0,an(R,W,tt),R.side=aa):an(R,W,tt)}this.compile=function(R,W,tt=null){tt===null&&(tt=R),_=_e.get(tt),_.init(W),O.push(_),tt.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==tt&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const Q=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const yt=j.material;if(yt)if(Array.isArray(yt))for(let At=0;At<yt.length;At++){const Pt=yt[At];Te(Pt,tt,j),Q.add(Pt)}else Te(yt,tt,j),Q.add(yt)}),O.pop(),_=null,Q},this.compileAsync=function(R,W,tt=null){const Q=this.compile(R,W,tt);return new Promise(j=>{function yt(){if(Q.forEach(function(At){Wt.get(At).currentProgram.isReady()&&Q.delete(At)}),Q.size===0){j(R);return}setTimeout(yt,10)}re.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let wn=null;function Dn(R){wn&&wn(R)}function Xo(){Ti.stop()}function Lr(){Ti.start()}const Ti=new P0;Ti.setAnimationLoop(Dn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(R){wn=R,ot.setAnimationLoop(R),R===null?Ti.stop():Ti.start()},ot.addEventListener("sessionstart",Xo),ot.addEventListener("sessionend",Lr),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,q),_=_e.get(R,O.length),_.init(W),O.push(_),Ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y.setFromProjectionMatrix(Ct),xt=this.localClippingEnabled,pt=Et.init(this.clippingPlanes,xt),y=Bt.get(R,P.length),y.init(),P.push(y),ot.enabled===!0&&ot.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&Ts(yt,W,-1/0,D.sortObjects)}Ts(R,W,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(St,L),we=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,we&&Yt.addToRenderList(y,R),this.info.render.frame++,pt===!0&&Et.beginShadows();const tt=_.state.shadowsArray;It.render(tt,R,W),pt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,j=y.transmissive;if(_.setupLights(),W.isArrayCamera){const yt=W.cameras;if(j.length>0)for(let At=0,Pt=yt.length;At<Pt;At++){const Ot=yt[At];Wo(Q,j,R,Ot)}we&&Yt.render(R);for(let At=0,Pt=yt.length;At<Pt;At++){const Ot=yt[At];Nr(y,R,Ot,Ot.viewport)}}else j.length>0&&Wo(Q,j,R,W),we&&Yt.render(R),Nr(y,R,W);q!==null&&B===0&&(U.updateMultisampleRenderTarget(q),U.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(D,R,W),Ue.resetDefaultState(),C=-1,b=null,O.pop(),O.length>0?(_=O[O.length-1],pt===!0&&Et.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function Ts(R,W,tt,Q){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)tt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){Q&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ct);const At=dt.update(R),Pt=R.material;Pt.visible&&y.push(R,At,Pt,tt,zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const At=dt.update(R),Pt=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),zt.copy(At.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(Ct)),Array.isArray(Pt)){const Ot=At.groups;for(let te=0,ee=Ot.length;te<ee;te++){const jt=Ot[te],ge=Pt[jt.materialIndex];ge&&ge.visible&&y.push(R,At,ge,tt,zt.z,jt)}}else Pt.visible&&y.push(R,At,Pt,tt,zt.z,null)}}const yt=R.children;for(let At=0,Pt=yt.length;At<Pt;At++)Ts(yt[At],W,tt,Q)}function Nr(R,W,tt,Q){const j=R.opaque,yt=R.transmissive,At=R.transparent;_.setupLightsView(tt),pt===!0&&Et.setGlobalState(D.clippingPlanes,tt),Q&&Xt.viewport(I.copy(Q)),j.length>0&&Wn(j,W,tt),yt.length>0&&Wn(yt,W,tt),At.length>0&&Wn(At,W,tt),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Wo(R,W,tt,Q){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Q.id]===void 0&&(_.state.transmissionRenderTarget[Q.id]=new ys(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Fo:la,minFilter:xs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const yt=_.state.transmissionRenderTarget[Q.id],At=Q.viewport||I;yt.setSize(At.z*D.transmissionResolutionScale,At.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget();D.setRenderTarget(yt),D.getClearColor(ct),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),we&&Yt.render(tt);const Ot=D.toneMapping;D.toneMapping=Ha;const te=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),_.setupLightsView(Q),pt===!0&&Et.setGlobalState(D.clippingPlanes,Q),Wn(R,tt,Q),U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt),re.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let jt=0,ge=W.length;jt<ge;jt++){const ve=W[jt],He=ve.object,be=ve.geometry,ne=ve.material,Kt=ve.group;if(ne.side===aa&&He.layers.test(Q.layers)){const sn=ne.side;ne.side=kn,ne.needsUpdate=!0,nn(He,tt,Q,be,ne,Kt),ne.side=sn,ne.needsUpdate=!0,ee=!0}}ee===!0&&(U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt))}D.setRenderTarget(Pt),D.setClearColor(ct,ft),te!==void 0&&(Q.viewport=te),D.toneMapping=Ot}function Wn(R,W,tt){const Q=W.isScene===!0?W.overrideMaterial:null;for(let j=0,yt=R.length;j<yt;j++){const At=R[j],Pt=At.object,Ot=At.geometry,te=Q===null?At.material:Q,ee=At.group;Pt.layers.test(tt.layers)&&nn(Pt,W,tt,Ot,te,ee)}}function nn(R,W,tt,Q,j,yt){R.onBeforeRender(D,W,tt,Q,j,yt),R.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(D,W,tt,Q,R,yt),j.transparent===!0&&j.side===aa&&j.forceSinglePass===!1?(j.side=kn,j.needsUpdate=!0,D.renderBufferDirect(tt,W,Q,j,R,yt),j.side=Ga,j.needsUpdate=!0,D.renderBufferDirect(tt,W,Q,j,R,yt),j.side=aa):D.renderBufferDirect(tt,W,Q,j,R,yt),R.onAfterRender(D,W,tt,Q,j,yt)}function an(R,W,tt){W.isScene!==!0&&(W=Ee);const Q=Wt.get(R),j=_.state.lights,yt=_.state.shadowsArray,At=j.state.version,Pt=Gt.getParameters(R,j.state,yt,W,tt),Ot=Gt.getProgramCacheKey(Pt);let te=Q.programs;Q.environment=R.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(R.isMeshStandardMaterial?et:T).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",$t),te=new Map,Q.programs=te);let ee=te.get(Ot);if(ee!==void 0){if(Q.currentProgram===ee&&Q.lightsStateVersion===At)return bs(R,Pt),ee}else Pt.uniforms=Gt.getUniforms(R),R.onBeforeCompile(Pt,D),ee=Gt.acquireProgram(Pt,Ot),te.set(Ot,ee),Q.uniforms=Pt.uniforms;const jt=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=Et.uniform),bs(R,Pt),Q.needsLights=qo(R),Q.lightsStateVersion=At,Q.needsLights&&(jt.ambientLightColor.value=j.state.ambient,jt.lightProbe.value=j.state.probe,jt.directionalLights.value=j.state.directional,jt.directionalLightShadows.value=j.state.directionalShadow,jt.spotLights.value=j.state.spot,jt.spotLightShadows.value=j.state.spotShadow,jt.rectAreaLights.value=j.state.rectArea,jt.ltc_1.value=j.state.rectAreaLTC1,jt.ltc_2.value=j.state.rectAreaLTC2,jt.pointLights.value=j.state.point,jt.pointLightShadows.value=j.state.pointShadow,jt.hemisphereLights.value=j.state.hemi,jt.directionalShadowMap.value=j.state.directionalShadowMap,jt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,jt.spotShadowMap.value=j.state.spotShadowMap,jt.spotLightMatrix.value=j.state.spotLightMatrix,jt.spotLightMap.value=j.state.spotLightMap,jt.pointShadowMap.value=j.state.pointShadowMap,jt.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=ee,Q.uniformsList=null,ee}function Pi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Cc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function bs(R,W){const tt=Wt.get(R);tt.outputColorSpace=W.outputColorSpace,tt.batching=W.batching,tt.batchingColor=W.batchingColor,tt.instancing=W.instancing,tt.instancingColor=W.instancingColor,tt.instancingMorph=W.instancingMorph,tt.skinning=W.skinning,tt.morphTargets=W.morphTargets,tt.morphNormals=W.morphNormals,tt.morphColors=W.morphColors,tt.morphTargetsCount=W.morphTargetsCount,tt.numClippingPlanes=W.numClippingPlanes,tt.numIntersection=W.numClipIntersection,tt.vertexAlphas=W.vertexAlphas,tt.vertexTangents=W.vertexTangents,tt.toneMapping=W.toneMapping}function Ic(R,W,tt,Q,j){W.isScene!==!0&&(W=Ee),U.resetTextureUnits();const yt=W.fog,At=Q.isMeshStandardMaterial?W.environment:null,Pt=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Cr,Ot=(Q.isMeshStandardMaterial?et:T).get(Q.envMap||At),te=Q.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ee=!!tt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),jt=!!tt.morphAttributes.position,ge=!!tt.morphAttributes.normal,ve=!!tt.morphAttributes.color;let He=Ha;Q.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(He=D.toneMapping);const be=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ne=be!==void 0?be.length:0,Kt=Wt.get(Q),sn=_.state.lights;if(pt===!0&&(xt===!0||R!==b)){const Xe=R===b&&Q.id===C;Et.setState(Q,R,Xe)}let xe=!1;Q.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==sn.state.version||Kt.outputColorSpace!==Pt||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Ot||Q.fog===!0&&Kt.fog!==yt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Et.numPlanes||Kt.numIntersection!==Et.numIntersection)||Kt.vertexAlphas!==te||Kt.vertexTangents!==ee||Kt.morphTargets!==jt||Kt.morphNormals!==ge||Kt.morphColors!==ve||Kt.toneMapping!==He||Kt.morphTargetsCount!==ne)&&(xe=!0):(xe=!0,Kt.__version=Q.version);let Bn=Kt.currentProgram;xe===!0&&(Bn=an(Q,W,j));let hi=!1,Un=!1,fn=!1;const Le=Bn.getUniforms(),Ln=Kt.uniforms;if(Xt.useProgram(Bn.program)&&(hi=!0,Un=!0,fn=!0),Q.id!==C&&(C=Q.id,Un=!0),hi||b!==R){Xt.buffers.depth.getReversed()?(bt.copy(R.projectionMatrix),jS(bt),ZS(bt),Le.setValue(z,"projectionMatrix",bt)):Le.setValue(z,"projectionMatrix",R.projectionMatrix),Le.setValue(z,"viewMatrix",R.matrixWorldInverse);const gn=Le.map.cameraPosition;gn!==void 0&&gn.setValue(z,Qt.setFromMatrixPosition(R.matrixWorld)),he.logarithmicDepthBuffer&&Le.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Le.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Un=!0,fn=!0)}if(j.isSkinnedMesh){Le.setOptional(z,j,"bindMatrix"),Le.setOptional(z,j,"bindMatrixInverse");const Xe=j.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),Le.setValue(z,"boneTexture",Xe.boneTexture,U))}j.isBatchedMesh&&(Le.setOptional(z,j,"batchingTexture"),Le.setValue(z,"batchingTexture",j._matricesTexture,U),Le.setOptional(z,j,"batchingIdTexture"),Le.setValue(z,"batchingIdTexture",j._indirectTexture,U),Le.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Le.setValue(z,"batchingColorTexture",j._colorsTexture,U));const En=tt.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Vt.update(j,tt,Bn),(Un||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Le.setValue(z,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ln.envMap.value=Ot,Ln.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Ln.envMapIntensity.value=W.environmentIntensity),Un&&(Le.setValue(z,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&Fc(Ln,fn),yt&&Q.fog===!0&&Dt.refreshFogUniforms(Ln,yt),Dt.refreshMaterialUniforms(Ln,Q,Z,rt,_.state.transmissionRenderTarget[R.id]),Cc.upload(z,Pi(Kt),Ln,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Cc.upload(z,Pi(Kt),Ln,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Le.setValue(z,"center",j.center),Le.setValue(z,"modelViewMatrix",j.modelViewMatrix),Le.setValue(z,"normalMatrix",j.normalMatrix),Le.setValue(z,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Xe=Q.uniformsGroups;for(let gn=0,As=Xe.length;gn<As;gn++){const In=Xe[gn];X.update(In,Bn),X.bind(In,Bn)}}return Bn}function Fc(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function qo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,W,tt){Wt.get(R.texture).__webglTexture=W,Wt.get(R.depthTexture).__webglTexture=tt;const Q=Wt.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=tt===void 0,Q.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const tt=Wt.get(R);tt.__webglFramebuffer=W,tt.__useDefaultFramebuffer=W===void 0};const ka=z.createFramebuffer();this.setRenderTarget=function(R,W=0,tt=0){q=R,H=W,B=tt;let Q=!0,j=null,yt=!1,At=!1;if(R){const Ot=Wt.get(R);if(Ot.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(Ot.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Ot.__hasExternalTextures)U.rebindTextures(R,Wt.get(R.texture).__webglTexture,Wt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const jt=R.depthTexture;if(Ot.__boundDepthTexture!==jt){if(jt!==null&&Wt.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(At=!0);const ee=Wt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?j=ee[W][tt]:j=ee[W],yt=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?j=Wt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?j=ee[tt]:j=ee,I.copy(R.viewport),st.copy(R.scissor),nt=R.scissorTest}else I.copy(at).multiplyScalar(Z).floor(),st.copy(Tt).multiplyScalar(Z).floor(),nt=Rt;if(tt!==0&&(j=ka),Xt.bindFramebuffer(z.FRAMEBUFFER,j)&&Q&&Xt.drawBuffers(R,j),Xt.viewport(I),Xt.scissor(st),Xt.setScissorTest(nt),yt){const Ot=Wt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,tt)}else if(At){const Ot=Wt.get(R.texture),te=W;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.__webglTexture,tt,te)}else if(R!==null&&tt!==0){const Ot=Wt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ot.__webglTexture,tt)}C=-1},this.readRenderTargetPixels=function(R,W,tt,Q,j,yt,At){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){Xt.bindFramebuffer(z.FRAMEBUFFER,Pt);try{const Ot=R.texture,te=Ot.format,ee=Ot.type;if(!he.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Q&&tt>=0&&tt<=R.height-j&&z.readPixels(W,tt,Q,j,Zt.convert(te),Zt.convert(ee),yt)}finally{const Ot=q!==null?Wt.get(q).__webglFramebuffer:null;Xt.bindFramebuffer(z.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(R,W,tt,Q,j,yt,At){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){const Ot=R.texture,te=Ot.format,ee=Ot.type;if(!he.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-Q&&tt>=0&&tt<=R.height-j){Xt.bindFramebuffer(z.FRAMEBUFFER,Pt);const jt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,jt),z.bufferData(z.PIXEL_PACK_BUFFER,yt.byteLength,z.STREAM_READ),z.readPixels(W,tt,Q,j,Zt.convert(te),Zt.convert(ee),0);const ge=q!==null?Wt.get(q).__webglFramebuffer:null;Xt.bindFramebuffer(z.FRAMEBUFFER,ge);const ve=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await YS(z,ve,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,jt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,yt),z.deleteBuffer(jt),z.deleteSync(ve),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,tt=0){R.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const Q=Math.pow(2,-tt),j=Math.floor(R.image.width*Q),yt=Math.floor(R.image.height*Q),At=W!==null?W.x:0,Pt=W!==null?W.y:0;U.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,tt,0,0,At,Pt,j,yt),Xt.unbindTexture()};const Or=z.createFramebuffer(),zi=z.createFramebuffer();this.copyTextureToTexture=function(R,W,tt=null,Q=null,j=0,yt=null){R.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],W=arguments[2],yt=arguments[3]||0,tt=null),yt===null&&(j!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=j,j=0):yt=0);let At,Pt,Ot,te,ee,jt,ge,ve,He;const be=R.isCompressedTexture?R.mipmaps[yt]:R.image;if(tt!==null)At=tt.max.x-tt.min.x,Pt=tt.max.y-tt.min.y,Ot=tt.isBox3?tt.max.z-tt.min.z:1,te=tt.min.x,ee=tt.min.y,jt=tt.isBox3?tt.min.z:0;else{const En=Math.pow(2,-j);At=Math.floor(be.width*En),Pt=Math.floor(be.height*En),R.isDataArrayTexture?Ot=be.depth:R.isData3DTexture?Ot=Math.floor(be.depth*En):Ot=1,te=0,ee=0,jt=0}Q!==null?(ge=Q.x,ve=Q.y,He=Q.z):(ge=0,ve=0,He=0);const ne=Zt.convert(W.format),Kt=Zt.convert(W.type);let sn;W.isData3DTexture?(U.setTexture3D(W,0),sn=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),sn=z.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),sn=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const xe=z.getParameter(z.UNPACK_ROW_LENGTH),Bn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),hi=z.getParameter(z.UNPACK_SKIP_PIXELS),Un=z.getParameter(z.UNPACK_SKIP_ROWS),fn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,be.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,be.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,te),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,jt);const Le=R.isDataArrayTexture||R.isData3DTexture,Ln=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const En=Wt.get(R),Xe=Wt.get(W),gn=Wt.get(En.__renderTarget),As=Wt.get(Xe.__renderTarget);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,gn.__webglFramebuffer),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let In=0;In<Ot;In++)Le&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wt.get(R).__webglTexture,j,jt+In),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wt.get(W).__webglTexture,yt,He+In)),z.blitFramebuffer(te,ee,At,Pt,ge,ve,At,Pt,z.DEPTH_BUFFER_BIT,z.NEAREST);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Wt.has(R)){const En=Wt.get(R),Xe=Wt.get(W);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,Or),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,zi);for(let gn=0;gn<Ot;gn++)Le?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,En.__webglTexture,j,jt+gn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,En.__webglTexture,j),Ln?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.__webglTexture,yt,He+gn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xe.__webglTexture,yt),j!==0?z.blitFramebuffer(te,ee,At,Pt,ge,ve,At,Pt,z.COLOR_BUFFER_BIT,z.NEAREST):Ln?z.copyTexSubImage3D(sn,yt,ge,ve,He+gn,te,ee,At,Pt):z.copyTexSubImage2D(sn,yt,ge,ve,te,ee,At,Pt);Xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ln?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(sn,yt,ge,ve,He,At,Pt,Ot,ne,Kt,be.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(sn,yt,ge,ve,He,At,Pt,Ot,ne,be.data):z.texSubImage3D(sn,yt,ge,ve,He,At,Pt,Ot,ne,Kt,be):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,yt,ge,ve,At,Pt,ne,Kt,be.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,yt,ge,ve,be.width,be.height,ne,be.data):z.texSubImage2D(z.TEXTURE_2D,yt,ge,ve,At,Pt,ne,Kt,be);z.pixelStorei(z.UNPACK_ROW_LENGTH,xe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Bn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,hi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Un),z.pixelStorei(z.UNPACK_SKIP_IMAGES,fn),yt===0&&W.generateMipmaps&&z.generateMipmap(sn),Xt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,tt=null,Q=null,j=0){return R.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],W=arguments[3],j=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,tt,Q,j)},this.initRenderTarget=function(R){Wt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Xt.unbindTexture()},this.resetState=function(){H=0,B=0,q=null,Xt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const n0={type:"change"},Ad={type:"start"},H0={type:"end"},yc=new Pc,i0=new Ba,dA=Math.cos(70*WS.DEG2RAD),ln=new J,Vn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eh=1e-6;class pA extends Dy{constructor(t,i=null){super(t,i),this.state=ze.NONE,this.enabled=!0,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:gr.ROTATE,TWO:gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Ms,this._lastTargetPosition=new J,this._quat=new Ms().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dg,this._sphericalDelta=new Dg,this._scale=1,this._panOffset=new J,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new J,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_A.bind(this),this._onPointerDown=mA.bind(this),this._onPointerUp=gA.bind(this),this._onContextMenu=TA.bind(this),this._onMouseWheel=SA.bind(this),this._onKeyDown=yA.bind(this),this._onTouchStart=MA.bind(this),this._onTouchMove=EA.bind(this),this._onMouseDown=vA.bind(this),this._onMouseMove=xA.bind(this),this._interceptControlDown=bA.bind(this),this._interceptControlUp=AA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(n0),this.update(),this.state=ze.NONE}update(t=null){const i=this.object.position;ln.copy(i).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Vn:s>Math.PI&&(s-=Vn),l<-Math.PI?l+=Vn:l>Math.PI&&(l-=Vn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),i.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=ln.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(yc.origin.copy(this.object.position),yc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yc.direction))<dA?this.object.lookAt(this.target):(i0.setFromNormalAndCoplanarPoint(this.object.up,this.target),yc.intersectPlane(i0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Eh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eh||this._lastTargetPosition.distanceToSquared(this.target)>Eh?(this.dispatchEvent(n0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){ln.setFromMatrixColumn(i,0),ln.multiplyScalar(-t),this._panOffset.add(ln)}_panUp(t,i){this.screenSpacePanning===!0?ln.setFromMatrixColumn(i,1):(ln.setFromMatrixColumn(i,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(t),this._panOffset.add(ln)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;ln.copy(l).sub(this.target);let u=ln.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new fe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function mA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function _A(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function gA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(H0),this.state=ze.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function vA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ze.DOLLY;break;case xr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ze.ROTATE}break;case xr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Ad)}function xA(r){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function SA(r){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(r.preventDefault(),this.dispatchEvent(Ad),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(H0))}function yA(r){this.enabled!==!1&&this._handleKeyDown(r)}function MA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ze.TOUCH_ROTATE;break;case gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ze.TOUCH_DOLLY_PAN;break;case gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Ad)}function EA(r){switch(this._trackPointer(r),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ze.NONE}}function TA(r){this.enabled!==!1&&r.preventDefault()}function bA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const G0="http://192.168.1.105:8000",RA="http://orangepizero3w.local:8000",a0={playing:!1,frame:0,frame_count:0,trajectory:[],ground_truth:[],map_points:[],logs:[],device:{},transport:{}},V0=r=>(/^https?:\/\//i.test(r.trim())?r.trim():`http://${r.trim()}`).replace(/\/+$/,""),CA=()=>{const r=new URLSearchParams(window.location.search).get("backend");return V0(r||localStorage.getItem("orangepi-backend")||G0)};function wA(r){const[t,i]=Si.useState(a0),[s,l]=Si.useState(!1),[u,h]=Si.useState({rtt_ms:null,telemetry_kbps:0,message_hz:0,disconnects:0}),d=Si.useRef(null);return Si.useEffect(()=>{let p=!1,g,v,x,M=0,E=0,w=0;l(!1),i(a0),h({rtt_ms:null,telemetry_kbps:0,message_hz:0,disconnects:0});const y=()=>{const _=new WebSocket(r.replace(/^http/i,"ws")+"/ws");d.current=_,_.onopen=()=>{l(!0),v=setInterval(()=>{_.readyState===WebSocket.OPEN&&_.send(JSON.stringify({type:"ping",client_time_ms:performance.now()}))},1e3)},_.onmessage=P=>{M+=new Blob([P.data]).size,E+=1;try{const O=JSON.parse(P.data);if(O.type==="pong"){const D=Math.max(0,performance.now()-Number(O.client_time_ms));h(F=>({...F,rtt_ms:D}))}else O.type==="state"&&i(O)}catch{}},_.onclose=()=>{clearInterval(v),l(!1),p||(w+=1,h(P=>({...P,disconnects:w})),g=setTimeout(y,1200))},_.onerror=()=>_.close()};return x=setInterval(()=>{h(_=>({..._,telemetry_kbps:M*8/1e3,message_hz:E})),M=0,E=0},1e3),y(),()=>{p=!0,clearTimeout(g),clearInterval(v),clearInterval(x),d.current?.close()}},[r]),{state:t,connected:s,network:u,command:(p,g)=>{d.current?.readyState===WebSocket.OPEN&&d.current.send(JSON.stringify({type:"control",action:p,value:g}))}}}function s0(r,t,i){const s=new Mn().setFromPoints(t.map(([l,u,h])=>new J(l,h,-u)));r.geometry.dispose(),r.geometry=s,r.material.color.set(i)}function DA({state:r}){const t=Si.useRef(null),i=Si.useRef(null);return Si.useEffect(()=>{const s=t.current,l=new Sy;l.background=new ye(462871),l.fog=new Md(462871,.016);const u=new fi(55,1,.01,500);u.position.set(7,6,8);const h=new hA({antialias:!0});h.setPixelRatio(Math.min(devicePixelRatio,2)),s.appendChild(h.domElement);const d=new pA(u,h.domElement);d.enableDamping=!0,l.add(new Cy(30,30,2377563,1189425)),l.add(new wy(1.2));const m=new ud(new Mn,new Io({color:3270305})),p=new ud(new Mn,new Io({color:16757322})),g=new Ey(new Mn,new N0({color:6076927,size:.025,sizeAttenuation:!0})),v=new Po,x=new Ni(new Td(.14,.38,4),new yd({color:16777215,wireframe:!0}));x.rotation.x=Math.PI/2,v.add(x),l.add(m,p,g,v),i.current={estimated:m,truth:p,cloud:g,body:v};const M=()=>{const{clientWidth:_,clientHeight:P}=s;h.setSize(_,P,!1),u.aspect=_/Math.max(P,1),u.updateProjectionMatrix()},E=new ResizeObserver(M);E.observe(s),M();let w;const y=()=>{d.update(),h.render(l,u),w=requestAnimationFrame(y)};return y(),()=>{cancelAnimationFrame(w),E.disconnect(),h.dispose(),s.removeChild(h.domElement)}},[]),Si.useEffect(()=>{const s=i.current;if(!s)return;s0(s.estimated,r.trajectory||[],3270305),s0(s.truth,r.ground_truth||[],16757322);const l=new Mn().setFromPoints((r.map_points||[]).map(([u,h,d])=>new J(u,d,-h)));if(s.cloud.geometry.dispose(),s.cloud.geometry=l,r.position){const[u,h,d]=r.position;s.body.position.set(u,d,-h)}},[r.trajectory,r.ground_truth,r.map_points,r.position]),Mt.jsx("div",{className:"scene",ref:t})}const Di=(r,t="")=>r==null?"—":`${typeof r=="number"?r.toFixed(1):r}${t}`;function yn({label:r,value:t,accent:i}){return Mt.jsxs("div",{className:"metric",children:[Mt.jsx("span",{children:r}),Mt.jsx("strong",{className:i||"",children:t})]})}function r0({side:r,label:t,endpoint:i}){return Mt.jsxs("section",{className:"camera-card panel",children:[Mt.jsxs("div",{className:"panel-title",children:[Mt.jsx("span",{children:t}),Mt.jsx("small",{children:"WIFI MJPEG · 752×480 · 10 FPS"})]}),Mt.jsxs("div",{className:"camera-frame",children:[Mt.jsx("img",{src:`${i}/stream/${r}.mjpg`,alt:`${t} camera stream`},`${i}-${r}`),Mt.jsx("div",{className:"reticle"})]})]})}function UA(){const[r,t]=Si.useState(CA),[i,s]=Si.useState(r),{state:l,connected:u,network:h,command:d}=wA(r),m=l.frame_count?100*l.frame/l.frame_count:0,p=l.tracking==="tracking"?"good":l.tracking==="lost"?"bad":"warn",g=(v=i)=>{const x=V0(v);localStorage.setItem("orangepi-backend",x),s(x),t(x)};return Mt.jsxs("main",{children:[Mt.jsxs("header",{children:[Mt.jsxs("div",{children:[Mt.jsx("div",{className:"eyebrow",children:"EECS 159A · LAPTOP DEBUG CONSOLE"}),Mt.jsx("h1",{children:"3D Reconstruction Drone"})]}),Mt.jsxs("div",{className:`connection ${u?"online":"offline"}`,children:[Mt.jsx("i",{}),u?"ORANGE PI CONNECTED":"RECONNECTING"]})]}),Mt.jsxs("section",{className:"status-strip panel",children:[Mt.jsx(yn,{label:"ENGINE",value:l.engine_label||"Waiting"}),Mt.jsx(yn,{label:"TRACKING",value:(l.tracking||"idle").toUpperCase(),accent:p}),Mt.jsx(yn,{label:"PROCESS",value:Di(l.processing_fps," FPS")}),Mt.jsx(yn,{label:"RTT",value:Di(h.rtt_ms," ms")}),Mt.jsx(yn,{label:"CPU",value:Di(l.device?.cpu_percent,"%")}),Mt.jsx(yn,{label:"TEMP",value:Di(l.device?.temperature_c,"°C"),accent:(l.device?.temperature_c||0)>75?"bad":""})]}),Mt.jsxs("section",{className:"workspace",children:[Mt.jsxs("div",{className:"left-column",children:[Mt.jsxs("div",{className:"camera-grid",children:[Mt.jsx(r0,{side:"left",label:"CAMERA 0 · LEFT",endpoint:r}),Mt.jsx(r0,{side:"right",label:"CAMERA 1 · RIGHT",endpoint:r})]}),Mt.jsxs("section",{className:"panel viewport-panel",children:[Mt.jsxs("div",{className:"panel-title",children:[Mt.jsx("span",{children:"WORLD VIEW"}),Mt.jsxs("div",{className:"legend",children:[Mt.jsx("b",{className:"estimate"}),"Estimated ",Mt.jsx("b",{className:"truth"}),"Aligned ground truth ",Mt.jsx("b",{className:"points"}),"Map points"]})]}),Mt.jsx(DA,{state:l})]})]}),Mt.jsxs("aside",{children:[Mt.jsxs("section",{className:"panel endpoint-panel",children:[Mt.jsxs("div",{className:"panel-title",children:[Mt.jsx("span",{children:"ORANGE PI ENDPOINT"}),Mt.jsx("small",{children:"Wi‑Fi 6 LAN"})]}),Mt.jsxs("div",{className:"endpoint-form",children:[Mt.jsx("input",{value:i,onChange:v=>s(v.target.value),onKeyDown:v=>v.key==="Enter"&&g()}),Mt.jsx("button",{onClick:()=>g(),children:"CONNECT"})]}),Mt.jsxs("div",{className:"endpoint-presets",children:[Mt.jsx("button",{onClick:()=>g(G0),children:"192.168.1.105"}),Mt.jsx("button",{onClick:()=>g(RA),children:"mDNS"})]})]}),Mt.jsxs("section",{className:"panel control-panel",children:[Mt.jsxs("div",{className:"panel-title",children:[Mt.jsx("span",{children:"REPLAY CONTROL"}),Mt.jsx("small",{children:l.dataset||"EuRoC"})]}),Mt.jsxs("div",{className:"button-row",children:[Mt.jsx("button",{className:"primary",onClick:()=>d(l.playing?"pause":"play"),children:l.playing?"PAUSE":"PLAY"}),Mt.jsx("button",{onClick:()=>d("reset"),children:"RESET"})]}),Mt.jsxs("label",{className:"speed",children:["SPEED",Mt.jsx("select",{value:l.speed||1,onChange:v=>d("speed",Number(v.target.value)),children:[.25,.5,1,2,4].map(v=>Mt.jsxs("option",{value:v,children:[v,"×"]},v))})]}),Mt.jsx("div",{className:"progress",children:Mt.jsx("i",{style:{width:`${m}%`}})}),Mt.jsxs("div",{className:"frame-count",children:["FRAME ",l.frame||0," / ",l.frame_count||0]})]}),Mt.jsxs("section",{className:"panel telemetry-panel",children:[Mt.jsx("div",{className:"panel-title",children:Mt.jsx("span",{children:"SLAM TELEMETRY"})}),Mt.jsx(yn,{label:"ORB features",value:l.features??"—"}),Mt.jsx(yn,{label:"Stereo depths",value:l.stereo_points??"—"}),Mt.jsx(yn,{label:"PnP inliers",value:l.inliers??"—"}),Mt.jsx(yn,{label:"Map points",value:l.map_points?.length??0}),Mt.jsx(yn,{label:"Position error",value:Di(l.position_error_m," m")}),Mt.jsx(yn,{label:"ATE RMSE",value:Di(l.ate_rmse_m," m")}),Mt.jsxs("div",{className:"pose",children:[Mt.jsx("span",{children:"POSITION · METRES"}),Mt.jsx("code",{children:l.position?l.position.map(v=>Number(v).toFixed(3)).join("   "):"—   —   —"})]})]}),Mt.jsxs("section",{className:"panel telemetry-panel",children:[Mt.jsxs("div",{className:"panel-title",children:[Mt.jsx("span",{children:"WIFI TRANSPORT"}),Mt.jsx("small",{children:"SSH NOT IN DATA PATH"})]}),Mt.jsx(yn,{label:"Round trip",value:Di(h.rtt_ms," ms")}),Mt.jsx(yn,{label:"Telemetry",value:Di(h.telemetry_kbps," kbps")}),Mt.jsx(yn,{label:"Messages",value:Di(h.message_hz," Hz")}),Mt.jsx(yn,{label:"Video estimate",value:Di(l.transport?.video_estimated_kbps," kbps")}),Mt.jsx(yn,{label:"Disconnects",value:h.disconnects})]}),Mt.jsxs("section",{className:"panel logs-panel",children:[Mt.jsxs("div",{className:"panel-title",children:[Mt.jsx("span",{children:"EVENT LOG"}),Mt.jsx("small",{children:"LIVE"})]}),Mt.jsx("div",{className:"logs",children:(l.logs||[]).slice().reverse().map((v,x)=>Mt.jsxs("div",{className:"log",children:[Mt.jsx("time",{children:v.time}),Mt.jsx("span",{children:v.message})]},`${v.time}-${x}`))})]})]})]}),Mt.jsx("footer",{children:"LAPTOP UI · WIFI DATA PLANE · ORANGE PI ON-BOARD STEREO VO · EuRoC V1_01_easy"})]})}eS.createRoot(document.getElementById("root")).render(Mt.jsx(UA,{}));
