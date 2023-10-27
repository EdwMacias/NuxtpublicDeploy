<template>
    <div class="modal fade" :id="idModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ modalTitle }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="modal-body form-group">
                            <form action="" onsubmit="actualizar" id="FormEditar">
                                <div class="form-floating mb-3" v-for="(input, index) in inputs" :key="index" >
                                    <input v-model="input.value" :placeholder="input.placeholder" id="input.placeholder" class="form-control">
                                    <label for="input.placeholder">{{input.placeholder}}</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <ButtonsButtonCancelar data-bs-dismiss="modal"/>
                    <ButtonsButtonConfirmar @click="actualizar"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        buttonTitle: String,
        modalTitle: String,
        idModal: String,
        inputs: Array,
    },
    data() {
        return {
            isModalVisible: false,
        };
    },
    methods: {
        actualizar() {
            // Crear un objeto JavaScript a partir de inputs
            const inputData = this.inputs.reduce((obj, item) => {
                obj[item.placeholder] = item.value;
                return obj;
            }, {});
            // Emitir el evento con los datos actualizados
            this.$emit('actualizarDatos', inputData);
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
}
.form-floating label {
  font-size: 0.8rem;
  font-weight: 600;
}
</style>