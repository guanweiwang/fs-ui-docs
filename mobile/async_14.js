(this.webpackJsonpfsui=this.webpackJsonpfsui||[]).push([[14],{171:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("fs-group",{attrs:{title:"选择单个日期"}},[n("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show1=!0}},model:{value:t.startTime1,callback:function(e){t.startTime1=e},expression:"startTime1"}}),n("fs-calendar",{attrs:{show:t.show1},on:{"update:show":function(e){t.show1=e},changeStartTime:function(e){t.startTime1=e}}})],1),n("fs-group",{attrs:{title:"选择日期范围"}},[n("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show2=!0}},model:{value:t.formatTime,callback:function(e){t.formatTime=e},expression:"formatTime"}}),n("fs-calendar",{attrs:{show:t.show2,isTimeRange:!0},on:{"update:show":function(e){t.show2=e},changeStartTime:function(e){t.startTime=e},changeEndTime:function(e){t.endTime=e}}})],1),n("fs-group",{attrs:{title:"选择范围在20天以内"}},[n("fs-input",{attrs:{placeholder:"请选择日期",type:"search"},on:{"on-search":function(e){t.show3=!0}},model:{value:t.formatTime,callback:function(e){t.formatTime=e},expression:"formatTime"}}),n("fs-calendar",{attrs:{show:t.show3,isTimeRange:!0,numberDay:20},on:{"update:show":function(e){t.show3=e},changeStartTime:function(e){t.startTime=e},changeEndTime:function(e){t.endTime=e}}})],1)],1)};a._withStripped=!0;var s={data:function(){return{startTime1:"",startTime:"",endTime:"",show1:!1,show2:!1,show3:!1}},computed:{formatTime:function(){return this.startTime&&this.endTime?"".concat(this.startTime,"——").concat(this.endTime):""}}},i=n(0),o=Object(i.a)(s,a,[],!1,null,null,null);o.options.__file="packages/calendar/demo/index.vue";e.default=o.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvY2FsZW5kYXIvZGVtby9pbmRleC52dWU/NWI1ZSIsIndlYnBhY2s6Ly9mc3VpL3BhY2thZ2VzL2NhbGVuZGFyL2RlbW8vaW5kZXgudnVlIiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9jYWxlbmRhci9kZW1vL2luZGV4LnZ1ZT9lZWIxIiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9jYWxlbmRhci9kZW1vL2luZGV4LnZ1ZSJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJhdHRycyIsInRpdGxlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib24iLCJvbi1zZWFyY2giLCIkZXZlbnQiLCJzaG93MSIsIm1vZGVsIiwidmFsdWUiLCJzdGFydFRpbWUxIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwic2hvdyIsInVwZGF0ZTpzaG93IiwiY2hhbmdlU3RhcnRUaW1lIiwic2hvdzIiLCJmb3JtYXRUaW1lIiwiaXNUaW1lUmFuZ2UiLCJzdGFydFRpbWUiLCJjaGFuZ2VFbmRUaW1lIiwiZW5kVGltZSIsInNob3czIiwibnVtYmVyRGF5IiwiX3dpdGhTdHJpcHBlZCIsImNhbGVuZGFyX2RlbW92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc18iLCJkYXRhIiwiY29tcHV0ZWQiLCJjb25jYXQiLCJjb21wb25lbnQiLCJPYmplY3QiLCJjb21wb25lbnROb3JtYWxpemVyIiwib3B0aW9ucyIsIl9fZmlsZSIsIl9fd2VicGFja19leHBvcnRzX18iXSwibWFwcGluZ3MiOiJzR0FBQSxJQUFBQSxFQUFBLFdBQ0EsSUFBQUMsRUFBQUMsS0FDQUMsRUFBQUYsRUFBQUcsZUFDQUMsRUFBQUosRUFBQUssTUFBQUQsSUFBQUYsRUFDQSxPQUFBRSxFQUNBLE9BRUFBLEVBQ0EsWUFDU0UsT0FBU0MsTUFBQSxZQUVsQkgsRUFBQSxZQUNBRSxPQUFvQkUsWUFBQSxRQUFBQyxLQUFBLFVBQ3BCQyxJQUNBQyxZQUFBLFNBQUFDLEdBQ0FaLEVBQUFhLE9BQUEsSUFHQUMsT0FDQUMsTUFBQWYsRUFBQWdCLFdBQ0FDLFNBQUEsU0FBQUMsR0FDQWxCLEVBQUFnQixXQUFBRSxHQUVBQyxXQUFBLGdCQUdBZixFQUFBLGVBQ0FFLE9BQW9CYyxLQUFBcEIsRUFBQWEsT0FDcEJILElBQ0FXLGNBQUEsU0FBQVQsR0FDQVosRUFBQWEsTUFBQUQsR0FFQVUsZ0JBQUEsU0FBQVYsR0FDQVosRUFBQWdCLFdBQUFKLE9BS0EsR0FFQVIsRUFDQSxZQUNTRSxPQUFTQyxNQUFBLFlBRWxCSCxFQUFBLFlBQ0FFLE9BQW9CRSxZQUFBLFFBQUFDLEtBQUEsVUFDcEJDLElBQ0FDLFlBQUEsU0FBQUMsR0FDQVosRUFBQXVCLE9BQUEsSUFHQVQsT0FDQUMsTUFBQWYsRUFBQXdCLFdBQ0FQLFNBQUEsU0FBQUMsR0FDQWxCLEVBQUF3QixXQUFBTixHQUVBQyxXQUFBLGdCQUdBZixFQUFBLGVBQ0FFLE9BQW9CYyxLQUFBcEIsRUFBQXVCLE1BQUFFLGFBQUEsR0FDcEJmLElBQ0FXLGNBQUEsU0FBQVQsR0FDQVosRUFBQXVCLE1BQUFYLEdBRUFVLGdCQUFBLFNBQUFWLEdBQ0FaLEVBQUEwQixVQUFBZCxHQUVBZSxjQUFBLFNBQUFmLEdBQ0FaLEVBQUE0QixRQUFBaEIsT0FLQSxHQUVBUixFQUNBLFlBQ1NFLE9BQVNDLE1BQUEsZ0JBRWxCSCxFQUFBLFlBQ0FFLE9BQW9CRSxZQUFBLFFBQUFDLEtBQUEsVUFDcEJDLElBQ0FDLFlBQUEsU0FBQUMsR0FDQVosRUFBQTZCLE9BQUEsSUFHQWYsT0FDQUMsTUFBQWYsRUFBQXdCLFdBQ0FQLFNBQUEsU0FBQUMsR0FDQWxCLEVBQUF3QixXQUFBTixHQUVBQyxXQUFBLGdCQUdBZixFQUFBLGVBQ0FFLE9BQW9CYyxLQUFBcEIsRUFBQTZCLE1BQUFKLGFBQUEsRUFBQUssVUFBQSxJQUNwQnBCLElBQ0FXLGNBQUEsU0FBQVQsR0FDQVosRUFBQTZCLE1BQUFqQixHQUVBVSxnQkFBQSxTQUFBVixHQUNBWixFQUFBMEIsVUFBQWQsR0FFQWUsY0FBQSxTQUFBZixHQUNBWixFQUFBNEIsUUFBQWhCLE9BS0EsSUFHQSxJQUlBYixFQUFBZ0MsZUFBQSxFQ3BHQSxJQ2pCMkxDLEdEa0IzTEMsS0FEQSxXQUVBLE9BQ0FqQixXQUFBLEdBQ0FVLFVBQUEsR0FDQUUsUUFBQSxHQUNBZixPQUFBLEVBQ0FVLE9BQUEsRUFDQU0sT0FBQSxJQUdBSyxVQUNBVixXQURBLFdBRUEsT0FBQXZCLEtBQUF5QixXQUFBekIsS0FBQTJCLFFBQUEsR0FBQU8sT0FBQWxDLEtBQUF5QixVQUFBLE1BQUFTLE9BQUFsQyxLQUFBMkIsU0FBQSxhRXZCQVEsRUFBZ0JDLE9BQUFDLEVBQUEsRUFBQUQsQ0FDZEwsRUFDQWpDLE1BRUYsRUFDQSxLQUNBLEtBQ0EsTUF1QkFxQyxFQUFBRyxRQUFBQyxPQUFBLG1DQUNlQyxFQUFBLFFBQUFMIiwiZmlsZSI6ImFzeW5jXzE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImZzLWdyb3VwXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwi6YCJ5oup5Y2V5Liq5pel5pyfXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJmcy1pbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCLor7fpgInmi6nml6XmnJ9cIiwgdHlwZTogXCJzZWFyY2hcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJvbi1zZWFyY2hcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNob3cxID0gdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdGFydFRpbWUxLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnN0YXJ0VGltZTEgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdGFydFRpbWUxXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImZzLWNhbGVuZGFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNob3c6IF92bS5zaG93MSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJ1cGRhdGU6c2hvd1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzEgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhbmdlU3RhcnRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc3RhcnRUaW1lMSA9ICRldmVudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZzLWdyb3VwXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwi6YCJ5oup5pel5pyf6IyD5Zu0XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJmcy1pbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCLor7fpgInmi6nml6XmnJ9cIiwgdHlwZTogXCJzZWFyY2hcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJvbi1zZWFyY2hcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNob3cyID0gdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtYXRUaW1lLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtYXRUaW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImZzLWNhbGVuZGFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNob3c6IF92bS5zaG93MiwgaXNUaW1lUmFuZ2U6IHRydWUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwidXBkYXRlOnNob3dcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNob3cyID0gJGV2ZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoYW5nZVN0YXJ0VGltZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnN0YXJ0VGltZSA9ICRldmVudFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjaGFuZ2VFbmRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZW5kVGltZSA9ICRldmVudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZzLWdyb3VwXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwi6YCJ5oup6IyD5Zu05ZyoMjDlpKnku6XlhoVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqeaXpeacn1wiLCB0eXBlOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcIm9uLXNlYXJjaFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzMgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1hdFRpbWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uZm9ybWF0VGltZSA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1hdFRpbWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiZnMtY2FsZW5kYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2hvdzogX3ZtLnNob3czLCBpc1RpbWVSYW5nZTogdHJ1ZSwgbnVtYmVyRGF5OiAyMCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJ1cGRhdGU6c2hvd1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzMgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhbmdlU3RhcnRUaW1lOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc3RhcnRUaW1lID0gJGV2ZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoYW5nZUVuZFRpbWU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5lbmRUaW1lID0gJGV2ZW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGZzLWdyb3VwIHRpdGxlPVwi6YCJ5oup5Y2V5Liq5pel5pyfXCI+XG4gICAgICA8ZnMtaW5wdXQgcGxhY2Vob2xkZXI9XCLor7fpgInmi6nml6XmnJ9cIiB0eXBlPVwic2VhcmNoXCIgQG9uLXNlYXJjaD1cInNob3cxID0gdHJ1ZVwiIHYtbW9kZWw9XCJzdGFydFRpbWUxXCIvPlxuICAgICAgPGZzLWNhbGVuZGFyIDpzaG93LnN5bmM9XCJzaG93MVwiICBAY2hhbmdlU3RhcnRUaW1lPVwic3RhcnRUaW1lMSA9ICRldmVudFwiLz5cbiAgICA8L2ZzLWdyb3VwPlxuICAgIDxmcy1ncm91cCB0aXRsZT1cIumAieaLqeaXpeacn+iMg+WbtFwiPlxuICAgICAgPGZzLWlucHV0IHBsYWNlaG9sZGVyPVwi6K+36YCJ5oup5pel5pyfXCIgdHlwZT1cInNlYXJjaFwiIEBvbi1zZWFyY2g9XCJzaG93MiA9IHRydWVcIiB2LW1vZGVsPVwiZm9ybWF0VGltZVwiLz5cbiAgICAgIDxmcy1jYWxlbmRhciA6c2hvdy5zeW5jPVwic2hvdzJcIiA6aXNUaW1lUmFuZ2U9XCJ0cnVlXCIgIEBjaGFuZ2VTdGFydFRpbWU9XCJzdGFydFRpbWUgPSAkZXZlbnRcIiBAY2hhbmdlRW5kVGltZT1cImVuZFRpbWUgPSAkZXZlbnRcIi8+XG4gICAgPC9mcy1ncm91cD5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLpgInmi6nojIPlm7TlnKgyMOWkqeS7peWGhVwiPlxuICAgICAgPGZzLWlucHV0IHBsYWNlaG9sZGVyPVwi6K+36YCJ5oup5pel5pyfXCIgdHlwZT1cInNlYXJjaFwiIEBvbi1zZWFyY2g9XCJzaG93MyA9IHRydWVcIiB2LW1vZGVsPVwiZm9ybWF0VGltZVwiLz5cbiAgICAgIDxmcy1jYWxlbmRhciA6c2hvdy5zeW5jPVwic2hvdzNcIiA6aXNUaW1lUmFuZ2U9XCJ0cnVlXCIgOm51bWJlckRheT1cIjIwXCIgIEBjaGFuZ2VTdGFydFRpbWU9XCJzdGFydFRpbWUgPSAkZXZlbnRcIiBAY2hhbmdlRW5kVGltZT1cImVuZFRpbWUgPSAkZXZlbnRcIi8+XG4gICAgPC9mcy1ncm91cD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0VGltZTE6ICcnLFxuICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgIGVuZFRpbWU6ICcnLFxuICAgICAgc2hvdzE6IGZhbHNlLFxuICAgICAgc2hvdzI6IGZhbHNlLFxuICAgICAgc2hvdzM6IGZhbHNlXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGZvcm1hdFRpbWUgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhcnRUaW1lICYmIHRoaXMuZW5kVGltZSA/IGAke3RoaXMuc3RhcnRUaW1lfeKAlOKAlCR7dGhpcy5lbmRUaW1lfWAgOiAnJ1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDc4MTE1MDMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy93YW5nZ3VhbndlaS9EZXNrdG9wL3Byb2plY3QvZnMtdWkvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ3ODExNTAzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ3ODExNTAzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDc4MTE1MDMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDc4MTE1MDMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhY2thZ2VzL2NhbGVuZGFyL2RlbW8vaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==