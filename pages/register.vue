<script setup lang="ts">
  const client = useSupabaseClient();
  const email = ref('');
  const password = ref(null);
  const errorMsg = ref(null);
  const successMsg = ref(null);
  const loading = ref(false);
  const showSuccessPopup = ref(false);
  const router = useRouter();
  const timer = ref({value: 5});

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
  <div>
  <form class="formLogin" @submit.prevent="signUp">
    <div class="">
      <h1 class="header">Register</h1>
      <div>
        <input class="inputField" type="email" placeholder="E-Posti Aadress" v-model="email" />
        <input class="inputField" type="password" placeholder="Parool" v-model="password" />
      </div>
      <div>
        <input
            type="submit"
            class="submitButton"
            :value="loading ? 'Laeb' : 'Registreeri'"
            :disabled="loading"
        />
      </div>
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
