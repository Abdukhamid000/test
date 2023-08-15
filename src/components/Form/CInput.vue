<template>
  <div>
    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >First name</label
    >
    <input
      v-bind="$attrs"
      :value="modelValue"
      type="text"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      required
    />
  </div>
</template>

<script setup lang="ts">
export interface Props {
  modelValue: number | string
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: Props['modelValue']): void
}>()

defineProps<Props>()

defineOptions({
  inheritAttrs: false
})
</script>

<style scoped></style>
