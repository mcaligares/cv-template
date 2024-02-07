<script setup lang="ts">
import { skills } from '../config';
</script>

<template>
  <div class="skill">
    <CvTitle title="skills"/>
    <SkillItem
      v-for="skill in skills"
      :item="skill"
    />
  </div>
</template>
