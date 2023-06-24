import{r as l,A as h,j as e}from"./index-b0774712.js";import{C as n}from"./CodeExample-ff5e3bdd.js";import{C as r}from"./ClassTable-4ce7c370.js";import"./formatCode-85636521.js";const d=`
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
`.slice(1,-1),u=`
<p class="select-text">This text is selectable</p>
<p class="select-none">This text is not</p>
`.slice(1,-1),x=`
<span class="
  bg-primary text-white px-4 py-2
  hover:bg-secondary hover:px-8 hover:py-4
  duration-100">
  Hover Me
</span>
`.slice(1,-1),m=`
<span class="
  bg-primary text-white px-4 py-2
  active:bg-secondary cursor-pointer select-none">
  Click Me
</span>
`.slice(1,-1),y=`
<input type="text" placeholder="Write some text" class="focus:bg-blue-50 focus:weight-500 border">
`.slice(1,-1),b={body:[{title:"select-none",desc:"user-select: none"},{title:"select-text",desc:"user-select: text"},{title:"select-all",desc:"user-select: all"},{title:"select-auto",desc:"user-select: auto"}]},v={body:[...function(){const t=[];for(let i=0;i<=20;++i)t.push({title:`duration-${i*50}`,desc:`transition-duration: ${i*50}ms`});return t}()]},C=()=>{const{sidebarActive:t,setSidebarActive:i}=l.useContext(h),s=p=>{const a=document.getElementById(p),c=a==null?void 0:a.getBoundingClientRect().top;let o=0;c!==void 0&&(o=c+window.pageYOffset-85),window.scrollTo({top:o,behavior:"smooth"})};return l.useEffect(()=>{t===null&&i(!0)},[]),e.jsxs("article",{className:t?"article-content-sb-active":"article-content",children:[e.jsxs("section",{style:{maxWidth:t?"calc(100vw - 300px - 275px)":"100vw"},children:[e.jsx("h2",{children:"Interactivity"}),e.jsx("p",{children:"FleXkit provides utility classes to modify various interactive aspects of elements to create engaging user experiences."}),e.jsx("h4",{id:"Transition Duration",children:"Transition Duration"}),e.jsx("p",{children:"FleXkit has utility classes to define the duration of CSS transitions, allowing you to control the speed of animations and smooth transitions between different states:"}),e.jsx(r,{tableItems:v}),e.jsx("h3",{id:"States",children:"States"}),e.jsx("p",{children:"To apply specific styles to elements based on their current state or interaction. These classes allow you to enhance the user experience by visually indicating different states or actions."}),e.jsx("h4",{id:"Hover",children:"Hover"}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"quote",children:"hover"})," pseudo-class is used to apply styles when an element is being hovered over by the cursor. It enables you to add visual effects or highlight elements to provide feedback to users."]}),e.jsxs("p",{children:["You can combine the ",e.jsx("span",{className:"quote",children:"hover"})," pseudo-class with any existing utility class by using the syntax ",e.jsx("span",{className:"quote",children:"hover:class-name"}),". This allows you to apply the utility class specifically when the element is being hovered."]}),e.jsx(n,{snippet:x}),e.jsx("h4",{id:"Active",children:"Active"}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"quote",children:"active"})," pseudo-class is used to apply styles when an element is being actively interacted with, such as when it is being clicked or tapped. It allows you to provide visual feedback to indicate the element is being pressed."]}),e.jsx(n,{snippet:m}),e.jsx("h4",{id:"Focus",children:"Focus"}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"quote",children:"active"})," pseudo-class is used to apply styles when an element is being actively interacted with, such as when it is being clicked or tapped. It allows you to provide visual feedback to indicate the element is being pressed."]}),e.jsx(n,{snippet:y}),e.jsx("h3",{id:"Cursor",children:"Cursor"}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"quote",children:"focus"})," pseudo-class is used to apply styles when an element gains focus."]}),e.jsx(n,{snippet:d}),e.jsx("h3",{id:"User Select",children:"User Select"}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"quote",children:"user-select"})," utility class allows you to control the selection behavior of text within an element:"]}),e.jsx(r,{tableItems:b}),e.jsx(n,{snippet:u})]}),e.jsxs("div",{className:"article-sidebar",children:[e.jsx("h3",{children:"Contents"}),e.jsx("h4",{onClick:()=>s(""),children:"Interactivity"}),e.jsx("h5",{onClick:()=>s("Transition Duration"),children:"Transition Duration"}),e.jsx("h4",{onClick:()=>s("States"),children:"States"}),e.jsx("h5",{onClick:()=>s("Hover"),children:"Hover"}),e.jsx("h5",{onClick:()=>s("Active"),children:"Active"}),e.jsx("h5",{onClick:()=>s("Focus"),children:"Focus"}),e.jsx("h4",{onClick:()=>s("Cursor"),children:"Cursor"}),e.jsx("h4",{onClick:()=>s("User Select"),children:"User Select"})]})]})};export{C as default};
