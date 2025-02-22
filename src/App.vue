<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { computed, reactive, ref } from 'vue';
import Instagram from './components/Instagram.vue';
import { store } from './store';


window.addEventListener('scroll', () => {
  store.scrolled = window.scrollY > 50;
});

const navActive = ref(false);
const route = useRoute();
const onHome = computed(() => route.name === 'home');
const darkenNav = computed(() => onHome.value && !store.scrolled && !navActive.value);

const menuItemClasses = "transition-transform duration-500 text-menu-item hover:opacity-80 hover:border-b-1 hover:border-b-white/80"
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen">
    <header class="transition-colors duration-500 z-50 w-full top-0 lg:bg-menu-background flex justify-center"
      :class="{ 'not-hover:lg:bg-transparent': darkenNav, 'fixed': onHome, 'sticky': !onHome }">

      <div
        class="transition-all ease-in-out duration-500 w-full flex justify-between max-w-[1200px] lg:items-center flex-col lg:flex-row"
        :class="{ 'lg:py-5': store.scrolled, 'lg:py-7': !store.scrolled }">

        <div
          class="z-10 transition-colors duration-500 not-lg:py-4 px-5 flex justify-between items-center w-full not-lg:bg-menu-background"
          :class="{ 'not-hover:not-lg:bg-transparent': darkenNav }">
          <RouterLink to="/">
            <img src="@/assets/logo_white.svg" class="h-5" />
          </RouterLink>

          <button class="mr-3 lg:hidden cursor-pointer" @click="navActive = !navActive">
            <svg v-if="navActive" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
              fill="#e8eaed">
              <path
                d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
              fill="#e8eaed">
              <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
            </svg>
          </button>
        </div>

        <nav
          class="transition-all duration-500 h-full not-lg:py-7 px-5 gap-7 justify-end flex-col lg:flex-row flex lg:items-center not-lg:bg-menu-background"
          :class="{ '!flex !not-lg:translate-y-0 not-lg:opacity-100': navActive, 'not-lg:-translate-y-full not-lg:opacity-0': !navActive }">
          <RouterLink :class="menuItemClasses" to="/">Startseite</RouterLink>
          <RouterLink :class="menuItemClasses" to="/veranstaltungen">Veranstaltungen</RouterLink>
          <RouterLink :class="menuItemClasses" to="/kontakt">Kontakt</RouterLink>
        </nav>

      </div>

    </header>

    <main class="bg-background grow-1">
      <RouterView />
    </main>

    <footer class="bg-menu-background p-10 !text-white flex lg:justify-center">
      <div class="flex flex-col gap-4 lg:gap-12 lg:flex-row">
        <a class="text-white" href="https://www.instagram.com/saferspace_slam/" target="_blank">
          <div class="flex gap-[6px] items-center">
            <img src="@/assets/instagram_logo_simple.svg" class="h-5 ml-[2px] invert" />
            <p>saferspace_slam</p>
          </div>
        </a>
        <div class="flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path
              d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
          </svg>
          Jeden 3. Mittwoch im Monat um 20:00 Uhr
        </div>
        <a href="https://maps.app.goo.gl/vmScMdnrRQ9NGecB9" class="!text-white" target="_blank">
          <div class="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path
                d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            Von-Melle-Park 5, 20146 Hamburg, Raum 0029
          </div>
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
</style>
