<template>
  <div>
    <button @click="likeClicked" :class="{ active: liked }">
      <i class="fas fa-thumbs-up"></i> {{ likeCount }}
    </button>
    <button @click="dislikeClicked" :class="{ active: disliked }">
      <i class="fas fa-thumbs-down"></i> {{ dislikeCount }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['liked', 'disliked', 'review'])
const emits = defineEmits(['like', 'dislike'])

const likeCount = ref(props.review.liked ? 1 : 0)
const dislikeCount = ref(props.review.disliked ? 1 : 0)

const likeClicked = () => {
  if (!props.liked) {
    likeCount.value++
    dislikeCount.value = 0
    emits('like', props.review)
  }
}

const dislikeClicked = () => {
  if (!props.disliked) {
    dislikeCount.value++
    likeCount.value = 0
    emits('dislike', props.review)
  }
}
</script>

<style scoped>
.active {
  background-color: #f2f2f2;
}
</style>
