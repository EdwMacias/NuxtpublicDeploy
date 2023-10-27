<template>
    <div :class="`alert alert-${tipo}`" role="alert">
        {{ mensaje }}
    </div>
</template>

<script>
export default {
    props: {
        mensaje: { type: String },
        tipo: { type: String }
    }
}
</script>
