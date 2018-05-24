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
  render() {
    return this.$scopedSlots.default({
      tags: this.tags,
    });
  },
};
</script>
