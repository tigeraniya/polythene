"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _config=require("polythene/radio-button/theme/config");var _config2=_interopRequireDefault(_config);var _custom=require("polythene/config/custom");var _layout=require("polythene/radio-button/theme/layout");var _layout2=_interopRequireDefault(_layout);var _color=require("polythene/radio-button/theme/color");var _color2=_interopRequireDefault(_color);var _styler=require("polythene/common/styler");var _styler2=_interopRequireDefault(_styler);var _iconOff=require("polythene/radio-button/theme/icon-off");var _iconOff2=_interopRequireDefault(_iconOff);var _iconOn=require("polythene/radio-button/theme/icon-on");var _iconOn2=_interopRequireDefault(_iconOn);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var config=_custom.checkbox?(0,_custom.checkbox)(_config2.default):_config2.default;_styler2.default.add("pe-radio-button",(0,_layout2.default)(config),(0,_color2.default)(config));exports.default={iconOff:_iconOff2.default,iconOn:_iconOn2.default};