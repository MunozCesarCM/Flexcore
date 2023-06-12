export const example1 = `
<button class="bg-blue-600 text-white font-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Blue</button>
<button class="bg-red-600 text-white font-500 border-none px-5 py-2 rounded hover:bg-red-700 duration-100 cursor-pointer active:bg-red-800">Red</button>
<button class="bg-yellow-500 text-white font-500 border-none px-5 py-2 rounded hover:bg-yellow-600 duration-100 cursor-pointer active:bg-yellow-700">Yellow</button>
<button class="bg-green-600 text-white font-500 border-none px-5 py-2 rounded hover:bg-green-700 duration-100 cursor-pointer active:bg-green-800">Green</button>
<button class="bg-purple-600 text-white font-500 border-none px-5 py-2 rounded hover:bg-purple-700 duration-100 cursor-pointer active:bg-purple-800">Purple</button>
<button class="bg-primary text-white font-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Primary</button>
<button class="bg-secondary text-white font-500 border-none px-4 py-2 rounded hover:bg-rose-700 duration-100 cursor-pointer active:bg-rose-800">Secondary</button>
`.slice(1,-1);

export const example2 = `
<h3>Pill Buttons</h3>
<button class="bg-blue-600 text-white font-500 border-none px-5 py-2 rounded-3xl hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Blue</button>
<button class="bg-red-600 text-white font-500 border-none px-5 py-2 rounded-3xl hover:bg-red-700 duration-100 cursor-pointer active:bg-red-800">Red</button>
<button class="bg-yellow-500 text-white font-500 border-none px-5 py-2 rounded-3xl hover:bg-yellow-600 duration-100 cursor-pointer active:bg-yellow-700">Yellow</button>
<button class="bg-green-600 text-white font-500 border-none px-5 py-2 rounded-3xl hover:bg-green-700 duration-100 cursor-pointer active:bg-green-800">Green</button>
<button class="bg-purple-600 text-white font-500 border-none px-5 py-2 rounded-3xl hover:bg-purple-700 duration-100 cursor-pointer active:bg-purple-800">Purple</button>
<button class="bg-primary text-white font-500 border-none px-5 py-2 rounded-3xl hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Primary</button>
<button class="bg-secondary text-white font-500 border-none px-4 py-2 rounded-3xl hover:bg-rose-600 duration-100 cursor-pointer active:bg-rose-700">Secondary</button>

<h3 class="mt-10">Outlined Buttons</h3>
<button class="border border-blue-600 text-blue-600 font-500 bg-none px-5 py-2 rounded hover:border-blue-700 hover:text-blue-700 duration-100 cursor-pointer active:border-blue-800 active:text-blue-800">Blue</button>
<button class="border border-red-600 text-red-600 font-500 bg-none px-5 py-2 rounded hover:border-red-700 hover:text-red-700 duration-100 cursor-pointer active:border-red-800 active:text-red-800">Red</button>
<button class="border border-yellow-500 text-yellow-500 font-500 bg-none px-5 py-2 rounded hover:border-yellow-600 hover:text-yellow-600 duration-100 cursor-pointer active:border-yellow-700 active:text-yellow-700">Yellow</button>
<button class="border border-green-600 text-green-600 font-500 bg-none px-5 py-2 rounded hover:border-green-700 hover:text-green-700 duration-100 cursor-pointer active:border-green-800 active:text-green-800">Green</button>
<button class="border border-purple-600 text-purple-600 font-500 bg-none px-5 py-2 rounded hover:border-purple-700 hover:text-purple-700 duration-100 cursor-pointer active:border-purple-800 active:text-purple-800">Purple</button>
<button class="border border-primary text-primary font-500 bg-none px-5 py-2 rounded hover:border-blue-700 hover:text-blue-700 duration-100 cursor-pointer active:border-blue-800 active:text-blue-800">Primary</button>
<button class="border border-secondary text-secondary font-500 bg-none px-5 py-2 rounded hover:border-rose-600 hover:text-rose-600 duration-100 cursor-pointer active:border-rose-700 active:text-rose-700">Secondary</button>

<h3 class="mt-10">Text Buttons</h3>
<button class="border-none bg-none text-blue-600 font-500 underline cursor-pointer hover:text-blue-700 focus:text-blue-800">Blue</button>
<button class="border-none bg-none text-red-600 font-500 underline cursor-pointer hover:text-red-700 focus:text-red-800">Red</button>
<button class="border-none bg-none text-yellow-500 font-500 underline cursor-pointer hover:text-yellow-600 focus:text-yellow-700">Yellow</button>
<button class="border-none bg-none text-green-600 font-500 underline cursor-pointer hover:text-green-700 focus:text-green-800">Green</button>
<button class="border-none bg-none text-purple-600 font-500 underline cursor-pointer hover:text-purple-700 focus:text-purple-800">Purple</button>
<button class="border-none bg-none text-primary font-500 underline cursor-pointer hover:text-blue-700 focus:text-blue-800">Primary</button>
<button class="border-none bg-none text-secondary font-500 underline cursor-pointer hover:text-rose-600 focus:text-rose-700">Secondary</button>

<h3 class="mt-10">Outlined to Filled</h3>
<button class="border border-blue-600 text-blue-600 font-500 bg-none px-5 py-2 rounded-3xl hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:rounded duration-100 cursor-pointer active:border-blue-800 active:bg-blue-800">Blue</button>
<button class="border border-red-600 text-red-600 font-500 bg-none px-5 py-2 rounded-3xl hover:border-red-700 hover:bg-red-700 hover:text-white hover:rounded duration-100 cursor-pointer active:border-red-800 active:bg-red-800">Red</button>
<button class="border border-yellow-500 text-yellow-500 font-500 bg-none px-5 py-2 rounded-3xl hover:border-yellow-500 hover:bg-yellow-500 hover:text-white hover:rounded duration-100 cursor-pointer active:border-yellow-600 active:bg-yellow-600">Yellow</button>
<button class="border border-green-600 text-green-600 font-500 bg-none px-5 py-2 rounded-3xl hover:border-green-700 hover:bg-green-700 hover:text-white hover:rounded duration-100 cursor-pointer active:border-green-800 active:bg-green-800">Green</button>
<button class="border border-purple-600 text-purple-600 font-500 bg-none px-5 py-2 rounded-3xl hover:border-purple-700 hover:bg-purple-700 hover:text-white hover:rounded duration-100 cursor-pointer active:border-purple-800 active:bg-purple-800">Purple</button>
<button class="border border-primary text-primary font-500 bg-none px-5 py-2 rounded-3xl hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:rounded duration-100 cursor-pointer active:border-blue-800 active:bg-blue-800">Primary</button>
<button class="border border-secondary text-secondary font-500 bg-none px-5 py-2 rounded-3xl hover:border-rose-600 hover:bg-rose-600 hover:text-white hover:rounded duration-100 cursor-pointer active:border-rose-700 active:bg-rose-700">Secondary</button>
`.slice(1,-1);

