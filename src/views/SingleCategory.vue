<template>
  <div class="container mx-auto">
    <CSelect
      class="w-40"
      :options="options"
      value-key="val"
      label-key="label"
      v-model="selectedOpt"
      placeholder="select brand"
      selected-option-styles=""
    />
    <div
      v-show="isLoading"
      class="bg-white fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center"
    >
      <div class="spinner"></div>
    </div>
    <div v-if="category.length < 1">No Product</div>
    <div class="grid grid-cols-3">
      <ProductCard v-for="item in category" :key="item.id" :product="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

import { useRouter, useRoute } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
import type { IProduct, IResponse } from '@/types'
import CSelect from '@/components/Form/CSelect.vue'
import { useApi } from '@/composables/useApi'

interface IOption {
  label: string
  val: string
}

const router = useRouter()
const route = useRoute()
const category = ref<IProduct[]>([])
const selectedOpt = ref('')
const options = ref<IOption[]>([])
const isLoading = ref(true)

const query = ref({
  q: '',
  ...useRoute().query
})

const fetchSingleCategory = async () => {
  const { data } = await useApi().$get<IResponse>(`/products/category/${route.params.good}`)

  return data
}
// fetch products every time just for getting brands
fetchSingleCategory().then((res) => {
  const uniqueBrands = [...new Set(res.products.map((product) => product.brand))]

  options.value = uniqueBrands.map((brand) => ({
    label: brand,
    val: brand.toLowerCase()
  }))

  options.value.unshift({
    label: 'All',
    val: ' '
  })
})

const fetchProductsByBrand = async () => {
  const { data } = await useApi().$get<IResponse>(
    `/products/search?${new URLSearchParams(query.value).toString()}`
  )
  category.value = data.products
}
// if option empty return back to default
watch(selectedOpt, async (opt) => {
  console.log(opt, 'option')
  if (opt === ' ') {
    router.replace(`/category/${route.params.good}`)
    fetchSingleCategory().then((res) => {
      category.value = res.products
    })
  } else {
    query.value.q = opt
  }
})

watch(
  query,
  async (newQuery) => {
    if (newQuery.q === '') return

    fetchProductsByBrand()

    router.push({ query: query.value })
  },
  {
    deep: true,
    immediate: true
  }
)

if (query.value.q === '') {
  fetchSingleCategory().then((res) => {
    category.value = res.products
  })
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<style scoped></style>
