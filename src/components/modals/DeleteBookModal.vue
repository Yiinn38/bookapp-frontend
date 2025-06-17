<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  book: Object,
  show: Boolean,
});
const emit = defineEmits(["close", "confirm"]);

const onConfirm = () => {
  emit("confirm", props.book);
  emit("close");
};

const onCancel = () => {
  emit("close");
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 backdrop-blur-lg flex items-center justify-center text-zinc-600">
    <div class="bg-white rounded-lg p-6 w-full max-w-md">
      <h2 class="text-xl font-bold mb-4">Confirmar eliminación</h2>
      <p class="mb-10">Seguro que quieres borrar el libro <strong>{{ book.title }}</strong>?</p>

      <div class="flex justify-end gap-3">
        <button @click="onCancel" class="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400 hover:text-white">Cancelar</button>
        <button @click="onConfirm" class="px-4 py-2 bg-gray-400 text-white rounded cursor-pointer hover:bg-red-700">Borrar</button>
      </div>
    </div>
  </div>
</template>


