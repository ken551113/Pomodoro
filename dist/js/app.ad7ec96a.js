(function(t){function e(e){for(var o,n,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)n=r[u],i[n]&&f.push(i[n][0]),i[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),t=n(n.s=s[0]))}return t}var o={},i={app:0},a=[];function n(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=o,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Pomodoro/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0265":function(t,e,s){},"03bf":function(t,e,s){"use strict";var o=s("c4e6"),i=s.n(o);i.a},"1fe6":function(t,e,s){},"22a5":function(t,e,s){"use strict";var o=s("2b8b"),i=s.n(o);i.a},"2b8b":function(t,e,s){},4678:function(t,e,s){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=a(t);return s(e)}function a(t){var e=o[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}i.keys=function(){return Object.keys(o)},i.resolve=a,t.exports=i,i.id="4678"},"49cd":function(t,e,s){"use strict";var o=s("0265"),i=s.n(o);i.a},5262:function(t,e,s){"use strict";var o=s("1fe6"),i=s.n(o);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var o=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)},a=[],n=(s("5c0b"),s("2877")),r={},c=Object(n["a"])(r,i,a,!1,null,null,null),l=c.exports,d=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main",class:"work"===this.$store.state.mode?"":"break"},[s("div",{staticClass:"left"},[s("NewTodo"),t.todoNow?s("div",{staticClass:"todo-now"},[s("input",{staticClass:"checkbox",attrs:{type:"checkbox",id:t.todoNow.id},domProps:{checked:t.todoNow.finish},on:{change:function(e){return t.changeStatus(t.todoNow,e)}}}),s("label",{attrs:{for:t.todoNow.id}}),s("span",{staticClass:"content"},[t._v(t._s(t.todoNow.title))])]):t._e(),s("div",{staticClass:"Time-Counter"},[t._v(t._s(t.displayTime))]),s("ul",{staticClass:"todo-list"},[t._l(t.otherTodo,function(e){return s("li",{key:e.id,staticClass:"todo"},[s("input",{staticClass:"checkbox",attrs:{type:"checkbox",name:"",id:e.id},domProps:{checked:e.finish},on:{change:function(s){return t.changeStatus(e,s)}}}),s("label",{attrs:{for:e.id}}),s("span",{staticClass:"content"},[t._v(t._s(e.title))]),s("i",{staticClass:"material-icons doItNow",on:{click:function(s){return t.doItNow(e)}}},[t._v("play_circle_outline")])])}),s("router-link",{staticClass:"todo-list-more",attrs:{to:"/tools/"}},[t._v("more")])],2)],1),s("div",{staticClass:"right"},[s("div",{staticClass:"bgc-r"}),s("div",{staticClass:"bgc-l"}),s("div",{staticClass:"controller"},["work"===this.$store.state.mode?s("percent-bar",{key:"222",staticClass:"timer",attrs:{value:t.calcPercent,options:{radius:268,circleWidth:20,pathColors:["","#ff4384"]}}}):s("percent-bar",{key:"123",staticClass:"timer ffff",attrs:{value:t.calcPercent,options:{radius:268,circleWidth:20,pathColors:["","#00a7ff"]}}}),s("div",{staticClass:"inner-circle",class:null!==this.$store.state.timer?"playing":""},[s("i",{staticClass:"material-icons play-button",class:null!==this.$store.state.timer?"playing":"",on:{click:t.startCounter}},[t._v(t._s(null===this.$store.state.timer?"play_circle_filled":"pause_circle_filled"))]),s("div",{staticClass:"stop-button",class:null!==this.$store.state.timer?"playing":"",on:{click:t.resetTimer}})])],1)]),s("div",{staticClass:"nav"},[s("div",{staticClass:"nav-list"},[s("router-link",{staticClass:"nav-button",attrs:{to:"/tools/"}},[s("i",{staticClass:"material-icons"},[t._v("list")])]),s("router-link",{staticClass:"nav-button",attrs:{to:"/tools/analytics"}},[s("i",{staticClass:"material-icons"},[t._v("assessment")])]),s("router-link",{staticClass:"nav-button",attrs:{to:"/tools/ringtones"}},[s("i",{staticClass:"material-icons"},[t._v("library_music")])]),s("div",{staticClass:"logo"},[t._v("POMODORO")])],1)])])},f=[],h=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"newTodo"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.todo,expression:"todo"}],attrs:{type:"text",name:"",id:"",placeholder:"ADD A NEW MISSION…"},domProps:{value:t.todo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.AddTodo(e)},input:function(e){e.target.composing||(t.todo=e.target.value)}}}),s("a",{on:{click:t.AddTodo}},[t._v("+")])])},b=[],p={name:"NewTodo",data:function(){return{todo:""}},methods:{AddTodo:function(){if(this.todo){var t=Date.now(),e=Math.floor(t/1e3);this.$store.commit("AddTodo",{title:this.todo,id:e,finish:!1}),this.todo=""}}}},v=p,j=(s("b104"),Object(n["a"])(v,m,b,!1,null,"52a9db32",null)),g=j.exports,k=s("2f62");function w(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,o)}return s}function y(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?w(s,!0).forEach(function(e){Object(h["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):w(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var C={components:{NewTodo:g},data:function(){return{}},computed:y({calcPercent:function(){var t="work"===this.$store.state.mode?1500:300,e=100-this.$store.state.modeTime[this.$store.state.mode]/t*100;if(100===e){this.playAudio(),this.$store.commit("stopCountDown"),this.$store.commit("resetModeTime"),this.$store.commit("changeMode");var s=this.$store.getters.todoNow,o=this.$store.state.todolist.indexOf(s);this.$store.commit("changeStatus",{index:o,checked:!0})}return e},percentOption:function(){var t="work"===this.$store.state.mode?"#ff4384":"#00a7ff";return{radius:266,circleWidth:30,pathColors:["",t]}}},Object(k["b"])(["displayTime","todoNow","otherTodo"])),methods:{changeStatus:function(t,e){var s=this.$store.state.todolist.indexOf(t),o=e.target.checked;this.$store.commit("changeStatus",{index:s,checked:o})},doItNow:function(t){this.$store.commit("changeTodoNow",t)},startCounter:function(){null===this.$store.state.timer?this.$store.commit("startCountDown"):this.$store.commit("stopCountDown")},resetTimer:function(){this.$store.commit("stopCountDown"),this.$store.commit("resetModeTime")},playAudio:function(){var t=this.$store.state.ring[this.$store.state.mode];"none"===t?(this.audio&&this.audio.pause(),this.audio=null):(this.audio&&this.audio.pause(),this.audio=new Audio("".concat("/Pomodoro/dist/","Ringtones/").concat(t,".mp3")),this.audio.play())}}},_=C,O=(s("7861"),Object(n["a"])(_,u,f,!1,null,"4e2071d4",null)),$=O.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tools",class:"work"===this.$store.state.mode?"":"break"},[s("div",{staticClass:"left"},[s("div",{staticClass:"tools-nav"},[s("router-link",{staticClass:"active",attrs:{to:"/tools/"}},[s("i",{staticClass:"nav-button material-icons"},[t._v("list")]),t._v("\n        TO-DO LIST\n      ")]),s("router-link",{attrs:{to:"/tools/analytics"}},[s("i",{staticClass:"nav-button material-icons"},[t._v("assessment")]),t._v("\n        ANALYTICS\n      ")]),s("router-link",{attrs:{to:"/tools/ringtones"}},[s("i",{staticClass:"nav-button material-icons"},[t._v("library_music")]),t._v("\n        RINGTONES\n      ")])],1),s("div",{staticClass:"clock"},[s("div",{staticClass:"button"},["work"===this.$store.state.mode?s("percent-bar",{key:"2314",staticClass:"timer",attrs:{value:t.calcPercent,options:{radius:54,circleWidth:10,pathColors:["","#ff4384"]}}}):s("percent-bar",{key:"12123",staticClass:"timer",attrs:{value:t.calcPercent,options:{radius:54,circleWidth:10,pathColors:["","#00a7ff"]}}}),s("i",{staticClass:"material-icons play-btn",on:{click:t.startCounter}},[t._v(t._s(null===this.$store.state.timer?"play_circle_filled":"pause_circle_filled"))])],1),s("div",{staticClass:"display-time"},[t._v(t._s(t.displayTime))]),s("div",{staticClass:"todo-now"},[t._v(t._s(t.todoNow.title))])])]),s("div",{staticClass:"right"},[s("router-link",{staticClass:"back-btn",attrs:{to:"/"}},[s("i",{staticClass:"material-icons"},[t._v("close")])]),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)])},x=[];function N(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,o)}return s}function P(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?N(s,!0).forEach(function(e){Object(h["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):N(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var S={data:function(){return{}},methods:{startCounter:function(){null===this.$store.state.timer?this.$store.commit("startCountDown"):this.$store.commit("stopCountDown")}},computed:P({calcPercent:function(){var t="work"===this.$store.state.mode?1500:300,e=100-this.$store.state.modeTime[this.$store.state.mode]/t*100;if(100===e){this.$store.commit("stopCountDown"),this.$store.commit("resetModeTime"),this.$store.commit("changeMode");var s=this.$store.getters.todoNow,o=this.$store.state.todolist.indexOf(s);this.$store.commit("changeStatus",{index:o,checked:!0})}return e}},Object(k["b"])(["displayTime","todoNow","otherTodo"]))},D=S,R=(s("22a5"),Object(n["a"])(D,T,x,!1,null,"1470008e",null)),z=R.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todolist-panel"},[s("NewTodo"),s("todolist",{attrs:{title:"TO-DO"}}),s("todolist",{attrs:{title:"DONE"}})],1)},A=[],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todo-list-block"},[s("div",{staticClass:"title-bar"},[t._v("\n    "+t._s(t.title)+"\n    "),s("i",{staticClass:"material-icons title-bar-arrow",class:t.closed?"close":"",on:{click:t.toggleLsit}},[t._v("arrow_drop_down")])]),s("ul",{staticClass:"todo-list",class:t.closed?"close":""},t._l(t.todolist,function(e){return s("li",{key:e.id,staticClass:"todo"},[s("input",{staticClass:"checkbox",attrs:{type:"checkbox",name:"",id:e.id},domProps:{checked:e.finish},on:{change:function(s){return t.changeStatus(s,e)}}}),s("label",{attrs:{for:e.id}}),s("span",{staticClass:"content",class:e.finish?"done":""},[t._v(t._s(e.title))]),s("i",{staticClass:"material-icons doItNow",on:{click:function(s){return t.doItNow(e)}}},[t._v("play_circle_outline")])])}),0)])},M=[],L={props:["title"],data:function(){return{closed:!1}},methods:{toggleLsit:function(){this.closed=!this.closed},changeStatus:function(t,e){var s=this.$store.state.todolist.indexOf(e),o=t.target.checked;this.$store.commit("changeStatus",{index:s,checked:o})},doItNow:function(t){this.$store.commit("changeTodoNow",t)}},computed:{todolist:function(){var t=this,e=this.$store.state.todolist;return e.filter(function(e){return e.finish===("DONE"===t.title)})}}},W=L,F=(s("f10b"),Object(n["a"])(W,I,M,!1,null,"75611e1e",null)),V=F.exports,G={components:{NewTodo:g,todolist:V}},U=G,q=(s("03bf"),Object(n["a"])(U,E,A,!1,null,"4d124c4e",null)),B=q.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"analytics"},[t._m(0),s("div",{staticClass:"chart"},[s("div",{staticClass:"title-bar"},[t._v("CHART")]),s("div",{staticClass:"small"},[s("line-chart",{attrs:{height:250,"chart-data":t.datacollection}})],1)])])},Y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fcous-time"},[s("div",{staticClass:"title-bar"},[t._v("FOCUS TIME")]),s("div",{staticClass:"today-tomato"},[s("div",{staticClass:"title"},[t._v("TODAY")]),s("div",{staticClass:"count"},[t._v("20")]),s("div",{staticClass:"unit"},[t._v("/TOMATO")])]),s("div",{staticClass:"week-tomato"},[s("div",{staticClass:"title"},[t._v("WEEK")]),s("div",{staticClass:"count"},[t._v("108")]),s("div",{staticClass:"unit"},[t._v("/TOMATO")])])])}],H=s("1fca"),K=H["b"].reactiveProp;Chart.defaults.global.defaultFontColor="white",Chart.defaults.global.defaultFontSize=16,Chart.defaults.global.tooltips=!1;var Z,Q,X={extends:H["a"],mixins:[K],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{gridLines:{color:"white",display:!1},ticks:{beginAtZero:!0,stepSize:4}}],xAxes:[{barPercentage:.6,gridLines:{color:"white",display:!1}}]}}}},mounted:function(){this.renderChart(this.chartData,this.options)}},tt=X,et=Object(n["a"])(tt,Z,Q,!1,null,null,null),st=et.exports,ot={components:{LineChart:st},data:function(){return{datacollection:null}},mounted:function(){this.fillData()},methods:{fillData:function(){this.datacollection={labels:["7/1","7/2","7/3","7/4","7/5","7/6","7/7"],datasets:[{label:"Tomatos",data:["16","12","16","8","12","4","20","24"],backgroundColor:["white","white","white","white","white","white","#FF4384"]}]}}}},it=ot,at=(s("5262"),Object(n["a"])(it,J,Y,!1,null,"3c54055a",null)),nt=at.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ringtones"},[s("RingtoneRadioList",{attrs:{title:"work",rings:t.ringOptions,currentSelect:t.workRing},on:{changeSelect:t.changeWorkRing}}),s("RingtoneRadioList",{attrs:{title:"break",rings:t.ringOptions,currentSelect:t.breakRing},on:{changeSelect:t.changeBreakRing}})],1)},ct=[],lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"RingtoneRadioList"},[s("div",{staticClass:"title-bar"},[t._v(t._s(t.title))]),t._l(t.rings,function(e,o){return s("label",{key:o,staticClass:"container"},[t._v("\n    "+t._s(e.value)+"\n    "),s("input",{attrs:{type:"radio",id:t.title+"_"+e.value,name:t.title+"_"+e.value},domProps:{checked:e.value===t.currentSelect,value:e.value},on:{change:t.playAudio}}),s("span",{staticClass:"checkmark"})])})],2)},dt=[],ut={name:"RingtoneRadioList",props:{title:"",rings:null,currentSelect:""},data:function(){return{ringValue:null,audio:null}},methods:{playAudio:function(t){this.ringValue=t.target.value,"none"===this.ringValue?(this.audio&&this.audio.pause(),this.audio=null):(this.audio&&this.audio.pause(),this.audio=new Audio("".concat("/Pomodoro/dist/","Ringtones/").concat(this.ringValue,".mp3")),this.audio.play()),this.$emit("changeSelect",this.ringValue)}}},ft=ut,ht=(s("49cd"),Object(n["a"])(ft,lt,dt,!1,null,"c62b18ea",null)),mt=ht.exports,bt={data:function(){return{ringOptions:[{value:"none"},{value:"default"},{value:"alarm"},{value:"alert"},{value:"beep"},{value:"bell"},{value:"bird"},{value:"bugle"},{value:"digital"},{value:"drop"},{value:"horn"},{value:"music"},{value:"ring"},{value:"warning"},{value:"whistle"}]}},components:{RingtoneRadioList:mt},methods:{changeWorkRing:function(t){this.$store.commit("changeRing",{mode:"work",ring:t})},changeBreakRing:function(t){this.$store.commit("changeRing",{mode:"break",ring:t})}},computed:{workRing:function(){return this.$store.state.ring.work},breakRing:function(){return this.$store.state.ring.break}}},pt=bt,vt=Object(n["a"])(pt,rt,ct,!1,null,"6a195044",null),jt=vt.exports;o["a"].use(d["a"]);var gt=new d["a"]({routes:[{path:"/",name:"home",component:$},{path:"/tools",name:"tools",component:z,children:[{path:"",component:B},{path:"analytics",component:nt},{path:"ringtones",component:jt}]}]});o["a"].use(k["a"]);var kt=new k["a"].Store({state:{mode:"break",timer:null,modeTime:{work:1500,break:10},audio:null,ring:{work:"none",break:"none"},todoNowID:111,todolist:[{id:111,title:"the first thing to do today",finish:!1},{id:123,title:"the second thing to do today",finish:!1},{id:234,title:"the third thing to do today",finish:!1},{id:222,title:"the forth thing to do today",finish:!1},{id:455,title:"the fix thing to do today",finish:!1},{id:3415,title:"the six thing to do today",finish:!1}]},mutations:{AddTodo:function(t,e){t.todolist.push(e)},changeStatus:function(t,e){var s=e.index,o=e.checked;t.todolist[s].finish=o},startCountDown:function(t){t.timer=setInterval(function(){return t.modeTime[t.mode]--},1e3)},stopCountDown:function(t){clearInterval(t.timer),t.timer=null},changeTodoNow:function(t,e){t.todoNowID=e.id,clearInterval(t.timer),t.timer=null,t.modeTime.work=1500,t.modeTime.break=300,t.mode="work"},resetModeTime:function(t){t.modeTime.work=1500,t.modeTime.break=300},changeMode:function(t){var e="work"===t.mode?"break":"work";t.mode=e},changeRing:function(t,e){var s=e.mode,o=e.ring;t.ring[s]=o}},getters:{displayTime:function(t){var e="work"===t.mode?t.modeTime.work:t.modeTime.break,s=Math.floor(e/60),o=e%60;return"".concat(s<10?0:"").concat(s,":").concat(o<10?0:"").concat(o)},todoNow:function(t){var e=t.todolist.filter(function(e){return e.id===t.todoNowID});return e[0]},otherTodo:function(t){var e=t.todolist.filter(function(e){return e.id!==t.todoNowID&&!0!==e.finish});return e=e.slice(0,4),e}}}),wt=s("fa34"),yt=s.n(wt);o["a"].use(yt.a,{componentName:"percent-bar"}),o["a"].config.productionTip=!1,new o["a"]({router:gt,store:kt,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var o=s("5e27"),i=s.n(o);i.a},"5e27":function(t,e,s){},7861:function(t,e,s){"use strict";var o=s("fc21"),i=s.n(o);i.a},b104:function(t,e,s){"use strict";var o=s("db47"),i=s.n(o);i.a},c4e6:function(t,e,s){},db47:function(t,e,s){},f10b:function(t,e,s){"use strict";var o=s("f28a"),i=s.n(o);i.a},f28a:function(t,e,s){},fc21:function(t,e,s){}});
//# sourceMappingURL=app.ad7ec96a.js.map