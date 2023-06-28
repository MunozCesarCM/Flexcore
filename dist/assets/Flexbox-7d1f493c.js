import{r as c,A as b,j as e,L as x}from"./index-e977f244.js";import{C as r}from"./CodeExample-afb20d1c.js";import{C as a}from"./ClassTable-b71af7d4.js";import"./toast-04da3939.js";import"./formatCode-85636521.js";const h=`
<div class="flex">
  <div class="text-white text-center bg-primary basis-25">Basis 25</div>
  <div class="text-white text-center bg-secondary basis-50">Basis 50</div>
  <div class="text-white text-center bg-primary basis-25">Basis 25</div>
  <div class="text-white text-center bg-primary basis-25">Basis 25</div>
  <div class="text-white text-center bg-primary basis-25">Basis 25</div>
</div>
`.slice(1,-1),v=`
<div class="flex flex-row border-0 border-b border-primary my-5">
  <div class="text-white text-center basis-30 bg-primary">Item 1</div>
  <div class="text-white text-center basis-30 bg-primary">Item 2</div>
  <div class="text-white text-center basis-30 bg-primary">Item 3</div>
</div>
<div class="flex flex-row-reverse border-0 border-b border-secondary my-5">
  <div class="text-white text-center basis-30 bg-secondary">Item 1</div>
  <div class="text-white text-center basis-30 bg-secondary">Item 2</div>
  <div class="text-white text-center basis-30 bg-secondary">Item 3</div>
</div>
`.slice(1,-1),m=`
<h3>Flex Wrap</h3>
<div class="flex flex-wrap">
  <div class="text-white text-center bg-primary basis-50">Item 1</div>
  <div class="text-white text-center bg-primary basis-50">Item 2</div>
  <div class="text-white text-center bg-primary basis-50">Item 3</div>
  <div class="text-white text-center bg-primary basis-50">Item 4</div>
  <div class="text-white text-center bg-primary basis-50">Item 5</div>
  <div class="text-white text-center bg-primary basis-50">Item 6</div>
  <div class="text-white text-center bg-primary basis-50">Item 7</div>
  <div class="text-white text-center bg-primary basis-50">Item 8</div>
</div>
<h3>Flex No Wrap</h3>
<div class="flex flex-nowrap">
  <div class="text-white text-center bg-secondary basis-50">Item 1</div>
  <div class="text-white text-center bg-secondary basis-50">Item 2</div>
  <div class="text-white text-center bg-secondary basis-50">Item 3</div>
  <div class="text-white text-center bg-secondary basis-50">Item 4</div>
  <div class="text-white text-center bg-secondary basis-50">Item 5</div>
  <div class="text-white text-center bg-secondary basis-50">Item 6</div>
  <div class="text-white text-center bg-secondary basis-50">Item 7</div>
  <div class="text-white text-center bg-secondary basis-50">Item 8</div>
</div>
`.slice(1,-1),f=`
<h3>Flex Grow</h3>
<div class="flex">
  <div class="text-white text-center bg-primary basis-40">Item 1</div>
  <div class="text-white text-center bg-secondary flex-grow-1">Item 2</div>
  <div class="text-white text-center bg-primary basis-40">Item 3</div>
  <div class="text-white text-center bg-primary basis-40">Item 4</div>
</div>
<h3>Flex Shrink</h3>
<div class="flex border-0 border-b border-primary">
  <div class="text-white text-center bg-primary basis-40">Item 1</div>
  <div class="text-white text-center bg-secondary flex-shrink-1">Item 2</div>
  <div class="text-white text-center bg-primary basis-40">Item 3</div>
  <div class="text-white text-center bg-primary basis-40">Item 4</div>
</div>
`.slice(1,-1),p=`
<h3>Flex Gap</h3>
<div class="flex flex-wrap gap-1">
  <div class="text-white text-center bg-primary basis-50">Item 1</div>
  <div class="text-white text-center bg-primary basis-50">Item 2</div>
  <div class="text-white text-center bg-primary basis-50">Item 3</div>
  <div class="text-white text-center bg-primary basis-50">Item 4</div>
  <div class="text-white text-center bg-primary basis-50">Item 5</div>
  <div class="text-white text-center bg-primary basis-50">Item 6</div>
  <div class="text-white text-center bg-primary basis-50">Item 7</div>
  <div class="text-white text-center bg-primary basis-50">Item 8</div>
</div>
<h3>Flex Gap-X</h3>
<div class="flex flex-wrap gap-x-1">
  <div class="text-white text-center bg-primary basis-50">Item 1</div>
  <div class="text-white text-center bg-primary basis-50">Item 2</div>
  <div class="text-white text-center bg-primary basis-50">Item 3</div>
  <div class="text-white text-center bg-primary basis-50">Item 4</div>
  <div class="text-white text-center bg-primary basis-50">Item 5</div>
  <div class="text-white text-center bg-primary basis-50">Item 6</div>
  <div class="text-white text-center bg-primary basis-50">Item 7</div>
  <div class="text-white text-center bg-primary basis-50">Item 8</div>
</div>
`.slice(1,-1),y=`
<div class="my-10 border-0 border-b border-primary flex justify-start">
  <div class="text-white text-center bg-primary basis-25">Start</div>
  <div class="text-white text-center bg-primary basis-25">Start</div>
  <div class="text-white text-center bg-primary basis-25">Start</div>
</div>
<div class="my-10 border-0 border-b border-secondary flex justify-center">
  <div class="text-white text-center bg-secondary basis-25">Center</div>
  <div class="text-white text-center bg-secondary basis-25">Center</div>
  <div class="text-white text-center bg-secondary basis-25">Center</div>
</div>
<div class="my-10 border-0 border-b border-primary flex justify-end">
  <div class="text-white text-center bg-primary basis-25">End</div>
  <div class="text-white text-center bg-primary basis-25">End</div>
  <div class="text-white text-center bg-primary basis-25">End</div>
</div>
<div class="my-10 border-0 border-b border-secondary flex justify-between">
  <div class="text-white text-center bg-secondary basis-25">Between</div>
  <div class="text-white text-center bg-secondary basis-25">Between</div>
  <div class="text-white text-center bg-secondary basis-25">Between</div>
</div>
<div class="my-10 border-0 border-b border-primary flex justify-around">
  <div class="text-white text-center bg-primary basis-25">Around</div>
  <div class="text-white text-center bg-primary basis-25">Around</div>
  <div class="text-white text-center bg-primary basis-25">Around</div>
</div>
<div class="my-10 border-0 border-b border-secondary flex justify-evenly">
  <div class="text-white text-center bg-secondary basis-25">Evenly</div>
  <div class="text-white text-center bg-secondary basis-25">Evenly</div>
  <div class="text-white text-center bg-secondary basis-25">Evenly</div>
</div>
`.slice(1,-1),w=`
<div class="flex items-start border-0 border-l-2 border-r-2 border-primary h-15 my-5">
  <div class="text-white text-center bg-primary flex-grow-1 h-min">Start</div>
  <div class="text-white text-center bg-primary flex-grow-1 h-min">Start</div>
  <div class="text-white text-center bg-primary flex-grow-1 h-min">Start</div>
</div>
<div class="flex items-center border-0 border-l-2 border-r-2 border-secondary h-15 my-5">
  <div class="text-white text-center bg-secondary flex-grow-1 h-min">Center</div>
  <div class="text-white text-center bg-secondary flex-grow-1 h-min">Center</div>
  <div class="text-white text-center bg-secondary flex-grow-1 h-min">Center</div>
</div>
<div class="flex items-end border-0 border-l-2 border-r-2 border-primary h-15 my-5">
  <div class="text-white text-center bg-primary flex-grow-1 h-min">End</div>
  <div class="text-white text-center bg-primary flex-grow-1 h-min">End</div>
  <div class="text-white text-center bg-primary flex-grow-1 h-min">End</div>
</div>
`.slice(1,-1),g=`
<div class="flex h-15 my-3">
  <div class="text-white text-center bg-primary flex-grow-1">Item</div>
  <div class="text-white text-center bg-secondary basis-100 h-min self-start">Start</div>
  <div class="text-white text-center bg-primary flex-grow-1">Item</div>
</div>
<div class="flex h-15 my-3">
  <div class="text-white text-center bg-primary flex-grow-1">Item</div>
  <div class="text-white text-center bg-secondary basis-100 h-min self-center">Center</div>
  <div class="text-white text-center bg-primary flex-grow-1">Item</div>
</div>
<div class="flex h-15 my-3">
  <div class="text-white text-center bg-primary flex-grow-1">Item</div>
  <div class="text-white text-center bg-secondary basis-100 h-min self-end">End</div>
  <div class="text-white text-center bg-primary flex-grow-1">Item</div>
</div>
`.slice(1,-1),j={body:[...function(){const i=[];for(let t=0;t<=100;t++)i.push({title:`basis-${t}`,desc:`flex-basis: ${t*.25}em`});return i}()]},u={body:[{title:"flex-row",desc:"flex-direction: row"},{title:"flex-row-reverse",desc:"flex-direction: row-reverse"},{title:"flex-col",desc:"flex-direction: column"},{title:"flex-col-reverse",desc:"flex-direction: column-reverse"}]},I={body:[{title:"flex-wrap",desc:"flex-wrap: wrap"},{title:"flex-wrap-reverse",desc:"flex-wrap: wrap-reverse"},{title:"flex-nowrap",desc:"flex-wrap: nowrap"}]},k={body:[...function(){const i=[];for(let t=0;t<=10;t++)i.push({title:`flex-grow-${t}`,desc:`flex-grow: ${t}`}),i.push({title:`flex-shrink-${t}`,desc:`flex-shrink: ${t}`});return i}()]},F={body:[...function(){const i=[];for(let t=0;t<=10;t++)i.push({title:`flex-grow-${t}`,desc:`flex-grow: ${t}`}),i.push({title:`flex-shrink-${t}`,desc:`flex-shrink: ${t}`});return i}()]},C={body:[{title:"justify-start",desc:"justify-content: flex-start"},{title:"justify-center",desc:"justify-content: flex-center"},{title:"justify-end",desc:"justify-content: flex-end"},{title:"justify-between",desc:"justify-content: space-between"},{title:"justify-around",desc:"justify-content: space-around"},{title:"justify-evenly",desc:"justify-content: space-evenly"}]},A={body:[{title:"items-start",desc:"align-items: flex-start"},{title:"items-end",desc:"align-items: flex-end"},{title:"items-center",desc:"align-items: center"},{title:"items-baseline",desc:"align-items: baseline"},{title:"items-stretch",desc:"align-items: stretch"}]},S={body:[{title:"self-auto",desc:"align-self: auto"},{title:"self-start",desc:"align-self: flex-start"},{title:"self-center",desc:"align-self: flex-center"},{title:"self-end",desc:"align-self: flex-end"},{title:"self-stretch",desc:"align-self: stretch"},{title:"self-baseline",desc:"align-self: baseline"}]},z=()=>{const{sidebarActive:i,setSidebarActive:t}=c.useContext(b),s=o=>{const l=document.getElementById(o),n=l==null?void 0:l.getBoundingClientRect().top;let d=0;n!==void 0&&(d=n+window.scrollY-85),window.scrollTo({top:d,behavior:"smooth"})};return c.useEffect(()=>{i===null&&t(!0)},[i,t]),e.jsxs("article",{className:i?"article-content-sb-active":"article-content",children:[e.jsx("h2",{children:"Flexbox"}),e.jsx("p",{children:"Flexbox is a powerful layout system that allows you to arrange and align elements within a container, creating dynamic and adaptable designs."}),e.jsx("h3",{id:"Flex",children:"Flex"}),e.jsxs("p",{children:["Flexcore offers a range of properties to control various aspects of ",e.jsx("mark",{children:"flexbox"}),", allowing you to achieve the desired layout and alignment for your interface."]}),e.jsx("h4",{id:"Flex Basis",children:"Flex Basis"}),e.jsxs("p",{children:[e.jsx("mark",{children:"flex-basis"})," determines the initial size of flex items along the main axis before any remaining space is distributed. It specifies the default size of flex items when there is no ",e.jsx("mark",{children:"flex-grow"})," or ",e.jsx("mark",{children:"flex-shrink"})," value applied."]}),e.jsx(a,{tableItems:j}),e.jsx(r,{snippet:h}),e.jsx("h4",{id:"Flex Direction",children:"Flex Direction"}),e.jsxs("p",{children:[e.jsx("mark",{children:"flex-direction"})," defines the direction of the main axis and the cross axis in a flex container. It allows you to arrange flex items either horizontally or vertically."]}),e.jsx(a,{tableItems:u}),e.jsx(r,{snippet:v}),e.jsx("h4",{id:"Flex Wrap",children:"Flex Wrap"}),e.jsxs("p",{children:[e.jsx("mark",{children:"flex-wrap"})," controls how flex items are wrapped within a flex container when they cannot fit in a single line. It specifies whether flex items should wrap onto multiple lines or stay within a single line."]}),e.jsx(a,{tableItems:I}),e.jsx(r,{snippet:m}),e.jsx("h4",{id:"Flex Grow Shrink",children:"Flex Grow / Shrink"}),e.jsxs("p",{children:[e.jsx("mark",{children:"flex-grow"})," and ",e.jsx("mark",{children:"flex-shrink"})," determine how flex occupy available space along the main axis when there is extra space in the flex container."]}),e.jsx(a,{tableItems:k}),e.jsx(r,{snippet:f}),e.jsx("h4",{id:"Gap",children:"Gap"}),e.jsxs("p",{children:[e.jsx("mark",{children:"gap"})," sets the spacing between flex items within a flex container."]}),e.jsx(a,{tableItems:F}),e.jsx(r,{snippet:p}),e.jsx("h3",{id:"Justify Content",children:"Justify Content"}),e.jsxs("p",{children:[e.jsx("mark",{children:"justify-content"})," distributes the remaining space or adjusts the size of flex items to create visual balance."]}),e.jsx(a,{tableItems:C}),e.jsx(r,{snippet:y}),e.jsx("h3",{id:"Align",children:"Align"}),e.jsx("p",{children:"Flexcore offers a set of properties to control the alignment of flex items along the cross axis of a flex container."}),e.jsx("h4",{id:"Align Items",children:"Align Items"}),e.jsxs("p",{children:[e.jsx("mark",{children:"align-items"})," allows you to position flex items at the start, end, center, stretch, or baseline within the container."]}),e.jsx(a,{tableItems:A}),e.jsx(r,{snippet:w}),e.jsx("h4",{id:"Align Self",children:"Align Self"}),e.jsxs("p",{children:[e.jsx("mark",{children:"align-self"})," allows you to override the default alignment set by the parent container."]}),e.jsx(a,{tableItems:S}),e.jsx(r,{snippet:g}),e.jsxs("footer",{children:[e.jsx(x,{to:"/layouts/container",children:"Container"}),e.jsx(x,{to:"/utilities/borders",children:"Borders"})]}),e.jsxs("div",{className:"article-sidebar",children:[e.jsx("h3",{children:"Contents"}),e.jsx("h4",{onClick:()=>s(""),children:"Flexbox"}),e.jsx("h4",{onClick:()=>s("Flex"),children:"Flex"}),e.jsx("h5",{onClick:()=>s("Flex Basis"),children:"Flex Basis"}),e.jsx("h5",{onClick:()=>s("Flex Direction"),children:"Flex Direction"}),e.jsx("h5",{onClick:()=>s("Flex Wrap"),children:"Flex Wrap"}),e.jsx("h5",{onClick:()=>s("Flex Grow Shrink"),children:"Flex Grow / Shrink"}),e.jsx("h5",{onClick:()=>s("Gap"),children:"Gap"}),e.jsx("h4",{onClick:()=>s("Justify Content"),children:"Justify Content"}),e.jsx("h4",{onClick:()=>s("Align"),children:"Align"}),e.jsx("h5",{onClick:()=>s("Align Items"),children:"Align Items"}),e.jsx("h5",{onClick:()=>s("Align Self"),children:"Align Self"})]})]})};export{z as default};
