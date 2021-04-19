(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[54],{1874:function(e,t,a){"use strict";a.r(t);var n=a(77),c=a(716),i=a(1),l=a(749),r=a(135),s=a(38),d=a(718),o=a(14),j=[{id:"date",name:"Date"},{id:"category",name:"Category"},{id:"type",name:"Type"},{id:"description",name:"Description"},{id:"amount",name:"Amount (".concat(Object(d.b)(),")")},{id:"paymentMethod",name:"Payment Type"}];t.default=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),a=t[0],b=t[1];return Object(i.useEffect)((function(){s.a.get("/transactions").then((function(e){var t=e.data.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{description:Object(d.i)(e.description,50)})}));b(t)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"",children:"Transactions"}),Object(o.jsxs)("div",{className:"float-right mb-4",children:[Object(o.jsx)(r.b,{className:"btn blue__btn mr-4",to:"/finance/transactions/income",children:"Record An Income"}),Object(o.jsx)(r.b,{className:"btn btn-danger",to:"/finance/transactions/expenditure",children:"Make a Payment"})]}),Object(o.jsx)("div",{className:"mt-5",children:Object(o.jsx)(l.a,{handleEdit:function(e){},handleDelete:function(e){s.a.delete("/transactions/delete/".concat(e)).then((function(t){t.data.error&&Object(d.c)(t.data.error),b(a.filter((function(t){return t._id!==e})))}))},isEdit:!0,data:a,tableHeader:j})})]})}},725:function(e,t,a){"use strict";var n=a(712),c=a(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(a(1)),l=(0,n(a(714)).default)(i.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=l},733:function(e,t,a){"use strict";a(1);var n=a(560),c=a(189),i=a(1808),l=a(730),r=a.n(l),s=a(732),d=a.n(s),o=a(731),j=a.n(o),b=a(729),u=a.n(b),h=a(14),v=Object(n.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));t.a=function(e){var t=v(),a=Object(c.a)(),n=e.count,l=e.page,s=e.rowsPerPage,o=e.onChangePage;return Object(h.jsxs)("div",{className:t.root,children:[Object(h.jsx)(i.a,{onClick:function(e){o(e,0)},disabled:0===l,"aria-label":"first page",children:"rtl"===a.direction?Object(h.jsx)(u.a,{}):Object(h.jsx)(r.a,{})}),Object(h.jsx)(i.a,{onClick:function(e){o(e,l-1)},disabled:0===l,"aria-label":"previous page",children:"rtl"===a.direction?Object(h.jsx)(j.a,{}):Object(h.jsx)(d.a,{})}),Object(h.jsx)(i.a,{onClick:function(e){o(e,l+1)},disabled:l>=Math.ceil(n/s)-1,"aria-label":"next page",children:"rtl"===a.direction?Object(h.jsx)(d.a,{}):Object(h.jsx)(j.a,{})}),Object(h.jsx)(i.a,{onClick:function(e){o(e,Math.max(0,Math.ceil(n/s)-1))},disabled:l>=Math.ceil(n/s)-1,"aria-label":"last page",children:"rtl"===a.direction?Object(h.jsx)(r.a,{}):Object(h.jsx)(u.a,{})})]})}},734:function(e,t,a){"use strict";var n=a(712),c=a(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(a(1)),l=(0,n(a(714)).default)(i.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.default=l},739:function(e,t,a){"use strict";var n=a(712),c=a(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(a(1)),l=(0,n(a(714)).default)(i.createElement("path",{d:"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"}),"Toc");t.default=l},749:function(e,t,a){"use strict";a.d(t,"a",(function(){return z}));var n=a(716),c=a(1),i=a.n(c),l=a(560),r=a(1064),s=a(1065),d=a(1060),o=a(1062),j=a(1063),b=a(792),u=a(1915),h=a(1061),v=a(942),O=a(1808),x=a(725),m=a.n(x),f=a(734),p=a.n(f),g=a(733),M=a(722),P=a.n(M),y=a(915),w=a(739),C=a.n(w),N=a(14),_=Object(l.a)({table:{width:"100%"}});function z(e){var t,a=e.data,c=e.tableHeader,l=e.handleEdit,x=e.handleDelete,f=e.loading,M=e.isCanteen,w=e.isEdit,z=e.isItems,k=e.noActions,E=e.noData,D=_(),H=i.a.useState(0),S=Object(n.a)(H,2),A=S[0],I=S[1],V=i.a.useState(5),T=Object(n.a)(V,2),Y=T[0],L=T[1],R=Y-Math.min(Y,(null===a||void 0===a?void 0:a.length)-A*Y);return Object(N.jsx)(j.a,{component:v.a,children:Object(N.jsxs)(r.a,{className:D.table,"aria-label":"custom pagination table",children:[Object(N.jsx)(d.a,{children:Object(N.jsxs)(h.a,{children:[c&&(null===c||void 0===c?void 0:c.map((function(e){return Object(N.jsx)(o.a,{children:e.name},e.id)}))),!k&&Object(N.jsx)(o.a,{children:"Actions"})]})}),f?Object(N.jsx)(s.a,{className:"text-center my-5 w-100",children:Object(N.jsx)(h.a,{children:Object(N.jsx)(o.a,{colSpan:c.lenght,children:Object(N.jsx)("span",{className:"spinner-grow spinner-grow-sm",role:"status"})})})}):Object(N.jsxs)(s.a,{children:[(null===a||void 0===a?void 0:a.length)<=0?Object(N.jsx)(h.a,{children:Object(N.jsx)(o.a,{colSpan:c.length+1,className:"text-center text-danger",children:E||"No data"})}):Object(N.jsx)(N.Fragment,{children:null===(t=Y>0?null===a||void 0===a?void 0:a.slice(A*Y,A*Y+Y):a)||void 0===t?void 0:t.map((function(e){return Object(N.jsxs)(h.a,{children:[c&&(null===c||void 0===c?void 0:c.map((function(t){var a,n;return Object(N.jsx)(o.a,{align:"left",children:(n=e[null===t||void 0===t?void 0:t.id],new RegExp("^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$").test(n)?null===(a=P()(e[null===t||void 0===t?void 0:t.id]))||void 0===a?void 0:a.format("D MMMM YYYY"):e[null===t||void 0===t?void 0:t.id]||"-")},null===t||void 0===t?void 0:t.id)}))),!k&&Object(N.jsx)(o.a,{align:"left",children:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)(y.a,{title:z?"Manage Inventory":"delete",children:Object(N.jsx)(O.a,{onClick:function(){return x(M?e.memberID:e._id)},children:z?Object(N.jsx)(C.a,{}):Object(N.jsx)(p.a,{})})}),!w&&Object(N.jsx)(y.a,{title:"edit",children:Object(N.jsx)(O.a,{onClick:function(){return l(M?e.memberID:e._id)},children:Object(N.jsx)(m.a,{})})})]})})]},e._id)}))}),R>0&&Object(N.jsx)(h.a,{style:{height:53},children:Object(N.jsx)(o.a,{colSpan:6})})]}),Object(N.jsx)(b.a,{children:Object(N.jsx)(h.a,{children:(null===a||void 0===a?void 0:a.length)>5&&Object(N.jsx)(u.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],count:null===a||void 0===a?void 0:a.length,rowsPerPage:Y,page:A,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){I(t)},onChangeRowsPerPage:function(e){L(parseInt(e.target.value,10)),I(0)},ActionsComponent:g.a})})})]})})}}}]);
//# sourceMappingURL=54.a57b29c3.chunk.js.map