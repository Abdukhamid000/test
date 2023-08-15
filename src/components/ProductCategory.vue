<template>
  <div>
    <div class="bg-gray-100 min-h-screen py-8">
      <div class="max-w-5xl mx-auto px-4">
        <h1 class="text-3xl font-semibold mb-6">Product Categories</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="(item, i) in categories"
            :key="i"
            class="bg-white shadow-md rounded-lg p-4 cursor-pointer"
          >
            <!-- <img :src="category.image" alt="Category" class="w-16 h-16 mx-auto mb-4"> -->
            <h2 class="text-lg font-semibold text-center hover:text-blue-500">
              <RouterLink :to="{ name: 'Good', params: { good: item } }">
                {{ item }}
              </RouterLink>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useApi } from '@/composables/useApi'

const categories = ref<string[]>([])

const fetchProductCategoryList = async () => {
  const { data } = await useApi().$get<string[]>('/products/categories')

  categories.value = data
}

fetchProductCategoryList()
</script>

<style scoped></style>
