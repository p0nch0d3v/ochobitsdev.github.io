(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))i(_);new MutationObserver(_=>{for(const r of _)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(_){const r={};return _.integrity&&(r.integrity=_.integrity),_.referrerpolicy&&(r.referrerPolicy=_.referrerpolicy),_.crossorigin==="use-credentials"?r.credentials="include":_.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(_){if(_.ep)return;_.ep=!0;const r=n(_);fetch(_.href,r)}})();var D,h,_0,N,G,P={},c0=[],b0=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x(e,t){for(var n in t)e[n]=t[n];return e}function s0(e){var t=e.parentNode;t&&t.removeChild(e)}function w0(e,t,n){var i,_,r,s={};for(r in t)r=="key"?i=t[r]:r=="ref"?_=t[r]:s[r]=t[r];if(arguments.length>2&&(s.children=arguments.length>3?D.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return S(e,s,i,_,null)}function S(e,t,n,i,_){var r={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:_==null?++_0:_};return _==null&&h.vnode!=null&&h.vnode(r),r}function O(e){return e.children}function $(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?H(e):null}function a0(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return a0(e)}}function R(e){(!e.__d&&(e.__d=!0)&&N.push(e)&&!j.__r++||G!==h.debounceRendering)&&((G=h.debounceRendering)||setTimeout)(j)}function j(){for(var e;j.__r=N.length;)e=N.sort(function(t,n){return t.__v.__b-n.__v.__b}),N=[],e.some(function(t){var n,i,_,r,s,d;t.__d&&(s=(r=(n=t).__v).__e,(d=n.__P)&&(i=[],(_=x({},r)).__v=r.__v+1,W(d,r,_,n.__n,d.ownerSVGElement!==void 0,r.__h!=null?[s]:null,i,s==null?H(r):s,r.__h),p0(i,r),r.__e!=s&&a0(r)))})}function d0(e,t,n,i,_,r,s,d,p,f){var o,v,a,c,u,y,m,g=i&&i.__k||c0,w=g.length;for(n.__k=[],o=0;o<t.length;o++)if((c=n.__k[o]=(c=t[o])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?S(null,c,null,null,c):Array.isArray(c)?S(O,{children:c},null,null,null):c.__b>0?S(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=n,c.__b=n.__b+1,(a=g[o])===null||a&&c.key==a.key&&c.type===a.type)g[o]=void 0;else for(v=0;v<w;v++){if((a=g[v])&&c.key==a.key&&c.type===a.type){g[v]=void 0;break}a=null}W(e,c,a=a||P,_,r,s,d,p,f),u=c.__e,(v=c.ref)&&a.ref!=v&&(m||(m=[]),a.ref&&m.push(a.ref,null,c),m.push(v,c.__c||u,c)),u!=null?(y==null&&(y=u),typeof c.type=="function"&&c.__k===a.__k?c.__d=p=h0(c,p,e):p=u0(e,c,a,g,u,p),typeof n.type=="function"&&(n.__d=p)):p&&a.__e==p&&p.parentNode!=e&&(p=H(a))}for(n.__e=y,o=w;o--;)g[o]!=null&&v0(g[o],g[o]);if(m)for(o=0;o<m.length;o++)f0(m[o],m[++o],m[++o])}function h0(e,t,n){for(var i,_=e.__k,r=0;_&&r<_.length;r++)(i=_[r])&&(i.__=e,t=typeof i.type=="function"?h0(i,t,n):u0(n,i,i,_,i.__e,t));return t}function u0(e,t,n,i,_,r){var s,d,p;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(n==null||_!=r||_.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(_),s=null;else{for(d=r,p=0;(d=d.nextSibling)&&p<i.length;p+=2)if(d==_)break e;e.insertBefore(_,r),s=r}return s!==void 0?s:_.nextSibling}function x0(e,t,n,i,_){var r;for(r in n)r==="children"||r==="key"||r in t||B(e,r,null,n[r],i);for(r in t)_&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||B(e,r,t[r],n[r],i)}function Q(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||b0.test(t)?n:n+"px"}function B(e,t,n,i,_){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Q(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||Q(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?i||e.addEventListener(t,r?J:K,r):e.removeEventListener(t,r?J:K,r);else if(t!=="dangerouslySetInnerHTML"){if(_)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function K(e){this.l[e.type+!1](h.event?h.event(e):e)}function J(e){this.l[e.type+!0](h.event?h.event(e):e)}function W(e,t,n,i,_,r,s,d,p){var f,o,v,a,c,u,y,m,g,w,M,C,q,z,A,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,d=t.__e=n.__e,t.__h=null,r=[d]),(f=h.__b)&&f(t);try{e:if(typeof b=="function"){if(m=t.props,g=(f=b.contextType)&&i[f.__c],w=f?g?g.props.value:f.__:i,n.__c?y=(o=t.__c=n.__c).__=o.__E:("prototype"in b&&b.prototype.render?t.__c=o=new b(m,w):(t.__c=o=new $(m,w),o.constructor=b,o.render=C0),g&&g.sub(o),o.props=m,o.state||(o.state={}),o.context=w,o.__n=i,v=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=x({},o.__s)),x(o.__s,b.getDerivedStateFromProps(m,o.__s))),a=o.props,c=o.state,v)b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(b.getDerivedStateFromProps==null&&m!==a&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(m,w),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(m,o.__s,w)===!1||t.__v===n.__v){for(o.props=m,o.state=o.__s,t.__v!==n.__v&&(o.__d=!1),o.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(I){I&&(I.__=t)}),M=0;M<o._sb.length;M++)o.__h.push(o._sb[M]);o._sb=[],o.__h.length&&s.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(m,o.__s,w),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(a,c,u)})}if(o.context=w,o.props=m,o.__v=t,o.__P=e,C=h.__r,q=0,"prototype"in b&&b.prototype.render){for(o.state=o.__s,o.__d=!1,C&&C(t),f=o.render(o.props,o.state,o.context),z=0;z<o._sb.length;z++)o.__h.push(o._sb[z]);o._sb=[]}else do o.__d=!1,C&&C(t),f=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++q<25);o.state=o.__s,o.getChildContext!=null&&(i=x(x({},i),o.getChildContext())),v||o.getSnapshotBeforeUpdate==null||(u=o.getSnapshotBeforeUpdate(a,c)),A=f!=null&&f.type===O&&f.key==null?f.props.children:f,d0(e,Array.isArray(A)?A:[A],t,n,i,_,r,s,d,p),o.base=t.__e,t.__h=null,o.__h.length&&s.push(o),y&&(o.__E=o.__=null),o.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=L0(n.__e,t,n,i,_,r,s,p);(f=h.diffed)&&f(t)}catch(I){t.__v=null,(p||r!=null)&&(t.__e=d,t.__h=!!p,r[r.indexOf(d)]=null),h.__e(I,t,n)}}function p0(e,t){h.__c&&h.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){h.__e(i,n.__v)}})}function L0(e,t,n,i,_,r,s,d){var p,f,o,v=n.props,a=t.props,c=t.type,u=0;if(c==="svg"&&(_=!0),r!=null){for(;u<r.length;u++)if((p=r[u])&&"setAttribute"in p==!!c&&(c?p.localName===c:p.nodeType===3)){e=p,r[u]=null;break}}if(e==null){if(c===null)return document.createTextNode(a);e=_?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,a.is&&a),r=null,d=!1}if(c===null)v===a||d&&e.data===a||(e.data=a);else{if(r=r&&D.call(e.childNodes),f=(v=n.props||P).dangerouslySetInnerHTML,o=a.dangerouslySetInnerHTML,!d){if(r!=null)for(v={},u=0;u<e.attributes.length;u++)v[e.attributes[u].name]=e.attributes[u].value;(o||f)&&(o&&(f&&o.__html==f.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(x0(e,a,v,_,d),o)t.__k=[];else if(u=t.props.children,d0(e,Array.isArray(u)?u:[u],t,n,i,_&&c!=="foreignObject",r,s,r?r[0]:n.__k&&H(n,0),d),r!=null)for(u=r.length;u--;)r[u]!=null&&s0(r[u]);d||("value"in a&&(u=a.value)!==void 0&&(u!==e.value||c==="progress"&&!u||c==="option"&&u!==v.value)&&B(e,"value",u,v.value,!1),"checked"in a&&(u=a.checked)!==void 0&&u!==e.checked&&B(e,"checked",u,v.checked,!1))}return e}function f0(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){h.__e(i,n)}}function v0(e,t,n){var i,_;if(h.unmount&&h.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||f0(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){h.__e(r,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(_=0;_<i.length;_++)i[_]&&v0(i[_],t,n||typeof e.type!="function");n||e.__e==null||s0(e.__e),e.__=e.__e=e.__d=void 0}function C0(e,t,n){return this.constructor(e,n)}function N0(e,t,n){var i,_,r;h.__&&h.__(e,t),_=(i=typeof n=="function")?null:n&&n.__k||t.__k,r=[],W(t,e=(!i&&n||t).__k=w0(O,null,[e]),_||P,P,t.ownerSVGElement!==void 0,!i&&n?[n]:_?null:t.firstChild?D.call(t.childNodes):null,r,!i&&n?n:_?_.__e:t.firstChild,i),p0(r,e)}D=c0.slice,h={__e:function(e,t,n,i){for(var _,r,s;t=t.__;)if((_=t.__c)&&!_.__)try{if((r=_.constructor)&&r.getDerivedStateFromError!=null&&(_.setState(r.getDerivedStateFromError(e)),s=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(e,i||{}),s=_.__d),s)return _.__E=_}catch(d){e=d}throw e}},_0=0,$.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},n),this.props)),e&&x(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),R(this))},$.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),R(this))},$.prototype.render=O,N=[],j.__r=0;var V,k,Z,X,U=0,m0=[],E=[],Y=h.__b,e0=h.__r,t0=h.diffed,n0=h.__c,o0=h.unmount;function k0(e,t){h.__h&&h.__h(k,e,U||t),U=0;var n=k.__H||(k.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:E}),n.__[e]}function L(e){return U=1,H0(y0,e)}function H0(e,t,n){var i=k0(V++,2);if(i.t=e,!i.__c&&(i.__=[n?n(t):y0(void 0,t),function(r){var s=i.__N?i.__N[0]:i.__[0],d=i.t(s,r);s!==d&&(i.__N=[d,i.__[1]],i.__c.setState({}))}],i.__c=k,!k.u)){k.u=!0;var _=k.shouldComponentUpdate;k.shouldComponentUpdate=function(r,s,d){if(!i.__c.__H)return!0;var p=i.__c.__H.__.filter(function(o){return o.__c});if(p.every(function(o){return!o.__N}))return!_||_.call(this,r,s,d);var f=!1;return p.forEach(function(o){if(o.__N){var v=o.__[0];o.__=o.__N,o.__N=void 0,v!==o.__[0]&&(f=!0)}}),!(!f&&i.__c.props===r)&&(!_||_.call(this,r,s,d))}}return i.__N||i.__}function g0(e,t){var n=k0(V++,3);!h.__s&&A0(n.__H,t)&&(n.__=e,n.i=t,k.__H.__h.push(n))}function M0(){for(var e;e=m0.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(T),e.__H.__h.forEach(F),e.__H.__h=[]}catch(t){e.__H.__h=[],h.__e(t,e.__v)}}h.__b=function(e){typeof e.type!="function"||e.__m||e.__===null?e.__m||(e.__m=e.__&&e.__.__m?e.__.__m:""):e.__m=(e.__&&e.__.__m?e.__.__m:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),k=null,Y&&Y(e)},h.__r=function(e){e0&&e0(e),V=0;var t=(k=e.__c).__H;t&&(Z===k?(t.__h=[],k.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=E,n.__N=n.i=void 0})):(t.__h.forEach(T),t.__h.forEach(F),t.__h=[])),Z=k},h.diffed=function(e){t0&&t0(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(m0.push(t)!==1&&X===h.requestAnimationFrame||((X=h.requestAnimationFrame)||z0)(M0)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==E&&(n.__=n.__V),n.i=void 0,n.__V=E})),Z=k=null},h.__c=function(e,t){t.some(function(n){try{n.__h.forEach(T),n.__h=n.__h.filter(function(i){return!i.__||F(i)})}catch(i){t.some(function(_){_.__h&&(_.__h=[])}),t=[],h.__e(i,n.__v)}}),n0&&n0(e,t)},h.unmount=function(e){o0&&o0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{T(i)}catch(_){t=_}}),n.__H=void 0,t&&h.__e(t,n.__v))};var r0=typeof requestAnimationFrame=="function";function z0(e){var t,n=function(){clearTimeout(i),r0&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);r0&&(t=requestAnimationFrame(n))}function T(e){var t=k,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),k=t}function F(e){var t=k;e.__c=e.__(),k=t}function A0(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}function y0(e,t){return typeof t=="function"?t(e):t}var I0=0;function l(e,t,n,i,_){var r,s,d={};for(s in t)s=="ref"?r=t[s]:d[s]=t[s];var p={type:e,props:d,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--I0,__source:_,__self:i};if(typeof e=="function"&&(r=e.defaultProps))for(s in r)d[s]===void 0&&(d[s]=r[s]);return h.vnode&&h.vnode(p),p}function S0({className:e,icon:t,onClick:n}){return l("span",{className:`${e} item shortcut`,onClick:n,children:t})}function $0(e){let t=e.length,n;for(;t!==0;)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]];return e}function i0({links:e}){const[t,n]=L(!1),[i,_]=L(null),[r,s]=L(null),[d,p]=L(null),[f,o]=L([]);g0(()=>{let a=[...e];a=$0(a);const c=[],u=4;for(let y=0;y<a.length;y+=u){const m=a.slice(y,y+u);c.push(m)}o(c)},[]);const v=a=>{setTimeout(()=>{if(n(!1),_(null),s(null),p(null),a.title)a.title!==i&&(n(!0),_(a.title),s(a.url),p(a.code));else{const c=document.createElement("a");c.href=a.url,c.target="_blank",c.click()}},1)};return l("div",{children:[l("span",{className:"appsWrapper",children:f.map((a,c)=>a.map((u,y)=>{const m=c%2!==0?"negative":"positive",g=c%2!==0?"positive":"negative";return l(S0,{className:y%2!==0?g:m,icon:u.icon,onClick:()=>{v(u)}})}))}),t&&(i||r)&&l("div",{class:"mt-4 ",children:[l("div",{class:"text-3xl font-medium w-full text-center",children:i}),l("div",{class:"flex w-full	mt-2 flex justify-between",children:[r&&l("span",{class:"",children:l("a",{href:r,target:"_blank",class:"text-2xl text-app-light hover:text-app-dark px-6 py-1 rounded bg-app-dark hover:bg-app-light border border-app-light hover:border-app-dark",children:"Open"})}),d&&l("span",{class:"",children:l("a",{href:d,target:"_blank",class:"text-2xl text-app-dark hover:text-app-light px-6 py-1 rounded  bg-app-light hover:bg-app-dark border border-app-dark hover:border-app-light",children:"Code"})})]})]})]})}function l0({title:e,even:t}){const n=t&&t==="true",i=n?"negative":"positive",_=n?"positive":"negative",r=e.split("").map((s,d)=>l("span",{className:`titleCell item ${d%2===0?i:_}`,children:s}));return l("div",{className:"title",children:r})}function E0(){return l("svg",{viewBox:"0 0 32 32",id:"svg5",version:"1.1",children:[l("defs",{id:"defs2"}),l("g",{id:"layer1",transform:"translate(-12,-340)",children:[l("path",{d:"M 28,364.95312 A 1.0606602,1.0606602 0 0 0 26.939453,366.01367 1.0606602,1.0606602 0 0 0 28,367.07422 1.0606602,1.0606602 0 0 0 29.060547,366.01367 1.0606602,1.0606602 0 0 0 28,364.95312 Z",id:"path453543",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 33.914062,362.47461 a 1.0606602,1.0606602 0 0 0 -0.675781,0.30664 1.0606602,1.0606602 0 0 0 0,1.5 1.0606602,1.0606602 0 0 0 1.5,0 1.0606602,1.0606602 0 0 0 0,-1.5 1.0606602,1.0606602 0 0 0 -0.824219,-0.30664 z",id:"path453541",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 21.935547,362.47461 a 1.0606602,1.0606602 0 0 0 -0.673828,0.30664 1.0606602,1.0606602 0 0 0 0,1.5 1.0606602,1.0606602 0 0 0 1.5,0 1.0606602,1.0606602 0 0 0 0,-1.5 1.0606602,1.0606602 0 0 0 -0.826172,-0.30664 z",id:"path453539",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 36.46875,356.48242 a 1.0606602,1.0606602 0 0 0 -1.060547,1.06055 1.0606602,1.0606602 0 0 0 1.060547,1.06055 1.0606602,1.0606602 0 0 0 1.0625,-1.06055 1.0606602,1.0606602 0 0 0 -1.0625,-1.06055 z",id:"path453521",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 19.53125,356.48242 a 1.0606602,1.0606602 0 0 0 -1.0625,1.06055 1.0606602,1.0606602 0 0 0 1.0625,1.06055 1.0606602,1.0606602 0 0 0 1.060547,-1.06055 1.0606602,1.0606602 0 0 0 -1.060547,-1.06055 z",id:"path453519",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 28,352.01367 a 1,1 0 0 0 -1,1 v 4.58399 l -2.707031,2.70898 a 1,1 0 0 0 0,1.41406 1,1 0 0 0 1.414062,0 l 3,-3 A 1.0001,1.0001 0 0 0 29,358.01367 v -5 a 1,1 0 0 0 -1,-1 z",id:"path453517",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 33.914062,350.49609 a 1.0606602,1.0606602 0 0 0 -0.675781,0.3086 1.0606602,1.0606602 0 0 0 0,1.5 1.0606602,1.0606602 0 0 0 1.5,0 1.0606602,1.0606602 0 0 0 0,-1.5 1.0606602,1.0606602 0 0 0 -0.824219,-0.3086 z",id:"path453513",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 21.935547,350.49609 a 1.0606602,1.0606602 0 0 0 -0.673828,0.3086 1.0606602,1.0606602 0 0 0 0,1.5 1.0606602,1.0606602 0 0 0 1.5,0 1.0606602,1.0606602 0 0 0 0,-1.5 1.0606602,1.0606602 0 0 0 -0.826172,-0.3086 z",id:"path453511",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"M 28,348.01367 A 1.0606602,1.0606602 0 0 0 26.939453,349.07422 1.0606602,1.0606602 0 0 0 28,350.13477 1.0606602,1.0606602 0 0 0 29.060547,349.07422 1.0606602,1.0606602 0 0 0 28,348.01367 Z",id:"path453509",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 26,342.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 1 v 1.04297 c -6.425484,0.51183 -11.5,5.90234 -11.5,12.45703 0,6.8917 5.6083,12.5 12.5,12.5 6.8917,0 12.5,-5.6083 12.5,-12.5 0,-2.49565 -0.738405,-4.82171 -2.003906,-6.77539 a 1.0001,1.0001 0 0 0 0.111328,-0.0898 l 2.121094,-2.1211 a 1.0001,1.0001 0 0 0 0,-1.41406 l -2.828125,-2.82812 a 1.0001,1.0001 0 0 0 -1.414063,0 l -2.121094,2.12109 A 1.0001,1.0001 0 0 0 34.1875,346.66016 C 32.635016,345.77154 30.875389,345.20603 29,345.05664 v -1.04297 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z m 11.193359,4.39258 1.414063,1.41406 -0.707031,0.70703 -1.414063,-1.41406 z M 28,347.01367 c 5.810822,0 10.5,4.68918 10.5,10.5 0,5.81083 -4.689178,10.5 -10.5,10.5 -5.810822,0 -10.5,-4.68917 -10.5,-10.5 0,-5.81082 4.689178,-10.5 10.5,-10.5 z",id:"path453491",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"})]})]})}function T0({className:e}){return l("svg",{viewBox:"0 0 24 24",version:"1.1",className:e,children:[l("title",{children:"Dashboard"}),l("g",{id:"Dashboard","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:[l("rect",{id:"Container",x:"0",y:"0",width:"24",height:"24"}),l("rect",{id:"shape-1","stroke-width":"2","stroke-linecap":"round",x:"4",y:"4",width:"16",height:"16",rx:"2"}),l("line",{x1:"4",y1:"9",x2:"20",y2:"9",id:"shape-2","stroke-width":"2","stroke-linecap":"round"}),l("line",{x1:"9",y1:"10",x2:"9",y2:"20",id:"shape-3","stroke-width":"2","stroke-linecap":"round"})]})]})}function P0(){return l("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.01192 5.6023C1.83312 3.50023 3.61574 2 5.51161 2H7.88594C9.01915 2 10.0411 2.68182 10.4762 3.72819L11.6459 6.54152C12.0464 7.50457 11.8795 8.61027 11.2126 9.41219L9.96021 10.9182C10.7683 12.1458 11.7862 13.2527 12.9455 14.169L14.5827 12.8019C15.386 12.1311 16.4959 11.9632 17.4616 12.3664L20.2638 13.5364C21.3081 13.9725 21.9881 14.9933 21.9881 16.125C21.9881 16.5154 21.9911 16.906 21.9941 17.3009L21.9941 17.3025C21.997 17.6956 22 18.093 22 18.4913C22 20.387 20.4999 22.1699 18.3975 21.9904C9.85772 21.2613 2.74005 14.1628 2.01192 5.6023ZM5.51161 4C4.56806 4 3.94287 4.70566 4.00472 5.43279C4.65016 13.0211 10.9966 19.3513 18.5676 19.9977C19.2944 20.0597 20 19.4349 20 18.4913C20 18.1013 19.9971 17.7109 19.9941 17.316L19.9941 17.3135C19.9911 16.9206 19.9881 16.5234 19.9881 16.125C19.9881 15.8002 19.7929 15.5072 19.4932 15.382L16.691 14.212C16.4138 14.0963 16.0952 14.1444 15.8646 14.337L13.0326 16.7019L12.4051 16.2603C10.5707 14.9694 8.9987 13.2704 7.86741 11.3384L7.51296 10.733L9.67483 8.13339C9.86626 7.90321 9.91417 7.58583 9.79923 7.30939L8.62943 4.49606C8.50455 4.19571 8.21122 4 7.88594 4H5.51161Z"})})}function j0(){return l("svg",{version:"1.1",id:"_x32_",viewBox:"0 0 512 512",children:l("g",{children:[l("path",{class:"st0",d:"M424.267,105.749c-2.652-2.66-5.363-5.244-8.149-7.777l31.257-9.9c1.58-0.499,2.607-2.019,2.503-3.672 c-0.12-1.647-1.341-3.01-2.965-3.3l-70.828-12.492c-8.134-4.768-16.567-9.08-25.282-12.872l23.822-32.046 c0.916-1.236,0.954-2.935,0.067-4.202c-0.879-1.266-2.465-1.832-3.955-1.408l-74.388,21.446c-2.205-0.372-4.41-0.737-6.629-1.05 L258.76,1.296C258.075,0.477,257.061,0,255.997,0c-1.066,0-2.078,0.477-2.764,1.296l-30.959,37.179 c-2.22,0.314-4.425,0.678-6.63,1.05l-74.388-21.446c-1.483-0.424-3.07,0.142-3.956,1.408c-0.879,1.266-0.849,2.965,0.067,4.202 l23.83,32.046c-8.723,3.792-17.156,8.105-25.29,12.872L65.08,81.1c-1.624,0.29-2.845,1.654-2.957,3.3 c-0.112,1.653,0.924,3.173,2.504,3.672l31.249,9.9c-2.778,2.533-5.498,5.118-8.149,7.777 c-43.034,43.004-69.71,102.62-69.702,168.278c-0.008,65.65,26.668,125.266,69.702,168.271 c42.997,43.034,102.62,69.717,168.271,69.702c65.65,0.014,125.273-26.668,168.27-69.702c43.042-43.004,69.718-102.62,69.71-168.271 C493.984,208.37,467.308,148.754,424.267,105.749z M397.345,415.368c-36.233,36.203-86.083,58.544-141.348,58.551 c-55.259-0.008-105.116-22.348-141.349-58.551c-36.203-36.233-58.536-86.083-58.551-141.342 c0.015-55.258,22.348-105.123,58.551-141.348c7.642-7.636,15.919-14.608,24.686-20.925l15.942,5.051 c1.192,0.38,2.093,1.333,2.398,2.54c0.313,1.199-0.014,2.481-0.878,3.375l-51.549,54.11c-1.133,1.177-1.311,2.987-0.447,4.381 c0.864,1.393,2.57,2.018,4.141,1.527l102.934-32.546c1.468-0.462,3.069,0.06,3.978,1.304l37.246,50.565 c0.685,0.916,1.758,1.467,2.898,1.467c1.14,0,2.22-0.551,2.897-1.467l37.247-50.565c0.916-1.244,2.517-1.766,3.977-1.304 l102.941,32.546c1.572,0.491,3.27-0.134,4.134-1.527c0.872-1.394,0.686-3.204-0.44-4.381l-51.556-54.11 c-0.857-0.894-1.192-2.176-0.879-3.375c0.313-1.207,1.214-2.16,2.399-2.54l15.941-5.051c8.775,6.317,17.044,13.29,24.686,20.925 c36.203,36.226,58.536,86.09,58.551,141.348C455.881,329.286,433.548,379.136,397.345,415.368z"}),l("path",{class:"st0",d:"M122.491,278.616c0-8.671,1.654-16.91,4.656-24.478c2.428-6.108-0.567-13.028-6.674-15.45 c-6.101-2.421-13.022,0.559-15.443,6.674c-4.09,10.295-6.339,21.543-6.339,33.254c0,12.775,2.682,24.985,7.494,36.032 c2.622,6.027,9.64,8.79,15.658,6.16c6.027-2.622,8.79-9.632,6.161-15.658C124.465,297,122.491,288.062,122.491,278.616z"})]})})}function B0({className:e}){return l("svg",{viewBox:"0 0 512 512",id:"icons",className:e,children:[l("rect",{x:"48",y:"48",width:"416",height:"416",rx:"96",fill:"none","stroke-linejoin":"round","stroke-width":"32"}),l("path",{d:"M388.94,151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48,29.12-132.94,51.4A34.66,34.66,0,0,0,120,199.64l33.32,39.21a26.07,26.07,0,0,0,33.6,5.21c15.92-9.83,40.91-21.64,69.1-21.64s53.18,11.81,69.1,21.64a26.07,26.07,0,0,0,33.6-5.21L392,199.64A34.66,34.66,0,0,0,388.94,151.56Z",fill:"none","stroke-linejoin":"round","stroke-width":"32"})]})}function D0(){return l("svg",{viewBox:"0 0 32 32",version:"1.1",children:[l("title",{children:"github"}),l("path",{d:"M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"})]})}function O0({className:e}){return l("svg",{className:e,viewBox:"0 0 512 512",version:"1.1",children:[l("title",{children:"info-feed"}),l("g",{id:"Page-1","stroke-width":"1","fill-rule":"evenodd",children:l("g",{id:"drop",transform:"translate(64.000000, 85.333333)",children:l("path",{d:"M128.021333,42.688 L384.042667,42.688 L384.042667,0.0213333333 L128.021333,0.0213333333 L128.021333,42.688 Z M0.0426666667,85.3546667 L85.376,85.3546667 L85.376,1.42108547e-14 L0.0426666667,1.42108547e-14 L0.0426666667,85.3546667 Z M128.021333,128.021333 L384.042667,128.021333 L384.042667,85.3546667 L128.021333,85.3546667 L128.021333,128.021333 Z M298.688,298.688 L384.042667,298.688 L384.042667,213.333333 L298.688,213.333333 L298.688,298.688 Z M-1.42108547e-14,256.021333 L256,256.021333 L256,213.333333 L-1.42108547e-14,213.333333 L-1.42108547e-14,256.021333 Z M0.0426666667,341.354667 L256.042667,341.354667 L256.042667,298.688 L0.0426666667,298.688 L0.0426666667,341.354667 Z",id:"Combined-Shape"})})})]})}function Z0(){return l("svg",{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",children:[l("title",{children:"docker"}),l("g",{id:"Layer_2","data-name":"Layer 2",children:[l("g",{id:"invisible_box","data-name":"invisible box",children:[l("rect",{width:"48",height:"48",fill:"none"}),l("rect",{width:"48",height:"48",fill:"none"})]}),l("g",{id:"icons_Q2","data-name":"icons Q2",children:l("g",{children:[l("rect",{x:"10",y:"19.3",width:"4.4",height:"4.44"}),l("rect",{x:"4.6",y:"19.3",width:"4.4",height:"4.44"}),l("path",{d:"M45.4,21.7a6.3,6.3,0,0,0-5.2-.6,6.6,6.6,0,0,0-2.9-4.4l-.5-.5-.5.6A6.1,6.1,0,0,0,35.2,21a5.6,5.6,0,0,0,1,2.8l-1.5.7a10.5,10.5,0,0,1-3,.5H2.2v.6a12.1,12.1,0,0,0,1,6.5l.4.8h0c2.8,4.6,7.7,6.6,13,6.6,10.3,0,18.7-4.4,22.7-14,2.6.2,5.2-.5,6.5-3L46,22ZM10.8,33.5a2.3,2.3,0,1,1,0-4.6,2.3,2.3,0,1,1,0,4.6Z"}),l("rect",{x:"10",y:"13.7",width:"4.4",height:"4.44"}),l("rect",{x:"26.5",y:"19.3",width:"4.4",height:"4.44"}),l("rect",{x:"21.1",y:"8",width:"4.4",height:"4.44"}),l("rect",{x:"21.1",y:"19.3",width:"4.4",height:"4.44"}),l("rect",{x:"15.6",y:"13.7",width:"4.4",height:"4.44"}),l("rect",{x:"21.1",y:"13.7",width:"4.4",height:"4.44"}),l("rect",{x:"15.6",y:"19.3",width:"4.4",height:"4.44"})]})})]})]})}function U0(){return l("svg",{fill:"#000000",viewBox:"0 -1 26 26",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"m12.906 24-12.503-9.277c-.162-.128-.284-.3-.351-.497l-.002-.008c-.032-.09-.05-.193-.05-.301s.018-.211.052-.308l-.002.007 1.463-4.437zm-7.613-23.646 2.874 8.823h-6.655l2.823-8.823c.07-.207.263-.353.49-.353h.015-.001c.008 0 .017-.001.026-.001.212 0 .388.151.427.351v.003zm2.874 8.823h9.479l-4.739 14.823zm17.595 4.436c.032.09.05.193.05.301s-.018.211-.052.308l.002-.007c-.069.205-.191.376-.351.503l-.002.002-12.503 9.28 11.394-14.823zm-4.285-13.259 2.823 8.823h-6.655l2.874-8.823c.04-.203.216-.354.428-.354.009 0 .018 0 .027.001h-.001.014c.227 0 .419.146.489.349l.001.004z"})})}function F0(){return l("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M3.50003 4.50005C1.50012 7.99982 2.63692 13.738 7.63684 16.2382C6.52918 17.0001 4.50012 17.9999 2.50012 18.4998C7.00012 20.4999 11.5001 20.9999 16.0001 17.4999C19.4154 14.8436 20.1668 10.1666 20.0001 7.99991L22.5001 5.00023H19.0001C17.5001 3.49991 16.022 3.57155 14.5001 4.00017C12.724 4.50037 11.7934 6.34309 12.0001 8.49991C9.00012 8.99968 6.00012 6.99982 3.50003 4.50005Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})}function W0({className:e}){return l("svg",{viewBox:"0 0 32 32",id:"svg5",version:"1.1",className:e,children:[l("defs",{id:"defs2"}),l("g",{id:"layer1",transform:"translate(-108,-196)",children:[l("path",{d:"m 121.89453,202.00586 c -0.92482,0 -1.77586,0.52633 -2.18945,1.35351 l -0.32227,0.64649 H 117 c -1.64501,0 -3,1.35499 -3,3 v 10 c 0,1.64501 1.35499,3 3,3 h 14 c 1.64501,0 3,-1.35499 3,-3 v -10 c 0,-1.64501 -1.35499,-3 -3,-3 h -2.38281 l -0.32227,-0.64649 c -0.41359,-0.82718 -1.26463,-1.35351 -2.18945,-1.35351 z m 0,2 h 4.21094 c 0.1715,0 0.32369,0.0947 0.40039,0.24805 l 0.59961,1.19921 A 1.0001,1.0001 0 0 0 128,206.00586 h 3 c 0.56413,0 1,0.43587 1,1 v 10 c 0,0.56413 -0.43587,1 -1,1 h -14 c -0.56413,0 -1,-0.43587 -1,-1 v -10 c 0,-0.56413 0.43587,-1 1,-1 h 3 a 1.0001,1.0001 0 0 0 0.89453,-0.55274 l 0.59961,-1.19921 c 0.0767,-0.1534 0.22889,-0.24805 0.40039,-0.24805 z",id:"rect30394",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 111,198.00586 a 1.0001,1.0001 0 0 0 -1,1 v 4 a 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 v -3 h 3 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z",id:"path30386",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 111,220.00586 a 1,1 0 0 0 -1,1 v 4 a 1.0001,1.0001 0 0 0 1,1 h 4 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 h -3 v -3 a 1,1 0 0 0 -1,-1 z",id:"path30388",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 133,198.00586 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 3 v 3 a 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 v -4 a 1.0001,1.0001 0 0 0 -1,-1 z",id:"path30390",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 137,220.00586 a 1,1 0 0 0 -1,1 v 3 h -3 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 4 a 1.0001,1.0001 0 0 0 1,-1 v -4 a 1,1 0 0 0 -1,-1 z",id:"path30392",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),l("path",{d:"m 124,208.00586 c -2.19729,0 -4,1.80271 -4,4 0,2.19729 1.80271,4 4,4 2.19729,0 4,-1.80271 4,-4 0,-2.19729 -1.80271,-4 -4,-4 z m 0,2 c 1.11641,0 2,0.88359 2,2 0,1.11641 -0.88359,2 -2,2 -1.11641,0 -2,-0.88359 -2,-2 0,-1.11641 0.88359,-2 2,-2 z",id:"path30410",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"})]})]})}const V0=[{title:"Phones",url:"https://phones.ochobits.dev",code:"https://github.com/p0nch0d3v/phones",icon:l(P0,{})},{title:"Pomodoro clock",url:"https://pomodoro.ochobits.dev",code:"https://github.com/p0nch0d3v/pomodoro-clock",icon:l(j0,{})},{title:"Clock",url:"https://clock.ochobits.dev",code:"https://github.com/p0nch0d3v/clock",icon:l(E0,{})},{title:"Body mass index",url:"https://bmi.ochobits.dev",code:"https://github.com/p0nch0d3v/body-mass-index",icon:l(B0,{className:"stroke"})},{title:"Home dashboard",url:"https://hd.ochobits.dev",code:"https://github.com/p0nch0d3v/home-dashboard",icon:l(T0,{className:"stroke"})},{title:"Screenshot API",url:null,code:"https://github.com/p0nch0d3v/screenshot-api-dotnet6",icon:l(W0,{className:"stroke"})}],q0=[{url:"https://github.com/p0nch0d3v",icon:l(D0,{})},{url:"https://blog.ochobits.dev/",icon:l(O0,{className:"stroke"})},{url:"https://hub.docker.com/u/p0nch0d3v",icon:l(Z0,{})},{url:"https://gitlab.com/p0nch0d3v",icon:l(U0,{})},{url:"https://twitter.com/p0nch0d3v",icon:l(F0,{})}];function G0(){var i,_;const[e,t]=L(((_=(i=window==null?void 0:window.screen)==null?void 0:i.orientation)==null?void 0:_.angle)||0);return g0(()=>{var s,d,p,f;const r=o=>{var v;t(((v=o==null?void 0:o.target)==null?void 0:v.angle)||0)};(d=(s=window==null?void 0:window.screen)==null?void 0:s.orientation)==null||d.removeEventListener("change",r),(f=(p=window==null?void 0:window.screen)==null?void 0:p.orientation)==null||f.addEventListener("change",r)},[]),l("main",{class:"main",style:{marginTop:e!==0&&e!==180?"calc(var(--square-size) * 2)":"unset"},children:[l(l0,{title:"ocho",even:"true"}),l(l0,{title:"bits",even:"false"}),l("span",{className:"separator"}),l(i0,{links:V0}),l("span",{className:"separator"}),l(i0,{links:q0})]})}N0(l(G0,{}),document.getElementById("app"));
