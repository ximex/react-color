(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[26],{47:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var s=r(44),i=r(50),a=r(45),c=r(46),n=r(0),o=r(51),l=r(48),h=r.n(l),d=r(1),j=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(e){var i;return Object(s.a)(this,r),(i=t.call(this,e)).editorUrl=void 0,i.getMdStr=void 0,i.example=void 0,i.state={mdStr:""},i}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:h.a.warpper,children:[Object(d.jsxs)("div",{className:h.a.markdown,children:[this.example&&Object(d.jsx)("div",{className:h.a.example,children:this.example}),Object(d.jsx)(o.a,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px"}})]}),Object(d.jsxs)("div",{className:h.a.footer,children:[Object(d.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),Object(d.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),Object(d.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),Object(d.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),Object(d.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),Object(d.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),Object(d.jsxs)("p",{children:["Copyright \xa9 2021"," ",Object(d.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(n.Component)},476:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return w}));var s=r(44),i=r(45),a=r(46),c=r(4),n=r(0),o=r.n(n),l=r(2),h=r.n(l),d=r(10),j=r.n(d),u=r(11),b=r(7),p=r(1),g=["prefixCls","className","style","onChange","color","lightness"],m=o.a.forwardRef((function(e,t){var r=e.prefixCls,s=void 0===r?"w-color-slider":r,i=e.className,a=e.style,c=e.onChange,n=e.color,o=e.lightness,l=void 0===o?[80,65,50,35,20]:o,d=j()(e,g),m="string"===typeof n&&Object(u.a)(n)?Object(b.b)(n):n||{};return Object(p.jsx)("div",h()({ref:t,style:h()({display:"flex"},a),className:[s,i||""].filter(Boolean).join(" ")},d,{children:l.map((function(e,t){var r="hsl("+Object(b.i)(m).h+", 50%, "+e+"%)",s=r===Object(b.h)(m);return Object(p.jsx)("div",{style:{paddingLeft:1,width:100/l.length+"%",boxSizing:"border-box"},children:Object(p.jsx)("div",{onClick:function(e){return function(e,t){c&&c(Object(b.a)(Object(b.d)(e)),t)}(r,e)},style:h()({backgroundColor:r,height:12,cursor:"pointer"},s?{borderRadius:2,transform:"scale(1, 1.5)"}:{})})},t)}))}))}));m.displayName="Slider";var f=m,O=r(47),x=r(6);function v(){var e=Object(n.useContext)(x.a),t=e.hsva,r=e.dispatch;return Object(p.jsx)("div",{style:{width:256},children:Object(p.jsx)(f,{color:t,onChange:function(e){r({hsva:Object(c.a)(Object(c.a)({},t),e.hsv)})}})})}var w=function(e){Object(i.a)(c,e);var t=Object(a.a)(c);function c(){var e;Object(s.a)(this,c);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).editorUrl="/packages/color-slider/README.md",e.getMdStr=function(){return r.e(45).then(r.bind(null,473))},e.example=Object(p.jsx)(v,{}),e}return c}(O.a)},48:function(e,t,r){e.exports={markdown:"Markdown_markdown__2igKS",warpper:"Markdown_warpper__1Ekz5",example:"Markdown_example__3LCkn",footer:"Markdown_footer__2D6Vq"}}}]);
//# sourceMappingURL=26.b151c7ac.chunk.js.map