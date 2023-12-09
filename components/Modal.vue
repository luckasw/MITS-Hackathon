<script></script>

<template>
  <div class="background">
    <div class="container">
      <slot />
      <div class="actions">
        <button @click="$emit('cancel')">Katkesta</button>
        <button @click="$emit('confirm')">Jätka</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  .container {
    background-color: white;
    border-radius: 1rem;
    margin: auto auto;
    padding: 2rem;

    .actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      padding-top: 2rem;
    }
  }
}

button {
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  width: max-content;
  font-size: 1.5rem;
  color: white;
  background-color: #c20002;

  &:last-child {
    background-color: #155831;
    width: 100%;
  }
}
</style>
