"use strict";(self.webpackChunkaquila=self.webpackChunkaquila||[]).push([[888],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=o,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1167:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={sidebar_position:3},c="Metadata",l={unversionedId:"db/concepts/database/Metadata",id:"db/concepts/database/Metadata",isDocsHomePage:!1,title:"Metadata",description:"Aquila DB is vector + document database. The reasons for choosing this combination are the following:",source:"@site/docs/db/concepts/database/Metadata.md",sourceDirName:"db/concepts/database",slug:"/db/concepts/database/Metadata",permalink:"/docs/db/concepts/database/Metadata",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/db/concepts/database/Metadata.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Schema",permalink:"/docs/db/concepts/database/Schema"},next:{title:"Schema Validation",permalink:"/docs/db/concepts/database/Schema validation"}},d=[],u={toc:d};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"Aquila DB is vector + document database. The reasons for choosing this combination are the following:"),(0,r.kt)("p",null,"Vectors are abstract (lossy / lossless compression) information. It represents something meaningful in the real world. However, the vector representation itself is not self explanatory. It should be accompanied by a global transformation (as defined by the probability distribution) function and an associated metadata. All three components above are needed together to represent a real world meaning. Missing / misalignment of at least one component would result in chaos."),(0,r.kt)("p",null,"In Aquila DB, metadata should always be associated with the vector. It is the least amount of data, which is needed to unravel the entire information outside of Aquila DB. For example, it can simply be an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," towards information stored in some other databases such as MySQL or MongoDB. It can also be URLs, ContentIDs, Link to other Aquila DB documents etc. Metadata in Aquila DB is a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," object. JSON objects are the most friendly data structure to most of the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Agent_(economics)"},"agents")," we know."),(0,r.kt)("p",null,"For convenience, Aquila DB requires the expected ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," object to be defined early on as part of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Aquila-Network/specs/blob/main/adb/Schema.md#schema-definition"},"schema definition")," along with the data types. And when vectors are inserted, the documents are checked for metadata (all keys are mandatory) and validated. "),(0,r.kt)("p",null,"Currently, accepted types of metadata values are ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important"),": Aquila DB will accept any extra information added to the document. This information will be treated as payload, will be moved to a secondary storage, will not be replicated through Aquila Network but the secondary storage network and is ignored in querying and filtering operations.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Aquila DB users must maintain external storage networks and second level filtering mechanisms outside of Aquila DB.")))}p.isMDXComponent=!0}}]);