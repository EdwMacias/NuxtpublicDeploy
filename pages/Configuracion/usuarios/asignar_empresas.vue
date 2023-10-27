<template>
    <div class="m-3">
    </div>
</template>

<script>
import { api } from '~/services/api';
import { ref, onMounted } from 'vue';
export default {
    name: 'companies',
    setup(){
        const company = ref([]);
        onMounted (async () => {
            try{
                const res = await api.get('/admin_user')
                console.log({res});
                company.value = res.data;
            }catch (error) {
                console.error(error);
            }
        });
        return{
            company
        }
    },
    
};
    // '/admin_user'

</script>

<style scoped>

</style>