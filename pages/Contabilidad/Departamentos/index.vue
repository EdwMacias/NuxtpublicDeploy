<template>
  <div class="flex-fill">
    <div class="container">
      <h5 class="titulos-tables">Departamentos</h5>
    </div>
    <TablesTable v-model:rows="selectedRows"> 
      <table>
        <thead>
            <th>Código</th>
            <th>Descripción</th>
        </thead>
        <tbody >
         <tr v-for="departamento in departamentos.slice(0, selectedRows)" :key="departamento.id" >
            <td>{{ departamento.codigo }}</td>
            <td>{{ departamento.descripcion }}</td>
          </tr>
        </tbody>
      </table>
    </TablesTable>
  </div>
</template>

<script>
import { api } from '@/services/api.js';
import { ref, onMounted } from 'vue'; 
import auth from '~/middleware/auth';

definePageMeta({
  middleware: auth
});

export default {
    name: 'Tabla departamentos',
    setup() {
        const selectedRows = ref(10);
        const departamentos = ref([]); // Utiliza ref para crear una variable reactiva
        
        onMounted(async () => {
            try {
                const response = await api.get('/modulo_contabilidad/departamentos/show');
                departamentos.value = response.data; // Asigna los datos a departamentos.value
            } catch (error) {
                console.error(error);
            }
        });
        return {
            selectedRows, departamentos
        };
    },

};
</script>