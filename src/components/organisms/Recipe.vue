<script setup>
import { ref, computed, reactive } from 'vue'
import { useRecipes } from '../../stores/store.js'

const { store } = useRecipes();

const servingsOffset = ref(0);

const selectedServings = computed(() => {
    return store.recipe.servings ? store.recipe.servings + servingsOffset.value : 0
}
)

const computedDosage = computed(() => {
    return store.recipe.ingredients.map((ingredient) => {
        let newDosage = { ...ingredient }
        if (newDosage.quantity) {
            newDosage.quantity = newDosage.quantity / store.recipe.servings * selectedServings.value;
        }
        return newDosage
    })


}
)

function decrease() {
    if (selectedServings.value > 1) {
        console.log('decreasing');
        servingsOffset.value--
    }
}

function increase() {
    servingsOffset.value++
}

</script>

<template>
    <div v-if="Object.keys(store.recipe).length > 0 " class="recipe w-2/3 bg-ivory">
        <figure
            class="recipe__fig h-[32rem] relative before:block before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-br before:from-gradient1 before:to-gradient2 before:opacity-60">
            <img class="recipe__img h-full w-full object-cover before:block before:w-full before:h-full"
                :src="store.recipe.image_url" :alt="store.recipe.title">
            <h1
                class="w-[70%] md:w-1/2 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[20%] -skew-y-6 text-5xl uppercase leading-[1.95] text-center text-white font-bold">
                <span class="bg-gradient-to-br from-gradient1 to-gradient2 box-decoration-clone px-8 py-5">
                    {{store.recipe.title}}
                </span>
            </h1>
        </figure>
        <div class="recipe__details flex items-center pt-32 px-32 pb-14">
            <div class="recipe__info text-3xl flex items-center mr-16">
                <font-awesome-icon icon="fa-regular fa-clock" class="mr-4 text-accent h-10 w-10" />
                <span
                    class="recipe__info-data recipe__info-data--minutes font-bold mr-2">{{store.recipe.cooking_time}}</span>
                <span class="recipe__info-text uppercase">minutes</span>
            </div>
            <div class="recipe__info text-3xl flex items-center mr-16">
                <font-awesome-icon icon="fa-solid fa-user-group" class="mr-4 text-accent h-10 w-10" />
                <span class="recipe__info-data recipe__info-data--people font-bold mr-2">{{selectedServings}}</span>
                <span class="recipe__info-text uppercase">servings</span>
                <div class="recipe__info-buttons ml-6">
                    <font-awesome-icon @click="decrease" icon="fa-solid fa-circle-minus"
                        class="mr-4 text-accent h-10 w-10" />
                    <font-awesome-icon @click="increase" icon="fa-solid fa-circle-plus"
                        class="mr-4 text-accent h-10 w-10" />
                </div>
            </div>
            <button
                class="h-16 w-16 bg-gradient-to-br ml-auto from-gradient1 to-gradient2 rounded-full text-white flex items-center justify-center">
                <font-awesome-icon @click="increase" icon="fa-regular fa-bookmark" class="h-10 w-10" />
            </button>
        </div>
        <div class="recipe__ingredients py-20 px-32">
            <h2 class="text-accent uppercase text-center text-4xl font-bold mb-10">Recipe Ingredients</h2>
            <ul class="recipe__ingredient-list grid grid-cols-2">
                <li class="recipe__ingredient" v-for="(ingredient) in computedDosage">{{ingredient}}</li>
            </ul>
        </div>
        <div class="recipe__directions"></div>
    </div>
    <div v-else> WOOPS</div>
</template>