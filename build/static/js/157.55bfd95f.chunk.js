(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[157],{1291:function(e,t,a){"use strict";a(1);var s=a(560),n=a(1064),c=a(1065),r=a(1062),l=a(1063),o=a(1060),i=a(1061),d=a(942),u=a(725),j=a.n(u),b=a(14),m=Object(s.a)({table:{width:"100%"}});t.a=function(e){var t=e.rows,a=e.handleEdit,s=(e.setclassWork,e.examMark),u=e.setexamMark,O=e.classworkMark,v=e.setclassworkMark,x=m();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"mb-5",children:"Continuous Assessment"}),Object(b.jsx)(l.a,{className:"mb-5",component:d.a,children:Object(b.jsxs)(n.a,{className:x.table,"aria-label":"spanning table",children:[Object(b.jsx)(o.a,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(r.a,{align:"left",children:"ID"}),Object(b.jsx)(r.a,{align:"left",colSpan:3,children:"Name of Student"}),Object(b.jsxs)(r.a,{align:"left",children:["Class Work (%)",Object(b.jsx)("input",{className:"form-control",onChange:function(e){return v(e.target.value)},value:O})]}),Object(b.jsxs)(r.a,{align:"left",children:["Exam Score (%)",Object(b.jsx)("input",{className:"form-control",onChange:function(e){return u(e.target.value)},value:s})," "]}),Object(b.jsx)(r.a,{align:"left",children:"Total (100%)"}),Object(b.jsx)(r.a,{align:"left",children:"Position"}),Object(b.jsx)(r.a,{align:"left",children:"Action"})]})}),Object(b.jsx)(c.a,{children:(null===t||void 0===t?void 0:t.length)>0?Object(b.jsx)(b.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(r.a,{children:null===e||void 0===e?void 0:e.userID}),Object(b.jsx)(r.a,{colSpan:3,align:"left",children:null===e||void 0===e?void 0:e.name}),Object(b.jsx)(r.a,{align:"left",children:Object(b.jsx)("input",{readOnly:!0,value:(null===e||void 0===e?void 0:e.classWork)||"-",type:"text",className:"form-control"})}),Object(b.jsx)(r.a,{align:"left",children:Object(b.jsx)("input",{readOnly:!0,value:null===e||void 0===e?void 0:e.exam,type:"text",className:"form-control"})}),Object(b.jsx)(r.a,{align:"left",children:Object(b.jsx)("input",{readOnly:!0,value:(t=null===e||void 0===e?void 0:e.exam,s=null===e||void 0===e?void 0:e.classWork,Number(t||0)+Number(s||0)),type:"text",className:"form-control"})}),Object(b.jsx)(r.a,{align:"left",children:Object(b.jsx)("input",{readOnly:!0,value:null===e||void 0===e?void 0:e.position,type:"text",className:"form-control"})}),Object(b.jsx)(r.a,{align:"left",children:Object(b.jsx)("button",{onClick:function(){return a(null===e||void 0===e?void 0:e.userID)},className:"btn",children:Object(b.jsx)(j.a,{})})})]},null===e||void 0===e?void 0:e.userID);var t,s}))}):Object(b.jsxs)(r.a,{colSpan:10,children:[Object(b.jsx)("strong",{children:"There are no students in this class"})," "]})})]})})]})}},1292:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var s=a(77),n=a(1),c=a.n(n),r=a(560),l=a(822),o=a(1088),i=a(1450),d=a(1808),u=a(1527),j=a(740),b=a.n(j),m=a(1136),O=a(748),v=a(14),x=Object(r.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),h=c.a.forwardRef((function(e,t){return Object(v.jsx)(m.a,Object(s.a)({direction:"up",ref:t},e))}));function f(e){var t=e.open,a=e.setOpen,s=e.name,n=e.userID,c=e.exam,r=e.setexam,j=e.classWork,m=e.setclassWork,f=e.onSubmit,p=e.classID,g=e.loading,k=e.position,N=e.setposition,S=e.classworkMark,C=e.examMark,W=x(),w=Object(O.a)(),D=w.register,I=w.handleSubmit,M=w.errors,y=function(){N(""),m(""),r(""),a(!1)};return Object(v.jsxs)(l.a,{fullScreen:!0,open:t,onClose:y,TransitionComponent:h,children:[Object(v.jsx)(o.a,{color:"transparent",className:W.appBar,children:Object(v.jsxs)(i.a,{children:[Object(v.jsxs)(u.a,{variant:"h6",className:W.title,children:[s," - ",n]}),Object(v.jsx)(d.a,{edge:"start",color:"inherit",onClick:y,"aria-label":"close",children:Object(v.jsx)(b.a,{})})]})}),Object(v.jsxs)("form",{action:"",className:"m-5",children:[Object(v.jsxs)("h3",{className:"mb-5",children:["Set Grades for Class ",p," "]}),Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsxs)("label",{className:"form-label",children:["Set ClassWork (",Number(S||0),"%)"]}),Object(v.jsx)("input",{value:j,ref:D({min:0,max:Number(S||0)+1}),onChange:function(e){return m(e.target.value)},type:"number",className:"form-control col-sm-6",name:"a1"}),M.a1&&Object(v.jsxs)("span",{className:" form-error text-danger mb-2",children:["contributes (",Number(S||0),"%"]})]}),Object(v.jsxs)("div",{className:"mb-5",children:[Object(v.jsxs)("label",{className:"form-label",children:["Exam Mark (",Number(C||0),")%"]}),Object(v.jsx)("input",{value:c,ref:D({min:0,max:Number(C||0)+1}),onChange:function(e){return r(e.target.value)},type:"number",className:"form-control col-6",name:"exams"}),M.exams&&Object(v.jsxs)("span",{className:" form-error text-danger mb-2",children:["contributes (",Number(C||0),")%"]})]}),Object(v.jsxs)("div",{className:"mb-5",children:[Object(v.jsx)("label",{className:"form-label",children:"Position"}),Object(v.jsx)("input",{value:k,onChange:function(e){return N(e.target.value)},type:"number",ref:D({min:0}),className:"form-control col-6",name:"position"}),M.position&&Object(v.jsx)("span",{className:" form-error text-danger mb-2",children:"cannot be negative"})]}),Object(v.jsx)("div",{className:"mb-3",children:Object(v.jsxs)("button",{disabled:g,onClick:I(f),className:"btn blue__btn",children:[g&&Object(v.jsx)("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Submit Changes"]})})]})]})}},1841:function(e,t,a){"use strict";a.r(t);var s=a(735),n=a.n(s),c=a(736),r=a(716),l=a(1),o=a(1291),i=a(1292),d=a(38),u=a(22),j=a(718),b=a(76),m=a(32),O=a(14);t.default=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],v=Object(l.useState)(""),x=Object(r.a)(v,2),h=x[0],f=x[1],p=Object(l.useState)(!1),g=Object(r.a)(p,2),k=g[0],N=g[1],S=Object(l.useState)([]),C=Object(r.a)(S,2),W=C[0],w=C[1],D=Object(b.c)(m.m),I=Object(l.useState)({}),M=Object(r.a)(I,2),y=M[0],E=M[1],A=Object(u.i)(),B=A.id,P=A.classID,T=Object(l.useState)(""),_=Object(r.a)(T,2),F=_[0],J=_[1],G=Object(l.useState)(!1),L=Object(r.a)(G,2),R=L[0],Y=L[1],q=Object(l.useState)(!1),z=Object(r.a)(q,2),H=z[0],K=z[1],Q=Object(l.useState)(""),U=Object(r.a)(Q,2),V=U[0],X=U[1],Z=Object(l.useState)(""),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ae=Object(l.useState)(""),se=Object(r.a)(ae,2),ne=se[0],ce=se[1];Object(l.useEffect)((function(){d.a.get("/classes/classCode/".concat(P)).then((function(e){var t,a;if(!(null===(t=e.data.docs)||void 0===t?void 0:t.sba)||!1===(null===(a=e.data.docs)||void 0===a?void 0:a.sba))return K(!0),Object(j.c)("SBA not set for this class");d.a.get("/sba/".concat(P,"/").concat(B,"/").concat(null===D||void 0===D?void 0:D.currentYear,"/").concat(null===D||void 0===D?void 0:D.currentTerm)).then((function(e){var t,a,n;w(e.data.docs),s(null===(t=e.data.docs)||void 0===t?void 0:t.students),ce(null===(a=e.data.docs)||void 0===a?void 0:a.classWork),X(null===(n=e.data.docs)||void 0===n?void 0:n.exam)}))}))}),[D,B,P]);var re=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),e.next=3,d.a.put("/sba/update/".concat(null===W||void 0===W?void 0:W._id),{exam:V,classWork:ne});case 3:d.a.put("/sba/update/student/".concat(null===W||void 0===W?void 0:W._id,"/").concat(null===y||void 0===y?void 0:y.userID),{classWork:ee,exam:h,userID:null===y||void 0===y?void 0:y.userID,name:null===y||void 0===y?void 0:y.name,position:F}).then((function(e){var t;N(!1),Y(!1),s(null===(t=e.data.doc)||void 0===t?void 0:t.students)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{children:H?Object(O.jsx)("div",{children:"SBA is not set for this class"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.a,{setclassWork:te,rows:a,handleEdit:function(e){if(!ne)return Object(j.c)("Please set  classWork %");if(!V)return Object(j.c)("Please set  exam score %");N(!0);var t=W.students.find((function(t){return t.userID===e}));E(t),f(null===t||void 0===t?void 0:t.exam),te(null===t||void 0===t?void 0:t.classWork),J(null===t||void 0===t?void 0:t.position)},examMark:V,setexamMark:X,classworkMark:ne,setclassworkMark:ce}),Object(O.jsx)(i.a,{name:null===y||void 0===y?void 0:y.name,userID:null===y||void 0===y?void 0:y.userID,exam:h,classworkMark:ne,examMark:V,classID:P,loading:R,setposition:J,position:F,setexam:f,setclassWork:te,classWork:ee,open:k,onSubmit:re,setOpen:N})," "]})})}}}]);
//# sourceMappingURL=157.55bfd95f.chunk.js.map