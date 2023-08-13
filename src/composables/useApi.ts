import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios'

export const useApi = (apiUrl?: string) => {
  const BaseUrl = apiUrl || import.meta.env.VITE_APP_API_URL

  const $service = (config?: CreateAxiosDefaults): AxiosInstance => {
    const _axios = axios.create({
      ...config,
      baseURL: BaseUrl,
      headers: {
        // Define global headers here
        ...config?.headers
      }
    })
    return _axios
  }

  function $get<R = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    return new Promise((resolve, reject) => {
      $service()
        .get<R>(url, config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }

  function $delete<R = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    return new Promise((resolve, reject) => {
      $service()
        .delete<R>(url, config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }

  function $post<R = unknown, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    return new Promise((resolve, reject) => {
      $service()
        .post<R>(url, data, config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }

  function $put<R = unknown, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    return new Promise((resolve, reject) => {
      $service()
        .put<R>(url, data, config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }

  function $patch<R = unknown, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    return new Promise((resolve, reject) => {
      $service()
        .patch<R>(url, data, config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }

  return { $get, $delete, $post, $patch, $put }
}
