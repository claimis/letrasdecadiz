(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const w={},se=(e,t)=>e===t,D=Symbol("solid-proxy"),I={equals:se};let le=Q;const A=1,L=2,W={owned:null,cleanups:null,context:null,owner:null};var y=null;let v=null,u=null,h=null,$=null,P=0;function oe(e,t){const n=u,i=y,s=e.length===0,l=s?W:{owned:null,cleanups:null,context:null,owner:t===void 0?i:t},r=s?e:()=>e(()=>O(()=>B(l)));y=l,u=null;try{return N(r,!0)}finally{u=n,y=i}}function m(e,t,n){const i=Y(e,t,!1,A);M(i)}function T(e,t,n){n=n?Object.assign({},I,n):I;const i=Y(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,M(i),re.bind(i)}function O(e){if(u===null)return e();const t=u;u=null;try{return e()}finally{u=t}}function re(){const e=v;if(this.sources&&(this.state||e))if(this.state===A||e)M(this);else{const t=h;h=null,N(()=>k(this),!1),h=t}if(u){const t=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(t)):(u.sources=[this],u.sourceSlots=[t]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function ce(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&N(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s],r=v&&v.running;r&&v.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?h.push(l):$.push(l),l.observers&&Z(l)),r||(l.state=A)}if(h.length>1e6)throw h=[],new Error},!1)),t}function M(e){if(!e.fn)return;B(e);const t=y,n=u,i=P;u=y=e,fe(e,e.value,i),u=n,y=t}function fe(e,t,n){let i;try{i=e.fn(t)}catch(s){return e.pure&&(e.state=A,e.owned&&e.owned.forEach(B),e.owned=null),e.updatedAt=n+1,ee(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ce(e,i):e.value=i,e.updatedAt=n)}function Y(e,t,n,i=A,s){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==W&&(y.owned?y.owned.push(l):y.owned=[l]),l}function J(e){const t=v;if(e.state===0||t)return;if(e.state===L||t)return k(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<P);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===A||t)M(e);else if(e.state===L||t){const s=h;h=null,N(()=>k(e,n[0]),!1),h=s}}function N(e,t){if(h)return e();let n=!1;t||(h=[]),$?n=!0:$=[],P++;try{const i=e();return ue(n),i}catch(i){n||($=null),h=null,ee(i)}}function ue(e){if(h&&(Q(h),h=null),e)return;const t=$;$=null,t.length&&N(()=>le(t),!1)}function Q(e){for(let t=0;t<e.length;t++)J(e[t])}function k(e,t){const n=v;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===A||n?s!==t&&(!s.updatedAt||s.updatedAt<P)&&J(s):(s.state===L||n)&&k(s,t))}}function Z(e){const t=v;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=L,i.pure?h.push(i):$.push(i),i.observers&&Z(i))}}function B(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const l=s.pop(),r=n.observerSlots.pop();i<s.length&&(l.sourceSlots[r]=i,s[i]=l,n.observerSlots[i]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)B(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ae(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ee(e){throw e=ae(e),e}function p(e,t){return O(()=>e(t||{}))}function E(){return!0}const de={get(e,t,n){return t===D?n:e.get(t)},has(e,t){return t===D?!0:e.has(t)},set:E,deleteProperty:E,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:E,deleteProperty:E}},ownKeys(e){return e.keys()}};function j(e){return(e=typeof e=="function"?e():e)?e:{}}function he(...e){let t=!1;for(let i=0;i<e.length;i++){const s=e[i];t=t||!!s&&D in s,e[i]=typeof s=="function"?(t=!0,T(s)):s}if(t)return new Proxy({get(i){for(let s=e.length-1;s>=0;s--){const l=j(e[s])[i];if(l!==void 0)return l}},has(i){for(let s=e.length-1;s>=0;s--)if(i in j(e[s]))return!0;return!1},keys(){const i=[];for(let s=0;s<e.length;s++)i.push(...Object.keys(j(e[s])));return[...new Set(i)]}},de);const n={};for(let i=e.length-1;i>=0;i--)if(e[i]){const s=Object.getOwnPropertyDescriptors(e[i]);for(const l in s)l in n||Object.defineProperty(n,l,{enumerable:!0,get(){for(let r=e.length-1;r>=0;r--){const o=(e[r]||{})[l];if(o!==void 0)return o}}})}return n}function q(e){let t=!1;const n=e.keyed,i=T(()=>e.when,void 0,{equals:(s,l)=>t?s===l:!s==!l});return T(()=>{const s=i();if(s){const l=e.children,r=typeof l=="function"&&l.length>0;return t=n||r,r?O(()=>l(s)):l}return e.fallback},void 0,void 0)}const ge=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ye=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ge]),pe=new Set(["innerHTML","textContent","innerText","children"]),be=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),z=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),me=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),we={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ve(e,t,n){let i=n.length,s=t.length,l=i,r=0,o=0,f=t[s-1].nextSibling,c=null;for(;r<s||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[s-1]===n[l-1];)s--,l--;if(s===r){const d=l<i?o?n[o-1].nextSibling:n[l-o]:f;for(;o<l;)e.insertBefore(n[o++],d)}else if(l===o)for(;r<s;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[s-1]){const d=t[--s].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],d),t[s]=n[l]}else{if(!c){c=new Map;let g=o;for(;g<l;)c.set(n[g],g++)}const d=c.get(t[r]);if(d!=null)if(o<d&&d<l){let g=r,C=1,U;for(;++g<s&&g<l&&!((U=c.get(t[g]))==null||U!==d+C);)C++;if(C>d-o){const ie=t[r];for(;o<d;)e.insertBefore(n[o++],ie)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const K="_$DX_DELEGATE";function $e(e,t,n,i={}){let s;return oe(l=>{s=l,t===document?e():a(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{s(),t.textContent=""}}function b(e,t,n){const i=document.createElement("template");if(i.innerHTML=e,t&&i.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${i.innerHTML}

${e}. Is your HTML properly formed?`;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function Ae(e,t=window.document){const n=t[K]||(t[K]=new Set);for(let i=0,s=e.length;i<s;i++){const l=e[i];n.has(l)||(n.add(l),t.addEventListener(l,Le))}}function S(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function _e(e,t,n,i){i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i)}function te(e,t){t==null?e.removeAttribute("class"):e.className=t}function Se(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=l=>s.call(e,n[1],l))}else e.addEventListener(t,n)}function xe(e,t,n={}){const i=Object.keys(t||{}),s=Object.keys(n);let l,r;for(l=0,r=s.length;l<r;l++){const o=s[l];!o||o==="undefined"||t[o]||(V(e,o,!1),delete n[o])}for(l=0,r=i.length;l<r;l++){const o=i[l],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(V(e,o,!0),n[o]=f)}return n}function ne(e,t,n){if(!t)return n?S(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let s,l;for(l in n)t[l]==null&&i.removeProperty(l),delete n[l];for(l in t)s=t[l],s!==n[l]&&(i.setProperty(l,s),n[l]=s);return n}function Ce(e,t={},n,i){const s={};return i||m(()=>s.children=x(e,t.children,s.children)),m(()=>t.ref&&t.ref(e)),m(()=>Ne(e,t,n,!0,s,!0)),s}function a(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return x(e,t,i,n);m(s=>x(e,t(),s,n),i)}function Ne(e,t,n,i,s={},l=!1){t||(t={});for(const r in s)if(!(r in t)){if(r==="children")continue;s[r]=R(e,r,null,s[r],n,l)}for(const r in t){if(r==="children"){i||x(e,t.children);continue}const o=t[r];s[r]=R(e,r,o,s[r],n,l)}}function Ee(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function V(e,t,n){const i=t.trim().split(/\s+/);for(let s=0,l=i.length;s<l;s++)e.classList.toggle(i[s],n)}function R(e,t,n,i,s,l){let r,o,f;if(t==="style")return ne(e,n,i);if(t==="classList")return xe(e,n,i);if(n===i)return i;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);i&&e.removeEventListener(c,i),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);i&&e.removeEventListener(c,i,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),d=me.has(c);if(!d&&i){const g=Array.isArray(i)?i[0]:i;e.removeEventListener(c,g)}(d||n)&&(Se(e,c,n,d),d&&Ae([c]))}else if((f=pe.has(t))||!s&&(z[t]||(o=ye.has(t)))||(r=e.nodeName.includes("-")))t==="class"||t==="className"?te(e,n):r&&!o&&!f?e[Ee(t)]=n:e[z[t]||t]=n;else{const c=s&&t.indexOf(":")>-1&&we[t.split(":")[0]];c?_e(e,c,t,n):S(e,be[t]||t,n)}return n}function Le(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),w.registry&&!w.done&&(w.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>{for(;i&&i.nodeType!==8&&i.nodeValue!=="pl-"+e;){let s=i.nextSibling;i.remove(),i=s}i&&i.remove()}));n;){const i=n[t];if(i&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?i.call(n,s,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function x(e,t,n,i,s){for(w.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=i!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(w.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=_(e,n,i,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(w.context)return n;n=_(e,n,i)}else{if(l==="function")return m(()=>{let o=t();for(;typeof o=="function";)o=o();n=x(e,o,n,i)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(F(o,t,n,s))return m(()=>n=x(e,o,n,i,!0)),()=>n;if(w.context){if(!o.length)return n;for(let c=0;c<o.length;c++)if(o[c].parentNode)return n=o}if(o.length===0){if(n=_(e,n,i),r)return n}else f?n.length===0?G(e,o,i):ve(e,n,o):(n&&_(e),G(e,o));n=o}else if(t instanceof Node){if(w.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=_(e,n,i,t);_(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function F(e,t,n,i){let s=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],f=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=F(e,o,f)||s;else if(typeof o=="function")if(i){for(;typeof o=="function";)o=o();s=F(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||s}else e.push(o),s=!0;else{const c=String(o);c==="<!>"?f&&f.nodeType===8&&e.push(f):f&&f.nodeType===3?(f.data=c,e.push(f)):e.push(document.createTextNode(c))}}return s}function G(e,t,n=null){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function _(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(s!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(s,o):e.insertBefore(s,n):f&&o.remove()}else l=!0}}else e.insertBefore(s,n);return[s]}const Te=!1;const ke="_App_2f7ub_1",Pe="_link_2f7ub_10",Oe={App:ke,"parent-App":"_parent-App_2f7ub_6",link:Pe};const Me=b('<ul><li><a href="#">Inicio</a></li><li><a href="#">Explorar</a></li><li><a href="#">Top Canciones</a></li><li><a href="#">Top Artistas</a></li><li><a href="#">Top Letras</a></li></ul>',22),Be=b('<div class="based-icon"></div>',2),je=b("<nav></nav>",2);function X(e){const{backcolor:t,iconbuild:n}=e;return console.log(Boolean(n)),(()=>{const i=je.cloneNode(!0);return i.style.setProperty("background-color",t),a(i,p(q,{get when(){return!Boolean(n)},get children(){return Me.cloneNode(!0)}}),null),a(i,p(q,{get when(){return Boolean(n)},get children(){return Be.cloneNode(!0)}}),null),i})()}const De=b('<div class="banner"></div>',2);function Fe(){return De.cloneNode(!0)}const He=[{title:"Driver's License",artist:"Olivia Rodrigo",album:"SOUR",rank:1},{title:"Up",artist:"Cardi B",album:"Single",rank:2},{title:"34+35",artist:"Ariana Grande",album:"Positions",rank:3},{title:"Save Your Tears",artist:"The Weeknd & Ariana Grande",album:"After Hours",rank:4},{title:"Mood",artist:"24kGoldn feat. iann dior",album:"El Dorado",rank:5}],Ue={top_songs:He},Ie=b('<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>',2),qe=b("<title></title>",2);function H(e,t){const n=he(e.a,t);return(()=>{const i=Ie.cloneNode(!0);return Ce(i,n,!0,!0),a(i,()=>Te,null),a(i,(()=>{const s=T(()=>!!t.title,!0);return()=>s()&&(()=>{const l=qe.cloneNode(!0);return a(l,()=>t.title),l})()})(),null),m(s=>{const l=e.a.stroke,r={...t.style,overflow:"visible",color:t.color||"currentColor"},o=t.size||"1em",f=t.size||"1em",c=e.c;return l!==s._v$&&S(i,"stroke",s._v$=l),s._v$2=ne(i,r,s._v$2),o!==s._v$3&&S(i,"height",s._v$3=o),f!==s._v$4&&S(i,"width",s._v$4=f),c!==s._v$5&&(i.innerHTML=s._v$5=c),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),i})()}function ze(e){return H({a:{viewBox:"0 0 1024 1024"},c:'<path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"/>'},e)}function Ke(e){return H({a:{viewBox:"0 0 1024 1024"},c:'<path d="M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9z"/>'},e)}function Ve(e){return H({a:{viewBox:"0 0 512 512"},c:'<path d="M421.7 220.3L188.5 453.4l-33.9-33.9 3.5-3.5H112c-8.8 0-16-7.2-16-16v-46.1l-3.49 3.5c-4.73 4.8-8.2 10.6-10.09 17l-22.98 78.2 78.16-23c5.5-1.9 12.2-5.4 17-10.1l33.9 33.9c-10.4 10.4-23.3 18.1-37.4 22.2L30.77 511c-8.42 2.5-17.53.2-23.74-6.9-6.21-5.3-8.532-14.4-6.054-22.9L36.37 360.9c4.16-14.1 11.79-27 22.2-37.4L291.7 90.34l130 129.96zm71-161.55c25 24.99 25 65.55 0 90.55l-48.4 48.4-130-129.98 48.4-48.4c25-24.998 65.6-24.998 90.6 0l39.4 39.43z"/>'},e)}const Re=b('<div class="top-songs-list"><h1>Pasodobles Preferidos</h1></div>',4),Ge=b('<div class="song"><div class="rank"></div><div class="details"><div class="title"></div><div class="artist"></div><div class="album"></div></div><div class="blow-icons"><div class="icon-table"><div class="icon-number" style="color: red">32K</div></div><div class="icon-table" title="Visitas"></div><div class="icon-table" title="Editar"></div></div></div>',22),Xe=()=>(()=>{const e=Re.cloneNode(!0);return e.firstChild,a(e,()=>Ue.top_songs.map(t=>(()=>{const n=Ge.cloneNode(!0),i=n.firstChild,s=i.nextSibling,l=s.firstChild,r=l.nextSibling,o=r.nextSibling,f=s.nextSibling,c=f.firstChild,d=c.firstChild,g=c.nextSibling,C=g.nextSibling;return a(i,()=>t.rank),a(l,()=>t.title),a(r,()=>t.artist),a(o,()=>t.album),a(c,p(Ke,{color:"red",size:24}),d),a(g,p(ze,{size:23})),a(C,p(Ve,{size:23})),m(()=>S(n,"key",t.rank)),n})()),null),e})();const We=b('<div class="aporte"><button class="button-aporte">Aporta letras del carnaval</button></div>',4);function Ye(){return We.cloneNode(!0)}const Je=b('<div><div class="parent-App"></div></div>',4);function Qe(){return(()=>{const e=Je.cloneNode(!0),t=e.firstChild;return a(e,p(X,{backcolor:"white",iconbuild:"true"}),t),a(e,p(X,{backcolor:"black"}),t),a(t,p(Fe,{}),null),a(t,p(Xe,{}),null),a(t,p(Ye,{}),null),m(()=>te(e,Oe.App)),e})()}const Ze=document.getElementById("root");$e(()=>p(Qe,{}),Ze);