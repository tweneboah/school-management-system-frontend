(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[23],{1943:function(e,t,a){"use strict";a.r(t);var c=a(716),n=a(1),l=a.n(n),i=a(38),s=a(76),r=a(60),o=a(22),d=a(135),j=a(560),u=a(953),b=a(954),h=a(949),O=a(951),v=a(952),f=a(786),x=a(1915),p=a(950),m=a(941),g=a(1807),M=a(725),_=a.n(M),w=a(732),N=a.n(w),P=a(800),y=a(721),C=a.n(y),E=a(718),L=a(14),z=Object(j.a)({table:{width:"100%"}});function k(e){var t,a=e.data,n=e.tableHeader,i=e.handleEdit,s=e.handleDelete,r=e.loading,o=e.isEdit,d=e.user,j=e.noActions,M=z(),w=l.a.useState(0),y=Object(c.a)(w,2),k=y[0],S=y[1],A=l.a.useState(5),D=Object(c.a)(A,2),F=D[0],H=D[1],R=F-Math.min(F,(null===a||void 0===a?void 0:a.length)-k*F);return Object(L.jsx)(v.a,{component:m.a,children:Object(L.jsxs)(u.a,{className:M.table,"aria-label":"custom pagination table",children:[Object(L.jsx)(h.a,{children:Object(L.jsxs)(p.a,{children:[n&&(null===n||void 0===n?void 0:n.map((function(e){return Object(L.jsx)(O.a,{children:e.name},e.id)}))),!j&&Object(L.jsx)(O.a,{children:"Actions"})]})}),r?Object(L.jsx)(b.a,{className:"text-center my-5 w-100",children:Object(L.jsxs)(p.a,{children:[Object(L.jsx)(O.a,{children:Object(L.jsx)("span",{className:"spinner-grow spinner-grow-sm",role:"status"})}),Object(L.jsx)(O.a,{children:Object(L.jsx)("span",{className:"spinner-grow spinner-grow-sm",role:"status"})}),Object(L.jsx)(O.a,{children:Object(L.jsx)("span",{className:"spinner-grow spinner-grow-sm",role:"status"})}),Object(L.jsx)(O.a,{children:Object(L.jsx)("span",{className:"spinner-grow spinner-grow-sm",role:"status"})})]})}):Object(L.jsxs)(b.a,{children:[(null===a||void 0===a?void 0:a.length)<=0?Object(L.jsx)(p.a,{className:"text-center my-5",children:" No data yet "}):Object(L.jsx)(L.Fragment,{children:null===(t=F>0?null===a||void 0===a?void 0:a.slice(k*F,k*F+F):a)||void 0===t?void 0:t.map((function(e){var t;return Object(L.jsxs)(p.a,{children:[Object(L.jsx)(O.a,{align:"left",children:null===(t=C()(null===e||void 0===e?void 0:e.date))||void 0===t?void 0:t.format("D MMMM YYYY")}),Object(L.jsx)(O.a,{align:"left",children:Object(E.i)(null===e||void 0===e?void 0:e.topic,30)}),Object(L.jsx)(O.a,{align:"left",children:Object(L.jsx)("a",{href:"".concat(Object(E.g)(null===e||void 0===e?void 0:e.file)),children:null===e||void 0===e?void 0:e.file})}),!j&&Object(L.jsx)(O.a,{align:"left",children:e.senderID===d&&Object(L.jsxs)("div",{className:"d-flex align-items-center",children:[Object(L.jsx)(g.a,{onClick:function(){return s(e._id)},children:Object(L.jsx)(N.a,{})}),!o&&Object(L.jsx)(g.a,{onClick:function(){return i(e._id)},children:Object(L.jsx)(_.a,{})})]})})]})}))}),a.length<5?Object(L.jsx)(L.Fragment,{children:R>0&&Object(L.jsx)(p.a,{style:{height:53*R},children:Object(L.jsx)(O.a,{colSpan:6})})}):Object(L.jsx)(p.a,{style:{height:53},children:Object(L.jsx)(O.a,{colSpan:6})})]}),Object(L.jsx)(f.a,{children:Object(L.jsx)(p.a,{children:(null===a||void 0===a?void 0:a.length)>5&&Object(L.jsx)(x.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],count:null===a||void 0===a?void 0:a.length,rowsPerPage:F,page:k,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){S(t)},onChangeRowsPerPage:function(e){H(parseInt(e.target.value,10)),S(0)},ActionsComponent:P.a})})})]})})}var S=[{id:"date",name:"Date"},{id:"descripton",name:"Topic"},{id:"file",name:"File"}];t.default=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1],j=Object(n.useState)(!1),u=Object(c.a)(j,2),b=u[0],h=u[1],O=Object(n.useState)([]),v=Object(c.a)(O,2),f=v[0],x=v[1],p=Object(o.i)(),m=p.id,g=p.classID,M=Object(s.c)(r.d);return Object(n.useEffect)((function(){i.a.get("/courses/courseCode/".concat(m)).then((function(e){l(e.data.docs)}))}),[m]),Object(n.useEffect)((function(){h(!0),i.a.get("/notes/course/".concat(m)).then((function(e){h(!1),x(e.data.docs)}))}),[m]),Object(L.jsxs)("div",{children:[Object(L.jsxs)("div",{style:{background:"#051f3e"},className:"content__container text-center",children:[Object(L.jsx)("h3",{children:"Course Details"}),Object(L.jsxs)("h4",{children:[" ",Object(E.d)(null===a||void 0===a?void 0:a.name)]}),Object(L.jsx)("h6",{children:null===a||void 0===a?void 0:a.code})]}),Object(L.jsxs)("div",{className:"content__container",children:[Object(L.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(L.jsx)("h3",{children:"Course Notes"}),Object(L.jsx)("div",{children:"student"!==(null===M||void 0===M?void 0:M.role)&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(d.b,{to:"/academics/courses/add/".concat(null===a||void 0===a?void 0:a.code,"/").concat(g),className:"btn blue__btn mx-2",children:"Add New Note"}),Object(L.jsx)(d.b,{to:"/academics/courses/sba/".concat(null===a||void 0===a?void 0:a.code,"/").concat(g),className:"btn blue__btn mx-2",children:"Course S.B.A"}),Object(L.jsx)(d.b,{to:"/academics/courses/report/".concat(null===a||void 0===a?void 0:a.code,"/").concat(g),className:"btn blue__btn mx-2",children:"Course Report"})]})})]}),Object(L.jsx)(k,{tableHeader:S,data:f,handleDelete:function(e){i.a.delete("/notes/delete/".concat(e)).then((function(t){t.data.error&&Object(E.c)(t.data.error),x(f.filter((function(t){return t._id!==e})))}))},loading:b,noActions:"student"===(null===M||void 0===M?void 0:M.role),isEdit:!0,user:null===M||void 0===M?void 0:M.id})]})]})}},725:function(e,t,a){"use strict";var c=a(712),n=a(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1)),i=(0,c(a(714)).default)(l.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=i},727:function(e,t,a){"use strict";var c=a(712),n=a(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1)),i=(0,c(a(714)).default)(l.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage");t.default=i},728:function(e,t,a){"use strict";var c=a(712),n=a(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1)),i=(0,c(a(714)).default)(l.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage");t.default=i},729:function(e,t,a){"use strict";var c=a(712),n=a(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1)),i=(0,c(a(714)).default)(l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.default=i},730:function(e,t,a){"use strict";var c=a(712),n=a(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1)),i=(0,c(a(714)).default)(l.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.default=i},732:function(e,t,a){"use strict";var c=a(712),n=a(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1)),i=(0,c(a(714)).default)(l.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.default=i},786:function(e,t,a){"use strict";var c=a(2),n=a(19),l=a(1),i=(a(36),a(37)),s=a(101),r=a(726),o={variant:"footer"},d="tfoot",j=l.forwardRef((function(e,t){var a=e.classes,s=e.className,j=e.component,u=void 0===j?d:j,b=Object(n.a)(e,["classes","className","component"]);return l.createElement(r.a.Provider,{value:o},l.createElement(u,Object(c.a)({className:Object(i.a)(a.root,s),ref:t,role:u===d?null:"rowgroup"},b)))}));t.a=Object(s.a)({root:{display:"table-footer-group"}},{name:"MuiTableFooter"})(j)},800:function(e,t,a){"use strict";a(1);var c=a(560),n=a(189),l=a(1807),i=a(728),s=a.n(i),r=a(730),o=a.n(r),d=a(729),j=a.n(d),u=a(727),b=a.n(u),h=a(14),O=Object(c.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));t.a=function(e){var t=O(),a=Object(n.a)(),c=e.count,i=e.page,r=e.rowsPerPage,d=e.onChangePage;return Object(h.jsxs)("div",{className:t.root,children:[Object(h.jsx)(l.a,{onClick:function(e){d(e,0)},disabled:0===i,"aria-label":"first page",children:"rtl"===a.direction?Object(h.jsx)(b.a,{}):Object(h.jsx)(s.a,{})}),Object(h.jsx)(l.a,{onClick:function(e){d(e,i-1)},disabled:0===i,"aria-label":"previous page",children:"rtl"===a.direction?Object(h.jsx)(j.a,{}):Object(h.jsx)(o.a,{})}),Object(h.jsx)(l.a,{onClick:function(e){d(e,i+1)},disabled:i>=Math.ceil(c/r)-1,"aria-label":"next page",children:"rtl"===a.direction?Object(h.jsx)(o.a,{}):Object(h.jsx)(j.a,{})}),Object(h.jsx)(l.a,{onClick:function(e){d(e,Math.max(0,Math.ceil(c/r)-1))},disabled:i>=Math.ceil(c/r)-1,"aria-label":"last page",children:"rtl"===a.direction?Object(h.jsx)(s.a,{}):Object(h.jsx)(b.a,{})})]})}}}]);
//# sourceMappingURL=23.b6edb35f.chunk.js.map