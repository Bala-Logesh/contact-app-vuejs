<template>
  <div class="w-screen h-screen bg-amber-50">
    <Header title="Contact App" />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>
