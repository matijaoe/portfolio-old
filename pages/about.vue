<script lang="ts" setup>
import Resume from '/Resume.pdf'
useHead({
  title: 'About | Matija Osrečki',
})

const openPdf = () => {
  if (process.client)
    window.open(Resume, '_blank')
}
</script>

<template>
  <div row flex flex-col gap-24>
    <div space-y-8 lg:space-y-4>
      <BaseHeading as="h2" text-4xl sm:text-5xl md:text-6xl z-500>
        Hi there
      </BaseHeading>
      <div class="grid grid-cols-1 gap-12 mt-10 lg:(grid-cols-5 gap-40)">
        <div lg:col-span-3 space-y-4 leading-relaxed text-stone-6 dark:text-stone-4>
          <p>
            I'm Matija Osrečki, ambitious and determined front end oriented full stack developer from Croatia, with a special attention to detail and a keen eye for UI/UX design.
          </p>
          <p>
            I'm constantly found working on personal side projects and staying up to date with all the newest developments in this space.
          </p>
          <p>
            Most passionate about building products, web design, clean code and bitcoin. Looking for a way to contribute to the open
            source community in a meaningful way.
          </p>
          <div>
            <Button icon="ph:file-text-duotone" @click="openPdf">
              CV
            </Button>
          </div>
        </div>

        <figure
          lg:aspect-square flex flex-col relative lg:col-span-2 class="group order--1 lg:order-1"
        >
          <div class="img-shade" w-full bg />
          <div relative>
            <NuxtImg
              transition duration-500 ease rotate-3 hover:rotate-12
              rounded-lg
              :width="300"
              :height="300"
              format="webp"
              src="/avatar.webp"
              alt="Matija Osrečki avatar"
            />
          </div>
        </figure>
      </div>
    </div>

    <div>
      <AboutCareer />
    </div>

    <div grid lg:grid-cols-5 gap-4 justify-between mx--8>
      <Card col-span-3 :hoverable="false">
        <AboutEducation />
      </Card>
      <Card col-span-2 :hoverable="false">
        <AboutCompetitions />
      </Card>
    </div>

    <div relative>
      <SVGThings absolute top--50 left--60 />

      <AboutSkills />
    </div>

    <AboutBooks />

    <AboutPodcasts />
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
