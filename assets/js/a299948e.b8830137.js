/*! For license information please see a299948e.b8830137.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[881602],{217310:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(824246),o=t(511151);const l={id:"plugin-apollo-explorer.apolloexplorerpage",title:"ApolloExplorerPage",description:"API reference for ApolloExplorerPage"},a=void 0,i={unversionedId:"reference/plugin-apollo-explorer.apolloexplorerpage",id:"reference/plugin-apollo-explorer.apolloexplorerpage",title:"ApolloExplorerPage",description:"API reference for ApolloExplorerPage",source:"@site/../docs/reference/plugin-apollo-explorer.apolloexplorerpage.md",sourceDirName:"reference",slug:"/reference/plugin-apollo-explorer.apolloexplorerpage",permalink:"/docs/reference/plugin-apollo-explorer.apolloexplorerpage",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-apollo-explorer.apolloexplorerpage.md",tags:[],version:"current",frontMatter:{id:"plugin-apollo-explorer.apolloexplorerpage",title:"ApolloExplorerPage",description:"API reference for ApolloExplorerPage"}},u={},c=[];function s(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-apollo-explorer",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-apollo-explorer"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-apollo-explorer.apolloexplorerpage",children:(0,n.jsx)(r.code,{children:"ApolloExplorerPage"})})]}),"\n",(0,n.jsx)(r.p,{children:"Main component that wraps the embedded graph(s)"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'ApolloExplorerPage: (props: {\n    title?: string | undefined;\n    subtitle?: string | undefined;\n    endpoints: {\n        title: string;\n        graphRef: string;\n        persistExplorerState?: boolean | undefined;\n        initialState?: {\n            document?: string | undefined;\n            variables?: import("@apollo/explorer/src/helpers/types").JSONObject | undefined;\n            headers?: Record<string, string> | undefined;\n            displayOptions: {\n                docsPanelState?: "closed" | "open" | undefined;\n                showHeadersAndEnvVars?: boolean | undefined;\n                theme?: "dark" | "light" | undefined;\n            };\n        } | undefined;\n    }[];\n}) => JSX.Element\n'})})]})}const p=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var l,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in l=Object(arguments[u]))t.call(l,c)&&(i[c]=l[c]);if(r){a=r(l);for(var s=0;s<a.length;s++)n.call(l,a[s])&&(i[a[s]]=l[a[s]])}}return i}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),r.Fragment=l("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,l={},c=null,s=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(s=r.ref),r)i.call(r,n)&&!u.hasOwnProperty(n)&&(l[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===l[n]&&(l[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:s,props:l,_owner:a.current}}r.jsx=c,r.jsxs=c},541535:(e,r,t)=>{var n=t(862525),o=60103,l=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var a=60109,i=60110,u=60112;r.Suspense=60113;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),l=p("react.portal"),r.Fragment=p("react.fragment"),r.StrictMode=p("react.strict_mode"),r.Profiler=p("react.profiler"),a=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),r.Suspense=p("react.suspense"),c=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function m(){}function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var b=v.prototype=new m;b.constructor=v,n(b,g.prototype),b.isPureReactComponent=!0;var _={current:null},x=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,t){var n,l={},a=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)x.call(r,n)&&!j.hasOwnProperty(n)&&(l[n]=r[n]);var u=arguments.length-2;if(1===u)l.children=t;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];l.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===l[n]&&(l[n]=u[n]);return{$$typeof:o,type:e,key:a,ref:i,props:l,_owner:_.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function k(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case l:u=!0}}if(u)return a=a(u=e),e=""===n?"."+k(u,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),S(a,r,t,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),r.push(a)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+k(i=e[c],c);u+=S(i,r,t,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(i=e.next()).done;)u+=S(i=i.value,r,t,s=n+k(i,c++),a);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function P(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var A={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:P,forEach:function(e,r,t){P(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error(d(143));return e}},r.Component=g,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var l=n({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=_.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in r)x.call(r,s)&&!j.hasOwnProperty(s)&&(l[s]=void 0===r[s]&&void 0!==c?c[s]:r[s])}var s=arguments.length-2;if(1===s)l.children=t;else if(1<s){c=Array(s);for(var p=0;p<s;p++)c[p]=arguments[p+2];l.children=c}return{$$typeof:o,type:e.type,key:a,ref:i,props:l,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var r=O.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:c,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>i,ah:()=>l});var n=t(667294);const o=n.createContext({});function l(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function i({components:e,children:r,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||a:l(e),n.createElement(o.Provider,{value:i},r)}}}]);