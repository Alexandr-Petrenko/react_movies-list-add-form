(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(8),l=a.n(r),m=(a(16),a(10)),s=a(3),c=a(4),o=a(6),d=a(5),h=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))});h.defaultProps={description:""};var b=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,Object.assign({key:e.imdbId},e))})))};b.defaultProps={movies:[]};var u=a(2),p=a(1),g=(a(20),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",errors:{title:!1,imdbId:!1,imgUrl:!1,imdbUrl:!1,isDisabled:!1}},e.checkingToEmpty=function(t){t.forEach((function(t){t[1]||"description"===t[0]||e.setState((function(e){return{errors:Object(p.a)(Object(p.a)({},e.errors),{},Object(u.a)({isDisabled:!0},t[0],!0))}}))}))},e.handleChangeUrl=function(t){var a=t.target,i=a.name,n=a.value;/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(n)?e.setState((function(e){return{errors:Object(p.a)(Object(p.a)({},e.errors),{},Object(u.a)({},i,!1))}})):e.setState((function(e){return{errors:Object(p.a)(Object(p.a)({},e.errors),{},Object(u.a)({},i,!0))}})),e.setState(Object(u.a)({},i,n))},e.handleChange=function(t){var a=t.target,i=a.name,n=a.value;n||e.setState((function(e){return{errors:Object(p.a)(Object(p.a)({},e.errors),{},Object(u.a)({isDisabled:!0},i,!0))}})),e.setState(e.setState((function(e){return{errors:Object(p.a)(Object(p.a)({},e.errors),{},Object(u.a)({isDisabled:!1},i,!1))}}))),e.setState(Object(u.a)({},i,n))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,i={title:a.title,description:a.description,imdbId:a.imdbId,imdbUrl:a.imdbUrl,imgUrl:a.imgUrl},n=Object.entries(i);n.some((function(e){return!e[1]&&"description"!==e[0]}))?e.checkingToEmpty(n):(e.props.onAdd(i),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl,l=e.imdbId,m=e.errors;return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("label",{htmlFor:"title"},"Title:",m.title&&n.a.createElement("span",null,"Title is required"),n.a.createElement("input",{placeholder:"...",id:"title",name:"title",className:m.title?"error":"",type:"text",value:t,onChange:this.handleChange})),n.a.createElement("label",{htmlFor:"description"},"Description:",n.a.createElement("input",{placeholder:"...",id:"description",name:"description",type:"text",value:a,onChange:this.handleChange})),n.a.createElement("label",{htmlFor:"imgUrl"},"Link to poster:",m.imgUrl&&n.a.createElement("span",null,"Invalid link"),n.a.createElement("input",{placeholder:"...",id:"imgUrl",name:"imgUrl",className:m.imgUrl?"red":"",type:"text",value:i,onChange:this.handleChangeUrl})),n.a.createElement("label",{htmlFor:"imdbUrl"},"Link to IMDb:",m.imdbUrl&&n.a.createElement("span",null,"Invalid link"),n.a.createElement("input",{placeholder:"...",id:"imdbUrl",name:"imdbUrl",className:m.imdbUrl?"red":"",type:"text",value:r,onChange:this.handleChangeUrl})),n.a.createElement("label",{htmlFor:"imdbId"},"Id:",m.imdbId&&n.a.createElement("span",null,"Id is required"),n.a.createElement("input",{placeholder:"...",id:"imdbId",name:"imdbId",className:m.imdbId?"red":"",type:"text",value:l,onChange:this.handleChange})),n.a.createElement("button",{type:"submit",disabled:m.isDisabled},"Add film"))}}]),a}(i.Component)),v=a(9),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(b,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(g,{onAdd:this.addMovie})))}}]),a}(i.Component);l.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.bfc65329.chunk.js.map