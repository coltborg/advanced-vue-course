<template>
  <div class="card">
    <label class="block">
      <span class="form-label mb-2">Select a date</span>
      <date-picker
        v-model="date"
        :options="{ firstDay: 1, disableWeekends: true }"
        format="MMM D YYYY"/>
    </label>
  </div>
</template>

<script>
import DatePicker from "./DatePicker";

export default {
  name: "DatePickerForm",
  components: {
    DatePicker
  },
  data() {
    return {
      date: "May 01 2018"
    };
  }
};
</script>

<style>

</style>
