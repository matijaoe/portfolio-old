export const useGrain = () => {
  // TODO: local storage
  const showGrain = useState(() => true)

  const toggleGrain = () => {
    showGrain.value = !showGrain.value
  }

  return {
    showGrain,
    toggleGrain,
  }
}
