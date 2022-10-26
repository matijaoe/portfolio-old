<script lang="ts" setup>

</script>

<template>
  <div>
    <NavSocials />

    <div h="screen md:[calc(100vh_-_32px)]" overflow-auto>
      <NavHeader />

      <main
        pl-6
        pr-6 md:pr-16
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

