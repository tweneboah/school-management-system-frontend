(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[61],{1875:function(e,c,t){"use strict";t.r(c);var s=t(733),n=t.n(s),i=t(734),r=t(716),l=t(1),a=t(38),d=t(22),o=t(721),j=t.n(o),h=t(718),b=t(14);c.default=function(){var e,c,t,s=Object(l.useState)({}),o=Object(r.a)(s,2),u=o[0],x=o[1],O=Object(l.useState)({}),v=Object(r.a)(O,2),m=v[0],f=v[1],N=Object(l.useState)({}),g=Object(r.a)(N,2),p=g[0],w=g[1],k=Object(d.i)().id,D=Object(d.g)();return Object(l.useEffect)((function(){a.a.get("/school").then((function(e){console.log(e.data),x(e.data)}))}),[]),Object(l.useEffect)((function(){a.a.get("/transactions/".concat(k)).then(function(){var e=Object(i.a)(n.a.mark((function e(c){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(c.data),e.next=3,a.a.get("/students/student/".concat(c.data.fees.userID));case 3:t=e.sent,w(t.data.student);case 5:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}())}),[k]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"border content__container mb-5",id:"section-to-print",children:[Object(b.jsxs)("div",{className:"text-center border-bottom p-3",children:[Object(b.jsx)("h2",{children:null===u||void 0===u?void 0:u.fullName}),Object(b.jsx)("p",{children:null===u||void 0===u?void 0:u.motto})]}),Object(b.jsxs)("div",{className:"row p-3",children:[Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsxs)("h6",{className:"col-4",children:[" ",Object(b.jsx)("strong",{children:"Date"})]}),Object(b.jsx)("h6",{children:Object(b.jsx)("strong",{children:j()(null===m||void 0===m?void 0:m.date).format("D MMMM YYYY")})})]}),Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsxs)("h6",{className:"col-4",children:[" ",Object(b.jsx)("strong",{children:"Name"})]}),Object(b.jsx)("h6",{children:Object(b.jsxs)("strong",{children:[null===p||void 0===p?void 0:p.name," ",null===p||void 0===p?void 0:p.middleName," ",null===p||void 0===p?void 0:p.surname," "]})})]}),Object(b.jsxs)("div",{className:"d-flex ",children:[Object(b.jsxs)("h6",{className:"col-4",children:[" ",Object(b.jsx)("strong",{children:"Class"})]}),Object(b.jsx)("h6",{children:Object(b.jsx)("strong",{children:null===p||void 0===p?void 0:p.classID})})]}),Object(b.jsxs)("div",{className:"d-flex ",children:[Object(b.jsxs)("h6",{className:"col-4",children:[" ",Object(b.jsx)("strong",{children:"UserID"})]}),Object(b.jsx)("h6",{children:Object(b.jsxs)("strong",{children:[null===(e=m.fees)||void 0===e?void 0:e.userID," "]})})]})]}),Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsxs)("div",{className:"d-flex ",children:[Object(b.jsxs)("h6",{className:"col-4",children:[" ",Object(b.jsx)("strong",{children:"Academic Year"})]}),Object(b.jsx)("h6",{children:Object(b.jsxs)("strong",{children:[(null===m||void 0===m||null===(c=m.fees)||void 0===c?void 0:c.academicYear)||"-"," "]})})]}),Object(b.jsxs)("div",{className:"d-flex ",children:[Object(b.jsxs)("h6",{className:"col-4",children:[" ",Object(b.jsx)("strong",{children:"Term"})]}),Object(b.jsx)("h6",{children:Object(b.jsxs)("strong",{children:[(null===m||void 0===m||null===(t=m.fees)||void 0===t?void 0:t.term)||"-"," "]})})]}),Object(b.jsxs)("div",{className:"d-flex ",children:[Object(b.jsxs)("h6",{className:"col-4",children:[" ",Object(b.jsx)("strong",{children:"Amount Paid"})]}),Object(b.jsx)("h6",{children:Object(b.jsxs)("strong",{children:[Object(h.b)()," ",(null===m||void 0===m?void 0:m.amount)||"-"," "]})})]})]})]})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(b.jsx)("button",{onClick:function(){window.print()},className:"btn blue__btn",children:"Print Receipt"}),Object(b.jsx)("button",{onClick:function(){a.a.delete("/transactions/delete/".concat(k)).then((function(e){if(e.data.error)return Object(h.c)(e.data.error),0;D.goBack()}))},className:" ml-5 btn btn-danger",children:"Cancel Payment"})]})]})}},733:function(e,c,t){e.exports=t(419)},734:function(e,c,t){"use strict";function s(e,c,t,s,n,i,r){try{var l=e[i](r),a=l.value}catch(d){return void t(d)}l.done?c(a):Promise.resolve(a).then(s,n)}function n(e){return function(){var c=this,t=arguments;return new Promise((function(n,i){var r=e.apply(c,t);function l(e){s(r,n,i,l,a,"next",e)}function a(e){s(r,n,i,l,a,"throw",e)}l(void 0)}))}}t.d(c,"a",(function(){return n}))}}]);
//# sourceMappingURL=61.d61c7b6b.chunk.js.map