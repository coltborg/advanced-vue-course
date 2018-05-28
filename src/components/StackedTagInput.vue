<template>
  <renderless-tag-input
    :tags="tags"
    :remove-on-backspace="false"
    @update="(newTags) => $emit('update', newTags)">
    <div
      slot-scope="{ tags, addTag, removeButtonEvents, inputProps, inputEvents }"
      class="stacked-tag-input">
      <div class="stacked-tag-input-form">
        <input
          v-bind="inputProps"
          type="text"
          class="form-input"
          placeholder="Add tag..."
          v-on="inputEvents">
        <button
          class="btn btn-indigo"
          @click="addTag">
          Add Tag
        </button>
      </div>
      <ul class="stacked-tag-list">
        <li
          v-for="tag in tags"
          :key="tag">
          {{ tag }}
          <button
            class="stacked-tag-link"
            type="button"
            v-on="removeButtonEvents(tag)">
            Remove
          </button>
        </li>
      </ul>
    </div>
  </renderless-tag-input>
</template>

<script>
import RenderlessTagInput from './RenderlessTagInput';

export default {
  name: 'InlineTagInput',
  components: {
    RenderlessTagInput,
  },
  model: {
    prop: 'tags',
    event: 'update',
  },
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>

</style>
