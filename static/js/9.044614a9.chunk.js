(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[9],{113:function(e,t,r){"use strict";var a=r(2),n=r.n(a),i=r(10),o=r.n(i),s=r(0),c=r.n(s),l=r(11),d=r(7),u=r(25),b=r(49),p=r(52),h=r(1),f=["prefixCls","className","style","color","colors","onChange"],g=["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"],j=c.a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-block":r,i=e.className,s=e.style,c=e.color,j=e.colors,m=void 0===j?g:j,v=e.onChange,x=o()(e,f),O="string"===typeof c&&Object(l.a)(c)?Object(d.b)(c):c,w=c?Object(d.f)(O):"",y=function(e,t){"string"===typeof e&&Object(l.a)(e)&&/(3|6)/.test(String(e.length))&&v&&v(Object(d.a)(Object(d.b)(e)))};return Object(h.jsxs)("div",n()({ref:t,className:[a,i].filter(Boolean).join(" "),style:n()({width:170,borderRadius:6,background:"rgb(255, 255, 255)",boxShadow:"rgb(0 0 0 / 10%) 0 1px",position:"relative"},s)},x,{children:[Object(h.jsx)("div",{style:{width:0,height:0,borderStyle:"solid",borderWidth:"0 10px 10px",borderColor:"transparent transparent "+w,position:"absolute",top:-10,left:"50%",marginLeft:-10}}),Object(h.jsx)("div",{title:w,style:{backgroundColor:""+w,color:Object(u.a)(w),height:110,fontSize:18,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"center",justifyContent:"center"},children:w.toLocaleUpperCase()}),Object(h.jsx)(p.a,{colors:m,color:w,style:{paddingLeft:10,paddingTop:10},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:4,height:22,width:22}},onChange:function(e){v&&v(Object(d.a)(e))}}),Object(h.jsx)(b.a,{value:w.toLocaleUpperCase(),onChange:function(e,t){return y(t)},onBlur:function(e){var t=e.target.value;e.target.value=t.slice(0,6),y(t.slice(0,6))},inputStyle:{height:22,outline:0,borderRadius:3,color:"#666",padding:"0 7px"},style:{padding:10,paddingTop:0,borderRadius:"0 0 6px 6px"}})]}))}));j.displayName="Block",t.a=j},25:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(7),n=function(e){if(!e)return"#fff";var t=Object(a.a)(e);return(299*t.rgb.r+587*t.rgb.g+114*t.rgb.b)/1e3>=128?"#000":"#fff"}},454:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var a=r(44),n=r(45),i=r(46),o=r(4),s=r(0),c=r(113),l=r(47),d=r(6),u=r(1);function b(){var e=Object(s.useContext)(d.a),t=e.hsva,r=e.dispatch;return Object(u.jsx)("div",{style:{width:300},children:Object(u.jsx)(c.a,{color:t,onChange:function(e){r({hsva:Object(o.a)(Object(o.a)({},t),e.hsva)})}})})}var p=function(e){Object(n.a)(o,e);var t=Object(i.a)(o);function o(){var e;Object(a.a)(this,o);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).editorUrl="/packages/color-block/README.md",e.getMdStr=function(){return r.e(29).then(r.bind(null,423))},e.example=Object(u.jsx)(b,{}),e}return o}(l.a)},47:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r(44),n=r(50),i=r(45),o=r(46),s=r(0),c=r(51),l=r(48),d=r.n(l),u=r(1),b=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).editorUrl=void 0,n.getMdStr=void 0,n.example=void 0,n.state={mdStr:""},n}return Object(n.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:d.a.warpper,children:[Object(u.jsxs)("div",{className:d.a.markdown,children:[this.example&&Object(u.jsx)("div",{className:d.a.example,children:this.example}),Object(u.jsx)(c.a,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px"}})]}),Object(u.jsxs)("div",{className:d.a.footer,children:[Object(u.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),Object(u.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),Object(u.jsxs)("p",{children:["Copyright \xa9 2021"," ",Object(u.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(s.Component)},48:function(e,t,r){e.exports={markdown:"Markdown_markdown__2igKS",warpper:"Markdown_warpper__1Ekz5",example:"Markdown_example__3LCkn",footer:"Markdown_footer__2D6Vq"}},49:function(e,t,r){"use strict";var a=r(5),n=r(2),i=r.n(n),o=r(10),s=r.n(o),c=r(0),l=r.n(c),d=r(1),u=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],b=l.a.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-editable-input":r,o=e.placement,l=void 0===o?"bottom":o,b=e.label,p=e.value,h=e.className,f=e.style,g=e.labelStyle,j=e.inputStyle,m=e.onChange,v=e.onBlur,x=s()(e,u),O=Object(c.useState)(p),w=Object(a.a)(O,2),y=w[0],k=w[1],C=Object(c.useRef)(!1);Object(c.useEffect)((function(){e.value!==y&&(C.current||k(e.value))}),[e.value]);var S={};return"bottom"===l&&(S.flexDirection="column"),"top"===l&&(S.flexDirection="column-reverse"),"left"===l&&(S.flexDirection="row-reverse"),Object(d.jsxs)("div",{className:[n,h||""].filter(Boolean).join(" "),style:i()({position:"relative",alignItems:"center",display:"flex",fontSize:11},S,f),children:[Object(d.jsx)("input",i()({ref:t,value:y,onChange:function(e,t){var r=t||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&m&&m(e,r);var a=function(e){return Number(String(e).replace(/%/g,""))}(r);isNaN(a)||m&&m(e,a),k(r)},onBlur:function(t){C.current=!1,k(e.value),v&&v(t)},autoComplete:"off",onFocus:function(){return C.current=!0}},x,{style:i()({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},j)})),b&&Object(d.jsx)("span",{style:i()({color:"rgb(153, 153, 153)",textTransform:"capitalize"},g),children:b})]})}));b.displayName="EditableInput",t.a=b},52:function(e,t,r){"use strict";var a=r(2),n=r.n(a),i=r(10),o=r.n(i),s=r(0),c=r.n(s),l=r(7),d=r(1),u=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],b=c.a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-swatch":r,i=e.className,s=e.color,b=e.colors,p=void 0===b?[]:b,h=e.style,f=e.rectProps,g=void 0===f?{}:f,j=e.onChange,m=e.addonAfter,v=e.addonBefore,x=e.rectRender,O=o()(e,u),w=n()({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},g.style),y=function(e){j&&j(Object(l.b)(e))};return Object(d.jsxs)("div",n()({ref:t},O,{className:[a,i||""].filter(Boolean).join(" "),style:n()({display:"flex",flexWrap:"wrap",position:"relative"},h),children:[v&&c.a.isValidElement(v)&&v,p&&Array.isArray(p)&&p.map((function(e,t){var r="",a="";"string"===typeof e&&(r=e,a=e),"object"===typeof e&&e.color&&(r=e.title||e.color,a=e.color);var i=s&&s.toLocaleLowerCase()===a.toLocaleLowerCase();if(x)return x({key:t,title:r,color:a,checked:!!i,style:n()({},w,{background:a}),onClick:function(){return y(a)}});var o=g.children&&c.a.isValidElement(g.children)?c.a.cloneElement(g.children,{color:a,checked:i}):null;return Object(d.jsx)("div",n()({tabIndex:0,title:r,onClick:function(){return y(a)}},g,{children:o,style:n()({},w,{background:a})}),t)})),m&&c.a.isValidElement(m)&&m]}))}));b.displayName="Swatch",t.a=b}}]);
//# sourceMappingURL=9.044614a9.chunk.js.map