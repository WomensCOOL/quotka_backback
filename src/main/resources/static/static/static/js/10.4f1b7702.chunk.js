(this["webpackJsonpraise-project"]=this["webpackJsonpraise-project"]||[]).push([[10],{343:function(e,n,t){"use strict";var a=t(4),r=t(37),c=t(6),i=t(10),o=t(1),l=t.n(o),d=t(12),b=t(14),s=t(355),j=(t(57),t(2)),h=function(e){var n=e.name,t=e.placeholder,a=e.value,r=e.onChange;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("textarea",{name:n,placeholder:t,value:a,onChange:r,className:"boardTextArea"})})},u=function(e){var n=e.name,t=e.placeholder,a=e.value,r=e.onChange;return Object(j.jsx)("input",{name:n,placeholder:t,onChange:r,value:a,className:"boardInput"})},p=t(324),x=t(11),O=t(26),m=t(5);t(105),t(161);var f,g,v,y,w,C,k=t(93),S=(t(28),t(162),t(99)),N=[188,13],D=Object(b.f)((function(){var e=l.a.useState([{id:"movie",text:"\uc601\ud654"}]),n=Object(i.a)(e,2),t=n[0],a=n[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("h1",{children:" \ucd9c\ucc98 "}),Object(j.jsx)("div",{children:Object(j.jsx)(S.WithContext,{tags:t,delimiters:N,handleDelete:function(e){a(t.filter((function(n,t){return t!==e})))},handleAddition:function(e){a([].concat(Object(k.a)(t),[e]))},handleDrag:function(e,n,r){var c=t.slice();c.splice(n,1),c.splice(r,0,e),a(c)},handleTagClick:function(e){console.log("The tag at index "+e+" was clicked")},inputFieldPosition:"top",placeholder:"\ucd9c\ucc98\ub97c \uc785\ub825\ud558\uc138\uc694.",autocomplete:!0})})]})})),T=t(339);t(353);n.a=Object(b.f)((function(e){var n=e.history,t=Object(x.b)(),a=localStorage.getItem("userId"),b=localStorage.getItem("userName"),m=Object(o.useState)(0),f=Object(i.a)(m,2),g=f[0],v=f[1],y=Object(o.useState)(1),w=Object(i.a)(y,2),C=w[0],k=w[1],S=Object(o.useState)([]),N=Object(i.a)(S,2),M=N[0],R=N[1],B=Object(o.useState)(b),E=Object(i.a)(B,2),J=E[0],_=(E[1],Object(o.useState)({boardTitle:"",boardContent:""})),q=Object(i.a)(_,2),G=q[0],H=q[1],K=G.boardTitle,L=G.boardContent;Object(o.useEffect)((function(){Q()}),[C]);var Q=function(){t(Object(O.d)({page:C})).then((function(e){e.payload.success?(R(e.payload.boards),v(Math.ceil(e.payload.count/10))):alert("\uac8c\uc2dc\uae00\uc744 \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")}))},U=function(e){var n=e.target,t=n.value,a=n.name;H(Object(c.a)(Object(c.a)({},G),{},Object(r.a)({},a,t)))},V=function(e){R(M.filter((function(n){return n._id!==e}))),Q()},X=function(e){if(e.preventDefault(),K)if(L)if(L.length>300)alert("\ub0b4\uc6a9\uc744 300\uc790 \uc774\ub0b4\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694.");else{var n={userFrom:a,boardTitle:K,boardContent:L,boardWriter:J};t(Object(O.f)(n)).then((function(e){e.payload.success?(H({boardTitle:"",boardContent:""}),Q()):alert("\uac8c\uc2dc\uae00 \uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}))}else alert("\ub0b4\uc6a9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.");else alert("\uc81c\ubaa9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.")};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.b,{style:{textDecoration:"none",color:"black"},to:"/playground/boardlist",children:Object(j.jsx)(T.a,{})}),Object(j.jsxs)(F,{children:[Object(j.jsx)(W,{onSubmit:X,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(u,{name:"boardTitle",placeholder:"\uc81c\ubaa9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.",value:K,onChange:U})}),Object(j.jsx)("li",{children:Object(j.jsx)(h,{name:"boardContent",placeholder:"\ub0b4\uc6a9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694.",value:L,onChange:U})}),Object(j.jsx)("li",{children:Object(j.jsx)(D,{})}),Object(j.jsxs)("li",{children:[Object(j.jsx)(d.b,{to:"/playground/board/quotkaId",children:Object(j.jsx)(z,{type:"submit",onClick:X,children:"\uc791\uc131"})}),Object(j.jsx)(A,{type:"submit",onClick:X,children:"\ucde8\uc18c"})]}),Object(j.jsx)("li",{children:Object(j.jsx)(I,{children:"\uac8c\uc2dc\uae00 \uc218\uc815 \ubc0f \uc0ad\uc81c\ub294 \ub9c8\uc774\ud398\uc774\uc9c0\uc5d0\uc11c \uac00\ub2a5\ud569\ub2c8\ub2e4."})})]})}),M&&M.map((function(e,t){return Object(j.jsx)(l.a.Fragment,{children:Object(j.jsx)(s.a,{id:e._id,user:e.userFrom,time:e.createdAt,writer:e.boardWriter,title:e.boardTitle,content:e.boardContent,history:"".concat(n),onRemove:V})},t)})),Object(j.jsx)(P,{children:Object(j.jsx)(p.a,{count:g,page:C,onChange:function(e){var n=parseInt(e.target.textContent);k(n)},shape:"rounded",size:"small",hidePrevButton:!0,hideNextButton:!0})})]})]})}));var F=m.b.div(f||(f=Object(a.a)(["\n  width: 750px;\n  margin: 0 auto;\n  height: 100%;\n"]))),I=m.b.p(g||(g=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  padding-bottom: 30px;\n  color: #de506b;\n  font-size: 13px;\n  padding: 4px 0px;\n"]))),W=m.b.form(v||(v=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),z=m.b.button(y||(y=Object(a.a)(["\n  border-radius: 8px;\n  width: 100px;\n  height: 30px;\n  text-align: center;\n  margin-right: 10px;\n  margin-top: 10px;\n  font-family: 'SCDream5M';\n  cursor: pointer;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  border: none;\n  background: #c5ad81;\n  color: white;\n  &:hover {\n    background: rgba(0, 0, 0, 0.3);\n  }\n"]))),A=m.b.button(w||(w=Object(a.a)(["\n  border-radius: 8px;\n  width: 100px;\n  height: 30px;\n  text-align: center;\n  margin-top: 10px;\n  font-family: 'SCDream5M';\n  cursor: pointer;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  border: none;\n  background: gray;\n  color: white;\n  &:hover {\n    background: rgba(0, 0, 0, 0.3);\n  }\n"]))),P=m.b.div(C||(C=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n"])))},352:function(e,n,t){},353:function(e,n,t){"use strict";t.r(n);var a,r,c,i,o=t(1),l=t(14),d=(t(343),t(354),t(10)),b=t(4),s=t(339),j=t(61),h=t(5),u=t(2),p=h.b.div(a||(a=Object(b.a)(["\n  width: 430px;\n  padding-top: 0rem;\n  font-family: 'SCDream4R';\n  font-size: 13px;\n  font-weight: normal;\n  margin-left: -3px;\n  margin-bottom: 20px;\n"]))),x=function(e){return Object(j.a)(e),Object(u.jsx)(p,{children:Object(u.jsx)("p",{children:"\ucffc\ud2b8\ub9c8\uc2a4\ud130\ub294 \uc5ec\ub7ec\ubd84\ub4e4\uc774 \ub530\ub73b\ud55c \uba85\uc5b8, \uc774\uc57c\uae30\ub97c \uacf5\uc720\ud558\ub294 \uac8c\uc2dc\ud310\uc785\ub2c8\ub2e4. Write a Post \ubc84\ud2bc\uc744 \ud1b5\ud574 \uc5ec\ub7ec\ubd84\ub4e4\uc758 \uc774\uc57c\uae30\ub97c \uacf5\uc720\ud574\uc8fc\uc138\uc694 !"})})},O=t(94),m=t(12),f=Object(h.b)(O.a)(r||(r=Object(b.a)(["\n  border-radius: 8px;\n  width: 130px;\n  height: 35px;\n  text-align: center;\n  margin-right: 10px;\n  font-family: 'SCDream4R';\n  font-weight: light;\n  cursor: pointer;\n  padding-right: 1px;\n  padding-left: 1px;\n  border: none;\n  background: #c5ad81;\n  color: white;\n  &:hover {\n    background: rgba(0, 0, 0, 0.3);\n  }\n"]))),g=function(){return Object(u.jsx)(m.b,{style:{textDecoration:"none",color:"black"},to:"/playground/board",children:Object(u.jsx)(f,{children:"Write a Post"})})},v=t(9),y=t.n(v),w=(t(352),function(e){var n=e.headersName,t=e.children;return Object(u.jsxs)("table",{className:"common-table",children:[Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:n.map((function(e,n){return Object(u.jsx)("td",{className:"common-table-header-column",children:e},n)}))})}),Object(u.jsx)("tbody",{children:t})]})}),C=function(e){var n=e.children;return Object(u.jsx)("td",{className:"common-table-column",children:n})},k=function(e){var n=e.children;return Object(u.jsx)("td",{className:"common-table-column",children:n})},S=h.b.ul(c||(c=Object(b.a)(["\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 2px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n"])));var N=function(){var e=function(){var e=Object(o.useState)({}),n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(o.useEffect)((function(){y.a.get("/playGround").then((function(e){a(e.data)}))}),[]),Object.values(t).map((function(e){return Object(u.jsxs)(k,{children:[Object(u.jsx)(C,{children:e.id}),Object(u.jsx)(C,{children:e.title}),Object(u.jsx)(C,{children:e.author}),Object(u.jsx)(C,{children:e.createAt}),Object(u.jsx)(C,{children:e.count})]},e.id)}))}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.a,{}),Object(u.jsxs)(S,{children:[Object(u.jsx)(x,{}),Object(u.jsx)(g,{})]}),Object(u.jsx)(D,{children:Object(u.jsx)(w,{headersName:["\ubc88\ud638","\uc81c\ubaa9","\uc791\uc131\uc790","\ub4f1\ub85d\uc77c","\uc870\ud68c\uc218"],children:e})})]})},D=h.b.table(i||(i=Object(b.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-collapse: separate;\n  border-spacing: 0 10px;\n\n  .num {\n    width: 5%;\n    text-align: center;\n  }\n  .date {\n    width: 7%;\n  }\n  .title {\n    width: 25%;\n    text-align: center;\n  }\n  .content {\n    width: 63%;\n  }\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 14px;\n    border-top: 1px solid #444444;\n    margin-top: 7px;\n  }\n\n  td {\n    text-aligh: left;\n    padding: 10px;\n    border-bottom: 1px solid #444444;\n    margin-left: 10px;\n  }\n  th {\n    padding: 15px;\n    border-bottom: 1px solid #444444;\n    margin-left: 10px;\n  }\n\n  thead {\n    font-family: 'SCDream-bold';\n    font-weight: 100;\n  }\n"])));n.default=Object(l.f)((function(e){var n=e.match;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.a,{exact:!0,path:n.path,component:N})})}))}}]);
//# sourceMappingURL=10.4f1b7702.chunk.js.map