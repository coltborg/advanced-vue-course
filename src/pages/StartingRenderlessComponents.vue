<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Tags</label>
      <tag-input v-model="tags"/>
    </div>
  </div>
</template>

<script>
import TagInput from '../components/TagInput';

export default {
  name: 'StartingRenderlessComponents',
  components: {
    TagInput,
  },
  data () {
    return {
      tags: ['awesome', 'excellent', 'amazing'],
    }
  }
}
</script>
