(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(16),i=n.n(a),l=(n(32),n(12)),s=n(3);n(24);function d(e,t,n,c,r,a,i){var l=Math.PI/2*3,s=t,d=n,u=Math.PI/c,b=i;e.strokeSyle="#000",e.beginPath(),e.moveTo(t,n-r);for(var j=0;j<c;j++)s=t+Math.cos(l)*r,d=n+Math.sin(l)*r,e.lineTo(s,d),l+=u,s=t+Math.cos(l)*a,d=n+Math.sin(l)*a,e.lineTo(s,d),l+=u;e.lineTo(t,n-r),e.closePath(),e.lineWidth=5,e.strokeStyle="black",e.stroke(),e.fillStyle=b,e.fill()}n(33);var u=n(1);var b=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=e.current.getContext("2d");d(t,75,100,5,30,15,"black"),d(t,175,100,5,30,15,"green"),d(t,275,100,5,30,15,"yellow"),d(t,375,100,5,30,15,"red"),d(t,475,100,5,30,15,"blue")}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("canvas",{ref:e,width:"600px",height:"600px",style:{display:"flex"},onClick:function(e){var n={x:e.clientX,y:e.clientY},c=t.current,r=n.x,a=n.y,i=Math.sqrt((r-75)*(r-75)+(a-100)*(a-100)),l=Math.sqrt((r-175)*(r-175)+(a-100)*(a-100)),s=Math.sqrt((r-275)*(r-275)+(a-100)*(a-100)),d=Math.sqrt((r-375)*(r-375)+(a-100)*(a-100)),u=Math.sqrt((r-475)*(r-475)+(a-100)*(a-100));c.style.background=i<30?"black":l<30?"green":s<30?"yellow":d<30?"red":u<30?"blue":"white"}}),Object(u.jsx)("canvas",{ref:t,width:"600px",height:"50px"})]})};var j=function(){return Object(u.jsxs)("div",{style:{position:"absolute",height:"40px"},children:[Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{to:"/canvas",children:"Canvas"})}),Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{to:"/",children:"ListPersons"})})]})},o=n(9),m=n(11),h=n(8),O=n(15),x="ADD_PERSON",v="DELETE_PERSON",p="EDIT_PERSON";var f=function(){var e=Object(o.b)(),t=Object(c.useState)({name:"",number:""}),n=Object(O.a)(t,2),r=n[0],a=n[1],i=function(e){a(Object(h.a)(Object(h.a)({},r),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e){var t=e.name,n=e.number,c=e.id;return{type:x,payload:{name:t,number:n,id:c}}}({name:r.name,number:r.number,id:Date.now()})),a({name:"",number:""})},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{onChange:i,value:r.name,name:"name",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!",required:!0}),Object(u.jsx)("input",{onChange:i,value:r.number,name:"number",type:"tel",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440!",title:"8-XXX-XXX-XX-XX",required:!0,pattern:"^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}"})]}),Object(u.jsx)("button",{type:"submit",className:"button-center",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c!"})]})})};n(40);var y=function(e){var t=Object(c.useState)(!1),n=Object(O.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)({name:null===e||void 0===e?void 0:e.name,number:null===e||void 0===e?void 0:e.number}),l=Object(O.a)(i,2),s=l[0],d=l[1],b=Object(o.b)(),j=/^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/gm,x=function(e){d(Object(h.a)(Object(h.a)({},s),{},Object(m.a)({},e.target.name,e.target.value)))},f=function(e){b(function(e){return{type:v,payload:{id:e}}}(e))};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[(null===e||void 0===e?void 0:e.index)+1,"."]}),r?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{className:"td-style",children:Object(u.jsx)("input",{className:"input-style",onChange:x,name:"name",type:"text",value:s.name,required:!0})}),Object(u.jsx)("td",{className:"td-style",children:Object(u.jsx)("input",{className:"input-style",onChange:x,name:"number",type:"tel",value:s.number,title:"8-XXX-XXX-XX-XX",required:!0,pattern:"^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}"})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(t){t.preventDefault(),""!==s.name&&String(null===s||void 0===s?void 0:s.number).match(j)?(b(function(e){var t=e.name,n=e.number,c=e.id;return{type:p,payload:{name:t,number:n,id:c}}}({name:s.name,number:s.number,id:null===e||void 0===e?void 0:e.id})),a(!r)):""===s.name?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!"):String(null===s||void 0===s?void 0:s.number).match(j)?alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!"):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 8-XXX-XXX-XX-XX")},style:{marginLeft:"10px"},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{className:"td-style hidden-text",title:null===e||void 0===e?void 0:e.name,children:null===e||void 0===e?void 0:e.name}),Object(u.jsx)("td",{className:"td-style-number hidden-text",title:null===e||void 0===e?void 0:e.number,children:null===e||void 0===e?void 0:e.number}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){return a(!r)},style:{marginLeft:"10px"},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){return f(null===e||void 0===e?void 0:e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})]})})};n(41);var X=function(){var e=Object(o.c)((function(e){return e.people}));return Object(u.jsxs)("div",{className:"details",children:[Object(u.jsxs)("table",{className:"css-table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"\u0418\u043c\u044f"}),Object(u.jsx)("th",{children:"\u041d\u043e\u043c\u0435\u0440"})]})}),Object(u.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(u.jsx)(y,{name:e.name,id:e.id,index:t,number:e.number},e.id)}))})]}),Object(u.jsx)(f,{})]})};var g=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(j,{}),Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",children:Object(u.jsx)(X,{})}),Object(u.jsx)(s.a,{path:"/canvas",children:Object(u.jsx)(b,{})})]})]})})},S=n(19),k=function(){return{people:[{id:1,name:"\u0418\u0432\u0430\u043d",number:"+79855310868"},{id:2,name:"\u041a\u0430\u0442\u044f",number:88008454545},{id:3,name:"\u0418\u0433\u043e\u0440\u044c",number:9855310868}]}},M=n(27),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{people:[].concat(Object(M.a)(e.people),[t.payload])};case v:return{people:e.people.filter((function(e){return e.id!==t.payload.id}))};case p:return{people:e.people.map((function(e){return e.id===t.payload.id?Object(h.a)(Object(h.a)({},e),{},{name:t.payload.name,number:t.payload.number}):e}))};default:return e}},w=n(25),C=n(26),q=Object(S.createStore)(N,k(),Object(w.composeWithDevTools)(Object(S.applyMiddleware)(C.a)));i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(o.a,{store:q,children:Object(u.jsx)(g,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f17f4ef2.chunk.js.map