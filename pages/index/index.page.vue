<template>
  <v-card-title class="text-h2">Welcome</v-card-title>
  <v-card-text class="text-h4">This page is:</v-card-text>
  <v-list>
    <v-list-item class="text-h5">Rendered to HTML.</v-list-item>
    <v-list-item class="text-h5">Interactive. <Counter /></v-list-item>
  </v-list>
</template>

<script setup>
import Counter from './Counter.vue'
</script>
