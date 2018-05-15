<template>
  <div>
    <p class="p-2 shadow flex">
      <router-link
        :to="{ name: 'ControlledComponent' }"
        class="mr-3 text-blue hover:text-blue-dark no-underline">
        Controlled Component
      </router-link>
      <router-link
        :to="{ name: 'ThirdPartyControlledComponent' }"
        class="mr-3 text-blue hover:text-blue-dark no-underline">
        Third party controlled component
      </router-link>
      <router-link
        :to="{ name: 'ClosingOnEscape' }"
        class="mr-3 text-blue hover:text-blue-dark no-underline">
        Closing on escape
      </router-link>
      <router-link
        :to="{ name: 'BackgroundScrolling' }"
        class="mr-3 text-blue hover:text-blue-dark no-underline">
        Background scrolling
      </router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style src="../node_modules/pikaday/css/pikaday.css"/>
<style src="./assets/css/app.css"/>
