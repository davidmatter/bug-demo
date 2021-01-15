<template>
  <div id="app">
    <h1>Hi there :)</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { StripeCardElement } from '@stripe/stripe-js'

const x: StripeCardElement | null = null
console.log(x)

export default Vue.extend({
  name: 'App',
});
</script>