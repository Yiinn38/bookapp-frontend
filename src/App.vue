<script setup>
import Navbar from "./components/Navbar.vue";
</script> 

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin: 1rem auto;
  padding: 0.75rem;
}
</style>
