webpackJsonp([11],{jeGJ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"docPage",components:{GithubCorner:r("wxe2").a},data:function(){return{tableData:[{id:"#1",buyer:"Super",seller:"Pearl",tenor:"2M"},{id:"#1",buyer:"Super",seller:"Pearl",tenor:"2M"},{id:"#1",buyer:"Super",seller:"Pearl",tenor:"2M"},{id:"#1",buyer:"Super",seller:"Pearl",tenor:"2M"},{id:"#1",buyer:"Super",seller:"Pearl",tenor:"2M"}]}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-popover",{ref:"popover2",attrs:{placement:"bottom",width:"600",trigger:"hover"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("A Community")])]),e._v(" "),r("el-steps",{attrs:{active:1}},[r("el-step",{attrs:{title:e.$t("trade.portfolio"),icon:"el-icon-edit"}}),e._v(" "),r("el-step",{attrs:{title:e.$t("trade.market"),icon:"el-icon-service"}}),e._v(" "),r("el-step",{attrs:{title:e.$t("trade.broker"),icon:"el-icon-tickets"}}),e._v(" "),r("el-step",{attrs:{title:e.$t("trade.investor"),icon:"el-icon-phone"}})],1),e._v(" "),r("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:e.$t("trade.portfolio"),name:"first"}},[e._v(e._s(e.$t("trade.portfolioGuide")))]),e._v(" "),r("el-tab-pane",{attrs:{label:e.$t("trade.market"),name:"second"}},[e._v(e._s(e.$t("trade.marketGuide")))]),e._v(" "),r("el-tab-pane",{attrs:{label:e.$t("trade.broker"),name:"third"}},[e._v(e._s(e.$t("trade.brokerGuide")))]),e._v(" "),r("el-tab-pane",{attrs:{label:e.$t("trade.investor"),name:"forth"}},[e._v(e._s(e.$t("trade.investorGuide")))])],1),e._v(" "),r("code",[e._v(e._s(e.$t("trade.tradeGoal")))])],1)],1),e._v(" "),r("el-button",{directives:[{name:"popover",rawName:"v-popover:popover2",arg:"popover2"}],staticStyle:{zIndex:"9999, border:0",position:"absolute",right:"0",border:"0"}},[r("github-corner")],1),e._v(" "),r("el-card",{staticClass:"box-card"},[r("el-table",{staticStyle:{width:"95%"},attrs:{data:e.tableData}},[r("el-table-column",{attrs:{fixed:"",prop:"id",label:"Id",width:"50"}}),e._v(" "),r("el-table-column",{attrs:{prop:"seller",label:"Seller",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"buyer",label:"Buyer",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"tenor",label:"Tenor",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{fixed:"right",label:"Operations",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:e.handleClick}},[e._v("Resale")]),e._v(" "),r("el-button",{attrs:{type:"text",size:"small"}},[e._v("Edit")])]}}])})],1)],1)],1)},staticRenderFns:[]};var o=r("VU/8")(a,l,!1,function(e){r("k48/")},null,null);t.default=o.exports},"k48/":function(e,t,r){var a=r("n7NV");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("fcde96ec",a,!0)},n7NV:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n.box-card {\n  width: 100%;\n}\n",""])}});