<script setup>
import NavButton from "../molecules/NavButton.vue";

</script>

<template>
    <header class="my-header h-40 px-10 bg-ivory flex justify-around items-center">
        <div class="logo mr-10 shrink-0">
            <img class="h-20" src="../../assets/logo.png" alt="">
        </div>
        <div class="my-header__searchbox mx-10 bg-white rounded-full flex">
            <input type="text" class="pl-10 rounded-full w-96">
            <button
                class="py-6 px-16 font-bold flex rounded-full bg-gradient-to-br border-none hover:border-none hover:scale-105 transition-all duration-200 from-gradient1 to-gradient2 text-2xl text-white">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-4xl mr-3" />
                <span class="hidden sm:block">SEARCH</span>
            </button>
        </div>
        <div class="nav mx-10 flex gap-8 h-full">
            <NavButton icon="fa-regular fa-pen-to-square" label="add recipe" />
            <NavButton icon="fa-regular fa-bookmark" label="bookmarks" />
            <!-- <div class="nav__button flex px-6 h-full items-center cursor-pointer">
                <div class="nav__icon">
                    <font-awesome-icon icon="fa-regular fa-pen-to-square" class="text-4xl mr-3 text-accent" />
                </div>
                <span class="nav__label uppercase text-2xl font-bold">ADD RECIPE</span>
            </div>
            <div class="nav__button flex">
                <div class="icon">
                    <font-awesome-icon icon="fa-regular fa-bookmark" class="text-4xl" />
                </div>
                <div class="label">BOOKMARKS</div>
            </div> -->
        </div>
    </header>
</template>