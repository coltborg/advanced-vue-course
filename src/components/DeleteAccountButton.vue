<template>
  <button
    class="text-red-dark hover:underline"
    type="button"
    @click="confirmDeleteModalOpen = true">
    Delete Account
    <portal
      v-if="confirmDeleteModalOpen"
      to="modals">
      <confirm-delete-modal
        :show="confirmDeleteModalOpen"
        :account-id="accountId"
        @close="confirmDeleteModalOpen = false"/>
    </portal>
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
