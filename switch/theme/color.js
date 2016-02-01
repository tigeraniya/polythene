"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _mixin=require("polythene/common/mixin");var _mixin2=_interopRequireDefault(_mixin);var _color=require("polythene/selection-control/theme/color");var _color2=_interopRequireDefault(_color);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var style=function style(config,tint){var scope=arguments.length<=2||arguments[2]===undefined?"":arguments[2];return[(0,_color2.default)(config,tint,scope),_defineProperty({},scope+".pe-control--switch",{" .pe-control--switch__knob":{"background-color":"currentcolor"}," .pe-control--switch__hitarea--transparent":{opacity:0},"&.pe-control--on":{" .pe-control--switch__track":{opacity:config["color_"+tint+"_track_on_opacity"],"background-color":config["color_"+tint+"_track_on"]}," .pe-control--switch__thumb":{color:config["color_"+tint+"_thumb_on"]}," .pe-control--switch__thumb:active, .pe-control--switch__track:active":{" .pe-button__wash:not(.pe-control--switch__knob-hitarea)":{opacity:config["color_"+tint+"_wash_on_opacity"],"background-color":config["color_"+tint+"_wash_on"]}}}," .pe-control--switch__thumb:active, .pe-control--switch__track:active":{" .pe-control--switch__hitarea:not(.pe-control--switch__hitarea--transparent)":{opacity:config["color_"+tint+"_wash_off_opacity"],"background-color":config["color_"+tint+"_wash_off"]}},"&.pe-control--off":{" .pe-control--switch__track":{opacity:config["color_"+tint+"_track_off_opacity"],"background-color":config["color_"+tint+"_track_off"]}," .pe-control--switch__thumb":{color:config["color_"+tint+"_thumb_off"]}},"&.pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled":{" .pe-control--switch__track":{opacity:config["color_"+tint+"_track_disabled_opacity"],"background-color":config["color_"+tint+"_track_disabled"]}," .pe-control--switch__thumb .pe-control--switch__knob":{"background-color":config["color_"+tint+"_thumb_disabled"]}}})]};var createStyles=function createStyles(config){return[style(config,"light"),{".pe-dark-theme":[style(config,"dark"," "),style(config,"dark","&")]}]};exports.default=function(config){return _mixin2.default.createStyles(config,createStyles)};