<script setup>

import login from '~/middleware/login';

definePageMeta({
  layout: false,
  middleware: login
});

</script>

<template>
  <Login />
</template>


