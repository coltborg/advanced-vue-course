<template>
  <with-dimensions>
    <div
      slot-scope="{ width }"
      :class="{ 'profile-card--horizontal': width >= 400 }"
      class="profile-card">
      <img
        class="profile-card-image"
        src="@/assets/img/toby.jpg"
        alt="">
      <div class="profile-card-meta">
        <div class="mb-4">
          <p class="text-xl leading-tight">Toby Flenderson</p>
          <p class="text-sm leading-tight text-grey-dark">Human Resources at Dunder Mifflin</p>
        </div>
        <div>
          <button class="btn btn-sm btn-pill btn-indigo-outline">Message</button>
        </div>
      </div>
    </div>
  </with-dimensions>
</template>

<script>
import WithDimensions from './WithDimensions';

export default {
  name: 'ProfileCard',
  components: {
    WithDimensions,
  },
};
</script>
