import { api } from '@/services/api.js';
import { ref, onMounted } from 'vue';

export default {
    name: 'Users',
    setup() {
        const admin_main = ref([]);

        onMounted(async () => {
            try {
                const response = await api.get('/admin_main/show');
                console.log(response);
                admin_main.value = response.data;
            } catch (error) {
                console.error(error);
            }
        });
        return {
            admin_main
        };
    },
};
