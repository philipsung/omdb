(this.webpackJsonpaligent=this.webpackJsonpaligent||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),c=s(7),r=s.n(c),a=(s(14),s(2)),o=(s(15),s(3)),l=s.n(o),u=s(4),j=(s(17),s(5)),d=s(8),b=s(9),h=function(){function e(){Object(d.a)(this,e)}return Object(b.a)(e,null,[{key:"getLoadStatus",value:function(){return this.isLoading}},{key:"getResultCount",value:function(){return this.query.resultCount}},{key:"nextPageAvailable",value:function(){return!(this.query.nextPage>this.query.pageLimit)}},{key:"setQuery",value:function(e){this.query=Object(j.a)({},e)}},{key:"setSearchLimits",value:function(e){this.query.resultCount=e,this.query.pageLimit=Math.ceil(e/10)}},{key:"queryAPI",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,s=[],e.prev=2,e.next=5,fetch(t);case 5:return i=e.sent,e.next=8,i.json();case 8:return s=e.sent,this.isLoading=!1,e.abrupt("return",s);case 13:return e.prev=13,e.t0=e.catch(2),console.error(e.t0),this.isLoading=!1,e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,this,[[2,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getNextPage",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.nextPageAvailable||!1!==this.isLoading){e.next=7;break}return s="https://www.omdbapi.com/?apikey=19bc8d19&s=".concat(this.query.text,"&y=").concat(this.query.year,"&type=").concat(this.query.type,"&page=").concat(this.query.nextPage),this.query.nextPage++,e.next=5,this.queryAPI(s);case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeDuplicates",value:function(e){if(e)return Array.from(new Set(e.map((function(e){return e.imdbID})))).map((function(t){return e.find((function(e){return e.imdbID===t}))}))}}]),e}();h.isLoading=!1,h.query={text:"",year:"",type:"",season:"",nextPage:"",pageLimit:"",resultCount:""};var m=h,O=s(0);function x(e){var t=Object(i.useState)(""),s=Object(a.a)(t,2),n=s[0],c=s[1],r=Object(i.useState)(""),o=Object(a.a)(r,2),j=o[0],d=o[1],b=Object(i.useState)(""),h=Object(a.a)(b,2),x=h[0],f=h[1],v=Object(i.useState)(""),p=Object(a.a)(v,2),g=p[0],y=p[1],S=Object(i.useState)(""),w=Object(a.a)(S,2),D=w[0],C=w[1],I=(new Date).getFullYear(),k=function(){var t=Object(u.a)(l.a.mark((function t(s){var i,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),C(""),e.onMovieChange([]),m.setQuery({text:n,year:x,type:j,season:g,nextPage:2}),i="https://www.omdbapi.com/?apikey=19bc8d19&",i="episode"===j?i+"t=".concat(n,"&season=").concat(g):i+"s=".concat(n,"&y=").concat(x,"&type=").concat(j,"&page=1"),t.next=8,m.queryAPI(i);case 8:if(null!==(c=t.sent)&&"False"!==c.Response){t.next=14;break}return C("failed"),t.abrupt("return");case 14:m.setSearchLimits(c.totalResults?c.totalResults:0),r=m.removeDuplicates("episode"===j?c.Episodes:c.Search),e.onMovieChange(r);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{id:"search-form",onSubmit:k,children:[Object(O.jsxs)("div",{id:"form-text",children:[Object(O.jsx)("label",{htmlFor:"year",children:Object(O.jsx)("button",{className:"search-label",type:"submit",children:Object(O.jsx)("i",{className:"fas fa-search"})})}),Object(O.jsx)("input",{className:"text-input",type:"text",name:"year",placeholder:"E.g. Parasite",minLength:"3",onChange:function(e){return c(e.target.value)}})]}),Object(O.jsxs)("div",{id:"form-parameters",children:[Object(O.jsx)("div",{id:"form-parameters-left",children:"episode"!==j?Object(O.jsxs)(O.Fragment,{children:[" ",Object(O.jsx)("label",{className:"form-filter-label",htmlFor:"queryYear",children:"YEAR"}),Object(O.jsx)("input",{className:"year-input",type:"number",name:"queryYear",min:"1880",max:I,maxLength:"4",value:x,onChange:function(e){return f(e.target.value)}})]}):null}),Object(O.jsxs)("div",{id:"form-parameters-right",onChange:function(e){return d(e.target.value)},children:[Object(O.jsx)("label",{className:"form-filter-label",htmlFor:"queryType",children:"TYPE"}),Object(O.jsx)("input",{type:"radio",value:"",name:"queryType",defaultChecked:!0,id:"any"}),Object(O.jsx)("label",{htmlFor:"any",children:"Any"}),Object(O.jsx)("input",{type:"radio",value:"movie",name:"queryType",id:"movies"}),Object(O.jsx)("label",{htmlFor:"movies",children:"Movies"}),Object(O.jsx)("input",{type:"radio",value:"series",name:"queryType",id:"series"}),Object(O.jsx)("label",{htmlFor:"series",children:"Series"}),Object(O.jsx)("input",{type:"radio",value:"episode",name:"queryType",id:"episode"}),Object(O.jsx)("label",{htmlFor:"episode",children:"Episode"})]}),"episode"===j?Object(O.jsxs)("div",{id:"season-input",children:[Object(O.jsx)("label",{className:"form-filter-label",htmlFor:"querySeason",children:"SEASON"}),Object(O.jsx)("input",{className:"form-season",type:"number",name:"querySeason",min:"1",maxLength:"3",value:g,onChange:function(e){return y(e.target.value)}})]}):null]})]}),"failed"===D?Object(O.jsx)("div",{id:"search-state",children:Object(O.jsx)("p",{children:"Search failed"})}):null]})}function f(e){return e.movieDetails.Ratings?Object(O.jsx)("div",{id:"focused-movie--ratings",children:e.movieDetails.Ratings.map((function(e){return Object(O.jsxs)("div",{className:"rating",children:[Object(O.jsx)("p",{children:e.Value}),Object(O.jsx)("p",{children:e.Source})]},e.Source)}))}):Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"Ratings not found for IMDb, Rotten Tomatoes, or Metacritic."})})}function v(e){var t=Object(i.useState)(),s=Object(a.a)(t,2),n=s[0],c=s[1],r=Object(i.useState)(),o=Object(a.a)(r,2),l=o[0],u=o[1],j=Object(i.useState)(!1),d=Object(a.a)(j,2),b=d[0],h=d[1],m=Object(i.useState)(!1),x=Object(a.a)(m,2),f=x[0],v=x[1];function p(){v(!f)}return Object(i.useEffect)((function(){b||function(){var e=localStorage.getItem("watchlist");if(null!==e){var t=JSON.parse(e);c(t)}else c([])}()}),[e.movieDetails,b]),Object(i.useEffect)((function(){b||h(!0)}),[n,b]),Object(i.useEffect)((function(){if(b){void 0===n.find((function(t){return t.imdbID===e.movieDetails.imdbID}))?u(!1):u(!0);try{localStorage.setItem("watchlist",JSON.stringify(n))}catch(t){console.error(t)}}}),[n,e.movieDetails,b]),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{id:"watchlist-buttons",children:[Object(O.jsxs)("button",{className:"watchlist-button",onClick:p,children:[Object(O.jsx)("i",{className:"far fa-bookmark"})," View"]}),l?Object(O.jsxs)("button",{className:"watchlist-button",onClick:function(t){c(n.filter((function(t){return t.imdbID!==e.movieDetails.imdbID})))},children:[Object(O.jsx)("i",{className:"fas fa-trash-alt"})," Remove"]}):Object(O.jsxs)("button",{className:"watchlist-button",onClick:function(){var t={Title:e.movieDetails.Title,imdbID:e.movieDetails.imdbID,Rated:e.movieDetails.Rated,Year:e.movieDetails.Year,Genre:e.movieDetails.Genre,Runtime:e.movieDetails.Runtime};c(n.concat(t))},children:[Object(O.jsx)("i",{className:"fas fa-plus"})," Add"]})]}),f?Object(O.jsxs)("div",{id:"watchlist-modal",children:[Object(O.jsx)("h3",{children:"WATCH LIST"}),Object(O.jsx)("ul",{children:n.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:e.Title})," \xb7 ",e.Rated," \xb7 ",e.Year," \xb7 ",e.Genre," \xb7 ",e.Runtime," "]})}))}),Object(O.jsx)("button",{className:"watchlist-button",onClick:p,children:"Close"})]}):null]})}function p(e){var t=Object(i.useState)({}),s=Object(a.a)(t,2),n=s[0],c=s[1],r=Object(i.useState)(""),o=Object(a.a)(r,2),d=o[0],b=o[1];return Object(i.useEffect)((function(){function t(){return(t=Object(u.a)(l.a.mark((function t(){var s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===e.imdbID){t.next=6;break}return s="https://www.omdbapi.com/?apikey=19bc8d19&i=".concat(e.imdbID),t.next=4,m.queryAPI(s);case 4:i=t.sent,c(Object(j.a)({},i));case 6:b(!1);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}b(!0),function(){t.apply(this,arguments)}()}),[e.imdbID]),""!==e.imdbID?Object(O.jsx)("div",{id:"search-results-details",children:Object(O.jsx)("div",{id:"focused-movie",children:!1===d?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{id:"focused-movie-top",children:[Object(O.jsx)("div",{id:"focused-movie--poster",children:Object(O.jsx)("img",{src:n.Poster,alt:n.Title+" Poster"})}),Object(O.jsx)("div",{id:"focused-movie--details",children:Object(O.jsxs)("div",{id:"focused-movie-details--positioning",children:[Object(O.jsx)("h1",{children:n.Title}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{id:"focused-movie--rated",children:n.Rated}),Object(O.jsxs)("span",{children:[n.Year," \xb7 ",n.Genre," \xb7 ",n.Runtime]})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Stars:"})," ",n.Actors]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Director:"})," ",n.Director]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Production:"})," ",n.Production]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Gross USA:"})," ",n.BoxOffice]}),Object(O.jsx)("p",{children:n.Awards})]})})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{id:"focused-movie--plot",children:Object(O.jsx)("p",{children:n.Plot})}),Object(O.jsx)("hr",{}),Object(O.jsx)(f,{movieDetails:n}),Object(O.jsx)(v,{movieDetails:n})]}):Object(O.jsx)("div",{id:"details--loading",children:Object(O.jsx)("h3",{children:"Loading movie"})})})}):Object(O.jsxs)("div",{id:"search-results-details",children:[Object(O.jsx)("h3",{className:"search-result-details--info",children:"SEARCH INFO"}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Type"}),Object(O.jsx)("th",{children:"Description"})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Any"}),Object(O.jsx)("td",{children:"Searches for any movie, series, video game"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Movies"}),Object(O.jsx)("td",{children:"Searches only for movies"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Series"}),Object(O.jsx)("td",{children:"Searches only for a TV series. A series will only appear for the years where it started and/or ended"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Episodes"}),Object(O.jsx)("td",{children:"Returns a list of episodes a matching season and TV show. Must enter a season number for this search."})]})]})]}),Object(O.jsx)("h3",{className:"search-result-details--info",children:"WATCHLIST"}),Object(O.jsx)("p",{children:"After an item has been selected it can be added to a watchlist using buttons on the top right corner of the window. The watchlist is stored offline in local storage and will persist after the page has been closed."}),Object(O.jsxs)("p",{id:"search-result-details--API-link",children:["Powered by ",Object(O.jsx)("a",{href:"http://www.omdbapi.com/",children:"OMDb API"})]})]})}function g(e){var t=e.focus===e.movie.imdbID?"movieCard activeCard":"movieCard";return Object(O.jsxs)("li",{className:t,onClick:function(){return e.changeFocus(e.movie.imdbID)},children:[Object(O.jsx)("div",{className:"movieCard--poster",children:e.movie.Poster?Object(O.jsx)("img",{src:e.movie.Poster,alt:e.movie.Title+" poster"}):null}),Object(O.jsxs)("div",{className:"movieCard--details",children:[Object(O.jsx)("h3",{className:"movieCard--title",children:e.movie.Title}),Object(O.jsx)("p",{children:e.movie.Year})]})]})}function y(e){var t=function(){var t=Object(u.a)(l.a.mark((function t(s){var i,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.getNextPage();case 2:(i=t.sent)&&i.Search.length>0&&(n=m.removeDuplicates(e.movies.concat(i.Search)),e.onMovieChange(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=Object(i.useRef)(),n=Object(i.useCallback)((function(e){s.current&&s.current.disconnect(),s.current=new IntersectionObserver((function(e){e[0].isIntersecting&&!0===m.nextPageAvailable()&&!1===m.getLoadStatus()&&t()})),e&&s.current.observe(e)}),[e.movies]);return e.movies&&e.movies.length>0?Object(O.jsxs)("div",{id:"search-results-list",children:[Object(O.jsx)("div",{id:"search-results--counter",children:Object(O.jsxs)("p",{children:[e.movies.length," ",0!==m.getResultCount()?Object(O.jsxs)("span",{children:[" / ",m.getResultCount()]}):null,"  RESULTS"]})}),Object(O.jsx)("ul",{id:"search-results-list--ul",children:e.movies.map((function(t){return Object(O.jsx)(g,{movie:t,focus:e.focus,changeFocus:e.changeFocus},t.imdbID)}))}),Object(O.jsx)("div",{id:"search-results--bottom",ref:n})]}):Object(O.jsx)("div",{id:"search-results-list"})}function S(e){var t=Object(i.useState)(""),s=Object(a.a)(t,2),n=s[0],c=s[1];return Object(i.useEffect)((function(){0===e.movies.length&&c("")}),[e.movies]),Object(O.jsxs)("div",{id:"search-results",children:[Object(O.jsx)(y,{focus:n,movies:e.movies,onMovieChange:e.onMovieChange,changeFocus:function(e){c(e)}}),Object(O.jsx)(p,{imdbID:n})]})}var w=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),s=t[0],n=t[1];function c(e){n(e)}return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{movies:s,onMovieChange:c}),Object(O.jsx)(S,{movies:s,onMovieChange:c})]})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),i(e),n(e),c(e),r(e)}))};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),D()}},[[19,1,2]]]);
//# sourceMappingURL=main.eff3b7d1.chunk.js.map