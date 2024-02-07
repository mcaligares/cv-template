<script setup lang="ts">
import {formatDate} from '../utils/dateUtils';
defineProps<{
  name: string,
  start: Date,
  end: Date,
  onlyYears?: boolean
}>();
</script>

<template>
  <div class="activity-header">
    <h4 class="activity-header__name">
      {{ name }}
    </h4>
    <div v-if="onlyYears" class="activity-header__date">
      {{ start.getFullYear() }} - {{ end.getFullYear() }}
    </div>
    <div v-else class="activity-header__date">
      {{ formatDate(start) }} - {{ formatDate(end) }}
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.activity-header {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__name {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
  }
  &__date {
    font-size: 16px;
    font-weight: 500;
    color: $color-primary;
  }
}
</style>
