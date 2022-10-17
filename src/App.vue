<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from "./components/organisms/Header.vue";
import RecipeList from "./components/organisms/RecipeList.vue";
import Recipe from "./components/organisms/Recipe.vue";
import {useRecipes} from './stores/store.js';

const state = useRecipes();

if(localStorage.getItem('bookmarks')) {
  state.setBookmarks(localStorage.getItem('bookmarks'))  
}

</script>

<template>
  <div class="my-container xl:my-16 xl:rounded-2xl overflow-hidden w-full xl:w-11/12 flex flex-col bg-orange-50">
    <Header />
    <main class="flex w-full grow text-textdark">
      <RecipeList class="recipes w-1/3 bg-white py-12 flex flex-col relative" />
      <Recipe />
    </main>
  </div>
</template>

<style scoped>
.my-container {
  max-width: 1280px;
  min-height: 117rem;
}
</style>
