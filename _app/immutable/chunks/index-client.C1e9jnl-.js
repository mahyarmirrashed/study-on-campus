import{S as A,a0 as X,a1 as k,a2 as m,a3 as ee,U as y,a4 as E,a5 as v,F as b,y as F,a6 as re,W as ne,a7 as te,J as ae,x as C,j as se,K as ie,a8 as fe,a9 as ue,h as le,e as B,aa as M,w as U,L as Y,k as oe,ab as ce,ac as de,ad as J,ae as _e,C as N,af as ve,ag as pe,ah as z,ai as he,aj as V,ak as be,al as we,am as W,I as G,an as me,ao as H,ap as T,aq as ye,R as Pe,z as D,ar as Q,B as ge}from"./runtime.BMC8DkIq.js";import{c as xe}from"./store.Mp3FbTqJ.js";function R(e,r=null,u){if(typeof e!="object"||e===null||A in e)return e;const i=ne(e);if(i!==X&&i!==k)return e;var t=new Map,c=te(e),p=m(0);c&&t.set("length",m(e.length));var w;return new Proxy(e,{defineProperty(l,n,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&ee();var f=t.get(n);return f===void 0?(f=m(a.value),t.set(n,f)):y(f,R(a.value,w)),!0},deleteProperty(l,n){var a=t.get(n);if(a===void 0)n in l&&t.set(n,m(v));else{if(c&&typeof n=="string"){var f=t.get("length"),s=Number(n);Number.isInteger(s)&&s<f.v&&y(f,s)}y(a,v),Z(p)}return!0},get(l,n,a){var _;if(n===A)return e;var f=t.get(n),s=n in l;if(f===void 0&&(!s||(_=E(l,n))!=null&&_.writable)&&(f=m(R(s?l[n]:v,w)),t.set(n,f)),f!==void 0){var o=b(f);return o===v?void 0:o}return Reflect.get(l,n,a)},getOwnPropertyDescriptor(l,n){var a=Reflect.getOwnPropertyDescriptor(l,n);if(a&&"value"in a){var f=t.get(n);f&&(a.value=b(f))}else if(a===void 0){var s=t.get(n),o=s==null?void 0:s.v;if(s!==void 0&&o!==v)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return a},has(l,n){var o;if(n===A)return!0;var a=t.get(n),f=a!==void 0&&a.v!==v||Reflect.has(l,n);if(a!==void 0||F!==null&&(!f||(o=E(l,n))!=null&&o.writable)){a===void 0&&(a=m(f?R(l[n],w):v),t.set(n,a));var s=b(a);if(s===v)return!1}return f},set(l,n,a,f){var g;var s=t.get(n),o=n in l;if(c&&n==="length")for(var _=a;_<s.v;_+=1){var P=t.get(_+"");P!==void 0?y(P,v):_ in l&&(P=m(v),t.set(_+"",P))}s===void 0?(!o||(g=E(l,n))!=null&&g.writable)&&(s=m(void 0),y(s,R(a,w)),t.set(n,s)):(o=s.v!==v,y(s,R(a,w)));var h=Reflect.getOwnPropertyDescriptor(l,n);if(h!=null&&h.set&&h.set.call(f,a),!o){if(c&&typeof n=="string"){var I=t.get("length"),O=Number(n);Number.isInteger(O)&&O>=I.v&&y(I,O+1)}Z(p)}return!0},ownKeys(l){b(p);var n=Reflect.ownKeys(l).filter(s=>{var o=t.get(s);return o===void 0||o.v!==v});for(var[a,f]of t)f.v!==v&&!(a in l)&&n.push(a);return n},setPrototypeOf(){re()}})}function Z(e,r=1){y(e,e.v+r)}function Ne(e,r,u=!1){C&&se();var i=e,t=null,c=null,p=null,w=u?ie:0,l=!1;const n=(f,s=!0)=>{l=!0,a(s,f)},a=(f,s)=>{if(p===(p=f))return;let o=!1;if(C){const _=i.data===fe;p===_&&(i=ue(),le(i),B(!1),o=!0)}p?(t?M(t):s&&(t=U(()=>s(i))),c&&Y(c,()=>{c=null})):(c?M(c):s&&(c=U(()=>s(i))),t&&Y(t,()=>{t=null})),o&&B(!0)};ae(()=>{l=!1,r(n),l||a(null,null)},w),C&&(i=oe)}const Re={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Le(e,r,u){return new Proxy({props:e,exclude:r},Re)}const Ee={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,u){return r in e.special||(e.special[r]=Oe({get[r](){return e.props[r]}},r,J)),e.special[r](u),H(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),H(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ke(e,r){return new Proxy({props:e,exclude:r,special:{},version:m(0)},Ee)}const Ie={get(e,r){let u=e.props.length;for(;u--;){let i=e.props[u];if(T(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,u){let i=e.props.length;for(;i--;){let t=e.props[i];T(t)&&(t=t());const c=E(t,r);if(c&&c.set)return c.set(u),!0}return!1},getOwnPropertyDescriptor(e,r){let u=e.props.length;for(;u--;){let i=e.props[u];if(T(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const t=E(i,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===A||r===W)return!1;for(let u of e.props)if(T(u)&&(u=u()),u!=null&&r in u)return!0;return!1},ownKeys(e){const r=[];for(let u of e.props){T(u)&&(u=u());for(const i in u)r.includes(i)||r.push(i)}return r}};function Ce(...e){return new Proxy({props:e},Ie)}function $(e){for(var r=F,u=F;r!==null&&!(r.f&(ve|pe));)r=r.parent;try{return z(r),e()}finally{z(u)}}function Oe(e,r,u,i){var q;var t=(u&he)!==0,c=!V||(u&be)!==0,p=(u&we)!==0,w=(u&ye)!==0,l=!1,n;p?[n,l]=xe(()=>e[r]):n=e[r];var a=A in e||W in e,f=((q=E(e,r))==null?void 0:q.set)??(a&&p&&r in e?d=>e[r]=d:void 0),s=i,o=!0,_=!1,P=()=>(_=!0,o&&(o=!1,w?s=N(i):s=i),s);n===void 0&&i!==void 0&&(f&&c&&ce(),n=P(),f&&f(n));var h;if(c)h=()=>{var d=e[r];return d===void 0?P():(o=!0,_=!1,d)};else{var I=$(()=>(t?G:me)(()=>e[r]));I.f|=de,h=()=>{var d=b(I);return d!==void 0&&(s=void 0),d===void 0?s:d}}if(!(u&J))return h;if(f){var O=e.$$legacy;return function(d,x){return arguments.length>0?((!c||!x||O||l)&&f(x?h():d),d):h()}}var g=!1,j=!1,L=Pe(n),S=$(()=>G(()=>{var d=h(),x=b(L);return g?(g=!1,j=!0,x):(j=!1,L.v=d)}));return t||(S.equals=_e),function(d,x){if(arguments.length>0){const K=x?b(S):c&&p?R(d):d;return S.equals(K)||(g=!0,y(L,K),_&&s!==void 0&&(s=K),N(()=>b(S))),d}return b(S)}}function Se(e){D===null&&Q(),V&&D.l!==null?Te(D).m.push(e):ge(()=>{const r=N(e);if(typeof r=="function")return r})}function Fe(e){D===null&&Q(),Se(()=>()=>N(e))}function Te(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{R as a,Fe as b,Ne as i,Ke as l,Se as o,Oe as p,Le as r,Ce as s};
