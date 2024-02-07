<script setup lang="ts">
import { education } from '../config';
</script>

<template>
  <div class="education">
    <CvTitle class="education__title" title="education"/>
    <EducationItem
      v-for="item in education"
      :item="item"
    />
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.education {
  &__title {
    color: $color-primary;
  }
}
</style>
