<template>
  <div
    :class="{ 'is-active': isOpen }"
    class="search-select">
    <button
      ref="button"
      type="button"
      class="search-select-input"
      @click="open">
      <span v-if="value !== null">{{ value }}</span>
      <span
        v-else
        class="search-select-placeholder">
        Select a band...
      </span>
    </button>
    <div
      v-show="isOpen"
      class="search-select-dropdown">
      <input
        ref="search"
        v-model="search"
        class="search-select-search"
        placeholder="Search...">
      <ul
        v-show="filteredOptions.length > 0"
        class="search-select-options">
        <li
          v-for="option in filteredOptions"
          :key="option"
          class="search-select-option"
          @click="select(option)">
          {{ option }}
        </li>
      </ul>
      <div
        v-show="filteredOptions.length === 0"
        class="search-select-empty">
        No results found "{{ search }}"
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: null,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    filterFunction: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      search: '',
    };
  },
  computed: {
    filteredOptions() {
      return this.filterFunction(this.search, this.options);
    },
  },
  methods: {
    open() {
      this.isOpen = true;
      this.$nextTick(() => {
        this.$refs.search.focus();
      });
    },
    close() {
      this.isOpen = false;
      this.$refs.button.focus();
    },
    select(option) {
      this.$emit('input', option);
      this.search = '';
      this.close();
    },
  },
};
</script>
