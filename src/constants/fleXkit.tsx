export const fleXkitCSS = `

/* Section - Theme */

.theme-light {
  --color-canvas: #FFFFFF;
  --color-text-default: #000000;
}

.theme-dark {
  --color-canvas: #121212;
  --color-text-default: #FFFFFF;
}

body {
  color: var(--color-text-default);
  background-color: var(--color-canvas);
  padding: 1em 3em;
}

.text-black { color: #000000; }
.text-white { color: #ffffff; }
.text-slate-50 { color: #F8FAFC; }
.text-slate-100 { color: #F1F5F9; }
.text-slate-200 { color: #E2E8F0; }
.text-slate-300 { color: #CBD5E1; }
.text-slate-400 { color: #94A3B8; }
.text-slate-500 { color: #64748B; }
.text-slate-600 { color: #475569; }
.text-slate-700 { color: #334155; }
.text-slate-800 { color: #1E293B; }
.text-slate-900 { color: #0F172A; }
.text-slate-950 { color: #020617; }
.text-gray-50 { color: #F9FAFB; }
.text-gray-100 { color: #F3F4F6; }
.text-gray-200 { color: #E5E7EB; }
.text-gray-300 { color: #D1D5DB; }
.text-gray-400 { color: #9CA3AF; }
.text-gray-500 { color: #6B7280; }
.text-gray-600 { color: #4B5563; }
.text-gray-700 { color: #374151; }
.text-gray-800 { color: #1F2937; }
.text-gray-900 { color: #111827; }
.text-gray-950 { color: #030712; }
.text-zinc-50 { color: #FAFAFA; }
.text-zinc-100 { color: #F4F4F5; }
.text-zinc-200 { color: #E4E4E7; }
.text-zinc-300 { color: #D4D4D8; }
.text-zinc-400 { color: #A1A1AA; }
.text-zinc-500 { color: #71717A; }
.text-zinc-600 { color: #52525B; }
.text-zinc-700 { color: #3F3F46; }
.text-zinc-800 { color: #27272A; }
.text-zinc-900 { color: #18181B; }
.text-zinc-950 { color: #09090B; }
.text-neutral-50 { color: #FAFAFA; }
.text-neutral-100 { color: #F5F5F5; }
.text-neutral-200 { color: #E5E5E5; }
.text-neutral-300 { color: #D4D4D4; }
.text-neutral-400 { color: #A3A3A3; }
.text-neutral-500 { color: #737373; }
.text-neutral-600 { color: #525252; }
.text-neutral-700 { color: #404040; }
.text-neutral-800 { color: #262626; }
.text-neutral-900 { color: #171717; }
.text-neutral-950 { color: #0A0A0A; }
.text-stone-50 { color: #FAFAF9; }
.text-stone-100 { color: #F5F5F4; }
.text-stone-200 { color: #E7E5E4; }
.text-stone-300 { color: #D6D3D1; }
.text-stone-400 { color: #A8A29E; }
.text-stone-500 { color: #78716C; }
.text-stone-600 { color: #57534E; }
.text-stone-700 { color: #44403C; }
.text-stone-800 { color: #292524; }
.text-stone-900 { color: #1C1917; }
.text-stone-950 { color: #0C0A09; }
.text-red-50 { color: #FEF2F2; }
.text-red-100 { color: #FEE2E2; }
.text-red-200 { color: #FECACA; }
.text-red-300 { color: #FCA5A5; }
.text-red-400 { color: #F87171; }
.text-red-500 { color: #EF4444; }
.text-red-600 { color: #DC2626; }
.text-red-700 { color: #B91C1C; }
.text-red-800 { color: #991B1B; }
.text-red-900 { color: #7F1D1D; }
.text-red-950 { color: #450A0A; }
.text-orange-50 { color: #FFF7ED; }
.text-orange-100 { color: #FFEDD5; }
.text-orange-200 { color: #FED7AA; }
.text-orange-300 { color: #FDBA74; }
.text-orange-400 { color: #FB923C; }
.text-orange-500 { color: #F97316; }
.text-orange-600 { color: #EA580C; }
.text-orange-700 { color: #C2410C; }
.text-orange-800 { color: #9A3412; }
.text-orange-900 { color: #7C2D12; }
.text-orange-950 { color: #431407; }
.text-amber-50 { color: #FFFBEB; }
.text-amber-100 { color: #FEF3C7; }
.text-amber-200 { color: #FDE68A; }
.text-amber-300 { color: #FCD34D; }
.text-amber-400 { color: #FBBF24; }
.text-amber-500 { color: #F59E0B; }
.text-amber-600 { color: #D97706; }
.text-amber-700 { color: #B45309; }
.text-amber-800 { color: #92400E; }
.text-amber-900 { color: #78350F; }
.text-amber-950 { color: #451A03; }
.text-yellow-50 { color: #FEFCE8; }
.text-yellow-100 { color: #FEF9C3; }
.text-yellow-200 { color: #FEF08A; }
.text-yellow-300 { color: #FDE047; }
.text-yellow-400 { color: #FACC15; }
.text-yellow-500 { color: #EAB308; }
.text-yellow-600 { color: #CA8A04; }
.text-yellow-700 { color: #A16207; }
.text-yellow-800 { color: #854D0E; }
.text-yellow-900 { color: #713F12; }
.text-yellow-950 { color: #422006; }
.text-lime-50 { color: #F7FEE7; }
.text-lime-100 { color: #ECFCCB; }
.text-lime-200 { color: #D9F99D; }
.text-lime-300 { color: #BEF264; }
.text-lime-400 { color: #A3E635; }
.text-lime-500 { color: #84CC16; }
.text-lime-600 { color: #65A30D; }
.text-lime-700 { color: #4D7C0F; }
.text-lime-800 { color: #3F6212; }
.text-lime-900 { color: #365314; }
.text-lime-950 { color: #1A2E05; }
.text-green-50 { color: #F0FDF4; }
.text-green-100 { color: #DCFCE7; }
.text-green-200 { color: #BBF7D0; }
.text-green-300 { color: #86EFAC; }
.text-green-400 { color: #4ADE80; }
.text-green-500 { color: #22C55E; }
.text-green-600 { color: #16A34A; }
.text-green-700 { color: #15803D; }
.text-green-800 { color: #166534; }
.text-green-900 { color: #14532D; }
.text-green-950 { color: #052E16; }
.text-emerald-50 { color: #ECFDF5; }
.text-emerald-100 { color: #D1FAE5; }
.text-emerald-200 { color: #A7F3D0; }
.text-emerald-300 { color: #6EE7B7; }
.text-emerald-400 { color: #34D399; }
.text-emerald-500 { color: #10B981; }
.text-emerald-600 { color: #059669; }
.text-emerald-700 { color: #047857; }
.text-emerald-800 { color: #065F46; }
.text-emerald-900 { color: #064E3B; }
.text-emerald-950 { color: #022C22; }
.text-teal-50 { color: #F0FDFA; }
.text-teal-100 { color: #CCFBF1; }
.text-teal-200 { color: #99F6E4; }
.text-teal-300 { color: #5EEAD4; }
.text-teal-400 { color: #2DD4BF; }
.text-teal-500 { color: #14B8A6; }
.text-teal-600 { color: #0D9488; }
.text-teal-700 { color: #0F766E; }
.text-teal-800 { color: #115E59; }
.text-teal-900 { color: #134E4A; }
.text-teal-950 { color: #042F2E; }
.text-cyan-50 { color: #ECFEFF; }
.text-cyan-100 { color: #CFFAFE; }
.text-cyan-200 { color: #A5F3FC; }
.text-cyan-300 { color: #67E8F9; }
.text-cyan-400 { color: #22D3EE; }
.text-cyan-500 { color: #06B6D4; }
.text-cyan-600 { color: #0891B2; }
.text-cyan-700 { color: #0E7490; }
.text-cyan-800 { color: #155E75; }
.text-cyan-900 { color: #164E63; }
.text-cyan-950 { color: #083344; }
.text-sky-50 { color: #F0F9FF; }
.text-sky-100 { color: #E0F2FE; }
.text-sky-200 { color: #BAE6FD; }
.text-sky-300 { color: #7DD3FC; }
.text-sky-400 { color: #38BDF8; }
.text-sky-500 { color: #0EA5E9; }
.text-sky-600 { color: #0284C7; }
.text-sky-700 { color: #0369A1; }
.text-sky-800 { color: #075985; }
.text-sky-900 { color: #0C4A6E; }
.text-sky-950 { color: #062C44; }
.text-blue-50 { color: #EFF6FF; }
.text-blue-100 { color: #DBEAFE; }
.text-blue-200 { color: #BFDBFE; }
.text-blue-300 { color: #93C5FD; }
.text-blue-400 { color: #60A5FA; }
.text-blue-500 { color: #3B82F6; }
.text-blue-600 { color: #2563EB; }
.text-blue-700 { color: #1D4ED8; }
.text-blue-800 { color: #1E40AF; }
.text-blue-900 { color: #1E3A8A; }
.text-blue-950 { color: #0D2538; }
.text-indigo-50 { color: #EEF2FF; }
.text-indigo-100 { color: #E0E7FF; }
.text-indigo-200 { color: #C7D2FE; }
.text-indigo-300 { color: #A5B4FC; }
.text-indigo-400 { color: #818CF8; }
.text-indigo-500 { color: #6366F1; }
.text-indigo-600 { color: #4F46E5; }
.text-indigo-700 { color: #4338CA; }
.text-indigo-800 { color: #3730A3; }
.text-indigo-900 { color: #312E81; }
.text-indigo-950 { color: #1D1D45; }
.text-violet-50 { color: #F5F3FF; }
.text-violet-100 { color: #EDE9FE; }
.text-violet-200 { color: #DDD6FE; }
.text-violet-300 { color: #C4B5FD; }
.text-violet-400 { color: #A78BFA; }
.text-violet-500 { color: #8B5CF6; }
.text-violet-600 { color: #7C3AED; }
.text-violet-700 { color: #6D28D9; }
.text-violet-800 { color: #5B21B6; }
.text-violet-900 { color: #4C1D95; }
.text-violet-950 { color: #2E1F49; }
.text-purple-50 { color: #FAF5FF; }
.text-purple-100 { color: #F3E8FF; }
.text-purple-200 { color: #E9D5FF; }
.text-purple-300 { color: #D8B4FE; }
.text-purple-400 { color: #C084FC; }
.text-purple-500 { color: #A855F7; }
.text-purple-600 { color: #9333EA; }
.text-purple-700 { color: #7E22CE; }
.text-purple-800 { color: #6B21A8; }
.text-purple-900 { color: #581C87; }
.text-purple-950 { color: #341A4D; }
.text-magenta-50 { color: #FDF4FF; }
.text-magenta-100 { color: #FAE8FF; }
.text-magenta-200 { color: #F5D0FE; }
.text-magenta-300 { color: #F0ABFC; }
.text-magenta-400 { color: #E879F9; }
.text-magenta-500 { color: #D946EF; }
.text-magenta-600 { color: #C026D3; }
.text-magenta-700 { color: #A21CAF; }
.text-magenta-800 { color: #86198F; }
.text-magenta-900 { color: #701A75; }
.text-magenta-950 { color: #451225; }
.text-pink-50 { color: #FDF2F8; }
.text-pink-100 { color: #FCE7F3; }
.text-pink-200 { color: #FBCFE8; }
.text-pink-300 { color: #F9A8D4; }
.text-pink-400 { color: #F472B6; }
.text-pink-500 { color: #EC4899; }
.text-pink-600 { color: #DB2777; }
.text-pink-700 { color: #BE185D; }
.text-pink-800 { color: #9D174D; }
.text-pink-900 { color: #831843; }
.text-pink-950 { color: #451225; }

.bg-black { background-color: #000000; }
.bg-white { background-color: #ffffff; }
.bg-slate-50 { background-color: #F8FAFC; }
.bg-slate-100 { background-color: #F1F5F9; }
.bg-slate-200 { background-color: #E2E8F0; }
.bg-slate-300 { background-color: #CBD5E1; }
.bg-slate-400 { background-color: #94A3B8; }
.bg-slate-500 { background-color: #64748B; }
.bg-slate-600 { background-color: #475569; }
.bg-slate-700 { background-color: #334155; }
.bg-slate-800 { background-color: #1E293B; }
.bg-slate-900 { background-color: #0F172A; }
.bg-slate-950 { background-color: #020617; }
.bg-gray-50 { background-color: #F9FAFB; }
.bg-gray-100 { background-color: #F3F4F6; }
.bg-gray-200 { background-color: #E5E7EB; }
.bg-gray-300 { background-color: #D1D5DB; }
.bg-gray-400 { background-color: #9CA3AF; }
.bg-gray-500 { background-color: #6B7280; }
.bg-gray-600 { background-color: #4B5563; }
.bg-gray-700 { background-color: #374151; }
.bg-gray-800 { background-color: #1F2937; }
.bg-gray-900 { background-color: #111827; }
.bg-gray-950 { background-color: #030712; }
.bg-zinc-50 { background-color: #FAFAFA; }
.bg-zinc-100 { background-color: #F4F4F5; }
.bg-zinc-200 { background-color: #E4E4E7; }
.bg-zinc-300 { background-color: #D4D4D8; }
.bg-zinc-400 { background-color: #A1A1AA; }
.bg-zinc-500 { background-color: #71717A; }
.bg-zinc-600 { background-color: #52525B; }
.bg-zinc-700 { background-color: #3F3F46; }
.bg-zinc-800 { background-color: #27272A; }
.bg-zinc-900 { background-color: #18181B; }
.bg-zinc-950 { background-color: #09090B; }
.bg-neutral-50 { background-color: #FAFAFA; }
.bg-neutral-100 { background-color: #F5F5F5; }
.bg-neutral-200 { background-color: #E5E5E5; }
.bg-neutral-300 { background-color: #D4D4D4; }
.bg-neutral-400 { background-color: #A3A3A3; }
.bg-neutral-500 { background-color: #737373; }
.bg-neutral-600 { background-color: #525252; }
.bg-neutral-700 { background-color: #404040; }
.bg-neutral-800 { background-color: #262626; }
.bg-neutral-900 { background-color: #171717; }
.bg-neutral-950 { background-color: #0A0A0A; }
.bg-stone-50 { background-color: #FAFAF9; }
.bg-stone-100 { background-color: #F5F5F4; }
.bg-stone-200 { background-color: #E7E5E4; }
.bg-stone-300 { background-color: #D6D3D1; }
.bg-stone-400 { background-color: #A8A29E; }
.bg-stone-500 { background-color: #78716C; }
.bg-stone-600 { background-color: #57534E; }
.bg-stone-700 { background-color: #44403C; }
.bg-stone-800 { background-color: #292524; }
.bg-stone-900 { background-color: #1C1917; }
.bg-stone-950 { background-color: #0C0A09; }
.bg-red-50 { background-color: #FEF2F2; }
.bg-red-100 { background-color: #FEE2E2; }
.bg-red-200 { background-color: #FECACA; }
.bg-red-300 { background-color: #FCA5A5; }
.bg-red-400 { background-color: #F87171; }
.bg-red-500 { background-color: #EF4444; }
.bg-red-600 { background-color: #DC2626; }
.bg-red-700 { background-color: #B91C1C; }
.bg-red-800 { background-color: #991B1B; }
.bg-red-900 { background-color: #7F1D1D; }
.bg-red-950 { background-color: #450A0A; }
.bg-orange-50 { background-color: #FFF7ED; }
.bg-orange-100 { background-color: #FFEDD5; }
.bg-orange-200 { background-color: #FED7AA; }
.bg-orange-300 { background-color: #FDBA74; }
.bg-orange-400 { background-color: #FB923C; }
.bg-orange-500 { background-color: #F97316; }
.bg-orange-600 { background-color: #EA580C; }
.bg-orange-700 { background-color: #C2410C; }
.bg-orange-800 { background-color: #9A3412; }
.bg-orange-900 { background-color: #7C2D12; }
.bg-orange-950 { background-color: #431407; }
.bg-amber-50 { background-color: #FFFBEB; }
.bg-amber-100 { background-color: #FEF3C7; }
.bg-amber-200 { background-color: #FDE68A; }
.bg-amber-300 { background-color: #FCD34D; }
.bg-amber-400 { background-color: #FBBF24; }
.bg-amber-500 { background-color: #F59E0B; }
.bg-amber-600 { background-color: #D97706; }
.bg-amber-700 { background-color: #B45309; }
.bg-amber-800 { background-color: #92400E; }
.bg-amber-900 { background-color: #78350F; }
.bg-amber-950 { background-color: #451A03; }
.bg-yellow-50 { background-color: #FEFCE8; }
.bg-yellow-100 { background-color: #FEF9C3; }
.bg-yellow-200 { background-color: #FEF08A; }
.bg-yellow-300 { background-color: #FDE047; }
.bg-yellow-400 { background-color: #FACC15; }
.bg-yellow-500 { background-color: #EAB308; }
.bg-yellow-600 { background-color: #CA8A04; }
.bg-yellow-700 { background-color: #A16207; }
.bg-yellow-800 { background-color: #854D0E; }
.bg-yellow-900 { background-color: #713F12; }
.bg-yellow-950 { background-color: #422006; }
.bg-lime-50 { background-color: #F7FEE7; }
.bg-lime-100 { background-color: #ECFCCB; }
.bg-lime-200 { background-color: #D9F99D; }
.bg-lime-300 { background-color: #BEF264; }
.bg-lime-400 { background-color: #A3E635; }
.bg-lime-500 { background-color: #84CC16; }
.bg-lime-600 { background-color: #65A30D; }
.bg-lime-700 { background-color: #4D7C0F; }
.bg-lime-800 { background-color: #3F6212; }
.bg-lime-900 { background-color: #365314; }
.bg-lime-950 { background-color: #1A2E05; }
.bg-green-50 { background-color: #F0FDF4; }
.bg-green-100 { background-color: #DCFCE7; }
.bg-green-200 { background-color: #BBF7D0; }
.bg-green-300 { background-color: #86EFAC; }
.bg-green-400 { background-color: #4ADE80; }
.bg-green-500 { background-color: #22C55E; }
.bg-green-600 { background-color: #16A34A; }
.bg-green-700 { background-color: #15803D; }
.bg-green-800 { background-color: #166534; }
.bg-green-900 { background-color: #14532D; }
.bg-green-950 { background-color: #052E16; }
.bg-emerald-50 { background-color: #ECFDF5; }
.bg-emerald-100 { background-color: #D1FAE5; }
.bg-emerald-200 { background-color: #A7F3D0; }
.bg-emerald-300 { background-color: #6EE7B7; }
.bg-emerald-400 { background-color: #34D399; }
.bg-emerald-500 { background-color: #10B981; }
.bg-emerald-600 { background-color: #059669; }
.bg-emerald-700 { background-color: #047857; }
.bg-emerald-800 { background-color: #065F46; }
.bg-emerald-900 { background-color: #064E3B; }
.bg-emerald-950 { background-color: #022C22; }
.bg-teal-50 { background-color: #F0FDFA; }
.bg-teal-100 { background-color: #CCFBF1; }
.bg-teal-200 { background-color: #99F6E4; }
.bg-teal-300 { background-color: #5EEAD4; }
.bg-teal-400 { background-color: #2DD4BF; }
.bg-teal-500 { background-color: #14B8A6; }
.bg-teal-600 { background-color: #0D9488; }
.bg-teal-700 { background-color: #0F766E; }
.bg-teal-800 { background-color: #115E59; }
.bg-teal-900 { background-color: #134E4A; }
.bg-teal-950 { background-color: #042F2E; }
.bg-cyan-50 { background-color: #ECFEFF; }
.bg-cyan-100 { background-color: #CFFAFE; }
.bg-cyan-200 { background-color: #A5F3FC; }
.bg-cyan-300 { background-color: #67E8F9; }
.bg-cyan-400 { background-color: #22D3EE; }
.bg-cyan-500 { background-color: #06B6D4; }
.bg-cyan-600 { background-color: #0891B2; }
.bg-cyan-700 { background-color: #0E7490; }
.bg-cyan-800 { background-color: #155E75; }
.bg-cyan-900 { background-color: #164E63; }
.bg-cyan-950 { background-color: #083344; }
.bg-sky-50 { background-color: #F0F9FF; }
.bg-sky-100 { background-color: #E0F2FE; }
.bg-sky-200 { background-color: #BAE6FD; }
.bg-sky-300 { background-color: #7DD3FC; }
.bg-sky-400 { background-color: #38BDF8; }
.bg-sky-500 { background-color: #0EA5E9; }
.bg-sky-600 { background-color: #0284C7; }
.bg-sky-700 { background-color: #0369A1; }
.bg-sky-800 { background-color: #075985; }
.bg-sky-900 { background-color: #0C4A6E; }
.bg-sky-950 { background-color: #062C44; }
.bg-blue-50 { background-color: #EFF6FF; }
.bg-blue-100 { background-color: #DBEAFE; }
.bg-blue-200 { background-color: #BFDBFE; }
.bg-blue-300 { background-color: #93C5FD; }
.bg-blue-400 { background-color: #60A5FA; }
.bg-blue-500 { background-color: #3B82F6; }
.bg-blue-600 { background-color: #2563EB; }
.bg-blue-700 { background-color: #1D4ED8; }
.bg-blue-800 { background-color: #1E40AF; }
.bg-blue-900 { background-color: #1E3A8A; }
.bg-blue-950 { background-color: #0D2538; }
.bg-indigo-50 { background-color: #EEF2FF; }
.bg-indigo-100 { background-color: #E0E7FF; }
.bg-indigo-200 { background-color: #C7D2FE; }
.bg-indigo-300 { background-color: #A5B4FC; }
.bg-indigo-400 { background-color: #818CF8; }
.bg-indigo-500 { background-color: #6366F1; }
.bg-indigo-600 { background-color: #4F46E5; }
.bg-indigo-700 { background-color: #4338CA; }
.bg-indigo-800 { background-color: #3730A3; }
.bg-indigo-900 { background-color: #312E81; }
.bg-indigo-950 { background-color: #1D1D45; }
.bg-violet-50 { background-color: #F5F3FF; }
.bg-violet-100 { background-color: #EDE9FE; }
.bg-violet-200 { background-color: #DDD6FE; }
.bg-violet-300 { background-color: #C4B5FD; }
.bg-violet-400 { background-color: #A78BFA; }
.bg-violet-500 { background-color: #8B5CF6; }
.bg-violet-600 { background-color: #7C3AED; }
.bg-violet-700 { background-color: #6D28D9; }
.bg-violet-800 { background-color: #5B21B6; }
.bg-violet-900 { background-color: #4C1D95; }
.bg-violet-950 { background-color: #2E1F49; }
.bg-purple-50 { background-color: #FAF5FF; }
.bg-purple-100 { background-color: #F3E8FF; }
.bg-purple-200 { background-color: #E9D5FF; }
.bg-purple-300 { background-color: #D8B4FE; }
.bg-purple-400 { background-color: #C084FC; }
.bg-purple-500 { background-color: #A855F7; }
.bg-purple-600 { background-color: #9333EA; }
.bg-purple-700 { background-color: #7E22CE; }
.bg-purple-800 { background-color: #6B21A8; }
.bg-purple-900 { background-color: #581C87; }
.bg-purple-950 { background-color: #341A4D; }
.bg-magenta-50 { background-color: #FDF4FF; }
.bg-magenta-100 { background-color: #FAE8FF; }
.bg-magenta-200 { background-color: #F5D0FE; }
.bg-magenta-300 { background-color: #F0ABFC; }
.bg-magenta-400 { background-color: #E879F9; }
.bg-magenta-500 { background-color: #D946EF; }
.bg-magenta-600 { background-color: #C026D3; }
.bg-magenta-700 { background-color: #A21CAF; }
.bg-magenta-800 { background-color: #86198F; }
.bg-magenta-900 { background-color: #701A75; }
.bg-magenta-950 { background-color: #451225; }
.bg-pink-50 { background-color: #FDF2F8; }
.bg-pink-100 { background-color: #FCE7F3; }
.bg-pink-200 { background-color: #FBCFE8; }
.bg-pink-300 { background-color: #F9A8D4; }
.bg-pink-400 { background-color: #F472B6; }
.bg-pink-500 { background-color: #EC4899; }
.bg-pink-600 { background-color: #DB2777; }
.bg-pink-700 { background-color: #BE185D; }
.bg-pink-800 { background-color: #9D174D; }
.bg-pink-900 { background-color: #831843; }
.bg-pink-950 { background-color: #451225; }

/* Section - Typography */

.h1, .h2, .h3, .h4, .h5, .h6 {
  display: block;
  font-weight: bold;
}

.h1 {
  font-size: 2em;
  margin-block-start: .67em;
  margin-block-end: .67em;
}

.h2 {
  font-size: 1.5em;
  margin-block-start: .83em;
  margin-block-end: .83em;
}

.h3 {
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
}

.h4 {
  font-size: 1.00em;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
}

.h5 {
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
}

.h6 {
  font-size: 0.67em;
  margin-block-start: 2.33em;
  margin-block-end: 2.33em;
}

.text-xs { font-size: 0.75em; }
.text-sm { font-size: 0.875em; }
.text-base { font-size: 1em; }
.text-lg { font-size: 1.125em; }
.text-xl { font-size: 1.25em; }
.text-2xl { font-size: 1.5em; }
.text-3xl { font-size: 1.875em; }
.text-4xl { font-size: 2.25em; }
.text-5xl { font-size: 3em; }
.text-6xl { font-size: 3.75em; }
.text-7xl { font-size: 4.5em; }
.text-8xl { font-size: 6em; }
.text-9xl { font-size: 8em; }

.font-100 { font-weight: 100; }
.font-200 { font-weight: 200; }
.font-300 { font-weight: 300; }
.font-400 { font-weight: 400; }
.font-500 { font-weight: 500; }
.font-600 { font-weight: 600; }
.font-700 { font-weight: 700; }
.font-800 { font-weight: 800; }
.font-900 { font-weight: 900; }

.italic { font-style: italic; }
.overline { text-decoration: overline; }
.line-through { text-decoration: line-through; }
.underline { text-decoration: underline; }
.no-italic { font-style: normal; }
.no-line { text-decoration: none; }

.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

.line-height-1 { line-height: 1; }
.line-height-1-5 { line-height: 1.5; }
.line-height-2 { line-height: 2; }
.line-height-2-5 { line-height: 2.5; }
.line-height-3 { line-height: 3; }
.line-height-3-5 { line-height: 3.5; }
.line-height-4 { line-height: 4; }
.line-height-4-5 { line-height: 4.5; }
.line-height-5 { line-height: 5; }
.line-height-5-5 { line-height: 5.5; }
.line-height-6 { line-height: 6; }
.line-height-6-5 { line-height: 6.5; }
.line-height-7 { line-height: 7; }
.line-height-7-5 { line-height: 7.5; }
.line-height-8 { line-height: 8; }
.line-height-8-5 { line-height: 8.5; }
.line-height-9 { line-height: 9; }
.line-height-9-5 { line-height: 9.5; }
.line-height-10 { line-height: 10; }

.letter-tighter { letter-spacing: -0.05em; }
.letter-tight { letter-spacing: -0.025em; }
.letter-normal { letter-spacing: normal; }
.letter-wide { letter-spacing: 0.025em; }
.letter-wider { letter-spacing: 0.05em; }
.letter-widest { letter-spacing: 0.1em; }

.list-disc { list-style-type: disc; }
.list-decimal { list-style-type: decimal; }
.list-none { list-style-type: none; }

.list-inside { list-style-position: inside; }
.list-outside { list-style-position: outside; }

`;
