(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[76],{10:function(a,e,t){"use strict";t.d(e,"a",(function(){return n}));var n={ID:"id",PhotoURL:"PhotoURL",NAME:"name",EMAIL:"email",TOKEN:"token",USERROLE:"role",MIDNAME:"middleName",LASTNAME:"lastname"}},138:function(a,e,t){"use strict";t.d(e,"a",(function(){return r}));t(1);var n=t(562),o=t(564),i=t(560),c=t(14),l=Object(i.a)((function(a){return{backdrop:{zIndex:a.zIndex.drawer+1,color:"#fff"}}}));function r(){var a=l();return Object(c.jsx)("div",{children:Object(c.jsx)(n.a,{className:a.backdrop,open:!0,children:Object(c.jsx)(o.a,{color:"inherit"})})})}},194:function(a,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return u}));var n=t(38),o=t(32),i=t(26),c=t(10),l=t(60),r=(t(98),function(){n.a.get("/classes").then((function(a){i.a.dispatch(Object(o.p)(null===a||void 0===a?void 0:a.data))})),n.a.get("/sections").then((function(a){i.a.dispatch(Object(o.v)(null===a||void 0===a?void 0:a.data))})),n.a.get("/courses").then((function(a){i.a.dispatch(Object(o.q)(null===a||void 0===a?void 0:a.data))})),n.a.get("/scholarships").then((function(a){i.a.dispatch(Object(o.u)(null===a||void 0===a?void 0:a.data))})),n.a.get("/campuses").then((function(a){i.a.dispatch(Object(o.o)(null===a||void 0===a?void 0:a.data))})),n.a.get("/dormitories").then((function(a){i.a.dispatch(Object(o.t)(null===a||void 0===a?void 0:a.data))})),n.a.get("/departments").then((function(a){i.a.dispatch(Object(o.r)(null===a||void 0===a?void 0:a.data))})),n.a.get("/divisions").then((function(a){i.a.dispatch(Object(o.s)(null===a||void 0===a?void 0:a.data))})),n.a.get("/fees/types").then((function(a){i.a.dispatch(Object(o.y)(null===a||void 0===a?void 0:a.data))})),n.a.get("/yeargroup").then((function(a){i.a.dispatch(Object(o.x)(null===a||void 0===a?void 0:a.data))})),n.a.get("/academicyear/admin").then((function(a){i.a.dispatch(Object(o.n)(null===a||void 0===a?void 0:a.data))})),n.a.get("/teachers").then((function(a){i.a.dispatch(Object(o.w)(null===a||void 0===a?void 0:a.data))}))}),s=function(a){i.a.dispatch(Object(l.b)({userID:null===a||void 0===a?void 0:a.userID,id:null===a||void 0===a?void 0:a.userID,name:null===a||void 0===a?void 0:a.name,email:null===a||void 0===a?void 0:a.email,photoUrl:null===a||void 0===a?void 0:a.profileUrl,role:null===a||void 0===a?void 0:a.role,lastName:null===a||void 0===a?void 0:a.surname,middleName:null===a||void 0===a?void 0:a.middleName})),localStorage.setItem(c.a.ID,null===a||void 0===a?void 0:a.userID),localStorage.setItem(c.a.PhotoURL,null===a||void 0===a?void 0:a.profileUrl),localStorage.setItem(c.a.NAME,null===a||void 0===a?void 0:a.name),localStorage.setItem(c.a.EMAIL,null===a||void 0===a?void 0:a.email),localStorage.setItem(c.a.USERROLE,null===a||void 0===a?void 0:a.role),localStorage.setItem(c.a.LASTNAME,null===a||void 0===a?void 0:a.surname),localStorage.setItem(c.a.MIDNAME,null===a||void 0===a?void 0:a.middleName),r()},u=function(){localStorage.getItem(c.a.ID)?(i.a.dispatch(Object(l.b)({userID:localStorage.getItem((null===c.a||void 0===c.a?void 0:c.a.ID)||""),id:localStorage.getItem((null===c.a||void 0===c.a?void 0:c.a.ID)||""),photoUrl:localStorage.getItem((null===c.a||void 0===c.a?void 0:c.a.PhotoURL)||""),email:localStorage.getItem((null===c.a||void 0===c.a?void 0:c.a.EMAIL)||""),name:localStorage.getItem((null===c.a||void 0===c.a?void 0:c.a.NAME)||""),role:localStorage.getItem((null===c.a||void 0===c.a?void 0:c.a.USERROLE)||""),lastName:localStorage.getItem((null===c.a||void 0===c.a?void 0:c.a.LASTNAME)||""),middleName:localStorage.getItem((null===c.a||void 0===c.a?void 0:c.a.middleName)||"")})),r()):i.a.dispatch(Object(l.c)())}},26:function(a,e,t){"use strict";var n=t(63),o=t(60),i=t(98),c=t(32);e.a=Object(n.a)({reducer:{user:o.a,app:i.a,school:c.a}})},32:function(a,e,t){"use strict";t.d(e,"n",(function(){return c})),t.d(e,"p",(function(){return l})),t.d(e,"q",(function(){return r})),t.d(e,"t",(function(){return s})),t.d(e,"u",(function(){return u})),t.d(e,"o",(function(){return d})),t.d(e,"r",(function(){return h})),t.d(e,"v",(function(){return p})),t.d(e,"y",(function(){return f})),t.d(e,"s",(function(){return v})),t.d(e,"w",(function(){return m})),t.d(e,"x",(function(){return g})),t.d(e,"c",(function(){return b})),t.d(e,"d",(function(){return j})),t.d(e,"g",(function(){return V})),t.d(e,"i",(function(){return A})),t.d(e,"b",(function(){return y})),t.d(e,"j",(function(){return O})),t.d(e,"h",(function(){return M})),t.d(e,"m",(function(){return S})),t.d(e,"k",(function(){return L})),t.d(e,"e",(function(){return w})),t.d(e,"f",(function(){return x})),t.d(e,"l",(function(){return I}));var n=t(63),o=Object(n.b)({name:"school",initialState:{classes:[],courses:[],dormitories:[],scholarships:[],campuses:[],sections:[],feesTypes:[],staff:[],departments:[],divisions:[],yearGroup:[],academicYear:{}},reducers:{setClasses:function(a,e){a.classes=e.payload},setCourses:function(a,e){a.courses=e.payload},setDormitories:function(a,e){a.dormitories=e.payload},setScholarships:function(a,e){a.scholarships=e.payload},setCampuses:function(a,e){a.campuses=e.payload},setSections:function(a,e){a.sections=e.payload},setfeesType:function(a,e){a.feesTypes=e.payload},setAcademicYear:function(a,e){a.academicYear=e.payload},setStaff:function(a,e){a.staff=e.payload},setDepartments:function(a,e){a.departments=e.payload},setDivisions:function(a,e){a.divisions=e.payload},setYeargroup:function(a,e){a.yearGroup=e.payload}}}),i=o.actions,c=i.setAcademicYear,l=i.setClasses,r=i.setCourses,s=i.setDormitories,u=i.setScholarships,d=i.setCampuses,h=i.setDepartments,p=i.setSections,f=i.setfeesType,v=i.setDivisions,m=i.setStaff,g=i.setYeargroup,b=function(a){return a.school.classes},j=function(a){return a.school.courses},V=function(a){return a.school.dormitories},A=function(a){return a.school.scholarships},y=function(a){return a.school.campuses},O=function(a){return a.school.sections},M=function(a){return a.school.feesTypes},S=function(a){return a.school.academicYear},L=function(a){return a.school.staff},w=function(a){return a.school.departments},x=function(a){return a.school.divisions},I=function(a){return a.school.yearGroup};e.a=o.reducer},38:function(a,e,t){"use strict";var n=t(416),o=t.n(n).a.create({baseURL:"https://inovotek-sms.herokuapp.com/api"});e.a=o},530:function(a,e){!function(){if("function"===typeof window.CustomEvent)return!1;function a(a,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(a,e.bubbles,e.cancelable,e.detail),t}a.prototype=window.Event.prototype,window.CustomEvent=a}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(a){var e=this;do{if(Element.prototype.matches.call(e,a))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null})},535:function(a,e,t){},559:function(a,e,t){"use strict";t.r(e);t(140),t(149),t(150),t(151),t(152),t(153),t(154),t(155),t(156),t(157),t(158),t(159),t(160),t(161),t(162),t(205),t(207),t(208),t(209),t(210),t(211),t(213),t(164),t(216),t(92),t(219),t(220),t(221),t(222),t(223),t(224),t(225),t(226),t(227),t(228),t(229),t(232),t(233),t(234),t(235),t(170),t(117),t(237),t(239),t(240),t(241),t(242),t(243),t(244),t(245),t(247),t(248),t(249),t(250),t(251),t(252),t(253),t(254),t(172),t(255),t(256),t(257),t(259),t(261),t(262),t(263),t(264),t(265),t(266),t(268),t(269),t(271),t(272),t(273),t(275),t(276),t(277),t(278),t(279),t(280),t(281),t(283),t(284),t(285),t(286),t(287),t(288),t(289),t(290),t(291),t(174),t(292),t(293),t(299),t(300),t(301),t(302),t(303),t(304),t(305),t(306),t(307),t(308),t(309),t(310),t(311),t(312),t(176),t(313),t(314),t(178),t(315),t(316),t(317),t(318),t(125),t(319),t(320),t(323),t(324),t(325),t(326),t(328),t(329),t(330),t(331),t(332),t(333),t(334),t(335),t(336),t(337),t(338),t(339),t(340),t(341),t(342),t(343),t(344),t(345),t(346),t(347),t(350),t(351),t(352),t(353),t(354),t(355),t(356),t(357),t(358),t(359),t(360),t(361),t(362),t(363),t(364),t(365),t(366),t(367),t(368),t(369),t(370),t(371),t(372),t(373),t(375),t(376),t(377),t(378),t(379),t(380),t(381),t(382),t(383),t(129),t(385),t(433),t(435),t(436),t(437),t(438),t(439),t(441),t(442),t(443),t(444),t(445),t(446),t(447),t(448),t(450),t(451),t(452),t(453),t(454),t(455),t(456),t(457),t(458),t(459),t(460),t(461),t(462),t(463),t(464),t(465),t(466),t(467),t(468),t(469),t(470),t(471),t(472),t(473),t(474),t(476),t(478),t(479),t(480),t(481),t(482),t(483),t(484),t(485),t(486),t(487),t(488),t(489),t(490),t(491),t(492),t(493),t(494),t(495),t(496),t(497),t(498),t(499),t(500),t(501),t(502),t(503),t(504),t(505),t(506),t(507),t(508),t(510),t(389),t(390),t(391),t(512),t(513),t(514),t(515),t(516),t(517),t(518),t(392),t(394),t(395),t(396),t(397),t(399),t(183),t(521),t(526),t(530);var n=t(1),o=t.n(n),i=t(50),c=t.n(i),l=t(77),r=t(135),s=t(22),u=(t(535),t(76)),d=t(138),h=t(98),p=t(60),f=t(14),v=function(a){var e=a.Component,t=a.path,n=a.isAuth,o=a.exact,i=a.name;return n?Object(f.jsx)(s.b,{path:t,name:i,exact:o,render:function(a){return Object(f.jsx)(e,Object(l.a)({},a))}}):Object(f.jsx)(s.a,{to:"/login"})},m=function(a){var e=a.component,t=a.path,n=a.isAuth,o=a.exact;return n?Object(f.jsx)(s.a,{to:"/"}):Object(f.jsx)(s.b,{path:t,component:e,exact:o})},g=t(192),b=(t(541),o.a.lazy((function(){return Promise.all([t.e(8),t.e(17),t.e(88),t.e(159)]).then(t.bind(null,1914))}))),j=o.a.lazy((function(){return Promise.all([t.e(2),t.e(8),t.e(17),t.e(160)]).then(t.bind(null,1802))})),V=o.a.lazy((function(){return Promise.all([t.e(2),t.e(8),t.e(17),t.e(174)]).then(t.bind(null,1803))})),A=o.a.lazy((function(){return Promise.all([t.e(2),t.e(8),t.e(17),t.e(173)]).then(t.bind(null,1804))})),y=o.a.lazy((function(){return Promise.all([t.e(8),t.e(186)]).then(t.bind(null,1805))})),O=o.a.lazy((function(){return Promise.all([t.e(8),t.e(187)]).then(t.bind(null,1806))}));var M=function(){var a=Object(u.c)(p.d),e=Object(u.c)(h.b);return console.log(e),Object(f.jsxs)(r.a,{children:[Object(f.jsx)(g.a,{}),e&&Object(f.jsx)(d.a,{}),Object(f.jsx)(o.a.Suspense,{fallback:Object(f.jsx)(d.a,{}),children:Object(f.jsxs)(s.d,{children:[Object(f.jsx)(m,{isAuth:a,exact:!0,path:"/login",name:"Login Page",component:j}),Object(f.jsx)(m,{isAuth:a,exact:!0,path:"/password/reset/:id",name:"Login Page",component:V}),Object(f.jsx)(m,{isAuth:a,exact:!0,path:"/password/forget",name:"Login Page",component:A}),Object(f.jsx)(v,{isAuth:a,path:"/",name:"Home",Component:b}),Object(f.jsx)(s.b,{path:"/500",exact:!0,name:"Page 500",render:function(a){return Object(f.jsx)(O,Object(l.a)({},a))}}),Object(f.jsx)(s.b,{path:"*",exact:!0,name:"Page 404",render:function(a){return Object(f.jsx)(y,Object(l.a)({},a))}})]})})]})},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(a,e){navigator.serviceWorker.register(a).then((function(a){a.onupdatefound=function(){var t=a.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),e.onUpdate&&e.onUpdate(a)):(console.log("Content is cached for offline use."),e.onSuccess&&e.onSuccess(a)))}}})).catch((function(a){console.error("Error during service worker registration:",a)}))}var w=t(591),x=t(687),I=t(688),Z=t(689),C=t(690),E=t(691),k=t(692),P=t(693),H=t(694),N=t(695),D=t(696),U=t(697),T=t(698),R=t(699),q=t(700),B=t(701),z=t(702),G=t(703),Y=t(704),F=t(705),W=t(706),J=t(707),Q=t(708),X=t(709),K=t(710),$=t(681),_=t(682),aa=t(683),ea=t(684),ta=t(685),na=t(686),oa=t(585),ia=t(586),ca=t(587),la=t(588),ra=t(589),sa=t(590),ua=t(592),da=t(593),ha=t(594),pa=t(595),fa=t(596),va=t(597),ma=t(598),ga=t(599),ba=t(600),ja=t(601),Va=t(602),Aa=t(603),ya=t(604),Oa=t(605),Ma=t(606),Sa=t(607),La=t(608),wa=t(609),xa=t(610),Ia=t(611),Za=t(612),Ca=t(613),Ea=t(614),ka=t(615),Pa=t(616),Ha=t(617),Na=t(618),Da=t(619),Ua=t(620),Ta=t(621),Ra=t(622),qa=t(623),Ba=t(624),za=t(625),Ga=t(626),Ya=t(627),Fa=t(628),Wa=t(629),Ja=t(630),Qa=t(631),Xa=t(632),Ka=t(633),$a=t(634),_a=t(635),ae=t(636),ee=t(637),te=t(638),ne=t(639),oe=t(640),ie=t(641),ce=t(642),le=t(643),re=t(644),se=t(645),ue=t(646),de=t(647),he=t(648),pe=t(649),fe=t(650),ve=t(651),me=t(652),ge=t(653),be=t(654),je=t(655),Ve=t(656),Ae=t(657),ye=t(658),Oe=t(659),Me=t(660),Se=t(661),Le=t(662),we=t(663),xe=t(664),Ie=t(665),Ze=t(666),Ce=t(667),Ee=t(668),ke=t(669),Pe=t(670),He=t(671),Ne=t(672),De=t(673),Ue=t(674),Te=t(675),Re=t(676),qe=t(677),Be=t(678),ze=t(679),Ge=t(680),Ye=Object.assign({},{sygnet:["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],logo:["608 134",'\n  <title>coreui react pro</title>\n  <g>\n    <g style="fill:#00a1ff">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],logoNegative:["608 134",'\n  <title>coreui react pro logo</title>\n  <g>\n    <g style="fill:#80d0ff;">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n\n    <g style="fill:#fff;">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n']},{cilAlignCenter:oa.a,cilAlignLeft:ia.a,cilInstitution:ca.a,cilWallet:la.a,cilBook:ra.a,cilMoney:sa.a,cilChatBubble:w.a,cilAlignRight:ua.a,cilApplicationsSettings:da.a,cilArrowRight:ha.a,cilArrowTop:pa.a,cilAsterisk:fa.a,cilBan:va.a,cilBasket:ma.a,cilBell:ga.a,cilBold:ba.a,cilBookmark:ja.a,cilCalculator:Va.a,cilCalendar:Aa.a,cilCloudDownload:ya.a,cilChartPie:Oa.a,cilCheck:Ma.a,cilChevronBottom:Sa.a,cilChevronLeft:La.a,cilChevronRight:wa.a,cilChevronTop:xa.a,cilCircle:Ia.a,cilCheckCircle:Za.a,cilCode:Ca.a,cilCommentSquare:Ea.a,cilCreditCard:ka.a,cilCursor:Pa.a,cilCursorMove:Ha.a,cilDrop:Na.a,cilDollar:Da.a,cilEnvelopeClosed:Ua.a,cilEnvelopeLetter:Ta.a,cilEnvelopeOpen:Ra.a,cilEuro:qa.a,cilGlobeAlt:Ba.a,cilGrid:za.a,cilFile:Ga.a,cilFullscreen:Ya.a,cilFullscreenExit:Fa.a,cilGraph:Wa.a,cilHome:Ja.a,cilInbox:Qa.a,cilIndentDecrease:Xa.a,cilIndentIncrease:Ka.a,cilInputPower:$a.a,cilItalic:_a.a,cilJustifyCenter:ae.a,cilJustifyLeft:ee.a,cilLaptop:te.a,cilLayers:ne.a,cilLightbulb:oe.a,cilList:ie.a,cilListNumbered:ce.a,cilListRich:le.a,cilLocationPin:re.a,cilLockLocked:se.a,cilMagnifyingGlass:ue.a,cilMap:de.a,cilMoon:he.a,cilNotes:pe.a,cilOptions:fe.a,cilPaperclip:ve.a,cilPaperPlane:me.a,cilPencil:ge.a,cilPeople:be.a,cilPhone:je.a,cilPrint:Ve.a,cilPuzzle:Ae.a,cilSave:ye.a,cilScrubber:Oe.a,cilSettings:Me.a,cilShare:Se.a,cilShareAll:Le.a,cilShareBoxed:we.a,cilShieldAlt:xe.a,cilSpeech:Ie.a,cilSpeedometer:Ze.a,cilSpreadsheet:Ce.a,cilStar:Ee.a,cilSun:ke.a,cilTags:Pe.a,cilTask:He.a,cilTrash:Ne.a,cilUnderline:De.a,cilUser:Ue.a,cilUserFemale:Te.a,cilUserFollow:Re.a,cilUserUnfollow:qe.a,cilX:Be.a,cilXCircle:ze.a,cilWarning:Ge.a},{cifUs:$.a,cifBr:_.a,cifIn:aa.a,cifFr:ea.a,cifEs:ta.a,cifPl:na.a},{cibSkype:x.a,cibFacebook:I.a,cibTwitter:Z.a,cibLinkedin:C.a,cibFlickr:E.a,cibTumblr:k.a,cibXing:P.a,cibGithub:H.a,cibStackoverflow:N.a,cibYoutube:D.a,cibDribbble:U.a,cibInstagram:T.a,cibPinterest:R.a,cibVk:q.a,cibYahoo:B.a,cibBehance:z.a,cibReddit:G.a,cibVimeo:Y.a,cibCcMastercard:F.a,cibCcVisa:W.a,cibStripe:J.a,cibPaypal:Q.a,cibGooglePay:X.a,cibCcAmex:K.a}),Fe=t(194),We=t(26);Object(Fe.b)(),o.a.icons=Ye,c.a.render(Object(f.jsx)(u.a,{store:We.a,children:Object(f.jsx)(M,{})}),document.getElementById("root")),function(a){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");S?(!function(a,e){fetch(a).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(a){a.unregister().then((function(){window.location.reload()}))})):L(a,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,a),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):L(e,a)}))}}()},60:function(a,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return l})),t.d(e,"e",(function(){return r})),t.d(e,"d",(function(){return s}));var n=t(63),o=Object(n.b)({name:"user",initialState:{user:null},reducers:{loggin:function(a,e){a.user=e.payload},logout:function(a){console.log(a),a.user=null},update:function(a,e){a.user=Object.assign({},a.user,e.payload)}}}),i=o.actions,c=i.loggin,l=i.logout,r=i.update,s=function(a){return a.user.user};e.a=o.reducer},98:function(a,e,t){"use strict";t.d(e,"d",(function(){return c})),t.d(e,"c",(function(){return l})),t.d(e,"b",(function(){return r}));var n=t(63),o=Object(n.b)({name:"app",initialState:{sidebarShow:"responsive",showLoading:!1},reducers:{set:function(a,e){a.sidebarShow=e.payload},setLoading:function(a,e){console.log(e.payload),a.showLoading=e.payload}}}),i=o.actions,c=i.set,l=(i.setLoading,function(a){return a.app.sidebarShow}),r=function(a){return a.app.showLoading};e.a=o.reducer}},[[559,77,78]]]);
//# sourceMappingURL=main.94003a1a.chunk.js.map