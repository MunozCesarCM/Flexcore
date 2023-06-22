export const example1 = `
<div class="h-50 bg-primary relative">
<span class="text-white absolute bg-none left-0">Top Left</span>
<span class="text-white absolute bg-none right-0">Top Right</span>
<span class="text-white absolute bg-none left-0 bottom-0">Bottom Left</span>
<span class="text-white absolute bg-none right-0 bottom-0">Bottom Right</span>
</div>
`.slice(1,-1);

export const example2 = `
<span class="visible">This is visible</span>
<span class="hidden">This is hidden</span>
`.slice(1,-1);

export const example3 = `
<div class="relative mb-7">
<span class="absolute w-15 top-0 z-30 bg-red-400 left-0">1</span>
<span class="absolute w-15 top-2 z-20 bg-yellow-400 left-10">2</span>
<span class="absolute w-15 top-4 z-10 bg-green-400 left-20">3</span>
<span class="absolute w-15 top-2 z-20 bg-blue-400 left-30">4</span>
<span class="absolute w-15 top-0 z-30 bg-purple-400 left-40">5</span>
</div>
`.slice(1,-1);

export const table1 = {
  body: [
    { title: 'box-border', desc: 'box-sizing: border-box' },
    { title: 'box-content', desc: 'box-sizing: content-box' },
  ],
};

export const table2 = {
  body: [
    { title: 'block', desc: 'display: block;' },
    { title: 'inline-block', desc: 'display: inline-block;' },
    { title: 'inline', desc: 'display: inline;' },
    { title: 'flex', desc: 'display: flex;' },
    { title: 'inline-flex', desc: 'display: inline-flex;' },
    { title: 'table', desc: 'display: table;' },
    { title: 'inline-table', desc: 'display: inline-table;' },
    { title: 'table-caption', desc: 'display: table-caption;' },
    { title: 'table-cell', desc: 'display: table-cell;' },
    { title: 'table-column', desc: 'display: table-column;' },
    { title: 'table-column-group', desc: 'display: table-column-group;' },
    { title: 'table-footer-group', desc: 'display: table-footer-group;' },
    { title: 'table-header-group', desc: 'display: table-header-group;' },
    { title: 'table-row-group', desc: 'display: table-row-group;' },
    { title: 'table-row', desc: 'display: table-row;' },
    { title: 'flow-root', desc: 'display: flow-root;' },
    { title: 'grid', desc: 'display: grid;' },
    { title: 'inline-grid', desc: 'display: inline-grid;' },
    { title: 'contents', desc: 'display: contents;' },
    { title: 'list-item', desc: 'display: list-item;' },
    { title: 'hidden', desc: 'display: none;' },  { title: 'block', desc: 'display: block;' },
  ],
};

export const table3 = {
  body: [
    { title: 'float-right', desc: 'float: right' },
    { title: 'float-left', desc: 'float: left' },
    { title: 'float-none', desc: 'float: none' },
  ],
};

export const table4 = {
  body: [
    { title: 'overflow-auto', desc: 'overflow: auto;' },
    { title: 'overflow-x-auto', desc: 'overflow-x: auto;' },
    { title: 'overflow-y-auto', desc: 'overflow-y: auto;' },
    { title: 'overflow-hidden', desc: 'overflow: hidden;' },
    { title: 'overflow-x-hidden', desc: 'overflow-x: hidden;' },
    { title: 'overflow-y-hidden', desc: 'overflow-y: hidden;' },
    { title: 'overflow-visible', desc: 'overflow: visible;' },
    { title: 'overflow-x-visible', desc: 'overflow-x: visible;' },
    { title: 'overflow-y-visible', desc: 'overflow-y: visible;' },
    { title: 'overflow-scroll', desc: 'overflow: scroll;' },
    { title: 'overflow-x-scroll', desc: 'overflow-x: scroll;' },
    { title: 'overflow-y-scroll', desc: 'overflow-y: scroll;' },
  ],
};

export const table5 = {
  body: [
    { title: 'static', desc: 'position: static' },
    { title: 'fixed', desc: 'position: fixed' },
    { title: 'absolute', desc: 'position: absolute' },
    { title: 'relative', desc: 'position: relative' },
    { title: 'sticky', desc: 'position: sticky' },
  ],
};

export const table6 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 100; i++) {
        array.push({
          title: `top-${i}`,
          desc: `top: ${i * 0.25}em`,
        });

        array.push({
          title: `right-${i}`,
          desc: `right: ${i * 0.25}em`,
        });

        array.push({
          title: `bottom-${i}`,
          desc: `bottom: ${i * 0.25}em`,
        });

        array.push({
          title: `left-${i}`,
          desc: `left: ${i * 0.25}em`,
        });
      }

      return array;
    })()
  ],
};

export const table7 = {
  body: [
    { title: 'visible', desc: 'visibility: visible'},
    { title: 'hidden', desc: 'visibility: hidden'},
  ],
}

export const table8 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 10; ++i) {
        array.push({
          title: `z-${i * 10}`,
          desc: `z-index: ${i * 10}`,
        });
      }

      return array;
    })()
  ],
}
