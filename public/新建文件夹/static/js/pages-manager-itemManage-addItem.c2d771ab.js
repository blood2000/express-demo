(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manager-itemManage-addItem"],{"15dc":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,"[data-v-2729ad70] .uni-dialog-button-group{border:none}",""]),e.exports=t},"1f79":function(e,t,a){"use strict";var n=a("4ea4");a("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("5530")),i=n(a("3ff4")),d=n(a("8d9f")),r=(d.default.BASE_URL,"/api"),u=d.default.defaultHeaders,l={getListByDict:function(e,t){(0,i.default)({url:r+"/system/dict/data/listByDict",method:"POST",data:e,headers:(0,o.default)({"Content-Type":"application/json"},u)},t)},getUserInfo:function(e,t,a,n){var d="";d=""===t?r+"/kydsz/home/detail":r+"/kydsz/home/detail?projectCode="+t,(0,i.default)({url:d,headers:(0,o.default)((0,o.default)({},u),e)},a,n)},getProjectList:function(e,t,a){(0,i.default)({url:r+"/kydsz/home/getProjectList?userType="+t,headers:(0,o.default)((0,o.default)({},u),e)},a)},updateDefault:function(e,t,a,n){var d="";d=3!==a?r+"/kydsz/machineProject/updateDefault":r+"/kydsz/memberManagement/updateDefault",console.log(d),(0,i.default)({url:d,method:"PUT",data:t,headers:(0,o.default)((0,o.default)({},u),e),title:"正在设置...",jumpUrl:"../../login/login"},n)},getMachineList:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;(0,i.default)({url:r+"/kydsz/machineWork/getMachineWorkingList",method:"POST",data:a,headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:t},n)},getMachineWorkingByCode:function(e,t,a){(0,i.default)({url:r+"/kydsz/machineWork/getMachineWorkingByCode/"+e,headers:(0,o.default)((0,o.default)({},u),t)},a)},addMachineWorking:function(e,t,a){(0,i.default)({url:r+"/kydsz/machineWork/addMachineWorking",method:"POST",data:t,headers:(0,o.default)((0,o.default)({},u),e),title:"申请中..."},a)},updateMachineWorking:function(e,t){(0,i.default)({url:r+"/kydsz/machineWork/updateMachineWorking",method:"PUT",data:e,headers:(0,o.default)({"Content-Type":"application/json"},u),jumpUrl:"../../login/login"},t)},deleteMachineWorking:function(e,t,a){(0,i.default)({url:r+"/kydsz/machineWork/delMachineWorking/"+t,method:"DELETE",headers:(0,o.default)((0,o.default)({},u),e),title:"正在操作...",jumpUrl:"../../login/login"},a)},checkMachineWorking:function(e,t,a){(0,i.default)({url:r+"/kydsz/machineWork/auditMachineWorking/"+t,method:"PUT",headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:"../../login/login"},a)},driverUpdateMachineWorking:function(e,t,a){(0,i.default)({url:r+"/kydsz/machineWork/driverUpdateMachineWorking",method:"PUT",headers:(0,o.default)((0,o.default)({},u),e),data:t,jumpUrl:"../../login/login"},a)},getProjectTicketList:function(e,t,a){(0,i.default)({url:r+"/kydsz/projectTicket/getProjectTicketList",method:"POST",headers:(0,o.default)((0,o.default)({},u),e),data:t,jumpUrl:"../../login/login"},a)},getProjectTicketByCode:function(e,t,a){(0,i.default)({url:r+"/kydsz/projectTicket/getProjectTicketByCode/"+t,headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:"../../login/login"},a)},delProjectTicket:function(e,t,a){(0,i.default)({url:r+"/kydsz/projectTicket/delProjectTicket/"+t,method:"DELETE",headers:(0,o.default)((0,o.default)({},u),e),title:"正在删除...",jumpUrl:"../../login/login"},a)},addProjectTicket:function(e,t,a){(0,i.default)({url:r+"/kydsz/projectTicket/addProjectTicket",method:"POST",headers:(0,o.default)((0,o.default)({},u),e),title:"正在添加...",jumpUrl:"../../login/login",data:t},a)},updateProjectTicket:function(e,t,a){(0,i.default)({url:r+"/kydsz/projectTicket/updateProjectTicket",method:"PUT",headers:(0,o.default)((0,o.default)({},u),e),data:t,title:"正在修改...",jumpUrl:"../../login/login"},a)},getItemManageList:function(e,t){(0,i.default)({url:r+"/kydsz/machineProject/getMachineProjectList",headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:"../../login/login"},t)},addItem:function(e,t,a){(0,i.default)({url:r+"/kydsz/machineProject/addMachineProject",method:"POST",headers:(0,o.default)((0,o.default)({},u),e),data:t,title:"正在添加...",jumpUrl:"../../login/login"},a)},updateItem:function(e,t,a){(0,i.default)({url:r+"/kydsz/machineProject/updateMachineProject",method:"PUT",headers:(0,o.default)((0,o.default)({},u),e),data:t,title:"正在操作...",jumpUrl:"../../login/login"},a)},getItemByCode:function(e,t,a){(0,i.default)({url:r+"/kydsz/machineProject/getMachineProject/"+t,headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:"../../login/login"},a)},getProjectMemberList:function(e,t,a){(0,i.default)({url:r+"/kydsz/projectMember/getProjectMemberList?projectCode="+t,headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:"../../login/login"},a)},addProjectMember:function(e,t,a){(0,i.default)({url:r+"/kydsz/projectMember/addProjectMember",method:"POST",headers:(0,o.default)((0,o.default)({},u),e),data:t,title:"正在添加...",jumpUrl:"../../login/login"},a)},deleteProjectMember:function(e,t,a){(0,i.default)({url:r+"/kydsz/projectMember/delProjectMember/"+t,method:"DELETE",headers:(0,o.default)((0,o.default)({},u),e),title:"正在删除...",jumpUrl:"../../login/login"},a)},searchUserList:function(e,t,a,n){(0,i.default)({url:r+"/kydsz/projectMember/getSysUserList?phone="+t+"&projectCode="+a,method:"GET",headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:"../../login/login"},n)},getOrgSysUserList:function(e,t,a){(0,i.default)({url:r+"/kydsz/projectMember/getOrgSysUserList",method:"POST",data:t,headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:"../../login/login"},a)},addProjectMemberList:function(e,t,a){(0,i.default)({url:r+"/kydsz/projectMember/addProjectMemberList",method:"POST",data:t,headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:"../../login/login"},a)},updateMemberType:function(e,t,a){(0,i.default)({url:r+"/kydsz/projectMember/updateMemberType",method:"POST",data:t,headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:"../../login/login"},a)},getWorkerList:function(e,t,a){var n="";n=t.phone?"".concat(r,"/kydsz/memberManagement/getMachineWorkingHoursMemberList?projectCode=").concat(t.projectCode,"&phone=").concat(t.phone):"".concat(r,"/kydsz/memberManagement/getMachineWorkingHoursMemberList?projectCode=").concat(t.projectCode),(0,i.default)({url:n,headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:"../../login/login"},a)},deleteWorker:function(e,t,a){(0,i.default)({url:r+"/kydsz/memberManagement/delMachineWorkingHoursMember/"+t,method:"DELETE",headers:(0,o.default)((0,o.default)({},u),e),title:"正在删除...",jumpUrl:"../../login/login"},a)},getInviteList:function(e,t,a){var n="";n=t.phone?"".concat(r,"/kydsz/orgOutsiders/getOrgOutsidersList?projectCode=").concat(t.projectCode,"&phone=").concat(t.phone):"".concat(r,"/kydsz/orgOutsiders/getOrgOutsidersList?projectCode=").concat(t.projectCode),(0,i.default)({url:n,headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:"../../login/login"},a)},addMachineWorkingHoursMember:function(e,t,a){(0,i.default)({url:r+"/kydsz/memberManagement/addMachineWorkingHoursMember",method:"POST",data:t,headers:(0,o.default)((0,o.default)({},u),e),jumpUrl:"../../login/login"},a)},getNewVersion:function(e,t){(0,i.default)({url:r+"/system/application/info",title:"检查更新...",headers:(0,o.default)((0,o.default)({},u),e)},t)},logout:function(e,t){(0,i.default)({url:r+"/auth/logout",method:"DELETE",headers:(0,o.default)((0,o.default)({},u),e)},t)},getAttendanceList:function(e,t,a){(0,i.default)({url:r+"/kydsz/employeeAttendance/getEmployeeAttendanceList",method:"POST",data:t,headers:(0,o.default)((0,o.default)({},u),e)},a)},addEmployeeAttendance:function(e,t,a){(0,i.default)({url:r+"/kydsz/employeeAttendance/addEmployeeAttendance",method:"POST",data:t,headers:(0,o.default)((0,o.default)({},u),e)},a)},updateEmployeeAttendance:function(e,t,a){(0,i.default)({url:r+"/kydsz/employeeAttendance/updateEmployeeAttendance",method:"PUT",data:t,headers:(0,o.default)((0,o.default)({},u),e)},a)},getEmployeeAttendanceByCode:function(e,t,a){(0,i.default)({url:r+"/kydsz/employeeAttendance/getEmployeeAttendanceByCode/".concat(t),method:"GET",headers:(0,o.default)((0,o.default)({},u),e)},a)}};t.default=l},"36e9":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var n={uniPopup:a("7d7e").default,uniPopupMessage:a("b4ba").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("uni-popup",{ref:"popup",attrs:{type:"message"}},[a("uni-popup-message",{attrs:{type:e.msgType,message:e.msg,duration:2e3}})],1)},i=[]},"3a76":function(e,t,a){"use strict";a.r(t);var n=a("3ff5"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},"3ff4":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("5530")),i=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=uni.getStorageSync("token");if(n){var i={Authorization:n,"Content-Type":"application/x-www-form-urlencoded"};uni.showLoading({title:e.title||"加载中..."}),uni.request({url:e.url,method:e.method||"GET",data:e.data||{},header:(0,o.default)((0,o.default)({},i),e.headers),success:function(a){401===a.data.code?uni.reLaunch({url:e.jumpUrl||"../login/login"}):500===a.data.code&&uni.showModal({title:"提示",content:a.data.msg,showCancel:!1}),t(a)},fail:function(e){"function"===typeof a?a(res):console.log("error=>",e)},complete:function(){uni.hideLoading()}})}else uni.reLaunch({url:e.jumpUrl||"../login/login"})},d=i;t.default=d},"3ff5":function(e,t,a){"use strict";var n=a("4ea4");a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("474d")),i={name:"uniPopupMessage",mixins:[o.default],props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3},maskShow:{type:Boolean,default:!1}},data:function(){return{}},created:function(){this.popup.maskShow=this.maskShow,this.popup.messageChild=this},methods:{timerClose:function(){var e=this;0!==this.duration&&(clearTimeout(this.timer),this.timer=setTimeout((function(){e.popup.close()}),this.duration))}}};t.default=i},"40d4":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content"},[a("showToast",{ref:"toast"}),a("v-uni-view",{staticClass:"item-box2"},[a("v-uni-view",{staticClass:"item-line"},[a("v-uni-view",{staticClass:"title1"},[e._v("项目名称"),a("span",[e._v("*")])]),a("v-uni-input",{staticClass:"my-input",attrs:{placeholder:"请输入",type:"text",value:e.itemInfo.projectName},model:{value:e.itemInfo.projectName,callback:function(t){e.$set(e.itemInfo,"projectName",t)},expression:"itemInfo.projectName"}})],1),a("v-uni-view",{staticClass:"item-line no-border"},[a("v-uni-view",{staticClass:"title1"},[e._v("合作单位")]),a("v-uni-input",{staticClass:"my-input",attrs:{placeholder:"请输入",type:"text",value:e.itemInfo.earthworkUnit},model:{value:e.itemInfo.earthworkUnit,callback:function(t){e.$set(e.itemInfo,"earthworkUnit",t)},expression:"itemInfo.earthworkUnit"}})],1)],1),a("v-uni-view",{staticClass:"item-box2"},[a("v-uni-view",{staticClass:"item-line no-border"},[a("v-uni-view",{staticClass:"title1"},[e._v("项目地址"),a("span",[e._v("*")])]),a("v-uni-input",{staticClass:"my-input",attrs:{placeholder:"请输入",type:"text",value:e.itemInfo.detail},model:{value:e.itemInfo.detail,callback:function(t){e.$set(e.itemInfo,"detail",t)},expression:"itemInfo.detail"}})],1)],1),a("v-uni-view",{staticClass:"btn-box"},[a("v-uni-view",{staticClass:"submit-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)},i=[]},5752:function(e,t,a){"use strict";var n=a("d0ee"),o=a.n(n);o.a},"7b56":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{msgType:"warn",msg:""}},onLoad:function(){},methods:{show:function(e){this.msgType=e.type||"success",this.msg=e.content,this.$refs.popup.open("top")}}};t.default=n},"8aaa":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("5530")),i=a("2f62"),d=n(a("c49e")),r=n(a("1f79")),u={data:function(){return{itemInfo:{longitude:"119.358265",latitude:"26.045794",district:"马尾区",earthworkUnit:"",detail:"",projectName:"",province:"福建省",provinceCode:"123",city:"福州市",districtCode:"123",cityCode:" 123"}}},computed:(0,o.default)({},(0,i.mapState)(["userMsg","projectMsg"])),components:{showToast:d.default},onLoad:function(){},methods:{submit:function(){if(""!==this.itemInfo.projectName)if(""!==this.itemInfo.detail){var e=this;r.default.addItem({"Content-Type":"application/json"},e.itemInfo,(function(e){console.log("添加项目管理: ",e),200===e.data.code?uni.showModal({title:"提示",content:"添加成功",showCancel:!1,success:function(e){e.confirm&&uni.navigateBack({delta:1})}}):401!==e.data.code&&uni.showModal({title:"提示",content:"添加失败",showCancel:!1})}))}else uni.showToast({title:"请输入项目地址",icon:"none",duration:1500});else uni.showToast({title:"请输入项目名称",icon:"none",duration:1500})}}};t.default=u},a15c:function(e,t,a){"use strict";var n=a("ecd1"),o=a.n(n);o.a},aba5:function(e,t,a){"use strict";a.r(t);var n=a("7b56"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},ae9c:function(e,t,a){var n=a("15dc");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("4f06").default;o("0940c011",n,!0,{sourceMap:!1,shadowMode:!1})},b473:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".content[data-v-2502e25a]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?20?% %?20?%;height:100%;overflow-y:auto}.item-box2[data-v-2502e25a]{padding:%?10?% %?20?%}.item-line uni-view[data-v-2502e25a]{-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}.item-line span[data-v-2502e25a]{color:red}.picker-btn[data-v-2502e25a]{min-width:%?120?%;text-align:right}.no-border[data-v-2502e25a]{border-bottom:none}.my-input[data-v-2502e25a]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;padding-left:%?20?%;text-align:right;font-size:%?28?%}.textarea-box[data-v-2502e25a]{padding:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.title1[data-v-2502e25a]{font-size:%?32?%;color:#333;font-weight:700}[data-v-2502e25a] .uni-date-x{padding-right:0}[data-v-2502e25a] .uni-date__input{text-align:right}[data-v-2502e25a] uni-image>div,\nuni-image>img[data-v-2502e25a]{display:none}",""]),e.exports=t},b4ba:function(e,t,a){"use strict";a.r(t);var n=a("bc11"),o=a("3a76");for(var i in o)"default"!==i&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("5752");var d,r=a("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"7b02fcde",null,!1,n["a"],d);t["default"]=u.exports},b524:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-message[data-v-7b02fcde]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-popup-message__box[data-v-7b02fcde]{background-color:#e1f3d8;padding:10px 15px;border-color:#eee;border-style:solid;border-width:1px;-webkit-box-flex:1;-webkit-flex:1;flex:1}@media screen and (min-width:500px){.fixforpc-width[data-v-7b02fcde]{margin-top:20px;border-radius:4px;-webkit-box-flex:0;-webkit-flex:none;flex:none;min-width:380px;max-width:50%}}.uni-popup-message-text[data-v-7b02fcde]{font-size:14px;padding:0}.uni-popup__success[data-v-7b02fcde]{background-color:#e1f3d8}.uni-popup__success-text[data-v-7b02fcde]{color:#67c23a}.uni-popup__warn[data-v-7b02fcde]{background-color:#faecd8}.uni-popup__warn-text[data-v-7b02fcde]{color:#e6a23c}.uni-popup__error[data-v-7b02fcde]{background-color:#fde2e2}.uni-popup__error-text[data-v-7b02fcde]{color:#f56c6c}.uni-popup__info[data-v-7b02fcde]{background-color:#f2f6fc}.uni-popup__info-text[data-v-7b02fcde]{color:#909399}',""]),e.exports=t},bc11:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-popup-message"},[a("v-uni-view",{staticClass:"uni-popup-message__box fixforpc-width",class:"uni-popup__"+e.type},[e._t("default",[a("v-uni-text",{staticClass:"uni-popup-message-text",class:"uni-popup__"+e.type+"-text"},[e._v(e._s(e.message))])])],2)],1)},i=[]},c49e:function(e,t,a){"use strict";a.r(t);var n=a("36e9"),o=a("aba5");for(var i in o)"default"!==i&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("fdf3");var d,r=a("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"2729ad70",null,!1,n["a"],d);t["default"]=u.exports},d0ee:function(e,t,a){var n=a("b524");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("4f06").default;o("18433e58",n,!0,{sourceMap:!1,shadowMode:!1})},e739:function(e,t,a){"use strict";a.r(t);var n=a("8aaa"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},ecd1:function(e,t,a){var n=a("b473");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("4f06").default;o("b06e893c",n,!0,{sourceMap:!1,shadowMode:!1})},f89b:function(e,t,a){"use strict";a.r(t);var n=a("40d4"),o=a("e739");for(var i in o)"default"!==i&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("a15c");var d,r=a("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"2502e25a",null,!1,n["a"],d);t["default"]=u.exports},fdf3:function(e,t,a){"use strict";var n=a("ae9c"),o=a.n(n);o.a}}]);