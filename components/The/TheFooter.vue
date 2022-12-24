<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer
    pt-14
    pb-20
    border="t-1 t-stone-2 dark:(t-stone-8)"
  >
    <div row space-y-10>
      <div flex="~ flex-col gap-5 md:(flex-row gap-4)" items-center justify-between flex-col md:flex-row gap-2>
        <NavSocials />

        <div flex items-center gap-2>
          <p text-sm text-opaque-hovered>
            © {{ year }} Matija Osrečki. All rights reserved.
          </p>
        </div>
      </div>

      <div flex justify-center>
        <p text-sm text-opaque-hovered flex items-center gap-2>
          built with
          <Icon name="twemoji:red-heart" class="heartbeat" text-xs />
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.heartbeat {
  animation: beat .3s infinite alternate;
  transform-origin: center;
}

@keyframes beat {
  to {
    transform: scale(1.25);
  }
}
</style>

