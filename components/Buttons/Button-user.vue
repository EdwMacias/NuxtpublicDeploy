
<template>
  <div >
  <!-- <div class="d-flex gap-4 ms-auto px-3"> -->
    <!-- <div class="btn-group ">
      <button class="boton-user btn btn-primary dropdown-toggle px-4 " type="submit" data-bs-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        {{ usuario.nombre_usuario}} 
      </button>
      <div class="dropdown-menu dropdown-menu-end">
        <NuxtLink class="dropdown-item" to="/">Perfil</NuxtLink>
        <NuxtLink class="dropdown-item" @click="salirSesion" to="/auth/Login">Cerrar Sesión</NuxtLink>
      </div>
    </div> -->
    <el-select  v-model="selected" :placeholder=" usuario.nombre_usuario">
        <el-option  v-for="item in direccion" :key="item.value" :label="item.label" :value="item.to" @click="redireccion(item.to)" />
      </el-select>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { api } from '~/services/api';
import { useUsuarioStore } from '~/stores/usuarioStore';

export default defineComponent({

  
  setup() {
    const direccion = [
      {
        value: 'perfil',
        label: 'Perfil',
        to: '/',
      },
      {
        value: 'Cerrar sesion',
        label: 'Cerrar Sesión',
        to: '/auth/Login',
      }
    ];
    const redireccion = (path) =>{
      if (path === '/auth/Login') {
         salirSesion();
      }
      return navigateTo(path);
      
    }

    const storeUsuario = useUsuarioStore();
    const usuario = storeUsuario.getUsuario;
    // const tipoUser = usuario.tipo;
    const salirSesion = () => {

      api.put("/cerrar");
      delete api.defaults.headers.common['Authorization'];
      storeUsuario.conectado = false;
      storeUsuario.usuario = {};
      storeUsuario.token = "";
      storeUsuario.tipo = "";
    }
    return {
      salirSesion, usuario, direccion, redireccion
    }
  }
});
</script>

<style></style>