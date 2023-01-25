import { get } from '@vueuse/core'

export const useTheme = () => {
  const colorMode = useColorMode()

  const isDark = computed(() => colorMode.value === 'dark')

  const toggleDark = () => {
    colorMode.preference = get(isDark) ? 'light' : 'dark'
  }

  return {
    colorMode,
    isDark,
    toggleDark,
  }
}
