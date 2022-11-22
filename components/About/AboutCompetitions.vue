<script lang="ts" setup>
const list = [
  {
    name: 'TVZ Mc2 2021',
    nameShort: 'TVZ',
    url: 'https://mc2.tvz.hr/2021',
    project: 'Aimo',
    from: 'Feb 2021',
    to: 'Jun 2021',
    additional: '🏆🥇',
    description: 'Won first place. Won best design award.',
  },
  {
    name: 'TVZ Mc2 2022',
    nameShort: 'TVZ',
    url: 'https://mc2.tvz.hr',
    project: 'Qwiz',
    from: 'Feb 2022',
    to: 'Jun 2022',
    description: 'Bili smo osmi hehe xd',
  },
]
</script>

<template>
  <AboutSection title="Competitions" icon="ph:trophy-duotone">
    <div space-y-6 z-2>
      <div v-for="(item, i) in list" :key="i" flex flex-col gap-1>
        <div flex items-center gap-1>
          <h6 text-lg leading-snug font-semibold>
            {{ item.name }}
          </h6>
          <button
            p-2
            flex justify-center items-center
          >
            <Icon
              name="tabler:info-circle" text="sm dimmed"
            />
          </button>
        </div>

        <div flex items-center gap-2>
          <a :href="item.url" target="_blank" hyperlink>{{ item.project }}</a>
          <template v-if="item.additional">
            <span text-opaque>|</span>
            {{ item.additional }}
          </template>
        </div>

        <div flex items-center gap-2>
          <p text-dimmed text-sm>
            {{ item.description }}
          </p>
        </div>

        <div text-dimmed text-sm flex items-center gap-2>
          <span>{{ item.from }} – {{ item.to }}</span>
        </div>
      </div>
    </div>
  </AboutSection>
</template>
