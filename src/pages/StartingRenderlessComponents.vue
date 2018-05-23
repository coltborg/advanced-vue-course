<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Renderless Tags</label>
      <renderless-tag-input>
        <div
          slot-scope="{}"
          class="tag-input">
          <span
            class="tag-input-tag">
            <span>sample tag</span>
            <button
              type="button"
              class="tag-input-remove">
              &times;
            </button>
          </span>
          <input
            type="text"
            class="tag-input-text"
            placeholder="Add tag...">
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
import RenderlessTagInput from '../components/RenderlessTagInput';

export default {
  name: 'StartingRenderlessComponents',
  components: {
    TagInput,
    RenderlessTagInput,
  },
  data () {
    return {
      tags: ['awesome', 'excellent', 'amazing'],
    }
  }
}
</script>
