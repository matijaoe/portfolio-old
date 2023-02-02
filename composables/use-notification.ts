export const useNotification = () => {
  const notificationShown = useState('notification', () => false)

  const hideNotification = () => {
    notificationShown.value = false
  }
  const showNotification = () => {
    notificationShown.value = true
  }

  return {
    notificationShown,
    hideNotification,
    showNotification,
  }
}
