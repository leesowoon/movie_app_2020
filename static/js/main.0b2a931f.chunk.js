(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),i=a.n(s),c=a(2),o=a.n(c),l=a(13),m=a(14),u=a(15),v=a(18),p=a(17),d=a(16),g=a.n(d);a(42);var y=function(e){var t=e.year,a=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{class:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{class:"movie_data"},r.a.createElement("h4",{class:"movie_title"},a),r.a.createElement("h5",{class:"movie_year"},t),r.a.createElement("ul",{class:"movie_genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,class:"genres_genre"},e)}))),r.a.createElement("p",{class:"movie_summary"},n.slice(0,180))))},E=(a(43),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("http://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{class:"container"},t?r.a.createElement("div",{class:"loader"},r.a.createElement("span",{class:"loader_text"},"Loading...")):r.a.createElement("div",{class:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0b2a931f.chunk.js.map