<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
      <nav class="flex gap-3 justify-center mt-3">
        <RouterLink class="text-normal-text" to="/">Home</RouterLink>
        <RouterLink class="text-normal-text" to="/about">About</RouterLink>
      </nav>
  </header>

  <main class="mt-2 mx-4">
    <RouterView />
  </main>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-special-text);
}
</style>
