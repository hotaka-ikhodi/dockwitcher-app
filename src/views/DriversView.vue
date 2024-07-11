<script setup>
import { onMounted, ref, computed} from 'vue';
import axios from 'axios';
import { format } from 'date-fns';
import DwTable from '@/components/DwTable.vue';
import Pagination from '@/components/Pagination.vue';

// Define las refs para items y headers
const items = ref([]);
const currentPage = ref(1);
const totalPages = ref(0);
const totalItems = ref(0);
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
  totalItems.value = items.value.length;
  totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value);
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

const formatDate = (date) => {
  // Verifica si date es null
  if (!date) {
    return "N/D"; 
  }
  return format(new Date(date), 'dd/MM/yyyy');
};

const updateItemsPerPage = (event) => {
  itemsPerPage.value = parseInt(event.target.value);
  currentPage.value = 1;
  calculateTotalPages();
};

// Llama a fetchData cuando el componente se monte
onMounted(fetchData);
</script>

<template>
  <div class="dw-table-container">
    <div class="p-3">
      <p class="fs-4 fw-medium m-0">Lista Conductores</p>
    </div>
    <div class="divider"></div>
    <div class="p-3 "> 
      <div class="dw-table-controls d-flex align-items-center gap-2">
        <select @change="updateItemsPerPage" id="itemsPerPage" class="py-1 px-1">
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
    <DwTable :items="displayedItems" >
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
      <span>De {{ (currentPage * itemsPerPage) - itemsPerPage + 1 }} a {{ currentPage * itemsPerPage }} de {{ totalItems }} registros</span>
      <Pagination :currentPage="currentPage" :totalPages="totalPages" @update:currentPage="updateCurrentPage"/>
    </div>
  </div>
</template>