<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <date-picker-form/>
    </div>
  </div>
</template>


<script>
import DatePickerForm from "../components/DatePickerForm";

export default {
  name: "ThirdPartyControlledComponent",
  components: {
    DatePickerForm
  }
};
</script>
