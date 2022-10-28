<script lang="ts" setup>

</script>

<template>
  <div>
    <NavSocials />
    <div h="screen" overflow-auto r>
      <NavHeader />

      <main
        pt-12 pb-24 pl-6 pr="6 md:16"
        max-w="full xl:5xl"
        w-full mx-auto
        flex flex-col flex-1
      >
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

