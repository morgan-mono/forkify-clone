<script setup>
import he from 'he';

defineProps({
    title: String,
    publisher: String,
    imageURL: String,
    recipeID: String
});
</script>

<template>
    <li class="recipe-listitem">
        <a @click="$emit('clickedRecipe',recipeID)" class="recipe-listitem__link py-5 px-12 flex items-center transition-all duration-300 border-r border-white hover:bg-ivory hover:-translate-y-1"
            :href="`#${recipeID}`">
            <figure
                class="recipe-listitem__pic rounded-full mr-8 overflow-hidden grow-0 basis-24 h-24 relative before:content-[''] before:h-full before:w-full before:absolute before:bg-gradient-to-br before:from-gradient1 before:to-gradient2 before:top-0 before:left-0 before:opacity-40">
                <img class="block w-full h-full object-cover transition-all duration-300"
                    :src="imageURL"
                    :alt="he.decode(title)">
            </figure>
            <div class="recipe-listitem__data grid grid-cols-[1fr_2rem] gap-y-px">
                <h4
                    class="recipe-listitem__title font-semibold text-2xl uppercase text-accent col-span-full max-w-sm whitespace-nowrap overflow-ellipsis overflow-hidden">
                    {{he.decode(title)}}</h4>
                <p class="recipe-listitem__publisher text-lg font-semibold uppercase text-textmuted">{{publisher}}</p>
            </div>
        </a>
    </li>
</template>

<style>

</style>