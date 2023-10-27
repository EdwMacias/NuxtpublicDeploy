import { api } from '@/services/api.js';
import { ref, onMounted } from 'vue';

export default {
    name: 'Empresas',
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
                { value: empresa.grupoEmpresarial, placeholder: 'Grupo Empresarial',},
                { value: empresa.tercero_id, placeholder: 'Tercero Id'},
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
            }
            try {
                const response = await api.post(`/modulo_contabilidad/empresas/update/${id}`, mappedData);
                this.empresas.value = response.data;
                // console.log(response.data);
                alert('Registro exitoso');
                location.reload();
            } catch (error) {
                console.error(error);
            }
            localStorage.removeItem('id');
        },
    },
    setup() {
        const selectedRows = ref(10);
        const empresas = ref([]);

        onMounted(async () => {
            try {
                const response = await api.get('/modulo_contabilidad/empresas/show');
                empresas.value = response.data;
            } catch (error) {
                console.error(error);
            }
        });
        return {
            selectedRows, empresas
        };
    },
};
