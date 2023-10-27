<script>
import { reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/auth.js'; // Importa el módulo de almacenamiento de autenticación
import { useUsuarioStore } from '~/stores/usuarioStore';

export default {
    name: 'Login',

    setup() {
        const authStore = useAuthStore();
        const state = reactive({
            email: ref(''),
            password: ref('')
        })
        const doLogin = async () => {
            const success = await authStore.login({ email: state.email, password: state.password, });

            const storeUsuario = useUsuarioStore();

            const usuario = storeUsuario.getUsuario;

            if (success === true) {

                switch (usuario.tipo_usuario) {
                    case 1:
                        return navigateTo('/');
                    case 2:
                        return navigateTo('/404');
                    case 3:
                        return navigateTo('/SeleccionEmpresa');
                    case 4:
                        return navigateTo('/SeleccionEmpresa');
                }
            }
        }
        return { state, doLogin };
    },
    methods: {
        submitForm() {
            this.doLogin();
        },
    },
};

</script>

<template >
    <div class="abs-center">
        
        <div class="col-md-3" style="">
            <img width="400"  class="img-fluid" src="/ERP/LogoErpComplet.png" alt="Logo-login-completo" >
        </div>
        <div class="col-md-3">
            <form @submit.prevent="submitForm">
                <div class="">
                    <label for="email" class="form-label">Correo Eletrónico</label>
                    <input v-model="state.email" type="email" class="form-control" id="email" aria-describedby="email">
                </div>

                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input v-model="state.password" type="password" class="form-control" id="password">
                </div>

                <div class="mb-3 form-check d-flex justify-content-between align-items-center">
                    <div>
                        <input type="checkbox" class="form-check-input" id="recordarme">
                        <label class="form-check-label" for="recordarme">Recordarme</label>
                    </div>
                    <NuxtLink to="" class="forgot-password">¿Olvidaste tu contraseña?</NuxtLink>
                </div>
                
                <div class="mb-3 form-check d-flex justify-content-between align-items-center">
                    <div></div>
                    <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

form {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.abs-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}


</style>