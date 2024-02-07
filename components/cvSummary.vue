<script setup lang="ts">
import { summary } from '../config';
</script>

<template>
  <div class="summary">
    <CvTitle class="summary__title" title="summary"/>
    <div class="summary__value" v-html="summary"/>
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.summary {
  font-weight: 400;
  padding: 6px 0;
  &__title {
    color: $color-primary;
  }
  &__value {
    margin: 16px 0;
    font-family: 'Montserrat';
  }
}
</style>
