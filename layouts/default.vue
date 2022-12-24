<script lang="ts" setup>
const { notificationShown } = useNotification()
</script>

<template>
  <div flex-1 flex flex-col>
    <TheHeader />

    <main
      flex-1 flex flex-col p="t-24 b-40 md:(t-32 b-40)"
      :class="{ 'mt-10': notificationShown }"
    >
      <NuxtPage />
    </main>

    <TheFooter mt-auto />
  </div>
</template>

