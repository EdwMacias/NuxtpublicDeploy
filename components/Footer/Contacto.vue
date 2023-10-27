
<template>
   
    <h6 class="contacto_footer"> &copy; MLASoft ERP - {{ anioActual }} <br>
        Dirección: {{ company.direccion }} <br>
        Teléfono: {{ company.telefono }} <br>
        Correo electrónico: {{ company.email }}</h6>
</template>

<script>
    export default {
        data() {
            return {
                company: {
                    direccion: 'Av 1E # 11A - 13 B.Caobos',
                    telefono: '312 368 7865',
                    email: 'mlaerp@gmail.com'
                },
                anioActual: new Date().getUTCFullYear()
            }
        }
    }
</script>

<style>
.contacto_footer{
    font-size: 14px;
}
@media (max-width: 768px) {
    .contacto_footer{
        font-size: 10px;
    }
}
</style>