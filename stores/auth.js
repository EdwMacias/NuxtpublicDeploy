import { ref } from 'vue';
import { defineStore } from 'pinia';
import { api } from '@/services/api.js';
import Cookies from "js-cookie";
import { useUsuarioStore } from './usuarioStore'
import jwtDecode from 'jwt-decode';

export const useAuthStore = defineStore('auth', () => {

    const token = ref(null);

    const setUserlogged = (userLogged) => {
        return Cookies.set("userLogged", userLogged);
    }

    const getUserLogged = () => {
        return Cookies.get("userLogged");
    }

    const login = async (credenciales) => {
        try {
            const response = await api.post('/login', credenciales).catch(err => console.log(err));
            const { token } = response.data;

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            const { data } = await api.get('/admin_user/T4/companiesUsers')

            const decodedUsuario = jwtDecode(token);

            const store = useUsuarioStore();

            store.conectado = true;
            store.usuario = decodedUsuario;
            store.token = token;
            store.empresas = data;
            
            console.log(store.token);
            console.log(store.empresas);

            return true;

        } catch (error) {
            return error.response ? error.response.data.message : 'Error desconocido';
        }
    }

    return { token, login, setUserlogged, getUserLogged };
});
