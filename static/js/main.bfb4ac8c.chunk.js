(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/photo.fea5f5eb.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/Resume.f810be65.pdf"},29:function(e,t,a){e.exports=a.p+"static/media/NY-location-project.cb9a10e5.png"},30:function(e,t,a){e.exports=a.p+"static/media/tobacco-permit-project.86cfd4bc.png"},34:function(e,t,a){e.exports=a(56)},44:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),c=a.n(r),l=a(22),o=a(23),s=a(32),m=a(24),u=a(33),d=a(25),p=a.n(d),h=function(){return i.a.createElement("div",{className:"about",id:"about__section"},i.a.createElement("div",{className:"about__container",style:{display:"flex"}},i.a.createElement("div",{className:"about__photo"},i.a.createElement("img",{src:p.a,className:"about__photo__image",alt:""})),i.a.createElement("div",{className:"about__summary"},i.a.createElement("div",{className:"about__summary__greetings"},"Hi there!"),i.a.createElement("div",{className:"about__summary__description"},"My name is Sherman. I graduated from UC Davis with a B.S in hydrology but soon fell in love with programming. I recently earned my A.S degree in computer science and have taken OOP data structure/algorithms courses in Java.",i.a.createElement("br",null),i.a.createElement("br",null),"I am currently doing GIS (Geographics Information Systems) and web development at the City and County of San Francisco, Planning department. There, I develop web map applications, perform geospatial analysis , and write ETL scripts using Python",i.a.createElement("br",null),i.a.createElement("br",null),"On my spare time, I love doing anything outdoors and always seek new adventures!"))))},f=a(6),E=a(13),v=a(10),b=i.a.createElement(f.a,{icon:E.a}),g=i.a.createElement(f.a,{icon:E.b}),_=[{id:1,link:"mailto:pengsherman@gmail.com",image:i.a.createElement(f.a,{icon:v.b})},{id:2,link:"https://github.com/sherm17",image:b},{id:3,link:"https://www.linkedin.com/in/shermanpeng/",image:g}],y=function(e){var t=e.socialProfile,a=t.link,n=t.image;return i.a.createElement("div",{className:"connection__logos"},i.a.createElement("a",{href:a,style:{textDecoration:"none"}},n))},w=function(){return i.a.createElement("div",{style:{display:"flex"}},_.map(function(e){return i.a.createElement(y,{key:e.id,socialProfile:e})}))},N=i.a.createElement(f.a,{icon:v.a}),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={fadeIn:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({fadeIn:!1})},1e3),this.changeFadeInToTrue()}},{key:"componentWillUnmount",value:function(){clearInterval(this.arrowInterval)}},{key:"changeFadeInToTrue",value:function(){var e=this;this.arrowInterval=setInterval(function(){e.setState({fadeIn:!0}),setTimeout(function(){return e.setState({fadeIn:!1})},1e3)},2e3)}},{key:"render",value:function(){var e=this.state.fadeIn;return i.a.createElement("div",null,i.a.createElement("h1",null),i.a.createElement("div",{className:"intro"},i.a.createElement("div",{className:"intro__section"},i.a.createElement("div",{className:"intro__header"},"Hello, world!"),i.a.createElement("div",{className:"intro__name"},"I'm Sherman"),i.a.createElement("div",{className:"divider"},i.a.createElement("hr",null)),i.a.createElement(w,null)),i.a.createElement("div",{className:e?"arrow title__fade__in":"arrow title__fade__out"},i.a.createElement("a",{href:"#about__section"},N))),i.a.createElement(h,null))}}]),t}(n.Component),j=a(11),I=(a(19),a(26)),S=a.n(I),x=(a(44),function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement("ul",{className:"nav justify-content-center"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(j.a,{to:"/website"},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(j.a,{to:"/website/projects/"},"Projects")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(j.a,{to:S.a,target:"_blank"},"Resume"))),t)}),O=a(29),T=a.n(O),C=a(30),L=a.n(C),P=[{id:1,title:"NY-locations",description:"A simple full stack web map applications that allows the user to enter add additional points to the map by entering in address information",githubLink:"https://github.com/sherm17/NY_map_locations",demoLink:"",image:T.a},{id:2,title:"tobacco-permit-map",description:"An interactive web application I built for the City and County of San Francisco that displays all the tobacco permit locations in San Francisco.",githubLink:"https://github.com/sherm17/tobacco_permit_map",demoLink:"https://sfplanninggis.org/tobaccopermits/",image:L.a}],F=(a(51),function(e){var t=e.project,a=t.title,n=t.image,r=t.description,c=t.githubLink,l=t.demoLink;return i.a.createElement("div",{className:"each-project col-md-3"},i.a.createElement("h3",null,a),i.a.createElement("div",{className:"each-project--image-container"},i.a.createElement("img",{src:n,alt:"profile"})),i.a.createElement("div",{className:"each-project--description"},r),i.a.createElement("div",{className:"each-project--links"},i.a.createElement("div",{className:"each-project--links--github"},i.a.createElement("a",{href:c},"Code")),i.a.createElement("div",{className:"each-project--links--demo"},"NY-locations"!==a?i.a.createElement("a",{href:l},"Demo"):"")))}),A=function(){return i.a.createElement("div",{className:"project-section container"},i.a.createElement("div",{className:"row justify-content-around"},P.map(function(e){return i.a.createElement(F,{key:e.id,project:e})})))},D=a(31),Y=a.n(D),H=a(7);a(52);c.a.render(i.a.createElement(H.b,{history:Y()()},i.a.createElement(H.c,null,i.a.createElement(H.a,{exact:!0,path:"/website/",render:function(){return i.a.createElement(x,null,i.a.createElement(k,null))}}),i.a.createElement(H.a,{path:"website/projects/",render:function(){return i.a.createElement(x,null,i.a.createElement(A,null))}}))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.bfb4ac8c.chunk.js.map