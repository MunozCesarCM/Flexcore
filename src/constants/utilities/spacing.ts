export const example1 = `
<span class="bg-primary text-white p-0">padding 0</span>
<span class="bg-primary text-white p-1">padding 1</span>
<span class="bg-primary text-white p-2">padding 2</span>
<span class="bg-primary text-white p-3">padding 3</span>
`.slice(1,-1);

export const example2 = `
<span class="bg-primary text-white m-0">margin 0</span>
<span class="bg-primary text-white m-1">margin 1</span>
<span class="bg-primary text-white m-2">margin 2</span>
<span class="bg-primary text-white m-3">margin 3</span>
`.slice(1,-1);

export const table1 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 100; ++i) {
        array.push({
          title: `p-${i}`,
          desc: `padding: ${i * 0.25}em`,
        });
      }

      return array;
    })()
  ],
};

export const table2 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 100; ++i) {
        const item = {
          title: `px-${i}`,
          desc: `padding-left: ${i * 0.25}em\npadding-right: ${i * 0.25}em`,
        };
        array.push(item);
      }

      for (let i = 0; i <= 100; ++i) {
        array.push({
          title: `py-${i}`,
          desc: `padding-top: ${i * 0.25}em\npadding-bottom: ${i * 0.25}em`,
        });
      }

      return array;
    })()
  ],
};

export const table3 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 100; ++i) {
        array.push({
          title: `pt-${i}`,
          desc: `padding-top: ${i * 0.25}em`,
        });

        array.push({
          title: `pr-${i}`,
          desc: `padding-right: ${i * 0.25}em`,
        });

        array.push({
          title: `pb-${i}`,
          desc: `padding-bottom: ${i * 0.25}em`,
        });

        array.push({
          title: `pl-${i}`,
          desc: `padding-left: ${i * 0.25}em`,
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

      for (let i = 0; i <= 100; ++i) {
        array.push({
          title: `m-${i}`,
          desc: `margin: ${i * 0.25}em`,
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

      for (let i = 0; i <= 100; ++i) {
        array.push({
          title: `mx-${i}`,
          desc: `margin-left: ${i * 0.25}em\nmargin-right: ${i * 0.25}em`,
        });

        array.push({
          title: `my-${i}`,
          desc: `margin-top: ${i * 0.25}em\nmargin-bottom: ${i * 0.25}em`,
        });
      }

      return array;
    })()
  ],
};

export const table6 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 100; ++i) {
        array.push({
          title: `mt-${i}`,
          desc: `margin-top: ${i * 0.25}em`,
        });

        array.push({
          title: `mr-${i}`,
          desc: `margin-right: ${i * 0.25}em`,
        });

        array.push({
          title: `mb-${i}`,
          desc: `margin-bottom: ${i * 0.25}em`,
        });

        array.push({
          title: `ml-${i}`,
          desc: `margin-left: ${i * 0.25}em`,
        });
      }

      return array;
    })()
  ],
};
