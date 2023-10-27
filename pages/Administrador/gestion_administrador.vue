<template>
    <div class="flex-fill">
        <AlertNotificaciones :successMessage="successMessage" :errorMessage="errorMessage"/>
        <div class="container ">
            <h5 class="titulos-tables">Gestión de administradores</h5>  
            <ButtonsButtonCreate :buttonTitle="buttonTitle" data-bs-toggle="modal" data-bs-target="#createAdmin"/>
            <ModalModalesAdministradorCrearAdministrador idModal="createAdmin" :modalTitle="createAdmin" :inputs="crearAdminT4" :empresas="empresas" @crearDatos="crearAdministrador" />
        </div>
        <TablesTable v-model:rows="selectedRows">
            <table>
                <thead>
                    <tr>
                        <th>Empresa</th>
                        <th>Administradores de Empresa</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody v-for="userT4 in userT4s" :key=userT4.id>
                        <tr v-for="dataEmpresa in userT4.data" :key=dataEmpresa.idEmpresa> 
                            <td>{{ dataEmpresa.empresa }}</td>
                            <td>{{ userT4.name }}</td>                  
                            <td> 
                                <ButtonsButtonEstado :estado="String(dataEmpresa.estado)" @updateEstado="actualizarEstado(dataEmpresa.idRelacion)" /> 
                            </td> 
                            <td>
                                <ButtonsButtonEdit data-bs-toggle="modal" data-bs-target="#editAdminT4" v-on:click="capturarDatos(userT4, dataEmpresa)" :disabled="dataEmpresa.estado == '0'"/>
                                <ModalModalesAdministradorEditarAdministrador idModal="editAdminT4" :modalTitle="modalTitle" :inputs="editarAdminT4" :empresas="empresas" @actualizarDatos="editarAdministrador" :respuesta="respuesta"/>
                            </td>
                        </tr>
                </tbody>
            </table> 
        </TablesTable>
        
    </div>
</template>

<script>
import adminsT4 from '~/services/Administrador/gestionAdministrador.js'
import auth from '~/middleware/auth';

definePageMeta({ middleware: auth });

export default adminsT4;
</script>