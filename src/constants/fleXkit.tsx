export const fleXkitCSS = `

/* Section - Theme */

.theme-light {
  --color-canvas: #FFFFFF;
  --color-text: #000000;

  --color-primary: #007FFF;
  --color-secondary: #FF007F;
}

.theme-dark {
  --color-canvas: #121212;
  --color-text: #FFFFFF;

  --color-primary: #007FFF;
  --color-secondary: #FF007F;
}

body {
  color: var(--color-text);
  background-color: var(--color-canvas);
  padding: 1em 3em;
}

.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }

.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }

.text-black { color: #000000; }
.text-white { color: #FFFFFF; }
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

.bg-black { background-color: #000000; }
.bg-white { background-color: #FFFFFF; }
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

.line-height-0-5 { line-height: 0.5; }
.line-height-0-75 { line-height: 0.75; }
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

/* Section - Utilities */

.w-px { width: 1px; }
.w-auto { width: auto; }
.w-full { width: 100%; }
.w-screen { width: 100vw; }
.w-min { width: min-content; }
.w-max { width: max-content; }
.w-fit { width: fit-content; }
.w-1\\/2 { width: 50%; }
.w-1\\/3 { width: 33.333333%; }
.w-2\\/3 { width: 66.666667%; }
.w-1\\/4 { width: 25%; }
.w-2\\/4 { width: 50%; }
.w-3\\/4 { width: 75%; }
.w-1\\/5 { width: 20%; }
.w-2\\/5 { width: 40%; }
.w-3\\/5 { width: 60%; }
.w-4\\/5 { width: 80%; }
.w-1\\/6 { width: 16.666667%; }
.w-2\\/6 { width: 33.333333%; }
.w-3\\/6 { width: 50%; }
.w-4\\/6 { width: 66.666667%; }
.w-5\\/6 { width: 83.333333%; }
.w-0 { width: 0; }
.w-1 { width: 0.25em; }
.w-2 { width: 0.5em; }
.w-3 { width: 0.75em; }
.w-4 { width: 1em; }
.w-5 { width: 1.25em; }
.w-6 { width: 1.5em; }
.w-7 { width: 1.75em; }
.w-8 { width: 2.em; }
.w-9 { width: 1.25em; }
.w-10 { width: 2.5em; }
.w-11 { width: 2.75em; }
.w-12 { width: 3em; }
.w-13 { width: 3.25em; }
.w-14 { width: 3.5em; }
.w-15 { width: 3.75em; }
.w-16 { width: 4em; }
.w-17 { width: 4.25em; }
.w-18 { width: 4.5em; }
.w-19 { width: 4.75em; }
.w-20 { width: 5em; }
.w-22 { width: 5.5em; }
.w-24 { width: 6em; }
.w-26 { width: 6.5em; }
.w-28 { width: 7em; }
.w-30 { width: 7.5em; }
.w-32 { width: 8em; }
.w-34 { width: 8.5em; }
.w-36 { width: 9em; }
.w-38 { width: 9.5em; }
.w-40 { width: 10em; }
.w-42 { width: 10.5em; }
.w-44 { width: 11em; }
.w-46 { width: 11.5em; }
.w-48 { width: 12em; }
.w-50 { width: 12.5em; }
.w-55 { width: 13.75em; }
.w-60 { width: 15em; }
.w-65 { width: 16.25em; }
.w-70 { width: 17.5em; }
.w-75 { width: 18.75em; }
.w-80 { width: 20em; }
.w-85 { width: 21.25em; }
.w-90 { width: 22.5em; }
.w-95 { width: 23.75em; }
.w-100 { width: 25em; }

.min-w-0 { min-width: 0; }
.min-w-full { min-width: 100%; }
.min-w-min { min-width: min-content; }
.min-w-max { min-width: max-content; }
.min-w-fit { min-width: fit-content; }

.max-w-0 { max-width: 0rem; }
.max-w-none { max-width: none; }
.max-w-xs { max-width: 20rem; }
.max-w-sm { max-width: 24rem; }
.max-w-md { max-width: 28rem; }
.max-w-lg { max-width: 32rem; }
.max-w-xl { max-width: 36rem; }
.max-w-2xl { max-width: 42rem; }
.max-w-3xl { max-width: 48rem; }
.max-w-4xl { max-width: 56rem; }
.max-w-5xl { max-width: 64rem; }
.max-w-6xl { max-width: 72rem; }
.max-w-7xl { max-width: 80rem; }
.max-w-full { max-width: 100%; }
.max-w-min { max-width: min-content; }
.max-w-max { max-width: max-content; }
.max-w-fit { max-width: fit-content; }

.h-px { height: 1px; }
.h-auto { height: auto; }
.h-full { height: 100%; }
.h-screen { height: 100vh; }
.h-min { height: min-content; }
.h-max { height: max-content; }
.h-fit { height: fit-content; }
.h-1\\/2 { height: 50%; }
.h-1\\/3 { height: 33.333333%; }
.h-2\\/3 { height: 66.666667%; }
.h-1\\/4 { height: 25%; }
.h-2\\/4 { height: 50%; }
.h-3\\/4 { height: 75%; }
.h-1\\/5 { height: 20%; }
.h-2\\/5 { height: 40%; }
.h-3\\/5 { height: 60%; }
.h-4\\/5 { height: 80%; }
.h-1\\/6 { height: 16.666667%; }
.h-2\\/6 { height: 33.333333%; }
.h-3\\/6 { height: 50%; }
.h-4\\/6 { height: 66.666667%; }
.h-5\\/6 { height: 83.333333%; }
.h-0 { height: 0; }
.h-1 { height: 0.25em; }
.h-2 { height: 0.5em; }
.h-3 { height: 0.75em; }
.h-4 { height: 1em; }
.h-5 { height: 1.25em; }
.h-6 { height: 1.5em; }
.h-7 { height: 1.75em; }
.h-8 { height: 2.em; }
.h-9 { height: 1.25em; }
.h-10 { height: 2.5em; }
.h-11 { height: 2.75em; }
.h-12 { height: 3em; }
.h-13 { height: 3.25em; }
.h-14 { height: 3.5em; }
.h-15 { height: 3.75em; }
.h-16 { height: 4em; }
.h-17 { height: 4.25em; }
.h-18 { height: 4.5em; }
.h-19 { height: 4.75em; }
.h-20 { height: 5em; }
.h-22 { height: 5.5em; }
.h-24 { height: 6em; }
.h-26 { height: 6.5em; }
.h-28 { height: 7em; }
.h-30 { height: 7.5em; }
.h-32 { height: 8em; }
.h-34 { height: 8.5em; }
.h-36 { height: 9em; }
.h-38 { height: 9.5em; }
.h-40 { height: 10em; }
.h-42 { height: 10.5em; }
.h-44 { height: 11em; }
.h-46 { height: 11.5em; }
.h-48 { height: 12em; }
.h-50 { height: 12.5em; }
.h-55 { height: 13.75em; }
.h-60 { height: 15em; }
.h-65 { height: 16.25em; }
.h-70 { height: 17.5em; }
.h-75 { height: 18.75em; }
.h-80 { height: 20em; }
.h-85 { height: 21.25em; }
.h-90 { height: 22.5em; }
.h-95 { height: 23.75em; }
.h-100 { height: 25em; }

.min-h-0 { min-height: 0; }
.min-h-full { min-height: 100%; }
.min-h-screen { min-height: 100vh; }
.min-h-min { min-height: min-content; }
.min-h-max { min-height: max-content; }
.min-h-fit { min-height: fit-content; }

.max-h-0 { max-height: 0; }
.max-h-full { max-height: 100%; }
.max-h-min { max-height: min-content; }
.max-h-max { max-height: max-content; }
.max-h-fit { max-height: fit-content; }
.max-h-1 { max-height: 0.25em; }
.max-h-2 { max-height: 0.5em; }
.max-h-3 { max-height: 0.75em; }
.max-h-4 { max-height: 1em; }
.max-h-5 { max-height: 1.25em; }
.max-h-6 { max-height: 1.5em; }
.max-h-7 { max-height: 1.75em; }
.max-h-8 { max-height: 2.em; }
.max-h-9 { max-height: 1.25em; }
.max-h-10 { max-height: 2.5em; }
.max-h-11 { max-height: 2.75em; }
.max-h-12 { max-height: 3em; }
.max-h-13 { max-height: 3.25em; }
.max-h-14 { max-height: 3.5em; }
.max-h-15 { max-height: 3.75em; }
.max-h-16 { max-height: 4em; }
.max-h-17 { max-height: 4.25em; }
.max-h-18 { max-height: 4.5em; }
.max-h-19 { max-height: 4.75em; }
.max-h-20 { max-height: 5em; }
.max-h-22 { max-height: 5.5em; }
.max-h-24 { max-height: 6em; }
.max-h-26 { max-height: 6.5em; }
.max-h-28 { max-height: 7em; }
.max-h-30 { max-height: 7.5em; }
.max-h-32 { max-height: 8em; }
.max-h-34 { max-height: 8.5em; }
.max-h-36 { max-height: 9em; }
.max-h-38 { max-height: 9.5em; }
.max-h-40 { max-height: 10em; }
.max-h-42 { max-height: 10.5em; }
.max-h-44 { max-height: 11em; }
.max-h-46 { max-height: 11.5em; }
.max-h-48 { max-height: 12em; }
.max-h-50 { max-height: 12.5em; }
.max-h-55 { max-height: 13.75em; }
.max-h-60 { max-height: 15em; }
.max-h-65 { max-height: 16.25em; }
.max-h-70 { max-height: 17.5em; }
.max-h-75 { max-height: 18.75em; }
.max-h-80 { max-height: 20em; }
.max-h-85 { max-height: 21.25em; }
.max-h-90 { max-height: 22.5em; }
.max-h-95 { max-height: 23.75em; }
.max-h-100 { max-height: 25em; }

.box-border { box-sizing: border-box; }
.box-content { box-sizing: content-box; }

.block { display: block; }
.inline-block { display: inline-block; }
.inline { display: inline; }
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.table { display: table; }
.inline-table { display: inline-table; }
.table-caption { display: table-caption; }
.table-cell { display: table-cell; }
.table-column { display: table-column; }
.table-column-group { display: table-column-group; }
.table-footer-group { display: table-footer-group; }
.table-header-group { display: table-header-group; }
.table-row-group { display: table-row-group; }
.table-row { display: table-row; }
.flow-root { display: flow-root; }
.grid { display: grid; }
.inline-grid { display: inline-grid; }
.contents { display: contents; }
.list-item { display: list-item; }
.hidden { display: none; }

.float-right { float: right };
.float-left { float: left };
.float-none { float: none };

.overflow-auto { overflow: auto; }
.overflow-x-auto { overflow-x: auto; }
.overflow-y-auto { overflow-y: auto; }
.overflow-hidden { overflow: hidden; }
.overflow-x-hidden { overflow-x: hidden; }
.overflow-y-hidden { overflow-y: hidden; }
.overflow-visible { overflow: visible; }
.overflow-x-visible { overflow-x: visible; }
.overflow-y-visible { overflow-y: visible; }
.overflow-scroll { overflow: scroll; }
.overflow-x-scroll { overflow-x: scroll; }
.overflow-y-scroll { overflow-y: scroll; }

.static { position: static; }
.fixed { position: fixed; }
.absolute { position: absolute; }
.relative { position: relative; }
.sticky { position: sticky; }

`;
