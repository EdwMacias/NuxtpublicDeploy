import { defineStore } from 'pinia'

export const useUsuarioStore = defineStore('usuario', {
  state: () => ({
    conectado: false,
    usuario: {},
    token: "",
    empresas: {}
  }),
  getters: {
    getConectado(state) {
      return state.conectado;
    },
    getUsuario(state) {
      return state.usuario;
    },
    getToken(state) {
      return state.token;
    },
    getEmpresas(state) {
      return state.empresas
    }
  },
  persist: true,
});