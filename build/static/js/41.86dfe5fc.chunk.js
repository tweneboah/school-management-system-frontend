(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[41],{1964:function(e,n,a){"use strict";a.r(n);var t=a(716),i=a(1),c=a.n(i),r=a(560),s=a(1064),l=a(1065),o=a(1060),d=a(1062),u=a(1063),j=a(792),b=a(1915),h=a(1061),m=a(942),v=a(827),f=a(14),O=Object(r.a)({table:{width:"100%"}});function x(e){var n,a=e.data,i=e.tableHeader,r=e.loading,x=O(),p=c.a.useState(0),g=Object(t.a)(p,2),y=g[0],N=g[1],k=c.a.useState(5),S=Object(t.a)(k,2),C=S[0],P=S[1],E=C-Math.min(C,(null===a||void 0===a?void 0:a.length)-y*C);return Object(f.jsx)(u.a,{component:m.a,children:Object(f.jsxs)(s.a,{className:x.table,"aria-label":"custom pagination table",children:[Object(f.jsx)(o.a,{children:Object(f.jsx)(h.a,{children:i&&i.map((function(e){return Object(f.jsx)(d.a,{children:Object(f.jsx)("strong",{children:e.name})},e.id)}))})}),r?Object(f.jsxs)("div",{className:"text-center my-5 w-100",children:[Object(f.jsx)("div",{class:"spinner-grow spinner-grow-sm",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:"Loading..."})}),Object(f.jsx)("div",{class:"spinner-grow spinner-grow-sm",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:"Loading..."})}),Object(f.jsx)("div",{class:"spinner-grow spinner-grow-sm",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:"Loading..."})})]}):Object(f.jsxs)(l.a,{children:[(null===a||void 0===a?void 0:a.length)<=0?Object(f.jsx)(h.a,{children:Object(f.jsxs)(d.a,{className:"text-center",colSpan:null===i||void 0===i?void 0:i.length,children:[" ","No data yet"]})}):Object(f.jsx)(f.Fragment,{children:null===(n=C>0?null===a||void 0===a?void 0:a.slice(y*C,y*C+C):a)||void 0===n?void 0:n.map((function(e){return Object(f.jsx)(h.a,{children:i&&i.map((function(n){return Object(f.jsx)(d.a,{align:"left",children:e[null===n||void 0===n?void 0:n.id]||"null"},null===n||void 0===n?void 0:n.id)}))},null===e||void 0===e?void 0:e.userID)}))}),E>0&&Object(f.jsx)(h.a,{style:{height:53},children:Object(f.jsx)(d.a,{colSpan:6})})]}),(null===a||void 0===a?void 0:a.length)>5&&Object(f.jsx)(j.a,{children:Object(f.jsx)(h.a,{children:Object(f.jsx)(b.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],count:a.length,rowsPerPage:C,page:y,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,n){N(n)},onChangeRowsPerPage:function(e){P(parseInt(e.target.value,10)),N(0)},ActionsComponent:v.a})})})]})})}var p=a(38),g=a(769),y=a(76),N=a(60),k=a(718),S=a(916),C=[{id:"userID",name:"Staff ID"},{id:"taxNumber",name:"SSNIT Number"},{id:"name",name:"Name"},{id:"surname",name:"Surname"},{id:"position",name:"Staff Position"},{id:"tax",name:"5% Contribution"},{id:"salary",name:"Salary (".concat(Object(k.b)(),")")}];n.default=function(){var e=Object(i.useState)([]),n=Object(t.a)(e,2),a=n[0],c=n[1],r=Object(i.useState)([]),s=Object(t.a)(r,2),l=s[0],o=s[1],d=Object(k.k)(20),u=Object(i.useState)(""),j=Object(t.a)(u,2),b=j[0],h=j[1],m=Object(i.useState)(""),v=Object(t.a)(m,2),O=v[0],P=v[1],E=Object(i.useState)(!1),M=Object(t.a)(E,2),w=M[0],B=M[1],L=Object(i.useState)(!1),_=Object(t.a)(L,2),A=_[0],D=_[1],F=Object(y.c)(N.d),I=Object(i.useState)(""),T=Object(t.a)(I,2),R=T[0],G=T[1],J=Object(i.useState)(""),z=Object(t.a)(J,2),H=z[0],V=z[1];return Object(i.useEffect)((function(){p.a.get("/teachers").then((function(e){o(e.data)}))})),Object(f.jsxs)("div",{children:[Object(f.jsx)("form",{action:"",className:"content__container mb-5",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-sm-4",children:[Object(f.jsx)("label",{htmlFor:"",children:"Year"}),Object(f.jsx)("div",{className:"",children:Object(f.jsxs)("select",{value:b,name:"transfer",onChange:function(e){return h(e.target.value)},className:"form-select",children:[Object(f.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),d&&d.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}))]})})]}),Object(f.jsxs)("div",{className:"col-sm-4",children:[Object(f.jsx)("label",{htmlFor:"",children:"Month"}),Object(f.jsx)("div",{className:"",children:Object(f.jsxs)("select",{value:O,name:"month",onChange:function(e){return P(e.target.value)},className:"form-select",children:[Object(f.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),g.d&&g.d.map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.name},e.id)}))]})})]}),Object(f.jsx)("div",{className:"col-sm-4",children:Object(f.jsxs)("button",{disabled:w,className:"btn blue__btn mt-4",onClick:function(e){return e.preventDefault(),b?O?(B(!0),void(b&&O&&p.a.get("/transactions/pay/".concat(b,"/").concat(O)).then((function(e){var n;B(!1),c(e.data.docs&&(null===(n=e.data.docs)||void 0===n?void 0:n.map((function(e){var n=l.find((function(n){return n.userID===e.pay.userID}));return{userID:null===n||void 0===n?void 0:n.userID,position:null===n||void 0===n?void 0:n.position,name:null===n||void 0===n?void 0:n.name,surname:null===n||void 0===n?void 0:n.surname,tax:.05*(e.salary||0),salary:null===e||void 0===e?void 0:e.salary,taxNumber:(null===n||void 0===n?void 0:n.ssnit)?null===n||void 0===n?void 0:n.taxNumber:"not set",allowance:null===n||void 0===n?void 0:n.salary}})))),B(!1),D(!0),V(O),G(b)})).catch((function(e){console.log(e,"ERROR"),B(!1)})))):Object(k.c)("Please select month"):Object(k.c)("Please select year")},children:[w&&Object(f.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Generate"]})})]})}),A&&Object(f.jsxs)("div",{className:"content__container",children:[" ",Object(f.jsxs)("div",{id:"section-to-print",children:[Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("h3",{children:Object(f.jsx)("strong",{children:null===F||void 0===F?void 0:F.name})}),Object(f.jsxs)("h5",{children:["5% January Petra Trust Contribution List for"," ",H&&g.d[H].name," ",R]})]}),Object(f.jsx)(x,{data:a,tableHeader:C})]}),a.length>0&&Object(f.jsxs)("div",{className:"d-flex justify-content-center mt-5",children:[Object(f.jsxs)("button",{onClick:function(){window.print()},className:"btn blue__btn mr-2",children:[" ","View / Print"]}),Object(f.jsx)(S.a,{className:"btn blue__btn ml-2",data:a,columns:C})]})]})]})}},729:function(e,n,a){"use strict";var t=a(712),i=a(713);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=i(a(1)),r=(0,t(a(714)).default)(c.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage");n.default=r},730:function(e,n,a){"use strict";var t=a(712),i=a(713);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=i(a(1)),r=(0,t(a(714)).default)(c.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage");n.default=r},731:function(e,n,a){"use strict";var t=a(712),i=a(713);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=i(a(1)),r=(0,t(a(714)).default)(c.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");n.default=r},732:function(e,n,a){"use strict";var t=a(712),i=a(713);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=i(a(1)),r=(0,t(a(714)).default)(c.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");n.default=r},769:function(e,n,a){"use strict";a.d(n,"d",(function(){return t})),a.d(n,"f",(function(){return i})),a.d(n,"c",(function(){return c})),a.d(n,"b",(function(){return r})),a.d(n,"a",(function(){return s})),a.d(n,"e",(function(){return l}));var t=[{name:"January",id:0},{name:"February",id:1},{name:"March",id:2},{name:"April",id:3},{name:"May",id:4},{name:"June",id:5},{name:"July",id:6},{name:"August",id:7},{name:"September",id:8},{name:"October",id:9},{name:"November",id:10},{name:"December",id:11}],i=[{id:"border",name:"Border"},{id:"freshBorder",name:"Fresh Border"},{id:"freshDay",name:"Fresh Day"},{id:"day",name:"Day"}],c=["donations","prices","projects","others"],r=["Advertising and Marketing","Automobile Expense","Consultant Expense","Credit Card Charges","Depreciation Expense","IT and Internet Expenses","Janitorial Expense","Lodging","Meals and Entertainment","Office Supplies","Postage","Printing and Stationery","Rent Expense ","Repairs and Maintenance","Salaries and Expenses Wages","Telephone Expense","Travel Expense","Fixed Assets","Expenses","SNNIT","Bank Charges","Cleaning and Sanitation","Fuel/Lubrication","Vehicle Maintenance","Accountancy","Learning Materials","Proprietor Drawings","Donation/Gift","Permit/Levies/Rates","Electricity","Water","Text Book","Note books","School Uniform","Exams Printing","Maintenance","Others"],s=["Access Bank Ghana","African Investment Bank","Agricultural Developement Bank of Ghana","Ahantaman Rural Bank","CAL Bank","Ecobank Ghana","Fidelity Bank","Intercontinental Bank","HFC Bank","Consolidated Bank of Ghana","Barclays Bank","Merchant Bank Ghana Limited","Guaranty Trust Bank","Stanbic","Standard Chartered Bank","National City Bank","Northern City Bank","Trust Bank","UT Bank","United Bank for Africa","Zenith Bank"],l=["Teacher","Headmaster","Accountant","Teller","Security","Proprietor","Cleaner","Cook","Admin","Technician","Janitor","Matron","Secretary","Driver"]},792:function(e,n,a){"use strict";var t=a(2),i=a(19),c=a(1),r=(a(36),a(37)),s=a(101),l=a(726),o={variant:"footer"},d="tfoot",u=c.forwardRef((function(e,n){var a=e.classes,s=e.className,u=e.component,j=void 0===u?d:u,b=Object(i.a)(e,["classes","className","component"]);return c.createElement(l.a.Provider,{value:o},c.createElement(j,Object(t.a)({className:Object(r.a)(a.root,s),ref:n,role:j===d?null:"rowgroup"},b)))}));n.a=Object(s.a)({root:{display:"table-footer-group"}},{name:"MuiTableFooter"})(u)},827:function(e,n,a){"use strict";a(1);var t=a(560),i=a(189),c=a(1808),r=a(730),s=a.n(r),l=a(732),o=a.n(l),d=a(731),u=a.n(d),j=a(729),b=a.n(j),h=a(14),m=Object(t.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));n.a=function(e){var n=m(),a=Object(i.a)(),t=e.count,r=e.page,l=e.rowsPerPage,d=e.onChangePage;return Object(h.jsxs)("div",{className:n.root,children:[Object(h.jsx)(c.a,{onClick:function(e){d(e,0)},disabled:0===r,"aria-label":"first page",children:"rtl"===a.direction?Object(h.jsx)(b.a,{}):Object(h.jsx)(s.a,{})}),Object(h.jsx)(c.a,{onClick:function(e){d(e,r-1)},disabled:0===r,"aria-label":"previous page",children:"rtl"===a.direction?Object(h.jsx)(u.a,{}):Object(h.jsx)(o.a,{})}),Object(h.jsx)(c.a,{onClick:function(e){d(e,r+1)},disabled:r>=Math.ceil(t/l)-1,"aria-label":"next page",children:"rtl"===a.direction?Object(h.jsx)(o.a,{}):Object(h.jsx)(u.a,{})}),Object(h.jsx)(c.a,{onClick:function(e){d(e,Math.max(0,Math.ceil(t/l)-1))},disabled:r>=Math.ceil(t/l)-1,"aria-label":"last page",children:"rtl"===a.direction?Object(h.jsx)(s.a,{}):Object(h.jsx)(b.a,{})})]})}},916:function(e,n,a){"use strict";a(1);var t=a(926),i=a.n(t),c=(a(722),a(14)),r=i.a.ExcelFile,s=i.a.ExcelFile.ExcelSheet,l=i.a.ExcelFile.ExcelColumn;n.a=function(e){var n=e.data,a=e.btn,t=e.name,i=e.columns;return Object(c.jsx)(r,{element:Object(c.jsx)("button",{className:"btn blue__btn",children:a||"Download"}),children:Object(c.jsx)(s,{data:n,name:t||"data",children:i.map((function(e){return Object(c.jsx)(l,{label:e.name,value:e.id},e.id)}))})})}},927:function(e,n){},928:function(e,n){},929:function(e,n){},930:function(e,n){},931:function(e,n){},932:function(e,n){},933:function(e,n){},934:function(e,n){},935:function(e,n){},936:function(e,n){}}]);
//# sourceMappingURL=41.86dfe5fc.chunk.js.map