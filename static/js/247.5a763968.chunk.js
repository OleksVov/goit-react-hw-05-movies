"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(t,e,n){n.r(e);var r=n(5861),a=n(9439),c=n(4687),u=n.n(c),s=n(2791),i=n(7689),o=n(3675),p=n(184);e.default=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],f=(0,i.UO)().movieId;return(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.y)(f);case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[f]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Cast:"}),!n.length&&(0,p.jsx)("p",{children:"We don't have any cast for this movie"})||(0,p.jsx)("ul",{children:n.map((function(t){return(0,p.jsxs)("li",{children:[t.profile_path&&(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.profile_path),alt:t.name}),(0,p.jsx)("p",{children:t.name})]},t.id)}))})]})}},3675:function(t,e,n){n.d(e,{Bt:function(){return f},Mc:function(){return o},Tg:function(){return i},qF:function(){return h},y:function(){return p}});var r=n(5861),a=n(4687),c=n.n(a),u=n(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="8d83f7efdfaf711afea4c7df39bd5119",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/week?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.5a763968.chunk.js.map