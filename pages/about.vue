<script lang="ts" setup>
useHead({
  title: 'About | Matija Osrecki',
})
</script>

<template>
  <div row flex flex-col gap-24>
    <div v space-y-10 lg:space-y-4>
      <BaseHeading
        v-motion-slide-visible-once-bottom
        as="h2" text-4xl sm:text-5xl md:text-6xl z-2
      >
        Hi there
      </BaseHeading>
      <div

        class="grid grid-cols-1 gap-12 mt-10 lg:(grid-cols-5 gap-40)"
      >
        <div
          v-motion-slide-visible-once-bottom
          lg:col-span-3 space-y-4 leading-loose text-stone-6 dark:text-stone-4
        >
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

        <figure
          lg:aspect-square flex flex-col relative lg:col-span-2 class="group order--1 lg:order-1"
        >
          <div v-motion-pop-visible class="img-shade" w-full bg />
          <div v-motion-slide-visible-once-bottom relative>
            <NuxtImg

              transition duration-500 ease rotate-3 hover:rotate-12
              rounded-lg
              format="webp"
              src="/avatar.webp"
              alt="Matija Osrečki avatar"
            />
          </div>
        </figure>
      </div>
    </div>

    <AboutCareer v-motion-slide-visible-once-bottom />

    <div grid lg:grid-cols-5 gap-24 lg:gap-16 justify-between lg:divider-x>
      <AboutEducation v-motion-slide-visible-once-bottom col-span-3 />
      <AboutCompetitions
        v-motion-slide-visible-once-bottom
        col-span-2
        lg:pl-16
      />
    </div>

    <div relative>
      <SVGThings absolute top--60 left--60 />

      <AboutSkills v-motion-slide-visible-once-bottom />
    </div>

    <AboutSkillsAlt v-motion-slide-visible-once-bottom />

    <AboutBooks v-motion-slide-visible-once-bottom />

    <AboutPodcasts v-motion-slide-visible-once-bottom />
  </div>
</template>

<style scoped>
figure img,
.img-shade {
  height: 300px;
  width: 300px;
}

.img-shade {
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
