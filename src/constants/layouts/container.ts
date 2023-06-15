export const example1 = `
<section class="flex flex-col justify-center items-center">
  <div class="flex justify-between items-center py-1 pl-1 pr-1 hover:pl-2 hover:pr-0 w-95 cursor-pointer duration-200">
    <span class="bg-primary text-white text-xs px-5 py-2 rounded-3xl">New</span>
    <span class="text-header text-sm weight-500">New kernel released! See what's new</span>
    <svg class="w-5 mr-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#007FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
  </div>
  <h1 class="text-4xl">Join the <span class="text-primary border-0 border-b-2 border-transparent hover:border-primary duration-150 cursor-pointer">Linux</span> Revolution!</h1>
  <p class="text-center max-w-xl">Embrace the <strong>open-source</strong> revolution and experience the power of Linux. Dive into our extensive resources and articles to learn more.</p>
  <div class="flex gap-3">
    <button class="bg-primary hover:bg-blue-600 text-white text-lg weight-500 border-none my-5 px-6 py-3 rounded-lg duration-100 cursor-pointer">
      Get Started
    </button>
    <button class="bg-none text-header text-lg weight-500 my-5 py-3 border-none flex inline-flex mr-2 hover:mr-0 gap-0 hover:gap-2 items-center duration-150 cursor-pointer">
      Learn More
      <svg class="w-5 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#007FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
    </button>
  </div>
  <div class="flex gap-10 mt-10">
    <div class="opacity-40 hover:opacity-100 flex flex-col items-center text-sm weight-500 letter-wide cursor-pointer hover:text-header duration-150"><svg class="w-8" viewBox="0 0 128 128"><path fill="#fff" d="M116.4 97.9c-2.4-.5-5-.9-7.5-.9-4.4 0-8.4.8-11.4 2-.3.2-.6.5-.6.9 0 .1 0 .3.1.4.3 1-.2 2.1-3.1 2.7-4.3.9-6.9 5.3-8.5 6.8-1.8 1.7-6.9 2.8-6.1 1.7.6-.8 2.9-3.3 4.3-6 1.3-2.4 2.4-3.1 3.9-5.4.5-.7 2.2-3 2.7-4.9.6-1.8.4-4.1.6-5.1.3-1.4 1.6-4.3 1.7-6 .1-.9-3.9 1.4-5.8 1.4s-3.7-1.1-5.4-1.2c-2.1-.1-3.4 1.6-5.3 1.3-1.1-.2-2-1.1-3.9-1.2-2.7-.1-6 1.5-12.2 1.3-6.1-.2-11.7-7.7-12.5-8.9-.9-1.4-2-1.4-3.2-.3-1.2 1.1-2.7.2-3.1-.5-.8-1.4-2.9-5.5-6.2-6.3-4.6-1.2-6.9 2.5-6.6 5.5.3 3 2.2 3.8 3.1 5.4.9 1.6 1.4 2.6 3 3.3 1.2.5 1.6 1.2 1.3 2.2-.3.9-1.6 1.1-2.4 1.1-1.7.1-3-.4-3.8-1-1-.7-1.9-1.6-2.8-3.1-1-1.7-2.7-2.5-4.6-2.5-.9 0-1.8.2-2.5.6-3 1.6-6.6 2.5-10.4 2.5H4.9c8.3 24.7 31.7 42.4 59.2 42.4 21.9.3 41.2-11 52.3-28.2"></path><path d="M116.4 97.9c-2.4-.6-5-.9-7.5-.9-4.4 0-8.4.8-11.4 2-.3.2-.6.5-.6.9 0 .1 0 .3.1.4.3 1-.2 2.1-3.1 2.8-4.3.9-6.9 5.3-8.5 6.8-1.8 1.7-6.9 2.8-6.1 1.7.6-.8 2.9-3.3 4.3-6 1.3-2.4 2.4-3.1 3.9-5.4.5-.7 2.2-3 2.7-4.9.6-1.8.4-4.1.65.1.3-1.4 1.6-4.3 1.7-6 .1-.9-3.9 1.3-5.8 1.3s-3.7-1.1-5.4-1.2c-2.1-.1-3.4 1.6-5.3 1.3-1.1-.2-2-1.1-3.9-1.2-2.7-.1-6 1.5-12.2 1.3-6.1-.2-11.7-7.7-12.5-8.9-.9-1.4-2-1.4-3.2-.3-1.2 1.1-2.7.2-3.1-.5-.8-1.4-2.9-5.5-6.2-6.3-4.6-1.2-6.9 2.5-6.6 5.5.3 3 2.2 3.8 3.1 5.4.9 1.6 1.4 2.6 3 3.3 1.2.5 1.6 1.2 1.3 2.2-.3.9-1.6 1.1-2.4 1.1-1.7.1-3-.4-3.8-1-1-.7-1.9-1.6-2.8-3.1-1-1.7-2.7-2.5-4.6-2.5-.9 0-1.8.2-2.5.6-3 1.6-6.6 2.5-10.4 2.5H4.8C2.7 77.7 1.6 71 1.6 64 1.6 29.5 29.5 1.6 64 1.6s62.4 27.9 62.4 62.4c0 12.5-3.7 24.1-10 33.9m-38.7-5.7c.3.3.9 1.4.2 2.7-.4.7-.8 1.2-1.5 1.8-.9.7-2.6 1.5-4.9 0-1.3-.8-1.3-1.1-3.1-.8-1.2.2-1.7-1.1-1.3-2.1.5-1 2.3-1.9 4.6-.5 1 .6 2.6 1.9 4 .7.6-.5.9-.8 1.7-1.7l.1-.1c.2-.1.2 0 .2 0"></path><path fill="#E93442" d="M59.1 31.3c-7.2.5-8 1.3-9.3 2.7-1.9 2-4.4-2.6-4.4-2.6-1.5-.3-3.3-2.7-2.3-5 1-2.2 2.8-1.6 3.3-.9.7.8 2.1 2.2 4 2.2 1.9-.1 4.1-.4 7.1-.4 3.1 0 5.2 1.1 5.3 2.1.1.9-.2 1.7-3.7 1.9m7.6-11.9c-.1 0-.2-.1-.2-.2s0-.1.1-.2c1.4-.7 3.5-1.3 5.9-1.6.7-.1 1.4-.1 2.1-.1h.4c4 .1 7.2 1.7 7.2 3.6-.1 1.9-3.3 3.3-7.3 3.2-1.3 0-2.5-.2-3.6-.5-.1 0-.2-.1-.2-.3 0-.1.1-.2.2-.3 2.5-.6 4.2-1.5 4.1-2.4-.2-1.2-3.4-1.8-7.3-1.4-.6.1-1 .2-1.4.2m32.5 28c-.6 2.1-1.5 4.7-5.4 6.7-.6.3-.8-.2-.5-.6 1.5-2.5 1.7-3.1 2.2-4.1.6-1.4.9-3.5-.3-7.8-2.3-8.4-7.2-19.7-10.8-23.4-3.4-3.5-9.7-4.5-15.3-3.1-2.1.5-6.1 2.6-13.6.9-13-2.9-14.9 3.6-15.7 6.4-.8 2.8-2.5 10.9-2.5 10.9-.6 3.3-1.4 9 18.8 12.8 9.4 1.8 9.9 4.2 10.3 6 .7 3.1 1.9 4.9 3.3 5.8 1.3.9 0 1.6-1.5 1.8-4 .4-18.8-3.8-27.6-8.8-7.2-4.4-7.3-8.3-5.6-11.7-10.8-1.2-19 1-20.4 6.1-2.6 9 19.2 24 44.1 31.5 26.1 7.9 53 2.4 56-14 1.4-7.5-4.9-13-15.5-15.4"></path></svg>Red Hat</div>
    <div class="opacity-40 hover:opacity-100 flex flex-col items-center text-sm weight-500 letter-wide cursor-pointer hover:text-header duration-150"><svg class="w-8" viewBox="0 0 128 128"><path d="M54.926 6.137C45.937 6.012 35.82 9.699 27.68 16.145c-8.594 6.804-14.575 16.003-15.383 23.671-.266 2.528.262 5.125 1.578 7.786.879 1.77 1.758 2.972 3.32 4.535 2.89 2.89 5.957 4.84 14.668 9.324 3.184 1.637 4.235 2.2 4.235 2.262 0 .015-.559.5-1.235 1.074-6.89 5.832-13 11.508-16.152 15.008-4.57 5.07-7.727 10.422-8.469 14.347-.18.946-.207 4.7-.043 6.192.258 2.379.793 4.219 1.82 6.238 1.247 2.461 2.458 4.113 4.34 5.934 3.864 3.738 8.246 5.648 14.043 6.132 1.004.082 4.766-.039 5.895-.187 6.648-.89 14.648-3.664 23.586-8.172 17.785-8.973 38.715-24.738 50.847-38.297 2.36-2.637 4.672-5.738 5.372-7.21.972-2.04 1.433-4.532 1.433-7.778.004-2.922-.37-5.055-1.25-7.09-4.012-9.348-20.105-24.793-36.344-34.89-3.933-2.446-9.27-5.247-12.129-6.368-3.515-1.379-6.992-2.144-11.105-2.441-.586-.043-1.18-.07-1.781-.078zm-.34.254c1.441.004 2.871.062 3.836.18 4.621.562 8.387 1.742 12.7 3.98 10.624 5.515 24.636 16.082 33.905 25.562 6.434 6.586 10.188 12.2 10.578 15.832.395 3.668-2.199 8.692-7.777 15.059-1.488 1.7-6.39 6.566-8.484 8.422-15.094 13.386-34.54 25.37-50.496 31.117a72.538 72.538 0 01-16.38 3.852c-1.644.195-5.37.277-6.55.144-2.234-.246-3.828-.684-5.496-1.508-2.149-1.058-3.805-2.527-5.195-4.605a20.658 20.658 0 01-3.082-7.54c-.262-1.359-.239-3.706.046-5.16.653-3.316 2.371-6.535 5.496-10.296 3.47-4.18 10.977-11.164 22.57-21l1.391-1.18-.382-.195c-.211-.106-1.29-.578-2.399-1.051C28.66 53.656 21.883 49.672 17.84 45.64c-1.82-1.813-2.969-3.543-3.512-5.297-.629-2.02-.242-5.223 1.012-8.383 2.215-5.586 7.297-11.813 13.39-16.402 6.692-5.043 14.149-8.102 21.93-8.993 1.024-.117 2.48-.175 3.926-.175zm-1.344 2.55c-1.195.036-2.457.141-3.828.309-6.934.852-10.262 2.055-15.27 5.52-1.851 1.28-6.308 4.64-7.32 5.52-4.152 3.6-7.547 8.343-8.988 12.542-.91 2.656-1.05 4.469-.484 6.16.562 1.684 1.648 2.805 4.785 4.953 3.73 2.559 8.027 4.813 18.16 9.54 5.27 2.456 5.77 2.734 5.992 3.316.266.707-.039 1.558-.988 2.742-.934 1.168-2.11 2.242-7.395 6.77-7.457 6.39-10.195 8.87-13.148 11.894-5.106 5.223-7.758 9.238-8.375 12.684-.508 2.82.23 6.414 1.828 8.89 1.965 3.051 4.879 4.684 9.117 5.11 5.602.558 14.024-1.004 21.367-3.973 13.242-5.352 31.754-17.406 45.356-29.54 6.531-5.827 13.793-13.343 15.172-15.706.402-.692.683-2.336.62-3.637-.077-1.695-.491-2.957-1.593-4.875-1.82-3.168-4.43-6.39-9.129-11.281-6.101-6.344-12.875-12.11-19.281-16.402-5.352-3.586-12.387-7.348-16.57-8.86-3.47-1.254-6.446-1.777-10.028-1.676zM58.84 25.84c.914.015 1.863.11 2.656.273 6.961 1.446 13.324 6.192 14.832 11.055.348 1.125.332 2.785-.039 3.812a9.265 9.265 0 01-.598 1.31c-.504.855-2.093 2.41-3.207 3.144-1.921 1.257-4.8 2.52-6.183 2.71-.434.063-.91.106-1.059.098-4.484-.222-9.972-2.59-13.094-5.648-2.09-2.043-2.945-3.942-2.804-6.223.36-5.797 2.836-9.43 7.062-10.348.645-.14 1.52-.199 2.434-.183zm.972 6.504c-1.32.023-2.367.367-2.93 1.047-.343.418-1.038 1.78-1.273 2.492-.597 1.816-.347 3.476.75 4.933.282.371.688.817.907.993l.402.316.305-.258c.43-.363.953-.476 2.16-.472 1.09 0 1.996.113 3.027.37 2.32.579 4.035 1.426 4.504 2.22.18.3.223.324.418.218.121-.062.606-.504 1.082-.98.965-.965 1.527-1.934 1.711-2.957.402-2.215-1.625-4.782-5.086-6.434-2.133-1.016-4.277-1.52-5.977-1.488zm0 0" fill="#9991d9" stroke-width=".10075" stroke="#9991d9"></path></svg>Gentoo</div>
    <div class="opacity-40 hover:opacity-100 flex flex-col items-center text-sm weight-500 letter-wide cursor-pointer hover:text-header duration-150"><svg class="w-8" viewBox="0 0 128 128"><g fill="#73ba25"><path d="M109.434 22.902a4.614 4.614 0 00-3.329 1.23 4.53 4.53 0 00-1.468 3.2c-.086 2.54 1.922 4.676 4.48 4.77a4.68 4.68 0 003.336-1.239 4.532 4.532 0 001.465-3.199c.09-2.539-1.918-4.672-4.484-4.762zm.761 5.032c-1.14 0-2.062-.614-2.062-1.36 0-.758.922-1.363 2.062-1.363 1.137 0 2.063.605 2.063 1.363 0 .746-.926 1.36-2.063 1.36zm10.825 5.48c.035-.023.113-.094.101-.156-.258-1.594-2.652-9.317-4.469-11.172-.5-.508-.898-1.004-1.707-1.477-6.562-3.785-22.132-6.07-22.86-6.172 0 0-.073-.015-.124.032-.04.039-.047.113-.047.113l-.07 3.55c-1.59-.53-13.149-4.226-23.98-4.597-9.192-.32-22.571-1.496-40.305 9.297l-.524.324C18.691 28.31 12.934 34.66 9.922 42.043c-.945 2.32-2.215 7.562-.957 12.492.543 2.156 1.555 4.324 2.918 6.262 3.078 4.383 8.25 7.289 13.816 7.781 7.86.695 13.809-2.8 15.926-9.344 1.453-4.515 0-11.14-5.578-14.52-4.54-2.75-9.418-2.124-12.25-.273-2.453 1.614-3.844 4.118-3.82 6.871.054 4.88 4.3 7.473 7.355 7.481.887 0 1.777-.152 2.781-.47.36-.109.696-.242 1.067-.468l.113-.067.074-.05-.023.015a2.482 2.482 0 001.113-2.05c0-.223-.031-.45-.098-.68-.359-1.235-1.593-1.98-2.87-1.75l-.173.039-.234.07-.34.117c-.699.168-1.226.184-1.34.188-.359-.024-2.113-.543-2.113-2.45v-.023c0-.703.281-1.191.438-1.46.546-.849 2.043-1.68 4.066-1.509 2.652.227 4.566 1.575 5.836 4.117 1.176 2.364.867 5.27-.793 7.399-1.652 2.11-4.59 3.008-8.496 2.59-3.942-.43-7.274-2.676-9.137-6.168-1.828-3.418-1.926-7.469-.258-10.578 3.989-7.457 11.52-7.38 15.653-6.672 6.113 1.05 13.066 6.633 15.535 13.078.398 1.027.601 1.844.777 2.59l.266 1.113 6.906 3.336c.148.074.2.098.258.055.074-.055.031-.2.031-.2-.043-.152-.144-.293-.3-2.207-.133-1.699-.4-6.347 1.964-8.648.918-.902 2.317-1.707 3.422-1.961 4.523-1.098 9.832-.34 14.852 5.41 2.597 2.969 3.863 4.324 4.5 4.93 0 0 .144.137.222.2.082.07.137.124.262.194.207.114 8.629 3.954 8.629 3.954s.098.046.172-.043c.074-.09.004-.18.004-.18-.055-.063-5.336-6.82-4.399-12.387.742-4.43 4.305-4.031 9.235-3.48 1.609.187 3.441.394 5.336.437 5.296.035 11-.933 14.515-2.457 2.274-.976 3.723-1.629 4.633-2.45.328-.265.496-.702.672-1.17l.125-.31c.148-.378.363-1.18.457-1.62.039-.192.086-.383-.078-.505-.145-.113-.485.09-.485.09-1.543.918-5.402 2.66-9.011 2.735-4.477.09-13.555-4.489-14.493-4.973-.632-1.484-1.257-2.969-1.898-4.445 6.492 4.234 11.879 6.574 16 6.937 4.59.403 8.168-2.074 9.719-3.105.203-.137.406-.285.594-.43zm-18.418-6.094a6.556 6.556 0 012.109-4.593 6.7 6.7 0 014.781-1.766c3.668.129 6.551 3.195 6.426 6.824a6.549 6.549 0 01-2.11 4.59 6.644 6.644 0 01-4.785 1.773c-3.664-.132-6.543-3.195-6.421-6.828zm0 0" fill-rule="evenodd"></path><path d="M92.496 57.863c.805 0 1.445.645 1.445 1.453 0 .82-.64 1.461-1.449 1.461a1.45 1.45 0 01-1.457-1.46c0-.81.653-1.454 1.457-1.454zm-.004.227c-.648 0-1.176.547-1.176 1.226 0 .692.528 1.235 1.18 1.235.652.008 1.176-.543 1.176-1.227 0-.687-.524-1.234-1.176-1.234zm-.277 2.074h-.262v-1.621c.14-.02.27-.04.465-.04.25 0 .41.052.508.122.101.07.152.18.152.336 0 .21-.144.344-.32.394v.012c.144.028.242.156.273.395.043.254.078.351.106.402h-.274c-.039-.05-.078-.2-.11-.414-.042-.207-.144-.285-.355-.285h-.183zm0-.898h.191c.215 0 .399-.078.399-.278 0-.144-.106-.285-.399-.285-.086 0-.144.004-.191.012zm0 0"></path></g></svg>openSUSE</div>
    <div class="opacity-40 hover:opacity-100 flex flex-col items-center text-sm weight-500 letter-wide cursor-pointer hover:text-header duration-150"><svg class="w-8" viewBox="0 0 128 128"><path d="M64.219 1.266C29.605 1.266 1.563 29.434 1.5 64.207h-.012v48.723H1.5c.016 7.886 6.383 14.273 14.242 14.273h48.465c34.621-.023 62.656-28.187 62.656-62.945 0-34.774-28.054-62.942-62.718-62.942zm12.738 25.918c10.527 0 20.465 8.093 20.465 19.261 0 1.035.008 2.07-.164 3.246-.29 2.97-2.992 5.106-5.938 4.688-2.941-.426-4.941-3.23-4.394-6.168.05-.336.066-.863.066-1.766 0-6.332-5.156-8.773-10.031-8.773-4.875 0-9.27 4.117-9.277 8.773.082 5.387 0 10.727 0 16.114l9.05-.07c7.067-.145 7.149 10.538.082 10.488l-9.125.066c-.023 4.336.032 3.55.012 5.734 0 0 .074 5.297-.082 9.313-1.094 11.8-11.094 21.23-23.113 21.23-12.746 0-23.242-10.457-23.242-23.28.382-13.188 10.859-23.567 24.05-23.446l7.36-.055v10.469l-7.36.066h-.035c-7.25.215-13.465 5.16-13.582 12.957a12.765 12.765 0 0012.805 12.797c7.086 0 12.758-5.18 12.758-12.781l-.012-39.649c.004-.738.027-1.324.11-2.132 1.195-9.7 9.831-17.09 19.609-17.09zm0 0" fill="#51a2da"></path></svg>Fedora</div>
    <div class="opacity-40 hover:opacity-100 flex flex-col items-center text-sm weight-500 letter-wide cursor-pointer hover:text-header duration-150"><svg class="w-8" viewBox="0 0 128 128"><path fill="#A80030" d="M76.77 68.974a27.05 27.05 0 002.008-1.729c-1.667.408-3.363.417-5.073.261-2.049.028.388 1.056 3.065 1.468zm7.94-4.212c1.222-1.685 2.111-3.53 2.425-5.438-.274 1.359-1.011 2.534-1.707 3.773-3.833 2.414-.36-1.433-.002-2.895-4.12 5.188-.566 3.111-.716 4.56zm4.063-10.57c.248-3.693-.727-2.525-1.055-1.117.383.199.685 2.603 1.055 1.117zM65.93 3.722c1.094.196 2.365.347 2.186.608 1.197-.262 1.469-.504-2.186-.608zm2.133.704l.053-.095-.773.159zM65.27 80.73c-2.951-1.381-5.653-3.468-7.874-6.021 1.178 1.726 2.451 3.403 4.096 4.721-2.783-.942-6.499-6.742-7.584-6.978 4.796 8.587 19.457 15.059 27.135 11.848-3.553.13-8.065.073-12.057-1.402-1.536-.791-3.573-2.355-3.589-2.869-.077.201-.206.4-.127.701zm.156-.797l-.03.097.03-.097zm44.049-33.588c.033-1.882.523-.986.713-1.449-.37-.213-1.339-1.656-1.93-4.424.428-.651 1.143 1.686 1.726 1.781-.375-2.201-1.02-3.878-1.045-5.568-1.7-3.553-.602.474-1.981-1.525-1.81-5.646 1.502-1.311 1.725-3.875 2.743 3.974 4.308 10.134 5.026 12.685-.549-3.11-1.433-6.123-2.514-9.04.833.352-1.342-6.399 1.083-1.929-2.591-9.531-11.085-18.436-18.901-22.614.956.875 2.164 1.975 1.73 2.146-3.887-2.314-3.204-2.495-3.76-3.472-3.167-1.288-3.375.103-5.472.002-5.968-3.165-7.118-2.829-12.611-4.813l.251 1.168c-3.955-1.317-4.607.5-8.88.004-.261-.203 1.369-.735 2.71-.93-3.823.504-3.644-.753-7.384.139.921-.646 1.896-1.075 2.879-1.625-3.116.189-7.441 1.814-6.106.336C51.65 5.613 42.619 8.798 37.551 13.55l-.159-1.065C35.07 15.272 27.266 20.81 26.645 24.42l-.621.145c-1.209 2.046-1.991 4.365-2.949 6.47-1.581 2.693-2.317 1.036-2.091 1.459-3.109 6.302-4.653 11.598-5.986 15.94.951 1.421.022 8.553.382 14.26-1.561 28.19 19.784 55.559 43.115 61.879 3.42 1.222 8.506 1.176 12.832 1.302-5.105-1.46-5.765-.773-10.735-2.508-3.587-1.689-4.373-3.617-6.914-5.821l1.006 1.777c-4.982-1.763-2.897-2.182-6.951-3.466l1.074-1.402c-1.615-.123-4.277-2.721-5.004-4.161l-1.767.069c-2.122-2.618-3.253-4.505-3.171-5.967l-.571 1.018c-.647-1.111-7.807-9.822-4.092-7.793-.691-.632-1.608-1.028-2.603-2.835l.756-.865c-1.788-2.299-3.291-5.249-3.177-6.231.954 1.289 1.616 1.529 2.271 1.75-4.515-11.204-4.768-.618-8.188-11.405l.723-.058c-.555-.836-.891-1.743-1.337-2.633l.314-3.138c-3.25-3.759-.91-15.982-.44-22.686.325-2.727 2.713-5.628 4.529-10.178l-1.106-.191c2.115-3.69 12.079-14.82 16.693-14.247 2.235-2.809-.443-.01-.88-.718 4.91-5.082 6.453-3.591 9.767-4.504 3.573-2.121-3.066.827-1.373-.809 6.178-1.578 4.378-3.587 12.438-4.388.851.484-1.973.747-2.682 1.375 5.148-2.518 16.289-1.946 23.525 1.397 8.397 3.925 17.832 15.525 18.204 26.439l.423.113c-.213 4.339.665 9.356-.858 13.965l1.037-2.182c.121 3.316-.971 4.925-1.955 7.773l-1.772.884c-1.45 2.817.14 1.789-.897 4.03-2.265 2.013-6.871 6.298-8.345 6.689-1.077-.024.729-1.269.964-1.759-3.029 2.082-2.431 3.125-7.065 4.39l-.136-.302C71.6 82.675 55.72 72.017 55.93 57.475c-.123.924-.347.692-.601 1.067-.589-7.483 3.456-14.998 10.278-18.065 6.674-3.305 14.497-1.948 19.276 2.507-2.625-3.44-7.851-7.085-14.046-6.744-6.066.096-11.742 3.952-13.636 8.137-3.109 1.957-3.469 7.544-4.824 8.565-1.822 13.394 3.428 19.179 12.309 25.985.718.484.801.757.739 1.005l.011-.02c10.477 3.915 21.301 2.966 30.366-4.302 2.306-1.796 4.825-4.852 5.553-4.895-1.096 1.649.188.793-.655 2.249 2.298-3.707-.999-1.509 2.375-6.401l1.247 1.716c-.463-3.075 3.819-6.812 3.385-11.676.982-1.488 1.097 1.601.053 5.024 1.446-3.798.381-4.408.754-7.542.401 1.053.928 2.173 1.199 3.284-.943-3.67.967-6.181 1.439-8.313-.462-.204-1.451 1.624-1.677-2.711zM51.037 71.758c1.348 1.831 2.417 3.814 4.138 5.245-1.238-2.417-2.157-3.415-3.85-6.683l-.288 1.438zm3.473-1.563c-.713-.789-1.136-1.738-1.608-2.685.453 1.663 1.377 3.091 2.239 4.545l-.631-1.86zm52.5-.093a35.857 35.857 0 003.875-12.16l-.302.756a36.496 36.496 0 01-3.573 11.404zM71.214 2.126c-1.917.161-3.825.257-5.709.499l.83.114c1.387-.509 3.408-.279 4.879-.613zM18.227 30.775c1.424-3.207-.395-1.149-.552-2.007.221 2.846-2.19 3.924.552 2.007zm-2.838 7.237c-1.775 2.269-.817 2.752-1.004 4.296.642-1.972.76-3.156 1.004-4.296z"></path></svg>Debian</div>
  </div>
</section>
`.slice(1,-1);

