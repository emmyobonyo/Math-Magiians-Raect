(this["webpackJsonpmath-magicians-js"]=this["webpackJsonpmath-magicians-js"]||[]).push([[0],{23:function(t,e,c){},24:function(t,e,c){},34:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),o=c(15),l=c.n(o),i=(c(23),c(24),c(9)),s=c(2),r=c(4),u=c(18),b=c(13),j=c.n(b);function h(t,e,c){var n=j()(t),a=j()(e);if("+"===c)return n.plus(a).toString();if("-"===c)return n.minus(a).toString();if("x"===c)return n.times(a).toString();if("/"===c)try{return n.div(a).toString()}catch(o){return"Can't divide by 0."}if("%"===c)return n.mod(a).toString();throw Error("Unknown operation '".concat(c,"'"))}var d=c(0);var x=function(){var t=Object(n.useState)({total:0,next:null,operation:null}),e=Object(u.a)(t,2),c=e[0],a=e[1],o=function(t){var e,n;a(Object(r.a)(Object(r.a)({},c),(e=c,"AC"===(n=t.target.innerHTML)?{total:0,next:null,operation:null}:n.match(/[0-9]+/)?"0"===n&&"0"===e.next?{}:e.operation?e.next?Object(r.a)(Object(r.a)({},e),{},{next:e.next+n}):Object(r.a)(Object(r.a)({},e),{},{next:n}):e.next?{next:e.next+n,total:null}:{next:n,total:null}:"."===n?e.next?e.next.includes(".")?Object(r.a)({},e):Object(r.a)(Object(r.a)({},e),{},{next:"".concat(e.next,".")}):e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.total,".")}:{total:"0."}:"="===n?e.next&&e.operation?{total:h(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===n?e.next?Object(r.a)(Object(r.a)({},e),{},{next:(-1*parseFloat(e.next)).toString()}):e.total?Object(r.a)(Object(r.a)({},e),{},{total:(-1*parseFloat(e.total)).toString()}):{}:e.next||!e.total||e.operation?e.operation?e.total&&!e.next?Object(r.a)(Object(r.a)({},e),{},{operation:n}):{total:h(e.total,e.next,e.operation),next:null,operation:n}:e.next?{total:e.next,next:null,operation:n}:{operation:n}:Object(r.a)(Object(r.a)({},e),{},{operation:n}))))},l=c.total,i=c.next,s=c.operation;return Object(d.jsxs)("div",{className:"calculator",children:[Object(d.jsx)("div",{className:"calculator-screen",children:Object(d.jsx)("p",{className:"calculator-digits",children:"".concat(null!==l?l:""," ").concat(null!==s?s:""," ").concat(null!==i?i:"")})}),Object(d.jsxs)("div",{className:"calculator-buttons",children:[Object(d.jsx)("button",{className:"calculator-button",type:"button",onClick:o,children:"AC"}),Object(d.jsx)("button",{className:"calculator-button",type:"button",onClick:o,children:"+/-"}),Object(d.jsx)("button",{className:"calculator-button",type:"button",onClick:o,children:"%"}),Object(d.jsx)("button",{className:"calculator-button orange-button",type:"button",onClick:o,children:"/"}),Object(d.jsx)("button",{className:"calculator-button",type:"button",onClick:o,children:"7"}),Object(d.jsx)("button",{className:"calculator-button",type:"button",onClick:o,children:"8"}),Object(d.jsx)("button",{className:"calculator-button",type:"button",onClick:o,children:"9"}),Object(d.jsx)("button",{className:"calculator-button orange-button",type:"button",onClick:o,children:"x"}),Object(d.jsx)("button",{className:"calculator-button",type:"button",onClick:o,children:"4"}),Object(d.jsx)("button",{className:"calculator-button",type:"button",onClick:o,children:"5"}),Object(d.jsx)("button",{className:"calculator-button",type:"button",onClick:o,children:"6"}),Object(d.jsx)("button",{className:"calculator-button orange-button",type:"button",onClick:o,children:"-"}),Object(d.jsx)("button",{className:"calculator-button",type:"button",onClick:o,children:"1"}),Object(d.jsx)("button",{className:"calculator-button",type:"button",onClick:o,children:"2"}),Object(d.jsx)("button",{className:"calculator-button",type:"button",onClick:o,children:"3"}),Object(d.jsx)("button",{className:"calculator-button orange-button",type:"button",onClick:o,children:"+"})]}),Object(d.jsxs)("div",{className:"calculator-buttons-bottom",children:[Object(d.jsx)("button",{className:"calculator-button-bottom button-one",type:"button",onClick:o,children:"0"}),Object(d.jsx)("button",{className:"calculator-button-bottom button-two",type:"button",onClick:o,children:"."}),Object(d.jsx)("button",{className:"calculator-button-bottom button-three orange-button-bottom",type:"button",onClick:o,children:"="})]})]})};var O=function(){return Object(d.jsxs)("div",{className:"calculator-page",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"calculator-page-heading",children:"Let us do some Math"}),Object(d.jsx)("p",{children:"These are the calculations that you can perform"}),Object(d.jsxs)("ul",{className:"calculator-links",children:[Object(d.jsxs)("li",{className:"calculator-links-li",children:[Object(d.jsx)("b",{children:"Addition: "}),"Adding items together."]}),Object(d.jsxs)("li",{className:"calculator-links-li",children:[Object(d.jsx)("b",{children:"Subtraction: "}),"Subtracting things together."]}),Object(d.jsxs)("li",{className:"calculator-links-li",children:[Object(d.jsx)("b",{children:"Multiplication: "}),"Multiplying things together."]}),Object(d.jsxs)("li",{className:"calculator-links-li",children:[Object(d.jsx)("b",{children:"Division: "}),"Divide things togther."]}),Object(d.jsxs)("li",{className:"calculator-links-li",children:[Object(d.jsx)("b",{children:"Modulus: "}),"Multiply things together."]})]})]}),Object(d.jsx)(x,{})]})};var p=function(){return Object(d.jsx)("div",{className:"quote-page",children:Object(d.jsx)("h2",{children:"Programming is not about numbers, data structures, variables, classes, debugging, git-flow, cramming, copying and pasting, stack-overflow or even functions. It is about understanding."})})};var m=function(){return Object(d.jsxs)("div",{className:"home-div",children:[Object(d.jsx)("h2",{children:"Welcome to our page"}),Object(d.jsx)("p",{children:"Hello there, glad you stopped by. We appreciate the fact that you have a calculator on your phone -- probably a better one -- but you decided to spend some data to check out our site. Or Maybe your phone just run out of battery? Either way we are glad that you came and hopefully your phone runs out of battery more often."}),Object(d.jsx)("p",{children:"So to the basics. You can perfom basic mathematical calculations (Additions, Divisions, Multiplication, Modulus, and Subtraction). What about the other Arithmetic operations? You may have to buy an actual calculator for that."})]})};var g=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("nav",{className:"navigation",children:[Object(d.jsx)("h3",{className:"logo",children:Object(d.jsx)(i.b,{to:"/",children:"Math Magicians"})}),Object(d.jsxs)("ul",{className:"navigation-links",children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"link-borders",children:Object(d.jsx)(i.b,{to:"/calculator",children:"Calculator"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/quote",children:"Quote"})})]})]}),Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/calculator",children:Object(d.jsx)(O,{})}),Object(d.jsx)(s.a,{path:"/quote",children:Object(d.jsx)(p,{})}),Object(d.jsx)(s.a,{path:"/",children:Object(d.jsx)(m,{})})]})]})})};var y=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(g,{})})};l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c8fb5f1e.chunk.js.map