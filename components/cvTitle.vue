<script setup lang="ts">
defineProps(['title'])
</script>

<template>
  <h3 class="title">
    {{ title }}
  </h3>
</template>

<style lang="scss">
.title {
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 12px;
}
</style>
