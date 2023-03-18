(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const at={};function vn(e){at.context=e}const bu=(e,t)=>e===t,Ks=Symbol("solid-proxy"),Rn={equals:bu};let Su=Ho;const Vt=1,Ln=2,Vo={owned:null,cleanups:null,context:null,owner:null},Cs={};var P=null;let zt=null,L=null,ct=null,Gt=null,Zn=0;const[Au,om]=It(!1);function Fo(e,t){const n=L,s=P,r=e.length===0,i=r?Vo:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},o=r?e:()=>e(()=>vt(()=>ts(i)));P=i,L=null;try{return Ct(o,!0)}finally{L=n,P=s}}function It(e,t){t=t?Object.assign({},Rn,t):Rn;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),jo(n,r));return[qo.bind(n),s]}function Ai(e,t,n){const s=Dr(e,t,!0,Vt);Ze(s)}function At(e,t,n){const s=Dr(e,t,!1,Vt);Ze(s)}function Z(e,t,n){n=n?Object.assign({},Rn,n):Rn;const s=Dr(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,Ze(s),qo.bind(s)}function Cu(e,t,n){let s,r,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,i=t||{}):(s=e,r=t,i=n||{});let o=null,a=Cs,c=null,u=!1,l="initialValue"in i,h=typeof s=="function"&&Z(s);const f=new Set,[g,w]=(i.storage||It)(i.initialValue),[S,R]=It(void 0),[st,H]=It(void 0,{equals:!1}),[z,mt]=It(l?"ready":"unresolved");if(at.context){c=`${at.context.id}${at.context.count++}`;let A;i.ssrLoadFrom==="initial"?a=i.initialValue:at.load&&(A=at.load(c))&&(a=A[0])}function gt(A,_,$,yt){return o===A&&(o=null,l=!0,(A===a||_===a)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(yt,{value:_})),a=Cs,re(_,$)),_}function re(A,_){Ct(()=>{_===void 0&&w(()=>A),mt(_!==void 0?"errored":"ready"),R(_);for(const $ of f.keys())$.decrement();f.clear()},!1)}function O(){const A=xu,_=g(),$=S();if($!==void 0&&!o)throw $;return L&&!L.user&&A&&Ai(()=>{st(),o&&(A.resolved||f.has(A)||(A.increment(),f.add(A)))}),_}function M(A=!0){if(A!==!1&&u)return;u=!1;const _=h?h():s;if(_==null||_===!1){gt(o,vt(g));return}const $=a!==Cs?a:vt(()=>r(_,{value:g(),refetching:A}));return typeof $!="object"||!($&&"then"in $)?(gt(o,$,void 0,_),$):(o=$,u=!0,queueMicrotask(()=>u=!1),Ct(()=>{mt(l?"refreshing":"pending"),H()},!1),$.then(yt=>gt($,yt,void 0,_),yt=>gt($,void 0,Go(yt),_)))}return Object.defineProperties(O,{state:{get:()=>z()},error:{get:()=>S()},loading:{get(){const A=z();return A==="pending"||A==="refreshing"}},latest:{get(){if(!l)return O();const A=S();if(A&&!o)throw A;return g()}}}),h?Ai(()=>M(!1)):M(!1),[O,{refetch:M,mutate:w}]}function vt(e){if(L===null)return e();const t=L;L=null;try{return e()}finally{L=t}}function $o(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return o=>{let a;if(s){a=Array(e.length);for(let u=0;u<e.length;u++)a[u]=e[u]()}else a=e();if(i){i=!1;return}const c=vt(()=>t(a,r,o));return r=a,c}}function Uo(e){return P===null||(P.cleanups===null?P.cleanups=[e]:P.cleanups.push(e)),e}function Du(){return P}function _u(e,t){const n=P,s=L;P=e,L=null;try{return Ct(t,!0)}catch(r){_r(r)}finally{P=n,L=s}}function Nu(e){const t=L,n=P;return Promise.resolve().then(()=>{L=t,P=n;let s;return Ct(e,!1),L=P=null,s?s.done:void 0})}function ku(){return[Au,Nu]}function Bo(e,t){const n=Symbol("context");return{id:n,Provider:Ou(n),defaultValue:e}}function Ar(e){let t;return(t=Qo(P,e.id))!==void 0?t:e.defaultValue}function Cr(e){const t=Z(e),n=Z(()=>Hs(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let xu;function qo(){const e=zt;if(this.sources&&(this.state||e))if(this.state===Vt||e)Ze(this);else{const t=ct;ct=null,Ct(()=>On(this),!1),ct=t}if(L){const t=this.observers?this.observers.length:0;L.sources?(L.sources.push(this),L.sourceSlots.push(t)):(L.sources=[this],L.sourceSlots=[t]),this.observers?(this.observers.push(L),this.observerSlots.push(L.sources.length-1)):(this.observers=[L],this.observerSlots=[L.sources.length-1])}return this.value}function jo(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&Ct(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],o=zt&&zt.running;o&&zt.disposed.has(i),(o&&!i.tState||!o&&!i.state)&&(i.pure?ct.push(i):Gt.push(i),i.observers&&zo(i)),o||(i.state=Vt)}if(ct.length>1e6)throw ct=[],new Error},!1)),t}function Ze(e){if(!e.fn)return;ts(e);const t=P,n=L,s=Zn;L=P=e,Ru(e,e.value,s),L=n,P=t}function Ru(e,t,n){let s;try{s=e.fn(t)}catch(r){return e.pure&&(e.state=Vt,e.owned&&e.owned.forEach(ts),e.owned=null),e.updatedAt=n+1,_r(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?jo(e,s):e.value=s,e.updatedAt=n)}function Dr(e,t,n,s=Vt,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:P,context:null,pure:n};return P===null||P!==Vo&&(P.owned?P.owned.push(i):P.owned=[i]),i}function Ko(e){const t=zt;if(e.state===0||t)return;if(e.state===Ln||t)return On(e);if(e.suspense&&vt(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Zn);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===Vt||t)Ze(e);else if(e.state===Ln||t){const r=ct;ct=null,Ct(()=>On(e,n[0]),!1),ct=r}}function Ct(e,t){if(ct)return e();let n=!1;t||(ct=[]),Gt?n=!0:Gt=[],Zn++;try{const s=e();return Lu(n),s}catch(s){n||(Gt=null),ct=null,_r(s)}}function Lu(e){if(ct&&(Ho(ct),ct=null),e)return;const t=Gt;Gt=null,t.length&&Ct(()=>Su(t),!1)}function Ho(e){for(let t=0;t<e.length;t++)Ko(e[t])}function On(e,t){const n=zt;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===Vt||n?r!==t&&(!r.updatedAt||r.updatedAt<Zn)&&Ko(r):(r.state===Ln||n)&&On(r,t))}}function zo(e){const t=zt;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=Ln,s.pure?ct.push(s):Gt.push(s),s.observers&&zo(s))}}function ts(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),o=n.observerSlots.pop();s<r.length&&(i.sourceSlots[o]=s,r[s]=i,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)ts(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Go(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function _r(e){throw e=Go(e),e}function Qo(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Qo(e.owner,t):void 0}function Hs(e){if(typeof e=="function"&&!e.length)return Hs(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Hs(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ou(e,t){return function(s){let r;return At(()=>r=vt(()=>(P.context={[e]:s.value},Cr(()=>s.children))),void 0),r}}function W(e,t){return vt(()=>e(t||{}))}function wn(){return!0}const Mu={get(e,t,n){return t===Ks?n:e.get(t)},has(e,t){return t===Ks?!0:e.has(t)},set:wn,deleteProperty:wn,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:wn,deleteProperty:wn}},ownKeys(e){return e.keys()}};function Ds(e){return(e=typeof e=="function"?e():e)?e:{}}function Pu(...e){let t=!1;for(let s=0;s<e.length;s++){const r=e[s];t=t||!!r&&Ks in r,e[s]=typeof r=="function"?(t=!0,Z(r)):r}if(t)return new Proxy({get(s){for(let r=e.length-1;r>=0;r--){const i=Ds(e[r])[s];if(i!==void 0)return i}},has(s){for(let r=e.length-1;r>=0;r--)if(s in Ds(e[r]))return!0;return!1},keys(){const s=[];for(let r=0;r<e.length;r++)s.push(...Object.keys(Ds(e[r])));return[...new Set(s)]}},Mu);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const r=Object.getOwnPropertyDescriptors(e[s]);for(const i in r)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const a=(e[o]||{})[i];if(a!==void 0)return a}}})}return n}function Ci(e){let t,n;const s=r=>{const i=at.context;if(i){const[a,c]=It();(n||(n=e())).then(u=>{vn(i),c(()=>u.default),vn()}),t=a}else if(!t){const[a]=Cu(()=>(n||(n=e())).then(c=>c.default));t=a}let o;return Z(()=>(o=t())&&vt(()=>{if(!i)return o(r);const a=at.context;vn(i);const c=o(r);return vn(a),c}))};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}function Mn(e){let t=!1;const n=e.keyed,s=Z(()=>e.when,void 0,{equals:(r,i)=>t?r===i:!r==!i});return Z(()=>{const r=s();if(r){const i=e.children,o=typeof i=="function"&&i.length>0;return t=n||o,o?vt(()=>i(r)):i}return e.fallback},void 0,void 0)}const Vu=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Fu=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Vu]),$u=new Set(["innerHTML","textContent","innerText","children"]),Uu=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Di=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Bu=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),qu={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ju(e,t,n){let s=n.length,r=t.length,i=s,o=0,a=0,c=t[r-1].nextSibling,u=null;for(;o<r||a<i;){if(t[o]===n[a]){o++,a++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===o){const l=i<s?a?n[a-1].nextSibling:n[i-a]:c;for(;a<i;)e.insertBefore(n[a++],l)}else if(i===a)for(;o<r;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[a]===t[r-1]){const l=t[--r].nextSibling;e.insertBefore(n[a++],t[o++].nextSibling),e.insertBefore(n[--i],l),t[r]=n[i]}else{if(!u){u=new Map;let h=a;for(;h<i;)u.set(n[h],h++)}const l=u.get(t[o]);if(l!=null)if(a<l&&l<i){let h=o,f=1,g;for(;++h<r&&h<i&&!((g=u.get(t[h]))==null||g!==l+f);)f++;if(f>l-a){const w=t[o];for(;a<l;)e.insertBefore(n[a++],w)}else e.replaceChild(n[a++],t[o++])}else o++;else t[o++].remove()}}}const _i="_$DX_DELEGATE";function Ku(e,t,n,s={}){let r;return Fo(i=>{r=i,t===document?e():Qt(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function tn(e,t,n){const s=document.createElement("template");if(s.innerHTML=e,t&&s.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function Wo(e,t=window.document){const n=t[_i]||(t[_i]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Yu))}}function Xo(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Hu(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Yo(e,t){t==null?e.removeAttribute("class"):e.className=t}function zu(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function Gu(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,o;for(i=0,o=r.length;i<o;i++){const a=r[i];!a||a==="undefined"||t[a]||(Ni(e,a,!1),delete n[a])}for(i=0,o=s.length;i<o;i++){const a=s[i],c=!!t[a];!a||a==="undefined"||n[a]===c||!c||(Ni(e,a,!0),n[a]=c)}return n}function Qu(e,t,n){if(!t)return n?Xo(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function am(e,t={},n,s){const r={};return s||At(()=>r.children=pe(e,t.children,r.children)),At(()=>t.ref&&t.ref(e)),At(()=>Wu(e,t,n,!0,r,!0)),r}function Qt(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return pe(e,t,s,n);At(r=>pe(e,t(),r,n),s)}function Wu(e,t,n,s,r={},i=!1){t||(t={});for(const o in r)if(!(o in t)){if(o==="children")continue;r[o]=ki(e,o,null,r[o],n,i)}for(const o in t){if(o==="children"){s||pe(e,t.children);continue}const a=t[o];r[o]=ki(e,o,a,r[o],n,i)}}function Xu(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ni(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function ki(e,t,n,s,r,i){let o,a,c;if(t==="style")return Qu(e,n,s);if(t==="classList")return Gu(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);s&&e.removeEventListener(u,s),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);s&&e.removeEventListener(u,s,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),l=Bu.has(u);if(!l&&s){const h=Array.isArray(s)?s[0]:s;e.removeEventListener(u,h)}(l||n)&&(zu(e,u,n,l),l&&Wo([u]))}else if((c=$u.has(t))||!r&&(Di[t]||(a=Fu.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?Yo(e,n):o&&!a&&!c?e[Xu(t)]=n:e[Di[t]||t]=n;else{const u=r&&t.indexOf(":")>-1&&qu[t.split(":")[0]];u?Hu(e,u,t,n):Xo(e,Uu[t]||t,n)}return n}function Yu(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),at.registry&&!at.done&&(at.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let r=s.nextSibling;s.remove(),s=r}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function pe(e,t,n,s,r){for(at.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(at.context)return n;if(i==="number"&&(t=t.toString()),o){let a=n[0];a&&a.nodeType===3?a.data=t:a=document.createTextNode(t),n=ie(e,n,s,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(at.context)return n;n=ie(e,n,s)}else{if(i==="function")return At(()=>{let a=t();for(;typeof a=="function";)a=a();n=pe(e,a,n,s)}),()=>n;if(Array.isArray(t)){const a=[],c=n&&Array.isArray(n);if(zs(a,t,n,r))return At(()=>n=pe(e,a,n,s,!0)),()=>n;if(at.context){if(!a.length)return n;for(let u=0;u<a.length;u++)if(a[u].parentNode)return n=a}if(a.length===0){if(n=ie(e,n,s),o)return n}else c?n.length===0?xi(e,a,s):ju(e,n,a):(n&&ie(e),xi(e,a));n=a}else if(t instanceof Node){if(at.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=ie(e,n,s,t);ie(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function zs(e,t,n,s){let r=!1;for(let i=0,o=t.length;i<o;i++){let a=t[i],c=n&&n[i];if(a instanceof Node)e.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))r=zs(e,a,c)||r;else if(typeof a=="function")if(s){for(;typeof a=="function";)a=a();r=zs(e,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||r}else e.push(a),r=!0;else{const u=String(a);u==="<!>"?c&&c.nodeType===8&&e.push(c):c&&c.nodeType===3?(c.data=u,e.push(c)):e.push(document.createTextNode(u))}}return r}function xi(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function ie(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(r!==a){const c=a.parentNode===e;!i&&!o?c?e.replaceChild(r,a):e.insertBefore(r,n):c&&a.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}const Ju=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Zu=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Zo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Jo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Zu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new tl;const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const w=u<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class tl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const el=function(e){const t=Jo(e);return Zo.encodeByteArray(t,!0)},Pn=function(e){return el(e).replace(/\./g,"")},nl=function(e){try{return Zo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=()=>sl().__FIREBASE_DEFAULTS__,il=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ol=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&nl(e[1]);return t&&JSON.parse(t)},ta=()=>{try{return rl()||il()||ol()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},al=e=>{var t,n;return(n=(t=ta())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},cl=e=>{const t=al(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},ul=()=>{var e;return(e=ta())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Pn(JSON.stringify(n)),Pn(JSON.stringify(o)),a].join(".")}function fl(){try{return typeof indexedDB=="object"}catch{return!1}}function dl(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="FirebaseError";class Se extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=gl,Object.setPrototypeOf(this,Se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ea.prototype.create)}}class ea{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?pl(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Se(r,a,s)}}function pl(e,t){return e.replace(ml,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const ml=/\{\$([^}]+)}/g;function Gs(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Ri(i)&&Ri(o)){if(!Gs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ri(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(e){return e&&e._delegate?e._delegate:e}class Be{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ll;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t?.identifier),r=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(wl(t))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qt){return this.instances.has(t)}getOptions(t=qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vl(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=qt){return this.component?this.component.multipleInstances?t:qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vl(e){return e===qt?void 0:e}function wl(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new yl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(k||(k={}));const Tl={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},Il=k.INFO,bl={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Sl=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=bl[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class na{constructor(t){this.name=t,this._logLevel=Il,this._logHandler=Sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Tl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}const Al=(e,t)=>t.some(n=>e instanceof n);let Li,Oi;function Cl(){return Li||(Li=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dl(){return Oi||(Oi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sa=new WeakMap,Qs=new WeakMap,ra=new WeakMap,_s=new WeakMap,Nr=new WeakMap;function _l(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Rt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&sa.set(n,e)}).catch(()=>{}),Nr.set(t,e),t}function Nl(e){if(Qs.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Qs.set(e,t)}let Ws={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ra.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function kl(e){Ws=e(Ws)}function xl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ns(this),t,...n);return ra.set(s,t.sort?t.sort():[t]),Rt(s)}:Dl().includes(e)?function(...t){return e.apply(Ns(this),t),Rt(sa.get(this))}:function(...t){return Rt(e.apply(Ns(this),t))}}function Rl(e){return typeof e=="function"?xl(e):(e instanceof IDBTransaction&&Nl(e),Al(e,Cl())?new Proxy(e,Ws):e)}function Rt(e){if(e instanceof IDBRequest)return _l(e);if(_s.has(e))return _s.get(e);const t=Rl(e);return t!==e&&(_s.set(e,t),Nr.set(t,e)),t}const Ns=e=>Nr.get(e);function Ll(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Rt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Rt(o.result),c.oldVersion,c.newVersion,Rt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Ol=["get","getKey","getAll","getAllKeys","count"],Ml=["put","add","delete","clear"],ks=new Map;function Mi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ks.get(t))return ks.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Ml.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ol.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ks.set(t,i),i}kl(e=>({...e,get:(t,n,s)=>Mi(t,n)||e.get(t,n,s),has:(t,n)=>!!Mi(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Vl(e){const t=e.getComponent();return t?.type==="VERSION"}const Xs="@firebase/app",Pi="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new na("@firebase/app"),Fl="@firebase/app-compat",$l="@firebase/analytics-compat",Ul="@firebase/analytics",Bl="@firebase/app-check-compat",ql="@firebase/app-check",jl="@firebase/auth",Kl="@firebase/auth-compat",Hl="@firebase/database",zl="@firebase/database-compat",Gl="@firebase/functions",Ql="@firebase/functions-compat",Wl="@firebase/installations",Xl="@firebase/installations-compat",Yl="@firebase/messaging",Jl="@firebase/messaging-compat",Zl="@firebase/performance",th="@firebase/performance-compat",eh="@firebase/remote-config",nh="@firebase/remote-config-compat",sh="@firebase/storage",rh="@firebase/storage-compat",ih="@firebase/firestore",oh="@firebase/firestore-compat",ah="firebase",ch="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="[DEFAULT]",uh={[Xs]:"fire-core",[Fl]:"fire-core-compat",[Ul]:"fire-analytics",[$l]:"fire-analytics-compat",[ql]:"fire-app-check",[Bl]:"fire-app-check-compat",[jl]:"fire-auth",[Kl]:"fire-auth-compat",[Hl]:"fire-rtdb",[zl]:"fire-rtdb-compat",[Gl]:"fire-fn",[Ql]:"fire-fn-compat",[Wl]:"fire-iid",[Xl]:"fire-iid-compat",[Yl]:"fire-fcm",[Jl]:"fire-fcm-compat",[Zl]:"fire-perf",[th]:"fire-perf-compat",[eh]:"fire-rc",[nh]:"fire-rc-compat",[sh]:"fire-gcs",[rh]:"fire-gcs-compat",[ih]:"fire-fst",[oh]:"fire-fst-compat","fire-js":"fire-js",[ah]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Map,Js=new Map;function lh(e,t){try{e.container.addComponent(t)}catch(n){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $n(e){const t=e.name;if(Js.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;Js.set(t,e);for(const n of Fn.values())lh(n,e);return!0}function hh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new ea("app","Firebase",fh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=ch;function ia(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Ys,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Lt.create("bad-app-name",{appName:String(r)});if(n||(n=ul()),!n)throw Lt.create("no-options");const i=Fn.get(r);if(i){if(Gs(n,i.options)&&Gs(s,i.config))return i;throw Lt.create("duplicate-app",{appName:r})}const o=new El(r);for(const c of Js.values())o.addComponent(c);const a=new dh(n,s,o);return Fn.set(r,a),a}function ph(e=Ys){const t=Fn.get(e);if(!t&&e===Ys)return ia();if(!t)throw Lt.create("no-app",{appName:e});return t}function ue(e,t,n){var s;let r=(s=uh[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(a.join(" "));return}$n(new Be(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="firebase-heartbeat-database",yh=1,qe="firebase-heartbeat-store";let xs=null;function oa(){return xs||(xs=Ll(mh,yh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qe)}}}).catch(e=>{throw Lt.create("idb-open",{originalErrorMessage:e.message})})),xs}async function vh(e){try{return(await oa()).transaction(qe).objectStore(qe).get(aa(e))}catch(t){if(t instanceof Se)Zt.warn(t.message);else{const n=Lt.create("idb-get",{originalErrorMessage:t?.message});Zt.warn(n.message)}}}async function Vi(e,t){try{const s=(await oa()).transaction(qe,"readwrite");return await s.objectStore(qe).put(t,aa(e)),s.done}catch(n){if(n instanceof Se)Zt.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n?.message});Zt.warn(s.message)}}}function aa(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=1024,Eh=30*24*60*60*1e3;class Th{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Eh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fi(),{heartbeatsToSend:n,unsentEntries:s}=Ih(this._heartbeatsCache.heartbeats),r=Pn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fi(){return new Date().toISOString().substring(0,10)}function Ih(e,t=wh){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),$i(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),$i(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class bh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fl()?dl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Vi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Vi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function $i(e){return Pn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(e){$n(new Be("platform-logger",t=>new Pl(t),"PRIVATE")),$n(new Be("heartbeat",t=>new Th(t),"PRIVATE")),ue(Xs,Pi,e),ue(Xs,Pi,"esm2017"),ue("fire-js","")}Sh("");var Ah="firebase",Ch="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ue(Ah,Ch,"app");var Dh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,kr=kr||{},T=Dh||self;function Un(){}function es(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function en(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function _h(e){return Object.prototype.hasOwnProperty.call(e,Rs)&&e[Rs]||(e[Rs]=++Nh)}var Rs="closure_uid_"+(1e9*Math.random()>>>0),Nh=0;function kh(e,t,n){return e.call.apply(e.bind,arguments)}function xh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function ut(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=kh:ut=xh,ut.apply(null,arguments)}function En(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function nt(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Ft(){this.s=this.s,this.o=this.o}var Rh=0;Ft.prototype.s=!1;Ft.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Rh!=0)&&_h(this)};Ft.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ca=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function xr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Ui(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(es(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function lt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var Lh=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",Un,t),T.removeEventListener("test",Un,t)}catch{}return e}();function Bn(e){return/^[\s\xa0]*$/.test(e)}var Bi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ls(e,t){return e<t?-1:e>t?1:0}function ns(){var e=T.navigator;return e&&(e=e.userAgent)?e:""}function Et(e){return ns().indexOf(e)!=-1}function Rr(e){return Rr[" "](e),e}Rr[" "]=Un;function Oh(e){var t=Vh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Mh=Et("Opera"),me=Et("Trident")||Et("MSIE"),ua=Et("Edge"),Zs=ua||me,la=Et("Gecko")&&!(ns().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge"))&&!(Et("Trident")||Et("MSIE"))&&!Et("Edge"),Ph=ns().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge");function ha(){var e=T.document;return e?e.documentMode:void 0}var qn;t:{var Os="",Ms=function(){var e=ns();if(la)return/rv:([^\);]+)(\)|;)/.exec(e);if(ua)return/Edge\/([\d\.]+)/.exec(e);if(me)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ph)return/WebKit\/(\S+)/.exec(e);if(Mh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ms&&(Os=Ms?Ms[1]:""),me){var Ps=ha();if(Ps!=null&&Ps>parseFloat(Os)){qn=String(Ps);break t}}qn=Os}var Vh={};function Fh(){return Oh(function(){let e=0;const t=Bi(String(qn)).split("."),n=Bi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Ls(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ls(r[2].length==0,i[2].length==0)||Ls(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var tr;if(T.document&&me){var qi=ha();tr=qi||parseInt(qn,10)||void 0}else tr=void 0;var $h=tr;function je(e,t){if(lt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(la){t:{try{Rr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Uh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&je.X.h.call(this)}}nt(je,lt);var Uh={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),Bh=0;function qh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++Bh,this.ba=this.ea=!1}function ss(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Lr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function fa(e){const t={};for(const n in e)t[n]=e[n];return t}const ji="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function da(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<ji.length;i++)n=ji[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function rs(e){this.src=e,this.g={},this.h=0}rs.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=nr(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new qh(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function er(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=ca(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ss(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function nr(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var Or="closure_lm_"+(1e6*Math.random()|0),Vs={};function ga(e,t,n,s,r){if(s&&s.once)return ma(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ga(e,t[i],n,s,r);return null}return n=Vr(n),e&&e[nn]?e.N(t,n,en(s)?!!s.capture:!!s,r):pa(e,t,n,!1,s,r)}function pa(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=en(r)?!!r.capture:!!r,a=Pr(e);if(a||(e[Or]=a=new rs(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=jh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Lh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(va(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jh(){function e(n){return t.call(e.src,e.listener,n)}const t=Kh;return e}function ma(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ma(e,t[i],n,s,r);return null}return n=Vr(n),e&&e[nn]?e.O(t,n,en(s)?!!s.capture:!!s,r):pa(e,t,n,!0,s,r)}function ya(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)ya(e,t[i],n,s,r);else s=en(s)?!!s.capture:!!s,n=Vr(n),e&&e[nn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=nr(i,n,s,r),-1<n&&(ss(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Pr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=nr(t,n,s,r)),(n=-1<e?t[e]:null)&&Mr(n))}function Mr(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[nn])er(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(va(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Pr(t))?(er(n,e),n.h==0&&(n.src=null,t[Or]=null)):ss(e)}}}function va(e){return e in Vs?Vs[e]:Vs[e]="on"+e}function Kh(e,t){if(e.ba)e=!0;else{t=new je(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Mr(e),e=n.call(s,t)}return e}function Pr(e){return e=e[Or],e instanceof rs?e:null}var Fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vr(e){return typeof e=="function"?e:(e[Fs]||(e[Fs]=function(t){return e.handleEvent(t)}),e[Fs])}function Y(){Ft.call(this),this.i=new rs(this),this.P=this,this.I=null}nt(Y,Ft);Y.prototype[nn]=!0;Y.prototype.removeEventListener=function(e,t,n,s){ya(this,e,t,n,s)};function tt(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new lt(t,e);else if(t instanceof lt)t.target=t.target||e;else{var r=t;t=new lt(s,e),da(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Tn(o,s,!0,t)&&r}if(o=t.g=e,r=Tn(o,s,!0,t)&&r,r=Tn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Tn(o,s,!1,t)&&r}Y.prototype.M=function(){if(Y.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ss(n[s]);delete e.g[t],e.h--}}this.I=null};Y.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};Y.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Tn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&er(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Fr=T.JSON.stringify;function Hh(){var e=Ta;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class zh{constructor(){this.h=this.g=null}add(t,n){const s=wa.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var wa=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Gh,e=>e.reset());class Gh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Qh(e){T.setTimeout(()=>{throw e},0)}function Ea(e,t){sr||Wh(),rr||(sr(),rr=!0),Ta.add(e,t)}var sr;function Wh(){var e=T.Promise.resolve(void 0);sr=function(){e.then(Xh)}}var rr=!1,Ta=new zh;function Xh(){for(var e;e=Hh();){try{e.h.call(e.g)}catch(n){Qh(n)}var t=wa;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}rr=!1}function is(e,t){Y.call(this),this.h=e||1,this.g=t||T,this.j=ut(this.lb,this),this.l=Date.now()}nt(is,Y);m=is.prototype;m.ca=!1;m.R=null;m.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),tt(this,"tick"),this.ca&&($r(this),this.start()))}};m.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $r(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}m.M=function(){is.X.M.call(this),$r(this),delete this.g};function Ur(e,t,n){if(typeof e=="function")n&&(e=ut(e,n));else if(e&&typeof e.handleEvent=="function")e=ut(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function Ia(e){e.g=Ur(()=>{e.g=null,e.i&&(e.i=!1,Ia(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Yh extends Ft{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ia(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(e){Ft.call(this),this.h=e,this.g={}}nt(Ke,Ft);var Ki=[];function ba(e,t,n,s){Array.isArray(n)||(n&&(Ki[0]=n.toString()),n=Ki);for(var r=0;r<n.length;r++){var i=ga(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Sa(e){Lr(e.g,function(t,n){this.g.hasOwnProperty(n)&&Mr(t)},e),e.g={}}Ke.prototype.M=function(){Ke.X.M.call(this),Sa(this)};Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function os(){this.g=!0}os.prototype.Aa=function(){this.g=!1};function Jh(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Zh(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function ce(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ef(e,n)+(s?" "+s:"")})}function tf(e,t){e.info(function(){return"TIMEOUT: "+t})}os.prototype.info=function(){};function ef(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Fr(n)}catch{return t}}var ne={},Hi=null;function as(){return Hi=Hi||new Y}ne.Pa="serverreachability";function Aa(e){lt.call(this,ne.Pa,e)}nt(Aa,lt);function He(e){const t=as();tt(t,new Aa(t))}ne.STAT_EVENT="statevent";function Ca(e,t){lt.call(this,ne.STAT_EVENT,e),this.stat=t}nt(Ca,lt);function dt(e){const t=as();tt(t,new Ca(t,e))}ne.Qa="timingevent";function Da(e,t){lt.call(this,ne.Qa,e),this.size=t}nt(Da,lt);function sn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var cs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},_a={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Br(){}Br.prototype.h=null;function zi(e){return e.h||(e.h=e.i())}function Na(){}var rn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function qr(){lt.call(this,"d")}nt(qr,lt);function jr(){lt.call(this,"c")}nt(jr,lt);var ir;function us(){}nt(us,Br);us.prototype.g=function(){return new XMLHttpRequest};us.prototype.i=function(){return{}};ir=new us;function on(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new Ke(this),this.O=nf,e=Zs?125:void 0,this.T=new is(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ka}function ka(){this.i=null,this.g="",this.h=!1}var nf=45e3,or={},jn={};m=on.prototype;m.setTimeout=function(e){this.O=e};function ar(e,t,n){e.K=1,e.v=hs(Dt(t)),e.s=n,e.P=!0,xa(e,null)}function xa(e,t){e.F=Date.now(),an(e),e.A=Dt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),$a(n.i,"t",s),e.C=0,n=e.l.H,e.h=new ka,e.g=oc(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Yh(ut(e.La,e,e.g),e.N)),ba(e.S,e.g,"readystatechange",e.ib),t=e.H?fa(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),He(),Jh(e.j,e.u,e.A,e.m,e.U,e.s)}m.ib=function(e){e=e.target;const t=this.L;t&&St(e)==3?t.l():this.La(e)};m.La=function(e){try{if(e==this.g)t:{const l=St(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Zs||this.g&&(this.h.h||this.g.fa()||Xi(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?He(3):He(2)),ls(this);var n=this.g.aa();this.Y=n;e:if(Ra(this)){var s=Xi(this.g);e="";var r=s.length,i=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),Me(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Zh(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bn(a)){var u=a;break e}}u=null}if(n=u)ce(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,cr(this,n);else{this.i=!1,this.o=3,dt(12),jt(this),Me(this);break t}}this.P?(La(this,l,o),Zs&&this.i&&l==3&&(ba(this.S,this.T,"tick",this.hb),this.T.start())):(ce(this.j,this.m,o,null),cr(this,o)),l==4&&jt(this),this.i&&!this.I&&(l==4?nc(this.l,this):(this.i=!1,an(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),jt(this),Me(this)}}}catch{}finally{}};function Ra(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function La(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=sf(e,n),r==jn){t==4&&(e.o=4,dt(14),s=!1),ce(e.j,e.m,null,"[Incomplete Response]");break}else if(r==or){e.o=4,dt(15),ce(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else ce(e.j,e.m,r,null),cr(e,r);Ra(e)&&r!=jn&&r!=or&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,dt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xr(t),t.K=!0,dt(11))):(ce(e.j,e.m,n,"[Invalid Chunked Response]"),jt(e),Me(e))}m.hb=function(){if(this.g){var e=St(this.g),t=this.g.fa();this.C<t.length&&(ls(this),La(this,e,t),this.i&&e!=4&&an(this))}};function sf(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?jn:(n=Number(t.substring(n,s)),isNaN(n)?or:(s+=1,s+n>t.length?jn:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,jt(this)};function an(e){e.V=Date.now()+e.O,Oa(e,e.O)}function Oa(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=sn(ut(e.gb,e),t)}function ls(e){e.B&&(T.clearTimeout(e.B),e.B=null)}m.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(tf(this.j,this.A),this.K!=2&&(He(),dt(17)),jt(this),this.o=2,Me(this)):Oa(this,this.V-e)};function Me(e){e.l.G==0||e.I||nc(e.l,e)}function jt(e){ls(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,$r(e.T),Sa(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function cr(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ur(n.h,e))){if(!e.J&&ur(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)zn(n),gs(n);else break t;Wr(n),dt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=sn(ut(n.cb,n),6e3));if(1>=qa(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Kt(n,11)}else if((e.J||n.g==e)&&zn(n),!Bn(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.h;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Kr(i,i.h),i.h=null))}if(s.D){const S=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(s.za=S,V(s.F,s.D,S))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=ic(s,s.H?s.ka:null,s.V),o.J){ja(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ls(a),an(a)),s.g=o}else tc(s);0<n.i.length&&ps(n)}else u[0]!="stop"&&u[0]!="close"||Kt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Kt(n,7):Qr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}He(4)}catch{}}function rf(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(es(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function of(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(es(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Ma(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(es(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=of(e),s=rf(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var Pa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function af(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Wt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Wt){this.h=t!==void 0?t:e.h,Kn(this,e.j),this.s=e.s,this.g=e.g,Hn(this,e.m),this.l=e.l,t=e.i;var n=new ze;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Gi(this,n),this.o=e.o}else e&&(n=String(e).match(Pa))?(this.h=!!t,Kn(this,n[1]||"",!0),this.s=Re(n[2]||""),this.g=Re(n[3]||"",!0),Hn(this,n[4]),this.l=Re(n[5]||"",!0),Gi(this,n[6]||"",!0),this.o=Re(n[7]||"")):(this.h=!!t,this.i=new ze(null,this.h))}Wt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Le(t,Qi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Le(t,Qi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Le(n,n.charAt(0)=="/"?lf:uf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Le(n,ff)),e.join("")};function Dt(e){return new Wt(e)}function Kn(e,t,n){e.j=n?Re(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Hn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gi(e,t,n){t instanceof ze?(e.i=t,df(e.i,e.h)):(n||(t=Le(t,hf)),e.i=new ze(t,e.h))}function V(e,t,n){e.i.set(t,n)}function hs(e){return V(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Re(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Le(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,cf),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function cf(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Qi=/[#\/\?@]/g,uf=/[#\?:]/g,lf=/[#\?]/g,hf=/[#\?@]/g,ff=/#/g;function ze(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function $t(e){e.g||(e.g=new Map,e.h=0,e.i&&af(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=ze.prototype;m.add=function(e,t){$t(this),this.i=null,e=Ae(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Va(e,t){$t(e),t=Ae(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Fa(e,t){return $t(e),t=Ae(e,t),e.g.has(t)}m.forEach=function(e,t){$t(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};m.oa=function(){$t(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};m.W=function(e){$t(this);let t=[];if(typeof e=="string")Fa(this,e)&&(t=t.concat(this.g.get(Ae(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return $t(this),this.i=null,e=Ae(this,e),Fa(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function $a(e,t,n){Va(e,t),0<n.length&&(e.i=null,e.g.set(Ae(e,t),xr(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function Ae(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function df(e,t){t&&!e.j&&($t(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Va(this,s),$a(this,r,n))},e)),e.j=t}var gf=class{constructor(t,n){this.h=t,this.g=n}};function Ua(e){this.l=e||pf,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ga&&T.g.Ga()&&T.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pf=10;function Ba(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function qa(e){return e.h?1:e.g?e.g.size:0}function ur(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Kr(e,t){e.g?e.g.add(t):e.h=t}function ja(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ua.prototype.cancel=function(){if(this.i=Ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ka(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return xr(e.i)}function Hr(){}Hr.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Hr.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function mf(){this.g=new Hr}function yf(e,t,n){const s=n||"";try{Ma(e,function(r,i){let o=r;en(r)&&(o=Fr(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function vf(e,t){const n=new os;if(T.Image){const s=new Image;s.onload=En(In,n,s,"TestLoadImage: loaded",!0,t),s.onerror=En(In,n,s,"TestLoadImage: error",!1,t),s.onabort=En(In,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=En(In,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function In(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function cn(e){this.l=e.ac||null,this.j=e.jb||!1}nt(cn,Br);cn.prototype.g=function(){return new fs(this.l,this.j)};cn.prototype.i=function(e){return function(){return e}}({});function fs(e,t){Y.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=zr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(fs,Y);var zr=0;m=fs.prototype;m.open=function(e,t){if(this.readyState!=zr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ge(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=zr};m.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ge(this)),this.g&&(this.readyState=3,Ge(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ha(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Ha(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}m.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?un(this):Ge(this),this.readyState==3&&Ha(this)}};m.Va=function(e){this.g&&(this.response=this.responseText=e,un(this))};m.Ua=function(e){this.g&&(this.response=e,un(this))};m.ga=function(){this.g&&un(this)};function un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ge(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ge(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var wf=T.JSON.parse;function U(e){Y.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=za,this.K=this.L=!1}nt(U,Y);var za="",Ef=/^https?$/i,Tf=["POST","PUT"];m=U.prototype;m.Ka=function(e){this.L=e};m.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ir.g(),this.C=this.u?zi(this.u):zi(ir),this.g.onreadystatechange=ut(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Wi(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=T.FormData&&e instanceof T.FormData,!(0<=ca(Tf,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wa(this),0<this.B&&((this.K=If(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.qa,this)):this.A=Ur(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Wi(this,i)}};function If(e){return me&&Fh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.qa=function(){typeof kr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function Wi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ga(e),ds(e)}function Ga(e){e.D||(e.D=!0,tt(e,"complete"),tt(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tt(this,"complete"),tt(this,"abort"),ds(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ds(this,!0)),U.X.M.call(this)};m.Ha=function(){this.s||(this.F||this.v||this.l?Qa(this):this.fb())};m.fb=function(){Qa(this)};function Qa(e){if(e.h&&typeof kr<"u"&&(!e.C[1]||St(e)!=4||e.aa()!=2)){if(e.v&&St(e)==4)Ur(e.Ha,0,e);else if(tt(e,"readystatechange"),St(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(Pa)[1]||null;if(!r&&T.self&&T.self.location){var i=T.self.location.protocol;r=i.substr(0,i.length-1)}s=!Ef.test(r?r.toLowerCase():"")}n=s}if(n)tt(e,"complete"),tt(e,"success");else{e.m=6;try{var o=2<St(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Ga(e)}}finally{ds(e)}}}}function ds(e,t){if(e.g){Wa(e);const n=e.g,s=e.C[0]?Un:null;e.g=null,e.C=null,t||tt(e,"ready");try{n.onreadystatechange=s}catch{}}}function Wa(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function St(e){return e.g?e.g.readyState:0}m.aa=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}};m.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),wf(t)}};function Xi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case za:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ea=function(){return this.m};m.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xa(e){let t="";return Lr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Gr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Xa(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):V(e,t,n))}function xe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ya(e){this.Ca=0,this.i=[],this.j=new os,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xe("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xe("baseRetryDelayMs",5e3,e),this.bb=xe("retryDelaySeedMs",1e4,e),this.$a=xe("forwardChannelMaxRetries",2,e),this.ta=xe("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Ua(e&&e.concurrentRequestLimit),this.Fa=new mf,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}m=Ya.prototype;m.ma=8;m.G=1;function Qr(e){if(Ja(e),e.G==3){var t=e.U++,n=Dt(e.F);V(n,"SID",e.I),V(n,"RID",t),V(n,"TYPE","terminate"),ln(e,n),t=new on(e,e.j,t,void 0),t.K=2,t.v=hs(Dt(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=oc(t.l,null),t.g.da(t.v)),t.F=Date.now(),an(t)}rc(e)}function gs(e){e.g&&(Xr(e),e.g.cancel(),e.g=null)}function Ja(e){gs(e),e.u&&(T.clearTimeout(e.u),e.u=null),zn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function ps(e){Ba(e.h)||e.m||(e.m=!0,Ea(e.Ja,e),e.C=0)}function bf(e,t){return qa(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=sn(ut(e.Ja,e,t),sc(e,e.C)),e.C++,!0)}m.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new on(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=fa(i),da(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Za(this,r,t),n=Dt(this.F),V(n,"RID",e),V(n,"CVER",22),this.D&&V(n,"X-HTTP-Session-Id",this.D),ln(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(Xa(i)))+"&"+t:this.o&&Gr(n,this.o,i)),Kr(this.h,r),this.Ya&&V(n,"TYPE","init"),this.O?(V(n,"$req",t),V(n,"SID","null"),r.Z=!0,ar(r,n,null)):ar(r,n,t),this.G=2}}else this.G==3&&(e?Yi(this,e):this.i.length==0||Ba(this.h)||Yi(this))};function Yi(e,t){var n;t?n=t.m:n=e.U++;const s=Dt(e.F);V(s,"SID",e.I),V(s,"RID",n),V(s,"AID",e.T),ln(e,s),e.o&&e.s&&Gr(s,e.o,e.s),n=new on(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Za(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Kr(e.h,n),ar(n,s,t)}function ln(e,t){e.ia&&Lr(e.ia,function(n,s){V(t,s,n)}),e.l&&Ma({},function(n,s){V(t,s,n)})}function Za(e,t,n){n=Math.min(e.i.length,n);var s=e.l?ut(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{yf(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function tc(e){e.g||e.u||(e.Z=1,Ea(e.Ia,e),e.A=0)}function Wr(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=sn(ut(e.Ia,e),sc(e,e.A)),e.A++,!0)}m.Ia=function(){if(this.u=null,ec(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=sn(ut(this.eb,this),e)}};m.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,dt(10),gs(this),ec(this))};function Xr(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function ec(e){e.g=new on(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Dt(e.sa);V(t,"RID","rpc"),V(t,"SID",e.I),V(t,"CI",e.L?"0":"1"),V(t,"AID",e.T),V(t,"TYPE","xmlhttp"),ln(e,t),e.o&&e.s&&Gr(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=hs(Dt(t)),n.s=null,n.P=!0,xa(n,e)}m.cb=function(){this.v!=null&&(this.v=null,gs(this),Wr(this),dt(19))};function zn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function nc(e,t){var n=null;if(e.g==t){zn(e),Xr(e),e.g=null;var s=2}else if(ur(e.h,t))n=t.D,ja(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=as(),tt(s,new Da(s,n)),ps(e)}else tc(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&bf(e,t)||s==2&&Wr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Kt(e,5);break;case 4:Kt(e,10);break;case 3:Kt(e,6);break;default:Kt(e,2)}}}function sc(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Kt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=ut(e.kb,e);n||(n=new Wt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Kn(n,"https"),hs(n)),vf(n.toString(),s)}else dt(2);e.G=0,e.l&&e.l.va(t),rc(e),Ja(e)}m.kb=function(e){e?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function rc(e){if(e.G=0,e.la=[],e.l){const t=Ka(e.h);(t.length!=0||e.i.length!=0)&&(Ui(e.la,t),Ui(e.la,e.i),e.h.i.length=0,xr(e.i),e.i.length=0),e.l.ua()}}function ic(e,t,n){var s=n instanceof Wt?Dt(n):new Wt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Hn(s,s.m);else{var r=T.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Wt(null,void 0);s&&Kn(i,s),t&&(i.g=t),r&&Hn(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&V(s,n,t),V(s,"VER",e.ma),ln(e,s),s}function oc(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new U(new cn({jb:!0})):new U(e.ra),t.Ka(e.H),t}function ac(){}m=ac.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Ra=function(){};function Gn(){if(me&&!(10<=Number($h)))throw Error("Environmental error: no available transport.")}Gn.prototype.g=function(e,t){return new pt(e,t)};function pt(e,t){Y.call(this),this.g=new Ya(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Bn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Bn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ce(this)}nt(pt,Y);pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;dt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ic(e,null,e.V),ps(e)};pt.prototype.close=function(){Qr(this.g)};pt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Fr(e),e=n);t.i.push(new gf(t.ab++,e)),t.G==3&&ps(t)};pt.prototype.M=function(){this.g.l=null,delete this.j,Qr(this.g),delete this.g,pt.X.M.call(this)};function cc(e){qr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}nt(cc,qr);function uc(){jr.call(this),this.status=1}nt(uc,jr);function Ce(e){this.g=e}nt(Ce,ac);Ce.prototype.xa=function(){tt(this.g,"a")};Ce.prototype.wa=function(e){tt(this.g,new cc(e))};Ce.prototype.va=function(e){tt(this.g,new uc)};Ce.prototype.ua=function(){tt(this.g,"b")};Gn.prototype.createWebChannel=Gn.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;cs.NO_ERROR=0;cs.TIMEOUT=8;cs.HTTP_ERROR=6;_a.COMPLETE="complete";Na.EventType=rn;rn.OPEN="a";rn.CLOSE="b";rn.ERROR="c";rn.MESSAGE="d";Y.prototype.listen=Y.prototype.N;U.prototype.listenOnce=U.prototype.O;U.prototype.getLastError=U.prototype.Oa;U.prototype.getLastErrorCode=U.prototype.Ea;U.prototype.getStatus=U.prototype.aa;U.prototype.getResponseJson=U.prototype.Sa;U.prototype.getResponseText=U.prototype.fa;U.prototype.send=U.prototype.da;U.prototype.setWithCredentials=U.prototype.Ka;var Sf=function(){return new Gn},Af=function(){return as()},$s=cs,Cf=_a,Df=ne,Ji={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},_f=cn,bn=Na,Nf=U;const Zi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let De="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new na("@firebase/firestore");function to(){return te.logLevel}function v(e,...t){if(te.logLevel<=k.DEBUG){const n=t.map(Yr);te.debug(`Firestore (${De}): ${e}`,...n)}}function _t(e,...t){if(te.logLevel<=k.ERROR){const n=t.map(Yr);te.error(`Firestore (${De}): ${e}`,...n)}}function lr(e,...t){if(te.logLevel<=k.WARN){const n=t.map(Yr);te.warn(`Firestore (${De}): ${e}`,...n)}}function Yr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e="Unexpected state"){const t=`FIRESTORE (${De}) INTERNAL ASSERTION FAILED: `+e;throw _t(t),new Error(t)}function K(e,t){e||b()}function N(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Se{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class xf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rf{constructor(t){this.t=t,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(K(typeof s.accessToken=="string"),new lc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string"),new it(t)}}class Lf{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(K(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Of{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Lf(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pf{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(K(typeof n.token=="string"),this.A=n.token,new Mf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Vf(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function x(e,t){return e<t?-1:e>t?1:0}function ye(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new X(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new X(0,0))}static max(){return new I(new X(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,n,s){n===void 0?n=0:n>t.length&&b(),s===void 0?s=t.length-n:s>t.length-n&&b(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Qe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Qe?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class F extends Qe{construct(t,n,s){return new F(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new F(n)}static emptyPath(){return new F([])}}const $f=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Qe{construct(t,n,s){return new ft(t,n,s)}static isValidIdentifier(t){return $f.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new y(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new y(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(F.fromString(t))}static fromName(t){return new E(F.fromString(t).popFirst(5))}static empty(){return new E(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&F.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return F.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new F(t.slice()))}}function Uf(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=I.fromTimestamp(s===1e9?new X(n+1,0):new X(n,s));return new Ot(r,E.empty(),t)}function Bf(e){return new Ot(e.readTime,e.key,-1)}class Ot{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Ot(I.min(),E.empty(),-1)}static max(){return new Ot(I.max(),E.empty(),-1)}}function qf(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:x(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==jf)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(r=>r?d.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new d((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(t,n){return new d((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function hn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}Zr.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class We{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new We("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof We&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function fn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function hc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(e){return e==null}function Qn(e){return e===0&&1/e==-1/0}function zf(e){return typeof e=="number"&&Number.isInteger(e)&&!Qn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new Gf("Invalid base64 string: "+r):r}}(t);return new ht(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new ht(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Qf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(e){if(K(!!e),typeof e=="string"){let t=0;const n=Qf.exec(e);if(K(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:q(e.seconds),nanos:q(e.nanos)}}function q(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ve(e){return typeof e=="string"?ht.fromBase64String(e):ht.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dc(e){const t=e.mapValue.fields.__previous_value__;return fc(t)?dc(t):t}function Xe(e){const t=Mt(e.mapValue.fields.__local_write_time__.timestampValue);return new X(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ee(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?fc(e)?4:Wf(e)?9007199254740991:10:b()}function bt(e,t){if(e===t)return!0;const n=ee(e);if(n!==ee(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Xe(e).isEqual(Xe(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Mt(s.timestampValue),o=Mt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return ve(s.bytesValue).isEqual(ve(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return q(s.geoPointValue.latitude)===q(r.geoPointValue.latitude)&&q(s.geoPointValue.longitude)===q(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return q(s.integerValue)===q(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=q(s.doubleValue),o=q(r.doubleValue);return i===o?Qn(i)===Qn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return ye(e.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(eo(i)!==eo(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!bt(i[a],o[a])))return!1;return!0}(e,t);default:return b()}}function Ye(e,t){return(e.values||[]).find(n=>bt(n,t))!==void 0}function we(e,t){if(e===t)return 0;const n=ee(e),s=ee(t);if(n!==s)return x(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=q(r.integerValue||r.doubleValue),a=q(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return no(e.timestampValue,t.timestampValue);case 4:return no(Xe(e),Xe(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(r,i){const o=ve(r),a=ve(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=x(o[c],a[c]);if(u!==0)return u}return x(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=x(q(r.latitude),q(i.latitude));return o!==0?o:x(q(r.longitude),q(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=we(o[c],a[c]);if(u)return u}return x(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Sn.mapValue&&i===Sn.mapValue)return 0;if(r===Sn.mapValue)return 1;if(i===Sn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=x(a[l],u[l]);if(h!==0)return h;const f=we(o[a[l]],c[u[l]]);if(f!==0)return f}return x(a.length,u.length)}(e.mapValue,t.mapValue);default:throw b()}}function no(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return x(e,t);const n=Mt(e),s=Mt(t),r=x(n.seconds,s.seconds);return r!==0?r:x(n.nanos,s.nanos)}function Ee(e){return hr(e)}function hr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Mt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ve(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=hr(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${hr(s.fields[a])}`;return i+"}"}(e.mapValue):b();var t,n}function so(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function fr(e){return!!e&&"integerValue"in e}function ti(e){return!!e&&"arrayValue"in e}function ro(e){return!!e&&"nullValue"in e}function io(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Us(e){return!!e&&"mapValue"in e}function Pe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return fn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Pe(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Pe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Wf(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,n){this.position=t,this.inclusive=n}}function oo(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=we(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ao(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!bt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{}class j extends gc{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Yf(t,n,s):n==="array-contains"?new td(t,s):n==="in"?new ed(t,s):n==="not-in"?new nd(t,s):n==="array-contains-any"?new sd(t,s):new j(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Jf(t,s):new Zf(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(we(n,this.value)):n!==null&&ee(this.value)===ee(n)&&this.matchesComparison(we(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wt extends gc{constructor(t,n){super(),this.filters=t,this.op=n,this.ft=null}static create(t,n){return new wt(t,n)}matches(t){return pc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.dt(n=>n.isInequality());return t!==null?t.field:null}dt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function pc(e){return e.op==="and"}function mc(e){return Xf(e)&&pc(e)}function Xf(e){for(const t of e.filters)if(t instanceof wt)return!1;return!0}function dr(e){if(e instanceof j)return e.field.canonicalString()+e.op.toString()+Ee(e.value);if(mc(e))return e.filters.map(t=>dr(t)).join(",");{const t=e.filters.map(n=>dr(n)).join(",");return`${e.op}(${t})`}}function yc(e,t){return e instanceof j?function(n,s){return s instanceof j&&n.op===s.op&&n.field.isEqual(s.field)&&bt(n.value,s.value)}(e,t):e instanceof wt?function(n,s){return s instanceof wt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&yc(i,s.filters[o]),!0):!1}(e,t):void b()}function vc(e){return e instanceof j?function(t){return`${t.field.canonicalString()} ${t.op} ${Ee(t.value)}`}(e):e instanceof wt?function(t){return t.op.toString()+" {"+t.getFilters().map(vc).join(" ,")+"}"}(e):"Filter"}class Yf extends j{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class Jf extends j{constructor(t,n){super(t,"in",n),this.keys=wc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Zf extends j{constructor(t,n){super(t,"not-in",n),this.keys=wc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function wc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class td extends j{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ti(n)&&Ye(n.arrayValue,this.value)}}class ed extends j{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ye(this.value.arrayValue,n)}}class nd extends j{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ye(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ye(this.value.arrayValue,n)}}class sd extends j{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ti(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ye(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,n="asc"){this.field=t,this.dir=n}}function rd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n){this.comparator=t,this.root=n||J.EMPTY}insert(t,n){return new et(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,J.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,J.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new An(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new An(this.root,t,this.comparator,!1)}getReverseIterator(){return new An(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new An(this.root,t,this.comparator,!0)}}class An{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class J{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??J.RED,this.left=r??J.EMPTY,this.right=i??J.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new J(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return J.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return J.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const t=this.left.check();if(t!==this.right.check())throw b();return t+(this.isRed()?0:1)}}J.EMPTY=null,J.RED=!0,J.BLACK=!1;J.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,s,r){return this}insert(e,t,n){return new J(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new co(this.data.getIterator())}getIteratorFrom(t){return new co(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof G)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new G(this.comparator);return n.data=t,n}}class co{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.fields=t,t.sort(ft.comparator)}static empty(){return new xt([])}unionWith(t){let n=new G(ft.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new xt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ye(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.value=t}static empty(){return new Tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Us(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pe(n)}setAll(t){let n=ft.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Pe(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Us(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Us(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){fn(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new Tt(Pe(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ot(t,0,I.min(),I.min(),I.min(),Tt.empty(),0)}static newFoundDocument(t,n,s,r){return new ot(t,1,n,I.min(),s,r,0)}static newNoDocument(t,n){return new ot(t,2,n,I.min(),I.min(),Tt.empty(),0)}static newUnknownDocument(t,n){return new ot(t,3,n,I.min(),I.min(),Tt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ot&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function uo(e,t=null,n=[],s=[],r=null,i=null,o=null){return new id(e,t,n,s,r,i,o)}function ei(e){const t=N(e);if(t._t===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>dr(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ms(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ee(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ee(s)).join(",")),t._t=n}return t._t}function ni(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!rd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!yc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ao(e.startAt,t.startAt)&&ao(e.endAt,t.endAt)}function gr(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function od(e,t,n,s,r,i,o,a){return new dn(e,t,n,s,r,i,o,a)}function Ec(e){return new dn(e)}function lo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Tc(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function si(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Ic(e){return e.collectionGroup!==null}function le(e){const t=N(e);if(t.wt===null){t.wt=[];const n=si(t),s=Tc(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new Ve(n)),t.wt.push(new Ve(ft.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Ve(ft.keyField(),i))}}}return t.wt}function Nt(e){const t=N(e);if(!t.gt)if(t.limitType==="F")t.gt=uo(t.path,t.collectionGroup,le(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of le(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ve(i.field,o))}const s=t.endAt?new Wn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wn(t.startAt.position,t.startAt.inclusive):null;t.gt=uo(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.gt}function pr(e,t){t.getFirstInequalityField(),si(e);const n=e.filters.concat([t]);return new dn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Xn(e,t,n){return new dn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ys(e,t){return ni(Nt(e),Nt(t))&&e.limitType===t.limitType}function bc(e){return`${ei(Nt(e))}|lt:${e.limitType}`}function mr(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>vc(s)).join(", ")}]`),ms(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ee(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ee(s)).join(",")),`Target(${n})`}(Nt(e))}; limitType=${e.limitType})`}function vs(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):E.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of le(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=oo(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,le(n),s)||n.endAt&&!function(r,i,o){const a=oo(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,le(n),s))}(e,t)}function ad(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Sc(e){return(t,n)=>{let s=!1;for(const r of le(e)){const i=cd(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function cd(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?we(a,c):b()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qn(t)?"-0":t}}function Cc(e){return{integerValue:""+e}}function ud(e,t){return zf(t)?Cc(t):Ac(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this._=void 0}}function ld(e,t,n){return e instanceof yr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Yn?Dc(e,t):e instanceof Jn?_c(e,t):function(s,r){const i=fd(s,r),o=ho(i)+ho(s.It);return fr(i)&&fr(s.It)?Cc(o):Ac(s.Tt,o)}(e,t)}function hd(e,t,n){return e instanceof Yn?Dc(e,t):e instanceof Jn?_c(e,t):n}function fd(e,t){return e instanceof vr?fr(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class yr extends ws{}class Yn extends ws{constructor(t){super(),this.elements=t}}function Dc(e,t){const n=Nc(t);for(const s of e.elements)n.some(r=>bt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Jn extends ws{constructor(t){super(),this.elements=t}}function _c(e,t){let n=Nc(t);for(const s of e.elements)n=n.filter(r=>!bt(r,s));return{arrayValue:{values:n}}}class vr extends ws{constructor(t,n){super(),this.Tt=t,this.It=n}}function ho(e){return q(e.integerValue||e.doubleValue)}function Nc(e){return ti(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function dd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Yn&&s instanceof Yn||n instanceof Jn&&s instanceof Jn?ye(n.elements,s.elements,bt):n instanceof vr&&s instanceof vr?bt(n.It,s.It):n instanceof yr&&s instanceof yr}(e.transform,t.transform)}class Yt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Yt}static exists(t){return new Yt(void 0,t)}static updateTime(t){return new Yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _n(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ri{}function kc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new pd(e.key,Yt.none()):new ii(e.key,e.data,Yt.none());{const n=e.data,s=Tt.empty();let r=new G(ft.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Es(e.key,s,new xt(r.toArray()),Yt.none())}}function gd(e,t,n){e instanceof ii?function(s,r,i){const o=s.value.clone(),a=go(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Es?function(s,r,i){if(!_n(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=go(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(xc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Fe(e,t,n,s){return e instanceof ii?function(r,i,o,a){if(!_n(r.precondition,i))return o;const c=r.value.clone(),u=po(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Es?function(r,i,o,a){if(!_n(r.precondition,i))return o;const c=po(r.fieldTransforms,a,i),u=i.data;return u.setAll(xc(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(r,i,o){return _n(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function fo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ye(n,s,(r,i)=>dd(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ii extends ri{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Es extends ri{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function go(e,t,n){const s=new Map;K(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,hd(o,a,n[r]))}return s}function po(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,ld(i,o,t))}return s}class pd extends ri{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B,C;function Rc(e){if(e===void 0)return _t("GRPC error has no .code"),p.UNKNOWN;switch(e){case B.OK:return p.OK;case B.CANCELLED:return p.CANCELLED;case B.UNKNOWN:return p.UNKNOWN;case B.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case B.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case B.INTERNAL:return p.INTERNAL;case B.UNAVAILABLE:return p.UNAVAILABLE;case B.UNAUTHENTICATED:return p.UNAUTHENTICATED;case B.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case B.NOT_FOUND:return p.NOT_FOUND;case B.ALREADY_EXISTS:return p.ALREADY_EXISTS;case B.PERMISSION_DENIED:return p.PERMISSION_DENIED;case B.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case B.ABORTED:return p.ABORTED;case B.OUT_OF_RANGE:return p.OUT_OF_RANGE;case B.UNIMPLEMENTED:return p.UNIMPLEMENTED;case B.DATA_LOSS:return p.DATA_LOSS;default:return b()}}(C=B||(B={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){fn(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return hc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new et(E.comparator);function Pt(){return yd}const Lc=new et(E.comparator);function Oe(...e){let t=Lc;for(const n of e)t=t.insert(n.key,n);return t}function vd(e){let t=Lc;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ht(){return $e()}function Oc(){return $e()}function $e(){return new _e(e=>e.toString(),(e,t)=>e.isEqual(t))}const wd=new G(E.comparator);function D(...e){let t=wd;for(const n of e)t=t.add(n);return t}const Ed=new G(x);function Mc(){return Ed}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,gn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Ts(I.min(),r,Mc(),Pt(),D())}}class gn{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new gn(s,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,n,s,r){this.Et=t,this.removedTargetIds=n,this.key=s,this.At=r}}class Pc{constructor(t,n){this.targetId=t,this.Rt=n}}class Vc{constructor(t,n,s=ht.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class mo{constructor(){this.Pt=0,this.vt=vo(),this.bt=ht.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(t){t.approximateByteSize()>0&&(this.St=!0,this.bt=t)}Nt(){let t=D(),n=D(),s=D();return this.vt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:b()}}),new gn(this.bt,this.Vt,t,n,s)}kt(){this.St=!1,this.vt=vo()}$t(t,n){this.St=!0,this.vt=this.vt.insert(t,n)}Mt(t){this.St=!0,this.vt=this.vt.remove(t)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class Td{constructor(t){this.Lt=t,this.qt=new Map,this.Ut=Pt(),this.Kt=yo(),this.Gt=new G(x)}Qt(t){for(const n of t.Et)t.At&&t.At.isFoundDocument()?this.jt(n,t.At):this.zt(n,t.key,t.At);for(const n of t.removedTargetIds)this.zt(n,t.key,t.At)}Wt(t){this.forEachTarget(t,n=>{const s=this.Ht(n);switch(t.state){case 0:this.Jt(n)&&s.xt(t.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(t.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(t.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(t.resumeToken));break;default:b()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(t){const n=t.targetId,s=t.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(gr(i))if(s===0){const o=new E(i.path);this.zt(n,o,ot.newNoDocument(o,I.min()))}else K(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(t){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&gr(a.target)){const c=new E(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,ot.newNoDocument(c,t))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=D();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(t));const r=new Ts(t,n,this.Gt,this.Ut,s);return this.Ut=Pt(),this.Kt=yo(),this.Gt=new G(x),r}jt(t,n){if(!this.Jt(t))return;const s=this.ne(t,n.key)?2:0;this.Ht(t).$t(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(t))}zt(t,n,s){if(!this.Jt(t))return;const r=this.Ht(t);this.ne(t,n)?r.$t(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.qt.delete(t)}te(t){const n=this.Ht(t).Nt();return this.Lt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Ht(t).Ot()}Ht(t){let n=this.qt.get(t);return n||(n=new mo,this.qt.set(t,n)),n}se(t){let n=this.Kt.get(t);return n||(n=new G(x),this.Kt=this.Kt.insert(t,n)),n}Jt(t){const n=this.Xt(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.qt.get(t);return n&&n.Dt?null:this.Lt.ie(t)}Yt(t){this.qt.set(t,new mo),this.Lt.getRemoteKeysForTarget(t).forEach(n=>{this.zt(t,n,null)})}ne(t,n){return this.Lt.getRemoteKeysForTarget(t).has(n)}}function yo(){return new et(E.comparator)}function vo(){return new et(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Sd=(()=>({and:"AND",or:"OR"}))();class Ad{constructor(t,n){this.databaseId=t,this.yt=n}}function wr(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fc(e,t){return e.yt?t.toBase64():t.toUint8Array()}function he(e){return K(!!e),I.fromTimestamp(function(t){const n=Mt(t);return new X(n.seconds,n.nanos)}(e))}function $c(e,t){return function(n){return new F(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Uc(e){const t=F.fromString(e);return K(Kc(t)),t}function Bs(e,t){const n=Uc(t);if(n.get(1)!==e.databaseId.projectId)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Bc(n))}function Er(e,t){return $c(e.databaseId,t)}function Cd(e){const t=Uc(e);return t.length===4?F.emptyPath():Bc(t)}function wo(e){return new F(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Bc(e){return K(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Dd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.yt?(K(u===void 0||typeof u=="string"),ht.fromBase64String(u||"")):(K(u===void 0||u instanceof Uint8Array),ht.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:Rc(c.code);return new y(u,c.message||"")}(o);n=new Vc(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Bs(e,s.document.name),i=he(s.document.updateTime),o=s.document.createTime?he(s.document.createTime):I.min(),a=new Tt({mapValue:{fields:s.document.fields}}),c=ot.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Nn(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Bs(e,s.document),i=s.readTime?he(s.readTime):I.min(),o=ot.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Nn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Bs(e,s.document),i=s.removedTargetIds||[];n=new Nn([],i,r,null)}else{if(!("filter"in t))return b();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new md(r),o=s.targetId;n=new Pc(o,i)}}return n}function _d(e,t){return{documents:[Er(e,t.path)]}}function Nd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Er(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Er(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return jc(wt.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:oe(l.field),direction:Rd(l.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.yt||ms(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function kd(e){let t=Cd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){K(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=qc(l);return h instanceof wt&&mc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ve(ae(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ms(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new Wn(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new Wn(f,h)}(n.endAt)),od(t,r,o,i,a,"F",c,u)}function xd(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function qc(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ae(t.unaryFilter.field);return j.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ae(t.unaryFilter.field);return j.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ae(t.unaryFilter.field);return j.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ae(t.unaryFilter.field);return j.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(e):e.fieldFilter!==void 0?function(t){return j.create(ae(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return wt.create(t.compositeFilter.filters.map(n=>qc(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(t.compositeFilter.op))}(e):b()}function Rd(e){return Id[e]}function Ld(e){return bd[e]}function Od(e){return Sd[e]}function oe(e){return{fieldPath:e.canonicalString()}}function ae(e){return ft.fromServerFormat(e.fieldPath)}function jc(e){return e instanceof j?function(t){if(t.op==="=="){if(io(t.value))return{unaryFilter:{field:oe(t.field),op:"IS_NAN"}};if(ro(t.value))return{unaryFilter:{field:oe(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(io(t.value))return{unaryFilter:{field:oe(t.field),op:"IS_NOT_NAN"}};if(ro(t.value))return{unaryFilter:{field:oe(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oe(t.field),op:Ld(t.op),value:t.value}}}(e):e instanceof wt?function(t){const n=t.getFilters().map(s=>jc(s));return n.length===1?n[0]:{compositeFilter:{op:Od(t.op),filters:n}}}(e):b()}function Kc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&gd(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Fe(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Fe(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Oc();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=kc(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(I.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&ye(this.mutations,t.mutations,(n,s)=>fo(n,s))&&ye(this.baseMutations,t.baseMutations,(n,s)=>fo(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,n,s,r,i=I.min(),o=I.min(),a=ht.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){this.oe=t}}function Fd(e){const t=kd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Xn(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.Ze=new Ud}addToCollectionParentIndex(t,n){return this.Ze.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.Ze.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(Ot.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(Ot.min())}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class Ud{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new G(F.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new G(F.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Vn(){return new Te(0)}static Sn(){return new Te(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.changes=new _e(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ot.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Fe(s.mutation,r,xt.empty(),X.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,D()).next(()=>s))}getLocalViewOfDocuments(t,n,s=D()){const r=Ht();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=Oe();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Ht();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,D()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Pt();const o=$e(),a=$e();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Es)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Fe(l.mutation,u,l.mutation.getFieldMask(),X.now())):o.set(u.key,xt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new qd(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=$e();let r=new et((o,a)=>o-a),i=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||xt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||D()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Oc();l.forEach(f=>{if(!i.has(f)){const g=kc(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return d.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return E.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ic(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):d.resolve(Ht());let a=-1,c=i;return o.next(u=>d.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?d.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,D())).next(l=>({batchId:a,changes:vd(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(s=>{let r=Oe();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=Oe();return this.indexManager.getCollectionParents(t,r).next(o=>d.forEach(o,a=>{const c=function(u,l){return new dn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,ot.newInvalidDocument(u)))});let o=Oe();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Fe(u.mutation,c,xt.empty(),X.now()),vs(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t){this.Tt=t,this.es=new Map,this.ns=new Map}getBundleMetadata(t,n){return d.resolve(this.es.get(n))}saveBundleMetadata(t,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:he(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.ns.get(n))}saveNamedQuery(t,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Fd(s.bundledQuery),readTime:he(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.overlays=new et(E.comparator),this.ss=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ht();return d.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ce(t,n,i)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const r=Ht(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return d.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new et((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Ht(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ht(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return d.resolve(a)}ce(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Pd(n,s));let i=this.ss.get(n);i===void 0&&(i=D(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.rs=new G(Q.os),this.us=new G(Q.cs)}isEmpty(){return this.rs.isEmpty()}addReference(t,n){const s=new Q(t,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ls(new Q(t,n))}fs(t,n){t.forEach(s=>this.removeReference(s,n))}ds(t){const n=new E(new F([])),s=new Q(n,t),r=new Q(n,t+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(t=>this.ls(t))}ls(t){this.rs=this.rs.delete(t),this.us=this.us.delete(t)}ws(t){const n=new E(new F([])),s=new Q(n,t),r=new Q(n,t+1);let i=D();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Q(t,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Q{constructor(t,n){this.key=t,this.gs=n}static os(t,n){return E.comparator(t.key,n.key)||x(t.gs,n.gs)}static cs(t,n){return x(t.gs,n.gs)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new G(Q.os)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Md(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new Q(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Q(n,0),r=new Q(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new G(x);return n.forEach(r=>{const i=new Q(r,0),o=new Q(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),d.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;E.isDocumentKey(i)||(i=i.child(""));const o=new Q(new E(i),0);let a=new G(x);return this.ps.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.gs)),!0)},o),d.resolve(this.Es(a))}Es(t){const n=[];return t.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){K(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return d.forEach(n.mutations,r=>{const i=new Q(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ps=s})}Pn(t){}containsKey(t,n){const s=new Q(n,0),r=this.ps.firstAfterOrEqual(s);return d.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}As(t,n){return this.Ts(t)}Ts(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Is(t){const n=this.Ts(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t){this.Rs=t,this.docs=new et(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(t,n){let s=Pt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ot.newInvalidDocument(r))}),d.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=Pt();const o=n.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qf(Bf(l),s)<=0||(r.has(l.key)||vs(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,s,r){b()}Ps(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Qd(this)}getSize(t){return d.resolve(this.size)}}class Qd extends Bd{constructor(t){super(),this.Xn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(t,r)):this.Xn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.Xn.getEntry(t,n)}getAllFromCache(t,n){return this.Xn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t){this.persistence=t,this.vs=new _e(n=>ei(n),ni),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.bs=0,this.Vs=new oi,this.targetCount=0,this.Ss=Te.Vn()}forEachTarget(t,n){return this.vs.forEach((s,r)=>n(r)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.Ss.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),d.resolve()}xn(t){this.vs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ss=new Te(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.xn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.xn(n),d.resolve()}removeTargetData(t,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),d.waitFor(i).next(()=>r)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.vs.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.Vs.hs(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Vs.ds(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Vs.ws(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,n){this.Ds={},this.overlays={},this.Cs=new Zr(0),this.xs=!1,this.xs=!0,this.referenceDelegate=t(this),this.Ns=new Wd(this),this.indexManager=new $d,this.remoteDocumentCache=function(s){return new Gd(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Vd(n),this.$s=new Kd(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Hd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ds[t.toKey()];return s||(s=new zd(n,this.referenceDelegate),this.Ds[t.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new Yd(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Fs(t,n){return d.or(Object.values(this.Ds).map(s=>()=>s.containsKey(t,n)))}}class Yd extends Kf{constructor(t){super(),this.currentSequenceNumber=t}}class ai{constructor(t){this.persistence=t,this.Bs=new oi,this.Ls=null}static qs(t){return new ai(t)}get Us(){if(this.Ls)return this.Ls;throw b()}addReference(t,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Us.add(n.toString()),d.resolve()}removeTarget(t,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Ms(){this.Ls=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Us,s=>{const r=E.fromPath(s);return this.Ks(t,r).next(i=>{i||n.removeEntry(r,I.min())})}).next(()=>(this.Ls=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ks(t,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(t){return 0}Ks(t,n){return d.or([()=>d.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Fs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(t,n){let s=D(),r=D();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ci(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.ki=!1}initialize(t,n){this.$i=t,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Mi(t,n).next(i=>i||this.Oi(t,n,r,s)).next(i=>i||this.Fi(t,n))}Mi(t,n){if(lo(n))return d.resolve(null);let s=Nt(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Xn(n,null,"F"),s=Nt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=D(...i);return this.$i.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Bi(n,a);return this.Li(n,u,o,c.readTime)?this.Mi(t,Xn(n,null,"F")):this.qi(t,u,n,c)}))})))}Oi(t,n,s,r){return lo(n)||r.isEqual(I.min())?this.Fi(t,n):this.$i.getDocuments(t,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.Fi(t,n):(to()<=k.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),mr(n)),this.qi(t,o,n,Uf(r,-1)))})}Bi(t,n){let s=new G(Sc(t));return n.forEach((r,i)=>{vs(t,i)&&(s=s.add(i))}),s}Li(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(t,n){return to()<=k.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",mr(n)),this.$i.getDocumentsMatchingQuery(t,n,Ot.min())}qi(t,n,s,r){return this.$i.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,n,s,r){this.persistence=t,this.Ui=n,this.Tt=r,this.Ki=new et(x),this.Gi=new _e(i=>ei(i),ni),this.Qi=new Map,this.ji=t.getRemoteDocumentCache(),this.Ns=t.getTargetCache(),this.$s=t.getBundleCache(),this.zi(s)}zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jd(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ki))}}function tg(e,t,n,s){return new Zd(e,t,n,s)}async function Hc(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=D();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function zc(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ns.getLastRemoteSnapshotVersion(n))}function eg(e,t){const n=N(e),s=t.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];t.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ns.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?g=g.withResumeToken(ht.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(w,S,R){return w.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(f,g,l)&&a.push(n.Ns.updateTargetData(i,g))});let c=Pt(),u=D();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(ng(i,o,t.documentUpdates).next(l=>{c=l.Hi,u=l.Ji})),!s.isEqual(I.min())){const l=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ki=r,i))}function ng(e,t,n){let s=D(),r=D();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Pt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(I.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function sg(e,t){const n=N(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,t).next(i=>i?(r=i,d.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Jt(t,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(t,s.targetId)),s})}async function Tr(e,t,n){const s=N(e),r=s.Ki.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!hn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ki=s.Ki.remove(t),s.Gi.delete(r.target)}function Eo(e,t,n){const s=N(e);let r=I.min(),i=D();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=N(a),h=l.Gi.get(u);return h!==void 0?d.resolve(l.Ki.get(h)):l.Ns.getTargetData(c,u)}(s,o,Nt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,t,n?r:I.min(),n?i:D())).next(a=>(rg(s,ad(t),a),{documents:a,Yi:i})))}function rg(e,t,n){let s=e.Qi.get(t)||I.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Qi.set(t,s)}class To{constructor(){this.activeTargetIds=Mc()}sr(t){this.activeTargetIds=this.activeTargetIds.add(t)}ir(t){this.activeTargetIds=this.activeTargetIds.delete(t)}nr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ig{constructor(){this.Ur=new To,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Ur.sr(t),this.Kr[t]||"not-current"}updateQueryState(t,n,s){this.Kr[t]=n}removeLocalQueryTarget(t){this.Ur.ir(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.Kr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new To,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{Gr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(t){this.Hr.push(t)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Hr)t(0)}Wr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Hr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn=null;function qs(){return Cn===null?Cn=268435456+Math.round(2147483648*Math.random()):Cn++,"0x"+Cn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t){this.Yr=t.Yr,this.Zr=t.Zr}Xr(t){this.eo=t}no(t){this.so=t}onMessage(t){this.io=t}close(){this.Zr()}send(t){this.Yr(t)}ro(){this.eo()}oo(t){this.so(t)}uo(t){this.io(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class ug extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.co=n+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(t,n,s,r,i){const o=qs(),a=this.fo(t,n);v("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this._o(c,r,i),this.wo(t,a,c,s).then(u=>(v("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw lr("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}mo(t,n,s,r,i,o){return this.lo(t,n,s,r,i)}_o(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+De,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}fo(t,n){const s=ag[t];return`${this.co}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}wo(t,n,s,r){const i=qs();return new Promise((o,a)=>{const c=new Nf;c.setWithCredentials(!0),c.listenOnce(Cf.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $s.NO_ERROR:const l=c.getResponseJson();v(rt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case $s.TIMEOUT:v(rt,`RPC '${t}' ${i} timed out`),a(new y(p.DEADLINE_EXCEEDED,"Request time out"));break;case $s.HTTP_ERROR:const h=c.getStatus();if(v(rt,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f?.error;if(g&&g.status&&g.message){const w=function(S){const R=S.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(R)>=0?R:p.UNKNOWN}(g.status);a(new y(w,g.message))}else a(new y(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(p.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{v(rt,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(r);v(rt,`RPC '${t}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}yo(t,n,s){const r=qs(),i=[this.co,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Sf(),a=Af(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new _f({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");v(rt,`Creating RPC '${t}' stream ${r}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,f=!1;const g=new cg({Yr:S=>{f?v(rt,`Not sending because RPC '${t}' stream ${r} is closed:`,S):(h||(v(rt,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),v(rt,`RPC '${t}' stream ${r} sending:`,S),l.send(S))},Zr:()=>l.close()}),w=(S,R,st)=>{S.listen(R,H=>{try{st(H)}catch(z){setTimeout(()=>{throw z},0)}})};return w(l,bn.EventType.OPEN,()=>{f||v(rt,`RPC '${t}' stream ${r} transport opened.`)}),w(l,bn.EventType.CLOSE,()=>{f||(f=!0,v(rt,`RPC '${t}' stream ${r} transport closed`),g.oo())}),w(l,bn.EventType.ERROR,S=>{f||(f=!0,lr(rt,`RPC '${t}' stream ${r} transport errored:`,S),g.oo(new y(p.UNAVAILABLE,"The operation could not be completed")))}),w(l,bn.EventType.MESSAGE,S=>{var R;if(!f){const st=S.data[0];K(!!st);const H=st,z=H.error||((R=H[0])===null||R===void 0?void 0:R.error);if(z){v(rt,`RPC '${t}' stream ${r} received error:`,z);const mt=z.status;let gt=function(O){const M=B[O];if(M!==void 0)return Rc(M)}(mt),re=z.message;gt===void 0&&(gt=p.INTERNAL,re="Unknown error status: "+mt+" with message "+z.message),f=!0,g.oo(new y(gt,re)),l.close()}else v(rt,`RPC '${t}' stream ${r} received:`,st),g.uo(st)}}),w(a,Df.STAT_EVENT,S=>{S.stat===Ji.PROXY?v(rt,`RPC '${t}' stream ${r} detected buffering proxy`):S.stat===Ji.NOPROXY&&v(rt,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.ro()},0),g}}function js(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(e){return new Ad(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Ys=t,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(t){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),t())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(t,n,s,r,i,o,a,c){this.Ys=t,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Gc(t,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(t){this.Uo(),this.stream.send(t)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(t,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,t!==4?this.ko.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(_t(n.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=t,await this.listener.no(n)}Go(){}auth(){this.state=1;const t=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{t(()=>{const r=new y(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(t,n){const s=this.Qo(this.Co);this.stream=this.Wo(t,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Qo(t){return n=>{this.Ys.enqueueAndForget(()=>this.Co===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hg extends lg{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(t,n){return this.connection.yo("Listen",t,n)}onMessage(t){this.ko.reset();const n=Dd(this.Tt,t),s=function(r){if(!("targetChange"in r))return I.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?I.min():i.readTime?he(i.readTime):I.min()}(t);return this.listener.Ho(n,s)}Jo(t){const n={};n.database=wo(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=gr(a)?{documents:_d(r,a)}:{query:Nd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Fc(r,i.resumeToken):i.snapshotVersion.compareTo(I.min())>0&&(o.readTime=wr(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,t);const s=xd(this.Tt,t);s&&(n.labels=s),this.qo(n)}Yo(t){const n={};n.database=wo(this.Tt),n.removeTarget=t,this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}lo(t,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(p.UNKNOWN,r.toString())})}mo(t,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(p.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class dg{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(t){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.hu("Offline")))}set(t){this.du(),this.ou=0,t==="Online"&&(this.cu=!1),this.hu(t)}hu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}lu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(_t(n),this.cu=!1):v("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{mn(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=N(a);c.mu.add(4),await pn(c),c.pu.set("Unknown"),c.mu.delete(4),await bs(c)}(this))})}),this.pu=new dg(s,r)}}async function bs(e){if(mn(e))for(const t of e.gu)await t(!0)}async function pn(e){for(const t of e.gu)await t(!1)}function Qc(e,t){const n=N(e);n.wu.has(t.targetId)||(n.wu.set(t.targetId,t),hi(n)?li(n):Ne(n).Mo()&&ui(n,t))}function Wc(e,t){const n=N(e),s=Ne(n);n.wu.delete(t),s.Mo()&&Xc(n,t),n.wu.size===0&&(s.Mo()?s.Bo():mn(n)&&n.pu.set("Unknown"))}function ui(e,t){e.Iu.Ot(t.targetId),Ne(e).Jo(t)}function Xc(e,t){e.Iu.Ot(t),Ne(e).Yo(t)}function li(e){e.Iu=new Td({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ie:t=>e.wu.get(t)||null}),Ne(e).start(),e.pu.au()}function hi(e){return mn(e)&&!Ne(e).$o()&&e.wu.size>0}function mn(e){return N(e).mu.size===0}function Yc(e){e.Iu=void 0}async function pg(e){e.wu.forEach((t,n)=>{ui(e,t)})}async function mg(e,t){Yc(e),hi(e)?(e.pu.fu(t),li(e)):e.pu.set("Unknown")}async function yg(e,t,n){if(e.pu.set("Online"),t instanceof Vc&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await bo(e,s)}else if(t instanceof Nn?e.Iu.Qt(t):t instanceof Pc?e.Iu.Zt(t):e.Iu.Wt(t),!n.isEqual(I.min()))try{const s=await zc(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.wu.get(c);u&&r.wu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(ht.EMPTY_BYTE_STRING,c.snapshotVersion)),Xc(r,a);const u=new Jt(c.target,a,1,c.sequenceNumber);ui(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await bo(e,s)}}async function bo(e,t,n){if(!hn(t))throw t;e.mu.add(1),await pn(e),e.pu.set("Offline"),n||(n=()=>zc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await bs(e)})}async function So(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=mn(n);n.mu.add(3),await pn(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.mu.delete(3),await bs(n)}async function vg(e,t){const n=N(e);t?(n.mu.delete(2),await bs(n)):t||(n.mu.add(2),await pn(n),n.pu.set("Unknown"))}function Ne(e){return e.Tu||(e.Tu=function(t,n,s){const r=N(t);return r.ru(),new hg(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(e.datastore,e.asyncQueue,{Xr:pg.bind(null,e),no:mg.bind(null,e),Ho:yg.bind(null,e)}),e.gu.push(async t=>{t?(e.Tu.Fo(),hi(e)?li(e):e.pu.set("Unknown")):(await e.Tu.stop(),Yc(e))})),e.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new fi(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jc(e,t){if(_t("AsyncQueue",`${t}: ${e}`),hn(e))return new y(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=Oe(),this.sortedSet=new et(this.comparator)}static emptySet(t){return new fe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof fe)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new fe;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.Au=new et(E.comparator)}track(t){const n=t.doc.key,s=this.Au.get(n);s?t.type!==0&&s.type===3?this.Au=this.Au.insert(n,t):t.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Au=this.Au.remove(n):t.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:t.doc}):b():this.Au=this.Au.insert(n,t)}Ru(){const t=[];return this.Au.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ie{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ie(t,n,fe.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ys(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.Pu=void 0,this.listeners=[]}}class Eg{constructor(){this.queries=new _e(t=>bc(t),ys),this.onlineState="Unknown",this.vu=new Set}}async function Tg(e,t){const n=N(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new wg),r)try{i.Pu=await n.onListen(s)}catch(o){const a=Jc(o,`Initialization of query '${mr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Pu&&t.Vu(i.Pu)&&di(n)}async function Ig(e,t){const n=N(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function bg(e,t){const n=N(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Pu=r}}s&&di(n)}function Sg(e,t,n){const s=N(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function di(e){e.vu.forEach(t=>{t.next()})}class Ag{constructor(t,n,s){this.query=t,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Ie(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Du?this.xu(t)&&(this.Su.next(t),n=!0):this.Nu(t,this.onlineState)&&(this.ku(t),n=!0),this.Cu=t,n}onError(t){this.Su.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,t)&&(this.ku(this.Cu),n=!0),n}Nu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.$u||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}xu(t){if(t.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(t){t=Ie.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Du=!0,this.Su.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t){this.key=t}}class tu{constructor(t){this.key=t}}class Cg{constructor(t,n){this.query=t,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=D(),this.mutatedKeys=D(),this.ju=Sc(t),this.zu=new fe(this.ju)}get Wu(){return this.Ku}Hu(t,n){const s=n?n.Ju:new Ao,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((l,h)=>{const f=r.get(l),g=vs(this.query,h)?h:null,w=!!f&&this.mutatedKeys.has(f.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;f&&g?f.data.isEqual(g.data)?w!==S&&(s.track({type:3,doc:g}),R=!0):this.Yu(f,g)||(s.track({type:2,doc:g}),R=!0,(c&&this.ju(g,c)>0||u&&this.ju(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),R=!0):f&&!g&&(s.track({type:1,doc:f}),R=!0,(c||u)&&(a=!0)),R&&(g?(o=o.add(g),i=S?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.zu;this.zu=t.zu,this.mutatedKeys=t.mutatedKeys;const i=t.Ju.Ru();i.sort((u,l)=>function(h,f){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return g(h)-g(f)}(u.type,l.type)||this.ju(u.doc,l.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Ie(this.query,t.zu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Ao,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(t){return!this.Ku.has(t)&&!!this.zu.has(t)&&!this.zu.get(t).hasLocalMutations}Zu(t){t&&(t.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=t.current)}Xu(){if(!this.current)return[];const t=this.Qu;this.Qu=D(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return t.forEach(s=>{this.Qu.has(s)||n.push(new tu(s))}),this.Qu.forEach(s=>{t.has(s)||n.push(new Zc(s))}),n}nc(t){this.Ku=t.Yi,this.Qu=D();const n=this.Hu(t.documents);return this.applyChanges(n,!0)}sc(){return Ie.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Dg{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class _g{constructor(t){this.key=t,this.ic=!1}}class Ng{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new _e(a=>bc(a),ys),this.uc=new Map,this.cc=new Set,this.ac=new et(E.comparator),this.hc=new Map,this.lc=new oi,this.fc={},this.dc=new Map,this._c=Te.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function kg(e,t){const n=Vg(e);let s,r;const i=n.oc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await sg(n.localStore,Nt(t));n.isPrimaryClient&&Qc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await xg(n,t,s,a==="current",o.resumeToken)}return r}async function xg(e,t,n,s,r){e.mc=(h,f,g)=>async function(w,S,R,st){let H=S.view.Hu(R);H.Li&&(H=await Eo(w.localStore,S.query,!1).then(({documents:gt})=>S.view.Hu(gt,H)));const z=st&&st.targetChanges.get(S.targetId),mt=S.view.applyChanges(H,w.isPrimaryClient,z);return Do(w,S.targetId,mt.tc),mt.snapshot}(e,h,f,g);const i=await Eo(e.localStore,t,!0),o=new Cg(t,i.Yi),a=o.Hu(i.documents),c=gn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);Do(e,n,u.tc);const l=new Dg(t,n,o);return e.oc.set(t,l),e.uc.has(n)?e.uc.get(n).push(t):e.uc.set(n,[t]),u.snapshot}async function Rg(e,t){const n=N(e),s=n.oc.get(t),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!ys(i,t))),void n.oc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Tr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Wc(n.remoteStore,s.targetId),Ir(n,s.targetId)}).catch(Jr)):(Ir(n,s.targetId),await Tr(n.localStore,s.targetId,!0))}async function eu(e,t){const n=N(e);try{const s=await eg(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(K(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?K(o.ic):r.removedDocuments.size>0&&(K(o.ic),o.ic=!1))}),await su(n,s,t)}catch(s){await Jr(s)}}function Co(e,t,n){const s=N(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=N(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&di(a)}(s.eventManager,t),r.length&&s.rc.Ho(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Lg(e,t,n){const s=N(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.hc.get(t),i=r&&r.key;if(i){let o=new et(E.comparator);o=o.insert(i,ot.newNoDocument(i,I.min()));const a=D().add(i),c=new Ts(I.min(),new Map,new G(x),o,a);await eu(s,c),s.ac=s.ac.remove(i),s.hc.delete(t),gi(s)}else await Tr(s.localStore,t,!1).then(()=>Ir(s,t,n)).catch(Jr)}function Ir(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.uc.get(t))e.oc.delete(s),n&&e.rc.gc(s,n);e.uc.delete(t),e.isPrimaryClient&&e.lc.ds(t).forEach(s=>{e.lc.containsKey(s)||nu(e,s)})}function nu(e,t){e.cc.delete(t.path.canonicalString());const n=e.ac.get(t);n!==null&&(Wc(e.remoteStore,n),e.ac=e.ac.remove(t),e.hc.delete(n),gi(e))}function Do(e,t,n){for(const s of n)s instanceof Zc?(e.lc.addReference(s.key,t),Og(e,s)):s instanceof tu?(v("SyncEngine","Document no longer in limbo: "+s.key),e.lc.removeReference(s.key,t),e.lc.containsKey(s.key)||nu(e,s.key)):b()}function Og(e,t){const n=t.key,s=n.path.canonicalString();e.ac.get(n)||e.cc.has(s)||(v("SyncEngine","New document in limbo: "+n),e.cc.add(s),gi(e))}function gi(e){for(;e.cc.size>0&&e.ac.size<e.maxConcurrentLimboResolutions;){const t=e.cc.values().next().value;e.cc.delete(t);const n=new E(F.fromString(t)),s=e._c.next();e.hc.set(s,new _g(n)),e.ac=e.ac.insert(n,s),Qc(e.remoteStore,new Jt(Nt(Ec(n.path)),s,2,Zr.at))}}async function su(e,t,n){const s=N(e),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u?.fromCache?"not-current":"current"),u){r.push(u);const l=ci.Ni(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const u=N(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>d.forEach(c,h=>d.forEach(h.Ci,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>d.forEach(h.xi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!hn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ki.get(h),g=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(h,w)}}}(s.localStore,i))}async function Mg(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await Hc(n.localStore,t);n.currentUser=t,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new y(p.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await su(n,s.Wi)}}function Pg(e,t){const n=N(e),s=n.hc.get(t);if(s&&s.ic)return D().add(s.key);{let r=D();const i=n.uc.get(t);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function Vg(e){const t=N(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=eu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Lg.bind(null,t),t.rc.Ho=bg.bind(null,t.eventManager),t.rc.gc=Sg.bind(null,t.eventManager),t}class Fg{constructor(){this.synchronizeTabs=!1}async initialize(t){this.Tt=Is(t.databaseInfo.databaseId),this.sharedClientState=this.Ic(t),this.persistence=this.Tc(t),await this.persistence.start(),this.localStore=this.Ec(t),this.gcScheduler=this.Ac(t,this.localStore),this.indexBackfillerScheduler=this.Rc(t,this.localStore)}Ac(t,n){return null}Rc(t,n){return null}Ec(t){return tg(this.persistence,new Jd,t.initialUser,this.Tt)}Tc(t){return new Xd(ai.qs,this.Tt)}Ic(t){return new ig}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $g{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Co(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mg.bind(null,this.syncEngine),await vg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Eg}createDatastore(t){const n=Is(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new ug(r));var r;return function(i,o,a,c){return new fg(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Co(this.syncEngine,a,0),o=Io.C()?new Io:new og,new gg(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const l=new Ng(s,r,i,o,a,c);return u&&(l.wc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=N(t);v("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await pn(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.vc(this.observer.next,t)}error(t){this.observer.error?this.vc(this.observer.error,t):_t("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=it.UNAUTHENTICATED,this.clientId=Ff.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Jc(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function qg(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Hc(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function jg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Kg(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>So(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>So(t.remoteStore,i)),e.onlineComponents=t}async function Kg(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await qg(e,new Fg)),e.offlineComponents}async function Hg(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await jg(e,new $g)),e.onlineComponents}async function zg(e){const t=await Hg(e),n=t.eventManager;return n.onListen=kg.bind(null,t.syncEngine),n.onUnlisten=Rg.bind(null,t.syncEngine),n}function Gg(e,t,n={}){const s=new Xt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Ug({next:h=>{i.enqueueAndForget(()=>Ig(r,l)),h.fromCache&&a.source==="server"?c.reject(new y(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Ag(o,u,{includeMetadataChanges:!0,$u:!0});return Tg(r,l)}(await zg(e),e.asyncQueue,t,n,s)),s.promise}const _o=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(e,t,n){if(!n)throw new y(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Wg(e,t,n,s){if(t===!0&&s===!0)throw new y(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function No(e){if(E.isDocumentKey(e))throw new y(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ss(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":b()}function br(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ss(e);throw new y(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Xg(e,t){if(t<=0)throw new y(p.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new y(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Wg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ko({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ko(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new kf;switch(n.type){case"gapi":const s=n.client;return new Of(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new y(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=_o.get(t);n&&(v("ComponentProvider","Removing Datastore"),_o.delete(t),n.terminate())}(this),Promise.resolve()}}function Yg(e,t,n,s={}){var r;const i=(e=br(e,pi))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&lr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=it.MOCK_USER;else{o=hl(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new y(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new it(c)}e._authCredentials=new xf(new lc(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new de(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}}class se{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new se(this.firestore,t,this._query)}}class de extends se{constructor(t,n,s){super(t,n,Ec(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new E(t))}withConverter(t){return new de(this.firestore,t,this._path)}}function Jg(e,t,...n){if(e=Vn(e),Qg("collection","path",t),e instanceof pi){const s=F.fromString(t,...n);return No(s),new de(e,null,s)}{if(!(e instanceof kt||e instanceof de))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(F.fromString(t,...n));return No(s),new de(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Gc(this,"async_queue_retry"),this.Hc=()=>{const n=js();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const t=js();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const n=js();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Xt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Uc.push(t),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(t){if(!hn(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(t){const n=this.qc.then(()=>(this.jc=!0,t().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw _t("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(t,n,s){this.Jc(),this.Wc.indexOf(t)>-1&&(n=0);const r=fi.createAndSchedule(this,t,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&b()}verifyOperationInProgress(){}async ta(){let t;do t=this.qc,await t;while(t!==this.qc)}ea(t){for(const n of this.Gc)if(n.timerId===t)return!0;return!1}na(t){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ta()})}sa(t){this.Wc.push(t)}Xc(t){const n=this.Gc.indexOf(t);this.Gc.splice(n,1)}}class ru extends pi{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Zg,this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||iu(this),this._firestoreClient.terminate()}}function tp(e,t){const n=typeof e=="object"?e:ph(),s=typeof e=="string"?e:t||"(default)",r=hh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=cl("firestore");i&&Yg(r,...i)}return r}function ep(e){return e._firestoreClient||iu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function iu(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new Hf(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Bg(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this._byteString=t}static fromBase64String(t){try{return new be(ht.fromBase64String(t))}catch(n){throw new y(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new be(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=/^__.*__$/;function cu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class yi{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(t){return new yi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.oa({path:s,ca:!1});return r.aa(t),r}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.oa({path:s,ca:!1});return r.ia(),r}la(t){return this.oa({path:void 0,ca:!0})}fa(t){return Sr(t,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let t=0;t<this.path.length;t++)this.aa(this.path.get(t))}aa(t){if(t.length===0)throw this.fa("Document fields must not be empty");if(cu(this.ra)&&np.test(t))throw this.fa('Document fields cannot begin and end with "__"')}}class sp{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.Tt=s||Is(t)}wa(t,n,s,r=!1){return new yi({ra:t,methodName:n,_a:s,path:ft.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function rp(e){const t=e._freezeSettings(),n=Is(e._databaseId);return new sp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ip(e,t,n,s=!1){return vi(n,e.wa(s?4:3,t))}function vi(e,t){if(uu(e=Vn(e)))return ap("Unsupported field value:",t,e),op(e,t);if(e instanceof au)return function(n,s){if(!cu(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ca&&t.ra!==4)throw t.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=vi(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Vn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ud(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=X.fromDate(n);return{timestampValue:wr(s.Tt,r)}}if(n instanceof X){const r=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wr(s.Tt,r)}}if(n instanceof mi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof be)return{bytesValue:Fc(s.Tt,n._byteString)};if(n instanceof kt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:$c(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Ss(n)}`)}(e,t)}function op(e,t){const n={};return hc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fn(e,(s,r)=>{const i=vi(r,t.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function uu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof X||e instanceof mi||e instanceof be||e instanceof kt||e instanceof au)}function ap(e,t,n){if(!uu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ss(n);throw s==="an object"?t.fa(e+" a custom object"):t.fa(e+" "+s)}}const cp=new RegExp("[~\\*/\\[\\]]");function up(e,t,n){if(t.search(cp)>=0)throw Sr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ou(...t.split("."))._internalPath}catch{throw Sr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Sr(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new y(p.INVALID_ARGUMENT,a+e+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(hu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lp extends lu{data(){return super.data()}}function hu(e,t){return typeof t=="string"?up(e,t):t instanceof ou?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wi{}class fu extends wi{}function fp(e,t,...n){let s=[];t instanceof wi&&s.push(t),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Ti).length,o=r.filter(a=>a instanceof Ei).length;if(i>1||i>0&&o>0)throw new y(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)e=r._apply(e);return e}class Ei extends fu{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Ei(t,n,s)}_apply(t){const n=this._parse(t);return du(t._query,n),new se(t.firestore,t.converter,pr(t._query,n))}_parse(t){const n=rp(t.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ro(l,u);const f=[];for(const g of l)f.push(xo(a,r,g));h={arrayValue:{values:f}}}else h=xo(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ro(l,u),h=ip(o,i,l,u==="in"||u==="not-in");return j.create(c,u,h)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Ti extends wi{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Ti(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:wt.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)du(i,a),i=pr(i,a)}(t._query,n),new se(t.firestore,t.converter,pr(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ii extends fu{constructor(t,n,s){super(),this.type=t,this._limit=n,this._limitType=s}static _create(t,n,s){return new Ii(t,n,s)}_apply(t){return new se(t.firestore,t.converter,Xn(t._query,this._limit,this._limitType))}}function dp(e){return Xg("limit",e),Ii._create("limit",e,"F")}function xo(e,t,n){if(typeof(n=Vn(n))=="string"){if(n==="")throw new y(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ic(t)&&n.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(F.fromString(n));if(!E.isDocumentKey(s))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return so(e,new E(s))}if(n instanceof kt)return so(e,n._key);throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ss(n)}.`)}function Ro(e,t){if(!Array.isArray(e)||e.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function du(e,t){if(t.isInequality()){const s=si(e),r=t.field;if(s!==null&&!s.isEqual(r))throw new y(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Tc(e);i!==null&&gp(e,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function gp(e,t,n){if(!n.isEqual(t))throw new y(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class pp{convertValue(t,n="none"){switch(ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return q(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ve(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw b()}}convertObject(t,n){const s={};return fn(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new mi(q(t.latitude),q(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=dc(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Xe(t));default:return null}}convertTimestamp(t){const n=Mt(t);return new X(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=F.fromString(t);K(Kc(s));const r=new We(s.get(1),s.get(3)),i=new E(s.popFirst(5));return r.isEqual(n)||_t(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mp extends lu{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new kn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(hu("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class kn extends mp{data(t={}){return super.data(t)}}class yp{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Dn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new kn(this._firestore,this._userDataWriter,s.key,s,new Dn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new kn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Dn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new kn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Dn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:vp(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}class wp extends pp{constructor(t){super(),this.firestore=t}convertBytes(t){return new be(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function Ep(e){e=br(e,se);const t=br(e.firestore,ru),n=ep(t),s=new wp(t);return hp(e._query),Gg(n,e._query).then(r=>new yp(t,s,e,r))}(function(e,t=!0){(function(n){De=n})(gh),$n(new Be("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ru(new Rf(n.getProvider("auth-internal")),new Pf(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new We(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ue(Zi,"3.9.0",e),ue(Zi,"3.9.0","esm2017")})();const Tp={apiKey:"AIzaSyDFtgfMl8p0bM2gbRhGRdio6gFyTWH187U",authDomain:"letrasdecadiz-45d5b.firebaseapp.com",projectId:"letrasdecadiz-45d5b",storageBucket:"letrasdecadiz-45d5b.appspot.com",messagingSenderId:"746443805130",appId:"1:746443805130:web:e385058c93559438d17f33",measurementId:"G-ZCB6PD5CTR"},Ip=ia(Tp),bp=tp(Ip);async function Sp(){(await Ep(fp(Jg(bp,"agrupaciones"),dp(20)))).forEach(t=>{console.log(t.id," => ",t.data())})}Sp();const Ap="modulepreload",Cp=function(e){return"/"+e},Lo={},Oo=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Cp(i),i in Lo)return;Lo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Ap,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},Dp="_App_2f7ub_1",_p="_link_2f7ub_10",Np={App:Dp,"parent-App":"_parent-App_2f7ub_6",link:_p};const kp=tn('<ul><li><a href="#">Inicio</a></li><li><a href="#">Explorar</a></li><li><a href="#">Top Canciones</a></li><li><a href="#">Top Artistas</a></li><li><a href="#">Top Letras</a></li></ul>',22),xp=tn('<div class="based-icon"></div>',2),Rp=tn("<nav></nav>",2);function Mo(e){const{backcolor:t,iconbuild:n}=e;return console.log(Boolean(n)),(()=>{const s=Rp.cloneNode(!0);return s.style.setProperty("background-color",t),Qt(s,W(Mn,{get when(){return!Boolean(n)},get children(){return kp.cloneNode(!0)}}),null),Qt(s,W(Mn,{get when(){return Boolean(n)},get children(){return xp.cloneNode(!0)}}),null),s})()}const Lp=tn('<div class="aporte"><button class="button-aporte"></button></div>',4);function um(e){const{colors:t,namelink:n,linksection:s}={...e},[r,i]=[...t],o=a=>{window.location.href="/verify"};return(()=>{const a=Lp.cloneNode(!0),c=a.firstChild;return a.style.setProperty("background-color",r),c.$$click=o,c.style.setProperty("background-color",i),c.style.setProperty("color",r),Qt(c,n),a})()}Wo(["click"]);function Op(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Mp([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function Pp(e){try{return document.querySelector(e)}catch{return null}}function Vp(e,t){const n=Pp(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Fp(e,t,n,s){let r=!1;const i=a=>typeof a=="string"?{value:a}:a,o=Mp(It(i(e()),{equals:(a,c)=>a.value===c.value}),void 0,a=>(!r&&t(a),a));return n&&Uo(n((a=e())=>{r=!0,o[1](i(a)),r=!1})),{signal:o,utils:s}}function $p(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:It({value:""})};return e}function Up(){return Fp(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),Vp(window.location.hash.slice(1),n)},e=>Op(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const Bp=/^(?:[a-z0-9]+:)?\/\//i,qp=/^\/+|\/+$/g;function Ue(e,t=!1){const n=e.replace(qp,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function xn(e,t,n){if(Bp.test(t))return;const s=Ue(e),r=n&&Ue(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+Ue(t,!i)}function jp(e,t){if(e==null)throw new Error(t);return e}function gu(e,t){return Ue(e).replace(/\/*(\*.*)?$/g,"")+Ue(t)}function Kp(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function ge(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function Hp(e,t){const[n,s]=e.split("/*",2),r=n.split("/").filter(Boolean),i=r.length;return o=>{const a=o.split("/").filter(Boolean),c=a.length-i;if(c<0||c>0&&s===void 0&&!t)return null;const u={path:i?"":"/",params:{}};for(let l=0;l<i;l++){const h=r[l],f=a[l];if(h[0]===":")u.params[h.slice(1)]=f;else if(h.localeCompare(f,void 0,{sensitivity:"base"})!==0)return null;u.path+=`/${f}`}return s&&(u.params[s]=c?a.slice(-c).join("/"):""),u}}function zp(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function pu(e){const t=new Map,n=Du();return new Proxy({},{get(s,r){return t.has(r)||_u(n,()=>t.set(r,Z(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function mu(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return mu(s).reduce((i,o)=>[...i,...r.map(a=>a+o)],[])}const Gp=100,yu=Bo(),As=Bo(),vu=()=>jp(Ar(yu),"Make sure your app is wrapped in a <Router />");let Je;const wu=()=>Je||Ar(As)||vu().base;function Qp(e,t="",n){const{component:s,data:r,children:i}=e,o=!i||Array.isArray(i)&&!i.length,a={key:e,element:s?()=>W(s,{}):()=>{const{element:c}=e;return c===void 0&&n?W(n,{}):c},preload:e.component?s.preload:e.preload,data:r};return Eu(e.path).reduce((c,u)=>{for(const l of mu(u)){const h=gu(t,l),f=o?h:h.split("/*",1)[0];c.push({...a,originalPath:l,pattern:f,matcher:Hp(f,!o)})}return c},[])}function Wp(e,t=0){return{routes:e,score:zp(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],o=i.matcher(n);if(!o)return null;s.unshift({...o,route:i})}return s}}}function Eu(e){return Array.isArray(e)?e:[e]}function Tu(e,t="",n,s=[],r=[]){const i=Eu(e);for(let o=0,a=i.length;o<a;o++){const c=i[o];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const u=Qp(c,t,n);for(const l of u){if(s.push(l),c.children)Tu(c.children,l.pattern,n,s,r);else{const h=Wp([...s],r.length);r.push(h)}s.pop()}}}return s.length?r:r.sort((o,a)=>a.score-o.score)}function Xp(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Yp(e,t){const n=new URL("http://sar"),s=Z(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),r=Z(()=>ge(s().pathname)),i=Z(()=>ge(s().search,!0)),o=Z(()=>ge(s().hash)),a=Z(()=>"");return{get pathname(){return r()},get search(){return i()},get hash(){return o()},get state(){return t()},get key(){return a()},query:pu($o(i,()=>Kp(s())))}}function Jp(e,t="",n,s){const{signal:[r,i],utils:o={}}=$p(e),a=o.parsePath||(O=>O),c=o.renderPath||(O=>O),u=xn("",t),l=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!r().value&&i({value:u,replace:!0,scroll:!1});const[h,f]=ku(),[g,w]=It(r().value),[S,R]=It(r().state),st=Yp(g,S),H=[],z={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(O){return xn(u,O)}};if(n)try{Je=z,z.data=n({data:void 0,params:{},location:st,navigate:gt(z)})}finally{Je=void 0}function mt(O,M,A){vt(()=>{if(typeof M=="number"){M&&(o.go?o.go(M):console.warn("Router integration does not support relative routing"));return}const{replace:_,resolve:$,scroll:yt,state:yn}={replace:!1,resolve:!0,scroll:!0,...A},Ut=$?O.resolvePath(M):xn("",M);if(Ut===void 0)throw new Error(`Path '${M}' is not a routable path`);if(H.length>=Gp)throw new Error("Too many redirects");const Bt=g();if((Ut!==Bt||yn!==S())&&!Ju){const ke=H.push({value:Bt,replace:_,scroll:yt,state:S()});f(()=>{w(Ut),R(yn)}).then(()=>{H.length===ke&&re({value:Ut,state:yn})})}})}function gt(O){return O=O||Ar(As)||z,(M,A)=>mt(O,M,A)}function re(O){const M=H[0];M&&((O.value!==M.value||O.state!==M.state)&&i({...O,replace:M.replace,scroll:M.scroll}),H.length=0)}At(()=>{const{value:O,state:M}=r();vt(()=>{O!==g()&&f(()=>{w(O),R(M)})})});{let O=function(A){return A.namespaceURI==="http://www.w3.org/2000/svg"},M=function(A){if(A.defaultPrevented||A.button!==0||A.metaKey||A.altKey||A.ctrlKey||A.shiftKey)return;const _=A.composedPath().find(Si=>Si instanceof Node&&Si.nodeName.toUpperCase()==="A");if(!_)return;const $=O(_),yt=$?_.href.baseVal:_.href;if(($?_.target.baseVal:_.target)||!yt&&!_.hasAttribute("state"))return;const Ut=(_.getAttribute("rel")||"").split(/\s+/);if(_.hasAttribute("download")||Ut&&Ut.includes("external"))return;const Bt=$?new URL(yt,document.baseURI):new URL(yt),ke=ge(Bt.pathname);if(Bt.origin!==window.location.origin||u&&ke&&!ke.toLowerCase().startsWith(u.toLowerCase()))return;const Iu=a(ke+ge(Bt.search,!0)+ge(Bt.hash)),bi=_.getAttribute("state");A.preventDefault(),mt(z,Iu,{resolve:!1,replace:_.hasAttribute("replace"),scroll:!_.hasAttribute("noscroll"),state:bi&&JSON.parse(bi)})};document.addEventListener("click",M),Uo(()=>document.removeEventListener("click",M))}return{base:z,out:l,location:st,isRouting:h,renderPath:c,parsePath:a,navigatorFactory:gt}}function Zp(e,t,n,s){const{base:r,location:i,navigatorFactory:o}=e,{pattern:a,element:c,preload:u,data:l}=s().route,h=Z(()=>s().path),f=pu(()=>s().params);u&&u();const g={parent:t,pattern:a,get child(){return n()},path:h,params:f,data:t.data,outlet:c,resolvePath(w){return xn(r.path(),w,h())}};if(l)try{Je=g,g.data=l({data:t.data,params:f,location:i,navigate:o(g)})}finally{Je=void 0}return g}const tm=e=>{const{source:t,url:n,base:s,data:r,out:i}=e,o=t||Up(),a=Jp(o,s,r);return W(yu.Provider,{value:a,get children(){return e.children}})},em=e=>{const t=vu(),n=wu(),s=Cr(()=>e.children),r=Z(()=>Tu(s(),gu(n.pattern,e.base||""),nm)),i=Z(()=>Xp(r(),t.location.pathname));t.out&&t.out.matches.push(i().map(({route:u,path:l,params:h})=>({originalPath:u.originalPath,pattern:u.pattern,path:l,params:h})));const o=[];let a;const c=Z($o(i,(u,l,h)=>{let f=l&&u.length===l.length;const g=[];for(let w=0,S=u.length;w<S;w++){const R=l&&l[w],st=u[w];h&&R&&st.route.key===R.route.key?g[w]=h[w]:(f=!1,o[w]&&o[w](),Fo(H=>{o[w]=H,g[w]=Zp(t,g[w-1]||n,()=>c()[w+1],()=>i()[w])}))}return o.splice(u.length).forEach(w=>w()),h&&f?h:(a=g[0],g)}));return W(Mn,{get when(){return c()&&a},children:u=>W(As.Provider,{value:u,get children(){return u.outlet()}})})},Po=e=>{const t=Cr(()=>e.children);return Pu(e,{get children(){return t()}})},nm=()=>{const e=wu();return W(Mn,{get when(){return e.child},children:t=>W(As.Provider,{value:t,get children(){return t.outlet()}})})},sm=tn("<div></div>",2);function rm(){const e=Ci(()=>Oo(()=>import("./Verify-d4db2ea1.js"),["assets/Verify-d4db2ea1.js","assets/Verify-572a745c.css"])),t=Ci(()=>Oo(()=>import("./Home-6a7c0c88.js"),[]));return(()=>{const n=sm.cloneNode(!0);return Qt(n,W(Mo,{backcolor:"white",iconbuild:"true"}),null),Qt(n,W(Mo,{backcolor:"black"}),null),Qt(n,W(tm,{get children(){return W(em,{get children(){return[W(Po,{path:"/",get element(){return W(t,{})}}),W(Po,{path:"/verify",get element(){return W(e,{})}})]}})}}),null),At(()=>Yo(n,Np.App)),n})()}const im=document.getElementById("root");Ku(()=>W(rm,{}),im);export{um as S,Ju as a,Z as b,W as c,At as d,Xo as e,Qu as f,Qt as i,Pu as m,am as s,tn as t};
