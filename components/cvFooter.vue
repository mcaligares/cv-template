<script setup lang="ts">
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

<template>
  <div class="footer">
    <button
      class="footer__button"
      @click="backToTop"
    >
      <font-awesome-icon
        class="footer-icon"
        :icon="faAngleUp"
      />
      <span class="footer-label">
        Back To Top
      </span>
    </button>
  </div>
</template>

<style lang="scss">
@import '/styles/variables.scss';

.footer {
  display: none;
  padding: 12px;
  background-color: $color-primary;
  &__button {
    width: 100%;
    color: $color;
    appearance: none;
    border: none;
    background-color: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .footer-icon {
      font-size: 26px;
    }
    .footer-label {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: $media-mobile) {
    display: block;
  }
}
</style>