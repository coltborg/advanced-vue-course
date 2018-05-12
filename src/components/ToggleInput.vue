<template>
  <span
    :aria-checked="value.toString()"
    class="toggle"
    role="checkbox"
    tabindex="0"
    @click="toggle"
    @keydown.space.prevent="toggle"/>
</template>

<script>
export default {
  name: "ToggleInput",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle() {
      this.$emit("input", !this.value);
    }
  }
};
</script>
