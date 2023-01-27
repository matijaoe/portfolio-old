<script lang="ts" setup>
type PriceModel = {
  bitcoin: {
    usd: number
  }
}

const { data } = await useFetch<PriceModel>('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
const price = computed(() => data.value?.bitcoin.usd)

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
    bg="#f2a900"
    text-black
    p-4
    flex-1 flex flex-col
    transition-smooth
  >
    <div flex flex-col justify-between h-full>
      <div flex gap-4 items-center gap-0>
        <Icon name="ic:round-currency-bitcoin" text-5xl />
      </div>
      <p ml-auto font-mono text-2xl>
        {{ formatted }}
      </p>
    </div>
  </div>
</template>
