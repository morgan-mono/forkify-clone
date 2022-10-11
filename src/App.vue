<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/organisms/Header.vue";
</script>

<template>
  <div class="my-container xl:my-16 xl:rounded-2xl overflow-hidden w-full xl:w-11/12 bg-orange-50">
    <Header />
    <main class="flex w-full">
      <div class="recipe-list w-1/3 bg-red-600">list</div>
      <div class="recipe-body w-2/3 bg-ivory">body</div>
    </main>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.my-container {
  max-width: 1280px;
  min-height: 117rem;
}
</style>
