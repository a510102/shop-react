(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[5],{50:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(11),r=n(0),l=n.n(r);n(51);function c(e){var t=e.num,n=e.setDePage,c=e.dePage,u=Object(r.useState)([]),i=Object(a.a)(u,2),o=i[0],s=i[1];return Object(r.useEffect)((function(){!function(e){var t=[];if(e>2){for(var n=1;n<e+1;n++)t.push(n);s(t)}}(t)}),[t]),l.a.createElement("ul",{className:"pages"},1!==c&&l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){return n(c-1)}},"Pre")," "),o.length>1&&o.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("button",{className:e===c?"active":"",onClick:function(){return n(e)}},e))})),c!==t&&l.a.createElement("li",null," ",l.a.createElement("button",{onClick:function(){return n(c+1)}},"Next")))}},51:function(e,t,n){},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date;n.setTime(1e3*e);var a=n.getFullYear(),l=r(n.getMonth()+1),c=r(n.getDate()),u=r(n.getHours()),i=r(n.getMinutes());return t?"".concat(a,"-").concat(l,"-").concat(c,"- ").concat(u,": ").concat(i):"".concat(a,"-").concat(l,"-").concat(c)};function r(e){return e<10&&(e="0".concat(e)),e}},59:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(12),r=n.n(a),l=n(21),c=n(13),u=n(15);var i=n(23);function o(e){return function(e){if(Array.isArray(e))return Object(u.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=n(18),d=n(11),m=n(0),p=n.n(m),f=n(19),E=n(50);function b(e){var t=e.order,n=e.handleChange,a=e.editOrderList,r=e.handleCancel;return p.a.createElement("div",null,p.a.createElement("h3",null,"\u5ba2\u6236\u8cc7\u6599"),p.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"30vw"}},p.a.createElement("label",{htmlFor:"name"},"\u59d3\u540d:"),p.a.createElement("input",{name:"name",id:"name",value:t.user.name||"",onChange:n}),p.a.createElement("label",{htmlFor:"tel"},"\u96fb\u8a71:"),p.a.createElement("input",{name:"tel",id:"tel",value:t.user.tel||"",onChange:n}),p.a.createElement("label",{htmlFor:"address"},"\u5730\u5740:"),p.a.createElement("input",{name:"address",id:"address",value:t.user.address||"",onChange:n}),p.a.createElement("label",{htmlFor:"email"},"E-mail:"),p.a.createElement("input",{name:"email",id:"email",value:t.user.email||"",onChange:n}),p.a.createElement("label",null,"\u5df2\u4ed8\u6b3e",p.a.createElement("input",{type:"checkbox",name:"is_paid",checked:t.is_paid,onChange:n}))),p.a.createElement("h3",null,"\u5546\u54c1:"),Object.keys(t.products).map((function(e){return p.a.createElement("div",{key:e,style:{display:"flex",width:"50vw",justifyContent:"space-around"}},p.a.createElement("p",null,t.products[e].product.title),p.a.createElement("p",null,t.products[e].qty," ",t.products[e].product.unit),p.a.createElement("p",null,t.products[e].total," \u5143"),p.a.createElement("p",null,t.products[e].final_total," \u5143"))})),p.a.createElement("button",{onClick:a},"Update"),p.a.createElement("button",{onClick:r},"Cancel"))}var h=n(52),O=p.a.lazy((function(){return n.e(12).then(n.bind(null,65))}));function j(e){var t=e.order,n=e.showDetail,a=e.openDetail,r=e.id,l=e.openEditOrder,c=e.show;return p.a.createElement("tr",null,p.a.createElement("td",null,p.a.createElement("p",{onClick:function(){return n(t.id)}},t.id)),p.a.createElement("td",null,a&&r.includes(t.id)&&p.a.createElement(O,{order:t}),p.a.createElement("p",null,"\u7e3d\u5171",t.num," \u4ef6 \uff0c\u7e3d\u91d1\u984d\u70ba ",t.total," \u5143")),p.a.createElement("td",null,t.user.name),p.a.createElement("td",null,t.user.address),p.a.createElement("td",null,t.user.tel),p.a.createElement("td",null,t.user.email),p.a.createElement("td",null,Object(h.a)(t.create_at,!0)," "),p.a.createElement("td",null,t.paid_date?Object(h.a)(t.paid_date,!0):"\u9084\u6c92\u7d50\u5e33\u55b2"),p.a.createElement("td",null,p.a.createElement("p",null,t.is_paid?"\u5df2\u7d50\u5e33":"\u9084\u6c92\u7d50\u5e33")),p.a.createElement("td",null,!c&&p.a.createElement("button",{onClick:function(){return l(t)}},"Edit")))}var v=n(20);n(59);function y(){var e=Object(f.b)(),t=Object(m.useState)(null),n=Object(d.a)(t,2),a=n[0],u=n[1],i=Object(m.useState)(null),h=Object(d.a)(i,2),O=h[0],y=h[1],g=Object(m.useState)(!1),k=Object(d.a)(g,2),C=k[0],w=k[1],x=Object(m.useState)(!1),S=Object(d.a)(x,2),D=S[0],_=S[1],N=Object(m.useState)(!0),P=Object(d.a)(N,2),F=P[0],L=P[1],A=Object(m.useState)([]),J=Object(d.a)(A,2),T=J[0],I=J[1],M=Object(m.useState)(1),U=Object(d.a)(M,2),q=U[0],z=U[1],H=Object(m.useState)(null),Y=Object(d.a)(H,2),B=Y[0],G=Y[1];function K(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(s.a)(r.a.mark((function e(t){var n,a,l,c,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),n="https://vue-course-api.hexschool.io/api/jay/admin/orders?page=".concat(t),e.next=4,fetch(n,{credentials:"include"});case 4:return a=e.sent,e.next=7,a.json();case 7:l=e.sent,c=l.success,i=l.orders,o=l.pagination,c&&(u(i),G(o.total_pages),L(!1));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){if(D||0!==T.length)if(D&&T&&!T.includes(e)){var t=[].concat(o(T),[e]);I(t)}else if(D&&T.length>1&&T.includes(e)){var n=T.filter((function(t){return t!==e}));I(n)}else _(!1),I([]);else _(!D),I([e])}function V(e){w(!0),y(e)}function W(){return(W=Object(s.a)(r.a.mark((function t(){var n,a,l,u,i,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://vue-course-api.hexschool.io/api/jay/admin/order/".concat(O.id),w(!1),L(!0),a=Object(c.a)({},O),t.next=6,fetch(n,{method:"PUT",body:JSON.stringify({data:Object(c.a)({},a)}),credentials:"include",headers:{"content-type":"application/json"}});case 6:return l=t.sent,t.next=9,l.json();case 9:u=t.sent,i=u.success,o=u.message,i&&(K(),e.success(o));case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(Object(m.useEffect)((function(){K(q)}),[q]),a&&!F){var X=a.filter((function(e){return e.user}));return p.a.createElement("div",{className:"OrderList"},p.a.createElement("h2",null,"OrderList"),C&&p.a.createElement(b,{order:O,handleChange:function(e){var t=e.target,n=t.name,a=t.value,r=t.checked;y((function(e){return"email"===n||"address"===n||"name"===n||"tel"===n?Object(c.a)(Object(c.a)({},e),{},{user:Object(c.a)(Object(c.a)({},e.user),{},Object(l.a)({},n,a))}):"is_paid"===n?Object(c.a)(Object(c.a)({},e),{},Object(l.a)({},n,r)):Object(c.a)(Object(c.a)({},e),{},Object(l.a)({},n,a))}))},editOrderList:function(){return W.apply(this,arguments)},handleCancel:function(){w(!1),y(null)}}),p.a.createElement("table",{className:"OrderList-table"},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"\u8a02\u55ae\u7de8\u865f :"),p.a.createElement("th",null,"\u5546\u54c1\u5217\u8868 :"),p.a.createElement("th",null,"\u540d\u5b57 :"),p.a.createElement("th",null,"\u5730\u5740 :"),p.a.createElement("th",null,"\u9023\u7d61\u96fb\u8a71 :"),p.a.createElement("th",null,"E-mail :"),p.a.createElement("th",null,"\u4e0b\u55ae\u6642\u9593 :"),p.a.createElement("th",null,"\u7d50\u5e33\u6642\u9593 :"),p.a.createElement("th",null,"\u662f\u5426\u4ed8\u6b3e :"),p.a.createElement("th",null,"\u4fee\u6539\u8cc7\u6599 :"))),p.a.createElement("tbody",null,X.map((function(e,t){return p.a.createElement(j,{key:t,show:C,order:e,showDetail:R,openDetail:D,id:T,openEditOrder:V})})))),p.a.createElement(E.a,{dePage:q,setDePage:z,num:B}))}return p.a.createElement(v.a,null)}}}]);
//# sourceMappingURL=5.06b6c005.chunk.js.map