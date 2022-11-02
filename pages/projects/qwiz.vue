<script lang="ts" setup>
import { Tag } from '~~/models'
import Qwiz from '/projects/qwiz.webp'

const project = {
  name: 'Qwiz',
  description: 'Platform for creation, organization & discovery of pub quizzes.',
  tags: [Tag.Next, Tag.React, Tag.TypeScript, Tag.Nest, Tag.Prisma],
  year: 2022,
  links: [
    {
      label: 'Code',
      href: 'https://github.com/qwiz-app/qwiz',
    },
    {
      label: 'Live',
      href: 'https://app.qwiz.party',
    },
    {
      label: 'Video demo',
      href: 'https://drive.google.com/file/d/1swh3Bd43ThSkKgEnOpwXu9OcoUbOqt0l/view',
    },
    {
      label: 'API Docs',
      href: 'https://documenter.getpostman.com/view/15639222/UyrDCvUG',
    },
  ],
  thumbnail: Qwiz,
}
</script>

<template>
  <div row pb-30>
    <div flex items-center justify-between>
      <BaseHeading
        as="h2" text-4xl sm:text-5xl md:text-6xl
      >
        Qwiz
      </BaseHeading>

      <div>
        <a hyperlink>Live</a>
      </div>
    </div>

    <div mt-8 md:mt-12 flex flex-col gap-5 md:gap-8 />
  </div>
</template>
