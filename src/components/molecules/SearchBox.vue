<script setup>
import {ref, inject} from 'vue';
import RoundedButton from '../atoms/RoundedButton.vue'
const searchTerm = ref('');

</script>

<template>
    <div class="my-header__searchbox mx-10 bg-white rounded-full flex focus-within:-translate-y-1">
            <input 
            @keyup.enter="$emit('search', searchTerm)"
            v-model="searchTerm"
            type="text" class="pl-10 rounded-full w-96 focus-visible:outline-none text-4xl text-textdark">
            <RoundedButton @click="$emit('search',searchTerm)" content="Search" iconLeft="fa-solid fa-magnifying-glass" />
        </div>
</template>