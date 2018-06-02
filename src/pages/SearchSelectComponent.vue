<template>
  <div class="p-8 min-h-screen bg-grey-darker">
    <div
      style="margin-top: 10rem;"
      class="p-8 mx-auto max-w-sm bg-white rounded shadow-lg">
      <div class="mb-4">
        <label class="mb-2 form-label">Favorite Thrash Band</label>
        <search-select
          v-model="selectedTrashBand"
          :options="trashBands"
          :filter-function="applySearchFilter" />
      </div>
      <div class="mb-4">
        <label class="mb-2 form-label">Favorite Country Band</label>
        <search-select
          v-model="selectedCountryBand"
          :options="countryBands"
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
      selectedTrashBand: null,
      selectedCountryBand: null,
      trashBands: [
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
      countryBands: [
        'The Carter Family',
        'Bill Monroe and His Blue Grass Boys',
        'Bob Wills',
        'Flatt & Scruggs',
        'Alabama',
        'The Louvin Brothers',
        'Charlie Daniels Band',
        'The Flying Burrito Brothers',
        'The Stanley Brothers',
        'Dixie Chicks',
        'The Judds',
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
