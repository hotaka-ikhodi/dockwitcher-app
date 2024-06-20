<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="container">
    <navigation-bar></navigation-bar>
    <RouterView />
  </div>
</template>
