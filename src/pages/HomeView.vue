<script setup>
import { computed, ref } from "vue";
import db from "../models/db.json";
import Book from "../components/Book.vue";

const search = ref("");

const filteredBooks = computed(() => {
  return db.books.filter((book) => book.category.toLowerCase().includes(search.value.toLowerCase()));
});

const clearSearch = () => {
  search.value = "";
};
</script>

<template>
  <h1 class="m-4 font-bold text-2xl text-cyan-700">LIBRARY</h1>
  <!-- BUSQUEDA DE CATEGORIA -->
  <div class="relative w-full max-w-md m-4">
    <input v-model="search" type="text" placeholder="Buscar por categoría" class="w-full border p-2 pr-16 rounded-tl-3xl rounded-bl-3xl rounded-tr-4xl rounded-br-4xl" />

    <button v-if="search" @click="clearSearch" class="absolute right-16 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500" aria-label="Limpiar búsqueda">✕</button>

    <div class="absolute top-1/2 -translate-y-1/2 bg-cyan-800 rounded-full p-2 flex items-center justify-center cursor-default w-13 h-13 right-[-10px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="10" cy="10" r="7" />
        <line x1="21" y1="21" x2="15" y2="15" />
      </svg>
    </div>
  </div>

  <!-- LIBRARY -->
  <div class="p-4 flex flex-col gap-4">
    <Book v-for="book in filteredBooks" :key="book.id" :book="book" />
  </div>
</template>
