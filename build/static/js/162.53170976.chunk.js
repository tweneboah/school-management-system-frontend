(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[162],{1410:function(e,s,t){"use strict";t(1);var a=t(748),c=t(14);s.a=function(e){var s=Object(a.a)(),t=s.register,r=s.handleSubmit,l=s.errors,n=e.salutation,o=e.setsalutation,i=e.subject,d=e.setsubject,b=e.body,j=e.setbody,m=e.closing,u=e.setclosing,h=e.signature,O=e.setsignature,f=e.date,x=e.setdate,v=e.address,g=e.setaddress,N=e.loading,p=e.isEdit,y=e.handleFunc;return Object(c.jsxs)("form",{onSubmit:r(y),action:"",children:[Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Address"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("textarea",{ref:t({required:!0}),value:v,onChange:function(e){return g(e.target.value)},name:"address",rows:"3",className:"form-control"}),l.address&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Salutations"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("input",{value:n,onChange:function(e){return o(e.target.value)},type:"text",ref:t({required:!0}),className:"form-control",name:"salutation"}),l.salutation&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Subject"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("input",{ref:t({required:!0}),value:i,onChange:function(e){return d(e.target.value)},type:"text",className:"form-control",name:"subject"}),l.subject&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Body"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("textarea",{className:"form-control",name:"body",ref:t({required:!0}),value:b,onChange:function(e){return j(e.target.value)},rows:"10"}),l.body&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Closing"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("input",{ref:t({required:!0}),value:m,onChange:function(e){return u(e.target.value)},type:"text",className:"form-control",name:"closing"}),l.body&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Signature"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("textarea",{className:"form-control",name:"signature",ref:t({required:!0}),value:h,onChange:function(e){return O(e.target.value)},rows:"3"}),l.signature&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Date"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("input",{ref:t({required:!0}),value:f,onChange:function(e){return x(e.target.value)},type:"date",className:"form-control",name:"date"}),l.date&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsx)("div",{className:"",children:Object(c.jsx)("div",{className:"col-sm-10",children:Object(c.jsxs)("button",{disabled:N,type:"submit",className:"btn blue__btn",children:[N&&Object(c.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),p?"Save Changes":"Add"]})})})]})}},1858:function(e,s,t){"use strict";t.r(s);var a=t(716),c=t(1),r=t(1410),l=t(22),n=t(38),o=t(718),i=t(138),d=t(722),b=t.n(d),j=t(14);s.default=function(){var e=Object(c.useState)(""),s=Object(a.a)(e,2),t=s[0],d=s[1],m=Object(c.useState)(""),u=Object(a.a)(m,2),h=u[0],O=u[1],f=Object(c.useState)(""),x=Object(a.a)(f,2),v=x[0],g=x[1],N=Object(c.useState)(""),p=Object(a.a)(N,2),y=p[0],S=p[1],q=Object(c.useState)(""),C=Object(a.a)(q,2),F=C[0],T=C[1],w=Object(c.useState)(""),Y=Object(a.a)(w,2),_=Y[0],E=Y[1],k=Object(c.useState)(""),A=Object(a.a)(k,2),D=A[0],J=A[1],M=Object(c.useState)(!1),B=Object(a.a)(M,2),z=B[0],G=B[1],H=Object(c.useState)(!1),I=Object(a.a)(H,2),K=I[0],L=I[1],P=Object(l.i)().id;return Object(c.useEffect)((function(){G(!0),n.a.get("/correspondance/".concat(P)).then((function(e){var s=e.data.doc;console.log(e),G(!1),s&&(d(null===s||void 0===s?void 0:s.address),O(null===s||void 0===s?void 0:s.subject),g(null===s||void 0===s?void 0:s.body),S(null===s||void 0===s?void 0:s.closing),T(null===s||void 0===s?void 0:s.signature),E(b()(null===s||void 0===s?void 0:s.date).format("YYYY-MM-D")),J(null===s||void 0===s?void 0:s.salutation))}))}),[P]),Object(j.jsxs)("div",{className:"content__container",children:[z&&Object(j.jsx)(i.a,{}),Object(j.jsx)("h3",{children:"Edit Correspondance"}),Object(j.jsx)(r.a,{address:t,setaddress:d,body:v,setbody:g,closing:y,setclosing:S,signature:F,setsignature:T,date:_,loading:K,setdate:E,setsalutation:J,salutation:D,subject:h,setsubject:O,handleFunc:function(){L(!0),n.a.put("/correspondance/update/".concat(P),{address:t,subject:h,body:v,closing:y,signature:F,date:_,salutation:D}).then((function(e){L(!1),e.data.error&&Object(o.c)(e.data.error),Object(o.m)("Correspondance changes successsfully saved")})).catch((function(e){console.log(e),L(!1),Object(o.c)("Failed")}))}})]})}}}]);
//# sourceMappingURL=162.53170976.chunk.js.map