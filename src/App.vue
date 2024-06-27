<script setup>
import { RouterLink, RouterView } from 'vue-router'

import HeaderBar from './components/HeaderBar.vue'
import Sidebar from '@/components/Sidebar.vue'
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <!-- <div class="d-flex">
    <sidebar></sidebar>
    <div class="w-100">
      <header-bar></header-bar>
    </div>
    <RouterView />
  </div> -->
  <main>
    <div class="app-container">
      <Sidebar />
      <div class="headers">
        <HeaderBar />
        <div class="line"></div>
        <NavigationBar />
      </div>
      <body>
        
      </body>
    </div>
  </main>
</template>
