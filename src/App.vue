<template>
  <div>
    <LHeader />
  </div>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import LHeader from '@/components/Layouts/LHeader.vue'
</script>

<style scoped></style>
