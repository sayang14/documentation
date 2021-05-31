(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{347:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return y}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=o.a.createContext({}),l=function(e){var n=o.a.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=l(e.components);return o.a.createElement(a.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,a=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=t,y=p["".concat(i,".").concat(d)]||p[d]||f[d]||c;return r?o.a.createElement(y,s(s({ref:n},a),{},{components:r})):o.a.createElement(y,s({ref:n},a))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,i=new Array(c);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var a=2;a<c;a++)i[a]=r[a];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return u})),r.d(n,"toc",(function(){return a})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),c=(r(0),r(347)),i=["components"],s={title:"Running rucio-conveyor-stager"},u={unversionedId:"bin/rucio-conveyor-stager",id:"bin/rucio-conveyor-stager",isDocsHomePage:!1,title:"Running rucio-conveyor-stager",description:"`",source:"@site/../docs/bin/rucio-conveyor-stager.md",sourceDirName:"bin",slug:"/bin/rucio-conveyor-stager",permalink:"/documentation/bin/rucio-conveyor-stager",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-conveyor-stager.md",version:"current",frontMatter:{title:"Running rucio-conveyor-stager"}},a=[],l={toc:a};function p(e){var n=e.components,r=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"usage: rucio-conveyor-stager [-h] [--run-once] [--total-threads TOTAL_THREADS]\n                             [--bulk BULK] [--group-bulk GROUP_BULK]\n                             [--group-policy GROUP_POLICY] [--mock]\n                             [--source-strategy SOURCE_STRATEGY]\n                             [--exclude-rses EXCLUDE_RSES]\n                             [--include-rses INCLUDE_RSES]\n                             [--rses RSES [RSES ...]] [--vos VOS [VOS ...]]\n                             [--activities ACTIVITIES [ACTIVITIES ...]]\n                             [--sleep-time SLEEP_TIME] [--retry-other-fts]\n\nThe conveyor-stager is responsible for issuing staging requests to the tape\nsystem.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-threads TOTAL_THREADS\n                        Concurrency control: total number of threads per\n                        process\n  --bulk BULK           Bulk control: number of requests\n  --group-bulk GROUP_BULK\n                        Group control: number of requests per group\n  --group-policy GROUP_POLICY\n                        Group control: policy used to group. enum{rule, dest,\n                        src_dest, rule_src_dest}\n  --mock                Fake source replicas for requests\n  --source-strategy SOURCE_STRATEGY\n                        Source strategy. Overload the strategy defined in\n                        config DB.\n  --exclude-rses EXCLUDE_RSES\n                        RSE expression to exclude\n  --include-rses INCLUDE_RSES\n                        RSE expression to include\n  --rses RSES [RSES ...]\n                        Explicit list of RSEs to include\n  --vos VOS [VOS ...]   Optional list of VOs to consider. Only used in multi-\n                        VO mode.\n  --activities ACTIVITIES [ACTIVITIES ...]\n                        Explicit list of activities to include\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n  --retry-other-fts     retry on a different FTS\n")))}p.isMDXComponent=!0}}]);