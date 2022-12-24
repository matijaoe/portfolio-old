type ShortcutConfig = Record<string, { key: string; handler: () => void }>
export const useShortcuts = (config: ShortcutConfig) => {
  const keys = useMagicKeys()

  type ShortcutsThing = keyof typeof config

  const defineShortcut = (thing: ShortcutsThing) => {
    const { key, handler } = config[thing]
    whenever(keys[key], handler)
  }

  const defineShortcuts = () => (Object.keys(config) as ShortcutsThing[]).forEach(defineShortcut)

  defineShortcuts()
}

export const useGlobalShortcuts = () => {
  const { toggleDark } = useTheme()

  const config = {
    dark: {
      key: 'cmd+j',
      handler: () => toggleDark(),
    },
  }

  useShortcuts(config)
}

export const useSocialsShortcuts = () => {
  const { websiteSocial, socialsIncludingBase } = $(useSocials())

  const socials = computed(() => [websiteSocial, ...socialsIncludingBase])

  const config = $computed(() => socials.value
    .filter(item => !!item?.key)
    .reduce((acc, social) => {
      acc[social.label] = {
        key: social.key!,
        handler: () => navigateTo(social.to ?? social.href, { external: !social.to }),
      }
      return acc
    }, {} as ShortcutConfig))

  const shortcutsShown = ref(true)

  useShortcuts({ ...config })

  // const { cmd } = useMagicKeys()
  // watch(cmd, (v) => {
  //   if (v)
  //     shortcutsShown.value = true
  //   else
  //     shortcutsShown.value = false
  // })

  return {
    shortcutsShown,
  }
}
