export const example1 = `
<style>
  .theme-light {
    --color-canvas: #FFFFFF;
    --color-header: #000000;
    --color-normal: #535E69;
    --color-primary: #007FFF;
    --color-secondary: #E50072;
  }
  .theme-dark {
    --color-canvas: #000000;
    --color-header: #FFFFFF;
    --color-normal: #D1D2D3;
    --color-primary: #007FFF;
    --color-secondary: #C678DD;
  }
</style>
<!-- Change the hex values above to modify the colors -->
<h1>
  <span class="text-primary">Create </span>
  with Confidence using Intuitive
  <span class="text-primary"> UI design.</span>
</h1>
<p>
  Craft <strong class="text-secondary">stunning</strong> interfaces
  by customizing components with ease, and see your vision come
  to life. With FleXkit's focus on practicality and
  <strong class="text-secondary"> seamless integration</strong>, you
  can effortlessly build responsive and visually appealing websites.
</p>
`.slice(1,-1);

export const example2 = `
<p class="line-height-0-75 text-primary">Sentence with the primary color</p>
<p class="line-height-0-75 text-secondary">Sentence with the secondary color</p>
<p class="line-height-0-75 ">Sentence with the default color</p>
<p class="line-height-0-75 text-red-500">Sentence with the color red-500</p>
<p class="line-height-0-75 text-orange-500">Sentence with the color orange-500</p>
<p class="line-height-0-75 text-yellow-500">Sentence with the color yellow-500</p>
<p class="line-height-0-75 text-green-500">Sentence with the color green-500</p>
<p class="line-height-0-75 text-blue-500">Sentence with the color blue-500</p>
<p class="line-height-0-75 text-purple-500">Sentence with the color purple-500</p>
`.slice(1,-1);

export const example3 = `
<p class="text-white bg-primary">Sentence with the primary background</p>
<p class="text-white bg-secondary">Sentence with the secondary background</p>
<p class="">Sentence with the default background</p>
<p class="text-white bg-red-500">Sentence with the background red-500</p>
<p class="text-white bg-orange-500">Sentence with the background orange-500</p>
<p class="text-white bg-yellow-500">Sentence with the background yellow-500</p>
<p class="text-white bg-green-500">Sentence with the background green-500</p>
<p class="text-white bg-blue-500">Sentence with the background blue-500</p>
<p class="text-white bg-purple-500">Sentence with the background purple-500</p>
`.slice(1,-1);

export const example5 = `
<h1 class="light:text-blue-500 dark:text-yellow-400">QuantumX Pro</h1>
<p>
  Designed to <strong class="light:text-purple-500 dark:text-amber-500">revolutionize </strong>
  the world of computing, this <strong class="light:text-purple-500 dark:text-amber-500">
  powerful machine</strong> combines the cutting-edge technology of quantum computing
  with a sleek and user-friendly interface.
<p>
`.slice(1,-1);

export const example6 = `
<style>
  .theme-light {
    --color-canvas: #FFFFFF;
    --color-header: #000000;
    --color-normal: #535E69;
    --color-primary: #007FFF;
    --color-secondary: #E50072;
  }
  .theme-dark {
    --color-canvas: #000000;
    --color-header: #FFFFFF;
    --color-normal: #D1D2D3;
    --color-primary: #007FFF;
    --color-secondary: #C678DD;
  }
  .theme-custom {
    --color-canvas: #434E56;
    --color-header: #FFFFFF;
    --color-normal: #F8F8F8;
    --color-primary: #D8FA3C;
    --color-secondary: #FBEF74;
  }
</style>
<!-- Change the hex values above to modify the colors -->
<body class="theme-custom">
<strong>Introducing our revolutionary product:</strong>
<h1>SmartHome <span class="text-primary">Assistant X</span></h1>
<p>
  With its advanced <strong class="text-secondary">AI technology </strong>
  and seamless integration with your home devices, the
  <strong class="text-secondary"> SmartHome Assistant X </strong>
  is designed to make your life easier and more connected than ever before.
</p>
</body>
`.slice(1,-1);

export const example7 = `
<p class="text-white bg-primary opacity-100">This has opacity 100</p>
<p class="text-white bg-primary opacity-80">This has opacity 80</p>
<p class="text-white bg-primary opacity-60">This has opacity 60</p>
<p class="text-white bg-primary opacity-40">This has opacity 40</p>
<p class="text-white bg-primary opacity-20">This has opacity 20</p>
`.slice(1,-1);

