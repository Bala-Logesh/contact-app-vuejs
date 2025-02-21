<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-2xl text-bold text-center mb-13">Add a new contact</h1>
        <form class="flex flex-col gap-8 min-w-xl" @submit.prevent="saveContact">
            <div class="flex flex-col gap-4">
                <label for="name">Name</label>
                <input type="text" v-model="contact.name" class="bg-stone-50 rounded-lg p-4" id="name" name="name">
            </div>

            <div class="flex flex-col gap-4">
                <label for="email">Email</label>
                <input type="email" v-model="contact.email" class="bg-stone-50 rounded-lg p-4" id="email" name="email">
            </div>

            <div class="flex flex-col gap-4">
                <label for="phone">Phone</label>
                <input type="tel" v-model="contact.phone" class="bg-stone-50 rounded-lg p-4" id="phone" name="phone">
            </div>

            <div class="flex flex-col gap-4">
                <label for="designation">Designation</label>
                <input type="text" v-model="contact.designation" class="bg-stone-50 rounded-lg p-4" id="designation"
                    name="designation">
            </div>

            <button class="bg-indigo-700 text-white rounded-lg p-4 cursor-pointer" type="submit">Submit</button>
        </form>
    </div>

</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useToast } from "vue-toastification";

const contact = ref({
    name: '',
    email: '',
    phone: '',
    designation: ''
})

const toast = useToast();

const apiURL = 'http://localhost:5000/api/contacts'

const saveContact = async () => {
    const { name, email, phone, designation } = contact.value

    if (!name || !email || !phone || !designation) {
        toast.error("All the fields are required", {
            timeout: 2000
        })
        return
    }

    try {
        const response = await axios.post(apiURL, contact.value)

        if (response.status == 201) {
            contact.value.name = ''
            contact.value.email = ''
            contact.value.phone = ''
            contact.value.designation = ''

            toast.success("Contact added succesfully", {
                timeout: 2000
            });
        }
    } catch (err) {
        console.log(err)
    }
}
</script>