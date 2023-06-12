export const example1 = `
<div class="flex">
  <div class="text-white bg-primary basis-25">Basis 25</div>
  <div class="text-white bg-secondary basis-40">Basis 50</div>
  <div class="text-white bg-primary basis-25">Basis 25</div>
  <div class="text-white bg-primary basis-25">Basis 25</div>
  <div class="text-white bg-primary basis-25">Basis 25</div>
</div>
`.slice(1,-1);

export const example2 = `
<div class="flex flex-row">
  <div class="text-white basis-30 bg-primary">Item 1</div>
  <div class="text-white basis-30 bg-primary">Item 2</div>
  <div class="text-white basis-30 bg-primary">Item 3</div>
</div>
<div class="flex flex-row-reverse">
  <div class="text-white basis-30 bg-secondary">Item 1</div>
  <div class="text-white basis-30 bg-secondary">Item 2</div>
  <div class="text-white basis-30 bg-secondary">Item 3</div>
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
