(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[143],{1898:function(e,t,c){"use strict";c.r(t);var n=c(716),s=c(1),a=c(76),l=c(60),r=c(721),i=c.n(r),o=c(945),d=c.n(o),j=c(784),b=c.n(j),h=c(944),m=c(14),O=i()().month(),u=i()().year(),x=i()("".concat(u,"-").concat(O+1,"-01")).format("YYYY-MM-DD");t.default=function(){var e=Object(a.c)(l.d),t=Object(s.useState)(x),c=Object(n.a)(t,2),r=c[0],o=c[1],j=Object(s.useState)(i()().format("YYYY-MM-DD")),O=Object(n.a)(j,2),u=O[0],v=O[1],f=Object(s.useState)(""),p=Object(n.a)(f,2),M=p[0],N=p[1],Y=[{name:"Revenue",id:""},{name:"Fee Payments",id:"0"},{name:"Other Income",id:"0"},{name:"Expenses",id:"-"},{name:"Net income",id:"0"}];return Object(m.jsxs)("div",{children:[Object(m.jsxs)("form",{className:"content__container row",children:[Object(m.jsxs)("div",{className:"col-sm-6 col-md-4 mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:" col-form-label",children:"From"}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)("input",{value:r,onChange:function(e){return o(e.target.value)},type:"date",className:"form-control",name:"from"})})]}),Object(m.jsxs)("div",{className:"col-sm-6 col-md-4 mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:" col-form-label",children:"To"}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)("input",{value:u,onChange:function(e){return v(e.target.value)},type:"date",className:"form-control",name:"to"})})]}),Object(m.jsx)("div",{className:"mb-3",children:Object(m.jsxs)("button",{onClick:function(){N(!1),console.log("searching...")},disabled:M,type:"submit",className:"btn blue__btn",children:[M&&Object(m.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Search"]})})]}),Object(m.jsxs)("div",{className:"content__container mt-5",children:[Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("h5",{children:Object(m.jsx)("strong",{children:null===e||void 0===e?void 0:e.name})}),Object(m.jsx)("h5",{children:"INCOME STATEMENT"}),Object(m.jsxs)("div",{children:["From ",i()(r).format("DD MMMM YYYY")," - To"," ",i()(u).format("DD MMMM YYYY")]})]}),Object(m.jsxs)("table",{className:"table table-borderless",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col"}),Object(m.jsx)("th",{scope:"col",children:"Amount ($)"})]})}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:Object(m.jsx)("strong",{children:"Revenues"})}),Object(m.jsx)("th",{scope:"col"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:"pl-5",children:"Fee Payment"}),Object(m.jsx)("td",{children:"0"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:"pl-5",children:"Others income"}),Object(m.jsx)("td",{children:"0"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("strong",{children:"Expenses"})}),Object(m.jsx)("td",{})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("strong",{children:"Net Income"})}),Object(m.jsx)("td",{children:"0"})]})]})]})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[Object(m.jsxs)("button",{onClick:function(){window.print()},className:"btn blue__btn",children:["Print ",Object(m.jsx)(b.a,{})]}),Object(m.jsxs)("button",{onClick:function(){Object(h.a)({data:Y,headers:[{key:"name",label:""},{key:"id",label:""}],filename:"Itemized",title:null===e||void 0===e?void 0:e.name,subheading:"INCOME STATEMENT REPORT",date:"  From ".concat(i()(r).format("DD MMMM YYYY"),' - To{" "}\n    ').concat(i()(u).format("DD MMMM YYYY"))})},className:"btn blue__btn ml-3",children:["Save ",Object(m.jsx)(d.a,{})]})]})]})}},784:function(e,t,c){"use strict";var n=c(712),s=c(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(c(1)),l=(0,n(c(714)).default)(a.createElement("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}),"Print");t.default=l},944:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(1148),s=function(e){var t=e.data,c=e.headers,s=e.filename,a=e.title,l=e.subheading,r=e.date,i=new n.a({orientation:"l",unit:"pt",format:"a4"}),o=50,d={width:841.89-o,height:595.28-o};i.setFontSize(8),a&&i.text(a,200,29),l&&i.text(l,200,30),r&&i.text(r,200,32);var j=[];c.forEach((function(e,t){if(e.hasOwnProperty("xPos"))i.text(e.label,e.xPos,o),j.push(e.xPos);else{var n=o+t*(d.width/c.length);i.text(e.label,0===t?n:n+15,50),j.push(0===t?n:n+15)}})),i.line(o,53.5,d.width,53.5);var b=65;t.forEach((function(e,t){var n=[];c.forEach((function(t,c){var s=i.splitTextToSize(String(e[t.key]),j[c]-j[0!==c&&c-1]),a=s.length*i.getLineHeight();n.push(a),i.text(s,j[c],b)})),(b=b+15+Math.max.apply(Math,n.concat([30])))>d.height&&(i.addPage(),b=65)})),i.save(s)}},945:function(e,t,c){"use strict";var n=c(712),s=c(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(c(1)),l=(0,n(c(714)).default)(a.createElement("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}),"InsertDriveFile");t.default=l}}]);
//# sourceMappingURL=143.45454226.chunk.js.map