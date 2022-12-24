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

export const useSocialsShortcuts = () => {
  const keys = useMagicKeys()

  const shortcuts = {
    website: {
      key: 'w',
      handler: () => navigateTo('/'),
    },
    github: {
      key: 'g',
      handler: () => navigateTo('https://github.com/mat2ja', { external: true }),
    },
    twitter: {
      key: 't',
      handler: () => navigateTo('https://twitter.com/matijao_', { external: true }),
    },
    linkedin: {
      key: 'l',
      handler: () => navigateTo('https://linkedin.com/in/matijao', { external: true }),
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
