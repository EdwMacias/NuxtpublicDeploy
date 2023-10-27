<template>
  <div class="container">
    <h4 class="mt-2 text-white">GESTIÓN DE USUARIOS</h4>
    <ModalUsuario />
    <table id="tabla" class="table align-middle table-light table-bordered">
      <thead class="table-light text-center">
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>e-mail</th>
          <th>Grupo empresarial</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody class="table-dark text-center">
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.grupoEmpresarial }}</td>
          <td>
            <button
              type="button"
              @click="actualizarEstado(usuario.id)"
              class="btn"
              :style="{
                'background-color':
                  usuario.estado === 'ACTIVO' ? '#30DD19' : '#c1c1c1',
              }"
              id="btnState"
            >
              {{ usuario.estado }}
            </button>
          </td>
          <td>
            <ButtonsButtonModal @click="crearAsignacion" />
            crear
            <ButtonsButtonModal @click="actualizarUsuario(usuario.id)" />
            <ButtonsButtonEdit @click="" />
            <ButtonsButtonDelete @click="borrarUsuario(usuario.id)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
definePageMeta({
    middleware: 'auth',
})

import { ref, onMounted } from "vue";
import AsignarUsuarios from "@/services/configuracion/usuarios/asignarUsuarios";

export default {
  name: "usuarios",
  setup() {
    const asignarUsuarios = new AsignarUsuarios();
    const usuarios = ref([]);
    const nuevoUsuario = ref({
      name: "usuario diego",
      email: "usuariosDiegoj@outlook.com",
      password: "123",
      companies_id: [28, 32],
    });
    const editadoUsuario = ref({
      name: "updatesssss diego frontend",
      email: "updateDiegoFrontend@outlook.com",
      password: "123",
      companies_id: [30, 33],
    });

    onMounted(async () => {
      await obtenerAdministradores();
    });

    const obtenerAdministradores = async () => {
      usuarios.value = await asignarUsuarios.obtener();
      console.log(usuarios.value);
    };

    const crearAsignacion = async () => {
      const usuarioCreado = await asignarUsuarios.crear(nuevoUsuario.value);

      if (usuarioCreado.peticion) {
        //EXITOSO
        await obtenerAdministradores();
      }
      //FALLO
    };

    const actualizarUsuario = async (id) => {
      const nuevoUsuario = await asignarUsuarios.actualizarUsuario(
        id,
        editadoUsuario.value
      );

      if (nuevoUsuario.peticion) {
        //EXITOSO
        await obtenerAdministradores();
      }
      //FALLO
    };

    const actualizarEstado = async (id) => {
      const response = await asignarUsuarios.actualizarEstado(id);
      if (response.peticion) {
      
        await obtenerAdministradores();
        //EXITOSO
      }
      //FALLO
    };
    const borrarUsuario = async (id) => {
      const response = await asignarUsuarios.borrarUsuario(id);
      if (response.peticion) {
        await obtenerAdministradores();
        //EXITOSO
      }
      // FALLO
    };

    return {
      usuarios,
      nuevoUsuario,
      editadoUsuario,
      actualizarUsuario,
      crearAsignacion,
      actualizarEstado,
      borrarUsuario,
    };
  },
};
</script>

<style></style>
