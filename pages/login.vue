<script setup>
const client = useSupabaseClient();
const router = useRouter();

const email = ref('');
const password = ref('');
const errorMsg = ref(null);
const loading = ref(false);

onMounted(() => {
  const user = useSupabaseUser();
  if (user) {
    router.push('/dashboard');
  }
});

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

function register() {
  router.push('/register');
}

</script>

<template>
  <form class="formLogin" @submit.prevent="signIn">
    <div class="">
      <h1 class="header">Logige sisse, et skanneerida topsi!</h1>
      <div>
        <input class="inputField" type="email" placeholder="E-Posti Aadress" v-model="email" />
        <input class="inputField" type="password" placeholder="Parool" v-model="password" />
      </div>
      <div v-if="errorMsg" class="error">
        {{ errorMsg }}
      </div>
      <div>
        <input
            type="submit"
            class="submitButton"
            :value="loading ? 'Laeb' : 'Logi sisse'"
            :disabled="loading"
        />
      </div>
    </div>
  </form>
  <div class="register">
    <p>Pole veel kasutajat?</p>
    <button class="registerButton" @click="register">Registreeri</button>
  </div>
</template>