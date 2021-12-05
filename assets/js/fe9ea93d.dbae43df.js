"use strict";(self.webpackChunkaquila=self.webpackChunkaquila||[]).push([[979],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(f,c(c({ref:t},d),{},{components:n})):a.createElement(f,c({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3582:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),c=["components"],i={sidebar_position:2},s="Schema",l={unversionedId:"db/concepts/database/Schema",id:"db/concepts/database/Schema",isDocsHomePage:!1,title:"Schema",description:"A schema is a JSON Schema object which takes the following form. The ordering of keys should be maintained the same way as seen below:",source:"@site/docs/db/concepts/database/Schema.md",sourceDirName:"db/concepts/database",slug:"/db/concepts/database/Schema",permalink:"/docs/db/concepts/database/Schema",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/db/concepts/database/Schema.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Database (Search Index)",permalink:"/docs/db/concepts/database/Database"},next:{title:"Metadata",permalink:"/docs/db/concepts/database/Metadata"}},d=[{value:"Schema definition",id:"schema-definition",children:[],level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"schema"},"Schema"),(0,o.kt)("p",null,"A schema is a ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema")," object which takes the following form. The ordering of keys should be maintained the same way as seen below: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ \n        "$schema": "http://json-schema.org/schema#", \n        "$id": "//aquilanetwork/schema/id/v1", \n        "title": "Schema", \n        "description": "<collected from the user API>",\n        "encoder": "<collected from the user API>",\n        "unique": "<collected from the user API>",\n        "type": "object",\n        "properties": {\n            "code": {\n                "description": "Encoded data",\n                "type": "array",\n                "items": {\n                    "type": "number"\n                },\n             "maxItems": "<collected from the user API>"\n            },\n            "metadata": {\n                "$ref": "#/definitions/metadata"\n            }\n        },\n        "definitions": {\n            "metadata": {\n                "description": "User defined metadata",\n                "type": "object",\n                "properties": {\n                    "<collected metadata key1 from the user API>": {\n                        "type": "<collected type1 from the user API>"\n                    },\n                    "<...>": {...}\n                },\n                "required": ["<collected key1 from the user API>", <...>]\n            }\n        },\n        "required": ["code", "metadata"]\n    }\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Metadata is organised in such a way to preserve the alphabetical order of keys.")),(0,o.kt)("h3",{id:"schema-definition"},"Schema definition"),(0,o.kt)("p",null,"Above JSON object is auto-generated within Aquila DB (system level) and is the original schema over which CID is generated. Aquila DB should also accept a different JSON schema definition at the API (user level) which is intended to collect all the necessary information from the user to generate the original system level schema. Here is an example schema definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "description": "Database description",\n    "unique": "random",\n    "encoder": "example.com/autoencoder.model",\n    "codelen": 300,\n    "metadata": {\n        "name": "string",\n        "age": "number"\n    }\n}\n')))}m.isMDXComponent=!0}}]);