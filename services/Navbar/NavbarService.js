import { api } from '@/services/api.js';
import { useUsuarioStore } from '~/stores/usuarioStore';

export const getNavbarUser = async () => {
    let usuario = useUsuarioStore()

    let modulos = await api.get("/navbar/autoConstruccionNavbar/modulos", {
        headers: {
            Authorization: `Bearer ${usuario.getToken}`
        }
    }).then(response => response.data).then(data => data).catch(err => {
        
        console.log(err);
        return err.response.data});

    return modulos;
}

export const getNavbar = async () => {
    let usuario = useUsuarioStore()

    // console.log(usuario.getToken);

    let modulos = await api.get("/navbar/autoConstruccionNavbar", {
        headers: {
            Authorization: `Bearer ${usuario.getToken}`
        }
    }).then(response => response.data).then(data => data).catch(err => err.response.data);

    return modulos;
}

export const moduleSelected = async (modulo) => {

    let modulos = await getNavbar();


    return modulos.map((element) => {
        if (element.nombre_modulo == modulo) {
            return element.menu;
        }
    })
}