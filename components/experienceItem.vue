<script setup lang="ts">
defineProps<{
  item: {
    start: Date,
    end: Date,
    name: string,
    company: string,
    summary: string
  }
}>();
</script>

<template>
  <div class="experience-item">
    <ActivityHeader :name="item.name" :start="item.start" :end="item.end"/>
    <h5 class="experience-item__company">
      {{ item.company }}
    </h5>
    <p class="experience-item__summary">
      {{ item.summary }}
    </p>
  </div>
</template>

<style lang="scss">
.experience-item {
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
