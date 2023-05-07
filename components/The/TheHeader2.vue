<script lang="ts" setup>

</script>

<template>
  <header row>
    <NavBar
      px-4 py-6 w-max mx-auto rounded-full
      :class="{ 'bg-opaque backdrop-blur-md': scrolled }"
    />
  </header>
</template>
