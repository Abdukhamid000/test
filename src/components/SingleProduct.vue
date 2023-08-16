<template>
  <div>
    <section class="py-10 font-poppins dark:bg-gray-800">
      <div class="max-w-6xl px-4 mx-auto">
        <div class="flex flex-wrap mb-24 -mx-4">
          <!-- images -->
          <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div class="sticky top-0 overflow-hidden">
              <div class="relative mb-6 lg:mb-10 lg:h-96">
                <a class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="w-5 h-5 text-cyan-500 bi bi-chevron-left dark:text-cyan-200"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    ></path>
                  </svg>
                </a>
                <img class="object-contain w-full lg:h-full" :src="product.thumbnail" alt="" />
                <a class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="w-5 h-5 text-cyan-500 bi bi-chevron-right dark:text-cyan-200"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="flex-wrap hidden -mx-2 md:flex">
                <div class="w-1/2 p-2 sm:w-1/4" v-for="(item, i) in product.images" :key="i">
                  <a
                    class="block border border-gray-200 hover:border-cyan-400 dark:border-gray-700 dark:hover:border-cyan-300"
                    href="#"
                  >
                    <img class="object-contain w-full lg:h-28" :src="item" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- images -->
          <div class="w-full px-4 md:w-1/2">
            <div class="lg:pl-20">
              <div class="mb-6">
                <span
                  class="px-2.5 py-0.5 text-xs text-cyan-600 bg-cyan-100 dark:bg-gray-700 rounded-xl dark:text-gray-200"
                  >New Arrival</span
                >
                <h2
                  class="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300"
                >
                  {{ product.title }}
                </h2>
                <div class="flex flex-wrap items-center mb-6">
                  <a href="#review">
                    <ul class="flex mb-4 mr-2 lg:mb-0 cursor-pointer">
                      <li v-for="star in fullStars" :key="star">★</li>
                      <li v-for="star in emptyStars" :key="star">☆</li>
                    </ul>
                  </a>
                  <a
                    class="mb-4 text-xs underline hover:text-cyan-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                    href="#review"
                  >
                    View the acer store
                  </a>
                </div>
                <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                  <span>${{ computedDiscountedPrice }}</span>
                  <span
                    class="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400"
                    >${{ product.price }}</span
                  >
                </p>
              </div>
              <div class="my-2">
                <h3 class="font-semibold text-xl mb-1">Description</h3>
                <p>{{ product.description }}</p>
              </div>
              <div class="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                <span class="text-base text-gray-600 dark:text-gray-400"
                  >In Stock {{ product.stock }}</span
                >
                <p class="mt-2 text-sm text-cyan-500 dark:text-cyan-200">
                  Ships from china.
                  <span class="text-gray-600 dark:text-gray-400">
                    Most customers receive within 3-31 days.
                  </span>
                </p>
              </div>
              <div class="mb-6"></div>
              <div class="flex flex-wrap items-center mb-6">
                <div class="mb-4 mr-4 lg:mb-0">
                  <div class="w-28">
                    <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                      <button
                        class="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300"
                      >
                        <span class="m-auto text-2xl font-thin">-</span>
                      </button>
                      <input
                        type="number"
                        class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                        :placeholder="count.toString()"
                      />
                      <button
                        class="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300"
                      >
                        <span class="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mb-4 lg:mb-0">
                  <button
                    class="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-cyan-600 hover:bg-cyan-600 hover:border-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:hover:border-cyan-500 dark:hover:text-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <button
                  :class="{ 'cursor-not-allowed opacity-50': product.stock < count }"
                  class="w-full px-4 py-3 text-center text-cyan-600 bg-cyan-100 border border-cyan-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-cyan-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
                >
                  Add to cart
                </button>
              </div>
              <div class="flex gap-4 mb-6">
                <a
                  href="#"
                  class="w-full px-4 py-3 text-center text-gray-100 bg-cyan-600 border border-transparent dark:border-gray-700 hover:border-cyan-500 hover:text-cyan-700 hover:bg-cyan-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                >
                  Buy now</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import type { IProduct } from '@/types'
import { discountedPrice, calculateFullStars, calculateEmptyStars } from '@/utils'

// const { incrementQuantity, decrementQuantity, incrementQuantityTo, addToCart } = useCartStore()
const { count } = storeToRefs(useCartStore())

interface Props {
  product: IProduct
}

const props = defineProps<Props>()

// const isLessThenStock = (quantity: number) => {
//   if (quantity <= props.product.stock) {
//     return true
//   }

//   return false
// }

const computedDiscountedPrice = computed(() => {
  return discountedPrice(props.product.price, +props.product.discountPercentage)
})

const fullStars = computed(() => calculateFullStars(props.product.rating))
const emptyStars = computed(() => calculateEmptyStars(props.product.rating))

// const handleChange = (e: Event) => {
//   const target = e.target as HTMLInputElement
//   const newQuantity = +target.value

//   if (isLessThenStock(newQuantity)) {
//     incrementQuantityTo(newQuantity)
//     return
//   }

//   incrementQuantityTo(props.product.stock)
// }

// const handleIncrement = () => {
//   if (count.value < 5) {
//     incrementQuantity()
//   }
// }
</script>

<style scoped></style>
