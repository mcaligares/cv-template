<script setup lang="ts">
defineProps<{
  item: { name: string, value: number }
}>();
</script>

<template>
  <div class="skill-item">
    <label class="skill-item__label">
      {{ item.name }}
    </label>
    <div class="skill-item-progress">
      <div
        class="skill-item-progress__value"
        :style="{ width: `${item.value * 20}%` }"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.skill-item {
  width: 100%;
  padding: 6px 0;
  display: flex;
  gap: 6px;
  flex-direction: column;
  &__label {
    font-weight: 300;
  }
  .skill-item-progress {
    width: 100%;
    height: 6px;
    border-radius: 6px;
    position: relative;
    background-color: lightgray;
    &__value {
      height: inherit;
      border-radius: inherit;
      background-color: $color-progress;
    }
  }
}
</style>
