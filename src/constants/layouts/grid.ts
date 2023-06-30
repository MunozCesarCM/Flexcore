export const example1 = `
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
`.slice(1,-1);

export const example2 = `
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
`.slice(1,-1);

export const example3 = `
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
`.slice(1,-1);

export const example4 = `
<section class="grid grid-cols-4 gap-2">
  <div class="bg-secondary text-white text-center col-end-2">End 2</div>
  <div class="bg-primary text-white text-center">Item</div>
  <div class="bg-primary text-white text-center">Item</div>
  <div class="bg-primary text-white text-center">Item</div>
  <div class="bg-secondary text-white text-center col-end-3">End 3</div>
  <div class="bg-primary text-white text-center">Item</div>
  <div class="bg-primary text-white text-center">Item</div>
  <div class="bg-secondary text-white text-center col-end-4">End 4</div>
  <div class="bg-primary text-white text-center">Item</div>
  <div class="bg-secondary text-white text-center col-end-5">End 5</div>
</section>
`.slice(1,-1);

export const table1 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 1; i <= 12; ++i) {
        array.push({
          title: `grid-cols-${i}`,
          desc: `grid-template-columns: repeat(${i}, minmax(0, 1fr))`,
        });
      }

      array.push({
        title: `grid-cols-none`,
        desc: `grid-template-columns: none`,
      })

      return array;
    })()
  ],
};

export const table2 = {
  body: [
    ...(function() {
      const array = [];

      array.push({
        title: `col-auto`,
        desc: `grid-column: auto`,
      })

      for (let i = 1; i <= 12; ++i) {
        array.push({
          title: `col-span-${i}`,
          desc: `grid-column: span ${i} / span ${i}`,
        });
      }

      array.push({
        title: `col-span-full`,
        desc: `grid-column: 1 / -1`,
      })

      return array;
    })()
  ],
};

export const table3 = {
  body: [
    ...(function() {
      const array = [];

      array.push({
        title: `col-start-auto`,
        desc: `grid-column-start: auto`,
      })

      array.push({
        title: `col-end-auto`,
        desc: `grid-column-end: auto`,
      })

      for (let i = 1; i <= 12; ++i) {
        array.push({
          title: `col-start-${i}`,
          desc: `grid-column-start: ${i}`,
        });
        array.push({
          title: `col-end-${i}`,
          desc: `grid-column-end: ${i}`,
        });
      }

      return array;
    })()
  ],
};

export const table4 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 1; i <= 12; ++i) {
        array.push({
          title: `col-end-${i}`,
          desc: `grid-column-end: ${i}`,
        });
      }

      return array;
    })()
  ],
};
