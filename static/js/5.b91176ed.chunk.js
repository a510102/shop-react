(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[5],{49:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(11),r=a(0),c=a.n(r);function l(e){var t=e.num,a=e.setDePage,l=e.dePage,s=Object(r.useState)([]),o=Object(n.a)(s,2),i=o[0],u=o[1];Object(r.useEffect)((function(){!function(e){var t=[];if(e>2){for(var a=1;a<e+1;a++)t.push(a);u(t)}}(t)}),[t]);return c.a.createElement("ul",{className:"max-w-sm inline-flex mt-2"},i.length>1&&1!==l&&c.a.createElement("li",null,c.a.createElement("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",onClick:function(){return a(l-1)}},"Pre")," "),i.length>1&&i.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("button",{className:l===e?"bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l":"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",onClick:function(){return a(e)}},e))})),i.length>1&&l!==t&&c.a.createElement("li",null," ",c.a.createElement("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r",onClick:function(){return a(l+1)}},"Next")))}},58:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(13),r=a.n(n),c=a(21),l=a(10),s=a(18),o=a(11),i=a(0),u=a.n(i),m=a(19);function d(e){var t=e.open,a=e.setOpen,n=e.product,c=e.handleChange,o=e.updateProduct,m=e.addProduct,d=e.handleCancel,p=e.setProduct,b=e.alert,h=Object(i.useRef)(null);function g(){return(g=Object(s.a)(r.a.mark((function e(){var t,a,n,c,s,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.current.files[0],(a=new FormData).append("file-to-upload",t),"https://vue-course-api.hexschool.io/api/jay/admin/upload",e.next=6,fetch("https://vue-course-api.hexschool.io/api/jay/admin/upload",{method:"POST",body:a,credentials:"include"});case 6:return n=e.sent,e.next=9,n.json();case 9:c=e.sent,s=c.success,o=c.message,i=c.imageUrl,s?(p((function(e){return Object(l.a)(Object(l.a)({},e),{},{imageUrl:i})})),b.success("\u4e0a\u50b3\u6210\u529f")):o?b.error(o):b.error("\u4e0a\u50b3\u5931\u6557, \u6a94\u6848\u904e\u5927");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f="w-full md:w-1/2 lg:w-1/3  px-3 mt-3 mb-6 md:mb-0",E="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",y='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name';return u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{className:"my-2 bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded",onClick:function(){a(!t)}},"\u5efa\u7acb\u65b0\u5546\u54c1"),t?u.a.createElement("div",{className:"w-full"},u.a.createElement("div",{className:"flex flex-wrap mb-6"},u.a.createElement("div",{className:f},u.a.createElement("label",{className:E,htmlFor:"category"},"\u985e\u5225:"),u.a.createElement("input",{className:y,id:"category",name:"category",value:n.category||"",onChange:c})),u.a.createElement("div",{className:f},u.a.createElement("label",{className:E,htmlFor:"title"},"\u5546\u54c1:"),u.a.createElement("input",{className:y,id:"title",name:"title",value:n.title||"",onChange:c})),u.a.createElement("div",{className:f},u.a.createElement("label",{htmlFor:"content",className:E},"\u5167\u5bb9:"),u.a.createElement("input",{className:y,id:"content",name:"content",value:n.content||"",onChange:c})),u.a.createElement("div",{className:f},u.a.createElement("label",{htmlFor:"description",className:E},"\u63cf\u8ff0:"),u.a.createElement("input",{className:y,id:"description",name:"description",value:n.description||"",onChange:c})),u.a.createElement("div",{className:f},u.a.createElement("label",{htmlFor:"image",className:E},"\u8f38\u5165\u5716\u7247\u7db2\u5740"),u.a.createElement("input",{type:"text",className:y,onChange:c,value:n.imageUrl||"",id:"image",name:"imageUrl",placeholder:"\u8acb\u8f38\u5165\u5716\u7247\u9023\u7d50"})),u.a.createElement("div",{className:f},u.a.createElement("label",{htmlFor:"customFile",className:E},"\u6216 \u4e0a\u50b3\u5716\u7247:"),u.a.createElement("input",{type:"file",id:"customFile",className:y,ref:h,onChange:function(){return g.apply(this,arguments)}}),n.imageUrl&&u.a.createElement("img",{style:{width:"200px",height:"200px"},src:n.imageUrl,alt:"proPic"})),u.a.createElement("div",{className:f},u.a.createElement("label",{htmlFor:"origin_price",className:E},"\u539f\u50f9:"),u.a.createElement("input",{className:y,id:"origin_price",name:"origin_price",value:n.origin_price||"",onChange:c})),u.a.createElement("div",{className:f},u.a.createElement("label",{htmlFor:"price",className:E},"\u7279\u50f9:"),u.a.createElement("input",{className:y,id:"price",name:"price",value:n.price||"",onChange:c})),u.a.createElement("div",{className:f},u.a.createElement("label",{htmlFor:"unit",className:E},"\u55ae\u4f4d:"),u.a.createElement("input",{className:y,id:"unit",name:"unit",value:n.unit||"",onChange:c})),u.a.createElement("div",{className:f},u.a.createElement("label",{className:E,htmlFor:"is_enabled"},"\u555f\u7528:"),u.a.createElement("input",{type:"checkbox",checked:1===n.is_enabled||"",onChange:c,id:"is_enabled",name:"is_enabled"})),u.a.createElement("div",{className:"w-full md:w-1/2 lg:w-1/3 px-3 flex p-4 justify-end"},n.hasOwnProperty("id")?u.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded",onClick:o},"Update"):u.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded",onClick:m},"Add"),u.a.createElement("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-3",onClick:d},"\u53d6\u6d88")))):null)}function p(e){var t=e.product,a=e.updateEnabled,n=e.openUpdateProduct,r=e.deleteProduct;return u.a.createElement("tr",{className:"text-right"},u.a.createElement("td",{className:"border  px-4 py-2"},t.title),u.a.createElement("td",{className:"border  px-4 py-2"},t.category),u.a.createElement("td",{className:"border  px-4 py-2"},t.unit),u.a.createElement("td",{className:"border  px-4 py-2"},t.origin_price,"\u5143"),u.a.createElement("td",{className:"border  px-4 py-2"},t.price,"\u5143"),u.a.createElement("td",{className:"border  px-4 py-2"},u.a.createElement("input",{type:"checkbox",onChange:function(e){return a(e,t)},checked:1===t.is_enabled})),u.a.createElement("td",{className:"border px-4 py-2"},u.a.createElement("button",{className:"bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded",onClick:function(){return n(t)}},"\u7de8\u8f2f")),u.a.createElement("td",{className:"border px-4 py-2"},u.a.createElement("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded",onClick:function(){return r(t.id)}},"\u522a\u9664")))}var b=a(20),h=a(49),g=a(12);function f(){var e=Object(m.b)(),t=Object(i.useContext)(g.a),a=t.products,n=t.productDispatch,f=Object(i.useState)(!0),E=Object(o.a)(f,2),y=E[0],x=E[1],N=Object(i.useState)(!1),v=Object(o.a)(N,2),j=v[0],O=v[1],w=Object(i.useState)({}),P=Object(o.a)(w,2),C=P[0],k=P[1],U=Object(i.useState)(1),F=Object(o.a)(U,2),_=F[0],S=F[1],T=Object(i.useState)(null),D=Object(o.a)(T,2),J=D[0],A=D[1];function R(e){return L.apply(this,arguments)}function L(){return(L=Object(s.a)(r.a.mark((function e(t){var a,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://vue-course-api.hexschool.io/api/jay/products?page=".concat(t),e.next=3,fetch(a);case 3:return c=e.sent,e.next=6,c.json();case 6:(l=e.sent).success&&(n({type:"UPDATE_PRODUCT",product:l.products}),x(!1),A(l.pagination.total_pages));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t,a){return z.apply(this,arguments)}function z(){return(z=Object(s.a)(r.a.mark((function t(a,n,c){var s,o,i,u,m;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n?"https://vue-course-api.hexschool.io/api/jay/admin/product/".concat(n):"https://vue-course-api.hexschool.io/api/jay/admin/product",t.next=3,fetch(s,{method:c,body:("PUT"===c||"POST"===c)&&JSON.stringify({data:Object(l.a)({},a)}),credentials:"include",headers:{"content-type":("PUT"===c||"POST"===c)&&"application/json"}});case 3:return o=t.sent,t.next=6,o.json();case 6:i=t.sent,u=i.success,m=i.message,u?(R(),m&&e.success(m)):m&&e.error(m);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(e,t){var a=e.target.checked;q(Object(l.a)(Object(l.a)({},t),{},{is_enabled:a?1:0}),t.id,"PUT")}function G(e){k(e),j||O(!0)}function H(e){q(null,e,"DELETE")}return Object(i.useEffect)((function(){R(_)}),[_]),y?u.a.createElement(b.a,null):u.a.createElement("div",{className:"container"},u.a.createElement("h2",{className:"text-4xl"},"Products"),u.a.createElement(d,{open:j,setOpen:O,product:C,handleChange:function(e){var t=e.target,a=t.name,n=t.value,r=t.checked;"is_enabled"===a&&(n=r?1:0),k((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(c.a)({},a,n))}))},updateProduct:function(){q(C,C.id,"PUT"),O(!1)},addProduct:function(){q(C,null,"POST"),k({}),O(!1)},handleCancel:function(){k({}),O(!1)},setProduct:k,alert:e}),u.a.createElement("table",{className:"w-full table-auto"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{className:"border px-4 py-2"},"\u7522\u54c1"),u.a.createElement("th",{className:"border px-4 py-2"},"\u985e\u5225"),u.a.createElement("th",{className:"border px-4 py-2"},"\u55ae\u4f4d"),u.a.createElement("th",{className:"border px-4 py-2"},"\u539f\u50f9"),u.a.createElement("th",{className:"border px-4 py-2"},"\u7279\u50f9"),u.a.createElement("th",{className:"border px-4 py-2"},"\u555f\u7528"),u.a.createElement("th",{className:"border px-4 py-2"},"\u7de8\u8f2f"),u.a.createElement("th",{className:"border px-4 py-2"},"\u522a\u9664"))),u.a.createElement("tbody",null,a&&a.map((function(e,t){return u.a.createElement(p,{product:e,key:t,updateEnabled:B,openUpdateProduct:G,deleteProduct:H})})))),u.a.createElement(h.a,{dePage:_,setDePage:S,num:J}))}}}]);
//# sourceMappingURL=5.b91176ed.chunk.js.map