<script setup>
import { useEmpresaStore } from '~/stores/empresa';
import { useUsuarioStore } from '~/stores/usuarioStore';

definePageMeta({
    middleware: 'auth'
});

const empresa = useEmpresaStore();
const usuario = useUsuarioStore();

console.log(usuario.getToken);

</script>

<template>
    <div class="inicio card">

        <h3 class="titulo-inicio">Bienvenido a su MLASoftERP </h3>

        <h4>{{ empresa.getRazonSocial }}</h4>

        <p class="texto-inicio">
            Encontrarás artículos sobre diversos temas de interés, como tecnología, cultura, deportes y más.
        </p>

    </div>
</template>