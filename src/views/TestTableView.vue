<script setup>
import { onMounted, ref, computed} from 'vue';
import axios from 'axios';
// import { format } from 'date-fns';
import DwTable from '@/components/DwTable.vue';
import Pagination from '@/components/Pagination.vue';

// Define las refs para items y headers
const items = ref([]);
const currentPage = ref(1);
const totalPages = ref(0);
const itemsPerPage = ref(10); // Defino cuántos elementos deseas mostrar por página

// Función para obtener datos de la API
const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
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
  <div class="dw-table">

    <div class="dw-table-header">
      <p>Lista Conductores</p>
    </div>
    <div class="dw-table-controls">
        <select v-model="itemsPerPage" id="itemsPerPage" >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <label for="itemsPerPage">Por página</label>
        
        <input type="text" placeholder="Buscar..." class="form-control search-input" />
    </div>
    

    <!-- Paso como slots para items los items que se van a mostrar en la tabla para la pagina actual -->
    <DwTable :items="displayedItems" >
        <template v-slot:header>
            <th>UserId</th>
            <th>Titulo</th>
            <th>Cuerpo</th>
            <th>Id</th>
          </template>
          <template v-slot="{ item }">
            <td>{{ item.userId }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
            <td>{{ item.id }}</td>
          </template>
    </DwTable>
    
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @update:currentPage="updateCurrentPage"/>
    <span>Pagina {{ currentPage }} de {{ totalPages }}</span>
  </div>
</template>