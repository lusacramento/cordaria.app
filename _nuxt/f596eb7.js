(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{124:function(t,o,n){"use strict";n.r(o);var e=n(14),r=(n(49),n(169)),f=n.n(r),c=n(255),l=n.n(c),d=n(170),U=n.n(d),m=n(256),h=n.n(m),v=n(171),w=n.n(v),x=n(257),y=n.n(x),A={props:{baseUrl:{type:String,default:function(){return""}}},data:function(){return{icons:{cordaria:{url:f.a,altText:"Logotipo do Cordaria",enabled:l.a,disabled:f.a},email:{href:"mailto:japraticouhoje@cordaria.com.br",url:U.a,altText:"Ícone contato",enabled:h.a,disabled:U.a},insta:{url:w.a,altText:"Ícone Instagram",enabled:y.a,disabled:w.a}},currentUrl:this.baseUrl,isActiveTheProject:!1,isActiveTheResearch:!1,isActiveThePratice:!1,isActiveTheTutorial:!1,isActiveClues:!1,isOverIconMenu:!1,isOverIcontEmail:!1,isOverIconInstagram:!1,isCollapse:!0}},watch:{$route:function(){this.iniciateActive()}},mounted:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.getUrl();case 2:t.currentUrl=o.sent,t.iniciateActive();case 4:case"end":return o.stop()}}),o)})))()},methods:{getUrl:function(){return window.location.href},imageMouseOver:function(img){return img.enabled},imageMouseLeave:function(img){return img.disabled},showMenu:function(){this.isCollapse=!this.isCollapse},removeAllActive:function(){this.isActiveTheProject=!1,this.isActiveTheResearch=!1,this.isActiveThePratice=!1,this.isActiveTheTutorial=!1,this.isActiveClues=!1,this.isOverIconMenu=!1},iniciateActive:function(){switch(this.removeAllActive(),window.location.href){case"".concat(this.baseUrl):this.isActiveTheProject=!0;break;case"".concat(this.baseUrl,"a-pesquisa"):this.isActiveTheResearch=!0;break;case"".concat(this.baseUrl,"a-pratica"):this.isActiveThePratice=!0;break;case"".concat(this.baseUrl,"o-tutorial"):this.isActiveTheTutorial=!0;break;case"".concat(this.baseUrl,"dicas"):this.isActiveClues=!0}}}},k=(n(338),n(59)),component=Object(k.a)(A,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("nav",{staticClass:"nav navbar navbar-expand-lg align-content-center"},[n("div",{staticClass:"container-fluid"},[n("nuxt-link",{staticClass:"navbar-brand logo-cordaria",class:{active:t.isActiveTheProject},attrs:{id:"link-principal",to:"/","aria-current":"page"}},[n("img",{staticClass:"img img-fluid",attrs:{src:t.icons.cordaria.url,alt:t.icons.cordaria.altText},on:{mouseover:function(o){t.icons.cordaria.url=t.imageMouseOver(t.icons.cordaria)},mouseleave:function(o){t.icons.cordaria.url=t.imageMouseLeave(t.icons.cordaria)}}})]),t._v(" "),n("button",{staticClass:"navbar-dark navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(o){return t.showMenu()}}},[n("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),n("div",{staticClass:"navbar-collapse",class:{collapse:t.isCollapse},attrs:{id:"navbarSupportedContent"}},[n("div",{staticClass:"container-fluid justify-content-end"},[n("ul",{staticClass:"navbar-nav",class:{collapseColor:!t.isCollapse}},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link the-project-link",class:{theProjectLinkActive:t.isActiveTheProject},attrs:{to:"/","aria-current":"page"}},[n("span",[t._v("O Projeto")])])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link the-research-link",class:{theResearchLinkActive:t.isActiveTheResearch},attrs:{to:"/a-pesquisa","aria-current":"page"}},[n("span",[t._v("A Pesquisa")])])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link the-pratice-link",class:{thePraticeLinkActive:t.isActiveThePratice},attrs:{to:"/a-pratica"}},[n("span",[t._v("A Prática")])])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link the-tutorial-link",class:{theTutorialLinkActive:t.isActiveTheTutorial},attrs:{to:"/o-tutorial"}},[n("span",[t._v("O Tutorial")])])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link clues-link",class:{cluesLinkActive:t.isActiveClues},attrs:{to:"/dicas"}},[n("span",[t._v("Dicas")])])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link email-link",attrs:{href:t.icons.email.href}},[n("img",{staticClass:"img img-fluid",attrs:{src:t.icons.email.url,alt:t.icons.email.altText},on:{mouseover:function(o){t.icons.email.url=t.imageMouseOver(t.icons.email)},mouseleave:function(o){t.icons.email.url=t.imageMouseLeave(t.icons.email)}}})])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link insta-link",attrs:{href:"https://instagram.com/cordaria.app",target:"_blank"}},[n("img",{staticClass:"img img-fluid",attrs:{src:t.icons.insta.url,alt:t.icons.insta.altText},on:{mouseover:function(o){t.icons.insta.url=t.imageMouseOver(t.icons.insta)},mouseleave:function(o){t.icons.insta.url=t.imageMouseLeave(t.icons.insta)}}})])])])])])],1)])}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Nav:n(124).default})},169:function(t,o,n){t.exports=n.p+"img/logo-cordaria-disabled.c9af4f0.png"},170:function(t,o,n){t.exports=n.p+"img/email-icon-disabled.9f59cc4.png"},171:function(t,o,n){t.exports=n.p+"img/logo-insta-disabled.5e54067.png"},174:function(t,o,n){"use strict";var e=n(7),r=n(178),f=n.n(r);e.default.component("VueSlickCarousel",f.a)},175:function(t,o,n){"use strict";var e=n(7),r=n(130);n(215),n(216);e.default.use(r.a)},217:function(t,o,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("48c745b3",content,!0,{sourceMap:!1})},218:function(t,o,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("18ee280f",content,!0,{sourceMap:!1})},219:function(t,o,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("56b15182",content,!0,{sourceMap:!1})},255:function(t,o,n){t.exports=n.p+"img/logo-cordaria-enabled.78de459.png"},256:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAASCAYAAACuLnWgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXhJREFUeNq0Ve1xgkAUPJj8xw40FWAHIR1oBWIFUkBGwaQAUkGgA1NBSAXRDrQDrIDsZpYZwhxJDHgzT8d7H/t2393pVFVlnrbbmTFmaoZf5cN6nTqPSRLix4u53spdfEzMdVdJkAx2C3sfuPgBdg+LCbInG2gX4HsJO/cszvwE9TjjkvUJ4sHeMPwYjkzy5f8EoBpT1IlRj7MuYGO3EbCBg5sGQaGoni7ofi41StTJdJhIwLit4DvYEUHspoCRVfILwLPk3jFP3S+aAa4liegfSIjEKu44GF+DhT+ClbprBPDbBXlPqh8kIKNjvSGdCZoJvN4fUYFanktAlkqkviHlawdIHvpTndLCBtQFwjnsWkmvAivVOZmsGjlz2Mj2ethAchXYW7o6q3PqP7b4Avk2TceNZZhRF23trTrk9ZQX6K4tbKfroADrCfnj8sQ0Ur1vIKQaaoB+z2fFV6OzGshtMAjbl6gnUKyaJ0d/WhPRHHqlfAk+BRgAZoaPxFVrRWQAAAAASUVORK5CYII="},257:function(t,o,n){t.exports=n.p+"img/logo-insta-enabled.83acb79.png"},258:function(t,o,n){t.exports=n.p+"img/public-agencies-horizontal-logo.fac1f52.png"},265:function(t,o,n){"use strict";var e=n(124),r={name:"DefaultLayout",components:{Footer:n(266).default,Nav:e.default},data:function(){return{baseUrl:"https://beta.cordaria.com.br/",isIndex:!1,indexed:{hid:"null",name:"robots",content:"all"},noIndexed:{hid:"null",name:"robots",content:"noindex"},metaIndexed:{}}},head:function(){return this.isIndex?this.metaIndexed=this.indexed:this.metaIndexed=this.noIndexed,{meta:[{charset:"utf-8"},{httpEquiv:"content-language",content:"pt-br"},{httpEquiv:"content-type",content:"text/html"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"format-detection",content:"telephone=no"},{name:"author",content:"Lu Sacramento"},{name:"copyright",content:"Copyright © 2021. Cordaria. Todos Diretos Reservados. Feito por Lu Sacramento"},{name:"generator",content:"Nuxt v.2.15.7"},{name:"rating",content:"general"}],link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossorigin:"anonymous"},this.metaIndexed]}}},f=(n(342),n(59)),component=Object(f.a)(r,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"app container-fluid",attrs:{id:"app"}},[n("div",{staticClass:"d-flex justify-content-center",attrs:{id:"nav"}},[n("Nav",{attrs:{"base-url":t.baseUrl}})],1),t._v(" "),n("main",{staticClass:"router-view",attrs:{id:"main"}},[n("Nuxt")],1),t._v(" "),n("div",{attrs:{id:"footer"}},[n("Footer")],1)])}),[],!1,null,null,null);o.a=component.exports;installComponents(component,{Nav:n(124).default})},266:function(t,o,n){"use strict";n.r(o);var e=n(258),r=n.n(e),f={data:function(){return{logoAldirBlanc:{link:r.a,altText:"logos orgãos culturais públicos"},team:{author:{name:"Lu Sacramento",link:"https://lusacramento.com.br"},design:{name:"Gabriel Barreto",link:"https://mixeldesign.com.br/"}},isDisabledfoot:!1,version:"beta 2.0.0 - 2022"}}},c=(n(340),n(59)),component=Object(c.a)(f,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("footer",{staticClass:"footer container-fluid d-flex justify-content-center"},[n("div",{staticClass:"row align-items-center d-flex justify-content-center"},[n("div",{staticClass:"col-sm-3 credits"},[n("div",{attrs:{id:"credits"}},[n("p",{staticClass:"d-block"},[t._v("\n            Developer:\n            "),n("a",{attrs:{href:t.team.author.link,rel:"nofollow",target:"_blank"}},[t._v(t._s(t.team.author.name))]),t._v(" "),n("br"),t._v("\n            Designer:  \n            "),n("a",{attrs:{href:t.team.design.link,rel:"nofollow",target:"_blank"}},[t._v(t._s(t.team.design.name))])])])]),t._v(" "),n("div",{staticClass:"col-sm-3"},[n("div",{staticClass:"copyright text-center"},[n("p",[t._v("\n            Todos os Direitos Reservados\n            "),n("br"),t._v("\n            Versão "+t._s(t.version)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"financied"},[n("img",{staticClass:"figure figure-img img-fluid",attrs:{id:"publics-logo",src:t.logoAldirBlanc.link,alt:t.logoAldirBlanc.altText}})])])])])])}),[],!1,null,null,null);o.default=component.exports},270:function(t,o,n){n(271),t.exports=n(272)},303:function(t,o,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("bae85a0c",content,!0,{sourceMap:!1})},304:function(t,o,n){var e=n(51)(!1);e.push([t.i,'h1{font-family:"Encode Sans"}',""]),t.exports=e},308:function(t,o,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("c3ae2b30",content,!0,{sourceMap:!1})},309:function(t,o,n){var e=n(51),r=n(310),f=n(311),c=n(312),l=n(313),d=n(314),U=n(315),m=n(316),h=n(317),v=n(318),w=n(319),x=n(320),y=n(321),A=n(322),k=n(323),S=n(324),E=n(325),_=n(326),C=n(327),T=n(328),j=n(329),z=n(330),P=n(331),I=n(332),L=n(333),M=n(334),R=n(335),O=n(336),B=n(337),F=e(!1),D=r(f),N=r(c),G=r(l),J=r(d),V=r(U),Z=r(m),Q=r(h),H=r(v),W=r(w),Y=r(x),X=r(y),K=r(A),$=r(k),tt=r(S),at=r(E),ot=r(_),nt=r(C),et=r(T),it=r(j),st=r(z),ft=r(P),ct=r(I),lt=r(L),ut=r(M),pt=r(R),Ut=r(O),mt=r(B);F.push([t.i,'@font-face{font-family:"Encode Sans";font-style:normal;font-weight:100;font-stretch:100%;font-display:swap;src:url('+D+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:100;font-stretch:100%;font-display:swap;src:url('+N+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:100;font-stretch:100%;font-display:swap;src:url('+G+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:200;font-stretch:100%;font-display:swap;src:url('+J+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:200;font-stretch:100%;font-display:swap;src:url('+V+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:200;font-stretch:100%;font-display:swap;src:url('+Z+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:300;font-stretch:100%;font-display:swap;src:url('+Q+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:300;font-stretch:100%;font-display:swap;src:url('+H+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:300;font-stretch:100%;font-display:swap;src:url('+W+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url('+Y+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url('+X+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url('+K+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:500;font-stretch:100%;font-display:swap;src:url('+$+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:500;font-stretch:100%;font-display:swap;src:url('+tt+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:500;font-stretch:100%;font-display:swap;src:url('+at+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:600;font-stretch:100%;font-display:swap;src:url('+ot+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:600;font-stretch:100%;font-display:swap;src:url('+nt+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:600;font-stretch:100%;font-display:swap;src:url('+et+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:700;font-stretch:100%;font-display:swap;src:url('+it+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:700;font-stretch:100%;font-display:swap;src:url('+st+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:700;font-stretch:100%;font-display:swap;src:url('+ft+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:800;font-stretch:100%;font-display:swap;src:url('+ct+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:800;font-stretch:100%;font-display:swap;src:url('+lt+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:800;font-stretch:100%;font-display:swap;src:url('+ut+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:900;font-stretch:100%;font-display:swap;src:url('+pt+') format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01a0-01a1,U+01af-01b0,U+1ea0-1ef9,U+20ab}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:900;font-stretch:100%;font-display:swap;src:url('+Ut+') format("woff2");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:"Encode Sans";font-style:normal;font-weight:900;font-stretch:100%;font-display:swap;src:url('+mt+') format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}',""]),t.exports=F},311:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-100-vietnamese1.a59e38a.woff2"},312:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-100-latin-ext2.f3918ba.woff2"},313:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-100-latin3.910f9f9.woff2"},314:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-200-vietnamese4.a59e38a.woff2"},315:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-200-latin-ext5.f3918ba.woff2"},316:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-200-latin6.910f9f9.woff2"},317:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-300-vietnamese7.a59e38a.woff2"},318:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-300-latin-ext8.f3918ba.woff2"},319:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-300-latin9.910f9f9.woff2"},320:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-400-vietnamese10.a59e38a.woff2"},321:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-400-latin-ext11.f3918ba.woff2"},322:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-400-latin12.910f9f9.woff2"},323:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-500-vietnamese13.a59e38a.woff2"},324:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-500-latin-ext14.f3918ba.woff2"},325:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-500-latin15.910f9f9.woff2"},326:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-600-vietnamese16.a59e38a.woff2"},327:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-600-latin-ext17.f3918ba.woff2"},328:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-600-latin18.910f9f9.woff2"},329:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-700-vietnamese19.a59e38a.woff2"},330:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-700-latin-ext20.f3918ba.woff2"},331:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-700-latin21.910f9f9.woff2"},332:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-800-vietnamese22.a59e38a.woff2"},333:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-800-latin-ext23.f3918ba.woff2"},334:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-800-latin24.910f9f9.woff2"},335:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-900-vietnamese25.a59e38a.woff2"},336:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-900-latin-ext26.f3918ba.woff2"},337:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-900-latin27.910f9f9.woff2"},338:function(t,o,n){"use strict";n(217)},339:function(t,o,n){var e=n(51)(!1);e.push([t.i,".nav{font-size:var(--font-size-nav);font-family:var(--font-semibold);margin-left:5px;margin-right:5px}.collapseColor{background-color:var(--bg-nav-collapse)!important;display:block;padding:10px;width:200px!important;border-radius:15pt;color:#fff!important}.nav-link{color:var(--font-color-nav)!important;margin:0 10px}.the-project-link:hover,.theProjectLinkActive{color:var(--the-project-color)!important}.the-research-link:hover,.theResearchLinkActive{color:var(--the-research-color)!important}.the-pratice-link:hover,.thePraticeLinkActive{color:var(--the-pratice-color)!important}.the-tutorial-link:hover,.theTutorialLinkActive{color:var(--the-tutorial-color)!important}.clues-link:hover,.cluesLinkActive{color:var(--clues-color)!important}button:hover{background-color:hsla(0,0%,100%,.089)}@media (min-width:991.98px){.logo-cordaria{margin-left:115px}}@media (max-width:576px){.logo-cordaria{margin-left:28px}}",""]),t.exports=e},340:function(t,o,n){"use strict";n(218)},341:function(t,o,n){var e=n(51)(!1);e.push([t.i,'.footer{border-top:2px solid hsla(0,0%,100%,.3)}.copyright,.credits{font-family:"Encode Sans";font-weight:var(--font-light)}.credits{font-size:.8em}.copyright{font-size:.7em}.disable-footer{display:none}@media (min-width:991.96px){.footer{width:80%!important}}@media (max-width:991.98px){.credits{text-align:center!important}}',""]),t.exports=e},342:function(t,o,n){"use strict";n(219)},343:function(t,o,n){var e=n(51)(!1);e.push([t.i,':root{--the-project-color:rgba(173,0,225,0.7);--the-project-inbox:#520a6c;--the-project-outbox:#44155a;--the-research-color:rgba(223,2,154,0.7);--the-research-inbox:rgba(223,2,154,0.5);--the-research-outbox:rgba(223,2,154,0.5);--the-pratice-color:rgba(240,2,14,0.7);--the-pratice-degrade:rgba(240,2,14,0.5);--the-pratice-inbox:rgba(240,2,14,0.7);--the-pratice-outbox:rgba(240,2,14,0.4);--the-tutorial-color:rgba(253,91,0,0.7);--the-tutorial-inbox:#c84f0d;--the-tutorial-outbox:#93431b;--clues-color:rgba(255,139,0,0.7);--clues-degrade:rgba(255,139,0,0.5);--clues-border:2px solid rgba(255,139,0,0.7);--clues-border-nav:2px solid hsla(0,0%,50.2%,0.5);--clues-border-estudo:1px solid rgba(255,139,0,0.7);--bg-app:#1c1f26;--bg-nav:#1d1e28;--bg-nav-collapse:rgba(29,30,40,0.8549);--borders-nav:15px solid #1a1b24;--border-main:1px solid #8e8f94;--bg-layer-top:#282a36;--bg-layer-center:#282a36;--bg-degrade-layer-center:linear-gradient(180deg,#282a36 37%,#1d1e28 77%);--font-thin:100;--font-extra-light:200;--font-light:300;--font-regular:400;--font-medium:500;--font-semi-bold:600;--font-bold:700;--font-extra-bold:800;--font-black:900;--font-size-nav:1.2em;--font-size-h1:2.4em;--font-size-h2:1.5em;--font-size-h3:0.8em;--font-size-h4:1em;--font-size-p:0.9em;--font-size-light:0.9em;--font-color-nav:#7d7d7d;--font-color-h1:#5d5e63;--font-color-p:hsla(0,0%,100%,0.5);--font-color-h2:hsla(0,0%,100%,0.5);--font-color-link:hsla(0,0%,100%,0.5);--font-color-hover:hsla(0,0%,100%,0.7)}.title{font-weight:900;font-weight:var(--font-black);font-size:2.4em;font-size:var(--font-size-h1);color:#5d5e63!important;color:var(--font-color-h1)!important}.title,p{font-family:"Encode Sans"}p{font-weight:400;font-weight:var(--font-regular);font-size:.9em;font-size:var(--font-size-p);color:hsla(0,0%,100%,.5)!important;color:var(--font-color-p)!important}.large-line-height{line-height:1.7}a{font-family:"Encode Sans";font-weight:600;font-weight:var(--font-semi-bold);color:hsla(0,0%,100%,.5)!important;color:var(--font-color-link)!important}a:hover{color:hsla(0,0%,100%,.7)!important;color:var(--font-color-hover)!important}strong{font-weight:600;font-weight:var(--font-semi-bold)}b,strong{font-family:"Encode sans";color:hsla(0,0%,100%,.7)!important}b{font-weight:700;font-weight:var(--font-bold)}h2{font-size:1.5em!important;font-size:var(--font-size-h2)!important;color:hsla(0,0%,100%,.5);color:var(--font-color-h2)}h2,h3{font-family:"Encode Sans";font-weight:600;font-weight:var(--font-semi-bold)}h3{font-size:.8em!important;font-size:var(--font-size-h3)!important}h4{font-family:"Encode Sans";font-weight:600;font-weight:var(--font-semi-bold);font-size:1em!important;font-size:var(--font-size-h4)!important}html{background-color:#1c1f26;background-color:var(--bg-app)}@media (min-width:991.98px){div.app{grid-template-rows:17vh 70vh 11vh}}div.app{display:grid;padding:0;margin:0;color:#fff;background-color:#1c1f26;background-color:var(--bg-app);grid-template-areas:"nav" "main" "foot"}#nav{grid-area:nav;background-color:#1d1e28;background-color:var(--bg-nav);border-top:15px solid #1a1b24;border-top:var(--borders-nav);border-bottom:15px solid #1a1b24;border-bottom:var(--borders-nav)}#main{grid-area:main;border-top:1px solid #8e8f94;border-top:var(--border-main)}#footer{grid-area:foot;background-color:#1c1f26!important;background-color:var(--bg-app)!important}.hideFooter{display:none}.layer-top{background-color:#282a36;background-color:var(--bg-layer-top)}.layer-center{width:80%!important;background:#282a36;background:var(--bg-layer-center);background:linear-gradient(180deg,#282a36 37%,#1d1e28 77%);background:var(--bg-degrade-layer-center)}.justify{text-align:justify}.no-text-decoration{text-decoration:none}',""]),t.exports=e},71:function(t,o,n){"use strict";var e={layout:"error"},r=n(59),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[404===t.error.statusCode?n("h1",[t._v("Página não encontrada")]):n("h1",[t._v("Ocorreu um erro")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("Página Inicial")])],1)}),[],!1,null,null,null);o.a=component.exports}},[[270,17,4,18]]]);