<script setup>
defineProps({
    iconLeft: String,
    iconRight: String,
    content: String,
    url: String
});
</script>
<template>
    <button v-if="!url"
        class="py-6 px-16 font-bold flex rounded-full bg-gradient-to-br border-none hover:border-none hover:scale-105 transition-all duration-200 from-gradient1 to-gradient2 text-2xl text-white">
        <font-awesome-icon v-if="iconLeft" :icon="iconLeft" class="text-3xl mr-5" />
        <span class="hidden sm:block uppercase">{{content}}</span>
        <font-awesome-icon v-if="iconRight" :icon="iconRight" class="text-3xl ml-5" />
    </button>

    <a v-else
        :href="url"
        target="_blank"
        class="hover:text-white py-6 px-16 font-bold flex rounded-full bg-gradient-to-br border-none hover:border-none hover:scale-105 transition-all duration-200 from-gradient1 to-gradient2 text-2xl text-white">
        <font-awesome-icon v-if="iconLeft" :icon="iconLeft" class="text-3xl mr-5" />
        <span class="hidden sm:block uppercase">{{content}}</span>
        <font-awesome-icon v-if="iconRight" :icon="iconRight" class="text-3xl ml-5" />
    </a>
</template>