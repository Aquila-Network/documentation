"use strict";(self.webpackChunkaquila=self.webpackChunkaquila||[]).push([[284],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2096:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l="Intro: Aquila DB",c={unversionedId:"db/Aquila DB",id:"db/Aquila DB",isDocsHomePage:!1,title:"Intro: Aquila DB",description:"Aquila DB is at the core of everything in the Aquila Network ecosystem. It is a standalone latent vector search engine. Aquila DB allows the following, very basic operations:",source:"@site/docs/db/Aquila DB.md",sourceDirName:"db",slug:"/db/Aquila DB",permalink:"/docs/db/Aquila DB",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/db/Aquila DB.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/architecture"},next:{title:"Content Addressing",permalink:"/docs/db/concepts/Content Addressing"}},d=[],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro-aquila-db"},"Intro: Aquila DB"),(0,i.kt)("p",null,"Aquila DB is at the core of everything in the Aquila Network ecosystem. It is a standalone latent vector search engine. Aquila DB allows the following, very basic operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create database"),(0,i.kt)("p",{parentName:"li"},"Aquila DB accepts a schema definition and based on that schema, a database is created. Apart from other common databases, database name in Aquila DB is not decided by the user but Aquila DB itself. Database name is generated from the content id of schema definition to ensure a deterministic name for anyone who use the same schema, anywhere around the globe. Here's the magic: when a user connect their existing Aquila DB instance to participate in Aquila Network, this simple idea of content ID (hence database name) allows replication and synchronization of available documents in a database that anyone has created, automatically across the network. Not to worry of bad actors, it is possible to control what data is replicated to/from your Aquila DB instance, Aquila Network provides special control mechanisms for this.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Insert documents to a database"),(0,i.kt)("p",{parentName:"li"},"Once a database is created, a user is able to add JSON documents along with its vector embedding. Aquila DB validates the documents against database schema definition. If the validation succeeds, the JSON document and corresponding vector will be indexed inside ",(0,i.kt)("inlineCode",{parentName:"p"},"doc store")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"vec store")," respectively. Similar to database name generation, a document id is auto generated from its content id and it will be returned back to the user. This is to ensure that the same documents created independently across the globe will have same document id. A replication process will then be able to ignore already existing documents through Aquila Network.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pseudo delete a document from a database"),(0,i.kt)("p",{parentName:"li"},"Aquila DB is an append only, eventually consistent database. All insert / delete operations are kept inside it as append only logs. When a delete operation is performed, it doesn't actually delete the documents instead marks the document as deleted. The deleted documents will never participate in any of the retrieval operations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Search for nearest neighbours"),(0,i.kt)("p",{parentName:"li"},"Nearest neighbour search operation accepts vector encoding and number of documents (",(0,i.kt)("strong",{parentName:"p"},"k"),") to be retrieved as inputs. Aquila DB will perform cosine similarity search on the indexed documents and will return ",(0,i.kt)("strong",{parentName:"p"},"k")," nearest documents to the query vector."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"}," Note: It is an on going discussion whether to enable filtering on documents based on their JSON values. Since Aquila DB to be a part of already existing software infrastructure and databases, that is dedicated to provide complex filtering options anyway, we thought it might become an over engineered solution which contradicts with Aquila Network's simplicity mission. Also, Aquila X could still filter out Aquila DB's results. We're looking forward to see how community reacts to it.")),(0,i.kt)("h5",{parentName:"li",id:"notion-of-an-update-operation"},"Notion of an update operation"),(0,i.kt)("p",{parentName:"li"},"An update operation in Aquila DB is nothing but a ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," operation followed by a ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," operation. It is not implemented in Aquila DB. It is up to the application developer to do it when needed."))))}p.isMDXComponent=!0}}]);