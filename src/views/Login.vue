<template>
  <div class="wrapper">
    <form class="form" @submit.prevent="onSubmit" autocomplete="off">
      <div class="form-group">
        <label for="email" class="label">Email Address</label>
        <input v-model="email" id="email" type="email" class="input" placeholder="Enter your email" autocomplete="off"
          required>
      </div>
      <div class="form-group">
        <label for="password" class="label">Password</label>
        <input v-model="password" id="password" type="password" class="input" placeholder="Enter your password"
          autocomplete="off" required>
      </div>
      <button v-if="!isPending" class="button">Sign In</button>
      <button v-if="isPending" class="button-loading" disabled>Loading...</button>
    </form>
    <div v-if="error" class="text">
      <span>{{ error }}</span>
    </div>
    <div class="navigate">
      <span>I'm a new user ?</span>
      <RouterLink :to="{name: 'register', params: {}}">
        <span>&nbsp;Sign Up</span>
      </RouterLink>
    </div>
  </div>
</template>

<script>
  import {
    ref
  } from "vue";
  import {
    useLogin
  } from "@/composables/useLogin";
  import {useRouter} from 'vue-router';
  export default {
    setup() {
      const {
        error,
        isPending,
        login
      } = useLogin();

      const email = ref("");
      const password = ref("");
      const router = useRouter();
      async function onSubmit() {
        await login(email.value, password.value);
        if (!error.value) router.push({ name: 'profile', params: {} })
      }
      return {
        onSubmit,
        email,
        password,
        error,
        isPending,
      }
    }
  }
</script>

<style scoped>
  .form {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .label {
    font-size: 1.4rem;
    color: var(--text-muted);
  }

  .input {
    padding: 12px;
    border-radius: var(--border-radius);
    border: 1px solid var(--muted-color);
  }

  .input:focus {
    border-color: var(--text-color);
  }

  .button {
    display: block;
    padding: 11px 24px;
    border-radius: var(--border-radius);
    color: var(--white-color);
    background-color: var(--primary-color);
    font-weight: 500;
  }

  .navigate {
    width: 100%;
    text-align: center;
  }

  .navigate>a>span {
    color: var(--primary-color);
    font-weight: 500;
  }


  .text {
    font-size: 1.2rem;
    color: red;
    text-align: center;
    font-weight: 300;
  }

  .button-loading {
    background-color: gray;
    cursor: not-allowed;
    display: block;
    padding: 11px 24px;
    border-radius: var(--border-radius);
    color: var(--white-color);
    font-weight: 500;
  }
</style>