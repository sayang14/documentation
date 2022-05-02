(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{116:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return s})),a.d(e,"metadata",(function(){return c})),a.d(e,"toc",(function(){return u})),a.d(e,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(389)),o=["components"],s={id:"metadata_attributes",title:"Metadata attributes"},c={unversionedId:"metadata_attributes",id:"metadata_attributes",isDocsHomePage:!1,title:"Metadata attributes",description:"Meta-data associated with a dataset/file is represented using",source:"@site/../docs/metadata_attributes.md",sourceDirName:".",slug:"/metadata_attributes",permalink:"/documentation/metadata_attributes",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/metadata_attributes.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1651500947,formattedLastUpdatedAt:"5/2/2022",frontMatter:{id:"metadata_attributes",title:"Metadata attributes"},sidebar:"docs",previous:{title:"Rucio Storage Element",permalink:"/documentation/rucio_storage_element"},next:{title:"Permission model",permalink:"/documentation/permission_model"}},u=[],l={toc:u};function d(t){var e=t.components,a=Object(r.a)(t,o);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Meta-data associated with a dataset/file is represented using\nattribute/value pairs. Meta-data attributes are classified into four\ncategories:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"System-defined attributes"),": size (bytes), checksums (adler32, md5),\ncreationtime, modificationtime, status, length (datasets/containers)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Physics attributes"),": GUID, number of events, project, datatype, run_number,\nstream_name, prod_step, version, campaign, lumiblocknr"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Workflow management attributes"),": storing information like which task\n(task_id) or job (panda_id) produced the file"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Data management attributes"),": necessary for the organisation of data on the\ngrid (see Replica Management section)")),Object(i.b)("p",null,"For datasets, it is possible that the value of a meta-data attribute is\na function of the meta-data of its constituents, e.g. the total size is\nthe sum of the sizes of the constituents. In this case it is not\npossible to assign a value to it."))}d.isMDXComponent=!0},389:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=r.a.createContext({}),l=function(t){var e=r.a.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=l(t.components);return r.a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=l(a),m=n,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return a?r.a.createElement(b,s(s({ref:e},u),{},{components:a})):r.a.createElement(b,s({ref:e},u))}));function b(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);