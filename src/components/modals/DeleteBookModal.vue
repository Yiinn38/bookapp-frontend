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
  <div v-if="show" class="fixed inset-0 backdrop-blur-lg flex items-center justify-center text-zinc-600 z-50">
    <div class="bg-white rounded-lg p-6 w-full max-w-md">
      <h2 class="text-xl font-bold mb-4">Delete Warning</h2>
      <p class="mb-10">Are you sure you want to delete the <strong>{{ book.title }}</strong> book?</p>

      <div class="flex justify-end gap-3">
        <button @click="onCancel" class="px-4 py-2 bg-gray-300 rounded cursor-pointer transition duration-300 ease-in-out hover:bg-gray-400 hover:text-white">Cancel</button>
        <button @click="onConfirm" class="px-4 py-2 bg-gray-400 text-white rounded cursor-pointer transition duration-300 ease-in-out hover:bg-red-800">Delete</button>
      </div>
    </div>
  </div>
</template>


