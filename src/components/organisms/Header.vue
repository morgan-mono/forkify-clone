<script setup>
import { ref } from 'vue';
import NavButton from "../molecules/NavButton.vue";
import SearchBox from "../molecules/SearchBox.vue";
import RecipeListItem from "../molecules/RecipeListItem.vue"
import { useRecipes } from '../../stores/store.js'

const state = useRecipes();



function performSearch(n) {
    // console.log('search term:', n);
    state.updateSearchTerm(n);
}

</script>

<template>
    <header class="my-header h-40 px-10 bg-ivory text-textdark flex justify-around items-center">
        <div class="logo mr-10 shrink-0">
            <img class="h-20" src="../../assets/logo.png" alt="">
        </div>
        <SearchBox :searchTerm="state.store.searchTerm" @search="performSearch" />
        <div class="nav mx-10 flex h-full">
            <NavButton icon="fa-regular fa-pen-to-square" label="add recipe" />
            <NavButton icon="fa-regular fa-bookmark" class="peer" label="bookmarks" />
            <div
                class="nav-bookmarks w-[40rem] bg-white absolute z-10 top-40 right-0 invisible opacity-0 hover:visible hover:opacity-100 peer-hover:visible peer-hover:opacity-100 transition-all duration-500 delay-200 py-4">
                <ul class="bookmarks">
                    <li v-if="state.store.bookmarks.length == 0" class="bookmarks__error max-w-[40rem] flex py-20 px-16">
                        <font-awesome-icon icon="fa-solid fa-triangle-exclamation"
                            class="recipe__icon h-12 w-12 text-accent mr-4" />
                        <p class="text-3xl font-bold leading-relaxed">No bookmarks yet. Find a nice recipe and bookmark
                            it ;)</p>
                    </li>
                    <RecipeListItem @clickedRecipe="state.updateRecipeID" v-for="(recipe) in state.store.bookmarks"
                        :title="recipe.title" :publisher="recipe.publisher" :imageURL="recipe.image_url"
                        :recipeID="recipe.id" />
                </ul>
            </div>
        </div>
    </header>
</template>
