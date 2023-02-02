"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,c=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return n?a.createElement(c,r(r({ref:t},d),{},{components:n})):a.createElement(c,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"Type Annotation Guide"},p=void 0,s={unversionedId:"type_annotation_guide",id:"type_annotation_guide",title:"Type Annotation Guide",description:"The purpose of this document is to collaboratively create the developer",source:"@site/../docs/type_annotation_guide.md",sourceDirName:".",slug:"/type_annotation_guide",permalink:"/documentation/type_annotation_guide",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/type_annotation_guide.md",tags:[],version:"current",lastUpdatedBy:"Domenic Gosein",lastUpdatedAt:1675351291,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{title:"Type Annotation Guide"},sidebar:"docs",previous:{title:"Component leads",permalink:"/documentation/component_leads"},next:{title:"About Our Contributors",permalink:"/documentation/about_our_contributors"}},d={},u=[{value:"Abstract",id:"abstract",level:2},{value:"Type Annotations",id:"type-annotations",level:2},{value:"General Information",id:"general-information",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Why",id:"why",level:2},{value:"Type Annotations in Rucio",id:"type-annotations-in-rucio",level:2},{value:"What not to type annotate",id:"what-not-to-type-annotate",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"GitHub Actions",id:"github-actions",level:3},{value:"Best Practices",id:"best-practices",level:3},{value:"Common Types",id:"common-types",level:3}],m={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The purpose of this document is to collaboratively create the developer\nguidelines for static type checking of rucio's codebase."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TL;DR")," New code has to be type annotated, old code should be migrated. Look\ninto ",(0,o.kt)("a",{parentName:"p",href:"#Best-Practices"},"Best Practices")," for specific instructions on how to use\nit in our repository."),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"Python is a dynamically-typed programming language. Dynamic type checked\nprogramming languages verify the type safety at runtime. Type-related bugs thus\noccur at runtime. Tests are in place to check the types and prevent\nbugs. However, tests do not always cover all possible combinations of types."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0484/"},"PEP 484"),", which got adopted into the ",(0,o.kt)("em",{parentName:"p"},"Python\nLanguage Reference")," of Python3.6 and is thus a part of Python itself, introduces\n",(0,o.kt)("em",{parentName:"p"},"type hints")," to Python. Type hints add more information to the source code and\nallow us to automatically check the code for type missmatches. Type-related bugs\nwill thereby be checked at compile time (pre-runtime), rather than at\nruntime. Type hints also increase the descriptiveness of our code and make it\neasier to read."),(0,o.kt)("p",null,"Rucio does not has type hints at the moment. The plan is to introduce them\nconsistently to the entire project. Adding type hints to a big project is\nchallenging. Since the code-base is too large to introduce them with only one\nPR, we will introduce the hints incrementally."),(0,o.kt)("h2",{id:"type-annotations"},"Type Annotations"),(0,o.kt)("h3",{id:"general-information"},"General Information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://peps.python.org/pep-0483/"},(0,o.kt)("strong",{parentName:"a"},"PEP 483 \u2013 The Theory of Type Hints")),"\nThis ",(0,o.kt)("em",{parentName:"li"},"PEP")," explains the theory behind type hints, as well as backgrounds to\ncertain decisions.")),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"There are comprehensive and descriptive documentations on the web on how to\nannotate python code with type hints. E.g.:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html"},(0,o.kt)("strong",{parentName:"a"},"MyPy type hints cheat\nsheet"))," The cheat\nsheet contains information on the syntax of type annotations and ",(0,o.kt)("em",{parentName:"p"},"which ones"),"\nto use ",(0,o.kt)("em",{parentName:"p"},"when"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0484/"},(0,o.kt)("strong",{parentName:"a"},"PEP 484 \u2013 Type Hints"))," Contains general\ninformation about type hints in Python. This includes the motivation, the\ndefinition, what to do with edge cases, and much more.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0589/"},(0,o.kt)("strong",{parentName:"a"},"PEP 589 \u2013 TypedDict: Type Hints for Dictionaries with a Fixed Set of\nKeys"))," Explains how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"TypedDict")," and\nwhat to regard while using them."))),(0,o.kt)("h2",{id:"why"},"Why"),(0,o.kt)("p",null,"Dynamically typed programming languages execute many common programming\nbehaviours, that static programming languages perform during compilation, at\nruntime. While this is leads to quick prototyping, big projects could suffer\nfrom some consequences. In particular:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The code is harder to read: Parameters and return types are specified in typed\nlanguages, they give some hints on how to call a function and what to\nexpect. Bugs and inconsistencies can be spotet easier (e.g. when a "get"\nfunction return a list), and some IDEs display these information for a more\nconvenient coding experience. All of this is missing in dynamically typed\nprogramming languages.'),(0,o.kt)("li",{parentName:"ul"},"Type related bugs do not get noticed: Calling a function with a wrong type\n(e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"None"),") gets spotet by typed checkers. In dynamically typed programming\nlanguages this needs to be veryfied on every call.")),(0,o.kt)("p",null,"While we have strong arguments for type annotations, there are some drawbacks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It takes more time to write code: The type annotations need to be specified\nand added, which is tedious in a big code base."),(0,o.kt)("li",{parentName:"ul"},"They add little value if dicts are used heavily: The keys of dicts are not\ntype checked, only the potential values. Big dictionaries thus have a lot of\ndifferent value types, while the check if a key exists still needs to be done.")),(0,o.kt)("h2",{id:"type-annotations-in-rucio"},"Type Annotations in Rucio"),(0,o.kt)("p",null,"Adding type annotations is not always trivial. Some types might be to ambigous,\nsome might be to generic. A good reference point is existing type annotated\n",(0,o.kt)("em",{parentName:"p"},"Rucio")," code. It will give hints on what types may be used and how to properly\nused them in the code."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Don't just copy the types from existing code, think about them!"),(0,o.kt)("p",{parentName:"admonition"},"Ask yourself: Is this use-case the same? Could I be more specific than just\n",(0,o.kt)("inlineCode",{parentName:"p"},"Any"),". Could I use a class instead of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dict"),"? Should I introduce a new type\ninstead of using an existing one? ...")),(0,o.kt)("h3",{id:"what-not-to-type-annotate"},"What not to type annotate"),(0,o.kt)("p",null,"Not all Python code needs type annotations. Type annotations in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tests"),", for\nexample, would just add clutter and add very little benefits."),(0,o.kt)("p",null,"The following modules will ",(0,o.kt)("strong",{parentName:"p"},"not")," be type annotated:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tools"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The tools folder contains some Python scripts. While type annotations\nwould help fixing bugs, the code itself is not shipped and will not be run\nin a production environment."),(0,o.kt)("li",{parentName:"ul"},"We could add support later, however this is not our main concern atm."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bin"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The Rucio executables don't call the core or api call directly, but rather\nuse the client. We could activate it once to Python2 support is dropped."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lib/rucio/tests"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The tests are volatile and should be easy to change. Type annotations\nwould just add clutter and very little benefits."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lib/rucio/db"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The db module is used as a dependency of core. While we need the types, we\nuse very little functions out of it. We might activate support later,\nhowever we want to focus on core right now.")))),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"To properly use the benefits of type annotated code, we also have to look into\nour dependencies. All of our frequently used dependencies provide type\nannotations out of the box or via extensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Python standard library"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Typehints were added in 3.5.0"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sqlalchemy"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Type hints were introduced in version 2.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sqlalchemy-stubs")," provide types for versions < 2.0"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"alembic"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Type hints are provided. Not important at the moment, since we are not\nadding type hints for the db migration."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"flask"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Type hints are provided"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"six"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"types-six")," package provides typehints."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"six")," might be removed from the repository in the future."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requests"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"types-requests")," package provides typehints.")))),(0,o.kt)("p",null,"Some types from our dependencies, like the ",(0,o.kt)("em",{parentName:"p"},"sqlalchemy")," ",(0,o.kt)("inlineCode",{parentName:"p"},"orm.session.Session"),",\ncan be used directly. It is not needed to create our own equivalent then, except\nif they get translated to a rucio owned type."),(0,o.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,o.kt)("p",null,"A GitHub actions job ensures that newly written code contains type hints:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Check Python Type Annotations")," job in the autotests checks, if new code\ncontains type annotations. It does this by comparing the number of missing\npython type annotations before the changes with the number of missing python\ntype annotations after the changes. If the number before is less then the number\nafter, new code, which is not typed, was added. The script then exits with a\nnon-zero exit code. If it is equals or bigger, type annotations have been added\nto the repository."),(0,o.kt)("p",null,"As of now, only the number of ",(0,o.kt)("em",{parentName:"p"},"missing")," type annotations will be used. The job\ndoes not check for wrong type hints or inconsistencies. This (specifically\n",(0,o.kt)("inlineCode",{parentName:"p"},"mypy"),") will be enabled once enough python type hints are added. For this\npurpose, we will always add type annotations to functions, even when the type\ncan be infered."),(0,o.kt)("h3",{id:"best-practices"},"Best Practices"),(0,o.kt)("p",null,"To ensure a consistent usage of type hints, you should pay attention to the\nfollowing best practices:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use ",(0,o.kt)("em",{parentName:"strong"},"Python 3.6")," style type hints")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There are multiple ways to specify type hints in Python. We agreed to use\nthe Python 3.6 style, since it's easy to read and we don't need the\nbackwards-compatibility."),(0,o.kt)("li",{parentName:"ul"},"E.g. favor ",(0,o.kt)("inlineCode",{parentName:"li"},"def add_rse(rse: str, vo: str = 'def', ...) -> str:")," over ",(0,o.kt)("inlineCode",{parentName:"li"},"def\nadd_rse(rse, vo='def', ...): # type: (str, str, ...) -> str")),(0,o.kt)("li",{parentName:"ul"},"Don't use Python 3.6 incompatible features, this includes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#types-union"},(0,o.kt)("inlineCode",{parentName:"a"},'Union type expression "(int |\nNone)"')),",\nthis got introduces in Pyhton 3.10"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.TypeAlias"},(0,o.kt)("inlineCode",{parentName:"a"},"typing.TypeAlias")),",\nthis got introduced in Python 3.10"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Final"},(0,o.kt)("inlineCode",{parentName:"a"},"typing.Final")),",\nintroduced in Python 3.8. (Sad, since it is quite handy to let the type\nchecker check for constant re-assignments. :( )"),(0,o.kt)("li",{parentName:"ul"},"Paramterized Python buildin types like ",(0,o.kt)("inlineCode",{parentName:"li"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"dict"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"set"),", ...",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Parameterized buildin types are recognized by type checkers since\nPython version 3.9. This follows after ",(0,o.kt)("a",{parentName:"li",href:"https://peps.python.org/pep-0585/"},"PEP\n585"),". Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"typing")," module\ninstead."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"__future__")," module provides a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/__future__.html"},"backport for parameterized buildin\ntypes")," for\nPython3.7+. This is not suitable for Python3.6"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3.8/library/typing.html#typing.TypedDict"},(0,o.kt)("inlineCode",{parentName:"a"},"Typed\nDicts")),",\nintroduced in Python3.8")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use ",(0,o.kt)("em",{parentName:"strong"},"bare")," type hints over ",(0,o.kt)("a",{parentName:"strong",href:"https://peps.python.org/pep-0484/#runtime-or-type-checking"},"ones with\nquotes")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"if\ntying.TYPE_CHECKING:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Quoted type hints enable "foreward references". This enables us to not\nexecute expencive code while still having type checks.'),(0,o.kt)("li",{parentName:"ul"},"As long as the performance is immesurable small and not a problem, this\nshould be avoided, since it > ","[name=Joel Dierkes]"," Dunno about this part. Should\nwe use ",(0,o.kt)("inlineCode",{parentName:"li"},"if typing.TYPE_CHECKING:")," and quoted types or avoid them?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Be as specific as possible")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the types of the keys and values of a dict are known, specify\nthem. (E.g. Use ",(0,o.kt)("inlineCode",{parentName:"li"},"Dict[str, str]")," over ",(0,o.kt)("inlineCode",{parentName:"li"},"Dict"),")."),(0,o.kt)("li",{parentName:"ul"},"If the types of all items in a list are known, specify them\n(E.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"List[int]")," over ",(0,o.kt)("inlineCode",{parentName:"li"},"List"),")"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Avoid ",(0,o.kt)("inlineCode",{parentName:"strong"},"Dicts"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Strongly typed structures should be prefered, since they are more\ndescriptive and easier to use in the future."),(0,o.kt)("li",{parentName:"ul"},'"Was the id key in the ',(0,o.kt)("inlineCode",{parentName:"li"},"Dict")," named ",(0,o.kt)("inlineCode",{parentName:"li"},"_id")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"id"),'?" is a question that\nshould not occur.')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Avoid the ",(0,o.kt)("inlineCode",{parentName:"strong"},"Optional")," type")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Optional")," type highlights that a value ",(0,o.kt)("em",{parentName:"li"},"might")," be ",(0,o.kt)("inlineCode",{parentName:"li"},"None"),". As a result\nthe value ",(0,o.kt)("em",{parentName:"li"},"has")," to be checked for ",(0,o.kt)("inlineCode",{parentName:"li"},"None")," on every usage (",(0,o.kt)("inlineCode",{parentName:"li"},"if value: "),")."),(0,o.kt)("li",{parentName:"ul"},"While sometimes this cannot be avoided, the ",(0,o.kt)("inlineCode",{parentName:"li"},"Optional"),' type should be used\nspearly. Most of the times a propper initialization of the variable is\nenough to get rid of it. If it makes sense that a type can be\n"non-existent", it is appropriate to use the ',(0,o.kt)("inlineCode",{parentName:"li"},"Option")," type.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Avoid the ",(0,o.kt)("inlineCode",{parentName:"strong"},"Union")," type")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Union")," type indicates, that one of multiple different types may be\nreturned. This can be confusing and resolves in the need of testing, which\ntype is returned."),(0,o.kt)("li",{parentName:"ul"},"Split the function or variable, which used the ",(0,o.kt)("inlineCode",{parentName:"li"},"Union")," type, in multiple\nones. This resolves in more readable code and is unambiguous. This also\nfollows the ",(0,o.kt)("inlineCode",{parentName:"li"},"A function does one, and only one thing")," rule.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use\n",(0,o.kt)("a",{parentName:"strong",href:"https://docs.python.org/3/library/typing.html#typing.NoReturn"},(0,o.kt)("inlineCode",{parentName:"a"},"typing.NoReturn")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is used to indicate a never terminating function (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"while\nTrue:"),"). Use this annotation to indicate these kind of functions.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use\n",(0,o.kt)("a",{parentName:"strong",href:"https://docs.python.org/3/library/typing.html#typing.Iterator"},(0,o.kt)("inlineCode",{parentName:"a"},"typing.Iterator")),"\nover\n",(0,o.kt)("a",{parentName:"strong",href:"https://docs.python.org/3/library/typing.html#typing.Generator"},(0,o.kt)("inlineCode",{parentName:"a"},"typing.Generator")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"typing.Generator[YieldType, SendType, ReturnType]")," takes three Type Vars:\nThe Type that gets yielded, the type that gets send back to the yield, and the\nreturn type of the function. If a function does only yield values, but does\nnot take back values from the yield and also does not return anything with the\n",(0,o.kt)("inlineCode",{parentName:"li"},"return")," keyword, the type is ",(0,o.kt)("inlineCode",{parentName:"li"},"typing.Generator[YieldType, None, None]"),". This\nis equivalent to ",(0,o.kt)("inlineCode",{parentName:"li"},"typing.Iterator[YieldType]"),". We favor the ",(0,o.kt)("inlineCode",{parentName:"li"},"Iterator"),"\napproach over the ",(0,o.kt)("inlineCode",{parentName:"li"},"Generator")," one because it's more understandable and easier\nto read.")),(0,o.kt)("h3",{id:"common-types"},"Common Types"),(0,o.kt)("p",null,"To ensure a consistent use of type annotations in Rucio, here is a list of\ncommon variables with their corresponding type:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code section"),(0,o.kt)("th",{parentName:"tr",align:null},"Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"*"),(0,o.kt)("td",{parentName:"tr",align:null},"session"),(0,o.kt)("td",{parentName:"tr",align:null},"sqlalchemy.orm.session.Session"),(0,o.kt)("td",{parentName:"tr",align:null},"The sqlalchemy session.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DID"),(0,o.kt)("td",{parentName:"tr",align:null},"scope"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"str")),(0,o.kt)("td",{parentName:"tr",align:null},"The scope of a DID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DID"),(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"str")),(0,o.kt)("td",{parentName:"tr",align:null},"The name of a DID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DID"),(0,o.kt)("td",{parentName:"tr",align:null},"account"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"str")),(0,o.kt)("td",{parentName:"tr",align:null},"The account name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DID"),(0,o.kt)("td",{parentName:"tr",align:null},"did_type"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"str")),(0,o.kt)("td",{parentName:"tr",align:null},"The DID type.")))))}h.isMDXComponent=!0}}]);