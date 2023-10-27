import { api } from "~/services/api";

class AsignarUsuarios {
    obtener = async () => {
      try {
        const { data } = await api.get("/user/show");
        console.log({ data });
        return data;
      } catch (error) {
        return { peticion: false, respuesta: error };
      }
    };

  crear = async (nuevoUsuario) => {
    try {
      const { data } = await api.post("/user", nuevoUsuario);
      return {
        peticion: data.hasOwnProperty("status") ? false : true,
        respuesta: data,
      };
    } catch (error) {
      return { peticion: false, respuesta: error };
    }
  };

  actualizarUsuario = async (id, usuarioActualizar) => {
    try {
      const {data} = await api.post(`/user/update/${id}`, usuarioActualizar)
      return { peticion: true, respuesta:data };
    } catch (error) {
      const {message}= error.response.data
      return { peticion: false, respuesta:message };
    }
  };

  actualizarEstado = async (id) => {
    try {
      const { data } = await api.put(`/user/updateStatus/${id}`);
      return {
        peticion: data.hasOwnProperty("status") ? false : true,
        respuesta: data,
      };
    } catch (error) {
      return { peticion: false, respuesta: error };
    }
  };

  borrarUsuario = async (id) => {
    try {
      const {data} = await api.delete(`/user/delete/${id}`);
      return {
        peticion: data.hasOwnProperty("status") ? false : true,
        respuesta: data,
      };
    } catch (error) {
      return {
        peticion: false,
        respuesta: error,
      };
    }
  };


}
export default AsignarUsuarios;
