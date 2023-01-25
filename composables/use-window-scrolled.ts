type Options = {
  pixels: number
}

export const useWindowScrolled = (options?: Options) => {
  const pos = ref(0)
  const scrolled = computed(() => pos.value > (options?.pixels ?? 48))

  const { y } = useWindowScroll()
  onMounted(() => {
    watchEffect(() => {
      pos.value = y.value
    })
  })

  return {
    scrolled,
  }
}
