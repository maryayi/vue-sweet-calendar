(function(t){function e(e){for(var r,o,s=e[0],u=e[1],l=e[2],d=0,f=[];d<s.length;d++)o=s[d],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cfb":function(t,e,n){},"1d47":function(t,e,n){},"476c":function(t,e,n){"use strict";var r=n("1d47"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("vue-sweet-calendar")]),n("button",{attrs:{id:"todayButton"},on:{click:function(e){return t.goToday()}}},[t._v("Today")]),n("Calendar",{ref:"calendar",attrs:{eventCategories:t.eventCategories,events:t.events,msg:"Welcome to Your Vue.js App"}})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sweetCalendar"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("div",{staticClass:"left-arrow",on:{click:t.prevMonth}},[n("span",[t._v("<")])]),n("div",{staticClass:"month"},[t._v(t._s(t.selectedMonthName)+" "+t._s(t.selectedYear))]),n("div",{staticClass:"right-arrow",on:{click:t.nextMonth}},[n("span",[t._v(">")])])]),n("div",{staticClass:"body"},[t._l(t.weekdays,function(e,r){return n("div",{key:"day-name-"+(r+1),staticClass:"day-name",attrs:{title:e}},[t._v("\n        "+t._s(e[0])+"\n      ")])}),t._l(t.days,function(e,r){return n("div",{key:r,staticClass:"day-container"},[e?n("div",{staticClass:"before",style:t.generateBeforeStyle(e)},[t._v(" ")]):t._e(),e?n("div",{class:["day","day-"+e.getDate()+",\n          weekday-"+e.getDay(),t.offDays.includes(e.getDay())?"off-day":null,e.toDateString()===t.today.toDateString()?"today":null],style:t.generateDayStyle(e)},[n("span",[t._v(t._s(e.getDate()))])]):t._e(),e?n("div",{staticClass:"after",style:t.generateAfterStyle(e)},[t._v(" ")]):t._e()])})],2)])])},s=[],u=(n("c5f6"),n("5176")),l=n.n(u),c=(n("7514"),n("14b9"),n("5d73")),d=n.n(c),f=(n("6c7b"),n("9a04")),h=n("75fc"),y=n("d225"),g=n("b0b4"),v=function(){function t(){var e;Object(y["a"])(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];if(r.length>1){var i=r[0],o=r[1],s=r.slice(2);e=Object(f["a"])(Date,[i,o-1].concat(Object(h["a"])(s)))}else e=Object(f["a"])(Date,r);e.setHours(0,0,0,0),this._date=e}return Object(g["a"])(t,[{key:"getMonth",value:function(){return this._date.getMonth()+1}},{key:"getDay",value:function(){return this._date.getDay()+1}},{key:"getMonthName",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"long";return this._date.toLocaleString("en-US",{month:t})}},{key:"getFullYear",value:function(){return this._date.getFullYear()}},{key:"getDate",value:function(){return this._date.getDate()}},{key:"getTime",value:function(){return this._date.getTime()}},{key:"getDayName",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"long";return this._date.toLocaleString("en-US",{weekday:t})}},{key:"getNextDay",value:function(){var t=new this.constructor(this.getTime());return t.setDate(t.getDate()+1),t}},{key:"getPrevDay",value:function(){var t=new this.constructor(this.getTime());return t.setDate(t.getDate()-1),t}},{key:"setDate",value:function(t){return this._date.setDate(t),this.getTime()}},{key:"isInRange",value:function(t,e){var n,r,a,i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"never",s=new this.constructor(t),u=new this.constructor(e),l=this.getTime();switch(o){case"monthly":return n=new this.constructor(this.getFullYear(),this.getMonth(),s.getDate()).getTime(),r=new this.constructor(this.getFullYear(),this.getMonth(),u.getDate()).getTime(),a=l>=n,i=l<=r,a&&i;case"yearly":return n=new this.constructor(this.getFullYear(),s.getMonth(),s.getDate()).getTime(),r=new this.constructor(this.getFullYear(),u.getMonth(),u.getDate()).getTime(),a=l>=n,i=l<=r,a&&i;case"never":return a=l>=s.getTime(),i=l<=u.getTime(),a&&i;default:return a=l>=s.getTime(),i=l<=u.getTime(),a&&i}}},{key:"toDateString",value:function(){return this._date.toDateString()}},{key:"getNumberOfDaysInMonth",value:function(){return new this.constructor(this.getFullYear(),this.getMonth()+1,0).getDate()}},{key:"getFirstWeekdayOfMonth",value:function(){return new this.constructor(this.getFullYear(),this.getMonth(),1).getDay()}}]),t}(),p={name:"Calendar",data:function(){return{today:new v,date:null,weekdays:null}},computed:{days:function(){var t=this,e=Array((this.startWeekDayOfMonth-this.firstDayOfWeek+7)%7).fill(null),n=Array(this.numberOfDays).fill().map(function(e,n){return new v(t.selectedYear,t.selectedMonth,n+1)});return e.concat(n)},startWeekDayOfMonth:function(){return this.date.getFirstWeekdayOfMonth()},numberOfDays:function(){return this.date.getNumberOfDaysInMonth()},selectedMonth:function(){return this.date.getMonth()},selectedMonthName:function(){return this.date.getMonthName()},selectedYear:function(){return this.date.getFullYear()}},methods:{prevMonth:function(){this.date=new v(this.selectedYear,this.selectedMonth-1,1)},nextMonth:function(){this.date=new v(this.selectedYear,this.selectedMonth+1,1)},generateWeekdayNames:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=2;n<=t;n++){var r=e.shift();e.push(r)}return e},generateDayStyle:function(t){var e=this,n={},r=!0,a=!1,i=void 0;try{for(var o,s=function(){var r=o.value;if(t.isInRange(r.start,r.end,r.repeat)){var a=e.eventCategories.find(function(t){return t.id===r.categoryId})||{};l()(n,{color:a.id?a.textColor:null,backgroundColor:a.id?a.backgroundColor:null,fontWeight:a.id?"bold":"normal"})}},u=d()(this.events);!(r=(o=u.next()).done);r=!0)s()}catch(c){a=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n},generateBeforeStyle:function(t){var e=this,n={},r=!0,a=!1,i=void 0;try{for(var o,s=function(){var r=o.value;if(t.isInRange(r.start,r.end,r.repeat)&&t.getPrevDay().isInRange(r.start,r.end,r.repeat)){var a=e.eventCategories.find(function(t){return t.id===r.categoryId})||{};l()(n,{backgroundColor:a.backgroundColor})}},u=d()(this.events);!(r=(o=u.next()).done);r=!0)s()}catch(c){a=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n},generateAfterStyle:function(t){var e=this,n={},r=!0,a=!1,i=void 0;try{for(var o,s=function(){var r=o.value;if(t.isInRange(r.start,r.end,r.repeat)&&t.getNextDay().isInRange(r.start,r.end,r.repeat)){var a=e.eventCategories.find(function(t){return t.id===r.categoryId})||{};l()(n,{backgroundColor:a.backgroundColor})}},u=d()(this.events);!(r=(o=u.next()).done);r=!0)s()}catch(c){a=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n},goToday:function(){this.date=this.today}},props:{initialDate:{type:String,default:null},firstDayOfWeek:{type:Number,default:1},eventCategories:{type:Array,default:function(){return[]}},events:{type:Array,default:function(){return[]}},offDays:{type:Array,default:function(){return[1,7]}}},beforeMount:function(){this.date=Date.parse(this.initialDate)?new v(this.initialDate):new v,this.weekdays=this.generateWeekdayNames(this.firstDayOfWeek)}},m=p,b=(n("476c"),n("2877")),D=Object(b["a"])(m,o,s,!1,null,"1e42658b",null),k=D.exports,w={name:"app",components:{Calendar:k},data:function(){return{eventCategories:[{id:1,title:"Personal",textColor:"white",backgroundColor:"Blue"},{id:2,title:"Company-wide",textColor:"white",backgroundColor:"red"}],events:[{title:"test1",start:"2019-04-02",end:"2019-04-04",repeat:"never",categoryId:1},{title:"test2",start:"2019-04-08",end:"2019-04-09",repeat:"monthly",categoryId:1},{title:"test3",start:"2019-04-10",end:"2019-04-11",repeat:"yearly",categoryId:2},{title:"test4",start:"2019-04-23",end:"2019-04-23",repeat:"monthly",categoryId:2}]}},methods:{goToday:function(){this.$refs.calendar.goToday()}}},_=w,C=(n("cf25"),Object(b["a"])(_,a,i,!1,null,null,null)),M=C.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(M)}}).$mount("#app")},cf25:function(t,e,n){"use strict";var r=n("0cfb"),a=n.n(r);a.a}});
//# sourceMappingURL=app.69359104.js.map