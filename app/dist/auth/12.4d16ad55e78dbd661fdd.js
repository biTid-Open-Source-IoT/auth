(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4+IK":function(t,e,r){"use strict";r.r(e),r.d(e,"AccountModule",(function(){return z}));var n=r("mrSG"),o=r("3Pt+"),s=r("fXoL"),a=r("9ZKQ"),i=r("BhS5"),c=r("IRyT"),m=r("4jEk"),d=r("in+p"),f=r("FKr1"),u=r("NFeN"),l=r("kmnG"),p=r("qFsG"),h=r("ofXK"),b=r("bTqV"),g=r("tyNb"),k=r("Xa2L");function w(t,e){if(1&t&&(s.Sb(0,"mat-error"),s.Bc(1),s.Rb()),2&t){const t=s.ec();s.Ab(1),s.Dc(" ",t.errors.name.first," ")}}function _(t,e){if(1&t&&(s.Sb(0,"mat-error"),s.Bc(1),s.Rb()),2&t){const t=s.ec();s.Ab(1),s.Dc(" ",t.errors.name.last," ")}}function v(t,e){if(1&t&&(s.Sb(0,"mat-error"),s.Bc(1),s.Rb()),2&t){const t=s.ec();s.Ab(1),s.Dc(" ",t.errors.username," ")}}function S(t,e){1&t&&s.Nb(0,"mat-progress-spinner",12)}let y=(()=>{class t{constructor(t,e,r){this.toast=t,this.buttons=e,this.service=r,this.form=new o.f({name:new o.f({last:new o.c(null,[o.v.required]),first:new o.c(null,[o.v.required])}),picture:new o.c(null,[o.v.required]),username:new o.c(null,[o.v.required])}),this.errors={name:{last:"",first:""},picture:"",username:""},this.subscriptions={}}submit(){return Object(n.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.service.update({name:{last:this.form.value.name.last,first:this.form.value.name.first},picture:this.form.value.picture,username:this.form.value.username});this.loading=!1,this.toast.show(t.ok?"Account was updated!":"Issue updating account!")}))}upload(t){return Object(n.a)(this,void 0,void 0,(function*(){this.form.controls.picture.setValue(t)}))}ngOnInit(){this.buttons.hide("add"),this.buttons.hide("close"),this.buttons.hide("filter"),this.buttons.hide("search"),this.subscriptions.user=this.service.user.subscribe(t=>{void 0!==t&&null!=t&&(this.form.controls.picture.setValue(t.picture),this.form.controls.username.setValue(t.username),void 0!==t.name&&null!=t.name&&(this.form.controls.name.controls.last.setValue(t.name.last),this.form.controls.name.controls.first.setValue(t.name.first)))})}ngOnDestroy(){this.subscriptions.user.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(a.a),s.Mb(i.a),s.Mb(c.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["account-page"]],decls:28,vars:9,consts:[[3,"formGroup","ngSubmit"],["upload","","upload-accept","image/*","matRipple","",3,"upload-src","upload-change"],["formGroupName","name"],["appearance","outline"],["matInput","","type","text","name","first name","placeholder","first name","formControlName","first","required",""],[4,"ngIf"],["matInput","","type","text","name","last name","placeholder","last name","formControlName","last","required",""],["matInput","","type","text","name","username","placeholder","username","formControlName","username","required",""],["type","submit","mat-flat-button","","color","primary"],["mode","indeterminate","diameter","30",4,"ngIf"],["type","button","mat-stroked-button","","color","primary","margin-top","","routerLink","change-password"],["type","button","mat-flat-button","","color","warn","margin-top","","routerLink","remove-account"],["mode","indeterminate","diameter","30"]],template:function(t,e){1&t&&(s.Sb(0,"mat-content"),s.Sb(1,"form",0),s.ac("ngSubmit",(function(){return!e.form.invalid&&e.submit()})),s.Sb(2,"div",1),s.ac("upload-change",(function(t){return e.upload(t)})),s.Sb(3,"mat-icon"),s.Bc(4,"publish"),s.Rb(),s.Rb(),s.Sb(5,"section",2),s.Sb(6,"mat-form-field",3),s.Sb(7,"mat-label"),s.Bc(8," First Name "),s.Rb(),s.Nb(9,"input",4),s.zc(10,w,2,1,"mat-error",5),s.Rb(),s.Sb(11,"mat-form-field",3),s.Sb(12,"mat-label"),s.Bc(13," Last Name "),s.Rb(),s.Nb(14,"input",6),s.zc(15,_,2,1,"mat-error",5),s.Rb(),s.Rb(),s.Sb(16,"mat-form-field",3),s.Sb(17,"mat-label"),s.Bc(18," Username "),s.Rb(),s.Nb(19,"input",7),s.zc(20,v,2,1,"mat-error",5),s.Rb(),s.Sb(21,"button",8),s.Bc(22),s.zc(23,S,1,0,"mat-progress-spinner",9),s.Rb(),s.Sb(24,"button",10),s.Bc(25," change password "),s.Rb(),s.Sb(26,"button",11),s.Bc(27," remove account "),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.Ab(1),s.kc("formGroup",e.form),s.Ab(1),s.Eb("required",!e.form.value.picture),s.kc("upload-src",e.form.value.picture),s.Ab(8),s.kc("ngIf",e.errors.name.first),s.Ab(5),s.kc("ngIf",e.errors.name.last),s.Ab(5),s.kc("ngIf",e.errors.username),s.Ab(2),s.Dc(" ",e.loading?"":"update"," "),s.Ab(1),s.kc("ngIf",e.loading))},directives:[m.a,o.w,o.p,o.g,d.a,f.o,u.a,o.h,l.c,l.f,p.a,o.b,o.o,o.e,o.u,h.l,b.a,g.c,l.b,k.a],styles:["[upload][_ngcontent-%COMP%]{width:100px;margin:auto;height:100px;border:2px solid transparent;display:flex;align-items:center;border-radius:100%;justify-content:center;background-color:#eee}[upload].required[_ngcontent-%COMP%]{border-color:red}mat-content[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}mat-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:400px;margin-top:20px}mat-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:20px}"]}),t})();var x=r("5Yg0"),A=(r("u47x"),r("8LU1"),r("FtGj"),r("XNiG"),r("quSY"),r("VRyK"),r("LRne"),r("7Hc7"),r("JX91"),r("eIep"),r("IzEk"),r("pLZG"),r("1G5W"),r("3E0/"),r("R0Ic"),r("+rOU"),r("rDax")),R=(r("nLfN"),r("vxfF"));r("cH1L");const C={provide:new s.r("mat-menu-scroll-strategy"),deps:[A.c],useFactory:function(t){return()=>t.scrollStrategies.reposition()}};let M=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},providers:[C],imports:[f.h]}),t})(),N=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},providers:[C],imports:[[h.c,f.h,f.p,A.f,M],R.b,f.h,M]}),t})();var E=r("d3UM"),L=r("/t3+"),O=r("H0Zp"),I=r("dWDE");function B(t,e){if(1&t&&(s.Sb(0,"mat-error"),s.Bc(1),s.Rb()),2&t){const t=s.ec();s.Ab(1),s.Dc(" ",t.errors.password," ")}}function D(t,e){1&t&&s.Nb(0,"mat-progress-spinner",7)}let V=(()=>{class t{constructor(t,e,r,n,s){this.toast=t,this.buttons=e,this.router=r,this.service=n,this.formerror=s,this.form=new o.f({password:new o.c("",[o.v.required])}),this.errors={password:""},this.subscriptions={}}submit(){return Object(n.a)(this,void 0,void 0,(function*(){this.loading=!0,this.form.disable();const t=yield this.service.removeaccount({password:this.form.value.password});this.form.enable(),this.loading=!1,t.ok?(this.service.signout(),this.toast.show("Account was removed!")):this.toast.show("There was an issue removing account!")}))}ngOnInit(){this.buttons.hide("add"),this.buttons.show("close"),this.buttons.hide("filter"),this.buttons.hide("search"),this.subscriptions.form=this.form.valueChanges.subscribe(t=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)}),this.subscriptions.close=this.buttons.close.click.subscribe(t=>{this.router.navigate(["/account"])})}ngOnDestroy(){this.subscriptions.form.unsubscribe(),this.subscriptions.close.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(a.a),s.Mb(i.a),s.Mb(g.b),s.Mb(c.a),s.Mb(I.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["remove-account-page"]],decls:14,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"notice"],["appearance","outline"],["matInput","","type","password","name","confirm password","placeholder","confirm password","formControlName","password","required",""],[4,"ngIf"],["type","submit","mat-flat-button","","color","warn"],["mode","indeterminate","diameter","30",4,"ngIf"],["mode","indeterminate","diameter","30"]],template:function(t,e){1&t&&(s.Sb(0,"mat-content"),s.Sb(1,"h1"),s.Bc(2," Remove Account "),s.Rb(),s.Sb(3,"form",0),s.ac("ngSubmit",(function(){return!e.loading&&!e.form.invalid&&e.submit()})),s.Sb(4,"p",1),s.Bc(5," The removal of your account will mean you can no longer sign in to the platform. This does not remove the assets you have created in the time you have had an account with us and if you wish to signup again your assets will be available to you once again! "),s.Rb(),s.Sb(6,"mat-form-field",2),s.Sb(7,"mat-label"),s.Bc(8," Confirm Password "),s.Rb(),s.Nb(9,"input",3),s.zc(10,B,2,1,"mat-error",4),s.Rb(),s.Sb(11,"button",5),s.Bc(12),s.zc(13,D,1,0,"mat-progress-spinner",6),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.Ab(3),s.kc("formGroup",e.form),s.Ab(7),s.kc("ngIf",e.errors.password),s.Ab(2),s.Dc(" ",e.loading?"":"confirm & remove"," "),s.Ab(1),s.kc("ngIf",e.loading))},directives:[m.a,o.w,o.p,o.g,l.c,l.f,p.a,o.b,o.o,o.e,o.u,h.l,b.a,l.b,k.a],styles:["mat-content[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}mat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;text-align:justify;line-height:12px;margin-bottom:15px}mat-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:20px}mat-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:400px;margin-top:20px}"]}),t})();var P=r("WF9o");function T(t,e){if(1&t&&(s.Sb(0,"mat-error"),s.Bc(1),s.Rb()),2&t){const t=s.ec();s.Ab(1),s.Dc(" ",t.errors.old," ")}}function X(t,e){if(1&t&&(s.Sb(0,"mat-error"),s.Bc(1),s.Rb()),2&t){const t=s.ec();s.Ab(1),s.Dc(" ",t.errors.new," ")}}function U(t,e){if(1&t&&(s.Sb(0,"mat-error"),s.Bc(1),s.Rb()),2&t){const t=s.ec();s.Ab(1),s.Fc(" ",t.errors.confirm," ",t.errors.confirm&&t.form.value.new!=t.form.value.confirm?" & ":""," ",t.form.value.new!=t.form.value.confirm?"Passwords do not match":""," ")}}function j(t,e){1&t&&s.Nb(0,"mat-progress-spinner",8)}let G=(()=>{class t{constructor(t,e,r,n,s,a){this.toast=t,this.buttons=e,this.router=r,this.service=n,this.formerror=s,this.localstorage=a,this.form=new o.f({old:new o.c("",[o.v.required]),new:new o.c("",[o.v.required]),confirm:new o.c("",[o.v.required])}),this.errors={old:"",new:"",confirm:""},this.subscriptions={}}submit(){return Object(n.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.service.changepassword({old:this.form.value.old,new:this.form.value.new,email:this.localstorage.get("email"),confirm:this.form.value.confirm});this.loading=!1,t.ok?(this.router.navigate(["/account"]),this.toast.show("password was changed!")):this.toast.show("there was an issue changing password!")}))}ngOnInit(){this.buttons.hide("add"),this.buttons.show("close"),this.buttons.hide("filter"),this.buttons.hide("search"),this.subscriptions.form=this.form.valueChanges.subscribe(t=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)}),this.subscriptions.close=this.buttons.close.click.subscribe(t=>{this.router.navigate(["/account"])})}ngOnDestroy(){this.subscriptions.form.unsubscribe(),this.subscriptions.close.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(a.a),s.Mb(i.a),s.Mb(g.b),s.Mb(c.a),s.Mb(I.a),s.Mb(P.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["change-password-page"]],decls:22,vars:6,consts:[[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","password","name","old password","placeholder","old password","formControlName","old","required",""],[4,"ngIf"],["matInput","","type","password","name","new password","placeholder","new password","formControlName","new","required",""],["matInput","","type","password","name","confirm password","placeholder","confirm password","formControlName","confirm","required",""],["type","submit","mat-flat-button","","color","primary"],["mode","indeterminate","diameter","30",4,"ngIf"],["mode","indeterminate","diameter","30"]],template:function(t,e){1&t&&(s.Sb(0,"mat-content"),s.Sb(1,"h1"),s.Bc(2," Change Password "),s.Rb(),s.Sb(3,"form",0),s.ac("ngSubmit",(function(){return!e.loading&&!e.form.invalid&&e.form.value.new==e.form.value.confirm&&e.submit()})),s.Sb(4,"mat-form-field",1),s.Sb(5,"mat-label"),s.Bc(6," Old Password "),s.Rb(),s.Nb(7,"input",2),s.zc(8,T,2,1,"mat-error",3),s.Rb(),s.Sb(9,"mat-form-field",1),s.Sb(10,"mat-label"),s.Bc(11," New Password "),s.Rb(),s.Nb(12,"input",4),s.zc(13,X,2,1,"mat-error",3),s.Rb(),s.Sb(14,"mat-form-field",1),s.Sb(15,"mat-label"),s.Bc(16," Confirm Password "),s.Rb(),s.Nb(17,"input",5),s.zc(18,U,2,3,"mat-error",3),s.Rb(),s.Sb(19,"button",6),s.Bc(20),s.zc(21,j,1,0,"mat-progress-spinner",7),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.Ab(3),s.kc("formGroup",e.form),s.Ab(5),s.kc("ngIf",e.errors.old),s.Ab(5),s.kc("ngIf",e.errors.new),s.Ab(5),s.kc("ngIf",e.errors.confirm||e.form.value.new!=e.form.value.confirm),s.Ab(2),s.Dc(" ",e.loading?"":"submit"," "),s.Ab(1),s.kc("ngIf",e.loading))},directives:[m.a,o.w,o.p,o.g,l.c,l.f,p.a,o.b,o.o,o.e,o.u,h.l,b.a,l.b,k.a],styles:["mat-content[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}mat-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:20px}mat-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:400px;margin-top:20px}"]}),t})();r("R1ws"),r("xgIS");let q=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[h.c,f.h],f.h]}),t})();const W=[{path:"",component:y},{path:"remove-account",component:V},{path:"change-password",component:G}];let z=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[o.i,h.c,x.a,u.b,N,p.b,E.b,b.b,f.p,O.a,L.b,l.e,o.t,q,k.b,g.f.forChild(W)]]}),t})()},"4jEk":function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("fXoL");const o=["*"];let s=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["mat-content"]],ngContentSelectors:o,decls:1,vars:0,template:function(t,e){1&t&&(n.jc(),n.ic(0))},styles:["mat-content{flex:1 auto;height:calc(100vh - 100px);overflow-y:auto}"],encapsulation:2}),t})()},H0Zp:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("ofXK"),o=r("fXoL");let s=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},imports:[[n.c]]}),t})()},Xa2L:function(t,e,r){"use strict";r.d(e,"a",(function(){return g})),r.d(e,"b",(function(){return w})),r.d(e,"c",(function(){return k}));var n=r("fXoL"),o=r("ofXK"),s=r("FKr1"),a=r("8LU1"),i=r("nLfN"),c=r("R1ws");function m(t,e){if(1&t&&(n.dc(),n.Nb(0,"circle",3)),2&t){const t=n.ec();n.wc("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),n.Bb("r",t._getCircleRadius())}}function d(t,e){if(1&t&&(n.dc(),n.Nb(0,"circle",3)),2&t){const t=n.ec();n.wc("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),n.Bb("r",t._getCircleRadius())}}function f(t,e){if(1&t&&(n.dc(),n.Nb(0,"circle",3)),2&t){const t=n.ec();n.wc("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),n.Bb("r",t._getCircleRadius())}}function u(t,e){if(1&t&&(n.dc(),n.Nb(0,"circle",3)),2&t){const t=n.ec();n.wc("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),n.Bb("r",t._getCircleRadius())}}const l=".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n";class p{constructor(t){this._elementRef=t}}const h=Object(s.t)(p,"primary"),b=new n.r("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});let g=(()=>{class t extends h{constructor(e,r,n,o,s){super(e),this._elementRef=e,this._document=n,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const a=t._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),a.has(n.head)||a.set(n.head,new Set([100])),this._fallbackAnimation=r.EDGE||r.TRIDENT,this._noopAnimations="NoopAnimations"===o&&!!s&&!s._forceAnimations,s&&(s.diameter&&(this.diameter=s.diameter),s.strokeWidth&&(this.strokeWidth=s.strokeWidth))}get diameter(){return this._diameter}set diameter(t){this._diameter=Object(a.f)(t),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(t){this._strokeWidth=Object(a.f)(t)}get value(){return"determinate"===this.mode?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,Object(a.f)(t)))}ngOnInit(){const t=this._elementRef.nativeElement;this._styleRoot=Object(i.c)(t)||this._document.head,this._attachStyleNode(),t.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const t=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${t} ${t}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const e=this._styleRoot,r=this._diameter,n=t._diameters;let o=n.get(e);if(!o||!o.has(r)){const t=this._document.createElement("style");t.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),t.textContent=this._getAnimationText(),e.appendChild(t),o||(o=new Set,n.set(e,o)),o.add(r)}}_getAnimationText(){const t=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*t).replace(/END_VALUE/g,""+.2*t).replace(/DIAMETER/g,""+this._spinnerAnimationLabel)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.l),n.Mb(i.a),n.Mb(o.d,8),n.Mb(c.a,8),n.Mb(b))},t.\u0275cmp=n.Gb({type:t,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(t,e){2&t&&(n.Bb("aria-valuemin","determinate"===e.mode?0:null)("aria-valuemax","determinate"===e.mode?100:null)("aria-valuenow","determinate"===e.mode?e.value:null)("mode",e.mode),n.wc("width",e.diameter,"px")("height",e.diameter,"px"),n.Eb("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[n.xb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(n.dc(),n.Sb(0,"svg",0),n.zc(1,m,1,9,"circle",1),n.zc(2,d,1,7,"circle",2),n.Rb()),2&t&&(n.wc("width",e.diameter,"px")("height",e.diameter,"px"),n.kc("ngSwitch","indeterminate"===e.mode),n.Bb("viewBox",e._getViewBox()),n.Ab(1),n.kc("ngSwitchCase",!0),n.Ab(1),n.kc("ngSwitchCase",!1))},directives:[o.n,o.o],styles:[l],encapsulation:2,changeDetection:0}),t._diameters=new WeakMap,t})(),k=(()=>{class t extends g{constructor(t,e,r,n,o){super(t,e,r,n,o),this.mode="indeterminate"}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.l),n.Mb(i.a),n.Mb(o.d,8),n.Mb(c.a,8),n.Mb(b))},t.\u0275cmp=n.Gb({type:t,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(t,e){2&t&&(n.wc("width",e.diameter,"px")("height",e.diameter,"px"),n.Eb("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color"},features:[n.xb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(n.dc(),n.Sb(0,"svg",0),n.zc(1,f,1,9,"circle",1),n.zc(2,u,1,7,"circle",2),n.Rb()),2&t&&(n.wc("width",e.diameter,"px")("height",e.diameter,"px"),n.kc("ngSwitch","indeterminate"===e.mode),n.Bb("viewBox",e._getViewBox()),n.Ab(1),n.kc("ngSwitchCase",!0),n.Ab(1),n.kc("ngSwitchCase",!1))},directives:[o.n,o.o],styles:[l],encapsulation:2,changeDetection:0}),t})(),w=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)},imports:[[s.h,o.c],s.h]}),t})()}}]);