export const table1 = {
  body: [
    { title: 'text-normal', desc: 'color: var(--color-normal)' },
    { title: 'text-header', desc: 'color: var(--color-header)' },
    { title: 'text-primary', desc: 'color: var(--color-primary)' },
    { title: 'text-secondary', desc: 'color: var(--color-secondary)' },
    { title: 'text-black', desc: 'color: #000000' },
    { title: 'text-white', desc: 'color: #FFFFFF' },
    { title: 'text-red-50', desc: 'color: #FEF2F2' },
    { title: 'text-red-100', desc: 'color: #FEE2E2' },
    { title: 'text-red-200', desc: 'color: #FECACA' },
    { title: 'text-red-300', desc: 'color: #FCA5A5' },
    { title: 'text-red-400', desc: 'color: #F87171' },
    { title: 'text-red-500', desc: 'color: #EF4444' },
    { title: 'text-red-600', desc: 'color: #DC2626' },
    { title: 'text-red-700', desc: 'color: #B91C1C' },
    { title: 'text-red-800', desc: 'color: #991B1B' },
    { title: 'text-red-900', desc: 'color: #7F1D1D' },
    { title: 'text-red-950', desc: 'color: #450A0A' },
    { title: 'text-orange-50', desc: 'color: #FFF7ED' },
    { title: 'text-orange-100', desc: 'color: #FFEDD5' },
    { title: 'text-orange-200', desc: 'color: #FED7AA' },
    { title: 'text-orange-300', desc: 'color: #FDBA74' },
    { title: 'text-orange-400', desc: 'color: #FB923C' },
    { title: 'text-orange-500', desc: 'color: #F97316' },
    { title: 'text-orange-600', desc: 'color: #EA580C' },
    { title: 'text-orange-700', desc: 'color: #C2410C' },
    { title: 'text-orange-800', desc: 'color: #9A3412' },
    { title: 'text-orange-900', desc: 'color: #7C2D12' },
    { title: 'text-orange-950', desc: 'color: #431407' },
    { title: 'text-amber-50', desc: 'color: #FFFBEB' },
    { title: 'text-amber-100', desc: 'color: #FEF3C7' },
    { title: 'text-amber-200', desc: 'color: #FDE68A' },
    { title: 'text-amber-300', desc: 'color: #FCD34D' },
    { title: 'text-amber-400', desc: 'color: #FBBF24' },
    { title: 'text-amber-500', desc: 'color: #F59E0B' },
    { title: 'text-amber-600', desc: 'color: #D97706' },
    { title: 'text-amber-700', desc: 'color: #B45309' },
    { title: 'text-amber-800', desc: 'color: #92400E' },
    { title: 'text-amber-900', desc: 'color: #78350F' },
    { title: 'text-amber-950', desc: 'color: #451A03' },
    { title: 'text-yellow-50', desc: 'color: #FEFCE8' },
    { title: 'text-yellow-100', desc: 'color: #FEF9C3' },
    { title: 'text-yellow-200', desc: 'color: #FEF08A' },
    { title: 'text-yellow-300', desc: 'color: #FDE047' },
    { title: 'text-yellow-400', desc: 'color: #FACC15' },
    { title: 'text-yellow-500', desc: 'color: #EAB308' },
    { title: 'text-yellow-600', desc: 'color: #CA8A04' },
    { title: 'text-yellow-700', desc: 'color: #A16207' },
    { title: 'text-yellow-800', desc: 'color: #854D0E' },
    { title: 'text-yellow-900', desc: 'color: #713F12' },
    { title: 'text-yellow-950', desc: 'color: #422006' },
    { title: 'text-lime-50', desc: 'color: #F7FEE7' },
    { title: 'text-lime-100', desc: 'color: #ECFCCB' },
    { title: 'text-lime-200', desc: 'color: #D9F99D' },
    { title: 'text-lime-300', desc: 'color: #BEF264' },
    { title: 'text-lime-400', desc: 'color: #A3E635' },
    { title: 'text-lime-500', desc: 'color: #84CC16' },
    { title: 'text-lime-600', desc: 'color: #65A30D' },
    { title: 'text-lime-700', desc: 'color: #4D7C0F' },
    { title: 'text-lime-800', desc: 'color: #3F6212' },
    { title: 'text-lime-900', desc: 'color: #365314' },
    { title: 'text-lime-950', desc: 'color: #1A2E05' },
    { title: 'text-green-50', desc: 'color: #F0FDF4' },
    { title: 'text-green-100', desc: 'color: #DCFCE7' },
    { title: 'text-green-200', desc: 'color: #BBF7D0' },
    { title: 'text-green-300', desc: 'color: #86EFAC' },
    { title: 'text-green-400', desc: 'color: #4ADE80' },
    { title: 'text-green-500', desc: 'color: #22C55E' },
    { title: 'text-green-600', desc: 'color: #16A34A' },
    { title: 'text-green-700', desc: 'color: #15803D' },
    { title: 'text-green-800', desc: 'color: #166534' },
    { title: 'text-green-900', desc: 'color: #14532D' },
    { title: 'text-green-950', desc: 'color: #052E16' },
    { title: 'text-emerald-50', desc: 'color: #ECFDF5' },
    { title: 'text-emerald-100', desc: 'color: #D1FAE5' },
    { title: 'text-emerald-200', desc: 'color: #A7F3D0' },
    { title: 'text-emerald-300', desc: 'color: #6EE7B7' },
    { title: 'text-emerald-400', desc: 'color: #34D399' },
    { title: 'text-emerald-500', desc: 'color: #10B981' },
    { title: 'text-emerald-600', desc: 'color: #059669' },
    { title: 'text-emerald-700', desc: 'color: #047857' },
    { title: 'text-emerald-800', desc: 'color: #065F46' },
    { title: 'text-emerald-900', desc: 'color: #064E3B' },
    { title: 'text-emerald-950', desc: 'color: #022C22' },
    { title: 'text-teal-50', desc: 'color: #F0FDFA' },
    { title: 'text-teal-100', desc: 'color: #CCFBF1' },
    { title: 'text-teal-200', desc: 'color: #99F6E4' },
    { title: 'text-teal-300', desc: 'color: #5EEAD4' },
    { title: 'text-teal-400', desc: 'color: #2DD4BF' },
    { title: 'text-teal-500', desc: 'color: #14B8A6' },
    { title: 'text-teal-600', desc: 'color: #0D9488' },
    { title: 'text-teal-700', desc: 'color: #0F766E' },
    { title: 'text-teal-800', desc: 'color: #115E59' },
    { title: 'text-teal-900', desc: 'color: #134E4A' },
    { title: 'text-teal-950', desc: 'color: #042F2E' },
    { title: 'text-cyan-50', desc: 'color: #ECFEFF' },
    { title: 'text-cyan-100', desc: 'color: #CFFAFE' },
    { title: 'text-cyan-200', desc: 'color: #A5F3FC' },
    { title: 'text-cyan-300', desc: 'color: #67E8F9' },
    { title: 'text-cyan-400', desc: 'color: #22D3EE' },
    { title: 'text-cyan-500', desc: 'color: #06B6D4' },
    { title: 'text-cyan-600', desc: 'color: #0891B2' },
    { title: 'text-cyan-700', desc: 'color: #0E7490' },
    { title: 'text-cyan-800', desc: 'color: #155E75' },
    { title: 'text-cyan-900', desc: 'color: #164E63' },
    { title: 'text-cyan-950', desc: 'color: #083344' },
    { title: 'text-sky-50', desc: 'color: #F0F9FF' },
    { title: 'text-sky-100', desc: 'color: #E0F2FE' },
    { title: 'text-sky-200', desc: 'color: #BAE6FD' },
    { title: 'text-sky-300', desc: 'color: #7DD3FC' },
    { title: 'text-sky-400', desc: 'color: #38BDF8' },
    { title: 'text-sky-500', desc: 'color: #0EA5E9' },
    { title: 'text-sky-600', desc: 'color: #0284C7' },
    { title: 'text-sky-700', desc: 'color: #0369A1' },
    { title: 'text-sky-800', desc: 'color: #075985' },
    { title: 'text-sky-900', desc: 'color: #0C4A6E' },
    { title: 'text-sky-950', desc: 'color: #062C44' },
    { title: 'text-blue-50', desc: 'color: #EFF6FF' },
    { title: 'text-blue-100', desc: 'color: #DBEAFE' },
    { title: 'text-blue-200', desc: 'color: #BFDBFE' },
    { title: 'text-blue-300', desc: 'color: #93C5FD' },
    { title: 'text-blue-400', desc: 'color: #60A5FA' },
    { title: 'text-blue-500', desc: 'color: #3B82F6' },
    { title: 'text-blue-600', desc: 'color: #2563EB' },
    { title: 'text-blue-700', desc: 'color: #1D4ED8' },
    { title: 'text-blue-800', desc: 'color: #1E40AF' },
    { title: 'text-blue-900', desc: 'color: #1E3A8A' },
    { title: 'text-blue-950', desc: 'color: #0D2538' },
    { title: 'text-indigo-50', desc: 'color: #EEF2FF' },
    { title: 'text-indigo-100', desc: 'color: #E0E7FF' },
    { title: 'text-indigo-200', desc: 'color: #C7D2FE' },
    { title: 'text-indigo-300', desc: 'color: #A5B4FC' },
    { title: 'text-indigo-400', desc: 'color: #818CF8' },
    { title: 'text-indigo-500', desc: 'color: #6366F1' },
    { title: 'text-indigo-600', desc: 'color: #4F46E5' },
    { title: 'text-indigo-700', desc: 'color: #4338CA' },
    { title: 'text-indigo-800', desc: 'color: #3730A3' },
    { title: 'text-indigo-900', desc: 'color: #312E81' },
    { title: 'text-indigo-950', desc: 'color: #1D1D45' },
    { title: 'text-violet-50', desc: 'color: #F5F3FF' },
    { title: 'text-violet-100', desc: 'color: #EDE9FE' },
    { title: 'text-violet-200', desc: 'color: #DDD6FE' },
    { title: 'text-violet-300', desc: 'color: #C4B5FD' },
    { title: 'text-violet-400', desc: 'color: #A78BFA' },
    { title: 'text-violet-500', desc: 'color: #8B5CF6' },
    { title: 'text-violet-600', desc: 'color: #7C3AED' },
    { title: 'text-violet-700', desc: 'color: #6D28D9' },
    { title: 'text-violet-800', desc: 'color: #5B21B6' },
    { title: 'text-violet-900', desc: 'color: #4C1D95' },
    { title: 'text-violet-950', desc: 'color: #2E1F49' },
    { title: 'text-purple-50', desc: 'color: #FAF5FF' },
    { title: 'text-purple-100', desc: 'color: #F3E8FF' },
    { title: 'text-purple-200', desc: 'color: #E9D5FF' },
    { title: 'text-purple-300', desc: 'color: #D8B4FE' },
    { title: 'text-purple-400', desc: 'color: #C084FC' },
    { title: 'text-purple-500', desc: 'color: #A855F7' },
    { title: 'text-purple-600', desc: 'color: #9333EA' },
    { title: 'text-purple-700', desc: 'color: #7E22CE' },
    { title: 'text-purple-800', desc: 'color: #6B21A8' },
    { title: 'text-purple-900', desc: 'color: #581C87' },
    { title: 'text-purple-950', desc: 'color: #341A4D' },
    { title: 'text-magenta-50', desc: 'color: #FDF4FF' },
    { title: 'text-magenta-100', desc: 'color: #FAE8FF' },
    { title: 'text-magenta-200', desc: 'color: #F5D0FE' },
    { title: 'text-magenta-300', desc: 'color: #F0ABFC' },
    { title: 'text-magenta-400', desc: 'color: #E879F9' },
    { title: 'text-magenta-500', desc: 'color: #D946EF' },
    { title: 'text-magenta-600', desc: 'color: #C026D3' },
    { title: 'text-magenta-700', desc: 'color: #A21CAF' },
    { title: 'text-magenta-800', desc: 'color: #86198F' },
    { title: 'text-magenta-900', desc: 'color: #701A75' },
    { title: 'text-magenta-950', desc: 'color: #451225' },
    { title: 'text-pink-50', desc: 'color: #FDF2F8' },
    { title: 'text-pink-100', desc: 'color: #FCE7F3' },
    { title: 'text-pink-200', desc: 'color: #FBCFE8' },
    { title: 'text-pink-300', desc: 'color: #F9A8D4' },
    { title: 'text-pink-400', desc: 'color: #F472B6' },
    { title: 'text-pink-500', desc: 'color: #EC4899' },
    { title: 'text-pink-600', desc: 'color: #DB2777' },
    { title: 'text-pink-700', desc: 'color: #BE185D' },
    { title: 'text-pink-800', desc: 'color: #9D174D' },
    { title: 'text-pink-900', desc: 'color: #831843' },
    { title: 'text-pink-950', desc: 'color: #451225' },
    { title: 'text-slate-50', desc: 'color: #F8FAFC' },
    { title: 'text-slate-100', desc: 'color: #F1F5F9' },
    { title: 'text-slate-200', desc: 'color: #E2E8F0' },
    { title: 'text-slate-300', desc: 'color: #CBD5E1' },
    { title: 'text-slate-400', desc: 'color: #94A3B8' },
    { title: 'text-slate-500', desc: 'color: #64748B' },
    { title: 'text-slate-600', desc: 'color: #475569' },
    { title: 'text-slate-700', desc: 'color: #334155' },
    { title: 'text-slate-800', desc: 'color: #1E293B' },
    { title: 'text-slate-900', desc: 'color: #0F172A' },
    { title: 'text-slate-950', desc: 'color: #020617' },
    { title: 'text-neutral-50', desc: 'color: #FAFAFA' },
    { title: 'text-neutral-100', desc: 'color: #F5F5F5' },
    { title: 'text-neutral-200', desc: 'color: #E5E5E5' },
    { title: 'text-neutral-300', desc: 'color: #D4D4D4' },
    { title: 'text-neutral-400', desc: 'color: #A3A3A3' },
    { title: 'text-neutral-500', desc: 'color: #737373' },
    { title: 'text-neutral-600', desc: 'color: #525252' },
    { title: 'text-neutral-700', desc: 'color: #404040' },
    { title: 'text-neutral-800', desc: 'color: #262626' },
    { title: 'text-neutral-900', desc: 'color: #171717' },
    { title: 'text-neutral-950', desc: 'color: #0A0A0A' },
  ],
};

