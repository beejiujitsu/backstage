/*! For license information please see c25c849b.c79b3fe2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[650600],{480407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(824246),o=n(511151);const i={id:"provider",title:"GitHub Authentication Provider",sidebar_label:"GitHub",description:"Adding GitHub OAuth as an authentication provider in Backstage"},a=void 0,u={unversionedId:"auth/github/provider",id:"auth/github/provider",title:"GitHub Authentication Provider",description:"Adding GitHub OAuth as an authentication provider in Backstage",source:"@site/../docs/auth/github/provider.md",sourceDirName:"auth/github",slug:"/auth/github/provider",permalink:"/docs/auth/github/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/github/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"GitHub Authentication Provider",sidebar_label:"GitHub",description:"Adding GitHub OAuth as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Bitbucket",permalink:"/docs/auth/bitbucket/provider"},next:{title:"GitLab",permalink:"/docs/auth/gitlab/provider"}},c={},s=[{value:"Create an OAuth App on GitHub",id:"create-an-oauth-app-on-github",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2},{value:"Difference between GitHub Apps and GitHub OAuth Apps",id:"difference-between-github-apps-and-github-oauth-apps",level:2}];function l(e){const t=Object.assign({p:"p",code:"code",h2:"h2",a:"a",ul:"ul",li:"li",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The Backstage ",(0,r.jsx)(t.code,{children:"core-plugin-api"})," package comes with a GitHub authentication\nprovider that can authenticate users using GitHub or GitHub Enterprise OAuth."]}),"\n",(0,r.jsx)(t.h2,{id:"create-an-oauth-app-on-github",children:"Create an OAuth App on GitHub"}),"\n",(0,r.jsxs)(t.p,{children:["To add GitHub authentication, you must create either a GitHub App, or an OAuth\nApp from the GitHub\n",(0,r.jsx)(t.a,{href:"https://github.com/settings/developers",children:"developer settings"}),". The ",(0,r.jsx)(t.code,{children:"Homepage URL"}),"\nshould point to Backstage's frontend, while the ",(0,r.jsx)(t.code,{children:"Authorization callback URL"}),"\nwill point to the auth backend."]}),"\n",(0,r.jsx)(t.p,{children:"Note that if you're using a GitHub App, the allowed scopes are configured as\npart of that app. This means you need to verify what scopes the plugins you use\nrequire, so be sure to check the plugin READMEs for that information."}),"\n",(0,r.jsx)(t.p,{children:"Settings for local development:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Application name: Backstage (or your custom app name)"}),"\n",(0,r.jsxs)(t.li,{children:["Homepage URL: ",(0,r.jsx)(t.code,{children:"http://localhost:3000"})]}),"\n",(0,r.jsxs)(t.li,{children:["Authorization callback URL: ",(0,r.jsx)(t.code,{children:"http://localhost:7007/api/auth/github/handler/frame"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["The provider configuration can then be added to your ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," under the\nroot ",(0,r.jsx)(t.code,{children:"auth"})," configuration:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    github:\n      development:\n        clientId: ${AUTH_GITHUB_CLIENT_ID}\n        clientSecret: ${AUTH_GITHUB_CLIENT_SECRET}\n        ## uncomment if using GitHub Enterprise\n        # enterpriseInstanceUrl: ${AUTH_GITHUB_ENTERPRISE_INSTANCE_URL}\n"})}),"\n",(0,r.jsx)(t.p,{children:"The GitHub provider is a structure with three configuration keys:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"clientId"}),": The client ID that you generated on GitHub, e.g.\n",(0,r.jsx)(t.code,{children:"b59241722e3c3b4816e2"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"clientSecret"}),": The client secret tied to the generated client ID."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"enterpriseInstanceUrl"})," (optional): The base URL for a GitHub Enterprise\ninstance, e.g. ",(0,r.jsx)(t.code,{children:"https://ghe.<company>.com"}),". Only needed for GitHub Enterprise."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"callbackUrl"})," (optional): The callback URL that GitHub will use when\ninitiating an OAuth flow, e.g.\n",(0,r.jsx)(t.code,{children:"https://your-intermediate-service.com/handler"}),". Only needed if Backstage is\nnot the immediate receiver (e.g. one OAuth app for many backstage instances)."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,r.jsxs)(t.p,{children:["To add the provider to the frontend, add the ",(0,r.jsx)(t.code,{children:"githubAuthApi"})," reference and\n",(0,r.jsx)(t.code,{children:"SignInPage"})," component as shown in\n",(0,r.jsx)(t.a,{href:"/docs/auth/#adding-the-provider-to-the-sign-in-page",children:"Adding the provider to the sign-in page"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"difference-between-github-apps-and-github-oauth-apps",children:"Difference between GitHub Apps and GitHub OAuth Apps"}),"\n",(0,r.jsxs)(t.p,{children:["GitHub Apps handle OAuth scope at the app installation level, meaning that the\n",(0,r.jsx)(t.code,{children:"scope"})," parameter for the call to ",(0,r.jsx)(t.code,{children:"getAccessToken"})," in the frontend has no\neffect. When calling ",(0,r.jsx)(t.code,{children:"getAccessToken"})," in open source plugins, one should still\ninclude the appropriate scope, but also document in the plugin README what\nscopes are required for GitHub Apps."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var s in i=Object(arguments[c]))n.call(i,s)&&(u[s]=i[s]);if(t){a=t(i);for(var l=0;l<a.length;l++)r.call(i,a[l])&&(u[a[l]]=i[a[l]])}}return u}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:i,_owner:a.current}}t.jsx=s,t.jsxs=s},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,u=60110,c=60112;t.Suspense=60113;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),a=d("react.provider"),u=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),s=d("react.memo"),l=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var m=v.prototype=new y;m.constructor=v,r(m,g.prototype),m.isPureReactComponent=!0;var j={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,i={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,r)&&!x.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:j.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===r?"."+O(c,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),E(a,t,n,"",(function(e){return e}))):null!=a&&(A(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=r+O(u=e[s],s);c+=E(u,t,n,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(u=e.next()).done;)c+=E(u=u.value,t,n,l=r+O(u,s++),a);else if("object"===u)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function H(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function R(){var e=C.current;if(null===e)throw Error(h(321));return e}var G={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:H,forEach:function(e,t,n){H(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return H(e,(function(){t++})),t},toArray:function(e){return H(e,(function(e){return e}))||[]},only:function(e){if(!A(e))throw Error(h(143));return e}},t.Component=g,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var i=r({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)_.call(t,l)&&!x.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];i.children=s}return{$$typeof:o,type:e.type,key:a,ref:u,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>u,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function u({components:e,children:t,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:u},t)}}}]);