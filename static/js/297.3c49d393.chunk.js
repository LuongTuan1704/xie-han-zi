"use strict";(self.webpackChunkxie_han_zi=self.webpackChunkxie_han_zi||[]).push([[297],{9950:function(e,n){n.Z={"App-viewer":"main_App-viewer__daWhl",view_char_wrapper:"main_view_char_wrapper__GUE+C",wrapper:"main_wrapper__sdIYc",header:"main_header__3tX03","ml-auto":"main_ml-auto__fSPg5",view_pinyin_warapper:"main_view_pinyin_warapper__CAMfe",hanzi_:"main_hanzi___mHki6",btns:"main_btns__KQE-4","text-wrapper":"main_text-wrapper__9cRri",char_wrapper:"main_char_wrapper__1xmmw",char_pinyin:"main_char_pinyin__5ZAKQ",char_hanzi:"main_char_hanzi__ryER9",main:"main_main__+3qZg","flex-row":"main_flex-row__0PHK6","main-content":"main_main-content__SWJRq","list-wrapper":"main_list-wrapper__xbh9D","list-item":"main_list-item__h8SV0",hanzi:"main_hanzi__cR19-",pinyin:"main_pinyin__sQSS1",description:"main_description__u77sC","item-content":"main_item-content__XzSX-","card-btns":"main_card-btns__1oma-","slide-input":"main_slide-input__WMIv2","search-wrapper":"main_search-wrapper__AJ+lz","input-wrapper":"main_input-wrapper__bOp7n","test-wrapper":"main_test-wrapper__hq2Dy","test-container":"main_test-container__Zp3Ye","test-Question":"main_test-Question__KkgRR","test-Answer":"main_test-Answer__c9V7X"}},6697:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(1413),i=t(9439),a=t(390),s=t(1828),c=t(6480),o="HanziComponentStyle_wrapper__ePplx",u="HanziComponentStyle_Hanzi-wrapper__IDIbd",l="HanziComponentStyle_quiz-info__KtDWc",d="HanziComponentStyle_pinyin-wrapper__roeuL",h="HanziComponentStyle_controler__ynIIG",m="HanziComponentStyle_btn__azqZ+",p="HanziComponentStyle_right-section__Z2Esh",f=t(9766),_=t(6706),v="Loading_loading-wrapper__5Ti6M",x="Loading_loading__OIcbi",w=t(2559);function j(e,n){var t=e.position;return(0,w.jsx)("div",{style:{position:"fixed"===t?t:"absolute"},className:v,ref:n,children:(0,w.jsx)("div",{className:x})})}var y=(0,a.forwardRef)(j);function b(e){var n=e.character,t=e.options,v=(0,a.useState)(!1),x=(0,i.Z)(v,2),j=x[0],b=x[1],g=(0,a.useState)("animate"),Z=(0,i.Z)(g,2),C=Z[0],N=Z[1],z=(0,a.useState)(!1),k=(0,i.Z)(z,2),S=k[0],D=k[1],T=(0,a.useState)(!1),I=(0,i.Z)(T,2),A=I[0],R=I[1],G=(0,a.useRef)(),L=(0,a.useState)(null),H=(0,i.Z)(L,2),P=H[0],V=H[1],F=(0,a.useRef)(),O=new SpeechSynthesisUtterance(n);O.lang="zh-CN";var E=S?"var(--LimeGreen)":"inherit",q="quiz"===C?"draw mode!":S?"click to pause":"click to animate",M=function(){N((function(e){return"animate"===e?"quiz":"animate"}))};(0,a.useEffect)((function(){b(!0);var e=G.current,i=s.Z.create(e,n,(0,r.Z)((0,r.Z)({},t),{},{onLoadCharDataSuccess:function(){b(!1)},onLoadCharDataError:function(e){X.current.innerHTML="Error: ".concat(e)}}));return V(i),function(){e.innerHTML=null}}),[n,t]),(0,a.useEffect)((function(){"quiz"===C&&P.quiz({onMistake:function(){var e,n;null!==(n=(e=F.current).innerText)&&void 0!==n||(e.innerText="wrong!");var t=setTimeout((function(){clearTimeout(t),F.current.innerText=null}),800)},onCorrectStroke:function(){var e,n;null!==(n=(e=F.current).innerText)&&void 0!==n||(e.innerText="correct!");var t=setTimeout((function(){clearTimeout(t),F.current.innerText=null}),800)},onComplete:function(e){var n=setTimeout((function(){clearTimeout(n),M()}),1e3)}})}),[C,P]);var Q=(0,a.useCallback)((function(){A||"quiz"===C||(R(!0),D(!0),P.animateCharacter({onComplete:function(){R(!1),D(!1)}})),S&&A&&"quiz"!==C?P.pauseAnimation():P.resumeAnimation(),"quiz"!==C&&D(!S)}),[P,S,A,C]),X=(0,a.useRef)(),B=(0,a.useMemo)((function(){return(0,c.ZP)(n,{heteronym:!0})[0].map((function(e,n){return(0,w.jsx)("span",{className:"pinyin",children:e},n)}))}),[n]);return(0,w.jsxs)("div",{className:o,"data-character":n,children:[j&&(0,w.jsx)(y,{ref:X}),"quiz"===C&&(0,w.jsx)("div",{className:l,children:(0,w.jsx)("div",{ref:F})}),(0,w.jsx)("div",{className:u,style:{visibility:"".concat(j?"hidden":"visible")},ref:G,onClick:Q,title:q}),(0,w.jsx)("div",{className:d,children:B}),(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)("button",{className:m,onClick:Q,style:{color:E},title:q,children:S?(0,w.jsx)(f.G,{icon:_.UL8}):(0,w.jsx)(f.G,{icon:_.iiS})}),(0,w.jsxs)("div",{className:p,children:[(0,w.jsx)("button",{className:m,onClick:function(e){e.target.style.color="var(--LimeGreen)",speechSynthesis.speak(O),O.onend=function(){this.style.color="inherit"}.bind(e.target)},children:(0,w.jsx)(f.G,{icon:_.j1t})}),(0,w.jsx)("button",{className:m,onClick:M,style:{color:"".concat("animate"===C?"inherit":"var(--LimeGreen)")},children:(0,w.jsx)(f.G,{icon:_.TzT})})]})]})]})}var g=(0,a.memo)(b)},4473:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(4165),i=t(5861),a=t(9439),s=t(390),c="FormData_wrapper__NyJqU",o="FormData_form-btn-group__67+HP",u="FormData_btnSubmit__LpozE",l="FormData_btnReset__+Cuwk",d=t(9766),h=t(6706),m=t(7281),p=t(2559);var f=function(e){var n=(0,s.useRef)(),t=(0,s.useState)(""),f=(0,a.Z)(t,2),_=f[0],v=f[1],x=(0,s.useState)(!1),w=(0,a.Z)(x,2),j=w[0],y=w[1],b=function(){y((function(e){return!e}))},g=(0,s.useCallback)((function(){b(),console.log("speaker r");var e=document.querySelector("#App-view-id").childNodes;function n(n,t){var r=new SpeechSynthesisUtterance(t);return r.lang="zh-CN",speechSynthesis.speak(r),e[n].scrollIntoView({behavior:"smooth",block:"center"}),e[n].style.borderColor="var(--LimeGreen)",new Promise((function(e){r.onend=function(){e(!0)}}))}new Promise(function(){var t=(0,i.Z)((0,r.Z)().mark((function t(i){var a,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=(0,r.Z)().mark((function t(i){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(i,e[i].dataset.character).then((function(){e[i].style.borderColor="transparent"}));case 2:case"end":return t.stop()}}),t)})),s=0;case 2:if(!(s<e.length)){t.next=7;break}return t.delegateYield(a(s),"t0",4);case 4:s++,t.next=2;break;case 7:i(!0);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(){b()}))}),[]);return(0,p.jsx)("div",{id:"form-wrapper",className:c,"data-f":!0,children:(0,p.jsxs)("form",{onReset:function(e){e.preventDefault(),n.current.focus(),v("")},onSubmit:function(e){e.preventDefault(),(0,m.X$)("toPinyin",_),(0,m.X$)("emitData",_),v(""),n.current.focus()},children:[(0,p.jsx)("textarea",{ref:n,className:"textarea",spellCheck:!1,value:_,onChange:function(e){v(e.target.value)},tabIndex:1}),(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("button",{title:"view pinyin",onClick:function(n){n.preventDefault(),e.ViewPinyinFn("view_pinyin")},children:(0,p.jsx)(d.G,{icon:h.Mdf})}),(0,p.jsx)("button",{type:"submit",tabIndex:2,disabled:!(_.trim().length>0)||j,className:"".concat(_&&u),children:(0,p.jsx)(d.G,{icon:h.XCy})}),(0,p.jsx)("button",{type:"reset",tabIndex:3,disabled:!(_.trim().length>0)||j,className:"".concat(_&&l),children:(0,p.jsx)(d.G,{icon:h.g82})}),(0,p.jsx)("button",{disabled:j,onClick:function(){g()},children:(0,p.jsx)(d.G,{icon:h.AQZ})})]})]})})}},5297:function(e,n,t){t.r(n),t.d(n,{default:function(){return ae}});var r=t(3433),i=t(9439),a=t(390),s=t(810),c=t(4473),o=t(9950),u=t(7281),l=t(4942),d=t(1413),h=t(4925),m=t(4165),p=t(5861),f=t(6480),_=t(2286),v=t(6851),x="Form_wrapper__09h5k",w="Form_label__I4yxr",j="Form_form-btn-group__DLlbt",y="Form_btnSubmit__n5KBY",b="Form_btnReset__tPmE9",g="Form_form-header__hktGi",Z="Form_input__emf-M",C=t(9766),N=t(6706),z=t(2559);function k(e,n){var t=(0,a.useState)(!0),r=(0,i.Z)(t,2),c=r[0],o=r[1],u=(0,a.useRef)(),h=(0,a.useRef)();return(0,a.useImperativeHandle)(n,(function(){return{toggleForm:function(){o((function(e){return!e}))}}})),c&&(0,z.jsxs)("div",{id:"form-wrapper",className:x,children:[(0,z.jsx)("div",{className:g,children:(0,z.jsx)("span",{children:e.tag.tag_name})}),(0,z.jsxs)("form",{onReset:function(e){e.preventDefault(),u.current.focus()},onSubmit:function(n){n.preventDefault();var t=new FormData(n.target),r=Array.from(t.entries()).reduce((function(e,n){var t=(0,i.Z)(n,2),r=t[0],a=t[1];return(0,d.Z)((0,d.Z)({},e),{},(0,l.Z)({},r,a))}),{});v.Db.transaction("rw",v.Db.datas,(0,p.Z)((0,m.Z)().mark((function n(){return(0,m.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.Db.datas.add((0,d.Z)((0,d.Z)({_id:(0,s.x0)(5),tag_id:e.tag._id},r),{},{is_a_learned_word:!1,view_count:0,createdAt:new Date})).then(_.Am.success("Add data sucessfully!",{position:_.Am.POSITION.BOTTOM_CENTER}));case 2:case"end":return n.stop()}}),n)})))).catch((function(e){})),u.current.focus()},children:[(0,z.jsx)("div",{className:w,children:"hanzi"}),(0,z.jsx)("input",{tabIndex:1,className:Z,name:"hanzi",ref:u,onBlur:function(e){var n=e.target.value,t=n.length>3?{segment:"segmentit",group:!0}:{heteronym:!0};h.current.value=(0,f.ZP)(n,t).join(" | ")}}),(0,z.jsx)("div",{className:w,children:"Pinyin"}),(0,z.jsx)("input",{tabIndex:-1,className:Z,ref:h,name:"pinyin"}),(0,z.jsx)("div",{className:w,children:"Han Viet"}),(0,z.jsx)("input",{tabIndex:2,className:Z,name:"han_viet"}),(0,z.jsx)("div",{className:w,children:"Vietnamese"}),(0,z.jsx)("input",{tabIndex:2,className:Z,name:"Vietnamese_meaning"}),(0,z.jsx)("div",{className:w,children:"note"}),(0,z.jsx)("textarea",{className:Z,spellCheck:!1,name:"note",tabIndex:3}),(0,z.jsxs)("div",{className:j,children:[(0,z.jsx)("button",{type:"submit",tabIndex:4,className:y,children:(0,z.jsx)(C.G,{icon:N.XCy})}),(0,z.jsx)("button",{type:"reset",tabIndex:5,className:b,children:(0,z.jsx)(C.G,{icon:N.g82})})]})]})]})}var S=(0,a.forwardRef)(k),D=t(3567),T=t(6118),I=t(8672),A=t(6697),R="styles_ViewDetail-wrapper__twP2C",G="styles_header__vLVlz",L="styles_close-form__SMAWn",H="styles_HanziComponents-wrapper__sXnJP",P="styles_content-wrapper__zJ-Ts",V="styles_list__Ubz9m",F="styles_footer__s4H31";function O(e,n){var t=e.fn,s=(0,a.useContext)(I.a7),c=(0,a.useState)({}),o=(0,i.Z)(c,2),u=o[0],l=o[1],d=null!==u&&void 0!==u&&u.hanzi?(0,r.Z)(u.hanzi):[];(0,a.useImperativeHandle)(n,(function(){return{setViewDetail:l}}));var h=(0,a.useCallback)((function(e){return null!==u&&void 0!==u&&u.hanzi?e.length>1?e.map((function(e,n){return(0,z.jsx)(A.default,{character:e,options:s.hanziComponentOptions},n)})):(0,z.jsx)(A.default,{character:e[0],options:s.hanziComponentOptions}):null}),[u]);return(null===u||void 0===u?void 0:u.hanzi)&&(0,z.jsxs)("div",{className:R,children:[(0,z.jsx)("div",{className:G,children:(0,z.jsx)("button",{className:L,onClick:function(){t("datas",u._id,"view_count",u.view_count+1),l({})},children:(0,z.jsx)(C.G,{icon:N.$9F})})}),(0,z.jsx)("div",{className:H,children:h(d)}),(0,z.jsxs)("div",{className:P,children:[(0,z.jsxs)("ul",{className:V,children:[(0,z.jsxs)("li",{children:["hanzi : ",(0,z.jsx)("span",{children:u.hanzi})," "]}),(0,z.jsxs)("li",{children:["pinyin : ",(0,z.jsx)("span",{children:u.pinyin})," "]}),(0,z.jsxs)("li",{children:["Han Viet meaning : ",(0,z.jsx)("span",{children:u.han_viet})]}),(0,z.jsxs)("li",{children:["Vietnamese meaning :"," ",(0,z.jsx)("span",{children:u.Vietnamese_meaning})]})]}),(0,z.jsx)("p",{children:u.note}),(0,z.jsxs)("div",{className:F,children:[(0,z.jsxs)("span",{children:["learned word "," : ",(0,z.jsx)("input",{type:"checkbox",defaultChecked:u.is_a_learned_word,onChange:function(e){return t("datas",u._id,"is_a_learned_word",e.target.checked)}})]}),(0,z.jsxs)("span",{children:[(0,z.jsx)(C.G,{icon:N.Mdf,color:"hsl(163, 72%, 41%)"})," ",u.view_count]})]})]})]})}var E=(0,a.forwardRef)(O),q=["style"],M=16;function Q(){return(Q=(0,p.Z)((0,m.Z)().mark((function e(n,t){return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.Db.transaction("rw",v.Db.datas,(0,p.Z)((0,m.Z)().mark((function e(){var i;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Db.datas.orderBy("_id").filter((function(e){var i=e[n].split(" "),a=t.split(" ");return"hanzi"===n&&(i=(0,r.Z)(e.hanzi)),i.some((function(e){return a.includes(e.toLowerCase())}))})).toArray();case 2:return i=e.sent,e.abrupt("return",Promise.resolve({data:i}));case 4:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=(0,p.Z)((0,m.Z)().mark((function e(n){return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Db.datas.where("_id").equals(n).delete();case 2:return e.abrupt("return",Promise.resolve);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return U.apply(this,arguments)}function U(){return(U=(0,p.Z)((0,m.Z)().mark((function e(n){return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return",v.Db.transaction("rw",v.Db.datas,(0,p.Z)((0,m.Z)().mark((function e(){var t;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Db.datas.where("tag_id").equals(n).toArray();case 2:return t=e.sent,e.abrupt("return",Promise.resolve(t));case 4:case"end":return e.stop()}}),e)})))));case 2:return e.abrupt("return",Promise.resolve([]));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,n,t,r){return K.apply(this,arguments)}function K(){return(K=(0,p.Z)((0,m.Z)().mark((function e(n,t,r,i){return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Db[n].where("_id").equals(t).modify((function(e){e[r]=i}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(e,n){for(var t=Math.random(),r=null,i=0;i<e.length;i++)n.current.includes(e[i]._id)||(r=e[i]);if(r)return t>.5?{_id:r._id,q:"[ ".concat(r.hanzi," ] => ti\u1ebfng Vi\u1ec7t"),answer:"".concat(r.Vietnamese_meaning),type:"c-v"}:{_id:r._id,data:r,q:"[ ".concat(r.Vietnamese_meaning," ] => ti\u1ebfng Trung"),answer:"".concat(r.hanzi),type:"v-c"}};function Y(e){var n=e.tag,t=e.datas,s=(0,a.useState)(!1),c=(0,i.Z)(s,2),u=c[0],l=c[1],d=(0,a.useRef)([]),h=(0,a.useState)({}),f=(0,i.Z)(h,2),_=f[0],x=f[1],w=(0,a.useRef)();(0,a.useEffect)((function(){return(0,p.Z)((0,m.Z)().mark((function e(){var t;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Db.tags.orderBy("id").toArray();case 2:return t=e.sent,e.abrupt("return",t.filter((function(e){return e._id===n._id}))[0].QTestArrayID);case 4:case"end":return e.stop()}}),e)})))().then((function(e){d.current=e,l(e.length===t.length),x(W(t,d))})),(0,p.Z)((0,m.Z)().mark((function e(){return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("tags",n._id,"QTestArrayID",d.current);case 2:d.current=[];case 3:case"end":return e.stop()}}),e)})))}),[]);return(0,z.jsx)("div",{className:o.Z["test-wrapper"],children:u?(0,z.jsxs)("div",{className:o.Z["test-container"],children:[(0,z.jsx)("h3",{children:"\u0110\xe3 ho\xe0n th\xe0nh , b\u1ea5m reset \u0111\u1ec3 test l\u1ea1i"}),(0,z.jsx)("button",{type:"reset",onClick:function(){J("tags",n._id,"QTestArrayID",[]).then((function(){l(!1),d.current=[],console.log("reset temp : ",d.current),x(W(t,d))}))},children:"reset"})]}):(0,z.jsx)("div",{className:o.Z["test-container"],ref:w,"data-match":0,"data-progress":~~(d.current.length/t.length*100),children:d.current.length/t.length===1?(0,z.jsx)("button",{type:"reset",onClick:function(){J("tags",n._id,"QTestArrayID",[]).then((function(){l(!1),d.current=[],console.log("reset temp : ",d.current),x(W(t,d))}))},children:"reset"}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("div",{className:o.Z["test-Question"],children:null===_||void 0===_?void 0:_.q}),(0,z.jsx)("div",{className:o.Z["test-Answer"],children:(0,z.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new FormData(e.target),i=Array.from(n.entries())[0][1],a=function(e,n){if(console.log(e.answer),!e.answer.trim())return{isOk:!0,match:100};var t=(0,r.Z)(e.answer.trim().toLowerCase()).filter((function(e){return![" ",","].includes(e)})),i=(0,r.Z)(n.trim().toLowerCase()).filter((function(e){return![" ",","].includes(e)})),a=.65*t.length,s=0,c=0;if("c-v"===e.type)for(var o=0;o<i.length;o++)t.includes(i[o])&&s++;if("v-c"===e.type){if(!e.data.Vietnamese_meaning.trim())return{isOk:!0,match:100};t.filter((function(e){return!!i.includes(e)&&(s++,!0)}))}for(var u=0;u<i.length;u++)t[u]===i[u]&&c++;return c===t.length?{isOk:!0,match:100}:s>a?{isOk:!0,match:~~(s/t.length*100)}:{isOk:!1,match:~~(s/t.length*100)}}(_,i);if(w.current.dataset.match="match : ".concat(a.match," %"),console.log("match ",a.match),a.isOk){d.current.push(_._id),w.current.style.border="2px solid var(--LimeGreen)";var s=setTimeout((function(){w.current.style.border="2px solid var(--boder-color)",w.current.dataset.match="match : 0 %",x(W(t,d)),clearTimeout(s),e.target.reset()}),1500)}else{w.current.style.border="2px solid var(--BrightRed)";var c=setTimeout((function(){w.current.style.border="2px solid var(--boder-color)",w.current.dataset.match="match : 0 %",clearTimeout(c),e.target.reset()}),1500)}},children:[(0,z.jsx)("input",{type:"search",name:"answer"}),(0,z.jsx)("button",{type:"submit",children:(0,z.jsx)(C.G,{color:"var(--LimeGreen)",icon:N.LEp})})]})})]})})})}function $(e,n){var t=(0,a.useState)(""),r=(0,i.Z)(t,2),s=r[0],c=r[1],u=(0,a.useRef)(),m=(0,a.useState)("viewer"),p=(0,i.Z)(m,2),f=p[0],v=p[1],x=(0,a.useState)([]),w=(0,i.Z)(x,2),j=w[0],y=w[1];(0,a.useImperativeHandle)(n,(function(){return{setTag:c}})),(0,a.useEffect)((function(){B(s._id).then(y)}),[s,f]);var b=(0,a.useRef)();return(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)("div",{className:o.Z.wrapper,children:["viewer"===f&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(E,{ref:b,fn:J}),(0,z.jsx)("div",{ref:u,className:o.Z["list-wrapper"],children:(0,z.jsx)(T.Z,{children:function(e){var n=e.height,t=e.width,r=4;t<920&&(r=3),t<645&&(r=2),t<375&&(r=1);var i=function(e,n){for(var t=[],r=0;r<e.length;r+=n)t.push(e.slice(r,r+n));return t}(j,r);return(0,z.jsx)(D.Ym,{className:"List",columnWidth:t/r-M/r,rowHeight:n/2,innerElementType:(0,a.forwardRef)((function(e,n){var t=e.style,r=(0,h.Z)(e,q);return(0,z.jsx)("div",(0,d.Z)({ref:n,style:(0,d.Z)((0,d.Z)({},t),{},{paddingLeft:M,paddingTop:M})},r))})),rowCount:i.length,columnCount:r,height:n,width:t,children:function(e){var n=e.columnIndex,t=e.rowIndex,r=e.style,a=i[t][n];return a&&(0,z.jsxs)("div",{style:(0,d.Z)((0,d.Z)({},r),{},{left:r.left+M,top:r.top+M,width:r.width-M,height:r.height-M}),className:o.Z["list-item"],children:[(0,z.jsxs)("div",{className:o.Z["item-content"],children:[(0,z.jsx)("div",{className:o.Z.hanzi,onClick:function(){var e=new SpeechSynthesisUtterance(a.hanzi);e.lang="zh-CN",e.volume=1,speechSynthesis.speak(e)},children:a.hanzi}),(0,z.jsx)("div",{className:o.Z.pinyin,children:a.pinyin}),(0,z.jsx)("p",{className:o.Z.description,children:a.Vietnamese_meaning})]}),(0,z.jsxs)("div",{className:o.Z["card-btns"],children:[(0,z.jsx)("input",{type:"checkbox",defaultChecked:a.is_a_learned_word,onChange:function(e){J("datas",a._id,"is_a_learned_word",e.target.checked)}}),(0,z.jsxs)("div",{className:o.Z.btns,children:[(0,z.jsx)("button",{onClick:function(){a.is_a_learned_word&&J("tags",s._id,"QTestArrayID",s.QTestArrayID.filter((function(e){return e!==a._id}))),function(e){return X.apply(this,arguments)}(a._id).then((function(){_.Am.info("deleted a item",{POSITION:_.Am.POSITION.BOTTOM_CENTER}),B(s._id).then(y)}))},children:(0,z.jsx)(C.G,{icon:N.Vui})}),(0,z.jsx)("button",{onClick:function(){var e;null===(e=b.current)||void 0===e||e.setViewDetail(a)},children:(0,z.jsx)("span",{children:(0,z.jsx)(C.G,{icon:N.sqG})})})]})]})]},a._id)}})}})})]}),"addData"===f&&(0,z.jsx)(S,{tag:s}),"test"===f&&(0,z.jsx)(Y,{tag:s,datas:j}),(0,z.jsxs)("div",{className:o.Z.btns,children:[(0,z.jsx)("button",{onClick:function(){v((function(e){return"viewer"===e?"addData":"addData"===e?"viewer":void 0}))},children:(0,z.jsx)(C.G,{icon:N.yXf})}),(0,z.jsx)("button",{onClick:function(){v((function(e){return"viewer"===e?"test":"test"===e?"viewer":void 0}))},children:(0,z.jsx)(C.G,{icon:N.nJ})}),(0,z.jsx)("div",{className:o.Z["search-wrapper"],children:(0,z.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new FormData(e.target),t=Array.from(n.entries()).reduce((function(e,n){var t=(0,i.Z)(n,2),r=t[0],a=t[1];return(0,d.Z)((0,d.Z)({},e),{},(0,l.Z)({},r,a))}),{});(function(e,n){return Q.apply(this,arguments)})(t["search-type"],t["search-value"].trim().toLowerCase()).then((function(e){var n=e.data;y(n)}))},children:[(0,z.jsxs)("select",{name:"search-type",children:[(0,z.jsx)("option",{value:"hanzi",defaultValue:"hanzi",children:"hanzi"}),(0,z.jsx)("option",{value:"pinyin",children:"pinyin"}),(0,z.jsx)("option",{value:"Vietnamese_meaning",children:"Vietnamese"})]}),(0,z.jsxs)("div",{className:o.Z["input-wrapper"],children:[(0,z.jsx)("input",{type:"search",name:"search-value",placeholder:"search ..."}),(0,z.jsx)("button",{type:"submit",children:(0,z.jsx)(C.G,{icon:N.wn1})})]})]})}),(0,z.jsxs)("label",{className:o.Z["slide-input"],children:[(0,z.jsx)("span",{children:"-"}),(0,z.jsx)("input",{onChange:function(e){null===u||void 0===u||u.current.style.setProperty("--Hanzi_FontSize","".concat(e.target.value,"rem"))},type:"range",defaultValue:2.5,step:.5,min:1,max:5}),(0,z.jsx)("span",{children:"+"})]})]})]})})}var ee=(0,a.forwardRef)($),ne=a.lazy((function(){return Promise.resolve().then(t.bind(t,6697))})),te=a.lazy((function(){return t.e(360).then(t.bind(t,3360))})),re=a.lazy((function(){return t.e(130).then(t.bind(t,1130))}));function ie(e,n){var t=(0,a.useRef)(),l=(0,a.useRef)(),d=(0,a.useState)([]),h=(0,i.Z)(d,2),m=h[0],p=h[1],f=(0,a.useState)(""),_=(0,i.Z)(f,2),v=_[0],x=_[1],w=(0,a.useCallback)((function(n){var t=n.detail;if("view_pinyin"===v&&x("viewr_char"),t){var i=(0,r.Z)(t).join(" ").trim().split(/\s+/).filter((function(e){return/[\u4e00-\u9fa5]/g.test(e)})).map((function(e){return{Char_id:(0,s.x0)(5),char:e}})),a=(0,s.x0)(5);p(i),e.onHistoryChange({_id:a,_value:t})}else p([])}),[]);return(0,a.useEffect)((function(){return(0,u.on)("emitData",w),function(){(0,u.S1)("emitData",w)}}),[]),(0,a.useImperativeHandle)(n,(function(){var e;return{setArrayOfHanzi:function(e){if("view_pinyin"!==v){var n=(0,r.Z)(e).join(" ").trim().split(/\s+/).filter((function(e){return/[\u4e00-\u9fa5]/g.test(e)})).map((function(e){return{Char_id:(0,s.x0)(5),char:e}}));p(n)}else(0,u.X$)("toPinyin",e)},setScreen:x,setTag:null===(e=l.current)||void 0===e?void 0:e.setTag,getFormData:w,addTab:function(e){var n;null===(n=t.current)||void 0===n||n.addNewTab(e),m.length&&p([])}}})),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(a.Suspense,{fallback:(0,z.jsx)("div",{children:"Loading..."}),children:["viewr_char"===v&&(0,z.jsxs)("div",{className:o.Z.view_char_wrapper,children:[(0,z.jsx)(c.Z,{ViewPinyinFn:function(e){p([]),x(e)}}),(0,z.jsx)("div",{id:"App-view-id",className:o.Z["App-viewer"],children:m.map((function(n){var t=n.Char_id,r=n.char;return(0,z.jsx)(ne,{character:r,options:e.hanziComponentOptions},t)}))})]}),"note"===v&&(0,z.jsx)(te,{ref:t}),"view_pinyin"===v&&(0,z.jsx)(re,{setScreen:x,hanziComponentOptions:e.hanziComponentOptions})]}),"tags"===v&&(0,z.jsx)(ee,{ref:l})]})}var ae=(0,a.forwardRef)(ie)},7281:function(e,n,t){function r(e,n){document.addEventListener(e,n)}function i(e,n){document.removeEventListener(e,n)}function a(e,n){var t=new CustomEvent(e,{detail:n});document.dispatchEvent(t)}t.d(n,{S1:function(){return i},X$:function(){return a},on:function(){return r}})}}]);
//# sourceMappingURL=297.3c49d393.chunk.js.map