import { wellfound, email, github, goodreads, linkedin, linktree, mastodon, resume, twitter, vsMarketplace, wakatime, website } from '~~/data/socials'

export type LinkModel = {
  label: string
  username?: string
  icon: string
  href: string
  to?: string
  color?: string
  colorDark?: string
  key?: string
}

export const useSocials = () => {
  const baseSocials = [
    github,
    twitter,
    linkedin,
  ]

  const socials = [
    ...baseSocials,
    mastodon,
    goodreads,
  ]

  const socialsIncludingBase = [
    ...baseSocials,
    mastodon,
    goodreads,
    wakatime,
    vsMarketplace,
    wellfound,
    linktree,
    resume,
    email,
  ]

  return {
    socials,
    website,
    baseSocials,
    socialsIncludingBase,
  }
}
