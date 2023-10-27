<script>


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useEmpresaStore } from '~/stores/empresa';
import { useUsuarioStore } from '~/stores/usuarioStore';
import { SetEmpresa } from '~/services/Users/SeleccionEmpresa';

// const empresas = ref([]);


export default {

  data() {
    return {
      empresas: ref([])
    }
  },
  methods: {
    async seleccionEmpresa(empresa) {
      const storeEmp = useEmpresaStore();
      storeEmp.id = empresa.companieId;
      storeEmp.conectado = true;
      storeEmp.razon_social = empresa.razonSocial;
      await SetEmpresa()
      return navigateTo('/');
    }
  },
  mounted() {
    const usuario = useUsuarioStore();
    this.empresas = usuario.getEmpresas;
  }
}
</script>

<template>
  <div class="container">

    <h5 style="display: flex; justify-content: center;"><strong>Deslice para cambiar se empresa</strong></h5>

    <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{ clickable: true, }" :navigation="true" class="mySwiper">

      <swiper-slide v-for="empresa in empresas" @click="seleccionEmpresa(empresa)">
        <nuxt-link><img :src="empresa.image" :alt="empresa.razonSocial"></nuxt-link>
      </swiper-slide>

    </swiper>

  </div>
</template>

<style scoped>
@import '@/assets/styles/swiper.css';
</style>