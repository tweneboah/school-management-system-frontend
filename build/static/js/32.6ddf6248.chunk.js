(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[32],{1829:function(e,s,t){"use strict";t.r(s);var n=t(716),c=t(1),a=t(922),r=t(76),i=t(60),o=t(38),d=t(718),l=t(14);s.default=function(){var e=Object(c.useState)(""),s=Object(n.a)(e,2),t=s[0],j=s[1],b=Object(c.useState)(""),m=Object(n.a)(b,2),u=m[0],h=m[1],O=[{id:"admin",name:"admin"}],p=Object(r.c)(i.d),x=Object(c.useState)(""),v=Object(n.a)(x,2),f=v[0],N=v[1];return Object(l.jsx)("div",{children:Object(l.jsx)(a.a,{message:t,setmessage:j,onSend:function(e){e.preventDefault(),t&&u&&(N(!0),o.a.post("/chats/user",{message:t,userID:u,sender:null===p||void 0===p?void 0:p.userID}).then((function(e){if(N(!1),e.data.error)return Object(d.c)(e.data.error),0;Object(d.m)("message send"),j("")})))},recipientsOptions:O,recipient:u,sendto:"School Admin",loading:f,searchOptions:function(){return O.map((function(e){return Object(l.jsxs)("option",{value:e.id,children:[" ",e.name," "]},e.id)}))},setrecipient:h,sender:null===p||void 0===p?void 0:p.id})})}},922:function(e,s,t){"use strict";t(1);var n=t(14);s.a=function(e){var s=e.message,t=e.setmessage,c=e.onSend,a=e.recipient,r=e.setrecipient,i=e.sender,o=e.sendto,d=e.searchOptions,l=e.loading,j=e.error;return Object(n.jsxs)("form",{action:"",className:" content__container form__sender",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("h3",{children:["Send Message to ",o]})}),Object(n.jsxs)("div",{className:"row mb-2 px-3",children:[Object(n.jsx)("label",{className:"col-sm-2",htmlFor:"",children:"Recipient:"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsxs)("select",{value:a,onChange:function(e){return r(e.target.value)},id:"inputState",className:"form-select",children:[Object(n.jsx)("option",{defaultChecked:!0,hidden:!0,children:"Choose..."}),d?d():Object(n.jsx)("option",{disabled:!0,children:"No options"})]})})]}),Object(n.jsxs)("div",{className:"row mb-2 px-3",children:[Object(n.jsx)("label",{className:"col-sm-2",htmlFor:"",children:"Sender:"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{className:"form-control",value:i,type:"text",readOnly:!0})})]}),Object(n.jsxs)("div",{className:"mb-2 row",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("textarea",{value:s,onChange:function(e){return t(e.target.value)},className:"form-control",name:"",rows:"10",required:!0,placeholder:"Type here"})}),j&&Object(n.jsx)("div",{className:"text-danger text-center mb-2",children:j}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)("button",{disabled:l,onClick:c,className:"btn blue__btn w-100",children:[l&&Object(n.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Send"]})})]})]})}}}]);
//# sourceMappingURL=32.6ddf6248.chunk.js.map