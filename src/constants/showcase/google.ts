export const example1 = `
<main class="text-sm flex flex-col justify-between gap-35">
  <nav class="flex justify-between items-center">
    <div class="flex gap-5">
      <span class="cursor-pointer">About</span>
      <span class="cursor-pointer">Store</span>
    </div>
    <div class="flex items-center gap-5">
      <span class="cursor-pointer">Gmail</span>
      <span class="cursor-pointer">Images</span>
      <svg class="w-4 cursor-pointer" fill="#535E69" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z" fill-rule="evenodd"/></svg>
      <button class="bg-blue-500 hover:bg-blue-600 border-none text-white weight-500 py-2 px-5 rounded cursor-pointer duration-100">Sign In</button>
    </div>
  </nav>
  <section class="flex flex-col items-center gap-5 mb-5">
    <img class="w-1/3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" />
    <input type="text" placeholder="Search" class="bg-canvas text-header border border-neutral-300 rounded-full w-1/2 px-6 py-2 cursor-pointer" />
    <div>
      <button class="border-none px-3 py-2 rounded cursor-pointer hover:bg-neutral-200 duration-100">Google Search</button>
      <button class="border-none px-3 py-2 rounded cursor-pointer hover:bg-neutral-200 duration-100">I'm Feeling Lucky</button>
    </div>
  </section>
  <footer class="flex justify-between items-center">
    <div class="flex gap-5">
      <span class="cursor-pointer">Advertising</span>
      <span class="cursor-pointer">Business</span>
      <span class="cursor-pointer">How Search works</span>
    </div>
    <div class="flex gap-5">
      <span class="cursor-pointer">Privacy</span>
      <span class="cursor-pointer">Terms</span>
      <span class="cursor-pointer">Settings</span>
    </div>
  </footer>
</main>
`.slice(1,-1);
