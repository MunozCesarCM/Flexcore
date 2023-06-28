import{r as c,A as h,j as e,L as d}from"./index-e977f244.js";import{C as n}from"./CodeExample-afb20d1c.js";import{C as l}from"./ClassTable-b71af7d4.js";import"./toast-04da3939.js";import"./formatCode-85636521.js";const u=`
<span class="bg-primary text-white p-3 cursor-default">auto</span>
<span class="bg-primary text-white p-3 cursor-wait">wait</span>
<span class="bg-primary text-white p-3 cursor-text">text</span>
<span class="bg-primary text-white p-3 cursor-move">move</span>
<span class="bg-primary text-white p-3 cursor-help">help</span>
<span class="bg-primary text-white p-3 cursor-cell">cell</span>
<span class="bg-primary text-white p-3 cursor-crosshair">crosshair</span>
<span class="bg-primary text-white p-3 cursor-alias">alias</span>
<span class="bg-primary text-white p-3 cursor-copy">copy</span>
<span class="bg-primary text-white p-3 cursor-zoom-in">zoom-in</span>
`.slice(1,-1),x=`
<p class="select-text">This text is selectable</p>
<p class="select-none">This text is not</p>
`.slice(1,-1),m=`
<span class="
  bg-primary text-white px-4 py-2
  hover:bg-secondary hover:px-8 hover:py-4
  duration-100">
  Hover Me
</span>
`.slice(1,-1),y=`
<span class="
  bg-primary text-white px-4 py-2
  active:bg-secondary cursor-pointer select-none">
  Click Me
</span>
`.slice(1,-1),b=`
<input type="text" placeholder="Write some text" class="focus:bg-blue-50 focus:weight-500 border">
`.slice(1,-1),j={body:[{title:"select-none",desc:"user-select: none"},{title:"select-text",desc:"user-select: text"},{title:"select-all",desc:"user-select: all"},{title:"select-auto",desc:"user-select: auto"}]},v={body:[...function(){const i=[];for(let t=0;t<=20;++t)i.push({title:`duration-${t*50}`,desc:`transition-duration: ${t*50}ms`});return i}()]},T=()=>{const{sidebarActive:i,setSidebarActive:t}=c.useContext(h),s=p=>{const r=document.getElementById(p),o=r==null?void 0:r.getBoundingClientRect().top;let a=0;o!==void 0&&(a=o+window.scrollY-85),window.scrollTo({top:a,behavior:"smooth"})};return c.useEffect(()=>{i===null&&t(!0)},[i,t]),e.jsxs("article",{className:i?"article-content-sb-active":"article-content",children:[e.jsx("h2",{children:"Interactivity"}),e.jsx("p",{children:"Flexcore provides utility classes to modify various interactive aspects of elements to create engaging user experiences."}),e.jsx("h4",{id:"Transition Duration",children:"Transition Duration"}),e.jsx("p",{children:"Flexcore has utility classes to define the duration of CSS transitions, allowing you to control the speed of animations and smooth transitions between different states:"}),e.jsx(l,{tableItems:v}),e.jsx("h3",{id:"States",children:"States"}),e.jsx("p",{children:"To apply specific styles to elements based on their current state or interaction. These classes allow you to enhance the user experience by visually indicating different states or actions."}),e.jsx("h4",{id:"Hover",children:"Hover"}),e.jsxs("p",{children:["The ",e.jsx("mark",{children:"hover"})," pseudo-class is used to apply styles when an element is being hovered over by the cursor. It enables you to add visual effects or highlight elements to provide feedback to users."]}),e.jsxs("p",{children:["You can combine the ",e.jsx("mark",{children:"hover"})," pseudo-class with any existing utility class by using the syntax ",e.jsx("mark",{children:"hover:class-name"}),". This allows you to apply the utility class specifically when the element is being hovered."]}),e.jsx(n,{snippet:m}),e.jsx("h4",{id:"Active",children:"Active"}),e.jsxs("p",{children:["The ",e.jsx("mark",{children:"active"})," pseudo-class is used to apply styles when an element is being actively interacted with, such as when it is being clicked or tapped. It allows you to provide visual feedback to indicate the element is being pressed."]}),e.jsx(n,{snippet:y}),e.jsx("h4",{id:"Focus",children:"Focus"}),e.jsxs("p",{children:["The ",e.jsx("mark",{children:"active"})," pseudo-class is used to apply styles when an element is being actively interacted with, such as when it is being clicked or tapped. It allows you to provide visual feedback to indicate the element is being pressed."]}),e.jsx(n,{snippet:b}),e.jsx("h3",{id:"Cursor",children:"Cursor"}),e.jsxs("p",{children:["The ",e.jsx("mark",{children:"focus"})," pseudo-class is used to apply styles when an element gains focus."]}),e.jsx(n,{snippet:u}),e.jsx("h3",{id:"User Select",children:"User Select"}),e.jsxs("p",{children:["The ",e.jsx("mark",{children:"user-select"})," utility class allows you to control the selection behavior of text within an element:"]}),e.jsx(l,{tableItems:j}),e.jsx(n,{snippet:x}),e.jsxs("footer",{children:[e.jsx(d,{to:"/utilities/spacing",children:"Spacing"}),e.jsx("span",{})]}),e.jsxs("div",{className:"article-sidebar",children:[e.jsx("h3",{children:"Contents"}),e.jsx("h4",{onClick:()=>s(""),children:"Interactivity"}),e.jsx("h5",{onClick:()=>s("Transition Duration"),children:"Transition Duration"}),e.jsx("h4",{onClick:()=>s("States"),children:"States"}),e.jsx("h5",{onClick:()=>s("Hover"),children:"Hover"}),e.jsx("h5",{onClick:()=>s("Active"),children:"Active"}),e.jsx("h5",{onClick:()=>s("Focus"),children:"Focus"}),e.jsx("h4",{onClick:()=>s("Cursor"),children:"Cursor"}),e.jsx("h4",{onClick:()=>s("User Select"),children:"User Select"})]})]})};export{T as default};
