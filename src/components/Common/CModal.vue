<template>
  <Teleport to="body">
    <div
      :class="[wrapperClass, { '!opacity-100 !visible': show }]"
      @click="handleOuterClick"
      data-modal="wrapper"
      class="fixed w-full h-full bg-black/50 flex items-center justify-center p-3 z-50 top-0 left-0 invisible opacity-0 transition-all duration-300"
    >
      <Transition name="modal" mode="out-in">
        <div
          v-if="show"
          :class="[modalClass]"
          class="bg-white p-5 rounded-lg w-full max-w-xl shadow-xl"
        >
          <div class="flex items-center" v-if="!noHeader">
            <h3 class="w-full text-xl">{{ title }}</h3>
            <!-- Replace it with your icon -->
            <button class="w-max shrink-0 text-3xl" @click="$emit('close')">&times;</button>
          </div>
          <slot></slot>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { watch } from 'vue'

interface Props {
  show?: boolean
  title?: string
  wrapperClass?: string | string[]
  modalClass?: string | string[]
  noHeader?: boolean
  disableOuterClose?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: 'Modal title'
})

interface Emits {
  (e: 'close'): void
  (e: 'outer-click'): void
}
const $emit = defineEmits<Emits>()

function handleOuterClick(e: Event) {
  const target = e.target as HTMLElement
  if (target.dataset?.modal == 'wrapper') {
    $emit('outer-click')
    if (!props.disableOuterClose) {
      $emit('close')
    }
  }
}

watch(
  () => props.show,
  (val) => {
    if (val) {
      document.body.style.overflowY = 'none !important'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }
)
</script>

<style scoped>
@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-enter-active {
  animation: modal 0.3s ease-in-out;
}
.modal-leave-active {
  animation: modal 0.3s ease-in-out reverse;
}
</style>
