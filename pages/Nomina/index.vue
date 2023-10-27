<template>
  <div class="container">
    <h4 class="mt-2">Centros de trabajo</h4>

    <!-- Notificación alerta general -->
    <div id="notificacion"></div>

    <Modal buttonTitle="Crear Centro Trabajo" idModal="asdas" :modalTitle="modalTitle" :inputs="customInputs" />

  </div>
</template>

<script>
export default {

  data() {
    return {
      isModalVisible: false,
      modalTitle: 'Nuevo Centro de Trabajo',
      customInputs: [
        { value: '', placeholder: 'Código' },
        { value: '', placeholder: 'Descripción' },
      ],
    };
  },
};
</script>


<style>

</style>