(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{278:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(347)),o=["components"],c={title:"1.23.8",sidebar_label:"1.23.8"},s={unversionedId:"release-notes/1.23.8",id:"release-notes/1.23.8",isDocsHomePage:!1,title:"1.23.8",description:"General",source:"@site/../docs/release-notes/1.23.8.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.8",permalink:"/documentation/release-notes/1.23.8",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.8.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1622193260,formattedLastUpdatedAt:"5/28/2021",sidebar_label:"1.23.8",frontMatter:{title:"1.23.8",sidebar_label:"1.23.8"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Rules: Add query hint to judge-evaluator query ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4040"},"#4040")),Object(a.b)("li",{parentName:"ul"},"Subscriptions: Possibility to overide the subscription comment ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4057"},"#4057")),Object(a.b)("li",{parentName:"ul"},"Testing: add tests with flask rest backend on travis ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1026"},"#1026"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: RSE's add_protocol is leaking database exceptions on the API ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3921"},"#3921")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: adding a replica with non-existent scope should raise ScopeNotFound ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3980"},"#3980")),Object(a.b)("li",{parentName:"ul"},"Recovery: Internal server error when declaring bad replicas on non-existent RSEs ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3409"},"#3409")),Object(a.b)("li",{parentName:"ul"},"Replicas: Abacus blocked by large deletion query ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4062"},"#4062"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: rucio get --no-subdir does not check if file already exists ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3737"},"#3737")),Object(a.b)("li",{parentName:"ul"},"Clients: Scope check in upload client crashes in certain conditions ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4039"},"#4039"))))}b.isMDXComponent=!0},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return r?i.a.createElement(m,c(c({ref:t},u),{},{components:r})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);