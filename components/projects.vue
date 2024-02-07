<script setup lang="ts">
import { projects } from '../config';
</script>

<template>
  <div v-if="projects?.length > 0" class="projects">
    <CvTitle class="projects__title" title="projects"/>
    <ProjectItem
      v-for="item in projects"
      :item="item"
    />
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.projects {
  &__title {
    color: $color-primary;
  }
}
</style>