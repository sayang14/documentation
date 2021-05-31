(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(347)),i=["components"],l={id:"requirements",title:"Requirements",sidebar_label:"Requirements"},c={unversionedId:"requirements",id:"requirements",isDocsHomePage:!1,title:"Requirements",description:"Rucio relies on several dependencies, some of them being a hard requirement, others being optional depending on the used Rucio functionality.",source:"@site/../docs/requirements.md",sourceDirName:".",slug:"/requirements",permalink:"/documentation/requirements",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/requirements.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1622193260,formattedLastUpdatedAt:"5/28/2021",sidebar_label:"Requirements",frontMatter:{id:"requirements",title:"Requirements",sidebar_label:"Requirements"},sidebar:"docs",previous:{title:"Additional Layers and Resources",permalink:"/documentation/Additional-layers-and-Resources"},next:{title:"Concepts and terminology",permalink:"/documentation/concepts"}},b=[{value:"Python",id:"python",children:[]},{value:"Database",id:"database",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Rucio relies on several dependencies, some of them being a hard requirement, others being optional depending on the used Rucio functionality."),Object(o.b)("p",null,"To install Rucio, we generally recommend a Kubernetes-based deployment based on our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/rucio/helm-charts"},"helm-charts"),". A direct deployment using Rucio ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/u/rucio"},"docker containers"),", or Rucio ",Object(o.b)("a",{parentName:"p",href:"https://pypi.org/project/rucio/"},"pip")," packages is also possible."),Object(o.b)("h2",{id:"python"},"Python"),Object(o.b)("p",null,"Rucio server, daemons and clients are written in Python and thus depend on an installed Python interpreter. Since the Rucio ",Object(o.b)("a",{parentName:"p",href:"../release-notes/1.24.0"},"1.24")," release servers and daemons require ",Object(o.b)("strong",{parentName:"p"},"Python 3.6")," or upwards, while the clients still support ",Object(o.b)("strong",{parentName:"p"},"Python 2.7")," for the foreseeable future."),Object(o.b)("h2",{id:"database"},"Database"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Database"),Object(o.b)("th",{parentName:"tr",align:null},"Supported version"),Object(o.b)("th",{parentName:"tr",align:null},"Nota bene"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"SQLite"),Object(o.b)("td",{parentName:"tr",align:null},"3+"),Object(o.b)("td",{parentName:"tr",align:null},"For testing only")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"MySQL"),Object(o.b)("td",{parentName:"tr",align:null},"5"),Object(o.b)("td",{parentName:"tr",align:null},"Supported up to Rucio release ",Object(o.b)("a",{parentName:"td",href:"../release-notes/1.25.md"},"1.25"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"MySQL"),Object(o.b)("td",{parentName:"tr",align:null},"8 and higher"),Object(o.b)("td",{parentName:"tr",align:null},"No support for SSH public key authentication")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"PostgreSQL"),Object(o.b)("td",{parentName:"tr",align:null},"up to 11"),Object(o.b)("td",{parentName:"tr",align:null},"Limited support for JSON-based generic metadata")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"PostgreSQL"),Object(o.b)("td",{parentName:"tr",align:null},"12 and higher"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Oracle"),Object(o.b)("td",{parentName:"tr",align:null},"11g"),Object(o.b)("td",{parentName:"tr",align:null},"Limited support for JSON-based generic metadata")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Oracle"),Object(o.b)("td",{parentName:"tr",align:null},"19c"),Object(o.b)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0},347:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,m=p["".concat(i,".").concat(s)]||p[s]||d[s]||o;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);