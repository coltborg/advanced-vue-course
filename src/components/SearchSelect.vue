<template>
  <on-click-outside :do="close">
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
        ref="dropdown"
        class="search-select-dropdown">
        <input
          ref="search"
          v-model="search"
          class="search-select-search"
          placeholder="Search..."
          @keydown.esc="close"
          @keydown.down="highlightNext"
          @keydown.up="highlightPrev"
          @keydown.enter.prevent="selectHighlighted"
          @keydown.tab.prevent>
        <ul
          v-show="filteredOptions.length > 0"
          ref="options"
          class="search-select-options">
          <li
            v-for="(option, i) in filteredOptions"
            :key="option"
            :class="{ 'is-active': i === highlightedIndex }"
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
  </on-click-outside>
</template>

<script>
import OnClickOutside from '../components/OnClickOutside';
import Popper from 'popper.js';

export default {
  components: {
    OnClickOutside,
  },
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
      highlightedIndex: 0,
    };
  },
  computed: {
    filteredOptions() {
      return this.filterFunction(this.search, this.options);
    },
  },
  beforeDestroy() {
    this.popper.destroy();
  },
  methods: {
    open() {
      if (this.isOpen) {
        return;
      }

      this.isOpen = true;
      this.$nextTick(() => {
        this.$refs.search.focus();
        this.scrollToHighlighted();
        this.setupPopper();
      });
    },
    close() {
      if (!this.isOpen) {
        return;
      }

      this.isOpen = false;
      this.$refs.button.focus();
    },
    setupPopper() {
      if (this.popper === undefined) {
        this.popper = new Popper(this.$refs.button, this.$refs.dropdown, {
          placement: 'bottom',
        });
      } else {
        this.popper.scheduleUpdate();
        console.log('update popper 🎉');
      }
    },
    select(option) {
      this.$emit('input', option);
      this.search = '';
      this.highlightedIndex = 0;
      this.close();
    },
    selectHighlighted() {
      this.select(this.filteredOptions[this.highlightedIndex]);
    },
    scrollToHighlighted() {
      this.$refs.options.children[this.highlightedIndex].scrollIntoView({ block: 'nearest' });
    },
    highlight(index) {
      this.highlightedIndex = index;

      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.filteredOptions.length - 1;
      }

      if (this.highlightedIndex > this.filteredOptions.length - 1) {
        this.highlightedIndex = 0;
      }

      this.scrollToHighlighted();
    },
    highlightPrev() {
      this.highlight(this.highlightedIndex - 1);
    },
    highlightNext() {
      this.highlight(this.highlightedIndex + 1);
    },
  },
};
</script>
