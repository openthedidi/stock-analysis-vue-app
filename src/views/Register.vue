<template>
  <div class="register-container">
    <div class="register-box">
      <img src="/member-Icon.png" alt="Member Icon" class="member-icon" />
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="input-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required />
        </div>
        <button type="submit" class="register-button">Register</button>
      </form>
      <p class="login-link">
        Already have an account? <a href="#" @click="goToLogin">Login here</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!');
    return;
  }

  try {
    const response = await fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    });

    if (response.ok) {
      alert('Registration successful! Redirecting to login.');
      router.push('/login');
    } else {
      const errorData = await response.json();
      alert(`Registration failed: ${errorData.message}`);
    }
  } catch (error) {
    console.error('Registration error:', error);
    alert('An error occurred during registration.');
  }
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: Arial, sans-serif;
}

.register-box {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.member-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 25px;
  color: #333;
  font-size: 24px;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  color: #555;
  font-weight: bold;
}

.input-group input {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.register-button {
  width: 100%;
  padding: 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-button:hover {
  background-color: #218838;
}

.login-link {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>