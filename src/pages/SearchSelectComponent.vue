<template>
  <div class="p-8 min-h-screen bg-grey-darker">
    <div class="p-8 mx-auto max-w-sm bg-white rounded shadow-lg">
      <div class="mb-4">
        <label class="mb-2 form-label">Favorite Thrash Band</label>
        <search-select
          v-model="selectedBand"
          :options="bands"
          :filter-function="applySearchFilter" />
      </div>
      <div class="text-right">
        <button
          type="button"
          class="btn btn-blue">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelect from '../components/SearchSelect';

export default {
  name: 'SearchSelectComponent',
  components: {
    SearchSelect,
  },
  data() {
    return {
      selectedBand: null,
      bands: [
        'Anthrax',
        'Dark Angel',
        'Death Angel',
        'Destruction',
        'Exodus',
        'Flotsam and Jetsam',
        'Kreator',
        'Megadeth',
        'Metallica',
        'Overkill',
        'Sepultura',
        'Slayer',
        'Testament',
      ],
    };
  },
  methods: {
    applySearchFilter(search, options) {
      return options.filter(option => option.toLowerCase().startsWith(search.toLowerCase()));
    },
  },
};
</script>
