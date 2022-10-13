<script setup>
import { ref, reactive, inject } from 'vue';
import axios from 'axios';
import RecipeListItem from "../molecules/RecipeListItem.vue"

import {useRecipes} from '../../stores/store.js'

const state = useRecipes();

const searchTerm = ref('pizza');
const currentPage = ref(0);

function paginateRecipes() {

}

function fetchRecipe(id) {
    console.log('clicked on a recipe');
    state.updateRecipeID(id);
}

</script>

<template>
    <div class="recipes w-1/3 bg-white py-12">
        <div class="text-center">termine cercato: {{state.store.searchTerm}}</div>
        <ul class="recipes__list">
            <RecipeListItem @clickedRecipe="fetchRecipe" v-for="(recipe, index) in state.store.recipes" :title="recipe.title" :publisher="recipe.publisher" :imageURL="recipe.image_url" :recipeID="recipe.id" />
        </ul>
    </div>
</template>

<style scoped>
.recipe-listitem__pic {
    backface-visibility: hidden;
}
</style>