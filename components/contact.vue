<script setup lang="ts">
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobileScreen, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { contactData } from '../config';
</script>

<template>
  <div class="contact">
    <CvTitle title="Contact"/>
    <ContactItem :icon="faEnvelope" :value="contactData.email" is-link/>
    <ContactItem :icon="faMobileScreen" :value="contactData.phone"/>
    <ContactItem :icon="faLocationDot" :value="contactData.address"/>
    <ContactItem :icon="faLinkedinIn" :value="contactData.linkedin" is-link/>
  </div>
</template>