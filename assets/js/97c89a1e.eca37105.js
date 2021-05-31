(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{219:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return u})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return p}));var t=n(3),o=n(7),i=(n(0),n(347)),c=["components"],a={title:"Running rucio-light-reaper"},u={unversionedId:"bin/rucio-light-reaper",id:"bin/rucio-light-reaper",isDocsHomePage:!1,title:"Running rucio-light-reaper",description:"`",source:"@site/../docs/bin/rucio-light-reaper.md",sourceDirName:"bin",slug:"/bin/rucio-light-reaper",permalink:"/documentation/bin/rucio-light-reaper",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-light-reaper.md",version:"current",frontMatter:{title:"Running rucio-light-reaper"}},s=[],l={toc:s};function p(e){var r=e.components,n=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-light-reaper [-h] [--run-once] [--total-workers TOTAL_WORKERS]\n                          [--chunk-size CHUNK_SIZE] [--scheme SCHEME]\n                          [--rses RSES [RSES ...]]\n                          [--exclude-rses EXCLUDE_RSES]\n                          [--include-rses INCLUDE_RSES] [--vos VOS [VOS ...]]\n\nThe light-reaper is responsible of deletion of temporary files\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-workers TOTAL_WORKERS\n                        Total number of workers per process\n  --chunk-size CHUNK_SIZE\n                        Chunk size\n  --scheme SCHEME       Force the reaper to use a particular protocol, e.g.,\n                        mock.\n  --rses RSES [RSES ...]\n                        List of RSEs\n  --exclude-rses EXCLUDE_RSES\n                        RSEs expression to exclude RSEs\n  --include-rses INCLUDE_RSES\n                        RSEs expression to include RSEs\n  --vos VOS [VOS ...]   Optional list of VOs to consider. Only used in multi-\n                        VO mode.\n")))}p.isMDXComponent=!0},347:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=t,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?o.a.createElement(m,a(a({ref:r},s),{},{components:n})):o.a.createElement(m,a({ref:r},s))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);