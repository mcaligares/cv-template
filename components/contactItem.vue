<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { formatLink } from '../utils/stringUtils';

defineProps<{
  icon: IconDefinition
  value: string
  isLink?: boolean
}>();
</script>

<template>
  <div class="contact-item">
    <client-only>
      <font-awesome-icon
        :icon="icon"
        class="contact-item__icon"
      />
    </client-only>

    <p class="contact-item__value">
      <a
        v-if="isLink"
        :href="value"
        class="contact-item__value--link"
      >
        {{ formatLink(value) }}
      </a>
      <template v-else>
        {{ value }}
      </template>
    </p>
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.contact-item {
  height: 36px;
  display: flex;
  gap: 6px;
  align-items: center;
  &__icon {
    width: 12px;
    color: $color;
  }
  &__value {
    color: $color;
    font-size: 16px;
    &--link {
      color: $color;
    }
  }
}
</style>