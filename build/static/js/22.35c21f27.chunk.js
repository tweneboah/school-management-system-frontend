(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[22],{1165:function(e,t,a){"use strict";var o=a(712),n=a(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(1)),r=(0,o(a(714)).default)(c.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=r},1166:function(e,t,a){"use strict";var o=a(712),n=a(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(1)),r=(0,o(a(714)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=r},1281:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a(1);var o=a(101),n=a(560),c=a(953),r=a(954),i=a(951),l=a(952),s=a(949),d=a(950),u=a(941),p=a(1165),b=a.n(p),f=a(1166),h=a.n(f),v=a(721),m=a.n(v),j=a(14),g=Object(o.a)((function(e){return{head:{backgroundColor:"#051f3e",color:e.palette.common.white},body:{fontSize:14}}}))(i.a),O=Object(o.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(d.a),x=Object(n.a)({table:{minWidth:700},iconSize:{width:20,height:20}});function y(e){var t=e.attendanceData,a=x();return Object(j.jsx)(l.a,{component:u.a,children:Object(j.jsxs)(c.a,{className:a.table,"aria-label":"customized table",children:[Object(j.jsx)(s.a,{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(g,{children:"#"}),Object(j.jsx)(g,{align:"left",children:"Date"}),Object(j.jsx)(g,{align:"left",children:"Status"})]})}),Object(j.jsx)(r.a,{children:t.length>0?t.map((function(e){return Object(j.jsxs)(O,{children:[Object(j.jsx)(g,{children:e._id}),Object(j.jsx)(g,{children:m()(e.date).format("Do MMMM  YYYY")}),Object(j.jsx)(g,{align:"left",children:e.status?Object(j.jsx)(b.a,{className:a.iconSize}):Object(j.jsx)(h.a,{className:"".concat(a.iconSize," text-danger")})})]},e._id)})):Object(j.jsx)("div",{className:"p-5",children:"No data found"})})]})})}},1827:function(e,t,a){"use strict";a.r(t);var o=a(716),n=a(1),c=a(1281),r=a(38),i=a(76),l=a(60),s=a(14);t.default=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],d=t[1],u=Object(i.c)(l.d);return Object(n.useEffect)((function(){r.a.get("/attendance/user/".concat(null===u||void 0===u?void 0:u.userID)).then((function(e){console.log(e),d(e.data)}))}),[u]),Object(s.jsxs)("div",{className:"attendance",children:[Object(s.jsx)("h3",{className:"mb-3",children:"Attendance List"}),Object(s.jsx)(c.a,{attendanceData:a})]})}},726:function(e,t,a){"use strict";var o=a(1),n=o.createContext();t.a=n},771:function(e,t,a){"use strict";var o=a(1),n=o.createContext();t.a=n},941:function(e,t,a){"use strict";var o=a(19),n=a(2),c=a(1),r=(a(36),a(37)),i=a(101),l=c.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,d=e.square,u=void 0!==d&&d,p=e.elevation,b=void 0===p?1:p,f=e.variant,h=void 0===f?"elevation":f,v=Object(o.a)(e,["classes","className","component","square","elevation","variant"]);return c.createElement(s,Object(n.a)({className:Object(r.a)(a.root,i,"outlined"===h?a.outlined:a["elevation".concat(b)],!u&&a.rounded),ref:t},v))}));t.a=Object(i.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(n.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(l)},949:function(e,t,a){"use strict";var o=a(2),n=a(19),c=a(1),r=(a(36),a(37)),i=a(101),l=a(726),s={variant:"head"},d="thead",u=c.forwardRef((function(e,t){var a=e.classes,i=e.className,u=e.component,p=void 0===u?d:u,b=Object(n.a)(e,["classes","className","component"]);return c.createElement(l.a.Provider,{value:s},c.createElement(p,Object(o.a)({className:Object(r.a)(a.root,i),ref:t,role:p===d?null:"rowgroup"},b)))}));t.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},950:function(e,t,a){"use strict";var o=a(2),n=a(19),c=a(1),r=(a(36),a(37)),i=a(101),l=a(726),s=a(103),d=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,d=void 0===s?"tr":s,u=e.hover,p=void 0!==u&&u,b=e.selected,f=void 0!==b&&b,h=Object(n.a)(e,["classes","className","component","hover","selected"]),v=c.useContext(l.a);return c.createElement(d,Object(o.a)({ref:t,className:Object(r.a)(a.root,i,v&&{head:a.head,footer:a.footer}[v.variant],p&&a.hover,f&&a.selected),role:"tr"===d?null:"row"},h))}));t.a=Object(i.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},951:function(e,t,a){"use strict";var o=a(19),n=a(2),c=a(1),r=(a(36),a(37)),i=a(101),l=a(188),s=a(103),d=a(771),u=a(726),p=c.forwardRef((function(e,t){var a,i,s=e.align,p=void 0===s?"inherit":s,b=e.classes,f=e.className,h=e.component,v=e.padding,m=e.scope,j=e.size,g=e.sortDirection,O=e.variant,x=Object(o.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=c.useContext(d.a),N=c.useContext(u.a),w=N&&"head"===N.variant;h?(i=h,a=w?"columnheader":"cell"):i=w?"th":"td";var k=m;!k&&w&&(k="col");var C=v||(y&&y.padding?y.padding:"default"),z=j||(y&&y.size?y.size:"medium"),R=O||N&&N.variant,M=null;return g&&(M="asc"===g?"ascending":"descending"),c.createElement(i,Object(n.a)({ref:t,className:Object(r.a)(b.root,b[R],f,"inherit"!==p&&b["align".concat(Object(l.a)(p))],"default"!==C&&b["padding".concat(Object(l.a)(C))],"medium"!==z&&b["size".concat(Object(l.a)(z))],"head"===R&&y&&y.stickyHeader&&b.stickyHeader),"aria-sort":M,role:a,scope:k},x))}));t.a=Object(i.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.e)(Object(s.c)(e.palette.divider,1),.88):Object(s.a)(Object(s.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},952:function(e,t,a){"use strict";var o=a(2),n=a(19),c=a(1),r=(a(36),a(37)),i=a(101),l=c.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,d=Object(n.a)(e,["classes","className","component"]);return c.createElement(s,Object(o.a)({ref:t,className:Object(r.a)(a.root,i)},d))}));t.a=Object(i.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(l)},953:function(e,t,a){"use strict";var o=a(19),n=a(2),c=a(1),r=(a(36),a(37)),i=a(101),l=a(771),s="table",d=c.forwardRef((function(e,t){var a=e.classes,i=e.className,d=e.component,u=void 0===d?s:d,p=e.padding,b=void 0===p?"default":p,f=e.size,h=void 0===f?"medium":f,v=e.stickyHeader,m=void 0!==v&&v,j=Object(o.a)(e,["classes","className","component","padding","size","stickyHeader"]),g=c.useMemo((function(){return{padding:b,size:h,stickyHeader:m}}),[b,h,m]);return c.createElement(l.a.Provider,{value:g},c.createElement(u,Object(n.a)({role:u===s?null:"table",ref:t,className:Object(r.a)(a.root,i,m&&a.stickyHeader)},j)))}));t.a=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},954:function(e,t,a){"use strict";var o=a(2),n=a(19),c=a(1),r=(a(36),a(37)),i=a(101),l=a(726),s={variant:"body"},d="tbody",u=c.forwardRef((function(e,t){var a=e.classes,i=e.className,u=e.component,p=void 0===u?d:u,b=Object(n.a)(e,["classes","className","component"]);return c.createElement(l.a.Provider,{value:s},c.createElement(p,Object(o.a)({className:Object(r.a)(a.root,i),ref:t,role:p===d?null:"rowgroup"},b)))}));t.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)}}]);
//# sourceMappingURL=22.35c21f27.chunk.js.map