export const table2 = {
  body: [
    { title: '--color-canvas', desc: 'The site\'s background color' },
    { title: '--color-header', desc: 'The color for headers (h1 to h6, strong)' },
    { title: '--color-normal', desc: 'The color for normal text' },
    { title: '--color-primary', desc: 'The site\'s primary color' },
    { title: '--color-secondary', desc: 'The site\'s secondary color' },
  ],
};

export const table3 = {
  body: [
    { title: 'bg-canvas', desc: 'background: var(--color-canvas)' },
    { title: 'bg-primary', desc: 'background: var(--color-primary)' },
    { title: 'bg-secondary', desc: 'background: var(--color-secondary)' },
    { title: 'bg-none', desc: 'background: none' },
    { title: 'bg-black', desc: 'background-color: #000000' },
    { title: 'bg-white', desc: 'background-color: #FFFFFF' },
    { title: 'bg-red-50', desc: 'background-color: #FEF2F2' },
    { title: 'bg-red-100', desc: 'background-color: #FEE2E2' },
    { title: 'bg-red-200', desc: 'background-color: #FECACA' },
    { title: 'bg-red-300', desc: 'background-color: #FCA5A5' },
    { title: 'bg-red-400', desc: 'background-color: #F87171' },
    { title: 'bg-red-500', desc: 'background-color: #EF4444' },
    { title: 'bg-red-600', desc: 'background-color: #DC2626' },
    { title: 'bg-red-700', desc: 'background-color: #B91C1C' },
    { title: 'bg-red-800', desc: 'background-color: #991B1B' },
    { title: 'bg-red-900', desc: 'background-color: #7F1D1D' },
    { title: 'bg-red-950', desc: 'background-color: #450A0A' },
    { title: 'bg-orange-50', desc: 'background-color: #FFF7ED' },
    { title: 'bg-orange-100', desc: 'background-color: #FFEDD5' },
    { title: 'bg-orange-200', desc: 'background-color: #FED7AA' },
    { title: 'bg-orange-300', desc: 'background-color: #FDBA74' },
    { title: 'bg-orange-400', desc: 'background-color: #FB923C' },
    { title: 'bg-orange-500', desc: 'background-color: #F97316' },
    { title: 'bg-orange-600', desc: 'background-color: #EA580C' },
    { title: 'bg-orange-700', desc: 'background-color: #C2410C' },
    { title: 'bg-orange-800', desc: 'background-color: #9A3412' },
    { title: 'bg-orange-900', desc: 'background-color: #7C2D12' },
    { title: 'bg-orange-950', desc: 'background-color: #431407' },
    { title: 'bg-amber-50', desc: 'background-color: #FFFBEB' },
    { title: 'bg-amber-100', desc: 'background-color: #FEF3C7' },
    { title: 'bg-amber-200', desc: 'background-color: #FDE68A' },
    { title: 'bg-amber-300', desc: 'background-color: #FCD34D' },
    { title: 'bg-amber-400', desc: 'background-color: #FBBF24' },
    { title: 'bg-amber-500', desc: 'background-color: #F59E0B' },
    { title: 'bg-amber-600', desc: 'background-color: #D97706' },
    { title: 'bg-amber-700', desc: 'background-color: #B45309' },
    { title: 'bg-amber-800', desc: 'background-color: #92400E' },
    { title: 'bg-amber-900', desc: 'background-color: #78350F' },
    { title: 'bg-amber-950', desc: 'background-color: #451A03' },
    { title: 'bg-yellow-50', desc: 'background-color: #FEFCE8' },
    { title: 'bg-yellow-100', desc: 'background-color: #FEF9C3' },
    { title: 'bg-yellow-200', desc: 'background-color: #FEF08A' },
    { title: 'bg-yellow-300', desc: 'background-color: #FDE047' },
    { title: 'bg-yellow-400', desc: 'background-color: #FACC15' },
    { title: 'bg-yellow-500', desc: 'background-color: #EAB308' },
    { title: 'bg-yellow-600', desc: 'background-color: #CA8A04' },
    { title: 'bg-yellow-700', desc: 'background-color: #A16207' },
    { title: 'bg-yellow-800', desc: 'background-color: #854D0E' },
    { title: 'bg-yellow-900', desc: 'background-color: #713F12' },
    { title: 'bg-yellow-950', desc: 'background-color: #422006' },
    { title: 'bg-lime-50', desc: 'background-color: #F7FEE7' },
    { title: 'bg-lime-100', desc: 'background-color: #ECFCCB' },
    { title: 'bg-lime-200', desc: 'background-color: #D9F99D' },
    { title: 'bg-lime-300', desc: 'background-color: #BEF264' },
    { title: 'bg-lime-400', desc: 'background-color: #A3E635' },
    { title: 'bg-lime-500', desc: 'background-color: #84CC16' },
    { title: 'bg-lime-600', desc: 'background-color: #65A30D' },
    { title: 'bg-lime-700', desc: 'background-color: #4D7C0F' },
    { title: 'bg-lime-800', desc: 'background-color: #3F6212' },
    { title: 'bg-lime-900', desc: 'background-color: #365314' },
    { title: 'bg-lime-950', desc: 'background-color: #1A2E05' },
    { title: 'bg-green-50', desc: 'background-color: #F0FDF4' },
    { title: 'bg-green-100', desc: 'background-color: #DCFCE7' },
    { title: 'bg-green-200', desc: 'background-color: #BBF7D0' },
    { title: 'bg-green-300', desc: 'background-color: #86EFAC' },
    { title: 'bg-green-400', desc: 'background-color: #4ADE80' },
    { title: 'bg-green-500', desc: 'background-color: #22C55E' },
    { title: 'bg-green-600', desc: 'background-color: #16A34A' },
    { title: 'bg-green-700', desc: 'background-color: #15803D' },
    { title: 'bg-green-800', desc: 'background-color: #166534' },
    { title: 'bg-green-900', desc: 'background-color: #14532D' },
    { title: 'bg-green-950', desc: 'background-color: #052E16' },
    { title: 'bg-emerald-50', desc: 'background-color: #ECFDF5' },
    { title: 'bg-emerald-100', desc: 'background-color: #D1FAE5' },
    { title: 'bg-emerald-200', desc: 'background-color: #A7F3D0' },
    { title: 'bg-emerald-300', desc: 'background-color: #6EE7B7' },
    { title: 'bg-emerald-400', desc: 'background-color: #34D399' },
    { title: 'bg-emerald-500', desc: 'background-color: #10B981' },
    { title: 'bg-emerald-600', desc: 'background-color: #059669' },
    { title: 'bg-emerald-700', desc: 'background-color: #047857' },
    { title: 'bg-emerald-800', desc: 'background-color: #065F46' },
    { title: 'bg-emerald-900', desc: 'background-color: #064E3B' },
    { title: 'bg-emerald-950', desc: 'background-color: #022C22' },
    { title: 'bg-teal-50', desc: 'background-color: #F0FDFA' },
    { title: 'bg-teal-100', desc: 'background-color: #CCFBF1' },
    { title: 'bg-teal-200', desc: 'background-color: #99F6E4' },
    { title: 'bg-teal-300', desc: 'background-color: #5EEAD4' },
    { title: 'bg-teal-400', desc: 'background-color: #2DD4BF' },
    { title: 'bg-teal-500', desc: 'background-color: #14B8A6' },
    { title: 'bg-teal-600', desc: 'background-color: #0D9488' },
    { title: 'bg-teal-700', desc: 'background-color: #0F766E' },
    { title: 'bg-teal-800', desc: 'background-color: #115E59' },
    { title: 'bg-teal-900', desc: 'background-color: #134E4A' },
    { title: 'bg-teal-950', desc: 'background-color: #042F2E' },
    { title: 'bg-cyan-50', desc: 'background-color: #ECFEFF' },
    { title: 'bg-cyan-100', desc: 'background-color: #CFFAFE' },
    { title: 'bg-cyan-200', desc: 'background-color: #A5F3FC' },
    { title: 'bg-cyan-300', desc: 'background-color: #67E8F9' },
    { title: 'bg-cyan-400', desc: 'background-color: #22D3EE' },
    { title: 'bg-cyan-500', desc: 'background-color: #06B6D4' },
    { title: 'bg-cyan-600', desc: 'background-color: #0891B2' },
    { title: 'bg-cyan-700', desc: 'background-color: #0E7490' },
    { title: 'bg-cyan-800', desc: 'background-color: #155E75' },
    { title: 'bg-cyan-900', desc: 'background-color: #164E63' },
    { title: 'bg-cyan-950', desc: 'background-color: #083344' },
    { title: 'bg-sky-50', desc: 'background-color: #F0F9FF' },
    { title: 'bg-sky-100', desc: 'background-color: #E0F2FE' },
    { title: 'bg-sky-200', desc: 'background-color: #BAE6FD' },
    { title: 'bg-sky-300', desc: 'background-color: #7DD3FC' },
    { title: 'bg-sky-400', desc: 'background-color: #38BDF8' },
    { title: 'bg-sky-500', desc: 'background-color: #0EA5E9' },
    { title: 'bg-sky-600', desc: 'background-color: #0284C7' },
    { title: 'bg-sky-700', desc: 'background-color: #0369A1' },
    { title: 'bg-sky-800', desc: 'background-color: #075985' },
    { title: 'bg-sky-900', desc: 'background-color: #0C4A6E' },
    { title: 'bg-sky-950', desc: 'background-color: #062C44' },
    { title: 'bg-blue-50', desc: 'background-color: #EFF6FF' },
    { title: 'bg-blue-100', desc: 'background-color: #DBEAFE' },
    { title: 'bg-blue-200', desc: 'background-color: #BFDBFE' },
    { title: 'bg-blue-300', desc: 'background-color: #93C5FD' },
    { title: 'bg-blue-400', desc: 'background-color: #60A5FA' },
    { title: 'bg-blue-500', desc: 'background-color: #3B82F6' },
    { title: 'bg-blue-600', desc: 'background-color: #2563EB' },
    { title: 'bg-blue-700', desc: 'background-color: #1D4ED8' },
    { title: 'bg-blue-800', desc: 'background-color: #1E40AF' },
    { title: 'bg-blue-900', desc: 'background-color: #1E3A8A' },
    { title: 'bg-blue-950', desc: 'background-color: #0D2538' },
    { title: 'bg-indigo-50', desc: 'background-color: #EEF2FF' },
    { title: 'bg-indigo-100', desc: 'background-color: #E0E7FF' },
    { title: 'bg-indigo-200', desc: 'background-color: #C7D2FE' },
    { title: 'bg-indigo-300', desc: 'background-color: #A5B4FC' },
    { title: 'bg-indigo-400', desc: 'background-color: #818CF8' },
    { title: 'bg-indigo-500', desc: 'background-color: #6366F1' },
    { title: 'bg-indigo-600', desc: 'background-color: #4F46E5' },
    { title: 'bg-indigo-700', desc: 'background-color: #4338CA' },
    { title: 'bg-indigo-800', desc: 'background-color: #3730A3' },
    { title: 'bg-indigo-900', desc: 'background-color: #312E81' },
    { title: 'bg-indigo-950', desc: 'background-color: #1D1D45' },
    { title: 'bg-violet-50', desc: 'background-color: #F5F3FF' },
    { title: 'bg-violet-100', desc: 'background-color: #EDE9FE' },
    { title: 'bg-violet-200', desc: 'background-color: #DDD6FE' },
    { title: 'bg-violet-300', desc: 'background-color: #C4B5FD' },
    { title: 'bg-violet-400', desc: 'background-color: #A78BFA' },
    { title: 'bg-violet-500', desc: 'background-color: #8B5CF6' },
    { title: 'bg-violet-600', desc: 'background-color: #7C3AED' },
    { title: 'bg-violet-700', desc: 'background-color: #6D28D9' },
    { title: 'bg-violet-800', desc: 'background-color: #5B21B6' },
    { title: 'bg-violet-900', desc: 'background-color: #4C1D95' },
    { title: 'bg-violet-950', desc: 'background-color: #2E1F49' },
    { title: 'bg-purple-50', desc: 'background-color: #FAF5FF' },
    { title: 'bg-purple-100', desc: 'background-color: #F3E8FF' },
    { title: 'bg-purple-200', desc: 'background-color: #E9D5FF' },
    { title: 'bg-purple-300', desc: 'background-color: #D8B4FE' },
    { title: 'bg-purple-400', desc: 'background-color: #C084FC' },
    { title: 'bg-purple-500', desc: 'background-color: #A855F7' },
    { title: 'bg-purple-600', desc: 'background-color: #9333EA' },
    { title: 'bg-purple-700', desc: 'background-color: #7E22CE' },
    { title: 'bg-purple-800', desc: 'background-color: #6B21A8' },
    { title: 'bg-purple-900', desc: 'background-color: #581C87' },
    { title: 'bg-purple-950', desc: 'background-color: #341A4D' },
    { title: 'bg-magenta-50', desc: 'background-color: #FDF4FF' },
    { title: 'bg-magenta-100', desc: 'background-color: #FAE8FF' },
    { title: 'bg-magenta-200', desc: 'background-color: #F5D0FE' },
    { title: 'bg-magenta-300', desc: 'background-color: #F0ABFC' },
    { title: 'bg-magenta-400', desc: 'background-color: #E879F9' },
    { title: 'bg-magenta-500', desc: 'background-color: #D946EF' },
    { title: 'bg-magenta-600', desc: 'background-color: #C026D3' },
    { title: 'bg-magenta-700', desc: 'background-color: #A21CAF' },
    { title: 'bg-magenta-800', desc: 'background-color: #86198F' },
    { title: 'bg-magenta-900', desc: 'background-color: #701A75' },
    { title: 'bg-magenta-950', desc: 'background-color: #451225' },
    { title: 'bg-pink-50', desc: 'background-color: #FDF2F8' },
    { title: 'bg-pink-100', desc: 'background-color: #FCE7F3' },
    { title: 'bg-pink-200', desc: 'background-color: #FBCFE8' },
    { title: 'bg-pink-300', desc: 'background-color: #F9A8D4' },
    { title: 'bg-pink-400', desc: 'background-color: #F472B6' },
    { title: 'bg-pink-500', desc: 'background-color: #EC4899' },
    { title: 'bg-pink-600', desc: 'background-color: #DB2777' },
    { title: 'bg-pink-700', desc: 'background-color: #BE185D' },
    { title: 'bg-pink-800', desc: 'background-color: #9D174D' },
    { title: 'bg-pink-900', desc: 'background-color: #831843' },
    { title: 'bg-pink-950', desc: 'background-color: #451225' },
    { title: 'bg-slate-50', desc: 'background-color: #F8FAFC' },
    { title: 'bg-slate-100', desc: 'background-color: #F1F5F9' },
    { title: 'bg-slate-200', desc: 'background-color: #E2E8F0' },
    { title: 'bg-slate-300', desc: 'background-color: #CBD5E1' },
    { title: 'bg-slate-400', desc: 'background-color: #94A3B8' },
    { title: 'bg-slate-500', desc: 'background-color: #64748B' },
    { title: 'bg-slate-600', desc: 'background-color: #475569' },
    { title: 'bg-slate-700', desc: 'background-color: #334155' },
    { title: 'bg-slate-800', desc: 'background-color: #1E293B' },
    { title: 'bg-slate-900', desc: 'background-color: #0F172A' },
    { title: 'bg-slate-950', desc: 'background-color: #020617' },
    { title: 'bg-neutral-50', desc: 'background-color: #FAFAFA' },
    { title: 'bg-neutral-100', desc: 'background-color: #F5F5F5' },
    { title: 'bg-neutral-200', desc: 'background-color: #E5E5E5' },
    { title: 'bg-neutral-300', desc: 'background-color: #D4D4D4' },
    { title: 'bg-neutral-400', desc: 'background-color: #A3A3A3' },
    { title: 'bg-neutral-500', desc: 'background-color: #737373' },
    { title: 'bg-neutral-600', desc: 'background-color: #525252' },
    { title: 'bg-neutral-700', desc: 'background-color: #404040' },
    { title: 'bg-neutral-800', desc: 'background-color: #262626' },
    { title: 'bg-neutral-900', desc: 'background-color: #171717' },
    { title: 'bg-neutral-950', desc: 'background-color: #0A0A0A' },
  ],
};

export const table5 = {
  body: [
    ...(function() {
      const array = [];

      for (let i = 0; i <= 20; ++i) {
        array.push({
          title: `opacity-${i * 5}`,
          desc: `opacity: ${(i * 0.05).toFixed(2)}`,
        });
      }

      return array;
    })()
  ],
}
