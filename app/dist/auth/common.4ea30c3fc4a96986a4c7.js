(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1jcm":function(e,t,i){"use strict";i.d(t,"a",(function(){return y})),i.d(t,"b",(function(){return A}));var a=i("GU7r"),r=i("fXoL"),n=i("FKr1"),o=i("8LU1"),s=i("3Pt+"),l=i("R1ws"),d=i("u47x");const m=["thumbContainer"],c=["toggleBar"],g=["input"],h=function(){return{enterDuration:150}},p=["*"],f=new r.r("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});let b=0;const u={provide:s.l,useExisting:Object(r.U)(()=>y),multi:!0};class k{constructor(e,t){this.source=e,this.checked=t}}class _{constructor(e){this._elementRef=e}}const x=Object(n.v)(Object(n.r)(Object(n.s)(Object(n.t)(_)),"accent"));let y=(()=>{class e extends x{constructor(e,t,i,a,n,o){super(e),this._focusMonitor=t,this._changeDetectorRef=i,this.defaults=n,this._animationMode=o,this._onChange=e=>{},this._onTouched=()=>{},this._uniqueId="mat-slide-toggle-"+ ++b,this._required=!1,this._checked=!1,this.name=null,this.id=this._uniqueId,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new r.o,this.toggleChange=new r.o,this.tabIndex=parseInt(a)||0}get required(){return this._required}set required(e){this._required=Object(o.c)(e)}get checked(){return this._checked}set checked(e){this._checked=Object(o.c)(e),this._changeDetectorRef.markForCheck()}get inputId(){return(this.id||this._uniqueId)+"-input"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{"keyboard"===e||"program"===e?this._inputElement.nativeElement.focus():e||Promise.resolve().then(()=>this._onTouched())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onChangeEvent(e){e.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}_onInputClick(e){e.stopPropagation()}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}focus(e){this._focusMonitor.focusVia(this._inputElement,"keyboard",e)}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(new k(this,this.checked))}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(r.l),r.Lb(d.f),r.Lb(r.h),r.Wb("tabindex"),r.Lb(f),r.Lb(l.a,8))},e.\u0275cmp=r.Fb({type:e,selectors:[["mat-slide-toggle"]],viewQuery:function(e,t){var i;1&e&&(r.Cc(m,!0),r.Cc(c,!0),r.Cc(g,!0)),2&e&&(r.mc(i=r.ac())&&(t._thumbEl=i.first),r.mc(i=r.ac())&&(t._thumbBarEl=i.first),r.mc(i=r.ac())&&(t._inputElement=i.first))},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(e,t){2&e&&(r.Ub("id",t.id),r.Bb("tabindex",t.disabled?null:-1)("aria-label",null)("aria-labelledby",null),r.Db("mat-checked",t.checked)("mat-disabled",t.disabled)("mat-slide-toggle-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[r.zb([u]),r.xb],ngContentSelectors:p,decls:16,vars:18,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(e,t){if(1&e&&(r.hc(),r.Rb(0,"label",0,1),r.Rb(2,"div",2,3),r.Rb(4,"input",4,5),r.Zb("change",(function(e){return t._onChangeEvent(e)}))("click",(function(e){return t._onInputClick(e)})),r.Qb(),r.Rb(6,"div",6,7),r.Mb(8,"div",8),r.Rb(9,"div",9),r.Mb(10,"div",10),r.Qb(),r.Qb(),r.Qb(),r.Rb(11,"span",11,12),r.Zb("cdkObserveContent",(function(){return t._onLabelTextChange()})),r.Rb(13,"span",13),r.yc(14,"\xa0"),r.Qb(),r.gc(15),r.Qb(),r.Qb()),2&e){const e=r.nc(1),i=r.nc(12);r.Bb("for",t.inputId),r.Ab(2),r.Db("mat-slide-toggle-bar-no-side-margin",!i.textContent||!i.textContent.trim()),r.Ab(2),r.ic("id",t.inputId)("required",t.required)("tabIndex",t.tabIndex)("checked",t.checked)("disabled",t.disabled),r.Bb("name",t.name)("aria-checked",t.checked.toString())("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby),r.Ab(5),r.ic("matRippleTrigger",e)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",r.jc(17,h))}},directives:[n.m,a.a],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),e})(),v=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(t){return new(t||e)}}),e})(),A=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(t){return new(t||e)},imports:[[v,n.n,n.f,a.c],v,n.f]}),e})()},"4jEk":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var a=i("fXoL");const r=["*"];let n=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["mat-content"]],ngContentSelectors:r,decls:1,vars:0,template:function(e,t){1&e&&(a.hc(),a.gc(0))},styles:["mat-content{flex:1 auto;height:calc(100vh- 100px);overflow-y:auto}"],encapsulation:2}),e})()},Xa2L:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return f}));var a=i("fXoL"),r=i("ofXK"),n=i("FKr1"),o=i("8LU1"),s=i("nLfN"),l=i("R1ws");function d(e,t){if(1&e&&(a.cc(),a.Mb(0,"circle",3)),2&e){const e=a.dc();a.uc("animation-name","mat-progress-spinner-stroke-rotate-"+e._spinnerAnimationLabel)("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),a.Bb("r",e._getCircleRadius())}}function m(e,t){if(1&e&&(a.cc(),a.Mb(0,"circle",3)),2&e){const e=a.dc();a.uc("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),a.Bb("r",e._getCircleRadius())}}class c{constructor(e){this._elementRef=e}}const g=Object(n.r)(c,"primary"),h=new a.r("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});let p=(()=>{class e extends g{constructor(t,i,a,r,n){super(t),this._elementRef=t,this._document=a,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const o=e._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),o.has(a.head)||o.set(a.head,new Set([100])),this._fallbackAnimation=i.EDGE||i.TRIDENT,this._noopAnimations="NoopAnimations"===r&&!!n&&!n._forceAnimations,n&&(n.diameter&&(this.diameter=n.diameter),n.strokeWidth&&(this.strokeWidth=n.strokeWidth))}get diameter(){return this._diameter}set diameter(e){this._diameter=Object(o.f)(e),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(e){this._strokeWidth=Object(o.f)(e)}get value(){return"determinate"===this.mode?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,Object(o.f)(e)))}ngOnInit(){const e=this._elementRef.nativeElement;this._styleRoot=Object(s.c)(e)||this._document.head,this._attachStyleNode(),e.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const e=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${e} ${e}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const t=this._styleRoot,i=this._diameter,a=e._diameters;let r=a.get(t);if(!r||!r.has(i)){const e=this._document.createElement("style");e.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),e.textContent=this._getAnimationText(),t.appendChild(e),r||(r=new Set,a.set(t,r)),r.add(i)}}_getAnimationText(){const e=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*e).replace(/END_VALUE/g,""+.2*e).replace(/DIAMETER/g,""+this._spinnerAnimationLabel)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(a.l),a.Lb(s.a),a.Lb(r.d,8),a.Lb(l.a,8),a.Lb(h))},e.\u0275cmp=a.Fb({type:e,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(e,t){2&e&&(a.Bb("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),a.uc("width",t.diameter,"px")("height",t.diameter,"px"),a.Db("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[a.xb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,t){1&e&&(a.cc(),a.Rb(0,"svg",0),a.xc(1,d,1,9,"circle",1),a.xc(2,m,1,7,"circle",2),a.Qb()),2&e&&(a.uc("width",t.diameter,"px")("height",t.diameter,"px"),a.ic("ngSwitch","indeterminate"===t.mode),a.Bb("viewBox",t._getViewBox()),a.Ab(1),a.ic("ngSwitchCase",!0),a.Ab(1),a.ic("ngSwitchCase",!1))},directives:[r.m,r.n],styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],encapsulation:2,changeDetection:0}),e._diameters=new WeakMap,e})(),f=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[n.f,r.c],n.f]}),e})()}}]);