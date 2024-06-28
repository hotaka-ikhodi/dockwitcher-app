<template>
  <div>
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-end">
        <li class="page-item">
          <button
            class="page-link bi bi-chevron-bar-left"
            @click="changePage(1)"
            :disabled="currentPage === 1"
            style="border: none; border-radius: 50%; color: #333"
          ></button>
        </li>

        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button
            class="page-link bi bi-chevron-compact-left"
            @click="changePage(currentPage - 1)"
            :disabled="currentPage === 1"
            style="border: none; border-radius: 50%; color: #333"
          ></button>
        </li>

        <li
          class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: page === currentPage }"
        >
          <button
            class="page-link"
            @click="changePage(page)"
            :style="{
              'background-color': page === currentPage ? 'rgb(246, 55, 93)' : 'transparent',
              color: page === currentPage ? '#fff' : '#333'
            }"
            style="border: none; border-radius: 50%"
          >
            {{ page }}
          </button>
        </li>

        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button
            class="page-link bi bi-chevron-compact-right"
            @click="changePage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            style="border: none; border-radius: 50%; color: #333"
          ></button>
        </li>

        <li class="page-item">
          <button
            class="page-link bi bi-chevron-bar-right"
            @click="changePage(totalPages)"
            :disabled="currentPage === totalPages"
            style="border: none; border-radius: 50%; color: #333"
          ></button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import '@/assets/scss/components/_pagination.scss'
const props = defineProps({
  currentPage: Number,
  totalPages: Number
})

const emits = defineEmits(['update:currentPage'])

function changePage(page) {
  emits('update:currentPage', page)
}
</script>
