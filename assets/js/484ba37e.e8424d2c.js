(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(347)),o=["components"],c={title:"1.22.3",sidebar_label:"1.22.3"},s={unversionedId:"release-notes/1.22.3",id:"release-notes/1.22.3",isDocsHomePage:!1,title:"1.22.3",description:"General",source:"@site/../docs/release-notes/1.22.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.22.3",permalink:"/documentation/release-notes/1.22.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.22.3.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1622193260,formattedLastUpdatedAt:"5/28/2021",sidebar_label:"1.22.3",frontMatter:{title:"1.22.3",sidebar_label:"1.22.3"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Bugs",id:"bugs-2",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Core & Internals: Add "Globus Online Test" activity to schema (ATLAS) ',Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3498"},"#3498")),Object(a.b)("li",{parentName:"ul"},"Documentation: Documentation shows wrong Python versions for Server and Client ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3402"},"#3402")),Object(a.b)("li",{parentName:"ul"},"Documentation: Errors in documentation and example of list-files command ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3473"},"#3473")),Object(a.b)("li",{parentName:"ul"},"Rules: add get_RSE_coverage_of_dataset function ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3455"},"#3455")),Object(a.b)("li",{parentName:"ul"},'Rules: add "thread" support to lock and replica retrieval functions ',Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3456"},"#3456")),Object(a.b)("li",{parentName:"ul"},"Rules: list_child_datasets does not return a set ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3458"},"#3458"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Authentication & Authorisation: OAuth2/OIDC: fix for token payload translation of empty values in claims ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3491"},"#3491")),Object(a.b)("li",{parentName:"ul"},"Release management: setup.py for main rucio package is not Python 3 compatible ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3347"},"#3347")),Object(a.b)("li",{parentName:"ul"},"Rules: get_did returns None for bytes instead of zero if dataset has no files yet ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3459"},"#3459")),Object(a.b)("li",{parentName:"ul"},"Rules: grouping value is corrupted in case of add_rule call with multiple kids ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3460"},"#3460")),Object(a.b)("li",{parentName:"ul"},"Transfers: Globus transfers fail when fts_hosts is empty string ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3076"},"#3076")),Object(a.b)("li",{parentName:"ul"},"Transfers: Fix source scheme in case of transfers from GCS ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3488"},"#3488"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Rucio client package imports rucio.common.schema which is not part of distribution ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3450"},"#3450")),Object(a.b)("li",{parentName:"ul"},"Clients: declare-temporary-unavailable is not properly handling the expiration date ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3477"},"#3477"))),Object(a.b)("h2",{id:"webui"},"WebUI"),Object(a.b)("h3",{id:"bugs-2"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: OAuth2/OIDC: WebUI fix to url dev/prod mapping for the select login page ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3452"},"#3452"))))}b.isMDXComponent=!0},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(d,c(c({ref:t},u),{},{components:r})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);