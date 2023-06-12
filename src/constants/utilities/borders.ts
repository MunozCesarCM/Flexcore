export const example1 = `
<span class="bg-primary text-white px-4 py-2 rounded">Normal</span>
<span class="bg-primary text-white px-4 py-2 rounded-lg">Large</span>
<span class="bg-primary text-white px-4 py-2 rounded-xl">Extra Large</span>
<span class="bg-primary text-white px-4 py-2 rounded-2xl">2 Extra Large</span>
<span class="bg-primary text-white px-4 py-2 rounded-3xl">3 Extra Large</span>
<div class="my-10" />
<span class="bg-primary text-white px-4 py-2 rounded-t-2xl">Top</span>
<span class="bg-primary text-white px-4 py-2 rounded-r-2xl">Right</span>
<span class="bg-primary text-white px-4 py-2 rounded-b-2xl">Bottom</span>
<span class="bg-primary text-white px-4 py-2 rounded-l-2xl">Left</span>
<div class="my-10" />
<span class="bg-primary text-white px-4 py-2 rounded-tl-2xl">Top Left</span>
<span class="bg-primary text-white px-4 py-2 rounded-tr-2xl">Top Right</span>
<span class="bg-primary text-white px-4 py-2 rounded-bl-2xl">Bottom Left</span>
<span class="bg-primary text-white px-4 py-2 rounded-br-2xl">Bottom Right</span>
`.slice(1,-1);

export const example2 = `
<span class="border-2 px-4 py-2 rounded-2xl border-red-400">Red</span>
<span class="border-3 px-4 py-2 rounded-2xl border-yellow-400">Yellow</span>
<span class="border-4 px-4 py-2 rounded-2xl border-green-400">Green</span>
<span class="border-5 px-4 py-2 rounded-2xl border-blue-400">Blue</span>
<span class="border-6 px-4 py-2 rounded-2xl border-purple-400">Purple</span>
<span class="border-7 px-4 py-2 rounded-2xl border-secondary">Secondary</span>
<span class="border-8 px-4 py-2 rounded-2xl border-primary">Primary</span>
`.slice(1,-1);

export const example3 = `
<p class="border-4 px-4 py-2 border-primary border-solid">Solid</p>
<p class="border-4 px-4 py-2 border-secondary border-dashed">Dashed</p>
<p class="border-4 px-4 py-2 border-primary border-dotted">Dotted</p>
<p class="border-4 px-4 py-2 border-secondary border-double">Double</p>
`.slice(1,-1);

export const example4 = `
<p class="border px-4 py-2 my-10 border-gray-500 outline-2 outline-offset-5 outline-red-400">Solid</p>
<p class="border px-4 py-2 my-10 border-gray-500 outline-3 outline-offset-5 outline-yellow-400">Solid</p>
<p class="border px-4 py-2 my-10 border-gray-500 outline-4 outline-offset-5 outline-green-400">Solid</p>
<p class="border px-4 py-2 my-10 border-gray-500 outline-5 outline-offset-5 outline-blue-400">Solid</p>
<p class="border px-4 py-2 my-10 border-gray-500 outline-6 outline-offset-5 outline-purple-400">Solid</p>
`.slice(1,-1);

export const example5 = `
<p class="border px-4 py-2 my-10 border-secondary outline-3 outline-primary outline-offset-5 outline-solid">Solid</p>
<p class="border px-4 py-2 my-10 border-secondary outline-3 outline-primary outline-offset-5 outline-dashed">Dashed</p>
<p class="border px-4 py-2 my-10 border-secondary outline-3 outline-primary outline-offset-5 outline-dotted">Dotted</p>
<p class="border px-4 py-2 my-10 border-secondary outline-3 outline-primary outline-offset-5 outline-double">Double</p>
`.slice(1,-1);

const borderRadii = {
  '-none': 0,
  '-sm': '0.125em',
  '': '0.25em',
  '-md': '0.375em',
  '-lg': '0.5em',
  '-xl': '0.75em',
  '-2xl': '1em',
  '-3xl': '1.5em',
  '-full': '9999px',
};

