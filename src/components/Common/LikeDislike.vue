<template>
  <div>
    <button
      @click="likeClicked"
      :class="{ active: liked || disliked }"
      :disabled="liked || disliked"
    >
      <i class="fas fa-thumbs-up"></i> {{ likeCount }}
    </button>
    <button
      @click="dislikeClicked"
      :class="{ active: liked || disliked }"
      :disabled="liked || disliked"
    >
      <i class="fas fa-thumbs-down"></i> {{ dislikeCount }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['liked', 'disliked', 'review'])
const emits = defineEmits(['like', 'dislike'])

const likeCount = ref(props.liked ? 1 : 0)
const dislikeCount = ref(props.disliked ? 1 : 0)
const buttonClicked = ref(false) // To track if any button has been clicked

const likeClicked = () => {
  if (!buttonClicked.value && !props.liked) {
    likeCount.value++
    buttonClicked.value = true
    emits('like', props.review)
  }
}

const dislikeClicked = () => {
  if (!buttonClicked.value && !props.disliked) {
    dislikeCount.value++
    buttonClicked.value = true
    emits('dislike', props.review)
  }
}
</script>

<style scoped>
.active {
  background-color: #f2f2f2;
}
</style>
