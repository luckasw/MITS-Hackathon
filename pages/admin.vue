<script setup lang="ts">
import { QrcodeStream } from 'vue-qrcode-reader';

const showModal = ref(false);

const users = await $fetch('/api/qr/204a461b-a5e1-456f-a086-cca35ad3f243', {
  headers: useRequestHeaders(['cookie']),
});

function onDetect(detectedCodes) {
  console.log(detectedCodes);
  showModal.value = true;
}

function onConfirm() {
  console.log('confirmed');
  closeModal();
}

function closeModal() {
  showModal.value = false;
}
</script>

<template>
  <div class="container">
    <qrcode-stream @detect="onDetect" />
  </div>
  <Modal v-if="showModal" @confirm="onConfirm" @cancel="closeModal">
    <h1>Registreeri tops</h1>
  </Modal>
  {{ users }}
</template>

<style scoped></style>
