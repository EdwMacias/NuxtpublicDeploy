<template>
<nav class="navbar navbar-expand-lg">
    <Logo class="mx-2" /><LogoTitulo class="mx-2"/>
    <div class="container-fluid ">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Inicio</nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Modulos
            </a>
            <ul class="dropdown-menu">
              <li v-for="renderizador in renderizador">
                <NuxtLink class="dropdown-item" :to="`/${renderizador.ruta}`" v-on:click="GetMenusNavbar(renderizador.modulos)"><img :src="renderizador.logo" alt=""> {{ renderizador.modulos }}</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown" v-for="menu in menus">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ menu.menus }}</a>
            <ul class="dropdown-menu">
              <li v-for="submenus in menu.submenus" class="position-relative">
                <a class="dropdown-item dropdown-toggle">{{ submenus.descripcion_submenu }}</a>
                <ul class="dropdown-menu">
                  <li v-for="vistas in submenus.vistas">
                    <NuxtLink class="dropdown-item" :to="`/${vistas.ruta_vista}`">{{ vistas.descripcion_vista }}</NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <ColorModePicker /> <ButtonsButtonUser class="ms-2"/>
  </nav>
</template>

<script>
import { getNavbar } from '@/services/Navbar/NavbarService.js'

export default {
  props: {
    renderizador: {
      type: Array
    },
    modulo: {
      type: String
    }
  },
  data() {
    return {
      menus: ref(),
      // navTest: this.$colorMode.preference,
    }
  },
  methods: {
    async GetMenusNavbar(modulo) {
      let modulos = await getNavbar()
      modulos.forEach(element => {
        if (element.nombre_modulo == modulo) {
          this.menus = element.menu;
        }
      });
    },
  },
  async mounted() {
    const partesRuta = this.$route.path.split('/');
    this.GetMenusNavbar(partesRuta[1]);
  },
  // watch: {
  //   '$route.path': function (newPath) {
  //     // Cuando la ruta cambia, actualizamos rutaActual
  //     const partesRuta = newPath.split('/');
  //     this.rutaActual = partesRuta[1];
  //   }
  // },
}
</script>

<style scoped>@import '@/assets/styles/navbar.css';</style>