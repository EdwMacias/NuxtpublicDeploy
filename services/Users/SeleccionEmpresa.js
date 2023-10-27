import { LOGIN_ASIGNACION_EMPRESA_GET_ENDPOINT } from '~/connections/helpers/endpoint';
import { api } from '../api';
import { useEmpresaStore } from '~/stores/empresa';
import { useUsuarioStore } from '~/stores/usuarioStore';
import jwtDecode from 'jwt-decode';

export const SetEmpresa = async () => {
    
    const usuario = useUsuarioStore();
    const empresa = useEmpresaStore();

    const response = await api.get(`${LOGIN_ASIGNACION_EMPRESA_GET_ENDPOINT}/${empresa.getId}`, {
        Authorization: `Bearer ${usuario.getToken}`
    }).then(response => response).catch(err => err.response.data);

    let { token } = response.data;

    usuario.usuario = jwtDecode(token);
    usuario.token = token;

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
