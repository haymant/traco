webpackJsonp([4,11,15],{"0WvE":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.emptyGif[data-v-0f338bc4] {\n  display: block;\n  width: 45%;\n  margin: 0 auto;\n}\n.dashboard-editor-container[data-v-0f338bc4] {\n  background-color: #e3e3e3;\n  min-height: 100vh;\n  padding: 50px 60px 0px;\n}\n.dashboard-editor-container .pan-info-roles[data-v-0f338bc4] {\n    font-size: 12px;\n    font-weight: 700;\n    color: #333;\n    display: block;\n}\n.dashboard-editor-container .info-container[data-v-0f338bc4] {\n    position: relative;\n    margin-left: 190px;\n    height: 150px;\n    line-height: 200px;\n}\n.dashboard-editor-container .info-container .display_name[data-v-0f338bc4] {\n      font-size: 48px;\n      line-height: 48px;\n      color: #212121;\n      position: absolute;\n      top: 25px;\n}\n",""])},"1Rx3":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("wxe2"),r=e("bEjd"),o=e("7EAa"),s=e("+xof"),i=e("k96P"),l=e("Eoil"),c=e("Ndbe"),d=e("jfHn"),p=e("1uyy"),u={newVisitis:{expectedData:[1200,1120,1161,1134,1105,1160,1165],actualData:[1200,1182,1191,1154,1162,1140,1145]},messages:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},purchases:{expectedData:[80,100,121,104,105,90,100],actualData:[120,90,100,138,142,130,130]},shoppings:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]}},b={name:"dashboard-admin",components:{GithubCorner:n.a,PanelGroup:r.default,LineChart:o.default,RaddarChart:s.default,PieChart:i.default,BarChart:l.default,TransactionTable:c.default,TodoList:d.default,BoxCard:p.default},data:function(){return{lineChartData:u.newVisitis}},methods:{handleSetLineChartData:function(t){this.lineChartData=u[t]}}},f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"dashboard-editor-container"},[a("panel-group",{on:{handleSetLineChartData:this.handleSetLineChartData}}),this._v(" "),a("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[a("line-chart",{attrs:{"chart-data":this.lineChartData}})],1),this._v(" "),a("el-row",{attrs:{gutter:8}},[a("el-col",{attrs:{xs:{span:12},sm:{span:12},md:{span:12},lg:{span:6},xl:{span:5}}},[a("box-card")],1),this._v(" "),a("el-col",{attrs:{xs:{span:12},sm:{span:12},md:{span:12},lg:{span:6},xl:{span:5}}},[a("todo-list")],1),this._v(" "),a("el-col",{staticStyle:{"padding-right":"8px","margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:12},xl:{span:12}}},[a("transaction-table")],1)],1)],1)},staticRenderFns:[]};var h=e("VU/8")(b,f,!1,function(t){e("OFyK")},"data-v-3cc38706",null);a.default=h.exports},ARoL:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("Dd8w"),r=e.n(n),o=e("NYxO"),s=e("1Rx3"),i=e("DY7s"),l=e("wxe2"),c={name:"dashboard",components:{adminDashboard:s.default,editorDashboard:i.default,GithubCorner:l.a},data:function(){return{currentRole:"adminDashboard",tableData:[{sector:"Trade Finance",volume:"$50B",gap:"WTO is aiming to reduce 50B trade finance cost."},{sector:"Supply Chain",volume:"$30B",gap:"Improve efficiency to process documents, martime/custom affairs, etc."},{sector:"KYC/AML",volume:"$25B",gap:"Help to build a trustful counterparty network."},{sector:"Insurance",volume:"$40B",gap:"Protect trade participants from unexpected events."}]}},computed:r()({},Object(o.b)(["roles"])),created:function(){this.roles.includes("admin")||(this.currentRole="editorDashboard")}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-container"},[e("el-popover",{ref:"popover2",attrs:{placement:"left",width:"600",trigger:"hover"}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("Traco")])]),t._v(" "),e("el-steps",{attrs:{active:1}},[e("el-step",{attrs:{title:t.$t("db.tracoParty"),icon:"el-icon-share"}}),t._v(" "),e("el-step",{attrs:{title:t.$t("db.tracoDoc"),icon:"el-icon-document"}}),t._v(" "),e("el-step",{attrs:{title:t.$t("db.tracoTrade"),icon:"el-icon-goods"}}),t._v(" "),e("el-step",{attrs:{title:t.$t("db.tracoMap"),icon:"el-icon-location"}})],1),t._v(" "),e("el-tabs",{attrs:{value:"first"}},[e("el-tab-pane",{attrs:{label:t.$t("db.tracoWhat"),name:"first"}},[t._v(t._s(t.$t("db.whatIsTraco")))]),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("db.tracoSrv"),name:"second"}},[t._v(t._s(t.$t("db.whatIsTracoSrv")))]),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("db.tracoApp"),name:"third"}},[t._v(t._s(t.$t("db.whatIsTracoApp")))]),t._v(" "),e("el-tab-pane",{attrs:{label:t.$t("db.tracoProtocol"),name:"fourth"}},[t._v(t._s(t.$t("db.whatIsTracoProtocol")))])],1),t._v(" "),e("div",{staticClass:"tip"},[t._v(t._s(t.$t("db.tracoGoal")))]),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"sector",label:"Sector",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"volume",label:"Volume",width:"100"}}),t._v(" "),e("el-table-column",{attrs:{prop:"gap",label:"Gap"}})],1)],1)],1),t._v(" "),e("el-button",{directives:[{name:"popover",rawName:"v-popover:popover2",arg:"popover2"}],staticStyle:{border:"0",position:"absolute",right:"0"}},[e("github-corner")],1),t._v(" "),e(t.currentRole,{tag:"component"})],1)},staticRenderFns:[]},p=e("VU/8")(c,d,!1,null,null,null);a.default=p.exports},DY44:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.dashboard-editor-container[data-v-3cc38706] {\n  padding: 32px;\n  background-color: #f0f2f5;\n}\n.dashboard-editor-container .chart-wrapper[data-v-3cc38706] {\n    background: #fff;\n    padding: 16px 16px 0;\n    margin-bottom: 32px;\n}\n",""])},DY7s:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("Dd8w"),r=e.n(n),o=e("NYxO"),s=e("kCe2"),i=e("wxe2"),l={name:"dashboard-editor",components:{PanThumb:s.a,GithubCorner:i.a},data:function(){return{emptyGif:"https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3"}},computed:r()({},Object(o.b)(["name","avatar","roles"]))},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-editor-container"},[e("div",{staticClass:" clearfix"},[e("pan-thumb",{staticStyle:{float:"left"},attrs:{image:t.avatar}},[t._v(" Your roles:\n      "),t._l(t.roles,function(a){return e("span",{key:a,staticClass:"pan-info-roles"},[t._v(t._s(a))])})],2),t._v(" "),e("github-corner"),t._v(" "),e("div",{staticClass:"info-container"},[e("span",{staticClass:"display_name"},[t._v(t._s(t.name))]),t._v(" "),e("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[t._v("editor : dashboard")])])],1),t._v(" "),e("div",[e("img",{staticClass:"emptyGif",attrs:{src:t.emptyGif}})])])},staticRenderFns:[]};var d=e("VU/8")(l,c,!1,function(t){e("ngpk")},"data-v-0f338bc4",null);a.default=d.exports},OFyK:function(t,a,e){var n=e("DY44");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("316a6c28",n,!0)},ngpk:function(t,a,e){var n=e("0WvE");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("27cba980",n,!0)}});