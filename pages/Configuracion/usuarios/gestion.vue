<template>
    <div class="container">
        <h4>Gestion de usuarios</h4>´

    </div>
</template>

<script setup>
import { api } from '~/services/api';
import auth from '~/middleware/auth';

   definePageMeta({
        middleware: auth,
    })

 const datos = fetch()


</script>

<style scoped>

</style>