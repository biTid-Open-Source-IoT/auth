(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1Vod":function(t,e,s){"use strict";s.r(e),s.d(e,"AllowAccessModule",(function(){return R}));var i=s("mrSG"),o=s("3Pt+"),r=s("fXoL"),n=s("tyNb"),a=s("9ZKQ"),c=s("L7HW"),l=s("dWDE"),m=s("xyCQ"),p=s("WF9o"),b=s("4jEk"),u=s("ofXK"),d=s("kmnG"),f=s("qFsG"),h=s("bTqV"),g=s("Xa2L");function w(t,e){if(1&t&&r.Mb(0,"img",8),2&t){const t=r.dc();r.jc("src",t.app.icon,r.rc)}}function y(t,e){if(1&t&&(r.Rb(0,"h1"),r.zc(1),r.Qb()),2&t){const t=r.dc();r.Ab(1),r.Bc(" ",t.app.name," ")}}function I(t,e){if(1&t&&(r.Rb(0,"mat-error"),r.zc(1),r.Qb()),2&t){const t=r.dc();r.Ab(1),r.Bc(" ",t.errors.email," ")}}function v(t,e){if(1&t&&(r.Rb(0,"mat-error"),r.zc(1),r.Qb()),2&t){const t=r.dc();r.Ab(1),r.Bc(" ",t.errors.password," ")}}function j(t,e){1&t&&r.Mb(0,"mat-progress-spinner",9)}let A=(()=>{class t{constructor(t,e,s,i,r,n){this.route=t,this.toast=e,this.config=s,this.formerror=i,this.service=r,this.localstorage=n,this.form=new o.e({email:new o.c("",[o.t.email,o.t.required]),password:new o.c("",[o.t.required])}),this.errors={email:"",password:""},this.app={},this.subscriptions={}}load(){return Object(i.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.service.load({filter:["icon","name","scopes"],appId:this.appId});this.loading=!1,t.ok?this.app=t.result:this.toast.show("Issue loading app!")}))}submit(){return Object(i.a)(this,void 0,void 0,(function*(){this.loading=!0,this.form.disable(),this.localstorage.set("email",this.form.value.email);const t=new Date((new Date).setFullYear((new Date).getFullYear()+1)),e=yield this.service.allowaccess({appId:this.appId,email:this.form.value.email,expiry:t,scopes:this.app.scopes,password:this.form.value.password,description:this.app.name+" (LOGIN)"});if(this.form.enable(),this.loading=!1,e.ok){const t=[this.returl,"?","email=",this.form.value.email,"&","tokenId=",e.result.tokenId].join("");window.open(t,"_parent")}else this.toast.show(e.error.message)}))}ngOnInit(){this.subscriptions.form=this.form.valueChanges.subscribe(t=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)}),this.subscriptions.config=this.config.loaded.subscribe(t=>{if(t){const t=this.route.snapshot.queryParams;this.appId=t.appId,this.returl=t.returl,null!=t.email&&this.form.controls.email.setValue(t.email),this.load()}})}ngOnDestroy(){this.subscriptions.form.unsubscribe(),this.subscriptions.config.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(n.a),r.Lb(a.a),r.Lb(c.a),r.Lb(l.a),r.Lb(m.a),r.Lb(p.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["allow-access-page"]],decls:17,vars:7,consts:[["alt","icon","width","100","height","100",3,"src",4,"ngIf"],[4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","email","name","email","placeholder","email","formControlName","email","required",""],["matInput","","type","password","name","password","placeholder","password","formControlName","password","required",""],["type","submit","mat-flat-button","","color","primary"],["mode","indeterminate","diameter","30",4,"ngIf"],["alt","icon","width","100","height","100",3,"src"],["mode","indeterminate","diameter","30"]],template:function(t,e){1&t&&(r.Rb(0,"mat-content"),r.yc(1,w,1,1,"img",0),r.yc(2,y,2,1,"h1",1),r.Rb(3,"form",2),r.Zb("ngSubmit",(function(){return!e.form.invalid&&!e.loading&&e.submit()})),r.Rb(4,"mat-form-field",3),r.Rb(5,"mat-label"),r.zc(6," Email "),r.Qb(),r.Mb(7,"input",4),r.yc(8,I,2,1,"mat-error",1),r.Qb(),r.Rb(9,"mat-form-field",3),r.Rb(10,"mat-label"),r.zc(11," Password "),r.Qb(),r.Mb(12,"input",5),r.yc(13,v,2,1,"mat-error",1),r.Qb(),r.Rb(14,"button",6),r.zc(15),r.yc(16,j,1,0,"mat-progress-spinner",7),r.Qb(),r.Qb(),r.Qb()),2&t&&(r.Ab(1),r.jc("ngIf",e.app.icon),r.Ab(1),r.jc("ngIf",e.app.name),r.Ab(1),r.jc("formGroup",e.form),r.Ab(5),r.jc("ngIf",e.errors.email),r.Ab(5),r.jc("ngIf",e.errors.password),r.Ab(2),r.Bc(" ",e.loading?"":"allow access"," "),r.Ab(1),r.jc("ngIf",e.loading))},directives:[b.a,u.l,o.u,o.o,o.f,d.c,d.f,f.a,o.b,o.n,o.d,o.s,h.a,d.b,g.a],styles:["mat-content[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}mat-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:20px 0}mat-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:400px}"]}),t})();var Q=s("NFeN"),L=s("d3UM"),M=s("/t3+"),C=s("H0Zp");const O=[{path:"",component:A}];let R=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},imports:[[o.h,u.c,Q.b,f.b,h.b,L.a,M.b,C.a,d.e,o.r,g.b,n.f.forChild(O)]]}),t})()},H0Zp:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=s("ofXK"),o=s("fXoL");let r=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})()}}]);