export const table1 = {
  body: [
    ...(function() {
      const array = [];

      Object.entries(borderRadii).map(([size, value]) => {
        array.push({
          title: `rounded${size}`,
          desc: `border-radius: ${value};`,
        });
      });

      for (const [size, value] of Object.entries(borderRadii)) {
        array.push({
          title: `rounded-tl${size}`,
          desc: `border-top-left-radius: ${value}`,
        });
        array.push({
          title: `rounded-tr${size}`,
          desc: `border-top-right-radius: ${value}`,
        });
        array.push({
          title: `rounded-bl${size}`,
          desc: `border-bottom-left-radius: ${value}`,
        });
        array.push({
          title: `rounded-br${size}`,
          desc: `border-bottom-right-radius: ${value}`,
        });
        array.push({
          title: `rounded-t${size}`,
          desc: `border-top-left-radius: ${value};\nborder-top-right-radius: ${value};`,
        });
        array.push({
          title: `rounded-r${size}`,
          desc: `border-top-right-radius: ${value};\nborder-bottom-right-radius: ${value};`,
        });
        array.push({
          title: `rounded-b${size}`,
          desc: `border-bottom-left-radius: ${value};\nborder-bottom-right-radius: ${value};`,
        });
        array.push({
          title: `rounded-l${size}`,
          desc: `border-top-left-radius: ${value};\nborder-bottom-left-radius: ${value};`,
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

      for (let i = 0; i <= 10; ++i) {
        if (i === 1) {
          array.push({
            title: `border`,
            desc: `border-width: ${i}px`,
          });
        } else {
          array.push({
            title: `border-${i}`,
            desc: `border-width: ${i}px`,
          });
        }
      }

      for (let i = 0; i <= 10; ++i) {
        if (i === 1) {
          array.push({
            title: `border-t`,
            desc: `border-top-width: ${i}px`,
          });
          array.push({
            title: `border-r`,
            desc: `border-right-width: ${i}px`,
          });
          array.push({
            title: `border-b`,
            desc: `border-bottom-width: ${i}px`,
          });
          array.push({
            title: `border-l`,
            desc: `border-left-width: ${i}px`,
          });
        } else {
          array.push({
            title: `border-t-${i}`,
            desc: `border-top-width: ${i}px`,
          });
          array.push({
            title: `border-r-${i}`,
            desc: `border-right-width: ${i}px`,
          });
          array.push({
            title: `border-b-${i}`,
            desc: `border-bottom-width: ${i}px`,
          });
          array.push({
            title: `border-l-${i}`,
            desc: `border-left-width: ${i}px`,
          });
        }
      }

      return array;
    })()
  ],
}

export const table3 = {
  body: [
    { title: 'border-black', desc: 'border-color: #000000' },
    { title: 'border-white', desc: 'border-color: #FFFFFF' },
    { title: 'border-red-50', desc: 'border-color: #FEF2F2' },
    { title: 'border-red-100', desc: 'border-color: #FEE2E2' },
    { title: 'border-red-200', desc: 'border-color: #FECACA' },
    { title: 'border-red-300', desc: 'border-color: #FCA5A5' },
    { title: 'border-red-400', desc: 'border-color: #F87171' },
    { title: 'border-red-500', desc: 'border-color: #EF4444' },
    { title: 'border-red-600', desc: 'border-color: #DC2626' },
    { title: 'border-red-700', desc: 'border-color: #B91C1C' },
    { title: 'border-red-800', desc: 'border-color: #991B1B' },
    { title: 'border-red-900', desc: 'border-color: #7F1D1D' },
    { title: 'border-red-950', desc: 'border-color: #450A0A' },
    { title: 'border-orange-50', desc: 'border-color: #FFF7ED' },
    { title: 'border-orange-100', desc: 'border-color: #FFEDD5' },
    { title: 'border-orange-200', desc: 'border-color: #FED7AA' },
    { title: 'border-orange-300', desc: 'border-color: #FDBA74' },
    { title: 'border-orange-400', desc: 'border-color: #FB923C' },
    { title: 'border-orange-500', desc: 'border-color: #F97316' },
    { title: 'border-orange-600', desc: 'border-color: #EA580C' },
    { title: 'border-orange-700', desc: 'border-color: #C2410C' },
    { title: 'border-orange-800', desc: 'border-color: #9A3412' },
    { title: 'border-orange-900', desc: 'border-color: #7C2D12' },
    { title: 'border-orange-950', desc: 'border-color: #431407' },
    { title: 'border-amber-50', desc: 'border-color: #FFFBEB' },
    { title: 'border-amber-100', desc: 'border-color: #FEF3C7' },
    { title: 'border-amber-200', desc: 'border-color: #FDE68A' },
    { title: 'border-amber-300', desc: 'border-color: #FCD34D' },
    { title: 'border-amber-400', desc: 'border-color: #FBBF24' },
    { title: 'border-amber-500', desc: 'border-color: #F59E0B' },
    { title: 'border-amber-600', desc: 'border-color: #D97706' },
    { title: 'border-amber-700', desc: 'border-color: #B45309' },
    { title: 'border-amber-800', desc: 'border-color: #92400E' },
    { title: 'border-amber-900', desc: 'border-color: #78350F' },
    { title: 'border-amber-950', desc: 'border-color: #451A03' },
    { title: 'border-yellow-50', desc: 'border-color: #FEFCE8' },
    { title: 'border-yellow-100', desc: 'border-color: #FEF9C3' },
    { title: 'border-yellow-200', desc: 'border-color: #FEF08A' },
    { title: 'border-yellow-300', desc: 'border-color: #FDE047' },
    { title: 'border-yellow-400', desc: 'border-color: #FACC15' },
    { title: 'border-yellow-500', desc: 'border-color: #EAB308' },
    { title: 'border-yellow-600', desc: 'border-color: #CA8A04' },
    { title: 'border-yellow-700', desc: 'border-color: #A16207' },
    { title: 'border-yellow-800', desc: 'border-color: #854D0E' },
    { title: 'border-yellow-900', desc: 'border-color: #713F12' },
    { title: 'border-yellow-950', desc: 'border-color: #422006' },
    { title: 'border-lime-50', desc: 'border-color: #F7FEE7' },
    { title: 'border-lime-100', desc: 'border-color: #ECFCCB' },
    { title: 'border-lime-200', desc: 'border-color: #D9F99D' },
    { title: 'border-lime-300', desc: 'border-color: #BEF264' },
    { title: 'border-lime-400', desc: 'border-color: #A3E635' },
    { title: 'border-lime-500', desc: 'border-color: #84CC16' },
    { title: 'border-lime-600', desc: 'border-color: #65A30D' },
    { title: 'border-lime-700', desc: 'border-color: #4D7C0F' },
    { title: 'border-lime-800', desc: 'border-color: #3F6212' },
    { title: 'border-lime-900', desc: 'border-color: #365314' },
    { title: 'border-lime-950', desc: 'border-color: #1A2E05' },
    { title: 'border-green-50', desc: 'border-color: #F0FDF4' },
    { title: 'border-green-100', desc: 'border-color: #DCFCE7' },
    { title: 'border-green-200', desc: 'border-color: #BBF7D0' },
    { title: 'border-green-300', desc: 'border-color: #86EFAC' },
    { title: 'border-green-400', desc: 'border-color: #4ADE80' },
    { title: 'border-green-500', desc: 'border-color: #22C55E' },
    { title: 'border-green-600', desc: 'border-color: #16A34A' },
    { title: 'border-green-700', desc: 'border-color: #15803D' },
    { title: 'border-green-800', desc: 'border-color: #166534' },
    { title: 'border-green-900', desc: 'border-color: #14532D' },
    { title: 'border-green-950', desc: 'border-color: #052E16' },
    { title: 'border-emerald-50', desc: 'border-color: #ECFDF5' },
    { title: 'border-emerald-100', desc: 'border-color: #D1FAE5' },
    { title: 'border-emerald-200', desc: 'border-color: #A7F3D0' },
    { title: 'border-emerald-300', desc: 'border-color: #6EE7B7' },
    { title: 'border-emerald-400', desc: 'border-color: #34D399' },
    { title: 'border-emerald-500', desc: 'border-color: #10B981' },
    { title: 'border-emerald-600', desc: 'border-color: #059669' },
    { title: 'border-emerald-700', desc: 'border-color: #047857' },
    { title: 'border-emerald-800', desc: 'border-color: #065F46' },
    { title: 'border-emerald-900', desc: 'border-color: #064E3B' },
    { title: 'border-emerald-950', desc: 'border-color: #022C22' },
    { title: 'border-teal-50', desc: 'border-color: #F0FDFA' },
    { title: 'border-teal-100', desc: 'border-color: #CCFBF1' },
    { title: 'border-teal-200', desc: 'border-color: #99F6E4' },
    { title: 'border-teal-300', desc: 'border-color: #5EEAD4' },
    { title: 'border-teal-400', desc: 'border-color: #2DD4BF' },
    { title: 'border-teal-500', desc: 'border-color: #14B8A6' },
    { title: 'border-teal-600', desc: 'border-color: #0D9488' },
    { title: 'border-teal-700', desc: 'border-color: #0F766E' },
    { title: 'border-teal-800', desc: 'border-color: #115E59' },
    { title: 'border-teal-900', desc: 'border-color: #134E4A' },
    { title: 'border-teal-950', desc: 'border-color: #042F2E' },
    { title: 'border-cyan-50', desc: 'border-color: #ECFEFF' },
    { title: 'border-cyan-100', desc: 'border-color: #CFFAFE' },
    { title: 'border-cyan-200', desc: 'border-color: #A5F3FC' },
    { title: 'border-cyan-300', desc: 'border-color: #67E8F9' },
    { title: 'border-cyan-400', desc: 'border-color: #22D3EE' },
    { title: 'border-cyan-500', desc: 'border-color: #06B6D4' },
    { title: 'border-cyan-600', desc: 'border-color: #0891B2' },
    { title: 'border-cyan-700', desc: 'border-color: #0E7490' },
    { title: 'border-cyan-800', desc: 'border-color: #155E75' },
    { title: 'border-cyan-900', desc: 'border-color: #164E63' },
    { title: 'border-cyan-950', desc: 'border-color: #083344' },
    { title: 'border-sky-50', desc: 'border-color: #F0F9FF' },
    { title: 'border-sky-100', desc: 'border-color: #E0F2FE' },
    { title: 'border-sky-200', desc: 'border-color: #BAE6FD' },
    { title: 'border-sky-300', desc: 'border-color: #7DD3FC' },
    { title: 'border-sky-400', desc: 'border-color: #38BDF8' },
    { title: 'border-sky-500', desc: 'border-color: #0EA5E9' },
    { title: 'border-sky-600', desc: 'border-color: #0284C7' },
    { title: 'border-sky-700', desc: 'border-color: #0369A1' },
    { title: 'border-sky-800', desc: 'border-color: #075985' },
    { title: 'border-sky-900', desc: 'border-color: #0C4A6E' },
    { title: 'border-sky-950', desc: 'border-color: #062C44' },
    { title: 'border-blue-50', desc: 'border-color: #EFF6FF' },
    { title: 'border-blue-100', desc: 'border-color: #DBEAFE' },
    { title: 'border-blue-200', desc: 'border-color: #BFDBFE' },
    { title: 'border-blue-300', desc: 'border-color: #93C5FD' },
    { title: 'border-blue-400', desc: 'border-color: #60A5FA' },
    { title: 'border-blue-500', desc: 'border-color: #3B82F6' },
    { title: 'border-blue-600', desc: 'border-color: #2563EB' },
    { title: 'border-blue-700', desc: 'border-color: #1D4ED8' },
    { title: 'border-blue-800', desc: 'border-color: #1E40AF' },
    { title: 'border-blue-900', desc: 'border-color: #1E3A8A' },
    { title: 'border-blue-950', desc: 'border-color: #0D2538' },
    { title: 'border-indigo-50', desc: 'border-color: #EEF2FF' },
    { title: 'border-indigo-100', desc: 'border-color: #E0E7FF' },
    { title: 'border-indigo-200', desc: 'border-color: #C7D2FE' },
    { title: 'border-indigo-300', desc: 'border-color: #A5B4FC' },
    { title: 'border-indigo-400', desc: 'border-color: #818CF8' },
    { title: 'border-indigo-500', desc: 'border-color: #6366F1' },
    { title: 'border-indigo-600', desc: 'border-color: #4F46E5' },
    { title: 'border-indigo-700', desc: 'border-color: #4338CA' },
    { title: 'border-indigo-800', desc: 'border-color: #3730A3' },
    { title: 'border-indigo-900', desc: 'border-color: #312E81' },
    { title: 'border-indigo-950', desc: 'border-color: #1D1D45' },
    { title: 'border-violet-50', desc: 'border-color: #F5F3FF' },
    { title: 'border-violet-100', desc: 'border-color: #EDE9FE' },
    { title: 'border-violet-200', desc: 'border-color: #DDD6FE' },
    { title: 'border-violet-300', desc: 'border-color: #C4B5FD' },
    { title: 'border-violet-400', desc: 'border-color: #A78BFA' },
    { title: 'border-violet-500', desc: 'border-color: #8B5CF6' },
    { title: 'border-violet-600', desc: 'border-color: #7C3AED' },
    { title: 'border-violet-700', desc: 'border-color: #6D28D9' },
    { title: 'border-violet-800', desc: 'border-color: #5B21B6' },
    { title: 'border-violet-900', desc: 'border-color: #4C1D95' },
    { title: 'border-violet-950', desc: 'border-color: #2E1F49' },
    { title: 'border-purple-50', desc: 'border-color: #FAF5FF' },
    { title: 'border-purple-100', desc: 'border-color: #F3E8FF' },
    { title: 'border-purple-200', desc: 'border-color: #E9D5FF' },
    { title: 'border-purple-300', desc: 'border-color: #D8B4FE' },
    { title: 'border-purple-400', desc: 'border-color: #C084FC' },
    { title: 'border-purple-500', desc: 'border-color: #A855F7' },
    { title: 'border-purple-600', desc: 'border-color: #9333EA' },
    { title: 'border-purple-700', desc: 'border-color: #7E22CE' },
    { title: 'border-purple-800', desc: 'border-color: #6B21A8' },
    { title: 'border-purple-900', desc: 'border-color: #581C87' },
    { title: 'border-purple-950', desc: 'border-color: #341A4D' },
    { title: 'border-magenta-50', desc: 'border-color: #FDF4FF' },
    { title: 'border-magenta-100', desc: 'border-color: #FAE8FF' },
    { title: 'border-magenta-200', desc: 'border-color: #F5D0FE' },
    { title: 'border-magenta-300', desc: 'border-color: #F0ABFC' },
    { title: 'border-magenta-400', desc: 'border-color: #E879F9' },
    { title: 'border-magenta-500', desc: 'border-color: #D946EF' },
    { title: 'border-magenta-600', desc: 'border-color: #C026D3' },
    { title: 'border-magenta-700', desc: 'border-color: #A21CAF' },
    { title: 'border-magenta-800', desc: 'border-color: #86198F' },
    { title: 'border-magenta-900', desc: 'border-color: #701A75' },
    { title: 'border-magenta-950', desc: 'border-color: #451225' },
    { title: 'border-pink-50', desc: 'border-color: #FDF2F8' },
    { title: 'border-pink-100', desc: 'border-color: #FCE7F3' },
    { title: 'border-pink-200', desc: 'border-color: #FBCFE8' },
    { title: 'border-pink-300', desc: 'border-color: #F9A8D4' },
    { title: 'border-pink-400', desc: 'border-color: #F472B6' },
    { title: 'border-pink-500', desc: 'border-color: #EC4899' },
    { title: 'border-pink-600', desc: 'border-color: #DB2777' },
    { title: 'border-pink-700', desc: 'border-color: #BE185D' },
    { title: 'border-pink-800', desc: 'border-color: #9D174D' },
    { title: 'border-pink-900', desc: 'border-color: #831843' },
    { title: 'border-pink-950', desc: 'border-color: #451225' },
    { title: 'border-slate-50', desc: 'border-color: #F8FAFC' },
    { title: 'border-slate-100', desc: 'border-color: #F1F5F9' },
    { title: 'border-slate-200', desc: 'border-color: #E2E8F0' },
    { title: 'border-slate-300', desc: 'border-color: #CBD5E1' },
    { title: 'border-slate-400', desc: 'border-color: #94A3B8' },
    { title: 'border-slate-500', desc: 'border-color: #64748B' },
    { title: 'border-slate-600', desc: 'border-color: #475569' },
    { title: 'border-slate-700', desc: 'border-color: #334155' },
    { title: 'border-slate-800', desc: 'border-color: #1E293B' },
    { title: 'border-slate-900', desc: 'border-color: #0F172A' },
    { title: 'border-slate-950', desc: 'border-color: #020617' },
    { title: 'border-neutral-50', desc: 'border-color: #FAFAFA' },
    { title: 'border-neutral-100', desc: 'border-color: #F5F5F5' },
    { title: 'border-neutral-200', desc: 'border-color: #E5E5E5' },
    { title: 'border-neutral-300', desc: 'border-color: #D4D4D4' },
    { title: 'border-neutral-400', desc: 'border-color: #A3A3A3' },
    { title: 'border-neutral-500', desc: 'border-color: #737373' },
    { title: 'border-neutral-600', desc: 'border-color: #525252' },
    { title: 'border-neutral-700', desc: 'border-color: #404040' },
    { title: 'border-neutral-800', desc: 'border-color: #262626' },
    { title: 'border-neutral-900', desc: 'border-color: #171717' },
    { title: 'border-neutral-950', desc: 'border-color: #0A0A0A' },
  ],
};

export const table4 = {
  body: [
    { title: 'border-solid', desc: 'border-style: solid' },
    { title: 'border-dashed', desc: 'border-style: dashed' },
    { title: 'border-dotted', desc: 'border-style: dotted' },
    { title: 'border-double', desc: 'border-style: double' },
    { title: 'border-hidden', desc: 'border-style: hidden' },
    { title: 'border-none', desc: 'border-style: none' },
  ],
};

export const table5 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 10; ++i) {
        array.push({
          title: `outline-${i}`,
          desc: `outline-width: ${i}px`,
        });
      }

      return array;
    })()
  ],
};

