"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _spinner=require("polythene/spinner/spinner");var _spinner2=_interopRequireDefault(_spinner);require("polythene/spinner/theme/indeterminate/theme");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var CSS_CLASSES={block:"pe-spinner--indeterminate",animation:"pe-spinner__animation"};var component={view:function view(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];opts.content=(0,_mithril2.default)("svg",{"class":CSS_CLASSES.animation,viewBox:"0 0 40 40"},(0,_mithril2.default)("circle",{cx:20,cy:20,r:18,fill:"none"}));opts.class=[CSS_CLASSES.block,opts.class].join(" ");return _mithril2.default.component(_spinner2.default,opts)}};exports.default=component;