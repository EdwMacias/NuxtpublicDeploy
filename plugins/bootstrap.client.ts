
import { defineNuxtPlugin } from '#app';
import 'bootstrap/dist/js/bootstrap.bundle';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('$bootstrap', window.bootstrap);
});