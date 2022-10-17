<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import Header from "./components/organisms/Header.vue";
import RecipeList from "./components/organisms/RecipeList.vue";
import Recipe from "./components/organisms/Recipe.vue";
import {useRecipes} from './stores/store.js';

const state = useRecipes();

// const sidebarVisible = ref(false);

if(localStorage.getItem('bookmarks')) {
  state.setBookmarks(localStorage.getItem('bookmarks'))  
}

</script>

<template>
  <div class="my-container xl:my-16 xl:rounded-2xl overflow-hidden w-full xl:w-11/12 flex flex-col bg-orange-50">
    <Header />
    <main class="flex justify-end w-full grow text-textdark bg-ivory relative">
      <RecipeList
      :class="state.store.sidebarVisible ? 'left-0' : '-left-full md:left-0' "
      class="recipes w-full md:w-1/3 bg-white py-12 flex flex-col h-full absolute top-0 transition-all duration-500" />
      <Recipe :class="state.store.sidebarVisible ? 'w-full md:w-2/3 -right-full md:right-0' : 'w-full right-0 md:w-2/3'"
      class="absolute transition-all duration-500 h-full top-0" />
    </main>
  </div>
</template>

<style scoped>
.my-container {
  max-width: 1280px;
  min-height: 117rem;
}
</style>
