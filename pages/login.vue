<script setup>
const client = useSupabaseClient();
const router = useRouter();

const email = ref('');
const password = ref('');
const errorMsg = ref(null);
const loading = ref(false);

async function signIn() {
  loading.value = true;
  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    if (user) {
      router.push('/index');
    }
  } catch (error) {
    errorMsg.value = error.message;
  }
  finally {
  loading.value = false;
  }
}
</script>

<template>
  <form class="formLogin" @submit.prevent="signIn">
    <div class="">
      <h1 class="header">Sign in to access Gringo</h1>
      <div>
        <input class="inputField" type="email" placeholder="Your email" v-model="email" />
        <input class="inputField" type="password" placeholder="Your password" v-model="password" />
      </div>
      <div>
        <input
            type="submit"
            class="submitButton"
            :value="loading ? 'Loading' : 'Sign in'"
            :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>