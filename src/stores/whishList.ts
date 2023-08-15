import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IProduct } from '@/types'

export const useCartStore = defineStore('cart', () => {
  const whishList = ref<IProduct[]>([])

  const addToWhishList = () => {}

  return {}
})
