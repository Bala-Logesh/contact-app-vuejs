<template>
    <nav class="flex flex-row justify-between items-center p-6 md:px-32 lg:px-64 bg-blue-950 text-white">
        <router-link class="text-3xl font-semibold cursor-pointer" to="/">{{ title }}</router-link>
        <router-link class="text-xl hover:underline cursor-pointer" to="create-contact">Create Contact</router-link>
    </nav>
</template>

<script setup>
const props = defineProps({
    title: String,
    required: true
})
</script>