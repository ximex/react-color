(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[924],{363:function(t){function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=363,t.exports=e},2664:function(t,e,r){"use strict";r.d(e,{Z:function(){return j}});var o=r(2951),n=r(1976),i=r(7591),a=r(3415),s=r(1473),l=(r(6991),{markdown:"Markdown_markdown__pdFcg",editor:"Markdown_editor__ktea2",warpper:"Markdown_warpper__j-FaN",example:"Markdown_example__q3W5x",footer:"Markdown_footer__ShQo5"}),c=r(189),d=r(3782),p=r(1843),h=r(7963),u=r(2094),f=r(5142),g=r(9286),x=["inline","node"],m=["data-meta"];function b(t){return(0,g.jsx)(p.Z,{disableCopy:!0,source:t.source,style:{padding:"20px 26px",minHeight:120},components:{code:function(e){var r,o=e.inline,n=e.node,i=(0,d.Z)(e,x),a=i,s=a["data-meta"],l=(0,d.Z)(a,m);if(o||!(0,f.pN)(s))return(0,g.jsx)("code",(0,c.Z)({},i));var p=null===(r=n.position)||void 0===r?void 0:r.start.line,b=(0,f.Mx)(s)||String(p),v=t.components["".concat(b)];if(b&&"function"===typeof v){var j=(0,u.U)(n.children),w=(0,f.aE)(s);return(0,g.jsx)(h.Z,{toolbar:w.title||"Example Display",code:(0,g.jsx)("code",(0,c.Z)({},l)),text:j,children:(0,g.jsx)(v,{})})}return(0,g.jsx)("code",(0,c.Z)({},l))}}})}var v=function(t){var e=t.editorUrl;return e?(0,g.jsx)("a",{className:l.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(e),children:"Edit this page"}):null},j=function(t){(0,i.Z)(r,t);var e=(0,a.Z)(r);function r(t){var n;return(0,o.Z)(this,r),(n=e.call(this,t)).editorUrl=void 0,n.getMdStr=void 0,n.example=void 0,n.state={mdStr:""},n}return(0,n.Z)(r,[{key:"componentDidMount",value:function(){var t=this;this.getMdStr&&this.getMdStr().then((function(e){t.setState({mdStr:e.default.source,mdObj:e.default})}))}},{key:"render",value:function(){var t=this.state.mdObj||{},e=t.source,r=t.components,o=t.data;return(0,g.jsxs)("div",{className:[l.warpper,"wmde-markdown-var"].join(" "),children:[(0,g.jsx)("dark-mode",{permanent:!0,light:"Dark",dark:"Light"}),(0,g.jsxs)("div",{className:l.markdown,children:[(0,g.jsx)(v,{editorUrl:this.editorUrl}),this.example&&(0,g.jsx)("div",{className:l.example,children:this.example}),(0,g.jsx)(b,{source:e||"",components:r||{},data:o||{}}),(0,g.jsx)(v,{editorUrl:this.editorUrl})]}),(0,g.jsxs)("div",{className:l.footer,children:[(0,g.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,g.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,g.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,g.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(s.Component)},2529:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var o=r(1976),n=r(2951),i=r(7591),a=r(3415),s=r(189),l=r(1473),c=r(7912),d=r(2664),p=r(7664),h=r(9286);function u(){var t=(0,l.useContext)(p._y),e=t.hsva,r=t.dispatch;return(0,h.jsx)("div",{style:{width:256},children:(0,h.jsx)(c.default,{color:e,onChange:function(t){r({hsva:(0,s.Z)((0,s.Z)({},e),t.hsva)})}})})}var f=function(t){(0,i.Z)(s,t);var e=(0,a.Z)(s);function s(){var t;(0,n.Z)(this,s);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).editorUrl="/packages/color-github/README.md",t.getMdStr=function(){return r.e(533).then(r.bind(r,9533))},t.example=(0,h.jsx)(u,{}),t}return(0,o.Z)(s)}(d.Z)},7912:function(t,e,r){"use strict";r.r(e),r.d(e,{GithubPlacement:function(){return p},default:function(){return x}});var o=r(5773),n=r(808),i=r(1473),a=r(6651),s=r(6433),l=r(6726),c=r(9286);function d(t){var e=t.style,r=t.title,n=t.checked,a=(t.color,t.onClick),s=t.rectProps,l=(0,i.useRef)(null),d=(0,i.useCallback)((function(){l.current.style.zIndex="2",l.current.style.outline="#fff solid 2px",l.current.style.boxShadow="rgb(0 0 0 / 25%) 0 0 5px 2px"}),[]),p=(0,i.useCallback)((function(){n||(l.current.style.zIndex="0",l.current.style.outline="initial",l.current.style.boxShadow="initial")}),[n]);return(0,c.jsx)("div",(0,o.Z)({ref:l,title:r},s,{onClick:a,onMouseEnter:d,onMouseLeave:p,style:(0,o.Z)({},e,{marginRight:0,marginBottom:0,borderRadius:0,boxSizing:"border-box",height:25,width:25},n?{zIndex:1,outline:"#fff solid 2px",boxShadow:"rgb(0 0 0 / 25%) 0 0 5px 2px"}:{zIndex:0},s.style)}))}var p,h=["prefixCls","placement","className","style","color","colors","rectProps","onChange"],u=["key"],f=["#B80000","#DB3E00","#FCCB00","#008B02","#006B76","#1273DE","#004DCF","#5300EB","#EB9694","#FAD0C3","#FEF3BD","#C1E1C5","#BEDADC","#C4DEF6","#BED3F3","#D4C4FB"];!function(t){t.Left="L",t.LeftTop="LT",t.LeftBotton="LB",t.Right="R",t.RightTop="RT",t.RightBotton="RB",t.Top="T",t.TopRight="TR",t.TopLeft="TL",t.Botton="B",t.BottonLeft="BL",t.BottonRight="BR"}(p||(p={}));var g=i.forwardRef((function(t,e){var r=t.prefixCls,g=void 0===r?"w-color-github":r,x=t.placement,m=void 0===x?p.TopRight:x,b=t.className,v=t.style,j=t.color,w=t.colors,k=void 0===w?f:w,y=t.rectProps,C=void 0===y?{}:y,B=t.onChange,Z=(0,n.Z)(t,h),R="string"===typeof j&&(0,a.Ff)(j)?(0,s.hexToHsva)(j):j,_=j?(0,s.hsvaToHex)(R):"",T={borderStyle:"solid",position:"absolute"},L=(0,o.Z)({},T),E=(0,o.Z)({},T);return/^T/.test(m)&&(L.borderWidth="0 8px 8px",L.borderColor="transparent transparent rgba(0, 0, 0, 0.15)",E.borderWidth="0 7px 7px",E.borderColor="transparent transparent #fff"),m===p.TopRight&&(L.top=-8,E.top=-7),m===p.Top&&(L.top=-8,E.top=-7),m===p.TopLeft&&(L.top=-8,E.top=-7),/^B/.test(m)&&(L.borderWidth="8px 8px 0 ",L.borderColor="rgba(0, 0, 0, 0.15) transparent transparent",E.borderWidth="7px 7px 0px",E.borderColor="#fff transparent transparent",m===p.BottonRight&&(L.top="100%",E.top="100%"),m===p.Botton&&(L.top="100%",E.top="100%"),m===p.BottonLeft&&(L.top="100%",E.top="100%")),/^(B|T)/.test(m)&&(m!==p.Top&&m!==p.Botton||(L.left="50%",L.marginLeft=-8,E.left="50%",E.marginLeft=-7),m!==p.TopRight&&m!==p.BottonRight||(L.right=10,E.right=11),m!==p.TopLeft&&m!==p.BottonLeft||(L.left=7,E.left=8)),/^L/.test(m)&&(L.borderWidth="8px 8px 8px 0px",L.borderColor="transparent rgba(0, 0, 0, 0.15) transparent transparent",E.borderWidth="7px 7px 7px 0px",E.borderColor="transparent #fff transparent transparent",L.left=-8,E.left=-7),/^R/.test(m)&&(L.borderWidth="8px 0px 8px 8px",L.borderColor="transparent transparent transparent rgba(0, 0, 0, 0.15)",E.borderWidth="7px 0px 7px 7px",E.borderColor="transparent transparent transparent #fff",L.right=-8,E.right=-7),/^(L|R)/.test(m)&&(m!==p.RightTop&&m!==p.LeftTop||(L.top=5,E.top=6),m!==p.Left&&m!==p.Right||(L.top="50%",E.top="50%",L.marginTop=-8,E.marginTop=-7),m!==p.LeftBotton&&m!==p.RightBotton||(L.top="100%",E.top="100%",L.marginTop=-21,E.marginTop=-20)),(0,c.jsx)(l.Z,(0,o.Z)({ref:e,className:[g,b].filter(Boolean).join(" "),colors:k,color:_,rectRender:function(t){var e=t.key,r=(0,n.Z)(t,u);return(0,c.jsx)(d,(0,o.Z)({},r,{rectProps:C}),e)}},Z,{onChange:function(t){return B&&B((0,s.color)(t))},style:(0,o.Z)({width:200,borderRadius:4,background:"#fff",boxShadow:"rgb(0 0 0 / 15%) 0px 3px 12px",border:"1px solid rgba(0, 0, 0, 0.2)",position:"relative",padding:5},v),rectProps:{style:{marginRight:0,marginBottom:0,borderRadius:0,height:25,width:25}},addonBefore:(0,c.jsxs)(i.Fragment,{children:[(0,c.jsx)("div",{style:L}),(0,c.jsx)("div",{style:E})]})}))}));g.displayName="Github";var x=g},6726:function(t,e,r){"use strict";var o=r(5773),n=r(808),i=r(1473),a=r(6433),s=r(9286),l=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],c=i.forwardRef((function(t,e){var r=t.prefixCls,c=void 0===r?"w-color-swatch":r,d=t.className,p=t.color,h=t.colors,u=void 0===h?[]:h,f=t.style,g=t.rectProps,x=void 0===g?{}:g,m=t.onChange,b=t.addonAfter,v=t.addonBefore,j=t.rectRender,w=(0,n.Z)(t,l),k=(0,o.Z)({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},x.style),y=function(t){m&&m((0,a.hexToHsva)(t))};return(0,s.jsxs)("div",(0,o.Z)({ref:e},w,{className:[c,d||""].filter(Boolean).join(" "),style:(0,o.Z)({display:"flex",flexWrap:"wrap",position:"relative"},f),children:[v&&i.isValidElement(v)&&v,u&&Array.isArray(u)&&u.map((function(t,e){var r="",n="";"string"===typeof t&&(r=t,n=t),"object"===typeof t&&t.color&&(r=t.title||t.color,n=t.color);var a=p&&p.toLocaleLowerCase()===n.toLocaleLowerCase();if(j)return j({key:e,title:r,color:n,checked:!!a,style:(0,o.Z)({},k,{background:n}),onClick:function(){return y(n)}});var l=x.children&&i.isValidElement(x.children)?i.cloneElement(x.children,{color:n,checked:a}):null;return(0,s.jsx)("div",(0,o.Z)({tabIndex:0,title:r,onClick:function(){return y(n)}},x,{children:l,style:(0,o.Z)({},k,{background:n})}),e)})),b&&i.isValidElement(b)&&b]}))}));c.displayName="Swatch",e.Z=c}}]);
//# sourceMappingURL=924.40bfafb7.chunk.js.map