(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b851604"],{4070:function(e,a,o){},"5f77":function(e,a,o){"use strict";var n=o("4070"),t=o.n(n);t.a},f593:function(e,a,o){"use strict";o.r(a);var n,t,i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"c-app c-dark-theme",class:{"c-dark-theme":e.$store.state.darkMode}},[o("TheSidebar"),o("TheAside"),o("CWrapper",[o("TheHeader"),o("div",{staticClass:"c-body"},[o("main",{staticClass:"c-main"},[o("CContainer",{attrs:{fluid:""}},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("router-view",{key:e.$route.path})],1)],1)],1)]),o("TheFooter")],1)],1)},s=[],r=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("CSidebar",{attrs:{minimize:e.minimize,unfoldable:"",show:e.show},on:{"update:show":function(a){return e.$store.commit("set",["sidebarShow",a])}}},[o("CSidebarBrand",{staticClass:"d-md-down-none",attrs:{to:"/"}},[o("CIcon",{staticClass:"c-sidebar-brand-full",attrs:{name:"logo",size:"custom-size",height:35,viewBox:"0 0 642 134"}}),o("CIcon",{staticClass:"c-sidebar-brand-minimized",attrs:{name:"logo",size:"custom-size",height:35,viewBox:"0 0 110 134"}})],1),o("CRenderFunction",{attrs:{flat:"",contentToRender:e.sidebarItems}}),o("CSidebarMinimizer",{staticClass:"c-d-md-down-none",nativeOn:{click:function(a){return e.$store.commit("toggle","sidebarMinimize")}}})],1)},c=[],m={name:"nav",computed:{sidebarItems:function(){return[{_name:"CSidebarNav",_children:[{_name:"CSidebarNavItem",name:this.$t("menu.dashboard"),to:"/dashboard",icon:"cil-speedometer",badge:{color:"primary",text:"NEW"}},{_name:"CSidebarNavTitle",_children:["Theme"]},{_name:"CSidebarNavItem",name:"Colors",to:"/theme/colors",icon:"cil-drop"},{_name:"CSidebarNavItem",name:"Typography",to:"/theme/typography",icon:"cil-pencil"},{_name:"CSidebarNavTitle",_children:["Components"]},{_name:"CSidebarNavDropdown",name:"Base",route:"/base",icon:"cil-puzzle",items:[{name:"Breadcrumbs",to:"/base/breadcrumbs"},{name:"Cards",to:"/base/cards"},{name:"Carousels",to:"/base/carousels"},{name:"Collapses",to:"/base/collapses"},{name:"Jumbotrons",to:"/base/jumbotrons"},{name:"List Groups",to:"/base/list-groups"},{name:"Navs",to:"/base/navs"},{name:"Navbars",to:"/base/navbars"},{name:"Paginations",to:"/base/paginations"},{name:"Popovers",to:"/base/popovers"},{name:"Progress Bars",to:"/base/progress-bars"},{name:"Switches",to:"/base/switches"},{name:"Tabs",to:"/base/tabs"},{name:"Tooltips",to:"/base/tooltips"}]},{_name:"CSidebarNavDropdown",name:"Buttons",route:"/buttons",icon:"cil-cursor",items:[{name:"Buttons",to:"/buttons/standard-buttons"},{name:"Button Dropdowns",to:"/buttons/dropdowns"},{name:"Button Groups",to:"/buttons/button-groups"},{name:"Brand Buttons",to:"/buttons/brand-buttons"}]},{_name:"CSidebarNavItem",name:"Charts",to:"/charts",icon:"cil-chart-pie"},{_name:"CSidebarNavDropdown",name:"Editors",route:"/editors",icon:"cil-code",items:[{name:"Code editors",to:"/editors/code-editors",icon:"cil-code",badge:{color:"danger",text:"PRO"}},{name:"Text editors",to:"/editors/text-editors",icon:"cil-justify-left"}]},{_name:"CSidebarNavDropdown",name:"Forms",route:"/forms",icon:"cil-notes",items:[{name:"Basic forms",to:"/forms/basic-forms"},{name:"Advanced forms",to:"/forms/advanced-forms",badge:{color:"danger",text:"PRO"}},{name:"Validation forms",to:"/forms/validation-forms",badge:{color:"danger",text:"PRO"}}]},{_name:"CSidebarNavItem",name:"Google Maps",to:"/google-maps",icon:"cil-map",badge:{color:"danger",text:"PRO"}},{_name:"CSidebarNavDropdown",name:"Icons",route:"/icons",icon:"cil-star",items:[{name:"CoreUI Icons",to:"/icons/coreui-icons",badge:{color:"info",text:"NEW"}},{name:"Brands",to:"/icons/brands"},{name:"Flags",to:"/icons/flags"}]},{_name:"CSidebarNavDropdown",name:"Notifications",route:"/notifications",icon:"cil-bell",items:[{name:"Alerts",to:"/notifications/alerts"},{name:"Badges",to:"/notifications/badges"},{name:"Modals",to:"/notifications/modals"},{name:"Toaster",to:"/notifications/toaster",badge:{color:"danger",text:"PRO"}}]},{_name:"CSidebarNavDropdown",name:"Plugins",route:"/plugins",icon:"cil-input-power",items:[{name:"Draggable",to:"/plugins/draggable",icon:"cil-cursor-move",badge:{color:"danger",text:"PRO"}},{name:"Calendar",to:"/plugins/calendar",icon:"cil-calendar",badge:{color:"danger",text:"PRO"}},{name:"Spinners",to:"/plugins/spinners",icon:"cil-circle",badge:{color:"danger",text:"PRO"}}]},{_name:"CSidebarNavDropdown",name:"Tables",route:"/tables",icon:"cil-list",items:[{name:"Basic Tables",to:"/tables/tables",icon:"cil-list"},{name:"Advanced tables",to:"/tables/advanced-tables",icon:"cil-list-rich"}]},{_name:"CSidebarNavItem",name:"Widgets",to:"/widgets",icon:"cil-calculator",badge:{color:"primary",text:"NEW",shape:"pill"}},{_name:"CSidebarNavDivider"},{_name:"CSidebarNavTitle",_children:["Extras"]},{_name:"CSidebarNavDropdown",name:"Pages",route:"/pages",icon:"cil-star",items:[{name:"Login",to:"/pages/login"},{name:"Register",to:"/pages/register"},{name:"Error 404",to:"/pages/404"},{name:"Error 500",to:"/pages/500"}]},{_name:"CSidebarNavDropdown",name:"Apps",route:"/apps",icon:"cil-layers",_children:[{_name:"CSidebarNavDropdown",name:"Invoicing",route:"/apps/invoicing",icon:"cil-spreadsheet",items:[{name:"Invoice",to:"/apps/invoicing/invoice",badge:{color:"danger",text:"PRO"}}]},{_name:"CSidebarNavDropdown",name:"Email",route:"/apps/email",icon:"cil-envelope-closed",items:[{name:"Inbox",to:"/apps/email/inbox",icon:"cil-envelope-closed",badge:{color:"danger",text:"PRO"}},{name:"Message",to:"/apps/email/message",icon:"cil-envelope-open",badge:{color:"danger",text:"PRO"}},{name:"Compose",to:"/apps/email/compose",icon:"cil-envelope-letter",badge:{color:"danger",text:"PRO"}}]}]},{_name:"CSidebarNavDivider",_class:"m-2"},{_name:"CSidebarNavTitle",_children:["Labels"]},{_name:"CSidebarNavItem",name:"Label danger",icon:{name:"cil-star",class:"text-danger"},label:!0},{_name:"CSidebarNavItem",name:"Label info",icon:{name:"cil-star",class:"text-info"},label:!0},{_name:"CSidebarNavItem",name:"Label warning",icon:{name:"cil-star",class:"text-warning"},label:!0}]}]}}},d=m,l=o("2877"),b=Object(l["a"])(d,n,t,!1,null,null,null),p=b.exports,u={name:"TheSidebar",extends:p,computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}}},g=u,v=Object(l["a"])(g,r,c,!1,null,null,null),C=v.exports,h=o("01c0"),f=o("0932"),_=o("dbaf"),S={name:"TheContainer",components:{TheSidebar:C,TheHeader:h["a"],TheFooter:f["a"],TheAside:_["a"]}},w=S,N=(o("5f77"),Object(l["a"])(w,i,s,!1,null,"5cdb543c",null));a["default"]=N.exports}}]);
//# sourceMappingURL=chunk-7b851604.3d43852e.js.map