<template>
  <div class="grid">
    <nav class="p-2 flex flex-col overflow-y-auto shadow bg-white">
      <router-link
        :to="{ name: 'ControlledComponent' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Controlled Component
      </router-link>
      <router-link
        :to="{ name: 'ThirdPartyControlledComponent' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Third party controlled component
      </router-link>
      <router-link
        :to="{ name: 'ClosingOnEscape' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Closing on escape
      </router-link>
      <router-link
        :to="{ name: 'BackgroundScrolling' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Background scrolling
      </router-link>
      <router-link
        :to="{ name: 'VuePortals' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Vue portals
      </router-link>
      <router-link
        :to="{ name: 'ReuseVuePortals' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Reuse vue portals
      </router-link>
      <router-link
        :to="{ name: 'UsingSlots' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Using slots
      </router-link>
      <router-link
        :to="{ name: 'ModalComposition' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Modal composition
      </router-link>
      <router-link
        :to="{ name: 'StartingRenderlessComponents' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Starting renderless components
      </router-link>
      <router-link
        :to="{ name: 'ElementQueries' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Element queries
      </router-link>
      <router-link
        :to="{ name: 'ProvideInjectComponetComponents' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Provide inject componet components
      </router-link>
      <router-link
        :to="{ name: 'SortableListComponent' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Sortable list component
      </router-link>
      <router-link
        :to="{ name: 'SearchSelectComponent' }"
        class="my-3 mr-3 text-blue hover:text-blue-dark no-underline">
        Search select component
      </router-link>
    </nav>
    <router-view class="overflow-y-auto"/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style src="../node_modules/pikaday/css/pikaday.css"/>
<style src="./assets/css/app.css"/>
