import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/types'

export const useAuthStore = defineStore('counter', () => {
  const user = ref<IUser | null>(null)
  const userList = ref<IUser>()
  const isAuthenticated = ref(false)

  const signUP = async (form: IUser) => {
    user.value = form
    console.log(user.value, 'user')
    isAuthenticated.value = true
  }

  const login = (form) => {}

  return { isAuthenticated, signUP }
})
