<template>
  <modal-dialog
    :show="show"
    @close="cancel">
    <h1 class="text-center text-2xl font-bold mb-4">
      Are you sure?
    </h1>
    <p class="text-center text-grey-darker mb-6">
      Deleting your account cannot be undone.
    </p>
    <div class="text-center">
      <button
        type="button"
        class="btn btn-grey mr-4"
        @click="cancel">
        Cancel
      </button>
      <button
        type="button"
        class="btn btn-red"
        @click="confirmDelete">
        Delete it
      </button>
    </div>
  </modal-dialog>
</template>

<script>
import ModalDialog from './ModalDialog';

export default {
  name: 'ConfirmDeleteModal',
  components: {
    ModalDialog,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    accountId: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    show: {
      immediate: true,
      handler: (show) => {
        if (show) {
          document.body.style.setProperty('overflow', 'hidden');
        } else {
          document.body.style.removeProperty('overflow');
        }
      },
    },
  },
  created() {
    const escapeHandler = (e) => {
      if (e.key === 'Escape' && this.show) {
        this.cancel();
      }
    };
    document.addEventListener('keydown', escapeHandler);
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler);
    });
  },
  methods: {
    cancel() {
      this.$emit('close');
    },
    confirmDelete() {
      console.log(`Deleting account ${this.accountId}...`);
      this.$emit('close');
    },
  },
};
</script>
