(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[138],{1114:function(e,a,l){"use strict";l(1);var t=l(1447),s=l(1069),c=l.n(s),n=l(1808),r=l(14);a.a=function(e){var a=e.guadian,l=e.handleDeleteGuadian,s=e.noEdit;return Object(r.jsxs)(t.a,{className:"p-4 mb-3",children:[!s&&Object(r.jsx)("div",{className:"float-end",children:Object(r.jsxs)(n.a,{onClick:function(){return l(a.id)},children:[" ",Object(r.jsx)(c.a,{})]})}),Object(r.jsxs)("div",{className:"float-start",children:[Object(r.jsxs)("div",{className:"row  mb-3",children:[Object(r.jsx)("div",{className:"col-6",children:" Name: "}),Object(r.jsxs)("div",{className:"col-6",children:[null===a||void 0===a?void 0:a.name," "]})]}),Object(r.jsxs)("div",{className:"row  mb-3",children:[Object(r.jsx)("div",{className:"col-6",children:" Surname : "}),Object(r.jsx)("div",{className:"col-6",children:null===a||void 0===a?void 0:a.lastname})]}),Object(r.jsxs)("div",{className:"row  mb-3",children:[Object(r.jsx)("div",{className:"col-6",children:"Occupation: "}),Object(r.jsx)("div",{className:"col-6",children:(null===a||void 0===a?void 0:a.occupation)||null})]}),Object(r.jsxs)("div",{className:"row  mb-3",children:[Object(r.jsx)("div",{className:"col-6",children:"Contact: "}),Object(r.jsx)("div",{className:"col-6",children:(null===a||void 0===a?void 0:a.mobile)||null})]}),Object(r.jsxs)("div",{className:"row  mb-3",children:[Object(r.jsx)("div",{className:"col-6",children:"Email: "}),Object(r.jsx)("div",{className:"col-6",children:(null===a||void 0===a?void 0:a.email)||null})]}),Object(r.jsxs)("div",{className:"row  mb-3",children:[Object(r.jsx)("div",{className:"col-6",children:"Relationship: "}),Object(r.jsx)("div",{className:"col-6",children:(null===a||void 0===a?void 0:a.relationship)||null})]}),Object(r.jsxs)("div",{className:"row  mb-3",children:[Object(r.jsx)("div",{className:"col-6",children:"Address: "}),Object(r.jsx)("div",{className:"col-6",children:(null===a||void 0===a?void 0:a.address)||null})]})]})]})}},1115:function(e,a,l){"use strict";l(1);var t=l(718),s=l(14);a.a=function(e){var a=e.name,l=e.healthCon,c=e.setHealthCon,n=e.disease,r=e.setDisease,i=e.allerge,o=e.setallerge,d=e.setname,m=e.title,j=e.setTitle,b=e.secondName,u=e.setsecondName,h=e.lastname,O=e.setlastname,v=e.gender,x=e.setgender,f=e.dateofBirth,p=e.setdateofBirth,N=e.email,g=e.setemail,y=e.nationality,C=e.setnationality,S=e.placeofBirth,w=e.setplaceofBirth,q=e.religion,A=e.setreligion,B=e.errors,D=e.isTeacher,M=e.register;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Personal Information"}),Object(s.jsxs)("div",{className:"row mb-3",children:[D&&Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-2",children:[Object(s.jsx)("label",{className:"form-label",children:"Title"}),Object(s.jsxs)("select",{className:"form-control",ref:M({required:!0}),value:m,name:"gender",onChange:function(e){return j(e.target.value)},"aria-label":"Default select example",children:[Object(s.jsx)("option",{defaultValue:!0,hidden:!0,children:"Select"}),Object(s.jsx)("option",{value:"mr",children:"Mr"}),Object(s.jsx)("option",{value:"mrs",children:"Mrs"}),Object(s.jsx)("option",{value:"miss",children:"Ms"}),Object(s.jsx)("option",{value:"doctor",children:"Dr"}),Object(s.jsx)("option",{value:"prof",children:"Prof"}),Object(s.jsx)("option",{value:"pastor",children:"Pastor"}),Object(s.jsx)("option",{value:"rev",children:"Rev"}),Object(s.jsx)("option",{value:"apostle",children:"Apostle"})]}),B.name&&Object(s.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]}),Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(s.jsx)("label",{className:"form-label",children:"First Name"}),Object(s.jsx)("input",{name:"name",type:"text",value:a,ref:M({required:!0}),onChange:function(e){return d(e.target.value)},className:"form-control",placeholder:""}),B.name&&Object(s.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]}),Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(s.jsx)("label",{className:"form-label",children:"Second Name"}),Object(s.jsx)("input",{ref:M,type:"text",name:"secondname",value:b,onChange:function(e){return u(e.target.value)},className:"form-control"})]}),Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(s.jsx)("label",{className:"form-label",children:"Last Name"}),Object(s.jsx)("input",{ref:M({required:!0}),value:h,onChange:function(e){return O(e.target.value)},type:"text",name:"lastname",className:"form-control"}),B.lastname&&Object(s.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(s.jsxs)("div",{className:"row mb-3",children:[Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(s.jsx)("label",{className:"form-label",children:" Gender *"}),Object(s.jsxs)("select",{className:"form-control",ref:M({required:!0}),value:v,name:"gender",onChange:function(e){return x(e.target.value)},"aria-label":"Default select example",children:[Object(s.jsx)("option",{defaultValue:!0,hidden:!0,children:"Select"}),Object(s.jsx)("option",{value:"female",children:"Female"}),Object(s.jsx)("option",{value:"male",children:"Male"}),Object(s.jsx)("option",{value:"others",children:"Others"})]}),B.gender&&Object(s.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]}),Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(s.jsx)("label",{className:"form-label",children:"Date of Birth"}),Object(s.jsx)("input",{value:f,name:"dateofBirth",ref:M,onChange:function(e){p(e.target.value)},type:"date",className:"form-control"})]}),Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(s.jsx)("label",{className:"form-label",children:"Email"}),Object(s.jsx)("input",{value:N,ref:M({required:!0,pattern:Object(t.e)()}),onChange:function(e){return g(e.target.value)},type:"email",name:"email",className:"form-control"}),B.email&&Object(s.jsx)("span",{className:" form-error text-danger mb-2",children:"Valid email is required"})]})]}),Object(s.jsxs)("div",{className:"row mb-3",children:[Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(s.jsx)("label",{className:"form-label",children:"Nationality"}),Object(s.jsx)("input",{value:y,ref:M,onChange:function(e){return C(e.target.value)},name:"nationality",type:"text",className:"form-control"})]}),Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(s.jsx)("label",{className:"form-label",children:"Religion"}),Object(s.jsx)("input",{type:"text",ref:M,name:"religion",value:q,onChange:function(e){return A(e.target.value)},className:"form-control"})]}),Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(s.jsx)("label",{className:"form-label",children:"Place of Birth"}),Object(s.jsx)("input",{type:"text",ref:M,name:"placeofBirth",value:S,onChange:function(e){return w(e.target.value)},className:"form-control"})]})]}),Object(s.jsxs)("div",{className:"row  mb-3",children:[Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(s.jsx)("label",{className:"form-label",children:"Health Condition"}),Object(s.jsxs)("select",{value:l,ref:M,onChange:function(e){return c(e.target.value)},className:"form-control",name:"gender","aria-label":"Default select example",children:[Object(s.jsx)("option",{defaultValue:!0,hidden:!0,children:"Select"}),Object(s.jsx)("option",{value:"vgood",children:"Very Good"}),Object(s.jsx)("option",{value:"good",children:"Good"}),Object(s.jsx)("option",{value:"fair",children:"Fair"}),Object(s.jsx)("option",{value:"fair",children:"Critical"})]})]}),Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(s.jsx)("label",{className:"form-label",children:"Disease"}),Object(s.jsx)("input",{type:"text",name:"heathy",ref:M,placeholder:"Any Disease you suffer from you might want share",value:n,onChange:function(e){return r(e.target.value)},className:"form-control"})]}),Object(s.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(s.jsx)("label",{className:"form-label",children:"Any Allegies"}),Object(s.jsx)("input",{ref:M,type:"text",name:"allegies",value:i,onChange:function(e){return o(e.target.value)},className:"form-control"})]})]})]})}},1116:function(e,a,l){"use strict";l(1),l(1240);var t=l(14);a.a=function(e){var a=e.setmobilenumber,l=e.mobilenumber,s=e.settelephone,c=e.residence,n=e.setresidence,r=e.telephone,i=e.postalAddress,o=e.errors,d=e.register,m=e.setpostalAddress;return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:"Contact Details"}),Object(t.jsxs)("div",{className:"row mb-3",children:[Object(t.jsxs)("div",{className:"col-xs-12 col-sm-6 ",children:[Object(t.jsx)("label",{className:"form-label",children:"Mobile Number"}),Object(t.jsx)("input",{name:"mobile",type:"tel",value:l,ref:d({required:!0}),onChange:function(e){return a(e.target.value)},className:"form-control",placeholder:"phone number if any"}),o.mobile&&Object(t.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]}),Object(t.jsxs)("div",{className:"col-xs-12 col-sm-6",children:[Object(t.jsx)("label",{className:"form-label",children:"Phone Number"}),Object(t.jsx)("input",{value:r,onChange:function(e){return s(e.target.value)},name:"phone",type:"tel",ref:d({required:!0}),className:"form-control",placeholder:"phone number if any"}),o.phone&&Object(t.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]})]}),Object(t.jsxs)("div",{className:"row mb-3",children:[Object(t.jsxs)("div",{className:"col-xs-12 col-sm-6",children:[Object(t.jsx)("label",{className:"form-label",children:"Area of Residence"}),Object(t.jsx)("textarea",{value:c,ref:d({required:!0}),onChange:function(e){return n(e.target.value)},rows:3,name:"residence",type:"text",className:"form-control"}),o.residence&&Object(t.jsx)("span",{className:" form-error text-danger mb-2",children:"This field is required"})]}),Object(t.jsxs)("div",{className:"col-xs-12 col-sm-6",children:[Object(t.jsx)("label",{className:"form-label",children:"Postal Address"}),Object(t.jsx)("textarea",{rows:3,value:i,onChange:function(e){return m(e.target.value)},type:"email",name:"lastname",className:"form-control"})]})]})]})}},1241:function(e,a,l){"use strict";var t=l(777),s=l(77),c=l(716),n=l(1),r=l(718),i=l(14);a.a=function(e){var a=e.setguadian,l=e.guadian,o=Object(n.useState)(""),d=Object(c.a)(o,2),m=d[0],j=d[1],b=Object(n.useState)(""),u=Object(c.a)(b,2),h=u[0],O=u[1],v=Object(n.useState)(""),x=Object(c.a)(v,2),f=x[0],p=x[1],N=Object(n.useState)(""),g=Object(c.a)(N,2),y=g[0],C=g[1],S=Object(n.useState)(""),w=Object(c.a)(S,2),q=w[0],A=w[1],B=Object(n.useState)(""),D=Object(c.a)(B,2),M=D[0],T=D[1],_=Object(n.useState)(""),G=Object(c.a)(_,2),P=G[0],R=G[1],k=Object(n.useState)({name:!1,lastname:!1,mobile:!1,relationship:!1}),E=Object(c.a)(k,2),V=E[0],L=E[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Guadian Information"}),Object(i.jsxs)("div",{className:"row mb-3",children:[Object(i.jsxs)("div",{className:"col-xs-12 col-sm-6 ",children:[Object(i.jsx)("label",{className:"form-label",children:"Name"}),Object(i.jsx)("input",{value:h,onChange:function(e){return O(e.target.value)},name:"name",type:"text",className:"form-control"}),V.name&&Object(i.jsx)("span",{className:" form-error text-danger mb-2",children:"Name is required"})]}),Object(i.jsxs)("div",{className:"col-xs-12 col-sm-6 ",children:[Object(i.jsx)("label",{className:"form-label",children:"Last name"}),Object(i.jsx)("input",{value:f,onChange:function(e){return p(e.target.value)},name:"lastname",type:"text",className:"form-control"}),V.lastname&&Object(i.jsx)("span",{className:" form-error text-danger mb-2",children:"Lastname is required"})]}),Object(i.jsxs)("div",{className:"col-xs-12 col-sm-6 ",children:[Object(i.jsx)("label",{name:"mobile",className:"form-label",children:"Mobile Number"}),Object(i.jsx)("input",{type:"tel",value:m,onChange:function(e){return j(e.target.value)},className:"form-control"}),V.mobile&&Object(i.jsx)("span",{className:" form-error text-danger mb-2",children:"Mobile number is required"})]}),Object(i.jsxs)("div",{className:"col-xs-12 col-sm-6 ",children:[Object(i.jsx)("label",{className:"form-label",children:"Email"}),Object(i.jsx)("input",{value:y,onChange:function(e){return C(e.target.value)},type:"email",name:"lastname",className:"form-control"}),V.email&&Object(i.jsx)("span",{className:" form-error text-danger mb-2",children:"Valid email is required"})]})]}),Object(i.jsxs)("div",{className:"row mb-3",children:[Object(i.jsxs)("div",{className:"col-xs-12 col-sm-6 ",children:[Object(i.jsx)("label",{className:"form-label",children:"Relationship"}),Object(i.jsx)("input",{name:"relationship",value:q,onChange:function(e){return A(e.target.value)},type:"text",className:"form-control"}),V.relationship&&Object(i.jsx)("span",{className:" form-error text-danger mb-2",children:"Relationship with student is required"})]}),Object(i.jsxs)("div",{className:"col-xs-12 col-sm-6 ",children:[Object(i.jsx)("label",{className:"form-label",children:"Occupations"}),Object(i.jsx)("input",{value:M,onChange:function(e){return T(e.target.value)},type:"text",name:M,className:"form-control"}),V.occupation&&Object(i.jsx)("span",{className:" form-error text-danger mb-2",children:"Occupation is required"})]}),Object(i.jsxs)("div",{className:"col-xs-12 col-sm-6 ",children:[Object(i.jsx)("label",{className:"form-label",children:"Address"}),Object(i.jsx)("textarea",{rows:3,value:P,onChange:function(e){return R(e.target.value)},type:"text",name:"address",className:"form-control"})]})]}),Object(i.jsx)("div",{onClick:function(e){e.preventDefault(),L({name:!1,lastname:!1,mobile:!1,relationship:!1}),Object(r.e)().test(String(y).toLowerCase())||L(Object(s.a)(Object(s.a)({},V),{},{email:!0})),""===h&&L(Object(s.a)(Object(s.a)({},V),{},{name:!0})),""===f&&L(Object(s.a)(Object(s.a)({},V),{},{lastname:!0})),""===m&&L(Object(s.a)(Object(s.a)({},V),{},{mobile:!0})),""===q&&L(Object(s.a)(Object(s.a)({},V),{},{relationship:!0})),""!==h&&""!==q&&""!==f&&(L({name:!1,lastname:!1,mobile:!1,relationship:!1}),O(""),p(""),A(""),R(""),T(""),C(""),j(""),a([].concat(Object(t.a)(l),[{mobile:m,name:h,lastname:f,email:y,relationship:q,occupation:M,address:P,id:Object(r.f)()}])))},className:"mb-3",children:Object(i.jsx)("button",{className:"btn orange__btn",children:"Add Guadian"})})]})}},1811:function(e,a,l){"use strict";l.r(a);var t=l(716),s=l(1),c=l(1115),n=l(1116),r=l(1241),i=l(76),o=l(60),d=l(38),m=l(748),j=l(722),b=l.n(j),u=l(1114),h=l(718),O=l(14);a.default=function(){var e=Object(m.a)(),a=e.register,l=e.handleSubmit,j=e.errors,v=Object(i.c)(o.d),x=Object(s.useState)(""),f=Object(t.a)(x,2),p=f[0],N=f[1],g=Object(s.useState)({}),y=Object(t.a)(g,2),C=y[0],S=y[1],w=Object(s.useState)(""),q=Object(t.a)(w,2),A=q[0],B=q[1],D=Object(s.useState)(""),M=Object(t.a)(D,2),T=M[0],_=M[1],G=Object(s.useState)(""),P=Object(t.a)(G,2),R=P[0],k=P[1],E=Object(s.useState)(""),V=Object(t.a)(E,2),L=V[0],F=V[1],I=Object(s.useState)(""),Y=Object(t.a)(I,2),H=Y[0],J=Y[1],z=Object(s.useState)(""),K=Object(t.a)(z,2),Q=K[0],U=K[1],W=Object(s.useState)(""),X=Object(t.a)(W,2),Z=X[0],$=X[1],ee=Object(s.useState)(""),ae=Object(t.a)(ee,2),le=ae[0],te=ae[1],se=Object(s.useState)(""),ce=Object(t.a)(se,2),ne=ce[0],re=ce[1],ie=Object(s.useState)(""),oe=Object(t.a)(ie,2),de=oe[0],me=oe[1],je=Object(s.useState)(""),be=Object(t.a)(je,2),ue=be[0],he=be[1],Oe=Object(s.useState)(!1),ve=Object(t.a)(Oe,2),xe=ve[0],fe=ve[1],pe=Object(s.useState)(""),Ne=Object(t.a)(pe,2),ge=Ne[0],ye=Ne[1],Ce=Object(s.useState)(""),Se=Object(t.a)(Ce,2),we=Se[0],qe=Se[1],Ae=Object(s.useState)(""),Be=Object(t.a)(Ae,2),De=Be[0],Me=Be[1],Te=Object(s.useState)(""),_e=Object(t.a)(Te,2),Ge=_e[0],Pe=_e[1],Re=Object(s.useState)([]),ke=Object(t.a)(Re,2),Ee=ke[0],Ve=ke[1],Le=function(e){Ve(Ee.filter((function(a){return a.id!==e})))};return console.log(v),Object(s.useEffect)((function(){d.a.get("/students/student/".concat(null===v||void 0===v?void 0:v.userID)).then((function(e){var a=e.data.student;console.log(a),S(a),N(null===a||void 0===a?void 0:a.name),B(null===a||void 0===a?void 0:a.surname),k(null===a||void 0===a?void 0:a.gender),F((null===a||void 0===a?void 0:a.dateofBirth)?b()(null===a||void 0===a?void 0:a.dateofBirth).format("YYYY-MM-DD"):""),J(null===a||void 0===a?void 0:a.email),U(null===a||void 0===a?void 0:a.nationality),$(null===a||void 0===a?void 0:a.placeofBirth),te(null===a||void 0===a?void 0:a.religion),re(null===a||void 0===a?void 0:a.health),me(null===a||void 0===a?void 0:a.allege),he(null===a||void 0===a?void 0:a.disease),ye(null===a||void 0===a?void 0:a.mobilenumber),qe(null===a||void 0===a?void 0:a.physicalAddress),Me(null===a||void 0===a?void 0:a.telephone),Pe(null===a||void 0===a?void 0:a.postalAddress),Ve(null===a||void 0===a?void 0:a.guadian)}))}),[v]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Edit My Profile"}),Object(O.jsxs)("form",{action:"",className:"content__container mt-3",children:[Object(O.jsx)(c.a,{register:a,errors:j,name:p,setname:N,secondName:T,setsecondName:_,lastname:A,setlastname:B,gender:R,setgender:k,dateofBirth:L,setdateofBirth:F,email:H,setemail:J,nationality:Q,setnationality:U,placeofBirth:Z,setplaceofBirth:$,religion:le,setreligion:te,healthCon:ne,setHealthCon:re,disease:ue,setDisease:he,allerge:de,setallerge:me}),Object(O.jsx)("br",{className:"my-5"}),Object(O.jsx)(n.a,{register:a,errors:j,mobilenumber:ge,setmobilenumber:ye,residence:we,setresidence:qe,settelephone:Me,telephone:De,setpostalAddress:Pe,postalAddress:Ge}),Object(O.jsx)("br",{className:"my-5"}),Object(O.jsx)(r.a,{guadian:Ee,setguadian:Ve}),Object(O.jsx)("div",{className:"row",children:Ee&&Ee.map((function(e){return Object(O.jsx)("div",{className:"col-xs-12 col-sm-6",children:Object(O.jsx)(u.a,{guadian:e,handleDeleteGuadian:Le},e.id)})}))}),Object(O.jsxs)("div",{className:"row ",children:[Object(O.jsx)("button",{type:"submit",disabled:xe,onClick:l((function(){d.a.put("/students/update/".concat(null===v||void 0===v?void 0:v.userID),{name:p,middleName:T,surname:A,gender:R,dateofBirth:L,email:H,nationality:Q,religion:le,placeofBirth:Z,health:ne,disease:ue,allege:de,mobilenumber:ge,telephone:De,postalAddress:Ge,physicalAddress:we,guadian:Ee}).then((function(e){if(fe(!1),e.data.error)return Object(h.c)(e.data.error),0;Object(h.m)("successfully added"),S(e.data.student)})).catch((function(e){fe(!1),console.log(e),Object(h.c)("something went wrong")}))})),className:" col blue__btn btn mr-5",children:xe?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}):"Save Changes"}),Object(O.jsx)("button",{onClick:function(e){e.preventDefault(),N(null===C||void 0===C?void 0:C.name),B(null===C||void 0===C?void 0:C.surname),k(null===C||void 0===C?void 0:C.gender),F(null===C||void 0===C?void 0:C.dateofBirth),J(null===C||void 0===C?void 0:C.email),U(null===C||void 0===C?void 0:C.nationality),$(null===C||void 0===C?void 0:C.placeofBirth),te(null===C||void 0===C?void 0:C.religion),re(null===C||void 0===C?void 0:C.health),me(null===C||void 0===C?void 0:C.allege),he(null===C||void 0===C?void 0:C.disease),ye(null===C||void 0===C?void 0:C.mobilenumber),qe(null===C||void 0===C?void 0:C.physicalAddress),Me(null===C||void 0===C?void 0:C.telephone),Pe(null===C||void 0===C?void 0:C.postalAddress),Ve(null===C||void 0===C?void 0:C.guadian)},className:" col btn  orange__btn mr-5",children:"Reset"})]})]})]})}}}]);
//# sourceMappingURL=138.a97bcc68.chunk.js.map