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
  <div row flex flex-col gap-16>
    <div space-y-4>
      <BaseHeading as="h2" text-4xl sm:text-5xl md:text-6xl>
        Who am I
      </BaseHeading>
      <div flex gap-40 items-center>
        <div
          space-y-4 leading-loose
          text-dimmed-2
        >
          <p>
            Hey, I'm <span class="text-strong">Matija Osrečki</span>, started as a web developer back in 2020.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, nam quos? Totam beatae reprehenderit ratione! Molestiae praesentium, esse voluptas beatae, quibusdam suscipit, distinctio fuga itaque hic et quod doloremque eius!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod ipsam laboriosam maxime odit ducimus eveniet minima magni, voluptatum ea rerum! Tenetur totam nesciunt, dolores nihil expedita ducimus!
          </p>
        </div>

        <div flex-shrink-0 class="group">
          <figure aspect-square>
            <div class="img-bg" w-full bg />
            <div relative overflow-hidden>
              <!-- <GrainCover strentgh="mid" group-hover:hidden /> -->
              <img rounded-lg w-full src="https://avatars.githubusercontent.com/u/46557266?v=4" alt="">
            </div>
          </figure>
        </div>
      </div>
    </div>

    <AboutCareer />

    <div relative>
      <SVGThings absolute top--60 left--60 />

      <AboutSkills />
    </div>

    <AboutBooks />

    <AboutPodcasts />
  </div>
</template>

<style scoped>
figure {
  display: flex;
  position: relative;
  flex-direction: column;
}

img {
  z-index: 1;
}

figure img,
.img-bg {
  height: 300px;
  width: 300px;
}

.img-bg {
  position: absolute;
  background-image: linear-gradient(-45deg, #FADD95 50%, #308469 50%);
  border-radius: 50%;
  filter: blur(72px);
  animation: pulse 10s cubic-bezier(0, 0, 0, 0.5) infinite;
}

@keyframes pulse {
  50% {
    transform: scale(1.5);
  }
}
</style>
