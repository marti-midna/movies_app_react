"use strict";(self.webpackChunkmovies_app_react=self.webpackChunkmovies_app_react||[]).push([[753],{752:function(e,t,n){n.d(t,{S:function(){return p}});var r="styles_Carditem__GtNwi",i="styles_Btns__LdWly",a="styles_TitleYearFilm__ymwuj",s="styles_ImgFilm__x-8b0",o="styles_DescriptionTitle__Hug5F",c="styles_Genres__uRX6X",u=n(457),l=n(504),d=n(184);function p(e){var t=e.cardData;return(0,d.jsxs)("div",{className:r,children:[(0,d.jsxs)("div",{className:i,children:[(0,d.jsx)(l.rU,{to:"/edit-movie/".concat(t.id),style:{textDecoration:"none"},children:(0,d.jsx)("button",{children:"\u270f\ufe0f"})}),(0,d.jsx)("button",{onClick:function(){return e=t.id,void(0,u.Zf)(e).then((function(){window.location.reload(!1)}));var e},children:"\u2716\ufe0f"})]}),(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("h2",{children:null===t||void 0===t?void 0:t.title}),(0,d.jsxs)("p",{children:["(",null===t||void 0===t?void 0:t.year,")"]})]}),(0,d.jsx)("div",{className:s,children:(0,d.jsx)("img",{src:null===t||void 0===t?void 0:t.poster,alt:null===t||void 0===t?void 0:t.title})}),(0,d.jsx)("div",{className:o,children:(0,d.jsx)("p",{children:null===t||void 0===t?void 0:t.description})}),(0,d.jsx)("div",{className:c,children:(0,d.jsx)("ul",{children:t.genres&&t.genres.map((function(e,t){return(0,d.jsx)("li",{children:e},t)}))})})]},t.id)}},204:function(e,t,n){n.d(t,{I:function(){return p}});var r=n(861),i=n(885),a=n(757),s=n.n(a),o="styles_Form__YcJeC",c=n(791),u=n(457),l=n(871),d=n(184);function p(e){var t=e.completeCallback,n=e.dicoadAddMoviechehofattounaput,a=e.callType,p=(0,c.useState)(""),h=(0,i.Z)(p,2),f=h[0],v=h[1],m=(0,c.useState)(""),x=(0,i.Z)(m,2),y=x[0],g=x[1],j=(0,c.useState)(""),_=(0,i.Z)(j,2),b=_[0],k=_[1],S=(0,c.useState)(""),w=(0,i.Z)(S,2),C=w[0],N=w[1],T=(0,c.useState)(""),Z=(0,i.Z)(T,2),O=Z[0],M=Z[1],D=(0,l.TH)("").pathname.split("/").reverse()[0],q=function(e){return e.split(",")},E=function(){var e=(0,r.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),console.log("--\x3e>>>POST TUO QUI",{title:f,year:y,genres:q(b),poster:C,description:O}),"addMovie"!==a){e.next=8;break}return e.next=5,(0,u.dO)({title:f,year:y,genres:q(b),poster:C,description:O});case 5:t(),e.next=11;break;case 8:return e.next=10,(0,u.uO)(D,{title:f,year:y,genres:q(b),poster:C,description:O});case 10:n();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.jsx)("div",{className:o,children:(0,d.jsxs)("form",{onSubmit:E,children:[(0,d.jsx)("input",{value:f,onChange:function(e){return v(e.target.value)},type:"text",id:"title",name:"title",placeholder:"titolo film",required:!0}),(0,d.jsx)("input",{value:C,onChange:function(e){return N(e.target.value)},type:"text",id:"poster",name:"poster",placeholder:"poster",required:!0}),(0,d.jsx)("input",{value:y,onChange:function(e){return g(e.target.value)},type:"text",id:"year",name:"year",placeholder:"year",required:!0}),(0,d.jsx)("input",{value:O,onChange:function(e){return M(e.target.value)},type:"text",id:"description",name:"description",placeholder:"description",maxLength:"165",required:!0}),(0,d.jsx)("input",{value:b,onChange:function(e){return k(e.target.value)},type:"text",id:"genre",name:"genre",placeholder:"genere",maxLength:"62",required:!0}),(0,d.jsx)("input",{type:"submit",value:"Conferma"})]})})}},708:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(885),i="style_EditMovie__-Pt6G",a="style_ModifySection__Ssjog",s=n(204),o=n(871),c=n(791),u=n(457),l=n(752),d=n(184),p=function(e){e.isVisible;var t=e.setModalVisibility,n=e.speaktoalertstate,p=(0,o.TH)(),h=(0,o.s0)(),f=(0,c.useState)({}),v=(0,r.Z)(f,2),m=v[0],x=v[1],y=p.pathname.split("/").reverse()[0];(0,c.useEffect)((function(){(0,u.XT)(y).then((function(e){return x(e)}))}),[y]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:i,children:[console.log(m),(0,d.jsx)(l.S,{cardData:m}),(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("h2",{children:"Modifica i campi della card"}),(0,d.jsx)(s.I,{setModalVisibility:t,dicoadAddMoviechehofattounaput:function(){console.log("hai fatto una put, ssei su editmovie, vai a parlare con app"),n({visible:!0,content:"La Card \xe8 stata modificata"}),h("/")},callType:"PUT"})]})]})})}},457:function(e,t,n){n.d(t,{XT:function(){return s},Zf:function(){return c},dO:function(){return u},uO:function(){return l}});var r=n(861),i=n(757),a=n.n(i);function s(){return o.apply(this,arguments)}function o(){return o=(0,r.Z)(a().mark((function e(){var t,n,r,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",e.next=3,fetch("https://edgemony-backend.herokuapp.com/movies/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,console.log(n,r),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}var c=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://edgemony-backend.herokuapp.com/movies/".concat(t),{method:"DELETE",headers:{"content-type":"application/JSON"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://edgemony-backend.herokuapp.com/movies",{method:"POST",headers:{"content-type":"application/JSON"},body:JSON.stringify(t)});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e,t){return fetch("".concat("https://edgemony-backend.herokuapp.com/movies","/").concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)})}}}]);
//# sourceMappingURL=editmovie.24d87bc8.chunk.js.map