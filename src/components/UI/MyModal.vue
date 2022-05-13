<template>
  <div v-if="modalVisible" class="modal" @click="$emit('closeModal')">
    <div @click.stop class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
name = "MyModal";
export default {
  props: {
    modalVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  .modal-content {
    padding: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 1em;
  }
}
</style>
