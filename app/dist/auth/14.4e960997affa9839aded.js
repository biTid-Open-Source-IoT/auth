(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4gMo":function(t,e,i){"use strict";i.r(e),i.d(e,"FeaturesModule",(function(){return S}));var n=i("mrSG"),c=i("+0xr"),o=i("fXoL"),s=i("L7HW"),a=i("wJso"),r=i("znSr"),l=i("MutI"),b=i("ofXK"),u=i("bTqV"),m=i("NFeN"),f=i("FKr1");function d(t,e){1&t&&(o.Rb(0,"th",10),o.zc(1," Title "),o.Qb())}function p(t,e){if(1&t&&(o.Rb(0,"td",11),o.zc(1),o.Qb()),2&t){const t=e.$implicit;o.Ab(1),o.Bc(" ",t.title," ")}}function h(t,e){1&t&&(o.Rb(0,"th",10),o.zc(1," Description "),o.Qb())}function w(t,e){if(1&t&&(o.Rb(0,"td",11),o.zc(1),o.Qb()),2&t){const t=e.$implicit;o.Ab(1),o.Bc(" ",t.description," ")}}function R(t,e){1&t&&o.Mb(0,"th",10)}function g(t,e){1&t&&(o.Rb(0,"td",11),o.Rb(1,"button",12),o.Rb(2,"mat-icon"),o.zc(3," more_vert "),o.Qb(),o.Qb(),o.Qb())}function y(t,e){1&t&&o.Mb(0,"tr",13)}function D(t,e){1&t&&o.Mb(0,"tr",14)}function O(t,e){if(1&t){const t=o.Sb();o.Rb(0,"mat-list-item",15),o.Zb("click",(function(){o.qc(t);const i=e.$implicit;return o.dc().options(i)})),o.Rb(1,"mat-label"),o.Rb(2,"h3"),o.zc(3),o.Qb(),o.Rb(4,"p"),o.zc(5),o.Qb(),o.Qb(),o.Qb()}if(2&t){const t=e.$implicit;o.Ab(3),o.Bc(" ",t.title," "),o.Ab(2),o.Bc(" ",t.description," ")}}let Q=(()=>{class t{constructor(t,e){this.config=t,this.service=e,this.columns=["title","description","options"],this.features=new c.k,this.subscriptions={}}list(){return Object(n.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.service.list({filter:["icon","role","title","featureId","description"]});this.features.data=t.ok?t.result:[],this.loading=!1}))}options(t){return Object(n.a)(this,void 0,void 0,(function*(){}))}ngOnInit(){this.subscriptions.loaded=this.config.loaded.subscribe(t=>{t&&this.list()})}ngOnDestroy(){this.subscriptions.loaded.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(s.a),o.Lb(a.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["features-page"]],decls:14,vars:5,consts:[["mat-table","","fxShow","","fxHide.xs","true",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["fxHide","","fxShow.xs","true"],["lines","full","matRipple","",3,"click",4,"ngFor","ngForOf"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button",""],["mat-header-row",""],["mat-row",""],["lines","full","matRipple","",3,"click"]],template:function(t,e){1&t&&(o.Rb(0,"table",0),o.Pb(1,1),o.yc(2,d,2,0,"th",2),o.yc(3,p,2,1,"td",3),o.Ob(),o.Pb(4,4),o.yc(5,h,2,0,"th",2),o.yc(6,w,2,1,"td",3),o.Ob(),o.Pb(7,5),o.yc(8,R,1,0,"th",2),o.yc(9,g,4,0,"td",3),o.Ob(),o.yc(10,y,1,0,"tr",6),o.yc(11,D,1,0,"tr",7),o.Qb(),o.Rb(12,"mat-list",8),o.yc(13,O,6,2,"mat-list-item",9),o.Qb()),2&t&&(o.jc("dataSource",e.features),o.Ab(10),o.jc("matHeaderRowDef",e.columns)("matHeaderRowDefSticky",!0),o.Ab(1),o.jc("matRowDefColumns",e.columns),o.Ab(2),o.jc("ngForOf",e.features.data))},directives:[c.j,r.a,c.c,c.e,c.b,c.g,c.i,l.a,b.k,c.d,c.a,u.a,m.a,c.f,c.h,l.b,f.m],styles:[".mat-column-title[_ngcontent-%COMP%]{width:30%}.mat-column-options[_ngcontent-%COMP%]{width:40px;padding-right:16px!important}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row}"]}),t})();var C=i("wZkO"),k=i("YUcS"),v=i("H0Zp"),x=i("tyNb");const M=[{path:"",component:Q}];let S=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[b.c,C.a,m.b,l.c,c.l,f.n,u.b,v.a,k.a,x.f.forChild(M)]]}),t})()}}]);