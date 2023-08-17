<template>
  <div>
    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      <slot name="label" />
    </label>
    <input
      :value="modelValue"
      @input="handleInput"
      type="text"
      v-bind="$attrs"
      class="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

defineProps<Props>()

defineOptions({
  inheritAttrs: false
})
</script>

<style scoped></style>
