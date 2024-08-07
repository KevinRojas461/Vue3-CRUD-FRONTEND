<!-- src/components/Footer.vue -->
<template>
  <footer class="bg-dark text-white text-center py-3">
    <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
  </footer>
</template>

<script>
export default {
  // para componentes anidados
  name: "Footer",
};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
