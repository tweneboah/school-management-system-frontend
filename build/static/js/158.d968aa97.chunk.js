(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[158],{1919:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(32),n=c(76),l=c(733),r=c.n(l),i=c(734),o=c(716),d=c(38),u=c(718),j=c(14);var b=function(e){var t=e.classes,c=Object(s.useState)(""),a=Object(o.a)(c,2),n=a[0],l=a[1],b=Object(s.useState)(""),m=Object(o.a)(b,2),h=m[0],O=m[1],x=Object(s.useState)(""),f=Object(o.a)(x,2),v=f[0],p=f[1],g=Object(s.useState)(""),N=Object(o.a)(g,2),C=N[0],y=N[1],S=Object(s.useState)(""),w=Object(o.a)(S,2),_=w[0],D=w[1],k=Object(s.useState)(""),P=Object(o.a)(k,2),V=P[0],I=P[1];return Object(j.jsx)("div",{children:Object(j.jsx)("form",{action:"",children:Object(j.jsxs)("div",{className:"content__container mb-5",children:[Object(j.jsx)("div",{className:"col-12 ",children:Object(j.jsx)("h3",{className:"mb-4",children:"Promoting Student to another Class"})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{children:"Select Class"}),Object(j.jsxs)("select",{name:"class",value:v,onChange:function(e){p(e.target.value),y(!0),d.a.get("/students/class/".concat(e.target.value)).then((function(e){y(!1),D(e.data.users)}))},className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{defaultValue:!0,hidden:!0,children:"select"}),(null===t||void 0===t?void 0:t.length)>0?t.map((function(e){return Object(j.jsxs)("option",{value:e.classCode,children:[" ",e.name," "]},e.classCode)})):Object(j.jsx)("option",{disabled:!0,children:"No options yet"})]})]}),C&&Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)("div",{className:"spinner-border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),v&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{children:"Select Student"}),Object(j.jsxs)("select",{name:"class",value:h,onChange:function(e){return O(e.target.value)},className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{defaultValue:!0,hidden:!0,children:"select"}),(null===_||void 0===_?void 0:_.length)>0?_.map((function(e){return Object(j.jsxs)("option",{value:e.userID,children:[" ",null===e||void 0===e?void 0:e.name," ",null===e||void 0===e?void 0:e.surname]},e.userID)})):Object(j.jsx)("option",{disabled:!0,children:"No options yet"})]})]}),Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{children:"Select Move to"}),Object(j.jsxs)("select",{name:"class",value:n,onChange:function(e){return l(e.target.value)},className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{defaultValue:!0,hidden:!0,children:"select"}),(null===t||void 0===t?void 0:t.length)>0?t.map((function(e){return Object(j.jsxs)("option",{value:e.classCode,children:[" ",e.name," "]},e.classCode)})):Object(j.jsx)("option",{disabled:!0,children:"No options yet"})]})]})]}),Object(j.jsx)("div",{className:"col-xs-12 col-sm-6   mb-2 mt-4",children:Object(j.jsx)("button",{disabled:V.classes,className:"btn blue__btn mr-3",onClick:function(e){return e.preventDefault(),h?n?(I(!0),void d.a.put("/students/update/".concat(h),{classID:n}).then(function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I(!1),!t.data.error){e.next=3;break}return e.abrupt("return",Object(u.c)(t.data.error));case 3:return Object(u.m)("Changes successfully saved"),p(""),l(""),O(""),e.next=9,d.a.post("/activitylog/create",{activity:"student ".concat(h," was moved to class ").concat(n),user:"admin"});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):Object(u.c)("Please select new class"):Object(u.c)("Please select student")},children:"Save Changes"})})]})]})})})},m=c(77);var h=function(e){var t=e.classes,c=Object(s.useState)(""),a=Object(o.a)(c,2),n=a[0],l=a[1],b=Object(s.useState)(""),h=Object(o.a)(b,2),O=h[0],x=h[1],f=Object(s.useState)(""),v=Object(o.a)(f,2),p=v[0],g=v[1],N=Object(s.useState)({classes:!1}),C=Object(o.a)(N,2),y=C[0],S=C[1];return Object(j.jsx)("div",{children:Object(j.jsx)("form",{className:"content__container mb-5",children:Object(j.jsxs)("div",{className:"row mb-5 aligh-items-center",children:[Object(j.jsx)("div",{className:"col-12 ",children:Object(j.jsx)("h3",{className:"mb-4",children:"Promoting Students to the next Class"})}),Object(j.jsxs)("div",{className:"col-xs-12 col-sm-6   mb-2",children:[Object(j.jsx)("label",{children:"Current Class"}),Object(j.jsxs)("select",{name:"class",value:n,onChange:function(e){return l(e.target.value)},className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{defaultValue:!0,hidden:!0,children:"select"}),(null===t||void 0===t?void 0:t.length)>0?t.map((function(e){return Object(j.jsxs)("option",{value:e.classCode,children:[" ",e.name," "]},e.classCode)})):Object(j.jsx)("option",{disabled:!0,children:"No options yet"})]})]}),Object(j.jsxs)("div",{className:"col-xs-12 col-sm-6   mb-2",children:[Object(j.jsx)("label",{children:"Promote Class"}),Object(j.jsxs)("select",{name:"class",value:O,onChange:function(e){return x(e.target.value)},className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{defaultValue:!0,hidden:!0,children:"select"}),(null===t||void 0===t?void 0:t.length)>0?t.map((function(e){return Object(j.jsxs)("option",{value:e.classCode,children:[" ",e.name," "]},e.classCode)})):Object(j.jsx)("option",{disabled:!0,children:"No options yet"})]})]}),y.classes&&Object(j.jsx)("div",{className:"text-danger",children:" Please select all field "}),Object(j.jsxs)("div",{className:"col-xs-12 col-sm-6   mb-2 mt-4",children:[Object(j.jsx)("button",{disabled:p.classes,className:"btn blue__btn mr-3",onClick:function(e){if(e.preventDefault(),S(Object(m.a)(Object(m.a)({},y),{},{classes:!1})),""===n||""===O)return S(Object(m.a)(Object(m.a)({},y),{},{classes:!0})),0;g(!0),d.a.post("/students/upgrade/class",{currentclass:n,nextclass:O}).then(function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(!1),!t.data.error){e.next=4;break}return Object(u.c)(t.data.error),e.abrupt("return",0);case 4:return Object(u.m)("Changes are successfully done"),e.next=7,d.a.post("/activitylog/create",{activity:"students in class ".concat(n," were moved to class ").concat(O),user:"admin"});case 7:l(""),x("");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),g(!1),Object(u.c)("something went wrong")}))},children:"Save Changes"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault(),l(""),x(""),S(Object(m.a)(Object(m.a)({},y),{},{classes:!1}))},children:"Cancel"})]})]})})})};var O=function(e){var t=e.dormitories,c=Object(s.useState)(""),a=Object(o.a)(c,2),n=a[0],l=a[1],b=Object(s.useState)(""),h=Object(o.a)(b,2),O=h[0],x=h[1],f=Object(s.useState)(!1),v=Object(o.a)(f,2),p=v[0],g=v[1],N=Object(s.useState)(""),C=Object(o.a)(N,2),y=C[0],S=C[1],w=t.find((function(e){return e._id===n})),_=t.find((function(e){return e._id===O}));return Object(j.jsx)("form",{action:"",className:"content__container mb-5",children:Object(j.jsxs)("div",{className:"row mb-5 aligh-items-center",children:[Object(j.jsx)("div",{className:"col-12 ",children:Object(j.jsx)("h3",{className:"mb-4",children:"Promoting Students to another Dormitories"})}),Object(j.jsxs)("div",{className:"col-xs-12 col-sm-6 ",children:[Object(j.jsx)("label",{children:"Current Dormitory"}),Object(j.jsxs)("select",{name:"dormitories",value:n,onChange:function(e){return l(e.target.value)},className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{defaultValue:!0,hidden:!0,children:"select"}),t.length>0?t.map((function(e){return Object(j.jsx)("option",{value:e._id,children:e.name},e._id)})):Object(j.jsx)("option",{disabled:!0,children:"No options yet"})]})]}),Object(j.jsxs)("div",{className:"col-xs-12 col-sm-6 ",children:[Object(j.jsx)("label",{children:"Promote Dormitory"}),Object(j.jsxs)("select",{name:"nextdormitory",value:O,onChange:function(e){return x(e.target.value)},className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{defaultValue:!0,hidden:!0,children:"select"}),t.length>0?t.map((function(e){return Object(j.jsx)("option",{value:e._id,children:e.name},e._id)})):Object(j.jsx)("option",{disabled:!0,children:"No options yet"})]})]}),y.dormitories&&Object(j.jsx)("div",{className:"text-danger",children:" Please select all field "}),Object(j.jsxs)("div",{className:"col-xs-12 col-sm-6   mb-2 mt-4",children:[Object(j.jsx)("button",{disabled:p.dormitories,className:"btn blue__btn mr-3",onClick:function(e){if(e.preventDefault(),S(!1),""===n||""===O)return S(Object(m.a)(Object(m.a)({},y),{},{dormitories:!0})),0;g(!0),d.a.post("/students//upgrade/dormitories",{currentdormitories:n,nextdormitories:O}).then(function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(!1),!t.data.error){e.next=4;break}return Object(u.c)(t.data.error),e.abrupt("return",0);case 4:return Object(u.m)("Changes are successfully done"),l(""),x(""),e.next=9,d.a.post("/activitylog/create",{activity:"dormitory ".concat(w.name," were moved to dormitory ").concat(_),user:"admin"});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),g(!1),Object(u.c)("something went wrong")}))},children:"Save Changes"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault(),l(""),x(""),S(Object(m.a)(Object(m.a)({},y),{},{dormitories:!1}))},children:"Cancel"})]})]})})};var x=function(e){var t=e.campuses,c=Object(s.useState)(""),a=Object(o.a)(c,2),n=a[0],l=a[1],b=Object(s.useState)(""),h=Object(o.a)(b,2),O=h[0],x=h[1],f=Object(s.useState)(!1),v=Object(o.a)(f,2),p=v[0],g=v[1],N=Object(s.useState)(!1),C=Object(o.a)(N,2),y=C[0],S=C[1];return Object(j.jsx)("form",{className:"content__container mb-5",children:Object(j.jsxs)("div",{className:"row mb-5 aligh-items-center",children:[Object(j.jsx)("div",{className:"col-12 ",children:Object(j.jsx)("h3",{className:"mb-4",children:"Promoting Students to another Campus"})}),Object(j.jsxs)("div",{className:"col-xs-12 col-sm-6 ",children:[Object(j.jsx)("label",{children:"Current Campus"}),Object(j.jsxs)("select",{name:"campus",value:n,onChange:function(e){return l(e.target.value)},className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{defaultValue:!0,hidden:!0,children:"select"}),t.length>0?t.map((function(e){return Object(j.jsx)("option",{value:e._id,children:e.name},e._id)})):Object(j.jsx)("option",{disabled:!0,children:"No options yet"})]})]}),Object(j.jsxs)("div",{className:"col-xs-12 col-sm-6 ",children:[Object(j.jsx)("label",{children:"Promote Campus"}),Object(j.jsxs)("select",{name:"nextcampus",value:O,onChange:function(e){return x(e.target.value)},className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{defaultValue:!0,hidden:!0,children:"select"}),t.length>0?t.map((function(e){return Object(j.jsx)("option",{value:e._id,children:e.name},e._id)})):Object(j.jsx)("option",{disabled:!0,children:"No options yet"})]})]}),y.campuses&&Object(j.jsx)("div",{className:"text-danger",children:" Please select all field "}),Object(j.jsxs)("div",{className:"col-xs-12 col-sm-6   mb-2 mt-4",children:[Object(j.jsx)("button",{disabled:p.campuses,className:"btn blue__btn mr-3",onClick:function(e){if(e.preventDefault(),S(!1),""===n||""===O)return S(Object(m.a)(Object(m.a)({},y),{},{campuses:!0})),0;g(!0),d.a.post("/students/upgrade/campus",{currentcampus:n,nextcampus:O}).then(function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(!1),!t.data.error){e.next=4;break}return Object(u.c)(t.data.error),e.abrupt("return",0);case 4:return Object(u.m)("Changes are successfully done"),l(""),x(""),e.next=9,d.a.post("/activitylog/create",{activity:"students in campus ".concat(n," were moved to campus ").concat(O),user:"admin"});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),g(!1),Object(u.c)("something went wrong")}))},children:"Save Changes"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault(),l(""),x(""),S(!1)},children:"Cancel"})]})]})})};var f=function(e){var t=e.classes,c=Object(s.useState)(""),a=Object(o.a)(c,2),n=a[0],l=a[1],b=Object(s.useState)(""),h=Object(o.a)(b,2),O=h[0],x=h[1],f=Object(s.useState)({classes:!1}),v=Object(o.a)(f,2),p=v[0],g=v[1];return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"content__container mb-5",children:[Object(j.jsxs)("div",{className:"row mb-3 aligh-items-center",children:[Object(j.jsx)("div",{className:"col-12 ",children:Object(j.jsx)("h3",{className:"mb-4",children:"Graduate Students"})}),Object(j.jsxs)("div",{className:"col-xs-12 col-sm-6   mb-2",children:[Object(j.jsx)("label",{children:"Select Class"}),Object(j.jsxs)("select",{name:"class",value:n,onChange:function(e){return l(e.target.value)},className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{defaultValue:!0,hidden:!0,children:"select"}),(null===t||void 0===t?void 0:t.length)>0?t.map((function(e){return Object(j.jsxs)("option",{value:e.classCode,children:[" ",e.name," "]},e.classCode)})):Object(j.jsx)("option",{disabled:!0,children:"No options yet"})]})]}),p.classes&&Object(j.jsx)("div",{className:"text-danger",children:" Please select all field "})]}),Object(j.jsxs)("div",{className:"col-xs-12 col-sm-6   mb-2 mt-4",children:[Object(j.jsx)("button",{disabled:O.classes,className:"btn blue__btn mr-3",onClick:function(e){if(e.preventDefault(),g(Object(m.a)(Object(m.a)({},p),{},{classes:!1})),""===n)return g(Object(m.a)(Object(m.a)({},p),{},{classes:!0})),0;x(!0),d.a.post("/students/upgrade/graduate",{currentclass:n}).then(function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x(!1),!t.data.error){e.next=4;break}return Object(u.c)(t.data.error),e.abrupt("return",0);case 4:return Object(u.m)("Changes are successfully done"),e.next=7,d.a.post("/activitylog/create",{activity:"students in class ".concat(n," was graduated"),user:"admin"});case 7:l("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),x(!1),Object(u.c)("something went wrong")}))},children:"Submit"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault(),l(""),g(Object(m.a)(Object(m.a)({},p),{},{classes:!1}))},children:"Cancel"})]})]})})};t.default=function(){var e=Object(n.c)(a.c),t=Object(n.c)(a.g),c=Object(n.c)(a.b);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"mb-5",children:"Students Promotions"}),Object(j.jsx)(f,{classes:e}),Object(j.jsx)(b,{classes:e}),Object(j.jsx)(h,{classes:e}),Object(j.jsx)(x,{campuses:c}),Object(j.jsx)(O,{dormitories:t})]})}},733:function(e,t,c){e.exports=c(419)},734:function(e,t,c){"use strict";function s(e,t,c,s,a,n,l){try{var r=e[n](l),i=r.value}catch(o){return void c(o)}r.done?t(i):Promise.resolve(i).then(s,a)}function a(e){return function(){var t=this,c=arguments;return new Promise((function(a,n){var l=e.apply(t,c);function r(e){s(l,a,n,r,i,"next",e)}function i(e){s(l,a,n,r,i,"throw",e)}r(void 0)}))}}c.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=158.d968aa97.chunk.js.map