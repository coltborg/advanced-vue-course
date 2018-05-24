<template>
  <div>
    <div class="opacity-25">
      <composition-announcement-modal
        :show="showAnnouncement"
        @close="showAnnouncement = false"
      />
    </div>

    <div class="min-h-screen bg-grey-darker p-8">
      <div class="max-w-sm mx-auto">
        <portal-user-settings-form :account-id="accountId"/>
      </div>
    </div>

    <portal-target name="modals"/>
  </div>
</template>

<script>
import PortalUserSettingsForm from '../components/PortalUserSettingsForm';
import CompositionAnnouncementModal from '../components/CompositionAnnouncementModal';

export default {
  name: 'ModalComposition',
  components: {
    PortalUserSettingsForm,
    CompositionAnnouncementModal,
  },
  data() {
    return {
      accountId: 7,
      showAnnouncement: true,
    };
  },
};
</script>
