(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{125:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return u})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),i=(r(0),r(347)),c=["components"],a={title:"Running rucio-reaper"},u={unversionedId:"bin/rucio-reaper",id:"bin/rucio-reaper",isDocsHomePage:!1,title:"Running rucio-reaper",description:"`",source:"@site/../docs/bin/rucio-reaper.md",sourceDirName:"bin",slug:"/bin/rucio-reaper",permalink:"/documentation/bin/rucio-reaper",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-reaper.md",version:"current",frontMatter:{title:"Running rucio-reaper"}},s=[],l={toc:s};function p(e){var n=e.components,r=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-reaper [-h] [--run-once] [--threads THREADS]\n                    [--chunk_size CHUNK_SIZE] [--sleep-time SLEEP_TIME]\n                    [--greedy] [--exclude-rses EXCLUDE_RSES]\n                    [--include-rses INCLUDE_RSES] [--rses RSES [RSES ...]]\n                    [--vos VOS [VOS ...]] [--delay-seconds DELAY_SECONDS]\n                    [--scheme SCHEME]\n                    [--auto_exclude_threshold AUTO_EXCLUDE_THRESHOLD]\n                    [--auto_exclude_timeout AUTO_EXCLUDE_TIMEOUT]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            Runs one loop iteration\n  --threads THREADS     Concurrency control: number of threads\n  --chunk_size CHUNK_SIZE\n                        The size used for a bulk deletion on on RSE\n  --sleep-time SLEEP_TIME\n                        Minimum time between 2 consecutive cycles\n  --greedy              To enable greedy mode. Deprecated, kept for\n                        compatibility reasons. Recommended way is to use RSE\n                        attribute greedyDeletion=True\n  --exclude-rses EXCLUDE_RSES\n                        RSE expression to exclude\n  --include-rses INCLUDE_RSES\n                        RSE expression to include\n  --rses RSES [RSES ...]\n                        Explicit list of RSEs to include. If empty, it\n                        considers all RSEs\n  --vos VOS [VOS ...]   Optional list of VOs to consider. Only used in multi-\n                        VO mode.\n  --delay-seconds DELAY_SECONDS\n                        The delay (seconds) to query replicas in BEING_DELETED\n                        state.\n  --scheme SCHEME       Force the reaper to use a particular protocol/scheme,\n                        e.g., mock\n  --auto_exclude_threshold AUTO_EXCLUDE_THRESHOLD\n                        Number of service unavailable exceptions after which\n                        the RSE gets temporarily excluded.\n  --auto_exclude_timeout AUTO_EXCLUDE_TIMEOUT\n                        Timeout for temporarily excluded RSEs.\n")))}p.isMDXComponent=!0},347:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return E}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=t,E=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?o.a.createElement(E,a(a({ref:n},s),{},{components:r})):o.a.createElement(E,a({ref:n},s))}));function E(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);