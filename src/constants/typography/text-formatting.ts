export const example1 = `
<h1>Welcome to FleXkit</h1>
<h2>Welcome to FleXkit</h2>
<h3>Welcome to FleXkit</h3>
<h4>Welcome to FleXkit</h4>
<h5>Welcome to FleXkit</h5>
<h6>Welcome to FleXkit</h6>
`.slice(1,-1);

export const example2 = `
<span class="h1">Welcome to FleXkit</span>
<span class="h2">Welcome to FleXkit</span>
<span class="h3">Welcome to FleXkit</span>
<span class="h4">Welcome to FleXkit</span>
<span class="h5">Welcome to FleXkit</span>
<span class="h6">Welcome to FleXkit</span>
`.slice(1,-1);

export const example3 = `
<p class="text-xs">This is a sentence with xs text</p>
<p class="text-sm">This is a sentence with sm text</p>
<p class="text-md">This is a sentence with md text</p>
<p class="text-lg">This is a sentence with large text</p>
<p class="text-xl">This is a sentence with extra large text</p>
`.slice(1,-1);

export const example4 = `
<p class="weight-100">This is a sentence with weight-100</p>
<p class="weight-200">This is a sentence with weight-200</p>
<p class="weight-300">This is a sentence with weight-300</p>
<p class="weight-400">This is a sentence with weight-400</p>
<p class="weight-500">This is a sentence with weight-500</p>
<p class="weight-600">This is a sentence with weight-600</p>
<p class="weight-700">This is a sentence with weight-700</p>
<p class="weight-800">This is a sentence with weight-800</p>
<p class="weight-900">This is a sentence with weight-900</p>
`.slice(1,-1);

export const example5 = `
<p class="italic">This is a sentence with italic text</p>
<p class="overline">This is a sentence with overlined text</p>
<p class="line-through">This is a sentence with line-through text</p>
<p class="underline">This is a sentence with underlined text</p>
`.slice(1,-1);

export const example6 = `
<p class="text-left">This is a left aligned paragraph</p>
<p class="text-center">This is a center aligned paragraph</p>
<p class="text-right">This is a right aligned paragraph</p>
`.slice(1,-1);

export const example10 = `
<p class="uppercase">This is a sentence with uppercased text</p>
<p class="lowercase">This is a sentence with lowercased text</p>
<p class="capitalize">This is a sentence with capitalized text</p>
`.slice(1,-1);

export const example7 = `
<p class="line-height-1">This has a line height of 1</p>
<p class="line-height-3">This has a line height of 3</p>
<p class="line-height-5">This has a line height of 5</p>
<p class="line-height-3">This has a line height of 3</p>
<p class="line-height-1">This has a line height of 1</p>
`.slice(1,-1);

export const example8 = `
<p class="letter-tighter">This is a sentence with tighter text</p>
<p class="letter-tight">This is a sentence with tight text</p>
<p class="letter-normal">This is a sentence with normal text</p>
<p class="letter-wide">This is a sentence with wide text</p>
<p class="letter-wider">This is a sentence with wider text</p>
<p class="letter-widest">This is a sentence with widest text</p>
`.slice(1,-1);

export const example9 = `
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
`.slice(1,-1);

export const table1 = {
  body: [
    { title: 'text-xs', desc: 'font-size: 0.75em' },
    { title: 'text-sm', desc: 'font-size: 0.875em' },
    { title: 'text-md', desc: 'font-size: 1em' },
    { title: 'text-lg', desc: 'font-size: 1.125em' },
    { title: 'text-xl', desc: 'font-size: 1.25em' },
    { title: 'text-2xl', desc: 'font-size: 1.5em' },
    { title: 'text-3xl', desc: 'font-size: 1.875em' },
    { title: 'text-4xl', desc: 'font-size: 2.25em' },
    { title: 'text-5xl', desc: 'font-size: 3em' },
    { title: 'text-6xl', desc: 'font-size: 3.75em' },
    { title: 'text-7xl', desc: 'font-size: 4.5em' },
    { title: 'text-8xl', desc: 'font-size: 6em' },
    { title: 'text-9xl', desc: 'font-size: 8em' }
  ],
};

export const table2 = {
  body: [
    { title: 'weight-100', desc: 'font-weight: 100' },
    { title: 'weight-200', desc: 'font-weight: 200' },
    { title: 'weight-300', desc: 'font-weight: 300' },
    { title: 'weight-400', desc: 'font-weight: 400' },
    { title: 'weight-500', desc: 'font-weight: 500' },
    { title: 'weight-600', desc: 'font-weight: 600' },
    { title: 'weight-700', desc: 'font-weight: 700' },
    { title: 'weight-800', desc: 'font-weight: 800' },
    { title: 'weight-900', desc: 'font-weight: 900' },
  ],
};

