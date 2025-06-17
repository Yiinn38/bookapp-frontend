<script setup>
import { computed, ref } from "vue";
import db from "../models/db.json";
import Book from "../components/Book.vue";

import EditBookModal from "../components/modals/EditBookModal.vue";
import DeleteBookModal from "../components/modals/DeleteBookModal.vue";
import CreateBookModal from "../components/modals/CreateBookModal.vue";

// Estado reactivo
const search = ref("");
const books = ref([...db.books]); // lista local de libros

const filteredBooks = computed(() => {
  return books.value.filter((book) =>
    book.category.toLowerCase().includes(search.value.toLowerCase())
  );
});

const clearSearch = () => {
  search.value = "";
};

// Estados para los modales
const showEditModal = ref(false);
const showDeleteModal = ref(false);
const showCreateModal = ref(false);
const selectedBook = ref(null);

// Abrir modal de edición
const onEdit = (book) => {
  selectedBook.value = book;
  showEditModal.value = true;
};

// Guardar cambios de edición
const onSaveEdit = (editedBook) => {
  const index = books.value.findIndex((b) => b.id === editedBook.id);
  if (index !== -1) {
    books.value[index] = { ...editedBook };
  }
  showEditModal.value = false;
};

// Abrir modal de eliminación
const onDelete = (book) => {
  selectedBook.value = book;
  showDeleteModal.value = true;
};

// Confirmar eliminación
const onConfirmDelete = (book) => {
  books.value = books.value.filter((b) => b.id !== book.id);
  showDeleteModal.value = false;
};

// Crear nuevo libro
const onCreateBook = (book) => {
  const newId = Math.max(...books.value.map((b) => b.id)) + 1;
  books.value.push({ ...book, id: newId });
  showCreateModal.value = false;
};
</script>

<template>
  <h1 class="m-4 font-bold text-2xl text-cyan-700">LIBRARY</h1>

  <!-- Header -->
  <div class="flex items-center justify-between">
    <!-- Search bar -->
    <div class="relative w-full max-w-md m-4">
      <input
        v-model="search"
        type="text"
        placeholder="Buscar por categoría"
        class="w-full border p-2 pr-16 rounded-tl-3xl rounded-bl-3xl rounded-tr-4xl rounded-br-4xl"
      />

      <button
        v-if="search"
        @click="clearSearch"
        class="absolute right-16 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-800 cursor-pointer"
        aria-label="Limpiar búsqueda"
      >
        ✕
      </button>

      <div
        class="absolute top-1/2 -translate-y-1/2 bg-cyan-700 rounded-full p-2 flex items-center justify-center cursor-default w-13 h-13 right-[-10px]"
      >
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

    <!-- Botón crear libro -->
    <button
      class="bg-cyan-700 px-4 py-2 m-4 rounded text-white hover:bg-cyan-800"
      @click="showCreateModal = true"
    >
      <span class="font-bold mr-2">+</span>
      Crear nuevo libro
    </button>
  </div>

  <!-- Lista de libros -->
  <div class="p-4 flex flex-col gap-4">
    <Book
      v-for="book in filteredBooks"
      :key="book.id"
      :book="book"
      @edit="onEdit"
      @delete="onDelete"
    />
  </div>

  <!-- Modales -->
  <EditBookModal
    :show="showEditModal"
    :book="selectedBook"
    @close="showEditModal = false"
    @save="onSaveEdit"
  />

  <DeleteBookModal
    :show="showDeleteModal"
    :book="selectedBook"
    @close="showDeleteModal = false"
    @confirm="onConfirmDelete"
  />

  <CreateBookModal
    :show="showCreateModal"
    @close="showCreateModal = false"
    @create="onCreateBook"
  />
</template>
