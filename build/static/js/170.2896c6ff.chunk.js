(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[170],{1943:function(e,t,n){"use strict";n.r(t);var a=n(777),c=n(716),l=n(1),i=n.n(l),s=n(560),o=n(1064),r=n(1065),d=n(1060),j=n(1062),u=n(1063),b=n(792),m=n(1915),h=n(1061),O=n(942),x=n(733),f=n(722),p=n.n(f),v=n(135),g=n(718),N=n(14),y=Object(s.a)({table:{width:"100%"}});function S(e){var t,n=e.data,a=y(),l=i.a.useState(0),s=Object(c.a)(l,2),f=s[0],S=s[1],C=i.a.useState(5),_=Object(c.a)(C,2),D=_[0],w=_[1];Math.min(D,(null===n||void 0===n?void 0:n.length)-f*D);return Object(N.jsx)(u.a,{component:O.a,children:Object(N.jsxs)(o.a,{className:a.table,"aria-label":"custom pagination table",children:[Object(N.jsx)(d.a,{children:Object(N.jsxs)(h.a,{children:[Object(N.jsx)(j.a,{children:"Date"}),Object(N.jsx)(j.a,{align:"left",children:"Receipt"}),Object(N.jsx)(j.a,{align:"left",children:"Student"}),Object(N.jsxs)(j.a,{align:"left",children:["Amount (",Object(g.b)(),")"]})]})}),Object(N.jsx)(r.a,{children:(null===n||void 0===n?void 0:n.length)<=0?Object(N.jsx)(h.a,{children:Object(N.jsx)(j.a,{colSpan:4,className:"text-center my-5",children:"No data"})}):Object(N.jsx)(N.Fragment,{children:null===(t=D>0?null===n||void 0===n?void 0:n.slice(f*D,f*D+D):n)||void 0===t?void 0:t.map((function(e){var t;return Object(N.jsxs)(h.a,{children:[Object(N.jsx)(j.a,{align:"left",children:null===(t=p()(null===e||void 0===e?void 0:e.date))||void 0===t?void 0:t.format("D MMMM YYYY")}),Object(N.jsxs)(j.a,{align:"left",children:[" ",Object(N.jsx)(v.b,{to:"/store/sales/receipt/".concat(null===e||void 0===e?void 0:e._id),children:null===e||void 0===e?void 0:e._id})]}),Object(N.jsx)(j.a,{align:"left",children:null===e||void 0===e?void 0:e.name}),Object(N.jsx)(j.a,{align:"left",children:null===e||void 0===e?void 0:e.totalCost})]},e._id)}))})}),Object(N.jsx)(b.a,{children:Object(N.jsx)(h.a,{children:(null===n||void 0===n?void 0:n.length)>5&&Object(N.jsx)(m.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],count:null===n||void 0===n?void 0:n.length,rowsPerPage:D,page:f,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){S(t)},onChangeRowsPerPage:function(e){w(parseInt(e.target.value,10)),S(0)},ActionsComponent:x.a})})})]})})}var C=n(77),_=n(822),D=n(1808),w=n(740),P=n.n(w),I=n(1527),k=n(38),A=n(1136),q=n(1088),M=n(1450),F=Object(s.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),R=i.a.forwardRef((function(e,t){return Object(N.jsx)(A.a,Object(C.a)({direction:"up",ref:t},e))}));function Y(e){var t=e.student,n=e.setstudent,a=e.open,i=e.setOpen,s=e.totalprice,o=e.amount,r=e.setamount,d=e.buyitems,j=e.handleChangeDiscount,u=e.items,b=e.loading,m=e.handleSetitem,h=e.handleAddItem,O=e.handleChangeQty,x=e.handleAddSale,f=Object(l.useState)([]),p=Object(c.a)(f,2),v=p[0],g=p[1],y=F(),S=function(){i(!1)};return Object(l.useEffect)((function(){k.a.get("/students").then((function(e){g(e.data)}))}),[]),Object(N.jsxs)(_.a,{fullScreen:!0,open:a,onClose:S,TransitionComponent:R,className:"content__container","aria-labelledby":"customized-dialog-title",children:[Object(N.jsx)(q.a,{color:"transparent",className:y.appBar,children:Object(N.jsxs)(M.a,{children:[Object(N.jsx)(I.a,{variant:"h6",className:y.title,children:"Create New Sale"}),Object(N.jsx)(D.a,{edge:"start",color:"inherit",onClick:S,"aria-label":"close",children:Object(N.jsx)(P.a,{})})]})}),Object(N.jsxs)("form",{action:"",className:"mt-3 px-5",children:[Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"col-sm-6   mb-3",children:[Object(N.jsx)("label",{className:" form-label",children:"Student"}),Object(N.jsxs)("select",{value:t,onChange:function(e){return n(e.target.value)},name:"student",className:"form-select","aria-label":"Default select example",children:[Object(N.jsx)("option",{defaultValue:!0,hidden:!0,children:"select"}),(null===v||void 0===v?void 0:v.length)>0?null===v||void 0===v?void 0:v.map((function(e){return Object(N.jsxs)("option",{value:e.userID,children:[e.name," ",null===e||void 0===e?void 0:e.surname]},e._id)})):Object(N.jsx)("option",{disabled:!0,children:"No student yet"})]})]}),Object(N.jsxs)("div",{className:" col-sm-6   mb-3",children:[Object(N.jsx)("label",{className:" form-label",children:"Amount Paid"}),Object(N.jsx)("input",{name:"employmentdate",value:o,onChange:function(e){return r(e.target.value)},type:"number",className:"form-control"})]})]}),Object(N.jsxs)("table",{className:"table table-borderless",children:[Object(N.jsx)("thead",{className:"table-dark",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{colSpan:3,children:"Item Details"}),Object(N.jsx)("th",{scope:"col",children:"Quantity"}),Object(N.jsx)("th",{scope:"col",children:"Rate"}),Object(N.jsx)("th",{scope:"col",children:"Discount (%)"}),Object(N.jsx)("th",{scope:"col",children:"Amount"})]})}),Object(N.jsxs)("tbody",{children:[d&&d.map((function(e,t){return Object(N.jsxs)("tr",{children:[Object(N.jsxs)("th",{colSpan:3,children:[Object(N.jsx)("textarea",{className:"form-control",name:"item",rows:"2",value:e.name,readOnly:!0}),Object(N.jsxs)("select",{defaultValue:"item",onChange:function(e){return m(e.target.value,t)},name:"item",className:"form-select","aria-label":"Default select example",children:[Object(N.jsx)("option",{defaultValue:!0,hidden:!0,children:"select"}),(null===u||void 0===u?void 0:u.length)>0?null===u||void 0===u?void 0:u.map((function(e){return Object(N.jsx)("option",{value:null===e||void 0===e?void 0:e._id,children:e.name},e._id)})):Object(N.jsx)("option",{disabled:!0,children:"No item yet"})]})]}),Object(N.jsx)("th",{scope:"col",children:Object(N.jsx)("input",{name:"quantity",className:"form-control",onChange:function(e){return O(e.target.value,t)},value:e.qty,type:"number"})}),Object(N.jsx)("th",{scope:"col",children:Object(N.jsx)("input",{name:"rate",readOnly:!0,value:e.rate,className:"form-control",type:"number"})}),Object(N.jsx)("th",{scope:"col",children:Object(N.jsx)("input",{name:"discount",className:"form-control",value:e.discount,onChange:function(e){return j(e.target.value,t)},type:"number"})}),Object(N.jsx)("th",{scope:"col",children:Object(N.jsx)("input",{name:"amount",className:"form-control",readOnly:!0,value:e.amount,type:"number"})})]},t)})),Object(N.jsx)("tr",{children:Object(N.jsx)("button",{onClick:h,className:"btn blue__btn",children:"+ Add another item"})}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{colSpan:5}),Object(N.jsx)("th",{colSpan:2,children:Object(N.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(N.jsx)("span",{children:"Items Total Price"}),Object(N.jsx)("span",{children:s})]})})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{colSpan:5}),Object(N.jsx)("th",{colSpan:2,children:Object(N.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(N.jsx)("span",{children:"Balance "}),Object(N.jsx)("span",{children:(o-s).toFixed(2)})]})})]})]})]}),Object(N.jsx)("div",{className:"d-flex justify-content-end",children:Object(N.jsx)("button",{className:"btn blue__btn",autoFocus:!0,disabled:0===s||0===o||b,onClick:x,color:"primary",children:"Complete Sale"})})]})]})}var B=n(22);t.default=function(){var e=Object(l.useState)([]),t=Object(c.a)(e,2),n=t[0],i=t[1],s=Object(l.useState)(!1),o=Object(c.a)(s,2),r=o[0],d=o[1],j=Object(l.useState)(""),u=Object(c.a)(j,2),b=u[0],m=u[1],h=Object(l.useState)(0),O=Object(c.a)(h,2),x=O[0],f=O[1],p=Object(l.useState)([]),v=Object(c.a)(p,2),y=v[0],C=v[1],_=Object(l.useState)(!1),D=Object(c.a)(_,2),w=D[0],P=D[1],I=Object(B.g)(),A=Object(l.useState)([{qty:0,rate:0,discount:0,amount:0,name:"",id:0,itemID:""}]),q=Object(c.a)(A,2),M=q[0],F=q[1];Object(l.useEffect)((function(){k.a.get("/store/sales").then((function(e){i(e.data)}))}),[]),Object(l.useEffect)((function(){k.a.get("/store/items").then((function(e){C(e.data)}))}),[]);var R=function(e,t,n){if(e||t||n){var a=Number(e)*Number(n);return(a-Number(t)*a).toFixed(2)}return 0},E=M.reduce((function(e,t){return e+Number(t.amount)}),0);return console.log(M),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"mb-5 d-flex justify-content-between content__container ",children:[Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:function(){return d(!0)},className:"btn blue__btn",children:"New Sale"})}),Object(N.jsx)("form",{action:"",children:Object(N.jsx)("input",{placeholder:"Search....",className:"form-control",type:"text"})})]}),Object(N.jsx)(S,{data:n}),Object(N.jsx)(Y,{student:b,setstudent:m,amount:x,setamount:f,buyitems:M,handleChangeQty:function(e,t){console.log(e,t),F(M.map((function(n){return n.id===t?{qty:Number(e),amount:R(n.rate,n.discount,e),name:n.name,rate:n.rate,discount:n.discount,itemID:n.itemID,id:t}:n})))},handleAddItem:function(e){e.preventDefault(),F([].concat(Object(a.a)(M),[{qty:0,rate:0,discount:0,amount:0,name:"",id:M.length,itemID:""}]))},items:y,open:r,loading:w,handleAddSale:function(e){if(e.preventDefault(),!b)return Object(g.c)("please select student");P(!0),k.a.post("/store/sales/create",{amountPaid:x,totalCost:E,name:b,items:M,seller:"admin"}).then((function(e){var t;if(P(!1),e.data.error)return Object(g.c)(e.data.error),0;Object(g.m)("payment successfully added"),I.push("/store/sales/receipt/".concat(null===(t=e.data.doc)||void 0===t?void 0:t._id))})).catch((function(e){P(!1),console.log(e)}))},totalprice:E,handleChangeDiscount:function(e,t){console.log(e),F(M.map((function(n){return console.log(n),n.id===t?{discount:Number(e),name:n.name,rate:n.rate,qty:n.qty,amount:R(n.rate,e,n.qty),id:t,itemID:n.itemID}:n})))},handleSetitem:function(e,t){var n=y.find((function(t){return t._id===e}));F(M.map((function(e){return e.id===t?{name:n.name,rate:n.price,itemID:n._id,amount:n.price,discount:0,id:t,qty:1}:e})))},setOpen:d})]})}},733:function(e,t,n){"use strict";n(1);var a=n(560),c=n(189),l=n(1808),i=n(730),s=n.n(i),o=n(732),r=n.n(o),d=n(731),j=n.n(d),u=n(729),b=n.n(u),m=n(14),h=Object(a.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));t.a=function(e){var t=h(),n=Object(c.a)(),a=e.count,i=e.page,o=e.rowsPerPage,d=e.onChangePage;return Object(m.jsxs)("div",{className:t.root,children:[Object(m.jsx)(l.a,{onClick:function(e){d(e,0)},disabled:0===i,"aria-label":"first page",children:"rtl"===n.direction?Object(m.jsx)(b.a,{}):Object(m.jsx)(s.a,{})}),Object(m.jsx)(l.a,{onClick:function(e){d(e,i-1)},disabled:0===i,"aria-label":"previous page",children:"rtl"===n.direction?Object(m.jsx)(j.a,{}):Object(m.jsx)(r.a,{})}),Object(m.jsx)(l.a,{onClick:function(e){d(e,i+1)},disabled:i>=Math.ceil(a/o)-1,"aria-label":"next page",children:"rtl"===n.direction?Object(m.jsx)(r.a,{}):Object(m.jsx)(j.a,{})}),Object(m.jsx)(l.a,{onClick:function(e){d(e,Math.max(0,Math.ceil(a/o)-1))},disabled:i>=Math.ceil(a/o)-1,"aria-label":"last page",children:"rtl"===n.direction?Object(m.jsx)(s.a,{}):Object(m.jsx)(b.a,{})})]})}}}]);
//# sourceMappingURL=170.2896c6ff.chunk.js.map