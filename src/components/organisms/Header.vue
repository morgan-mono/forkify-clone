<script setup>
import NavButton from "../molecules/NavButton.vue";
import SearchBox from "../molecules/SearchBox.vue";



</script>

<template>
    <header class="my-header h-40 px-10 bg-ivory flex justify-around items-center">
        <div class="logo mr-10 shrink-0">
            <img class="h-20" src="../../assets/logo.png" alt="">
        </div>
        <SearchBox />
        <div class="nav mx-10 flex h-full">
            <NavButton icon="fa-regular fa-pen-to-square" label="add recipe" />
            <NavButton icon="fa-regular fa-bookmark" label="bookmarks" />
        </div>
    </header>
</template>