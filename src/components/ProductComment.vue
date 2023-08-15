<template>
  <div>
    <p>your scrore</p>
    <CTextarea v-model="review.msg" class="mt-3" />

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
import { ref, reactive } from 'vue'
import CTextarea from '@/components/Form/CTextarea.vue'
import { useReviewStore } from '@/stores/review'
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'

const emits = defineEmits(['onSendReview'])
const store = useReviewStore()
const authStore = useAuthStore()
const route = useRoute()

const review = reactive({
  productID: '',
  msg: '',
  user_name: '',
  created_at: Date.now()
})

review.productID = route.params.id as string

const handleClick = () => {
  if (review.msg.length > 5) {
    emits('onSendReview')

    review.user_name = authStore.user?.first_name

    store.addToReviewList(review)
  } else {
    console.log('Please at least 5 char')
  }
}
</script>

<style scoped></style>
