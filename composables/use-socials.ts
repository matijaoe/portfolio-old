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

  const github = computed<LinkModel>(() => ({
    label: 'GitHub',
    username: '@mat2ja',
    icon: 'ph:github-logo-fill',
    href: 'https://github.com/mat2ja',
    color: isDark ? '#fafaf9' : '#171515',
    key: 'g',
  }))

  const twitter = computed<LinkModel>(() => ({
    label: 'Twitter',
    username: '@matijao_',
    icon: 'ph:twitter-logo-fill',
    href: 'https://twitter.com/matijao_',
    color: '#1F9CEA',
    key: 't',
  }))

  const linkedin = computed<LinkModel>(() => ({
    label: 'LinkedIn',
    username: '@matijao',
    icon: 'ph:linkedin-logo-fill',
    href: 'https://linkedin.com/in/matijao',
    color: '#0277B5',
    key: 'l',
  }))

  const website = computed<LinkModel>(() => ({
    label: 'Website',
    username: '@matijao',
    icon: 'tabler:seeding',
    href: 'https://matijao.com',
    to: '/',
    color: 'var(--accent)',
    key: 'm',
  }))

  const mastodon = computed<LinkModel>(() => ({
    label: 'Mastodon',
    username: '@matijao',
    icon: 'bxl:mastodon',
    href: 'https://elk.zone/fosstodon.org/@matijao',
    color: '#CC7D23',
    key: 's',
  }))

  const email = computed<LinkModel>(() => ({
    label: 'Email',
    username: 'matija.osrecki@gmail.com',
    icon: 'ph:envelope-fill',
    href: 'mailto:matija.osrecki@gmail.com',
    color: '#DB4437',
    key: 'e',
  }))

  const baseSocials = computed(() => [
    github.value,
    twitter.value,
    linkedin.value,
  ])

  const goodreads = computed<LinkModel>(() => ({
    label: 'Goodreads',
    username: '@matijao',
    icon: 'fa6-brands:goodreads',
    href: 'https://www.goodreads.com/matijao',
    color: isDark ? '#EEECDD' : '#372212',
    key: 'b',
  }))

  const wakatime = computed<LinkModel>(() => ({
    label: 'WakaTime',
    username: '@matijao',
    icon: 'simple-icons:wakatime',
    href: 'https://wakatime.com/@matijao',
    color: isDark ? '#FFF' : '#000',
    key: 'w',
  }))
  const vsMarketplace = computed<LinkModel>(() => ({
    label: 'VS Marketplace',
    username: '@matijao',
    icon: 'simple-icons:visualstudiocode',
    href: 'https://marketplace.visualstudio.com/publishers/matijao',
    color: '#22A5F1',
    key: 'v',
  }))
  const angellist = computed<LinkModel>(() => ({
    label: 'AngelList',
    username: '@matijao',
    icon: 'fa6-brands:angellist',
    href: 'https://angel.co/u/matijao',
    color: isDark ? '#FFF' : '#000',
    key: 'a',
  }))
  const linktree = computed<LinkModel>(() => ({
    label: 'Linktree',
    username: '@matijao',
    icon: 'simple-icons:linktree',
    href: 'https://linktr.ee/matijao',
    color: '#44E660',
    key: 'k',
  }))
  const resume = computed<LinkModel>(() => ({
    label: 'Resume',
    username: '',
    icon: 'academicons:cv',
    href: 'https://cv.matijao.com',
    color: 'var(--accent)',
    key: 'r',
  }))

  const socials = computed<LinkModel[]>(() => [
    ...baseSocials.value,
    mastodon.value,
    goodreads.value,
    email.value,
  ])

  const socialsIncludingBase = computed<LinkModel[]>(() => [
    ...baseSocials.value,
    mastodon.value,
    goodreads.value,
    wakatime.value,
    vsMarketplace.value,
    angellist.value,
    linktree.value,
    resume.value,
    email.value,
  ])

  return {
    socials,
    website,
    baseSocials,
    socialsIncludingBase,
  }
}
