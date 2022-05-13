<template>
  <input
    @input="updateModel"
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    placeholder: {
      type: String,
    },
    type: {
      type: String,
    },
    modelValue: [String, Number],
  },
  data: function () {
    // if overused component - use data as function
    return {
      placeholder: this.placeholder,
    };
  },
  methods: {
    updateModel(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  border-radius: 0.3em;
  padding: 5px;
  border: none;
  outline: none;
  height: 30px;
}
</style>
