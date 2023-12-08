<script setup>
  const client = useSupabaseClient();
  const email = ref('');
  const password = ref(null);
  const errorMsg = ref(null);
  const successMsg = ref(null);
  const loading = ref(false);

  async function signUp() {
    loading.value = true;
    try {
      const { data, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
      });
      if (error) {
        console.error("Sign Up Error:", error);
        throw error;
      }
      successMsg.value = "Check your email to confirm your account.";
    } catch (error) {
      errorMsg.value = error.message;
    } finally {
      loading.value = false;
    }
  }
</script>

<template>
  <form class="formLogin" @submit.prevent="signUp">
    <div class="">
      <h1 class="header">Register</h1>
      <div>
        <input class="inputField" type="email" placeholder="Your email" v-model="email" />
        <input class="inputField" type="password" placeholder="Your password" v-model="password" />
      </div>
      <div>
        <input
            type="submit"
            class="submitButton"
            :value="loading ? 'Loading' : 'Register'"
            :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>