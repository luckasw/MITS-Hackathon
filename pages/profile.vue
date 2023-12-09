<script setup>
const supabase = useSupabaseClient();
const router = useRouter();
const emailP = ref(null);
const userS = useSupabaseUser();
const userData = reactive({ uuid: null });
async function fetchUserData() {

  if (emailP.value) {
    const userEmail = emailP.value.innerText;
    try {
      const { data, error } = await supabase
          .from('user')
          .select('email, uuid')
          .eq('email', userEmail)
          .single();

      if (error) throw error;

      if (data) {
        userData.uuid = data.uuid;
      }

      console.log(data);
    } catch (err) {
      console.error('Error fetching user data:', err);
    }

  }
}

onMounted(() => {
  fetchUserData();
});

function updateProfile() {
  router.push('/update-profile');
}
</script>

<template>
  <h1>Profiil</h1>
  <p ref="emailP"> {{ userS.email }}</p>
  <p v-if="userData">UUID: {{ userData.uuid }}</p>

  <div>
    <button class="registerButton" @click="updateProfile">Muuda profiili</button>
  </div>
</template>
