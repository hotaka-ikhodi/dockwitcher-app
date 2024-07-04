<script setup>
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';
import DwTable from './DwTable.vue';
import Pagination from './Pagination.vue';

// Define las refs para items y headers
const items = ref([]);
const currentPage = ref(1);
const totalPages = ref(0);
const itemsPerPage = ref(10); // Defino cuántos elementos deseas mostrar por página

// Función para obtener datos de la API
const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/conductores');
    items.value = response.data; // Asume que la API devuelve un array de items
    calculateTotalPages();
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};

// Función para calcular el total de páginas
const calculateTotalPages = () => {
  const totalItems = items.value.length;
  totalPages.value = Math.ceil(totalItems / itemsPerPage.value);
};

// Funcion que calcula los items a mostrar en la tabla para la pagina actual
const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return items.value.slice(startIndex, endIndex);
});

const updateCurrentPage = (page) => {
  currentPage.value = page;
};

// Llama a fetchData cuando el componente se monte
onMounted(fetchData);
</script>

<template>
  <div>
    <!-- Paso como slots para items los items que se van a mostrar en la tabla para la pagina actual -->
    <DwTable :items="displayedItems" >
        <template v-slot:header>
            <th>Nombre</th>
            <th>Identificacion</th>
            <th>Licencias</th>
            <th>Categoria</th>
            <th>Caducidad</th>
          </template>
          <template v-slot="{ item }">
            <td>{{ item.nombre }}</td>
            <td>{{ item.identificacion }}</td>
            <td>{{ item.licencia }}</td>
            <td>{{ item.categoria }}</td>
            <td>{{ item.fechaCaducidad }}</td>
          </template>
    </DwTable>
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @update:currentPage="updateCurrentPage"/>

  </div>
</template>