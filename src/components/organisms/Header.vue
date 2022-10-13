<script setup>
import NavButton from "../molecules/NavButton.vue";
import SearchBox from "../molecules/SearchBox.vue";
import {useRecipes} from '../../stores/store.js'

const state = useRecipes();

function performSearch(n) {
    // console.log('search term:', n);
    state.updateSearchTerm(n);
}

</script>

<template>
    <header class="my-header h-40 px-10 bg-ivory flex justify-around items-center">
        <div class="logo mr-10 shrink-0">
            <img class="h-20" src="../../assets/logo.png" alt="">
        </div>
        <SearchBox @search="performSearch" />
        <div class="nav mx-10 flex h-full">
            <NavButton icon="fa-regular fa-pen-to-square" label="add recipe" />
            <NavButton icon="fa-regular fa-bookmark" label="bookmarks" />
        </div>
    </header>
</template>
