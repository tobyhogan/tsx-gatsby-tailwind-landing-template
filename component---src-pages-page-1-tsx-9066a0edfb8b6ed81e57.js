"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[132],{3020:function(e,t,r){var a=r(758);t.A=function(){return a.createElement("footer",{className:"text-center py-8"},a.createElement("p",null,"© Project Name 2024"))}},6942:function(e,t,r){var a=r(758),l=r(9789),n=r(1336);t.A=function(){const{0:e,1:t}=(0,a.useState)(!1),{0:r,1:c}=(0,a.useState)(!1),o=a.createElement(a.Fragment,null,a.createElement(l.Link,{to:"/demos",className:"Link2 hover:underline"},"Component Demos"),a.createElement(l.Link,{to:"/page1",className:"Link2 hover:underline"},"Page 2"),a.createElement(l.Link,{to:"/page2",className:"Link2 hover:underline"},"Page 2"));function s(){"light"==localStorage.getItem("theme")?(localStorage.setItem("theme","dark"),document.body.classList.add("dark"),document.body.classList.remove("light"),c(!0)):"dark"==localStorage.getItem("theme")&&(localStorage.setItem("theme","light"),document.body.classList.add("light"),document.body.classList.remove("dark"),c(!1))}return(0,a.useEffect)((()=>{localStorage.getItem("theme")?"light"==localStorage.getItem("theme")?(document.body.classList.add("light"),c(!1)):"dark"==localStorage.getItem("theme")&&(document.body.classList.add("dark"),c(!0)):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme","dark"),document.body.classList.add("dark"),c(!0))}),[]),a.createElement("header",{className:"NavBar flex justify-between"},a.createElement(l.Link,{to:"/",className:"Link1 ml-14 pt-3 pb-4"},"Project Title"),a.createElement("div",{className:"flex flex-row"},a.createElement("div",{className:"FullNav"},a.createElement("ul",{className:"flex mt-7 mr-3"},o)),a.createElement("div",{className:"ToggleNav"},a.createElement("button",{onClick:()=>{t((e=>!e))}},a.createElement(n.vIB,{className:"ml-4 mr-8 mt-4 text-black dark:text-white",size:30})),e?a.createElement("div",{className:"border-1 border-slate-300 border-2 pt-4 ml-[-53px] pb-7 pl-2 pr-8  absolute rounded-md bg-white dark:bg-slate-700"},a.createElement("ul",{className:"flex flex-col text-start ml-3"},o)):null),a.createElement("div",{className:"ThemeToggler"},r?a.createElement("button",{onClick:s},a.createElement(n.NmZ,{size:28,className:"text-black dark:text-white"})):a.createElement("button",{onClick:s},a.createElement(n.N3N,{size:28,className:"text-black dark:text-white"})))))}},1165:function(e,t,r){r.r(t),r.d(t,{Head:function(){return c}});var a=r(758),l=r(6942),n=r(3020);t.default=()=>a.createElement("div",{className:""},a.createElement(l.A,null),a.createElement("main",{className:"flex flex-col"},a.createElement("h1",{className:"text-3xl pt-16"},"Page 1"),a.createElement("p",{className:"mx-auto w-[50%] mt-8 mb-[59.9vh] text-center"},"This is some page 1 content here, you can write whatever you want about your project here, details and especially specifics to what might be on page 1")),a.createElement(n.A,null));const c=()=>a.createElement("title",null,"Page 1")},1714:function(e,t,r){r.d(t,{k5:function(){return f}});var a=r(758),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(l),c=["attr","size","title"];function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>a.createElement(e.tag,m({key:t},e.attr),d(e.child))))}function f(e){return t=>a.createElement(b,s({attr:m({},e.attr)},t),d(e.child))}function b(e){var t=t=>{var r,{attr:l,size:n,title:i}=e,u=o(e,c),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==n?a.createElement(n.Consumer,null,(e=>t(e))):t(l)}}}]);
//# sourceMappingURL=component---src-pages-page-1-tsx-9066a0edfb8b6ed81e57.js.map