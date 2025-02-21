<template>
    <div class="flex flex-col max-w-md md:max-w-full gap-4 lg:gap-0 lg:flex-row w-full content-between p-6 md:p-4 mb-4 bg-stone-50 rounded-lg"
        :class="isHeading && 'font-bold'">
        <p class="basis-full">{{ contact.name }}</p>
        <p class="basis-full">{{ contact.email }}</p>
        <p class="basis-full">{{ contact.phone }}</p>
        <p class="basis-full">{{ contact.designation }}</p>
        <p class="lg:basis-sm" v-show="isHeading">Action</p>
        <div class="flex content-between items-center gap-8 lg:basis-sm" v-show="!isHeading">
            <i class="fa fa-edit text-indigo-700 cursor-pointer"></i>
            <i class="fa fa-trash text-red-500 cursor-pointer"></i>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    contact: {
        type: Object,
        required: true
    },
    isHeading: {
        type: [Boolean, false]
    }
})
</script>

<style scoped></style>