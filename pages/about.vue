<script lang="ts" setup>
useHead({
  title: 'About | Matija Osrecki',
})
</script>

<template>
  <div row flex flex-col gap-24>
    <div space-y-10 lg:space-y-4>
      <BaseHeading as="h2" text-4xl sm:text-5xl md:text-6xl z-2>
        Hi there
      </BaseHeading>
      <div class="grid grid-cols-1 gap-12 mt-10 lg:(grid-cols-5 gap-40)">
        <div lg:col-span-3 space-y-4 leading-loose text-dimmed-2>
          <p>
            I'm <span class="text-strong">Matija Osrečki</span>, 23 year old Full Stack Developer from Croatia.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, nam quos? Totam beatae reprehenderit ratione! Molestiae praesentium, esse voluptas beatae, quibusdam suscipit, distinctio fuga itaque hic et quod doloremque eius!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod ipsam laboriosam maxime odit ducimus eveniet minima magni, voluptatum ea rerum! Tenetur totam nesciunt, dolores nihil expedita ducimus!
          </p>
        </div>

        <figure lg:aspect-square flex flex-col relative lg:col-span-2 class="group order--1 lg:order-1">
          <div class="img-bg" w-full bg />
          <div relative>
            <NuxtImg
              transition rotate-3 hover:rotate-12
              rounded-lg
              format="webp"
              src="/avatar.webp"
              alt="Matija Osrečki avatar"
            />
          </div>
        </figure>
      </div>
    </div>

    <AboutCareer />

    <div grid lg:grid-cols-5 gap-24 lg:gap-16 justify-between lg:divider-x>
      <AboutEducation col-span-3 />
      <AboutCompetitions
        col-span-2
        lg:pl-16
      />
    </div>

    <div relative>
      <SVGThings absolute top--60 left--60 />

      <AboutSkills />
    </div>

    <AboutSkillsAlt />

    <AboutBooks />

    <AboutPodcasts />
  </div>
</template>

<style scoped>
figure img,
.img-bg {
  height: 300px;
  width: 300px;
}

.img-bg {
  position: absolute;
  background-image: linear-gradient(-45deg, #FADD95 50%, #308469 50%);
  border-radius: 50%;
  filter: blur(72px) opacity(100%);
  animation: pulse 9s cubic-bezier(0, 0, 0, 0.5) infinite;
}

@keyframes pulse {
  50% {
    transform: scale(1.5);
  }
}
</style>
