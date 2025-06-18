<script setup>
import { defineProps, defineEmits, watch, ref } from "vue";
const props = defineProps({ show: Boolean, book: Object });
const emit = defineEmits(["close", "save"]);

const editableBook = ref({});

watch(
  () => props.book,
  (newBook) => {
    editableBook.value = { ...newBook };
  },
  { immediate: true }
);

const onSave = () => {
  emit("save", editableBook.value);
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 backdrop-blur-lg flex items-center justify-center text-zinc-600 z-50">
    <div class="bg-white rounded-lg p-6 w-full max-w-lg">
      <h2 class="text-xl font-bold mb-4">Edit Book</h2>
      <form @submit.prevent="onSave" class="flex flex-col gap-3">
        <label>Title:<input v-model="editableBook.title" class="border-2 border-cyan-700 rounded p-2 w-full" required /></label>
        <label>Author:<input v-model="editableBook.author" class="border-2 border-cyan-700 rounded p-2 w-full" required /></label>
        <label>Category:<input v-model="editableBook.category" class="border-2 border-cyan-700 rounded p-2 w-full" required /></label>
        <label>Year:<input v-model.number="editableBook.year" type="number" class="border-2 border-cyan-700 rounded p-2 w-full" required min="1000" /></label>
        <label>Pages:<input v-model.number="editableBook.numpages" type="number" class="border-2 border-cyan-700 rounded p-2 w-full" required /></label>

        <div class="flex justify-end gap-3 mt-4">
          <button type="button" @click="emit('close')" class="px-4 py-2 bg-gray-300 rounded cursor-pointer transition duration-300 ease-in-out hover:bg-red-800 hover:text-white">Cancel</button>
          <button type="submit" class="px-4 py-2 bg-cyan-700 text-white rounded cursor-pointer transition duration-300 ease-in-out hover:bg-cyan-600">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>