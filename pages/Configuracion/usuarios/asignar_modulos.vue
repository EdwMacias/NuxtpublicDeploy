<template>
    <div v-if="data">
    {{ data }}
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth',
    })
    const {data} = await useFetch ("/admin_user")
</script>

<style scoped>

</style>