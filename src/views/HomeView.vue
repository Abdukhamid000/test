<template>
  <div class="container mx-auto">
    <div
      v-show="isLoading"
      class="bg-white fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center"
    >
      <div class="spinner"></div>
    </div>
    <span>{{ total }} products</span>
    <ul class="grid grid-cols-3 gap-5">
      <ProductCard v-for="item in products" :key="item.id" :product="item" />
    </ul>
    <vue-awesome-paginate
      :total-items="total"
      :items-per-page="params.limit"
      :max-pages-shown="5"
      v-model="currentPage"
      :on-click="onClickHandler"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import type { IProduct } from '@/types'
import { useRouter } from 'vue-router'

import { useApi } from '@/composables/useApi'

const currentPage = ref(1)
const products = ref<IProduct[]>([])
const total = ref(0)
const isLoading = ref(true)
const router = useRouter()
const params = reactive({
  limit: 12,
  skip: 0
})

interface IResponse {
  limit: number
  products: IProduct[]
  skip: number
  total: number
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

const fetchProducts = async (params) => {
  const { data } = await useApi().$get<IResponse>('products', { params })
  console.log(data)
  products.value = data.products
  total.value = data.total
}

const onClickHandler = (page: number) => {
  currentPage.value = page
  params.skip = (page - 1) * params.limit

  router.replace({ query: { page: page.toString() } })
  fetchProducts(params)
}

watchEffect(() => {
  const pageQuery = router.currentRoute.value.query.page
  if (pageQuery) {
    currentPage.value = parseInt(pageQuery as string)
  }
})

fetchProducts(params)
</script>

<style>
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.paginate-buttons {
  height: 40px;
  min-width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  color: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  transition:
    background-color 0.3s,
    border-color 0.3s;
}

.paginate-buttons:hover {
  background-color: #e0e0e0;
  border-color: #ccc;
}

.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}

.active-page:hover {
  background-color: #2988c8;
  border-color: #2988c8;
}
</style>
