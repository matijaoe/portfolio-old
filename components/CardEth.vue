<script lang="ts" setup>
type PriceModel = {
  ethereum: {
    usd: number
  }
}

const { data, error } = await useFetch<PriceModel>('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
const price = computed(() => data.value?.ethereum.usd)

const formatted = computed(() => {
  if (isDefined(price)) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.value)
  }
  return undefined
})
</script>

<template>
  <div
    transition-base
    rounded-2xl
    overflow-hidden
    bg="purple-4/60"
    text-black
    p-4
    flex-1 flex flex-col
    transition-smooth
  >
    <div flex flex-col justify-between h-full>
      <div flex gap-4 items-center gap-0>
        <Icon name="mdi:ethereum" text-5xl />
      </div>
      <p ml-auto font-mono text-2xl>
        {{ formatted }}
      </p>
      <div v-if="error">
        {{ error }}
      </div>
    </div>
  </div>
</template>
