import { ref } from 'vue'
import { defineStore } from 'pinia'

interface IReview {
  productID: string
  user_name: string
  msg: string
  rating: number
  created_at: Date
}

export const useReviewStore = defineStore('review', () => {
  const reviewList = ref<IReview[]>([])

  const storedReviews = localStorage.getItem('reviews')
  if (storedReviews) {
    reviewList.value = JSON.parse(storedReviews)
  }

  const addToReviewList = (review: IReview) => {
    reviewList.value.push(review)

    localStorage.setItem('reviews', JSON.stringify(reviewList.value))
  }

  return { reviewList, addToReviewList }
})
