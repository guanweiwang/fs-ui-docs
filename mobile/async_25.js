(this.webpackJsonpfsui=this.webpackJsonpfsui||[]).push([[25],{148:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("fs-group",{attrs:{title:"选择单个日期"}},[s("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show=!0}},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),s("fs-calendar",{attrs:{show:t.show},on:{"update:show":function(e){t.show=e},changeStartTime:function(e){t.startTime=e}}})],1),s("fs-group",{attrs:{title:"选择单个日期-默认日期"}},[s("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show1=!0}},model:{value:t.startTime1,callback:function(e){t.startTime1=e},expression:"startTime1"}}),s("fs-calendar",{attrs:{show:t.show1,start:t.startTime1},on:{"update:show":function(e){t.show1=e},changeStartTime:function(e){t.startTime=e}}})],1),s("fs-group",{attrs:{title:"选择单个日期-自动关闭"}},[s("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show2=!0}},model:{value:t.startTime2,callback:function(e){t.startTime2=e},expression:"startTime2"}}),s("fs-calendar",{attrs:{show:t.show2,autoclose:""},on:{"update:show":function(e){t.show2=e},changeStartTime:function(e){t.startTime2=e}}})],1),s("fs-group",{attrs:{title:"选择日期范围"}},[s("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show3=!0}},model:{value:t.formatTime3,callback:function(e){t.formatTime3=e},expression:"formatTime3"}}),s("fs-calendar",{attrs:{show:t.show3,isTimeRange:!0},on:{"update:show":function(e){t.show3=e},changeStartTime:function(e){t.startTime3=e},changeEndTime:function(e){t.endTime3=e}}})],1),s("fs-group",{attrs:{title:"选择日期范围-默认范围"}},[s("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show4=!0}},model:{value:t.formatTime4,callback:function(e){t.formatTime4=e},expression:"formatTime4"}}),s("fs-calendar",{attrs:{show:t.show4,isTimeRange:!0,start:t.startTime4,end:t.endTime4},on:{"update:show":function(e){t.show4=e},changeStartTime:function(e){t.startTime4=e},changeEndTime:function(e){t.endTime4=e}}})],1),s("fs-group",{attrs:{title:"选择日期范围-20天以内"}},[s("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show5=!0}},model:{value:t.formatTime5,callback:function(e){t.formatTime5=e},expression:"formatTime5"}}),s("fs-calendar",{attrs:{show:t.show5,isTimeRange:!0,numberDay:20},on:{"update:show":function(e){t.show5=e},changeStartTime:function(e){t.startTime5=e},changeEndTime:function(e){t.endTime5=e}}})],1)],1)};a._withStripped=!0;var n={data:function(){return{startTime:"",startTime1:"2018-10-12",startTime2:"",startTime3:"",startTime4:"2018-11-11",startTime5:"",endTime3:"",endTime4:"2018-12-21",endTime5:"",show:!1,show1:!1,show2:!1,show3:!1,show4:!1,show5:!1}},computed:{formatTime3:function(){return this.startTime3&&this.endTime3?"".concat(this.startTime3,"——").concat(this.endTime3):""},formatTime4:function(){return this.startTime4&&this.endTime4?"".concat(this.startTime4,"——").concat(this.endTime4):""},formatTime5:function(){return this.startTime5&&this.endTime5?"".concat(this.startTime5,"——").concat(this.endTime5):""}}},i=s(1),o=Object(i.a)(n,a,[],!1,null,null,null);o.options.__file="packages/calendar/demo/index.vue";e.default=o.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvY2FsZW5kYXIvZGVtby9pbmRleC52dWU/NWI1ZSIsIndlYnBhY2s6Ly9mc3VpL3BhY2thZ2VzL2NhbGVuZGFyL2RlbW8vaW5kZXgudnVlIiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9jYWxlbmRhci9kZW1vL2luZGV4LnZ1ZT9lZWIxIiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9jYWxlbmRhci9kZW1vL2luZGV4LnZ1ZSJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJhdHRycyIsInRpdGxlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib24iLCJvbi1zZWFyY2giLCIkZXZlbnQiLCJzaG93IiwibW9kZWwiLCJ2YWx1ZSIsInN0YXJ0VGltZSIsImNhbGxiYWNrIiwiJCR2IiwiZXhwcmVzc2lvbiIsInVwZGF0ZTpzaG93IiwiY2hhbmdlU3RhcnRUaW1lIiwic2hvdzEiLCJzdGFydFRpbWUxIiwic3RhcnQiLCJzaG93MiIsInN0YXJ0VGltZTIiLCJhdXRvY2xvc2UiLCJzaG93MyIsImZvcm1hdFRpbWUzIiwiaXNUaW1lUmFuZ2UiLCJzdGFydFRpbWUzIiwiY2hhbmdlRW5kVGltZSIsImVuZFRpbWUzIiwic2hvdzQiLCJmb3JtYXRUaW1lNCIsInN0YXJ0VGltZTQiLCJlbmQiLCJlbmRUaW1lNCIsInNob3c1IiwiZm9ybWF0VGltZTUiLCJudW1iZXJEYXkiLCJzdGFydFRpbWU1IiwiZW5kVGltZTUiLCJfd2l0aFN0cmlwcGVkIiwiY2FsZW5kYXJfZGVtb3Z1ZV90eXBlX3NjcmlwdF9sYW5nX2pzXyIsImRhdGEiLCJjb21wdXRlZCIsImNvbmNhdCIsImNvbXBvbmVudCIsIk9iamVjdCIsImNvbXBvbmVudE5vcm1hbGl6ZXIiLCJvcHRpb25zIiwiX19maWxlIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJtYXBwaW5ncyI6InNHQUFB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QixLQUFBZ0MsU0FBQSxHQUFBZSxPQUFBL0MsS0FBQThCLFdBQUEsTUFBQWlCLE9BQUEvQyxLQUFBZ0MsVUFBQSxJQUVBRSxZQUpBLFdBS0EsT0FBQWxDLEtBQUFtQyxZQUFBbkMsS0FBQXFDLFNBQUEsR0FBQVUsT0FBQS9DLEtBQUFtQyxXQUFBLE1BQUFZLE9BQUEvQyxLQUFBcUMsVUFBQSxJQUVBRSxZQVBBLFdBUUEsT0FBQXZDLEtBQUF5QyxZQUFBekMsS0FBQTBDLFNBQUEsR0FBQUssT0FBQS9DLEtBQUF5QyxXQUFBLE1BQUFNLE9BQUEvQyxLQUFBMEMsVUFBQSxhRWxEQU0sRUFBZ0JDLE9BQUFDLEVBQUEsRUFBQUQsQ0FDZEwsRUFDQTlDLEVIc05GLElHcE5BLEVBQ0EsS0FDQSxLQUNBLE1BdUJBa0QsRUFBQUcsUUFBQUMsT0FBQSxtQ0FDZUMsRUFBQSxRQUFBTCIsImZpbGUiOiJhc3luY18yNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1ncm91cFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIumAieaLqeWNleS4quaXpeacn1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oup5pel5pyfXCIsIHR5cGU6IFwic2VhcmNoXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwib24tc2VhcmNoXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdGFydFRpbWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc3RhcnRUaW1lID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RhcnRUaW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImZzLWNhbGVuZGFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNob3c6IF92bS5zaG93IH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcInVwZGF0ZTpzaG93XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93ID0gJGV2ZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoYW5nZVN0YXJ0VGltZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnN0YXJ0VGltZSA9ICRldmVudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZzLWdyb3VwXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwi6YCJ5oup5Y2V5Liq5pel5pyfLem7mOiupOaXpeacn1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oup5pel5pyfXCIsIHR5cGU6IFwic2VhcmNoXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwib24tc2VhcmNoXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93MSA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3RhcnRUaW1lMSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5zdGFydFRpbWUxID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RhcnRUaW1lMVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJmcy1jYWxlbmRhclwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBzaG93OiBfdm0uc2hvdzEsIHN0YXJ0OiBfdm0uc3RhcnRUaW1lMSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJ1cGRhdGU6c2hvd1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzEgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhbmdlU3RhcnRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc3RhcnRUaW1lID0gJGV2ZW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCLpgInmi6nljZXkuKrml6XmnJ8t6Ieq5Yqo5YWz6ZetXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJmcy1pbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCLor7fpgInmi6nml6XmnJ9cIiwgdHlwZTogXCJzZWFyY2hcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJvbi1zZWFyY2hcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNob3cyID0gdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdGFydFRpbWUyLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnN0YXJ0VGltZTIgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdGFydFRpbWUyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImZzLWNhbGVuZGFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNob3c6IF92bS5zaG93MiwgYXV0b2Nsb3NlOiBcIlwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcInVwZGF0ZTpzaG93XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93MiA9ICRldmVudFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjaGFuZ2VTdGFydFRpbWU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zdGFydFRpbWUyID0gJGV2ZW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCLpgInmi6nml6XmnJ/ojIPlm7RcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqeaXpeacn1wiLCB0eXBlOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzMgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1hdFRpbWUzLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWUzID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWF0VGltZTNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiZnMtY2FsZW5kYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2hvdzogX3ZtLnNob3czLCBpc1RpbWVSYW5nZTogdHJ1ZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJ1cGRhdGU6c2hvd1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzMgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhbmdlU3RhcnRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc3RhcnRUaW1lMyA9ICRldmVudFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjaGFuZ2VFbmRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZW5kVGltZTMgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1ncm91cFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIumAieaLqeaXpeacn+iMg+WbtC3pu5jorqTojIPlm7RcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqeaXpeacn1wiLCB0eXBlOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzQgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1hdFRpbWU0LFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWU0ID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWF0VGltZTRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiZnMtY2FsZW5kYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc2hvdzogX3ZtLnNob3c0LFxuICAgICAgICAgICAgICBpc1RpbWVSYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc3RhcnQ6IF92bS5zdGFydFRpbWU0LFxuICAgICAgICAgICAgICBlbmQ6IF92bS5lbmRUaW1lNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwidXBkYXRlOnNob3dcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNob3c0ID0gJGV2ZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoYW5nZVN0YXJ0VGltZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnN0YXJ0VGltZTQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhbmdlRW5kVGltZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmVuZFRpbWU0ID0gJGV2ZW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCLpgInmi6nml6XmnJ/ojIPlm7QtMjDlpKnku6XlhoVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqeaXpeacn1wiLCB0eXBlOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzUgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1hdFRpbWU1LFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWU1ID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybWF0VGltZTVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiZnMtY2FsZW5kYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2hvdzogX3ZtLnNob3c1LCBpc1RpbWVSYW5nZTogdHJ1ZSwgbnVtYmVyRGF5OiAyMCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJ1cGRhdGU6c2hvd1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzUgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhbmdlU3RhcnRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc3RhcnRUaW1lNSA9ICRldmVudFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjaGFuZ2VFbmRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZW5kVGltZTUgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGZzLWdyb3VwIHRpdGxlPVwi6YCJ5oup5Y2V5Liq5pel5pyfXCI+XHJcbiAgICAgIDxmcy1pbnB1dCBwbGFjZWhvbGRlcj1cIuivt+mAieaLqeaXpeacn1wiIHR5cGU9XCJzZWFyY2hcIiBAb24tc2VhcmNoPVwic2hvdyA9IHRydWVcIiB2LW1vZGVsPVwic3RhcnRUaW1lXCIvPlxyXG4gICAgICA8ZnMtY2FsZW5kYXIgOnNob3cuc3luYz1cInNob3dcIiAgQGNoYW5nZVN0YXJ0VGltZT1cInN0YXJ0VGltZSA9ICRldmVudFwiLz5cclxuICAgIDwvZnMtZ3JvdXA+XHJcbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLpgInmi6nljZXkuKrml6XmnJ8t6buY6K6k5pel5pyfXCI+XHJcbiAgICAgIDxmcy1pbnB1dCBwbGFjZWhvbGRlcj1cIuivt+mAieaLqeaXpeacn1wiIHR5cGU9XCJzZWFyY2hcIiBAb24tc2VhcmNoPVwic2hvdzEgPSB0cnVlXCIgdi1tb2RlbD1cInN0YXJ0VGltZTFcIi8+XHJcbiAgICAgIDxmcy1jYWxlbmRhciA6c2hvdy5zeW5jPVwic2hvdzFcIiAgQGNoYW5nZVN0YXJ0VGltZT1cInN0YXJ0VGltZSA9ICRldmVudFwiIDpzdGFydD1cInN0YXJ0VGltZTFcIi8+XHJcbiAgICA8L2ZzLWdyb3VwPlxyXG4gICAgPGZzLWdyb3VwIHRpdGxlPVwi6YCJ5oup5Y2V5Liq5pel5pyfLeiHquWKqOWFs+mXrVwiPlxyXG4gICAgICA8ZnMtaW5wdXQgcGxhY2Vob2xkZXI9XCLor7fpgInmi6nml6XmnJ9cIiB0eXBlPVwic2VhcmNoXCIgQG9uLXNlYXJjaD1cInNob3cyID0gdHJ1ZVwiIHYtbW9kZWw9XCJzdGFydFRpbWUyXCIvPlxyXG4gICAgICA8ZnMtY2FsZW5kYXIgOnNob3cuc3luYz1cInNob3cyXCIgIEBjaGFuZ2VTdGFydFRpbWU9XCJzdGFydFRpbWUyID0gJGV2ZW50XCIgYXV0b2Nsb3NlLz5cclxuICAgIDwvZnMtZ3JvdXA+XHJcbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLpgInmi6nml6XmnJ/ojIPlm7RcIj5cclxuICAgICAgPGZzLWlucHV0IHBsYWNlaG9sZGVyPVwi6K+36YCJ5oup5pel5pyfXCIgdHlwZT1cInNlYXJjaFwiIEBvbi1zZWFyY2g9XCJzaG93MyA9IHRydWVcIiB2LW1vZGVsPVwiZm9ybWF0VGltZTNcIi8+XHJcbiAgICAgIDxmcy1jYWxlbmRhciA6c2hvdy5zeW5jPVwic2hvdzNcIiA6aXNUaW1lUmFuZ2U9XCJ0cnVlXCIgIEBjaGFuZ2VTdGFydFRpbWU9XCJzdGFydFRpbWUzID0gJGV2ZW50XCIgQGNoYW5nZUVuZFRpbWU9XCJlbmRUaW1lMyA9ICRldmVudFwiLz5cclxuICAgIDwvZnMtZ3JvdXA+XHJcbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLpgInmi6nml6XmnJ/ojIPlm7Qt6buY6K6k6IyD5Zu0XCI+XHJcbiAgICAgIDxmcy1pbnB1dCBwbGFjZWhvbGRlcj1cIuivt+mAieaLqeaXpeacn1wiIHR5cGU9XCJzZWFyY2hcIiBAb24tc2VhcmNoPVwic2hvdzQgPSB0cnVlXCIgdi1tb2RlbD1cImZvcm1hdFRpbWU0XCIvPlxyXG4gICAgICA8ZnMtY2FsZW5kYXIgOnNob3cuc3luYz1cInNob3c0XCIgOmlzVGltZVJhbmdlPVwidHJ1ZVwiICA6c3RhcnQ9XCJzdGFydFRpbWU0XCIgOmVuZD1cImVuZFRpbWU0XCIgQGNoYW5nZVN0YXJ0VGltZT1cInN0YXJ0VGltZTQgPSAkZXZlbnRcIiBAY2hhbmdlRW5kVGltZT1cImVuZFRpbWU0ID0gJGV2ZW50XCIvPlxyXG4gICAgPC9mcy1ncm91cD5cclxuICAgIDxmcy1ncm91cCB0aXRsZT1cIumAieaLqeaXpeacn+iMg+WbtC0yMOWkqeS7peWGhVwiPlxyXG4gICAgICA8ZnMtaW5wdXQgcGxhY2Vob2xkZXI9XCLor7fpgInmi6nml6XmnJ9cIiB0eXBlPVwic2VhcmNoXCIgQG9uLXNlYXJjaD1cInNob3c1ID0gdHJ1ZVwiIHYtbW9kZWw9XCJmb3JtYXRUaW1lNVwiLz5cclxuICAgICAgPGZzLWNhbGVuZGFyIDpzaG93LnN5bmM9XCJzaG93NVwiIDppc1RpbWVSYW5nZT1cInRydWVcIiA6bnVtYmVyRGF5PVwiMjBcIiAgQGNoYW5nZVN0YXJ0VGltZT1cInN0YXJ0VGltZTUgPSAkZXZlbnRcIiBAY2hhbmdlRW5kVGltZT1cImVuZFRpbWU1ID0gJGV2ZW50XCIvPlxyXG4gICAgPC9mcy1ncm91cD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhcnRUaW1lOiAnJyxcclxuICAgICAgc3RhcnRUaW1lMTogJzIwMTgtMTAtMTInLFxyXG4gICAgICBzdGFydFRpbWUyOiAnJyxcclxuICAgICAgc3RhcnRUaW1lMzogJycsXHJcbiAgICAgIHN0YXJ0VGltZTQ6ICcyMDE4LTExLTExJyxcclxuICAgICAgc3RhcnRUaW1lNTogJycsXHJcbiAgICAgIGVuZFRpbWUzOiAnJyxcclxuICAgICAgZW5kVGltZTQ6ICcyMDE4LTEyLTIxJyxcclxuICAgICAgZW5kVGltZTU6ICcnLFxyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgc2hvdzE6IGZhbHNlLFxyXG4gICAgICBzaG93MjogZmFsc2UsXHJcbiAgICAgIHNob3czOiBmYWxzZSxcclxuICAgICAgc2hvdzQ6IGZhbHNlLFxyXG4gICAgICBzaG93NTogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBmb3JtYXRUaW1lMyAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXJ0VGltZTMgJiYgdGhpcy5lbmRUaW1lMyA/IGAke3RoaXMuc3RhcnRUaW1lM33igJTigJQke3RoaXMuZW5kVGltZTN9YCA6ICcnXHJcbiAgICB9LFxyXG4gICAgZm9ybWF0VGltZTQgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGFydFRpbWU0ICYmIHRoaXMuZW5kVGltZTQgPyBgJHt0aGlzLnN0YXJ0VGltZTR94oCU4oCUJHt0aGlzLmVuZFRpbWU0fWAgOiAnJ1xyXG4gICAgfSxcclxuICAgIGZvcm1hdFRpbWU1ICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhcnRUaW1lNSAmJiB0aGlzLmVuZFRpbWU1ID8gYCR7dGhpcy5zdGFydFRpbWU1feKAlOKAlCR7dGhpcy5lbmRUaW1lNX1gIDogJydcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzgxMTUwMyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxc5YWs5YWx57uE5Lu25bqTMuacn1xcXFxmcy11aVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDc4MTE1MDMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDc4MTE1MDMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzgxMTUwMyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NzgxMTUwMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFja2FnZXMvY2FsZW5kYXIvZGVtby9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9