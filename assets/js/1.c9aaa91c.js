(window.webpackJsonp=window.webpackJsonp||[]).push([[1,9,16,18],{241:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return m})),n.d(e,"j",(function(){return g}));n(90);const i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,o=/^[a-z]+:/i;function a(t){return decodeURI(t).replace(i,"").replace(r,"")}function l(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(l(t))return t;const e=t.match(i),n=e?e[0]:"",r=a(t);return s.test(r)?t:r+".html"+n}function p(t,e){const n=decodeURIComponent(t.hash),r=function(t){const e=t.match(i);if(e)return e[0]}(e);if(r&&n!==r)return!1;return a(t.path)===a(e)}function h(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=a(e);for(let e=0;e<t.length;e++)if(a(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,i){const{pages:r,themeConfig:s}=n,o=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return function(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const a=o.sidebar||s.sidebar;if(a){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}(e,a);return n?n.map(e=>function t(e,n,i,r=1){if("string"==typeof e)return h(n,e,i);if(Array.isArray(e))return Object.assign(h(n,e[0],i),{title:e[1]});{r>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(h(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,n,i,r+1)),collapsable:!1!==e.collapsable}}}(e,r,t)):[]}return[]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},242:function(t,e,n){},249:function(t,e,n){"use strict";n.r(e);var i=n(241),r=n(251),s={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(i.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{toRouterFn(){Object(r.setTimeout)(()=>{let t=document.querySelector(".active");console.log("toRouterFn",t),t&&t.scrollIntoView({behavior:"smooth"})},500)},focusoutAction(){this.$emit("focusout")}}},o=n(10),a=Object(o.a)(s,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{click:function(e){return t.toRouterFn.apply(null,arguments)},focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=a.exports},250:function(t,e,n){"use strict";n.r(e);var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},r=(n(253),n(10)),s=Object(r.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},251:function(t,e,n){var i="undefined"!=typeof global&&global||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function s(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new s(r.call(setTimeout,i,arguments),clearTimeout)},e.setInterval=function(){return new s(r.call(setInterval,i,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(i,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(252),e.setImmediate="undefined"!=typeof self&&self.setImmediate||"undefined"!=typeof global&&global.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||"undefined"!=typeof global&&global.clearImmediate||this&&this.clearImmediate},252:function(t,e){!function(t,e){"use strict";if(!t.setImmediate){var n,i,r,s,o,a=1,l={},u=!1,c=t.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(t);f=f&&f.setTimeout?f:t,"[object process]"==={}.toString.call(t.process)?n=function(t){process.nextTick((function(){h(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((r=new MessageChannel).port1.onmessage=function(t){h(t.data)},n=function(t){r.port2.postMessage(t)}):c&&"onreadystatechange"in c.createElement("script")?(i=c.documentElement,n=function(t){var e=c.createElement("script");e.onreadystatechange=function(){h(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):n=function(t){setTimeout(h,0,t)}:(s="setImmediate$"+Math.random()+"$",o=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(s)&&h(+e.data.slice(s.length))},t.addEventListener?t.addEventListener("message",o,!1):t.attachEvent("onmessage",o),n=function(e){t.postMessage(s+e,"*")}),f.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),i=0;i<e.length;i++)e[i]=arguments[i+1];var r={callback:t,args:e};return l[a]=r,n(a),a++},f.clearImmediate=p}function p(t){delete l[t]}function h(t){if(u)setTimeout(h,0,t);else{var e=l[t];if(e){u=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{p(t),u=!1}}}}}("undefined"==typeof self?"undefined"==typeof global?this:global:self)},253:function(t,e,n){"use strict";n(242)},257:function(t,e,n){},269:function(t,e,n){"use strict";n.r(e);var i=n(284),r=n(241),s={name:"NavLinks",components:{NavLink:n(249).default,DropdownLink:i.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,i=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(r=>{const s=t[r],o=i[r]&&i[r].label||s.lang;let a;return s.lang===this.$lang?a=e:(a=e.replace(this.$localeConfig.path,r),n.some(t=>t.path===a)||(a=r)),{text:o,link:a}})};return[...this.userNav,r]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(r.j)(t),{items:(t.items||[]).map(r.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}},o=(n(293),n(10)),a=Object(o.a)(s,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=a.exports},273:function(t,e,n){"use strict";n(257)},281:function(t,e,n){},284:function(t,e,n){"use strict";n.r(e);var i=n(249),r=n(250),s=n(94),o=n.n(s),a={name:"DropdownLink",components:{NavLink:i.default,DropdownTransition:r.default},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>o()(e)===t}},l=(n(273),n(10)),u=Object(l.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v("\n          "+t._s(n.text)+"\n        ")]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=u.exports},293:function(t,e,n){"use strict";n(281)}}]);