<template>
    <div class="container mt-4">
        <form action="">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            <h3 class=" ">Administración</h3>
                        </div>
                        <div class="card-body ">
                            <div class="row">
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input type="text" id="nombre" class="form-control" autocomplete="off" />
                                        <label for="nombre">nombre</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input type="text" id="apellido" class="form-control" autocomplete="off" />
                                        <label for="">apellido</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="date" class="form-control" id="empresa" name="empresa" value="">
                                    <label for="empresa">Fecha inactivo</label>
                                </div>
                            </div>
                            <Button @click.prevent="peticion" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { getAdministrador } from '~/services/Administrador/gestionAdministrador.js'
    const peticion = async () => {
        const response = getAdministrador();
        console.log(response);
    }
 
</script>

<style scoped>

</style>