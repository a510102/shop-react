(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[6],{50:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(11),c=n(0),r=n.n(c);n(51);function l(e){var t=e.num,n=e.setDePage,l=e.dePage,u=Object(c.useState)([]),o=Object(a.a)(u,2),i=o[0],s=o[1];return Object(c.useEffect)((function(){!function(e){var t=[];if(e>2){for(var n=1;n<e+1;n++)t.push(n);s(t)}}(t)}),[t]),r.a.createElement("ul",{className:"pages"},1!==l&&r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return n(l-1)}},"Pre")," "),i.length>1&&i.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{className:e===l?"active":"",onClick:function(){return n(e)}},e))})),l!==t&&r.a.createElement("li",null," ",r.a.createElement("button",{onClick:function(){return n(l+1)}},"Next")))}},51:function(e,t,n){},54:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(21),c=n(13),r=n(12),l=n.n(r),u=n(18),o=n(11),i=n(0),s=n.n(i),m=n(19);function p(e){var t=e.open,n=e.setOpen,a=e.product,r=e.handleChange,o=e.updateProduct,m=e.addProduct,p=e.handleCancel,d=e.setProduct,h=e.alert,E=Object(i.useRef)(null),f=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E.current.files[0],(n=new FormData).append("file-to-upload",t),"https://vue-course-api.hexschool.io/api/jay/admin/upload",e.next=6,fetch("https://vue-course-api.hexschool.io/api/jay/admin/upload",{method:"POST",body:n,credentials:"include"});case 6:return a=e.sent,e.next=9,a.json();case 9:(r=e.sent).success?(d((function(e){return Object(c.a)(Object(c.a)({},e),{},{imageUrl:r.imageUrl})})),h.success("\u4e0a\u50b3\u6210\u529f")):h.error(r.message);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{onClick:function(){n(!t)}},"\u5efa\u7acb\u65b0\u5546\u54c1"),t?s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"category"},"\u985e\u5225:"),s.a.createElement("input",{id:"category",name:"category",value:a.category||"",onChange:r}),s.a.createElement("label",{htmlFor:"title"},"\u5546\u54c1:"),s.a.createElement("input",{id:"title",name:"title",value:a.title||"",onChange:r}),s.a.createElement("label",{htmlFor:"content"},"\u5167\u5bb9:"),s.a.createElement("input",{id:"content",name:"content",value:a.content||"",onChange:r}),s.a.createElement("label",{htmlFor:"description"},"\u63cf\u8ff0:"),s.a.createElement("input",{id:"description",name:"description",value:a.description||"",onChange:r}),s.a.createElement("label",{htmlFor:"image"},"\u8f38\u5165\u5716\u7247\u7db2\u5740"),s.a.createElement("input",{type:"text",className:"form-control",onChange:r,value:a.imageUrl||"",id:"image",name:"imageUrl",placeholder:"\u8acb\u8f38\u5165\u5716\u7247\u9023\u7d50"}),s.a.createElement("label",{htmlFor:"customFile"},"\u6216 \u4e0a\u50b3\u5716\u7247"),s.a.createElement("input",{type:"file",id:"customFile",className:"form-control",ref:E,onChange:f}),a.imageUrl&&s.a.createElement("img",{style:{width:"200px",height:"200px"},src:a.imageUrl,alt:"proPic"}),s.a.createElement("label",{htmlFor:"origin_price"},"\u539f\u50f9:"),s.a.createElement("input",{id:"origin_price",name:"origin_price",value:a.origin_price||"",onChange:r}),s.a.createElement("label",{htmlFor:"price"},"\u7279\u50f9:"),s.a.createElement("input",{id:"price",name:"price",value:a.price||"",onChange:r}),s.a.createElement("label",{htmlFor:"unit"},"\u55ae\u4f4d:"),s.a.createElement("input",{id:"unit",name:"unit",value:a.unit||"",onChange:r}),a.hasOwnProperty("id")?s.a.createElement("button",{onClick:o},"Update"):s.a.createElement("button",{onClick:m},"Add"),s.a.createElement("button",{onClick:p},"\u53d6\u6d88")):null)}function d(e){var t=e.product,n=e.updateEnabled,a=e.openUpdateProduct,c=e.deleteProduct;return s.a.createElement("tr",null,s.a.createElement("td",null,t.title),s.a.createElement("td",null,t.category),s.a.createElement("td",null,t.unit),s.a.createElement("td",null,t.origin_price,"\u5143"),s.a.createElement("td",null,t.price,"\u5143"),s.a.createElement("td",null,s.a.createElement("input",{type:"checkbox",onChange:function(e){return n(e,t)},checked:1===t.is_enabled})),s.a.createElement("td",null,s.a.createElement("button",{onClick:function(){return a(t)}},"\u7de8\u8f2f")),s.a.createElement("td",null," ",s.a.createElement("button",{onClick:function(){return c(t.id)}},"\u522a\u9664")))}var h=n(20),E=n(50);n(54);function f(){var e=Object(m.b)(),t=Object(i.useState)(null),n=Object(o.a)(t,2),r=n[0],f=n[1],b=Object(i.useState)(!0),g=Object(o.a)(b,2),j=g[0],v=g[1],O=Object(i.useState)(!1),P=Object(o.a)(O,2),y=P[0],C=P[1],k=Object(i.useState)({}),x=Object(o.a)(k,2),F=x[0],U=x[1],S=Object(i.useState)(1),w=Object(o.a)(S,2),T=w[0],N=w[1],_=Object(i.useState)(null),D=Object(o.a)(_,2),J=D[0],A=D[1],L=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://vue-course-api.hexschool.io/api/jay/products?page=".concat(t),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:(c=e.sent).success&&(f(c.products),v(!1),A(c.pagination.total_pages));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){L(T)}),[T]);var R=function(){var t=Object(u.a)(l.a.mark((function t(n,a,r){var u,o,i,s,m;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=a?"https://vue-course-api.hexschool.io/api/jay/admin/product/".concat(a):"https://vue-course-api.hexschool.io/api/jay/admin/product",t.next=3,fetch(u,{method:r,body:("PUT"===r||"POST"===r)&&JSON.stringify({data:Object(c.a)({},n)}),credentials:"include",headers:{"content-type":("PUT"===r||"POST"===r)&&"application/json"}});case 3:return o=t.sent,t.next=6,o.json();case 6:i=t.sent,s=i.success,m=i.message,s?(L(),m&&e.success(m)):m&&e.error(m);case 9:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),q=function(e,t){var n=e.target.checked,a=Object(c.a)(Object(c.a)({},t),{},{is_enabled:n?1:0});R(a,t.id,"PUT")},z=function(e){U(e),y||C(!0)},B=function(e){R(null,e,"DELETE")};return j?s.a.createElement(h.a,null):s.a.createElement("div",{className:"backProducts"},s.a.createElement("h2",null,"Products"),s.a.createElement(p,{open:y,setOpen:C,product:F,handleChange:function(e){var t=e.target,n=t.name,r=t.value;U((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},n,r))}))},updateProduct:function(){R(F,F.id,"PUT"),C(!1)},addProduct:function(){R(F,null,"POST"),U({}),C(!1)},handleCancel:function(){U({}),C(!1)},setProduct:U,alert:e}),s.a.createElement("table",{className:"backProducts-table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"\u7522\u54c1"),s.a.createElement("th",null,"\u985e\u5225"),s.a.createElement("th",null,"\u55ae\u4f4d"),s.a.createElement("th",null,"\u539f\u50f9"),s.a.createElement("th",null,"\u7279\u50f9"),s.a.createElement("th",null,"\u555f\u7528"),s.a.createElement("th",null,"\u7de8\u8f2f"),s.a.createElement("th",null,"\u522a\u9664"))),s.a.createElement("tbody",null,r&&r.map((function(e,t){return s.a.createElement(d,{product:e,key:t,updateEnabled:q,openUpdateProduct:z,deleteProduct:B})})))),s.a.createElement(E.a,{dePage:T,setDePage:N,num:J}))}}}]);
//# sourceMappingURL=6.1d6a493b.chunk.js.map