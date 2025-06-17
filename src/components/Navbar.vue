<template>
  <div class="flex w-screen bg-cyan-700 py-4 justify-center items-center mx-auto">
    <RouterLink to="/" class="font-bold transition-transform duration-300 hover:-translate-y-1">HOME</RouterLink>
    <a href="/" class="flex mx-18 items-center transition-transform duration-300 hover:scale-110">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
        d="M21.5 5.134a1 1 0 0 1 .493 .748l.007 .118v13a1 1 0 0 1 -1.5 .866a8 8 0 0 0 -7.5 -.266v-15.174a10 10 0 0 1 8.5 .708m-10.5 -.707l.001 15.174a8 8 0 0 0 -7.234 .117l-.327 .18l-.103 .044l-.049 .016l-.11 .026l-.061 .01l-.117 .006h-.042l-.11 -.012l-.077 -.014l-.108 -.032l-.126 -.056l-.095 -.056l-.089 -.067l-.06 -.056l-.073 -.082l-.064 -.089l-.022 -.036l-.032 -.06l-.044 -.103l-.016 -.049l-.026 -.11l-.01 -.061l-.004 -.049l-.002 -13.068a1 1 0 0 1 .5 -.866a10 10 0 0 1 8.5 -.707"
        />
      </svg>
      <h1 class="text-center font-bold text-2xl uppercase">Books App</h1>
    </a>
    <RouterLink to="/about" class="font-bold transition-transform duration-300 hover:-translate-y-1">ABOUT</RouterLink>
  </div>
</template>
