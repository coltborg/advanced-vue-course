<script>
export default {
  name: 'RenderlessTagInput',
  model: {
    prop: 'tags',
    event: 'update',
  },
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    removeTag(tag) {
      this.$emit('update', this.tags.filter(t => t !== tag));
    },
  },
  render() {
    return this.$scopedSlots.default({
      tags: this.tags,
      removeTag: this.removeTag,
    });
  },
};
</script>
