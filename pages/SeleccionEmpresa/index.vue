
<script>

definePageMeta({
  layout: 'default',
  middleware: 'auth'
})

const route = useRoute()

const teamIsActive = computed(() => {
  const path = route.path
  const pathElements = path.split("/")
  return pathElements
})


</script>

<template>
  <GallerySwiperEmp  />
</template>

<style scoped></style>