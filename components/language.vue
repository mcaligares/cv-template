<script setup lang="ts">
import { languages } from '../config';
</script>

<template>
  <div class="language">
    <CvTitle title="Language"/>
    <LanguageItem
      v-for="language in languages"
      :item="language"
    />
  </div>
</template>
