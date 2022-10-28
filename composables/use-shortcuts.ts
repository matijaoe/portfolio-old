export const useShortcuts = () => {
  const keys = useMagicKeys()

  const { toggleDark } = useTheme()

  const shortcuts = {
    theme: {
      key: 'cmd+j',
      handler: toggleDark,
    },
    home: {
      key: 'h',
      handler: () => navigateTo('/'),
    },
    about: {
      key: 'a',
      handler: () => navigateTo('/about'),
    },
    projects: {
      key: 'p',
      handler: () => navigateTo('/projects'),
    },
  }

  type ShortcutsThing = keyof typeof shortcuts

  const defineShortcut = (thing: ShortcutsThing) => {
    const { key, handler } = shortcuts[thing]
    whenever(keys[key], handler)
  }

  const defineShortcuts = () => (Object.keys(shortcuts) as ShortcutsThing[]).forEach(defineShortcut)

  defineShortcuts()
}
