<template>
  <div class="login-container">
    <div class="login-box">
      <img src="/member-Icon.png" alt="Member Icon" class="member-icon" />
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <div class="social-login">
        <button @click="handleGoogleLogin" class="google-login-button">Sign in with Google</button>
      </div>
      <p class="register-link">
        Don't have an account? <a href="#" @click="goToRegister">Register here</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.accessToken);
      router.push('/dashboard');
    } else {
      alert('Login failed!');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('An error occurred during login.');
  }
};

const handleGoogleLogin = () => {
  window.location.href = 'http://localhost:8080/oauth2/authorization/google';
};

const goToRegister = () => {
  router.push('/register');
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: Arial, sans-serif;
}

.login-box {
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

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

.register-link {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
}

.register-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>