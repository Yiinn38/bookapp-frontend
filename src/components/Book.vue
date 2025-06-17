<script setup>
defineProps({
  book: Object,
});

const emit = defineEmits(["edit", "delete"]);
</script>

<template>
  <div class="flex border-2 p-2 rounded-lg border-cyan-700 items-center justify-between transition duration-300 ease-in-out hover:border-cyan-200">
    <div class="flex items-center h-full w-full gap-4">
      <div class="bg-cyan-700 rounded-lg h-25 p-4 mr-4 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-full h-full"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <path d="M3 6l0 13" />
          <path d="M12 6l0 13" />
          <path d="M21 6l0 13" />
        </svg>
      </div>
      <div class="flex gap-6 w-full items-center">
        <div class="w-[70%] text-cyan-600">
          <h1 class="text-4xl text-white font-bold">{{ book.title }}</h1>
          <p>{{ book.author }}</p>
          <p class="opacity-70">{{ book.barCode }}</p>
        </div>

        <div class="w-[30%] ml-auto text-right mr-8">
          <p>Categoría: {{ book.category }}</p>
          <p>Año: {{ book.year }}</p>
          <p>Páginas: {{ book.numPage }}</p>
        </div>
      </div>
    </div>

    <!-- CONTROLS -->
    <div class="flex items-center gap-4">
      <button @click="emit('edit', book)" class="bg-cyan-700 border-2 border-cyan-700 p-2 rounded-full transition duration-300 ease-in-out cursor-pointer hover:scale-110 hover:bg-transparent hover:border-cyan-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
          <path d="M16 5l3 3" />
        </svg>
      </button>
      <button @click="emit('delete', book)" class="bg-cyan-700 border-2 border-cyan-700 p-2 rounded-full transition duration-300 ease-in-out cursor-pointer hover:scale-110 hover:bg-red-800 hover:border-red-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 7l16 0" />
          <path d="M10 11l0 6" />
          <path d="M14 11l0 6" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </button>
    </div>
  </div>
</template>
