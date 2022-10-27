<script lang="ts" setup>
import { Command } from 'vue-command-palette'

useHead({
  title: 'Home | Matija Osrecki',
})
definePageMeta({
  accent: 'to-indigo-9',
  bg: 'bg-indigo-9',
})

const visible = ref(false)
</script>

<template>
  <div grid content-center h-full flex-1 mt-20vh>
    <div flex flex-col gap-8>
      <div font-display space-y-4>
        <p text-6xl md:text-8xl>
          Matija Osrečki
        </p>
        <p text-3xl>
          Full-Stack Developer
        </p>
      </div>

      <!-- TODO: why light font not recognized -->
      <div max-w-xl space-y-4 text-dimmed font-light>
        <div space-y-1>
          <p>Highly ambitious full-stack developer with special attention to detail and a keen eye for UI/UX design.</p>
          <p>Most passionate about building products, web design, clean code & bitcoin.</p>
        </div>

        <div>
          Currently working as a Mid Frontend Developer at
          <a
            underline target="_blank"
            class="transition-all hyperlink" href="https://4ofthem.eu/"
          >
            Four of them LLC
          </a>.
        </div>
      </div>
    </div>

    <!-- <Command.Dialog :visible="visible">
      <template #header>
        <Command.Input placeholder="Type a command or search..." />
      </template>
      <template #body>
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Letters">
            <Command.Item>a</Command.Item>
            <Command.Item>b</Command.Item>
            <Command.Separator />
            <Command.Item>c</Command.Item>
          </Command.Group>

          <Command.Item>Apple</Command.Item>
        </Command.List>
      </template>
    </Command.Dialog> -->
  </div>
</template>
