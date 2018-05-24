<template>
  <form
    class="card"
    @submit.prevent="submit">
    <h1 class="text-2xl font-bold mb-6">Your Settings</h1>
    <label class="block mb-6">
      <span class="form-label mb-2">Email Address</span>
      <input
        v-model="email"
        class="form-input"
        placeholder="you@example.com">
    </label>
    <div class="mb-8">
      <span class="form-label mb-2">Newsletter</span>
      <div class="flex justify-between items-center">
        <p class="mr-4">Send you occasional news and updates.</p>
        <toggle-input v-model="receiveNewsletter"/>
      </div>
    </div>
    <div
      class="flex justify-between"
      style="opacity: 0.9;">
      <delete-account-button
        :account-id="accountId"
        class="btn btn-red-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
        Cancel Account
      </delete-account-button>
      <button
        type="submit"
        class="btn btn-blue">
        Update Settings
      </button>
    </div>
  </form>
</template>

<script>
import ToggleInput from './ToggleInput';
import DeleteAccountButton from './DeleteAccountButton';

export default {
  name: 'PortalUserSettingsForm',
  components: {
    ToggleInput,
    DeleteAccountButton,
  },
  props: {
    accountId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      email: 'jane@example.com',
      receiveNewsletter: false,
    };
  },
  methods: {
    submit() {
      console.log('Submitting preferences...', {
        email: this.email,
        receiveNewsletter: this.receiveNewsletter,
      });
    },
  },
};
</script>
