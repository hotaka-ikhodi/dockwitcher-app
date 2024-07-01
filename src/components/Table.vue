<template>
  <table class="table">
    <thead>
      <tr>
        <!-- Recorro array headers y creo un <th> por cada elemento -->
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>
    </thead>

    <tbody>
      <!-- Recorro array 'paginatedRows' que contiene la cantidad de elementos por pagina y creo una fila <tr> por cada elemento -->
      <tr v-for="(row, rowIndex) in paginatedRows" :key="rowIndex">
        <!----------------  PINTAR CADA CON LOS ATRIBUTOS CORRESPONDIENTES AL CONDUCTOR ------------------ Modificar en base al JSON correspondiente al fetch para /drivers   -->
        <td>{{row.nombre}}</td>
        <td>{{row.identificacion}}</td>
        <td>{{row.licencia}}</td>
        <td>{{row.categoria}}</td>
        <td>{{row.fechaCaducidad}}</td>
      </tr>
    </tbody>

    <!-- Paso currentPage y totalPages como props al componente Pagination -->
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @update:currentPage="updateCurrentPage" />

  </table>
</template>



<script set>
import axios from 'axios';
import Pagination from './Pagination.vue';

export default {
  components: {
    Pagination
  },

  props: {
    /* props => propiedades que el componente espera recibir. Con props puedo pasar datos de un componente padre al componente hijo*/
    headers: {
      type: Array,
      default: () => ["Nombre", "Identificacion", "Licencias", "Categoria", "Caducidad"] 
    }
  },

    // Defino rows, currentPage y rowsPerPage como una variable locar que puedo modificar, en lugar de ser una propiedad del componente y definirla en props
  data() {
    return {
      rows: [],
      currentPage: 1,
      rowsPerPage: 10
    };
  },
  
    // Calculo totalPages (total de paginas) y paginatedRows (cantidad de Filas que se van a mostrar en la tabla para cada pagina)
  computed: {
    totalPages() {
      return Math.ceil(this.rows.length / this.rowsPerPage);
    },
    paginatedRows() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      const end = start + this.rowsPerPage;
      return this.rows.slice(start, end);
    }
  },


  methods: {
    fetchData() {
      // ---------------- Hace la petición GET -------------------- Modificar por la URL correspondiente con /drivers
      axios.get('http://localhost:8080/conductores')
        .then(response => {
          // Asigna los datos de la respuesta al array 'rows'
          this.rows = response.data;
        })
        .catch(error => {
          console.error("Hubo un error al obtener los datos:", error);
        });
      },
    // Metodo que Actualiza la página actual
    updateCurrentPage(page) {
      this.currentPage = page;
    },
  },
  // Invoco fetchData() cuando el componente se monta 
  mounted() {
    this.fetchData();
  }
}
</script>
