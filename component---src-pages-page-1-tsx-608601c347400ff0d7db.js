"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[132],{3020:function(e,t,r){var l=r(758);t.A=function(){return l.createElement("footer",{className:"text-center py-8"},l.createElement("p",null,"© Project Name 2024"))}},6942:function(e,t,r){var l=r(758),a=r(9789),n=r(1336);t.A=function(){const{0:e,1:t}=(0,l.useState)(!1),{0:r,1:c}=(0,l.useState)(!1),o=l.createElement(l.Fragment,null,l.createElement(a.Link,{to:"/page1",className:"Link2 hover:underline"},"Page 1"),l.createElement(a.Link,{to:"/page2",className:"Link2 hover:underline"},"Page 2"));function s(){console.log("1 works"),"light"==localStorage.getItem("theme")?(console.log("3 change to dark"),localStorage.setItem("theme","dark"),document.body.classList.add("dark"),document.body.classList.remove("light"),c(!0)):"dark"==localStorage.getItem("theme")&&(localStorage.setItem("theme","light"),document.body.classList.add("light"),document.body.classList.remove("dark"),c(!1))}return(0,l.useEffect)((()=>{console.log("2 effect running"),localStorage.getItem("theme")?"light"==localStorage.getItem("theme")?(document.body.classList.add("light"),c(!1)):"dark"==localStorage.getItem("theme")&&(document.body.classList.add("dark"),c(!0)):(localStorage.setItem("theme","light"),document.body.classList.add("light"),c(!1))}),[]),l.createElement("header",{className:"NavBar flex justify-between"},l.createElement(a.Link,{to:"/",className:"Link1 ml-14 pt-3 pb-4"},"Project Title"),l.createElement("div",{className:"flex flex-row"},l.createElement("div",{className:"FullNav"},l.createElement("ul",{className:"flex mt-7 mr-3"},o)),l.createElement("div",{className:"ToggleNav"},l.createElement("button",{onClick:()=>{t((e=>!e))}},l.createElement(n.vIB,{className:"ml-4 mr-8 mt-4 text-black dark:text-white",size:30})),e?l.createElement("div",{className:"border-1 border-slate-300 border-2 pt-4 ml-[-53px] pb-7 pl-2 pr-8  absolute rounded-md bg-white dark:bg-slate-700"},l.createElement("ul",{className:"flex flex-col text-start ml-3"},o)):null),l.createElement("div",{className:"ThemeToggler"},r?l.createElement("button",{onClick:s},l.createElement(n.NmZ,{size:28,className:"text-black dark:text-white"})):l.createElement("button",{onClick:s},l.createElement(n.N3N,{size:28,className:"text-black dark:text-white"})))))}},1165:function(e,t,r){r.r(t),r.d(t,{Head:function(){return c}});var l=r(758),a=r(6942),n=r(3020);t.default=()=>l.createElement("div",{className:""},l.createElement(a.A,null),l.createElement("main",{className:"flex flex-col"},l.createElement("h1",{className:"text-3xl pt-16 mb-[71vh]"},"Page 1")),l.createElement(n.A,null));const c=()=>l.createElement("title",null,"Page 1")},1714:function(e,t,r){r.d(t,{k5:function(){return f}});var l=r(758),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=l.createContext&&l.createContext(a),c=["attr","size","title"];function o(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;r[l]=e[l]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},s.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var l;return(t="symbol"==typeof(l=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?l:l+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>l.createElement(e.tag,m({key:t},e.attr),d(e.child))))}function f(e){return t=>l.createElement(g,s({attr:m({},e.attr)},t),d(e.child))}function g(e){var t=t=>{var r,{attr:a,size:n,title:i}=e,u=o(e,c),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),l.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&l.createElement("title",null,i),e.children)};return void 0!==n?l.createElement(n.Consumer,null,(e=>t(e))):t(a)}}}]);
//# sourceMappingURL=component---src-pages-page-1-tsx-608601c347400ff0d7db.js.map