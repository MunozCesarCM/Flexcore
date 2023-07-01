import{r,A as x,j as e,T as h,L as d}from"./index-fee59e8d.js";import{C as i}from"./CodeExample-f9018ae5.js";import{C as s}from"./ClassTable-352d230e.js";import"./toast-e3b7705e.js";import"./formatCode-85636521.js";const p=`
<h1>Welcome to Flexcore</h1>
<h2>Welcome to Flexcore</h2>
<h3>Welcome to Flexcore</h3>
<h4>Welcome to Flexcore</h4>
<h5>Welcome to Flexcore</h5>
<h6>Welcome to Flexcore</h6>
`.slice(1,-1),m=`
<span class="h1">Welcome to Flexcore</span>
<span class="h2">Welcome to Flexcore</span>
<span class="h3">Welcome to Flexcore</span>
<span class="h4">Welcome to Flexcore</span>
<span class="h5">Welcome to Flexcore</span>
<span class="h6">Welcome to Flexcore</span>
`.slice(1,-1),f=`
<p class="text-xs">This is a sentence with xs text</p>
<p class="text-sm">This is a sentence with sm text</p>
<p class="text-md">This is a sentence with md text</p>
<p class="text-lg">This is a sentence with large text</p>
<p class="text-xl">This is a sentence with extra large text</p>
`.slice(1,-1),w=`
<p class="weight-100">This is a sentence with weight-100</p>
<p class="weight-200">This is a sentence with weight-200</p>
<p class="weight-300">This is a sentence with weight-300</p>
<p class="weight-400">This is a sentence with weight-400</p>
<p class="weight-500">This is a sentence with weight-500</p>
<p class="weight-600">This is a sentence with weight-600</p>
<p class="weight-700">This is a sentence with weight-700</p>
<p class="weight-800">This is a sentence with weight-800</p>
<p class="weight-900">This is a sentence with weight-900</p>
`.slice(1,-1),u=`
<p class="italic">This is a sentence with italic text</p>
<p class="overline">This is a sentence with overlined text</p>
<p class="line-through">This is a sentence with line-through text</p>
<p class="underline">This is a sentence with underlined text</p>
`.slice(1,-1),j=`
<p class="text-left">This is a left aligned paragraph</p>
<p class="text-center">This is a center aligned paragraph</p>
<p class="text-right">This is a right aligned paragraph</p>
`.slice(1,-1),y=`
<p class="uppercase">This is a sentence with uppercased text</p>
<p class="lowercase">This is a sentence with lowercased text</p>
<p class="capitalize">This is a sentence with capitalized text</p>
`.slice(1,-1),T=`
<p class="line-height-1">This has a line height of 1</p>
<p class="line-height-3">This has a line height of 3</p>
<p class="line-height-5">This has a line height of 5</p>
<p class="line-height-3">This has a line height of 3</p>
<p class="line-height-1">This has a line height of 1</p>
`.slice(1,-1),b=`
<p class="letter-tighter">This is a sentence with tighter text</p>
<p class="letter-tight">This is a sentence with tight text</p>
<p class="letter-normal">This is a sentence with normal text</p>
<p class="letter-wide">This is a sentence with wide text</p>
<p class="letter-wider">This is a sentence with wider text</p>
<p class="letter-widest">This is a sentence with widest text</p>
`.slice(1,-1),F=`
<ul class="list-disc list-inside">
  <li>List disc inside item</li>
  <li>List disc inside item</li>
  <li>List disc inside item</li>
</ul>
<ul class="list-decimal list-outside">
  <li>List decimal outside item</li>
  <li>List decimal outside item</li>
  <li>List decimal outside item</li>
</ul>
<ul class="list-none">
  <li class="italic">List none default item</li>
  <li class="line-through">List none default item</li>
  <li class="letter-widest">List none default item</li>
</ul>
`.slice(1,-1),z={body:[{title:"text-xs",desc:"font-size: 0.75em"},{title:"text-sm",desc:"font-size: 0.875em"},{title:"text-md",desc:"font-size: 1em"},{title:"text-lg",desc:"font-size: 1.125em"},{title:"text-xl",desc:"font-size: 1.25em"},{title:"text-2xl",desc:"font-size: 1.5em"},{title:"text-3xl",desc:"font-size: 1.875em"},{title:"text-4xl",desc:"font-size: 2.25em"},{title:"text-5xl",desc:"font-size: 3em"},{title:"text-6xl",desc:"font-size: 3.75em"},{title:"text-7xl",desc:"font-size: 4.5em"},{title:"text-8xl",desc:"font-size: 6em"},{title:"text-9xl",desc:"font-size: 8em"}]},L={body:[{title:"weight-100",desc:"font-weight: 100"},{title:"weight-200",desc:"font-weight: 200"},{title:"weight-300",desc:"font-weight: 300"},{title:"weight-400",desc:"font-weight: 400"},{title:"weight-500",desc:"font-weight: 500"},{title:"weight-600",desc:"font-weight: 600"},{title:"weight-700",desc:"font-weight: 700"},{title:"weight-800",desc:"font-weight: 800"},{title:"weight-900",desc:"font-weight: 900"}]},v={body:[{title:"italic",desc:"font-style: italic"},{title:"overline",desc:"text-decoration: overline"},{title:"line-through",desc:"text-decoration: line-through"},{title:"underline",desc:"text-decoration: underline"},{title:"no-italic",desc:"font-style: normal"},{title:"no-line",desc:"text-decoration: none"}]},C={body:[{title:"text-left",desc:"text-align: left"},{title:"text-center",desc:"text-align: center"},{title:"text-right",desc:"text-align: right"},{title:"text-justify",desc:"text-align: justify"}]},k={body:[{title:"uppercase",desc:"text-transform: uppercase"},{title:"lowercase",desc:"text-transform: lowercase"},{title:"capitalize",desc:"text-transform: capitalize"},{title:"normal-text",desc:"text-transform: none"}]},W={body:[{title:"line-height-0-5",desc:"line-height: 0.5"},{title:"line-height-0-75",desc:"line-height: 0.75"},{title:"line-height-1",desc:"line-height: 1"},{title:"line-height-1-25",desc:"line-height: 1.25"},{title:"line-height-1-5",desc:"line-height: 1.5"},{title:"line-height-1-75",desc:"line-height: 1.75"},{title:"line-height-2-25",desc:"line-height: 2.25"},{title:"line-height-2-5",desc:"line-height: 2.5"},{title:"line-height-2-75",desc:"line-height: 2.75"},{title:"line-height-3-25",desc:"line-height: 3.25"},{title:"line-height-3-5",desc:"line-height: 3.5"},{title:"line-height-3-75",desc:"line-height: 3.75"},{title:"line-height-4-25",desc:"line-height: 4.25"},{title:"line-height-4-5",desc:"line-height: 4.5"},{title:"line-height-4-75",desc:"line-height: 4.75"},{title:"line-height-5-25",desc:"line-height: 5.25"},{title:"line-height-5-5",desc:"line-height: 5.5"},{title:"line-height-5-75",desc:"line-height: 5.75"},{title:"line-height-6-25",desc:"line-height: 6.25"},{title:"line-height-6-5",desc:"line-height: 6.5"},{title:"line-height-6-75",desc:"line-height: 6.75"},{title:"line-height-7-25",desc:"line-height: 7.25"},{title:"line-height-7-5",desc:"line-height: 7.5"},{title:"line-height-7-75",desc:"line-height: 7.75"},{title:"line-height-8-25",desc:"line-height: 8.25"},{title:"line-height-8-5",desc:"line-height: 8.5"},{title:"line-height-8-75",desc:"line-height: 8.75"},{title:"line-height-9-25",desc:"line-height: 9.25"},{title:"line-height-9-5",desc:"line-height: 9.5"},{title:"line-height-9-75",desc:"line-height: 9.75"},{title:"line-height-10",desc:"line-height: 10"}]},S={body:[{title:"letter-tighter",desc:"letter-spacing: -0.05em"},{title:"letter-tight",desc:"letter-spacing: -0.025em"},{title:"letter-normal",desc:"letter-spacing: normal"},{title:"letter-wide",desc:"letter-spacing: 0.025em"},{title:"letter-wider",desc:"letter-spacing: 0.05em"},{title:"letter-widest",desc:"letter-spacing: 0.1em"}]},A={body:[{title:"list-disc",desc:"list-style-type: disc"},{title:"list-decimal",desc:"list-style-type: decimal"},{title:"list-none",desc:"list-style-type: none"},{title:"list-inside",desc:"list-style-position: inside"},{title:"list-outside",desc:"list-style-position: outside"}]},B=()=>{const{sidebarActive:l,setSidebarActive:c}=r.useContext(x),t=g=>{const n=document.getElementById(g),a=n==null?void 0:n.getBoundingClientRect().top;let o=0;a!==void 0&&(o=a+window.scrollY-85),window.scrollTo({top:o,behavior:"smooth"})};return r.useEffect(()=>{l===null&&c(!0)},[l,c]),e.jsxs("article",{className:l?"article-content-sb-active":"article-content",children:[e.jsx("h2",{children:"Text Formatting"}),e.jsx("p",{children:"Text formatting is essential for creating visually appealing and readable interfaces. Flexcore offers a range of options to customize the typography of your web pages. Let's dive into the various aspects of text formatting that Flexcore provides."}),e.jsx("h3",{id:"Headings",children:"Headings"}),e.jsxs("p",{children:[e.jsx("mark",{children:"headings"})," are crucial for organizing content and establishing a hierarchy within your web pages."]}),e.jsx(i,{snippet:p}),e.jsxs("p",{children:["If you need to match the font styling of a ",e.jsx("mark",{children:"heading"})," but cannot use the associated HTML element, Flexcore provides ",e.jsx("mark",{children:".h1"})," through ",e.jsx("mark",{children:".h6"})," classes for your convenience."]}),e.jsx(i,{snippet:m}),e.jsx("h3",{id:"Font Customization",children:"Font Customization"}),e.jsxs("section",{className:"notification-container-info",children:[e.jsx(h,{}),e.jsx("span",{className:"quote-text",children:"Customizing fonts is a powerful way to align your web interfaces with your design preferences."})]}),e.jsx("h4",{id:"Font Size",children:"Font Size"}),e.jsxs("p",{children:["Font size is crucial for establishing visual hierarchy and readability. Flexcore offers preset ",e.jsx("mark",{children:"font-size"})," classes to easily adjust the size of your text:"]}),e.jsx(s,{tableItems:z}),e.jsxs("p",{children:["Font customization allows you to choose from a wide range of ",e.jsx("strong",{children:"sizes"})," and ",e.jsx("strong",{children:"weights"})," to achieve the desired visual style for your ",e.jsx("mark",{children:"headings"})," and text elements. Experimenting with different combinations of fonts can enhance the aesthetics and readability of your interface."]}),e.jsx(i,{snippet:f}),e.jsx("h4",{id:"Font Weight",children:"Font Weight"}),e.jsxs("p",{children:[e.jsx("mark",{children:"font-weight"})," adds emphasis and visual impact to your text. With Flexcore, you can effortlessly customize the font weight:"]}),e.jsx(s,{tableItems:L}),e.jsx(i,{snippet:w}),e.jsx("h4",{id:"Font Style",children:"Font Style"}),e.jsxs("p",{children:[e.jsx("mark",{children:"font-style"})," adds personality and character to your text. Flexcore provides easy ways to apply font styles:"]}),e.jsx(s,{tableItems:v}),e.jsx(i,{snippet:u}),e.jsx("h3",{id:"Layout and Alignment",children:"Layout and Alignment"}),e.jsxs("section",{className:"notification-container-info",children:[e.jsx(h,{}),e.jsx("span",{className:"quote-text",children:"Layout and alignment contribute to the visual harmony and readability of your web interfaces. Flexcore offers tools to fine-tune the layout and alignment of your text."})]}),e.jsx("h4",{id:"Text Alignment",children:"Text Alignment"}),e.jsx("p",{children:"Text alignment plays a crucial role in establishing a clear visual structure. Flexcore provides classes to align text in different contexts:"}),e.jsx(s,{tableItems:C}),e.jsx(i,{snippet:j}),e.jsx("h4",{id:"Text Transform",children:"Text Transform"}),e.jsxs("p",{children:[e.jsx("mark",{children:"text-transform"})," allows you to control the capitalization and styling of text within your web interface:"]}),e.jsx(s,{tableItems:k}),e.jsx(i,{snippet:y}),e.jsx("h4",{id:"Line Height",children:"Line Height"}),e.jsxs("p",{children:[e.jsx("mark",{children:"line-height"})," affects the spacing between lines of text, impacting readability. Flexcore offers classes to adjust the line height:"]}),e.jsx(s,{tableItems:W}),e.jsx(i,{snippet:T}),e.jsx("h4",{id:"Letter Spacing",children:"Letter Spacing"}),e.jsxs("p",{children:[e.jsx("mark",{children:"letter-spacing"})," influences the spacing between characters, improving legibility and visual impact. Flexcore provides classes to adjust letter spacing:"]}),e.jsx(s,{tableItems:S}),e.jsx(i,{snippet:b}),e.jsx("h3",{id:"Lists",children:"Lists"}),e.jsx("p",{children:"Flexcore offers simple options for creating both ordered and unordered lists."}),e.jsxs("section",{className:"notification-container-info",children:[e.jsx(h,{}),e.jsx("span",{className:"quote-text",children:"Lists are a great way to present information in an organized manner."})]}),e.jsx(s,{tableItems:A}),e.jsx(i,{snippet:F}),e.jsxs("footer",{children:[e.jsx(d,{to:"/typography/color-and-styling",children:"Color and Styling"}),e.jsx(d,{to:"/showcase/google",children:"Google"})]}),e.jsxs("div",{className:"article-sidebar",children:[e.jsx("h3",{children:"Contents"}),e.jsx("h4",{onClick:()=>t(""),children:"Text Formatting"}),e.jsx("h4",{onClick:()=>t("Headings"),children:"Headings"}),e.jsx("h4",{onClick:()=>t("Font Customization"),children:"Font Customization"}),e.jsx("h5",{onClick:()=>t("Font Size"),children:"Font Size"}),e.jsx("h5",{onClick:()=>t("Font Weight"),children:"Font Weight"}),e.jsx("h5",{onClick:()=>t("Font Style"),children:"Font Style"}),e.jsx("h4",{onClick:()=>t("Layout and Alignment"),children:"Layout and Alignment"}),e.jsx("h5",{onClick:()=>t("Text Alignment"),children:"Text Alignment"}),e.jsx("h5",{onClick:()=>t("Text Transform"),children:"Text Transform"}),e.jsx("h5",{onClick:()=>t("Line Height"),children:"Line Height"}),e.jsx("h5",{onClick:()=>t("Letter Spacing"),children:"Letter Spacing"}),e.jsx("h4",{onClick:()=>t("Lists"),children:"Lists"})]})]})};export{B as default};
