<template>
    <NuxtLink><img src="/ERP/LogoERP.png" alt="LogoERP" class="logo" /></NuxtLink>
</template>

<style scoped>
.logo {
    width: 25px;
    margin-right: 1%;
    margin-left: 2%;
}
/* @media  (max-width: 768px) {
    .logo {
        width: 10%;
    }
} */
</style>
<!-- 
<script>
import { api } from '~/services/api';
import { ref, onMounted } from 'vue';
export default{
    setup(){
        const admins = ref([]);
        const empresas = ref([]);

        onMounted (async () => {
            try{
                const res = await api.get('/admin_main/T1/show')
                empresas.value = res.data[0].empresas;
                console.log(empresas.value);
                admins.value = res.data;
            } catch (error) {
                console.error(error);
            }
        });
        return {
            admins, empresas,
        }
    },
}

</script> -->