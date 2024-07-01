
<template>
  <table class="table">
    <thead>
      <tr>
        <!-- Recorro array headers y creo un <th> por cada elemento -->
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <!-- Recorro array 'rows' y creo una fila <tr> por cada elemento -->
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <!-- Recorro  cada elemento 'row' y creo una celda <td> por cada elemento  -->
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    /* props => propiedades que el componente espera recibir. Con props puedo pasar datos de un componente padre al componente hijo*/
    headers: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    }
  }
}
</script>