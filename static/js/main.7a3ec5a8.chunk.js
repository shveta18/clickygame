(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Henry","image":"https://upload.wikimedia.org/wikipedia/commons/8/81/Enrique_VIII_de_Inglaterra%2C_por_Hans_Holbein_el_Joven.jpg"},{"id":2,"name":"Anne Boleyn","image":"https://upload.wikimedia.org/wikipedia/commons/f/f2/Anne_boleyn.jpg"},{"id":3,"name":"Anne of Cleves","image":"https://upload.wikimedia.org/wikipedia/commons/c/c0/Anne_of_Cleves%2C_by_Hans_Holbein_the_Younger.jpg"},{"id":4,"name":"Wolsey","image":"https://upload.wikimedia.org/wikipedia/commons/2/23/Cardinal_Thomas_Wolsey.jpg"},{"id":5,"name":"Catherine of Aragon","image":"https://upload.wikimedia.org/wikipedia/commons/a/a2/Catalina_de_Arag%C3%B3n%2C_por_un_artista_an%C3%B3nimo.jpg"},{"id":6,"name":"Catherine Parr","image":"https://upload.wikimedia.org/wikipedia/commons/4/49/Catherine_Parr_from_NPG.jpg"},{"id":7,"name":"Edward","image":"https://upload.wikimedia.org/wikipedia/commons/e/e5/Circle_of_William_Scrots_Edward_VI_of_England.jpg"},{"id":8,"name":"Elizabeth of York","image":"https://upload.wikimedia.org/wikipedia/commons/2/22/Elizabeth_of_York_from_Kings_and_Queens_of_England.jpg"},{"id":9,"name":"Elizabeth","image":"https://upload.wikimedia.org/wikipedia/commons/a/af/Darnley_stage_3.jpg"},{"id":10,"name":"Jane Seymore","image":"https://upload.wikimedia.org/wikipedia/commons/1/14/Hans_Holbein_the_Younger_-_Jane_Seymour%2C_Queen_of_England_-_Google_Art_Project.jpg"},{"id":11,"name":"Mary","image":"https://upload.wikimedia.org/wikipedia/commons/b/b7/Mary_I_by_Master_John.jpg"},{"id":12,"name":"Cromwell","image":"https://upload.wikimedia.org/wikipedia/commons/c/c6/Cromwell%2CThomas%281EEssex%2901.jpg"},{"id":13,"name":"Moore","image":"https://upload.wikimedia.org/wikipedia/commons/d/d2/Hans_Holbein%2C_the_Younger_-_Sir_Thomas_More_-_Google_Art_Project.jpg"}]')},,,,,,,function(e,a,n){e.exports=n(17)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var i=n(0),t=n.n(i),o=n(7),r=n.n(o),m=(n(13),n(2)),l=n(3),c=n(5),s=n(4);n(14);var d=function(e){return t.a.createElement("div",null,t.a.createElement("div",{className:"img-container"},t.a.createElement("img",{className:"click-image",alt:e.name,src:e.image,onClick:function(){return e.shuffleImage(e.id)}})))};n(15);var g=function(e){return t.a.createElement("div",null,t.a.createElement("nav",{className:"navbar navbar-light bg-light"},t.a.createElement("h1",{className:"title"},e.children),";"))},u=n(1);n(16);var _=function(e){return t.a.createElement("div",{className:"wrapper"},e.children)},p=function(e){Object(c.a)(n,e);var a=Object(s.a)(n);function n(){var e;Object(m.a)(this,n);for(var i=arguments.length,t=new Array(i),o=0;o<i;o++)t[o]=arguments[o];return(e=a.call.apply(a,[this].concat(t))).state={currentScore:0,gameScore:0},e.userClicks=function(){e.setState({currentScore:e.state.currentScore+1})},e}return Object(l.a)(n,[{key:"render",value:function(){return t.a.createElement("div",null,t.a.createElement("h2",{className:"score"},"Score: ",this.state.currentScore),t.a.createElement("h2",{className:"gameScore"},"GameScore: ",this.state.gameScore))}}]),n}(t.a.Component);function h(e){for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),i=[e[n],e[a]];e[a]=i[0],e[n]=i[1]}return e}var f=function(e){Object(c.a)(n,e);var a=Object(s.a)(n);function n(){var e;Object(m.a)(this,n);for(var i=arguments.length,t=new Array(i),o=0;o<i;o++)t[o]=arguments[o];return(e=a.call.apply(a,[this].concat(t))).state={images:u},e.shuffleImage=function(a){h(u),console.log(u),e.setState({images:u})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return t.a.createElement(_,null,t.a.createElement(g,null,"Tudor Court"),t.a.createElement(p,null),this.state.images.map((function(a){return t.a.createElement(d,{shuffleImage:e.shuffleImage,key:a.id,name:a.name,image:a.image})})))}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(t.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.7a3ec5a8.chunk.js.map