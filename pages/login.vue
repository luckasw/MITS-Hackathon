<script setup>
const client = useSupabaseClient();
const router = useRouter();

const email = ref("");
const password = ref("");
const errorMsg = ref(null);
const loading = ref(false);

onMounted(() => {
  const user = useSupabaseUser();
  if (user) {
    router.push("/dashboard");
  }
});

client.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN") {
    router.push("/dashboard");
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
  } finally {
    loading.value = false;
  }
}

function register() {
  router.push("/register");
}
</script>

<template>
  <div class="login-main">
    <div class="login-content">
      <div class="login-header">
        <h1>Logige sisse, et skanneerida topsi!</h1>
      </div>
      <form @submit.prevent="signIn" class="login-form">
        <div class="login-inputs">
          <input
            type="email"
            placeholder="E-Posti Aadress"
            v-model="email"
            class="inputField"
          />
          <input
            type="password"
            placeholder="Parool"
            v-model="password"
            class="inputField"
          />
        </div>
        <div v-if="errorMsg" class="error-login">
          {{ errorMsg }}
        </div>
        <input
          type="submit"
          :value="loading ? 'Laeb' : 'Logi sisse'"
          :disabled="loading"
          class="submitButton"
        />
      </form>
      <div class="registerBox">
        <p>Pole veel kasutajat?</p>
        <button @click="register" class="registerButton">Registreeri</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.login-main {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-content {
    max-width: 600px;
    width: 80%;
    display: flex;
    gap: 30px;
    flex-direction: column;

    .login-header {
      text-align: center;
      color: $primary;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;

      .login-inputs {
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 100%;

        .inputField {
          padding: 2.5vh;
          border-radius: 5px;
          font-size: 1.2rem;
        }
      }

      .submitButton {
        padding: 10px;
        text-decoration: none;
        background-color: $primary;
        cursor: pointer;
        color: $textBright;
        width: 100%;
        border-radius: 5px;
        font-size: 1.25rem;
      }

      .error-login {
        color: $alert;
      }
    }

    .registerBox {
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .registerButton {
        padding: 10px;
        text-decoration: none;
        background-color: $primary;
        cursor: pointer;
        color: $textBright;
        width: 25%;
        max-width: 200px;
        min-width: 120px;
        border-radius: 5px;
        font-size: 1rem;
      }
    }
  }
}
</style>
