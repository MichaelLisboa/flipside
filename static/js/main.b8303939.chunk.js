(window.webpackJsonpflipside=window.webpackJsonpflipside||[]).push([[0],{123:function(e,a,t){e.exports=t(265)},262:function(e,a,t){},263:function(e,a,t){},264:function(e,a,t){},265:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(119),o=t(17),m=t(18),i=t(76),c=function(){return Object(n.useContext)(m.d)},s={position:"absolute",height:"100vh",width:"100vw",overflowY:"scroll"},u=t(37),d=t.n(u),k=function(e){return r.a.createElement("div",{className:"uk-container uk-container-small"},r.a.createElement("div",{className:"content-card-container uk-grid-collapse uk-flex-center uk-flex-middle uk-height-viewport","data-uk-grid":!0,"data-uk-height-viewport":"min-height: 640; offset-top: true; offset-bottom: 20px"},r.a.createElement("div",{className:"uk-card uk-card-default uk-box-shadow-large uk-box-shadow-hover-xlarge uk-border-rounded"},r.a.createElement("div",{className:"uk-padding-remove uk-card-body uk-grid-collapse uk-child-width-1-2@s","data-uk-grid":!0},r.a.createElement("div",{className:"big-message uk-flex uk-flex-middle uk-background-success uk-padding-large","data-uk-scrollspy":"target: h2 > *; cls: uk-animation-slide-bottom-small; delay: 150"},r.a.createElement("h2",{style:{color:"#fff"}},r.a.createElement("span",null,"Succeeding")," ",r.a.createElement("span",null,"with the")," ",r.a.createElement("span",null,"over 50s")," ",r.a.createElement("span",null,"is the")," ",r.a.createElement("span",null,"fastest growth hack")," ",r.a.createElement("span",null,"available to")," ",r.a.createElement("span",null,"any consumer driven business"))),r.a.createElement("div",{className:"support-copy uk-flex uk-flex-middle uk-padding-large","data-uk-scrollspy":"target: div > *; cls: uk-animation-slide-bottom-small; delay: 350"},r.a.createElement("div",null,r.a.createElement("p",null,"People over 50 hold 80% of the wealth and 70% of the income in the United States but are the target of only 5% of marketing spend"),r.a.createElement("p",null,"What's more, they are starting life all over again"),r.a.createElement("p",null,"If you want to be a first mover, if you want find out how your brand can be the first choice for the wealthiest and most dynamic demographic in America contact us at:"),r.a.createElement("p",{className:"uk-text-center"},r.a.createElement("a",{href:"mailto:chris@flipside.global?subject=Contact from Flipside web site"},"chris@flipside.global")," ",r.a.createElement("br",null),r.a.createElement("span",{className:"uk-margin"},"or"),r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:vaughan@flipside.global?subject=Contact from Flipside web site"},"vaughan@flipside.global")),r.a.createElement("p",{className:"uk-text-center"},"Discover success on the",r.a.createElement("br",null),r.a.createElement("img",{className:"uk-margin-small",src:d.a,width:"100px",alt:"Flipside Logo","data-uk-image":!0}))))))))},p=function(e){var a=c().location;return r.a.createElement("div",{style:"/"!==a.pathname?s:null,className:"wrap-green uk-height-viewport uk-background-success-light"},r.a.createElement(k,null))},h=function(e){return r.a.createElement("div",{style:s},r.a.createElement(p,null))},g=t(6),f=t(15),b=t(12),v=t(11),E=t(13),w=t(32),y=t(75),N=function(e){var a=e.children,t=Object(y.a)(e,["children"]);return r.a.createElement("button",{type:t.type,className:"uk-button uk-button-".concat(t.size," uk-button-").concat(t.format," uk-border-rounded")},a)},x=t(38),j=function(){return x.object().shape({name:x.string().required("Please enter your first name"),email:x.string().email("Please enter a valid email address").required("Please enter your email address"),comment:x.string().required("Please enter your message")})},F=function(e){function a(){var e,t;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(b.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){var a={name:e.name,email:e.email,comment:e.comment};console.log("FORM SUBMIT",a)},t}return Object(E.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement(w.c,{initialValues:{name:"",email:"",comment:""},validationSchema:j,onSubmit:this.handleSubmit,render:function(e){var a=e.handleChange,t=e.handleBlur,n=e.values,l=e.errors,o=e.touched,m=e.isSubmitting;e.validateForm;return r.a.createElement(w.b,{className:"uk-width-4-5@m uk-align-center"},r.a.createElement("fieldset",{className:"uk-fieldset"},r.a.createElement("div",{className:"uk-grid-small uk-child-width-1-2@m","data-uk-grid":!0},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name",r.a.createElement(w.a,{onChange:a,onBlur:t,value:n.name,name:"name",label:l.name&&o.name?l.name:"First name",placeholder:l.name&&o.name&&l.name,className:"uk-input uk-form-large uk-border-rounded ".concat(l.name&&o.name?"uk-form-danger":"uk-form"),required:!0}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address",r.a.createElement(w.a,{onChange:a,onBlur:t,value:n.email,name:"email",label:"Email address",placeholder:l.email&&o.email&&l.email,className:"uk-input uk-form-large uk-border-rounded ".concat(l.email&&o.email?"uk-form-danger":"uk-form"),required:!0})))),r.a.createElement("div",{className:"uk-margin-small-top"},r.a.createElement("label",{htmlFor:"comment"},"Your message",r.a.createElement(w.a,{component:"textarea",name:"comment",label:l.comment&&o.comment?l.comment:"Your message",placeholder:l.comment&&o.comment&&l.comment,rows:"4",className:"uk-textarea uk-form-large uk-border-rounded ".concat(l.comment&&o.comment?"uk-form-danger":null),required:!0}))),r.a.createElement("div",{className:"uk-margin-medium-top uk-text-center"},r.a.createElement(N,{type:"submit",size:"large",format:"primary",disabled:m},"Submit"))))}})}}]),a}(n.Component),O=function(e){var a=c().location;return r.a.createElement("section",{style:"/"!==a.pathname?s:null,className:"wrap wrap-blue uk-section uk-background-primary uk-padding-remove-bottom"},r.a.createElement("div",{className:"uk-container uk-container-small uk-margin-top"},r.a.createElement("div",{className:"uk-card uk-card-default uk-card-large uk-box-shadow-medium uk-box-shadow-hover-xlarge uk-padding uk-margin-top uk-margin-bottom"},r.a.createElement("h2",{className:"section-title-primary uk-text-center uk-margin-top"},"Get in touch."),r.a.createElement("p",{className:"uk-align-center uk-text-center uk-width-1-2@s uk-margin-bottom"},"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."),r.a.createElement(F,null))))};t(262),t(263),t(264);var S=function(){var e=c().location;return r.a.createElement("div",{className:"nav","data-uk-sticky":"cls-active: uk-background-secondary uk-light; top: 5vh; animation: uk-animation-fade"},r.a.createElement("div",{className:"uk-container uk-container-small"},r.a.createElement("nav",{className:"uk-navbar uk-navbar-container uk-navbar-transparent","data-uk-navbar":!0},r.a.createElement("div",{className:"uk-navbar-left"},r.a.createElement("div",{className:"uk-navbar-item"},"/"===e.pathname?r.a.createElement("img",{src:d.a,width:"150px",alt:"Flipside Logo","data-uk-image":!0}):r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:d.a,width:"150px",alt:"Flipside Logo","data-uk-image":!0})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(l.render)(r.a.createElement(o.a,{basename:"/flipside"},r.a.createElement(S,null),r.a.createElement((function(){var e=c().location;return Object(i.b)(e,(function(e){return e.pathname}),{from:{opacity:0,transform:"translate3d(0, 80vh, 0)"},enter:{opacity:1,transform:"translate3d(0, 0, 0)"},leave:{opacity:0,transform:"translate3d(0, -50vh, 0)"},config:{duration:300,mass:1,tension:500,friction:25}}).map((function(e){var a=e.item,t=e.props,n=e.key;return r.a.createElement(i.a.div,{key:n,style:t},r.a.createElement(m.c,{location:a},r.a.createElement(m.a,{path:"/contact",component:O}),r.a.createElement(m.a,{path:"/",component:h})))}))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,a,t){e.exports=t.p+"static/media/flipside-logo.8601b15a.svg"}},[[123,1,2]]]);
//# sourceMappingURL=main.b8303939.chunk.js.map