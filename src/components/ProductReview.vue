<template>
  <div class="p-8 max-w-6xl mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Customer Reviews</h2>
    <div class="border p-4 rounded-lg shadow-sm">
      <h3 class="text-lg font-medium mb-2">Write a Review</h3>
      <button
        @click="isModalShown = true"
        class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring focus:border-cyan-700"
      >
        Write Your First Review
      </button>
    </div>
    <CModal :show="isModalShown" @close="closeModal"> <Login /> </CModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Login from '@/components/Login.vue'
import CModal from '@/components/Common/CModal.vue'

const isModalShown = ref(false)

const closeModal = () => {
  isModalShown.value = false
}
</script>

<style scoped></style>
