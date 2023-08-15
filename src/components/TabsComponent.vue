<template>
  <div class="flex space-x-4">
    <button
      :class="{
        'bg-blue-500 text-white': activeTab === 'signup',
        'bg-gray-200 text-gray-600': activeTab !== 'signup'
      }"
      @click="activeTab = 'signup'"
      class="py-2 px-4 rounded-md focus:outline-none"
    >
      Signup
    </button>
    <button
      :class="{
        'bg-blue-500 text-white': activeTab === 'login',
        'bg-gray-200 text-gray-600': activeTab !== 'login'
      }"
      @click="activeTab = 'login'"
      class="py-2 px-4 rounded-md focus:outline-none"
    >
      Login
    </button>
  </div>

  <component :is="activeTab === 'signup' ? Signup : Login" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Signup from '@/components/Signup.vue'
import Login from '@/components/Login.vue'

const activeTab = ref('signup')
</script>

<style scoped></style>
