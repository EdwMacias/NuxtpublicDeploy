<template>
    <div class="fondo">
        <h3 class=" m-3 text-dark text-center mt-3">Personalización empresarial</h3>
        <div class="container-md">
            <!-- <el-divider/> -->
            <el-input v-model="input" placeholder="Empresa" />
            <!-- <el-divider /> -->
                <!-- <el-radio-group v-model="radio1">
                    <el-radio label="1" size="large">Claro</el-radio>
                    <el-radio label="2" size="large">Oscuro</el-radio>
                    <el-radio label="3" size="large">Sepia</el-radio>
                    <el-radio label="4" size="large">Alto contraste</el-radio>
                    <el-radio label="5" size="large">Alternativo</el-radio>
                </el-radio-group>
                <el-divider />
                <el-color-picker v-model="color" /> -->
                <!-- <p>hola</p> -->
                <!-- <el-switch v-model="Activo" /> -->
                <el-divider />
                <el-table :data="empresas" border style="width: 100%">
                    <el-table-column prop="empresa" label="Empresa" />
                    <el-table-column prop="id" label="Id" />
                    <el-table-column prop="imagen" label="Imagen" width="360" >
                    </el-table-column>
                    <el-table-column prop="" label="Editar">
                        <ButtonsButtonEdit data-bs-toggle="modal" data-bs-target="#editEmpresa" />
                        <ModalEditar idModal="editEmpresa" modalTitle="Actualizar Empresa" :inputs="editarEmpresa" />
                    </el-table-column>
                </el-table>
                <el-divider />
                <!-- <br>    -->
                <!-- <NotificationElement class="mb-2"/> -->
        </div>
    </div>
</template>

<script>
import { api } from '~/services/api';
import { ref, onMounted } from 'vue';

import auth from '~/middleware/auth';

definePageMeta({
  middleware: auth
});
export default {
    name: 'admins',
    setup() {
        const input = ref('');
        const admins = ref([]);
        const empresas = ref([]);
        onMounted(async () => {
            try {
                const res = await api.get('/admin_main/T1/show');
                console.log({ res });
                admins.value = res.data;
                empresas.value = res.data[0].empresas;
                console.log(empresas.value);
            }
            catch (error) {
                console.error(error);
            }
        });
        return {
            input, admins, empresas
        };
    },
    // data() {
    //     return {
    //         isModalVisible: false,
    //         modalTitle: 'Asignación de administrador',
    //     };
    // },
    data() {
        return {
            isModalVisible: false,
            idModal: "editEmpresa",
            modalTitle: 'Actualizar Empresa',
            editarEmpresa: [],
        };
    },
    methods: {
        capturarDatos(empresa) {
            localStorage.setItem('id', empresa.id);
            this.editarEmpresa = [
                { value: empresa.grupoEmpresarial, placeholder: 'Grupo Empresarial', },
                { value: empresa.tercero_id, placeholder: 'Tercero Id' },
                { value: empresa.razon_social, placeholder: 'Razón Social' },
                { value: empresa.direccion, placeholder: 'Dirección' },
                { value: empresa.telefono, placeholder: 'Teléfono' },
                { value: empresa.email, placeholder: 'Correo electrónico' },
            ];
        },
        async actualizarEmpresa(inputData) {
            const id = localStorage.getItem('id');
            const mappedData = {
                cliente_id: inputData['Grupo Empresarial'],
                tercero_id: inputData['Tercero Id'],
                razon_social: inputData['Razón Social'],
                direccion: inputData['Dirección'],
                telefono: inputData['Teléfono'],
                email: inputData['Correo electrónico'],
            };
            try {
                const response = await api.post(`/modulo_contabilidad/empresas/update/${id}`, mappedData);
                this.empresas.value = response.data;
                // console.log(response.data);
                alert('Registro exitoso');
                location.reload();
            }
            catch (error) {
                console.error(error);
            }
            localStorage.removeItem('id');
        },
    },
};
</script>

<style >
h4{
    color:beige
}
.fondo{
    background-color: azure;
}
</style>