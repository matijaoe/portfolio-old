<script lang="ts" setup>
useHead({
  title: 'About | Matija Osrecki',
})
definePageMeta({
  accent: 'to-blue-9',
  bg: 'bg-blue-9',
})
</script>

<template>
  <div flex flex-col gap-16 row>
    <div space-y-4>
      <BaseHeading as="h2" text-4xl sm:text-5xl md:text-6xl>
        Who am I
      </BaseHeading>
      <div flex gap-10 items-center>
        <div
          space-y-4 leading-loose
          text-dimmed-2
        >
          <p>
            Hey, I'm <span class="text-strong">Matija Osrečki</span>, started as a web developer engineer back in 2020.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, nam quos? Totam beatae reprehenderit ratione! Molestiae praesentium, esse voluptas beatae, quibusdam suscipit, distinctio fuga itaque hic et quod doloremque eius!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod ipsam laboriosam maxime odit ducimus eveniet minima magni, eum fugiat voluptatum ea rerum! Tenetur totam nesciunt, dolores nihil expedita ducimus!
            Iusto illo eaque quis, rerum exercitationem dicta commodi non, architecto aliquam itaque, est debitis! Hic sit nostrum provident eaque ratione.
          </p>
        </div>

        <div relative overflow-hidden flex-shrink-0 class="group">
          <GrainCover strentgh="mid" group-hover:hidden />
          <img rounded-lg aspect-square max-w="320px" src="https://avatars.githubusercontent.com/u/46557266?v=4" alt="">
        </div>
      </div>
    </div>

    <AboutCareer />

    <AboutSkills />

    <AboutBooks />

    <AboutPodcasts />
  </div>
</template>

