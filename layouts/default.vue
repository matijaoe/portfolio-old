<script lang="ts" setup>

</script>

<template>
  <div>
    <NavSocials />

    <div h="screen sm:[calc(100vh_-_32px)]" overflow-auto>
      <NavHeader pr-6 />

      <main
        pr-6
        pt-8 pb-24
        max-w="full xl:6xl"
        w-full
        mx-auto
        flex flex-col flex-1
      >
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

