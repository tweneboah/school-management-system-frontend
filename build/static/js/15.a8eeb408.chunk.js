(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[15],{1060:function(e,t,a){"use strict";var n=a(2),c=a(19),o=a(1),i=(a(36),a(37)),l=a(103),r=a(729),s={variant:"head"},d="thead",u=o.forwardRef((function(e,t){var a=e.classes,l=e.className,u=e.component,b=void 0===u?d:u,j=Object(c.a)(e,["classes","className","component"]);return o.createElement(r.a.Provider,{value:s},o.createElement(b,Object(n.a)({className:Object(i.a)(a.root,l),ref:t,role:b===d?null:"rowgroup"},j)))}));t.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},1061:function(e,t,a){"use strict";var n=a(2),c=a(19),o=a(1),i=(a(36),a(37)),l=a(103),r=a(729),s=a(104),d=o.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.component,d=void 0===s?"tr":s,u=e.hover,b=void 0!==u&&u,j=e.selected,p=void 0!==j&&j,m=Object(c.a)(e,["classes","className","component","hover","selected"]),h=o.useContext(r.a);return o.createElement(d,Object(n.a)({ref:t,className:Object(i.a)(a.root,l,h&&{head:a.head,footer:a.footer}[h.variant],b&&a.hover,p&&a.selected),role:"tr"===d?null:"row"},m))}));t.a=Object(l.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1062:function(e,t,a){"use strict";var n=a(19),c=a(2),o=a(1),i=(a(36),a(37)),l=a(103),r=a(188),s=a(104),d=a(781),u=a(729),b=o.forwardRef((function(e,t){var a,l,s=e.align,b=void 0===s?"inherit":s,j=e.classes,p=e.className,m=e.component,h=e.padding,v=e.scope,f=e.size,O=e.sortDirection,g=e.variant,x=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=o.useContext(d.a),N=o.useContext(u.a),w=N&&"head"===N.variant;m?(l=m,a=w?"columnheader":"cell"):l=w?"th":"td";var C=v;!C&&w&&(C="col");var k=h||(y&&y.padding?y.padding:"default"),R=f||(y&&y.size?y.size:"medium"),z=g||N&&N.variant,M=null;return O&&(M="asc"===O?"ascending":"descending"),o.createElement(l,Object(c.a)({ref:t,className:Object(i.a)(j.root,j[z],p,"inherit"!==b&&j["align".concat(Object(r.a)(b))],"default"!==k&&j["padding".concat(Object(r.a)(k))],"medium"!==R&&j["size".concat(Object(r.a)(R))],"head"===z&&y&&y.stickyHeader&&j.stickyHeader),"aria-sort":M,role:a,scope:C},x))}));t.a=Object(l.a)((function(e){return{root:Object(c.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.e)(Object(s.c)(e.palette.divider,1),.88):Object(s.a)(Object(s.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(b)},1063:function(e,t,a){"use strict";var n=a(2),c=a(19),o=a(1),i=(a(36),a(37)),l=a(103),r=o.forwardRef((function(e,t){var a=e.classes,l=e.className,r=e.component,s=void 0===r?"div":r,d=Object(c.a)(e,["classes","className","component"]);return o.createElement(s,Object(n.a)({ref:t,className:Object(i.a)(a.root,l)},d))}));t.a=Object(l.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(r)},1064:function(e,t,a){"use strict";var n=a(19),c=a(2),o=a(1),i=(a(36),a(37)),l=a(103),r=a(781),s="table",d=o.forwardRef((function(e,t){var a=e.classes,l=e.className,d=e.component,u=void 0===d?s:d,b=e.padding,j=void 0===b?"default":b,p=e.size,m=void 0===p?"medium":p,h=e.stickyHeader,v=void 0!==h&&h,f=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),O=o.useMemo((function(){return{padding:j,size:m,stickyHeader:v}}),[j,m,v]);return o.createElement(r.a.Provider,{value:O},o.createElement(u,Object(c.a)({role:u===s?null:"table",ref:t,className:Object(i.a)(a.root,l,v&&a.stickyHeader)},f)))}));t.a=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(c.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},1065:function(e,t,a){"use strict";var n=a(2),c=a(19),o=a(1),i=(a(36),a(37)),l=a(103),r=a(729),s={variant:"body"},d="tbody",u=o.forwardRef((function(e,t){var a=e.classes,l=e.className,u=e.component,b=void 0===u?d:u,j=Object(c.a)(e,["classes","className","component"]);return o.createElement(r.a.Provider,{value:s},o.createElement(b,Object(n.a)({className:Object(i.a)(a.root,l),ref:t,role:b===d?null:"rowgroup"},j)))}));t.a=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)},1158:function(e,t,a){"use strict";var n=a(715),c=a(717);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(1)),i=(0,n(a(716)).default)(o.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=i},1159:function(e,t,a){"use strict";var n=a(715),c=a(717);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(1)),i=(0,n(a(716)).default)(o.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i},1280:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));a(1);var n=a(103),c=a(563),o=a(1064),i=a(1065),l=a(1062),r=a(1063),s=a(1060),d=a(1061),u=a(944),b=a(1158),j=a.n(b),p=a(728),m=a.n(p),h=a(1159),v=a.n(h),f=a(725),O=a.n(f),g=a(136),x=a(14),y=Object(n.a)((function(e){return{head:{backgroundColor:"#051f3e",color:e.palette.common.white},body:{fontSize:14}}}))(l.a),N=Object(n.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(d.a),w=Object(c.a)({table:{minWidth:700},list:{listStyle:"none"},iconSize:{width:20,height:20},textDanger:{color:"red"}});function C(e){var t=e.attendanceData,a=e.isStaff,n=e.isClass,c=w();return Object(x.jsx)(r.a,{component:u.a,children:Object(x.jsxs)(o.a,{className:c.table,"aria-label":"customized table",children:[Object(x.jsx)(s.a,{children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(y,{align:"left",children:"Date"}),(!a||!n)&&Object(x.jsx)(y,{align:"left",children:"ClassID"}),Object(x.jsx)(y,{align:"left",children:a?"Staff ID":" Student  ID"}),Object(x.jsx)(y,{align:"left",children:"Name"}),Object(x.jsx)(y,{align:"left",children:"Last Name"}),Object(x.jsx)(y,{align:"left",children:"Status"}),Object(x.jsx)(y,{align:"left",children:"Action"})]})}),Object(x.jsx)(i.a,{children:t.length>0?null===t||void 0===t?void 0:t.map((function(e){var t,o,i,l;return Object(x.jsxs)(N,{children:[Object(x.jsx)(y,{children:O()(e.date).format("Do MMMM  YYYY")}),(!a||!n)&&Object(x.jsx)(y,{children:e.classID}),Object(x.jsx)(y,{children:Object(x.jsx)("ul",{children:null===(t=e.users)||void 0===t?void 0:t.map((function(e){return Object(x.jsxs)("li",{className:c.list,children:[" ",e.userID]},e.userID)}))})}),Object(x.jsx)(y,{children:Object(x.jsx)("ul",{children:null===(o=e.users)||void 0===o?void 0:o.map((function(e){return Object(x.jsxs)("li",{className:c.list,children:[" ",e.name]},e.userID)}))})}),Object(x.jsx)(y,{children:Object(x.jsx)("ul",{children:null===(i=e.users)||void 0===i?void 0:i.map((function(e){return Object(x.jsxs)("li",{className:c.list,children:[" ",e.surname]},e.userID)}))})}),Object(x.jsx)(y,{children:Object(x.jsx)(y,{children:Object(x.jsx)("ul",{children:null===(l=e.users)||void 0===l?void 0:l.map((function(e){return Object(x.jsx)("li",{className:c.list,children:e.status?Object(x.jsx)(j.a,{className:c.iconSize}):Object(x.jsx)(v.a,{className:"".concat(c.iconSize,"  text-danger")})},e.userID)}))})})}),Object(x.jsx)(y,{children:Object(x.jsxs)(g.b,{to:a?"/attendance/staff/edit/".concat(e._id):"/attendance/students/edit/".concat(e.classID,"/").concat(e._id),children:[" ",Object(x.jsx)(m.a,{})," "]})})]},e._id)})):Object(x.jsx)("div",{className:"p-5",children:" No data "})})]})})}},728:function(e,t,a){"use strict";var n=a(715),c=a(717);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(1)),i=(0,n(a(716)).default)(o.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=i},729:function(e,t,a){"use strict";var n=a(1),c=n.createContext();t.a=c},781:function(e,t,a){"use strict";var n=a(1),c=n.createContext();t.a=c},785:function(e,t,a){"use strict";a(1);var n=a(14);t.a=function(e){var t=e.inputFields,a=e.title,c=e.handleSearch,o=e.isReset,i=e.handleReset,l=e.noActions;return Object(n.jsxs)("form",{className:"mb-5 content__container",children:[Object(n.jsx)("h3",{className:"mb-3",children:a||""}),Object(n.jsxs)("div",{className:"row g-3 mb-3",children:[t&&t.map((function(e){return Object(n.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(n.jsx)("label",{htmlFor:"",children:e.label}),"select"===e.type?Object(n.jsxs)("select",{value:null===e||void 0===e?void 0:e.value,name:null===e||void 0===e?void 0:e.name,onChange:function(t){return null===e||void 0===e?void 0:e.onChange(t.target.value)},className:"form-select form-select-sm py-2",children:[Object(n.jsx)("option",{hidden:!0,defaultValue:!0,children:"Select"}),(null===e||void 0===e?void 0:e.options.length)>0?null===e||void 0===e?void 0:e.options.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name},e.id)})):Object(n.jsx)("option",{disabled:!0,children:"No data "})]}):Object(n.jsx)("input",{type:e.type,value:e.value,name:null===e||void 0===e?void 0:e.name,className:"form-control py-3",placeholder:"Search by ".concat(e.name),onChange:function(t){return null===e||void 0===e?void 0:e.onChange(t.target.value)}})]},null===e||void 0===e?void 0:e.name)})),!l&&Object(n.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4 d-flex mt-5",children:[Object(n.jsx)("div",{className:"mb-3",children:Object(n.jsx)("button",{className:"btn orange__btn ",onClick:c,children:"Search"})}),!o&&Object(n.jsx)("div",{className:" mb-3 ml-3",children:Object(n.jsx)("button",{onClick:i,className:"btn blue__btn ",children:"Reset"})})]})]})]})}},944:function(e,t,a){"use strict";var n=a(19),c=a(2),o=a(1),i=(a(36),a(37)),l=a(103),r=o.forwardRef((function(e,t){var a=e.classes,l=e.className,r=e.component,s=void 0===r?"div":r,d=e.square,u=void 0!==d&&d,b=e.elevation,j=void 0===b?1:b,p=e.variant,m=void 0===p?"elevation":p,h=Object(n.a)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(s,Object(c.a)({className:Object(i.a)(a.root,l,"outlined"===m?a.outlined:a["elevation".concat(j)],!u&&a.rounded),ref:t},h))}));t.a=Object(l.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(c.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(r)}}]);
//# sourceMappingURL=15.a8eeb408.chunk.js.map