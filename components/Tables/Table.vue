<template>
    <div class="container">
      <div class="row d-flex">
        <div class="col-6 pt-2">
          <label class="mostrarFilas" for="rows">Mostrar filas: </label>
          <select v-model="displayedRows" id="rows" v-on:change="updateRows" >
            <option v-for="option in rowOptions" :value="option" :key="option">{{ option }}</option>
          </select>
        </div>
        <div class="col text-end pb-2">
          <BusquedaBuscar />
        </div>
      </div> 
      <div class="container-scroll">
        <table  id="tabla-servicios" class="table table-dark text-center table-hover table-responsive">
          <tbody>
            <slot /> 
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            selectedRows: 10,
            rowOptions: [10, 25, 50, 100, 'Todos'],
        };
    },
    computed: {
        displayedRows: {
            get() {
                return this.selectedRows === Number.MAX_SAFE_INTEGER ? 'Todos' : this.selectedRows;
            },
            set(value) {
                this.selectedRows = value === 'Todos' ? Number.MAX_SAFE_INTEGER : Number(value);
            },
        },
    },
    methods: {
        updateRows() {
            this.$emit('update:rows', this.selectedRows);
        },
    },
};
</script>

<style>
/*Diseño del scroll*/
.container-scroll{
  overflow: auto; 
  height: 30rem; 
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: #8b8f8b;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #22323d;
}
/* Diseño de la tabla */
table {
  width: 100%;
  border-collapse: collapse;
}
table th {
  /* border-radius: 2px; */
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #d1e6d1;
  color: rgb(7, 6, 6);
  position: sticky;
  position: -webkit-sticky; /* para Safari navegador web desarrollado por Apple*/
  top: 0;
  z-index: 1; /* para que los th queden por encima de los td */
}
table td {
  padding: 8px;
}
/* Mostrar filas */
label {
  color: #1d1a1a;
  margin-right: 1%;
  margin-bottom: 1%;
}
.mostrarFilas {
  color: #ece4e4;
}
</style>