(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var i=n(3),o=n(7),a=(n(0),n(442)),r=["components"],c={title:"Rest Api Documentation"},p={unversionedId:"rest_api_doc",id:"rest_api_doc",isDocsHomePage:!1,title:"Rest Api Documentation",description:"Rucio provides a Rest Api interface for client-server communication. The code",source:"@site/../docs/rest_api_doc.md",sourceDirName:".",slug:"/rest_api_doc",permalink:"/documentation/rest_api_doc",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/rest_api_doc.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1662710145,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Rest Api Documentation"},sidebar:"docs",previous:{title:"Contributing Guide",permalink:"/documentation/contributing"},next:{title:"Component development leads",permalink:"/documentation/component_leads"}},s=[{value:"Tools",id:"tools",children:[{value:"ApiSpec",id:"apispec",children:[]},{value:"ReDoc",id:"redoc",children:[]},{value:"@redocly/openapi-cli",id:"redoclyopenapi-cli",children:[]}]},{value:"Tips",id:"tips",children:[{value:"Build/verify often",id:"buildverify-often",children:[]},{value:"Commit the doc and code changes together",id:"commit-the-doc-and-code-changes-together",children:[]},{value:"Skim the OpenApi definition",id:"skim-the-openapi-definition",children:[]},{value:"OpenApi Tools",id:"openapi-tools",children:[]}]}],d={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,r);return Object(a.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Rucio provides a Rest Api interface for client-server communication. The code\nfor the server is located in the Rucio project under ",Object(a.b)("inlineCode",{parentName:"p"},"lib/rucio/rest/flask/v1"),"."),Object(a.b)("p",null,"The Rest Api Documentation provides a sufficient documentation of all endpoints\nand should be descriptive enough so that it is not required to look at the code\nanymore."),Object(a.b)("h2",{id:"tools"},"Tools"),Object(a.b)("p",null,"The main framework for the Rest Api Documentation is ",Object(a.b)("strong",{parentName:"p"},"OpenApi"),". ApiSpec\nextracts the OpenApi specification conform method documentation strings from the\nFlask Api and constructs the overall OpenApi specification file. This\nspecification file contains all endpoints and their parameter and return value\ndocumentation."),Object(a.b)("h3",{id:"apispec"},"ApiSpec"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ApiSpec")," is a python framework to extract Python doc comments and generate a\nvalid OpenApi spec file from it. The documentation for each endpoint is a\nyaml-conform python method doc string starting after ",Object(a.b)("inlineCode",{parentName:"p"},"---"),". The\n",Object(a.b)("inlineCode",{parentName:"p"},"apispec_webframeworks.flask")," library connects the Python doc comments with the\nendpoints given by Flask."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"tools/generate_rest_api_doc.py")," generates the OpenApi specification file with\nApiSpec."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The latest OpenApi specification for the Rest Api Documentation is available\n",Object(a.b)("a",{parentName:"p",href:"pathname:///yaml/rest_api_doc_spec.yaml"},"here"),"."))),Object(a.b)("h3",{id:"redoc"},"ReDoc"),Object(a.b)("p",null,"ReDoc creates a static html front-end for a given specification file. ReDoc has\nseveral advantages over other front-end tools:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"It is fast."),Object(a.b)("li",{parentName:"ul"},'The generated output is a static file, thus no "hosting" is needed.'),Object(a.b)("li",{parentName:"ul"},"The generated file is structured, easy to read, contains a search field, and\nthe possibility to display examples.")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Front-end generators only need the spec file and some configuration to generate\na user friendly view of the documentation. Select a generator from the ",Object(a.b)("a",{parentName:"p",href:"https://openapi.tools/#documentation"},"OpenApi\nTools")," and generate your own front-end."))),Object(a.b)("p",null,"To generate the ReDoc html file run"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm install -g redoc-cli\nredoc-cli build rest_api_doc_spec_file.yaml --output rest_api_doc.html\n")),Object(a.b)("h3",{id:"redoclyopenapi-cli"},"@redocly/openapi-cli"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"openapi-cli")," verifies the integrity of the generated spec file. Common\nproblems, e.g. typos in keywords and duplicated path specifications, get\nfiltered and produces an error, if found."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"openapi-cli")," is integrated in the Github Actions, they run in the ",Object(a.b)("inlineCode",{parentName:"p"},"syntax")," test\nsuite. To manually check the generated spec file, run"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"rucio/tools/test/check_rest_api_documentation.sh FILE\n")),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("h3",{id:"buildverify-often"},"Build/verify often"),Object(a.b)("p",null,"Syntax errors are not easy to spot and appear often. To efficiently add new\ndocumentation or edit multiple old ones, gradually apply your changes and\nbuild/verify the spec file (both steps take not more than a few seconds). This\nway any error gets caught in the development cycle, not at the end."),Object(a.b)("h3",{id:"commit-the-doc-and-code-changes-together"},"Commit the doc and code changes together"),Object(a.b)("p",null,"The doc changes are tightly coupled with the code. Making a lot of changes to\nthe code and then one commit with all the documentation changes leads to a\ndivergent history (What if the code commits get reverted?)."),Object(a.b)("h3",{id:"skim-the-openapi-definition"},"Skim the ",Object(a.b)("a",{parentName:"h3",href:"https://swagger.io/specification/"},"OpenApi")," definition"),Object(a.b)("p",null,"OpenApi is feature rich and may have some easier/standardized way to express\nwhat you think. E.g. deprecated fields can be marked with ",Object(a.b)("inlineCode",{parentName:"p"},"deprecated: true"),".\nKnowing the framework and library you're working with is always a good idea. ;-)"),Object(a.b)("h3",{id:"openapi-tools"},Object(a.b)("a",{parentName:"h3",href:"https://openapi.tools/"},"OpenApi Tools")),Object(a.b)("p",null,"The OpenApi Tools are a collection of tools to support writing, verifying and\ndisplaying Rest Api Documentations. They also provide some ideas on how to\nfurther integrate the documentation into other parts of your code base, e.g. for\ninput validation."))}l.isMDXComponent=!0},442:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=d(n),u=i,b=l["".concat(r,".").concat(u)]||l[u]||m[u]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);