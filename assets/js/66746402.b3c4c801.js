"use strict";(self.webpackChunkaquila=self.webpackChunkaquila||[]).push([[98],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:2},l="Serving a model",u={unversionedId:"hub/concepts/Serving a model",id:"hub/concepts/Serving a model",isDocsHomePage:!1,title:"Serving a model",description:"Aquila Hub serves multiple models. It dynamically switches to corresponding model for the database specified in the query.",source:"@site/docs/hub/concepts/Serving a model.md",sourceDirName:"hub/concepts",slug:"/hub/concepts/Serving a model",permalink:"/docs/hub/concepts/Serving a model",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hub/concepts/Serving a model.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Dynamic loading a model",permalink:"/docs/hub/concepts/Dynamic loading a model"},next:{title:"API",permalink:"/docs/hub/apis/API"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"serving-a-model"},"Serving a model"),(0,i.kt)("p",null,"Aquila Hub serves multiple models. It dynamically switches to corresponding model for the database specified in the query."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An Aquila Hub node should load models from disk on ",(0,i.kt)("inlineCode",{parentName:"li"},'"compress query"')," if not loaded previously (this might happen on failure recovery of a node)."),(0,i.kt)("li",{parentName:"ul"},"If a model is not available on disk, it should fail a ",(0,i.kt)("inlineCode",{parentName:"li"},'"compress query"'),"."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},'"Compression Model"')," should accept batched inputs for compression.")))}d.isMDXComponent=!0}}]);