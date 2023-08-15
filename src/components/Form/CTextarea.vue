<template>
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      prirorities</label
    >
    <textarea
      id="message"
      @input="handleInput"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 outline-none rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  modelValue: number | string
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: Props['modelValue']): void
}>()

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

defineProps<Props>()
</script>

<style scoped></style>
