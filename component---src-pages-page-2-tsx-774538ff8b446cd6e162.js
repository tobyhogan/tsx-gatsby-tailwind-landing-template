(self.webpackChunktobyhogan_space=self.webpackChunktobyhogan_space||[]).push([[179],{4796:function(e,t,r){"use strict";var n=r(2867);t.__esModule=!0,t.default=void 0;var o=n(r(106)),l=n(r(9428)),a=n(r(490)),c=n(r(758)),i=n(r(2736)),u=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return t=e.call.apply(e,[this].concat(n))||this,(0,a.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,l.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},r.toggleTheme=function(e){window.__setPreferredTheme(e)},r.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);u.propTypes={children:i.default.func.isRequired};var s=u;t.default=s},5873:function(e,t,r){"use strict";var n=r(2867)(r(4796));t.G=n.default},3020:function(e,t,r){"use strict";var n=r(758);t.A=function(){return n.createElement("footer",{className:"text-center py-8"},n.createElement("p",null,"© Project Name 2024"))}},6942:function(e,t,r){"use strict";var n=r(519),o=r(758),l=r(431),a=r(5873),c=r(1336);t.A=function(){const{0:e,1:t}=(0,o.useState)(!1),r=o.createElement(o.Fragment,null,o.createElement(l.N_,{to:"/page1",className:"Link2 hover:underline"},"Page 1"),o.createElement(l.N_,{to:"/page2",className:"Link2 hover:underline"},"Page 2"));let i=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.A)(t,e),t.prototype.render=function(){return o.createElement(a.G,null,(e=>{let{theme:t,toggleTheme:r}=e;return o.createElement("label",null,o.createElement("input",{type:"checkbox",onChange:e=>r(e.target.checked?"dark":"light"),checked:"dark"==t,className:"hidden"}),o.createElement("div",{className:"Other Unselectable hover:cursor-pointer mt-6 mr-8"},"light"==localStorage.getItem("theme")?o.createElement(c.NmZ,{size:28}):o.createElement(c.N3N,{size:28})))}))},t}(o.Component);return o.createElement("header",{className:"NavBar flex justify-between"},o.createElement(l.N_,{to:"/",className:"Link1 text-[35px] ml-14 pt-3 pb-4"},"Project Title"),o.createElement("div",{className:"flex flex-row"},o.createElement("div",{className:"FullNav"},o.createElement("ul",{className:"flex mt-7 mr-3"},r)),o.createElement("div",{className:"ToggleNav"},o.createElement("button",{onClick:()=>{t((e=>!e))}},o.createElement(c.vIB,{className:"ml-4 mr-8 mt-6",size:30})),e?o.createElement("div",{className:"border-1 border-slate-300 border-2 pt-4 pb-3 pl-2 pr-4 -ml-16 absolute rounded-md bg-white"},o.createElement("ul",{className:"flex flex-col text-start ml-3"},r)):null),o.createElement(i,null)))}},3870:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return a}});var n=r(758),o=r(6942),l=r(3020);t.default=()=>n.createElement("div",{className:""},n.createElement(o.A,null),n.createElement("main",null,n.createElement("h1",{className:"text-3xl pt-8"},"Page 2")),n.createElement(l.A,null));const a=()=>n.createElement("title",null,"Page 2")},490:function(e,t,r){var n=r(4109);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},4e3:function(e,t,r){var n=r(537).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4109:function(e,t,r){var n=r(537).default,o=r(4e3);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},537:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1714:function(e,t,r){"use strict";r.d(t,{k5:function(){return p}});var n=r(758),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),a=["attr","size","title"];function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return e&&e.map(((e,t)=>n.createElement(e.tag,s({key:t},e.attr),f(e.child))))}function p(e){return t=>n.createElement(d,i({attr:s({},e.attr)},t),f(e.child))}function d(e){var t=t=>{var r,{attr:o,size:l,title:u}=e,m=c(e,a),f=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,m,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(e=>t(e))):t(o)}}}]);
//# sourceMappingURL=component---src-pages-page-2-tsx-774538ff8b446cd6e162.js.map