export const example1 = `
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
`.slice(1,-1);

export const example2 = `
<p class="select-text">This text is selectable</p>
<p class="select-none">This text is not</p>
`.slice(1,-1);

export const example3 = `
<span class="
  bg-primary text-white px-4 py-2
  hover:bg-secondary hover:px-8 hover:py-4
  duration-100">
  Hover Me
</span>
`.slice(1,-1);

export const example4 = `
<span class="
  bg-primary text-white px-4 py-2
  active:bg-secondary cursor-pointer select-none">
  Click Me
</span>
`.slice(1,-1);

export const example5 = `
<input type="text" placeholder="Write some text" class="focus:bg-blue-50 focus:weight-500 border">
`.slice(1,-1);

export const table1 = {
  body: [
    { title: 'cursor-auto', desc: 'cursor: auto' },
    { title: 'cursor-default', desc: 'cursor: default' },
    { title: 'cursor-pointer', desc: 'cursor: pointer' },
    { title: 'cursor-wait', desc: 'cursor: wait' },
    { title: 'cursor-text', desc: 'cursor: text' },
    { title: 'cursor-move', desc: 'cursor: move' },
    { title: 'cursor-help', desc: 'cursor: help' },
    { title: 'cursor-not-allowed', desc: 'cursor: not-allowed' },
    { title: 'cursor-none', desc: 'cursor: none' },
    { title: 'cursor-context-menu', desc: 'cursor: context-menu' },
    { title: 'cursor-progress', desc: 'cursor: progress' },
    { title: 'cursor-cell', desc: 'cursor: cell' },
    { title: 'cursor-crosshair', desc: 'cursor: crosshair' },
    { title: 'cursor-vertical-text', desc: 'cursor: vertical-text' },
    { title: 'cursor-alias', desc: 'cursor: alias' },
    { title: 'cursor-copy', desc: 'cursor: copy' },
    { title: 'cursor-no-drop', desc: 'cursor: no-drop' },
    { title: 'cursor-grab', desc: 'cursor: grab' },
    { title: 'cursor-grabbing', desc: 'cursor: grabbing' },
    { title: 'cursor-all-scroll', desc: 'cursor: all-scroll' },
    { title: 'cursor-col-resize', desc: 'cursor: col-resize' },
    { title: 'cursor-row-resize', desc: 'cursor: row-resize' },
    { title: 'cursor-n-resize', desc: 'cursor: n-resize' },
    { title: 'cursor-e-resize', desc: 'cursor: e-resize' },
    { title: 'cursor-s-resize', desc: 'cursor: s-resize' },
    { title: 'cursor-w-resize', desc: 'cursor: w-resize' },
    { title: 'cursor-ne-resize', desc: 'cursor: ne-resize' },
    { title: 'cursor-nw-resize', desc: 'cursor: nw-resize' },
    { title: 'cursor-se-resize', desc: 'cursor: se-resize' },
    { title: 'cursor-sw-resize', desc: 'cursor: sw-resize' },
    { title: 'cursor-ew-resize', desc: 'cursor: ew-resize' },
    { title: 'cursor-ns-resize', desc: 'cursor: ns-resize' },
    { title: 'cursor-nesw-resize', desc: 'cursor: nesw-resize' },
    { title: 'cursor-nwse-resize', desc: 'cursor: nwse-resize' },
    { title: 'cursor-zoom-in', desc: 'cursor: zoom-in' },
    { title: 'cursor-zoom-out', desc: 'cursor: zoom-out' },
  ],
}

export const table2 = {
  body: [
    { title: 'select-none', desc: 'user-select: none' },
    { title: 'select-text', desc: 'user-select: text' },
    { title: 'select-all', desc: 'user-select: all' },
    { title: 'select-auto', desc: 'user-select: auto' },
  ],
}

export const table3 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 20; ++i) {
        array.push({
          title: `duration-${i * 50}`,
          desc: `transition-duration: ${i * 50}ms`,
        });
      }

      return array;
    })()
  ],
}
