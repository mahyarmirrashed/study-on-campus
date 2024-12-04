const Pt=!1;var bt=Array.isArray,Ft=Array.from,qt=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,Qn=Object.getOwnPropertyDescriptors,Mt=Object.prototype,Lt=Array.prototype,Wn=Object.getPrototypeOf;function Yt(n){return typeof n=="function"}const Ht=()=>{};function jt(n){return n()}function Xn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,j=8,en=16,g=32,z=64,W=128,D=256,G=512,h=1024,x=2048,P=4096,N=8192,b=16384,nt=32768,yn=65536,Bt=1<<17,tt=1<<19,wn=1<<20,vn=Symbol("$state"),Ut=Symbol("legacy props"),Vt=Symbol("");function mn(n){return n===this.v}function rt(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Gt(n,t){return n!==t}function Tn(n){return!rt(n,this.v)}function et(n){throw new Error("effect_in_teardown")}function at(){throw new Error("effect_in_unowned_derived")}function st(n){throw new Error("effect_orphan")}function lt(){throw new Error("effect_update_depth_exceeded")}function Kt(){throw new Error("hydration_failed")}function $t(n){throw new Error("props_invalid_value")}function Zt(){throw new Error("state_descriptors_fixed")}function zt(){throw new Error("state_prototype_fixed")}function ut(){throw new Error("state_unsafe_local_read")}function ot(){throw new Error("state_unsafe_mutation")}let J=!1;function Jt(){J=!0}function an(n){return{f:0,v:n,reactions:null,equals:mn,version:0}}function Qt(n){return gn(an(n))}function it(n,t=!1){var e;const r=an(n);return t||(r.equals=Tn),J&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function Wt(n,t=!1){return gn(it(n,t))}function gn(n){return i!==null&&i.f&y&&(T===null?At([n]):T.push(n)),n}function An(n,t){return i!==null&&on()&&i.f&(y|en)&&(T===null||!T.includes(n))&&ot(),ft(n,t)}function ft(n,t){return n.equals(t)||(n.v=t,n.version=Un(),xn(n,x),on()&&u!==null&&u.f&h&&!(u.f&g)&&(v!==null&&v.includes(n)?(m(u,x),Q(u)):A===null?xt([n]):A.push(n))),t}function xn(n,t){var r=n.reactions;if(r!==null)for(var e=on(),a=r.length,s=0;s<a;s++){var l=r[s],f=l.f;f&x||!e&&l===u||(m(l,t),f&(h|D)&&(f&y?xn(l,P):Q(l)))}}const Xt=1,nr=2,tr=16,rr=1,er=2,ar=4,sr=8,lr=16,ur=1,or=2,_t="[",ct="[!",vt="]",Sn={},ir=Symbol(),fr="http://www.w3.org/2000/svg";function Rn(n){console.warn("hydration_mismatch")}let R=!1;function _r(n){R=n}let w;function L(n){if(n===null)throw Rn(),Sn;return w=n}function cr(){return L(O(w))}function vr(n){if(R){if(O(w)!==null)throw Rn(),Sn;w=n}}function pr(n=1){if(R){for(var t=n,r=w;t--;)r=O(r);w=r}}function hr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===vt){if(n===0)return t;n-=1}else(r===_t||r===ct)&&(n+=1)}var e=O(t);t.remove(),t=e}}var pn,Dn,On;function dr(){if(pn===void 0){pn=window;var n=Element.prototype,t=Node.prototype;Dn=cn(t,"firstChild").get,On=cn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function X(n=""){return document.createTextNode(n)}function nn(n){return Dn.call(n)}function O(n){return On.call(n)}function Er(n,t){if(!R)return nn(n);var r=nn(w);if(r===null)r=w.appendChild(X());else if(t&&r.nodeType!==3){var e=X();return r==null||r.before(e),L(e),e}return L(r),r}function yr(n,t){if(!R){var r=nn(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function wr(n,t=1,r=!1){let e=R?w:n;for(var a;t--;)a=e,e=O(e);if(!R)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var l=X();return e===null?a==null||a.after(l):e.before(l),L(l),l}return L(e),e}function mr(n){n.textContent=""}function pt(n){var t=y|x;u===null?t|=D:u.f|=wn;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:mn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Tr(n){const t=pt(n);return t.equals=Tn,t}function In(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?sn(e):q(e)}}}function ht(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function kn(n){var t,r=u;Z(ht(n));try{In(n),t=Vn(n)}finally{Z(r)}return t}function Cn(n){var t=kn(n),r=(I||n.f&D)&&n.deps!==null?P:h;m(n,r),n.equals(t)||(n.v=t,n.version=Un())}function sn(n){In(n),H(n,0),m(n,b),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Nn(n){u===null&&i===null&&st(),i!==null&&i.f&D&&at(),un&&et()}function dt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function F(n,t,r,e=!0){var a=(n&z)!==0,s=u,l={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=k;try{hn(!0),B(l),l.f|=nt}catch(_){throw q(l),_}finally{hn(f)}}else t!==null&&Q(l);var p=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&wn)===0;if(!p&&!a&&e&&(s!==null&&dt(l,s),i!==null&&i.f&y)){var d=i;(d.children??(d.children=[])).push(l)}return l}function gr(n){const t=F(j,null,!1);return m(t,h),t.teardown=n,t}function Ar(n){Nn();var t=u!==null&&(u.f&g)!==0&&o!==null&&!o.m;if(t){var r=o;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:i})}else{var e=Pn(n);return e}}function xr(n){return Nn(),ln(n)}function Sr(n){const t=F(z,n,!0);return()=>{q(t)}}function Pn(n){return F(En,n,!1)}function Rr(n,t){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ln(()=>{n(),!e.ran&&(e.ran=!0,An(r.l.r2,!0),kt(t))})}function Dr(){var n=o;ln(()=>{if(zn(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&h&&m(r,P),M(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function ln(n){return F(j,n,!0)}function Or(n){return Et(n)}function Et(n,t=0){return F(j|en|t,n,!0)}function Ir(n,t=!0){return F(j|g,n,!0,t)}function bn(n){var t=n.teardown;if(t!==null){const r=un,e=i;dn(!0),$(null);try{t.call(null)}finally{dn(r),$(e)}}}function Fn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)sn(t[r])}}function qn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;q(r,t),r=e}}function yt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&g||q(t),t=r}}function q(n,t=!0){var r=!1;if((t||n.f&tt)&&n.nodes_start!==null){for(var e=n.nodes_start,a=n.nodes_end;e!==null;){var s=e===a?null:O(e);e.remove(),e=s}r=!0}qn(n,t&&!r),Fn(n),H(n,0),m(n,b);var l=n.transitions;if(l!==null)for(const p of l)p.stop();bn(n);var f=n.parent;f!==null&&f.first!==null&&Mn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Mn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function kr(n,t){var r=[];Ln(n,r,!0),wt(r,()=>{q(n),t&&t()})}function wt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var a of n)a.out(e)}else t()}function Ln(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var a=e.next,s=(e.f&yn)!==0||(e.f&g)!==0;Ln(e,t,s?r:!1),e=a}}}function Cr(n){Yn(n,!0)}function Yn(n,t){if(n.f&N){M(n)&&B(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,a=(r.f&yn)!==0||(r.f&g)!==0;Yn(r,a?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}let K=!1,tn=[];function Hn(){K=!1;const n=tn.slice();tn=[],Xn(n)}function Nr(n){K||(K=!0,queueMicrotask(Hn)),tn.push(n)}function mt(){K&&Hn()}function Tt(n){throw new Error("lifecycle_outside_component")}const jn=0,gt=1;let U=!1,V=jn,Y=!1,k=!1,un=!1;function hn(n){k=n}function dn(n){un=n}let S=[],C=0;let i=null;function $(n){i=n}let u=null;function Z(n){u=n}let T=null;function At(n){T=n}let v=null,E=0,A=null;function xt(n){A=n}let Bn=0,I=!1,o=null;function Un(){return++Bn}function on(){return!J||o!==null&&o.l===null}function M(n){var l,f;var t=n.f;if(t&x)return!0;if(t&P){var r=n.deps,e=(t&D)!==0;if(r!==null){var a;if(t&G){for(a=0;a<r.length;a++)((l=r[a]).reactions??(l.reactions=[])).push(n);n.f^=G}for(a=0;a<r.length;a++){var s=r[a];if(M(s)&&Cn(s),e&&u!==null&&!I&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||m(n,h)}return!1}function St(n,t){for(var r=t;r!==null;){if(r.f&W)try{r.fn(n);return}catch{r.f^=W}r=r.parent}throw U=!1,n}function Rt(n){return(n.f&b)===0&&(n.parent===null||(n.parent.f&W)===0)}function fn(n,t,r,e){if(U){if(r===null&&(U=!1),Rt(t))throw n;return}r!==null&&(U=!0);{St(n,t);return}}function Vn(n){var _n;var t=v,r=E,e=A,a=i,s=I,l=T,f=o,p=n.f;v=null,E=0,A=null,i=p&(g|z)?null:n,I=!k&&(p&D)!==0,T=null,o=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(H(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!I)for(c=E;c<_.length;c++)((_n=_[c]).reactions??(_n.reactions=[])).push(n)}else _!==null&&E<_.length&&(H(n,E),_.length=E);return d}finally{v=t,E=r,A=e,i=a,I=s,T=l,o=f}}function Dt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[e]=r[a],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(m(t,P),t.f&(D|G)||(t.f^=G),H(t,0))}function H(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Dt(n,r[e])}function B(n){var t=n.f;if(!(t&b)){m(n,h);var r=u,e=o;u=n;try{t&en?yt(n):qn(n),Fn(n),bn(n);var a=Vn(n);n.teardown=typeof a=="function"?a:null,n.version=Bn}catch(s){fn(s,n,r,e||n.ctx)}finally{u=r}}}function Gn(){C>1e3&&(C=0,lt()),C++}function Kn(n){var t=n.length;if(t!==0){Gn();var r=k;k=!0;try{for(var e=0;e<t;e++){var a=n[e];a.f&h||(a.f^=h);var s=[];$n(a,s),Ot(s)}}finally{k=r}}}function Ot(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(b|N)))try{M(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mn(e):e.fn=null))}catch(a){fn(a,e,null,e.ctx)}}}function It(){if(Y=!1,C>1001)return;const n=S;S=[],Kn(n),Y||(C=0)}function Q(n){V===jn&&(Y||(Y=!0,queueMicrotask(It)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(z|g)){if(!(r&h))return;t.f^=h}}S.push(t)}function $n(n,t){var r=n.first,e=[];n:for(;r!==null;){var a=r.f,s=(a&g)!==0,l=s&&(a&h)!==0,f=r.next;if(!l&&!(a&N))if(a&j){if(s)r.f^=h;else try{M(r)&&B(r)}catch(c){fn(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else a&En&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],t.push(p),$n(p,t)}function Zn(n){var t=V,r=S;try{Gn();const a=[];V=gt,S=a,Y=!1,Kn(r);var e=n==null?void 0:n();return mt(),(S.length>0||a.length>0)&&Zn(),C=0,e}finally{V=t,S=r}}async function Pr(){await Promise.resolve(),Zn()}function zn(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&b){var e=kn(n);return sn(n),e}if(i!==null){T!==null&&T.includes(n)&&ut();var a=i.deps;v===null&&a!==null&&a[E]===n?E++:v===null?v=[n]:v.push(n),A!==null&&u!==null&&u.f&h&&!(u.f&g)&&A.includes(n)&&(m(u,x),Q(u))}else if(r&&n.deps===null)for(var s=n,l=s.parent,f=s;l!==null;)if(l.f&y){var p=l;f=p,l=p.parent}else{var d=l;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(s=n,M(s)&&Cn(s)),n.v}function kt(n){const t=i;try{return i=null,n()}finally{i=t}}const Ct=~(x|P|h);function m(n,t){n.f=n.f&Ct|t}function br(n){return Jn().get(n)}function Fr(n,t){return Jn().set(n,t),t}function Jn(n){return o===null&&Tt(),o.c??(o.c=new Map(Nt(o)||void 0))}function Nt(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function qr(n,t=1){var r=zn(n),e=t===1?r++:r--;return An(n,r),e}function Mr(n,t=!1,r){o={p:o,c:null,e:null,m:!1,s:n,x:null,l:null},J&&!t&&(o.l={s:null,u:null,r1:[],r2:an(!1)})}function Lr(n){const t=o;if(t!==null){const l=t.e;if(l!==null){var r=u,e=i;t.e=null;try{for(var a=0;a<l.length;a++){var s=l[a];Z(s.effect),$(s.reaction),Pn(s.fn)}}finally{Z(r),$(e)}}o=t.p,t.m=!0}return{}}function Yr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(vn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&vn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=Wn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Qn(r);for(let a in e){const s=e[a].get;if(s)try{s.call(n)}catch{}}}}}export{Wn as $,Ir as A,R as B,u as C,o as D,gr as E,it as F,Ht as G,_t as H,An as I,zn as J,xr as K,Ar as L,jt as M,Xn as N,Yr as O,pt as P,Et as Q,tt as R,vn as S,rt as T,Mt as U,Lt as V,an as W,Zt as X,cn as Y,ir as Z,zt as _,Lr as a,bt as a0,Cr as a1,kr as a2,yn as a3,ct as a4,hr as a5,$t as a6,Bt as a7,ar as a8,Tn as a9,wt as aA,q as aB,i as aC,nr as aD,Xt as aE,tr as aF,$ as aG,ur as aH,or as aI,Jt as aJ,Pt as aK,Rr as aL,Dr as aM,Wt as aN,fr as aO,pn as aP,pr as aQ,qr as aa,Yt as ab,Ut as ac,g as ad,z as ae,Z as af,rr as ag,J as ah,er as ai,sr as aj,Tr as ak,lr as al,Tt as am,Qn as an,Vt as ao,Fr as ap,br as aq,Zn as ar,qt as as,Pr as at,Qt as au,on as av,Gt as aw,N as ax,ft as ay,Ln as az,ln as b,Er as c,O as d,Pn as e,yr as f,nn as g,Sn as h,dr as i,_r as j,L as k,cr as l,w as m,vt as n,Rn as o,Mr as p,Nr as q,vr as r,wr as s,Or as t,kt as u,Kt as v,mr as w,Ft as x,Sr as y,X as z};
