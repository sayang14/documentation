(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{354:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(411)),c=["components"],o={title:"1.27.9",sidebar_label:"1.27.9"},u={unversionedId:"release-notes/1.27.9",id:"release-notes/1.27.9",isDocsHomePage:!1,title:"1.27.9",description:"General",source:"@site/../docs/release-notes/1.27.9.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.9",permalink:"/documentation/release-notes/1.27.9",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.9.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1653404006,formattedLastUpdatedAt:"5/24/2022",sidebar_label:"1.27.9",frontMatter:{title:"1.27.9",sidebar_label:"1.27.9"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]}]}],l={toc:s};function b(e){var t=e.components,r=Object(i.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: allow use of memcached for the auth tokens ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5297"},"#5297")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Reduce default memcached expiration lifetime ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5303"},"#5303")),Object(a.b)("li",{parentName:"ul"},"DIRAC: Provide the possibility to set a lifetime on the default rule ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5164"},"#5164")),Object(a.b)("li",{parentName:"ul"},"Deletion: Non optimal use of the limit parameter in list_and_mark_unlocked_replicas  ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4897"},"#4897")),Object(a.b)("li",{parentName:"ul"},"Replicas: Refactor replica sorting XML generation ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4981"},"#4981")),Object(a.b)("li",{parentName:"ul"},"Replicas: geoip database is always downloaded, even if no URL configured/License key given ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5233"},"#5233")),Object(a.b)("li",{parentName:"ul"},"Testing: Upgrade TPC tests to use py3 fts-rest-client ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5257"},"#5257")),Object(a.b)("li",{parentName:"ul"},"Transfers: rework conveyor heartbeat handling ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5252"},"#5252"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Authentication & Authorisation: oidc_redirect URL is incorrect for routes with a path ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5220"},"#5220")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Enforce timeout on VP calls ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5360"},"#5360")),Object(a.b)("li",{parentName:"ul"},"Deletion: incorrect update of Container is_archive in reaper ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5166"},"#5166"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Add add-exception command in the CLI ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5292"},"#5292"))),Object(a.b)("h2",{id:"webui"},"WebUI"),Object(a.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: Remove hardcoded references to rucio-ui-dev.cern.ch ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5171"},"#5171")),Object(a.b)("li",{parentName:"ul"},"WebUI: add link to survey ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5305"},"#5305"))))}b.isMDXComponent=!0},411:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(d,o(o({ref:t},s),{},{components:r})):i.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);