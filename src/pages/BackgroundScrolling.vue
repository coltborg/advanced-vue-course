<template>
  <div>
    <div class="p-8">
      <div class="max-w-sm mx-auto">
        <p class="mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, asperiores voluptatibus? Id, assumenda. Consequatur recusandae quo corrupti id eligendi veritatis reprehenderit rerum quae accusantium. Enim incidunt ut optio sapiente. Necessitatibus.</p>
        <p class="mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, asperiores voluptatibus? Id, assumenda. Consequatur recusandae quo corrupti id eligendi veritatis reprehenderit rerum quae accusantium. Enim incidunt ut optio sapiente. Necessitatibus.</p>
        <p class="mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, asperiores voluptatibus? Id, assumenda. Consequatur recusandae quo corrupti id eligendi veritatis reprehenderit rerum quae accusantium. Enim incidunt ut optio sapiente. Necessitatibus.</p>

        <div class="p-8 mb-6 text-center">
          <button
            type="button"
            class="btn btn-blue"
            @click="modalOpen = true">
            Open Modal
          </button>
        </div>

        <p class="mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, asperiores voluptatibus? Id, assumenda. Consequatur recusandae quo corrupti id eligendi veritatis reprehenderit rerum quae accusantium. Enim incidunt ut optio sapiente. Necessitatibus.</p>
        <p class="mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, asperiores voluptatibus? Id, assumenda. Consequatur recusandae quo corrupti id eligendi veritatis reprehenderit rerum quae accusantium. Enim incidunt ut optio sapiente. Necessitatibus.</p>
        <p class="mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, asperiores voluptatibus? Id, assumenda. Consequatur recusandae quo corrupti id eligendi veritatis reprehenderit rerum quae accusantium. Enim incidunt ut optio sapiente. Necessitatibus.</p>
        <p class="mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, asperiores voluptatibus? Id, assumenda. Consequatur recusandae quo corrupti id eligendi veritatis reprehenderit rerum quae accusantium. Enim incidunt ut optio sapiente. Necessitatibus.</p>
        <p class="mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, asperiores voluptatibus? Id, assumenda. Consequatur recusandae quo corrupti id eligendi veritatis reprehenderit rerum quae accusantium. Enim incidunt ut optio sapiente. Necessitatibus.</p>
        <p class="mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, asperiores voluptatibus? Id, assumenda. Consequatur recusandae quo corrupti id eligendi veritatis reprehenderit rerum quae accusantium. Enim incidunt ut optio sapiente. Necessitatibus.</p>
      </div>
    </div>

    <enhanced-announcement-modal
      :show="modalOpen"
      @close="modalOpen = false"/>
  </div>
</template>


<script>
import EnhancedAnnouncementModal from "../components/EnhancedAnnouncementModal";

export default {
  name: "ClosingOnEscape",
  components: {
    EnhancedAnnouncementModal
  },
  data() {
    return {
      modalOpen: true,
    };
  }
};
</script>