export const table6 = {
  body: [
    { title: 'outline-black', desc: 'outline-color: #000000' },
    { title: 'outline-white', desc: 'outline-color: #FFFFFF' },
    { title: 'outline-red-50', desc: 'outline-color: #FEF2F2' },
    { title: 'outline-red-100', desc: 'outline-color: #FEE2E2' },
    { title: 'outline-red-200', desc: 'outline-color: #FECACA' },
    { title: 'outline-red-300', desc: 'outline-color: #FCA5A5' },
    { title: 'outline-red-400', desc: 'outline-color: #F87171' },
    { title: 'outline-red-500', desc: 'outline-color: #EF4444' },
    { title: 'outline-red-600', desc: 'outline-color: #DC2626' },
    { title: 'outline-red-700', desc: 'outline-color: #B91C1C' },
    { title: 'outline-red-800', desc: 'outline-color: #991B1B' },
    { title: 'outline-red-900', desc: 'outline-color: #7F1D1D' },
    { title: 'outline-red-950', desc: 'outline-color: #450A0A' },
    { title: 'outline-orange-50', desc: 'outline-color: #FFF7ED' },
    { title: 'outline-orange-100', desc: 'outline-color: #FFEDD5' },
    { title: 'outline-orange-200', desc: 'outline-color: #FED7AA' },
    { title: 'outline-orange-300', desc: 'outline-color: #FDBA74' },
    { title: 'outline-orange-400', desc: 'outline-color: #FB923C' },
    { title: 'outline-orange-500', desc: 'outline-color: #F97316' },
    { title: 'outline-orange-600', desc: 'outline-color: #EA580C' },
    { title: 'outline-orange-700', desc: 'outline-color: #C2410C' },
    { title: 'outline-orange-800', desc: 'outline-color: #9A3412' },
    { title: 'outline-orange-900', desc: 'outline-color: #7C2D12' },
    { title: 'outline-orange-950', desc: 'outline-color: #431407' },
    { title: 'outline-amber-50', desc: 'outline-color: #FFFBEB' },
    { title: 'outline-amber-100', desc: 'outline-color: #FEF3C7' },
    { title: 'outline-amber-200', desc: 'outline-color: #FDE68A' },
    { title: 'outline-amber-300', desc: 'outline-color: #FCD34D' },
    { title: 'outline-amber-400', desc: 'outline-color: #FBBF24' },
    { title: 'outline-amber-500', desc: 'outline-color: #F59E0B' },
    { title: 'outline-amber-600', desc: 'outline-color: #D97706' },
    { title: 'outline-amber-700', desc: 'outline-color: #B45309' },
    { title: 'outline-amber-800', desc: 'outline-color: #92400E' },
    { title: 'outline-amber-900', desc: 'outline-color: #78350F' },
    { title: 'outline-amber-950', desc: 'outline-color: #451A03' },
    { title: 'outline-yellow-50', desc: 'outline-color: #FEFCE8' },
    { title: 'outline-yellow-100', desc: 'outline-color: #FEF9C3' },
    { title: 'outline-yellow-200', desc: 'outline-color: #FEF08A' },
    { title: 'outline-yellow-300', desc: 'outline-color: #FDE047' },
    { title: 'outline-yellow-400', desc: 'outline-color: #FACC15' },
    { title: 'outline-yellow-500', desc: 'outline-color: #EAB308' },
    { title: 'outline-yellow-600', desc: 'outline-color: #CA8A04' },
    { title: 'outline-yellow-700', desc: 'outline-color: #A16207' },
    { title: 'outline-yellow-800', desc: 'outline-color: #854D0E' },
    { title: 'outline-yellow-900', desc: 'outline-color: #713F12' },
    { title: 'outline-yellow-950', desc: 'outline-color: #422006' },
    { title: 'outline-lime-50', desc: 'outline-color: #F7FEE7' },
    { title: 'outline-lime-100', desc: 'outline-color: #ECFCCB' },
    { title: 'outline-lime-200', desc: 'outline-color: #D9F99D' },
    { title: 'outline-lime-300', desc: 'outline-color: #BEF264' },
    { title: 'outline-lime-400', desc: 'outline-color: #A3E635' },
    { title: 'outline-lime-500', desc: 'outline-color: #84CC16' },
    { title: 'outline-lime-600', desc: 'outline-color: #65A30D' },
    { title: 'outline-lime-700', desc: 'outline-color: #4D7C0F' },
    { title: 'outline-lime-800', desc: 'outline-color: #3F6212' },
    { title: 'outline-lime-900', desc: 'outline-color: #365314' },
    { title: 'outline-lime-950', desc: 'outline-color: #1A2E05' },
    { title: 'outline-green-50', desc: 'outline-color: #F0FDF4' },
    { title: 'outline-green-100', desc: 'outline-color: #DCFCE7' },
    { title: 'outline-green-200', desc: 'outline-color: #BBF7D0' },
    { title: 'outline-green-300', desc: 'outline-color: #86EFAC' },
    { title: 'outline-green-400', desc: 'outline-color: #4ADE80' },
    { title: 'outline-green-500', desc: 'outline-color: #22C55E' },
    { title: 'outline-green-600', desc: 'outline-color: #16A34A' },
    { title: 'outline-green-700', desc: 'outline-color: #15803D' },
    { title: 'outline-green-800', desc: 'outline-color: #166534' },
    { title: 'outline-green-900', desc: 'outline-color: #14532D' },
    { title: 'outline-green-950', desc: 'outline-color: #052E16' },
    { title: 'outline-emerald-50', desc: 'outline-color: #ECFDF5' },
    { title: 'outline-emerald-100', desc: 'outline-color: #D1FAE5' },
    { title: 'outline-emerald-200', desc: 'outline-color: #A7F3D0' },
    { title: 'outline-emerald-300', desc: 'outline-color: #6EE7B7' },
    { title: 'outline-emerald-400', desc: 'outline-color: #34D399' },
    { title: 'outline-emerald-500', desc: 'outline-color: #10B981' },
    { title: 'outline-emerald-600', desc: 'outline-color: #059669' },
    { title: 'outline-emerald-700', desc: 'outline-color: #047857' },
    { title: 'outline-emerald-800', desc: 'outline-color: #065F46' },
    { title: 'outline-emerald-900', desc: 'outline-color: #064E3B' },
    { title: 'outline-emerald-950', desc: 'outline-color: #022C22' },
    { title: 'outline-teal-50', desc: 'outline-color: #F0FDFA' },
    { title: 'outline-teal-100', desc: 'outline-color: #CCFBF1' },
    { title: 'outline-teal-200', desc: 'outline-color: #99F6E4' },
    { title: 'outline-teal-300', desc: 'outline-color: #5EEAD4' },
    { title: 'outline-teal-400', desc: 'outline-color: #2DD4BF' },
    { title: 'outline-teal-500', desc: 'outline-color: #14B8A6' },
    { title: 'outline-teal-600', desc: 'outline-color: #0D9488' },
    { title: 'outline-teal-700', desc: 'outline-color: #0F766E' },
    { title: 'outline-teal-800', desc: 'outline-color: #115E59' },
    { title: 'outline-teal-900', desc: 'outline-color: #134E4A' },
    { title: 'outline-teal-950', desc: 'outline-color: #042F2E' },
    { title: 'outline-cyan-50', desc: 'outline-color: #ECFEFF' },
    { title: 'outline-cyan-100', desc: 'outline-color: #CFFAFE' },
    { title: 'outline-cyan-200', desc: 'outline-color: #A5F3FC' },
    { title: 'outline-cyan-300', desc: 'outline-color: #67E8F9' },
    { title: 'outline-cyan-400', desc: 'outline-color: #22D3EE' },
    { title: 'outline-cyan-500', desc: 'outline-color: #06B6D4' },
    { title: 'outline-cyan-600', desc: 'outline-color: #0891B2' },
    { title: 'outline-cyan-700', desc: 'outline-color: #0E7490' },
    { title: 'outline-cyan-800', desc: 'outline-color: #155E75' },
    { title: 'outline-cyan-900', desc: 'outline-color: #164E63' },
    { title: 'outline-cyan-950', desc: 'outline-color: #083344' },
    { title: 'outline-sky-50', desc: 'outline-color: #F0F9FF' },
    { title: 'outline-sky-100', desc: 'outline-color: #E0F2FE' },
    { title: 'outline-sky-200', desc: 'outline-color: #BAE6FD' },
    { title: 'outline-sky-300', desc: 'outline-color: #7DD3FC' },
    { title: 'outline-sky-400', desc: 'outline-color: #38BDF8' },
    { title: 'outline-sky-500', desc: 'outline-color: #0EA5E9' },
    { title: 'outline-sky-600', desc: 'outline-color: #0284C7' },
    { title: 'outline-sky-700', desc: 'outline-color: #0369A1' },
    { title: 'outline-sky-800', desc: 'outline-color: #075985' },
    { title: 'outline-sky-900', desc: 'outline-color: #0C4A6E' },
    { title: 'outline-sky-950', desc: 'outline-color: #062C44' },
    { title: 'outline-blue-50', desc: 'outline-color: #EFF6FF' },
    { title: 'outline-blue-100', desc: 'outline-color: #DBEAFE' },
    { title: 'outline-blue-200', desc: 'outline-color: #BFDBFE' },
    { title: 'outline-blue-300', desc: 'outline-color: #93C5FD' },
    { title: 'outline-blue-400', desc: 'outline-color: #60A5FA' },
    { title: 'outline-blue-500', desc: 'outline-color: #3B82F6' },
    { title: 'outline-blue-600', desc: 'outline-color: #2563EB' },
    { title: 'outline-blue-700', desc: 'outline-color: #1D4ED8' },
    { title: 'outline-blue-800', desc: 'outline-color: #1E40AF' },
    { title: 'outline-blue-900', desc: 'outline-color: #1E3A8A' },
    { title: 'outline-blue-950', desc: 'outline-color: #0D2538' },
    { title: 'outline-indigo-50', desc: 'outline-color: #EEF2FF' },
    { title: 'outline-indigo-100', desc: 'outline-color: #E0E7FF' },
    { title: 'outline-indigo-200', desc: 'outline-color: #C7D2FE' },
    { title: 'outline-indigo-300', desc: 'outline-color: #A5B4FC' },
    { title: 'outline-indigo-400', desc: 'outline-color: #818CF8' },
    { title: 'outline-indigo-500', desc: 'outline-color: #6366F1' },
    { title: 'outline-indigo-600', desc: 'outline-color: #4F46E5' },
    { title: 'outline-indigo-700', desc: 'outline-color: #4338CA' },
    { title: 'outline-indigo-800', desc: 'outline-color: #3730A3' },
    { title: 'outline-indigo-900', desc: 'outline-color: #312E81' },
    { title: 'outline-indigo-950', desc: 'outline-color: #1D1D45' },
    { title: 'outline-violet-50', desc: 'outline-color: #F5F3FF' },
    { title: 'outline-violet-100', desc: 'outline-color: #EDE9FE' },
    { title: 'outline-violet-200', desc: 'outline-color: #DDD6FE' },
    { title: 'outline-violet-300', desc: 'outline-color: #C4B5FD' },
    { title: 'outline-violet-400', desc: 'outline-color: #A78BFA' },
    { title: 'outline-violet-500', desc: 'outline-color: #8B5CF6' },
    { title: 'outline-violet-600', desc: 'outline-color: #7C3AED' },
    { title: 'outline-violet-700', desc: 'outline-color: #6D28D9' },
    { title: 'outline-violet-800', desc: 'outline-color: #5B21B6' },
    { title: 'outline-violet-900', desc: 'outline-color: #4C1D95' },
    { title: 'outline-violet-950', desc: 'outline-color: #2E1F49' },
    { title: 'outline-purple-50', desc: 'outline-color: #FAF5FF' },
    { title: 'outline-purple-100', desc: 'outline-color: #F3E8FF' },
    { title: 'outline-purple-200', desc: 'outline-color: #E9D5FF' },
    { title: 'outline-purple-300', desc: 'outline-color: #D8B4FE' },
    { title: 'outline-purple-400', desc: 'outline-color: #C084FC' },
    { title: 'outline-purple-500', desc: 'outline-color: #A855F7' },
    { title: 'outline-purple-600', desc: 'outline-color: #9333EA' },
    { title: 'outline-purple-700', desc: 'outline-color: #7E22CE' },
    { title: 'outline-purple-800', desc: 'outline-color: #6B21A8' },
    { title: 'outline-purple-900', desc: 'outline-color: #581C87' },
    { title: 'outline-purple-950', desc: 'outline-color: #341A4D' },
    { title: 'outline-magenta-50', desc: 'outline-color: #FDF4FF' },
    { title: 'outline-magenta-100', desc: 'outline-color: #FAE8FF' },
    { title: 'outline-magenta-200', desc: 'outline-color: #F5D0FE' },
    { title: 'outline-magenta-300', desc: 'outline-color: #F0ABFC' },
    { title: 'outline-magenta-400', desc: 'outline-color: #E879F9' },
    { title: 'outline-magenta-500', desc: 'outline-color: #D946EF' },
    { title: 'outline-magenta-600', desc: 'outline-color: #C026D3' },
    { title: 'outline-magenta-700', desc: 'outline-color: #A21CAF' },
    { title: 'outline-magenta-800', desc: 'outline-color: #86198F' },
    { title: 'outline-magenta-900', desc: 'outline-color: #701A75' },
    { title: 'outline-magenta-950', desc: 'outline-color: #451225' },
    { title: 'outline-pink-50', desc: 'outline-color: #FDF2F8' },
    { title: 'outline-pink-100', desc: 'outline-color: #FCE7F3' },
    { title: 'outline-pink-200', desc: 'outline-color: #FBCFE8' },
    { title: 'outline-pink-300', desc: 'outline-color: #F9A8D4' },
    { title: 'outline-pink-400', desc: 'outline-color: #F472B6' },
    { title: 'outline-pink-500', desc: 'outline-color: #EC4899' },
    { title: 'outline-pink-600', desc: 'outline-color: #DB2777' },
    { title: 'outline-pink-700', desc: 'outline-color: #BE185D' },
    { title: 'outline-pink-800', desc: 'outline-color: #9D174D' },
    { title: 'outline-pink-900', desc: 'outline-color: #831843' },
    { title: 'outline-pink-950', desc: 'outline-color: #451225' },
    { title: 'outline-slate-50', desc: 'outline-color: #F8FAFC' },
    { title: 'outline-slate-100', desc: 'outline-color: #F1F5F9' },
    { title: 'outline-slate-200', desc: 'outline-color: #E2E8F0' },
    { title: 'outline-slate-300', desc: 'outline-color: #CBD5E1' },
    { title: 'outline-slate-400', desc: 'outline-color: #94A3B8' },
    { title: 'outline-slate-500', desc: 'outline-color: #64748B' },
    { title: 'outline-slate-600', desc: 'outline-color: #475569' },
    { title: 'outline-slate-700', desc: 'outline-color: #334155' },
    { title: 'outline-slate-800', desc: 'outline-color: #1E293B' },
    { title: 'outline-slate-900', desc: 'outline-color: #0F172A' },
    { title: 'outline-slate-950', desc: 'outline-color: #020617' },
    { title: 'outline-neutral-50', desc: 'outline-color: #FAFAFA' },
    { title: 'outline-neutral-100', desc: 'outline-color: #F5F5F5' },
    { title: 'outline-neutral-200', desc: 'outline-color: #E5E5E5' },
    { title: 'outline-neutral-300', desc: 'outline-color: #D4D4D4' },
    { title: 'outline-neutral-400', desc: 'outline-color: #A3A3A3' },
    { title: 'outline-neutral-500', desc: 'outline-color: #737373' },
    { title: 'outline-neutral-600', desc: 'outline-color: #525252' },
    { title: 'outline-neutral-700', desc: 'outline-color: #404040' },
    { title: 'outline-neutral-800', desc: 'outline-color: #262626' },
    { title: 'outline-neutral-900', desc: 'outline-color: #171717' },
    { title: 'outline-neutral-950', desc: 'outline-color: #0A0A0A' },
  ],
};

export const table7 = {
  body: [
    { title: 'outline-solid', desc: 'outline-style: solid' },
    { title: 'outline-dashed', desc: 'outline-style: dashed' },
    { title: 'outline-dotted', desc: 'outline-style: dotted' },
    { title: 'outline-double', desc: 'outline-style: double' },
    { title: 'outline-hidden', desc: 'outline-style: hidden' },
    { title: 'outline-none', desc: 'outline-style: none' },
  ],
};

export const table8 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 10; ++i) {
        array.push({
          title: `outline-offset-${i}`,
          desc: `outline-offset: ${i}px`,
        });
      }

      return array;
    })()
  ],
};
