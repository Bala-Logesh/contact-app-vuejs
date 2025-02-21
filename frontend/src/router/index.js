import { createRouter, createWebHistory } from 'vue-router'
import ContactList from '@/components/ContactList.vue'
import AddContact from '@/components/AddContact.vue'
import EditContact from '@/components/EditContact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'contactList',
      component: ContactList,
    },
    {
      path: '/create-contact',
      name: 'addContact',
      component: AddContact,
    },
    {
      path: '/contact/:id?',
      name: 'editContact',
      component: EditContact,
    }
  ],
})

export default router
