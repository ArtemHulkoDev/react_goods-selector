(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(4),o=c(5),l=c(7),r=c(6),i=c(1),d=c.n(i),u=(c(12),c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:"Jam"},e}return Object(o.a)(c,[{key:"handleClick",value:function(e){this.setState({selectedGood:e})}},{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(u.jsxs)("main",{className:"section container",children:[""===t?Object(u.jsx)("h1",{className:"title",children:"No goods selected"}):Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return e.handleClick("")}})]}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:b.map((function(c){return Object(u.jsxs)("tr",{"data-cy":"Good",className:c===t?"has-background-success-light":"-",children:[Object(u.jsx)("td",{children:t!==c?Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.handleClick(c)},children:"+"}):Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return e.handleClick("")},children:"-"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(d.a.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.407c72df.chunk.js.map