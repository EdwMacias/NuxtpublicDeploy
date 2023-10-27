<template>
    <button class="btn btn-success" type="button">
        {{ buttonTitle }}
    </button>
</template>

<script>
export default {
  props: {
    buttonTitle: String, // Prop para el título del botón
  },
};
</script>

<style scoped>

</style>