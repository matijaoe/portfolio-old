export const stripUrl = (link: string) => {
  return link.replace(/(https?:\/\/)?(www\.)?(mailto:)?(.+)/, '$4')
}
