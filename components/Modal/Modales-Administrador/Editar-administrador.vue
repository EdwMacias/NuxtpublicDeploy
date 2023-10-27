<template>
    <div class="modal fade" :id="idModal" tabindex="-1" :aria-labelledby="`ModalLabel${idModal}`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ modalTitle }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="container">
                    <div class="modal-body form-group">

                        <form id="FormEditar" >
                            <!-- datos del administrador T4 -->
                            <div class="form-floating mb-3" v-for="(input, index) in inputs" :key="index">
                                <input v-model="input.value" :placeholder="input.placeholder" :id="'input_' + index" class="form-control" v-show="index !== 0" :name="'input_' + index">
                                <label :for="'input_' + index">{{ input.placeholder }}</label>
                            </div>
                            <!-- empresas asociadas -->
                            <table class="table .table-responsive{-sm|-md|-lg|-xl|-xxl} ">
                                <thead>
                                    <tr>
                                        <th>Empresas Asociadas</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody v-for="empresasT4 in inputs[0]?.value" :key="empresasT4.idEmpresa" value="{{ empresasT4.idEmpresa }}" >
                                    <tr> 
                                        <td > {{ empresasT4.empresa }} </td>                 
                                        <td> 
                                            <!-- <ButtonsButtonEstado @click.prevent=" (event) => actualizarEstado(event, empresasT4.estado)" :estado="String(empresasT4.estado)" :clickeo="botonActivo" :key="empresasT4.idEmpresa" /> -->
                                            <ButtonsButtonEstado :estado="String(empresasT4.estado)" @updateEstado="actualizarEstado(empresasT4.idRelacion)"/> 
                                        </td> 
                                    </tr>
                                </tbody>
                            </table> 
                            <!-- seleccion de empresa -->
                            <div class="form-control mb-3">
                                <h6>Asociar Empresas del Grupo al Administrador </h6>
                                <div v-for="empresasGrupo in respuesta" :key="empresasGrupo.i.id" class="empresas">
                                <input type="checkbox" class="form-check-input" :value=empresasGrupo.i.id :checked="empresasGrupo.checkedT4" v-model="empresasGrupo.checkedT4"  name="empresasGrupo">
                                <label class="label-empresa" for="input.placeholder">{{empresasGrupo.i.empresa}}</label>
                                </div>
                            </div>
                        </form>

                    </div>
                </div> 
                <div class="modal-footer">
                    <ButtonsButtonCancelar data-bs-dismiss="modal"/>
                    <ButtonsButtonConfirmar data-bs-dismiss="modal" @click="actualizar" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { api } from '~/services/api';
import ButtonsButtonEstado from '~/components/Buttons/Button-estado.vue';

export default {
    components: { ButtonsButtonEstado,   },
    props: {
        buttonTitle: String,
        modalTitle: String,
        idModal: String,
        inputs: Array,
        empresas: Array,
        respuesta: Array,
    },
    data() {
        return {
            successMessage: '', 
            errorMessage: '',
            isModalVisible: false,
            selectedEmpresas: [],
        };
    },
    methods: { 
        actualizar() {
            // filtracion de empresas seleccionados
            this.selectedEmpresas = this.respuesta.filter(empresa => empresa.checkedT4).map(empresa => empresa.i.id);

            const companies_id = this.selectedEmpresas.map(id => id);

            let index = 0;
            // Crear un objeto JavaScript a partir de inputs
            const inputData = this.inputs.reduce((obj, item) => {
                if (index !== 0) { //&& elimina los inputs por posicion
                    obj[item.placeholder] = item.value;
                }
                index++;
                return obj;
            }, {});
            // Emitir el evento con los datos actualizados
            this.$emit('actualizarDatos', inputData, companies_id);
        },
        async actualizarEstado(idRelacion) {
            const { data } = await api.put(`/admin_user/T4/statusCompanie/${idRelacion}`);  
        },
    },   
};
</script>

<style>

.modal {
    padding-top: 2rem;
}
.modal-title{
    color: #212529;
}
.form-floating {
  margin-bottom: 1rem;
}
.form-control {
  width: 100%;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  max-height: 90px; /* Ajusta la altura máxima según tus necesidades */
  overflow-y: auto; 
}
.form-floating label {
  font-size: 0.8rem;
  font-weight: 600;
}
.label{
    color: #212529;
}
.empresas{
    text-align: left;
}
.table {
    border-radius: 10px;
    text-align: left;
}
</style>

