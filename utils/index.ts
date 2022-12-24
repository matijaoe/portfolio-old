export const stripUrl = (link: string) => {
  return link.replace(/(https?:\/\/)?(www\.)?(mailto:)?(.+)/, '$4')
}

export const copy = (text: string) => {
  navigator.clipboard.writeText(text)
}
