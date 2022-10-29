import type { Ref } from 'vue'

export const useHorizontalScroll = (elem: Ref<HTMLElement | null>) => useEventListener(elem, 'wheel', (e: WheelEvent) => {
  const isVerticalScroll = Math.abs(e.deltaY) !== 0

  // TODO: if at the end of the list, dont prevet default
  // const { arrivedState } = useScroll(elem)
  // console.log('arrivedState :>> ', arrivedState)

  if (isVerticalScroll) {
    e.preventDefault()
    elem.value!.scrollLeft += e.deltaY
  }
})
