"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(687),u=t.n(c),s=t(675),i=t(791),o=t(689),f=t(184);n.default=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],p=(0,o.UO)().movieId;return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Bt)(p);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[p]),console.log(t),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Reviews:"}),!t.length&&(0,f.jsx)("p",{children:"We don't have any reviews for this movie"})||(0,f.jsx)("ul",{children:t.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("h2",{children:e.author}),(0,f.jsx)("p",{children:e.content})]},e.id)}))})]})}},675:function(e,n,t){t.d(n,{Bt:function(){return p},Mc:function(){return o},Tg:function(){return i},qF:function(){return h},y:function(){return f}});var r=t(861),a=t(687),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="8d83f7efdfaf711afea4c7df39bd5119",i=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/trending/movie/week?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&").concat(n));case 2:return t=e.sent,console.log(t),e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.9c470b5e.chunk.js.map