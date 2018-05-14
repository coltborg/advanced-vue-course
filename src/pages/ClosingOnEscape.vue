<template>
  <div class="">
    <div class="min-h-screen flex items-center justify-center">
      <button
        type="button"
        class="btn btn-blue"
        @click="modalOpen = true">
        Open Modal
      </button>
    </div>

    <announcement-modal
      :show="modalOpen"
      @close="modalOpen = false"/>
  </div>
</template>


<script>
import AnnouncementModal from "../components/AnnouncementModal";

export default {
  name: "ClosingOnEscape",
  components: {
    AnnouncementModal
  },
  data() {
    return {
      modalOpen: false,
    };
  }
};
</script>
