<template>
  <div>
    <p>your scrore</p>
    <span
      class="cursor-pointer"
      v-for="(star, index) in stars"
      :key="index"
      @click="selectStar(index)"
    >
      <i :class="star ? 'fas fa-star' : 'far fa-star'"></i>
    </span>
    <CTextarea v-model="review.msg" class="mt-3" />
    <span class="text-red-400" v-show="isMin">msg should be at least 5 char</span>
    <button
      @click="handleClick"
      class="w-full bg-blue-500 text-white p-3 rounded-md mt-4"
      type="submit"
    >
      send review
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import CTextarea from '@/components/Form/CTextarea.vue'
import { useReviewStore } from '@/stores/review'
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'

const emits = defineEmits(['onSendReview'])
const store = useReviewStore()
const authStore = useAuthStore()
const route = useRoute()
const isMin = ref(false)
const stars = ref([false, false, false, false, false])

const review = reactive({
  productID: '',
  msg: '',
  user_name: '',
  created_at: Date.now(),
  rating: 0
})

review.productID = route.params.id as string

const handleClick = () => {
  if (review.msg.length > 5) {
    isMin.value = false
    emits('onSendReview')

    review.user_name = authStore.user?.first_name

    store.addToReviewList(review)
  } else {
    isMin.value = true
  }
}

const selectStar = (index: number) => {
  stars.value = stars.value.map((star, i) => i <= index)

  review.rating = index + 1
}
</script>

<style scoped></style>
