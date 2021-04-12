(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[147],{1407:function(e,t,c){"use strict";var a=c(770),s=c(716),n=c(1),r=c(745),l=c(38),i=c(76),o=c(32),d=c(958),u=c.n(d),j=c(1408),b=c.n(j),h=c(1807),m=c(14);t.a=function(e){var t=Object(n.useState)([]),c=Object(s.a)(t,2),d=c[0],j=c[1],f=Object(i.c)(o.e),O=Object(i.c)(o.c),v=e.type,p=e.teacher,x=e.setteacher,g=e.settype,N=e.name,y=e.setname,C=e.code,S=e.setcode,_=e.onSubmit,A=e.loading,D=e.isEdit,E=e.setclassesArr,w=e.classesArr;console.log(w),Object(n.useEffect)((function(){l.a.get("/teachers/teachers").then((function(e){j(e.data)}))}),[]);var z=Object(r.a)(),I=z.register,M=z.handleSubmit,V=z.errors;return Object(m.jsxs)("form",{action:"",onSubmit:M(_),children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{className:"form-label",children:"Course Name"}),Object(m.jsx)("input",{type:"text",value:N,ref:I({required:!0}),onChange:function(e){return y(e.target.value)},className:"form-control",name:"name"}),V.name&&Object(m.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]}),!D&&Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{className:"form-label",children:"Course Code"}),Object(m.jsx)("input",{type:"text",value:C,ref:I({required:!0}),onChange:function(e){return S(e.target.value)},className:"form-control",name:"code"}),V.code&&Object(m.jsx)("span",{className:"form-error text-danger mb-2",children:"This field is required"})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{className:"form-label",children:"Departments"}),Object(m.jsxs)("select",{name:"type",value:v,onChange:function(e){return g(e.target.value)},id:"inputState",className:"form-select",children:[Object(m.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),f.length>0?f.map((function(e){return Object(m.jsx)("option",{value:e.code,children:e.name},e._id)})):Object(m.jsx)("option",{disabled:!0,children:"No departments yet"})]})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("div",{className:"d-flex justify-content-between mb-3",children:Object(m.jsx)("label",{className:"form-label",children:"Classes"})}),Object(m.jsx)("div",{className:"mb-3",children:w&&w.map((function(e){return Object(m.jsxs)("div",{className:" row",children:[Object(m.jsx)("div",{className:"col-sm-5 mb-3",children:Object(m.jsxs)("select",{name:"type",value:e.class,onChange:function(t){return c=t.target.value,a=e._id,void E(w.map((function(e){return e._id===a?{_id:a,class:c,teacher:e.teacher}:e})));var c,a},id:"inputState",className:"form-select",children:[Object(m.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),O.length>0?O.map((function(e){return Object(m.jsx)("option",{value:e.classCode,children:e.name},e._id)})):Object(m.jsx)("option",{disabled:!0,children:"No classes yet yet"})]})}),Object(m.jsx)("div",{className:"col-sm-5",children:Object(m.jsxs)("select",{name:"type",value:e.teacher,onChange:function(t){return c=t.target.value,a=e._id,void E(w.map((function(e){return e._id===a?{_id:a,class:e.class,teacher:c}:e})));var c,a},id:"inputState",className:"form-select",children:[Object(m.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),d.length>0?d.map((function(e){return Object(m.jsxs)("option",{value:e.userID,children:[e.name," ",""," ",e.surname]},e._id)})):Object(m.jsx)("option",{disabled:!0,children:"No teachers registered yet"})]})}),Object(m.jsx)("div",{className:"col-sm-2",children:Object(m.jsx)(h.a,{onClick:function(){return function(e){var t=w.filter((function(t){return t._id!==e}));console.log(t),E(t)}(e._id)},children:Object(m.jsx)(u.a,{})})})]},e._id)}))}),Object(m.jsx)("div",{className:"d-flex justify-content-start",children:Object(m.jsxs)("button",{type:"button",onClick:function(){var e=Math.random().toString(16).slice(2);E([].concat(Object(a.a)(w),[{class:"",teacher:"",_id:e}]))},className:"btn ",children:[Object(m.jsx)(b.a,{}),"Add Class"," "]})})]}),Object(m.jsxs)("div",{className:"mb-5",children:[Object(m.jsx)("label",{className:"form-label",children:"Head Teacher"}),Object(m.jsxs)("select",{name:"type",value:p,onChange:function(e){return x(e.target.value)},id:"inputState",className:"form-select",children:[Object(m.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),d.length>0?d.map((function(e){return Object(m.jsxs)("option",{value:null===e||void 0===e?void 0:e.userID,children:[e.name," ",e.surname]},null===e||void 0===e?void 0:e.userID)})):Object(m.jsx)("option",{disabled:!0,children:"No data"})]})]}),Object(m.jsx)("div",{className:"mb-3",children:Object(m.jsxs)("button",{disabled:A,type:"submit",className:"btn blue__btn",children:[A&&Object(m.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),D?"Save Changes":"Add"]})})]})}},1408:function(e,t,c){"use strict";var a=c(712),s=c(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(c(1)),r=(0,a(c(714)).default)(n.createElement("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");t.default=r},1853:function(e,t,c){"use strict";c.r(t);var a=c(770),s=c(716),n=c(1),r=c(1407),l=c(38),i=c(22),o=c(718),d=c(14);t.default=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],u=t[1],j=Object(n.useState)(""),b=Object(s.a)(j,2),h=b[0],m=b[1],f=Object(n.useState)(""),O=Object(s.a)(f,2),v=O[0],p=O[1],x=Object(n.useState)(""),g=Object(s.a)(x,2),N=g[0],y=g[1],C=Object(n.useState)(""),S=Object(s.a)(C,2),_=S[0],A=S[1],D=Object(n.useState)(""),E=Object(s.a)(D,2),w=E[0],z=E[1],I=Object(i.i)().id,M=Object(n.useState)([]),V=Object(s.a)(M,2),k=V[0],q=V[1];return Object(n.useEffect)((function(){l.a.get("/courses/".concat(I)).then((function(e){if(console.log(e.data),e.data.error)return Object(o.c)(e.data.error),0;var t=e.data.docs;z(null===t||void 0===t?void 0:t.classID),u(null===t||void 0===t?void 0:t.name),y(null===t||void 0===t?void 0:t.type),A(null===t||void 0===t?void 0:t.teacher),m(null===t||void 0===t?void 0:t.code),q(null===t||void 0===t?void 0:t.classes)}))}),[I]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"content__container",children:[Object(d.jsx)("h3",{className:"mb-4",children:"Edit Course"}),Object(d.jsx)(r.a,{type:N,settype:y,setteacher:A,teacher:_,onSubmit:function(){p(!0);var e=k.filter((function(e){return""!==e.class||""!==e.teacher})),t=function(e){var t=[];return e.map((function(e){t.find((function(t){return t.class===e.class&&t.teacher===e.teacher}))||t.push(e)})),t}(e);console.log(e),l.a.put("/courses/update/".concat(I),{name:c,code:h,type:N,teacher:_,classID:w,classes:t}).then((function(e){if(e.data.error)return Object(o.c)(e.data.error),0;Object(o.m)("successfully edited"),p(!1),console.log(t)})).catch((function(){Object(o.c)("Something went wrong"),p(!1)}))},name:c,handleSetclasses:function(e){z(e),q([].concat(Object(a.a)(k),[e]))},loading:v,setname:u,classID:w,classesArr:k,setclassesArr:q,code:h,isEdit:!0,setcode:m})]})})}},958:function(e,t,c){"use strict";var a=c(712),s=c(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(c(1)),r=(0,a(c(714)).default)(n.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");t.default=r}}]);
//# sourceMappingURL=147.9b1ed7f4.chunk.js.map