<script setup>
import { ref, reactive, inject } from 'vue';
import axios from 'axios';
import RecipeListItem from "../molecules/RecipeListItem.vue"


const state = inject('state');

const searchTerm = ref('pizza');
const currentPage = ref(0);

function paginateRecipes() {

}

// function logInput() {
//     console.log(state.store.searchTerm);
// }

</script>

<template>
    <div class="recipes w-1/3 text-textdark bg-white py-12">
        <div class="text-center">termine cercato: {{state.store.searchTerm}}</div>
        <ul class="recipes__list">
            <RecipeListItem v-for="(recipe, index) in state.store.recipes" :title="recipe.title" :publisher="recipe.publisher" :imageURL="recipe.image_url"  />
        </ul>
    </div>
</template>

<style scoped>
.recipe-listitem__pic {
    backface-visibility: hidden;
}

.asdf {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .3s;
}
</style>