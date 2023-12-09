<script setup lang="ts">
import { QrcodeStream } from 'vue-qrcode-reader';

const route = useRoute();
const showModal = ref(false);
const qr = ref('');

watch(() => route.query, checkParams);

function handleError(error) {
  console.log(error);
  clearError({
    redirect: '/qr',
  });
}

async function onDetect(detectedCodes) {
  console.log(detectedCodes);
  if (detectedCodes[0].rawValue.startsWith('http://localhost:3000/qr?data=')) {
    await navigateTo({
      path: '/qr',
      query: {
        data: detectedCodes[0].rawValue.split('=')[1],
      },
    });
  }
}

async function onConfirm() {
  console.log('confirmed');
  try {
    const data = await $fetch(`/api/qr/${qr.value}`, {
      headers: useRequestHeaders(['cookie']),
    });
    console.log(data);
  } catch (error) {
    handleError(error);
  } finally {
    closeModal();
  }
}

function closeModal() {
  showModal.value = false;
}

function checkParams() {
  if (route.query.data) {
    qr.value = route.query.data.toString();
    showModal.value = true;
  }
}

checkParams();
</script>

<template>
  <h2>Skanneeri topsil olev QR-kood</h2>
  <div class="container">
    <qrcode-stream @detect="onDetect" />
  </div>
  <Modal v-if="showModal" @confirm="onConfirm" @cancel="closeModal">
    <h1>Registreeri tops</h1>
  </Modal>
</template>

<style lang="scss" scoped>
h2 {
  text-align: center;
  padding: 2rem 1rem;
}
</style>
