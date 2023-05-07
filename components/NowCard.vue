<script lang="ts" setup>
const hasMore = ref(true)
</script>

<template>
  <Card h-full>
    <div flex-1 flex flex-col gap-4>
      <!-- title -->
      <div flex items-end justify-between>
        <div flex items-center gap-3>
          <Icon name="ph:compass-duotone" text-3xl mb="1.5" />
          <h4 text-2xl font-display text-default>
            Now
          </h4>
        </div>
        <div text-dimmed text-sm>
          <div>{{ Intl.DateTimeFormat('en-us', { dateStyle: 'medium' }).format(new Date('2023-03-09')) }}</div>
        </div>
      </div>

      <!-- TODO: temporary inline, convert to markdown in the future -->
      <!-- content -->
      <div prose>
        <ul>
          <li>Finished college, bacc. ing. comp. something something</li>
          <li>Burned out a bit, put side-projects on time-out</li>
          <li>Focused on making deadlines on work</li>
          <li>Diving deep into researching mortgages and financial independence</li>
        </ul>
      </div>

      <div mt-auto>
        <button
          ml-auto text-sm py-2 px-3 rounded-lg flex gap-2 items-center justify-center transition-base
          class="group hover:(bg-stone-2/70 dark:(bg-stone-8))"
          @click="navigateTo('/2023-01-03')"
        >
          Read the rest
          <Icon
            name="ph:arrow-right-duotone" text-md
            transition-base
            class="translate-x--0.5 group-hover:(translate-x-0.5)"
          />
        </button>
      </div>
    </div>

    <div mx--3 flex justify-between items-center mt-8>
      <div class="group">
        <button
          text-sm py-2 px-3 rounded-lg flex gap-2 items-center justify-center transition-base
          class="hover:(translate-x-3 bg-stone-2/70) dark:hover:(bg-stone-8) group-hover:(translate-x-3 bg-stone-2/70) dark:group-hover:(bg-stone-8) "
          @click="hasMore = true"
        >
          <Icon name="ph:caret-left-duotone" text-lg />
          Older
        </button>
      </div>
      <div class="group">
        <button
          v-if="hasMore"
          text-sm py-2 px-3 rounded-lg flex gap-2 items-center justify-center transition-base
          class="hover:(-translate-x-3 bg-stone-2/70) dark:hover:(bg-stone-8) group-hover:(-translate-x-3 bg-stone-2/70) dark:group-hover:(bg-stone-8)"
        >
          Newer
          <Icon name="ph:caret-right-duotone" text-lg />
        </button>
      </div>
    </div>
  </Card>
</template>
