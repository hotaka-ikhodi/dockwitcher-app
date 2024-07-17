<script setup>
import { ref } from 'vue';
import { format } from 'date-fns';
import DwTable from '@/components/DwTable.vue';
import TestPagination from '@/components/TestPagination.vue';

const currentPage = ref(1); // pageable.pageNumber
const totalItems = ref(0);  // totalElements
const totalPages = ref(0); // totalPages
const items = ref([]); // content
const pageSize = ref(10); // pageable.pageSize


const updateCurrentPage = (page) => {
  currentPage.value = page;
};

const updatePageSize = (event) => {
  pageSize.value = parseInt(event.target.value);
};

const updateTotalPages = (pages) => {
  totalPages.value = pages;
};

const updateItems = (content) => {
  items.value = content;
};

const updateTotalItems = (cantItems) => {
  totalItems.value = cantItems;
};

const formatDate = (date) => {
  // Verifica si date es null
  if (!date) {
    return "N/D"; 
  }
  return format(new Date(date), 'dd/MM/yyyy');
};

</script>

<template>
  <div class="dw-table-container ">
    <div class="p-3 d-flex justify-content-between">
      <p class="fs-4 fw-medium m-0">Lista Conductores</p>
      <TestPagination :pageSize="pageSize" @update:pageSize="updatePageSize" @update:items="updateItems" @update:totalItems="updateTotalItems" @update:currentPage="updateCurrentPage" @update:totalPages="updateTotalPages"/>
    </div>
    <div class="divider"></div>
    <div class="p-3 "> 
      <div class="dw-table-controls d-flex align-items-center gap-2">
        <!-- @change="updateItemsPerPage" -->
        <select @change="updatePageSize" id="itemsPerPage" class="py-1 px-1">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <label for="itemsPerPage">Por página</label>
        <input type="text" placeholder="Buscar..." class="search-input ms-auto px-2" />
      </div>
    </div>
    <div class="divider"></div>
    <!-- Paso como slots para items los items que se van a mostrar en la tabla para la pagina actual -->
    <DwTable :items >
      <template v-slot:header>
        <th class="p-3">Nombre</th>
        <th class="p-3">Identificacion</th>
        <th class="p-3">Licencias</th>
        <th class="p-3">Categoria</th>
        <th class="p-3">Caducidad</th>
      </template>
      <template v-slot="{ item }">
        <td class="p-3">{{ item.nombre }}</td>
        <td class="p-3">{{ item.identificacion }}</td>
        <td class="p-3">{{ item.licencia }}</td>
        <td class="p-3">{{ item.experiencia.categorias.map(categoria => categoria.tipo).join(', ') }}</td>
        <td class="p-3">{{ formatDate(item.fechaCaducidad) }}</td>
      </template>
    </DwTable>
    <div class="d-flex justify-content-between align-items-start px-3 pb-3">
      <span>De {{ (items.length * currentPage) - items.length + 1 }} a {{ items.length * currentPage }} de {{ totalItems }} registros</span>
    </div>
  </div>
</template>