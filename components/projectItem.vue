<script setup lang="ts">
defineProps<{
  item: {
    start: Date,
    end: Date,
    name: string,
    summary: string
  }
}>();
</script>

<template>
  <div class="project-item">
    <ActivityHeader :name="item.name" :start="item.start" :end="item.end"/>
    <p class="project-item__summary">
      {{ item.summary }}
    </p>
  </div>
</template>

<style lang="scss">
.project-item {
  margin: 18px 0;
  &__company {
    font-size: 18px;
    font-weight: 400;
    margin-block: 0;
  }
  &__summary {
    font-family: 'Montserrat';
    margin-block: 6px;
  }
}
</style>
