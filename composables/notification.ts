export const useNotification = () => {
  const notificationShown = useState('notification', () => true)

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
