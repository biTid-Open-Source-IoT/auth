(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1Vod":function(t,o,e){"use strict";e.r(o),e.d(o,"AllowAccessModule",(function(){return F}));var i=e("mrSG"),r=e("3Pt+"),n=e("fXoL"),a=e("0IaG"),s=e("9ZKQ"),c=e("dWDE"),l=e("IRyT"),b=e("/t3+"),m=e("kmnG"),d=e("4jEk"),p=e("bSwM"),u=e("ZRfb"),f=e("bTqV"),h=e("ofXK"),g=e("Xa2L");function w(t,o){1&t&&n.Nb(0,"mat-progress-spinner",10)}let v=(()=>{class t{constructor(t,o,e,i){this.dialog=t,this.toast=o,this.formerror=e,this.service=i,this.form=new r.f({privacyPolicy:new r.c(!1,[r.v.required]),termsAndConditions:new r.c(!1,[r.v.required])}),this.errors={privacyPolicy:"",termsAndConditions:""},this.subscriptions={}}submit(){return Object(i.a)(this,void 0,void 0,(function*(){this.loading=!0,this.form.disable();const t=yield this.service.update(this.form.value);this.form.enable(),this.loading=!1,t.ok?this.dialog.close(!0):this.toast.show(t.error.message)}))}ngOnInit(){this.subscriptions.form=this.form.valueChanges.subscribe(t=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)})}ngOnDestroy(){this.subscriptions.form.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(n.Mb(a.d),n.Mb(s.a),n.Mb(c.a),n.Mb(l.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["accept-dialog"]],decls:25,vars:4,consts:[[1,"container",3,"formGroup","ngSubmit"],["color","primary","formControlName","privacyPolicy"],["href","https://www.bitid.co.za/privacy-policy","target","_blank"],[1,"checkbox-hint"],["color","primary","formControlName","termsAndConditions"],["href","https://www.bitid.co.za/terms-and-conditions","target","_blank"],["type","submit",2,"display","none"],["button",""],["type","button","mat-flat-button","","color","primary",3,"disabled","click"],["mode","indeterminate","diameter","30",4,"ngIf"],["mode","indeterminate","diameter","30"]],template:function(t,o){if(1&t){const t=n.Tb();n.Sb(0,"mat-toolbar"),n.Sb(1,"mat-label"),n.Bc(2," Accept Changes "),n.Rb(),n.Rb(),n.Sb(3,"mat-content"),n.Sb(4,"form",0),n.ac("ngSubmit",(function(){return!o.form.invalid&&o.submit()})),n.Sb(5,"p"),n.Bc(6," There have been some changes to our Privacy Policy & Terms & Conditions "),n.Rb(),n.Sb(7,"mat-checkbox",1),n.Bc(8," I have read and agree to the "),n.Sb(9,"a",2),n.Bc(10,"Privacy Policy"),n.Rb(),n.Rb(),n.Sb(11,"mat-hint",3),n.Bc(12," Required to continue "),n.Rb(),n.Sb(13,"mat-checkbox",4),n.Bc(14," I have read and agree to the "),n.Sb(15,"a",5),n.Bc(16,"Terms & Conditions"),n.Rb(),n.Rb(),n.Sb(17,"mat-hint",3),n.Bc(18," Required to continue "),n.Rb(),n.Nb(19,"button",6,7),n.Rb(),n.Rb(),n.Sb(21,"mat-footer"),n.Sb(22,"button",8),n.ac("click",(function(){return n.rc(t),n.pc(20).click()})),n.Bc(23),n.zc(24,w,1,0,"mat-progress-spinner",9),n.Rb(),n.Rb()}2&t&&(n.Ab(4),n.kc("formGroup",o.form),n.Ab(18),n.kc("disabled",o.form.invalid||!o.form.value.privacyPolicy||!o.form.value.termsAndConditions),n.Ab(1),n.Dc(" ",o.loading?"":"confirm"," "),n.Ab(1),n.kc("ngIf",o.loading))},directives:[b.a,m.g,d.a,r.w,r.p,r.g,p.a,r.o,r.e,m.f,u.a,f.a,h.l,g.a],styles:[".accept-dialog .mat-dialog-container{top:0;left:0;right:0;bottom:0;z-index:5000;padding:0!important;position:fixed;border-radius:0}.accept-dialog .mat-dialog-container accept-dialog{height:100vh;display:flex;position:relative;flex-direction:column}.accept-dialog .mat-dialog-container mat-toolbar{display:flex;font-size:14px;margin-bottom:5px;justify-content:center}.accept-dialog .mat-dialog-container button{width:100%;margin:auto;max-width:400px}.accept-dialog .mat-dialog-container form{max-width:400px}"],encapsulation:2}),t})();var y=e("tyNb"),S=e("L7HW"),k=e("BhS5"),R=e("xyCQ"),x=e("WF9o"),C=e("qFsG"),I=e("fASB");function M(t,o){if(1&t&&n.Nb(0,"img",10),2&t){const t=n.ec();n.kc("src",t.app.icon,n.sc)}}function A(t,o){if(1&t&&(n.Sb(0,"h1"),n.Bc(1),n.Rb()),2&t){const t=n.ec();n.Ab(1),n.Dc(" ",t.app.name," ")}}function P(t,o){if(1&t&&(n.Sb(0,"mat-error"),n.Bc(1),n.Rb()),2&t){const t=n.ec();n.Ab(1),n.Dc(" ",t.errors.email," ")}}function B(t,o){if(1&t&&(n.Sb(0,"mat-error"),n.Bc(1),n.Rb()),2&t){const t=n.ec();n.Ab(1),n.Dc(" ",t.errors.password," ")}}function O(t,o){1&t&&n.Nb(0,"mat-progress-spinner",11)}let N=(()=>{class t{constructor(t,o,e,i,n,a,s,c){this.route=t,this.toast=o,this.dialog=e,this.config=i,this.formerror=n,this.buttons=a,this.service=s,this.localstorage=c,this.form=new r.f({email:new r.c("",[r.v.email,r.v.required]),password:new r.c("",[r.v.required])}),this.errors={email:"",password:""},this.app={},this.subscriptions={}}load(){return Object(i.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.service.load({filter:["icon","name","scopes"],appId:this.appId});this.loading=!1,t.ok?this.app=t.result:this.toast.show("Issue loading app!")}))}submit(){return Object(i.a)(this,void 0,void 0,(function*(){this.loading=!0,this.form.disable(),this.localstorage.set("email",this.form.value.email);const t=new Date((new Date).setFullYear((new Date).getFullYear()+1)),o=yield this.service.allowaccess({appId:this.appId,email:this.form.value.email,expiry:t,scopes:this.app.scopes,password:this.form.value.password,description:this.app.name+" (LOGIN)"});this.form.enable(),this.loading=!1,o.ok?(this.url=[this.returl,"?","email=",this.form.value.email,"&","tokenId=",o.result.tokenId].join(""),window.open(this.url,"_parent")):this.toast.show(o.error.message)}))}accept(){return Object(i.a)(this,void 0,void 0,(function*(){const t=yield this.dialog.open(v,{panelClass:"accept-dialog",disableClose:!0});yield t.afterClosed().subscribe(t=>Object(i.a)(this,void 0,void 0,(function*(){t&&window.open(this.url,"_parent")})))}))}ngOnInit(){this.buttons.hide("add"),this.buttons.hide("close"),this.buttons.hide("filter"),this.buttons.hide("search"),this.subscriptions.form=this.form.valueChanges.subscribe(t=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)}),this.subscriptions.config=this.config.loaded.subscribe(t=>{if(t){const t=this.route.snapshot.queryParams;this.appId=t.appId,this.returl=t.returl,null!=t.email&&this.form.controls.email.setValue(t.email),this.load()}})}ngOnDestroy(){this.subscriptions.form.unsubscribe(),this.subscriptions.config.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(n.Mb(y.a),n.Mb(s.a),n.Mb(a.b),n.Mb(S.a),n.Mb(c.a),n.Mb(k.a),n.Mb(R.a),n.Mb(x.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["allow-access-page"]],decls:21,vars:7,consts:[["alt","icon","width","100","height","100",3,"src",4,"ngIf"],[4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","email","name","email","placeholder","email","formControlName","email","required",""],["matInput","","type","password","name","password","placeholder","password","formControlName","password","required",""],["routerLink","/forgot-password","queryParamsHandling","preserve",1,"forgot-password"],["type","submit","mat-flat-button","","color","primary"],["mode","indeterminate","diameter","30",4,"ngIf"],["type","button","mat-stroked-button","","color","primary","back-button",""],["alt","icon","width","100","height","100",3,"src"],["mode","indeterminate","diameter","30"]],template:function(t,o){1&t&&(n.Sb(0,"mat-content"),n.zc(1,M,1,1,"img",0),n.zc(2,A,2,1,"h1",1),n.Sb(3,"form",2),n.ac("ngSubmit",(function(){return!o.form.invalid&&!o.loading&&o.submit()})),n.Sb(4,"mat-form-field",3),n.Sb(5,"mat-label"),n.Bc(6," Email "),n.Rb(),n.Nb(7,"input",4),n.zc(8,P,2,1,"mat-error",1),n.Rb(),n.Sb(9,"mat-form-field",3),n.Sb(10,"mat-label"),n.Bc(11," Password "),n.Rb(),n.Nb(12,"input",5),n.zc(13,B,2,1,"mat-error",1),n.Rb(),n.Sb(14,"a",6),n.Bc(15," Forgot Password? "),n.Rb(),n.Sb(16,"button",7),n.Bc(17),n.zc(18,O,1,0,"mat-progress-spinner",8),n.Rb(),n.Sb(19,"button",9),n.Bc(20," back "),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.Ab(1),n.kc("ngIf",o.app.icon),n.Ab(1),n.kc("ngIf",o.app.name),n.Ab(1),n.kc("formGroup",o.form),n.Ab(5),n.kc("ngIf",o.errors.email),n.Ab(5),n.kc("ngIf",o.errors.password),n.Ab(4),n.Dc(" ",o.loading?"":"sign in"," "),n.Ab(1),n.kc("ngIf",o.loading))},directives:[d.a,h.l,r.w,r.p,r.g,m.c,m.g,C.a,r.b,r.o,r.e,r.u,y.f,f.a,I.a,m.b,g.a],styles:["mat-content[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}mat-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:20px 0}mat-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:400px}.forgot-password[_ngcontent-%COMP%], mat-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:20px}.forgot-password[_ngcontent-%COMP%]{color:#2196f3;cursor:pointer;margin-left:auto}"]}),t})();var G=e("NFeN"),_=e("tVzd"),j=e("d3UM"),q=e("H0Zp"),z=e("pBNG");const D=[{path:"",component:N}];let F=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(o){return new(o||t)},imports:[[r.i,h.c,G.b,C.b,_.a,f.b,j.b,b.b,q.a,z.a,b.b,p.b,m.e,r.t,g.b,y.g.forChild(D)]]}),t})()},H0Zp:function(t,o,e){"use strict";e.d(o,"a",(function(){return n}));var i=e("ofXK"),r=e("fXoL");let n=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(o){return new(o||t)},imports:[[i.c]]}),t})()},ZRfb:function(t,o,e){"use strict";e.d(o,"a",(function(){return n}));var i=e("fXoL");const r=["*"];let n=(()=>{class t{constructor(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["mat-footer"]],ngContentSelectors:r,decls:1,vars:0,template:function(t,o){1&t&&(i.jc(),i.ic(0))},styles:["mat-footer{flex:1 auto;color:rgba(0,0,0,.87);height:56px;display:flex;padding:0 16px;min-height:56px;max-height:56px;background:#f5f5f5;align-items:center}"],encapsulation:2}),t})()},tVzd:function(t,o,e){"use strict";e.d(o,"a",(function(){return n}));var i=e("ofXK"),r=e("fXoL");let n=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(o){return new(o||t)},imports:[[i.c]]}),t})()}}]);