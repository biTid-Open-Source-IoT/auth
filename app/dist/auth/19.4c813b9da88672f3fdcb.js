(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"05Yv":function(t,e,o){"use strict";o.r(e),o.d(e,"AppsModule",(function(){return Dt}));var i=o("mrSG"),r=o("Ovx2"),a=o("Dh3D"),n=o("3Pt+"),s=o("0IaG"),c=o("fXoL"),l=o("dWDE"),b=o("/t3+"),m=o("kmnG"),d=o("bTqV"),u=o("NFeN"),p=o("4jEk"),h=o("ofXK"),f=o("d3UM"),g=o("FKr1"),v=o("bv9b");function S(t,e){1&t&&c.Nb(0,"mat-progress-bar",9)}function R(t,e){if(1&t&&(c.Sb(0,"mat-error"),c.Bc(1),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.Dc(" ",t.errors.private," ")}}let w=(()=>{class t{constructor(t,e,o){this.dialog=t,this.config=e,this.formerror=o,this.form=new n.f({private:new n.c([])}),this.errors={private:""},this.subscriptions={}}load(){return Object(i.a)(this,void 0,void 0,(function*(){this.loading=!0,void 0!==this.config.private&&null!=this.config.private&&this.form.controls.private.setValue(this.config.private),this.loading=!1}))}close(){return Object(i.a)(this,void 0,void 0,(function*(){this.dialog.close(!1)}))}submit(){return Object(i.a)(this,void 0,void 0,(function*(){this.dialog.close(this.form.value)}))}ngOnInit(){this.subscriptions.form=this.form.valueChanges.subscribe(t=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)}),this.load()}ngOnDestroy(){this.subscriptions.form.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(s.d),c.Mb(s.a),c.Mb(l.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["apps-filter-dialog"]],decls:20,vars:5,consts:[[1,"spacer"],["mat-icon-button","",3,"click"],["mode","indeterminate",4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["name","private","formControlName","private","multiple",""],[3,"value"],[4,"ngIf"],["type","submit","color","primary","mat-flat-button",""],["mode","indeterminate"]],template:function(t,e){1&t&&(c.Sb(0,"mat-toolbar"),c.Sb(1,"mat-label",0),c.Bc(2," Filter Apps "),c.Rb(),c.Sb(3,"button",1),c.ac("click",(function(){return e.close()})),c.Sb(4,"mat-icon"),c.Bc(5," close "),c.Rb(),c.Rb(),c.Rb(),c.Sb(6,"mat-content"),c.zc(7,S,1,0,"mat-progress-bar",2),c.Sb(8,"form",3),c.ac("ngSubmit",(function(){return!e.loading&&!e.form.invalid&&e.submit()})),c.Sb(9,"mat-form-field",4),c.Sb(10,"mat-label"),c.Bc(11," Access Mode "),c.Rb(),c.Sb(12,"mat-select",5),c.Sb(13,"mat-option",6),c.Bc(14," Public "),c.Rb(),c.Sb(15,"mat-option",6),c.Bc(16," Private "),c.Rb(),c.Rb(),c.zc(17,R,2,1,"mat-error",7),c.Rb(),c.Sb(18,"button",8),c.Bc(19," submit "),c.Rb(),c.Rb(),c.Rb()),2&t&&(c.Ab(7),c.kc("ngIf",e.loading),c.Ab(1),c.kc("formGroup",e.form),c.Ab(5),c.kc("value",!1),c.Ab(2),c.kc("value",!0),c.Ab(2),c.kc("ngIf",e.errors.private))},directives:[b.a,m.g,d.b,u.a,p.a,h.l,n.x,n.p,n.g,m.c,f.a,n.o,n.e,g.k,v.a,m.b],styles:[".filter-dialog{width:500px!important}.filter-dialog .mat-dialog-container{padding:0!important}@media screen and (max-width:600px){.filter-dialog .mat-dialog-container{top:0;left:0;right:0;bottom:0;z-index:5000;position:fixed;border-radius:0}}"],encapsulation:2}),t})();var y=o("+0xr"),k=o("9ZKQ"),O=o("L7HW"),A=o("u0tM"),I=o("tyNb"),C=o("bS1C"),B=o("BhS5"),x=o("swrf"),z=o("xyCQ"),M=o("WF9o"),D=o("znSr"),N=o("MutI"),P=o("A5z7"),q=o("Qu3c");function j(t,e){1&t&&c.Nb(0,"mat-progress-bar",15)}function _(t,e){if(1&t){const t=c.Tb();c.Sb(0,"mat-chip",18),c.ac("removed",(function(){c.rc(t);const o=e.$implicit;return c.ec(2).unfilter("private",o)})),c.Sb(1,"mat-icon"),c.Bc(2," accessibility_new "),c.Rb(),c.Sb(3,"mat-label"),c.Bc(4),c.Rb(),c.Sb(5,"mat-icon",19),c.Bc(6," cancel "),c.Rb(),c.Rb()}if(2&t){const t=e.$implicit;c.Ab(4),c.Dc(" ",t?"Private":"Public"," ")}}function F(t,e){if(1&t&&(c.Sb(0,"mat-chip-list",16),c.zc(1,_,7,1,"mat-chip",17),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.kc("ngForOf",t.filter.private)}}function V(t,e){1&t&&c.Nb(0,"th",20)}function G(t,e){if(1&t&&(c.Sb(0,"td",21),c.Sb(1,"a",22),c.Sb(2,"mat-icon"),c.Bc(3," launch "),c.Rb(),c.Rb(),c.Rb()),2&t){const t=e.$implicit;c.Ab(1),c.kc("href",t.url,c.sc)}}function T(t,e){1&t&&(c.Sb(0,"th",20),c.Bc(1," Icon "),c.Rb())}function $(t,e){if(1&t&&(c.Sb(0,"td",21),c.Nb(1,"img",23),c.Rb()),2&t){const t=e.$implicit;c.Ab(1),c.kc("src",t.icon,c.sc)("alt",t.name)}}function H(t,e){1&t&&(c.Sb(0,"th",24),c.Bc(1," Name "),c.Rb())}function E(t,e){if(1&t&&(c.Sb(0,"td",21),c.Bc(1),c.Rb()),2&t){const t=e.$implicit;c.Ab(1),c.Dc(" ",t.name," ")}}function J(t,e){1&t&&(c.Sb(0,"th",24),c.Bc(1," Access Mode "),c.Rb())}function Q(t,e){if(1&t&&(c.Sb(0,"td",21),c.Bc(1),c.Rb()),2&t){const t=e.$implicit;c.Ab(1),c.Dc(" ",t.private?"Private":"Public"," ")}}function K(t,e){1&t&&c.Nb(0,"th",20)}function L(t,e){if(1&t){const t=c.Tb();c.Sb(0,"td",21),c.Sb(1,"button",25),c.ac("click",(function(){c.rc(t);const o=e.$implicit;return c.ec().options(o)})),c.Sb(2,"mat-icon"),c.Bc(3," more_vert "),c.Rb(),c.Rb(),c.Rb()}}function W(t,e){1&t&&c.Nb(0,"tr",26)}function Y(t,e){1&t&&c.Nb(0,"tr",27)}function U(t,e){if(1&t){const t=c.Tb();c.Sb(0,"mat-list-item",28),c.ac("click",(function(){c.rc(t);const o=e.$implicit;return c.ec().options(o)})),c.Nb(1,"img",29),c.Sb(2,"mat-label"),c.Sb(3,"h3"),c.Bc(4),c.Rb(),c.Rb(),c.Rb()}if(2&t){const t=e.$implicit;c.Ab(1),c.kc("src",t.icon,c.sc)("alt",t.name),c.Ab(3),c.Dc(" ",t.name," ")}}let Z=(()=>{class t{constructor(t,e,o,i,r,a,n,s,c,l){this.toast=t,this.config=e,this.dialog=o,this.sheet=i,this.router=r,this.filters=a,this.buttons=n,this.confirm=s,this.service=c,this.localstorage=l,this.apps=new y.k,this.filter=this.filters.get({private:[]}),this.columns=["url","icon","name","private","options"],this.subscriptions={}}list(){return Object(i.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.service.list({filter:["url","icon","role","name","appId","private"],private:this.filter.private});this.apps.data=t.ok?t.result.map(t=>new r.a(t)):[],this.loading=!1}))}unfilter(t,e){this.filter[t]=this.filter[t].filter(t=>t!=e),this.filters.update(this.filter),this.list()}options(t){return Object(i.a)(this,void 0,void 0,(function*(){let e=[{icon:"edit",title:"Edit",handler:()=>Object(i.a)(this,void 0,void 0,(function*(){this.router.navigate(["/apps","editor"],{queryParams:{mode:"update",appId:t.appId}})})),disabled:[0,1]},{icon:"content_copy",title:"Copy",handler:()=>Object(i.a)(this,void 0,void 0,(function*(){this.router.navigate(["/apps","editor"],{queryParams:{mode:"copy",appId:t.appId}})})),disabled:[0,1]},{icon:"people",title:"Subscribers",handler:()=>Object(i.a)(this,void 0,void 0,(function*(){this.router.navigate(["/subscribers"],{queryParams:{id:t.appId,type:"app"}})})),disabled:[0,1,2,3]},{icon:"remove",title:"Unubscribe",danger:!0,handler:()=>Object(i.a)(this,void 0,void 0,(function*(){this.confirm.show({message:"Are you sure you want to unsubscribe from "+t.name+"?",handler:()=>Object(i.a)(this,void 0,void 0,(function*(){this.loading=!0;const e=yield this.service.unsubscribe({appId:t.appId,userId:this.localstorage.get("userId")});if(e.ok){for(let e=0;e<this.apps.data.length;e++)if(this.apps.data[e].appId==t.appId){this.apps.data.splice(e,1),this.toast.show("You were unsubscribed!");break}this.apps.data=JSON.parse(JSON.stringify(this.apps.data))}else this.toast.show(e.error.message);this.loading=!1}))})})),disabled:[5]},{icon:"delete",title:"Delete",danger:!0,handler:()=>Object(i.a)(this,void 0,void 0,(function*(){this.confirm.show({message:"Are you sure you want to delete "+t.name+"?",handler:()=>Object(i.a)(this,void 0,void 0,(function*(){this.loading=!0;const e=yield this.service.delete({appId:t.appId});if(e.ok){for(let e=0;e<this.apps.data.length;e++)if(this.apps.data[e].appId==t.appId){this.apps.data.splice(e,1),this.toast.show("App was removed!");break}this.apps.data=JSON.parse(JSON.stringify(this.apps.data))}else this.toast.show(e.error.message);this.loading=!1}))})})),disabled:[0,1,2,3,4]}];window.innerWidth<=600&&e.unshift({icon:"launch",title:"Launch Application",handler:()=>Object(i.a)(this,void 0,void 0,(function*(){window.open(t.url,"_parent")})),disabled:[0]}),this.sheet.show({role:t.role,title:t.name,options:e})}))}describe(t,e,o){let i="-";return t.map(t=>{t[e]==o&&(i=t.description)}),i}ngOnInit(){this.buttons.show("add"),this.buttons.hide("close"),this.buttons.show("filter"),this.buttons.show("search"),this.apps.sort=this.sort,this.apps.sort.active="name",this.apps.sort.direction="asc",this.subscriptions.add=this.buttons.add.click.subscribe(t=>{this.router.navigate(["/apps","editor"],{queryParams:{mode:"add"}})}),this.subscriptions.loaded=this.config.loaded.subscribe(t=>{t&&this.list()}),this.subscriptions.search=this.buttons.search.value.subscribe(t=>{this.apps.filter=t}),this.subscriptions.filter=this.buttons.filter.click.subscribe(t=>Object(i.a)(this,void 0,void 0,(function*(){const t=yield this.dialog.open(w,{data:this.filter,panelClass:"filter-dialog"});yield t.afterClosed().subscribe(t=>Object(i.a)(this,void 0,void 0,(function*(){t&&(Object.keys(t).map(e=>{this.filter[e]=t[e]}),this.filters.update(this.filter),this.list())})))})))}ngOnDestroy(){this.buttons.reset("search"),this.subscriptions.add.unsubscribe(),this.subscriptions.loaded.unsubscribe(),this.subscriptions.search.unsubscribe(),this.subscriptions.filter.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(k.a),c.Mb(O.a),c.Mb(s.b),c.Mb(A.a),c.Mb(I.c),c.Mb(C.a),c.Mb(B.a),c.Mb(x.a),c.Mb(z.a),c.Mb(M.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["apps-page"]],viewQuery:function(t,e){var o;1&t&&c.vc(a.a,!0),2&t&&c.oc(o=c.bc())&&(e.sort=o.first)},decls:22,vars:7,consts:[["mode","indeterminate",4,"ngIf"],["class","filterbar",4,"ngIf"],["mat-table","","fxShow","","fxHide.xs","true","matSort","",3,"dataSource"],["matColumnDef","url"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","icon"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","private"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["fxHide","","fxShow.xs","true"],["lines","full","matRipple","",3,"click",4,"ngFor","ngForOf"],["mode","indeterminate"],[1,"filterbar"],[3,"removed",4,"ngFor","ngForOf"],[3,"removed"],["matChipRemove",""],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","target","_parent","matTooltip","Launch Application","matTooltipPosition","after",3,"href"],["width","40","height","40","draggable","false",3,"src","alt"],["mat-header-cell","","mat-sort-header",""],["mat-icon-button","","matTooltip","Options","matTooltipPosition","before",3,"click"],["mat-header-row",""],["mat-row",""],["lines","full","matRipple","",3,"click"],["slot","start","width","40","height","40","draggable","false",3,"src","alt"]],template:function(t,e){1&t&&(c.zc(0,j,1,0,"mat-progress-bar",0),c.zc(1,F,2,1,"mat-chip-list",1),c.Sb(2,"table",2),c.Qb(3,3),c.zc(4,V,1,0,"th",4),c.zc(5,G,4,1,"td",5),c.Pb(),c.Qb(6,6),c.zc(7,T,2,0,"th",4),c.zc(8,$,2,2,"td",5),c.Pb(),c.Qb(9,7),c.zc(10,H,2,0,"th",8),c.zc(11,E,2,1,"td",5),c.Pb(),c.Qb(12,9),c.zc(13,J,2,0,"th",8),c.zc(14,Q,2,1,"td",5),c.Pb(),c.Qb(15,10),c.zc(16,K,1,0,"th",4),c.zc(17,L,4,0,"td",5),c.Pb(),c.zc(18,W,1,0,"tr",11),c.zc(19,Y,1,0,"tr",12),c.Rb(),c.Sb(20,"mat-list",13),c.zc(21,U,5,3,"mat-list-item",14),c.Rb()),2&t&&(c.kc("ngIf",e.loading),c.Ab(1),c.kc("ngIf",e.filter.private.length>0),c.Ab(1),c.kc("dataSource",e.apps),c.Ab(16),c.kc("matHeaderRowDef",e.columns)("matHeaderRowDefSticky",!0),c.Ab(1),c.kc("matRowDefColumns",e.columns),c.Ab(2),c.kc("ngForOf",e.apps.data))},directives:[h.l,y.j,D.a,a.a,y.c,y.e,y.b,y.g,y.i,N.a,h.k,v.a,P.c,P.a,u.a,m.g,P.d,y.d,y.a,d.a,q.a,a.b,d.b,y.f,y.h,N.b,g.o],styles:[".mat-column-url[_ngcontent-%COMP%]{width:54px;padding-left:16px!important}.mat-column-icon[_ngcontent-%COMP%]{width:60px}.mat-column-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:4px}.mat-column-private[_ngcontent-%COMP%]{width:250px}.mat-column-options[_ngcontent-%COMP%]{width:40px;padding-right:16px!important}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row}"]}),t})();var X=o("FtGj"),tt=o("a6VE"),et=o("in+p"),ot=o("qFsG"),it=o("WJ5W"),rt=o("ihCf"),at=o("ZRfb"),nt=o("AbOq");function st(t,e){if(1&t&&(c.Sb(0,"mat-error"),c.Bc(1),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.Dc(" ",t.errors.name," ")}}function ct(t,e){if(1&t&&(c.Sb(0,"mat-error"),c.Bc(1),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.Dc(" ",t.errors.secret," ")}}function lt(t,e){if(1&t&&(c.Sb(0,"mat-error"),c.Bc(1),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.Dc(" ",t.errors.url," ")}}function bt(t,e){if(1&t&&(c.Sb(0,"mat-option",23),c.Bc(1),c.Rb()),2&t){const t=e.$implicit;c.kc("value",t.scopeId),c.Ab(1),c.Dc(" ",t.description," ")}}function mt(t,e){if(1&t&&(c.Sb(0,"mat-error"),c.Bc(1),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.Dc(" ",t.errors.scopes," ")}}function dt(t,e){if(1&t){const t=c.Tb();c.Sb(0,"mat-chip",26),c.ac("removed",(function(){c.rc(t);const o=e.$implicit;return c.ec().remove(o)})),c.Bc(1),c.Sb(2,"mat-icon",27),c.Bc(3," cancel "),c.Rb(),c.Rb()}if(2&t){const t=e.$implicit;c.Ab(1),c.Dc(" ",t," ")}}function ut(t,e){1&t&&(c.Sb(0,"mat-error"),c.Bc(1," You must have at least one doamin here! "),c.Rb())}function pt(t,e){if(1&t&&(c.Sb(0,"mat-error"),c.Bc(1),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.Dc(" ",t.errors.theme.color," ")}}function ht(t,e){if(1&t&&(c.Sb(0,"mat-error"),c.Bc(1),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.Dc(" ",t.errors.theme.background," ")}}function ft(t,e){if(1&t&&(c.Sb(0,"mat-error"),c.Bc(1),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.Dc(" ",t.errors.google.database," ")}}function gt(t,e){if(1&t&&(c.Sb(0,"mat-error"),c.Bc(1),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.Dc(" ",t.errors.google.credentials," ")}}function vt(t,e){if(1&t&&(c.Sb(0,"mat-error"),c.Bc(1),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.Dc(" ",t.errors.expiry," ")}}function St(t,e){if(1&t&&(c.Sb(0,"mat-error"),c.Bc(1),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.Dc(" ",t.errors.private," ")}}function Rt(t,e){if(1&t&&(c.Sb(0,"mat-error"),c.Bc(1),c.Rb()),2&t){const t=c.ec();c.Ab(1),c.Dc(" ",t.errors.organizationOnly," ")}}const wt=function(t){return{description:t}};let yt=(()=>{class t{constructor(t,e,o,i,r,a,s){this.toast=t,this.route=e,this.scopes=o,this.config=i,this.router=r,this.buttons=a,this.service=s,this.form=new n.f({theme:new n.f({color:new n.c(null,[n.w.required]),background:new n.c(null,[n.w.required])}),google:new n.f({database:new n.c(null,[n.w.required]),credentials:new n.c(null,[n.w.required])}),url:new n.c(null,[n.w.required]),icon:new n.c(null,[n.w.required]),name:new n.c(null,[n.w.required]),secret:new n.c(null,[n.w.required]),expiry:new n.c(6e4,[n.w.required,n.w.min(6e4)]),scopes:new n.c([],[n.w.required]),domains:new n.c([],[n.w.required]),private:new n.c(null,[n.w.required]),organizationOnly:new n.c(null,[n.w.required])}),this.errors={theme:{color:"",background:""},google:{database:"",credentials:""},url:"",icon:"",name:"",expiry:"",secret:"",scopes:"",domains:"",private:"",organizationOnly:""},this.filter=new n.f({scopes:new n.c("",[n.w.required])}),this.subscriptions={},this.keycodes=[X.g,X.c]}get(){return Object(i.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.service.get({filter:["url","role","icon","name","theme","expiry","secret","google","scopes","domains","private","organizationOnly"],appId:this.appId});if(t.ok){const e=new r.a(t.result);e.role>1?(this.form.controls.url.setValue(e.url),this.form.controls.icon.setValue(e.icon),this.form.controls.name.setValue(e.name),this.form.controls.secret.setValue(e.secret),this.form.controls.scopes.setValue(e.scopes),this.form.controls.expiry.setValue(e.expiry),this.form.controls.domains.setValue(e.domains),this.form.controls.private.setValue(e.private),this.form.controls.organizationOnly.setValue(e.organizationOnly),this.form.controls.theme.controls.color.setValue(e.theme.color),this.form.controls.theme.controls.background.setValue(e.theme.background),this.form.controls.google.controls.database.setValue(e.google.database),this.form.controls.google.controls.credentials.setValue(JSON.stringify(e.google.credentials,null,4))):(this.toast.show("You have insufficient rights to edit this app!"),this.router.navigate(["/apps"]))}else this.toast.show(t.error.message),this.router.navigate(["/apps"]);this.loading=!1}))}load(){return Object(i.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.scopes.load({filter:["url","scopeId","description"]});t.ok?this.scopes.data=t.result.map(t=>t):(this.scopes.data=[],this.toast.show(t.error.message)),this.loading=!1}))}submit(){return Object(i.a)(this,void 0,void 0,(function*(){this.loading=!0;let t=this.mode;"copy"==t&&(t="add",delete this.appId);const e=yield this.service[t]({theme:{color:this.form.value.theme.color,background:this.form.value.theme.background},google:{database:this.form.value.google.database,credentials:this.form.value.google.credentials},url:this.form.value.url,icon:this.form.value.icon,name:this.form.value.name,appId:this.appId,expiry:this.form.value.expiry,secret:this.form.value.secret,scopes:this.form.value.scopes,private:this.form.value.private,domains:this.form.value.domains,organizationOnly:this.form.value.organizationOnly});e.ok?this.router.navigate(["/apps"]):this.toast.show(e.error.message),this.loading=!1}))}upload(t){return Object(i.a)(this,void 0,void 0,(function*(){this.form.controls.icon.setValue(t)}))}remove(t){return Object(i.a)(this,void 0,void 0,(function*(){this.form.value.domains.splice(this.form.value.domains.indexOf(t),1)}))}add(t){return Object(i.a)(this,void 0,void 0,(function*(){const e=this.form.value.domains;null==t.value||""==t.value||e.includes(t.value.trim())||(t.input.value="",e.push(t.value.trim()),this.form.controls.domains.setValue(e))}))}ngOnInit(){this.buttons.hide("add"),this.buttons.show("close"),this.buttons.hide("filter"),this.buttons.hide("search"),this.subscriptions.close=this.buttons.close.click.subscribe(t=>{this.router.navigate(["/apps"])}),this.subscriptions.loaded=this.config.loaded.subscribe(t=>Object(i.a)(this,void 0,void 0,(function*(){if(t){const t=this.route.snapshot.queryParams;this.mode=t.mode,this.appId=t.appId,"add"!=this.mode?(yield this.get(),yield this.load()):yield this.load()}})))}ngOnDestroy(){this.subscriptions.close.unsubscribe(),this.subscriptions.loaded.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(k.a),c.Mb(I.a),c.Mb(tt.a),c.Mb(O.a),c.Mb(I.c),c.Mb(B.a),c.Mb(z.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["apps-editor-page"]],decls:91,vars:33,consts:[[3,"formGroup","ngSubmit"],["upload","","upload-accept","image/*","matRipple","",3,"upload-src","upload-change"],["appearance","outline"],["matInput","","type","text","name","name","placeholder","name","formControlName","name","required",""],[4,"ngIf"],["matInput","","type","text","name","secret","placeholder","secret","formControlName","secret","required",""],["matInput","","type","text","name","url","placeholder","main url","formControlName","url","required",""],["name","scopes","placeholder","scopes","formControlName","scopes","required","","multiple",""],[3,"formGroup"],["placeholderLabel","filter scopes","noEntriesFoundLabel","no scopes found","formControlName","scopes"],[3,"value",4,"ngFor","ngForOf"],["aria-label","domain selection","required",""],["domainlist",""],[3,"removed",4,"ngFor","ngForOf"],["placeholder","New domain...",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["appearance","outline","formGroupName","theme"],["matInput","","type","color","name","color","placeholder","font color","formControlName","color","required",""],["matInput","","type","color","name","background","placeholder","background color","formControlName","background","required",""],["appearance","outline","formGroupName","google"],["matInput","","type","text","name","database","placeholder","database","formControlName","database","required",""],["matInput","","cdkTextareaAutosize","","name","credentials","placeholder","credentials","formControlName","credentials","required",""],["matInput","","min","60000","type","number","name","expiry","placeholder","token expiry","formControlName","expiry","required",""],["name","private","formControlName","private","required",""],[3,"value"],["name","organizationOnly","formControlName","organizationOnly","required",""],["type","button","mat-flat-button","","color","primary",3,"disabled","click"],[3,"removed"],["matChipRemove",""]],template:function(t,e){if(1&t&&(c.Sb(0,"mat-content"),c.Sb(1,"form",0),c.ac("ngSubmit",(function(){return!e.loading&&!e.form.invalid&&e.submit()})),c.Sb(2,"div",1),c.ac("upload-change",(function(t){return e.upload(t)})),c.Sb(3,"mat-icon"),c.Bc(4,"publish"),c.Rb(),c.Rb(),c.Sb(5,"h2"),c.Bc(6," Details "),c.Rb(),c.Sb(7,"mat-form-field",2),c.Sb(8,"mat-label"),c.Bc(9," Name "),c.Rb(),c.Nb(10,"input",3),c.zc(11,st,2,1,"mat-error",4),c.Rb(),c.Sb(12,"mat-form-field",2),c.Sb(13,"mat-label"),c.Bc(14," Secret "),c.Rb(),c.Nb(15,"input",5),c.zc(16,ct,2,1,"mat-error",4),c.Rb(),c.Sb(17,"mat-form-field",2),c.Sb(18,"mat-label"),c.Bc(19," Main Url "),c.Rb(),c.Nb(20,"input",6),c.zc(21,lt,2,1,"mat-error",4),c.Rb(),c.Sb(22,"mat-form-field",2),c.Sb(23,"mat-label"),c.Bc(24," Scopes "),c.Rb(),c.Sb(25,"mat-select",7),c.Sb(26,"mat-option",8),c.Nb(27,"ngx-mat-select-search",9),c.Rb(),c.zc(28,bt,2,2,"mat-option",10),c.fc(29,"filterBy"),c.Rb(),c.zc(30,mt,2,1,"mat-error",4),c.Rb(),c.Sb(31,"mat-form-field",2),c.Sb(32,"mat-label"),c.Bc(33," Domains "),c.Rb(),c.Sb(34,"mat-chip-list",11,12),c.zc(36,dt,4,1,"mat-chip",13),c.Sb(37,"input",14),c.ac("matChipInputTokenEnd",(function(t){return e.add(t)})),c.Rb(),c.Rb(),c.zc(38,ut,2,0,"mat-error",4),c.Rb(),c.Sb(39,"h2"),c.Bc(40," Theme "),c.Rb(),c.Sb(41,"mat-form-field",15),c.Sb(42,"mat-label"),c.Bc(43," Font Color "),c.Rb(),c.Nb(44,"input",16),c.zc(45,pt,2,1,"mat-error",4),c.Rb(),c.Sb(46,"mat-form-field",15),c.Sb(47,"mat-label"),c.Bc(48," Background Color "),c.Rb(),c.Nb(49,"input",17),c.zc(50,ht,2,1,"mat-error",4),c.Rb(),c.Sb(51,"h2"),c.Bc(52," Google "),c.Rb(),c.Sb(53,"mat-form-field",18),c.Sb(54,"mat-label"),c.Bc(55," Database "),c.Rb(),c.Nb(56,"input",19),c.zc(57,ft,2,1,"mat-error",4),c.Rb(),c.Sb(58,"mat-form-field",18),c.Sb(59,"mat-label"),c.Bc(60," Credentials "),c.Rb(),c.Nb(61,"textarea",20),c.zc(62,gt,2,1,"mat-error",4),c.Rb(),c.Sb(63,"h2"),c.Bc(64," Access Control "),c.Rb(),c.Sb(65,"mat-form-field",2),c.Sb(66,"mat-label"),c.Bc(67," Token Expiry (ms) "),c.Rb(),c.Nb(68,"input",21),c.zc(69,vt,2,1,"mat-error",4),c.Rb(),c.Sb(70,"mat-form-field",2),c.Sb(71,"mat-label"),c.Bc(72," Access Mode "),c.Rb(),c.Sb(73,"mat-select",22),c.Sb(74,"mat-option",23),c.Bc(75," Public "),c.Rb(),c.Sb(76,"mat-option",23),c.Bc(77," Private "),c.Rb(),c.Rb(),c.zc(78,St,2,1,"mat-error",4),c.Rb(),c.Sb(79,"mat-form-field",2),c.Sb(80,"mat-label"),c.Bc(81," Sharing Rules "),c.Rb(),c.Sb(82,"mat-select",24),c.Sb(83,"mat-option",23),c.Bc(84," Share To Anyone "),c.Rb(),c.Sb(85,"mat-option",23),c.Bc(86," In Organization Only "),c.Rb(),c.Rb(),c.zc(87,Rt,2,1,"mat-error",4),c.Rb(),c.Rb(),c.Rb(),c.Sb(88,"mat-footer"),c.Sb(89,"button",25),c.ac("click",(function(){return!e.loading&&!e.form.invalid&&e.submit()})),c.Bc(90),c.Rb(),c.Rb()),2&t){const t=c.pc(35);c.Ab(1),c.kc("formGroup",e.form),c.Ab(1),c.Eb("required",!e.form.value.icon),c.kc("upload-src",e.form.value.icon),c.Ab(9),c.kc("ngIf",e.errors.name),c.Ab(5),c.kc("ngIf",e.errors.secret),c.Ab(5),c.kc("ngIf",e.errors.url),c.Ab(5),c.kc("formGroup",e.filter),c.Ab(2),c.kc("ngForOf",c.hc(29,28,e.scopes.data,c.mc(31,wt,e.filter.value.scopes))),c.Ab(2),c.kc("ngIf",e.errors.scopes),c.Ab(6),c.kc("ngForOf",e.form.value.domains),c.Ab(1),c.kc("matChipInputFor",t)("matChipInputSeparatorKeyCodes",e.keycodes)("matChipInputAddOnBlur",!0),c.Ab(1),c.kc("ngIf",0==e.form.value.domains.length),c.Ab(7),c.kc("ngIf",e.errors.theme.color),c.Ab(5),c.kc("ngIf",e.errors.theme.background),c.Ab(7),c.kc("ngIf",e.errors.google.database),c.Ab(5),c.kc("ngIf",e.errors.google.credentials),c.Ab(7),c.kc("ngIf",e.errors.expiry),c.Ab(5),c.kc("value",!1),c.Ab(2),c.kc("value",!0),c.Ab(2),c.kc("ngIf",e.errors.private),c.Ab(5),c.kc("value",0),c.Ab(2),c.kc("value",1),c.Ab(2),c.kc("ngIf",e.errors.organizationOnly),c.Ab(2),c.kc("disabled",e.form.invalid||0==e.form.value.domains.length),c.Ab(1),c.Dc(" ",e.mode," ")}},directives:[p.a,n.x,n.p,n.g,et.a,g.o,u.a,m.c,m.g,ot.a,n.b,n.o,n.e,n.v,h.l,f.a,g.k,it.a,h.k,P.c,P.b,n.h,rt.b,n.s,at.a,d.b,m.b,P.a,P.d],pipes:[nt.a],styles:["[upload][_ngcontent-%COMP%]{width:100px;margin:auto;height:100px;border:2px solid transparent;display:flex;align-items:center;border-radius:100%;justify-content:center;background-color:#eee}[upload].required[_ngcontent-%COMP%]{border-color:red}mat-content[_ngcontent-%COMP%], mat-footer[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}mat-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], mat-footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:400px;margin-top:20px}mat-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], mat-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;max-width:400px}mat-footer[_ngcontent-%COMP%]{justify-content:center}"]}),t})();var kt=o("5Yg0"),Ot=o("gyTc"),At=o("R32p"),It=o("wZkO"),Ct=o("tVzd"),Bt=o("YUcS"),xt=o("H0Zp"),zt=o("p/0r");const Mt=[{path:"",component:Z},{path:"editor",component:yt}];let Dt=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[n.i,h.c,kt.a,a.c,Ot.a,It.a,u.b,N.c,At.a,P.e,y.l,ot.b,s.c,f.b,g.p,d.c,Ct.a,q.b,b.b,xt.a,Bt.a,zt.a,m.e,n.u,v.b,it.b,I.g.forChild(Mt)]]}),t})()}}]);