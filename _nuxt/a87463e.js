(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5],{415:function(e,o,t){var content=t(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(52).default)("a44995f6",content,!0,{sourceMap:!1})},416:function(e,o,t){"use strict";t.r(o);var n=t(417),r=t.n(n),c=t(418),l=t.n(c),d={props:{titleText:{type:String,default:function(){return""}},schema:{type:String,default:function(){return""}},leftLogo:Boolean,rightLogo:Boolean},data:function(){return{inboxColor:"",outboxColor:"",icon:{url:l.a,altText:"Inicie agora",enabled:r.a,disabled:l.a}}},mounted:function(){this.applySchema()},methods:{applySchema:function(){switch(this.schema){case"the-project":this.inboxColor="inbox-project",this.outboxColor="outbox-project";break;case"the-tutorial":this.inboxColor="inbox-tutorial",this.outboxColor="outbox-tutorial";break;case"the-research":this.inboxColor="inbox-research",this.outboxColor="outbox-research"}},imageMouseOver:function(img){return img.enabled},imageMouseLeave:function(img){return img.disabled}}},m=(t(419),t(59)),component=Object(m.a)(d,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"box-title container-fluid d-flex justify-content-center mb-4"},[t("div",{staticClass:"row text-center justify-content-center align-items-center",class:e.outboxColor},[t("div",{staticClass:"boxes outbox",on:{mouseover:function(o){e.icon.url=e.imageMouseOver(e.icon)},mouseleave:function(o){e.icon.url=e.imageMouseLeave(e.icon)}}},[t("div",{staticClass:"boxes inbox d-flex align-items-center",class:e.inboxColor},[e.leftLogo?t("div",{staticClass:"px-1"},[t("img",{staticClass:"img img-fluid icon",attrs:{src:e.icon.url,alt:e.icon.altText}})]):e._e(),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.titleText)}}),e._v(" "),e.rightLogo?t("div",{staticClass:"px-1"},[t("img",{staticClass:"img img-fluid icon",attrs:{src:e.icon.url,alt:e.icon.altText}})]):e._e()])])])])}),[],!1,null,"4c87af40",null);o.default=component.exports},417:function(e,o,t){e.exports=t.p+"img/icone-cordaria-enabled.b2e1ef4.png"},418:function(e,o,t){e.exports=t.p+"img/icone-cordaria-disabled.cb1497f.png"},419:function(e,o,t){"use strict";t(415)},420:function(e,o,t){var n=t(51)(!1);n.push([e.i,"a[data-v-4c87af40]{font-size:1.5em!important}.inbox[data-v-4c87af40]{padding:4px 25px;color:var(--font-color-h2)!important}.inbox[data-v-4c87af40]:hover{background-color:rgba(0,0,0,.05);color:var(--font-color-hover)!important}.outbox[data-v-4c87af40]{padding:0 10px}.inbox-project[data-v-4c87af40]{background-color:var(--the-project-inbox);border-radius:10px}.outbox-project[data-v-4c87af40]{background-color:var(--the-project-outbox);border-radius:10px}.inbox-tutorial[data-v-4c87af40]{background-color:var(--the-tutorial-inbox);border-radius:10px}.outbox-tutorial[data-v-4c87af40]{background-color:var(--the-tutorial-outbox);border-radius:10px}.inbox-research[data-v-4c87af40]{background-color:var(--the-research-inbox);border-radius:10px}.outbox-research[data-v-4c87af40]{background-color:var(--the-research-outbox);border-radius:10px}",""]),e.exports=n},451:function(e,o,t){var content=t(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(52).default)("3e249a66",content,!0,{sourceMap:!1})},465:function(e,o,t){"use strict";t(451)},466:function(e,o,t){var n=t(51)(!1);n.push([e.i,'#credit-text{font-family:var(--font-light);font-size:var(--font-size-light)!important}.the-research p{font-size:.83em}#credit-text{font-size:.67em!important;font-family:"Encode Sans";font-weight:var(--font-light)}.download-research{font-family:"Encode Sans";font-weight:var(--font-regular);font-size:.95em}.font-bold{font-family:"Encode Sans";font-weight:var(--font-bold)}.small-line-height{line-height:1.3}',""]),e.exports=n},491:function(e,o,t){"use strict";t.r(o);var n={components:{Box:t(416).default},data:function(){return{title:"A PESQUISA",boxes:{aboutResearch:{text:"<h2>Como surgiu?</h2>",schema:"the-research",leftLogo:!1,rightLogo:!1},downloadResearch:{text:'\n                           <div\n                    class="\n                      col\n                      download-research\n                      d-flex\n                      align-items-center\n                      justify-content-around\n                      small-line-height\n                      text-center\n                    "\n                  >\n                    <div>A Pesquisa<br />Na íntegra</div>\n                    <div>&nbsp;|&nbsp;<br />&nbsp;|&nbsp;</div>\n                    <div>Baixe<br /><span class="font-bold">Aqui</span></div>\n                    <div>\n                      \n                        <img\n                          @mouseover="icon.url = imageMouseOver(icon)"\n                          @mouseleave="icon.url = imageMouseLeave(icon)"\n                          class="img img-fluid icon"\n                          :src="icon.url"\n                          :alt="icon.altText"\n                        />\n                    </div>\n                  </div>\n                ',schema:"the-research",leftLogo:!1,rightLogo:!0}},researchUrl:"/files/pdf/pesquisa.pdf"}},head:function(){return{title:"Cordaria - A Pesquisa",meta:[{hid:"titlepesquisa",name:"title",content:"Cordaria - Desenvolvimento de Aplicação Web para Iniciação à Prática do Violão e Guitarra"},{hid:"pesquisa",name:"description",content:"Cordaria pretende ampliar as possibilidades metodológicas do ensino prático num cenário EAD e oferecer uma oportunidade diferente para iniciação da arte."},{hid:"pesquisakeys",name:"keywords",content:"Pesquisa, Prática, Musical, Desafios, EAD"}],link:[{href:"https://cordaria.com.br/a-pesquisa.pdf",rel:"canonical"}]}}},r=(t(465),t(59)),component=Object(r.a)(n,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"the-research",attrs:{id:"the-research"}},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row text-center layer-top align-items-center"},[t("div",{staticClass:"col"},[t("h1",{staticClass:"title mt-3 mb-4"},[e._v(e._s(e.title))])])])]),e._v(" "),t("div",{staticClass:"container layer-center"},[t("div",{staticClass:"row justify-content-around"},[t("section",{staticClass:"col-md-5"},[t("Box",{attrs:{"title-text":e.boxes.aboutResearch.text,schema:e.boxes.aboutResearch.schema,"is-logo":e.boxes.aboutResearch.isLogo}}),e._v(" "),e._m(0)],1),e._v(" "),t("div",{staticClass:"col-md-5"},[t("aside",{staticClass:"row justify-content-center"},[t("a",{attrs:{href:"/a-pesquisa/pdf/SACRAMENTO-Luciano-Cordaria-desenvolvimento-de-aplicacao-web-para-violao-e-guitarra.pdf",target:"_blank"}},[t("Box",{attrs:{"title-text":e.boxes.downloadResearch.text,schema:e.boxes.downloadResearch.schema,"left-logo":e.boxes.downloadResearch.leftLogo,"right-logo":e.boxes.downloadResearch.rightLogo}})],1)]),e._v(" "),e._m(1)])])]),e._v(" "),e._m(2)])}),[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",{staticClass:"justify"},[e._v("\n          A pesquisa\n          "),t("strong",[e._v("\n            “Cordaria – Desenvolvimento de aplicação web para iniciação à prática do\n            violão e guitarra”\n          ")]),e._v("\n          surge em um momento delicado da história mundial: a pandemia do Coronavírus –\n          COVID 19. Compelidos a este problema, os profissionais da área da educação,\n          sobre tudo com atuação na área da música enfrentam grandes desafios para\n          conseguir adequar suas atividades para o ensino a distância. Parte deste\n          desafio é devido a escassez de recursos tecnológicos que fogem da metodologia\n          tradicional de ensino, muito das vezes, limitado a vídeos, textos, imagens e\n          de forma repetida. Os problemas se amplificam com usuários oriundos da classe\n          baixa, que tem uma limitação considerável de hardware e/ou baixa conexão de\n          internet.\n        ")])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"row"},[t("div",{staticClass:"col"},[t("p",{staticClass:"justify large-line-height"},[e._v("\n              Utilizando meus conhecimentos de uma década como professor e alguns anos\n              de desenvolvedor web, implementei uma aplicação para prática de exercícios\n              básicos de violão e guitarra baseada em alguns métodos já experienciados\n              por mim enquanto discente e docente. Com isso, Cordaria pretende\n              "),t("strong",[e._v("ampliar as possibilidades metodológicas do ensino prático")]),e._v("\n              destes instrumentos num cenário EAD e oferecer uma oportunidade diferente\n              para iniciação da arte do fazer musical, além de incentivar programadores\n              e professores a pensar novas formas de aprendizagem.\n            ")])])])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("aside",{staticClass:"row justify-content-center mt-3 m-3"},[t("div",{staticClass:"col-9"},[t("p",{staticClass:"text-center",attrs:{id:"credit-text"}},[e._v("\n        Esta pesquisa foi possível devido ao apoio da Lei Emergencial de Incentivo à\n        Cultura – Lei Aldir Blanc, Governo Federal, Ministério do Turismo e Secretaria\n        Especial de Cultura, através da aprovação no Edital LAB no 14/2020 – “Seleção de\n        Bolsistas para as Áreas Artísticas Técnicas e de Produção Cultural” promovido\n        pela Secretaria de Cultura e Turismo de Minas Gerais – SECULT.\n      ")])])])}],!1,null,null,null);o.default=component.exports;installComponents(component,{Box:t(416).default})}}]);