export const example3 = `
<h3>Enabled</h3>
<button class="bg-blue-600 text-white font-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Blue</button>
<button class="bg-red-600 text-white font-500 border-none px-5 py-2 rounded hover:bg-red-700 duration-100 cursor-pointer active:bg-red-800">Red</button>
<button class="bg-yellow-500 text-white font-500 border-none px-5 py-2 rounded hover:bg-yellow-600 duration-100 cursor-pointer active:bg-yellow-700">Yellow</button>
<button class="bg-green-600 text-white font-500 border-none px-5 py-2 rounded hover:bg-green-700 duration-100 cursor-pointer active:bg-green-800">Green</button>
<button class="bg-purple-600 text-white font-500 border-none px-5 py-2 rounded hover:bg-purple-700 duration-100 cursor-pointer active:bg-purple-800">Purple</button>
<button class="bg-primary text-white font-500 border-none px-5 py-2 rounded hover:bg-blue-600 duration-100 cursor-pointer active:bg-blue-700">Primary</button>
<button class="bg-secondary text-white font-500 border-none px-5 py-2 rounded hover:bg-rose-700 duration-100 cursor-pointer active:bg-rose-800">Secondary</button>

<h3 class="mt-10">Disabled</h3>
<button class="bg-blue-600 text-white font-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Blue</button>
<button class="bg-red-600 text-white font-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Red</button>
<button class="bg-yellow-500 text-white font-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Yellow</button>
<button class="bg-green-600 text-white font-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Green</button>
<button class="bg-purple-600 text-white font-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Purple</button>
<button class="bg-primary text-white font-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Primary</button>
<button class="bg-secondary text-white font-500 border-none px-5 py-2 rounded cursor-not-allowed opacity-50">Secondary</button>
`.slice(1,-1);

export const example4 = `
<button class="bg-primary text-white text-xs font-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Extra Small</button>
<button class="bg-primary text-white text-sm font-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Small</button>
<button class="bg-primary text-white text-base font-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Normal</button>
<button class="bg-primary text-white text-lg font-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Large</button>
<button class="bg-primary text-white text-xl font-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">Extra Large</button>
`.slice(1,-1);

export const example5 = `
<button class="bg-primary text-white font-500 border-none px-5 py-2 rounded hover:bg-blue-700 duration-100 cursor-pointer active:bg-blue-800">
  <svg aria-hidden="true" class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
  Buy Now
</button>
`.slice(1,-1);
