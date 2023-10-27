<template>
	<div class="m-5">
			<p class="text-white">El contador es: {{ count }}</p>
			<p class="text-white">El contador es {{ isEven ? 'par' : 'impar' }}</p>
			<button @click="increment">Incrementar</button>
			<button @click="decrement">Decrementar</button>
	</div>
</template>
	
<script>
	// import { useCounterStore } from '@/stores/usuarioStore'
	import { reactive, ref } from 'vue';

	export default {
			setup() {
			// obtiene el store
					const counter = useCounterStore()
					// devuelve las propiedades que quieres usar en el template
					return {
							count: counter.count,
							isEven: counter.isEven,
							increment: counter.increment,
							decrement: counter.decrement
					}
			}
	}
</script>