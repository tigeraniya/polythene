"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _config=require("polythene/config/config"),_config2=_interopRequireDefault(_config),_mixin=require("polythene/common/mixin"),_mixin2=_interopRequireDefault(_mixin),iconSizesPx=function(){var size=arguments.length<=0||void 0===arguments[0]?_config2["default"].unit_icon_size:arguments[0];return{width:size+"px",height:size+"px"}},createStyles=function(config){return[{".pe-icon":{display:"inline-block","vertical-align":"middle","background-repeat":"no-repeat",fill:"currentcolor",position:"relative","font-size":0,"line-height":0,"&.pe-icon--avatar img":{border:"none","border-radius":"50%",width:"100%",height:"100%"}," i":[_mixin2["default"].fit(),{display:"block","font-size":"inherit",color:"inherit","line-height":"inherit",height:"100%"," img":{height:"100%"}," svg":{width:"100%",height:"100%",fill:"currentcolor",color:"inherit"," path:not([fill=none])":{fill:"currentcolor"}}}],"&.pe-icon--small":iconSizesPx(config.size_small),"&.pe-icon--regular":iconSizesPx(config.size_regular),"&.pe-icon--medium":iconSizesPx(config.size_medium),"&.pe-icon--large":iconSizesPx(config.size_large)}}]};exports["default"]=function(config){return _mixin2["default"].createStyles(config,createStyles)},module.exports=exports["default"];
//# sourceMappingURL=layout.js.map