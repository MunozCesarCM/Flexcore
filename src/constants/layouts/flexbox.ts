export const example1 = `
<div class="flex">
  <div class="text-white text-center bg-primary basis-25">Basis 25</div>
  <div class="text-white text-center bg-secondary basis-40">Basis 50</div>
  <div class="text-white text-center bg-primary basis-25">Basis 25</div>
  <div class="text-white text-center bg-primary basis-25">Basis 25</div>
  <div class="text-white text-center bg-primary basis-25">Basis 25</div>
</div>
`.slice(1,-1);

export const example2 = `
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
`.slice(1,-1);

export const example3 = `
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
<h3>Flex Wrap Reverse</h3>
<div class="flex flex-wrap-reverse">
  <div class="text-white text-center bg-secondary basis-50">Item 1</div>
  <div class="text-white text-center bg-secondary basis-50">Item 2</div>
  <div class="text-white text-center bg-secondary basis-50">Item 3</div>
  <div class="text-white text-center bg-secondary basis-50">Item 4</div>
  <div class="text-white text-center bg-secondary basis-50">Item 5</div>
  <div class="text-white text-center bg-secondary basis-50">Item 6</div>
  <div class="text-white text-center bg-secondary basis-50">Item 7</div>
  <div class="text-white text-center bg-secondary basis-50">Item 8</div>
</div>
`.slice(1,-1);

export const example4 = `
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
`.slice(1,-1);

export const example5 = `
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
`.slice(1,-1);

export const example6 = `
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
`.slice(1,-1);

export const example7 = `
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
`.slice(1,-1);

export const example8 = `
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
`.slice(1,-1);

export const table1 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 100; i++) {
        array.push({
          title: `basis-${i}`,
          desc: `flex-basis: ${i * 0.25}em`,
        });
      }

      return array;
    })()
  ],
};

export const table2 = {
  body: [
    { title: 'flex-row', desc: 'flex-direction: row' },
    { title: 'flex-row-reverse', desc: 'flex-direction: row-reverse' },
    { title: 'flex-col', desc: 'flex-direction: column' },
    { title: 'flex-col-reverse', desc: 'flex-direction: column-reverse' },
  ],
};

export const table3 = {
  body: [
    { title: 'flex-wrap', desc: 'flex-wrap: wrap' },
    { title: 'flex-wrap-reverse', desc: 'flex-wrap: wrap-reverse' },
    { title: 'flex-nowrap', desc: 'flex-wrap: nowrap' },
  ],
};

export const table4 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 10; i++) {
        array.push({
          title: `flex-grow-${i}`,
          desc: `flex-grow: ${i}`,
        });
        array.push({
          title: `flex-shrink-${i}`,
          desc: `flex-shrink: ${i}`,
        });
      }

      return array;
    })()
  ],
};

export const table5 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 10; i++) {
        array.push({
          title: `flex-grow-${i}`,
          desc: `flex-grow: ${i}`,
        });
        array.push({
          title: `flex-shrink-${i}`,
          desc: `flex-shrink: ${i}`,
        });
      }

      return array;
    })()
  ],
};

export const table6 = {
  body: [
    { title: 'justify-start', desc: 'justify-content: flex-start' },
    { title: 'justify-center', desc: 'justify-content: flex-center' },
    { title: 'justify-end', desc: 'justify-content: flex-end' },
    { title: 'justify-between', desc: 'justify-content: space-between' },
    { title: 'justify-around', desc: 'justify-content: space-around' },
    { title: 'justify-evenly', desc: 'justify-content: space-evenly' },
  ],
};

export const table7 = {
  body: [
    { title: 'items-start', desc: 'align-items: flex-start' },
    { title: 'items-end', desc: 'align-items: flex-end' },
    { title: 'items-center', desc: 'align-items: center' },
    { title: 'items-baseline', desc: 'align-items: baseline' },
    { title: 'items-stretch', desc: 'align-items: stretch' },
  ],
};

export const table8 = {
  body: [
    { title: 'self-auto', desc: 'align-self: auto' },
    { title: 'self-start', desc: 'align-self: flex-start' },
    { title: 'self-center', desc: 'align-self: flex-center' },
    { title: 'self-end', desc: 'align-self: flex-end' },
    { title: 'self-stretch', desc: 'align-self: stretch' },
    { title: 'self-baseline', desc: 'align-self: baseline' },
  ],
};

// export const table7 = {
//   body: [
//     { title: 'justify-items-stretch', desc: 'justify-items: stretch' },
//     { title: 'justify-items-start', desc: 'justify-items: start' },
//     { title: 'justify-items-center', desc: 'justify-items: center' },
//     { title: 'justify-items-end', desc: 'justify-items: end' },
//   ],
// }
//
//
//        <h4 id='Justify Items'>Justify Items</h4>
//        <p><span className='quote'>justify-items</span> allows you to position flex items at different positions within the container.</p>
//        <ClassTable tableItems={table7} />
//        <CodeExample snippet={example7} />
//
//        <h4 id='Justify Self'>Justify Self</h4>
//        <p><span className='quote'>justify-self</span> allows you to override the default alignment set by the parent container.</p>
//        <ClassTable tableItems={table1} />
//        <CodeExample snippet={example1} />
//
//        <h4 id='Align Content'>Align Content</h4>
//        <p><span className='quote'>align-content</span> controls the spacing between lines of flex items and their alignment within the flex container.</p>
//        <ClassTable tableItems={table1} />
//        <CodeExample snippet={example1} />
