(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[56],{1887:function(e,n,t){"use strict";t.r(n);var c=t(735),a=t.n(c),i=t(77),r=t(736),s=t(716),d=t(1),o=t(38),l=t(22),j=t(722),b=t.n(j),u=t(769),h=t(718),x=t(14),O=new Date;n.default=function(){var e=Object(d.useState)({}),n=Object(s.a)(e,2),t=n[0],c=n[1],j=Object(d.useState)({}),m=Object(s.a)(j,2),v=m[0],f=m[1],p=Object(d.useState)({}),y=Object(s.a)(p,2),N=y[0],g=y[1],k=Object(d.useState)(""),B=Object(s.a)(k,2),S=B[0],E=B[1],w=Object(d.useState)(!1),A=Object(s.a)(w,2),C=A[0],D=A[1],M=Object(l.i)().id;Object(d.useEffect)((function(){o.a.get("/school").then((function(e){c(e.data)}))}),[]),Object(d.useEffect)((function(){o.a.get("/deductions").then((function(e){var n=[];e.data.map((function(e){if(e.staff.find((function(e){return e===M})))return n.push({amount:e.amount,name:e.name})}));var t=n.reduce((function(e,n){return e+n.amount}),0);E(t)}))}),[M]),Object(d.useEffect)((function(){o.a.get("/teachers/".concat(M)).then(function(){var e=Object(r.a)(a.a.mark((function e(n){var t,c,r,s,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(n.data.teacher),D(!!(null===(t=n.data.teacher)||void 0===t?void 0:t.ssnit)),e.next=4,o.a.get("/payrow/".concat(null===(c=n.data.teacher)||void 0===c?void 0:c.position));case 4:r=e.sent,s=null===r||void 0===r?void 0:r.data.docs,d=Number(null===s||void 0===s?void 0:s.allowance)+Number(null===s||void 0===s?void 0:s.salary)+Number(null===s||void 0===s?void 0:s.bonus),f(Object(i.a)(Object(i.a)({},s),{},{total:d}));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[M]);var T=Number(.1*(null===v||void 0===v?void 0:v.salary))+Number(.05*(null===v||void 0===v?void 0:v.total))+Number(S);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"border content__container mb-4",id:"section-to-print",children:[Object(x.jsxs)("div",{className:"text-center border-bottom p-3",children:[Object(x.jsx)("h2",{children:null===t||void 0===t?void 0:t.fullName}),Object(x.jsx)("p",{children:null===t||void 0===t?void 0:t.motto}),Object(x.jsx)("h6",{children:Object(x.jsxs)("strong",{children:["PaySlip for ",u.d[O.getMonth()].name," ",O.getFullYear()]})})]}),Object(x.jsxs)("div",{className:"row p-3",children:[Object(x.jsxs)("div",{className:"col-6",children:[Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsxs)("h6",{className:"col-4",children:[" ",Object(x.jsx)("strong",{children:"Name"})]}),Object(x.jsx)("h6",{children:Object(x.jsxs)("strong",{children:[null===N||void 0===N?void 0:N.name," ",null===N||void 0===N?void 0:N.middleName," ",null===N||void 0===N?void 0:N.surname," "]})})]}),Object(x.jsxs)("div",{className:"d-flex ",children:[Object(x.jsxs)("h6",{className:"col-4",children:[" ",Object(x.jsx)("strong",{children:"Position"})]}),Object(x.jsx)("h6",{children:Object(x.jsx)("strong",{children:null===N||void 0===N?void 0:N.position})})]})]}),Object(x.jsxs)("div",{className:"col-6",children:[Object(x.jsxs)("div",{className:"d-flex ",children:[Object(x.jsxs)("h6",{className:"col-4",children:[" ",Object(x.jsx)("strong",{children:"Account Number"})]}),Object(x.jsx)("h6",{children:Object(x.jsxs)("strong",{children:[(null===N||void 0===N?void 0:N.accountNumber)||"-"," "]})})]}),Object(x.jsxs)("div",{className:"d-flex ",children:[Object(x.jsxs)("h6",{className:"col-4",children:[" ",Object(x.jsx)("strong",{children:"Bank"})]}),Object(x.jsx)("h6",{children:Object(x.jsxs)("strong",{children:[(null===N||void 0===N?void 0:N.bank)||"-"," "]})})]})]})]}),Object(x.jsxs)("table",{className:"table table-bordered",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsxs)("th",{colSpan:"2",scope:"col",children:["Income (",Object(h.b)(),")"]}),Object(x.jsxs)("th",{colSpan:"2",scope:"col",children:["Deductions (",Object(h.b)(),")"]})]})}),Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Basic Salary"}),Object(x.jsx)("td",{children:null===v||void 0===v?void 0:v.salary}),Object(x.jsx)("td",{children:"Income Tax"}),Object(x.jsx)("td",{children:.1*(null===v||void 0===v?void 0:v.salary)})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Allowance"}),Object(x.jsx)("td",{children:null===v||void 0===v?void 0:v.allowance}),Object(x.jsx)("td",{children:"Employee SSNIT"}),Object(x.jsx)("td",{children:C?.05*(null===v||void 0===v?void 0:v.total):"-"})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Bonus"}),Object(x.jsx)("td",{children:v.bonus}),Object(x.jsx)("td",{children:"Salary Deductions"}),Object(x.jsx)("td",{children:S})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Gross Income"}),Object(x.jsx)("td",{children:null===v||void 0===v?void 0:v.total}),Object(x.jsx)("td",{children:"Total Deductions"}),Object(x.jsx)("td",{children:T})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{}),Object(x.jsx)("td",{}),Object(x.jsx)("td",{children:"Net Salary"}),Object(x.jsxs)("td",{children:[Object(h.b)()," ",(null===v||void 0===v?void 0:v.total)-T]})]})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsxs)("h6",{children:["Date :"," ",Object(x.jsx)("strong",{children:b()(O).format("dddd Do MMMM YYYY")})]})}),Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h6",{children:"Signature of Employer: .........................."})}),Object(x.jsx)("div",{children:Object(x.jsx)("h6",{children:"Signature of Employee: .........................."})})]})]})]}),Object(x.jsx)("div",{className:"d-flex justify-content-center mb-3",children:Object(x.jsx)("button",{onClick:function(){window.print()},className:"btn blue__btn",children:"Print"})})]})}},735:function(e,n,t){e.exports=t(419)},736:function(e,n,t){"use strict";function c(e,n,t,c,a,i,r){try{var s=e[i](r),d=s.value}catch(o){return void t(o)}s.done?n(d):Promise.resolve(d).then(c,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,i){var r=e.apply(n,t);function s(e){c(r,a,i,s,d,"next",e)}function d(e){c(r,a,i,s,d,"throw",e)}s(void 0)}))}}t.d(n,"a",(function(){return a}))},769:function(e,n,t){"use strict";t.d(n,"d",(function(){return c})),t.d(n,"f",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return s})),t.d(n,"e",(function(){return d}));var c=[{name:"January",id:0},{name:"February",id:1},{name:"March",id:2},{name:"April",id:3},{name:"May",id:4},{name:"June",id:5},{name:"July",id:6},{name:"August",id:7},{name:"September",id:8},{name:"October",id:9},{name:"November",id:10},{name:"December",id:11}],a=[{id:"border",name:"Border"},{id:"freshBorder",name:"Fresh Border"},{id:"freshDay",name:"Fresh Day"},{id:"day",name:"Day"}],i=["donations","prices","projects","others"],r=["Advertising and Marketing","Automobile Expense","Consultant Expense","Credit Card Charges","Depreciation Expense","IT and Internet Expenses","Janitorial Expense","Lodging","Meals and Entertainment","Office Supplies","Postage","Printing and Stationery","Rent Expense ","Repairs and Maintenance","Salaries and Expenses Wages","Telephone Expense","Travel Expense","Fixed Assets","Expenses","SNNIT","Bank Charges","Cleaning and Sanitation","Fuel/Lubrication","Vehicle Maintenance","Accountancy","Learning Materials","Proprietor Drawings","Donation/Gift","Permit/Levies/Rates","Electricity","Water","Text Book","Note books","School Uniform","Exams Printing","Maintenance","Others"],s=["Access Bank Ghana","African Investment Bank","Agricultural Developement Bank of Ghana","Ahantaman Rural Bank","CAL Bank","Ecobank Ghana","Fidelity Bank","Intercontinental Bank","HFC Bank","Consolidated Bank of Ghana","Barclays Bank","Merchant Bank Ghana Limited","Guaranty Trust Bank","Stanbic","Standard Chartered Bank","National City Bank","Northern City Bank","Trust Bank","UT Bank","United Bank for Africa","Zenith Bank"],d=["Teacher","Headmaster","Accountant","Teller","Security","Proprietor","Cleaner","Cook","Admin","Technician","Janitor","Matron","Secretary","Driver"]}}]);
//# sourceMappingURL=56.29b40624.chunk.js.map