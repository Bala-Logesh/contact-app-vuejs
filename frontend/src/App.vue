<template>
  <div class="w-screen h-screen bg-blue-100">
    <Header title="Contact App" />
    <div class="p-6 py-8 md:px-16 lg:px-24 xl:px-64">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>
