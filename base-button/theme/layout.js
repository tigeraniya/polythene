"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _config=require("polythene/config/config"),_config2=_interopRequireDefault(_config),_mixin=require("polythene/common/mixin"),_mixin2=_interopRequireDefault(_mixin),style=[{".pe-button":[_mixin2["default"].vendorize({"user-select":"none"},_config2["default"].prefixes_user_select),{outline:"none",padding:0,"text-decoration":"none","text-align":"center",cursor:"pointer","&.pe-button--selected, &.pe-button--disabled, &.pe-button--inactive":{cursor:"default","pointer-events":"none"}," .pe-button__content":{position:"relative","border-radius":"inherit"}," .pe-button__label":[_mixin2["default"].fontSmoothing(),{position:"relative","z-index":1,display:"block","border-radius":"inherit","pointer-events":"none"}]," .pe-button__wash, .pe-button__focus":[_mixin2["default"].defaultTransition("background-color"),_mixin2["default"].fit(),{"border-radius":"inherit","pointer-events":"none"}]," .pe-button__focus":{opacity:0},"&.pe-button--focus":{" .pe-button__focus":{opacity:1}}," .pe-button__wash":{"z-index":1}}]}];exports["default"]=style,module.exports=exports["default"];
//# sourceMappingURL=layout.js.map