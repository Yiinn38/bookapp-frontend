<script setup>
import { defineProps, defineEmits, ref } from "vue";
const props = defineProps({ show: Boolean });
const emit = defineEmits(["close", "create"]);

const newBook = ref({
  title: "",
  author: "",
  category: "",
  year: null,
  numpages: null,
});

const resetForm = () => {
  newBook.value = {
    title: "",
    author: "",
    category: "",
    year: null,
    numpages: null,
  };
};

const onCreate = () => {
  emit("create", { ...newBook.value });
  resetForm();
  emit("close");
};

const onCancel = () => {
  resetForm();
  emit("close");
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 backdrop-blur-lg flex items-center justify-center text-zinc-600 z-50">
    <div class="bg-white rounded-lg p-6 w-full max-w-lg">
      <h2 class="text-xl font-bold mb-4">Create New Book</h2>
      <form @submit.prevent="onCreate" class="flex flex-col gap-3">
        <label>
          Title:
          <input v-model="newBook.title" type="text" class="border-2 border-cyan-700 rounded p-2 w-full" required />
        </label>

        <label>
          Author:
          <input v-model="newBook.author" type="text" class="border-2 border-cyan-700 rounded p-2 w-full" required />
        </label>

        <label>
          Category:
          <input v-model="newBook.category" type="text" class="border-2 border-cyan-700 rounded p-2 w-full" required />
        </label>

        <label>
          Year:
          <input v-model.number="newBook.year" type="number" class="border-2 border-cyan-700 rounded p-2 w-full" required />
        </label>

        <label>
          Pages:
          <input v-model.number="newBook.numPage" type="number" class="border-2 border-cyan-700 rounded p-2 w-full" required />
        </label>

        <div class="flex justify-end gap-3 mt-4">
          <button type="button" @click="onCancel" class="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400">Cancel</button>
          <button type="submit" class="px-4 py-2 bg-cyan-700 text-white rounded cursor-pointer hover:bg-cyan-600">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>
