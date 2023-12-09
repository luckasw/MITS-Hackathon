<script setup>
const supabase = useSupabaseClient();
const emailP = ref(null);
const userS = useSupabaseUser();
const userData = reactive({ uuid: null });
async function fetchUserData() {
  if (emailP.value) {
    const userEmail = emailP.value.innerText;
    try {
      const { data, error } = await supabase
        .from("user")
        .select("email, uuid")
        .eq("email", userEmail)
        .single();

      if (error) throw error;

      if (data) {
        userData.uuid = data.uuid;
      }

      console.log(data);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  }
}
onMounted(() => {
  fetchUserData();
});
</script>

<template>
  <div class="profile-main">
    <div class="profile-content">
      <div class="profile-header">
        <h1>User Profile</h1>
      </div>
      <div class="profile-item">
        <h4>Email:</h4>
        <p>{{ userS.email }}</p>
      </div>
      <div class="profile-item">
        <h4>IBAN:</h4>
        <p>EE568384734588346348</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.profile-main {
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  bottom: 40px;

  .profile-content {
    max-width: 600px;
    width: 80%;
    display: flex;
    gap: 30px;
    flex-direction: column;
  }

  .profile-header {
    text-align: center;
    color: $primary;
  }

  .profile-item {
    background-color: $background3;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 1.2rem;
    width: 100%;

    p,
    h4 {
      margin: 10px 0;
      color: $background;
      overflow-wrap: break-word;
    }
  }
}
</style>
