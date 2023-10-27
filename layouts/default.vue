<template>
  <div>
    <Navbar :renderizador="miArrayProp" :modulo="store.$state.rutaActual"  />
    <div class="d-flex flex-column " >
      <div class="m-2" id="contenidoPrincipal">
        <slot />
      </div>
    </div>
  </div>
</template>


<script>
import { reactive, ref } from 'vue';
import { getNavbarUser } from '@/services/Navbar/NavbarService.js'
import { useRouteStore } from '@/stores/route' // importa la tienda de ruta
import { useUsuarioStore } from '~/stores/usuarioStore';

export default {
  async setup() {
    let usuario = useUsuarioStore();
    const store = useRouteStore();
    const miArrayProp = ref([]);
    const loading = ref(false);
    let response = await getNavbarUser().then(response => response);
    // console.log(response);
    if (response === "No autorizado") {
    
      usuario.conectado = false;
      usuario.usuario = {};
      usuario.token = "";
      return navigateTo("/auth/login");
    }
    miArrayProp.value = response;
    loading.value = true;
    return { 
      miArrayProp,
      loading,
      store,
    };
  },
}
</script>


<style>
div {
  font-family: Roobert;
}



</style>