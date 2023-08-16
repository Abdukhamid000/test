import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/types'

export const useAuthStore = defineStore('counter', () => {
  const user = ref<IUser | null>(null)
  const userList = ref<IUser>()
  const isAuthenticated = computed(() => user.value !== null)

  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
  }

  const signUP = async (form: IUser) => {
    user.value = form

    isAuthenticated.value = true

    localStorage.setItem('user', JSON.stringify(form))
  }

  // const login = (form) => {}

  return { isAuthenticated, signUP, user }
})