export const example2 = `
<section class="flex gap-15">
  <svg class="w-1/2" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 10L21.5 10C43 10 86 10 128.8 37C171.7 64 214.3 118 257.2 124C300 130 343 88 385.8 103C428.7 118 471.3 190 514.2 187C557 184 600 106 642.8 94C685.7 82 728.3 136 771.2 163C814 190 857 190 878.5 190L900 190L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" fill="#d57daf"></path><path d="M0 199L21.5 205C43 211 86 223 128.8 227.5C171.7 232 214.3 229 257.2 236.5C300 244 343 262 385.8 313C428.7 364 471.3 448 514.2 443.5C557 439 600 346 642.8 343C685.7 340 728.3 427 771.2 512.5C814 598 857 682 878.5 724L900 766L900 188L878.5 188C857 188 814 188 771.2 161C728.3 134 685.7 80 642.8 92C600 104 557 182 514.2 185C471.3 188 428.7 116 385.8 101C343 86 300 128 257.2 122C214.3 116 171.7 62 128.8 35C86 8 43 8 21.5 8L0 8Z" fill="#c960af"></path><path d="M0 217L21.5 250C43 283 86 349 128.8 374.5C171.7 400 214.3 385 257.2 395.5C300 406 343 442 385.8 470.5C428.7 499 471.3 520 514.2 487C557 454 600 367 642.8 386.5C685.7 406 728.3 532 771.2 626.5C814 721 857 784 878.5 815.5L900 847L900 764L878.5 722C857 680 814 596 771.2 510.5C728.3 425 685.7 338 642.8 341C600 344 557 437 514.2 441.5C471.3 446 428.7 362 385.8 311C343 260 300 242 257.2 234.5C214.3 227 171.7 230 128.8 225.5C86 221 43 209 21.5 203L0 197Z" fill="#b643b3"></path><path d="M0 514L21.5 562C43 610 86 706 128.8 751C171.7 796 214.3 790 257.2 802C300 814 343 844 385.8 851.5C428.7 859 471.3 844 514.2 800.5C557 757 600 685 642.8 674.5C685.7 664 728.3 715 771.2 761.5C814 808 857 850 878.5 871L900 892L900 845L878.5 813.5C857 782 814 719 771.2 624.5C728.3 530 685.7 404 642.8 384.5C600 365 557 452 514.2 485C471.3 518 428.7 497 385.8 468.5C343 440 300 404 257.2 393.5C214.3 383 171.7 398 128.8 372.5C86 347 43 281 21.5 248L0 215Z" fill="#9a28bb"></path><path d="M0 901L21.5 901C43 901 86 901 128.8 901C171.7 901 214.3 901 257.2 901C300 901 343 901 385.8 901C428.7 901 471.3 901 514.2 901C557 901 600 901 642.8 901C685.7 901 728.3 901 771.2 901C814 901 857 901 878.5 901L900 901L900 890L878.5 869C857 848 814 806 771.2 759.5C728.3 713 685.7 662 642.8 672.5C600 683 557 755 514.2 798.5C471.3 842 428.7 857 385.8 849.5C343 842 300 812 257.2 800C214.3 788 171.7 794 128.8 749C86 704 43 608 21.5 560L0 512Z" fill="#7011c5"></path></svg>
  <div class="w-1/2">
    <h2 class="text-sm text-violet-600 dark:text-pink-400 letter-wider uppercase">Where Art Meets Technology</h2>
    <h1 class="text-5xl weight-800 letter-tight line-height-1-25 mt-3">Unleash Your Creative Vision.</h1>
    <p class="w-4/5 mt-0">Discover a world of endless inspiration, innovative techniques, and breathtaking aesthetics. Here, imagination knows no bounds.</p>
    <div class="flex">
          <div class="w-1/4 p-4 mt-4">
            <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M16 32.076L30 24.065V8.05701L16 16.067V32.076Z" fill="#000001"></path>
                <path d="M19 24.5556V27L25 23.4444V21L19 24.5556Z" fill="white"></path>
                <path d="M16 0.076004L2 8.057V24.065L16 32.076V16.067L30 8.057L16 0.076004Z" fill="url(#paint0_linear)"></path>
              </g>
              <defs>
                <linearGradient id="paint0_linear" x1="2.18" y1="23.255" x2="30.041" y2="8.782" gradientUnits="userSpaceOnUse">
                  <stop offset="0.043" stop-color="#FF8618"></stop>
                  <stop offset="0.382" stop-color="#FF246E"></stop>
                  <stop offset="0.989" stop-color="#AF1DF5"></stop>
                </linearGradient>
                <clipPath id="clip0">
                  <rect width="32" height="32" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="w-1/4 p-4 mt-4 sm:w-1/4">
            <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="#FF3366"></circle>
              <path d="M11.3594 10.8594C12.3259 10.8594 13.1094 10.0759 13.1094 9.10938C13.1094 8.14288 12.3259 7.35938 11.3594 7.35938C10.3929 7.35938 9.60938 8.14288 9.60938 9.10938C9.60938 10.0759 10.3929 10.8594 11.3594 10.8594Z" fill="white"></path>
              <path d="M7.70312 12.3594L7.09375 14.5938H9.09375C8.69271 16.224 7.85312 19.6531 7.70312 20.3281C7.51562 21.1719 7.48433 23.5781 10.0156 23.5781C11.7824 23.5781 12.9093 22.4368 13.5379 21.5048L13.0625 23.4062H15.9062L17.3906 17.3981C17.6016 16.3984 18.0981 14.4688 19.8906 14.4688C22.0225 14.4688 21.2404 16.9933 20.8571 18.2305C20.8415 18.2809 20.8266 18.3291 20.8125 18.375C20.525 19.3125 20.2188 20.4062 20.2188 21.1562C20.2188 22 20.6094 23.5781 22.7969 23.5781C24.9844 23.5781 25.9167 21.4115 26.1094 20.3281L25 19.875C24.9219 20.4531 24.2188 21.7031 23.5625 21.7031C22.6641 21.7031 23.1154 20.1885 23.597 18.5721C23.8106 17.8551 24.0302 17.1181 24.1406 16.4844C24.4198 14.8821 24.1406 12.1562 21.3594 12.1562C19.632 12.1562 18.2756 13.6955 17.6303 14.7641L18.1719 12.3594H13.8438L13.25 14.5938H15.2656C15.2656 14.5938 14.0695 19.4683 13.9922 19.6211C13.1797 21.2266 11.9508 21.7655 11.0312 21.7031C10.2938 21.6531 10.3802 20.7656 10.5156 20.3281L12.5156 12.3594H7.70312Z" fill="white"></path>
            </svg>
          </div>
          <div class="w-1/4 p-4 mt-4 sm:w-1/4">
            <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z" fill="#0ACF83"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z" fill="#F24E1E"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF"></path>
            </svg>
          </div>
        </div>
      </div>
  </div>
</section>
`.slice(1,-1);

