(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[31],{1833:function(e,t,n){"use strict";n.r(t);var a=n(716),c=n(1),l=n(773),i=n(946),s=n(38),o=n(14);t.default=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],d=t[1],r=Object(c.useState)(""),j=Object(a.a)(r,2),b=j[0],u=j[1],h=Object(c.useState)([]),m=Object(a.a)(h,2),v=m[0],O=m[1],x=Object(c.useState)([]),p=Object(a.a)(x,2),f=p[0],g=p[1];Object(c.useEffect)((function(){s.a.get("/notification").then((function(e){O(e.data),g(e.data)}))}),[]);var N=[{type:"text",value:b,label:"Search by name",name:"title",onChange:u},{type:"date",label:"Search by date",value:n,name:"date",onChange:d}];return Object(o.jsxs)("div",{className:" notices",children:[Object(o.jsxs)("div",{className:"mb-5 content__container",children:[Object(o.jsx)("h3",{children:"Notice Board"}),Object(o.jsx)(l.a,{inputFields:N,handleReset:function(e){e.preventDefault(),O(f)},handleSearch:function(e){if(e.preventDefault(),b||n){var t=f.filter((function(e){return e.title.toLowerCase().includes(b.toLowerCase())||e.description.toLowerCase().includes(b.toLowerCase())||new Date(e.createdAt).toISOString().slice(0,10)===n}));O(t)}else O(f)}})]}),Object(o.jsx)("div",{className:"notices__container content__container",children:v.length>0?v.map((function(e){return Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)(i.a,{description:e.description,date:e.date,title:e.title,id:e._id,isReset:!0,createdAt:null===e||void 0===e?void 0:e.createdAt,createdBy:e.createdBy}),Object(o.jsx)("hr",{})]},e._id)})):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("h6",{className:"text-danger text-center",children:"There are no notice"})})})]})}},773:function(e,t,n){"use strict";n(1);var a=n(14);t.a=function(e){var t=e.inputFields,n=e.title,c=e.handleSearch,l=e.isReset,i=e.handleReset,s=e.noActions;return Object(a.jsxs)("form",{className:"mb-5 content__container",children:[Object(a.jsx)("h3",{className:"mb-3",children:n||""}),Object(a.jsxs)("div",{className:"row g-3 mb-3",children:[t&&t.map((function(e){return Object(a.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(a.jsx)("label",{htmlFor:"",children:e.label}),"select"===e.type?Object(a.jsxs)("select",{value:null===e||void 0===e?void 0:e.value,name:null===e||void 0===e?void 0:e.name,onChange:function(t){return null===e||void 0===e?void 0:e.onChange(t.target.value)},className:"form-select form-select-sm py-2",children:[Object(a.jsx)("option",{hidden:!0,defaultValue:!0,children:"Select"}),(null===e||void 0===e?void 0:e.options.length)>0?null===e||void 0===e?void 0:e.options.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name},e.id)})):Object(a.jsx)("option",{disabled:!0,children:"No data "})]}):Object(a.jsx)("input",{type:e.type,value:e.value,name:null===e||void 0===e?void 0:e.name,className:"form-control py-3",placeholder:"Search by ".concat(e.name),onChange:function(t){return null===e||void 0===e?void 0:e.onChange(t.target.value)}})]},null===e||void 0===e?void 0:e.name)})),!s&&Object(a.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4 d-flex mt-5",children:[Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsx)("button",{className:"btn orange__btn ",onClick:c,children:"Search"})}),!l&&Object(a.jsx)("div",{className:" mb-3 ml-3",children:Object(a.jsx)("button",{onClick:i,className:"btn blue__btn ",children:"Reset"})})]})]})]})}},946:function(e,t,n){"use strict";n(1);var a=n(721),c=n.n(a),l=n(1967),i=n(1807),s=n(1129),o=n.n(s),d=n(77),r=n(750),j=n(101),b=n(796),u=n(847),h=n(848),m=n(744),v=n.n(m),O=n(1522),x=n(745),p=n(14),f=Object(j.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,n=e.classes,a=e.onClose,c=Object(r.a)(e,["children","classes","onClose"]);return Object(p.jsxs)(u.a,Object(d.a)(Object(d.a)({disableTypography:!0,className:n.root},c),{},{children:[Object(p.jsx)(O.a,{variant:"h6",children:t}),a?Object(p.jsx)(i.a,{"aria-label":"close",className:n.closeButton,onClick:a,children:Object(p.jsx)(v.a,{})}):null]}))})),g=Object(j.a)((function(e){return{root:{padding:e.spacing(2)}}}))(h.a);function N(e){var t=e.open,n=e.setOpen,a=e.handleDelete,l=e.editData,i=Object(x.a)(),s=i.register,o=i.handleSubmit,d=i.errors,r=function(){n(!1)};return Object(p.jsx)("div",{children:Object(p.jsxs)(b.a,{onClose:r,maxWidth:"sm",fullWidth:!0,"aria-labelledby":"customized-dialog-title",open:t,children:[Object(p.jsx)(f,{id:"customized-dialog-title",onClose:r,children:"Edit Notice"}),Object(p.jsx)(g,{dividers:!0,children:Object(p.jsxs)("form",{className:"row",action:"",children:[Object(p.jsxs)("div",{className:"col-md-6 mb-5",children:[Object(p.jsx)("label",{className:"form-label",children:"Title"}),Object(p.jsx)("input",{type:"text",ref:s({required:!0}),value:null===l||void 0===l?void 0:l.title,onChange:function(e){return null===l||void 0===l?void 0:l.settitle(e.target.value)},className:"form-control py-4",name:"title"}),d.title&&Object(p.jsx)("div",{className:"text-danger",children:"This field is required"})]}),Object(p.jsxs)("div",{className:"col-md-6 mb-5",children:[Object(p.jsx)("label",{className:"form-label",children:"Date"}),Object(p.jsx)("input",{type:"date",value:c()(null===l||void 0===l?void 0:l.date).format("YYYY-MM-D"),ref:s({required:!0}),onChange:function(e){return null===l||void 0===l?void 0:l.setdate(e.target.value)},className:"form-control py-4",name:"date"}),d.date&&Object(p.jsx)("div",{className:"text-danger",children:"This field is required"})]}),Object(p.jsxs)("div",{className:"col-md-12 mb-5",children:[Object(p.jsx)("label",{className:"form-label",children:"Description"}),Object(p.jsx)("textarea",{value:null===l||void 0===l?void 0:l.description,onChange:function(e){return null===l||void 0===l?void 0:l.setdescription(e.target.value)},rows:5,className:"form-control",name:"description"})]}),Object(p.jsxs)("div",{className:"col-md-6 mb-5",children:[Object(p.jsx)("label",{className:"form-label",children:"Created By"}),Object(p.jsx)("input",{type:"text",ref:s({required:!0}),value:null===l||void 0===l?void 0:l.createdby,onChange:function(e){return null===l||void 0===l?void 0:l.setcreatedby(e.target.value)},className:"form-control  py-4",name:"createdby"})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("button",{disabled:null===l||void 0===l?void 0:l.loading,onClick:o(null===l||void 0===l?void 0:l.handleCreate),className:"btn blue__btn",children:"Save Changes"})}),Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("button",{onClick:a,className:"btn btn-danger",children:"Delete"})})]})]})})]})})}t.a=function(e){var t=e.description,n=e.createdBy,a=e.date,s=e.title,d=e.createdAt,r=e.isEdit,j=e.id,b=e.open,u=e.setOpen,h=e.editData,m=e.handleDelete,v=["#2ad7c5","#ffa201","#f939a1"],O=v[Math.floor(Math.random()*v.length)];return Object(p.jsxs)("div",{className:"notice d-flex justify-content-between align-items-center",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:Object(p.jsx)("strong",{children:s})}),Object(p.jsx)(l.a,{style:{backgroundColor:"".concat(O)},className:"chip__date mb-2",label:c()(a).format(" Do MMMM, YYYY")}),Object(p.jsx)("p",{children:Object(p.jsxs)("strong",{children:[" ",t," "]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("h6",{children:[n," /"," ",Object(p.jsxs)("span",{className:"text-muted",children:[" ",c()(d).fromNow()]})]})})]}),r&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(i.a,{onClick:function(){return u(!0),null===h||void 0===h||h.setdate(a),null===h||void 0===h||h.settitle(s),null===h||void 0===h||h.setcreatedby(n),null===h||void 0===h||h.setdescription(t),void(null===h||void 0===h||h.seteditID(j))},children:Object(p.jsx)(o.a,{})})}),Object(p.jsx)(N,{editData:h,open:b,handleDelete:m,setOpen:u})]})]})}}}]);
//# sourceMappingURL=31.adcf4b15.chunk.js.map