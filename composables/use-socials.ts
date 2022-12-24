export type LinkModel = {
  label: string
  username?: string
  icon: string
  href: string
  to?: string
  color?: string
  key?: string
}

export const useSocials = () => {
  const { isDark } = $(useTheme())

  const baseSocials = computed(() => [
    {
      label: 'Github',
      username: '@mat2ja',
      icon: 'ph:github-logo-fill',
      href: 'https://github.com/mat2ja',
      color: isDark ? '#kfafaf9' : '#171515',
      key: 'g',
    },
    {
      label: 'Twitter',
      username: '@matijao_',
      icon: 'ph:twitter-logo-fill',
      href: 'https://twitter.com/matijao_',
      color: '#1F9CEA',
      key: 't',
    },
    {
      label: 'LinkedIn',
      username: '@matijao',
      icon: 'ph:linkedin-logo-fill',
      href: 'https://linkedin.com/in/matijao',
      color: '#0277B5',
      key: 'l',
    },
  ])

  const socials = computed<LinkModel[]>(() => [
    ...baseSocials.value,
    {
      label: 'Goodreads',
      username: '@matijao',
      icon: 'fa6-brands:goodreads',
      href: 'https://www.goodreads.com/matijao',
      color: isDark ? '#EEECDD' : '#372212',
      key: 'b',
    },
    {
      label: 'Email',
      username: 'matija.osrecki@gmail.com',
      icon: 'ph:envelope-fill',
      href: 'mailto:matija.osrecki@gmail.com',
      color: '#DB4437',
      key: 'e',
    },
  ])

  const websiteSocial = computed<LinkModel>(() => ({
    label: 'Website',
    username: '@matijao',
    icon: 'tabler:seeding',
    href: 'https://matijao.com',
    to: '/',
    color: 'var(--accent)',
    key: 'w',
  }))

  const socialsIncludingBase = computed<LinkModel[]>(() => [
    ...socials.value,
    {
      label: 'AngelList',
      username: '@matijao',
      icon: 'fa6-brands:angellist',
      href: 'https://angel.co/u/matijao',
      color: isDark ? '#FFF' : '#000',
      key: 'a',
    },
    {
      label: 'Linktree',
      username: '@matijao',
      icon: 'simple-icons:linktree',
      href: 'https://linktr.ee/matijao',
      color: '#44E660',
      key: 'r',
    },
  ])

  return {
    socials,
    websiteSocial,
    baseSocials,
    socialsIncludingBase,
  }
}

