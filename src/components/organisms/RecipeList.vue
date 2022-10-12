<script setup>
import {ref, reactive} from 'vue';
const message = reactive({});
function setMsg() {
    message.value = 'searched bread';
    // console.log('BREEEEAAD')
}
</script>

<template>
    <div>
        <button @click="setMsg()" class="bg-gray-300 text-black px-3 border-2 border-black">SEARCH BREAD</button>
        <ul>
            <li>{{message.value}}</li>
        </ul>
    </div>
</template>