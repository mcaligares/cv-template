<script setup lang="ts">
defineProps<{
  item: {name: string, value: number }
}>();
</script>

<template>
  <div class="language-item">
    <label class="language-item__label">
      {{ item.name }}
    </label>
    <div class="language-item__value">
      <div
        v-for="i in item.value"
        class="language-item-circle language-item-circle--checked"
      />
      <div
        v-for="i in (5 - item.value)"
        class="language-item-circle"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.language-item {
  width: 100%;
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &__label {
    width: 30%;
    font-weight: 300;
  }
  &__value {
    display: flex;
    gap: 12px;
    flex-direction: row;
    justify-content: end;
    .language-item-circle {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: lightgray;
      &--checked {
        background-color: $color-progress;
      }
    }
  }
}
</style>
