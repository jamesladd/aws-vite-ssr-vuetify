<template>
  <v-btn class="ml-4" @click="state.count++">Counter {{ state.count }}</v-btn>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({ count: 0 })
</script>
