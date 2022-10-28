export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    const pageLeaveDelay = 150

    setTimeout(() => {
      window.scrollTo(0, 0)
    }, pageLeaveDelay)
  })
})
