<template>
    <DataTable 
      ref="table"
      :options="options1"
      class="display "
      width="100%" >
    </DataTable>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import Select from 'datatables.net-select';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-responsive';
import 'datatables.net-select';
import language from 'datatables.net-plugins/i18n/es-ES.mjs';
import 'jszip';
// import 'pdfmake'; //para pdfs

DataTable.use(DataTablesCore);
DataTable.use(Select);


//Opcion de mostrar filas en la parte arriba

const options1 = {
  dom: 'lBftip',
  responsive: true,
  language: language, 
  select: true,
  scrollY: 412,
};

//No muestra las opciones de ver lista de filas 
const options = {
  dom: 'Bftip',
  responsive: true,
  language: language,
  select: true,
};

const table = ref();

</script>

<style>
@import 'datatables.net-dt';
@import 'datatables.net-responsive-dt';

/* Estilo de boton mostrar filas */
.dataTables_length{
    margin-right: 2%;
}

/* Estilo de botones de exportar copiar y csv  */
.buttons-copy, 
.buttons-csv{
  color: #272525;
  background-color: #c0c6ce;
  border-color: transparent;
  border-radius: 4px;
}
.buttons-copy:hover, 
.buttons-csv:hover {
  color: #fff;
  background-color: #575454;
  border-color: transparent;
}
</style>