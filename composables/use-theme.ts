import { set } from '@vueuse/core'

export const useTheme = () => {
  const isDark = useDark()

  const toggleDark = () => set(isDark, !isDark.value)

  return {
    isDark,
    toggleDark,
  }
}
