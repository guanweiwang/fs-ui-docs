(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(t,n,e){"use strict";e.d(n,"d",function(){return i}),e.d(n,"a",function(){return s}),e.d(n,"j",function(){return o}),e.d(n,"i",function(){return u}),e.d(n,"f",function(){return a}),e.d(n,"g",function(){return c}),e.d(n,"h",function(){return l}),e.d(n,"b",function(){return f}),e.d(n,"e",function(){return h}),e.d(n,"l",function(){return p}),e.d(n,"m",function(){return g}),e.d(n,"c",function(){return d}),e.d(n,"k",function(){return v});const i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,o=/^(https?:|mailto:|tel:)/;function u(t){return decodeURI(t).replace(i,"").replace(r,"")}function a(t){return o.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(a(t))return t;const n=t.match(i),e=n?n[0]:"",r=u(t);return s.test(r)?t:r+".html"+e}function h(t,n){const e=t.hash,r=function(t){const n=t.match(i);if(n)return n[0]}(n);return(!r||e===r)&&u(t.path)===u(n)}function p(t,n,e){e&&(n=function(t,n,e){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return n+t;const r=n.split("/");e&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const n=s[t];".."===n?r.pop():"."!==n&&r.push(n)}""!==r[0]&&r.unshift("");return r.join("/")}(n,e));const i=u(n);for(let n=0;n<t.length;n++)if(u(t[n].regularPath)===i)return Object.assign({},t[n],{type:"page",path:f(t[n].path)});return console.error(`[vuepress] No matching page found for sidebar item "${n}"`),{}}function g(t,n,e,i){const{pages:r,themeConfig:s}=e,o=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return function(t){const n=d(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:n.map(n=>({type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}))}]}(t);const u=o.sidebar||s.sidebar;if(u){const{base:t,config:e}=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(const e in n)if(0===m(t).indexOf(e))return{base:e,config:n[e]};return{}}(n,u);return e?e.map(n=>(function t(n,e,i,r){if("string"==typeof n)return p(e,n,i);if(Array.isArray(n))return Object.assign(p(e,n[0],i),{title:n[1]});{r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const s=n.children||[];return{type:"group",title:n.title,children:s.map(n=>t(n,e,i,!0)),collapsable:!1!==n.collapsable}}})(n,r,t)):[]}return[]}function d(t){let n;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function m(t){return/(\.html|\/)$/.test(t)?t:t+"/"}},103:function(t,n,e){e(131)("replace",2,function(t,n,e){return[function(i,r){"use strict";var s=t(this),o=void 0==i?void 0:i[n];return void 0!==o?o.call(i,s,r):e.call(String(s),i,r)},e]})},104:function(t,n,e){"use strict";var i=e(3),r=e(31)(3);i(i.P+i.F*!e(19)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},105:function(t,n,e){"use strict";var i=e(3),r=e(60)(!1),s=[].indexOf,o=!!s&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(o||!e(19)(s)),"Array",{indexOf:function(t){return o?s.apply(this,arguments)||0:r(this,t,arguments[1])}})},107:function(t,n,e){"use strict";e(147),e(149),e(39);var i=e(26),r=(e(104),e(103),e(38),e(28),e(30),e(40),e(126)),s=e(135),o={components:{NavLink:r.a,DropdownTransition:s.a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},u=(e(151),e(18)),a=Object(u.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v(t._s(n.text))]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,function(t){return e("li",{key:t.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:t}})],1)})):e("NavLink",{attrs:{item:n}})],1)}))])],1)},[],!1,null,null,null);a.options.__file="DropdownLink.vue";var c=a.exports,l=e(101),f={components:{NavLink:r.a,DropdownLink:c},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,n=this.$site.locales;if(n&&Object.keys(n).length>1){var e=this.$page.path,r=this.$router.options.routes,s=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(n).map(function(i){var o,u=n[i],a=s[i]&&s[i].label||u.lang;return u.lang===t.$lang?o=e:(o=e.replace(t.$localeConfig.path,i),r.some(function(t){return t.path===o})||(o=i)),{text:a,link:o}})};return Object(i.a)(this.userNav).concat([o])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(Object(l.k)(t),{items:(t.items||[]).map(l.k)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],n=["GitHub","GitLab","Bitbucket"],e=0;e<n.length;e++){var i=n[e];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},h=(e(152),Object(u.a)(f,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null));h.options.__file="NavLinks.vue";n.a=h.exports},110:function(t,n,e){},111:function(t,n,e){"use strict";n.a={}},112:function(t,n,e){},113:function(t,n,e){},114:function(t,n,e){},115:function(t,n,e){},126:function(t,n,e){"use strict";e(28),e(30),e(40),e(104),e(140);var i=e(101),r={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(n){return n===t.link}):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},s=e(18),o=Object(s.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);o.options.__file="NavLink.vue";n.a=o.exports},127:function(t,n,e){"use strict";e(39),e(105),e(130);var i={data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var n=this.$site.pages,e=this.$localePath,i=function(n){return n.title&&n.title.toLowerCase().indexOf(t)>-1},r=[],s=0;s<n.length&&!(r.length>=5);s++){var o=n[s];if(this.getPageLocalePath(o)===e)if(i(o))r.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(r.length>=5);u++){var a=o.headers[u];i(a)&&r.push(Object.assign({},o,{path:o.path+"#"+a.slug,header:a}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var n in this.$site.locales||{})if("/"!==n&&0===t.path.indexOf(n))return n;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},r=(e(146),e(18)),s=Object(r.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"search-box"},[e("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(n){t.query=n.target.value},focus:function(n){t.focused=!0},blur:function(n){t.focused=!1},keyup:[function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.go(t.focusIndex)},function(n){return"button"in n||!t._k(n.keyCode,"up",38,n.key,["Up","ArrowUp"])?t.onUp(n):null},function(n){return"button"in n||!t._k(n.keyCode,"down",40,n.key,["Down","ArrowDown"])?t.onDown(n):null}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(n,i){return e("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(n){t.go(i)},mouseenter:function(n){t.focus(i)}}},[e("a",{attrs:{href:n.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(n.title||n.path))]),t._v(" "),n.header?e("span",{staticClass:"header"},[t._v("> "+t._s(n.header.title))]):t._e()])])})):t._e()])},[],!1,null,null,null);s.options.__file="SearchBox.vue";n.a=s.exports},128:function(t,n,e){"use strict";e(143);var i=e(18),r=Object(i.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"sidebar-button",on:{click:function(n){t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null);r.options.__file="SidebarButton.vue";n.a=r.exports},130:function(t,n,e){"use strict";e(144)("trim",function(t){return function(){return t(this,3)}})},131:function(t,n,e){"use strict";var i=e(9),r=e(11),s=e(7),o=e(20),u=e(1);t.exports=function(t,n,e){var a=u(t),c=e(o,a,""[t]),l=c[0],f=c[1];s(function(){var n={};return n[a]=function(){return 7},7!=""[t](n)})&&(r(String.prototype,t,l),i(RegExp.prototype,a,2==n?function(t,n){return f.call(t,this,n)}:function(t){return f.call(t,this)}))}},135:function(t,n,e){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(e(150),e(18)),s=Object(r.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);s.options.__file="DropdownTransition.vue";n.a=s.exports},140:function(t,n,e){"use strict";e(141)("link",function(t){return function(n){return t(this,"a","href",n)}})},141:function(t,n,e){var i=e(3),r=e(7),s=e(20),o=/"/g,u=function(t,n,e,i){var r=String(s(t)),u="<"+n;return""!==e&&(u+=" "+e+'="'+String(i).replace(o,"&quot;")+'"'),u+">"+r+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(u),i(i.P+i.F*r(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",e)}},143:function(t,n,e){"use strict";var i=e(110);e.n(i).a},144:function(t,n,e){var i=e(3),r=e(20),s=e(7),o=e(145),u="["+o+"]",a=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),l=function(t,n,e){var r={},u=s(function(){return!!o[t]()||"​"!="​"[t]()}),a=r[t]=u?n(f):o[t];e&&(r[e]=a),i(i.P+i.F*u,"String",r)},f=l.trim=function(t,n){return t=String(r(t)),1&n&&(t=t.replace(a,"")),2&n&&(t=t.replace(c,"")),t};t.exports=l},145:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},146:function(t,n,e){"use strict";var i=e(112);e.n(i).a},147:function(t,n,e){var i=e(4),r=e(64),s=e(5).f,o=e(62).f,u=e(61),a=e(148),c=i.RegExp,l=c,f=c.prototype,h=/a/g,p=/a/g,g=new c(h)!==h;if(e(6)&&(!g||e(7)(function(){return p[e(1)("match")]=!1,c(h)!=h||c(p)==p||"/a/i"!=c(h,"i")}))){c=function(t,n){var e=this instanceof c,i=u(t),s=void 0===n;return!e&&i&&t.constructor===c&&s?t:r(g?new l(i&&!s?t.source:t,n):l((i=t instanceof c)?t.source:t,i&&s?a.call(t):n),e?this:f,c)};for(var d=function(t){t in c||s(c,t,{configurable:!0,get:function(){return l[t]},set:function(n){l[t]=n}})},v=o(l),m=0;v.length>m;)d(v[m++]);f.constructor=c,c.prototype=f,e(11)(i,"RegExp",c)}e(63)("RegExp")},148:function(t,n,e){"use strict";var i=e(8);t.exports=function(){var t=i(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},149:function(t,n,e){e(131)("match",1,function(t,n,e){return[function(e){"use strict";var i=t(this),r=void 0==e?void 0:e[n];return void 0!==r?r.call(e,i):new RegExp(e)[n](String(i))},e]})},150:function(t,n,e){"use strict";var i=e(113);e.n(i).a},151:function(t,n,e){"use strict";var i=e(114);e.n(i).a},152:function(t,n,e){"use strict";var i=e(115);e.n(i).a}}]);