<template>
  <div class="avatar">
    <img class="avatar__img" src="/profile.jpeg" />
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.avatar {
  padding: 6px;
  width: 100%;
  text-align: center;
  &__img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border-width: 3px;
    border-color: $color;
    border-style: solid;
  }
}
</style>
