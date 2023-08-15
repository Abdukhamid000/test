import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'

export const useAuthStore = defineStore('counter', () => {
  const user = ref(null)
  const userList = []
  const isAuthenticated = ref(false)

  const signUP = async (form) => {
    user.value = form
    isAuthenticated.value = true
  }

  const login = (form) => {}

  return { isAuthenticated, signUP }
})
