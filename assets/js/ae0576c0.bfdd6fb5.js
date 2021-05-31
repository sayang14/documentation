(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{241:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(347)),o=["components"],c={title:"1.19.6",sidebar_label:"1.19.6"},s={unversionedId:"release-notes/1.19.6",id:"release-notes/1.19.6",isDocsHomePage:!1,title:"1.19.6",description:"General",source:"@site/../docs/release-notes/1.19.6.md",sourceDirName:"release-notes",slug:"/release-notes/1.19.6",permalink:"/documentation/release-notes/1.19.6",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.19.6.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1622193260,formattedLastUpdatedAt:"5/28/2021",sidebar_label:"1.19.6",frontMatter:{title:"1.19.6",sidebar_label:"1.19.6"}},l=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],u={toc:l};function b(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Fix for update_replicas_states function description in replicaclient.py ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2240"},"#2240")),Object(a.b)("li",{parentName:"ul"},"Documentation: ChangeLog seems to be a COPYRIGHT file? ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2434"},"#2434")),Object(a.b)("li",{parentName:"ul"},"Rules: Injector should not inject a rule which is about to expire soon ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2219"},"#2219")),Object(a.b)("li",{parentName:"ul"},"Testing: Test reaper console script ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2149"},"#2149")),Object(a.b)("li",{parentName:"ul"},'Transfers: Automatically recover requests in state "protocol mismatch" ',Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2115"},"#2115"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: PostgreSQL alembic upgrade problems ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2212"},"#2212")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: ineffective ",Object(a.b)("inlineCode",{parentName:"li"},"list-dids-by-meta")," ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2403"},"#2403")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: New psycopg2-binary release incompatible with current sqlalchemy version ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2446"},"#2446")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: list_replicas should raise DID not found ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2468"},"#2468")),Object(a.b)("li",{parentName:"ul"},"Life time model: Atropos doesn\u2019t gracefully handle InvalidRSEExpression ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2432"},"#2432")),Object(a.b)("li",{parentName:"ul"},"Life time model: Atropos command-line option --unlock-rules has no effect ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2456"},"#2456")),Object(a.b)("li",{parentName:"ul"},"Rules: Calculation error of progress class for Rule PROGRESS notifications ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2440"},"#2440")),Object(a.b)("li",{parentName:"ul"},"Testing: nosetests commands override return codes  ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2465"},"#2465"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: revert xrdcp workaround in downloadclient as soon as gfal is fixed ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1598"},"#1598"))),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: If policy section not available in client config, no exception should be raised ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1485"},"#1485")),Object(a.b)("li",{parentName:"ul"},"Clients: Issue in client_extract download  ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2485"},"#2485"))))}b.isMDXComponent=!0},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(d,c(c({ref:t},l),{},{components:r})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);