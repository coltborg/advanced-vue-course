<template>
  <button
    type="button"
    @click="confirmDeleteModalOpen = true">
    <slot/>
    <confirm-delete-modal
      :show="confirmDeleteModalOpen"
      :account-id="accountId"
      @close="confirmDeleteModalOpen = false"/>
  </button>
</template>

<script>
import ConfirmDeleteModal from "./ConfirmDeleteModal";

export default {
  name: "DeleteAccountButton",
  components: {
    ConfirmDeleteModal
  },
  props: {
    accountId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      confirmDeleteModalOpen: false
    };
  }
};
</script>
