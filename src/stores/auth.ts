import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/types'

export const useAuthStore = defineStore('counter', () => {
  const user = ref<IUser | null>(null)
  const userList = ref<IUser[]>([])
  const isAuthenticated = computed(() => user.value !== null)

  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
  }

  const storedUserList = localStorage.getItem('userList')
  if (storedUserList) {
    userList.value = JSON.parse(storedUserList)
  }

  const signUP = async (form: IUser) => {
    user.value = form
    userList.value.push(form)

    localStorage.setItem('user', JSON.stringify(form))
    localStorage.setItem('userList', JSON.stringify(userList.value))
  }

  const logOut = () => {
    user.value = null
    localStorage.setItem('user', null)
  }

  const login = (form: IUser) => {
    const foundUser = userList.value.find(
      (u) => u.first_name === form.first_name && u.password === form.password
    )

    if (foundUser) {
      user.value = foundUser
      localStorage.setItem('user', JSON.stringify(foundUser))
      return true
    }

    return false
  }

  return { isAuthenticated, signUP, user, logOut, login }
})
