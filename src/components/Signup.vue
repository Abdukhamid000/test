<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-3 mt-3">
    <CInput v-model="user.first_name">
      <template #label>FirstName</template>
    </CInput>
    <CInput v-model="user.password" type="password">
      <template #label>Password</template>
    </CInput>

    <button class="w-full bg-blue-500 text-white p-3 rounded-md" type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CInput from '@/components/Form/CInput.vue'
import { useAuthStore } from '@/stores/auth'

const { signUP } = useAuthStore()

const user = reactive({
  first_name: '',
  password: ''
})

const handleSubmit = () => {
  if (user.first_name && user.password !== '') {
    signUP(user)
  }
}
</script>

<style scoped></style>
