/*! For license information please see ce665d95.b9c5cb23.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[737641],{521779:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var t=r(824246),o=r(511151);const c={id:"core-app-api.appicons",title:"AppIcons",description:"API reference for AppIcons"},a=void 0,i={unversionedId:"reference/core-app-api.appicons",id:"reference/core-app-api.appicons",title:"AppIcons",description:"API reference for AppIcons",source:"@site/../docs/reference/core-app-api.appicons.md",sourceDirName:"reference",slug:"/reference/core-app-api.appicons",permalink:"/docs/reference/core-app-api.appicons",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.appicons.md",tags:[],version:"current",frontMatter:{id:"core-app-api.appicons",title:"AppIcons",description:"API reference for AppIcons"}},u={},s=[];function p(e){const n=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-app-api",children:(0,t.jsx)(n.code,{children:"@backstage/core-app-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-app-api.appicons",children:(0,t.jsx)(n.code,{children:"AppIcons"})})]}),"\n",(0,t.jsx)(n.p,{children:"A set of well-known icons that should be available within an app."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.b,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type AppIcons = {\n    'kind:api': IconComponent;\n    'kind:component': IconComponent;\n    'kind:domain': IconComponent;\n    'kind:group': IconComponent;\n    'kind:location': IconComponent;\n    'kind:system': IconComponent;\n    'kind:user': IconComponent;\n    brokenImage: IconComponent;\n    catalog: IconComponent;\n    chat: IconComponent;\n    dashboard: IconComponent;\n    docs: IconComponent;\n    email: IconComponent;\n    github: IconComponent;\n    group: IconComponent;\n    help: IconComponent;\n    scaffolder: IconComponent;\n    search: IconComponent;\n    techdocs: IconComponent;\n    user: IconComponent;\n    warning: IconComponent;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.b,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.iconcomponent",children:"IconComponent"})]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in c=Object(arguments[u]))r.call(c,s)&&(i[s]=c[s]);if(n){a=n(c);for(var p=0;p<a.length;p++)t.call(c,a[p])&&(i[a[p]]=c[a[p]])}}return i}},371426:(e,n,r)=>{r(862525);var t=r(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),n.Fragment=c("react.fragment")}var a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var t,c={},s=null,p=null;for(t in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(p=n.ref),n)i.call(n,t)&&!u.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:o,type:e,key:s,ref:p,props:c,_owner:a.current}}n.jsx=s,n.jsxs=s},541535:(e,n,r)=>{var t=r(862525),o=60103,c=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,i=60110,u=60112;n.Suspense=60113;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),n.Fragment=f("react.fragment"),n.StrictMode=f("react.strict_mode"),n.Profiler=f("react.profiler"),a=f("react.provider"),i=f("react.context"),u=f("react.forward_ref"),n.Suspense=f("react.suspense"),s=f("react.memo"),p=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,n,r){this.props=e,this.context=n,this.refs=h,this.updater=r||y}function v(){}function b(e,n,r){this.props=e,this.context=n,this.refs=h,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var _=b.prototype=new v;_.constructor=b,t(_,m.prototype),_.isPureReactComponent=!0;var g={current:null},j=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,r){var t,c={},a=null,i=null;if(null!=n)for(t in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(a=""+n.key),n)j.call(n,t)&&!C.hasOwnProperty(t)&&(c[t]=n[t]);var u=arguments.length-2;if(1===u)c.children=r;else if(1<u){for(var s=Array(u),p=0;p<u;p++)s[p]=arguments[p+2];c.children=s}if(e&&e.defaultProps)for(t in u=e.defaultProps)void 0===c[t]&&(c[t]=u[t]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:g.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function O(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function x(e,n,r,t,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case c:u=!0}}if(u)return a=a(u=e),e=""===t?"."+O(u,0):t,Array.isArray(a)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),x(a,n,r,"",(function(e){return e}))):null!=a&&(I(a)&&(a=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),n.push(a)),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=t+O(i=e[s],s);u+=x(i,n,r,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(i=e.next()).done;)u+=x(i=i.value,n,r,p=t+O(i,s++),a);else if("object"===i)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return u}function S(e,n,r){if(null==e)return e;var t=[],o=0;return x(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:S,forEach:function(e,n,r){S(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return S(e,(function(){n++})),n},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error(d(143));return e}},n.Component=m,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,r){if(null==e)throw Error(d(267,e));var c=t({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,u=g.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(p in n)j.call(n,p)&&!C.hasOwnProperty(p)&&(c[p]=void 0===n[p]&&void 0!==s?s[p]:n[p])}var p=arguments.length-2;if(1===p)c.children=r;else if(1<p){s=Array(p);for(var f=0;f<p;f++)s[f]=arguments[f+2];c.children=s}return{$$typeof:o,type:e.type,key:a,ref:i,props:c,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:i,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=I,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:s,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return R().useCallback(e,n)},n.useContext=function(e,n){return R().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return R().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return R().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return R().useLayoutEffect(e,n)},n.useMemo=function(e,n){return R().useMemo(e,n)},n.useReducer=function(e,n,r){return R().useReducer(e,n,r)},n.useRef=function(e){return R().useRef(e)},n.useState=function(e){return R().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>c});var t=r(667294);const o=t.createContext({});function c(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||a:c(e),t.createElement(o.Provider,{value:i},n)}}}]);