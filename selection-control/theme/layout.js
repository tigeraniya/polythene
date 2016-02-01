"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _config=require("polythene/config/config");var _config2=_interopRequireDefault(_config);var _mixin=require("polythene/common/mixin");var _mixin2=_interopRequireDefault(_mixin);var _flex=require("polythene/layout/theme/flex");var _flex2=_interopRequireDefault(_flex);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var getSize=function getSize(height){var iconSize=arguments.length<=1||arguments[1]===undefined?_config2.default.unit_icon_size:arguments[1];return{" .pe-control__label":{height:height+"px"}," .pe-control__box":{width:iconSize+"px",height:iconSize+"px"}}};var activeButton=function activeButton(){return{opacity:1,"z-index":1}};var inactiveButton=function inactiveButton(){return{opacity:0,"z-index":0}};var createStyles=function createStyles(config,className,type){var _peControl;return[{".pe-control":(_peControl={display:"inline-block","box-sizing":"border-box",margin:0,padding:0," .pe-control__label":[_flex2.default.layout,_flex2.default.layoutHorizontal,_flex2.default.layoutCenter,{position:"relative",cursor:"pointer","font-size":config.label_font_size+"px","line-height":config.label_height+"px",margin:0,color:"inherit"}]},_defineProperty(_peControl," input[type="+type+"].pe-control__input",[_mixin2.default.vendorize({appearance:"none"},_config2.default.prefixes_appearance),{"line-height":config.label_height+"px",position:"absolute","z-index":"-1",width:0,height:0,margin:0,padding:0,opacity:0,border:"none","pointer-events":"none"}]),_defineProperty(_peControl," .pe-control__box",{position:"relative",display:"inline-block","box-sizing":"border-box",width:config.label_height+"px",height:config.label_height+"px",color:"inherit"}),_defineProperty(_peControl," .pe-control__button",[_mixin2.default.defaultAnimation("opacity",config.animation_duration),{position:"absolute",left:-((config.button_size-config.icon_size)/2)+"px",top:-((config.button_size-config.icon_size)/2)+"px","z-index":1,opacity:0,"pointer-events":"auto"}]),_defineProperty(_peControl,"&.pe-control--off",{" .pe-control__button--on":inactiveButton()," .pe-control__button--off":activeButton()}),_defineProperty(_peControl,"&.pe-control--on",{" .pe-control__button--on":activeButton()," .pe-control__button--off":inactiveButton()}),_defineProperty(_peControl," .pe-control__label span",{"padding-left":config.padding+"px","padding-right":config.padding+"px"}),_defineProperty(_peControl,"&.pe-control--disabled",{" .pe-control__label":{cursor:"auto"}," .pe-control__button":{"pointer-events":"none"}}),_defineProperty(_peControl,"&.pe-control--small",getSize(_config2.default.unit_icon_size_small,_config2.default.unit_icon_size_small)),_defineProperty(_peControl,"&.pe-control--regular",getSize(config.label_height,_config2.default.unit_icon_size)),_defineProperty(_peControl,"&.pe-control--medium",getSize(_config2.default.unit_icon_size_medium,_config2.default.unit_icon_size_medium)),_defineProperty(_peControl,"&.pe-control--large",getSize(_config2.default.unit_icon_size_large,_config2.default.unit_icon_size_large)),_peControl)}]};exports.default=createStyles;