(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[713],{363:function(e){function r(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=function(){return[]},r.resolve=r,r.id=363,e.exports=r},2664:function(e,r,t){"use strict";t.d(r,{Z:function(){return j}});var o=t(2951),n=t(1976),i=t(7591),s=t(3415),a=t(1473),c=(t(6991),{markdown:"Markdown_markdown__pdFcg",editor:"Markdown_editor__ktea2",warpper:"Markdown_warpper__j-FaN",example:"Markdown_example__q3W5x",footer:"Markdown_footer__ShQo5"}),l=t(189),d=t(3782),u=t(1843),h=t(7963),f=t(2094),p=t(5142),m=t(9286),g=["inline","node"],x=["data-meta"];function v(e){return(0,m.jsx)(u.Z,{disableCopy:!0,source:e.source,style:{padding:"20px 26px",minHeight:120},components:{code:function(r){var t,o=r.inline,n=r.node,i=(0,d.Z)(r,g),s=i,a=s["data-meta"],c=(0,d.Z)(s,x);if(o||!(0,p.pN)(a))return(0,m.jsx)("code",(0,l.Z)({},i));var u=null===(t=n.position)||void 0===t?void 0:t.start.line,v=(0,p.Mx)(a)||String(u),b=e.components["".concat(v)];if(v&&"function"===typeof b){var j=(0,f.U)(n.children),w=(0,p.aE)(a);return(0,m.jsx)(h.Z,{toolbar:w.title||"Example Display",code:(0,m.jsx)("code",(0,l.Z)({},c)),text:j,children:(0,m.jsx)(b,{})})}return(0,m.jsx)("code",(0,l.Z)({},c))}}})}var b=function(e){var r=e.editorUrl;return r?(0,m.jsx)("a",{className:c.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(r),children:"Edit this page"}):null},j=function(e){(0,i.Z)(t,e);var r=(0,s.Z)(t);function t(e){var n;return(0,o.Z)(this,t),(n=r.call(this,e)).editorUrl=void 0,n.getMdStr=void 0,n.example=void 0,n.state={mdStr:""},n}return(0,n.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(r){e.setState({mdStr:r.default.source,mdObj:r.default})}))}},{key:"render",value:function(){var e=this.state.mdObj||{},r=e.source,t=e.components,o=e.data;return(0,m.jsxs)("div",{className:[c.warpper,"wmde-markdown-var"].join(" "),children:[(0,m.jsx)("dark-mode",{permanent:!0,light:"Dark",dark:"Light"}),(0,m.jsxs)("div",{className:c.markdown,children:[(0,m.jsx)(b,{editorUrl:this.editorUrl}),this.example&&(0,m.jsx)("div",{className:c.example,children:this.example}),(0,m.jsx)(v,{source:r||"",components:t||{},data:o||{}}),(0,m.jsx)(b,{editorUrl:this.editorUrl})]}),(0,m.jsxs)("div",{className:c.footer,children:[(0,m.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,m.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,m.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,m.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,m.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,m.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,m.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,m.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,m.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,m.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,m.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,m.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,m.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,m.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),t}(a.Component)},1299:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var o=t(1976),n=t(2951),i=t(7591),s=t(3415),a=t(189),c=t(1473),l=t(9142),d=t(2664),u=t(7664),h=t(9286);function f(){var e=(0,c.useContext)(u._y),r=e.hsva,t=e.dispatch;return(0,h.jsx)("div",{style:{width:256},children:(0,h.jsx)(l.Z,{colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],color:r,onChange:function(e){t({hsva:(0,a.Z)((0,a.Z)({},r),e.hsva)})}})})}var p=function(e){(0,i.Z)(a,e);var r=(0,s.Z)(a);function a(){var e;(0,n.Z)(this,a);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(e=r.call.apply(r,[this].concat(i))).editorUrl="/packages/color-circle/README.md",e.getMdStr=function(){return t.e(660).then(t.bind(t,7660))},e.example=(0,h.jsx)(f,{}),e}return(0,o.Z)(a)}(d.Z)},9142:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var o=t(5773),n=t(808),i=t(1473),s=t(6651),a=t(6433),c=t(6726),l=t(9286);function d(e){var r=e.style,t=e.title,n=e.checked,s=e.color,a=e.onClick,c=e.rectProps,d=(0,i.useRef)(null),u=(0,i.useCallback)((function(e){d.current.style.transform="scale(1.2)"}),[]),h=(0,i.useCallback)((function(e){d.current.style.transform="scale(1)"}),[]);return(0,l.jsx)("div",{ref:d,onClick:a,onMouseEnter:u,onMouseLeave:h,title:t,style:(0,o.Z)({},r,{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:3,borderRadius:"50%",marginRight:12,marginBottom:12,boxSizing:"border-box",transform:"scale(1)",boxShadow:s+" 0px 0px "+(n?5:0)+"px",transition:"transform 100ms ease 0s, box-shadow 100ms ease 0s"}),children:(0,l.jsx)("div",(0,o.Z)({},c,{style:(0,o.Z)({height:n?"100%":0,width:n?"100%":0,borderRadius:"50%",backgroundColor:"#fff",boxSizing:"border-box",transition:"height 100ms ease 0s, width 100ms ease 0s"},c.style)}))})}var u=["prefixCls","className","color","colors","rectProps","onChange"],h=i.forwardRef((function(e,r){var t=e.prefixCls,i=void 0===t?"w-color-circle":t,h=e.className,f=e.color,p=e.colors,m=void 0===p?[]:p,g=e.rectProps,x=void 0===g?{}:g,v=e.onChange,b=(0,n.Z)(e,u),j="string"===typeof f&&(0,s.Ff)(f)?(0,a.hexToHsva)(f):f||{},w=f?(0,a.hsvaToHex)(j):"";return(0,l.jsx)(c.Z,(0,o.Z)({ref:r,colors:m,color:w},b,{className:[i,h].filter(Boolean).join(" "),rectRender:function(e){var r=(0,o.Z)({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return(0,l.jsx)(d,(0,o.Z)({},r,{rectProps:x}))},onChange:function(e){v&&v((0,a.color)(e))}}))}));h.displayName="Circle";var f=h},6726:function(e,r,t){"use strict";var o=t(5773),n=t(808),i=t(1473),s=t(6433),a=t(9286),c=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],l=i.forwardRef((function(e,r){var t=e.prefixCls,l=void 0===t?"w-color-swatch":t,d=e.className,u=e.color,h=e.colors,f=void 0===h?[]:h,p=e.style,m=e.rectProps,g=void 0===m?{}:m,x=e.onChange,v=e.addonAfter,b=e.addonBefore,j=e.rectRender,w=(0,n.Z)(e,c),k=(0,o.Z)({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},g.style),Z=function(e){x&&x((0,s.hexToHsva)(e))};return(0,a.jsxs)("div",(0,o.Z)({ref:r},w,{className:[l,d||""].filter(Boolean).join(" "),style:(0,o.Z)({display:"flex",flexWrap:"wrap",position:"relative"},p),children:[b&&i.isValidElement(b)&&b,f&&Array.isArray(f)&&f.map((function(e,r){var t="",n="";"string"===typeof e&&(t=e,n=e),"object"===typeof e&&e.color&&(t=e.title||e.color,n=e.color);var s=u&&u.toLocaleLowerCase()===n.toLocaleLowerCase();if(j)return j({key:r,title:t,color:n,checked:!!s,style:(0,o.Z)({},k,{background:n}),onClick:function(){return Z(n)}});var c=g.children&&i.isValidElement(g.children)?i.cloneElement(g.children,{color:n,checked:s}):null;return(0,a.jsx)("div",(0,o.Z)({tabIndex:0,title:t,onClick:function(){return Z(n)}},g,{children:c,style:(0,o.Z)({},k,{background:n})}),r)})),v&&i.isValidElement(v)&&v]}))}));l.displayName="Swatch",r.Z=l}}]);
//# sourceMappingURL=713.2d26f152.chunk.js.map