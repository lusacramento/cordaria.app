(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{424:function(e,t,r){var content=r(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(52).default)("4c904802",content,!0,{sourceMap:!1})},438:function(e,t,r){"use strict";r(424)},439:function(e,t,r){var c=r(51)(!1);c.push([e.i,"@media (min-width:992px){.exercise-screen{height:60vh}}",""]),e.exports=c},461:function(e,t,r){"use strict";r.r(t);var c={components:{Card:r(462).default},props:{suffledDeck:{type:Array,default:function(){return[]}},card:{type:Object,default:function(){return{}}},isMobile:{type:Boolean},showExercise:Boolean}},n=(r(438),r(59)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"exercise-screen .layer-center mt-2 mb-4"},[r("div",{staticClass:"container-fluid mt-3"},[e.isMobile?r("div",[r("div",{staticClass:"row mt-4 d-flex align-items-center justify-content-around"},[r("Card",{key:"999",attrs:{id:"prev-card",card:e.card.prev}}),e._v(" "),r("Card",{key:"998",attrs:{id:"current-card",card:e.card.current}}),e._v(" "),r("Card",{key:"997",attrs:{id:"next-card",card:e.card.next}})],1)]):e._e(),e._v(" "),e.isMobile?e._e():r("div",[r("div",{staticClass:"row align-items-center"},e._l(e.suffledDeck,(function(e,i){return r("Card",{key:e+" "+i,staticClass:"card cardView",attrs:{id:e.id.toString(),card:e}})})),1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);