<script setup>
defineProps({
  icon: String,
  label: String,
})
</script>

<template>
    <div class="nav__button flex px-6 h-full items-center cursor-pointer">
                <div class="nav__icon">
                    <font-awesome-icon :icon="icon" class="text-4xl mr-3 text-accent" />
                </div>
                <span class="nav__label uppercase text-2xl text-textdark font-bold">{{label}}</span>
            </div>
</template>
