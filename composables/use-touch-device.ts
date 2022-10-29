export const useTouchDevice = () => {
  const isTouchDevice = computed(
    () =>
      process.client
        ? 'ontouchstart' in window
      || navigator.maxTouchPoints > 0
        : false,
  )

  return {
    isTouchDevice,
  }
}
