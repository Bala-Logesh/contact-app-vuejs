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
                <Contact :contact="contact" @delete-contact="deleteContact" />
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import Contact from './Contact.vue';
import { onMounted, ref } from 'vue';
import { useToast } from 'vue-toastification';

const heading = {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    designation: 'Designation'
}

const apiURL = 'http://localhost:5000/api/contacts'

const contacts = ref([])
const isLoading = ref(true)

const toast = useToast();

const getContacts = async () => {
    try {
        const response = await axios.get(apiURL)
        contacts.value = response.data
    } catch (err) {
        console.log(err)
    } finally {
        isLoading.value = false
    }
}

const deleteContact = async (id) => {
    try {
        if (confirm('Are you sure to delete the contact?')) {
            const response = await axios.delete(apiURL + "/" + id)

            if (response.status == 200) {
                contacts.value = contacts.value.filter(contact => contact._id !== id)
                toast.success("Contact deleted succesfully", {
                    timeout: 2000
                });
            }
        }
    } catch (err) {
        console.log(err)
    }
}

onMounted(() => { getContacts() })
</script>