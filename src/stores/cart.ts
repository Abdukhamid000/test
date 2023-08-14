import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IProduct } from '@/types'

export const useCartStore = defineStore('cart', () => {
  const count = ref(0)
  const cart = ref<IProduct[]>([])

  const incrementQuantity = () => {
    count.value++
  }

  const decrementQuantity = () => {
    count.value--
  }

  const incrementQuantityTo = (num: number) => {
    count.value = num
  }

  const addToCart = (product: IProduct) => {
    cart.value.push(product)
  }

  return { count, incrementQuantity, decrementQuantity, cart, addToCart, incrementQuantityTo }
})
