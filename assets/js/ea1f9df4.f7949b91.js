"use strict";(self.webpackChunkaquila=self.webpackChunkaquila||[]).push([[854],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9568:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:1},c="Dynamic loading a model",s={unversionedId:"hub/concepts/Dynamic loading a model",id:"hub/concepts/Dynamic loading a model",isDocsHomePage:!1,title:"Dynamic loading a model",description:'Aquila Hub serves compressor models to generate latent vector for an input data. Deep Learning models are really good knowledge compressors - hence the name "compressor model".',source:"@site/docs/hub/concepts/Dynamic loading a model.md",sourceDirName:"hub/concepts",slug:"/hub/concepts/Dynamic loading a model",permalink:"/docs/hub/concepts/Dynamic loading a model",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/hub/concepts/Dynamic loading a model.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro: Aquila Hub",permalink:"/docs/hub/Aquila Hub"},next:{title:"Serving a model",permalink:"/docs/hub/concepts/Serving a model"}},u=[],d={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dynamic-loading-a-model"},"Dynamic loading a model"),(0,a.kt)("p",null,"Aquila Hub serves ",(0,a.kt)("inlineCode",{parentName:"p"},"compressor models")," to generate latent vector for an input data. Deep Learning models are really good knowledge compressors - hence the name ",(0,a.kt)("inlineCode",{parentName:"p"},'"compressor model"'),"."),(0,a.kt)("p",null,"As seen in Aquila DB ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Aquila-Network/specs/blob/main/adb/Schema.md"},"Schema specification"),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"encoder"')," key in a ",(0,a.kt)("inlineCode",{parentName:"p"},"shema definition")," specified which model to be loaded and used to compress data for a particular database. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An Aquila Hub node should validate CID of the schema definition with corresponding database name. "),(0,a.kt)("li",{parentName:"ul"},"On successful validation, an Aquila Hub node should parse value corresponding to the ",(0,a.kt)("inlineCode",{parentName:"li"},'"encoder"')," key in the schema and validate it. "),(0,a.kt)("li",{parentName:"ul"},"On successful validation, an Aquila Hub node should download ",(0,a.kt)("inlineCode",{parentName:"li"},'"compressor model"')," from the URL and should keep in local storage."),(0,a.kt)("li",{parentName:"ul"},"After ensuring safe storage of the model on disk, an Aquila Hub node should load the model to main memory as a service.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"a ",(0,a.kt)("inlineCode",{parentName:"p"},"URL")," can be ",(0,a.kt)("inlineCode",{parentName:"p"},"location addressed")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"content addressed"),".")))}p.isMDXComponent=!0}}]);