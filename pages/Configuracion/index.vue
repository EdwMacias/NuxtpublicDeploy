<template>
  <div>
    <h2> Administración de usuarios </h2>
    <TablesDataTable :data="data"  :columns="columns" />
    <ButtonsButtonDelete/>
  </div>
</template>

<script setup lang="ts" >

import { ref, onMounted,h } from 'vue';
import { api } from '~/services/api';
import ButtonsButtonDelete from '~/components/Buttons/Button-delete.vue';

definePageMeta({
    middleware: 'auth',
});

const data = ref([]);
const columns = [
  { data: 'name', title: 'Nombre' },
  { data: 'email', title: 'Correo Electrónico' },
  { data: 'estado', title: 'Estado' },
  { data: 'acciones', title: 'Acciones',
  render: (data) => {
      return h(ButtonsButtonDelete, { rowData: data });
    },
  }, 
];

onMounted(function () {
  getInformacion();
});

const getInformacion = async () => {
  const id = 28;
  try {
      const res = await api.get(`/user/T3/show/${id}`);
      data.value = res.data;
      console.log(data.value);
  } catch (error) {
      console.error(error);
  }
};
</script>