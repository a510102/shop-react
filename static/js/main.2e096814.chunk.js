(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[0],{12:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),r=Object(n.createContext)({})},20:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);a(44);function c(){return r.a.createElement("div",{className:"load"},"load")}},33:function(e,t,a){e.exports=a(46)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=a(11),s=a(5),u=a(19),i=a(25),h=a(13),m=a.n(h),p=a(18),d=a(1),b=a(12);function f(){var e=Object(d.g)(),t=Object(d.h)().pathname,a=Object(n.useContext)(b.a),c=a.carts,o=a.user,u=a.userDispatch,i=Object(n.useState)(!1),h=Object(l.a)(i,2),f=h[0],E=h[1],v=function(){var t=Object(p.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://vue-course-api.hexschool.io/logout",t.next=3,fetch("https://vue-course-api.hexschool.io/logout",{method:"POST"});case 3:return a=t.sent,t.next=6,a.json();case 6:t.sent.success&&(u({type:"LOGO_OUT"}),e.replace("/shop-react/home"));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g="p-3 relative block mt-4 lg:inline-block lg:mt-0 text-white mr-4 border rounded-lg",x="inline-block text-sm px-4 py-2 leading-none border rounded border-white border-transparent text-teal-500 bg-white mt-4 lg:mt-0",w="w-full block flex-grow lg:flex lg:items-center lg:w-auto",O="p-3 relative block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",y="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",j="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto";return r.a.createElement("nav",{className:" bg-teal-400 p-6 shadow-md rounded rounded-t-none"},r.a.createElement("div",{className:"container mx-auto flex items-center justify-between flex-wrap"},r.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},r.a.createElement("span",{className:"font-semibold text-3xl tracking-tight"},"Jay's Shop")),r.a.createElement("div",{className:"block lg:hidden",onClick:function(){E(!f)}},r.a.createElement("button",{className:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"},r.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),r.a.createElement("div",{className:f?w:j},r.a.createElement("div",{className:"text-sm lg:flex-grow"},o.auth?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/shop-react/products",className:"/shop-react/products"===t?g:O},"Products"),r.a.createElement(s.b,{to:"/shop-react/orderList",className:"/shop-react/orderList"===t?g:O},"OrderList"),r.a.createElement(s.b,{to:"/shop-react/coupon",className:"/shop-react/coupon"===t?g:O},"Coupon")):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/shop-react/home",className:"/shop-react/home"===t?g:O},"Home"),r.a.createElement(s.b,{to:"/shop-react/about",className:"/shop-react/about"===t?g:O},"About")),r.a.createElement(s.b,{to:"/shop-react/shop",className:"/shop-react/shop"===t?g:O},"Shop"),!o.auth&&r.a.createElement(s.b,{to:"/shop-react/shopcart",className:"/shop-react/shopcart"===t?g:O},"ShopCart",c.carts&&c.carts.length>0&&r.a.createElement("span",{className:"absolute  bottom-0 right-0 w-5 h-5 flex items-center justify-center text-red-500 border border-red-500 rounded-full"},c.carts.length))),r.a.createElement("div",null,o.auth?r.a.createElement(s.b,{to:"/shop-react/home",onClick:v,className:y},"LogOut"):r.a.createElement(s.b,{to:"/shop-react/login",className:"/shop-react/login"===t?x:y},"Login")))))}var E=function(){return r.a.createElement("div",{className:"bg-teal-500 h-12"})},v=a(27),g=a(28),x=a(31),w=a(30),O=function(e){Object(x.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1,error:""},e}return Object(g.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,error:e})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Has Error, ",this.state.error):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),a}(n.Component),y=a(20),j=a(32);function N(e){var t=e.auth,a=e.component,n=Object(j.a)(e,["auth","component"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return t?r.a.createElement(a,e):r.a.createElement(d.a,{to:{pathname:"/shop-react/home"}})}}))}var k=r.a.lazy((function(){return a.e(9).then(a.bind(null,53))})),C=r.a.lazy((function(){return a.e(5).then(a.bind(null,54))})),z=r.a.lazy((function(){return a.e(3).then(a.bind(null,55))})),D=r.a.lazy((function(){return a.e(7).then(a.bind(null,60))})),L=r.a.lazy((function(){return a.e(8).then(a.bind(null,62))})),S=r.a.lazy((function(){return a.e(12).then(a.bind(null,63))})),T=r.a.lazy((function(){return a.e(4).then(a.bind(null,61))})),A=r.a.lazy((function(){return a.e(6).then(a.bind(null,59))})),P=r.a.lazy((function(){return a.e(10).then(a.bind(null,56))})),_=r.a.lazy((function(){return a.e(13).then(a.bind(null,57))}));function H(){var e=Object(n.useContext)(b.a).user;return r.a.createElement(O,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(y.a,null)},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/shop-react",render:function(){return r.a.createElement(d.a,{to:"/shop-react/home"})}}),r.a.createElement(d.b,{exact:!0,path:"/shop-react/home",component:C}),r.a.createElement(d.b,{path:"/shop-react/about",component:z}),r.a.createElement(d.b,{path:"/shop-react/login",component:k}),r.a.createElement(d.b,{exact:!0,path:"/shop-react/shop",component:L}),r.a.createElement(d.b,{path:"/shop-react/shop/:id",component:_}),r.a.createElement(d.b,{path:"/shop-react/shopcart",component:S}),r.a.createElement(N,{exact:!0,path:"/shop-react/products",auth:e.auth,component:D}),r.a.createElement(N,{exact:!0,path:"/shop-react/coupon",auth:e.auth,component:T}),r.a.createElement(N,{exact:!0,path:"/shop-react/orderList",auth:e.auth,component:A}),r.a.createElement(d.b,{component:P}))))}var U=a(10),G=a(29);function R(e,t){return r.a.useReducer(Object(G.a)(e),t)}var B=function(e,t){switch(t.type){case"UPDATE_CART":return t.cart;case"UPDATE_PRICE":return Object(U.a)(Object(U.a)({},e),{},{final_total:t.price});default:return e}},F=function(e,t){switch(t.type){case"UPDATE_PRODUCT":return t.product;case"CHANGE_CATEGORY":return e.filter((function(e){return e.category===t.category}));default:return e}},I=function(e,t){switch(t.type){case"LOGO_IN":return Object(U.a)(Object(U.a)({},e),{},{auth:!0});case"LOGO_OUT":return Object(U.a)(Object(U.a)({},e),{},{auth:!1});default:return e}};function J(){var e=R(B,[]),t=Object(l.a)(e,2),a=t[0],n=t[1],c=R(F,[]),o=Object(l.a)(c,2),h=o[0],m=o[1],p=R(I,{auth:!1}),d=Object(l.a)(p,2),v=d[0],g=d[1];return r.a.createElement("div",{className:""},r.a.createElement(b.a.Provider,{value:{carts:a,products:h,user:v,cartDispatch:n,productDispatch:m,userDispatch:g}},r.a.createElement(s.a,null,r.a.createElement(f,null),r.a.createElement(u.a,Object.assign({template:i.a},{position:"top center",timeout:3e3,offset:"30px",transition:"fade"}),r.a.createElement(H,null)))),r.a.createElement(E,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.2e096814.chunk.js.map