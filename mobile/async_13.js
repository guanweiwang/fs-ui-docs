(this.webpackJsonpfsui=this.webpackJsonpfsui||[]).push([[13],{119:function(t,e,i){"use strict";var n=i(69);i.n(n).a},120:function(t,e,i){(t.exports=i(13)(!1)).push([t.i,".demo {\n  padding: 0 15px;\n}\n.demo img,\n  .demo div[lazy] {\n    width: 100%;\n    height: 200px;\n    margin-bottom: 10px;\n    padding: 10px;\n    box-sizing: border-box;\n    background-color: white;\n    background-position: cover;\n    background-size: center;\n    background-repeat: no-repeat;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n",""])},161:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo"},[e("fs-group",{attrs:{title:"懒加载"}},this._l(this.imgList,function(t,i){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"img"}],key:i})}),0),e("fs-group",{attrs:{title:"背景图懒加载"}},this._l(this.bgList,function(t,i){return e("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t,expression:"img",arg:"background-image"}],key:i,staticClass:"bg-img"})}),0),e("fs-group",{attrs:{title:"懒加载模块"}},[e("lazy-component",{on:{show:this.handler}},this._l(this.componentList,function(t,i){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"img"}],key:i})}),0)],1)],1)};n._withStripped=!0;var o={data:function(){return{imgList:["http://img.article.pchome.net/01/57/88/40/pic_lib/wm/Bing08.jpg","http://file2.desktx.com/pc/wallpaper/2014/12/51df6780e915d.jpg","http://i2.download.fd.pchome.net/t_960x600/g1/M00/02/02/ooYBAFKcSw6IL5zVAAywextzdfEAABHwQO7-fAADLCT123.jpg","http://attach.bbs.miui.com/forum/201306/14/171230vmizsz9zvzdzmhbo.jpg"],bgList:["http://d.5857.com/by_160416/003.jpg","http://i7.download.fd.pchome.net/t_960x600/g1/M00/02/02/ooYBAFKcSvKIKig_AA1MpVcw4oUAABHwQNbK4gADUy9572.jpg"],componentList:["http://pic1.win4000.com/wallpaper/e/5124837137ee5.jpg","http://d.5857.com/byb_160506/011.jpg"]}},methods:{handler:function(){console.log("component show")}}},a=(i(119),i(1)),s=Object(a.a)(o,n,[],!1,null,null,null);s.options.__file="packages/lazy-load/demo/index.vue";e.default=s.exports},69:function(t,e,i){var n=i(120);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(17)(n,o);n.locals&&(t.exports=n.locals)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvbGF6eS1sb2FkL2RlbW8vaW5kZXgudnVlP2RmMTkiLCJ3ZWJwYWNrOi8vZnN1aS8uL3BhY2thZ2VzL2xhenktbG9hZC9kZW1vL2luZGV4LnZ1ZT81NTRkIiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9sYXp5LWxvYWQvZGVtby9pbmRleC52dWU/OTYyNiIsIndlYnBhY2s6Ly9mc3VpL3BhY2thZ2VzL2xhenktbG9hZC9kZW1vL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvbGF6eS1sb2FkL2RlbW8vaW5kZXgudnVlP2Q2YjkiLCJ3ZWJwYWNrOi8vZnN1aS8uL3BhY2thZ2VzL2xhenktbG9hZC9kZW1vL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvbGF6eS1sb2FkL2RlbW8vaW5kZXgudnVlP2I3OTciXSwibmFtZXMiOlsiX25vZGVfbW9kdWxlc19zdHlsZV9sb2FkZXJfaW5kZXhfanNfbm9kZV9tb2R1bGVzX2Nzc19sb2FkZXJfaW5kZXhfanNfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2xvYWRlcnNfc3R5bGVQb3N0TG9hZGVyX2pzX25vZGVfbW9kdWxlc19wb3N0Y3NzX2xvYWRlcl9zcmNfaW5kZXhfanNfbm9kZV9tb2R1bGVzX3Nhc3NfbG9hZGVyX2xpYl9sb2FkZXJfanNfbm9kZV9tb2R1bGVzX3Z1ZV9sb2FkZXJfbGliX2luZGV4X2pzX3Z1ZV9sb2FkZXJfb3B0aW9uc19pbmRleF92dWVfdnVlX3R5cGVfc3R5bGVfaW5kZXhfMF9sYW5nX3Njc3NfX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibiIsIm1vZHVsZSIsImV4cG9ydHMiLCJwdXNoIiwiaSIsInJlbmRlciIsIl9oIiwidGhpcyIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJ0aXRsZSIsIl9sIiwiaW1nTGlzdCIsImltZyIsImluZGV4IiwiZGlyZWN0aXZlcyIsIm5hbWUiLCJyYXdOYW1lIiwidmFsdWUiLCJleHByZXNzaW9uIiwia2V5IiwiYmdMaXN0IiwiYXJnIiwib24iLCJzaG93IiwiaGFuZGxlciIsImNvbXBvbmVudExpc3QiLCJfd2l0aFN0cmlwcGVkIiwibGF6eV9sb2FkX2RlbW92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc18iLCJkYXRhIiwibWV0aG9kcyIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiLCJPYmplY3QiLCJjb21wb25lbnROb3JtYWxpemVyIiwib3B0aW9ucyIsIl9fZmlsZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJjb250ZW50IiwiaG1yIiwidHJhbnNmb3JtIiwiaW5zZXJ0SW50byIsInVuZGVmaW5lZCIsImxvY2FscyJdLCJtYXBwaW5ncyI6IitGQUFBLElBQUFBLEVBQUFDLEVBQUEsSUFBQUEsRUFBQUMsRUFBQUYsR0FBK1ksd0JDQS9ZRyxFQUFBQyxRQUEyQkgsRUFBUSxHQUFSQSxFQUEwRCxJQUtyRkksS0FBQSxDQUFjRixFQUFBRyxFQUFTLHVXQUFxVyw4Q0NMNVgsSUFBQUMsRUFBQSxXQUNBLElBQ0FDLEVBREFDLEtBQ0FDLGVBQ0FDLEVBRkFGLEtBRUFHLE1BQUFELElBQUFILEVBQ0EsT0FBQUcsRUFDQSxNQUNBLENBQUtFLFlBQUEsUUFDTCxDQUNBRixFQUNBLFdBQ0EsQ0FBU0csTUFBQSxDQUFTQyxNQUFBLFFBVGxCTixLQVVBTyxHQVZBUCxLQVVBUSxRQUFBLFNBQUFDLEVBQUFDLEdBQ0EsT0FBQVIsRUFBQSxPQUNBUyxXQUFBLENBQ0EsQ0FBZUMsS0FBQSxPQUFBQyxRQUFBLFNBQUFDLE1BQUFMLEVBQUFNLFdBQUEsUUFFZkMsSUFBQU4sTUFHQSxHQUVBUixFQUNBLFdBQ0EsQ0FBU0csTUFBQSxDQUFTQyxNQUFBLFdBdEJsQk4sS0F1QkFPLEdBdkJBUCxLQXVCQWlCLE9BQUEsU0FBQVIsRUFBQUMsR0FDQSxPQUFBUixFQUFBLE9BQ0FTLFdBQUEsQ0FDQSxDQUNBQyxLQUFBLE9BQ0FDLFFBQUEsMEJBQ0FDLE1BQUFMLEVBQ0FNLFdBQUEsTUFDQUcsSUFBQSxxQkFHQUYsSUFBQU4sRUFDQU4sWUFBQSxhQUdBLEdBRUFGLEVBQ0EsV0FDQSxDQUFTRyxNQUFBLENBQVNDLE1BQUEsVUFDbEIsQ0FDQUosRUFDQSxpQkFDQSxDQUFhaUIsR0FBQSxDQUFNQyxLQTlDbkJwQixLQThDbUJxQixVQTlDbkJyQixLQStDQU8sR0EvQ0FQLEtBK0NBc0IsY0FBQSxTQUFBYixFQUFBQyxHQUNBLE9BQUFSLEVBQUEsT0FDQVMsV0FBQSxDQUNBLENBQ0FDLEtBQUEsT0FDQUMsUUFBQSxTQUNBQyxNQUFBTCxFQUNBTSxXQUFBLFFBR0FDLElBQUFOLE1BR0EsSUFHQSxJQUdBLElBSUFaLEVBQUF5QixlQUFBLEVDcERBLElDbkIyTEMsRURtQjNMLENBQ0FDLEtBREEsV0FFQSxPQUNBakIsUUFBQSxDQUNBLGtFQUNBLGlFQUNBLDZHQUNBLHlFQUVBUyxPQUFBLENBQ0Esc0NBQ0EsOEdBRUFLLGNBQUEsQ0FDQSx3REFDQSwwQ0FJQUksUUFBQSxDQUNBTCxRQURBLFdBRUFNLFFBQUFDLElBQUEscUNFaENBQyxFQUFnQkMsT0FBQUMsRUFBQSxFQUFBRCxDQUNkTixFQUNBMUIsRUg0REYsSUcxREEsRUFDQSxLQUNBLEtBQ0EsTUF1QkErQixFQUFBRyxRQUFBQyxPQUFBLG9DQUNlQyxFQUFBLFFBQUFMLDhCQ3RDZixJQUFBTSxFQUFjM0MsRUFBUSxLQUV0QixpQkFBQTJDLE1BQUEsRUFBNEN6QyxFQUFBRyxFQUFTc0MsRUFBQSxNQU9yRCxJQUFBSCxFQUFBLENBQWVJLEtBQUEsRUFFZkMsZUFQQUEsRUFRQUMsZ0JBQUFDLEdBRWEvQyxFQUFRLEdBQVJBLENBQThEMkMsRUFBQUgsR0FFM0VHLEVBQUFLLFNBQUE5QyxFQUFBQyxRQUFBd0MsRUFBQUsiLCJmaWxlIjoiYXN5bmNfMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRlbW8ge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG4uZGVtbyBpbWcsXFxuICAuZGVtbyBkaXZbbGF6eV0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZGVtb1wiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCLmh5LliqDovb1cIiB9IH0sXG4gICAgICAgIF92bS5fbChfdm0uaW1nTGlzdCwgZnVuY3Rpb24oaW1nLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHsgbmFtZTogXCJsYXp5XCIsIHJhd05hbWU6IFwidi1sYXp5XCIsIHZhbHVlOiBpbWcsIGV4cHJlc3Npb246IFwiaW1nXCIgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGtleTogaW5kZXhcbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZzLWdyb3VwXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwi6IOM5pmv5Zu+5oeS5Yqg6L29XCIgfSB9LFxuICAgICAgICBfdm0uX2woX3ZtLmJnTGlzdCwgZnVuY3Rpb24oaW1nLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbGF6eTpiYWNrZ3JvdW5kLWltYWdlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGltZyxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImltZ1wiLFxuICAgICAgICAgICAgICAgIGFyZzogXCJiYWNrZ3JvdW5kLWltYWdlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1pbWdcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCLmh5LliqDovb3mqKHlnZdcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGF6eS1jb21wb25lbnRcIixcbiAgICAgICAgICAgIHsgb246IHsgc2hvdzogX3ZtLmhhbmRsZXIgfSB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5jb21wb25lbnRMaXN0LCBmdW5jdGlvbihpbWcsIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWxhenlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGltZyxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpbWdcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAga2V5OiBpbmRleFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImRlbW9cIj5cclxuICAgIDxmcy1ncm91cCB0aXRsZT1cIuaHkuWKoOi9vVwiPlxyXG4gICAgICA8aW1nIHYtZm9yPVwiKGltZywgaW5kZXgpIGluIGltZ0xpc3RcIiB2LWxhenk9XCJpbWdcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgIDwvZnMtZ3JvdXA+XHJcblxyXG4gICAgPGZzLWdyb3VwIHRpdGxlPVwi6IOM5pmv5Zu+5oeS5Yqg6L29XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiZy1pbWdcIiB2LWZvcj1cIihpbWcsIGluZGV4KSBpbiBiZ0xpc3RcIiB2LWxhenk6YmFja2dyb3VuZC1pbWFnZT1cImltZ1wiIDprZXk9XCJpbmRleFwiIC8+XHJcbiAgICA8L2ZzLWdyb3VwPlxyXG5cclxuICAgIDxmcy1ncm91cCB0aXRsZT1cIuaHkuWKoOi9veaooeWdl1wiPlxyXG4gICAgICA8bGF6eS1jb21wb25lbnQgQHNob3c9XCJoYW5kbGVyXCI+XHJcbiAgICAgICAgPGltZyB2LWZvcj1cIihpbWcsIGluZGV4KSBpbiBjb21wb25lbnRMaXN0XCIgdi1sYXp5PVwiaW1nXCIgOmtleT1cImluZGV4XCIgPlxyXG4gICAgICA8L2xhenktY29tcG9uZW50PlxyXG4gICAgPC9mcy1ncm91cD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGltZ0xpc3Q6IFtcclxuICAgICAgICAnaHR0cDovL2ltZy5hcnRpY2xlLnBjaG9tZS5uZXQvMDEvNTcvODgvNDAvcGljX2xpYi93bS9CaW5nMDguanBnJyxcclxuICAgICAgICAnaHR0cDovL2ZpbGUyLmRlc2t0eC5jb20vcGMvd2FsbHBhcGVyLzIwMTQvMTIvNTFkZjY3ODBlOTE1ZC5qcGcnLFxyXG4gICAgICAgICdodHRwOi8vaTIuZG93bmxvYWQuZmQucGNob21lLm5ldC90Xzk2MHg2MDAvZzEvTTAwLzAyLzAyL29vWUJBRktjU3c2SUw1elZBQXl3ZXh0emRmRUFBQkh3UU83LWZBQURMQ1QxMjMuanBnJyxcclxuICAgICAgICAnaHR0cDovL2F0dGFjaC5iYnMubWl1aS5jb20vZm9ydW0vMjAxMzA2LzE0LzE3MTIzMHZtaXpzejl6dnpkem1oYm8uanBnJ1xyXG4gICAgICBdLFxyXG4gICAgICBiZ0xpc3Q6IFtcclxuICAgICAgICAnaHR0cDovL2QuNTg1Ny5jb20vYnlfMTYwNDE2LzAwMy5qcGcnLFxyXG4gICAgICAgICdodHRwOi8vaTcuZG93bmxvYWQuZmQucGNob21lLm5ldC90Xzk2MHg2MDAvZzEvTTAwLzAyLzAyL29vWUJBRktjU3ZLSUtpZ19BQTFNcFZjdzRvVUFBQkh3UU5iSzRnQURVeTk1NzIuanBnJ1xyXG4gICAgICBdLFxyXG4gICAgICBjb21wb25lbnRMaXN0OiBbXHJcbiAgICAgICAgJ2h0dHA6Ly9waWMxLndpbjQwMDAuY29tL3dhbGxwYXBlci9lLzUxMjQ4MzcxMzdlZTUuanBnJyxcclxuICAgICAgICAnaHR0cDovL2QuNTg1Ny5jb20vYnliXzE2MDUwNi8wMTEuanBnJ1xyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBoYW5kbGVyICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudCBzaG93JylcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuLmRlbW8ge1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBpbWcsXHJcbiAgZGl2W2xhenldIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwuMik7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OWVjNDc1YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXOWFrOWFsee7hOS7tuW6kzLmnJ9cXFxcZnMtdWlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ5ZWM0NzVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ5ZWM0NzVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDllYzQ3NWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDllYzQ3NWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhY2thZ2VzL2xhenktbG9hZC9kZW1vL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=