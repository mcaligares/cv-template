<script setup lang="ts">
import { languages } from '../config';
</script>

<template>
  <CvTitle title="Language"/>
  <LanguageItem
    v-for="language in languages"
    :item="language"
  />
</template>
