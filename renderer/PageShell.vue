<template>
  <v-app>
    <v-app-bar>
      <a href="/" class="logo mr-4">
        <img src="./logo.svg" height="48" width="48" alt="logo" />
      </a>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">About</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view v-slot="{ Component }" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { usePageContext } from './usePageContext'
const pageContext = usePageContext()
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>

<style scoped>
.logo {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
