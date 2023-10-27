<template>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="dashboardPrincipal" >
      <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasResponsiveLabel"> </h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
        <div class="offcanvas-body">
            <nav class="navbar navbar-expand-lg ">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <ul class="nav flex-column">
                        <div class="row">
                          <div class="col">
                            <select class="nav-link" id="cambioEmpresa" v-show="usuario.tipo_usuario != 1 ">
                                <option value="0" v-for="empresa in listaEmpresasT4" @click="seleccionEmpresa(empresa.companieId)">{{ empresa.razonSocial }}</option>
                            </select>
                          </div>
                          <div class="col">
                            <button class="btn btn-dark"><IconsSwitch/></button>
                          </div>
                        </div>
                    </ul>
                    <ul class="nav flex-column">
                        <nuxt-link to="/" class="nav-link" id="v-pills-home-tab" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Inicio</nuxt-link>
                        <li v-for="renderizador in renderizador">
                        <NuxtLink class="nav-link" :to="`/${renderizador.ruta}`"
                            v-on:click="getMenusNavbar(renderizador.modulos)"><img :src="renderizador.logo" alt="" > {{ renderizador.modulos.toUpperCase() }}
                        </NuxtLink>
                        </li>
                    </ul>
                    <ul class="nav flex-column">
                        <li class="nav-item" v-for="(menu, menuIndex) in menus">
                        <a class="nav-link p-1 rounded menu" data-bs-toggle="collapse" :href="'#secondaryMenu' + menuIndex" role="button" :aria-expanded="false" :aria-controls="'secondaryMenu' + menuIndex">{{ menu.menus }}</a>
                        <div class="collapse" :id="'secondaryMenu' + menuIndex">
                            <ul class="nav flex-column">
                            <li class="nav-item" v-for="(submenus, subIndex) in menu.submenus">
                                <a class="nav-link ms-1 rounded submenu" data-bs-toggle="collapse" :href="'#sublevel' + menuIndex + subIndex" role="button" :aria-expanded="false" :aria-controls="'sublevel' + menuIndex + subIndex">{{ submenus.descripcion_submenu }}</a>
                                <div class="collapse" :id="'sublevel' + menuIndex + subIndex">
                                <ul class="nav flex-column">
                                    <li class="nav-item ms-3" v-for="vistas in submenus.vistas">
                                    <NuxtLink class="nav-item nav-link vista" :to="`/${vistas.ruta_vista}`"> -> {{ vistas.descripcion_vista }}</NuxtLink>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

  <script>
  import { useEmpresaStore } from '~/stores/empresa';
  import { useUsuarioStore } from '~/stores/usuarioStore';  
  import { getNavbar } from '@/services/Navbar/NavbarService.js'
  import { api } from '~/services/api';
  export default {
    props: {
      renderizador: {
        type: Array
      },
      modulo: {
        type: String
      },

    },
    data() {
      return {
        menus: ref(),
        isSubMenuVisible: false,
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
    watch: {
      '$route.path': function (newPath) {
        // Cuando la ruta cambia, actualizamos rutaActual
        const partesRuta = newPath.split('/');
        this.rutaActual = partesRuta[1];
      }
    },
    setup() {
  
    const storeUsuario = useUsuarioStore();
    const usuario = storeUsuario.getUsuario;
    const listaEmpresasT4 = ref([]);
    onMounted(async () => {
      // const { data } = await api.get('/admin_user/T4/companiesUsers')
      // console.log({ data });
      listaEmpresasT4.value = storeUsuario.getEmpresas;
      // console.log(listaEmpresasT4.value)
    });
    return {
      listaEmpresasT4, usuario
    };
  }
}

</script>
<style scoped></style>