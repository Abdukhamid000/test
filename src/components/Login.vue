<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-3 mt-3">
    <CInput v-model="user.first_name">
      <template #label>FirstName</template>
    </CInput>
    <CInput v-model="user.password" type="password">
      <template #label>Password</template>
    </CInput>
    <p class="text-red-400" v-if="error">Login or Passowrd error</p>
    <button class="w-full bg-blue-500 text-white p-3 rounded-md" type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import CInput from '@/components/Form/CInput.vue'
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()
const user = reactive({
  first_name: '',
  password: ''
})
const success = ref(false)
const error = ref(false)

const handleSubmit = () => {
  if (store.login(user)) {
    success.value = true
  } else {
    error.value = true

    setTimeout(() => (error.value = false), 1000)
  }
}
</script>

<style scoped></style>
