<script lang="ts">
import { defineComponent, ref } from "vue";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import Modal from "../components/Modal.vue";

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
  <Modal v-if="showModal">
    <h1>Registreeri tops</h1>
  </Modal>
</template>

<style scoped></style>
