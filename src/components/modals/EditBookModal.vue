<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  book: Object,
  show: Boolean,
});
const emit = defineEmits(["close", "save"]);

const editedBook = ref({ ...props.book });

watch(
  () => props.book,
  (newBook) => {
    editedBook.value = { ...newBook };
  }
);

const onSave = () => {
  emit("save", editedBook.value);
  emit("close");
};

const onCancel = () => {
  emit("close");
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50 text-zinc-600">
    <div class="bg-white rounded-lg p-4 w-full max-w-lg">
      <h2 class="text-xl font-bold mb-4">Editar libro</h2>

      <form @submit.prevent="onSave" class="flex flex-col gap-3">
        <label>
          Titulo:
          <input v-model="editedBook.title" type="text" class="border-2 border-cyan-700 rounded p-2 w-full" required />
        </label>
        <label>
          Autor:
          <input v-model="editedBook.author" type="text" class="border-2 border-cyan-700 rounded p-2 w-full" required />
        </label>
        <label>
          Categoría:
          <input v-model="editedBook.category" type="text" class="border-2 border-cyan-700 rounded p-2 w-full" required />
        </label>
        <label>
          Año:
          <input v-model.number="editedBook.year" type="number" class="border-2 border-cyan-700 rounded p-2 w-full" required />
        </label>
        <label>
          Páginas:
          <input v-model.number="editedBook.numPage" type="number" class="border-2 border-cyan-700 rounded p-2 w-full" required />
        </label>
        <label>
          Código de barras:
          <input v-model="editedBook.barCode" type="text" class="border-2 border-cyan-700 rounded p-2 w-full" required>
        </label>

        <div class="flex justify-end gap-3 mt-4">
          <button type="button" @click="onCancel" class="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-red-700 hover:text-white">Cancelar</button>
          <button type="submit" class="px-4 py-2 bg-cyan-700 text-white rounded cursor-pointer hover:bg-cyan-600">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>
