import{r as l,A as a,j as e,L as b}from"./index-fee59e8d.js";import{C as o}from"./CodeExample-f9018ae5.js";import"./toast-e3b7705e.js";import"./formatCode-85636521.js";const c=`
<button class="bg-blue-600 text-white weight-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Blue</button>
<button class="bg-red-600 text-white weight-500 border-none px-5 py-2 rounded hover:bg-red-700 duration-100 cursor-pointer active:bg-red-800">Red</button>
<button class="bg-yellow-500 text-white weight-500 border-none px-5 py-2 rounded hover:bg-yellow-600 duration-100 cursor-pointer active:bg-yellow-700">Yellow</button>
<button class="bg-green-600 text-white weight-500 border-none px-5 py-2 rounded hover:bg-green-700 duration-100 cursor-pointer active:bg-green-800">Green</button>
<button class="bg-purple-600 text-white weight-500 border-none px-5 py-2 rounded hover:bg-purple-700 duration-100 cursor-pointer active:bg-purple-800">Purple</button>
<button class="bg-primary text-white weight-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Primary</button>
<button class="bg-secondary text-white weight-500 border-none px-4 py-2 rounded hover:bg-rose-700 duration-100 cursor-pointer active:bg-rose-800">Secondary</button>
`.slice(1,-1),p=`
<h3>Pill Buttons</h3>
<button class="bg-blue-600 text-white weight-500 border-none px-5 py-2 rounded-3xl hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Blue</button>
<button class="bg-red-600 text-white weight-500 border-none px-5 py-2 rounded-3xl hover:bg-red-700 duration-100 cursor-pointer active:bg-red-800">Red</button>
<button class="bg-yellow-500 text-white weight-500 border-none px-5 py-2 rounded-3xl hover:bg-yellow-600 duration-100 cursor-pointer active:bg-yellow-700">Yellow</button>
<button class="bg-green-600 text-white weight-500 border-none px-5 py-2 rounded-3xl hover:bg-green-700 duration-100 cursor-pointer active:bg-green-800">Green</button>
<button class="bg-purple-600 text-white weight-500 border-none px-5 py-2 rounded-3xl hover:bg-purple-700 duration-100 cursor-pointer active:bg-purple-800">Purple</button>
<button class="bg-primary text-white weight-500 border-none px-5 py-2 rounded-3xl hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Primary</button>
<button class="bg-secondary text-white weight-500 border-none px-4 py-2 rounded-3xl hover:bg-rose-600 duration-100 cursor-pointer active:bg-rose-700">Secondary</button>

<h3 class="mt-10">Outlined Buttons</h3>
<button class="border border-blue-600 text-blue-600 weight-500 bg-none px-5 py-2 rounded hover:border-blue-700 hover:text-blue-700 duration-100 cursor-pointer active:border-blue-800 active:text-blue-800">Blue</button>
<button class="border border-red-600 text-red-600 weight-500 bg-none px-5 py-2 rounded hover:border-red-700 hover:text-red-700 duration-100 cursor-pointer active:border-red-800 active:text-red-800">Red</button>
<button class="border border-yellow-500 text-yellow-500 weight-500 bg-none px-5 py-2 rounded hover:border-yellow-600 hover:text-yellow-600 duration-100 cursor-pointer active:border-yellow-700 active:text-yellow-700">Yellow</button>
<button class="border border-green-600 text-green-600 weight-500 bg-none px-5 py-2 rounded hover:border-green-700 hover:text-green-700 duration-100 cursor-pointer active:border-green-800 active:text-green-800">Green</button>
<button class="border border-purple-600 text-purple-600 weight-500 bg-none px-5 py-2 rounded hover:border-purple-700 hover:text-purple-700 duration-100 cursor-pointer active:border-purple-800 active:text-purple-800">Purple</button>
<button class="border border-primary text-primary weight-500 bg-none px-5 py-2 rounded hover:border-blue-700 hover:text-blue-700 duration-100 cursor-pointer active:border-blue-800 active:text-blue-800">Primary</button>
<button class="border border-secondary text-secondary weight-500 bg-none px-5 py-2 rounded hover:border-rose-600 hover:text-rose-600 duration-100 cursor-pointer active:border-rose-700 active:text-rose-700">Secondary</button>

<h3 class="mt-10">Text Buttons</h3>
<button class="border-none bg-none text-blue-600 weight-500 underline cursor-pointer hover:text-blue-700 focus:text-blue-800">Blue</button>
<button class="border-none bg-none text-red-600 weight-500 underline cursor-pointer hover:text-red-700 focus:text-red-800">Red</button>
<button class="border-none bg-none text-yellow-500 weight-500 underline cursor-pointer hover:text-yellow-600 focus:text-yellow-700">Yellow</button>
<button class="border-none bg-none text-green-600 weight-500 underline cursor-pointer hover:text-green-700 focus:text-green-800">Green</button>
<button class="border-none bg-none text-purple-600 weight-500 underline cursor-pointer hover:text-purple-700 focus:text-purple-800">Purple</button>
<button class="border-none bg-none text-primary weight-500 underline cursor-pointer hover:text-blue-700 focus:text-blue-800">Primary</button>
<button class="border-none bg-none text-secondary weight-500 underline cursor-pointer hover:text-rose-600 focus:text-rose-700">Secondary</button>

<h3 class="mt-10">Outlined to Filled</h3>
<button class="border border-blue-600 text-blue-600 weight-500 bg-none px-5 py-2 rounded-3xl hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:rounded duration-100 cursor-pointer active:border-blue-800 active:bg-blue-800">Blue</button>
<button class="border border-red-600 text-red-600 weight-500 bg-none px-5 py-2 rounded-3xl hover:border-red-700 hover:bg-red-700 hover:text-white hover:rounded duration-100 cursor-pointer active:border-red-800 active:bg-red-800">Red</button>
<button class="border border-yellow-500 text-yellow-500 weight-500 bg-none px-5 py-2 rounded-3xl hover:border-yellow-500 hover:bg-yellow-500 hover:text-white hover:rounded duration-100 cursor-pointer active:border-yellow-600 active:bg-yellow-600">Yellow</button>
<button class="border border-green-600 text-green-600 weight-500 bg-none px-5 py-2 rounded-3xl hover:border-green-700 hover:bg-green-700 hover:text-white hover:rounded duration-100 cursor-pointer active:border-green-800 active:bg-green-800">Green</button>
<button class="border border-purple-600 text-purple-600 weight-500 bg-none px-5 py-2 rounded-3xl hover:border-purple-700 hover:bg-purple-700 hover:text-white hover:rounded duration-100 cursor-pointer active:border-purple-800 active:bg-purple-800">Purple</button>
<button class="border border-primary text-primary weight-500 bg-none px-5 py-2 rounded-3xl hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:rounded duration-100 cursor-pointer active:border-blue-800 active:bg-blue-800">Primary</button>
<button class="border border-secondary text-secondary weight-500 bg-none px-5 py-2 rounded-3xl hover:border-rose-600 hover:bg-rose-600 hover:text-white hover:rounded duration-100 cursor-pointer active:border-rose-700 active:bg-rose-700">Secondary</button>
`.slice(1,-1),g=`
<h3>Enabled</h3>
<button class="bg-blue-600 text-white weight-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Blue</button>
<button class="bg-red-600 text-white weight-500 border-none px-5 py-2 rounded hover:bg-red-700 duration-100 cursor-pointer active:bg-red-800">Red</button>
<button class="bg-yellow-500 text-white weight-500 border-none px-5 py-2 rounded hover:bg-yellow-600 duration-100 cursor-pointer active:bg-yellow-700">Yellow</button>
<button class="bg-green-600 text-white weight-500 border-none px-5 py-2 rounded hover:bg-green-700 duration-100 cursor-pointer active:bg-green-800">Green</button>
<button class="bg-purple-600 text-white weight-500 border-none px-5 py-2 rounded hover:bg-purple-700 duration-100 cursor-pointer active:bg-purple-800">Purple</button>
<button class="bg-primary text-white weight-500 border-none px-5 py-2 rounded hover:bg-blue-600 duration-100 cursor-pointer active:bg-blue-700">Primary</button>
<button class="bg-secondary text-white weight-500 border-none px-5 py-2 rounded hover:bg-rose-700 duration-100 cursor-pointer active:bg-rose-800">Secondary</button>

<h3 class="mt-10">Disabled</h3>
<button class="bg-blue-600 text-white weight-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Blue</button>
<button class="bg-red-600 text-white weight-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Red</button>
<button class="bg-yellow-500 text-white weight-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Yellow</button>
<button class="bg-green-600 text-white weight-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Green</button>
<button class="bg-purple-600 text-white weight-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Purple</button>
<button class="bg-primary text-white weight-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Primary</button>
<button class="bg-secondary text-white weight-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Secondary</button>
`.slice(1,-1),h=`
<button class="bg-primary text-white text-xs weight-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Extra Small</button>
<button class="bg-primary text-white text-sm weight-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Small</button>
<button class="bg-primary text-white text-md weight-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Normal</button>
<button class="bg-primary text-white text-lg weight-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Large</button>
<button class="bg-primary text-white text-xl weight-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Extra Large</button>
`.slice(1,-1),x=`
<button class="bg-blue-600 text-white weight-500 border-none my-5 px-5 py-2 rounded flex inline-flex items-center hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">
  <svg class="w-5 mr-3 bg-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
  Like
</button>
<button class="bg-green-600 text-white weight-500 border-none my-5 px-5 py-2 rounded flex inline-flex items-center hover:bg-green-700 duration-100 cursor-pointer active:bg-green-800">
  <svg class="w-5 mr-3 bg-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
  Message
</button>
<button class="bg-purple-600 text-white weight-500 border-none my-5 px-5 py-2 rounded flex inline-flex items-center hover:bg-purple-700 duration-100 cursor-pointer active:bg-purple-800">
  <svg class="w-5 mr-3 bg-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
  Play
</button>
<br />
<button class="bg-rose-600 weight-500 border-none my-5 px-3 py-3 rounded-3xl flex inline-flex items-center hover:bg-rose-700 duration-100 cursor-pointer active:bg-rose-800">
  <svg class="w-5 bg-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
</button>
<button class="bg-yellow-500 weight-500 border-none my-5 px-3 py-3 rounded flex inline-flex items-center hover:bg-yellow-600 duration-100 cursor-pointer active:bg-yellow-700">
  <svg class="w-5 bg-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</button>
<button class="bg-green-600 weight-500 border-none my-5 px-3 py-3 rounded-3xl flex inline-flex items-center hover:bg-green-700 duration-100 cursor-pointer active:bg-green-800">
  <svg class="w-5 bg-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M20.4 14.5L16 10 4 20"/></svg>
</button>
<button class="bg-blue-600 weight-500 border-none my-5 px-3 py-3 rounded flex inline-flex items-center hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">
  <svg class="w-5 bg-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"/></svg>
</button>
<button class="bg-purple-600 weight-500 border-none my-5 px-3 py-3 rounded-3xl flex inline-flex items-center hover:bg-purple-700 duration-100 cursor-pointer active:bg-purple-800">
  <svg class="w-5 bg-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
</button>
`.slice(1,-1),f=()=>{const{sidebarActive:r,setSidebarActive:i}=l.useContext(a),t=d=>{const n=document.getElementById(d),u=n==null?void 0:n.getBoundingClientRect().top;let s=0;u!==void 0&&(s=u+window.scrollY-85),window.scrollTo({top:s,behavior:"smooth"})};return l.useEffect(()=>{r===null&&i(!0)},[r,i]),e.jsxs("article",{className:r?"article-content-sb-active":"article-content",children:[e.jsx("h2",{children:"Buttons"}),e.jsx("p",{children:"Flexcore offers a wide range of button styles and variations to enhance your user interface. Let's explore the different button types you can create with Flexcore:"}),e.jsx("h3",{id:"Standard Buttons",children:"Standard Buttons"}),e.jsx("p",{children:"These buttons serve as the foundation for most interactions. They provide clear and distinguishable styles for different actions. Use them to guide users towards important actions or convey different levels of urgency."}),e.jsx(o,{snippet:c}),e.jsx("h3",{id:"Stylistic Buttons",children:"Stylistic Buttons"}),e.jsx("p",{children:"For added visual appeal, you can create styled buttons to match your design preferences and create eye-catching interfaces."}),e.jsx(o,{snippet:p}),e.jsx("h3",{id:"State Buttons",children:"State Buttons"}),e.jsx("p",{children:"State buttons allow you to indicate the disabled state of a button. These buttons appear much lighter and are non-interactive, providing visual feedback that certain actions are not currently available or applicable."}),e.jsx(o,{snippet:g}),e.jsx("h3",{id:"Buttons Size",children:"Buttons Size"}),e.jsx("p",{children:"Adjust the size of your buttons to suit different contexts or emphasize specific actions. With Flexcore you can create small and large buttons to create visual hierarchy or optimize space allocation."}),e.jsx(o,{snippet:h}),e.jsx("h3",{id:"Icon Buttons",children:"Icon Buttons"}),e.jsx("p",{children:"Combine the power of icons with buttons to enhance usability and visual communication. Flexcore allows you to integrate icons with your buttons, either as standalone icon-only buttons or buttons with icons and accompanying text."}),e.jsx(o,{snippet:x}),e.jsxs("footer",{children:[e.jsx(b,{to:"/showcase/twitter",children:"Twitter"}),e.jsx(b,{to:"/forms-and-inputs/text-fields",children:"Text Fields"})]}),e.jsxs("div",{className:"article-sidebar",children:[e.jsx("h3",{children:"Contents"}),e.jsx("h4",{onClick:()=>t(""),children:"Buttons"}),e.jsx("h4",{onClick:()=>t("Standard Buttons"),children:"Standard Buttons"}),e.jsx("h4",{onClick:()=>t("Stylistic Buttons"),children:"Stylistic Buttons"}),e.jsx("h4",{onClick:()=>t("State Buttons"),children:"State Buttons"}),e.jsx("h4",{onClick:()=>t("Buttons Size"),children:"Buttons Size"}),e.jsx("h4",{onClick:()=>t("Icon Buttons"),children:"Icon Buttons"})]})]})};export{f as default};
