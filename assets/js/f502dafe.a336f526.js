(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{370:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(389)),i=["components"],c={title:"1.16.2",sidebar_label:"1.16.2"},s={unversionedId:"release-notes/1.16.2",id:"release-notes/1.16.2",isDocsHomePage:!1,title:"1.16.2",description:"General",source:"@site/../docs/release-notes/1.16.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.16.2",permalink:"/documentation/release-notes/1.16.2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.16.2.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1651500947,formattedLastUpdatedAt:"5/2/2022",sidebar_label:"1.16.2",frontMatter:{title:"1.16.2",sidebar_label:"1.16.2"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],l={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Authentication & Authorisation: Permission : Fix update_replicas_states permission for ATLAS ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1163"},"#1163")),Object(o.b)("li",{parentName:"ul"},"Functional tests: Travis build fails because of ipaddress ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1169"},"#1169"))),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core & Internals: get_dataset_locks_by_rse throws exception if RSE is empty ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/941"},"#941")),Object(o.b)("li",{parentName:"ul"},"Rules: Error when re-adding the same rule ",Object(o.b)("inlineCode",{parentName:"li"},"IndexError: tuple index out of range")," ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1160"},"#1160"))))}p.isMDXComponent=!0},389:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);