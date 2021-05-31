(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{216:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(347)),o=["components"],c={title:"1.20.1",sidebar_label:"1.20.1"},s={unversionedId:"release-notes/1.20.1",id:"release-notes/1.20.1",isDocsHomePage:!1,title:"1.20.1",description:"General",source:"@site/../docs/release-notes/1.20.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.1",permalink:"/documentation/release-notes/1.20.1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.1.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1622193260,formattedLastUpdatedAt:"5/28/2021",sidebar_label:"1.20.1",frontMatter:{title:"1.20.1",sidebar_label:"1.20.1"}},l=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Transfers: Filter out requests on blacklisted RSE ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2607"},"#2607"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Messaging: delete_messages crashes when a message longer than 4000 is provided ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2652"},"#2652")),Object(i.b)("li",{parentName:"ul"},"Release management: Double requirement (pip-requires/pip-requires-client) for pysftp ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2625"},"#2625")),Object(i.b)("li",{parentName:"ul"},"Release management: M2Crpyto installation blocks all tests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2653"},"#2653")),Object(i.b)("li",{parentName:"ul"},"Rules: Intermediate notifications for notification mode PROGRESS are not sent ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2622"},"#2622")),Object(i.b)("li",{parentName:"ul"},"Transfers: Wrong states on RSE avaiability state in __list_transfer_requests_and_source_replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2656"},"#2656"))))}p.isMDXComponent=!0},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);