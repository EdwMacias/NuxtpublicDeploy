import { defineStore } from "pinia";
export const useRouteStore = defineStore("route", {
    // un objeto que devuelve el estado inicial
    state: () => ({
        rutaActual: "",
    }),
    // acciones que pueden modificar el estado
    actions: {
        // actualiza la ruta actual con la nueva ruta
        actualizarRuta(nuevaRuta) {
            const partesRuta = nuevaRuta.split("/");
            this.rutaActual = partesRuta[1];
        },
    },
});
