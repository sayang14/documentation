(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{245:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return f}));var n=r(3),o=r(7),i=(r(0),r(347)),c=["components"],a={title:"Running rucio-conveyor-fts-throttler"},u={unversionedId:"bin/rucio-conveyor-fts-throttler",id:"bin/rucio-conveyor-fts-throttler",isDocsHomePage:!1,title:"Running rucio-conveyor-fts-throttler",description:"`",source:"@site/../docs/bin/rucio-conveyor-fts-throttler.md",sourceDirName:"bin",slug:"/bin/rucio-conveyor-fts-throttler",permalink:"/documentation/bin/rucio-conveyor-fts-throttler",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-conveyor-fts-throttler.md",version:"current",frontMatter:{title:"Running rucio-conveyor-fts-throttler"}},l=[],s={toc:l};function f(e){var t=e.components,r=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-conveyor-fts-throttler [-h] [--run-once]\n                                    [--cycle_interval CYCLE_INTERVAL]\n\nThe fts_throttler daemon is responsible for automatically setting the\nconfigurations of FTS storages depending on specific transfer failures. It\ndoes this by retrieving transfer failure information from elastic search,\ndepending on their failure ratio. it will use http requests to set the storage\nconfigurations accordingly\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --cycle_interval CYCLE_INTERVAL\n                        interval for each cycle\n")))}f.isMDXComponent=!0},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),y=n,d=f["".concat(c,".").concat(y)]||f[y]||p[y]||i;return r?o.a.createElement(d,a(a({ref:t},l),{},{components:r})):o.a.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=y;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);