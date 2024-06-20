<script setup>
import { RouterLink, RouterView } from 'vue-router'

import HeaderBar from './components/HeaderBar.vue'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="d-flex">
    <sidebar></sidebar>
    <div class="w-100">
      <header-bar></header-bar>
      <RouterView />
    </div>
  </div>
</template>
