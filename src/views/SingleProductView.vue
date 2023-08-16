<template>
  <div>
    <div
      v-show="isLoading"
      class="bg-white fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center"
    >
      <div class="spinner"></div>
    </div>
    <SingleProduct v-if="!isLoading" :product="product" />
    <ProductReview v-if="!isLoading" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import SingleProduct from '@/components/SingleProduct.vue'
import { useRoute } from 'vue-router'
import { useApi } from '@/composables/useApi'
import type { IProduct } from '@/types'
import ProductReview from '@/components/ProductReview.vue'

const route = useRoute()
const product = ref<IProduct>({} as IProduct)
const isLoading = ref(true)

const fetchSingleProduct = async () => {
  const { data } = await useApi().$get<IProduct>(`/products/${route.params.id}`)
  product.value = data
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

fetchSingleProduct()
</script>

<style scoped></style>
