<script lang="ts" setup>
const { hideNotification } = useNotification()
</script>

<template>
  <div z-1000 relative>
    <div bg-accent text-center py-3 items-center text-stone-8 font-medium text-sm>
      <div row line-clamp-1 pr="12">
        <slot />
      </div>
      <div absolute class="top-50% translate-y--50%" right-4 md:right-6>
        <button aria-label="Close" @click="hideNotification">
          <Icon name="ph:x-bold" text-xl />
        </button>
      </div>
    </div>
  </div>
</template>
