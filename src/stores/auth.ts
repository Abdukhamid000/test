import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'

export const useAuthStore = defineStore('counter', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)

  const signUP = async (form) => {
    const { data } = await useApi().$post('/auth/login', form)

    console.log(data, 'RESPONSE')
  }

  return { isAuthenticated, signUP }
})
