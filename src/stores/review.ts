import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IReview } from '@/types'

export const useReviewStore = defineStore('review', () => {
  const reviewList = ref<IReview[]>([])

  const storedReviews = localStorage.getItem('reviews')
  if (storedReviews) {
    reviewList.value = JSON.parse(storedReviews)
  }

  const addToReviewList = (review: IReview) => {
    review.liked = false
    review.disliked = false

    reviewList.value.push(review)

    localStorage.setItem('reviews', JSON.stringify(reviewList.value))
  }

  const setLikeStatus = (review: IReview) => {
    review.liked = true
    review.disliked = false
    localStorage.setItem('reviews', JSON.stringify(reviewList.value))
  }

  const setDislikeStatus = (review: IReview) => {
    review.liked = false
    review.disliked = true
    localStorage.setItem('reviews', JSON.stringify(reviewList.value))
  }

  return { reviewList, addToReviewList, setLikeStatus, setDislikeStatus }
})
