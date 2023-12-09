<script setup lang="ts">
import { QrcodeStream } from 'vue-qrcode-reader';

const route = useRoute();
const showModal = ref(false);
const qr = ref('');

watch(() => route.query, checkParams);

function handleError(error) {
  console.log(error);
}

async function onDetect(detectedCodes) {
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
  try {
    const data = await $fetch(`/api/qr/${qr.value}`, {
      headers: useRequestHeaders(['cookie']),
    });
  } catch (error) {
    handleError(error);
  } finally {
    await closeModal();
  }
}

async function closeModal() {
  showModal.value = false;
  qr.value = '';
  await navigateTo('/qr');
  console.log(showModal.value);
}

function checkParams() {
  console.log(showModal.value);
  if (route.query.data) {
    qr.value = route.query.data.toString();
    showModal.value = true;
  } else {
    qr.value = '';
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
