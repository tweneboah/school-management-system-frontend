(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[145],{1057:function(e,t,c){"use strict";var n=c(712),a=c(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(c(1)),s=(0,n(c(714)).default)(l.createElement("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}),"InsertDriveFile");t.default=s},1899:function(e,t,c){"use strict";c.r(t);var n=c(716),a=c(1),l=c(38),s=c(76),i=c(32),r=c(60),d=c(1057),o=c.n(d),j=c(789),u=c.n(j),b=c(945),m=c(14);t.default=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),c=t[0],d=t[1],j=Object(a.useState)(""),h=Object(n.a)(j,2),v=h[0],O=h[1],x=Object(a.useState)(""),f=Object(n.a)(x,2),p=f[0],N=f[1],g=Object(a.useState)(""),_=Object(n.a)(g,2),C=_[0],y=_[1],E=Object(a.useState)(""),S=Object(n.a)(E,2),w=S[0],P=S[1],V=Object(a.useState)(!1),F=Object(n.a)(V,2),k=F[0],z=F[1],R=Object(a.useState)([]),D=Object(n.a)(R,2),H=D[0],M=D[1],T=Object(s.c)(i.c),I=Object(s.c)(i.l),L=Object(s.c)(r.d),J=Object(s.c)(i.j),$=Object(s.c)(i.g),A=Object(s.c)(i.f),B=Object(s.c)(i.b);console.log(H),Object(a.useEffect)((function(){l.a.get("/fees").then((function(e){M(e.data)}))}),[]);var U=function(){return(null===c||void 0===c?void 0:c.length)<=0?0:(null===c||void 0===c?void 0:c.map((function(e){var t=H.find((function(t){return t.code===(null===e||void 0===e?void 0:e.fees)}));return{val:t?Object.values(t[e.status]).reduce((function(e,t){return Number(e)+Number(t)}),0):0}}))).reduce((function(e,t){return Number(e)+Number(t.val)}),0)};return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:"",children:"Expected Revenue Reports"}),Object(m.jsxs)("form",{className:"content__container row",children:[Object(m.jsxs)("div",{className:"col-sm-6 col-md-4 mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:" col-form-label",children:"Academic Year"}),Object(m.jsx)("div",{className:"",children:Object(m.jsxs)("select",{name:"academic-calendar",className:"form-select",value:v,onChange:function(e){return O(e.target.value)},children:[Object(m.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),I&&I.map((function(e){return Object(m.jsx)("option",{value:e.year,children:null===e||void 0===e?void 0:e.year},e._id)}))]})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-sm-6 col-md-4 mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:" col-form-label",children:"Search By"}),Object(m.jsx)("div",{className:"",children:Object(m.jsxs)("select",{name:"academic-calendar",className:"form-select",value:p,onChange:function(e){return N(e.target.value)},children:[Object(m.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),Object(m.jsx)("option",{value:"classID",children:"Class"}),Object(m.jsx)("option",{value:"section",children:"section"}),Object(m.jsx)("option",{value:"campus",children:"campus"}),Object(m.jsx)("option",{value:"dormitory",children:"dormitory"}),Object(m.jsx)("option",{value:"division",children:"division"})]})})]}),"division"===p&&Object(m.jsxs)("div",{className:"col-sm-6 col-md-4 mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:" col-form-label",children:"Division"}),Object(m.jsx)("div",{className:"",children:Object(m.jsxs)("select",{name:"academic-calendar",className:"form-select",value:C,onChange:function(e){return y(e.target.value)},children:[Object(m.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),A&&A.map((function(e){return Object(m.jsx)("option",{value:e.classCode,children:null===e||void 0===e?void 0:e.classCode},e._id)}))]})})]}),"dormitory"===p&&Object(m.jsxs)("div",{className:"col-sm-6 col-md-4 mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:" col-form-label",children:"Dormitory"}),Object(m.jsx)("div",{className:"",children:Object(m.jsxs)("select",{name:"academic-calendar",className:"form-select",value:C,onChange:function(e){return y(e.target.value)},children:[Object(m.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),$&&$.map((function(e){return Object(m.jsx)("option",{value:e._id,children:null===e||void 0===e?void 0:e.name},e._id)}))]})})]}),"campus"===p&&Object(m.jsxs)("div",{className:"col-sm-6 col-md-4 mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:" col-form-label",children:"Campus"}),Object(m.jsx)("div",{className:"",children:Object(m.jsxs)("select",{name:"academic-calendar",className:"form-select",value:C,onChange:function(e){return y(e.target.value)},children:[Object(m.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),B&&B.map((function(e){return Object(m.jsx)("option",{value:e._id,children:null===e||void 0===e?void 0:e.name},e._id)}))]})})]}),"section"===p&&Object(m.jsxs)("div",{className:"col-sm-6 col-md-4 mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:" col-form-label",children:"Section"}),Object(m.jsx)("div",{className:"",children:Object(m.jsxs)("select",{name:"academic-calendar",className:"form-select",value:C,onChange:function(e){return y(e.target.value)},children:[Object(m.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),J&&J.map((function(e){return Object(m.jsx)("option",{value:e._id,children:null===e||void 0===e?void 0:e.name},e._id)}))]})})]}),"classID"===p&&Object(m.jsxs)("div",{className:"col-sm-6 col-md-4 mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:" col-form-label",children:"Class"}),Object(m.jsx)("div",{className:"",children:Object(m.jsxs)("select",{name:"academic-calendar",className:"form-select",value:C,onChange:function(e){return y(e.target.value)},children:[Object(m.jsx)("option",{defaultValue:!0,hidden:!0,children:"Choose..."}),T&&T.map((function(e){return Object(m.jsx)("option",{value:e.classCode,children:null===e||void 0===e?void 0:e.classCode},e._id)}))]})})]})]}),Object(m.jsx)("div",{className:"mb-3",children:Object(m.jsxs)("button",{onClick:function(){p&&C&&(z(!0),l.a.get("/students/number/".concat(p,"/").concat(C)).then((function(e){z(!1),"classID"===p?P(C):"section"===p?P(J.find((function(e){return e._id===C})).name):"dormitory"===p?P($.find((function(e){return e._id===C})).name):"campus"===p?P(B.find((function(e){return e._id===C})).name):"division"===p&&P(A.find((function(e){return e._id===C})).name),console.log(e),d(e.data.docs)})).catch((function(e){console.log(e),z(!1)})))},disabled:k||!C||!p,type:"submit",className:"btn blue__btn",children:[k&&Object(m.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Search"]})})]}),w&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"mt-5 content__container",children:[Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("h5",{children:Object(m.jsx)("strong",{children:null===L||void 0===L?void 0:L.name})}),Object(m.jsx)("h5",{children:"EXPECTED REVENUE REPORT"}),Object(m.jsxs)("div",{children:[p," - ",w]})]}),Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Term/ Semester"}),Object(m.jsx)("th",{scope:"col",children:"Expected Revenue ($)"})]})}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"1st"}),Object(m.jsx)("td",{children:U()})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"2nd"}),Object(m.jsx)("td",{children:U()})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"3rd"}),Object(m.jsx)("td",{children:U()})]})]})]})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[Object(m.jsxs)("button",{onClick:function(){window.print()},className:"btn blue__btn",children:["Print ",Object(m.jsx)(u.a,{})]}),Object(m.jsxs)("button",{onClick:function(){Object(b.a)({data:[{term:"1st",value:U()},{term:"2nd",value:U()},{term:"3rd",value:U()}],headers:[{key:"term",label:"Term / Semester"},{key:"value",label:"Expected Revenue ($)"}],filename:"Expected Revenue",title:null===L||void 0===L?void 0:L.name,subheading:" ".concat(p," - ").concat(w)})},className:"btn blue__btn ml-3",children:["Save ",Object(m.jsx)(o.a,{})]})]})]})]})}},789:function(e,t,c){"use strict";var n=c(712),a=c(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(c(1)),s=(0,n(c(714)).default)(l.createElement("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}),"Print");t.default=s},945:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(1117),a=function(e){var t=e.data,c=e.headers,a=e.filename,l=e.title,s=e.subheading,i=e.date,r=new n.a({orientation:"l",unit:"pt",format:"a4"}),d=50,o={width:841.89-d,height:595.28-d};r.setFontSize(8),l&&r.text(l,200,29),s&&r.text(s,200,30),i&&r.text(i,200,32);var j=[];c.forEach((function(e,t){if(e.hasOwnProperty("xPos"))r.text(e.label,e.xPos,d),j.push(e.xPos);else{var n=d+t*(o.width/c.length);r.text(e.label,0===t?n:n+15,50),j.push(0===t?n:n+15)}})),r.line(d,53.5,o.width,53.5);var u=65;t.forEach((function(e,t){var n=[];c.forEach((function(t,c){var a=r.splitTextToSize(String(e[t.key]),j[c]-j[0!==c&&c-1]),l=a.length*r.getLineHeight();n.push(l),r.text(a,j[c],u)})),(u=u+15+Math.max.apply(Math,n.concat([30])))>o.height&&(r.addPage(),u=65)})),r.save(a)}}}]);
//# sourceMappingURL=145.83820d67.chunk.js.map