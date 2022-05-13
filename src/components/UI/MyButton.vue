<template lang="html">
  <button :class="{ red: red }" class="btn">
    <slot></slot>
    <!-- slot - то же самое что и props.children -->
  </button>
</template>
<script>
export default {
  name: "MyButton",
  props: {
    red: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
.btn {
  color: #fff;
  padding: 5px 10px 5px 10px;
  border-radius: 0.3em;
  background-color: #292d3e;
  border: none;
  cursor: pointer;
}
.red {
  transition: 0.3s;
  &:hover {
    background-color: #c74d4d;
  }
  background-color: #6b6b6b;
  color: #fff;
}
</style>
