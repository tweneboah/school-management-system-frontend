(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[99],{1191:function(e,t,r){"use strict";var n=r(712),a=r(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(1)),i=(0,n(r(714)).default)(o.createElement("path",{d:"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"}),"Telegram");t.default=i},1192:function(e,t,r){"use strict";var n=r(712),a=r(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(1)),i=(0,n(r(714)).default)(o.createElement("path",{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"}),"Forum");t.default=i},1239:function(e,t,r){"use strict";var n=r(19),a=r(78),o=r(2),i=r(1),c=(r(36),r(37)),l=r(101),s=r(1923),d=r(188),u=i.forwardRef((function(e,t){var r=e.classes,a=e.className,l=e.disabled,u=void 0!==l&&l,p=e.disableFocusRipple,f=void 0!==p&&p,b=e.fullWidth,h=e.icon,v=e.indicator,j=e.label,m=e.onChange,O=e.onClick,g=e.onFocus,x=e.selected,y=e.selectionFollowsFocus,w=e.textColor,C=void 0===w?"inherit":w,E=e.value,S=e.wrapped,P=void 0!==S&&S,k=Object(n.a)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]);return i.createElement(s.a,Object(o.a)({focusRipple:!f,className:Object(c.a)(r.root,r["textColor".concat(Object(d.a)(C))],a,u&&r.disabled,x&&r.selected,j&&h&&r.labelIcon,b&&r.fullWidth,P&&r.wrapped),ref:t,role:"tab","aria-selected":x,disabled:u,onClick:function(e){m&&m(e,E),O&&O(e)},onFocus:function(e){y&&!x&&m&&m(e,E),g&&g(e)},tabIndex:x?0:-1},k),i.createElement("span",{className:r.wrapper},h,j),v)}));t.a=Object(l.a)((function(e){var t;return{root:Object(o.a)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Object(a.a)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),Object(a.a)(t,"overflow","hidden"),Object(a.a)(t,"whiteSpace","normal"),Object(a.a)(t,"textAlign","center"),Object(a.a)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(u)},1251:function(e,t,r){"use strict";var n=r(107),a=r(2),o=(r(36),r(105));var i=function(e){var t=function(t){var r=e(t);return t.css?Object(a.a)({},Object(o.a)(r,e(Object(a.a)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(n.a)(e.filterProps)),t};var c=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?Object(o.a)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},l=r(78),s=r(191);function d(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var u=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,a=e.themeKey,o=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=d(e.theme,a)||{};return Object(s.a)(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=d(i,e)||e,o&&(t=o(t))),!1===n?t:Object(l.a)({},n,t)}))};return i.propTypes={},i.filterProps=[t],i};function p(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var f=c(u({prop:"border",themeKey:"borders",transform:p}),u({prop:"borderTop",themeKey:"borders",transform:p}),u({prop:"borderRight",themeKey:"borders",transform:p}),u({prop:"borderBottom",themeKey:"borders",transform:p}),u({prop:"borderLeft",themeKey:"borders",transform:p}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"})),b=c(u({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"})),h=c(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"})),v=c(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"})),j=c(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"})),m=c(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),O=u({prop:"boxShadow",themeKey:"shadows"});function g(e){return e<=1?"".concat(100*e,"%"):e}var x=u({prop:"width",transform:g}),y=u({prop:"maxWidth",transform:g}),w=u({prop:"minWidth",transform:g}),C=u({prop:"height",transform:g}),E=u({prop:"maxHeight",transform:g}),S=u({prop:"minHeight",transform:g}),P=(u({prop:"size",cssProperty:"width",transform:g}),u({prop:"size",cssProperty:"height",transform:g}),c(x,y,w,C,E,S,u({prop:"boxSizing"}))),k=r(711),N=c(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"})),M=r(19),A=r(1),z=r.n(A),W=r(37),T=r(64),B=r.n(T),F=r(565);function R(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}var H=r(71),L=function(e){var t=function(e){return function(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.name,i=Object(M.a)(n,["name"]),c=o,l="function"===typeof t?function(e){return{root:function(r){return t(Object(a.a)({theme:e},r))}}}:{root:t},s=Object(F.a)(l,Object(a.a)({Component:e,name:o||e.displayName,classNamePrefix:c},i));t.filterProps&&(r=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var d=z.a.forwardRef((function(t,n){var o=t.children,i=t.className,c=t.clone,l=t.component,d=Object(M.a)(t,["children","className","clone","component"]),u=s(t),p=Object(W.a)(u.root,i),f=d;if(r&&(f=R(f,r)),c)return z.a.cloneElement(o,Object(a.a)({className:Object(W.a)(o.props.className,p)},f));if("function"===typeof o)return o(Object(a.a)({className:p},f));var b=l||e;return z.a.createElement(b,Object(a.a)({ref:n,className:p},f),o)}));return B()(d,e),d}}(e);return function(e,r){return t(e,Object(a.a)({defaultTheme:H.a},r))}},I=i(c(f,b,h,v,j,m,O,P,k.b,N)),_=L("div")(I,{name:"MuiBox"});t.a=_},1252:function(e,t,r){"use strict";var n,a=r(2),o=r(19),i=r(78),c=r(1),l=(r(1089),r(36),r(37)),s=r(828),d=r(1082);function u(){if(n)return n;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),n="reverse",e.scrollLeft>0?n="default":(e.scrollLeft=1,0===e.scrollLeft&&(n="negative")),document.body.removeChild(e),n}function p(e,t){var r=e.scrollLeft;if("rtl"!==t)return r;switch(u()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function f(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var b={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function h(e){var t=e.onChange,r=Object(o.a)(e,["onChange"]),n=c.useRef(),i=c.useRef(null),l=function(){n.current=i.current.offsetHeight-i.current.clientHeight};return c.useEffect((function(){var e=Object(s.a)((function(){var e=n.current;l(),e!==n.current&&t(n.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[t]),c.useEffect((function(){l(),t(n.current)}),[t]),c.createElement("div",Object(a.a)({style:b,ref:i},r))}var v=r(101),j=r(188),m=c.forwardRef((function(e,t){var r=e.classes,n=e.className,i=e.color,s=e.orientation,d=Object(o.a)(e,["classes","className","color","orientation"]);return c.createElement("span",Object(a.a)({className:Object(l.a)(r.root,r["color".concat(Object(j.a)(i))],n,"vertical"===s&&r.vertical),ref:t},d))})),O=Object(v.a)((function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}}),{name:"PrivateTabIndicator"})(m),g=r(1133),x=r(1134),y=r(1923),w=c.createElement(g.a,{fontSize:"small"}),C=c.createElement(x.a,{fontSize:"small"}),E=c.forwardRef((function(e,t){var r=e.classes,n=e.className,i=e.direction,s=e.orientation,d=e.disabled,u=Object(o.a)(e,["classes","className","direction","orientation","disabled"]);return c.createElement(y.a,Object(a.a)({component:"div",className:Object(l.a)(r.root,n,d&&r.disabled,"vertical"===s&&r.vertical),ref:t,role:null,tabIndex:null},u),"left"===i?w:C)})),S=Object(v.a)({root:{width:40,flexShrink:0,opacity:.8,"&$disabled":{opacity:0}},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}},disabled:{}},{name:"MuiTabScrollButton"})(E),P=r(1075),k=r(189),N=c.forwardRef((function(e,t){var r=e["aria-label"],n=e["aria-labelledby"],b=e.action,v=e.centered,j=void 0!==v&&v,m=e.children,g=e.classes,x=e.className,y=e.component,w=void 0===y?"div":y,C=e.indicatorColor,E=void 0===C?"secondary":C,N=e.onChange,M=e.orientation,A=void 0===M?"horizontal":M,z=e.ScrollButtonComponent,W=void 0===z?S:z,T=e.scrollButtons,B=void 0===T?"auto":T,F=e.selectionFollowsFocus,R=e.TabIndicatorProps,H=void 0===R?{}:R,L=e.TabScrollButtonProps,I=e.textColor,_=void 0===I?"inherit":I,D=e.value,K=e.variant,V=void 0===K?"standard":K,$=Object(o.a)(e,["aria-label","aria-labelledby","action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant"]),G=Object(k.a)(),q="scrollable"===V,J="rtl"===G.direction,X="vertical"===A,U=X?"scrollTop":"scrollLeft",Q=X?"top":"left",Y=X?"bottom":"right",Z=X?"clientHeight":"clientWidth",ee=X?"height":"width";var te=c.useState(!1),re=te[0],ne=te[1],ae=c.useState({}),oe=ae[0],ie=ae[1],ce=c.useState({start:!1,end:!1}),le=ce[0],se=ce[1],de=c.useState({overflow:"hidden",marginBottom:null}),ue=de[0],pe=de[1],fe=new Map,be=c.useRef(null),he=c.useRef(null),ve=function(){var e,t,r=be.current;if(r){var n=r.getBoundingClientRect();e={clientWidth:r.clientWidth,scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollLeftNormalized:p(r,G.direction),scrollWidth:r.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}if(r&&!1!==D){var a=he.current.children;if(a.length>0){var o=a[fe.get(D)];0,t=o?o.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},je=Object(P.a)((function(){var e,t=ve(),r=t.tabsMeta,n=t.tabMeta,a=0;if(n&&r)if(X)a=n.top-r.top+r.scrollTop;else{var o=J?r.scrollLeftNormalized+r.clientWidth-r.scrollWidth:r.scrollLeft;a=n.left-r.left+o}var c=(e={},Object(i.a)(e,Q,a),Object(i.a)(e,ee,n?n[ee]:0),e);if(isNaN(oe[Q])||isNaN(oe[ee]))ie(c);else{var l=Math.abs(oe[Q]-c[Q]),s=Math.abs(oe[ee]-c[ee]);(l>=1||s>=1)&&ie(c)}})),me=function(e){!function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},o=n.ease,i=void 0===o?f:o,c=n.duration,l=void 0===c?300:c,s=null,d=t[e],u=!1,p=function(){u=!0},b=function n(o){if(u)a(new Error("Animation cancelled"));else{null===s&&(s=o);var c=Math.min(1,(o-s)/l);t[e]=i(c)*(r-d)+d,c>=1?requestAnimationFrame((function(){a(null)})):requestAnimationFrame(n)}};d===r?a(new Error("Element already at target position")):requestAnimationFrame(b)}(U,be.current,e)},Oe=function(e){var t=be.current[U];X?t+=e:(t+=e*(J?-1:1),t*=J&&"reverse"===u()?-1:1),me(t)},ge=function(){Oe(-be.current[Z])},xe=function(){Oe(be.current[Z])},ye=c.useCallback((function(e){pe({overflow:null,marginBottom:-e})}),[]),we=Object(P.a)((function(){var e=ve(),t=e.tabsMeta,r=e.tabMeta;if(r&&t)if(r[Q]<t[Q]){var n=t[U]+(r[Q]-t[Q]);me(n)}else if(r[Y]>t[Y]){var a=t[U]+(r[Y]-t[Y]);me(a)}})),Ce=Object(P.a)((function(){if(q&&"off"!==B){var e,t,r=be.current,n=r.scrollTop,a=r.scrollHeight,o=r.clientHeight,i=r.scrollWidth,c=r.clientWidth;if(X)e=n>1,t=n<a-o-1;else{var l=p(be.current,G.direction);e=J?l<i-c-1:l>1,t=J?l>1:l<i-c-1}e===le.start&&t===le.end||se({start:e,end:t})}}));c.useEffect((function(){var e=Object(s.a)((function(){je(),Ce()})),t=Object(d.a)(be.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}),[je,Ce]);var Ee=c.useCallback(Object(s.a)((function(){Ce()})));c.useEffect((function(){return function(){Ee.clear()}}),[Ee]),c.useEffect((function(){ne(!0)}),[]),c.useEffect((function(){je(),Ce()})),c.useEffect((function(){we()}),[we,oe]),c.useImperativeHandle(b,(function(){return{updateIndicator:je,updateScrollButtons:Ce}}),[je,Ce]);var Se=c.createElement(O,Object(a.a)({className:g.indicator,orientation:A,color:E},H,{style:Object(a.a)({},oe,H.style)})),Pe=0,ke=c.Children.map(m,(function(e){if(!c.isValidElement(e))return null;var t=void 0===e.props.value?Pe:e.props.value;fe.set(t,Pe);var r=t===D;return Pe+=1,c.cloneElement(e,{fullWidth:"fullWidth"===V,indicator:r&&!re&&Se,selected:r,selectionFollowsFocus:F,onChange:N,textColor:_,value:t})})),Ne=function(){var e={};e.scrollbarSizeListener=q?c.createElement(h,{className:g.scrollable,onChange:ye}):null;var t=le.start||le.end,r=q&&("auto"===B&&t||"desktop"===B||"on"===B);return e.scrollButtonStart=r?c.createElement(W,Object(a.a)({orientation:A,direction:J?"right":"left",onClick:ge,disabled:!le.start,className:Object(l.a)(g.scrollButtons,"on"!==B&&g.scrollButtonsDesktop)},L)):null,e.scrollButtonEnd=r?c.createElement(W,Object(a.a)({orientation:A,direction:J?"left":"right",onClick:xe,disabled:!le.end,className:Object(l.a)(g.scrollButtons,"on"!==B&&g.scrollButtonsDesktop)},L)):null,e}();return c.createElement(w,Object(a.a)({className:Object(l.a)(g.root,x,X&&g.vertical),ref:t},$),Ne.scrollButtonStart,Ne.scrollbarSizeListener,c.createElement("div",{className:Object(l.a)(g.scroller,q?g.scrollable:g.fixed),style:ue,ref:be,onScroll:Ee},c.createElement("div",{"aria-label":r,"aria-labelledby":n,className:Object(l.a)(g.flexContainer,X&&g.flexContainerVertical,j&&!q&&g.centered),onKeyDown:function(e){var t=e.target;if("tab"===t.getAttribute("role")){var r=null,n="vertical"!==A?"ArrowLeft":"ArrowUp",a="vertical"!==A?"ArrowRight":"ArrowDown";switch("vertical"!==A&&"rtl"===G.direction&&(n="ArrowRight",a="ArrowLeft"),e.key){case n:r=t.previousElementSibling||he.current.lastChild;break;case a:r=t.nextElementSibling||he.current.firstChild;break;case"Home":r=he.current.firstChild;break;case"End":r=he.current.lastChild}null!==r&&(r.focus(),e.preventDefault())}},ref:he,role:"tablist"},ke),re&&Se),Ne.scrollButtonEnd)}));t.a=Object(v.a)((function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:Object(i.a)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}}),{name:"MuiTabs"})(N)},1283:function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var n=r(716),a=r(1),o=r.n(a),i=r(560),c=r(1064),l=r(1065),s=r(1060),d=r(1062),u=r(1063),p=r(792),f=r(1915),b=r(1061),h=r(942),v=r(1808),j=r(725),m=r.n(j),O=r(734),g=r.n(O),x=r(827),y=r(915),w=r(739),C=r.n(w),E=r(14),S=Object(i.a)({table:{width:"100%"}});function P(e){var t,r=e.data,a=e.tableHeader,i=e.handleEdit,j=e.handleDelete,O=e.loading,w=(e.isCanteen,e.isEdit),P=e.isItems,k=e.noActions,N=S(),M=o.a.useState(0),A=Object(n.a)(M,2),z=A[0],W=A[1],T=o.a.useState(5),B=Object(n.a)(T,2),F=B[0],R=B[1],H=F-Math.min(F,(null===r||void 0===r?void 0:r.length)-z*F);return Object(E.jsx)(u.a,{component:h.a,children:Object(E.jsxs)(c.a,{className:N.table,"aria-label":"custom pagination table",children:[Object(E.jsx)(s.a,{children:Object(E.jsxs)(b.a,{children:[a&&(null===a||void 0===a?void 0:a.map((function(e){return Object(E.jsx)(d.a,{children:e.name},e.id)}))),!k&&Object(E.jsx)(d.a,{children:"Actions"})]})}),O?Object(E.jsx)(l.a,{className:"text-center my-5 w-100",children:Object(E.jsx)(b.a,{children:Object(E.jsx)(d.a,{colSpan:a.lenght,children:Object(E.jsx)("span",{className:"spinner-grow spinner-grow-sm",role:"status"})})})}):Object(E.jsxs)(l.a,{children:[(null===r||void 0===r?void 0:r.length)<=0?Object(E.jsx)(b.a,{children:Object(E.jsx)(d.a,{colSpan:a.length+1,className:"text-center",children:"No Data"})}):Object(E.jsx)(E.Fragment,{children:null===(t=F>0?null===r||void 0===r?void 0:r.slice(z*F,z*F+F):r)||void 0===t?void 0:t.map((function(e){return Object(E.jsxs)(b.a,{children:[a&&(null===a||void 0===a?void 0:a.map((function(t){return Object(E.jsx)(d.a,{align:"left",children:e[null===t||void 0===t?void 0:t.id]||"-"},null===t||void 0===t?void 0:t.id)}))),!k&&Object(E.jsx)(d.a,{align:"left",children:Object(E.jsxs)("div",{className:"d-flex align-items-center",children:[Object(E.jsx)(y.a,{title:P?"Manage Inventory":"delete",children:Object(E.jsx)(v.a,{onClick:function(){return j(e._id)},children:P?Object(E.jsx)(C.a,{}):Object(E.jsx)(g.a,{})})}),!w&&Object(E.jsx)(y.a,{title:"edit",children:Object(E.jsx)(v.a,{onClick:function(){return i(e._id)},children:Object(E.jsx)(m.a,{})})})]})})]},e._id)}))}),H>0&&Object(E.jsx)(b.a,{style:{height:53},children:Object(E.jsx)(d.a,{colSpan:6})})]}),Object(E.jsx)(p.a,{children:Object(E.jsx)(b.a,{children:(null===r||void 0===r?void 0:r.length)>5&&Object(E.jsx)(f.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],count:null===r||void 0===r?void 0:r.length,rowsPerPage:F,page:z,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){W(t)},onChangeRowsPerPage:function(e){R(parseInt(e.target.value,10)),W(0)},ActionsComponent:x.a})})})]})})}},1818:function(e,t,r){"use strict";r.r(t);var n=r(735),a=r.n(n),o=r(736),i=r(716),c=r(77),l=r(750),s=r(1),d=r.n(s),u=r(38),p=r(1283),f=r(718),b=r(1252),h=r(1239),v=r(1191),j=r.n(v),m=r(1527),O=r(1192),g=r.n(O),x=r(1251),y=r(76),w=r(60),C=r(14);function E(e){var t=e.children,r=e.value,n=e.index,a=Object(l.a)(e,["children","value","index"]);return Object(C.jsx)("div",Object(c.a)(Object(c.a)({role:"tabpanel",hidden:r!==n,id:"nav-tabpanel-".concat(n),"aria-labelledby":"nav-tab-".concat(n)},a),{},{children:r===n&&Object(C.jsx)(x.a,{p:3,children:Object(C.jsx)(m.a,{children:t})})}))}function S(e){return{id:"nav-tab-".concat(e),"aria-controls":"nav-tabpanel-".concat(e)}}function P(e){return Object(C.jsx)(h.a,Object(c.a)({component:"a",color:"primary",icon:null===e||void 0===e?void 0:e.incon,onClick:function(e){e.preventDefault()}},e))}var k=[{name:"CreatedAt",id:"createdAt"},{name:"Send To",id:"sender"},{name:"Message",id:"message"}],N=[{name:"CreatedAt",id:"createdAt"},{name:" Received From",id:"userID"},{name:"Message",id:"message"}];t.default=function(){var e=Object(y.c)(w.d),t=Object(s.useState)([]),r=Object(i.a)(t,2),n=r[0],l=r[1],h=Object(s.useState)(""),v=Object(i.a)(h,2),m=v[0],O=v[1],x=d.a.useState(0),M=Object(i.a)(x,2),A=M[0],z=M[1];return Object(s.useEffect)((function(){u.a.get("/chats/send/".concat(null===e||void 0===e?void 0:e.id)).then(function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(t.data.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{createdAt:Object(f.n)(e.createdAt)})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(s.useEffect)((function(){u.a.get("/chats/user/".concat(null===e||void 0===e?void 0:e.id)).then(function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(t.data.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{createdAt:Object(f.n)(e.createdAt)})})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:"Inbox Messages"}),Object(C.jsxs)("div",{className:"content__container d-flex mb-5 justify-content-between",children:[Object(C.jsxs)("div",{className:"text-center",children:[Object(C.jsx)("h6",{children:Object(C.jsx)("strong",{children:"Send Messages"})}),Object(C.jsx)("strong",{children:n.length})]}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:function(){u.a.delete("/chats/deleteAll").then((function(e){if(e.data.error)return Object(f.c)(e.data.error);l([]),O([])})).catch((function(e){console.log(e),Object(f.c)("Failed")}))},className:"btn blue__btn",children:"Delete All Messages"})})]}),Object(C.jsxs)("div",{className:"content__container",children:[Object(C.jsxs)(b.a,{value:A,onChange:function(e,t){z(t)},variant:"fullWidth",indicatorColor:"secondary",textColor:"secondary","aria-label":"icon label tabs example",children:[Object(C.jsx)(P,Object(c.a)({icon:Object(C.jsx)(j.a,{}),label:"Send Messages",href:"/outgoing"},S(0))),Object(C.jsx)(P,Object(c.a)({icon:Object(C.jsx)(g.a,{}),label:"Received Messages",href:"/income"},S(1)))]}),Object(C.jsx)(E,{value:A,index:0,children:Object(C.jsx)(p.a,{handleDelete:function(e){console.log(e),u.a.delete("/chats/delete/".concat(e)).then((function(t){if(t.data.error)return Object(f.c)(t.data.error);l(n.filter((function(t){return t._id!==e})))})).catch((function(e){console.log(e),Object(f.c)("Failed")}))},data:n,isEdit:!0,tableHeader:k})}),Object(C.jsx)(E,{value:A,index:1,children:Object(C.jsx)(p.a,{handleDelete:function(e){console.log(e),u.a.delete("/chats/delete/".concat(e)).then((function(t){if(t.data.error)return Object(f.c)(t.data.error);l(n.filter((function(t){return t._id!==e})))})).catch((function(e){console.log(e),Object(f.c)("Failed")}))},data:m,isEdit:!0,tableHeader:N})})]}),Object(C.jsx)("div",{})]})}},725:function(e,t,r){"use strict";var n=r(712),a=r(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(1)),i=(0,n(r(714)).default)(o.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=i},734:function(e,t,r){"use strict";var n=r(712),a=r(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(1)),i=(0,n(r(714)).default)(o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.default=i},735:function(e,t,r){e.exports=r(419)},736:function(e,t,r){"use strict";function n(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function c(e){n(i,a,o,c,l,"next",e)}function l(e){n(i,a,o,c,l,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return a}))},739:function(e,t,r){"use strict";var n=r(712),a=r(713);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(1)),i=(0,n(r(714)).default)(o.createElement("path",{d:"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"}),"Toc");t.default=i},750:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,"a",(function(){return n}))},827:function(e,t,r){"use strict";r(1);var n=r(560),a=r(189),o=r(1808),i=r(730),c=r.n(i),l=r(732),s=r.n(l),d=r(731),u=r.n(d),p=r(729),f=r.n(p),b=r(14),h=Object(n.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));t.a=function(e){var t=h(),r=Object(a.a)(),n=e.count,i=e.page,l=e.rowsPerPage,d=e.onChangePage;return Object(b.jsxs)("div",{className:t.root,children:[Object(b.jsx)(o.a,{onClick:function(e){d(e,0)},disabled:0===i,"aria-label":"first page",children:"rtl"===r.direction?Object(b.jsx)(f.a,{}):Object(b.jsx)(c.a,{})}),Object(b.jsx)(o.a,{onClick:function(e){d(e,i-1)},disabled:0===i,"aria-label":"previous page",children:"rtl"===r.direction?Object(b.jsx)(u.a,{}):Object(b.jsx)(s.a,{})}),Object(b.jsx)(o.a,{onClick:function(e){d(e,i+1)},disabled:i>=Math.ceil(n/l)-1,"aria-label":"next page",children:"rtl"===r.direction?Object(b.jsx)(s.a,{}):Object(b.jsx)(u.a,{})}),Object(b.jsx)(o.a,{onClick:function(e){d(e,Math.max(0,Math.ceil(n/l)-1))},disabled:i>=Math.ceil(n/l)-1,"aria-label":"last page",children:"rtl"===r.direction?Object(b.jsx)(c.a,{}):Object(b.jsx)(f.a,{})})]})}}}]);
//# sourceMappingURL=99.e5bf8c0d.chunk.js.map