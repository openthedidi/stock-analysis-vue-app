<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
}

nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

nav a {
  text-decoration: none;
  color: #495057;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #007bff;
}

main {
  padding: 1rem;
}
</style>
