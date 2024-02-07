<script setup lang="ts">
import { experience } from '../config';
</script>

<template>
  <div class="experience">
    <CvTitle class="experience__title" title="experience"/>
    <ExperienceItem
      v-for="item in experience"
      :item="item"
    />
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.experience {
  &__title {
    color: $color-primary;
  }
}
</style>