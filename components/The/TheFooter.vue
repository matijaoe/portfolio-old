<script lang="ts" setup>
import { socials } from '~~/data/socials'

const year = new Date().getFullYear()
</script>

<template>
  <footer
    py-14
    border="t-1 t-stone-2 dark:(t-stone-8)"
  >
    <div row space-y-10>
      <div flex="~ flex-col gap-5 md:(flex-row gap-4)" items-center justify-between flex-col md:flex-row gap-2>
        <ul flex items-center gap-1>
          <li
            v-for="(social, i) in socials"
            :key="i"
            v-tooltip="{
              delay: 0,
              content: social.label,
              theme: 'info-tooltip',
              placement: 'top',
            }"
          >
            <a
              :href="social.href"
              target="_blank"
              flex items-center justify-center
              p-2
            >
              <Icon
                :name="social.icon"
                text-xl
                text-opaque-2 hover:text-default
              />
            </a>
          </li>
        </ul>

        <p text-sm text-opaque>
          © {{ year }} Matija Osrečki. All rights reserved.
        </p>
      </div>
      <div flex justify-center>
        <p text-sm text-opaque-2 flex items-center gap-2>
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

