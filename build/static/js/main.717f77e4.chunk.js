(this.webpackJsonpspiral=this.webpackJsonpspiral||[]).push([[0],{104:function(e,a,t){},105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),i=t.n(c),l=t(24),o=t(26),m=t(52),s=t.n(m),u=t(65),p=t(11),d=t(70),g=t.n(d),f=t(107),b=t(53),E=t.n(b);E.a.initializeApp({apiKey:"AIzaSyDBwXnMsczR4_i08rWv-8DCjMi8L0A1Vi8",authDomain:"listkoo-e57bd.firebaseapp.com",databaseURL:"https://listkoo-e57bd.firebaseio.com",projectId:"listkoo-e57bd",storageBucket:"listkoo-e57bd.appspot.com",messagingSenderId:"88708603617",appId:"1:88708603617:web:99fcc12978bf122de6a1a0"});var v=E.a,h=t(156),j=t(31),y=t(140),O=t(143),x=t(145),w=t(157),S=t(155),N=t(147),C=t(148),k=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),B=function(){var e=k(),a=Object(n.useState)(""),t=Object(p.a)(a,2),c=t[0],i=t[1],m=Object(n.useState)(""),d=Object(p.a)(m,2),b=d[0],E=d[1],y=Object(n.useState)(""),B=Object(p.a)(y,2),W=B[0],A=B[1],D=Object(n.useState)(""),I=Object(p.a)(D,2),P=I[0],L=I[1],T=Object(n.useState)(!1),F=Object(p.a)(T,2),q=F[0],z=F[1],U=Object(n.useState)(!1),V=Object(p.a)(U,2),R=V[0],J=V[1],M=Object(j.a)(),K=function(){var e=Object(u.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),z(!0),""!==c&&""!==b){e.next=6;break}return A("Email and Password cannot be empty."),z(!1),e.abrupt("return");case 6:return e.next=8,v.auth().signInWithEmailAndPassword(c,b).catch((function(e){return M.current&&(z(!1),A(e.message)),null}));case 8:e.sent&&(M.current&&(z(!1),A(""),L("Login Successfully!")),setTimeout((function(){M.current&&J(!0)}),400));case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return R?r.a.createElement(o.a,{to:"/"}):r.a.createElement(O.a,{component:"main",maxWidth:"xs"},r.a.createElement(x.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(w.a,{className:e.avatar},r.a.createElement(g.a,{color:"primary"})),r.a.createElement(f.a,{component:"h1",variant:"h5"},"Login"),r.a.createElement("form",{className:e.form,noValidate:!0},P&&r.a.createElement(h.a,{severity:"success"},P),q?r.a.createElement(h.a,{severity:"warning"},"Please wait..."):W&&r.a.createElement(h.a,{severity:"error"},W),r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:c,onChange:function(e){return i(e.target.value)},autoFocus:!0}),r.a.createElement(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:b,onChange:function(e){return E(e.target.value)},autoComplete:"current-password"}),r.a.createElement(N.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(e){return K(e)},className:e.submit},"Login"),r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,xs:!0}),r.a.createElement(C.a,{item:!0},r.a.createElement(l.b,{to:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))))},W=t(71),A=t.n(W),D=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function I(){var e=D(),a=Object(n.useState)(""),t=Object(p.a)(a,2),c=t[0],i=t[1],m=Object(n.useState)(""),s=Object(p.a)(m,2),u=s[0],d=s[1],g=Object(n.useState)(""),b=Object(p.a)(g,2),E=b[0],y=b[1],k=Object(n.useState)(""),B=Object(p.a)(k,2),W=B[0],I=B[1],P=Object(n.useState)(!1),L=Object(p.a)(P,2),T=L[0],F=L[1],q=Object(n.useState)(""),z=Object(p.a)(q,2),U=z[0],V=z[1],R=Object(n.useState)(""),J=Object(p.a)(R,2),M=J[0],K=J[1],X=Object(n.useState)(!1),_=Object(p.a)(X,2),G=_[0],H=_[1],Q=Object(j.a)();return T?r.a.createElement(o.a,{to:"/login"}):r.a.createElement(O.a,{component:"main",maxWidth:"xs"},r.a.createElement(x.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(w.a,{className:e.avatar},r.a.createElement(A.a,{color:"primary"})),r.a.createElement(f.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},M&&r.a.createElement(h.a,{style:{marginBottom:15},severity:"success"},M),G?r.a.createElement(h.a,{style:{marginBottom:15},severity:"warning"},"Please wait..."):null,U&&r.a.createElement(h.a,{style:{marginBottom:15},severity:"error"},U),r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(C.a,{item:!0,xs:12,sm:6},r.a.createElement(S.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:E,onChange:function(e){return y(e.target.value)}})),r.a.createElement(C.a,{item:!0,xs:12,sm:6},r.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",value:W,onChange:function(e){return I(e.target.value)}})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:c,onChange:function(e){return i(e.target.value)}})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(S.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:u,onChange:function(e){return d(e.target.value)}}))),r.a.createElement(N.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){return function(e){e.preventDefault(),c&&u?(H(!0),v.auth().createUserWithEmailAndPassword(c,u).then((function(e){return e.user.updateProfile({displayName:"".concat(E," ").concat(W)}).then((function(){Q.current&&(H(!1),V(""),K("Signed Up Successfully")),setTimeout((function(){Q.current&&(y(""),I(""),d(""),i(""),F(!0))}),300)}))})).catch((function(e){Q.current&&(V(e.message),H(!1))}))):Q.current&&V("Email & Password cannot be empty!")}(e)}},"Sign Up"),r.a.createElement(C.a,{container:!0,justify:"flex-end"},r.a.createElement(C.a,{item:!0},r.a.createElement(l.b,{to:"/login",variant:"body2"},"Already have an account? Sign in"))))))}var P=t(149),L=t(146),T=t(151),F=t(72),q=t.n(F),z=t(150),U=t(5);var V=Object(U.a)((function(e){return{secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:"rgba(255, 255, 255, 0.7)","&:hover":{color:e.palette.common.white}},button:{borderColor:"rgba(255, 255, 255, 0.7)"}}}))((function(e){var a=e.classes,t=e.onDrawerToggle,n=e.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{color:"primary",position:"sticky",elevation:0},r.a.createElement(z.a,null,r.a.createElement(C.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(C.a,{item:!0},r.a.createElement(L.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton},r.a.createElement(q.a,null))),r.a.createElement(C.a,{item:!0,xs:!0}),r.a.createElement(C.a,{item:!0},r.a.createElement(T.a,{onClick:function(e){return function(e){e.preventDefault(),n()}(e)},className:a.link,href:"#",variant:"body2"},"Logout")),r.a.createElement(C.a,{item:!0},r.a.createElement(L.a,{color:"inherit",className:a.iconButtonAvatar},r.a.createElement(w.a,{src:"/static/images/avatar/1.jpg"})))))))})),R=t(152),J=t(153),M=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},title:{fontSize:30,paddingLeft:30,paddingRight:30,textAlign:"center",marginBottom:0},name:{fontSize:20,textAlign:"center"}}}));function K(){var e=M(),a=Object(n.useState)(""),t=Object(p.a)(a,2),c=t[0],i=t[1],l=Object(n.useState)(!0),m=Object(p.a)(l,2),s=m[0],u=m[1],d=Object(j.a)();Object(n.useEffect)((function(){v.auth().onAuthStateChanged((function(e){e?d.current&&(u(!0),i(e.displayName)):d.current&&u(!1)}))}),[]);return s?r.a.createElement("div",null,r.a.createElement(V,{logout:function(){v.auth().signOut()}}),r.a.createElement(O.a,{component:"main",maxWidth:"md"},r.a.createElement(x.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(R.a,{className:e.root,variant:"outlined"},r.a.createElement(J.a,null,r.a.createElement(f.a,{className:e.title,color:"textPrimary",gutterBottom:!0},"Welcome"),r.a.createElement(f.a,{className:e.name,color:"textSecondary",gutterBottom:!0},c)))))):r.a.createElement(o.a,{to:"/login"})}var X=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(o.b,{path:"/",exact:!0,component:K}),r.a.createElement(o.b,{path:"/login",exact:!0,component:B}),r.a.createElement(o.b,{path:"/signup",exact:!0,component:I})))},_=(t(103),t(73)),G=t(154),H=(t(104),Object(_.a)({palette:{primary:{light:"#fff",main:"#fb5533",dark:"#000",linear:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"},secondary:{main:"#eee"}},typography:{useNextVariants:!0}}));i.a.render(r.a.createElement(G.a,{theme:H},r.a.createElement(X,null)),document.getElementById("root"))},82:function(e,a,t){e.exports=t(105)}},[[82,1,2]]]);
//# sourceMappingURL=main.717f77e4.chunk.js.map