<template>
    <div class="d-flex justify-content-center mt-5">
    <ButtonsReactiveButton/>
    </div>
</template>

<script setup>
import auth from '~/middleware/auth';

definePageMeta({
  middleware: auth
});
</script>

<style scoped>

</style>