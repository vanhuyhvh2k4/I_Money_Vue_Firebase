<template>
  <div class="wrapper">
    <form class="form" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="fullName" class="label">Full Name</label>
        <input v-model="fullName" id="fullName" type="text" class="input" placeholder="Enter your full name" required>
      </div>
      <div class="form-group">
        <label for="email" class="label">Email Address</label>
        <input v-model="email" id="email" type="email" class="input" placeholder="Enter your email" autocomplete="email" required>
      </div>
      <div class="form-group">
        <label for="password" class="label">Password</label>
        <input v-model="password" id="password" type="password" class="input" placeholder="Enter your password" autocomplete="current-password" required>
      </div>
      <button v-if="!isPending" class="button">Register</button>
      <button v-if="isPending" class="button-loading" disabled>Loading...</button>
    </form>

    <div class="text" v-if="error">
      <span>{{ error }}</span>
    </div>
    <div class="navigate">
      <span>I'm already a member ?</span>
      <RouterLink :to="{name: 'login', params: {}}">
        <span>&nbsp;Login</span>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { useSignUp } from "@/composables/useSignUp";
import { ref } from "vue";
import {useRouter} from 'vue-router'

export default {
  setup () {
    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    const {error, isPending, signup} = useSignUp();
    const router = useRouter();
    async function onSubmit () {
      await signup(email.value, password.value, fullName.value);
      if (!error.value) router.push({ name: 'login', params: {}})
    }
    return {
      onSubmit,
      fullName,
      email,
      password,
      isPending,
      error
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

  .navigate > a > span{
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
