<template>
  <div id="review" class="p-8 max-w-6xl mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Customer Reviews</h2>
    <div class="border p-4 rounded-lg shadow-sm">
      <h3 class="text-lg font-medium mb-2">Write a Review</h3>
      <button
        @click="handleClick"
        class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring focus:border-cyan-700"
      >
        Write Your Review
      </button>

      <article
        v-for="(item, i) in updateFilteredReviews"
        :key="i"
        class="p-6 mb-6 mt-3 text-base bg-white rounded-lg dark:bg-gray-900"
      >
        <footer class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt=""
              />
              {{ item.user_name }}

              <span class="ml-1" v-for="index in 5" :key="index">
                <i :class="starClass(index, item.rating)"></i>
              </span>
            </p>
            <br />
            <p class="text-sm text-gray-600 dark:text-gray-400">
              <time pubdate datetime="2022-02-08" title="February 8th, 2022">{{
                dayjs(item.created_at).format('MM.DD.YYYY')
              }}</time>
            </p>
          </div>
        </footer>
        <p class="text-gray-500 dark:text-gray-400">
          {{ item.msg }}
        </p>
        <LikeDislike />
      </article>
    </div>

    <CModal v-if="!store.isAuthenticated" @close="closeModal" :show="isModalShown" noHeader>
      <TabsComponent />
    </CModal>

    <div v-if="store.isAuthenticated">
      <CModal :show="isReviewModalOpen" @close="closeModal" no-header>
        <ProductComment @onSendReview="isReviewModalOpen = false" />
      </CModal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CModal from '@/components/Common/CModal.vue'
import TabsComponent from './TabsComponent.vue'
import { useAuthStore } from '@/stores/auth'
import ProductComment from './ProductComment.vue'
import { useReviewStore } from '@/stores/review'
import dayjs from 'dayjs'
import { useRoute } from 'vue-router'
import LikeDislike from './Common/LikeDislike.vue'

const isModalShown = ref(false)
const isReviewModalOpen = ref(false)
const store = useAuthStore()
const reviewStore = useReviewStore()
const route = useRoute()

const updateFilteredReviews = computed(() => {
  return reviewStore.reviewList.filter((item) => item?.productID === route.params?.id)
})

const closeModal = () => {
  isModalShown.value = false
  isReviewModalOpen.value = false
}

const handleClick = () => {
  if (store.isAuthenticated) {
    isReviewModalOpen.value = true
  } else {
    isModalShown.value = true
  }
}

const starClass = (index: number, rating: number) => {
  return index < ++rating ? 'fas fa-star' : 'far fa-star'
}
</script>

<style scoped></style>
