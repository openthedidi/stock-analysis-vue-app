<template>
  <div class="dashboard-container">
    <div class="dashboard-content">
      <h2>Welcome to the Dashboard!</h2>
      <p>This is your main application area.</p>
      <button @click="handleLogout" class="logout-button">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogout = () => {
  // Implement your logout logic here
  alert('Logged out successfully!');
  router.push('/login');
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: Arial, sans-serif;
}

.dashboard-content {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 600px;
}

h2 {
  margin-bottom: 20px;
  color: #333;
  font-size: 28px;
}

p {
  margin-bottom: 30px;
  color: #555;
  font-size: 18px;
}

.logout-button {
  padding: 12px 25px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #c82333;
}
</style>