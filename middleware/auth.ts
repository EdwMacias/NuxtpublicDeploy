import { api } from "~/services/api";
import { useUsuarioStore } from "~/stores/usuarioStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const usuarioStore = useUsuarioStore();
    const tiempoActual = Math.floor(Date.now() / 1000);

    if (usuarioStore.getConectado) {

        const usuario = usuarioStore.getUsuario;
        // console.log(usuario);
        
        if (usuario.exp < tiempoActual) {
            usuarioStore.conectado = false;
            usuarioStore.usuario = {};
            usuarioStore.token = "";
            return navigateTo("/auth/login");
        }

        api.defaults.headers.common['Authorization'] = `Bearer ${usuarioStore.token}`;
    } else {
        return navigateTo("/auth/login")
    }

});