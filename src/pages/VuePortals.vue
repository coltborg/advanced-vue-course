<template>
  <div>
    <div class="p-8 min-h-screen bg-grey-darker">
      <div class="mx-auto max-w-sm">
        <portal-user-settings-form :account-id="accountId"/>
      </div>
    </div>

    <portal-target name="modals"/>
  </div>
</template>

<script>
import PortalUserSettingsForm from '../components/PortalUserSettingsForm';

export default {
  name: 'VuePortals',
  components: {
    PortalUserSettingsForm,
  },
  data() {
    return {
      accountId: 7,
    };
  },
};
</script>
