import{r as o,A as h,j as e,L as l}from"./index-fee59e8d.js";import{C as n}from"./CodeExample-f9018ae5.js";import{C as r}from"./ClassTable-352d230e.js";import"./toast-e3b7705e.js";import"./formatCode-85636521.js";const x=`
<h3>Two Columns</h3>
<section class="grid grid-cols-2 gap-1">
  <div class="bg-primary text-white text-center">One</div>
  <div class="bg-primary text-white text-center">Two</div>
  <div class="bg-primary text-white text-center">Three</div>
  <div class="bg-primary text-white text-center">Four</div>
</section>

<h3>Three Columns</h3>
<section class="grid grid-cols-3 gap-1">
  <div class="bg-primary text-white text-center">One</div>
  <div class="bg-primary text-white text-center">Two</div>
  <div class="bg-primary text-white text-center">Three</div>
  <div class="bg-primary text-white text-center">Four</div>
  <div class="bg-primary text-white text-center">Five</div>
  <div class="bg-primary text-white text-center">Six</div>
</section>

<h3>Four Columns</h3>
<section class="grid grid-cols-4 gap-1">
  <div class="bg-primary text-white text-center">One</div>
  <div class="bg-primary text-white text-center">Two</div>
  <div class="bg-primary text-white text-center">Three</div>
  <div class="bg-primary text-white text-center">Four</div>
  <div class="bg-primary text-white text-center">Five</div>
  <div class="bg-primary text-white text-center">Six</div>
  <div class="bg-primary text-white text-center">Seven</div>
  <div class="bg-primary text-white text-center">Eight</div>
</section>
`.slice(1,-1),m=`
<section class="grid grid-cols-4 gap-2">
  <div class="bg-secondary text-white text-center col-span-2">One</div>
  <div class="bg-primary text-white text-center">Two</div>
  <div class="bg-primary text-white text-center">Three</div>
  <div class="bg-primary text-white text-center">Four</div>
  <div class="bg-primary text-white text-center">Five</div>
  <div class="bg-primary text-white text-center">Six</div>
  <div class="bg-primary text-white text-center">Seven</div>
  <div class="bg-primary text-white text-center">Eight</div>
  <div class="bg-secondary text-white text-center col-span-3">Nine</div>
</section>
`.slice(1,-1),w=`
<section class="grid grid-cols-4 gap-2">
  <div class="bg-secondary text-white text-center col-start-1">Start 1</div>
  <div class="bg-primary text-white text-center">Item</div>
  <div class="bg-primary text-white text-center">Item</div>
  <div class="bg-primary text-white text-center">Item</div>
  <div class="bg-secondary text-white text-center col-start-2">Start 2</div>
  <div class="bg-primary text-white text-center">Item</div>
  <div class="bg-primary text-white text-center">Item</div>
  <div class="bg-secondary text-white text-center col-end-4">End 4</div>
  <div class="bg-primary text-white text-center">Item</div>
  <div class="bg-secondary text-white text-center col-end-5">End 5</div>
</section>
`.slice(1,-1),g=`
<section class="grid grid-cols-4 gap-1">
  <div class="bg-secondary text-white text-center row-span-3">One</div>
  <div class="bg-primary text-white text-center">Two</div>
  <div class="bg-primary text-white text-center">Three</div>
  <div class="bg-secondary text-white text-center row-span-4">Four</div>
  <div class="bg-primary text-white text-center">Five</div>
  <div class="bg-primary text-white text-center">Six</div>
  <div class="bg-secondary text-white text-center row-span-2">Seven</div>
  <div class="bg-primary text-white text-center">Eight</div>
  <div class="bg-primary text-white text-center">Nine</div>
  <div class="bg-secondary text-white text-center row-span-2">Ten</div>
  <div class="bg-primary text-white text-center">Eleven</div>
  <div class="bg-primary text-white text-center">Twelve</div>
  <div class="bg-primary text-white text-center">Thirteen</div>
</section>
`.slice(1,-1),v=`
<section class="grid grid-cols-12 gap-2">
  <div class="bg-primary text-white py-9 text-center col-span-2 row-span-2"></div>
  <div class="bg-purple-500 text-white py-9 text-center"></div>
  <div class="bg-yellow-400 text-white py-9 text-center"></div>
  <div class="bg-primary text-white py-9 text-center col-span-4 row-span-2"></div>
  <div class="bg-yellow-400 text-white py-9 text-center col-span-2 row-span-2"></div>
  <div class="bg-secondary text-white py-9 text-center col-span-2 row-span-2"></div>
  <div class="bg-yellow-400 text-white py-9 text-center"></div>
  <div class="bg-secondary text-white py-9 text-center"></div>
  <div class="bg-purple-500 text-white py-9 text-center col-span-4 row-span-2"></div>
  <div class="bg-secondary text-white py-9 text-center col-span-4 row-span-4"></div>
  <div class="bg-primary text-white py-9 text-center col-span-4 row-span-2"></div>
  <div class="bg-primary text-white py-9 text-center col-span-2 row-span-2"></div>
  <div class="bg-yellow-400 text-white py-9 text-center col-span-2 row-span-2"></div>
  <div class="bg-secondary text-white py-9 text-center col-span-2 row-span-2"></div>
  <div class="bg-purple-500 text-white py-9 text-center col-span-2 row-span-2"></div>
</section>
`.slice(1,-1),u={body:[...function(){const i=[];for(let t=1;t<=12;++t)i.push({title:`grid-cols-${t}`,desc:`grid-template-columns: repeat(${t}, minmax(0, 1fr))`});return i.push({title:"grid-cols-none",desc:"grid-template-columns: none"}),i}()]},y={body:[...function(){const i=[];i.push({title:"col-auto",desc:"grid-column: auto"});for(let t=1;t<=12;++t)i.push({title:`col-span-${t}`,desc:`grid-column: span ${t} / span ${t}`});return i.push({title:"col-span-full",desc:"grid-column: 1 / -1"}),i}()]},b={body:[...function(){const i=[];i.push({title:"col-start-auto",desc:"grid-column-start: auto"}),i.push({title:"col-end-auto",desc:"grid-column-end: auto"});for(let t=1;t<=12;++t)i.push({title:`col-start-${t}`,desc:`grid-column-start: ${t}`}),i.push({title:`col-end-${t}`,desc:`grid-column-end: ${t}`});return i.push({title:"col-end-13",desc:"grid-column-end: 13"}),i}()]},j={body:[...function(){const i=[];for(let t=1;t<=6;++t)i.push({title:`grid-rows-${t}`,desc:`grid-template-rows: repeat(${t}, minmax(0, 1fr))`});return i.push({title:"grid-rows-none",desc:"grid-template-rows: none"}),i}()]},f={body:[...function(){const i=[];i.push({title:"row-auto",desc:"grid-row: auto"});for(let t=1;t<=6;++t)i.push({title:`row-span-${t}`,desc:`grid-row: span ${t} / span ${t}`});return i.push({title:"row-span-full",desc:"grid-row: 1 / -1"}),i}()]},C={body:[...function(){const i=[];i.push({title:"row-start-auto",desc:"grid-row-start: auto"}),i.push({title:"row-end-auto",desc:"grid-row-end: auto"});for(let t=1;t<=6;++t)i.push({title:`row-start-${t}`,desc:`grid-row-start: ${t}`}),i.push({title:`row-end-${t}`,desc:`grid-row-end: ${t}`});return i.push({title:"row-end-7",desc:"grid-row-end: 7"}),i}()]},$=()=>{const{sidebarActive:i,setSidebarActive:t}=o.useContext(h),s=p=>{const c=document.getElementById(p),d=c==null?void 0:c.getBoundingClientRect().top;let a=0;d!==void 0&&(a=d+window.scrollY-85),window.scrollTo({top:a,behavior:"smooth"})};return o.useEffect(()=>{i===null&&t(!0)},[i,t]),e.jsxs("article",{className:i?"article-content-sb-active":"article-content",children:[e.jsx("h2",{children:"Grid"}),e.jsx("p",{children:"The Grid module in Flexcore allows you to define the structure and alignment of grid items in a highly customizable manner. Here are some key properties and concepts related to grid layout:"}),e.jsx("h3",{id:"Template Columns",children:"Template Columns"}),e.jsxs("p",{children:["The ",e.jsx("mark",{children:"grid-cols"})," property allows you to define the width and behavior of columns in the grid."]}),e.jsx(r,{tableItems:u}),e.jsx(n,{snippet:x}),e.jsx("h3",{id:"Column Placement",children:"Column Placement"}),e.jsxs("p",{children:["These properties allow you to control the placement and spanning of ",e.jsx("mark",{children:"grid"})," items acrolls columns. By specifying ",e.jsx("mark",{children:"span"}),", ",e.jsx("mark",{children:"start"})," or ",e.jsx("mark",{children:"end"}),", you can define how many columns an item should occupy."]}),e.jsx("h4",{id:"Column Grid Span",children:"Grid Span"}),e.jsxs("p",{children:[e.jsx("mark",{children:"grid-column"})," is used to specify the placement and spanning of grid items across columns. By setting the column span, you can define how many columns it should occupy:"]}),e.jsx(r,{tableItems:y}),e.jsx(n,{snippet:m}),e.jsx("h4",{id:"Column Grid Start End",children:"Grid Start / End"}),e.jsxs("p",{children:["The ",e.jsx("mark",{children:"grid-column-start"})," and ",e.jsx("mark",{children:"grid-column-end"})," properties define the starting and ending position of grid items within a grid column:"]}),e.jsx(r,{tableItems:b}),e.jsx(n,{snippet:w}),e.jsx("h3",{id:"Template Rows",children:"Template Rows"}),e.jsxs("p",{children:["The ",e.jsx("mark",{children:"grid-rows"})," property allows you to define the width and behavior of rows in the grid."]}),e.jsx(r,{tableItems:j}),e.jsx("h3",{id:"Row Placement",children:"Row Placement"}),e.jsxs("p",{children:["These properties allow you to control the placement and spanning of ",e.jsx("mark",{children:"grid"})," items acrolls rows. By specifying ",e.jsx("mark",{children:"span"}),", ",e.jsx("mark",{children:"start"})," or ",e.jsx("mark",{children:"end"}),", you can define how many rows an item should occupy."]}),e.jsx("h4",{id:"Row Grid Span",children:"Grid Span"}),e.jsxs("p",{children:[e.jsx("mark",{children:"grid-row"})," is used to specify the placement and spanning of grid items across rows. By setting the row span, you can define how many rows it should occupy:"]}),e.jsx(r,{tableItems:f}),e.jsx(n,{snippet:g}),e.jsx("h4",{id:"Row Grid Start End",children:"Grid Start / End"}),e.jsxs("p",{children:["The ",e.jsx("mark",{children:"grid-row-start"})," and ",e.jsx("mark",{children:"grid-row-end"})," properties define the starting and ending position of grid items within a grid row:"]}),e.jsx(r,{tableItems:C}),e.jsx("h3",{id:"Showcase",children:"Showcase"}),e.jsx(n,{snippet:v}),e.jsxs("footer",{children:[e.jsx(l,{to:"/layouts/container",children:"Container"}),e.jsx(l,{to:"/layouts/flexbox",children:"Flexbox"})]}),e.jsxs("div",{className:"article-sidebar",children:[e.jsx("h3",{children:"Contents"}),e.jsx("h4",{onClick:()=>s(""),children:"Grid"}),e.jsx("h4",{onClick:()=>s("Template Columns"),children:"Template Columns"}),e.jsx("h4",{onClick:()=>s("Column Placement"),children:"Column Placement"}),e.jsx("h5",{onClick:()=>s("Column Grid Span"),children:"Grid Span"}),e.jsx("h5",{onClick:()=>s("Column Grid Start End"),children:"Grid Start / End"}),e.jsx("h4",{onClick:()=>s("Template Rows"),children:"Template Rows"}),e.jsx("h4",{onClick:()=>s("Row Placement"),children:"Row Placement"}),e.jsx("h5",{onClick:()=>s("Row Grid Span"),children:"Grid Span"}),e.jsx("h5",{onClick:()=>s("Row Grid Start End"),children:"Grid Start / End"}),e.jsx("h4",{onClick:()=>s("Showcase"),children:"Showcase"})]})]})};export{$ as default};
