<template>
    <div class="flex-fill">
        <div class="container">
            <h5 class="titulos-tables">empresas</h5>
        </div>
        <TablesTable v-model:rows="selectedRows">
            <table>
                <thead>
                    <th>Nit</th>
                    <th>Grupo Empresarial</th>
                    <th>Razón social</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Correo electrónico</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    <tr v-for="empresa in empresas.slice(0, selectedRows)" :key="empresa.id">
                        <td>{{ empresa.nit }}</td>
                        <td>{{ empresa.grupoEmpresarial }}</td>
                        <td>{{ empresa.razon_social }}</td>
                        <td>{{ empresa.direccion }}</td>
                        <td>{{ empresa.telefono }}</td>
                        <td>{{ empresa.email }}</td>
                        <td>
                            <ButtonsButtonEdit data-bs-toggle="modal" data-bs-target="#editEmpresa"
                                v-on:click="capturarDatos(empresa)" />
                            <ModalEditar idModal="editEmpresa" modalTitle="Actualizar Empresa" :inputs="editarEmpresa"
                                @actualizarDatos="actualizarEmpresa" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </TablesTable>
    </div>
</template>

<script>
import Empresa from '~/services/Contabilidad/Empresas/Empresas.js'
import auth from '~/middleware/auth';

definePageMeta({
    middleware: auth
});

export default Empresa; 
</script>
