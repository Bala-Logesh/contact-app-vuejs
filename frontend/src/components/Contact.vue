<template>
    <div class="flex flex-col max-w-md md:max-w-full gap-4 lg:gap-0 lg:flex-row w-full content-between p-6 md:p-4 mb-4 bg-stone-50 rounded-lg"
        :class="isHeading && ['font-bold', 'bg-transparent']">
        <p class="basis-full">{{ contact.name }}</p>
        <p class="basis-full">{{ contact.email }}</p>
        <p class="basis-full">{{ contact.phone }}</p>
        <p class="basis-full">{{ contact.designation }}</p>
        <p class="lg:basis-sm" v-show="isHeading">Action</p>
        <div class="flex content-between items-center gap-8 lg:basis-sm" v-show="!isHeading">
            <router-link :to="{ name: 'editContact', params: { id: contact._id } }"><i
                    class="fa fa-edit text-indigo-700 cursor-pointer"></i></router-link>
            <i @click="deleteContact" class="fa fa-trash text-red-500 cursor-pointer"></i>
        </div>
    </div>
</template>

<script setup>

import { defineEmits } from "vue";

const props = defineProps({
    contact: {
        type: Object,
        required: true
    },
    isHeading: {
        type: [Boolean, false]
    }
})

const emit = defineEmits(["delete-contact"]);

const deleteContact = () => {
    emit("delete-contact", props.contact._id);
}

</script>

<style scoped></style>