"use strict";(self.webpackChunkxie_han_zi=self.webpackChunkxie_han_zi||[]).push([[843],{9950:function(e,n){n.Z={"App-viewer":"main_App-viewer__daWhl",view_char_wrapper:"main_view_char_wrapper__GUE+C",wrapper:"main_wrapper__sdIYc",header:"main_header__3tX03","ml-auto":"main_ml-auto__fSPg5","form-wrapper":"main_form-wrapper__WNBNt",view_pinyin_warapper:"main_view_pinyin_warapper__CAMfe",hanzi_:"main_hanzi___mHki6",btns:"main_btns__KQE-4","text-wrapper":"main_text-wrapper__9cRri",char_wrapper:"main_char_wrapper__1xmmw",char_pinyin:"main_char_pinyin__5ZAKQ",char_hanzi:"main_char_hanzi__ryER9",main:"main_main__+3qZg","flex-row":"main_flex-row__0PHK6","main-content":"main_main-content__SWJRq","list-wrapper":"main_list-wrapper__xbh9D","list-item":"main_list-item__h8SV0","item-content":"main_item-content__XzSX-",hanzi:"main_hanzi__cR19-",pinyin:"main_pinyin__sQSS1",description:"main_description__u77sC","card-btns":"main_card-btns__1oma-","slide-input":"main_slide-input__WMIv2","search-wrapper":"main_search-wrapper__AJ+lz","input-wrapper":"main_input-wrapper__bOp7n","test-wrapper":"main_test-wrapper__hq2Dy","test-container":"main_test-container__Zp3Ye","test-Question":"main_test-Question__KkgRR","test-Answer":"main_test-Answer__c9V7X"}},6697:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(1413),a=t(9439),i=t(390),s=t(1828),c=t(6480),o="HanziComponentStyle_wrapper__ePplx",u="HanziComponentStyle_Hanzi-wrapper__IDIbd",l="HanziComponentStyle_quiz-info__KtDWc",d="HanziComponentStyle_pinyin-wrapper__roeuL",m="HanziComponentStyle_controler__ynIIG",p="HanziComponentStyle_btn__azqZ+",h="HanziComponentStyle_right-section__Z2Esh",f=t(9766),_=t(6706),v="Loading_loading-wrapper__5Ti6M",x="Loading_loading__OIcbi",w=t(2559);function j(e,n){var t=e.position;return(0,w.jsx)("div",{style:{position:"fixed"===t?t:"absolute"},className:v,ref:n,children:(0,w.jsx)("div",{className:x})})}var b=(0,i.forwardRef)(j);function g(e){var n=e.character,t=e.options,v=(0,i.useState)(!1),x=(0,a.Z)(v,2),j=x[0],g=x[1],y=(0,i.useState)("animate"),Z=(0,a.Z)(y,2),N=Z[0],C=Z[1],k=(0,i.useState)(!1),z=(0,a.Z)(k,2),S=z[0],D=z[1],T=(0,i.useState)(!1),I=(0,a.Z)(T,2),A=I[0],F=I[1],G=(0,i.useRef)(),R=(0,i.useState)(null),L=(0,a.Z)(R,2),O=L[0],P=L[1],H=(0,i.useRef)(),V=new SpeechSynthesisUtterance(n);V.lang="zh-CN";var E=S?"var(--LimeGreen)":"inherit",q="quiz"===N?"draw mode!":S?"click to pause":"click to animate",M=function(){C((function(e){return"animate"===e?"quiz":"animate"}))};(0,i.useEffect)((function(){g(!0);var e=G.current,a=s.Z.create(e,n,(0,r.Z)((0,r.Z)({},t),{},{onLoadCharDataSuccess:function(){g(!1)},onLoadCharDataError:function(e){X.current.innerHTML="Error: ".concat(e)}}));return P(a),function(){e.innerHTML=null}}),[n,t]),(0,i.useEffect)((function(){"quiz"===N&&O.quiz({onMistake:function(){var e,n;null!==(n=(e=H.current).innerText)&&void 0!==n||(e.innerText="wrong!");var t=setTimeout((function(){clearTimeout(t),H.current.innerText=null}),800)},onCorrectStroke:function(){var e,n;null!==(n=(e=H.current).innerText)&&void 0!==n||(e.innerText="correct!");var t=setTimeout((function(){clearTimeout(t),H.current.innerText=null}),800)},onComplete:function(e){var n=setTimeout((function(){clearTimeout(n),M()}),1e3)}})}),[N,O]);var Q=(0,i.useCallback)((function(){A||"quiz"===N||(F(!0),D(!0),O.animateCharacter({onComplete:function(){F(!1),D(!1)}})),S&&A&&"quiz"!==N?O.pauseAnimation():O.resumeAnimation(),"quiz"!==N&&D(!S)}),[O,S,A,N]),X=(0,i.useRef)(),B=(0,i.useMemo)((function(){return(0,c.ZP)(n,{heteronym:!0})[0].map((function(e,n){return(0,w.jsx)("span",{className:"pinyin",children:e},n)}))}),[n]);return(0,w.jsxs)("div",{className:o,"data-character":n,children:[j&&(0,w.jsx)(b,{ref:X}),"quiz"===N&&(0,w.jsx)("div",{className:l,children:(0,w.jsx)("div",{ref:H})}),(0,w.jsx)("div",{className:u,style:{visibility:"".concat(j?"hidden":"visible")},ref:G,onClick:Q,title:q}),(0,w.jsx)("div",{className:d,children:B}),(0,w.jsxs)("div",{className:m,children:[(0,w.jsx)("button",{className:p,onClick:Q,style:{color:E},title:q,children:S?(0,w.jsx)(f.G,{icon:_.UL8}):(0,w.jsx)(f.G,{icon:_.iiS})}),(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)("button",{className:p,onClick:function(e){e.target.style.color="var(--LimeGreen)",speechSynthesis.speak(V),V.onend=function(){this.style.color="inherit"}.bind(e.target)},children:(0,w.jsx)(f.G,{icon:_.j1t})}),(0,w.jsx)("button",{className:p,onClick:M,style:{color:"".concat("animate"===N?"inherit":"var(--LimeGreen)")},children:(0,w.jsx)(f.G,{icon:_.TzT})})]})]})]})}var y=(0,i.memo)(g)},4473:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(4165),a=t(5861),i=t(9439),s=t(390),c="FormData_wrapper__NyJqU",o="FormData_form-btn-group__67+HP",u="FormData_btnSubmit__LpozE",l="FormData_btnReset__+Cuwk",d=t(9766),m=t(6706),p=t(7281),h=t(2559);var f=function(e){var n=(0,s.useRef)(),t=(0,s.useState)(""),f=(0,i.Z)(t,2),_=f[0],v=f[1],x=(0,s.useState)(!1),w=(0,i.Z)(x,2),j=w[0],b=w[1],g=function(){b((function(e){return!e}))},y=(0,s.useCallback)((function(){g(),console.log("speaker r");var e=document.querySelector("#App-view-id").childNodes;function n(n,t){var r=new SpeechSynthesisUtterance(t);return r.lang="zh-CN",speechSynthesis.speak(r),e[n].scrollIntoView({behavior:"smooth",block:"center"}),e[n].style.borderColor="var(--LimeGreen)",new Promise((function(e){r.onend=function(){e(!0)}}))}new Promise(function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){var i,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=(0,r.Z)().mark((function t(a){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(a,e[a].dataset.character).then((function(){e[a].style.borderColor="transparent"}));case 2:case"end":return t.stop()}}),t)})),s=0;case 2:if(!(s<e.length)){t.next=7;break}return t.delegateYield(i(s),"t0",4);case 4:s++,t.next=2;break;case 7:a(!0);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(){g()}))}),[]);return(0,h.jsx)("div",{id:"form-wrapper",className:c,"data-f":!0,children:(0,h.jsxs)("form",{onReset:function(e){e.preventDefault(),n.current.focus(),v("")},onSubmit:function(e){e.preventDefault(),(0,p.X$)("toPinyin",_),(0,p.X$)("emitData",_),v(""),n.current.focus()},children:[(0,h.jsx)("textarea",{ref:n,className:"textarea",spellCheck:!1,value:_,onChange:function(e){v(e.target.value)},tabIndex:1}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("button",{title:"view pinyin",onClick:function(n){n.preventDefault(),e.ViewPinyinFn("view_pinyin")},children:(0,h.jsx)(d.G,{icon:m.Mdf})}),(0,h.jsx)("button",{type:"submit",tabIndex:2,disabled:!(_.trim().length>0)||j,className:"".concat(_&&u),children:(0,h.jsx)(d.G,{icon:m.XCy})}),(0,h.jsx)("button",{type:"reset",tabIndex:3,disabled:!(_.trim().length>0)||j,className:"".concat(_&&l),children:(0,h.jsx)(d.G,{icon:m.g82})}),(0,h.jsx)("button",{disabled:j,onClick:function(){y()},children:(0,h.jsx)(d.G,{icon:m.AQZ})})]})]})})}},7843:function(e,n,t){t.r(n),t.d(n,{default:function(){return ee}});var r=t(3433),a=t(9439),i=t(390),s=t(810),c=t(4473),o=t(9950),u=t(7281),l=t(4942),d=t(1413),m=t(4925),p=t(4165),h=t(5861),f=t(6480),_=t(2286),v=t(6851),x={wrapper:"Form_wrapper__09h5k","form-header":"Form_form-header__hktGi","close-form":"Form_close-form__GAz5G","Field-group":"Form_Field-group__6OkGQ",label:"Form_label__I4yxr","form-btn-group":"Form_form-btn-group__DLlbt",btnSubmit:"Form_btnSubmit__n5KBY",btnReset:"Form_btnReset__tPmE9",input:"Form_input__emf-M"},w=t(9766),j=t(6706),b=t(2559);function g(e,n){var t=(0,i.useState)(!0),c=(0,a.Z)(t,2),o=c[0],u=c[1],m=(0,i.useRef)(),g=(0,i.useRef)();return(0,i.useImperativeHandle)(n,(function(){return{toggleForm:function(){u((function(e){return!e}))}}})),o&&(0,b.jsxs)("div",{id:"form-wrapper",className:x.wrapper,children:[(0,b.jsxs)("div",{className:x["form-header"],children:[(0,b.jsx)("span",{children:e.tag.tag_name}),(0,b.jsx)("button",{className:x["close-form"],onClick:function(){e.setToggleMode((function(e){return"viewer"===e?"addData":"addData"===e?"viewer":void 0}))},children:(0,b.jsx)(w.G,{icon:j.g82})})]}),(0,b.jsxs)("form",{onReset:function(e){e.target.reset(),m.current.focus()},onSubmit:function(n){return function(e,n,t){n.preventDefault();var i=new FormData(n.target);n.target.reset();var c=Array.from(i.entries()).reduce((function(e,n){var t=(0,a.Z)(n,2),r=t[0],i=t[1];return(0,d.Z)((0,d.Z)({},e),{},(0,l.Z)({},r,i))}),{});(0,r.Z)(c.hanzi).filter((function(e){return/[\u4e00-\u9fa5]/g.test(e)})).length>0?v.Db.transaction("rw",v.Db.datas,(0,h.Z)((0,p.Z)().mark((function n(){return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.Db.datas.add((0,d.Z)((0,d.Z)({_id:(0,s.x0)(5),tag_id:e.tag._id},c),{},{is_a_learned_word:!1,view_count:0,createdAt:new Date})).then((function(){t.current.focus(),_.Am.success("Add data sucessfully!",{position:_.Am.POSITION.BOTTOM_LEFT})}));case 2:case"end":return n.stop()}}),n)})))).catch(console.error):(t.current.focus(),_.Am.error("Faild to add data!",{position:_.Am.POSITION.BOTTOM_LEFT}))}(e,n,m)},children:[(0,b.jsxs)("div",{className:x["Field-group"],children:[(0,b.jsxs)("div",{className:x.item,children:[(0,b.jsx)("div",{className:x.label,children:"hanzi"}),(0,b.jsx)("input",{tabIndex:1,className:x.input,name:"hanzi",ref:m,onBlur:function(e){var n=e.target.value,t=n.length>2?{segment:"segmentit",group:!0}:{heteronym:!0};g.current.value=(0,f.ZP)(n,t).join(" , ")}})]}),(0,b.jsxs)("div",{className:x.item,children:[(0,b.jsx)("div",{className:x.label,children:"Pinyin"}),(0,b.jsx)("input",{tabIndex:-1,className:x.input,ref:g,name:"pinyin"})]})]}),(0,b.jsxs)("div",{className:x["Field-group"],children:[(0,b.jsxs)("div",{className:x.item,children:[(0,b.jsx)("div",{className:x.label,children:"Han Viet"}),(0,b.jsx)("input",{tabIndex:2,className:x.input,name:"han_viet"})," "]}),(0,b.jsxs)("div",{className:x.item,children:[(0,b.jsx)("div",{className:x.label,children:"Vietnamese"}),(0,b.jsx)("input",{tabIndex:2,className:x.input,name:"Vietnamese_meaning"})," "]})]}),(0,b.jsx)("div",{className:x.label,children:"note"}),(0,b.jsx)("textarea",{className:x.input,spellCheck:!1,name:"note",tabIndex:3}),(0,b.jsxs)("div",{className:x["form-btn-group"],children:[(0,b.jsx)("button",{type:"submit",tabIndex:4,className:x.btnSubmit,children:(0,b.jsx)(w.G,{icon:j.XCy})}),(0,b.jsx)("button",{type:"reset",tabIndex:5,className:x.btnReset,children:(0,b.jsx)(w.G,{icon:j.g82})})]})]})]})}var y=(0,i.forwardRef)(g),Z=t(3567),N=t(6118),C="checkbox_regular-checkbox__c1J35",k=t(8672),z=t(6697),S="styles_ViewDetail-wrapper__twP2C",D="styles_header__vLVlz",T="styles_close-form__SMAWn",I="styles_HanziComponents-wrapper__sXnJP",A="styles_content-wrapper__zJ-Ts",F="styles_list__Ubz9m",G="styles_footer__s4H31";function R(e,n){var t=e.fn,s=(0,i.useContext)(k.a7),c=(0,i.useState)({}),o=(0,a.Z)(c,2),u=o[0],l=o[1],d=null!==u&&void 0!==u&&u.hanzi?(0,r.Z)(u.hanzi):[];(0,i.useImperativeHandle)(n,(function(){return{setViewDetail:l}}));var m=(0,i.useCallback)((function(e){return null!==u&&void 0!==u&&u.hanzi?e.length>1?e.map((function(e,n){return(0,b.jsx)(z.default,{character:e,options:s.hanziComponentOptions},n)})):(0,b.jsx)(z.default,{character:e[0],options:s.hanziComponentOptions}):null}),[u]);return(null===u||void 0===u?void 0:u.hanzi)&&(0,b.jsxs)("div",{className:S,children:[(0,b.jsx)("div",{className:D,children:(0,b.jsx)("button",{className:T,onClick:function(){t("datas",u._id,"view_count",u.view_count+1),l({})},children:(0,b.jsx)(w.G,{icon:j.$9F})})}),(0,b.jsx)("div",{className:I,children:m(d)}),(0,b.jsxs)("div",{className:A,children:[(0,b.jsxs)("ul",{className:F,children:[(0,b.jsxs)("li",{children:["hanzi : ",(0,b.jsx)("span",{children:u.hanzi})," "]}),(0,b.jsxs)("li",{children:["pinyin : ",(0,b.jsx)("span",{children:u.pinyin})," "]}),(0,b.jsxs)("li",{children:["Han Viet : ",(0,b.jsx)("span",{children:u.han_viet})]}),(0,b.jsxs)("li",{children:["Vietnamese : ",(0,b.jsx)("span",{children:u.Vietnamese_meaning})]})]}),(0,b.jsx)("div",{dangerouslySetInnerHTML:{__html:u.note}}),(0,b.jsxs)("div",{className:G,children:[(0,b.jsxs)("span",{children:["learned word "," : ",(0,b.jsx)("input",{className:C,type:"checkbox",id:"checkbox-1-2",defaultChecked:u.is_a_learned_word,onChange:function(e){return t("datas",u._id,"is_a_learned_word",e.target.checked)}}),(0,b.jsx)("label",{htmlFor:"checkbox-1-2"})]}),(0,b.jsxs)("span",{children:[(0,b.jsx)(w.G,{icon:j.Mdf,color:"hsl(163, 72%, 41%)"})," ",u.view_count]})]})]})]})}var L=(0,i.forwardRef)(R),O=["style"],P=16;function H(){return(H=(0,h.Z)((0,p.Z)().mark((function e(n,t){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.Db.transaction("rw",v.Db.datas,(0,h.Z)((0,p.Z)().mark((function e(){var a;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Db.datas.orderBy("_id").filter((function(e){var a=e[n].split(" "),i=t.split(" ");return"hanzi"===n&&(a=(0,r.Z)(e.hanzi)),a.some((function(e){return i.includes(e.toLowerCase())}))})).toArray();case 2:return a=e.sent,e.abrupt("return",Promise.resolve({data:a}));case 4:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=(0,h.Z)((0,p.Z)().mark((function e(n){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Db.datas.where("_id").equals(n).delete();case 2:return e.abrupt("return",Promise.resolve);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return q.apply(this,arguments)}function q(){return(q=(0,h.Z)((0,p.Z)().mark((function e(n){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return",v.Db.transaction("rw",v.Db.datas,(0,h.Z)((0,p.Z)().mark((function e(){var t;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Db.datas.where("tag_id").equals(n).toArray();case 2:return t=e.sent,e.abrupt("return",Promise.resolve(t));case 4:case"end":return e.stop()}}),e)})))));case 2:return e.abrupt("return",Promise.resolve([]));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,n,t,r){return Q.apply(this,arguments)}function Q(){return(Q=(0,h.Z)((0,p.Z)().mark((function e(n,t,r,a){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Db[n].where("_id").equals(t).modify((function(e){e[r]=a}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(e,n){for(var t=Math.random(),r=null,a=0;a<e.length;a++)n.current.includes(e[a]._id)||(r=e[a]);if(r)return t>.5?{_id:r._id,q:"[ ".concat(r.hanzi," ] => ti\u1ebfng Vi\u1ec7t"),answer:"".concat(r.Vietnamese_meaning),type:"c-v"}:{_id:r._id,data:r,q:"[ ".concat(r.Vietnamese_meaning," ] => ti\u1ebfng Trung"),answer:"".concat(r.hanzi),type:"v-c"}};function B(e){var n=e.tag,t=e.datas,s=(0,i.useState)(!1),c=(0,a.Z)(s,2),u=c[0],l=c[1],d=(0,i.useRef)([]),m=(0,i.useState)({}),f=(0,a.Z)(m,2),_=f[0],x=f[1],g=(0,i.useRef)();(0,i.useEffect)((function(){return(0,h.Z)((0,p.Z)().mark((function e(){var t;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Db.tags.orderBy("id").toArray();case 2:return t=e.sent,e.abrupt("return",t.filter((function(e){return e._id===n._id}))[0].QTestArrayID);case 4:case"end":return e.stop()}}),e)})))().then((function(e){d.current=e,l(e.length===t.length),x(X(t,d))})),(0,h.Z)((0,p.Z)().mark((function e(){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("tags",n._id,"QTestArrayID",d.current);case 2:d.current=[];case 3:case"end":return e.stop()}}),e)})))}),[]);return(0,b.jsx)("div",{className:o.Z["test-wrapper"],children:u?(0,b.jsxs)("div",{className:o.Z["test-container"],children:[(0,b.jsx)("h3",{children:"\u0110\xe3 ho\xe0n th\xe0nh"}),(0,b.jsx)("button",{type:"reset",onClick:function(){M("tags",n._id,"QTestArrayID",[]).then((function(){l(!1),d.current=[],console.log("reset temp : ",d.current),x(X(t,d))}))},children:"reset"})]}):(0,b.jsx)("div",{className:o.Z["test-container"],ref:g,"data-match":0,"data-progress":~~(d.current.length/t.length*100),children:d.current.length/t.length===1?(0,b.jsx)("button",{type:"reset",onClick:function(){M("tags",n._id,"QTestArrayID",[]).then((function(){l(!1),d.current=[],console.log("reset temp : ",d.current),x(X(t,d))}))},children:"reset"}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:o.Z["test-Question"],children:null===_||void 0===_?void 0:_.q}),(0,b.jsx)("div",{className:o.Z["test-Answer"],children:(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new FormData(e.target),a=Array.from(n.entries())[0][1],i=function(e,n){if(console.log(e.answer),!e.answer.trim())return{isOk:!0,match:100};var t=(0,r.Z)(e.answer.trim().toLowerCase()).filter((function(e){return![" ",","].includes(e)})),a=(0,r.Z)(n.trim().toLowerCase()).filter((function(e){return![" ",","].includes(e)})),i=.65*t.length,s=0,c=0;if("c-v"===e.type)for(var o=0;o<a.length;o++)t.includes(a[o])&&s++;if("v-c"===e.type){if(!e.data.Vietnamese_meaning.trim())return{isOk:!0,match:100};t.filter((function(e){return!!a.includes(e)&&(s++,!0)}))}for(var u=0;u<a.length;u++)t[u]===a[u]&&c++;return c===t.length?{isOk:!0,match:100}:s>i?{isOk:!0,match:~~(s/t.length*100)}:{isOk:!1,match:~~(s/t.length*100)}}(_,a);if(g.current.dataset.match="match : ".concat(i.match," %"),console.log("match ",i.match),i.isOk){d.current.push(_._id),g.current.style.border="2px solid var(--LimeGreen)";var s=setTimeout((function(){g.current.style.border="2px solid var(--boder-color)",g.current.dataset.match="match : 0 %",x(X(t,d)),clearTimeout(s),e.target.reset()}),1500)}else{g.current.style.border="2px solid var(--BrightRed)";var c=setTimeout((function(){g.current.style.border="2px solid var(--boder-color)",g.current.dataset.match="match : 0 %",clearTimeout(c),e.target.reset()}),1500)}},children:[(0,b.jsx)("input",{type:"search",name:"answer"}),(0,b.jsx)("button",{type:"submit",children:(0,b.jsx)(w.G,{color:"var(--LimeGreen)",icon:j.LEp})})]})})]})})})}function U(e,n){var t=(0,i.useState)(""),r=(0,a.Z)(t,2),s=r[0],c=r[1],u=(0,i.useRef)(),p=(0,i.useState)("viewer"),h=(0,a.Z)(p,2),f=h[0],v=h[1],x=(0,i.useState)([]),g=(0,a.Z)(x,2),k=g[0],z=g[1];(0,i.useImperativeHandle)(n,(function(){return{setTag:c}})),(0,i.useEffect)((function(){E(s._id).then(z)}),[s,f]);var S=(0,i.useRef)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:o.Z.wrapper,children:["viewer"===f&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(L,{ref:S,fn:M}),(0,b.jsx)("div",{ref:u,className:o.Z["list-wrapper"],children:(0,b.jsx)(N.Z,{children:function(e){var n=e.height,t=e.width,r=5;t<920&&(r=4),t<645&&(r=3),t<375&&(r=2);var a=function(e,n){for(var t=[],r=0;r<e.length;r+=n)t.push(e.slice(r,r+n));return t}(k,r);return(0,b.jsx)(Z.Ym,{className:"List",columnWidth:t/r-P/r,rowHeight:n/2,innerElementType:(0,i.forwardRef)((function(e,n){var t=e.style,r=(0,m.Z)(e,O);return(0,b.jsx)("div",(0,d.Z)({ref:n,style:(0,d.Z)((0,d.Z)({},t),{},{paddingLeft:P,paddingTop:P})},r))})),rowCount:a.length,columnCount:r,height:n,width:t,children:function(e){var n=e.columnIndex,t=e.rowIndex,r=e.style,i=a[t][n];return i&&(0,b.jsxs)("div",{style:(0,d.Z)((0,d.Z)({},r),{},{left:r.left+P,top:r.top+P,width:r.width-P,height:r.height-P}),className:o.Z["list-item"],children:[(0,b.jsxs)("div",{className:o.Z["item-content"],children:[(0,b.jsx)("div",{className:o.Z.hanzi,onClick:function(){var e=new SpeechSynthesisUtterance(i.hanzi);e.lang="zh-CN",e.volume=1,speechSynthesis.speak(e)},children:i.hanzi}),(0,b.jsx)("div",{className:o.Z.pinyin,children:i.pinyin}),(0,b.jsx)("p",{className:o.Z.description,children:i.Vietnamese_meaning})]}),(0,b.jsxs)("div",{className:o.Z["card-btns"],children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,b.jsx)("input",{className:C,type:"checkbox",defaultChecked:i.is_a_learned_word,onChange:function(e){M("datas",i._id,"is_a_learned_word",e.target.checked)},id:"".concat(i._id)}),(0,b.jsx)("label",{htmlFor:"".concat(i._id)})]}),(0,b.jsxs)("div",{className:o.Z.btns,children:[(0,b.jsx)("button",{onClick:function(){i.is_a_learned_word&&M("tags",s._id,"QTestArrayID",s.QTestArrayID.filter((function(e){return e!==i._id}))),function(e){return V.apply(this,arguments)}(i._id).then((function(){_.Am.info("deleted a item",{POSITION:_.Am.POSITION.BOTTOM_CENTER}),E(s._id).then(z)}))},children:(0,b.jsx)(w.G,{icon:j.Vui})}),(0,b.jsx)("button",{onClick:function(){var e;null===(e=S.current)||void 0===e||e.setViewDetail(i)},children:(0,b.jsx)("span",{children:(0,b.jsx)(w.G,{icon:j.sqG})})})]})]})]},i._id)}})}})})]}),"addData"===f&&(0,b.jsx)("div",{className:o.Z["form-wrapper"],children:(0,b.jsx)(y,{tag:s,setToggleMode:v})}),"test"===f&&(0,b.jsx)(B,{tag:s,datas:k}),!("addData"===f)&&(0,b.jsx)("div",{className:o.Z.btns,children:(0,b.jsxs)("div",{style:{borderTop:"1px solid var(--border-color)",display:"flex",padding:" 0px 12px",flexGrow:1},children:[!("test"===f)&&(0,b.jsx)("button",{onClick:function(){v((function(e){return"viewer"===e?"addData":"addData"===e?"viewer":void 0}))},children:"addData"===f?(0,b.jsx)(w.G,{icon:j.g82}):(0,b.jsx)(w.G,{icon:j.yXf})}),!("addData"===f)&&(0,b.jsx)("button",{onClick:function(){v((function(e){return"viewer"===e?"test":"test"===e?"viewer":void 0}))},children:"test"===f?(0,b.jsx)(w.G,{icon:j.g82}):(0,b.jsx)(w.G,{icon:j.Psp})}),!("test"===f||"addData"===f)&&(0,b.jsx)("div",{className:o.Z["search-wrapper"],children:(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new FormData(e.target),t=Array.from(n.entries()).reduce((function(e,n){var t=(0,a.Z)(n,2),r=t[0],i=t[1];return(0,d.Z)((0,d.Z)({},e),{},(0,l.Z)({},r,i))}),{});(function(e,n){return H.apply(this,arguments)})(t["search-type"],t["search-value"].trim().toLowerCase()).then((function(e){var n=e.data;z(n)}))},children:[(0,b.jsxs)("select",{name:"search-type",children:[(0,b.jsx)("option",{value:"hanzi",defaultValue:"hanzi",children:"hanzi"}),(0,b.jsx)("option",{value:"pinyin",children:"pinyin"}),(0,b.jsx)("option",{value:"Vietnamese_meaning",children:"Vietnamese"})]}),(0,b.jsxs)("div",{className:o.Z["input-wrapper"],children:[(0,b.jsx)("input",{type:"search",name:"search-value",placeholder:"search ..."}),(0,b.jsx)("button",{type:"submit",children:(0,b.jsx)(w.G,{icon:j.wn1})})]})]})}),!("test"===f||"addData"===f)&&(0,b.jsxs)("label",{className:o.Z["slide-input"],children:[(0,b.jsx)("span",{children:"-"}),(0,b.jsx)("input",{onChange:function(e){null===u||void 0===u||u.current.style.setProperty("--Hanzi_FontSize","".concat(e.target.value,"rem"))},type:"range",defaultValue:2.5,step:.5,min:1,max:5}),(0,b.jsx)("span",{children:"+"})]})]})})]})})}var W=(0,i.forwardRef)(U),J=i.lazy((function(){return Promise.resolve().then(t.bind(t,6697))})),K=i.lazy((function(){return t.e(360).then(t.bind(t,3360))})),Y=i.lazy((function(){return t.e(130).then(t.bind(t,1130))}));function $(e,n){var t=(0,i.useRef)(),l=(0,i.useRef)(),d=(0,i.useState)([]),m=(0,a.Z)(d,2),p=m[0],h=m[1],f=(0,i.useState)(""),_=(0,a.Z)(f,2),v=_[0],x=_[1],w=(0,i.useCallback)((function(n){var t=n.detail;if("view_pinyin"===v&&x("viewr_char"),t){var a=(0,r.Z)(t).join(" ").trim().split(/\s+/).filter((function(e){return/[\u4e00-\u9fa5]/g.test(e)})).map((function(e){return{Char_id:(0,s.x0)(5),char:e}})),i=(0,s.x0)(5);h(a),e.onHistoryChange({_id:i,_value:t})}else h([])}),[]);return(0,i.useEffect)((function(){return(0,u.on)("emitData",w),function(){(0,u.S1)("emitData",w)}}),[]),(0,i.useImperativeHandle)(n,(function(){var e;return{setArrayOfHanzi:function(e){if("view_pinyin"!==v){var n=(0,r.Z)(e).join(" ").trim().split(/\s+/).filter((function(e){return/[\u4e00-\u9fa5]/g.test(e)})).map((function(e){return{Char_id:(0,s.x0)(5),char:e}}));h(n)}else(0,u.X$)("toPinyin",e)},setScreen:x,setTag:null===(e=l.current)||void 0===e?void 0:e.setTag,getFormData:w,addTab:function(e){var n;null===(n=t.current)||void 0===n||n.addNewTab(e),p.length&&h([])}}})),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(i.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading..."}),children:["viewr_char"===v&&(0,b.jsxs)("div",{className:o.Z.view_char_wrapper,children:[(0,b.jsx)(c.Z,{ViewPinyinFn:function(e){h([]),x(e)}}),(0,b.jsx)("div",{id:"App-view-id",className:o.Z["App-viewer"],children:p.map((function(n){var t=n.Char_id,r=n.char;return(0,b.jsx)(J,{character:r,options:e.hanziComponentOptions},t)}))})]}),"note"===v&&(0,b.jsx)(K,{ref:t}),"view_pinyin"===v&&(0,b.jsx)(Y,{setScreen:x,hanziComponentOptions:e.hanziComponentOptions})]}),"tags"===v&&(0,b.jsx)(W,{ref:l})]})}var ee=(0,i.forwardRef)($)},7281:function(e,n,t){function r(e,n){document.addEventListener(e,n)}function a(e,n){document.removeEventListener(e,n)}function i(e,n){var t=new CustomEvent(e,{detail:n});document.dispatchEvent(t)}t.d(n,{S1:function(){return a},X$:function(){return i},on:function(){return r}})}}]);
//# sourceMappingURL=843.c51fe6d1.chunk.js.map