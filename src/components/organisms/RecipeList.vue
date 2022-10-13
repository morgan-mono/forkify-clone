<script setup>
import { ref, reactive, computed } from 'vue';
import axios from 'axios';
import RecipeListItem from "../molecules/RecipeListItem.vue"
import Spinner from "../atoms/Spinner.vue"

import { useRecipes } from '../../stores/store.js'

const state = useRecipes();

const itemsPerPage = 10
const currentPage = ref(0);

const paginatedResults = computed(() => {
    return state.store.recipes.slice(currentPage.value * itemsPerPage, currentPage.value * itemsPerPage + (itemsPerPage - 1))
}
);

const lastPage = computed(() => {
    return Math.ceil(state.store.recipes.length / itemsPerPage)
}
);

function prevPage() {
    if (currentPage.value > 0) {
        currentPage.value--
    }
}

function nextPage() {
    if (currentPage.value < lastPage.value) {
        currentPage.value++
    }
}

function fetchRecipe(id) {
    // console.log('clicked on a recipe');
    state.updateRecipeID(id);
}

</script>

<template>
    <Spinner class="w-1/3 bg-white" v-if="state.store.loadingRecipes" />
    <div class="w-1/3 bg-white" v-else-if="state.store.results === 0">
        <div class="norecipes max-w-2xl mx-auto flex px-16 py-20">
            <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="recipe__icon h-12 w-12 text-accent mr-4" />
            <p class="text-3xl font-bold leading-relaxed">No recipes found for your query! Please try again ;)</p>
        </div>
    </div>
    <div v-else class="recipes w-1/3 bg-white py-12 flex flex-col">
        <!-- <div>{{paginatedResults}}</div> -->
        <ul class="recipes__list">
            <RecipeListItem @clickedRecipe="fetchRecipe" v-for="(recipe, index) in paginatedResults"
                :title="recipe.title" :publisher="recipe.publisher" :imageURL="recipe.image_url"
                :recipeID="recipe.id" />
        </ul>
        <div class="pagination mt-auto px-14 flex items-center">
            <button
                v-if="currentPage > 0"
                @click="prevPage"
                class="pagination__button--prev flex items-center text-accent bg-ivory text-[1.3rem] font-semibold py-[0.8rem] px-[1.2rem] rounded-full cursor-pointer hover:bg-mutedivory transition-all duration-200">
                <font-awesome-icon icon="fa-solid fa-arrow-left" class="mr-5" />
                <span>Page {{currentPage}}</span>
            </button>
            <button
                @click="nextPage"
                v-if="currentPage < lastPage - 1"
                class="pagination__button--next ml-auto flex items-center text-accent bg-ivory text-[1.3rem] font-semibold py-[0.8rem] px-[1.2rem] rounded-full cursor-pointer hover:bg-mutedivory transition-all duration-200">
                <span>Page {{currentPage + 2}}</span>
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-5" />
            </button>
        </div>
    </div>
</template>

<style scoped>
.recipe-listitem__pic {
    backface-visibility: hidden;
}
</style>