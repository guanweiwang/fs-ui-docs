(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(101).concat([function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"j",function(){return a}),n.d(e,"i",function(){return o}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"h",function(){return l}),n.d(e,"b",function(){return f}),n.d(e,"e",function(){return p}),n.d(e,"l",function(){return d}),n.d(e,"m",function(){return h}),n.d(e,"c",function(){return v}),n.d(e,"k",function(){return g});const i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;const e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function p(t,e){const n=t.hash,r=function(t){const e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function d(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function h(t,e,n,i){const{pages:r,themeConfig:s}=n,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){const e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||s.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===m(t).indexOf(n))return{base:n,config:e[n]};return{}}(e,o);return n?n.map(e=>(function t(e,n,i,r){if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});{r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const s=e.children||[];return{type:"group",title:e.title,children:s.map(e=>t(e,n,i,!0)),collapsable:!1!==e.collapsable}}})(e,r,t)):[]}return[]}function v(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function m(t){return/(\.html|\/)$/.test(t)?t:t+"/"}},function(t,e,n){"use strict";var i=n(3),r=n(30)(3);i(i.P+i.F*!n(21)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,function(t,e,n){"use strict";n(28),n(29),n(41),n(102),n(134);var i=n(101),r={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},s=n(18),a=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);a.options.__file="NavLink.vue";e.a=a.exports},function(t,e,n){var i,r;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(r="function"==typeof(i=function(){var t={version:"0.2.0"},e=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(t,e,n){return t<e?e:t>n?n:t}function i(t){return 100*(-1+t)}t.configure=function(t){var n,i;for(n in t)void 0!==(i=t[n])&&t.hasOwnProperty(n)&&(e[n]=i);return this},t.status=null,t.set=function(a){var o=t.isStarted();a=n(a,e.minimum,1),t.status=1===a?null:a;var u=t.render(!o),c=u.querySelector(e.barSelector),l=e.speed,f=e.easing;return u.offsetWidth,r(function(n){""===e.positionUsing&&(e.positionUsing=t.getPositioningCSS()),s(c,function(t,n,r){var s;return(s="translate3d"===e.positionUsing?{transform:"translate3d("+i(t)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+i(t)+"%,0)"}:{"margin-left":i(t)+"%"}).transition="all "+n+"ms "+r,s}(a,l,f)),1===a?(s(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){s(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){t.remove(),n()},l)},l)):setTimeout(n,l)}),this},t.isStarted=function(){return"number"==typeof t.status},t.start=function(){t.status||t.set(0);var n=function(){setTimeout(function(){t.status&&(t.trickle(),n())},e.trickleSpeed)};return e.trickle&&n(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var i=t.status;return i?("number"!=typeof e&&(e=(1-i)*n(Math.random()*i,.1,.95)),i=n(i+e,0,.994),t.set(i)):t.start()},t.trickle=function(){return t.inc(Math.random()*e.trickleRate)},function(){var e=0,n=0;t.promise=function(i){return i&&"resolved"!==i.state()?(0===n&&t.start(),e++,n++,i.always(function(){0==--n?(e=0,t.done()):t.set((e-n)/e)}),this):this}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");o(document.documentElement,"nprogress-busy");var r=document.createElement("div");r.id="nprogress",r.innerHTML=e.template;var a,u=r.querySelector(e.barSelector),c=n?"-100":i(t.status||0),f=document.querySelector(e.parent);return s(u,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),e.showSpinner||(a=r.querySelector(e.spinnerSelector))&&l(a),f!=document.body&&o(f,"nprogress-custom-parent"),f.appendChild(r),r},t.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(e.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&l(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var r=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),s=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=function(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}(n),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var i,r=t.length,s=e.charAt(0).toUpperCase()+e.slice(1);r--;)if((i=t[r]+s)in n)return i;return e}(n))}function i(t,e,i){e=n(e),t.style[e]=i}return function(t,e){var n,r,s=arguments;if(2==s.length)for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&i(t,n,r);else i(t,s[1],s[2])}}();function a(t,e){var n="string"==typeof t?t:c(t);return n.indexOf(" "+e+" ")>=0}function o(t,e){var n=c(t),i=n+e;a(n,e)||(t.className=i.substring(1))}function u(t,e){var n,i=c(t);a(t,e)&&(n=i.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function c(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function l(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t})?i.call(e,n,e,t):i)||(t.exports=r)},function(t,e,n){"use strict";var i=n(9),r=n(11),s=n(7),a=n(19),o=n(1);t.exports=function(t,e,n){var u=o(t),c=n(a,u,""[t]),l=c[0],f=c[1];s(function(){var e={};return e[u]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,l),i(RegExp.prototype,u,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},function(t,e,n){n(121)("replace",2,function(t,e,n){return[function(i,r){"use strict";var s=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,s,r):n.call(String(s),i,r)},n]})},function(t,e,n){"use strict";var i=n(115);n.n(i).a},function(t,e,n){"use strict";var i=n(116);n.n(i).a},,,function(t,e,n){"use strict";n(137);var i=n(18),r=Object(i.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null);r.options.__file="SidebarButton.vue";var s=r.exports,a=(n(40),n(138),n(139),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},r=[],s=0;s<e.length&&!(r.length>=5);s++){var a=e[s];if(this.getPageLocalePath(a)===n)if(i(a))r.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(r.length>=5);o++){var u=a.headers[o];i(u)&&r.push(Object.assign({},a,{path:a.path+"#"+u.slug,header:u}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),o=(n(142),Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){t.go(i)},mouseenter:function(e){t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})):t._e()])},[],!1,null,null,null));o.options.__file="SearchBox.vue";var u=o.exports;function c(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={components:{SidebarButton:s,NavLinks:n(129).a,SearchBox:u,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(c(this.$el,"paddingLeft"))+parseInt(c(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},f=(n(149),Object(i.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null));f.options.__file="Navbar.vue";e.a=f.exports},function(t,e,n){"use strict";n(102),n(39);var i=n(101);function r(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function s(t,e,n,a,o){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||u>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var c=Object(i.e)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[r(t,n+"#"+e.slug,e.title,c),s(t,e.children,n,a,o,u+1)])}))}var a={functional:!0,props:["item"],render:function(t,e){var n=e.parent,a=n.$page,o=n.$site,u=n.$route,c=e.props.item,l=Object(i.e)(u,c.path),f="auto"===c.type?l||c.children.some(function(t){return Object(i.e)(u,c.basePath+"#"+t.slug)}):l,p=r(t,c.path,c.title||c.path,f),d=null!=a.frontmatter.sidebarDepth?a.frontmatter.sidebarDepth:o.themeConfig.sidebarDepth,h=null==d?1:d,v=!!o.themeConfig.displayAllHeaders;return"auto"===c.type?[p,s(t,c.children,c.basePath,u,h)]:(f||v)&&c.headers&&!i.d.test(c.path)?[p,s(t,Object(i.c)(c.headers),c.path,u,h)]:p}},o=(n(151),n(18)),u=Object(o.a)(a,void 0,void 0,!1,null,null,null);u.options.__file="SidebarLink.vue";var c=u.exports,l={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:c,DropdownTransition:n(130).a}},f=(n(152),Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})):t._e()])],1)},[],!1,null,null,null));f.options.__file="SidebarGroup.vue";var p={components:{SidebarGroup:f.exports,SidebarLink:c,NavLinks:n(129).a},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if("group"===r.type&&r.children.some(function(e){return Object(i.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},d=(n(153),Object(o.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)})):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));d.options.__file="Sidebar.vue";e.a=d.exports},function(t,e,n){"use strict";n(143),n(145),n(40);var i=n(26),r=(n(102),n(122),n(39),n(28),n(29),n(41),n(119)),s=n(130),a={components:{NavLink:r.a,DropdownTransition:s.a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},o=(n(147),n(18)),u=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})):n("NavLink",{attrs:{item:e}})],1)}))])],1)},[],!1,null,null,null);u.options.__file="DropdownLink.vue";var c=u.exports,l=n(101),f={components:{NavLink:r.a,DropdownLink:c},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(i){var a,o=e[i],u=s[i]&&s[i].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,i),r.some(function(t){return t.path===a})||(a=i)),{text:u,link:a}})};return Object(i.a)(this.userNav).concat([a])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(Object(l.k)(t),{items:(t.items||[]).map(l.k)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},p=(n(148),Object(o.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null));p.options.__file="NavLinks.vue";e.a=p.exports},function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(146),n(18)),s=Object(r.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);s.options.__file="DropdownTransition.vue";e.a=s.exports},function(t,e,n){"use strict";var i=n(26),r=(n(28),n(32),n(122),n(101));function s(t,e,n){var r=[];e.forEach(function(t){"group"===t.type?r.push.apply(r,Object(i.a)(t.children||[])):r.push(t)});for(var s=0;s<r.length;s++){var a=r[s];if("page"===a.type&&a.path===t.path)return r[s+n]}}var a={props:["sidebarItems"],computed:{lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t=this.$page.frontmatter.prev;return!1===t?void 0:t?Object(r.l)(this.$site.pages,t,this.$route.path):function(t,e){return s(t,e,-1)}(this.$page,this.sidebarItems)},next:function(){var t=this.$page.frontmatter.next;return!1===t?void 0:t?Object(r.l)(this.$site.pages,t,this.$route.path):function(t,e){return s(t,e,1)}(this.$page,this.sidebarItems)},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,a=t.docsBranch,o=void 0===a?"master":a,u=t.docsRepo,c=void 0===u?e:u,l=Object(r.i)(this.$page.path);return r.a.test(l)?l+="README.md":l+=".md",c&&n?this.createEditLink(e,c,s,o,l):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(r.j.test(e)?e:t).replace(r.a,"")+"/".concat(i)+(n?"/"+n.replace(r.a,""):"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(r.j.test(e)?e:"https://github.com/".concat(e)).replace(r.a,"")+"/edit/".concat(i)+(n?"/"+n.replace(r.a,""):"")+s}}},o=(n(150),n(18)),u=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null);u.options.__file="Page.vue";e.a=u.exports},function(t,e,n){"use strict";var i={components:{NavLink:n(119).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},r=(n(136),n(18)),s=Object(r.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null);s.options.__file="Home.vue";e.a=s.exports},,function(t,e,n){"use strict";n(135)("link",function(t){return function(e){return t(this,"a","href",e)}})},function(t,e,n){var i=n(3),r=n(7),s=n(19),a=/"/g,o=function(t,e,n,i){var r=String(s(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},function(t,e,n){"use strict";var i=n(104);n.n(i).a},function(t,e,n){"use strict";var i=n(105);n.n(i).a},function(t,e,n){"use strict";var i=n(3),r=n(61)(!1),s=[].indexOf,a=!!s&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(a||!n(21)(s)),"Array",{indexOf:function(t){return a?s.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){"use strict";n(140)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){var i=n(3),r=n(19),s=n(7),a=n(141),o="["+a+"]",u=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),l=function(t,e,n){var r={},o=s(function(){return!!a[t]()||"​"!="​"[t]()}),u=r[t]=o?e(f):a[t];n&&(r[n]=u),i(i.P+i.F*o,"String",r)},f=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var i=n(106);n.n(i).a},function(t,e,n){var i=n(4),r=n(67),s=n(5).f,a=n(64).f,o=n(63),u=n(144),c=i.RegExp,l=c,f=c.prototype,p=/a/g,d=/a/g,h=new c(p)!==p;if(n(6)&&(!h||n(7)(function(){return d[n(1)("match")]=!1,c(p)!=p||c(d)==d||"/a/i"!=c(p,"i")}))){c=function(t,e){var n=this instanceof c,i=o(t),s=void 0===e;return!n&&i&&t.constructor===c&&s?t:r(h?new l(i&&!s?t.source:t,e):l((i=t instanceof c)?t.source:t,i&&s?u.call(t):e),n?this:f,c)};for(var v=function(t){t in c||s(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=a(l),m=0;g.length>m;)v(g[m++]);f.constructor=c,c.prototype=f,n(11)(i,"RegExp",c)}n(60)("RegExp")},function(t,e,n){"use strict";var i=n(8);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){n(121)("match",1,function(t,e,n){return[function(n){"use strict";var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},n]})},function(t,e,n){"use strict";var i=n(107);n.n(i).a},function(t,e,n){"use strict";var i=n(108);n.n(i).a},function(t,e,n){"use strict";var i=n(109);n.n(i).a},function(t,e,n){"use strict";var i=n(110);n.n(i).a},function(t,e,n){"use strict";var i=n(111);n.n(i).a},function(t,e,n){"use strict";var i=n(112);n.n(i).a},function(t,e,n){"use strict";var i=n(113);n.n(i).a},function(t,e,n){"use strict";var i=n(114);n.n(i).a}])]);