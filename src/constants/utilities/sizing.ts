export const example1 = `
<p class="text-black bg-red-400 w-full">This is full width</p>
<p class="text-black bg-orange-400 w-1/2">This is 50% width</p>
<p class="text-black bg-yellow-400 w-1/3">This is 33% width</p>
<p class="text-black bg-green-400 w-1/4">This is 25% width</p>
<p class="text-black bg-blue-400 w-50">This is width 50</p>
<p class="text-black bg-purple-400 w-100">This is width 100</p>
`.slice(1,-1);

export const example2 = `
<p class="text-black bg-red-400 h-10">This is height 10</p>
<p class="text-black bg-orange-400 h-20">This is height 20</p>
<p class="text-black bg-yellow-400 h-30">This is height 30</p>
<p class="text-black bg-green-400 h-40">This is height 40</p>
<p class="text-black bg-blue-400 h-60">This is height 60</p>
<p class="text-black bg-purple-400 h-100">This is height 100</p>
`.slice(1,-1);

export const table1 = {
  body: [
    { title: 'w-auto', desc: 'width: auto' },
    { title: 'w-full', desc: 'width: 100%' },
    { title: 'w-screen', desc: 'width: 100vw' },
    { title: 'w-min', desc: 'width: min-content' },
    { title: 'w-max', desc: 'width: max-content' },
    { title: 'w-fit', desc: 'width: fit-content' },

    ...(function() {
      const array = [];

      for (let i = 0; i <= 100; ++i) {
        array.push({
          title: `w-${i}`,
          desc: `width: ${i * 0.25}em`,
        });
      }

      return array;
    })()
  ],
};

export const table2 = {
  body: [
    { title: 'min-w-0', desc: 'min-width: 0' },
    { title: 'min-w-full', desc: 'min-width: 100%' },
    { title: 'min-w-min', desc: 'min-width: min-content' },
    { title: 'min-w-max', desc: 'min-width: max-content' },
    { title: 'min-w-fit', desc: 'min-width: fit-content' },
  ],
};

export const table3 = {
  body: [
    { title: 'max-w-0', desc: 'max-width: 0' },
    { title: 'max-w-full', desc: 'max-width: 100%' },
    { title: 'max-w-min', desc: 'max-width: min-content' },
    { title: 'max-w-max', desc: 'max-width: max-content' },
    { title: 'max-w-fit', desc: 'max-width: fit-content' },
    { title: 'max-w-none', desc: 'max-width: none' },
    { title: 'max-w-1', desc: 'max-width: 0.25em' },
  ],
};

export const table4 = {
  body: [
    { title: 'h-auto', desc: 'height: auto' },
    { title: 'h-full', desc: 'height: 100%' },
    { title: 'h-screen', desc: 'height: 100vw' },
    { title: 'h-min', desc: 'height: min-content' },
    { title: 'h-max', desc: 'height: max-content' },
    { title: 'h-fit', desc: 'height: fit-content' },
    { title: 'h-1/2', desc: 'height: 50%' },
    { title: 'h-1/3', desc: 'height: 33.333333%' },
    { title: 'h-2/3', desc: 'height: 66.666667%' },
    { title: 'h-1/4', desc: 'height: 25%' },
    { title: 'h-2/4', desc: 'height: 50%' },
    { title: 'h-3/4', desc: 'height: 75%' },
    { title: 'h-1/5', desc: 'height: 20%' },
    { title: 'h-2/5', desc: 'height: 40%' },
    { title: 'h-3/5', desc: 'height: 60%' },
    { title: 'h-4/5', desc: 'height: 80%' },
    { title: 'h-1/6', desc: 'height: 16.666667%' },
    { title: 'h-2/6', desc: 'height: 33.333333%' },
    { title: 'h-3/6', desc: 'height: 50%' },
    { title: 'h-4/6', desc: 'height: 66.666667%' },
    { title: 'h-5/6', desc: 'height: 83.333333%' },

    ...(function() {
      const array = [];

      for (let i = 0; i <= 100; ++i) {
        array.push({
          title: `h-${i}`,
          desc: `height: ${i * 0.25}em`,
        });
      }

      return array;
    })()
  ],
};

export const table5 = {
  body: [
    { title: 'min-h-0', desc: 'min-height: 0' },
    { title: 'min-h-full', desc: 'min-height: 100%' },
    { title: 'min-h-screen', desc: 'min-height: 100vh' },
    { title: 'min-h-min', desc: 'min-height: min-content' },
    { title: 'min-h-max', desc: 'min-height: max-content' },
    { title: 'min-h-fit', desc: 'min-height: fit-content' },
  ],
};

export const table6 = {
  body: [
    { title: 'max-h-full', desc: 'max-height: 100%' },
    { title: 'max-h-min', desc: 'max-height: min-content' },
    { title: 'max-h-max', desc: 'max-height: max-content' },
    { title: 'max-h-fit', desc: 'max-height: fit-content' },

    ...(function() {
      const array = [];

      for (let i = 0; i <= 100; ++i) {
        array.push({
          title: `max-h-${i}`,
          desc: `max-height: ${i * 0.25}em`,
        });
      }

      return array;
    })()
  ],
};
