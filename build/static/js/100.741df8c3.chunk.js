(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[100],{1876:function(e,t,c){"use strict";c.r(t);var n=c(737),r=c.n(n),a=c(738),s=c(719),l=c(1),i=c(79),o=c(38),d=c(721),j=c(919),u=c(32),b=c(14);t.default=function(){var e=Object(i.c)(u.m),t=Object(i.c)(u.n),c=Object(l.useState)(t.currentTerm),n=Object(s.a)(c,2),h=n[0],O=n[1],x=Object(l.useState)(t.currentYear),m=Object(s.a)(x,2),f=m[0],v=m[1],p=Object(l.useState)(""),N=Object(s.a)(p,2),g=N[0],S=N[1],k=Object(l.useState)(""),C=Object(s.a)(k,2),P=C[0],y=C[1],w=Object(l.useState)(!1),_=Object(s.a)(w,2),E=_[0],T=_[1],D=Object(l.useState)({}),F=Object(s.a)(D,2),W=F[0],I=F[1],A=Object(l.useState)([]),R=Object(s.a)(A,2),V=R[0],Y=R[1],B=Object(l.useState)(!1),G=Object(s.a)(B,2),J=G[0],M=G[1],U=Object(l.useState)({}),q=Object(s.a)(U,2),z=q[0],H=q[1];Object(l.useEffect)((function(){o.a.get("/school").then((function(e){I(e.data)}))}),[]);var K=function(e,t){return t||e?Number(e||0)+Number(t||0):"-"},L=function(e,t){if(!e&&!t)return"-";var c=K(e,t);return c>=75&&c<=100?"A1":c>=70&&c<=74?"B2":c>=65&&c<=69?"B3":c>=60&&c<=64?"C4":c>=55&&c<=59?"C5":c>=50&&c<=54?"C6":c>=45&&c<=49?"D7":c>=40&&c<=44?"E8":c>=0&&c<=39?"F9":null},Q=function(e,t){if(!e&&!t)return"-";var c=K(e,t);return(c=Number(c))>75&&c<=100?"Excellent":c>=70&&c<=74?"Vert good":c>=65&&c<=69?"Good":c>=60&&c<=64||c>=55&&c<=59||c>=50&&c<=54?"Credit":c>=45&&c<=49||c>=40&&c<=44?"Pass":c>=0&&c<=39?"Failure":null};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Academic Transcript"}),Object(b.jsxs)("form",{action:"",className:"row content__container",children:[Object(b.jsxs)("div",{className:"mb-3 col-sm-4",children:[Object(b.jsx)("label",{className:"form-label",children:"Term"}),Object(b.jsxs)("select",{name:"type",value:h,onChange:function(e){return O(e.target.value)},id:"inputState",className:"form-select",children:[Object(b.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),Object(b.jsx)("option",{value:"1",children:"1st"}),Object(b.jsx)("option",{value:"2",children:"2rd"}),Object(b.jsx)("option",{value:"3",children:"3rd"})]})]}),Object(b.jsxs)("div",{className:"mb-3 col-sm-4",children:[Object(b.jsx)("label",{className:"form-label",children:"Year"}),Object(b.jsxs)("select",{name:"type",value:f,onChange:function(e){return v(e.target.value)},id:"inputState",className:"form-select",children:[Object(b.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),e.length>0?e.map((function(e){return Object(b.jsx)("option",{value:e.year,children:e.year},e._id)})):Object(b.jsx)("option",{disabled:!0,children:"No data yet"})]})]}),Object(b.jsxs)("div",{className:"mb-3 col-sm-4",children:[Object(b.jsx)("label",{className:"form-label",children:"Student ID"}),Object(b.jsx)("input",{value:g,onChange:function(e){return S(e.target.value)},className:"form-control"})]}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsxs)("button",{onClick:function(e){if(M(!1),e.preventDefault(),!g)return Object(d.c)("select student");y(!0),o.a.get("sba/student/".concat(g,"/").concat(f,"/").concat(h)).then(function(){var e=Object(a.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/students/student/".concat(g));case 2:if(c=e.sent,console.log(c),y(!1),T(!0),!c.data.error){e.next=8;break}return e.abrupt("return",M(!0));case 8:if(H(c.data.student),y(!1),!t.data.error){e.next=12;break}return e.abrupt("return",Object(d.c)("Student does not exist"));case 12:Y(t.data.docs);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},disabled:P,type:"submit",className:"btn blue__btn",children:[P&&Object(b.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Search"]})})]}),E&&Object(b.jsxs)("div",{className:"content__container mt-4",id:"section-to-print",children:[Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h5",{children:Object(b.jsx)("strong",{children:null===W||void 0===W?void 0:W.fullName})}),Object(b.jsx)("h6",{children:null===W||void 0===W?void 0:W.motto}),Object(b.jsxs)("h5",{className:"my-4",children:["STUDENT TRANSCRIPT FOR ",null===z||void 0===z?void 0:z.userID]})]}),J?Object(b.jsxs)("div",{children:[" ",Object(b.jsx)("h3",{className:"text-center text-danger",children:"Student Not found"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsxs)("h6",{children:[null===z||void 0===z?void 0:z.name," ",null===z||void 0===z?void 0:z.surname]}),Object(b.jsxs)("div",{children:["Term ",h," - Year ",f]})]}),Object(b.jsxs)("table",{className:"table table-bordered",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Subject"}),Object(b.jsx)("th",{scope:"col",children:"Course Work"}),Object(b.jsx)("th",{scope:"col",children:"Exam"}),Object(b.jsx)("th",{scope:"col",children:"Total"}),Object(b.jsx)("th",{scope:"col",children:"Grade"}),Object(b.jsx)("th",{scope:"col",children:"Interpretation"}),Object(b.jsx)("th",{scope:"col",children:"Position"})]})}),Object(b.jsx)("tbody",{children:V.length>0?V.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:null===e||void 0===e?void 0:e.course}),Object(b.jsx)("td",{children:e.classWorkPercentage||"-"}),Object(b.jsx)("td",{children:(null===e||void 0===e?void 0:e.examPercentage)||"-"}),Object(b.jsx)("td",{children:K(null===e||void 0===e?void 0:e.examPercentage,e.classWorkPercentage)}),Object(b.jsx)("td",{children:L(null===e||void 0===e?void 0:e.examPercentage,e.classWorkPercentage)}),Object(b.jsx)("td",{children:Q(null===e||void 0===e?void 0:e.examPercentage,e.classWorkPercentage)}),Object(b.jsx)("td",{children:e.position||"-"})]})})):Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:3,className:"text-center",children:"No Data"})})})]}),Object(b.jsxs)("div",{className:"my-3 text-center",children:[Object(b.jsx)("button",{onClick:function(){window.print()},className:"btn blue__btn mr-2",children:"Print"}),Object(b.jsx)(j.a,{data:V,columns:[{id:"subject",name:"Subject"},{id:"term",name:"Term"},{id:"mark",name:"Mark"}],btn:"save"})]})]})]})]})}},737:function(e,t,c){e.exports=c(424)},738:function(e,t,c){"use strict";function n(e,t,c,n,r,a,s){try{var l=e[a](s),i=l.value}catch(o){return void c(o)}l.done?t(i):Promise.resolve(i).then(n,r)}function r(e){return function(){var t=this,c=arguments;return new Promise((function(r,a){var s=e.apply(t,c);function l(e){n(s,r,a,l,i,"next",e)}function i(e){n(s,r,a,l,i,"throw",e)}l(void 0)}))}}c.d(t,"a",(function(){return r}))},919:function(e,t,c){"use strict";c(1);var n=c(929),r=c.n(n),a=(c(725),c(14)),s=r.a.ExcelFile,l=r.a.ExcelFile.ExcelSheet,i=r.a.ExcelFile.ExcelColumn;t.a=function(e){var t=e.data,c=e.btn,n=e.name,r=e.columns;return Object(a.jsx)(s,{element:Object(a.jsx)("button",{className:"btn blue__btn",children:c||"Download"}),children:Object(a.jsx)(l,{data:t,name:n||"data",children:r.map((function(e){return Object(a.jsx)(i,{label:e.name,value:e.id},e.id)}))})})}},930:function(e,t){},931:function(e,t){},932:function(e,t){},933:function(e,t){},934:function(e,t){},935:function(e,t){},936:function(e,t){},937:function(e,t){},938:function(e,t){},939:function(e,t){}}]);
//# sourceMappingURL=100.741df8c3.chunk.js.map