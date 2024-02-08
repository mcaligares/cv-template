<template>
  <div class="side-panel">
    <Avatar class="side-panel__mobile"/>
    <Contact/>
    <Skills class="side-panel__desktop"/>
    <Language class="side-panel__desktop"/>
  </div>
</template>

<style lang="scss">
@import '/styles/variables.scss';

.side-panel {
  @media only screen and (max-width: $media-mobile) {
    display: flex;
    &__mobile {
      width: 40%;
    }
    &__desktop {
      display: none;
    }
  }
  @media only screen and (max-width: $media-mobile-xs) {
    display: flex;
    align-items: center;
    flex-direction: column;
    &__mobile {
      width: 100%;
    }
  }
}
</style>