export const table3 = {
  body: [
    { title: 'italic', desc: 'font-style: italic' },
    { title: 'overline', desc: 'text-decoration: overline' },
    { title: 'line-through', desc: 'text-decoration: line-through' },
    { title: 'underline', desc: 'text-decoration: underline' },
    { title: 'no-italic', desc: 'font-style: normal' },
    { title: 'no-line', desc: 'text-decoration: none' },
  ],
};

export const table4 = {
  body: [
    { title: 'text-left', desc: 'text-align: left' },
    { title: 'text-center', desc: 'text-align: center' },
    { title: 'text-right', desc: 'text-align: right' },
    { title: 'text-justify', desc: 'text-align: justify' },
  ],
};

export const table8 = {
  body: [
    { title: 'uppercase', desc: 'text-transform: uppercase' },
    { title: 'lowercase', desc: 'text-transform: lowercase' },
    { title: 'capitalize', desc: 'text-transform: capitalize' },
    { title: 'normal-text', desc: 'text-transform: none' },
  ],
};

export const table5 = {
  body: [
    { title: 'line-height-0-5', desc: 'line-height: 0.5' },
    { title: 'line-height-0-75', desc: 'line-height: 0.75' },
    { title: 'line-height-1', desc: 'line-height: 1' },
    { title: 'line-height-1-25', desc: 'line-height: 1.25' },
    { title: 'line-height-1-5', desc: 'line-height: 1.5' },
    { title: 'line-height-1-75', desc: 'line-height: 1.75' },
    { title: 'line-height-2-25', desc: 'line-height: 2.25' },
    { title: 'line-height-2-5', desc: 'line-height: 2.5' },
    { title: 'line-height-2-75', desc: 'line-height: 2.75' },
    { title: 'line-height-3-25', desc: 'line-height: 3.25' },
    { title: 'line-height-3-5', desc: 'line-height: 3.5' },
    { title: 'line-height-3-75', desc: 'line-height: 3.75' },
    { title: 'line-height-4-25', desc: 'line-height: 4.25' },
    { title: 'line-height-4-5', desc: 'line-height: 4.5' },
    { title: 'line-height-4-75', desc: 'line-height: 4.75' },
    { title: 'line-height-5-25', desc: 'line-height: 5.25' },
    { title: 'line-height-5-5', desc: 'line-height: 5.5' },
    { title: 'line-height-5-75', desc: 'line-height: 5.75' },
    { title: 'line-height-6-25', desc: 'line-height: 6.25' },
    { title: 'line-height-6-5', desc: 'line-height: 6.5' },
    { title: 'line-height-6-75', desc: 'line-height: 6.75' },
    { title: 'line-height-7-25', desc: 'line-height: 7.25' },
    { title: 'line-height-7-5', desc: 'line-height: 7.5' },
    { title: 'line-height-7-75', desc: 'line-height: 7.75' },
    { title: 'line-height-8-25', desc: 'line-height: 8.25' },
    { title: 'line-height-8-5', desc: 'line-height: 8.5' },
    { title: 'line-height-8-75', desc: 'line-height: 8.75' },
    { title: 'line-height-9-25', desc: 'line-height: 9.25' },
    { title: 'line-height-9-5', desc: 'line-height: 9.5' },
    { title: 'line-height-9-75', desc: 'line-height: 9.75' },
    { title: 'line-height-10', desc: 'line-height: 10' }
  ],
};

export const table6 = {
  body: [
    { title: 'letter-tighter', desc: 'letter-spacing: -0.05em' },
    { title: 'letter-tight', desc: 'letter-spacing: -0.025em' },
    { title: 'letter-normal', desc: 'letter-spacing: normal' },
    { title: 'letter-wide', desc: 'letter-spacing: 0.025em' },
    { title: 'letter-wider', desc: 'letter-spacing: 0.05em' },
    { title: 'letter-widest', desc: 'letter-spacing: 0.1em' }
  ],
};

export const table7 = {
  body: [
    { title: 'list-disc', desc: 'list-style-type: disc' },
    { title: 'list-decimal', desc: 'list-style-type: decimal' },
    { title: 'list-none', desc: 'list-style-type: none' },
    { title: 'list-inside', desc: 'list-style-position: inside' },
    { title: 'list-outside', desc: 'list-style-position: outside' },
  ],
};
