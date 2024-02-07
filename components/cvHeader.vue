<script setup lang="ts">
import { name, position } from '../config';
</script>

<template>
  <div class="header">
    <h1 class="header__name">
      {{ name }}
    </h1>
    <hr class="header__line"/>
    <h2 class="header__position">
      {{ position }}
    </h2>
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.header {
  padding: 16px;
  background-color: $color-gray;
  text-align: center;
  &__name {
    font-size: 28px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  &__line {
    width: 150px;
    border-color: black;
  }
  &__position {
    color: gray;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>
