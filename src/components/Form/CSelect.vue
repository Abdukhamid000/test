<template>
  <div ref="select" class="relative">
    <!--  SELECTED OPTION  -->
    <div
      class="bg-white rounded px-3 py-2.5 cursor-pointer flex items-center justify-between"
      :class="selectedOptionStyles"
      @click="toggleSelect(!showOptions)"
    >
      <slot name="selectedOption" :value="value">
        <div v-if="!value" class="text-gray-100 font-medium text-sm leading-130">
          {{ placeholder }}
        </div>
        <div v-else class="text-dark text-sm font-medium leading-130">
          {{ value[labelKey] || value }}
        </div>
        <slot name="chevron">
          <span
            class="icon-chevron rotate-90 transition-all duration-200 inline-block text-gray"
            :class="{ '-rotate-90': showOptions }"
          ></span>
        </slot>
      </slot>
    </div>
    <!--  OPTIONS  -->
    <Transition name="select">
      <div
        v-if="showOptions"
        class="absolute top-full w-full bg-white border border-gray-100 rounded z-10 translate-y-3 overflow-hidden"
      >
        <slot name="options">
          <template v-if="options?.length">
            <div
              v-for="(option, idx) in options"
              :key="idx"
              class="transition-all duration-200 px-3 py-2.5 hover:bg-gray-300 cursor-pointer"
              @click="onSelect(option)"
            >
              <slot name="option" :option="option" :index="idx">
                <div class="text-dark-100 text-xs leading-130">
                  {{ option[labelKey] }}
                </div>
              </slot>
            </div>
          </template>
          <div v-else class="text-center py-2 text-sm text-dark">no_data_country</div>
          <div v-if="infiniteScroll" ref="target" class="py-0.5 w-full"></div>
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside, useIntersectionObserver } from '@vueuse/core'
import { ref, watch } from 'vue'

type TOption = string | number | { [key: string]: string | number }

export interface Props {
  modelValue: TOption
  options: TOption[]
  labelKey: string
  valueKey: string
  selectedOptionStyles: string
  placeholder: string
  infiniteScroll?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  labelKey: 'name',
  valueKey: 'id',
  placeholder: 'Select an option'
})

const emit = defineEmits<{
  (e: 'on-toggle', value: boolean): void
  (e: 'update:modelValue', value: boolean): void
  (e: 'infinite-scroll'): void
}>()

const showOptions = ref(false)
const target = ref(null)
const targetIsVisible = ref(false)

function toggleSelect(newValue = showOptions.value) {
  showOptions.value = newValue
  emit('on-toggle', showOptions.value)
}

function findOption(option: TOption) {
  console.log(option, 'option')
  return props.options.find((o) => o === option || o[props.valueKey] === option)
}

const value = ref(findOption(props.modelValue))
function onSelect(option: TOption) {
  value.value = option
  toggleSelect(false)
  emit('update:modelValue', option[props.valueKey] || option)
}

const select = ref()
onClickOutside(select, () => toggleSelect(false))

const { stop } = useIntersectionObserver(target, ([{ isIntersecting }], observerElement) => {
  targetIsVisible.value = isIntersecting
})
watch(
  () => targetIsVisible.value,
  (newValue) => {
    if (newValue) {
      emit('infinite-scroll')
    }
  }
)
watch(
  () => props.modelValue,
  (val) => {
    console.log(val, 'val')
    value.value = findOption(props.modelValue)
  },
  {
    immediate: true
  }
)
</script>

<style scoped>
.select-enter-active,
.select-leave-active {
  transition: all 0.2s ease-in-out;
}

.select-enter-from,
.select-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
