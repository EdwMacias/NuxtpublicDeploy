<template>
  <div>
    <div v-if="!loading">
      <Spinner class="align-items-center vh-100 justify-content-center row m-0" />
    </div>
    <div class="d-flex flex-column min-vh-100" v-if="loading">
      <div class="d-flex mt-2 divider hr">
        <ButtonsButtonUser />
      </div>
      <el-divider></el-divider>
      <div >
        <slot/>
      <div class="flex-fill">
        <slot id="principal" />
      </div>
    </div>
  </div>
  </div>
</template>

<script >

import { reactive, ref } from 'vue';
import { getNavbarUser } from '@/services/Navbar/NavbarService.js'
import { useRouteStore } from '@/stores/route' // importa la tienda de ruta
import { useUsuarioStore } from '~/stores/usuarioStore';


export default {
  async setup() {
    // usa la tienda de ruta
    const store = useRouteStore()
    // obtiene el array de renderizador
    const miArrayProp = ref([])
    // obtiene el estado de carga
    const loading = ref(false)

    // llama al servicio de navbar y actualiza el array de renderizador
    let response = await getNavbarUser().then(response => response)

    if (response === "No autorizado") {
      let usuario = useUsuarioStore()
      usuario.conectado = false;
      usuario.usuario = {};
      usuario.token = "";
      return navigateTo("/auth/login")
    }

    miArrayProp.value = response;
    loading.value = true;

    return {
      // expone las propiedades al template
      miArrayProp,
      loading,
      store
    }
  }
}
</script>

<style>

</style>