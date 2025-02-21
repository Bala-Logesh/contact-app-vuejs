<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-2xl text-bold text-center mb-13">Add a new contact</h1>
        <form class="flex flex-col gap-8 min-w-xl" @submit.prevent="updateContact">
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

            <button class="bg-indigo-700 text-white rounded-lg p-4 cursor-pointer" type="submit">Update</button>
        </form>
    </div>

</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useToast } from "vue-toastification";

const contact = ref({
    name: '',
    email: '',
    phone: '',
    designation: ''
})

const route = useRoute()
const router = useRouter()

const id = route.params.id

const toast = useToast();

const apiURL = 'http://localhost:5000/api/contacts'

const getcontacts = async () => {
    try {
        const response = await axios.get(apiURL + "/" + id)
        contact.value = response.data
    } catch (err) {
        console.log(err)
    }
}

onMounted(() => {
    getcontacts()
})

const updateContact = async () => {
    const { name, email, phone, designation } = contact.value

    if (!name || !email || !phone || !designation) {
        toast.error("All the fields are required", {
            timeout: 2000
        })
        return
    }

    try {
        const response = await axios.put(apiURL + "/" + id, contact.value)

        if (response.status == 200) {
            contact.value.name = ''
            contact.value.email = ''
            contact.value.phone = ''
            contact.value.designation = ''

            toast.success("Contact updated succesfully", {
                timeout: 2000
            });

            router.push({name: 'contactList'})
        }
    } catch (err) {
        console.log(err)
    }
}
</script>