(this.webpackJsonpxo=this.webpackJsonpxo||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(6),a=c.n(s),j=(c(12),c(2)),i=(c(13),c(7)),u=(c(14),c(0)),b=function(){var e=Object(n.useState)("player1"),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),a=Object(j.a)(s,2),b=a[0],O=a[1],l=Object(n.useState)(0),o=Object(j.a)(l,2),d=o[0],h=o[1],x=Object(n.useState)(0),f=Object(j.a)(x,2),y=f[0],k=f[1],p=Object(n.useState)(["","","","","","","","",""]),m=Object(j.a)(p,2),v=m[0],z=m[1],G=Object(n.useState)(""),N=Object(j.a)(G,2),g=N[0],S=N[1],C=function(e){return""!==e},w=v.map((function(e,t){return Object(u.jsx)("div",{className:"square",onClick:function(){return function(e){var t=Object(i.a)(v);if(t[e]||b)return 0;O(t.every(C)),z(t),"player1"===c?(t[e]="O",r("player2")):"player2"===c&&(t[e]="X",r("player1"))}(t)},children:e},t)}));return b||b||((v[0]===v[3]&&v[0]===v[6]&&""!==v[0]||v[0]===v[4]&&v[0]===v[8]&&""!==v[0]||v[0]===v[1]&&v[0]===v[2]&&""!==v[0])&&(S("O"===v[0]?"Gracz 1":"Gracz 2"),"O"===v[0]?h((function(e){return e+1})):k((function(e){return e+1})),O(!0)),(v[6]===v[7]&&v[6]===v[8]&&""!==v[6]||v[6]===v[4]&&v[6]===v[2]&&""!==v[6])&&(S("O"===v[6]?"Gracz 1":"Gracz 2"),"O"===v[6]?h((function(e){return e+1})):k((function(e){return e+1})),O(!0)),(v[5]===v[2]&&v[5]===v[8]&&""!==v[5]||v[5]===v[4]&&v[5]===v[3]&&""!==v[5])&&(S("O"===v[5]?"Gracz 1":"Gracz 2"),"O"===v[5]?h((function(e){return e+1})):k((function(e){return e+1})),O(!0)),v[1]===v[4]&&v[1]===v[7]&&""!==v[1]&&(S("O"===v[1]?"Gracz 1":"Gracz 2"),"O"===v[1]?h((function(e){return e+1})):k((function(e){return e+1})),O(!0))),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(){z(["","","","","","","","",""]),S(""),O(!1),r("player1")},className:"reset-btn",children:"Resetuj pola"}),Object(u.jsx)("button",{onClick:function(){k(0),h(0)},className:"reset-btn",children:"Resetuj punkty"}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"score",children:[Object(u.jsxs)("div",{className:"counter",children:["Wynik Gracza 1 ( ",Object(u.jsx)("strong",{children:"O"})," ) ",Object(u.jsx)("p",{children:d})]}),Object(u.jsxs)("div",{className:"counter",children:["Wynik Gracza 2 ( ",Object(u.jsx)("strong",{children:"X"})," ) ",Object(u.jsx)("p",{children:y})]})]}),g?Object(u.jsxs)("h1",{children:["Zwyci\u0119\u017ca ",g," "]}):null,Object(u.jsx)("div",{className:"board",children:w})]})};var O=function(){var e=Object(n.createRef)(),t=Object(n.useState)(!1),c=Object(j.a)(t,2),r=c[0],s=c[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{children:["TIC TAC TOE ",Object(u.jsx)("br",{})," (k\xf3\u0142ko i krzy\u017cyk)"]}),Object(u.jsx)("button",{className:"rules-btn",onClick:function(){e.current.classList.toggle("active"),s((function(e){return!e}))},children:r?"Zamknij zasady":"Poka\u017c zasady"}),Object(u.jsx)("div",{className:"rules",ref:e,children:Object(u.jsx)("h1",{children:"Zasady gry w k\xf3\u0142ko i krzy\u017cyk"})}),Object(u.jsx)(b,{})]})})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9d958b25.chunk.js.map