<script lang="ts" setup>
const { hideNotification } = useNotification()
</script>

<template>
  <div z-100>
    <div bg-accent text-center py-3 grid="~ cols-[100px_1fr_100px]" items-center text-stone-8 font-medium text-sm>
      <div />
      <div row line-clamp-1>
        <slot />
      </div>
      <div>
        <button @click="hideNotification">
          <Icon name="ph:x-bold" text-xl />
        </button>
      </div>
    </div>
  </div>
</template>
