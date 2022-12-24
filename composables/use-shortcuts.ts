export const useShortcuts = () => {
  const keys = useMagicKeys()

  const { toggleDark } = useTheme()

  const shortcuts = {
    theme: {
      key: 'cmd+j',
      handler: toggleDark,
    },
    home: {
      key: 'cltr+h',
      handler: () => navigateTo('/'),
    },
    about: {
      key: 'ctrl+a',
      handler: () => navigateTo('/about'),
    },
    projects: {
      key: 'ctrl+p',
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
