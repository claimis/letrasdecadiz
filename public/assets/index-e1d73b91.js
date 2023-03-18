(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const k={};function ce(t){k.context=t}const mo=(t,e)=>t===e,pn=Symbol("solid-proxy"),pe={equals:mo};let yo=ms;const ot=1,ge=2,cs={owned:null,cleanups:null,context:null,owner:null},Ye={};var A=null;let wt=null,E=null,N=null,vt=null,De=0;const[wo,xu]=K(!1);function ls(t,e){const n=E,i=A,s=t.length===0,r=s?cs:{owned:null,cleanups:null,context:null,owner:e===void 0?i:e},o=s?t:()=>t(()=>z(()=>Re(r)));A=r,E=null;try{return et(o,!0)}finally{E=n,A=i}}function K(t,e){e=e?Object.assign({},pe,e):pe;const n={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.value)),ps(n,s));return[ds.bind(n),i]}function wi(t,e,n){const i=$n(t,e,!0,ot);Jt(i)}function tt(t,e,n){const i=$n(t,e,!1,ot);Jt(i)}function O(t,e,n){n=n?Object.assign({},pe,n):pe;const i=$n(t,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,Jt(i),ds.bind(i)}function vo(t,e,n){let i,s,r;arguments.length===2&&typeof e=="object"||arguments.length===1?(i=!0,s=t,r=e||{}):(i=t,s=e,r=n||{});let o=null,a=Ye,c=null,l=!1,h="initialValue"in r,u=typeof i=="function"&&O(i);const g=new Set,[p,w]=(r.storage||K)(r.initialValue),[j,ht]=K(void 0),[Ct,J]=K(void 0,{equals:!1}),[Q,xt]=K(h?"ready":"unresolved");if(k.context){c=`${k.context.id}${k.context.count++}`;let m;r.ssrLoadFrom==="initial"?a=r.initialValue:k.load&&(m=k.load(c))&&(a=m[0])}function ut(m,v,C,V){return o===m&&(o=null,h=!0,(m===a||v===a)&&r.onHydrated&&queueMicrotask(()=>r.onHydrated(V,{value:v})),a=Ye,Xe(v,C)),v}function Xe(m,v){et(()=>{v===void 0&&w(()=>m),xt(v!==void 0?"errored":"ready"),ht(v);for(const C of g.keys())C.decrement();g.clear()},!1)}function I(){const m=To,v=p(),C=j();if(C!==void 0&&!o)throw C;return E&&!E.user&&m&&wi(()=>{Ct(),o&&(m.resolved||g.has(m)||(m.increment(),g.add(m)))}),v}function S(m=!0){if(m!==!1&&l)return;l=!1;const v=u?u():i;if(v==null||v===!1){ut(o,z(p));return}const C=a!==Ye?a:z(()=>s(v,{value:p(),refetching:m}));return typeof C!="object"||!(C&&"then"in C)?(ut(o,C,void 0,v),C):(o=C,l=!0,queueMicrotask(()=>l=!1),et(()=>{xt(h?"refreshing":"pending"),J()},!1),C.then(V=>ut(C,V,void 0,v),V=>ut(C,void 0,ws(V),v)))}return Object.defineProperties(I,{state:{get:()=>Q()},error:{get:()=>j()},loading:{get(){const m=Q();return m==="pending"||m==="refreshing"}},latest:{get(){if(!h)return I();const m=j();if(m&&!o)throw m;return p()}}}),u?wi(()=>S(!1)):S(!1),[I,{refetch:S,mutate:w}]}function z(t){if(E===null)return t();const e=E;E=null;try{return t()}finally{E=e}}function hs(t,e,n){const i=Array.isArray(t);let s,r=n&&n.defer;return o=>{let a;if(i){a=Array(t.length);for(let l=0;l<t.length;l++)a[l]=t[l]()}else a=t();if(r){r=!1;return}const c=z(()=>e(a,s,o));return s=a,c}}function us(t){return A===null||(A.cleanups===null?A.cleanups=[t]:A.cleanups.push(t)),t}function Eo(){return A}function bo(t,e){const n=A,i=E;A=t,E=null;try{return et(e,!0)}catch(s){Bn(s)}finally{A=n,E=i}}function Ao(t){const e=E,n=A;return Promise.resolve().then(()=>{E=e,A=n;let i;return et(t,!1),E=A=null,i?i.done:void 0})}function Io(){return[wo,Ao]}function fs(t,e){const n=Symbol("context");return{id:n,Provider:_o(n),defaultValue:t}}function xn(t){let e;return(e=vs(A,t.id))!==void 0?e:t.defaultValue}function Mn(t){const e=O(t),n=O(()=>gn(e()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}let To;function ds(){const t=wt;if(this.sources&&(this.state||t))if(this.state===ot||t)Jt(this);else{const e=N;N=null,et(()=>me(this),!1),N=e}if(E){const e=this.observers?this.observers.length:0;E.sources?(E.sources.push(this),E.sourceSlots.push(e)):(E.sources=[this],E.sourceSlots=[e]),this.observers?(this.observers.push(E),this.observerSlots.push(E.sources.length-1)):(this.observers=[E],this.observerSlots=[E.sources.length-1])}return this.value}function ps(t,e,n){let i=t.value;return(!t.comparator||!t.comparator(i,e))&&(t.value=e,t.observers&&t.observers.length&&et(()=>{for(let s=0;s<t.observers.length;s+=1){const r=t.observers[s],o=wt&&wt.running;o&&wt.disposed.has(r),(o&&!r.tState||!o&&!r.state)&&(r.pure?N.push(r):vt.push(r),r.observers&&ys(r)),o||(r.state=ot)}if(N.length>1e6)throw N=[],new Error},!1)),e}function Jt(t){if(!t.fn)return;Re(t);const e=A,n=E,i=De;E=A=t,So(t,t.value,i),E=n,A=e}function So(t,e,n){let i;try{i=t.fn(e)}catch(s){return t.pure&&(t.state=ot,t.owned&&t.owned.forEach(Re),t.owned=null),t.updatedAt=n+1,Bn(s)}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?ps(t,i):t.value=i,t.updatedAt=n)}function $n(t,e,n,i=ot,s){const r={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:A,context:null,pure:n};return A===null||A!==cs&&(A.owned?A.owned.push(r):A.owned=[r]),r}function gs(t){const e=wt;if(t.state===0||e)return;if(t.state===ge||e)return me(t);if(t.suspense&&z(t.suspense.inFallback))return t.suspense.effects.push(t);const n=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<De);)(t.state||e)&&n.push(t);for(let i=n.length-1;i>=0;i--)if(t=n[i],t.state===ot||e)Jt(t);else if(t.state===ge||e){const s=N;N=null,et(()=>me(t,n[0]),!1),N=s}}function et(t,e){if(N)return t();let n=!1;e||(N=[]),vt?n=!0:vt=[],De++;try{const i=t();return Co(n),i}catch(i){n||(vt=null),N=null,Bn(i)}}function Co(t){if(N&&(ms(N),N=null),t)return;const e=vt;vt=null,e.length&&et(()=>yo(e),!1)}function ms(t){for(let e=0;e<t.length;e++)gs(t[e])}function me(t,e){const n=wt;t.state=0;for(let i=0;i<t.sources.length;i+=1){const s=t.sources[i];s.sources&&(s.state===ot||n?s!==e&&(!s.updatedAt||s.updatedAt<De)&&gs(s):(s.state===ge||n)&&me(s,e))}}function ys(t){const e=wt;for(let n=0;n<t.observers.length;n+=1){const i=t.observers[n];(!i.state||e)&&(i.state=ge,i.pure?N.push(i):vt.push(i),i.observers&&ys(i))}}function Re(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),i=t.sourceSlots.pop(),s=n.observers;if(s&&s.length){const r=s.pop(),o=n.observerSlots.pop();i<s.length&&(r.sourceSlots[o]=i,s[i]=r,n.observerSlots[i]=o)}}if(t.owned){for(e=0;e<t.owned.length;e++)Re(t.owned[e]);t.owned=null}if(t.cleanups){for(e=0;e<t.cleanups.length;e++)t.cleanups[e]();t.cleanups=null}t.state=0,t.context=null}function ws(t){return t instanceof Error||typeof t=="string"?t:new Error("Unknown error")}function Bn(t){throw t=ws(t),t}function vs(t,e){return t?t.context&&t.context[e]!==void 0?t.context[e]:vs(t.owner,e):void 0}function gn(t){if(typeof t=="function"&&!t.length)return gn(t());if(Array.isArray(t)){const e=[];for(let n=0;n<t.length;n++){const i=gn(t[n]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return t}function _o(t,e){return function(i){let s;return tt(()=>s=z(()=>(A.context={[t]:i.value},Mn(()=>i.children))),void 0),s}}function D(t,e){return z(()=>t(e||{}))}function le(){return!0}const Do={get(t,e,n){return e===pn?n:t.get(e)},has(t,e){return e===pn?!0:t.has(e)},set:le,deleteProperty:le,getOwnPropertyDescriptor(t,e){return{configurable:!0,enumerable:!0,get(){return t.get(e)},set:le,deleteProperty:le}},ownKeys(t){return t.keys()}};function Je(t){return(t=typeof t=="function"?t():t)?t:{}}function Ro(...t){let e=!1;for(let i=0;i<t.length;i++){const s=t[i];e=e||!!s&&pn in s,t[i]=typeof s=="function"?(e=!0,O(s)):s}if(e)return new Proxy({get(i){for(let s=t.length-1;s>=0;s--){const r=Je(t[s])[i];if(r!==void 0)return r}},has(i){for(let s=t.length-1;s>=0;s--)if(i in Je(t[s]))return!0;return!1},keys(){const i=[];for(let s=0;s<t.length;s++)i.push(...Object.keys(Je(t[s])));return[...new Set(i)]}},Do);const n={};for(let i=t.length-1;i>=0;i--)if(t[i]){const s=Object.getOwnPropertyDescriptors(t[i]);for(const r in s)r in n||Object.defineProperty(n,r,{enumerable:!0,get(){for(let o=t.length-1;o>=0;o--){const a=(t[o]||{})[r];if(a!==void 0)return a}}})}return n}function vi(t){let e,n;const i=s=>{const r=k.context;if(r){const[a,c]=K();(n||(n=t())).then(l=>{ce(r),c(()=>l.default),ce()}),e=a}else if(!e){const[a]=vo(()=>(n||(n=t())).then(c=>c.default));e=a}let o;return O(()=>(o=e())&&z(()=>{if(!r)return o(s);const a=k.context;ce(r);const c=o(s);return ce(a),c}))};return i.preload=()=>n||((n=t()).then(s=>e=()=>s.default),n),i}function ye(t){let e=!1;const n=t.keyed,i=O(()=>t.when,void 0,{equals:(s,r)=>e?s===r:!s==!r});return O(()=>{const s=i();if(s){const r=t.children,o=typeof r=="function"&&r.length>0;return e=n||o,o?z(()=>r(s)):r}return t.fallback},void 0,void 0)}const Oo=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Po=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Oo]),Lo=new Set(["innerHTML","textContent","innerText","children"]),ko=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ei=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),No=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),xo={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Mo(t,e,n){let i=n.length,s=e.length,r=i,o=0,a=0,c=e[s-1].nextSibling,l=null;for(;o<s||a<r;){if(e[o]===n[a]){o++,a++;continue}for(;e[s-1]===n[r-1];)s--,r--;if(s===o){const h=r<i?a?n[a-1].nextSibling:n[r-a]:c;for(;a<r;)t.insertBefore(n[a++],h)}else if(r===a)for(;o<s;)(!l||!l.has(e[o]))&&e[o].remove(),o++;else if(e[o]===n[r-1]&&n[a]===e[s-1]){const h=e[--s].nextSibling;t.insertBefore(n[a++],e[o++].nextSibling),t.insertBefore(n[--r],h),e[s]=n[r]}else{if(!l){l=new Map;let u=a;for(;u<r;)l.set(n[u],u++)}const h=l.get(e[o]);if(h!=null)if(a<h&&h<r){let u=o,g=1,p;for(;++u<s&&u<r&&!((p=l.get(e[u]))==null||p!==h+g);)g++;if(g>h-a){const w=e[o];for(;a<h;)t.insertBefore(n[a++],w)}else t.replaceChild(n[a++],e[o++])}else o++;else e[o++].remove()}}}const bi="_$DX_DELEGATE";function $o(t,e,n,i={}){let s;return ls(r=>{s=r,e===document?t():Et(e,t(),e.firstChild?null:void 0,n)},i.owner),()=>{s(),e.textContent=""}}function Qt(t,e,n){const i=document.createElement("template");if(i.innerHTML=t,e&&i.innerHTML.split("<").length-1!==e)throw`The browser resolved template HTML does not match JSX input:
${i.innerHTML}

${t}. Is your HTML properly formed?`;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function Es(t,e=window.document){const n=e[bi]||(e[bi]=new Set);for(let i=0,s=t.length;i<s;i++){const r=t[i];n.has(r)||(n.add(r),e.addEventListener(r,qo))}}function bs(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function Bo(t,e,n,i){i==null?t.removeAttributeNS(e,n):t.setAttributeNS(e,n,i)}function As(t,e){e==null?t.removeAttribute("class"):t.className=e}function jo(t,e,n,i){if(i)Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n;else if(Array.isArray(n)){const s=n[0];t.addEventListener(e,n[0]=r=>s.call(t,n[1],r))}else t.addEventListener(e,n)}function Fo(t,e,n={}){const i=Object.keys(e||{}),s=Object.keys(n);let r,o;for(r=0,o=s.length;r<o;r++){const a=s[r];!a||a==="undefined"||e[a]||(Ai(t,a,!1),delete n[a])}for(r=0,o=i.length;r<o;r++){const a=i[r],c=!!e[a];!a||a==="undefined"||n[a]===c||!c||(Ai(t,a,!0),n[a]=c)}return n}function Uo(t,e,n){if(!e)return n?bs(t,"style"):e;const i=t.style;if(typeof e=="string")return i.cssText=e;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),e||(e={});let s,r;for(r in n)e[r]==null&&i.removeProperty(r),delete n[r];for(r in e)s=e[r],s!==n[r]&&(i.setProperty(r,s),n[r]=s);return n}function Mu(t,e={},n,i){const s={};return i||tt(()=>s.children=Pt(t,e.children,s.children)),tt(()=>e.ref&&e.ref(t)),tt(()=>Ho(t,e,n,!0,s,!0)),s}function Et(t,e,n,i){if(n!==void 0&&!i&&(i=[]),typeof e!="function")return Pt(t,e,i,n);tt(s=>Pt(t,e(),s,n),i)}function Ho(t,e,n,i,s={},r=!1){e||(e={});for(const o in s)if(!(o in e)){if(o==="children")continue;s[o]=Ii(t,o,null,s[o],n,r)}for(const o in e){if(o==="children"){i||Pt(t,e.children);continue}const a=e[o];s[o]=Ii(t,o,a,s[o],n,r)}}function Vo(t){return t.toLowerCase().replace(/-([a-z])/g,(e,n)=>n.toUpperCase())}function Ai(t,e,n){const i=e.trim().split(/\s+/);for(let s=0,r=i.length;s<r;s++)t.classList.toggle(i[s],n)}function Ii(t,e,n,i,s,r){let o,a,c;if(e==="style")return Uo(t,n,i);if(e==="classList")return Fo(t,n,i);if(n===i)return i;if(e==="ref")r||n(t);else if(e.slice(0,3)==="on:"){const l=e.slice(3);i&&t.removeEventListener(l,i),n&&t.addEventListener(l,n)}else if(e.slice(0,10)==="oncapture:"){const l=e.slice(10);i&&t.removeEventListener(l,i,!0),n&&t.addEventListener(l,n,!0)}else if(e.slice(0,2)==="on"){const l=e.slice(2).toLowerCase(),h=No.has(l);if(!h&&i){const u=Array.isArray(i)?i[0]:i;t.removeEventListener(l,u)}(h||n)&&(jo(t,l,n,h),h&&Es([l]))}else if((c=Lo.has(e))||!s&&(Ei[e]||(a=Po.has(e)))||(o=t.nodeName.includes("-")))e==="class"||e==="className"?As(t,n):o&&!a&&!c?t[Vo(e)]=n:t[Ei[e]||e]=n;else{const l=s&&e.indexOf(":")>-1&&xo[e.split(":")[0]];l?Bo(t,l,e,n):bs(t,ko[e]||e,n)}return n}function qo(t){const e=`$$${t.type}`;let n=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==n&&Object.defineProperty(t,"target",{configurable:!0,value:n}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return n||document}}),k.registry&&!k.done&&(k.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>{for(;i&&i.nodeType!==8&&i.nodeValue!=="pl-"+t;){let s=i.nextSibling;i.remove(),i=s}i&&i.remove()}));n;){const i=n[e];if(i&&!n.disabled){const s=n[`${e}Data`];if(s!==void 0?i.call(n,s,t):i.call(n,t),t.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Pt(t,e,n,i,s){for(k.context&&!n&&(n=[...t.childNodes]);typeof n=="function";)n=n();if(e===n)return n;const r=typeof e,o=i!==void 0;if(t=o&&n[0]&&n[0].parentNode||t,r==="string"||r==="number"){if(k.context)return n;if(r==="number"&&(e=e.toString()),o){let a=n[0];a&&a.nodeType===3?a.data=e:a=document.createTextNode(e),n=_t(t,n,i,a)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||r==="boolean"){if(k.context)return n;n=_t(t,n,i)}else{if(r==="function")return tt(()=>{let a=e();for(;typeof a=="function";)a=a();n=Pt(t,a,n,i)}),()=>n;if(Array.isArray(e)){const a=[],c=n&&Array.isArray(n);if(mn(a,e,n,s))return tt(()=>n=Pt(t,a,n,i,!0)),()=>n;if(k.context){if(!a.length)return n;for(let l=0;l<a.length;l++)if(a[l].parentNode)return n=a}if(a.length===0){if(n=_t(t,n,i),o)return n}else c?n.length===0?Ti(t,a,i):Mo(t,n,a):(n&&_t(t),Ti(t,a));n=a}else if(e instanceof Node){if(k.context&&e.parentNode)return n=o?[e]:e;if(Array.isArray(n)){if(o)return n=_t(t,n,i,e);_t(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}else console.warn("Unrecognized value. Skipped inserting",e)}return n}function mn(t,e,n,i){let s=!1;for(let r=0,o=e.length;r<o;r++){let a=e[r],c=n&&n[r];if(a instanceof Node)t.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))s=mn(t,a,c)||s;else if(typeof a=="function")if(i){for(;typeof a=="function";)a=a();s=mn(t,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||s}else t.push(a),s=!0;else{const l=String(a);l==="<!>"?c&&c.nodeType===8&&t.push(c):c&&c.nodeType===3?(c.data=l,t.push(c)):t.push(document.createTextNode(l))}}return s}function Ti(t,e,n=null){for(let i=0,s=e.length;i<s;i++)t.insertBefore(e[i],n)}function _t(t,e,n,i){if(n===void 0)return t.textContent="";const s=i||document.createTextNode("");if(e.length){let r=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(s!==a){const c=a.parentNode===t;!r&&!o?c?t.replaceChild(s,a):t.insertBefore(s,n):c&&a.remove()}else r=!0}}else t.insertBefore(s,n);return[s]}const zo=!1;/**
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
 */const Is=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Go=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ts={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let g=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(g=64)),i.push(n[h],n[u],n[g],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Is(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Go(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||u==null)throw new Ko;const g=r<<2|a>>4;if(i.push(g),l!==64){const p=a<<4&240|l>>2;if(i.push(p),u!==64){const w=l<<6&192|u;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ko extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wo=function(t){const e=Is(t);return Ts.encodeByteArray(e,!0)},Ss=function(t){return Wo(t).replace(/\./g,"")},Xo=function(t){try{return Ts.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jo=()=>Yo().__FIREBASE_DEFAULTS__,Qo=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zo=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xo(t[1]);return e&&JSON.parse(e)},ta=()=>{try{return Jo()||Qo()||Zo()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ea=()=>{var t;return(t=ta())===null||t===void 0?void 0:t.config};/**
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
 */class na{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}function ia(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cs(){try{return typeof indexedDB=="object"}catch{return!1}}function _s(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function sa(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ra="FirebaseError";class at extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ra,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oe.prototype.create)}}class Oe{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?oa(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new at(s,a,i)}}function oa(t,e){return t.replace(aa,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const aa=/\{\$([^}]+)}/g;function yn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Si(r)&&Si(o)){if(!yn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Si(t){return t!==null&&typeof t=="object"}/**
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
 */const ca=1e3,la=2,ha=4*60*60*1e3,ua=.5;function Ci(t,e=ca,n=la){const i=e*Math.pow(n,t),s=Math.round(ua*i*(Math.random()-.5)*2);return Math.min(ha,i+s)}/**
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
 */function fa(t){return t&&t._delegate?t._delegate:t}class nt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pt="[DEFAULT]";/**
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
 */class da{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new na;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ga(e))try{this.getOrInitializeService({instanceIdentifier:pt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pt){return this.instances.has(e)}getOptions(e=pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:pa(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=pt){return this.component?this.component.multipleInstances?e:pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pa(t){return t===pt?void 0:t}function ga(t){return t.instantiationMode==="EAGER"}/**
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
 */class ma{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new da(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const ya={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},wa=b.INFO,va={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Ea=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=va[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jn{constructor(e){this.name=e,this._logLevel=wa,this._logHandler=Ea,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ya[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const ba=(t,e)=>e.some(n=>t instanceof n);let _i,Di;function Aa(){return _i||(_i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ia(){return Di||(Di=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ds=new WeakMap,wn=new WeakMap,Rs=new WeakMap,Qe=new WeakMap,Fn=new WeakMap;function Ta(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(st(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ds.set(n,t)}).catch(()=>{}),Fn.set(e,t),e}function Sa(t){if(wn.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});wn.set(t,e)}let vn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rs.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return st(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ca(t){vn=t(vn)}function _a(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ze(this),e,...n);return Rs.set(i,e.sort?e.sort():[e]),st(i)}:Ia().includes(t)?function(...e){return t.apply(Ze(this),e),st(Ds.get(this))}:function(...e){return st(t.apply(Ze(this),e))}}function Da(t){return typeof t=="function"?_a(t):(t instanceof IDBTransaction&&Sa(t),ba(t,Aa())?new Proxy(t,vn):t)}function st(t){if(t instanceof IDBRequest)return Ta(t);if(Qe.has(t))return Qe.get(t);const e=Da(t);return e!==t&&(Qe.set(t,e),Fn.set(e,t)),e}const Ze=t=>Fn.get(t);function Os(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=st(o);return i&&o.addEventListener("upgradeneeded",c=>{i(st(o.result),c.oldVersion,c.newVersion,st(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Ra=["get","getKey","getAll","getAllKeys","count"],Oa=["put","add","delete","clear"],tn=new Map;function Ri(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tn.get(e))return tn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Oa.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ra.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return tn.set(e,r),r}Ca(t=>({...t,get:(e,n,i)=>Ri(e,n)||t.get(e,n,i),has:(e,n)=>!!Ri(e,n)||t.has(e,n)}));/**
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
 */class Pa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(La(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function La(t){const e=t.getComponent();return e?.type==="VERSION"}const En="@firebase/app",Oi="0.9.5";/**
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
 */const It=new jn("@firebase/app"),ka="@firebase/app-compat",Na="@firebase/analytics-compat",xa="@firebase/analytics",Ma="@firebase/app-check-compat",$a="@firebase/app-check",Ba="@firebase/auth",ja="@firebase/auth-compat",Fa="@firebase/database",Ua="@firebase/database-compat",Ha="@firebase/functions",Va="@firebase/functions-compat",qa="@firebase/installations",za="@firebase/installations-compat",Ga="@firebase/messaging",Ka="@firebase/messaging-compat",Wa="@firebase/performance",Xa="@firebase/performance-compat",Ya="@firebase/remote-config",Ja="@firebase/remote-config-compat",Qa="@firebase/storage",Za="@firebase/storage-compat",tc="@firebase/firestore",ec="@firebase/firestore-compat",nc="firebase",ic="9.18.0";/**
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
 */const sc="[DEFAULT]",rc={[En]:"fire-core",[ka]:"fire-core-compat",[xa]:"fire-analytics",[Na]:"fire-analytics-compat",[$a]:"fire-app-check",[Ma]:"fire-app-check-compat",[Ba]:"fire-auth",[ja]:"fire-auth-compat",[Fa]:"fire-rtdb",[Ua]:"fire-rtdb-compat",[Ha]:"fire-fn",[Va]:"fire-fn-compat",[qa]:"fire-iid",[za]:"fire-iid-compat",[Ga]:"fire-fcm",[Ka]:"fire-fcm-compat",[Wa]:"fire-perf",[Xa]:"fire-perf-compat",[Ya]:"fire-rc",[Ja]:"fire-rc-compat",[Qa]:"fire-gcs",[Za]:"fire-gcs-compat",[tc]:"fire-fst",[ec]:"fire-fst-compat","fire-js":"fire-js",[nc]:"fire-js-all"};/**
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
 */const bn=new Map,An=new Map;function oc(t,e){try{t.container.addComponent(e)}catch(n){It.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rt(t){const e=t.name;if(An.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;An.set(e,t);for(const n of bn.values())oc(n,t);return!0}function Ps(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ac={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new Oe("app","Firebase",ac);/**
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
 */class cc{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
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
 */const lc=ic;function hc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:sc,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw bt.create("bad-app-name",{appName:String(s)});if(n||(n=ea()),!n)throw bt.create("no-options");const r=bn.get(s);if(r){if(yn(n,r.options)&&yn(i,r.config))return r;throw bt.create("duplicate-app",{appName:s})}const o=new ma(s);for(const c of An.values())o.addComponent(c);const a=new cc(n,i,o);return bn.set(s,a),a}function W(t,e,n){var i;let s=(i=rc[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),It.warn(a.join(" "));return}rt(new nt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const uc="firebase-heartbeat-database",fc=1,Vt="firebase-heartbeat-store";let en=null;function Ls(){return en||(en=Os(uc,fc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vt)}}}).catch(t=>{throw bt.create("idb-open",{originalErrorMessage:t.message})})),en}async function dc(t){try{return(await Ls()).transaction(Vt).objectStore(Vt).get(ks(t))}catch(e){if(e instanceof at)It.warn(e.message);else{const n=bt.create("idb-get",{originalErrorMessage:e?.message});It.warn(n.message)}}}async function Pi(t,e){try{const i=(await Ls()).transaction(Vt,"readwrite");return await i.objectStore(Vt).put(e,ks(t)),i.done}catch(n){if(n instanceof at)It.warn(n.message);else{const i=bt.create("idb-set",{originalErrorMessage:n?.message});It.warn(i.message)}}}function ks(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pc=1024,gc=30*24*60*60*1e3;class mc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wc(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Li();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=gc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Li(),{heartbeatsToSend:n,unsentEntries:i}=yc(this._heartbeatsCache.heartbeats),s=Ss(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Li(){return new Date().toISOString().substring(0,10)}function yc(t,e=pc){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ki(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ki(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class wc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cs()?_s().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ki(t){return Ss(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vc(t){rt(new nt("platform-logger",e=>new Pa(e),"PRIVATE")),rt(new nt("heartbeat",e=>new mc(e),"PRIVATE")),W(En,Oi,t),W(En,Oi,"esm2017"),W("fire-js","")}vc("");var Ec="firebase",bc="9.18.0";/**
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
 */W(Ec,bc,"app");const Ns="@firebase/installations",Un="0.6.4";/**
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
 */const xs=1e4,Ms=`w:${Un}`,$s="FIS_v2",Ac="https://firebaseinstallations.googleapis.com/v1",Ic=60*60*1e3,Tc="installations",Sc="Installations";/**
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
 */const Cc={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Tt=new Oe(Tc,Sc,Cc);function Bs(t){return t instanceof at&&t.code.includes("request-failed")}/**
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
 */function js({projectId:t}){return`${Ac}/projects/${t}/installations`}function Fs(t){return{token:t.token,requestStatus:2,expiresIn:Dc(t.expiresIn),creationTime:Date.now()}}async function Us(t,e){const i=(await e.json()).error;return Tt.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Hs({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _c(t,{refreshToken:e}){const n=Hs(t);return n.append("Authorization",Rc(e)),n}async function Vs(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Dc(t){return Number(t.replace("s","000"))}function Rc(t){return`${$s} ${t}`}/**
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
 */async function Oc({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=js(t),s=Hs(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:$s,appId:t.appId,sdkVersion:Ms},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Vs(()=>fetch(i,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Fs(l.authToken)}}else throw await Us("Create Installation",c)}/**
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
 */function qs(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Pc(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Lc=/^[cdef][\w-]{21}$/,In="";function kc(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Nc(t);return Lc.test(n)?n:In}catch{return In}}function Nc(t){return Pc(t).substr(0,22)}/**
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
 */function Pe(t){return`${t.appName}!${t.appId}`}/**
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
 */const zs=new Map;function Gs(t,e){const n=Pe(t);Ks(n,e),xc(n,e)}function Ks(t,e){const n=zs.get(t);if(n)for(const i of n)i(e)}function xc(t,e){const n=Mc();n&&n.postMessage({key:t,fid:e}),$c()}let gt=null;function Mc(){return!gt&&"BroadcastChannel"in self&&(gt=new BroadcastChannel("[Firebase] FID Change"),gt.onmessage=t=>{Ks(t.data.key,t.data.fid)}),gt}function $c(){zs.size===0&&gt&&(gt.close(),gt=null)}/**
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
 */const Bc="firebase-installations-database",jc=1,St="firebase-installations-store";let nn=null;function Hn(){return nn||(nn=Os(Bc,jc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(St)}}})),nn}async function we(t,e){const n=Pe(t),s=(await Hn()).transaction(St,"readwrite"),r=s.objectStore(St),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Gs(t,e.fid),e}async function Ws(t){const e=Pe(t),i=(await Hn()).transaction(St,"readwrite");await i.objectStore(St).delete(e),await i.done}async function Le(t,e){const n=Pe(t),s=(await Hn()).transaction(St,"readwrite"),r=s.objectStore(St),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Gs(t,a.fid),a}/**
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
 */async function Vn(t){let e;const n=await Le(t.appConfig,i=>{const s=Fc(i),r=Uc(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===In?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Fc(t){const e=t||{fid:kc(),registrationStatus:0};return Xs(e)}function Uc(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Tt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Hc(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Vc(t)}:{installationEntry:e}}async function Hc(t,e){try{const n=await Oc(t,e);return we(t.appConfig,n)}catch(n){throw Bs(n)&&n.customData.serverCode===409?await Ws(t.appConfig):await we(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Vc(t){let e=await Ni(t.appConfig);for(;e.registrationStatus===1;)await qs(100),e=await Ni(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Vn(t);return i||n}return e}function Ni(t){return Le(t,e=>{if(!e)throw Tt.create("installation-not-found");return Xs(e)})}function Xs(t){return qc(t)?{fid:t.fid,registrationStatus:0}:t}function qc(t){return t.registrationStatus===1&&t.registrationTime+xs<Date.now()}/**
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
 */async function zc({appConfig:t,heartbeatServiceProvider:e},n){const i=Gc(t,n),s=_c(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Ms,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Vs(()=>fetch(i,a));if(c.ok){const l=await c.json();return Fs(l)}else throw await Us("Generate Auth Token",c)}function Gc(t,{fid:e}){return`${js(t)}/${e}/authTokens:generate`}/**
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
 */async function qn(t,e=!1){let n;const i=await Le(t.appConfig,r=>{if(!Ys(r))throw Tt.create("not-registered");const o=r.authToken;if(!e&&Xc(o))return r;if(o.requestStatus===1)return n=Kc(t,e),r;{if(!navigator.onLine)throw Tt.create("app-offline");const a=Jc(r);return n=Wc(t,a),a}});return n?await n:i.authToken}async function Kc(t,e){let n=await xi(t.appConfig);for(;n.authToken.requestStatus===1;)await qs(100),n=await xi(t.appConfig);const i=n.authToken;return i.requestStatus===0?qn(t,e):i}function xi(t){return Le(t,e=>{if(!Ys(e))throw Tt.create("not-registered");const n=e.authToken;return Qc(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Wc(t,e){try{const n=await zc(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await we(t.appConfig,i),n}catch(n){if(Bs(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ws(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await we(t.appConfig,i)}throw n}}function Ys(t){return t!==void 0&&t.registrationStatus===2}function Xc(t){return t.requestStatus===2&&!Yc(t)}function Yc(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ic}function Jc(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Qc(t){return t.requestStatus===1&&t.requestTime+xs<Date.now()}/**
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
 */async function Zc(t){const e=t,{installationEntry:n,registrationPromise:i}=await Vn(e);return i?i.catch(console.error):qn(e).catch(console.error),n.fid}/**
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
 */async function tl(t,e=!1){const n=t;return await el(n),(await qn(n,e)).token}async function el(t){const{registrationPromise:e}=await Vn(t);e&&await e}/**
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
 */function nl(t){if(!t||!t.options)throw sn("App Configuration");if(!t.name)throw sn("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw sn(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function sn(t){return Tt.create("missing-app-config-values",{valueName:t})}/**
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
 */const Js="installations",il="installations-internal",sl=t=>{const e=t.getProvider("app").getImmediate(),n=nl(e),i=Ps(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},rl=t=>{const e=t.getProvider("app").getImmediate(),n=Ps(e,Js).getImmediate();return{getId:()=>Zc(n),getToken:s=>tl(n,s)}};function ol(){rt(new nt(Js,sl,"PUBLIC")),rt(new nt(il,rl,"PRIVATE"))}ol();W(Ns,Un);W(Ns,Un,"esm2017");/**
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
 */const Mi="analytics",al="firebase_id",cl="origin",ll=60*1e3,hl="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qs="https://www.googletagmanager.com/gtag/js";/**
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
 */const U=new jn("@firebase/analytics");/**
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
 */function Zs(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ul(t,e){const n=document.createElement("script");n.src=`${Qs}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function fl(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function dl(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const c=(await Zs(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){U.error(a)}t("config",s,r)}async function pl(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Zs(n);for(const c of o){const l=a.find(u=>u.measurementId===c),h=l&&e[l.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){U.error(r)}}function gl(t,e,n,i){async function s(r,o,a){try{r==="event"?await pl(t,e,n,o,a):r==="config"?await dl(t,e,n,i,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(c){U.error(c)}}return s}function ml(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=gl(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function yl(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Qs)&&n.src.includes(t))return n;return null}/**
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
 */const wl={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},q=new Oe("analytics","Analytics",wl);/**
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
 */const vl=30,El=1e3;class bl{constructor(e={},n=El){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tr=new bl;function Al(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Il(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Al(i)},r=hl.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw q.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Tl(t,e=tr,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw q.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw q.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new _l;return setTimeout(async()=>{a.abort()},n!==void 0?n:ll),er({appId:i,apiKey:s,measurementId:r},o,a,e)}async function er(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=tr){var r;const{appId:o,measurementId:a}=t;try{await Sl(i,e)}catch(c){if(a)return U.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Il(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Cl(l)){if(s.deleteThrottleMetadata(o),a)return U.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:a};throw c}const h=Number((r=l?.customData)===null||r===void 0?void 0:r.httpStatus)===503?Ci(n,s.intervalMillis,vl):Ci(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(o,u),U.debug(`Calling attemptFetch again in ${h} millis`),er(t,u,i,s)}}function Sl(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(q.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Cl(t){if(!(t instanceof at)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class _l{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Dl(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
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
 */async function Rl(){if(Cs())try{await _s()}catch(t){return U.warn(q.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return U.warn(q.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ol(t,e,n,i,s,r,o){var a;const c=Tl(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&U.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>U.error(p)),e.push(c);const l=Rl().then(p=>{if(p)return i.getId()}),[h,u]=await Promise.all([c,l]);yl(r)||ul(r,h.measurementId),s("js",new Date);const g=(a=o?.config)!==null&&a!==void 0?a:{};return g[cl]="firebase",g.update=!0,u!=null&&(g[al]=u),s("config",h.measurementId,g),h.measurementId}/**
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
 */class Pl{constructor(e){this.app=e}_delete(){return delete Ft[this.app.options.appId],Promise.resolve()}}let Ft={},$i=[];const Bi={};let rn="dataLayer",Ll="gtag",ji,nr,Fi=!1;function kl(){const t=[];if(ia()&&t.push("This is a browser extension environment."),sa()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=q.create("invalid-analytics-context",{errorInfo:e});U.warn(n.message)}}function Nl(t,e,n){kl();const i=t.options.appId;if(!i)throw q.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)U.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw q.create("no-api-key");if(Ft[i]!=null)throw q.create("already-exists",{id:i});if(!Fi){fl(rn);const{wrappedGtag:r,gtagCore:o}=ml(Ft,$i,Bi,rn,Ll);nr=r,ji=o,Fi=!0}return Ft[i]=Ol(t,$i,Bi,e,ji,rn,n),new Pl(t)}function xl(t,e,n,i){t=fa(t),Dl(nr,Ft[t.app.options.appId],e,n,i).catch(s=>U.error(s))}const Ui="@firebase/analytics",Hi="0.9.4";function Ml(){rt(new nt(Mi,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Nl(i,s,n)},"PUBLIC")),rt(new nt("analytics-internal",t,"PRIVATE")),W(Ui,Hi),W(Ui,Hi,"esm2017");function t(e){try{const n=e.getProvider(Mi).getImmediate();return{logEvent:(i,s,r)=>xl(n,i,s,r)}}catch(n){throw q.create("interop-component-reg-failed",{reason:n})}}}Ml();const $l={apiKey:"AIzaSyDFtgfMl8p0bM2gbRhGRdio6gFyTWH187U",authDomain:"letrasdecadiz-45d5b.firebaseapp.com",projectId:"letrasdecadiz-45d5b",storageBucket:"letrasdecadiz-45d5b.appspot.com",messagingSenderId:"746443805130",appId:"1:746443805130:web:e385058c93559438d17f33",measurementId:"G-ZCB6PD5CTR"};hc($l);const Bl=firebase.firestore();Bl.collection("agrupaciones");const jl="modulepreload",Fl=function(t){return"/"+t},Vi={},qi=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Fl(r),r in Vi)return;Vi[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let h=s.length-1;h>=0;h--){const u=s[h];if(u.href===r&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":jl,o||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),o)return new Promise((h,u)=>{l.addEventListener("load",h),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Ul="_App_2f7ub_1",Hl="_link_2f7ub_10",Vl={App:Ul,"parent-App":"_parent-App_2f7ub_6",link:Hl};const ql=Qt('<ul><li><a href="#">Inicio</a></li><li><a href="#">Explorar</a></li><li><a href="#">Top Canciones</a></li><li><a href="#">Top Artistas</a></li><li><a href="#">Top Letras</a></li></ul>',22),zl=Qt('<div class="based-icon"></div>',2),Gl=Qt("<nav></nav>",2);function zi(t){const{backcolor:e,iconbuild:n}=t;return console.log(Boolean(n)),(()=>{const i=Gl.cloneNode(!0);return i.style.setProperty("background-color",e),Et(i,D(ye,{get when(){return!Boolean(n)},get children(){return ql.cloneNode(!0)}}),null),Et(i,D(ye,{get when(){return Boolean(n)},get children(){return zl.cloneNode(!0)}}),null),i})()}const Kl=Qt('<div class="aporte"><button class="button-aporte"></button></div>',4);function $u(t){const{colors:e,namelink:n,linksection:i}={...t},[s,r]=[...e],o=a=>{window.location.href="/verify"};return(()=>{const a=Kl.cloneNode(!0),c=a.firstChild;return a.style.setProperty("background-color",s),c.$$click=o,c.style.setProperty("background-color",r),c.style.setProperty("color",s),Et(c,n),a})()}Es(["click"]);function Wl(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}function Xl([t,e],n,i){return[n?()=>n(t()):t,i?s=>e(i(s)):e]}function Yl(t){try{return document.querySelector(t)}catch{return null}}function Jl(t,e){const n=Yl(`#${t}`);n?n.scrollIntoView():e&&window.scrollTo(0,0)}function Ql(t,e,n,i){let s=!1;const r=a=>typeof a=="string"?{value:a}:a,o=Xl(K(r(t()),{equals:(a,c)=>a.value===c.value}),void 0,a=>(!s&&e(a),a));return n&&us(n((a=t())=>{s=!0,o[1](r(a)),s=!1})),{signal:o,utils:i}}function Zl(t){if(t){if(Array.isArray(t))return{signal:t}}else return{signal:K({value:""})};return t}function th(){return Ql(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:t,replace:e,scroll:n,state:i})=>{e?window.history.replaceState(i,"",t):window.history.pushState(i,"",t),Jl(window.location.hash.slice(1),n)},t=>Wl(window,"popstate",()=>t()),{go:t=>window.history.go(t)})}const eh=/^(?:[a-z0-9]+:)?\/\//i,nh=/^\/+|\/+$/g;function Ut(t,e=!1){const n=t.replace(nh,"");return n?e||/^[?#]/.test(n)?n:"/"+n:""}function de(t,e,n){if(eh.test(e))return;const i=Ut(t),s=n&&Ut(n);let r="";return!s||e.startsWith("/")?r=i:s.toLowerCase().indexOf(i.toLowerCase())!==0?r=i+s:r=s,(r||"/")+Ut(e,!r)}function ih(t,e){if(t==null)throw new Error(e);return t}function ir(t,e){return Ut(t).replace(/\/*(\*.*)?$/g,"")+Ut(e)}function sh(t){const e={};return t.searchParams.forEach((n,i)=>{e[i]=n}),e}function Rt(t,e){return decodeURIComponent(e?t.replace(/\+/g," "):t)}function rh(t,e){const[n,i]=t.split("/*",2),s=n.split("/").filter(Boolean),r=s.length;return o=>{const a=o.split("/").filter(Boolean),c=a.length-r;if(c<0||c>0&&i===void 0&&!e)return null;const l={path:r?"":"/",params:{}};for(let h=0;h<r;h++){const u=s[h],g=a[h];if(u[0]===":")l.params[u.slice(1)]=g;else if(u.localeCompare(g,void 0,{sensitivity:"base"})!==0)return null;l.path+=`/${g}`}return i&&(l.params[i]=c?a.slice(-c).join("/"):""),l}}function oh(t){const[e,n]=t.pattern.split("/*",2),i=e.split("/").filter(Boolean);return i.reduce((s,r)=>s+(r.startsWith(":")?2:3),i.length-(n===void 0?0:1))}function sr(t){const e=new Map,n=Eo();return new Proxy({},{get(i,s){return e.has(s)||bo(n,()=>e.set(s,O(()=>t()[s]))),e.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(t())}})}function rr(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let n=t.slice(0,e.index),i=t.slice(e.index+e[0].length);const s=[n,n+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(i);)s.push(n+=e[1]),i=i.slice(e[0].length);return rr(i).reduce((r,o)=>[...r,...s.map(a=>a+o)],[])}const ah=100,or=fs(),ke=fs(),ar=()=>ih(xn(or),"Make sure your app is wrapped in a <Router />");let qt;const cr=()=>qt||xn(ke)||ar().base;function ch(t,e="",n){const{component:i,data:s,children:r}=t,o=!r||Array.isArray(r)&&!r.length,a={key:t,element:i?()=>D(i,{}):()=>{const{element:c}=t;return c===void 0&&n?D(n,{}):c},preload:t.component?i.preload:t.preload,data:s};return lr(t.path).reduce((c,l)=>{for(const h of rr(l)){const u=ir(e,h),g=o?u:u.split("/*",1)[0];c.push({...a,originalPath:h,pattern:g,matcher:rh(g,!o)})}return c},[])}function lh(t,e=0){return{routes:t,score:oh(t[t.length-1])*1e4-e,matcher(n){const i=[];for(let s=t.length-1;s>=0;s--){const r=t[s],o=r.matcher(n);if(!o)return null;i.unshift({...o,route:r})}return i}}}function lr(t){return Array.isArray(t)?t:[t]}function hr(t,e="",n,i=[],s=[]){const r=lr(t);for(let o=0,a=r.length;o<a;o++){const c=r[o];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const l=ch(c,e,n);for(const h of l){if(i.push(h),c.children)hr(c.children,h.pattern,n,i,s);else{const u=lh([...i],s.length);s.push(u)}i.pop()}}}return i.length?s:s.sort((o,a)=>a.score-o.score)}function hh(t,e){for(let n=0,i=t.length;n<i;n++){const s=t[n].matcher(e);if(s)return s}return[]}function uh(t,e){const n=new URL("http://sar"),i=O(c=>{const l=t();try{return new URL(l,n)}catch{return console.error(`Invalid path ${l}`),c}},n,{equals:(c,l)=>c.href===l.href}),s=O(()=>Rt(i().pathname)),r=O(()=>Rt(i().search,!0)),o=O(()=>Rt(i().hash)),a=O(()=>"");return{get pathname(){return s()},get search(){return r()},get hash(){return o()},get state(){return e()},get key(){return a()},query:sr(hs(r,()=>sh(i())))}}function fh(t,e="",n,i){const{signal:[s,r],utils:o={}}=Zl(t),a=o.parsePath||(I=>I),c=o.renderPath||(I=>I),l=de("",e),h=void 0;if(l===void 0)throw new Error(`${l} is not a valid base path`);l&&!s().value&&r({value:l,replace:!0,scroll:!1});const[u,g]=Io(),[p,w]=K(s().value),[j,ht]=K(s().state),Ct=uh(p,j),J=[],Q={pattern:l,params:{},path:()=>l,outlet:()=>null,resolvePath(I){return de(l,I)}};if(n)try{qt=Q,Q.data=n({data:void 0,params:{},location:Ct,navigate:ut(Q)})}finally{qt=void 0}function xt(I,S,m){z(()=>{if(typeof S=="number"){S&&(o.go?o.go(S):console.warn("Router integration does not support relative routing"));return}const{replace:v,resolve:C,scroll:V,state:ae}={replace:!1,resolve:!0,scroll:!0,...m},ft=C?I.resolvePath(S):de("",S);if(ft===void 0)throw new Error(`Path '${S}' is not a routable path`);if(J.length>=ah)throw new Error("Too many redirects");const dt=p();if((ft!==dt||ae!==j())&&!zo){const Mt=J.push({value:dt,replace:v,scroll:V,state:j()});g(()=>{w(ft),ht(ae)}).then(()=>{J.length===Mt&&Xe({value:ft,state:ae})})}})}function ut(I){return I=I||xn(ke)||Q,(S,m)=>xt(I,S,m)}function Xe(I){const S=J[0];S&&((I.value!==S.value||I.state!==S.state)&&r({...I,replace:S.replace,scroll:S.scroll}),J.length=0)}tt(()=>{const{value:I,state:S}=s();z(()=>{I!==p()&&g(()=>{w(I),ht(S)})})});{let I=function(m){return m.namespaceURI==="http://www.w3.org/2000/svg"},S=function(m){if(m.defaultPrevented||m.button!==0||m.metaKey||m.altKey||m.ctrlKey||m.shiftKey)return;const v=m.composedPath().find(yi=>yi instanceof Node&&yi.nodeName.toUpperCase()==="A");if(!v)return;const C=I(v),V=C?v.href.baseVal:v.href;if((C?v.target.baseVal:v.target)||!V&&!v.hasAttribute("state"))return;const ft=(v.getAttribute("rel")||"").split(/\s+/);if(v.hasAttribute("download")||ft&&ft.includes("external"))return;const dt=C?new URL(V,document.baseURI):new URL(V),Mt=Rt(dt.pathname);if(dt.origin!==window.location.origin||l&&Mt&&!Mt.toLowerCase().startsWith(l.toLowerCase()))return;const go=a(Mt+Rt(dt.search,!0)+Rt(dt.hash)),mi=v.getAttribute("state");m.preventDefault(),xt(Q,go,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:mi&&JSON.parse(mi)})};document.addEventListener("click",S),us(()=>document.removeEventListener("click",S))}return{base:Q,out:h,location:Ct,isRouting:u,renderPath:c,parsePath:a,navigatorFactory:ut}}function dh(t,e,n,i){const{base:s,location:r,navigatorFactory:o}=t,{pattern:a,element:c,preload:l,data:h}=i().route,u=O(()=>i().path),g=sr(()=>i().params);l&&l();const p={parent:e,pattern:a,get child(){return n()},path:u,params:g,data:e.data,outlet:c,resolvePath(w){return de(s.path(),w,u())}};if(h)try{qt=p,p.data=h({data:e.data,params:g,location:r,navigate:o(p)})}finally{qt=void 0}return p}const ph=t=>{const{source:e,url:n,base:i,data:s,out:r}=t,o=e||th(),a=fh(o,i,s);return D(or.Provider,{value:a,get children(){return t.children}})},gh=t=>{const e=ar(),n=cr(),i=Mn(()=>t.children),s=O(()=>hr(i(),ir(n.pattern,t.base||""),mh)),r=O(()=>hh(s(),e.location.pathname));e.out&&e.out.matches.push(r().map(({route:l,path:h,params:u})=>({originalPath:l.originalPath,pattern:l.pattern,path:h,params:u})));const o=[];let a;const c=O(hs(r,(l,h,u)=>{let g=h&&l.length===h.length;const p=[];for(let w=0,j=l.length;w<j;w++){const ht=h&&h[w],Ct=l[w];u&&ht&&Ct.route.key===ht.route.key?p[w]=u[w]:(g=!1,o[w]&&o[w](),ls(J=>{o[w]=J,p[w]=dh(e,p[w-1]||n,()=>c()[w+1],()=>r()[w])}))}return o.splice(l.length).forEach(w=>w()),u&&g?u:(a=p[0],p)}));return D(ye,{get when(){return c()&&a},children:l=>D(ke.Provider,{value:l,get children(){return l.outlet()}})})},Gi=t=>{const e=Mn(()=>t.children);return Ro(t,{get children(){return e()}})},mh=()=>{const t=cr();return D(ye,{get when(){return t.child},children:e=>D(ke.Provider,{value:e,get children(){return e.outlet()}})})};var yh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f,zn=zn||{},d=yh||self;function ve(){}function Ne(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wh(t){return Object.prototype.hasOwnProperty.call(t,on)&&t[on]||(t[on]=++vh)}var on="closure_uid_"+(1e9*Math.random()>>>0),vh=0;function Eh(t,e,n){return t.call.apply(t.bind,arguments)}function bh(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function x(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?x=Eh:x=bh,x.apply(null,arguments)}function he(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function L(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function ct(){this.s=this.s,this.o=this.o}var Ah=0;ct.prototype.s=!1;ct.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ah!=0)&&wh(this)};ct.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ur=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gn(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ki(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Ne(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function M(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}M.prototype.h=function(){this.defaultPrevented=!0};var Ih=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{d.addEventListener("test",ve,e),d.removeEventListener("test",ve,e)}catch{}return t}();function Ee(t){return/^[\s\xa0]*$/.test(t)}var Wi=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function an(t,e){return t<e?-1:t>e?1:0}function xe(){var t=d.navigator;return t&&(t=t.userAgent)?t:""}function G(t){return xe().indexOf(t)!=-1}function Kn(t){return Kn[" "](t),t}Kn[" "]=ve;function Th(t){var e=_h;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Sh=G("Opera"),zt=G("Trident")||G("MSIE"),fr=G("Edge"),Tn=fr||zt,dr=G("Gecko")&&!(xe().toLowerCase().indexOf("webkit")!=-1&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),Ch=xe().toLowerCase().indexOf("webkit")!=-1&&!G("Edge");function pr(){var t=d.document;return t?t.documentMode:void 0}var Sn;t:{var cn="",ln=function(){var t=xe();if(dr)return/rv:([^\);]+)(\)|;)/.exec(t);if(fr)return/Edge\/([\d\.]+)/.exec(t);if(zt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ch)return/WebKit\/(\S+)/.exec(t);if(Sh)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ln&&(cn=ln?ln[1]:""),zt){var hn=pr();if(hn!=null&&hn>parseFloat(cn)){Sn=String(hn);break t}}Sn=cn}var _h={};function Dh(){return Th(function(){let t=0;const e=Wi(String(Sn)).split("."),n=Wi("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=an(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||an(s[2].length==0,r[2].length==0)||an(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}d.document&&zt&&pr();function Gt(t,e){if(M.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dr){t:{try{Kn(e.nodeName);var s=!0;break t}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Rh[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Gt.X.h.call(this)}}L(Gt,M);var Rh={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),Oh=0;function Ph(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++Oh,this.ba=this.ea=!1}function Me(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Wn(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function gr(t){const e={};for(const n in t)e[n]=t[n];return e}const Xi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mr(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Xi.length;r++)n=Xi[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function $e(t){this.src=t,this.g={},this.h=0}$e.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=_n(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Ph(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function Cn(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=ur(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Me(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _n(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Xn="closure_lm_"+(1e6*Math.random()|0),un={};function yr(t,e,n,i,s){if(i&&i.once)return vr(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)yr(t,e[r],n,i,s);return null}return n=Qn(n),t&&t[te]?t.N(e,n,Zt(i)?!!i.capture:!!i,s):wr(t,e,n,!1,i,s)}function wr(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Zt(s)?!!s.capture:!!s,a=Jn(t);if(a||(t[Xn]=a=new $e(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=Lh(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Ih||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(br(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Lh(){function t(n){return e.call(t.src,t.listener,n)}const e=kh;return t}function vr(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)vr(t,e[r],n,i,s);return null}return n=Qn(n),t&&t[te]?t.O(e,n,Zt(i)?!!i.capture:!!i,s):wr(t,e,n,!0,i,s)}function Er(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Er(t,e[r],n,i,s);else i=Zt(i)?!!i.capture:!!i,n=Qn(n),t&&t[te]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=_n(r,n,i,s),-1<n&&(Me(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Jn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_n(e,n,i,s)),(n=-1<t?e[t]:null)&&Yn(n))}function Yn(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[te])Cn(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(br(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Jn(e))?(Cn(n,t),n.h==0&&(n.src=null,e[Xn]=null)):Me(t)}}}function br(t){return t in un?un[t]:un[t]="on"+t}function kh(t,e){if(t.ba)t=!0;else{e=new Gt(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Yn(t),t=n.call(i,e)}return t}function Jn(t){return t=t[Xn],t instanceof $e?t:null}var fn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qn(t){return typeof t=="function"?t:(t[fn]||(t[fn]=function(e){return t.handleEvent(e)}),t[fn])}function R(){ct.call(this),this.i=new $e(this),this.P=this,this.I=null}L(R,ct);R.prototype[te]=!0;R.prototype.removeEventListener=function(t,e,n,i){Er(this,t,e,n,i)};function P(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new M(e,t);else if(e instanceof M)e.target=e.target||t;else{var s=e;e=new M(i,t),mr(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=ue(o,i,!0,e)&&s}if(o=e.g=t,s=ue(o,i,!0,e)&&s,s=ue(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=ue(o,i,!1,e)&&s}R.prototype.M=function(){if(R.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Me(n[i]);delete t.g[e],t.h--}}this.I=null};R.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};R.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function ue(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Cn(t.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var Zn=d.JSON.stringify;function Nh(){var t=Tr;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xh{constructor(){this.h=this.g=null}add(e,n){const i=Ar.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Ar=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Mh,t=>t.reset());class Mh{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $h(t){d.setTimeout(()=>{throw t},0)}function Ir(t,e){Dn||Bh(),Rn||(Dn(),Rn=!0),Tr.add(t,e)}var Dn;function Bh(){var t=d.Promise.resolve(void 0);Dn=function(){t.then(jh)}}var Rn=!1,Tr=new xh;function jh(){for(var t;t=Nh();){try{t.h.call(t.g)}catch(n){$h(n)}var e=Ar;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rn=!1}function Be(t,e){R.call(this),this.h=t||1,this.g=e||d,this.j=x(this.lb,this),this.l=Date.now()}L(Be,R);f=Be.prototype;f.ca=!1;f.R=null;f.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),P(this,"tick"),this.ca&&(ti(this),this.start()))}};f.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ti(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}f.M=function(){Be.X.M.call(this),ti(this),delete this.g};function ei(t,e,n){if(typeof t=="function")n&&(t=x(t,n));else if(t&&typeof t.handleEvent=="function")t=x(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:d.setTimeout(t,e||0)}function Sr(t){t.g=ei(()=>{t.g=null,t.i&&(t.i=!1,Sr(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Fh extends ct{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sr(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kt(t){ct.call(this),this.h=t,this.g={}}L(Kt,ct);var Yi=[];function Cr(t,e,n,i){Array.isArray(n)||(n&&(Yi[0]=n.toString()),n=Yi);for(var s=0;s<n.length;s++){var r=yr(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function _r(t){Wn(t.g,function(e,n){this.g.hasOwnProperty(n)&&Yn(e)},t),t.g={}}Kt.prototype.M=function(){Kt.X.M.call(this),_r(this)};Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function je(){this.g=!0}je.prototype.Aa=function(){this.g=!1};function Uh(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var h=l[0];l=l[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Hh(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Dt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qh(t,n)+(i?" "+i:"")})}function Vh(t,e){t.info(function(){return"TIMEOUT: "+e})}je.prototype.info=function(){};function qh(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Zn(n)}catch{return e}}var Lt={},Ji=null;function ni(){return Ji=Ji||new R}Lt.Pa="serverreachability";function Dr(t){M.call(this,Lt.Pa,t)}L(Dr,M);function Wt(t){const e=ni();P(e,new Dr(e))}Lt.STAT_EVENT="statevent";function Rr(t,e){M.call(this,Lt.STAT_EVENT,t),this.stat=e}L(Rr,M);function $(t){const e=ni();P(e,new Rr(e,t))}Lt.Qa="timingevent";function Or(t,e){M.call(this,Lt.Qa,t),this.size=e}L(Or,M);function ee(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){t()},e)}var ii={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},zh={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function si(){}si.prototype.h=null;function Qi(t){return t.h||(t.h=t.i())}function Gh(){}var ne={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ri(){M.call(this,"d")}L(ri,M);function oi(){M.call(this,"c")}L(oi,M);var On;function Fe(){}L(Fe,si);Fe.prototype.g=function(){return new XMLHttpRequest};Fe.prototype.i=function(){return{}};On=new Fe;function ie(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Kt(this),this.O=Kh,t=Tn?125:void 0,this.T=new Be(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Pr}function Pr(){this.i=null,this.g="",this.h=!1}var Kh=45e3,Pn={},be={};f=ie.prototype;f.setTimeout=function(t){this.O=t};function Ln(t,e,n){t.K=1,t.v=He(it(e)),t.s=n,t.P=!0,Lr(t,null)}function Lr(t,e){t.F=Date.now(),se(t),t.A=it(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Fr(n.i,"t",i),t.C=0,n=t.l.H,t.h=new Pr,t.g=ao(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Fh(x(t.La,t,t.g),t.N)),Cr(t.S,t.g,"readystatechange",t.ib),e=t.H?gr(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Wt(),Uh(t.j,t.u,t.A,t.m,t.U,t.s)}f.ib=function(t){t=t.target;const e=this.L;e&&Z(t)==3?e.l():this.La(t)};f.La=function(t){try{if(t==this.g)t:{const h=Z(this.g);var e=this.g.Ea();const u=this.g.aa();if(!(3>h)&&(h!=3||Tn||this.g&&(this.h.h||this.g.fa()||ns(this.g)))){this.I||h!=4||e==7||(e==8||0>=u?Wt(3):Wt(2)),Ue(this);var n=this.g.aa();this.Y=n;e:if(kr(this)){var i=ns(this.g);t="";var s=i.length,r=Z(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mt(this),Ht(this);var o="";break e}this.h.i=new d.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Hh(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ee(a)){var l=a;break e}}l=null}if(n=l)Dt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,kn(this,n);else{this.i=!1,this.o=3,$(12),mt(this),Ht(this);break t}}this.P?(Nr(this,h,o),Tn&&this.i&&h==3&&(Cr(this.S,this.T,"tick",this.hb),this.T.start())):(Dt(this.j,this.m,o,null),kn(this,o)),h==4&&mt(this),this.i&&!this.I&&(h==4?io(this.l,this):(this.i=!1,se(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$(12)):(this.o=0,$(13)),mt(this),Ht(this)}}}catch{}finally{}};function kr(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Nr(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=Wh(t,n),s==be){e==4&&(t.o=4,$(14),i=!1),Dt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Pn){t.o=4,$(15),Dt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Dt(t.j,t.m,s,null),kn(t,s);kr(t)&&s!=be&&s!=Pn&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),di(e),e.K=!0,$(11))):(Dt(t.j,t.m,n,"[Invalid Chunked Response]"),mt(t),Ht(t))}f.hb=function(){if(this.g){var t=Z(this.g),e=this.g.fa();this.C<e.length&&(Ue(this),Nr(this,t,e),this.i&&t!=4&&se(this))}};function Wh(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?be:(n=Number(e.substring(n,i)),isNaN(n)?Pn:(i+=1,i+n>e.length?be:(e=e.substr(i,n),t.C=i+n,e)))}f.cancel=function(){this.I=!0,mt(this)};function se(t){t.V=Date.now()+t.O,xr(t,t.O)}function xr(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ee(x(t.gb,t),e)}function Ue(t){t.B&&(d.clearTimeout(t.B),t.B=null)}f.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Vh(this.j,this.A),this.K!=2&&(Wt(),$(17)),mt(this),this.o=2,Ht(this)):xr(this,this.V-t)};function Ht(t){t.l.G==0||t.I||io(t.l,t)}function mt(t){Ue(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ti(t.T),_r(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function kn(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Nn(n.h,t))){if(!t.J&&Nn(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Te(n),Ge(n);else break t;fi(n),$(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=ee(x(n.cb,n),6e3));if(1>=Vr(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else yt(n,11)}else if((t.J||n.g==t)&&Te(n),!Ee(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const h=l[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const u=l[4];u!=null&&(n.Ca=u,n.j.info("SVER="+n.Ca));const g=l[5];g!=null&&typeof g=="number"&&0<g&&(i=1.5*g,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const p=t.g;if(p){const w=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var r=i.h;r.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ai(r,r.h),r.h=null))}if(i.D){const j=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;j&&(i.za=j,T(i.F,i.D,j))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=oo(i,i.H?i.ka:null,i.V),o.J){qr(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Ue(a),se(a)),i.g=o}else eo(i);0<n.i.length&&Ke(n)}else l[0]!="stop"&&l[0]!="close"||yt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?yt(n,7):ui(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Wt(4)}catch{}}function Xh(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ne(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Yh(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ne(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Mr(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ne(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Yh(t),i=Xh(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var $r=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jh(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function At(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof At){this.h=e!==void 0?e:t.h,Ae(this,t.j),this.s=t.s,this.g=t.g,Ie(this,t.m),this.l=t.l,e=t.i;var n=new Xt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Zi(this,n),this.o=t.o}else t&&(n=String(t).match($r))?(this.h=!!e,Ae(this,n[1]||"",!0),this.s=Bt(n[2]||""),this.g=Bt(n[3]||"",!0),Ie(this,n[4]),this.l=Bt(n[5]||"",!0),Zi(this,n[6]||"",!0),this.o=Bt(n[7]||"")):(this.h=!!e,this.i=new Xt(null,this.h))}At.prototype.toString=function(){var t=[],e=this.j;e&&t.push(jt(e,ts,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(jt(e,ts,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(jt(n,n.charAt(0)=="/"?tu:Zh,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",jt(n,nu)),t.join("")};function it(t){return new At(t)}function Ae(t,e,n){t.j=n?Bt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ie(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zi(t,e,n){e instanceof Xt?(t.i=e,iu(t.i,t.h)):(n||(e=jt(e,eu)),t.i=new Xt(e,t.h))}function T(t,e,n){t.i.set(e,n)}function He(t){return T(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function jt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Qh),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Qh(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ts=/[#\/\?@]/g,Zh=/[#\?:]/g,tu=/[#\?]/g,eu=/[#\?@]/g,nu=/#/g;function Xt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function lt(t){t.g||(t.g=new Map,t.h=0,t.i&&Jh(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}f=Xt.prototype;f.add=function(t,e){lt(this),this.i=null,t=kt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Br(t,e){lt(t),e=kt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function jr(t,e){return lt(t),e=kt(t,e),t.g.has(e)}f.forEach=function(t,e){lt(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};f.oa=function(){lt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};f.W=function(t){lt(this);let e=[];if(typeof t=="string")jr(this,t)&&(e=e.concat(this.g.get(kt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};f.set=function(t,e){return lt(this),this.i=null,t=kt(this,t),jr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};f.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Fr(t,e,n){Br(t,e),0<n.length&&(t.i=null,t.g.set(kt(t,e),Gn(n)),t.h+=n.length)}f.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function kt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function iu(t,e){e&&!t.j&&(lt(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Br(this,i),Fr(this,s,n))},t)),t.j=e}var su=class{constructor(t,e){this.h=t,this.g=e}};function Ur(t){this.l=t||ru,d.PerformanceNavigationTiming?(t=d.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(d.g&&d.g.Ga&&d.g.Ga()&&d.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ru=10;function Hr(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vr(t){return t.h?1:t.g?t.g.size:0}function Nn(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ai(t,e){t.g?t.g.add(e):t.h=e}function qr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ur.prototype.cancel=function(){if(this.i=zr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zr(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Gn(t.i)}function ci(){}ci.prototype.stringify=function(t){return d.JSON.stringify(t,void 0)};ci.prototype.parse=function(t){return d.JSON.parse(t,void 0)};function ou(){this.g=new ci}function au(t,e,n){const i=n||"";try{Mr(t,function(s,r){let o=s;Zt(s)&&(o=Zn(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function cu(t,e){const n=new je;if(d.Image){const i=new Image;i.onload=he(fe,n,i,"TestLoadImage: loaded",!0,e),i.onerror=he(fe,n,i,"TestLoadImage: error",!1,e),i.onabort=he(fe,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=he(fe,n,i,"TestLoadImage: timeout",!1,e),d.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function fe(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Ve(t){this.l=t.ac||null,this.j=t.jb||!1}L(Ve,si);Ve.prototype.g=function(){return new qe(this.l,this.j)};Ve.prototype.i=function(t){return function(){return t}}({});function qe(t,e){R.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=li,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}L(qe,R);var li=0;f=qe.prototype;f.open=function(t,e){if(this.readyState!=li)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Yt(this)};f.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||d).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};f.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,re(this)),this.readyState=li};f.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yt(this)),this.g&&(this.readyState=3,Yt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gr(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Gr(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}f.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?re(this):Yt(this),this.readyState==3&&Gr(this)}};f.Va=function(t){this.g&&(this.response=this.responseText=t,re(this))};f.Ua=function(t){this.g&&(this.response=t,re(this))};f.ga=function(){this.g&&re(this)};function re(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yt(t)}f.setRequestHeader=function(t,e){this.v.append(t,e)};f.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};f.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Yt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qe.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lu=d.JSON.parse;function _(t){R.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Kr,this.K=this.L=!1}L(_,R);var Kr="",hu=/^https?$/i,uu=["POST","PUT"];f=_.prototype;f.Ka=function(t){this.L=t};f.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():On.g(),this.C=this.u?Qi(this.u):Qi(On),this.g.onreadystatechange=x(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){es(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=d.FormData&&t instanceof d.FormData,!(0<=ur(uu,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yr(this),0<this.B&&((this.K=fu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=x(this.qa,this)):this.A=ei(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){es(this,r)}};function fu(t){return zt&&Dh()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}f.qa=function(){typeof zn<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,P(this,"timeout"),this.abort(8))};function es(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wr(t),ze(t)}function Wr(t){t.D||(t.D=!0,P(t,"complete"),P(t,"error"))}f.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,P(this,"complete"),P(this,"abort"),ze(this))};f.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ze(this,!0)),_.X.M.call(this)};f.Ha=function(){this.s||(this.F||this.v||this.l?Xr(this):this.fb())};f.fb=function(){Xr(this)};function Xr(t){if(t.h&&typeof zn<"u"&&(!t.C[1]||Z(t)!=4||t.aa()!=2)){if(t.v&&Z(t)==4)ei(t.Ha,0,t);else if(P(t,"readystatechange"),Z(t)==4){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match($r)[1]||null;if(!s&&d.self&&d.self.location){var r=d.self.location.protocol;s=r.substr(0,r.length-1)}i=!hu.test(s?s.toLowerCase():"")}n=i}if(n)P(t,"complete"),P(t,"success");else{t.m=6;try{var o=2<Z(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Wr(t)}}finally{ze(t)}}}}function ze(t,e){if(t.g){Yr(t);const n=t.g,i=t.C[0]?ve:null;t.g=null,t.C=null,e||P(t,"ready");try{n.onreadystatechange=i}catch{}}}function Yr(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(d.clearTimeout(t.A),t.A=null)}function Z(t){return t.g?t.g.readyState:0}f.aa=function(){try{return 2<Z(this)?this.g.status:-1}catch{return-1}};f.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};f.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lu(e)}};function ns(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Kr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}f.Ea=function(){return this.m};f.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jr(t){let e="";return Wn(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function hi(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Jr(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):T(t,e,n))}function $t(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qr(t){this.Ca=0,this.i=[],this.j=new je,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=$t("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=$t("baseRetryDelayMs",5e3,t),this.bb=$t("retryDelaySeedMs",1e4,t),this.$a=$t("forwardChannelMaxRetries",2,t),this.ta=$t("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ur(t&&t.concurrentRequestLimit),this.Fa=new ou,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}f=Qr.prototype;f.ma=8;f.G=1;function ui(t){if(Zr(t),t.G==3){var e=t.U++,n=it(t.F);T(n,"SID",t.I),T(n,"RID",e),T(n,"TYPE","terminate"),oe(t,n),e=new ie(t,t.j,e,void 0),e.K=2,e.v=He(it(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(e.v.toString(),"")),!n&&d.Image&&(new Image().src=e.v,n=!0),n||(e.g=ao(e.l,null),e.g.da(e.v)),e.F=Date.now(),se(e)}ro(t)}function Ge(t){t.g&&(di(t),t.g.cancel(),t.g=null)}function Zr(t){Ge(t),t.u&&(d.clearTimeout(t.u),t.u=null),Te(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&d.clearTimeout(t.m),t.m=null)}function Ke(t){Hr(t.h)||t.m||(t.m=!0,Ir(t.Ja,t),t.C=0)}function du(t,e){return Vr(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ee(x(t.Ja,t,e),so(t,t.C)),t.C++,!0)}f.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new ie(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=gr(r),mr(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break t}if(e===4096||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=to(this,s,e),n=it(this.F),T(n,"RID",t),T(n,"CVER",22),this.D&&T(n,"X-HTTP-Session-Id",this.D),oe(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Jr(r)))+"&"+e:this.o&&hi(n,this.o,r)),ai(this.h,s),this.Ya&&T(n,"TYPE","init"),this.O?(T(n,"$req",e),T(n,"SID","null"),s.Z=!0,Ln(s,n,null)):Ln(s,n,e),this.G=2}}else this.G==3&&(t?is(this,t):this.i.length==0||Hr(this.h)||is(this))};function is(t,e){var n;e?n=e.m:n=t.U++;const i=it(t.F);T(i,"SID",t.I),T(i,"RID",n),T(i,"AID",t.T),oe(t,i),t.o&&t.s&&hi(i,t.o,t.s),n=new ie(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=to(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ai(t.h,n),Ln(n,i,e)}function oe(t,e){t.ia&&Wn(t.ia,function(n,i){T(e,i,n)}),t.l&&Mr({},function(n,i){T(e,i,n)})}function to(t,e,n){n=Math.min(t.i.length,n);var i=t.l?x(t.l.Ra,t.l,t):null;t:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const h=s[c].g;if(l-=r,0>l)r=Math.max(0,s[c].h-100),a=!1;else try{au(h,o,"req"+l+"_")}catch{i&&i(h)}}if(a){i=o.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function eo(t){t.g||t.u||(t.Z=1,Ir(t.Ia,t),t.A=0)}function fi(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ee(x(t.Ia,t),so(t,t.A)),t.A++,!0)}f.Ia=function(){if(this.u=null,no(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ee(x(this.eb,this),t)}};f.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,$(10),Ge(this),no(this))};function di(t){t.B!=null&&(d.clearTimeout(t.B),t.B=null)}function no(t){t.g=new ie(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=it(t.sa);T(e,"RID","rpc"),T(e,"SID",t.I),T(e,"CI",t.L?"0":"1"),T(e,"AID",t.T),T(e,"TYPE","xmlhttp"),oe(t,e),t.o&&t.s&&hi(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=He(it(e)),n.s=null,n.P=!0,Lr(n,t)}f.cb=function(){this.v!=null&&(this.v=null,Ge(this),fi(this),$(19))};function Te(t){t.v!=null&&(d.clearTimeout(t.v),t.v=null)}function io(t,e){var n=null;if(t.g==e){Te(t),di(t),t.g=null;var i=2}else if(Nn(t.h,e))n=e.D,qr(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=ni(),P(i,new Or(i,n)),Ke(t)}else eo(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&du(t,e)||i==2&&fi(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:yt(t,5);break;case 4:yt(t,10);break;case 3:yt(t,6);break;default:yt(t,2)}}}function so(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function yt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=x(t.kb,t);n||(n=new At("//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ae(n,"https"),He(n)),cu(n.toString(),i)}else $(2);t.G=0,t.l&&t.l.va(e),ro(t),Zr(t)}f.kb=function(t){t?(this.j.info("Successfully pinged google.com"),$(2)):(this.j.info("Failed to ping google.com"),$(1))};function ro(t){if(t.G=0,t.la=[],t.l){const e=zr(t.h);(e.length!=0||t.i.length!=0)&&(Ki(t.la,e),Ki(t.la,t.i),t.h.i.length=0,Gn(t.i),t.i.length=0),t.l.ua()}}function oo(t,e,n){var i=n instanceof At?it(n):new At(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Ie(i,i.m);else{var s=d.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new At(null,void 0);i&&Ae(r,i),e&&(r.g=e),s&&Ie(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&T(i,n,e),T(i,"VER",t.ma),oe(t,i),i}function ao(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new _(new Ve({jb:!0})):new _(t.ra),e.Ka(t.H),e}function co(){}f=co.prototype;f.xa=function(){};f.wa=function(){};f.va=function(){};f.ua=function(){};f.Ra=function(){};function H(t,e){R.call(this),this.g=new Qr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ee(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ee(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Nt(this)}L(H,R);H.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;$(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=oo(t,null,t.V),Ke(t)};H.prototype.close=function(){ui(this.g)};H.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zn(t),t=n);e.i.push(new su(e.ab++,t)),e.G==3&&Ke(e)};H.prototype.M=function(){this.g.l=null,delete this.j,ui(this.g),delete this.g,H.X.M.call(this)};function lo(t){ri.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}L(lo,ri);function ho(){oi.call(this),this.status=1}L(ho,oi);function Nt(t){this.g=t}L(Nt,co);Nt.prototype.xa=function(){P(this.g,"a")};Nt.prototype.wa=function(t){P(this.g,new lo(t))};Nt.prototype.va=function(t){P(this.g,new ho)};Nt.prototype.ua=function(){P(this.g,"b")};H.prototype.send=H.prototype.u;H.prototype.open=H.prototype.m;H.prototype.close=H.prototype.close;ii.NO_ERROR=0;ii.TIMEOUT=8;ii.HTTP_ERROR=6;zh.COMPLETE="complete";Gh.EventType=ne;ne.OPEN="a";ne.CLOSE="b";ne.ERROR="c";ne.MESSAGE="d";R.prototype.listen=R.prototype.N;_.prototype.listenOnce=_.prototype.O;_.prototype.getLastError=_.prototype.Oa;_.prototype.getLastErrorCode=_.prototype.Ea;_.prototype.getStatus=_.prototype.aa;_.prototype.getResponseJson=_.prototype.Sa;_.prototype.getResponseText=_.prototype.fa;_.prototype.send=_.prototype.da;_.prototype.setWithCredentials=_.prototype.Ka;const ss="@firebase/firestore";/**
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
 */class B{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}B.UNAUTHENTICATED=new B(null),B.GOOGLE_CREDENTIALS=new B("google-credentials-uid"),B.FIRST_PARTY=new B("first-party-uid"),B.MOCK_USER=new B("mock-user");/**
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
 */let We="9.18.0";/**
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
 */const Se=new jn("@firebase/firestore");function F(t,...e){if(Se.logLevel<=b.DEBUG){const n=e.map(uo);Se.debug(`Firestore (${We}): ${t}`,...n)}}function pi(t,...e){if(Se.logLevel<=b.ERROR){const n=e.map(uo);Se.error(`Firestore (${We}): ${t}`,...n)}}function uo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function fo(t="Unexpected state"){const e=`FIRESTORE (${We}) INTERNAL ASSERTION FAILED: `+t;throw pi(e),new Error(e)}function Ce(t,e){t||fo()}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends at{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ot{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class pu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(B.UNAUTHENTICATED))}shutdown(){}}class mu{constructor(e){this.t=e,this.currentUser=B.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ot,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ot)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ce(typeof i.accessToken=="string"),new pu(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new B(e)}}class yu{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=B.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ce(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class wu{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new yu(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(B.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Eu{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=r=>{r.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.A=n.token,new vu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function bu(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Au{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=bu(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function po(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Iu{constructor(e,n,i,s,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class _e{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _e("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _e&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var rs,y;(y=rs||(rs={}))[y.OK=0]="OK",y[y.CANCELLED=1]="CANCELLED",y[y.UNKNOWN=2]="UNKNOWN",y[y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",y[y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",y[y.NOT_FOUND=5]="NOT_FOUND",y[y.ALREADY_EXISTS=6]="ALREADY_EXISTS",y[y.PERMISSION_DENIED=7]="PERMISSION_DENIED",y[y.UNAUTHENTICATED=16]="UNAUTHENTICATED",y[y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",y[y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",y[y.ABORTED=10]="ABORTED",y[y.OUT_OF_RANGE=11]="OUT_OF_RANGE",y[y.UNIMPLEMENTED=12]="UNIMPLEMENTED",y[y.INTERNAL=13]="INTERNAL",y[y.UNAVAILABLE=14]="UNAVAILABLE",y[y.DATA_LOSS=15]="DATA_LOSS";function dn(){return typeof document<"u"?document:null}/**
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
 */class Tu{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=i,this.Io=s,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),i=Math.max(0,Date.now()-this.Ro),s=Math.max(0,n-i);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,s,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
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
 */class gi{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new gi(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Su(t,e){if(pi("AsyncQueue",`${e}: ${t}`),po(t))return new Y(X.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Cu{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=B.UNAUTHENTICATED,this.clientId=Au.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{F("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(F("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(X.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Su(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}const os=new Map;function _u(t,e,n,i){if(e===!0&&i===!0)throw new Y(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class as{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,_u("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Du{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new as({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new as(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gu;switch(n.type){case"gapi":const i=n.client;return new wu(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Y(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=os.get(e);n&&(F("ComponentProvider","Removing Datastore"),os.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Ru{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Tu(this,"async_queue_retry"),this.Hc=()=>{const n=dn();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=dn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=dn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Ot;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!po(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(i=>{this.Qc=i,this.jc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw pi("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.jc=!1,i))));return this.qc=n,n}enqueueAfterDelay(e,n,i){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const s=gi.createAndSchedule(this,e,n,i,r=>this.Xc(r));return this.Gc.push(s),s}Jc(){this.Qc&&fo()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class Ou extends Du{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Ru,this._persistenceKey=s?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pu(this),this._firestoreClient.terminate()}}function Pu(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new Iu(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Cu(t._authCredentials,t._appCheckCredentials,t._queue,i)}(function(t,e=!0){(function(n){We=n})(lc),rt(new nt("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Ou(new mu(n.getProvider("auth-internal")),new Eu(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Y(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _e(a.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),W(ss,"3.9.0",t),W(ss,"3.9.0","esm2017")})();const Lu=Qt("<div></div>",2);function ku(){const t=vi(()=>qi(()=>import("./Verify-c212faeb.js"),["assets/Verify-c212faeb.js","assets/Verify-572a745c.css"])),e=vi(()=>qi(()=>import("./Home-809e8e18.js"),[]));return(()=>{const n=Lu.cloneNode(!0);return Et(n,D(zi,{backcolor:"white",iconbuild:"true"}),null),Et(n,D(zi,{backcolor:"black"}),null),Et(n,D(ph,{get children(){return D(gh,{get children(){return[D(Gi,{path:"/",get element(){return D(e,{})}}),D(Gi,{path:"/verify",get element(){return D(t,{})}})]}})}}),null),tt(()=>As(n,Vl.App)),n})()}const Nu=document.getElementById("root");$o(()=>D(ku,{}),Nu);export{$u as S,zo as a,O as b,D as c,tt as d,bs as e,Uo as f,Et as i,Ro as m,Mu as s,Qt as t};
