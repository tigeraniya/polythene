!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("mithril"),require("polythene-button"),require("polythene-icon"),require("polythene-icon-button"),require("polythene-core"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-button","polythene-icon","polythene-icon-button","polythene-core","polythene-css","polythene-theme"],e):e(t.polythene=t.polythene||{},t.m,t["polythene-button"],t["polythene-icon"],t["polythene-icon-button"],t["polythene-core"],t["polythene-css"],t["polythene-theme"])}(this,function(t,e,n,o,a,l,i,r){"use strict";e="default"in e?e.default:e;var s=r.vars.rgba,c=n.vars.font_size,_=1.1*c,b={tab_min_width:72,tab_max_width:"none",tab_height:48,tab_min_width_tablet:160,label_max_width:264,menu_tab_height:44,menu_tab_icon_label_height:44,tab_icon_label_height:72,tab_icon_label_icon_spacing:7,indicator_slide_speed:600,indicator_slide_min_duration:.25,tabs_scroll_speed:600,tabs_scroll_delay:.15,tabs_scroll_min_duration:.5,scroll_button_fade_duration:.2,scroll_button_fade_delay:.5,tab_content_padding_v:12,tab_menu_content_padding_v:6,tab_indicator_height:2,scrollbar_offset:20,scroll_button_opacity:.7,label_opacity:.7,tab_label_line_height:_,tab_label_vertical_offset:_-c,tab_label_transition_property:"opacity, color, backgroundColor",color_light:"inherit",color_light_selected:s(r.vars.color_primary),color_light_selected_background:"transparent",color_light_tab_indicator:s(r.vars.color_primary),color_light_icon:a.vars.color_light,color_dark:"inherit",color_dark_selected:s(r.vars.color_primary),color_dark_selected_background:"transparent",color_dark_tab_indicator:s(r.vars.color_primary),color_dark_icon:a.vars.color_dark},d=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},p=function(t,e){return[d({},t,[i.mixin.vendorize({userSelect:"none"},r.vars.prefixes_user_select),i.mixin.vendorize({transform:"translate3d(0,0,0)"},r.vars.prefixes_transform),d({"-webkit-overflow-scrolling":"touch","& ::-webkit-scrollbar":{display:"none"},"&.pe-tabs--menu":{" .pe-tabs__tab":{height:e.menu_tab_height+"px"}," .pe-tabs__tab---icon":{height:e.menu_tab_icon_label_height+"px"}," .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon":{minWidth:0,height:e.menu_tab_icon_label_height+"px"," .pe-button__content":{padding:"0 "+e.tab_menu_content_padding_v+"px",height:e.menu_tab_icon_label_height+"px"," .pe-icon":{marginBottom:0}," .pe-button__label":{fontSize:"10px",lineHeight:"12px",textTransform:"none"}}}},"&.pe-tabs--scrollable":{"max-height":e.tab_height+"px","-ms-overflow-style":"none"," .pe-tabs__scroll-button":{display:"none"}," .pe-tabs__row":{marginBottom:-e.scrollbar_offset+"px"}}," .pe-no-touch &":{"&.pe-tabs--scrollable":{backgroundColor:"inherit"}," .pe-tabs__scroll-button":{position:"absolute",display:"block",top:0,backgroundColor:"inherit",zIndex:3," .pe-button__content":{backgroundColor:"inherit"}," .pe-button__label":[i.mixin.vendorize({transitionProperty:e.tab_label_transition_property},r.vars.prefixes_transition),i.mixin.vendorize({transitionDuration:e.scroll_button_fade_duration+"s"},r.vars.prefixes_transition),i.mixin.vendorize({transitionTimingFunction:"ease-out"},r.vars.prefixes_transition),i.mixin.vendorize({transitionDelay:e.scroll_button_fade_delay+"s"},r.vars.prefixes_transition),{opacity:e.scroll_button_opacity}]},"&.pe-tabs--start .pe-tabs__scroll-button-start":{pointerEvents:"none",cursor:"default"," .pe-button__label":{opacity:0}},"&.pe-tabs--end .pe-tabs__scroll-button-end":{pointerEvents:"none",cursor:"default"," .pe-button__label":{opacity:0}}," .pe-tabs__scroll-button-start":{left:0}," .pe-tabs__scroll-button-end":{right:0}}," .pe-tabs__row":[i.flex.layoutHorizontal,i.mixin.vendorize({"user-select":"none"},r.vars.prefixes_user_select),{position:"relative",whiteSpace:"nowrap"}]," .pe-tabs__row--centered":i.flex.layoutCenterJustified," .pe-tabs__scroll-button-offset":[i.flex.flex(),i.flex.flexIndex("none")]," .pe-tabs__tab":[i.flex.flex(),i.flex.flexIndex("none"),i.mixin.vendorize({userSelect:"none"},r.vars.prefixes_user_select),i.mixin.defaultTransition("color"),{margin:0,borderRadius:0,height:e.tab_height+"px",padding:0,color:"inherit",minWidth:isNaN(e.tab_min_width)?e.tab_min_width:e.tab_min_width+"px",maxWidth:isNaN(e.tab_max_width)?e.tab_max_width:e.tab_max_width+"px",".pe-text-button .pe-button__content":{padding:"0 "+e.tab_content_padding_v+"px",height:e.tab_height+"px",lineHeight:r.vars.line_height+"em",borderRadius:0," .pe-button__label, .pe-icon":{maxWidth:e.label_max_width+"px",lineHeight:e.tab_label_line_height+"px",maxHeight:2*e.tab_label_line_height+"px",overflow:"hidden",whiteSpace:"normal"}," .pe-button__label":[i.mixin.defaultTransition("opacity",e.animation_duration),{margin:e.tab_label_vertical_offset+"px 0 0 0",padding:0,opacity:e.label_opacity}]," .pe-icon":{marginLeft:"auto",marginRight:"auto"}," .pe-button__focus":{display:"none"}},"&.pe-button--selected":{" .pe-button__content .pe-button__label":{opacity:1}},"&.pe-tabs__tab---icon":{"&, .pe-button__content":[{height:e.tab_icon_label_height+"px"},{" .pe-button__label, .pe-icon":{margin:"0 auto"}},{" .pe-icon":{marginBottom:e.tab_icon_label_icon_spacing+"px"}}]}}]," .pe-tabs__tab-content":[i.flex.layoutCenterCenter,i.flex.layoutVertical,{height:"inherit"}],"&.pe-tabs--autofit .pe-tabs__tab":[i.flex.flex(),{minWidth:"initial",maxWidth:"none"}],"&.pe-tabs__active-selectable":{" .pe-tabs__tab.pe-button--selected":{cursor:"pointer",pointerEvents:"initial"}}," .pe-tabs__indicator":[i.mixin.vendorize({transform:"translate3d(0,0,0)"},r.vars.prefixes_transform),i.mixin.vendorize({"transform-origin":"left 50%"},r.vars.prefixes_transform),i.mixin.vendorize({"transition-property":"all"},r.vars.prefixes_transition),i.mixin.vendorize({"transition-timing-function":"ease-out"},r.vars.prefixes_transition),{position:"absolute",height:e.tab_indicator_height+"px",bottom:0,left:0,zIndex:3,width:"100%"}]," .pe-toolbar--tabs .pe-toolbar__bar &":[i.mixin.fit(),{width:"auto",margin:0,top:"auto"," .pe-tabs__row.pe-tabs__row--indent":{margin:0,paddingLeft:r.vars.unit_indent+"px",overflow:"auto"}}]},"@media (min-width: "+r.vars.breakpoint_small_tablet_portrait+"px)",{"&:not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit) .pe-tabs__tab":{minWidth:e.tab_min_width_tablet+"px"}})])]},h=function(t,e,n,o){return[d({},t+e,{color:n["color_"+o]," .pe-tabs__tab.pe-button--selected":{color:n["color_"+o+"_selected"]," .pe-button__content":{background:n["color_"+o+"_selected_background"]}}," .pe-tabs__tab:not(.pe-button--selected) .pe-icon":{color:n["color_"+o+"_icon"]}," .pe-tabs__indicator":{"background-color":n["color_"+o+"_tab_indicator"]}})]},f=function(t,e){return[h("",t,e,"light"),h(".pe-dark-theme ",t,e,"dark")]},m=e.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>'),g=e.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>'),v={msvg:m},x={msvg:g},w=[p,f],y=".pe-tabs",B=function(t,e){return i.styler.generateStyles([t,y],u({},b,e),w)};i.styler.generateStyles([y],b,w);var S={component:"pe-tabs",scrollButton:"pe-tabs__scroll-button",scrollButtonAtStart:"pe-tabs__scroll-button-start",scrollButtonAtEnd:"pe-tabs__scroll-button-end",scrollButtonOffset:"pe-tabs__scroll-button-offset",tabRow:"pe-tabs__row",tabRowCentered:"pe-tabs__row--centered",tabRowIndent:"pe-tabs__row--indent",tab:"pe-tabs__tab",tabContent:"pe-tabs__tab-content",tabHasIcon:"pe-tabs__tab---icon",indicator:"pe-tabs__indicator",scrollable:"pe-tabs--scrollable",isAutofit:"pe-tabs--autofit",isAtStart:"pe-tabs--start",isAtEnd:"pe-tabs--end",smallTabs:"pe-tabs--small",isMenu:"pe-tabs--menu",activeSelectable:"pe-tabs__active-selectable",label:"pe-button__label"},E=2,k=4,T=function(t,e){var n=0,o=e.length-1;return{left:Math.max(t-1,n),right:Math.min(t+1,o)}},I=function(t,n,o,a){o.stopPropagation(),o.preventDefault();var l=t.selectedTabIndex,i=T(l,t.tabs)[a];A(t,i),i!==l&&(j(t,n,i,!0),e.redraw())},z=function(t,n,o){var l=o.scrollIconForward||x,i=o.scrollIconBackward||v;return e(a.iconButton,{class:[S.scrollButton,n===E?S.scrollButtonAtStart:S.scrollButtonAtEnd].join(" "),icon:n===E?i:l,ripple:{center:!0},oncreate:function(e){t.scrollButtonAtStartEl&&t.scrollButtonAtEndEl||(n===E?t.scrollButtonAtStartEl=e.dom:t.scrollButtonAtEndEl=e.dom)},events:{onclick:n===E?function(e){I(t,o,e,"left")}:function(e){I(t,o,e,"right")}}})},C=function(t){var e=t.tabs[0].el,n=e.querySelector("."+S.label+" span"),o=e.getBoundingClientRect().width,a=n.getBoundingClientRect().width,l=(o-a)/2;e.style.marginLeft=-l+"px"},R=function(t){var e=t.scrollButtonAtEndEl.getBoundingClientRect().width,n=t.tabsEl.querySelector("."+S.scrollButtonOffset);n.style.width=e+"px"},A=function(){},O=function(t){var e=t.scrollerEl,n=e.scrollLeft,o=t.selectedTabIndex,a=t.tabsEl,l=0,i=t.tabs.length-1,r=0===e.scrollLeft&&o===l,s=n>=e.scrollWidth-a.getBoundingClientRect().width-1&&o===i;t.scrollButtonStates.left=!r,t.scrollButtonStates.right=!s},L=function(t,e,n){var o=n.tabsEl.getBoundingClientRect(),a=t.getBoundingClientRect(),l=n.tabIndicatorEl.style,i=a.left-o.left+n.scrollerEl.scrollLeft,r="translate("+i+"px, 0)",s=e?b.indicator_slide_min_duration:0;l.width=a.width+"px",l["transition-duration"]=l["-webkit-transition-duration"]=l["-moz-transition-duration"]=l["-o-transition-duration"]=s+"s",l.transform=l["-webkit-transform"]=l["-moz-transform"]=l["-ms-transform"]=l["-o-transform"]=r},j=function(t,e,n,o){if(t.selectedTabIndex=n,t.tabs.length){var a=t.tabs[n].el;a&&t.tabIndicatorEl&&t.tabsEl&&L(a,o,t),t.managesScroll&&(O(t),A(t,n)),e.getState&&e.getState({index:n,data:t.tabs[n].data,el:a})}},q=function(t,a,l,i){i.events=i.events||{},i.events.onclick=i.events.onclick||function(){};var r=u({},i,{content:e("div",{class:S.tabContent},[i.icon?e(o.icon,i.icon):null,i.label?e("div",{class:S.label},e("span",i.label)):null]),class:[S.tab,i.icon&&i.label?S.tabHasIcon:null,i.class].join(" "),wash:!1,ripple:!0,events:u({},i.events,{onclick:function(e){j(t,a,l,!a.noIndicatorSlide),i.events.onclick(e)}}),oncreate:function(e){void 0===t.tabs[l]&&(t.tabs[l]={data:i,el:e.dom})}});return e(n.button,r)},W=function(t,e){return t<e?-1:t>e?1:0},H=function(t){var n=t.attrs,o=t.state,a=n.element||"div",i=!n.scrollable&&!n.centered&&!!n.autofit;void 0!==n.selectedTab&&o.previousOptsSelectedTab!==n.selectedTab&&j(o,n,n.selectedTab,!0),o.previousOptsSelectedTab=n.selectedTab;var r=function(){j(o,n,o.selectedTabIndex,!1),e.redraw()},s={class:[S.component,n.scrollable?S.scrollable:null,0===o.selectedTabIndex?S.isAtStart:null,o.selectedTabIndex===o.tabs.length-1?S.isAtEnd:null,n.activeSelected?S.activeSelectable:null,i?S.isAutofit:null,n.small?S.smallTabs:null,n.menu?S.isMenu:null,n.class].join(" "),id:n.id||"",oncreate:function(t){o.tabsEl=t.dom,n.largestWidth&&!function(){var t=o.tabs.map(function(t){return t.el.getBoundingClientRect().width}),e=t.sort(W).reverse()[0];o.tabs.forEach(function(t){return t.el.style.width=e+"px"})}(),n.scrollable&&C(o),n.scrollable&&!l.isTouch&&(o.managesScroll=!0,R(o)),l.subscribe("resize",r),j(o,n,o.selectedTabIndex,!1),n.getState&&setTimeout(e.redraw)},onremove:function(){l.unsubscribe("resize",r)}},c=n.content?n.content:n.buttons?n.buttons:n.children||t.children,_=c.map(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1],a=u({},t,{selected:e===o.selectedTabIndex,animateOnTap:n.animateOnTap!==!1},n.tabsOpts||{});return q(o,n,e,a)}).concat([n.scrollable?e("div",{class:S.scrollButtonOffset}):null]),b=void 0,d=void 0;n.scrollable&&(b=z(o,E,n),d=z(o,k,n));var p=n.hideIndicator?null:e("div",{class:S.indicator,oncreate:function(t){return o.tabIndicatorEl=t.dom,j(o,n,o.selectedTabIndex,!1)}}),h=[n.scrollable?b:null,e("div",{class:[S.tabRow,n.centered?S.tabRowCentered:null,n.scrollable?S.tabRowIndent:null].join(" "),oncreate:function(t){return o.scrollerEl=t.dom},onscroll:function(){O(o)}},[_,p]),n.scrollable?d:null];return e(a,s,[n.before,h,n.after])},M={theme:B,view:H,oninit:function(t){t.state={tabsEl:null,scrollerEl:null,tabs:[],tabIndicatorEl:null,selectedTabIndex:0,previousOptsSelectedTab:void 0,managesScroll:!1,scrollButtonStates:{left:!1,right:!1}}}};t.tabs=M,t.classes=S,t.vars=b,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-tabs.js.map