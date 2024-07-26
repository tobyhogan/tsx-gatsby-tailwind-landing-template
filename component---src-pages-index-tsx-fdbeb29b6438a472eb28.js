"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[245],{3020:function(e,t,r){var n=r(758);t.A=function(){return n.createElement("footer",{className:"text-center py-8"},n.createElement("p",null,"© Project Name 2024"))}},6942:function(e,t,r){var n=r(7878),l=r(758),a=r(9789),c=r(1336);t.A=function(){const{0:e,1:t}=(0,l.useState)(!1),r=l.createElement(l.Fragment,null,l.createElement(a.Link,{to:"/page1",className:"Link2 hover:underline"},"Page 1"),l.createElement(a.Link,{to:"/page2",className:"Link2 hover:underline"},"Page 2"));let o=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.A)(t,e),t.prototype.render=function(){return l.createElement(l.Fragment,null,l.createElement("div",null,l.createElement("p",null,"hello world")))},t}(l.Component);return l.createElement("header",{className:"NavBar flex justify-between"},l.createElement(a.Link,{to:"/",className:"Link1 text-[35px] ml-14 pt-3 pb-4"},"Project Title"),l.createElement("div",{className:"flex flex-row"},l.createElement("div",{className:"FullNav"},l.createElement("ul",{className:"flex mt-7 mr-3"},r)),l.createElement("div",{className:"ToggleNav"},l.createElement("button",{onClick:()=>{t((e=>!e))}},l.createElement(c.vIB,{className:"ml-4 mr-8 mt-6",size:30})),e?l.createElement("div",{className:"border-1 border-slate-300 border-2 pt-4 pb-3 pl-2 pr-4 -ml-16 absolute rounded-md bg-white"},l.createElement("ul",{className:"flex flex-col text-start ml-3"},r)):null),l.createElement(o,null)))}},6725:function(e,t,r){r.r(t),r.d(t,{Head:function(){return i},default:function(){return o}});var n=r(758),l=r(6942),a=r(3020),c=r.p+"static/habitazen-ba6fd94a16482b69da1dcf08ecd84dec.png";var o=()=>("undefined"!=typeof window?console.log("we are running on the client"):console.log("we are running on the server"),n.createElement("div",{className:"flex flex-col"},n.createElement(l.A,null),n.createElement("main",{className:"pb-20 h-[81.9vh]"},n.createElement("img",{src:c,className:"w-96 border-2 mt-8"}),n.createElement("h1",{className:"text-2xl text-center mt-8"},"Headline Goes Here"),n.createElement("div",{className:"flex flex-col mx-auto w-fit mt-8"},n.createElement("a",{className:"rounded-md py-2 px-3 text-white bg-slate-450 bg-slate-500 hover:bg-slate-400 hover:cursor-pointer"},"Action Button"),n.createElement("a",{href:"https://habit-tracker-indol-ten.vercel.app/",className:"mt-4 underline text-blue-400 mx-auto"},"Alternate Action")),n.createElement("h1",{className:"text-center text-xl mt-8"},"Features:"),n.createElement("ul",{className:"mx-auto w-fit mt-3"},n.createElement("li",null,"- Feature 1"),n.createElement("li",null,"- Feature 2"),n.createElement("li",null,"- Feature 3"))),n.createElement(a.A,null)));const i=()=>n.createElement("title",null,"Landing Page")},1714:function(e,t,r){r.d(t,{k5:function(){return p}});var n=r(758),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(l),c=["attr","size","title"];function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return e&&e.map(((e,t)=>n.createElement(e.tag,u({key:t},e.attr),f(e.child))))}function p(e){return t=>n.createElement(d,i({attr:u({},e.attr)},t),f(e.child))}function d(e){var t=t=>{var r,{attr:l,size:a,title:s}=e,m=o(e,c),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,m,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(e=>t(e))):t(l)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fdbeb29b6438a472eb28.js.map