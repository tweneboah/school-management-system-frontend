(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[125],{1090:function(e,t,n){"use strict";var a=n(712),c=n(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(n(1)),o=(0,a(n(714)).default)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.default=o},1108:function(e,t,n){"use strict";n.d(t,"a",(function(){return W}));var a=n(716),c=n(1),i=n.n(c),o=n(560),r=n(953),l=n(954),d=n(951),s=n(952),u=n(1915),h=n(950),b=n(941),m=n(1109),j=n(1966),v=n(22),f=n(949),p=n(2),O=n(19),x=(n(36),n(37)),g=n(760),y=Object(g.a)(c.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),k=n(101),C=n(1923),S=n(188),w=c.forwardRef((function(e,t){var n=e.active,a=void 0!==n&&n,i=e.children,o=e.classes,r=e.className,l=e.direction,d=void 0===l?"asc":l,s=e.hideSortIcon,u=void 0!==s&&s,h=e.IconComponent,b=void 0===h?y:h,m=Object(O.a)(e,["active","children","classes","className","direction","hideSortIcon","IconComponent"]);return c.createElement(C.a,Object(p.a)({className:Object(x.a)(o.root,r,a&&o.active),component:"span",disableRipple:!0,ref:t},m),i,u&&!a?null:c.createElement(b,{className:Object(x.a)(o.icon,o["iconDirection".concat(Object(S.a)(d))])}))})),N=Object(k.a)((function(e){return{root:{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,"& $icon":{opacity:.5}},"&$active":{color:e.palette.text.primary,"&& $icon":{opacity:1,color:e.palette.text.secondary}}},active:{},icon:{fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},iconDirectionDesc:{transform:"rotate(0deg)"},iconDirectionAsc:{transform:"rotate(180deg)"}}}),{name:"MuiTableSortLabel"})(w),D=n(14);var I=function(e){var t=e.classes,n=e.onSelectAllClick,a=e.order,c=e.orderBy,i=e.numSelected,o=e.headCells,r=e.noActions,l=e.rowCount,s=e.onRequestSort;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(f.a,{children:Object(D.jsxs)(h.a,{children:[Object(D.jsx)(d.a,{padding:"checkbox",children:Object(D.jsx)(m.a,{indeterminate:i>0&&i<l,checked:l>0&&i===l,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),o.map((function(e){return Object(D.jsx)(d.a,{align:"left",padding:"none",sortDirection:c===e.id&&a,children:Object(D.jsxs)(N,{active:c===e.id,direction:c===e.id?a:"asc",onClick:(n=e.id,function(e){s(e,n)}),children:[e.label,c===e.id?Object(D.jsx)("span",{className:t.visuallyHidden,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})},e.id);var n})),!r&&Object(D.jsx)(d.a,{padding:"checkbox",children:"Actions"})]})})})},B=n(718),P=n(1807),E=n(1785),A=n(1968),M=n(1090),L=n.n(M),z=n(76),F=n(60);function R(e){var t=e.id,n=e.route,c=e.history,o=e.isWithdraw,r=e.handleDelete,l=e.handleWithdraw,d=i.a.useState(null),s=Object(a.a)(d,2),u=s[0],h=s[1],b=Object(z.c)(F.d);return Object(D.jsxs)("div",{children:[Object(D.jsx)(P.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},children:Object(D.jsx)(L.a,{})}),Object(D.jsxs)(E.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:function(){h(null)},children:[Object(D.jsx)(A.a,{onClick:function(){return c.push("/".concat(n,"/").concat(t))},children:"View"}),"admin"===(null===b||void 0===b?void 0:b.role)&&Object(D.jsx)(A.a,{onClick:function(){return c.push("/".concat(n,"/edit/").concat(t))},children:"Edit"}),"admin"===(null===b||void 0===b?void 0:b.role)&&Object(D.jsx)(A.a,{onClick:function(){l(t)},children:o?"UnWithdraw":"Withdraw"}),"admin"===(null===b||void 0===b?void 0:b.role)&&Object(D.jsx)(A.a,{onClick:function(){r(t)},children:"Delete"})]})]})}function T(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function H(e,t){return"desc"===e?function(e,n){return T(e,n,t)}:function(e,n){return-T(e,n,t)}}function _(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var G=Object(o.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function W(e){var t,n,c=e.students,o=e.headCells,f=e.route,p=e.handleWithdraw,O=e.handleDelete,x=e.noData,g=e.noActions,y=G(),k=i.a.useState("asc"),C=Object(a.a)(k,2),S=C[0],w=C[1],N=i.a.useState("name"),P=Object(a.a)(N,2),E=P[0],A=P[1],M=i.a.useState([]),L=Object(a.a)(M,2),z=L[0],F=L[1],T=i.a.useState(0),W=Object(a.a)(T,2),V=W[0],J=W[1],U=i.a.useState(5),$=Object(a.a)(U,2),q=$[0],Z=$[1],K=Object(v.g)(),Q=q-Math.min(q,(null===c||void 0===c?void 0:c.length)-V*q);return console.log(c),Object(D.jsx)("div",{className:y.root,children:Object(D.jsxs)(b.a,{className:y.paper,children:[Object(D.jsx)(s.a,{children:Object(D.jsxs)(r.a,{className:y.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table",children:[Object(D.jsx)(I,{classes:y,headCells:o,numSelected:z.length,order:S,orderBy:E,noActions:g,onSelectAllClick:function(e){if(e.target.checked){var t=c.map((function(e){return e.name}));F(t)}else F([])},onRequestSort:function(e,t){w(E===t&&"asc"===S?"desc":"asc"),A(t)},rowCount:null===c||void 0===c?void 0:c.length}),(null===c||void 0===c?void 0:c.length)>0?Object(D.jsxs)(l.a,{children:[null===(t=_(c,H(S,E)))||void 0===t||null===(n=t.slice(V*q,V*q+q))||void 0===n?void 0:n.map((function(e,t){var n,a=(n=null===e||void 0===e?void 0:e.userID,-1!==z.indexOf(n)),c="enhanced-table-checkbox-".concat(t);return Object(D.jsxs)(h.a,{hover:!0,role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(D.jsx)(d.a,{padding:"checkbox",children:Object(D.jsx)(m.a,{onClick:function(t){return function(e,t){var n=z.indexOf(t),a=[];-1===n?a=a.concat(z,t):0===n?a=a.concat(z.slice(1)):n===z.length-1?a=a.concat(z.slice(0,-1)):n>0&&(a=a.concat(z.slice(0,n),z.slice(n+1))),F(a)}(0,null===e||void 0===e?void 0:e.userID)},checked:a,inputProps:{"aria-labelledby":c}})}),Object(D.jsx)(d.a,{align:"left",id:c,children:(null===e||void 0===e?void 0:e.userID)||"-"}),Object(D.jsx)(d.a,{align:"left",children:Object(D.jsx)(j.a,{src:"".concat(Object(B.g)(null===e||void 0===e?void 0:e.profileUrl)),alt:Object(B.h)(null===e||void 0===e?void 0:e.name)})}),Object(D.jsx)(d.a,{align:"left",children:null===e||void 0===e?void 0:e.name}),Object(D.jsxs)(d.a,{align:"left",children:[" ",(null===e||void 0===e?void 0:e.middleName)||"-"]}),Object(D.jsx)(d.a,{align:"left",children:(null===e||void 0===e?void 0:e.surname)||"-"}),Object(D.jsx)(d.a,{align:"left",children:(null===e||void 0===e?void 0:e.status)||(null===e||void 0===e?void 0:e.position)}),"student"===(null===e||void 0===e?void 0:e.role)&&Object(D.jsx)(d.a,{align:"left",children:(null===e||void 0===e?void 0:e.classID)||"-"}),Object(D.jsx)(d.a,{align:"left",children:(null===e||void 0===e?void 0:e.gender)||"-"}),!g&&Object(D.jsx)(d.a,{align:"left",children:Object(D.jsx)(R,{id:null===e||void 0===e?void 0:e.userID,route:f,isWithdraw:null===e||void 0===e?void 0:e.withdraw,history:K,handleWithdraw:p,handleDelete:O})})]},e.userID)})),Q>0&&Object(D.jsx)(h.a,{style:{height:53*Q},children:Object(D.jsx)(d.a,{colSpan:6})})]}):Object(D.jsxs)(l.a,{children:[Object(D.jsx)(h.a,{children:Object(D.jsx)(d.a,{className:"text-danger text-center",colSpan:o.length+2,children:x||"NO DATA"})}),Q>0&&Object(D.jsx)(h.a,{style:{height:53*Q},children:Object(D.jsx)(d.a,{colSpan:6})})]})]})}),(null===c||void 0===c?void 0:c.length)>5&&Object(D.jsx)(u.a,{rowsPerPageOptions:[5,10,25],component:"div",count:c.length,rowsPerPage:q,page:V,onChangePage:function(e,t){J(t)},onChangeRowsPerPage:function(e){Z(parseInt(e.target.value,10)),J(0)}})]})})}},1109:function(e,t,n){"use strict";var a=n(2),c=n(19),i=n(1),o=(n(36),n(37)),r=n(104),l=n(785),d=n(928),s=n(101),u=n(1807),h=i.forwardRef((function(e,t){var n=e.autoFocus,s=e.checked,h=e.checkedIcon,b=e.classes,m=e.className,j=e.defaultChecked,v=e.disabled,f=e.icon,p=e.id,O=e.inputProps,x=e.inputRef,g=e.name,y=e.onBlur,k=e.onChange,C=e.onFocus,S=e.readOnly,w=e.required,N=e.tabIndex,D=e.type,I=e.value,B=Object(c.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),P=Object(l.a)({controlled:s,default:Boolean(j),name:"SwitchBase",state:"checked"}),E=Object(r.a)(P,2),A=E[0],M=E[1],L=Object(d.a)(),z=v;L&&"undefined"===typeof z&&(z=L.disabled);var F="checkbox"===D||"radio"===D;return i.createElement(u.a,Object(a.a)({component:"span",className:Object(o.a)(b.root,m,A&&b.checked,z&&b.disabled),disabled:z,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),L&&L.onFocus&&L.onFocus(e)},onBlur:function(e){y&&y(e),L&&L.onBlur&&L.onBlur(e)},ref:t},B),i.createElement("input",Object(a.a)({autoFocus:n,checked:s,defaultChecked:j,className:b.input,disabled:z,id:F&&p,name:g,onChange:function(e){var t=e.target.checked;M(t),k&&k(e,t)},readOnly:S,ref:x,required:w,tabIndex:N,type:D,value:I},O)),A?h:f)})),b=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(h),m=n(760),j=Object(m.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),v=Object(m.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=n(103),p=Object(m.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),O=n(188),x=i.createElement(v,null),g=i.createElement(j,null),y=i.createElement(p,null),k=i.forwardRef((function(e,t){var n=e.checkedIcon,r=void 0===n?x:n,l=e.classes,d=e.color,s=void 0===d?"secondary":d,u=e.icon,h=void 0===u?g:u,m=e.indeterminate,j=void 0!==m&&m,v=e.indeterminateIcon,f=void 0===v?y:v,p=e.inputProps,k=e.size,C=void 0===k?"medium":k,S=Object(c.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),w=j?f:h,N=j?f:r;return i.createElement(b,Object(a.a)({type:"checkbox",classes:{root:Object(o.a)(l.root,l["color".concat(Object(O.a)(s))],j&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:s,inputProps:Object(a.a)({"data-indeterminate":j},p),icon:i.cloneElement(w,{fontSize:void 0===w.props.fontSize&&"small"===C?C:w.props.fontSize}),checkedIcon:i.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===C?C:N.props.fontSize}),ref:t},S))}));t.a=Object(s.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(f.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(f.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(k)},1167:function(e,t,n){"use strict";var a=n(712),c=n(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(n(1)),o=(0,a(n(714)).default)(i.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},1959:function(e,t,n){"use strict";n.r(t);var a=n(716),c=n(1),i=n(14);var o=function(e){var t=e.inputFields,n=e.title,a=e.handleSearch,c=e.isReset,o=e.handleReset,r=e.noActions;return Object(i.jsxs)("form",{className:"mb-5 content__container",children:[Object(i.jsx)("h3",{className:"mb-3",children:n||""}),Object(i.jsxs)("div",{className:"row g-3 mb-3",children:[t&&t.map((function(e){return Object(i.jsxs)("div",{className:"col-xs-12 col-sm-4",children:[Object(i.jsx)("label",{htmlFor:"",children:e.label}),"select"===e.type?Object(i.jsxs)("select",{value:null===e||void 0===e?void 0:e.value,name:null===e||void 0===e?void 0:e.name,onChange:function(t){return null===e||void 0===e?void 0:e.onChange(t.target.value)},className:"form-select form-select-sm py-2",children:[Object(i.jsx)("option",{hidden:!0,defaultValue:!0,children:"Select"}),(null===e||void 0===e?void 0:e.options.length)>0?null===e||void 0===e?void 0:e.options.map((function(e){return Object(i.jsx)("option",{value:e.id,children:e.name},e.id)})):Object(i.jsx)("option",{disabled:!0,children:"No data "})]}):Object(i.jsx)("input",{type:e.type,value:e.value,name:null===e||void 0===e?void 0:e.name,className:"form-control py-3",placeholder:"Search by ".concat(e.name),onChange:function(t){return null===e||void 0===e?void 0:e.onChange(t.target.value)}})]},null===e||void 0===e?void 0:e.name)})),!r&&Object(i.jsxs)("div",{className:"col-xs-12 d-flex  mt-2",children:[Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("button",{className:"btn orange__btn mr-3",onClick:a,children:"Search"})}),!c&&Object(i.jsx)("div",{className:" mb-3",children:Object(i.jsx)("button",{onClick:o,className:"btn blue__btn ",children:"Reset"})})]})]})]})},r=n(1108),l=n(38),d=n(32),s=n(76),u=n(718),h=n(944),b=n(135),m=n(763),j=n(1167),v=n.n(j),f=n(138),p=[{id:"userID",numeric:!1,disablePadding:!1,label:"StudentID"},{id:"photoUrl",numeric:!1,disablePadding:!1,label:"Photo"},{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"middlename",disablePadding:!0,label:"Middle Name"},{id:"surname",disablePadding:!0,label:"Last Name"},{id:"status",disablePadding:!1,label:"Status"},{id:"class",disablePadding:!1,label:"Class"},{id:"Gender",disablePadding:!1,label:"Gender"}];t.default=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],j=t[1],O=Object(c.useState)(""),x=Object(a.a)(O,2),g=x[0],y=x[1],k=Object(c.useState)(""),C=Object(a.a)(k,2),S=C[0],w=C[1],N=Object(c.useState)(""),D=Object(a.a)(N,2),I=D[0],B=D[1],P=Object(c.useState)([]),E=Object(a.a)(P,2),A=E[0],M=E[1],L=Object(c.useState)(""),z=Object(a.a)(L,2),F=z[0],R=z[1],T=Object(s.c)(d.c),H=Object(c.useState)([]),_=Object(a.a)(H,2),G=_[0],W=_[1],V=Object(c.useState)(!1),J=Object(a.a)(V,2),U=J[0],$=J[1],q=T.map((function(e){return{name:e.name,id:e.classCode}}));Object(c.useEffect)((function(){$(!0),l.a.get("/students").then((function(e){$(!1),M(e.data),W(e.data)}))}),[]);var Z=[{type:"text",value:g,label:"Search by Student ID",name:"Student ID",onChange:y},{type:"text",label:"Search by Name",value:n,name:"Name",onChange:j},{type:"select",options:q,label:"Search by Class",value:S,name:"class",onChange:w},{type:"select",options:[{id:"female",name:"female"},{id:"male",name:"male"},{id:"other",name:"other"}],label:"Search by Gender",value:F,name:"gender",onChange:R},{type:"select",options:m.f,label:"Search by Status",value:I,name:"status",onChange:B}];return Object(i.jsxs)("div",{children:[U&&Object(i.jsx)(f.a,{}),Object(i.jsx)(o,{title:"",handleReset:function(e){e.preventDefault(),j(""),y(""),w(""),M(G)},handleSearch:function(e){e.preventDefault();var t=[];S&&(t=G.filter((function(e){return e.classID.toLowerCase().includes(S.toLowerCase())}))),n&&(t=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.surname.toLowerCase().includes(n.toLowerCase())}))),g&&(t=t.filter((function(e){return e.userID.toLowerCase().includes(g.toLowerCase())}))),I&&(t=t.filter((function(e){return e.status.toLowerCase().includes(I.toLowerCase())}))),F&&(t=t.filter((function(e){return e.gender.toLowerCase().includes(F.toLowerCase())}))),M(t)},inputFields:Z}),Object(i.jsx)("div",{className:"d-flex justify-content-end mb-3",children:Object(i.jsxs)(b.b,{className:"btn btn-outline-info",to:"/students/new",children:[Object(i.jsx)(v.a,{}),"Add New Student"]})}),Object(i.jsx)(r.a,{route:"students",handleWithdraw:function(e){var t=window.confirm("Are you sure you want to withdraw this student ".concat(e));console.log(t),t&&l.a.put("/students/update/".concat(e),{withdraw:!0}).then((function(t){console.log(t.data),t.data.error&&Object(u.c)(t.data.error),M(A.filter((function(t){return t.userID!==e})))}))},handleDelete:function(e){window.confirm("Are sure you want to delete user ".concat(e))&&l.a.delete("/user/delete/".concat(e)).then((function(t){t.data.error&&Object(u.c)(t.data.error),M(A.filter((function(t){return t.userID!==e})))}))},students:A,noData:"No sudents in the database yet",headCells:p}),Object(i.jsx)("div",{className:"d-flex justify-content-end",children:Object(i.jsx)("button",{onClick:function(){Object(h.a)({data:A,headers:[{key:"userID",label:"UserID"},{key:"name",label:"Name"},{key:"middleName",label:"Middle Name"},{key:"surname",label:" SurName"},{key:"gender",label:"Gender"},{key:"status",label:"Status"},{key:"classID",label:"Class"}],filename:"Allstudents"})},className:"btn orange__btn ",children:"Download PDF"})})]})}},763:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return l}));var a=[{name:"January",id:0},{name:"February",id:1},{name:"March",id:2},{name:"April",id:3},{name:"May",id:4},{name:"June",id:5},{name:"July",id:6},{name:"August",id:7},{name:"September",id:8},{name:"October",id:9},{name:"November",id:10},{name:"December",id:11}],c=[{id:"border",name:"Border"},{id:"freshBorder",name:"Fresh Border"},{id:"freshDay",name:"Fresh Day"},{id:"day",name:"Day"}],i=["donations","prices","projects","others"],o=["Advertising and Marketing","Automobile Expense","Consultant Expense","Credit Card Charges","Depreciation Expense","IT and Internet Expenses","Janitorial Expense","Lodging","Meals and Entertainment","Office Supplies","Postage","Printing and Stationery","Rent Expense ","Repairs and Maintenance","Salaries and Expenses Wages","Telephone Expense","Travel Expense","Fixed Assets","Expenses","SNNIT","Bank Charges","Cleaning and Sanitation","Fuel/Lubrication","Vehicle Maintenance","Accountancy","Learning Materials","Proprietor Drawings","Donation/Gift","Permit/Levies/Rates","Electricity","Water","Text Book","Note books","School Uniform","Exams Printing","Maintenance","Others"],r=["Access Bank Ghana","African Investment Bank","Agricultural Developement Bank of Ghana","Ahantaman Rural Bank","CAL Bank","Ecobank Ghana","Fidelity Bank","Intercontinental Bank","HFC Bank","Consolidated Bank of Ghana","Barclays Bank","Merchant Bank Ghana Limited","Guaranty Trust Bank","Stanbic","Standard Chartered Bank","National City Bank","Northern City Bank","Trust Bank","UT Bank","United Bank for Africa","Zenith Bank"],l=["Teacher","Headmaster","Accountant","Teller","Security","Proprietor","Cleaner","Cook","Admin","Technician","Janitor","Matron","Secretary","Driver"]},944:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1148),c=function(e){var t=e.data,n=e.headers,c=e.filename,i=e.title,o=e.subheading,r=e.date,l=new a.a({orientation:"l",unit:"pt",format:"a4"}),d=50,s={width:841.89-d,height:595.28-d};l.setFontSize(8),i&&l.text(i,200,29),o&&l.text(o,200,30),r&&l.text(r,200,32);var u=[];n.forEach((function(e,t){if(e.hasOwnProperty("xPos"))l.text(e.label,e.xPos,d),u.push(e.xPos);else{var a=d+t*(s.width/n.length);l.text(e.label,0===t?a:a+15,50),u.push(0===t?a:a+15)}})),l.line(d,53.5,s.width,53.5);var h=65;t.forEach((function(e,t){var a=[];n.forEach((function(t,n){var c=l.splitTextToSize(String(e[t.key]),u[n]-u[0!==n&&n-1]),i=c.length*l.getLineHeight();a.push(i),l.text(c,u[n],h)})),(h=h+15+Math.max.apply(Math,a.concat([30])))>s.height&&(l.addPage(),h=65)})),l.save(c)}}}]);
//# sourceMappingURL=125.2e1141b1.chunk.js.map