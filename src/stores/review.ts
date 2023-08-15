import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import type { IProduct, IUser } from '@/types'

interface IReview {
  productID: string
  user_name: string
  msg: string
  created_at: Date
}

export const useReviewStore = defineStore('review', () => {
  const reviewList = ref<IReview[]>([])

  const addToReviewList = (review: IReview) => {
    console.log(review, 'review')
    reviewList.value.push(review)
  }

  return { reviewList, addToReviewList }
})
