(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0da2":function(e,t,n){var o=n("24fb"),i=n("1de5"),a=n("491b"),s=n("3f73");t=o(!1);var r=i(a),u=i(s);t.push([e.i,".content[data-v-80407064]{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.prop[data-v-80407064]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?40?%;width:80%;height:100px;background:#333;position:fixed;top:30%;left:10%;color:#fff;font-size:%?24?%;z-index:200;word-break:break-word}.main[data-v-80407064]{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;padding:%?46?% %?70?% 0;top:%?450?%;left:0;width:100%;height:%?1082?%;background:#fff;border-radius:%?50?% %?50?% %?30?% %?30?%}.title1[data-v-80407064]{color:#333;font-size:%?48?%;font-weight:700}.title2[data-v-80407064]{color:#aaa;font-size:%?28?%}.login-type[data-v-80407064]{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?24?% 0 %?8?%;font-size:%?28?%;color:#333}.pwd[data-v-80407064]{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:%?20?%;right:0;width:%?60?%;height:%?60?%;z-index:100;background:url("+r+") no-repeat 50%;background-size:%?40?% %?40?%}.show-pwd[data-v-80407064]{background:url("+u+") no-repeat 50%;background-size:%?40?% %?40?%}.title[data-v-80407064]{font-size:%?36?%;color:#8f8f94}",""]),e.exports=t},"15dc":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,"[data-v-2729ad70] .uni-dialog-button-group{border:none}",""]),e.exports=t},"1f92":function(e,t,n){"use strict";n.r(t);var o=n("3572"),i=n("f690");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("59a2");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"80407064",null,!1,o["a"],s);t["default"]=u.exports},3572:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("showToast",{ref:"toast"}),n("v-uni-view",{staticClass:"login-header"},[n("v-uni-view",{staticClass:"header-right"},[n("v-uni-view",{staticClass:"header-title1"},[e._v("您好")]),n("v-uni-view",{staticClass:"header-title2"},[e._v("欢迎使用凯意达项目工地助手")])],1)],1),n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"input-area"},[n("v-uni-view",{staticClass:"login-input-box"},[n("v-uni-input",{staticClass:"login-input icon-tel",attrs:{placeholder:"请输入手机号",type:"text",value:e.telno},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.getTelno.apply(void 0,arguments)}}})],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.loginType,expression:"loginType === 1"}],staticClass:"login-input-box"},[n("v-uni-view",{staticClass:"pwd",class:e.pwdShow?"show-pwd":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPwd.apply(void 0,arguments)}}}),n("v-uni-input",{staticClass:"login-input icon-pwd",attrs:{placeholder:"请输入密码",type:e.pwdType,value:e.password},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.getPwd.apply(void 0,arguments)}}})],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===e.loginType,expression:"loginType === 0"}],staticClass:"login-input-box"},[n("v-uni-view",{staticClass:"verCode",class:e.sendVerCode?"":"no-send",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getVerCode.apply(void 0,arguments)}}},[e._v(e._s(e.verCodeText))]),n("v-uni-input",{staticClass:"login-input icon-ver",attrs:{placeholder:"请输入验证码",type:"text",value:e.verCode},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputVerCode.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"login-type"},[n("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.loginMethod.apply(void 0,arguments)}}},[e._v(e._s(e.loginTypeName))])],1),n("v-uni-view",{staticClass:"login-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v("立即登录")]),n("v-uni-view",{staticClass:"jump-box"},[n("v-uni-view"),n("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register.apply(void 0,arguments)}}},[e._v("注册账号")])],1)],1)],1)},a=[]},3670:function(e,t,n){var o=n("0da2");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("c013bfbe",o,!0,{sourceMap:!1,shadowMode:!1})},"36e9":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={uniPopup:n("7d7e").default,uniPopupMessage:n("b4ba").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("uni-popup",{ref:"popup",attrs:{type:"message"}},[n("uni-popup-message",{attrs:{type:e.msgType,message:e.msg,duration:2e3}})],1)},a=[]},"3a76":function(e,t,n){"use strict";n.r(t);var o=n("3ff5"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},"3f73":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEKklEQVRoQ+1YXWgcVRT+zk12EbZIrPFBUbT6oFRE8Bd88OdBEQQfiu2DaEqQmgcFXZw5M6xYx1I3zuy28YcgLWpMREWrFdQWRNCihSK4qA+Koug+CAWNIpqfEpM5csNO2ayzs3d2u1kCOzBZyJzzne875/6dS9jgD21w/ugL6HUF+xXoV6DDDPSHUIcJ7Ni9X4FisXje4ODgzSJyhVLqcgBbROQcANGrs/wngD9qvz8A+ElEqkqpim3bv3RShrYqoElnMpltIrINwB0dEDgF4LBS6l3Lsg63g5NKwMTExPlLS0tjRLQLwAXtBEzw+VpEprPZ7Kv5fP4vU2wjAZOTk5vm5uaslMT/FpHV4UFEWwCcbUiqqoUsLi7u9TxvuZVPSwG+7+8koscAXJUA9oWIvKcJ196fC4WCHvOnn2KxeC4RXarF6FcpdbeI3JSAeSIMw6dd1z2SJKKpAM/zNuVyuSkRuacJwLcAjiilpi3L+q5VpuK+l8vlrSsrKzuI6D4AlzXB2MfMVjP8WAG+71+olPpQRK6OcZwJw/AN13U/aod0M58gCLYDeAjALTE2x5j5tjjf/wkYHx+/dWBg4NNGYxFZICKXmV84k8TrsTzPU7lcbo+IPB4T45+FhYXNjfNijYAE8p8ppVzbtk+YkPd931NKXSMi1wJYIqLPReQ4Mx808Q+C4E4i0kKub7CfXV5e3looFH6P/n9aQKlUulFEjgLYXO8kIvuHhobcsbGxfw2D66HVbG+oMPN1Jjh65Zufn98DIF9vT0TfiMh2Zv5xdYXTf2q7qZ7taxQTkW/btmsSUNsEQfAlAJ31pOcQM+9Igbk/RsTx4eHh20dHR0+tCvB9/y0iagSdZOaHUwR6EMABE3sRGXEc5zUT21pipgGMNNg/x8yPku/7zxCR0/DxFWZ+wDSAtiuVSjMicn/kIyJPhWF4LJPJ/FZbKp+sw0tVhampqbNmZ2ffEZG76jkppUYoCAK9W15S9+FNZr43DflaltbgKKWujPaHmMXhV2a+KE2Mcrl8cRiGbwO4oc6vEidghpl3pgHvqYC4ISQizzqOs2b2txLUsyGUMImfYOa9rYhH34Mg6M0kTlpGAexi5pdSiOjNMlpbRWI3MiJ6xLbt51OIWP+NLCLX7CgB4JBSardlWd+bCOnJUaKVCBE5SUS70wwpE7H1Nh0f5iKwpOM0EU2HYfi64zgfpyWYZH/GjtNRkFYNjYh8BeD9bDZ7IJ/Pn2xHTNcamnoyJi0lEX0QhuEnAKpEVM1kMtXGxryNlvIoEe2zbVvjNn1a9sTas82mXt8s6AadUjb1FRF50XGcl02qaiQgAurytUoFwEHTpifilEpA5LRhL7biSrohrxZNxuZ62bQ1hNaLnEmcvgCTLHXTpl+BbmbXBLtfAZMsddOmX4FuZtcE+z8rPU4lfGDUfwAAAABJRU5ErkJggg=="},"3ff5":function(e,t,n){"use strict";var o=n("4ea4");n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("474d")),a={name:"uniPopupMessage",mixins:[i.default],props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3},maskShow:{type:Boolean,default:!1}},data:function(){return{}},created:function(){this.popup.maskShow=this.maskShow,this.popup.messageChild=this},methods:{timerClose:function(){var e=this;0!==this.duration&&(clearTimeout(this.timer),this.timer=setTimeout((function(){e.popup.close()}),this.duration))}}};t.default=a},"491b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADzElEQVRoQ+1WTWhcVRg9980MShBDXdiVLqRVErJQWn+xWFEEUSFSGu2qVsVZqIGJM/fOKOgECcn77mRiZ+XgDwWxCxWxCxGaCl0K9Q9axFIrutGFiFMXGkneO3JllDTOZF7eeyEE3tsMDPec7zvnfPd7T2GbP2qb949MwFYnmCWQJZDQgWyEEhqYGJ4lkNjChARZAgkNTAzfdgm0Wq2rJycnf/9X+WUCZmdn9yulfq1Wq2cTW7MJBCLyHoBRz/MmyuXyN67EZQK6B+4Mw3CsWq1e2oQeYlO63kg+lMvl9pfL5TM9E3B/ishnAG4vFAo7SqVSJ3bFFIEi0gbwTBAE99ZqtdOrqXveARH5E8CVAG7RWn+dYi8bprLWzpE0JA8YYz5cS9D3Eltrz5O8keSjxpiPNlw5BUB3pA+SnDbG1HtRrruFRGQRwP0kS8aY11LoKRLFzMzMzkKh8DGAPSSrxhi/H3DgGhWRtwA8CeBYEATTtVrth0hdxDwkIvsAnACwA8CE1vr99agGCnBg3/frSqlXALjmp7XWx2L2ty7MWvsUyTcBnFZKnSM5Ojw8/EixWPwjdgLW2iMk31ZK+SR3AngCwPEwDOfSel8410keVko5Af/Mu+/7NymlFkm2jTEzsQTMz8/fF4ah27+faq0numv2EIAagOsBzGmt5+Km4fv+uFLqMIBx53p3RP9bkyKiATzved7d5XL5xw1dYhHZDcC9+QKt9d7V4Gazec3KysrTAB4DMAzgVBiGJ6rV6ieDxDSbzV1BENzjHAfg5t2NyxuVSuX4Wmy9Xh8aGho6CeBLrfVkZAGtVuuKpaUl1/y+IAj21mq17/s11mg0RsMwdJf8BQC/APhCKdUh6V6C7vcvh/U87zaSYwCu63L9z/FeNay1j5McD4LgxV599L3EInJQKfVbpVI5NchVEbkZwFckH/A8b8RdPpIjSqkRAFcBuKCUOkNyMQiCk/l8/mgYhgVjjBvHRE+kLTSogu/7RwEcMsZcO+hsd6u9pJQ6orXeFeV84jU6qIi19hLJd7TWzw06210EBwB8oLVObGBigoWFhRuWl5cvkrzVGPN5FAHW2jGSZ/P5/O6pqanvomBirdEoxCLyKsli1PFxnO12u9DpdL4F8LIx5t0odTZTwMMkHzTGPLuRRkTEfetc7Lceo3IlHqGohdaeE5EmgLu01nfE5XC4LRNgrS2SfD3pRd4yAY1GY08ul/upVCr9vC0TSNL0auyWJZAJ6DqQJZDWKMTlyRKI61xauCyBtJyMy5MlENe5tHBZAmk5GZfnb/UPhUDeotSJAAAAAElFTkSuQmCC"},5752:function(e,t,n){"use strict";var o=n("d0ee"),i=n.n(o);i.a},"59a2":function(e,t,n){"use strict";var o=n("3670"),i=n.n(o);i.a},"7b56":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{msgType:"warn",msg:""}},onLoad:function(){},methods:{show:function(e){this.msgType=e.type||"success",this.msg=e.content,this.$refs.popup.open("top")}}};t.default=o},aba5:function(e,t,n){"use strict";n.r(t);var o=n("7b56"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},ae9c:function(e,t,n){var o=n("15dc");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("0940c011",o,!0,{sourceMap:!1,shadowMode:!1})},b4ba:function(e,t,n){"use strict";n.r(t);var o=n("bc11"),i=n("3a76");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("5752");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"7b02fcde",null,!1,o["a"],s);t["default"]=u.exports},b524:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-message[data-v-7b02fcde]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-popup-message__box[data-v-7b02fcde]{background-color:#e1f3d8;padding:10px 15px;border-color:#eee;border-style:solid;border-width:1px;-webkit-box-flex:1;-webkit-flex:1;flex:1}@media screen and (min-width:500px){.fixforpc-width[data-v-7b02fcde]{margin-top:20px;border-radius:4px;-webkit-box-flex:0;-webkit-flex:none;flex:none;min-width:380px;max-width:50%}}.uni-popup-message-text[data-v-7b02fcde]{font-size:14px;padding:0}.uni-popup__success[data-v-7b02fcde]{background-color:#e1f3d8}.uni-popup__success-text[data-v-7b02fcde]{color:#67c23a}.uni-popup__warn[data-v-7b02fcde]{background-color:#faecd8}.uni-popup__warn-text[data-v-7b02fcde]{color:#e6a23c}.uni-popup__error[data-v-7b02fcde]{background-color:#fde2e2}.uni-popup__error-text[data-v-7b02fcde]{color:#f56c6c}.uni-popup__info[data-v-7b02fcde]{background-color:#f2f6fc}.uni-popup__info-text[data-v-7b02fcde]{color:#909399}',""]),e.exports=t},bc11:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-popup-message"},[n("v-uni-view",{staticClass:"uni-popup-message__box fixforpc-width",class:"uni-popup__"+e.type},[e._t("default",[n("v-uni-text",{staticClass:"uni-popup-message-text",class:"uni-popup__"+e.type+"-text"},[e._v(e._s(e.message))])])],2)],1)},a=[]},c49e:function(e,t,n){"use strict";n.r(t);var o=n("36e9"),i=n("aba5");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("fdf3");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"2729ad70",null,!1,o["a"],s);t["default"]=u.exports},d0ee:function(e,t,n){var o=n("b524");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("18433e58",o,!0,{sourceMap:!1,shadowMode:!1})},f690:function(e,t,n){"use strict";n.r(t);var o=n("f844"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},f844:function(e,t,n){"use strict";var o=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("5530")),a=o(n("c49e")),s=o(n("8d9f")),r=(n("2f62"),{data:function(){return{title:"login",loginType:1,loginTypeName:"短信登录",pwdShow:!1,pwdType:"password",msgType:"warn",msg:"",telno:"",password:"",verCode:"",sysMsg:"1",showProp:!1,verCodeText:"获取验证码",verCodeSecond:60,countdownSeconds:60,sendVerCode:!0,countdownTimer:null}},computed:{passwordForShow:function(){if(this.pwdShow)return this.password;for(var e="",t=0;t<this.password.length;t++)e+="*";return e}},components:{showToast:a.default},onLoad:function(){},onShow:function(){var e=this;console.log("login show"),e.telno||(e.telno=uni.getStorageSync("telno"))},methods:{getTelno:function(e){this.telno=e.detail.value},getPwd:function(e){this.password=e.detail.value},inputVerCode:function(e){this.verCode=e.detail.value},loginMethod:function(){0===this.loginType?(this.loginType=1,this.loginTypeName="短信登录"):1===this.loginType&&(this.loginType=0,this.loginTypeName="账号密码登录")},forgetPwd:function(){uni.navigateTo({url:"./forgetPwd?isReset=0"})},showPwd:function(){this.pwdShow=!this.pwdShow,this.pwdShow?this.pwdType="text":this.pwdType="password"},verifyTel:function(){var e=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;return e.test(this.telno)},getVerCode:function(){var e=this;if(this.sendVerCode)if(""!==this.telno){var t=this.verifyTel();if(t){uni.showLoading({title:"正在发送..."});var n=s.default.BASE_URL,o=n;uni.request({url:o+"/auth/send_sms",method:"POST",data:{telno:this.telno,type:"login"},header:(0,i.default)({"Content-Type":"application/json"},s.default.defaultHeaders),success:function(t){console.log(t),200===t.data.code?(e.countdown(),uni.showToast({title:"验证码已发送",duration:1500})):uni.showToast({title:t.data.msg,icon:"none",duration:1e3})},complete:function(){uni.hideLoading()}})}else uni.showToast({title:"请输入正确手机号",icon:"none",duration:1500})}else uni.showToast({title:"请输入手机号",icon:"none",duration:1500})},countdown:function(){var e=this;this.sendVerCode=!1;var t=this;this.countdownTimer=setInterval((function(){e.verCodeSecond--,e.verCodeText="再次发送(".concat(e.verCodeSecond,")")}),1e3),setTimeout((function(){e.sendVerCode=!0,e.verCodeSecond=e.countdownSeconds,e.verCodeText="获取验证码",clearInterval(t.countdownTimer),console.log(e.countdownTimer)}),1e3*t.countdownSeconds)},login:function(){var e=this;this.$store.commit("changeLoginState",1);var t=s.default.BASE_URL,n=t;if(console.log(n,t),""!==this.telno){var o=this.verifyTel();if(o){if(0===this.loginType){if(""===this.verCode)return void uni.showToast({title:"请输入验证码",icon:"none",duration:1500});var a={telno:this.telno,captcha:this.verCode};uni.showLoading({title:"登录中..."}),uni.request({url:n+"/auth/sms_login",method:"POST",data:a,header:(0,i.default)({"Content-Type":"application/json"},s.default.defaultHeaders),success:function(t){if(console.log(t),200===t.data.code){var n=t.data.data.access_token;uni.setStorageSync("isFresh",!0),uni.setStorageSync("telno",e.telno),uni.setStorage({key:"token",data:n,success:function(){console.log("缓存成功"),uni.switchTab({url:"../index/index"})}})}else uni.showModal({title:"提示",content:t.data.msg,showCancel:!1})},complete:function(){uni.hideLoading()}})}else if(1===this.loginType){if(""===this.password)return void uni.showToast({title:"请输入密码",icon:"none",duration:1500});var r={telno:this.telno,password:this.password};uni.showLoading({title:"登录中..."}),uni.request({url:n+"/auth/pwd_login",method:"POST",data:r,header:(0,i.default)({"Content-Type":"application/json"},s.default.defaultHeaders),success:function(t){if(console.log("账号密码登录--\x3e",t),200===t.data.code){var n=t.data.data.access_token;uni.setStorageSync("isFresh",!0),uni.setStorageSync("telno",e.telno),uni.setStorage({key:"token",data:n,success:function(){console.log("缓存成功"),uni.switchTab({url:"../index/index"})}})}else uni.showModal({title:"提示",content:t.data.msg,showCancel:!1})},complete:function(){uni.hideLoading()}})}}else uni.showToast({title:"请输入正确手机号",icon:"none",duration:1500})}else uni.showToast({title:"请输入手机号",icon:"none",duration:1500})},register:function(){uni.navigateTo({url:"../register/register"})}}});t.default=r},fdf3:function(e,t,n){"use strict";var o=n("ae9c"),i=n.n(o);i.a}}]);