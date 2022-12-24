<script lang="ts" setup>
const { showGrain } = useGrain()
const { isDark } = useTheme()

const notificationShown = ref(true)
const hideNotification = () => {
  notificationShown.value = false
}
</script>

<template>
  <div flex-1 flex flex-col>
    <TheHeader />

    <main flex-1 flex flex-col p="t-24 b-40 md:(t-32 b-40)">
      <NuxtPage />
      <!-- <GrainCover v-show="showGrain" opacity="2" /> -->
      <GrainCover2 v-show="showGrain" :opacity="isDark ? 10 : 4" />
      <div v-show="!isDark" id="texture" />
    </main>

    <div v-show="notificationShown" fixed bottom-0 left-0 right-0 z-100 pt-1>
      <div bg-accent text-center py-3 grid="~ cols-[100px_1fr_100px]" items-center text-stone-8 font-medium text-sm>
        <div />
        <div row>
          Very much work in progress. Nothing to see here. Move along.
        </div>
        <div>
          <button @click="hideNotification">
            <Icon name="tabler:x" text-xl />
          </button>
        </div>
      </div>
    </div>
    <TheFooter mt-auto :class="{ 'mb-18': notificationShown }" />
  </div>
</template>

<style lang="postcss" scoped>
#texture {
  background-image: url('assets/images/white_wall_hash.webp');
  background-repeat: repeat;
  position: fixed;
  width: 100vw;
  inset: 0;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
}

.dark #texture {
  background-image: none;
}
</style>
