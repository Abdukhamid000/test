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

const likeCount = ref(0)
const dislikeCount = ref(0)
const liked = ref(false)
const disliked = ref(false)

const likeClicked = () => {
  if (!liked.value) {
    likeCount.value++
    liked.value = true
    if (disliked.value) {
      dislikeCount.value--
      disliked.value = false
    }
  }
}

const dislikeClicked = () => {
  if (!disliked.value) {
    dislikeCount.value++
    disliked.value = true
    if (liked.value) {
      likeCount.value--
      liked.value = false
    }
  }
}
</script>

<style scoped>
.active {
  background-color: #f2f2f2;
}
</style>
