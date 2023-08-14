<template>
  <div class="wrapper">
    <LHeader />
    <RouterLink to="/">Home</RouterLink>
  </div>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LHeader from '@/components/Layouts/LHeader.vue'
</script>

<style scoped></style>
