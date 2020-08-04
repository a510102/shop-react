(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[0],{25:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);a(48);function c(){return r.a.createElement("div",{className:"load h-screen"},"load")}},37:function(e,t,a){e.exports=a(51)},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=a(13),s=a(11),u=a(29),i=a(6),h={carts:{},products:[],auth:!1},m=a(7),p=a(24),b=a(31),d=a(17),f=a.n(d),E=a(23),g=a(22),v=a(3);function x(){var e=Object(v.g)(),t=Object(v.h)().pathname,a=Object(s.c)((function(e){return e.cartsState.carts})),c=Object(s.c)((function(e){return e.authState.auth})),o=Object(s.b)(),l=Object(n.useState)(!1),u=Object(g.a)(l,2),i=u[0],h=u[1],p=function(){var t=Object(E.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://vue-course-api.hexschool.io/logout",t.next=3,fetch("https://vue-course-api.hexschool.io/logout",{method:"POST"});case 3:return a=t.sent,t.next=6,a.json();case 6:t.sent.success&&(o({type:"LOGO_OUT"}),h(!1),e.replace("/shop-react/home"));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b="p-3 relative block mt-4 lg:inline-block lg:mt-0 text-white mr-4 border rounded-lg",d="inline-block text-sm px-4 py-2 leading-none border rounded border-white border-transparent text-teal-500 bg-white mt-4 lg:mt-0",x="w-full block flex-grow lg:flex lg:items-center lg:w-auto",O="p-3 relative block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",j="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",w="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto";return r.a.createElement("nav",{className:" bg-teal-400 p-6 shadow-md rounded rounded-t-none"},r.a.createElement("div",{className:"container mx-auto flex items-center justify-between flex-wrap"},r.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},r.a.createElement("span",{className:"font-semibold text-3xl tracking-tight"},"Jay's Shop")),r.a.createElement("div",{className:"block lg:hidden",onClick:function(){h(!i)}},r.a.createElement("button",{className:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"},r.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),r.a.createElement("div",{className:i?x:w},r.a.createElement("div",{className:"text-sm lg:flex-grow"},c?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,{to:"/shop-react/products",onClick:function(){h(!1)},className:"/shop-react/products"===t?b:O},"Products"),r.a.createElement(m.b,{to:"/shop-react/orderList",onClick:function(){h(!1)},className:"/shop-react/orderList"===t?b:O},"OrderList"),r.a.createElement(m.b,{to:"/shop-react/coupon",onClick:function(){h(!1)},className:"/shop-react/coupon"===t?b:O},"Coupon")):r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,{to:"/shop-react/home",onClick:function(){h(!1)},className:"/shop-react/home"===t?b:O},"Home"),r.a.createElement(m.b,{to:"/shop-react/about",onClick:function(){h(!1)},className:"/shop-react/about"===t?b:O},"About")),r.a.createElement(m.b,{to:"/shop-react/shop",onClick:function(){h(!1)},className:"/shop-react/shop"===t?b:O},"Shop"),!c&&r.a.createElement(m.b,{to:"/shop-react/shopcart",onClick:function(){h(!1)},className:"/shop-react/shopcart"===t?b:O},"ShopCart",a.carts&&a.carts.length>0&&r.a.createElement("span",{className:"absolute  bottom-0 right-0 w-5 h-5 flex items-center justify-center text-red-500 border border-red-500 rounded-full"},a.carts.length))),r.a.createElement("div",null,c?r.a.createElement(m.b,{to:"/shop-react/home",onClick:p,className:j},"LogOut"):r.a.createElement(m.b,{to:"/shop-react/login",onClick:function(){h(!1)},className:"/shop-react/login"===t?d:j},"Login")))))}var O=function(){return r.a.createElement("div",{className:"bg-teal-500 h-12 flex items-center justify-center"},r.a.createElement("p",{className:"text-gray-200 text-md"},"2020 / 7 \xa9 Jay"))},j=a(32),w=a(33),y=a(35),k=a(34),N=function(e){Object(y.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1,error:""},e}return Object(w.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,error:e})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Has Error, ",this.state.error):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),a}(n.Component),C=a(25),S=a(36);function z(e){var t=e.auth,a=e.component,n=Object(S.a)(e,["auth","component"]);return r.a.createElement(v.b,Object.assign({},n,{render:function(e){return t?r.a.createElement(a,e):r.a.createElement(v.a,{to:{pathname:"/shop-react/home"}})}}))}var L=r.a.lazy((function(){return a.e(9).then(a.bind(null,66))})),T=r.a.lazy((function(){return a.e(5).then(a.bind(null,58))})),A=r.a.lazy((function(){return a.e(3).then(a.bind(null,59))})),P=r.a.lazy((function(){return a.e(7).then(a.bind(null,63))})),_=r.a.lazy((function(){return a.e(8).then(a.bind(null,67))})),D=r.a.lazy((function(){return a.e(12).then(a.bind(null,68))})),U=r.a.lazy((function(){return a.e(4).then(a.bind(null,64))})),H=r.a.lazy((function(){return a.e(6).then(a.bind(null,65))})),J=r.a.lazy((function(){return a.e(10).then(a.bind(null,60))})),F=r.a.lazy((function(){return a.e(13).then(a.bind(null,61))}));function G(){var e=Object(s.c)((function(e){return e.authState.auth}));return r.a.createElement(N,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(C.a,null)},r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/shop-react",render:function(){return r.a.createElement(v.a,{to:"/shop-react/home"})}}),r.a.createElement(v.b,{exact:!0,path:"/shop-react/home",component:T}),r.a.createElement(v.b,{path:"/shop-react/about",component:A}),r.a.createElement(v.b,{path:"/shop-react/login",component:L}),r.a.createElement(v.b,{exact:!0,path:"/shop-react/shop",component:_}),r.a.createElement(v.b,{path:"/shop-react/shop/:id",component:F}),r.a.createElement(v.b,{path:"/shop-react/shopcart",component:D}),r.a.createElement(z,{exact:!0,path:"/shop-react/products",auth:e,component:P}),r.a.createElement(z,{exact:!0,path:"/shop-react/coupon",auth:e,component:U}),r.a.createElement(z,{exact:!0,path:"/shop-react/orderList",auth:e,component:H}),r.a.createElement(v.b,{component:J}))))}a(49);function I(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(x,null),r.a.createElement(p.a,Object.assign({template:b.a},{position:"top center",timeout:3e3,offset:"30px",transition:"fade"}),r.a.createElement(G,null))),r.a.createElement(O,null))}a(50);var M=Object(l.b)({cartsState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CART":return Object(i.a)(Object(i.a)({},e),{},{carts:Object(i.a)({},t.cart)});case"UPDATE_PRICE":return Object(i.a)(Object(i.a)({},e),{},{carts:Object(i.a)(Object(i.a)({},e.carts),{},{final_total:t.price})});default:return e}},productsState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PRODUCT":return Object(i.a)(Object(i.a)({},e),{},{products:Object(u.a)(t.product)});default:return e}},authState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGO_IN":return Object(i.a)(Object(i.a)({},e),{},{auth:!0});case"LOGO_OUT":return Object(i.a)(Object(i.a)({},e),{},{auth:!1});default:return e}}}),R=Object(l.c)(M);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:R},r.a.createElement(I,null))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.7abdf26e.chunk.js.map