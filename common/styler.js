"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _j2c=require("j2c");var _j2c2=_interopRequireDefault(_j2c);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var remove=function remove(id){if(id){var old=document.getElementById(id);if(old){old.parentNode.removeChild(old)}}};var add=function add(id){for(var _len=arguments.length,styles=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){styles[_key-1]=arguments[_key]}remove(id);var styleEl=document.createElement("style");if(id){styleEl.setAttribute("id",id)}styles.forEach(function(styleList){if(Object.keys(styleList).length){styleList.forEach(function(style){var scoped={"@global":style};var sheet=_j2c2.default.sheet(scoped);styleEl.appendChild(document.createTextNode(sheet))})}});document.head.appendChild(styleEl)};exports.default={add:add,remove:remove};