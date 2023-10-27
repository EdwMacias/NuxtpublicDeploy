<template>
  <div class="container ">
    <nuxt-link to="/">Inicio</nuxt-link>
    <nuxt-link to="/">Directo</nuxt-link>
    <h1>Empresas</h1>
    <div class="container" v-for="empresa in listaEmpresasT4">
      <div class="container-sm d-flex">
        <nuxt-link to="/" @click="seleccionEmpresa(empresa.companieId)">
          <img  :src="empresa.image" alt="">{{ empresa.razonSocial }}</nuxt-link>
      </div>
    </div>  
  </div>
</template>

<script setup>
import { useUsuarioStore } from '~/stores/usuarioStore';
const listaEmpresasT4 = ref([]);
import { api } from '~/services/api';
onMounted (async () => {
  const {data} = await api.get('/admin_user/T4/companiesUsers')
  console.log({data});
  listaEmpresasT4.value = data;
})
const seleccionEmpresa = (idEmpresa) => {
    console.log(idEmpresa);
    useUsuarioStore().seleccionarEmpresa(idEmpresa);
  }
</script>

<style scoped>
img{
  width: 300px;
}
</style>
<!-- <style scoped>
.container {
  display: flex;
  overflow-x: auto;}

img {
  width: 300px;
  height: 180px;
  border-radius: 10px;
}
@media (max-width: 768px) {
  .swiper-slide{
    text-align: center;
  }
  img {
  margin-top: 20%;
  width: 250px;
  height: 120px;
  border-radius: 10px;
  }
} -->
<!-- </style> -->
