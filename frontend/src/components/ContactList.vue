<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:block">
        <div class="hidden lg:block">
            <Contact :contact="heading" isHeading />
        </div>
        <div v-for="contact in contacts" :key="contact.name" class="flex justify-center">
            <Contact :contact="contact" />
        </div>
    </div>
</template>

<script setup>
import Contact from './Contact.vue';

const heading = {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    designation: 'Designation'
}

const contacts = [
    {
        name: 'John',
        email: 'john@gmail.com',
        phone: '555-555-5555',
        designation: 'Software Developer'
    },
    {
        name: 'Sara',
        email: 'sara@gmail.com',
        phone: '999-999-9999',
        designation: 'Software Architect'
    },
    {
        name: 'brad',
        email: 'brad@gmail.com',
        phone: '777-777-7777',
        designation: 'Web Developer'
    },
    {
        name: 'abnation',
        email: 'john@gmail.com',
        phone: '333-333-3333',
        designation: 'Web Developer'
    }
]
</script>