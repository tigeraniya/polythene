"use strict";Object.defineProperty(exports,"__esModule",{value:true});var show=function show(ctrl,opts){var height=ctrl.el.getBoundingClientRect().height;return{el:ctrl.containerEl,showDuration:opts.showDuration||.4,showDelay:opts.showDelay||0,beforeShow:function beforeShow(){return ctrl.containerEl.style.transform="translate3d(0, "+height+"px, 0)"},show:function show(){return ctrl.containerEl.style.transform="translate3d(0, "+0+"px, 0)"}}};var hide=function hide(ctrl,opts){var height=ctrl.el.getBoundingClientRect().height;return{el:ctrl.containerEl,hideDuration:opts.hideDuration||.4,hideDelay:opts.hideDelay||0,hide:function hide(){return ctrl.containerEl.style.transform="translate3d(0, "+height+"px, 0)"},afterHide:function afterHide(){return ctrl.containerEl.style.transform="translate3d(0, "+0+"px, 0)"}}};exports.default={show:show,hide:hide};