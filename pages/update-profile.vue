<script setup lang="ts">
const supabase = useSupabaseClient()
const router = useRouter()
const errorMsg = ref(null)
const user = useSupabaseUser()

const firstName = ref(null)
const lastName = ref(null)
const iban = ref(null)

onMounted(async() => {
  try {
    const {data, error} = await supabase
    .from('user')
    .select('name, iban')
    .eq('uuid', user.value.id)

    if (error) throw error
    console.log(data)
    if (data) {
      const userData = data[0]
      try {
        if (userData?.name) {
          const name = userData.name.split(' ')
          firstName.value = name[0]
          lastName.value = name[1]
          console.log(firstName.value + ' ' + lastName.value)
        }
      } catch (error) {
        console.log(error.message)
      }
      try {
        if (userData.iban) {
          iban.value = userData.iban
        }
      } catch (error) {
        console.log(error.message)
      }
    }

  } catch (error) {
    errorMsg.value = error.message
    console.log(error.message)
  }
})

async function updateProfileData() {
  errorMsg.value = null
  if (!firstName.value || !lastName.value) {
    errorMsg.value = "Palun sisesta ees- ja perenimi!"
  } else {
    try {
      const {data, error} = await supabase

          .from('user')

          .update({name: firstName.value + ' ' + lastName.value})

          .eq('uuid', user.value.id)

      if (error) throw error

    } catch (error) {
      errorMsg.value = error.message
      console.log(error.message)
    }
    if (!iban.value) {
      errorMsg.value = "Palun sisesta IBAN!"
    } else {
      try {
        const {data, error} = await supabase

            .from('user')

            .update({iban: iban.value})

            .eq('uuid', user.value.id)

        if (error) throw error


      } catch (error) {
        errorMsg.value = error.message
        console.log(error.message)
      }
    }
  }
}

</script>

<template>
 <form class="formUpdateProfile" @submit.prevent="updateProfileData">
   <div class="">
     <h1 class="header">Uuenda profiili</h1>
     <div>
       <p> {{ user.email }}</p>
       <input class="inputField" type="text" placeholder="Eesnimi" v-model="firstName" />
       <input class="inputField" type="text" placeholder="Perekonnanimi" v-model="lastName" />
       <input class="inputField" type="text" placeholder="IBAN" v-model="iban"/>
     </div>
     <div v-if="errorMsg" class="error">
       {{ errorMsg }}
     </div>
     <div>
       <input
         type="submit"
         class="submitButton"
         value="Uuenda"
        />
     </div>
   </div>
 </form>
  <div class="register">
    <NuxtLink to="/profile">
      <Button buttonText="Tagasi profiili" />
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">

</style>