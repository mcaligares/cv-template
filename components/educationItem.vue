<script setup lang="ts">
defineProps<{
  item: {
    start: Date,
    end: Date,
    name: string,
    company: string,
  }
}>();
</script>

<template>
  <div class="education-item">
    <ActivityHeader :name="item.name" :start="item.start" :end="item.end" only-years/>
    <h5 class="education-item__company">
      {{ item.company }}
    </h5>
  </div>
</template>

<style lang="scss">
.education-item {
  margin: 18px 0;
  &__company {
    font-size: 18px;
    font-weight: 400;
    margin-block: 0;
  }
}
</style>
