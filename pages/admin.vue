<script lang="ts">
import { defineComponent } from "vue";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import Modal from "../components/Modal";

export default defineComponent({
  name: "Registration",
  components: {
    QrcodeCapture,
    QrcodeDropZone,
    QrcodeStream,
  },
  methods: {
    onDetect(detectedCodes) {
      console.log(detectedCodes);
      this.showModal = true;
    },
    onConfirm() {
      console.log("confirmed");
      this.closeModal();
    },
    closeModal() {
      this.showModal = false;
    },
  },
  data() {
    return {
      showModal: false,
    }
  }
});
</script>

<template>
  <div class="container">
    <div>
      <qrcode-stream @detect="onDetect" />
    </div>
  </div>
  <Modal v-if="showModal" @confirm="onConfirm" @cancel="closeModal">
    <h1>Registreeri tops</h1>
  </Modal>
</template>

<style scoped></style>