export const example3 = `
<nav class="flex justify-between items-center">
  <svg class="w-10 cursor-pointer" viewBox="0 0 128 128"><defs><linearGradient id="confluence-original-a" gradientUnits="userSpaceOnUse" x1="26.791" y1="28.467" x2="11.792" y2="19.855" gradientTransform="scale(4)"><stop offset="0" stop-color="#0052cc"></stop><stop offset=".918" stop-color="#2380fb"></stop><stop offset="1" stop-color="#2684ff"></stop></linearGradient><linearGradient id="confluence-original-b" gradientUnits="userSpaceOnUse" x1="5.209" y1="2.523" x2="20.208" y2="11.136" gradientTransform="scale(4)"><stop offset="0" stop-color="#0052cc"></stop><stop offset=".918" stop-color="#2380fb"></stop><stop offset="1" stop-color="#2684ff"></stop></linearGradient></defs><path d="M19.492 86.227a249.047 249.047 0 00-3.047 4.933c-.867 1.45-.433 3.336 1.016 4.207l19.863 12.188c1.45.87 3.332.433 4.203-1.016a139.349 139.349 0 012.899-4.934c7.832-12.91 15.804-11.46 30.011-4.64l19.72 9.281c1.593.727 3.335 0 4.058-1.45l9.426-21.323c.722-1.453 0-3.336-1.454-4.063-4.203-1.887-12.464-5.805-19.714-9.43-26.82-12.914-4.586-12.043-66.98 16.247zm0 0" fill="url(#confluence-original-a)"></path><path d="M108.508 37.773a249.047 249.047 0 003.047-4.933c.87-1.45.433-3.336-1.016-4.207L90.676 16.445c-1.45-.87-3.332-.433-4.203 1.016a133.55 133.55 0 01-2.899 4.934c-7.832 12.91-15.804 11.46-30.011 4.64l-19.72-9.281c-1.593-.727-3.331 0-4.058 1.45l-9.422 21.323c-.726 1.453 0 3.34 1.45 4.063 4.203 1.887 12.468 5.805 19.714 9.43 26.825 12.77 49.586 12.042 66.98-16.247zm0 0" fill="url(#confluence-original-b)"></path></svg>
  <div class="flex gap-6">
    <button class="bg-none text-header weight-400 text-sm mt-1 border-0 border-b-3 border-transparent hover:border-primary cursor-pointer duration-100">Product</button>
    <button class="bg-none text-header weight-400 text-sm mt-1 border-0 border-b-3 border-transparent hover:border-primary cursor-pointer duration-100">Features</button>
    <button class="bg-none text-header weight-400 text-sm mt-1 border-0 border-b-3 border-transparent hover:border-primary cursor-pointer duration-100">Marketplace</button>
    <button class="bg-none text-header weight-400 text-sm mt-1 border-0 border-b-3 border-transparent hover:border-primary cursor-pointer duration-100">Company</button>
  </div>
  <button class="bg-none text-header weight-500 my-5 py-3 border-none flex inline-flex mr-2 hover:mr-0 gap-0 hover:gap-2 items-center duration-150 cursor-pointer">
    Learn More
    <svg class="w-5 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#007FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
  </button>
</nav>
`.slice(1,-1);

