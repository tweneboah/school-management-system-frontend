(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[161],{1410:function(e,s,a){"use strict";a(1);var t=a(748),c=a(14);s.a=function(e){var s=Object(t.a)(),a=s.register,r=s.handleSubmit,l=s.errors,n=e.salutation,o=e.setsalutation,i=e.subject,d=e.setsubject,b=e.body,m=e.setbody,j=e.closing,u=e.setclosing,h=e.signature,O=e.setsignature,x=e.date,f=e.setdate,N=e.address,g=e.setaddress,v=e.loading,p=e.isEdit,y=e.handleFunc;return Object(c.jsxs)("form",{onSubmit:r(y),action:"",children:[Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Address"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("textarea",{ref:a({required:!0}),value:N,onChange:function(e){return g(e.target.value)},name:"address",rows:"3",className:"form-control"}),l.address&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Salutations"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("input",{value:n,onChange:function(e){return o(e.target.value)},type:"text",ref:a({required:!0}),className:"form-control",name:"salutation"}),l.salutation&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Subject"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("input",{ref:a({required:!0}),value:i,onChange:function(e){return d(e.target.value)},type:"text",className:"form-control",name:"subject"}),l.subject&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Body"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("textarea",{className:"form-control",name:"body",ref:a({required:!0}),value:b,onChange:function(e){return m(e.target.value)},rows:"10"}),l.body&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Closing"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("input",{ref:a({required:!0}),value:j,onChange:function(e){return u(e.target.value)},type:"text",className:"form-control",name:"closing"}),l.body&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Signature"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("textarea",{className:"form-control",name:"signature",ref:a({required:!0}),value:h,onChange:function(e){return O(e.target.value)},rows:"3"}),l.signature&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsxs)("div",{className:" mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Date"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsx)("input",{ref:a({required:!0}),value:x,onChange:function(e){return f(e.target.value)},type:"date",className:"form-control",name:"date"}),l.date&&Object(c.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(c.jsx)("div",{className:"",children:Object(c.jsx)("div",{className:"col-sm-10",children:Object(c.jsxs)("button",{disabled:v,type:"submit",className:"btn blue__btn",children:[v&&Object(c.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),p?"Save Changes":"Add"]})})})]})}},1857:function(e,s,a){"use strict";a.r(s);var t=a(716),c=a(1),r=a(1410),l=a(38),n=a(718),o=a(14);s.default=function(){var e=Object(c.useState)(""),s=Object(t.a)(e,2),a=s[0],i=s[1],d=Object(c.useState)(""),b=Object(t.a)(d,2),m=b[0],j=b[1],u=Object(c.useState)(""),h=Object(t.a)(u,2),O=h[0],x=h[1],f=Object(c.useState)(""),N=Object(t.a)(f,2),g=N[0],v=N[1],p=Object(c.useState)(""),y=Object(t.a)(p,2),q=y[0],S=y[1],C=Object(c.useState)(""),F=Object(t.a)(C,2),T=F[0],w=F[1],_=Object(c.useState)(""),k=Object(t.a)(_,2),A=k[0],J=k[1],B=Object(c.useState)(!1),D=Object(t.a)(B,2),E=D[0],z=D[1];return Object(o.jsxs)("div",{className:"content__container",children:[Object(o.jsx)("h3",{className:"mb-5",children:"New Correspondance"}),Object(o.jsx)(r.a,{address:a,setaddress:i,body:O,setbody:x,closing:g,setclosing:v,signature:q,setsignature:S,date:T,loading:E,setdate:w,setsalutation:J,salutation:A,subject:m,setsubject:j,handleFunc:function(){z(!0),l.a.post("/correspondance/create",{address:a,subject:m,body:O,closing:g,signature:q,date:T,salutation:A}).then((function(e){z(!1),e.data.error&&Object(n.c)(e.data.error),Object(n.m)("Correspondance successsfully created"),i(""),j(""),x(""),v(""),S(""),w(""),J("")})).catch((function(e){console.log(e),z(!1),Object(n.c)("Failed")}))}})]})}}}]);
//# sourceMappingURL=161.98bfcf3d.chunk.js.map