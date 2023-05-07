<script lang="ts" setup>
const year = ref(new Date().getFullYear())
</script>

<template>
  <footer row>
    <div py-8 border="t-1 t-stone-2 dark:(t-stone-8)">
      <div flex="~ flex-col gap-5 md:(flex-row gap-4)" items-center justify-between flex-col md:flex-row gap-2>
        <FooterSocials />

        <div flex items-center gap-2>
          <p text-sm text-opaque-hovered>
            Matija Osrečki &copy; {{ year }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
