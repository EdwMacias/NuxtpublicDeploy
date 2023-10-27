import { useUsuarioStore } from "~/stores/usuarioStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const usuarioStore = useUsuarioStore();

    
    if (!usuarioStore.getConectado) {
        return;
    }

    return navigateTo("/");
});