!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("mithril"),require("polythene-raised-button"),require("polythene-icon"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-raised-button","polythene-icon","polythene-css","polythene-theme"],n):n(e.polythene=e.polythene||{},e.m,e["polythene-raised-button"],e["polythene-icon"],e["polythene-css"],e["polythene-theme"])}(this,function(e,n,r,t,o,i){"use strict";n="default"in n?n.default:n;var a=i.vars.rgba,l={size_regular:7*i.vars.grid_unit_component,size_mini:5*i.vars.grid_unit_component,padding_regular:2*i.vars.grid_unit_component,color_light:a(i.vars.color_primary_foreground),color_dark:a(i.vars.color_primary_foreground),color_light_background:a(i.vars.color_primary),color_dark_background:a(i.vars.color_primary)},s=function(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e},c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},u=function(e,n){return[s({},e,[o.mixin.vendorize({"user-select":"none"},i.vars.prefixes_user_select),{display:"inline-block",position:"relative",outline:"none",cursor:"pointer",width:n.size_regular+"px",height:n.size_regular+"px",padding:n.padding_regular+"px",borderRadius:"50%",border:"none","&.pe-button--fab-mini":{width:n.size_mini+"px",height:n.size_mini+"px",padding:(n.size_mini-i.vars.unit_icon_size)/2+"px"}," .pe-button__content":{padding:0,borderRadius:"inherit"}," .pe-ripple":{borderRadius:"inherit"}," .pe-button__wash":[o.mixin.vendorize({transition:"background-color "+i.vars.animation_duration+" ease-in-out"},i.vars.prefixes_transition),{borderRadius:"inherit",pointerEvents:"none",backgroundColor:"transparent"}]}])]},p=function(e,n,r,t){return[s({},e+n,{backgroundColor:r["color_"+t+"_background"],color:r["color_"+t]," .pe-button__content":{backgroundColor:"transparent"}})]},d=function(e,n){return[p("",e,n,"light"),p(".pe-dark-theme ",e,n,"dark")]},_=[u,d],h=".pe-button--fab",b=function(e,n){return o.styler.generateStyles([e,h],c({},l,n),_)};o.styler.generateStyles([h],l,_);var m={component:"pe-button--fab",content:"pe-button--fab__content",mini:"pe-button--fab-mini"},f=function(e){var o=e.attrs,i=e.children.length&&e.children||o.children,a=o.content?o.content:i&&i[0]?i:o.icon?n(t.icon,o.icon):null;return n(r.raisedButton,c({},{content:n("div",{class:m.content},a),parentClass:[m.component,o.mini?m.mini:null].join(" "),ripple:{center:!0,opacityDecayVelocity:.24},shadow:{increase:5},ink:!0,wash:!0,animateOnTap:void 0===o.animateOnTap||o.animateOnTap,children:i},o))},g={theme:b,view:f};e.fab=g,e.classes=m,e.vars=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-fab.js.map
