<template>
  <div class="container mx-auto">
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
import { ref, reactive } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { IProduct } from '@/types/index'
import 'vue-awesome-paginate/dist/style.css'

import { useApi } from '@/composables/useApi'

const currentPage = ref(1)
const products = ref<IProduct[]>([])
const total = ref(0)
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

const fetchProducts = async (params) => {
  const { data } = await useApi().$get<IResponse>('products', { params })
  console.log(data)
  products.value = data.products
  total.value = data.total
}

const onClickHandler = (page: number) => {
  currentPage.value = page
  params.skip = (page - 1) * params.limit
  fetchProducts(params)
}

fetchProducts(params)
</script>

<style scoped>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
