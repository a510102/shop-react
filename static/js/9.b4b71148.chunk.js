(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[9],{60:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(17),s=a.n(n),o=a(23),c=a(25),r=a(6),l=a(22),u=a(0),i=a.n(u),m=a(3),p=a(24),d=a(11),b=a(26);function h(){var e=Object(m.g)(),t=Object(p.b)(),a=Object(d.b)(),n=Object(u.useState)({username:"",password:""}),h=Object(l.a)(n,2),f=h[0],w=h[1],x=Object(u.useState)(!1),g=Object(l.a)(x,2),y=g[0],E=g[1];function O(e){var t=e.target,a=t.name,n=t.value;w((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(c.a)({},a,n))}))}function j(){return(j=Object(o.a)(s.a.mark((function n(o){var c,r,l,u,i,m;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o.preventDefault(),c=f.username,r=f.password,!c||!r){n.next=15;break}return E(!0),"https://vue-course-api.hexschool.io/admin/signin",n.next=7,fetch("https://vue-course-api.hexschool.io/admin/signin",{method:"POST",body:JSON.stringify(f),credentials:"include",headers:{"content-type":"application/json"}});case 7:return l=n.sent,n.next=10,l.json();case 10:u=n.sent,i=u.success,m=u.message,i?(E(!1),a({type:"LOGO_IN"}),e.push("/shop-react/products")):(E(!1),e.replace("/shop-react/login"),t.error(m)),n.next=16;break;case 15:!c&&r?t.show("\u8acb\u8f38\u5165E-mail"):!r&&c?t.show("\u8acb\u8f38\u5165Password"):t.show("\u8acb\u8f38\u5165Email \u8ddfPassword");case 16:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return y?i.a.createElement(b.a,null):i.a.createElement("div",{className:"w-full sm:max-w-xs mx-auto mt-4 h-screen"},i.a.createElement("form",{onSubmit:function(e){return j.apply(this,arguments)},className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},i.a.createElement("h2",{className:"my-1 text-4xl text-teal-500"},"LogoIn"),i.a.createElement("section",{className:"my-8"},i.a.createElement("label",{className:"block text-teal-500 text-sm font-bold mb-2"}," Email :"),i.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"email",placeholder:"email",name:"username",onChange:O,value:f.username})),i.a.createElement("section",{className:"mb-8"},i.a.createElement("label",{className:"block text-teal-500 text-sm font-bold mb-2"}," Password :"),i.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",type:"current-password",placeholder:"password",name:"password",onChange:O,value:f.password})),i.a.createElement("section",{className:"flex items-center justify-between"},i.a.createElement("button",{className:"bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit"},"Submit"),i.a.createElement("button",{className:"inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800",onClick:function(){e.push("/shop-react/home")}},"Back"))))}}}]);
//# sourceMappingURL=9.b4b71148.chunk.js.map