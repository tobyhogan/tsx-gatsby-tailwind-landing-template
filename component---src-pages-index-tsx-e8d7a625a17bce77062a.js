"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[245],{3020:function(e,t,r){var a=r(758);t.A=function(){return a.createElement("footer",{className:"text-center py-8"},a.createElement("p",null,"© Project Name 2024"))}},6942:function(e,t,r){var a=r(758),l=r(9789),n=r(1336);t.A=function(){const{0:e,1:t}=(0,a.useState)(!1),{0:r,1:o}=(0,a.useState)(!1),c=a.createElement(a.Fragment,null,a.createElement(l.Link,{to:"/page1",className:"Link2 hover:underline"},"Page 1"),a.createElement(l.Link,{to:"/page2",className:"Link2 hover:underline"},"Page 2"));function s(){console.log("1 works"),"light"==localStorage.getItem("theme")?(console.log("3 change to dark"),localStorage.setItem("theme","dark"),document.body.classList.add("dark"),document.body.classList.remove("light"),o(!0)):"dark"==localStorage.getItem("theme")&&(localStorage.setItem("theme","light"),document.body.classList.add("light"),document.body.classList.remove("dark"),o(!1))}return(0,a.useEffect)((()=>{console.log("2 effect running"),localStorage.getItem("theme")?"light"==localStorage.getItem("theme")?(document.body.classList.add("light"),o(!1)):"dark"==localStorage.getItem("theme")&&(document.body.classList.add("dark"),o(!0)):(localStorage.setItem("theme","light"),document.body.classList.add("light"),o(!1))}),[]),a.createElement("header",{className:"NavBar flex justify-between"},a.createElement(l.Link,{to:"/",className:"Link1 ml-14 pt-3 pb-4"},"Project Title"),a.createElement("div",{className:"flex flex-row"},a.createElement("div",{className:"FullNav"},a.createElement("ul",{className:"flex mt-7 mr-3"},c)),a.createElement("div",{className:"ToggleNav"},a.createElement("button",{onClick:()=>{t((e=>!e))}},a.createElement(n.vIB,{className:"ml-4 mr-8 mt-4 text-black dark:text-white",size:30})),e?a.createElement("div",{className:"border-1 border-slate-300 border-2 pt-4 ml-[-53px] pb-7 pl-2 pr-8  absolute rounded-md bg-white dark:bg-slate-700"},a.createElement("ul",{className:"flex flex-col text-start ml-3"},c)):null),a.createElement("div",{className:"ThemeToggler"},r?a.createElement("button",{onClick:s},a.createElement(n.NmZ,{size:28,className:"text-black dark:text-white"})):a.createElement("button",{onClick:s},a.createElement(n.N3N,{size:28,className:"text-black dark:text-white"})))))}},7020:function(e,t,r){r.r(t),r.d(t,{Head:function(){return s},default:function(){return c}});var a=r(758),l=r(6942),n=r(3020),o=r.p+"static/project-image-ab6d02a39fd4921a85a059660549524f.png";var c=()=>("undefined"!=typeof window?console.log("we are running on the client"):console.log("we are running on the server"),a.createElement("div",{className:"flex flex-col"},a.createElement(l.A,null),a.createElement("main",{className:"pb-20 h-[81.9vh]"},a.createElement("img",{src:o,className:"border-2 border-slate-300 dark:border-slate-600 mt-12 rounded-lg"}),a.createElement("h1",{className:"text-center mt-8 text-2xl"},"Headline Goes Here"),a.createElement("div",{className:"flex flex-col mx-auto w-fit mt-8"},a.createElement("a",{className:"rounded-md py-2 px-5 text-white bg-slate-500 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-700 hover:cursor-pointer"},"Action Button"),a.createElement("a",{href:"https://habit-tracker-indol-ten.vercel.app/",className:"mt-4 underline text-blue-400 mx-auto"},"Alternate Action")),a.createElement("h1",{className:"text-center text-xl mt-8"},"Features:"),a.createElement("ul",{className:"mx-auto w-fit mt-3"},a.createElement("li",null,"- Feature 1"),a.createElement("li",null,"- Feature 2"),a.createElement("li",null,"- Feature 3"))),a.createElement(n.A,null)));const s=()=>a.createElement("title",null,"Landing Page")},1714:function(e,t,r){r.d(t,{k5:function(){return f}});var a=r(758),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(l),o=["attr","size","title"];function c(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>a.createElement(e.tag,m({key:t},e.attr),d(e.child))))}function f(e){return t=>a.createElement(g,s({attr:m({},e.attr)},t),d(e.child))}function g(e){var t=t=>{var r,{attr:l,size:n,title:i}=e,u=c(e,o),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==n?a.createElement(n.Consumer,null,(e=>t(e))):t(l)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e8d7a625a17bce77062a.js.map