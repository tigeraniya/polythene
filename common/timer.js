"use strict";Object.defineProperty(exports,"__esModule",{value:true});var Timer=function Timer(callback,delay){var timerId=undefined,start=undefined,remaining=delay;this.stop=function(){window.clearTimeout(timerId)};this.pause=function(){window.clearTimeout(timerId);remaining-=new Date-start};this.resume=function(){start=new Date;window.clearTimeout(timerId);timerId=window.setTimeout(callback,remaining)};this.resume()};exports["default"]=Timer;module.exports=exports["default"];