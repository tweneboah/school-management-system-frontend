(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[101],{1881:function(e,t,n){"use strict";n.r(t);var c=n(737),i=n.n(c),a=n(80),l=n(738),s=n(719),r=n(1),o=n(38),d=n(79),u=n(32),j=n(919),h=n(14);t.default=function(){var e=Object(r.useState)({}),t=Object(s.a)(e,2),n=t[0],c=t[1],b=Object(r.useState)([]),f=Object(s.a)(b,2),m=f[0],x=f[1],O=Object(d.c)(u.b);return Object(r.useEffect)((function(){o.a.get("/school").then((function(e){c(e.data)}))}),[]),Object(r.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/students");case 2:return e.next=4,e.sent.data;case 4:t=e.sent,o.a.get("/classes").then((function(e){x(e.data.map((function(e){var n,c=t.filter((function(t){return t.classID===e.classCode})),i=c.filter((function(e){return"female"===e.gender})).length,l=c.filter((function(e){return"male"===e.gender})).length;return Object(a.a)(Object(a.a)({},e),{},{female:i,male:l,total:c.length,unspecified:c.length-(l+i),campus:null===(n=O.find((function(t){return t._id===e.campusID})))||void 0===n?void 0:n.name})})))}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[O]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"content__container",id:"section-to-print",children:[Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("h5",{children:Object(h.jsx)("strong",{children:null===n||void 0===n?void 0:n.fullName})}),Object(h.jsx)("h6",{children:null===n||void 0===n?void 0:n.motto}),Object(h.jsx)("h5",{className:"my-4",children:"ENROLLMENT STATISTICS"})]}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Class/ Group"}),Object(h.jsx)("th",{scope:"col",children:"Campus / Section"}),Object(h.jsx)("th",{scope:"col",children:"Male"}),Object(h.jsx)("th",{scope:"col",children:"Female"}),Object(h.jsx)("th",{scope:"col",children:"UnSpecified"}),Object(h.jsx)("th",{scope:"col",children:"Total"})]})}),Object(h.jsxs)("tbody",{children:[m&&m.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:null===e||void 0===e?void 0:e.name}),Object(h.jsx)("td",{children:null===e||void 0===e?void 0:e.campus}),Object(h.jsx)("td",{children:null===e||void 0===e?void 0:e.male}),Object(h.jsx)("td",{children:null===e||void 0===e?void 0:e.female}),Object(h.jsx)("td",{children:null===e||void 0===e?void 0:e.unspecified}),Object(h.jsx)("td",{children:null===e||void 0===e?void 0:e.total})]},e._id)})),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Total"}),Object(h.jsx)("td",{}),Object(h.jsx)("td",{children:m.reduce((function(e,t){return e+t.male}),0)}),Object(h.jsx)("td",{children:m.reduce((function(e,t){return e+t.female}),0)}),Object(h.jsx)("td",{children:m.reduce((function(e,t){return e+t.unspecified}),0)}),Object(h.jsx)("td",{children:m.reduce((function(e,t){return e+t.total}),0)})]})]})]})]}),Object(h.jsxs)("div",{className:"my-3 text-center",children:[Object(h.jsx)("button",{onClick:function(){window.print()},className:"btn blue__btn mr-2",children:"Print"}),Object(h.jsx)(j.a,{data:m,columns:[{id:"name",name:"Class"},{id:"campus",name:"Campus"},{id:"male",name:"Male"},{id:"female",name:"Female"},{id:"unspecified",name:"Unspecified"},{id:"total",name:"Total"}]})]})]})}},737:function(e,t,n){e.exports=n(424)},738:function(e,t,n){"use strict";function c(e,t,n,c,i,a,l){try{var s=e[a](l),r=s.value}catch(o){return void n(o)}s.done?t(r):Promise.resolve(r).then(c,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var l=e.apply(t,n);function s(e){c(l,i,a,s,r,"next",e)}function r(e){c(l,i,a,s,r,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return i}))},919:function(e,t,n){"use strict";n(1);var c=n(929),i=n.n(c),a=(n(725),n(14)),l=i.a.ExcelFile,s=i.a.ExcelFile.ExcelSheet,r=i.a.ExcelFile.ExcelColumn;t.a=function(e){var t=e.data,n=e.btn,c=e.name,i=e.columns;return Object(a.jsx)(l,{element:Object(a.jsx)("button",{className:"btn blue__btn",children:n||"Download"}),children:Object(a.jsx)(s,{data:t,name:c||"data",children:i.map((function(e){return Object(a.jsx)(r,{label:e.name,value:e.id},e.id)}))})})}},930:function(e,t){},931:function(e,t){},932:function(e,t){},933:function(e,t){},934:function(e,t){},935:function(e,t){},936:function(e,t){},937:function(e,t){},938:function(e,t){},939:function(e,t){}}]);
//# sourceMappingURL=101.3feeb7b0.chunk.js.map