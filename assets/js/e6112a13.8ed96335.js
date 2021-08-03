(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{318:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(354)),c=["components"],o={title:"1.22.8",sidebar_label:"1.22.8"},s={unversionedId:"release-notes/1.22.8",id:"release-notes/1.22.8",isDocsHomePage:!1,title:"1.22.8",description:"General",source:"@site/../docs/release-notes/1.22.8.md",sourceDirName:"release-notes",slug:"/release-notes/1.22.8",permalink:"/documentation/release-notes/1.22.8",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.22.8.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1628000199,formattedLastUpdatedAt:"8/3/2021",sidebar_label:"1.22.8",frontMatter:{title:"1.22.8",sidebar_label:"1.22.8"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Define extract_scope based on policy ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3679"},"#3679")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Logging in xrootd ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3685"},"#3685")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Belleii : Adding permission file + fixing regular expression in schema.py ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3690"},"#3690")),Object(a.b)("li",{parentName:"ul"},"Documentation: Unused and broken submodule ",Object(a.b)("inlineCode",{parentName:"li"},"doc/source/sphinx-argparse")," ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3664"},"#3664"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Authentication & Authorisation: OAuth2/OIDC: py2/3 compatibility of utils.py ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3713"},"#3713")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Unable to create new meta key with string type ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3512"},"#3512")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Internal server error when listing another account's quota ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3695"},"#3695")),Object(a.b)("li",{parentName:"ul"},"Traces: kronos crashes for touch events ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3733"},"#3733"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: StoRM - archives and logging. ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3472"},"#3472"))),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Add dirac_add_files method for the Rucio/Dirac integration ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3692"},"#3692")),Object(a.b)("li",{parentName:"ul"},"Clients: Write domain used for storm protocol. ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3696"},"#3696"))),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: do not skip CA check on retry ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3702"},"#3702")),Object(a.b)("li",{parentName:"ul"},"Clients: Xrd: Tiny fixes ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3723"},"#3723"))))}b.isMDXComponent=!0},354:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(d,o(o({ref:t},u),{},{components:r})):i.a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<a;u++)c[u]=r[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);