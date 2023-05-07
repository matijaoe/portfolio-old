<script lang="ts" setup>

</script>

<template>
  <header row flex justify-start>
    <NavBar
      ml--4 py-6
      :class="{ 'bg-opaque backdrop-blur-md': scrolled }"
    />
  </header>
</template>
