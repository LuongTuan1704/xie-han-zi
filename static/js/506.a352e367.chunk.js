"use strict";(self.webpackChunkxie_han_zi=self.webpackChunkxie_han_zi||[]).push([[506],{1835:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var i=t(4165),a=t(5861),r=t(1413),s=t(9439),c=t(7313),o=t(3453),l=t(72),u="HanziComponentStyle_wrapper__ePplx",d="HanziComponentStyle_Hanzi-wrapper__IDIbd",_="HanziComponentStyle_pinyin-wrapper__roeuL",m="HanziComponentStyle_controler__ynIIG",p="HanziComponentStyle_btn__azqZ+",h="HanziComponentStyle_right-section__Z2Esh",f=t(259),x=t(1309),v="Loading_loading-wrapper__5Ti6M",w="Loading_loading__OIcbi",j=t(6417);function g(e,n){var t=e.position;return(0,j.jsx)("div",{style:{position:"fixed"===t?t:"absolute"},className:v,ref:n,children:(0,j.jsx)("div",{className:w})})}var b=(0,c.forwardRef)(g),y=t(7241),Z="animation",N="quiz";function k(e){var n=e.character,t=e.showPinyin,v=void 0===t||t,w=e.options,g=(0,c.useState)(null),k=(0,s.Z)(g,2),C=k[0],z=k[1],S=(0,c.useState)(!0),I=(0,s.Z)(S,2),T=I[0],P=I[1],D=(0,c.useState)(Z),O=(0,s.Z)(D,2),E=O[0],F=O[1],R=(0,c.useState)(!1),V=(0,s.Z)(R,2),L=V[0],A=V[1],H=(0,c.useState)(!1),G=(0,s.Z)(H,2),M=G[0],Q=G[1],X=(0,c.useRef)(),q=(0,c.useRef)(),B=E===N?"draw on this zone":L?"paused":"animate",W=function(){F((function(e){return e===Z?N:Z}))},J=(0,c.useMemo)((function(){return(0,l.ZP)(n,{heteronym:!0})[0].map((function(e,n){return(0,j.jsx)("span",{className:"pinyin",children:e},n)}))}),[n]);(0,c.useEffect)((function(){var e=X.current;return z(o.Z.create(e,n,(0,r.Z)((0,r.Z)({},w),{},{onLoadCharDataSuccess:function(){P(!1)},onLoadCharDataError:function(e){q.current.innerHTML="".concat(e)}}))),function(){e.innerHTML=null}}),[n,w]);return(0,c.useEffect)((function(){E===N&&C.quiz({onComplete:function(){var e=setTimeout((function(){clearTimeout(e),W()}),1e3)}})}),[C,E]),(0,j.jsxs)("div",{className:u,"data-character":n,children:[T&&(0,j.jsx)(b,{ref:q}),(0,j.jsx)("div",{ref:X,className:d,style:{visibility:"".concat(T?"hidden":"visible")},onClick:function(){if(E!==N)return L?void(L&&M?(C.pauseAnimation(),Q(!1)):(C.resumeAnimation(),Q(!0))):(A(!0),Q(!0),void C.animateCharacter({onComplete:function(){A(!1),Q(!1)}}))},title:B}),v&&(0,j.jsx)("div",{className:_,children:J}),(0,j.jsx)("div",{className:m,children:(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("button",{className:p,onClick:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.target.style.color="var(--LimeGreen)",e.next=3,(0,y.wr)(n);case 3:t.target.style.color="inherit";case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:(0,j.jsx)(f.G,{icon:x.j1t})}),(0,j.jsx)("button",{className:p,onClick:W,style:{color:"".concat(E===Z?"inherit":"var(--LimeGreen)")},children:(0,j.jsx)(f.G,{icon:x.TzT})})]})})]})}var C=(0,c.memo)(k)},9506:function(e,n,t){t.r(n),t.d(n,{default:function(){return me}});var i=t(3433),a=t(9439),r=t(7313),s=t(2751),c=t(6535),o=t(4925),l=t(4165),u=t(1413),d=t(5861),_=t(3304),m=t(72),p=t(2352),h=t(4942),f=t(4491),x=t(771),v=t(7241),w=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(n,t,r){var c,o,_;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c=new FormData(t.target),o=Array.from(c.entries()).reduce((function(e,n){var t=(0,a.Z)(n,2),i=t[0],r=t[1];return"note"===i&&(r=r.replaceAll("\n","<br>")),(0,u.Z)((0,u.Z)({},e),{},(0,h.Z)({},i,r))}),{}),!((0,i.Z)(o.hanzi).filter((function(e){return/[\u4e00-\u9fa5]/g.test(e)})).length>0)){e.next=20;break}if(!n.editItem){e.next=10;break}return _=(0,u.Z)((0,u.Z)({},n.editItem),o),e.next=8,(0,v.F3)("datas","_id",{key:n.editItem._id,datas:_}).then((function(){r.current.focus(),f.Am.success("saved",{position:f.Am.POSITION.TOP_CENTER})}));case 8:e.next=18;break;case 10:if(t.target.reset(),console.log(n.tag._id),n.tag._id){e.next=17;break}return f.Am.error("Please select a tag to add new word",{position:f.Am.POSITION.TOP_CENTER}),e.abrupt("return");case 17:x.Db.transaction("rw",x.Db.datas,(0,d.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Db.datas.add((0,u.Z)((0,u.Z)({_id:(0,s.x0)(12),tag_id:n.tag._id},o),{},{is_a_learned_word:!1,view_count:0,createdAt:new Date})).then((function(){r.current.focus(),f.Am.success("Add data sucessfully!",{position:f.Am.POSITION.TOP_CENTER})}));case 2:case"end":return e.stop()}}),e)})))).catch(console.error);case 18:e.next=23;break;case 20:f.Am.error("Faild to add data!",{position:f.Am.POSITION.TOP_CENTER}),t.target.reset(),r.current.focus();case 23:case"end":return e.stop()}}),e)})));return function(n,t,i){return e.apply(this,arguments)}}(),j={wrapper:"Form_wrapper__09h5k","form-header":"Form_form-header__hktGi","close-form":"Form_close-form__GAz5G","form-id":"Form_form-id__2hX0W","Field-group":"Form_Field-group__6OkGQ","form-btn-group":"Form_form-btn-group__DLlbt",btnSubmit:"Form_btnSubmit__n5KBY",btnReset:"Form_btnReset__tPmE9",input:"Form_input__emf-M"},g=t(259),b=t(1309),y=t(6169),Z=t(6417);function N(e,n){var t=(0,p.Z)(!0),i=(0,a.Z)(t,2),s=i[0],c=i[1],o=(0,r.useRef)(),l=(0,r.useRef)();return(0,_.Z)(["Escape"],e.back,y.c),(0,r.useImperativeHandle)(n,(function(){return{toggleForm:c}})),s?(0,Z.jsxs)("div",{id:"form-wrapper",className:j.wrapper,children:[(0,Z.jsxs)("div",{className:j["form-header"],children:[e.editItem?(0,Z.jsxs)("span",{children:[" Ch\u1ec9nh s\u1eeda t\u1eeb : ",e.editItem.hanzi]}):(0,Z.jsx)("span",{children:"Th\xeam t\u1eeb v\u1ef1ng m\u1edbi"}),(0,Z.jsx)("button",{title:"press Esc to close",className:j["close-form"],onClick:function(){return e.back()},children:(0,Z.jsx)(g.G,{icon:b.g82})})]}),(0,Z.jsxs)("form",{onReset:function(e){e.target.reset(),o.current.focus()},onSubmit:function(n){return w(e,n,o)},children:[(0,Z.jsxs)("div",{className:j["Field-group"],children:[(0,Z.jsx)("div",{className:j.item,children:(0,Z.jsx)("input",{tabIndex:1,className:j.input,name:"hanzi",defaultValue:e.editItem.hanzi||"",placeholder:"H\xe1n t\u1ef1",ref:o,onBlur:function(e){var n=e.target.value,t=n.length>2?{segment:"segmentit",group:!0}:{heteronym:!0};l.current.value=(0,m.ZP)(n,t).join(" , ")}})}),(0,Z.jsx)("div",{className:j.item,children:(0,Z.jsx)("input",{tabIndex:-1,className:j.input,defaultValue:e.editItem.pinyin||"",placeholder:"B\xednh \xe2m",ref:l,name:"pinyin"})}),(0,Z.jsxs)("div",{className:j.item,children:[(0,Z.jsx)("input",{tabIndex:2,className:j.input,defaultValue:e.editItem.han_viet||"",placeholder:"H\xe1n vi\u1ec7t",name:"han_viet"})," "]}),(0,Z.jsxs)("div",{className:j.item,children:[(0,Z.jsx)("input",{tabIndex:2,className:j.input,defaultValue:e.editItem.Vietnamese_meaning||"",placeholder:"D\u1ecbch ngh\u0129a",name:"Vietnamese_meaning"})," "]}),(0,Z.jsxs)("div",{className:j["form-btn-group"],children:[(0,Z.jsx)("button",{title:"Speak hanzi",onClick:function(e){e.preventDefault(),(0,v.wr)(document.querySelector('[name="hanzi"]').value)},tabIndex:-1,className:j.btnSubmit,children:(0,Z.jsx)(g.G,{icon:b.AQZ})}),(0,Z.jsx)("button",{title:"form submit",type:"submit",tabIndex:4,className:j.btnSubmit,children:(0,Z.jsx)(g.G,{icon:b.XCy})}),(0,Z.jsx)("button",{title:"form reset",type:"reset",tabIndex:5,className:j.btnReset,children:(0,Z.jsx)(g.G,{icon:b.g82})})]})]}),(0,Z.jsx)("textarea",{style:{flexBasis:"64%",minHeight:"85%",resize:"vertical"},className:j.input,spellCheck:!1,defaultValue:e.editItem.note||"",placeholder:"ghi ch\xfa...",name:"note",tabIndex:3})]}),(0,Z.jsxs)("span",{className:j["form-id"],children:["#",e.tag.tag_name]})]}):null}var k=(0,r.forwardRef)(N),C=t(807),z=t(4733),S=t(8566),I=t(3441),T=t(9274),P="style_micro-btn__DtnL6",D="style_pulse-ring__RtdLY",O=function(e){var n=(0,T.x6)({clearTranscriptOnListen:!0}),t=n.transcript,i=n.listening,a=n.browserSupportsSpeechRecognition;return(0,r.useEffect)((function(){e.speaking(t)})),(0,r.useEffect)((function(){}),[i]),a?(0,Z.jsx)("button",{className:P,onClick:function(){T.ZP.startListening({language:"zh-CN",continuous:!1})},children:i?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{className:D}),(0,Z.jsx)(g.G,{icon:b.UOM})]}):(0,Z.jsx)(g.G,{icon:b.EkX})}):null},E=t(6250),F=t(547),R=t(1835),V="styles_ViewDetail-wrapper__twP2C",L="styles_header__vLVlz",A="styles_close-form__SMAWn",H="styles_wrapper__eCgvi",G="styles_HanziComponents-wrapper__sXnJP",M="styles_content-wrapper__zJ-Ts",Q="styles_list__Ubz9m",X="styles_khaithu__UU0Hk",q="styles_note__PY0i5",B="styles_footer__s4H31",W="checkbox_regular-checkbox__c1J35";function J(e,n){e.fn;var t=(0,r.useContext)(F.a7),s=(0,r.useState)({}),c=(0,a.Z)(s,2),o=c[0],l=c[1],u=o.hanzi?(0,i.Z)(o.hanzi).filter((function(e){return/[\u4e00-\u9fa5]/g.test(e)})):[];(0,_.Z)(["Escape"],(function(){(0,v.se)("datas","_id",{key:o._id,field:"view_count",newValue:o.view_count+1}).then((function(){l({})}))}),{overrideSystem:!1,ignoreInputFields:!1,repeatOnHold:!1}),(0,r.useImperativeHandle)(n,(function(){return{setViewDetail:l}}));var d=(0,r.useCallback)((function(e,n){return null!==o&&void 0!==o&&o.hanzi?e.length>1?e.map((function(e,i){return(0,Z.jsx)(R.default,{character:e,showPinyin:n.showPinyin,options:t.hanziComponentOptions},i)})):(0,Z.jsx)(R.default,{character:e[0],showPinyin:n.showPinyin,options:t.hanziComponentOptions}):null}),[o]);return(null===o||void 0===o?void 0:o.hanzi)&&(0,Z.jsxs)("div",{className:V,children:[(0,Z.jsx)("div",{className:L,children:(0,Z.jsx)("button",{title:"press Esc to close",className:A,onClick:function(){(0,v.se)("datas","_id",{key:o._id,field:"view_count",newValue:o.view_count+1}).then((function(){l({})}))},children:(0,Z.jsx)(g.G,{icon:b.$9F})})}),(0,Z.jsxs)("div",{className:H,children:[(0,Z.jsx)("div",{className:G,children:d(u,{showPinyin:!1})}),(0,Z.jsxs)("div",{className:M,children:[(0,Z.jsxs)("ul",{className:Q,children:[(0,Z.jsxs)("li",{style:{cursor:"pointer"},onClick:function(){var e=new SpeechSynthesisUtterance(o.hanzi);speechSynthesis.speaking||(e.lang="zh-CN",e.volume=1,speechSynthesis.speak(e))},children:["H\xe1n t\u1ef1 :"," ",(0,Z.jsx)("span",{className:X,children:o.hanzi})]}),(0,Z.jsxs)("li",{children:["Phi\xean \xe2m : ",(0,Z.jsx)("span",{children:o.pinyin})]}),(0,Z.jsxs)("li",{children:["H\xe1n - Vi\u1ec7t : ",(0,Z.jsx)("span",{children:o.han_viet})]}),(0,Z.jsxs)("li",{children:["D\u1ecbch ngh\u0129a :"," ",(0,Z.jsx)("span",{children:o.Vietnamese_meaning})]})]}),(0,Z.jsx)("div",{className:q,dangerouslySetInnerHTML:{__html:o.note}})]})]}),(0,Z.jsxs)("div",{className:B,children:[(0,Z.jsx)("span",{children:(0,v.p6)(new Date(o.createdAt))}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{title:"View count",children:[(0,Z.jsx)(g.G,{icon:b.Mdf,color:"hsl(163, 72%, 41%)"})," ",o.view_count]}),"learned"," ",(0,Z.jsx)("input",{className:W,type:"checkbox",id:"checkbox-1-2",defaultChecked:o.is_a_learned_word,onChange:function(e){return(0,v.se)("datas","_id",{key:o._id,field:"is_a_learned_word",newValue:e.target.checked})}}),(0,Z.jsx)("label",{htmlFor:"checkbox-1-2"})]})]})]})}var U=(0,r.forwardRef)(J),Y=t(9276),K=["style"],$=(0,r.lazy)((function(){return t.e(766).then(t.bind(t,1766))})),ee=16,ne={POSITION:f.Am.POSITION.BOTTOM_CENTER},te={View:Symbol("view"),Form:Symbol("form"),Quiz:Symbol("quiz")},ie={CardItem:Symbol("card"),ListItem:Symbol("item")};function ae(e,n){return re.apply(this,arguments)}function re(){return re=(0,d.Z)((0,l.Z)().mark((function e(n,t){var a,r=arguments;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){var a=e[n].split(" "),r=t.split(" ");return"hanzi"===n?(0,i.Z)(e.hanzi).some((function(e){return(0,i.Z)(t).includes(e)})):a.some((function(e){return r.includes(e.toLowerCase())}))},"global"!==(r.length>2&&void 0!==r[2]?r[2]:"global")){e.next=4;break}return e.abrupt("return",x.Db.transaction("rw",x.Db.datas,(0,d.Z)((0,l.Z)().mark((function e(){var n;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Db.datas.orderBy("_id").filter(a).toArray();case 2:return n=e.sent,e.abrupt("return",Promise.resolve(n));case 4:case"end":return e.stop()}}),e)})))));case 4:return e.abrupt("return",Promise.resolve(JSON.parse(sessionStorage.getItem("cache-data")).filter(a)||[]));case 5:case"end":return e.stop()}}),e)}))),re.apply(this,arguments)}function se(e){var n=e.tagActive,t=e.props,i=e.datas;return(0,Z.jsx)("ul",{className:E.Z.ul,children:null===i||void 0===i?void 0:i.map((function(e,i){return(0,Z.jsxs)("li",{onClick:function(){var n;null===(n=t.viewDetailRef.current)||void 0===n||n.setViewDetail(e)},children:[i,(0,Z.jsxs)(C.W4,{id:"#".concat(e._id),children:[(0,Z.jsx)("span",{onClick:function(n){n.stopPropagation();var t=new SpeechSynthesisUtterance(e.hanzi);speechSynthesis.speaking||(t.lang="zh-CN",t.volume=1,speechSynthesis.speak(t))},children:e.hanzi}),(0,Z.jsx)("span",{children:e.pinyin}),(0,Z.jsx)("span",{children:e.han_viet}),(0,Z.jsx)("span",{children:e.Vietnamese_meaning}),(0,Z.jsxs)(C.xV,{id:"#".concat(e._id),className:E.Z.context_menu_warpper,children:[(0,Z.jsx)(C.sN,{className:E.Z.context_menu_item,onClick:function(i){i.stopPropagation(),(0,f.Am)((0,Z.jsx)(I.Z,{customMsg:"".concat(e.hanzi),fn:(0,d.Z)((0,l.Z)().mark((function i(){return(0,l.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:(0,v.se)("tags","_id",{key:n._id,field:"QTestArrayID",newValue:n.QTestArrayID.filter((function(n){return n!==e._id}))}).then((function(){(0,v.D2)("datas","_id",e._id).then((function(){f.Am.info("deleted : ".concat(e._id),ne),(0,v.Li)("datas","tag_id",{key:n._id}).then(t.fn.setDatas)}))}));case 1:case"end":return i.stop()}}),i)})))}))},children:(0,Z.jsx)("button",{children:(0,Z.jsx)(g.G,{icon:b.Vui,color:"var(--BrightRed)"})})}),(0,Z.jsx)(C.sN,{onClick:function(n){n.stopPropagation(),t.setEditItem(e),t.setscreen(te.Form)},children:(0,Z.jsx)("button",{children:(0,Z.jsx)(g.G,{icon:Y.Xcf,color:"var(LimeGreen)"})})}),(0,Z.jsx)(C.sN,{onClick:function(e){e.stopPropagation()},children:(0,Z.jsx)("button",{children:(0,Z.jsx)(g.G,{icon:b.jAm,color:"var(--BrightRed)"})})})]})]})]},e._id)}))})}function ce(e,n){var t=(0,r.useRef)(),i=(0,r.useRef)(),s=(0,r.useRef)(),c=(0,r.useState)(""),l=(0,a.Z)(c,2),d=l[0],m=l[1],p=(0,r.useState)(""),h=(0,a.Z)(p,2),f=h[0],x=h[1],w=(0,r.useState)(te.View),j=(0,a.Z)(w,2),y=j[0],N=j[1],C=(0,r.useState)(ie.ListItem),I=(0,a.Z)(C,2),T=I[0],P=I[1],D=(0,r.useState)([]),F=(0,a.Z)(D,2),R=F[0],V=F[1];(0,_.Z)(["t"],(function(e){N(te.Quiz)}),{overrideSystem:!1,ignoreInputFields:!0,repeatOnHold:!1}),(0,_.Z)(["f"],(function(e){N(te.Form)}),{overrideSystem:!1,ignoreInputFields:!0,repeatOnHold:!1}),(0,r.useImperativeHandle)(n,(function(){return{setTag:m}})),(0,r.useEffect)((function(){(0,v.Li)("datas","tag_id",{key:d._id}).then(V)}),[d,y]),(0,r.useEffect)((function(){return sessionStorage.setItem("cache-data",JSON.stringify(R)),function(){sessionStorage.setItem("cache-data",JSON.stringify([]))}}),[d,R]);var L=(0,r.useCallback)((function(e){e.preventDefault();var n=(0,v.Fm)(e),t=n["search-value"].trim().toLowerCase();t&&(n["search-wrapper"]?ae(n["search-type"],t).then(V):ae(n["search-type"],t,"local").then(V))}),[]);return(0,Z.jsxs)("div",{className:E.Z.wrapper,children:[y===te.View&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(U,{ref:i}),(0,Z.jsx)("div",{ref:t,className:E.Z["list-wrapper"],children:T!==ie.ListItem?(0,Z.jsx)(S.Z,{children:function(e){var n=e.height,t=e.width,a=9;t<920&&(a=4),t<645&&(a=6),t<375&&(a=3);var s=(0,v.C1)(R,a);return(0,Z.jsx)(z.Ym,{className:E.Z["Cards-wrapper"],style:{overflowX:"hidden"},columnWidth:t/a-ee/a,rowHeight:n/3,innerElementType:(0,r.forwardRef)((function(e,n){var t=e.style,i=(0,o.Z)(e,K);return(0,Z.jsx)("div",(0,u.Z)({ref:n,style:(0,u.Z)((0,u.Z)({},t),{},{paddingLeft:ee,paddingTop:ee})},i))})),rowCount:s.length,columnCount:a,height:n,width:t,children:function(e){var n=e.columnIndex,t=e.rowIndex,a=e.style;return function(e,n,t){return(0,Z.jsx)(Z.Fragment,{children:e&&(0,Z.jsx)("div",{style:(0,u.Z)((0,u.Z)({},n),{},{left:n.left+ee,top:n.top+ee,width:n.width-ee,height:n.height-ee}),className:E.Z.card,children:(0,Z.jsxs)("div",{className:E.Z.content,onClick:function(){var n;null===(n=t.viewDetailRef.current)||void 0===n||n.setViewDetail(e)},children:[(0,Z.jsx)("div",{className:E.Z.front,children:e.hanzi}),(0,Z.jsx)("div",{className:E.Z.back,children:(0,Z.jsx)("span",{children:e.Vietnamese_meaning})})]})},e._id)})}(s[t][n],a,{viewDetailRef:i,tag:d,setDatas:V})}})}}):(0,Z.jsx)(se,{datas:R,tagActive:d,props:{viewDetailRef:i,fn:V,setEditItem:x,setscreen:N}})}),(0,Z.jsx)("div",{style:{padding:"0 0 0 16px"},children:(0,Z.jsx)("div",{className:E.Z.bt_bar,children:(0,Z.jsxs)("div",{className:E.Z.wrapper,children:[(0,Z.jsx)("label",{className:E.Z["slide-input"],children:(0,Z.jsx)("input",{onChange:function(e){null===t||void 0===t||t.current.style.setProperty("--Hanzi_FontSize","".concat(e.target.value,"rem"))},type:"range",defaultValue:2.5,step:.5,min:1,max:5})}),(0,Z.jsxs)("div",{className:E.Z["search-wrapper"],children:[(0,Z.jsxs)("form",{onSubmit:L,children:[(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("select",{name:"search-type",children:[(0,Z.jsx)("option",{value:"hanzi",defaultValue:"hanzi",children:"hanzi"}),(0,Z.jsx)("option",{value:"pinyin",children:"pinyin"}),(0,Z.jsx)("option",{value:"Vietnamese_meaning",children:"Vietnamese"})]}),(0,Z.jsxs)("label",{children:[(0,Z.jsx)("input",{type:"checkbox",defaultChecked:!0,name:"search-wrapper"})," ","-g"]})]}),(0,Z.jsxs)("div",{className:E.Z["input-wrapper"],children:[(0,Z.jsx)("input",{ref:s,type:"search",name:"search-value",placeholder:"search ..."}),(0,Z.jsx)("button",{type:"submit",children:(0,Z.jsx)(g.G,{icon:b.wn1})})]})]}),(0,Z.jsx)(O,{speaking:function(e){s.current.value=e}}),(0,Z.jsx)("button",{onClick:function(){(0,v.Li)("datas","tag_id",{key:d._id}).then(V)},children:(0,Z.jsx)(g.G,{icon:b.QDM})})]}),(0,Z.jsxs)("div",{children:[d._id&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("button",{title:"form",onClick:function(){return N(te.Form)},children:(0,Z.jsx)(g.G,{icon:b.yXf})}),(0,Z.jsx)("button",{onClick:function(){return N(te.Quiz)},children:(0,Z.jsx)(g.G,{icon:b.qxT})})]}),(0,Z.jsx)("button",{onClick:function(){P((function(e){return e===ie.ListItem?ie.CardItem:ie.ListItem}))},children:(0,Z.jsx)(g.G,{color:"".concat(T===ie.ListItem?"var(--LimeGreen)":""),icon:b.ZYZ})})]})]})})})]}),y===te.Form&&(0,Z.jsx)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:(0,Z.jsx)(k,{tag:d,editItem:f,back:function(){f&&x(""),N(te.View)}})}),y===te.Quiz&&(0,Z.jsx)(r.Suspense,{fallback:(0,Z.jsx)("div",{children:"Loading..."}),children:(0,Z.jsx)($,{tag:d,datas:R,props:{back:function(){N(te.View)}}})})]})}var oe=(0,r.forwardRef)(ce),le=(0,r.lazy)((function(){return Promise.all([t.e(346),t.e(608)]).then(t.bind(t,7608))})),ue=(0,r.lazy)((function(){return Promise.all([t.e(346),t.e(793)]).then(t.bind(t,8793))})),de=(0,r.lazy)((function(){return t.e(100).then(t.bind(t,2100))}));function _e(e,n){var t=(0,r.useTransition)(),o=(0,a.Z)(t,2),l=(o[0],o[1]),u=(0,r.useRef)(),d=(0,r.useRef)(),_=(0,r.useState)([]),m=(0,a.Z)(_,2),p=m[0],h=m[1],f=(0,r.useState)(null),x=(0,a.Z)(f,2),v=x[0],w=x[1],j=(0,r.useCallback)((function(n){var t=n.detail;if(t){var a=(0,i.Z)(t).join(" ").split(/\s+/).filter((function(e){return/[\u4e00-\u9fa5]/g.test(e)})).map((function(e){return{Char_id:(0,s.x0)(5),char:e}}));e.onHistoryChange({_id:(0,s.x0)(5),_value:t}),h(a)}else h([])}),[]);return(0,r.useEffect)((function(){return(0,c.on)("emitData",j),function(){(0,c.S1)("emitData",j)}}),[]),(0,r.useImperativeHandle)(n,(function(){var e;return{setArrayOfHanzi:function(e){if("view_pinyin"!==v){var n=(0,i.Z)(e).join(" ").split(/\s+/).filter((function(e){return/[\u4e00-\u9fa5]/g.test(e)})).map((function(e){return{Char_id:(0,s.x0)(5),char:e}}));h(n)}else(0,c.X$)("toPinyin",e)},setScreen:function(e){l((function(){w(e)}))},setTag:null===(e=d.current)||void 0===e?void 0:e.setTag,getFormData:j,addTab:function(e){var n;null===(n=u.current)||void 0===n||n.addNewTab(e),p.length&&h([])}}})),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(r.Suspense,{fallback:(0,Z.jsx)("div",{children:"Loading..."}),children:["viewr_char"===v&&(0,Z.jsx)(de,{ArrayOfHanzi:p,hanziComponentOptions:e.hanziComponentOptions}),"view_pinyin"===v&&(0,Z.jsx)(ue,{hanziComponentOptions:e.hanziComponentOptions}),"note"===v&&(0,Z.jsx)(le,{ref:u})]}),"tags"===v&&(0,Z.jsx)(oe,{ref:d})]})}var me=(0,r.forwardRef)(_e)},6535:function(e,n,t){function i(e,n){document.addEventListener(e,n)}function a(e,n){document.removeEventListener(e,n)}function r(e,n){var t=new CustomEvent(e,{detail:n});document.dispatchEvent(t)}t.d(n,{S1:function(){return a},X$:function(){return r},on:function(){return i}})},6250:function(e,n){n.Z={"App-viewer":"main_App-viewer__daWhl",view_char_wrapper:"main_view_char_wrapper__GUE+C",wrapper:"main_wrapper__sdIYc",header:"main_header__3tX03","ml-auto":"main_ml-auto__fSPg5",btns:"main_btns__KQE-4",p_wp:"main_p_wp__lO+D5",hanzi_:"main_hanzi___mHki6","text-wrapper":"main_text-wrapper__9cRri",char_wrapper:"main_char_wrapper__1xmmw",char_pinyin:"main_char_pinyin__5ZAKQ",char_hanzi:"main_char_hanzi__ryER9",form_Wrapper:"main_form_Wrapper__Oc4FG",sh_f_btn:"main_sh_f_btn__eVMGf","slide-input":"main_slide-input__WMIv2","main-wrapper":"main_main-wrapper__cVW2E",view_pinyin_tooltip:"main_view_pinyin_tooltip__zoqeV","main-content":"main_main-content__SWJRq","list-wrapper":"main_list-wrapper__xbh9D","Cards-wrapper":"main_Cards-wrapper__thu48",card:"main_card__wZbH1",content:"main_content__-BumF",front:"main_front__0T9mG",back:"main_back__YexG-",ul:"main_ul__bnnev",context_menu_warpper:"main_context_menu_warpper__1bALe",bt_bar:"main_bt_bar__-F7ub","search-wrapper":"main_search-wrapper__AJ+lz","input-wrapper":"main_input-wrapper__bOp7n","test-wrapper":"main_test-wrapper__hq2Dy","test-container":"main_test-container__Zp3Ye",tag:"main_tag__PhSKR","test-setting":"main_test-setting__udBur","close-btn":"main_close-btn__rMuza","Q-wrapper":"main_Q-wrapper__6K2r0",state:"main_state__er10t","flex-row":"main_flex-row__0PHK6","display-status":"main_display-status__7xaHl","T-Item":"main_T-Item__U2Vqn",text_wp:"main_text_wp__TRdXJ","next-btn":"main_next-btn__NQEvy","T-wrapper":"main_T-wrapper__PPm--","T-submit":"main_T-submit__xy73m","T-list":"main_T-list__4fZy3",T_row:"main_T_row__23N2P",opacity:"main_opacity__ZOpPN",Item:"main_Item__6khwV"}}}]);