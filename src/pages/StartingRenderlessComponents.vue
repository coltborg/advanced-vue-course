<template>
  <div class="min-h-screen bg-grey-darker p-8">

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Stacked Tags</label>
      <stacked-tag-input v-model="tags" />
    </div>

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Inline Tags</label>
      <inline-tag-input v-model="tags" />
    </div>

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Renderless Tags</label>
      <renderless-tag-input v-model="tags">
        <div
          slot-scope="{ tags, removeTag, removeButtonEvents, inputProps, inputEvents }"
          class="tag-input">
          <span
            v-for="tag in tags"
            :key="tag"
            class="tag-input-tag">
            <span>{{ tag }}</span>
            <button
              type="button"
              class="tag-input-remove"
              v-on="removeButtonEvents(tag)">
              &times;
            </button>
          </span>
          <input
            v-bind="inputProps"
            type="text"
            class="tag-input-text"
            placeholder="Add tag..."
            v-on="inputEvents">
        </div>
      </renderless-tag-input>
    </div>

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Original Tags</label>
      <tag-input v-model="tags"/>
    </div>
  </div>
</template>

<script>
import TagInput from '../components/TagInput';
import InlineTagInput from '../components/InlineTagInput';
import StackedTagInput from '../components/StackedTagInput';
import RenderlessTagInput from '../components/RenderlessTagInput';

export default {
  name: 'StartingRenderlessComponents',
  components: {
    TagInput,
    RenderlessTagInput,
    InlineTagInput,
    StackedTagInput,
  },
  data() {
    return {
      tags: ['awesome', 'excellent', 'amazing'],
    };
  },
};
</script>
