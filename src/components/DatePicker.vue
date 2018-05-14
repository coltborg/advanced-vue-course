<template>
  <input
    ref="input"
    :value="date"
    type="text"
    class="form-input"
    placeholder="YYYY-MM-DD">
</template>

<script>
import Pikaday from "pikaday";

export default {
  name: "DatePicker",
  model: {
    prop: "date",
    event: "select"
  },
  props: {
    date: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: "YYYY-MM-DD"
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    const picker = new Pikaday({
      field: this.$refs.input,
      format: this.format,
      onSelect: () => {
        this.$emit("select", picker.toString());
      },
      ...this.options
    });
  }
};
</script>
