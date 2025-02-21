<template>
    <div>
        <h1 class="text-xl" v-if="isLoading">
            Fetching Data....
        </h1>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:block">
            <div class="hidden lg:block">
                <Contact :contact="heading" isHeading />
            </div>
            <div v-for="contact in contacts" :key="contact.name" class="flex justify-center">
                <Contact :contact="contact" />
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import Contact from './Contact.vue';
import { ref } from 'vue';

const heading = {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    designation: 'Designation'
}

const apiURL = 'http://localhost:5000/api/contacts'

const contacts = ref([])
const isLoading = ref(true)

const getcontacts = async () => {
    try {
        const response = await axios.get(apiURL)
        contacts.value = response.data
    } catch (err) {
        console.log(err)
    } finally {
        isLoading.value = false
    }
}

getcontacts()
</script>