export const example4 = `
<nav>
  <section class="flex items-center gap-4">
    <svg class="w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#007FFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
    <h4 class="weight-600 my-0">What a Market</h4>
    <input type="text" placeholder="Search" class="bg-canvas text-header flex-grow-1 h-5 px-4 py-2 border-2 border-neutral-200 hover:border-primary rounded-lg duration-100 cursor-pointer" />
    <div class="flex items-center gap-2 weight-500 text-sm hover:text-header cursor-pointer duration-100"><svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF0000" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>Favorites</div>
    <div class="flex items-center gap-2 weight-500 text-sm hover:text-header cursor-pointer duration-100">
      <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC300" stroke="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>Cart
      <span class="w-6 h-6 text-xs bg-red-500 text-white rounded-3xl text-center fixed mb-7 ml-5">3</span>
    </div>
    <button class="bg-none text-header weight-500 border border-neutral-200 hover:border-primary px-4 py-2 rounded-lg cursor-pointer duration-100">
      Sign In
    </button>
  </section>
  <section class="flex items-center gap-8 mt-6">
    <div class="flex items-center gap-2 weight-600 text-sm cursor-pointer mr-5 hover:text-header"><svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>Home</div>
    <span class="text-xs weight-500 hover:text-primary cursor-pointer duration-100">Best Sellers</span>
    <span class="text-xs weight-500 hover:text-primary cursor-pointer duration-100">New Releases</span>
    <span class="text-xs weight-500 hover:text-primary cursor-pointer duration-100">Books</span>
    <span class="text-xs weight-500 hover:text-primary cursor-pointer duration-100">Computers</span>
    <span class="text-xs weight-500 hover:text-primary cursor-pointer duration-100">Fashion</span>
    <span class="text-xs weight-500 hover:text-primary cursor-pointer duration-100">Health</span>
    <span class="text-xs weight-500 hover:text-primary cursor-pointer duration-100">Pharmacy</span>
  </section>
</nav>
`.slice(1,-1);

export const table1 = {
  body: [
    { title: 'flex-row', desc: 'flex-direction: row' },
    { title: 'flex-row-reverse', desc: 'flex-direction: row-reverse' },
    { title: 'flex-col', desc: 'flex-direction: column' },
    { title: 'flex-col-reverse', desc: 'flex-direction: column-reverse' },
  ],
};
