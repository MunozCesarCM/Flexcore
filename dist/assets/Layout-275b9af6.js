import{r as d,A as p,j as e}from"./index-b0774712.js";import{C as n}from"./CodeExample-ff5e3bdd.js";import{C as l}from"./ClassTable-4ce7c370.js";import"./formatCode-85636521.js";const h=`
<div class="h-50 bg-primary relative">
<span class="text-white absolute bg-none left-0">Top Left</span>
<span class="text-white absolute bg-none right-0">Top Right</span>
<span class="text-white absolute bg-none left-0 bottom-0">Bottom Left</span>
<span class="text-white absolute bg-none right-0 bottom-0">Bottom Right</span>
</div>
`.slice(1,-1),x=`
<span class="visible">This is visible</span>
<span class="hidden">This is hidden</span>
`.slice(1,-1),b=`
<div class="relative mb-7">
<span class="absolute w-15 top-0 z-30 bg-red-400 left-0">1</span>
<span class="absolute w-15 top-2 z-20 bg-yellow-400 left-10">2</span>
<span class="absolute w-15 top-4 z-10 bg-green-400 left-20">3</span>
<span class="absolute w-15 top-2 z-20 bg-blue-400 left-30">4</span>
<span class="absolute w-15 top-0 z-30 bg-purple-400 left-40">5</span>
</div>
`.slice(1,-1),f={body:[{title:"box-border",desc:"box-sizing: border-box"},{title:"box-content",desc:"box-sizing: content-box"}]},u={body:[{title:"block",desc:"display: block;"},{title:"inline-block",desc:"display: inline-block;"},{title:"inline",desc:"display: inline;"},{title:"flex",desc:"display: flex;"},{title:"inline-flex",desc:"display: inline-flex;"},{title:"table",desc:"display: table;"},{title:"inline-table",desc:"display: inline-table;"},{title:"table-caption",desc:"display: table-caption;"},{title:"table-cell",desc:"display: table-cell;"},{title:"table-column",desc:"display: table-column;"},{title:"table-column-group",desc:"display: table-column-group;"},{title:"table-footer-group",desc:"display: table-footer-group;"},{title:"table-header-group",desc:"display: table-header-group;"},{title:"table-row-group",desc:"display: table-row-group;"},{title:"table-row",desc:"display: table-row;"},{title:"flow-root",desc:"display: flow-root;"},{title:"grid",desc:"display: grid;"},{title:"inline-grid",desc:"display: inline-grid;"},{title:"contents",desc:"display: contents;"},{title:"list-item",desc:"display: list-item;"},{title:"hidden",desc:"display: none;"},{title:"block",desc:"display: block;"}]},m={body:[{title:"float-right",desc:"float: right"},{title:"float-left",desc:"float: left"},{title:"float-none",desc:"float: none"}]},y={body:[{title:"overflow-auto",desc:"overflow: auto;"},{title:"overflow-x-auto",desc:"overflow-x: auto;"},{title:"overflow-y-auto",desc:"overflow-y: auto;"},{title:"overflow-hidden",desc:"overflow: hidden;"},{title:"overflow-x-hidden",desc:"overflow-x: hidden;"},{title:"overflow-y-hidden",desc:"overflow-y: hidden;"},{title:"overflow-visible",desc:"overflow: visible;"},{title:"overflow-x-visible",desc:"overflow-x: visible;"},{title:"overflow-y-visible",desc:"overflow-y: visible;"},{title:"overflow-scroll",desc:"overflow: scroll;"},{title:"overflow-x-scroll",desc:"overflow-x: scroll;"},{title:"overflow-y-scroll",desc:"overflow-y: scroll;"}]},j={body:[{title:"static",desc:"position: static"},{title:"fixed",desc:"position: fixed"},{title:"absolute",desc:"position: absolute"},{title:"relative",desc:"position: relative"},{title:"sticky",desc:"position: sticky"}]},v={body:[...function(){const t=[];for(let s=0;s<=100;s++)t.push({title:`top-${s}`,desc:`top: ${s*.25}em`}),t.push({title:`right-${s}`,desc:`right: ${s*.25}em`}),t.push({title:`bottom-${s}`,desc:`bottom: ${s*.25}em`}),t.push({title:`left-${s}`,desc:`left: ${s*.25}em`});return t}()]},w={body:[{title:"visible",desc:"visibility: visible"},{title:"hidden",desc:"visibility: hidden"}]},g={body:[...function(){const t=[];for(let s=0;s<=10;++s)t.push({title:`z-${s*10}`,desc:`z-index: ${s*10}`});return t}()]},z=()=>{const{sidebarActive:t,setSidebarActive:s}=d.useContext(p),i=r=>{const o=document.getElementById(r),a=o==null?void 0:o.getBoundingClientRect().top;let c=0;a!==void 0&&(c=a+window.pageYOffset-85),window.scrollTo({top:c,behavior:"smooth"})};return d.useEffect(()=>{t===null&&s(!0)},[]),e.jsxs("article",{className:t?"article-content-sb-active":"article-content",children:[e.jsxs("section",{style:{maxWidth:t?"calc(100vw - 300px - 275px)":"100vw"},children:[e.jsx("h2",{children:"Layout"}),e.jsxs("p",{children:["The FleXkit utility classes provide a range of options to control the layout and positioning of elements within your interface. These classes allow you to adjust properties such as ",e.jsx("span",{className:"quote",children:"box-sizing"}),", ",e.jsx("span",{className:"quote",children:"display"}),", ",e.jsx("span",{className:"quote",children:"float"}),", ",e.jsx("span",{className:"quote",children:"overflow"}),", ",e.jsx("span",{className:"quote",children:"position"}),", ",e.jsx("span",{className:"quote",children:"visibility"}),", and ",e.jsx("span",{className:"quote",children:"z-index"}),"."]}),e.jsx("h3",{id:"Box Sizing",children:"Box Sizing"}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"quote",children:"box-sizing"})," property determines how the ",e.jsx("span",{className:"quote",children:"width"})," and ",e.jsx("span",{className:"quote",children:"height"})," of an element are calculated, including ",e.jsx("span",{className:"quote",children:"padding"})," and ",e.jsx("span",{className:"quote",children:"border"}),":"]}),e.jsx(l,{tableItems:f}),e.jsx("h3",{id:"Display",children:"Display"}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"quote",children:"display"})," property controls how an element is rendered in the document flow:"]}),e.jsx(l,{tableItems:u}),e.jsx("h3",{id:"Float",children:"Float"}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"quote",children:"float"})," property allows elements to be positioned to the left or right of their containers:"]}),e.jsx(l,{tableItems:m}),e.jsx("h3",{id:"Overflow",children:"Overflow"}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"quote",children:"overflow"})," property determines how content that exceeds the dimensions of an element is handled:"]}),e.jsx(l,{tableItems:y}),e.jsx("h3",{id:"Position",children:"Position"}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"quote",children:"position"})," property determines the positioning method of an element. FleXkit provides the following utility classes:"]}),e.jsx(l,{tableItems:j}),e.jsx("h4",{id:"TRBL",children:"Top Right Bottom Left"}),e.jsxs("p",{children:["When using the ",e.jsx("span",{className:"quote",children:"position"})," property, FleXkit provides utility classes to specify the distance from the ",e.jsx("span",{className:"quote",children:"top"}),", ",e.jsx("span",{className:"quote",children:"right"}),", ",e.jsx("span",{className:"quote",children:"bottom"}),", or ",e.jsx("span",{className:"quote",children:"left"})," edges of an element's positioned container:"]}),e.jsx(l,{tableItems:v}),e.jsx(n,{snippet:h}),e.jsx("h3",{id:"Visibility",children:"Visibility"}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"quote",children:"position"})," property determines whether an element is ",e.jsx("span",{className:"quote",children:"visible"})," or ",e.jsx("span",{className:"quote",children:"hidden"}),":"]}),e.jsx(l,{tableItems:w}),e.jsx(n,{snippet:x}),e.jsx("h3",{id:"Z-Index",children:"Z-Index"}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"quote",children:"z-index"})," property controls the stacking order of positioned elements. FleXkit provides utility classes to easily assign a specific ",e.jsx("span",{className:"quote",children:"z-index"})," value to an element:"]}),e.jsx(l,{tableItems:g}),e.jsx(n,{snippet:b})]}),e.jsxs("div",{className:"article-sidebar",children:[e.jsx("h3",{children:"Contents"}),e.jsx("h4",{onClick:()=>i(""),children:"Layout"}),e.jsx("h4",{onClick:()=>i("Box Sizing"),children:"Box Sizing"}),e.jsx("h4",{onClick:()=>i("Display"),children:"Display"}),e.jsx("h4",{onClick:()=>i("Float"),children:"Float"}),e.jsx("h4",{onClick:()=>i("Overflow"),children:"Overflow"}),e.jsx("h4",{onClick:()=>i("Position"),children:"Position"}),e.jsx("h5",{onClick:()=>i("TRBL"),children:"TRBL"}),e.jsx("h4",{onClick:()=>i("Visibility"),children:"Visibility"}),e.jsx("h4",{onClick:()=>i("Z-Index"),children:"Z-Index"})]})]})};export{z as default};
