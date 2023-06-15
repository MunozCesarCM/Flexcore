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
      <button class="border-none dark:bg-neutral-700 dark:text-white px-3 py-2 rounded cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 duration-100">Google Search</button>
      <button class="border-none dark:bg-neutral-700 dark:text-white px-3 py-2 rounded cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 duration-100">I'm Feeling Lucky</button>
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

export const example2 = `
<main>
  <header class="border-0 border-b border-neutral-200 mb-2 px-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <img class="w-30 cursor-pointer" src="https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png" />
        <div class="w-85 ml-6 border border-neutral-200 px-4 py-2 rounded-full cursor-pointer">Search</div>
      </div>
      <div class="flex items-center gap-4">
        <svg class="w-5 cursor-pointer" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g><rect fill-rule="nonzero" x="0" y="0"></rect><circle stroke="#535E69" stroke-width="2" stroke-linecap="round" cx="12" cy="12" r="3"></circle><path d="M10.069,3.36281 C10.7151,1.54573 13.2849,1.54573 13.931,3.3628 C14.338,4.5071 15.6451,5.04852 16.742,4.52713 C18.4837,3.69918 20.3008,5.51625 19.4729,7.25803 C18.9515,8.35491 19.4929,9.66203 20.6372,10.069 C22.4543,10.7151 22.4543,13.2849 20.6372,13.931 C19.4929,14.338 18.9515,15.6451 19.4729,16.742 C20.3008,18.4837 18.4837,20.3008 16.742,19.4729 C15.6451,18.9515 14.338,19.4929 13.931,20.6372 C13.2849,22.4543 10.7151,22.4543 10.069,20.6372 C9.66203,19.4929 8.35491,18.9515 7.25803,19.4729 C5.51625,20.3008 3.69918,18.4837 4.52713,16.742 C5.04852,15.6451 4.5071,14.338 3.3628,13.931 C1.54573,13.2849 1.54573,10.7151 3.36281,10.069 C4.5071,9.66203 5.04852,8.35491 4.52713,7.25803 C3.69918,5.51625 5.51625,3.69918 7.25803,4.52713 C8.35491,5.04852 9.66203,4.5071 10.069,3.36281 Z" id="Path" stroke="#535E69" stroke-width="2" stroke-linecap="round"></path></g></g></svg>
        <svg class="w-4 cursor-pointer" fill="#535E69" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z" fill-rule="evenodd"/></svg>
        <button class="bg-blue-500 hover:bg-blue-600 border-none text-white weight-500 py-2 px-5 rounded cursor-pointer duration-100">Sign In</button>
      </div>
    </div>
    <nav class="flex justify-between items-center mt-7 text-xs">
      <div class="flex gap-8">
        <div class="flex items-center gap-2 border-0 border-b-3 pb-2 border-blue-600 cursor-pointer">
          <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          All
        </div>
        <div class="flex items-center gap-2 pb-2 cursor-pointer">
          <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#535E69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M20.4 14.5L16 10 4 20"/></svg>
          Images
        </div>
        <div class="flex items-center gap-2 pb-2 cursor-pointer">
          <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#535E69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"/></svg>
          Videos
        </div>
        <div class="flex items-center gap-2 pb-2 cursor-pointer">
          <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#535E69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
          News
        </div>
        <div class="flex items-center gap-2 pb-2 cursor-pointer">
          <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#535E69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
          More
        </div>
      </div>
      <span class="cursor-pointer">Tools</span>
      <span class="cursor-pointer">SafeSearch on</span>
    </nav>
  </header>
  <p class="text-xs px-4">About 8,120,000 results (0.02 seconds)</p>
  <article class="flex flex-col gap-4 mt-5 px-4">
    <section class="flex flex-col gap-1 text-sm">
      <p class="text-xs m-0">https://en.wikipedia.org > wiki > Flexcore</p>
      <h3 class="p-0 m-0 text-xl weight-500 text-blue-700 hover:underline cursor-pointer">Flexcore - Wikipedia</h3>
      <p class="m-0 w-3/5 text-sm"><strong>Flexcore</strong> is an advanced UI library designed to simplify the process of building stunning and responsive web interfaces. Founded ...</p>
      <div class="mt-2 flex gap-5">
        <span class="text-blue-700 hover:underline cursor-pointer">Download</span>
        <span class="text-blue-700 hover:underline cursor-pointer">Documentation</span>
        <span class="text-blue-700 hover:underline cursor-pointer">Showcase</span>
      </div>
    </section>
    <section class="flex flex-col gap-1 text-sm">
      <p class="text-xs m-0">https://github.com > MunozCesarCM</p>
      <h3 class="p-0 m-0 text-xl weight-500 text-blue-700 hover:underline cursor-pointer">MunozCesarCM > Flexcore - GitHub</h3>
      <p class="m-0 w-3/5 text-sm">An advanced UI library designed to simplify the process of building stunning and responsive web interfaces.</p>
    </section>
  </article>
</main>
`.slice(1,-1);
