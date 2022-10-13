<script setup>
import {ref, inject} from 'vue';
const searchTerm = ref('');

</script>

<template>
    <div class="my-header__searchbox mx-10 bg-white rounded-full flex focus-within:-translate-y-1">
            <input 
            @keyup.enter="$emit('search', searchTerm)"
            v-model="searchTerm"
            type="text" class="pl-10 rounded-full w-96 focus-visible:outline-none text-4xl text-textdark">
            <button
                @click="$emit('search',searchTerm)"
                class="py-6 px-16 font-bold flex rounded-full bg-gradient-to-br border-none hover:border-none hover:scale-105 transition-all duration-200 from-gradient1 to-gradient2 text-2xl text-white">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-4xl mr-3" />
                <span class="hidden sm:block">SEARCH</span>
            </button>
        </div>
</template>