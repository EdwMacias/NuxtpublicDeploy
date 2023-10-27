<template>
  <div>
    <!-- El botón o elemento que activará el offcanvas al hacer hover -->
    <div @mouseover="openOffcanvas" @mouseout="closeOffcanvas">Hover aquí</div>

    <!-- El offcanvas que se mostrará -->
    <offcanvas-component v-if="offcanvasOpen" @closeOffcanvas="closeOffcanvas" />
  </div>
</template>

<script>
import OffcanvasComponent from "@/components/OffcanvasComponent.vue";

export default {
  components: {
    OffcanvasComponent,
  },
  data() {
    return {
      offcanvasOpen: false,
    };
  },
  methods: {
    openOffcanvas() {
      this.offcanvasOpen = true;
    },
    closeOffcanvas() {
      this.offcanvasOpen = false;
    },
  },
};
</script>