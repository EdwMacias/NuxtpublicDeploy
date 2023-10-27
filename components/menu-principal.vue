<template>
  {{ rutaFormateada }}
</template>

<script>
export default {
  data() {
    return {
      rutaActual: '' // Aquí almacenaremos la ruta actual
    };
  },
  computed: {
    rutaFormateada() {
      const partesRuta = this.rutaActual.split('_');
      return partesRuta.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    },
  },
  watch: {
    '$route.path': function (newPath) {
      // Cuando la ruta cambia, actualizamos rutaActual
      const partesRuta = newPath.split('/');
      this.rutaActual = partesRuta[1];
    }
  },
  mounted() {
    // Inicialmente, obtenemos la ruta actual
    const partesRuta = this.$route.path.split('/');
    this.rutaActual = partesRuta[1];
  }
};
</script>