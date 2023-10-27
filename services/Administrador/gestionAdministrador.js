import { api } from '~/services/api';
import { ref, onMounted } from 'vue';
import ButtonCreate from '~/components/Buttons/Button-create.vue';
import AlertNotificaciones from '~/components/Alert/Notificaciones.vue';

export default {
    components: { ButtonCreate, AlertNotificaciones },
    name: 'adminsT4',
    data() {
        return {
            // Inicia los mensajes como cadenas vacías
            successMessage: '', 
            errorMessage: '',

            isModalVisible: false,

            buttonTitle: "Crear Administrador",
            idModal: "createAdmin",
            createAdmin: 'Crear nuevo administrador',
            crearAdminT4: [
                { value: '', placeholder: 'Nombre Administrador' },
                { value: '', placeholder: 'Correo Electrónico' },
                { value: '', placeholder: 'Contraseña' },
            ],
            
            idModal: "editAdminT4",
            modalTitle: 'Actualizar Administrador de la Empresa',
            editarAdminT4: [],
            respuesta:[]
        };
    },
    setup() {
        const selectedRows = ref(10);
        const empresas = ref([]);
        const userT4s = ref([]);

        const getInformacion = async () => {
            try {
                const res = await api.get('/admin_main/T1/show');
                empresas.value = res.data[0].empresas;
                const id = res.data[0].id; // ID del Grupo empresarial
    
                const resT4 = await api.get(`/admin_user/T4/show/${id}`);
                userT4s.value = resT4.data;
            } catch (error) {
                this.errorMessage = error.response.data.message;
                console.error(error);
            }
        };
    
        onMounted(() => {
            getInformacion();
        });
    
        return {
            selectedRows,
            empresas,
            userT4s,
            getInformacion,
        };
    },    

    methods: {
        //Funciones para crear un administrador T4
        async crearAdministrador(inputData, companies_id) {
            this.getInformacion();
            const id = localStorage.getItem('id');

            const mappedData = {
                name: inputData['Nombre Administrador'],
                email: inputData['Correo Electrónico'],
                password: inputData['Contraseña'],
                companies_id
            }
            try {
                const response = await api.post('/admin_user/T4', mappedData);
                const res = response.data[0]
                this.successMessage = res;
            } catch (error) {
                this.errorMessage = error.response.data.message;
            }
        },

        //Funciones para editar un administrador T4
        checkearDatos(editarAdminT4, empresas ) {
            const idsEmpresas = empresas.map((i)=>{
                return{
                    id:i.id, empresa:i.empresa
                }
            })
            const empresasPersona = editarAdminT4[0].value.map(e=>e.idEmpresa)
            return  idsEmpresas.map((i)=>{       
                return { 
                    i,
                    checkedT4:empresasPersona.includes(i.id)? true:false,       
                }
            });
        },
        capturarDatos(userT4) {
            localStorage.setItem('id', userT4.id);
            this.editarAdminT4=[
                { value: userT4.data, placeholder: 'dataT4' },
                { value: userT4.name, placeholder: 'Nombre Administrador'},
                { value: userT4.email, placeholder: 'Correo Electrónico' },
                { value: userT4.password, placeholder: 'Nueva Contraseña' },
            ];
            this.respuesta = this.checkearDatos(this.editarAdminT4, this.empresas);
        },

        async editarAdministrador(inputData, companies_id) {
            this.getInformacion();
            localStorage.getItem('id');
            const id = localStorage.getItem('id'); 

            const mappedData = {
                name: inputData['Nombre Administrador'],
                email: inputData['Correo Electrónico'],
                password: inputData['Nueva Contraseña'],
                companies_id
            };
            try {
                const { data } = await api.post(`/admin_user/T4/update/${id}`, mappedData);
                this.successMessage = data;
            } catch (error) {
                console.error(error)
                this.errorMessage = error.response.data.message;
            };
        },

        // funciones para actualizar el estado de un administrador T4
        async actualizarEstado(idRelacion) {
            this.getInformacion();
            const id = idRelacion;
            try {
                const { data } = await api.put(`/admin_user/T4/statusCompanie/${id}`);
                this.successMessage = data;
            } catch (error) {
                this.errorMessage = error.response.data.message;
            }
        },
    },
};