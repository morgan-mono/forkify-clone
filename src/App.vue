<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
    <div class="my-container w-screen xl:w-11/12 xl:mt-10 max-w-7xl bg-orange-50">
      <div class="my-header bg-ivory">header</div>
      <main class="flex w-full">
        <div class="recipe-list w-1/3 bg-red-600">list</div>
        <div class="recipe-body w-2/3 bg-ivory">body</div>
      </main>
    </div>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
