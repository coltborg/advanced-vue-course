<template>
  <div>
    <div class="p-8 min-h-screen bg-grey-darker">
      <div class="mx-auto max-w-sm">
        <portal-user-settings-form :account-id="accountId"/>
      </div>
    </div>

    <portal
      v-if="showAnnouncement"
      to="modals">
      <announcement-modal
        :show="showAnnouncement"
        @close="showAnnouncement = false"/>
    </portal>

    <portal-target name="modals"/>
  </div>
</template>

<script>
import PortalUserSettingsForm from "../components/PortalUserSettingsForm";
import AnnouncementModal from "../components/AnnouncementModal";

export default {
  name: "VuePortals",
  components: {
    PortalUserSettingsForm,
    AnnouncementModal
  },
  data() {
    return {
      accountId: 7,
      showAnnouncement: true
    };
  }
};
</script>
