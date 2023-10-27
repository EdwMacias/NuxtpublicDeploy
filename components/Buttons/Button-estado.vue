<template>
    <div>
        <button :class="estado === '1' ? 'btn btn-warning' : 'btn btn-light'" 
        @click.prevent="cambiarEstado" :disabled="!clickeos"> {{ estado === '1' ? 'Activo' : 'Inactivo' }}
        </button> 
    </div>
</template>

<script>
export default {
    props: {
        estado: String,
    },
    data() {
        return {
            clickeos: true
        }
    },
    methods: {
        cambiarEstado() {
            if (this.clickeos) {
                const nuevoEstado = this.estado === '1' ? '0' : '1';
                this.$emit('updateEstado', nuevoEstado);

                this.clickeos = false; // Deshabilitar el botón
                setTimeout(() => {
                    this.clickeos = true; // Habilitar el botón después de 5 segundos
                }, 5000);
            }
        },
    },
};
</script>

<!-- Ver para una mejora mas adelante -->
<!-- <template>
    <div>
      <button  v-bind:class="estado === '1' ? 'btn btn-warning' : 'btn btn-light'" :disabled="clickeo">
        {{ estado === "1" ? "Activo" : "Inactivo" }} 
      </button>
    </div>
</template>

<script>
export default {
    props: {
        estado: String,
        clickeo: Boolean,
    },
};
</script>-->