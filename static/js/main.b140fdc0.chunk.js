(window.webpackJsonpflipside=window.webpackJsonpflipside||[]).push([[0],{123:function(e,a,t){e.exports=t(265)},262:function(e,a,t){},263:function(e,a,t){},264:function(e,a,t){},265:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(119),m=t(10),i=t(18),c=t(76),o=function(){return Object(n.useContext)(i.d)},s={position:"absolute",height:"100vh",width:"100vw",overflowY:"scroll"},u=function(e){return r.a.createElement("div",{className:"uk-container uk-container-small"},r.a.createElement("div",{className:"uk-flex-center uk-flex-middle uk-height-viewport uk-child-width-1-2@s","data-uk-grid":!0,"data-uk-height-viewport":"min-height: 640;","data-uk-scrollspy":"target: div > *; cls: uk-animation-slide-bottom-small; delay: 150"},r.a.createElement("div",null,r.a.createElement("h2",null,"Succeeding with the over 50s is the fastest growth hack available to any consumer driven business")),r.a.createElement("div",{className:"uk-width-expand uk-margin-large-left@s"},r.a.createElement("div",null,r.a.createElement("p",null,"People over 50 hold 80% of the wealth and 70% of the income in the United States but are the target of only 5% of marketing spend"),r.a.createElement("p",null,"And they are starting life all over again"),r.a.createElement("p",null,"If you want to be a first mover, if you want find out how your brand can be the first choice for the wealthiest and most dynamic demographic in America email us at ",r.a.createElement("a",{href:"mailto:chris@flipside.global?subject=Contact from Flipside web site"},"chris@flipside.global")),r.a.createElement("p",null,"Discover success on the Flipside.")))))},d=function(e){var a=o().location;return r.a.createElement("div",{style:"/"!==a.pathname?s:null},r.a.createElement(u,null))},h=function(e){return r.a.createElement("div",{style:s},r.a.createElement(d,null))},k=t(6),v=t(16),p=t(13),g=t(12),b=t(14),E=t(32),f=t(74),y=function(e){var a=e.children,t=Object(f.a)(e,["children"]);return r.a.createElement("button",{type:t.type,className:"uk-button uk-button-".concat(t.size," uk-button-").concat(t.format," uk-border-rounded")},a)},w=t(37),N=function(){return w.object().shape({name:w.string().required("Please enter your first name"),email:w.string().email("Please enter a valid email address").required("Please enter your email address"),comment:w.string().required("Please enter your message")})},x=function(e){function a(){var e,t;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){var a={name:e.name,email:e.email,comment:e.comment};console.log("FORM SUBMIT",a)},t}return Object(b.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement(E.c,{initialValues:{name:"",email:"",comment:""},validationSchema:N,onSubmit:this.handleSubmit,render:function(e){var a=e.handleChange,t=e.handleBlur,n=e.values,l=e.errors,m=e.touched,i=e.isSubmitting;e.validateForm;return r.a.createElement(E.b,null,r.a.createElement("fieldset",{className:"uk-fieldset"},r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"name",className:"uk-text-muted"},"Name",r.a.createElement(E.a,{onChange:a,onBlur:t,value:n.name,name:"name",label:l.name&&m.name?l.name:"First name",placeholder:l.name&&m.name&&l.name,className:"uk-input uk-border-rounded ".concat(l.name&&m.name?"uk-form-danger":"uk-form"),required:!0}))),r.a.createElement("div",{className:"uk-margin-small-top"},r.a.createElement("label",{htmlFor:"email",className:"uk-text-muted"},"Email address",r.a.createElement(E.a,{onChange:a,onBlur:t,value:n.email,name:"email",label:"Email address",placeholder:l.email&&m.email&&l.email,className:"uk-input uk-border-rounded ".concat(l.email&&m.email?"uk-form-danger":"uk-form"),required:!0}))),r.a.createElement("div",{className:"uk-margin-small-top"},r.a.createElement("label",{htmlFor:"comment",className:"uk-text-muted"},"Your message",r.a.createElement(E.a,{component:"textarea",name:"comment",label:l.comment&&m.comment?l.comment:"Your message",placeholder:l.comment&&m.comment&&l.comment,rows:"4",className:"uk-textarea uk-border-rounded ".concat(l.comment&&m.comment?"uk-form-danger":null),required:!0}))),r.a.createElement("div",{className:"uk-margin-medium-top uk-text-right"},r.a.createElement(y,{type:"submit",size:"large",format:"primary",disabled:i},"Submit"))))}})}}]),a}(n.Component),j=function(e){var a=o().location;return r.a.createElement("section",{style:"/"!==a.pathname?s:null,className:"uk-section uk-section-secondary uk-padding-remove-bottom"},r.a.createElement("div",{className:"uk-container uk-margin-large-top"},r.a.createElement("h2",{className:"uk-text-center section-title-primary uk-margin-large-top"},"Get in touch"),r.a.createElement("p",{className:"uk-align-center uk-text-center uk-width-1-2@s uk-margin-large-bottom"},"Lorem ipsum dolor sit amet."),r.a.createElement("div",{className:"uk-container uk-container-small"},r.a.createElement("div",null,r.a.createElement(x,null)))))};t(262),t(263),t(264);var F=t(75),O=t.n(F),S=function(){var e=o().location;return r.a.createElement("div",{className:"nav","data-uk-sticky":"cls-active: uk-background-secondary uk-light; top: 5vh; animation: uk-animation-fade"},r.a.createElement("div",{className:"uk-container uk-container-small"},r.a.createElement("nav",{className:"uk-navbar uk-navbar-container uk-navbar-transparent","data-uk-navbar":!0},r.a.createElement("div",{className:"uk-navbar-left"},r.a.createElement("div",{className:"uk-navbar-item"},"/"===e.pathname?r.a.createElement("img",{src:O.a,width:"75px",alt:"Flipside Logo","data-uk-image":!0}):r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{src:O.a,width:"75px",alt:"Flipside Logo","data-uk-image":!0})))),"/contact"!==e.pathname&&r.a.createElement("div",{className:"uk-navbar-right"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",null,r.a.createElement(m.b,{to:"/contact"},r.a.createElement("span",{className:"uk-icon uk-margin-small-right","data-uk-icon":"icon: commenting; ratio: 0.85"})," Contact")))),"/"!==e.pathname&&r.a.createElement("div",{className:"uk-navbar-right"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},r.a.createElement("span",{className:"uk-icon uk-margin-small-right","data-uk-icon":"icon: home; ratio: 0.85"})," Home")))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(l.render)(r.a.createElement(m.a,{basename:"/flipside"},r.a.createElement(S,null),r.a.createElement((function(){var e=o().location;return Object(c.b)(e,(function(e){return e.pathname}),{from:{opacity:0,transform:"translate3d(0, 80vh, 0)"},enter:{opacity:1,transform:"translate3d(0, 0, 0)"},leave:{opacity:0,transform:"translate3d(0, -50vh, 0)"}}).map((function(e){var a=e.item,t=e.props,n=e.key;return r.a.createElement(c.a.div,{key:n,style:t},r.a.createElement(i.c,{location:a},r.a.createElement(i.a,{path:"/contact",component:j}),r.a.createElement(i.a,{path:"/",component:h})))}))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,a,t){e.exports=t.p+"static/media/flipside-logo.8601b15a.svg"}},[[123,1,2]]]);
//# sourceMappingURL=main.b140fdc0.chunk.js.map