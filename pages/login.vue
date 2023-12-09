<script setup>
const client = useSupabaseClient();
const router = useRouter();

const email = ref('');
const password = ref('');
const errorMsg = ref(null);
const loading = ref(false);

client.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    router.push('/dashboard');
  }
});

async function signIn() {
  loading.value = true;
  errorMsg.value = null;
  try {
    const { user, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
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
      <div v-if="errorMsg" class="error">
        {{ errorMsg }}
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