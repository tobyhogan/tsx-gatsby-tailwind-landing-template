"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[132],{3020:function(e,t,r){var n=r(758);t.A=function(){return n.createElement("footer",{className:"text-center py-8"},n.createElement("p",null,"© Project Name 2024"))}},6942:function(e,t,r){var n=r(758),l=r(9789),a=r(1336);t.A=function(){const{0:e,1:t}=(0,n.useState)(!1),[r,c]=n.useState(null);(0,n.useEffect)((()=>{localStorage.setItem("test","yes"),console.log(localStorage)}),[]);const o=n.createElement(n.Fragment,null,n.createElement(l.Link,{to:"/page1",className:"Link2 hover:underline"},"Page 1"),n.createElement(l.Link,{to:"/page2",className:"Link2 hover:underline"},"Page 2"));return(0,n.useEffect)((()=>{r?(document.body.classList.add("dark"),document.body.classList.remove("light")):0==r&&(document.body.classList.remove("dark"),document.body.classList.add("light"))}),[r]),n.createElement("header",{className:"NavBar flex justify-between"},n.createElement(l.Link,{to:"/",className:"Link1 ml-14 pt-3 pb-4"},"Project Title"),n.createElement("div",{className:"flex flex-row"},n.createElement("div",{className:"FullNav"},n.createElement("ul",{className:"flex mt-7 mr-3"},o)),n.createElement("div",{className:"ToggleNav"},n.createElement("button",{onClick:()=>{t((e=>!e))}},n.createElement(a.vIB,{className:"ml-4 mr-8 mt-4 text-black dark:text-white",size:30})),e?n.createElement("div",{className:"border-1 border-slate-300 border-2 pt-4 ml-[-53px] pb-7 pl-2 pr-8  absolute rounded-md bg-white dark:bg-slate-700"},n.createElement("ul",{className:"flex flex-col text-start ml-3"},o)):null),n.createElement("div",{className:"ThemeToggler"},r?n.createElement("button",{onClick:()=>c(!r)},n.createElement(a.NmZ,{size:28,className:"text-black dark:text-white"})):n.createElement("button",{onClick:()=>c(!r)},n.createElement(a.N3N,{size:28,className:"text-black dark:text-white"})))))}},1165:function(e,t,r){r.r(t),r.d(t,{Head:function(){return c}});var n=r(758),l=r(6942),a=r(3020);t.default=()=>n.createElement("div",{className:""},n.createElement(l.A,null),n.createElement("main",{className:"flex flex-col"},n.createElement("h1",{className:"text-3xl pt-16 mb-[71vh]"},"Page 1")),n.createElement(a.A,null));const c=()=>n.createElement("title",null,"Page 1")},1714:function(e,t,r){r.d(t,{k5:function(){return b}});var n=r(758),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(l),c=["attr","size","title"];function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return e&&e.map(((e,t)=>n.createElement(e.tag,m({key:t},e.attr),f(e.child))))}function b(e){return t=>n.createElement(d,s({attr:m({},e.attr)},t),f(e.child))}function d(e){var t=t=>{var r,{attr:l,size:a,title:i}=e,u=o(e,c),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(e=>t(e))):t(l)}}}]);
//# sourceMappingURL=component---src-pages-page-1-tsx-320ff29d29a5bf6ab141.js.map