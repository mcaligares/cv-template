<template>
  <div class="dev-layout">
    <section class="dev-layout__side">
      <slot name="side"></slot>
    </section>
    <section class="dev-layout__body">
      <slot name="body"></slot>
    </section>
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.dev-layout {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  &__side {
    position: fixed;
    color: $color;
    width: 250px;
    height: 100%;
    padding: 30px;
    background-color: $color-primary;
  }
  &__body {
    height: 100%;
    padding: 30px 10vw;
    margin-left: 350px;
    @media only screen and (max-width: 1600px) {
      padding: 30px 5vw;
    }
    @media only screen and (max-width: 1200px) {
      padding: 30px 12px;
    }
  }
}
</style>