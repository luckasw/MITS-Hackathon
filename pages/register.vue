<script setup lang="ts">
const client = useSupabaseClient();
const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null);
const loading = ref(false);
const showSuccessPopup = ref(false);
const router = useRouter();
const timer = ref({ value: 5 });

onMounted(() => {
  const user = useSupabaseUser();
  if (user.value) {
    router.push("/dashboard");
  }
});

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
    successMsg.value = "Vaata oma e-posti, et kinnitada registreerimine!";
    showSuccessPopup.value = true;
    setInterval(() => {
      if (timer.value === 0) {
        showSuccessPopup.value = false;
        router.push("/login");
      }
      timer.value--;
    }, 1000);
  } catch (error) {
    errorMsg.value = error.message;
  } finally {
    loading.value = false;
  }
}

function login() {
  router.push("/login");
}
</script>

<template>
  <div class="register-main">
    <form class="formLogin" @submit.prevent="signUp">
      <h1 class="headerLogin">Registreeri</h1>
      <div class="formInputs">
        <input
          class="inputField"
          type="email"
          placeholder="E-Posti Aadress"
          v-model="email"
        />
        <input
          class="inputField"
          type="password"
          placeholder="Parool"
          v-model="password"
        />
        <input
          type="submit"
          class="submitButton"
          :value="loading ? 'Laeb' : 'Registreeri'"
          :disabled="loading"
        />
      </div>
    </form>
    <div v-if="showSuccessPopup" class="popup">
      <div class="popup-content">
        <h1>Registreerimine õnnestus!</h1>
        <p>Palun vaata oma e-posti, et kinnitada registreerime.</p>
        <p>Teid suunatakse ümber {{ timer.value }} sekundi pärast.</p>
        <p>Kui teid ei suunata, siis vajutage nuppu "Logi sisse".</p>
        <button class="loginButton" @click="login">Logi sisse</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.register-main {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 40px;

  .formLogin {
    max-width: 600px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-direction: column;

    .headerLogin {
      text-align: center;
      color: $primary;
    }

    .formInputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .inputField {
        width: 100%;
        padding: 2.5vh;
        border-radius: 5px;
        font-size: 1.2rem;
      }

      .submitButton {
        padding: 10px;
        text-decoration: none;
        background-color: $primary;
        cursor: pointer;
        color: $textBright;
        border-radius: 5px;
        font-size: 1.25rem;
        width: 100%;
      }
    }
  }

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;

    .popup-content {
      max-width: 80%;
      background-color: $background;
      padding: 5vw;
      border-radius: 10px;
      text-align: center;
      display: flex;
      flex-direction: column;

      h1 {
        color: $primary;
        margin-bottom: 10px;
      }

      p {
        margin-bottom: 10px;
      }

      .loginButton {
        padding: 10px;
        text-decoration: none;
        background-color: $primary;
        cursor: pointer;
        color: $textBright;
        width: 100%;
        border-radius: 5px;
        font-size: 1rem;
      }
    }
  }
}
</style>
