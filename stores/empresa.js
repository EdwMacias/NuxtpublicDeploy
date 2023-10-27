import { defineStore } from 'pinia'

export const useEmpresaStore = defineStore('empresa', {
    state: () => ({
        id: 0,
        razon_social: "",
        conectado: false,
        empresa_token: ""
    }),
    getters: {
        getId(state) {
            return state.empresa;
        },
        getRazonSocial(state) {
            return state.razon_social;
        },
        getConectado(state) {
            return state.conectado;
        },
        getEmpresaToken(state) {
            return state.empresa_token;
        }
    },
    persist: true,
})