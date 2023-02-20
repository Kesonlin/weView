import { ref, computed } from 'vue'

const zIndex = ref(0)

export const useZIndex = () => {
  const initialZIndex = ref(2000) // TODO: useGlobalConfig
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value)

  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }
  
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex,
  }
}