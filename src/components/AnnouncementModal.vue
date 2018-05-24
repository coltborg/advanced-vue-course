<template>
  <div
    v-show="show"
    class="modal-backdrop">
    <div class="modal">
      <h1 class="text-center text-2xl font-bold mb-4">
        Exciting new features are here!
      </h1>
      <p class="text-center text-grey-darker mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem qui alias nulla fugiat quibusdam labore nesciunt atque, ex illo doloribus eos vero, sint vel. Optio, sed quisquam. Fugiat, omnis?
      </p>
      <div class="text-center">
        <button
          type="button"
          class="btn btn-blue"
          @click="dismiss">
          Dismiss
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnnouncementModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    const escapeHandler = (e) => {
      if (this.show && e.key === 'Escape') {
        this.dismiss();
      }
    };

    document.addEventListener('keydown', escapeHandler);
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler);
    });
  },
  methods: {
    dismiss() {
      this.$emit('close');
    },
  },
};
</script>
