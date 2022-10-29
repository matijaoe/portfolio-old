export const useGrain = () => {
  const showGrain = useState(() => true)

  const toggleGrain = () => {
    showGrain.value = !showGrain.value
  }

  return {
    showGrain,
    toggleGrain,
  }
}
