"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneButtonButton=require("polythene/button/button");var _polytheneButtonButton2=_interopRequireDefault(_polytheneButtonButton);var repeatText=function repeatText(text,count){var out="";while(count>0){out+=text;count--}return out};var template=['<div class="demo-content">',repeatText("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",16),"</div>"].join("");var shortBodyText="Discard draft?";var cancelOkButtons=[_mithril2["default"].component(_polytheneButtonButton2["default"],{label:"Cancel",events:{onclick:function onclick(){window.dialog.shouldHide=true}}}),_mithril2["default"].component(_polytheneButtonButton2["default"],{label:"Discard",events:{onclick:function onclick(){window.dialog.shouldHide=true}}})];var dialogProps={"class":"demo-dialog",footer:cancelOkButtons,shouldHide:function shouldHide(){return window.dialog.shouldHide},didHide:function didHide(){if(window.dialog){window.dialog.shouldHide=false}window.dialog=null;_mithril2["default"].route("/dialog");_mithril2["default"].redraw()}};exports["default"]={dialogProps:dialogProps,template:template,shortBodyText:shortBodyText,cancelOkButtons:cancelOkButtons};module.exports=exports["default"];