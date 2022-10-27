<script lang="ts" setup>
import PodcastRogan from '~~/assets/images/podcasts/podcast-rogan.jpeg'
import PodcastLex from '~~/assets/images/podcasts/podcast-lex.jpeg'
import PodcastHuberman from '~~/assets/images/podcasts/podcast-huberman.jpeg'
import PodcastPeterson from '~~/assets/images/podcasts/podcast-peterson.jpeg'
import PodcastTheo from '~~/assets/images/podcasts/podcast-theo.jpeg'
import PodcastBtcStandard from '~~/assets/images/podcasts/podcast-btc-standard.png'
import PodcastWhatIsMoney from '~~/assets/images/podcasts/podcast-what-is-money.webp'
import PodcastSpeakingOfBtc from '~~/assets/images/podcasts/podcast-speaking-of-btc.jpeg'

const podcasts = [PodcastLex, PodcastHuberman, PodcastRogan, PodcastPeterson, PodcastTheo, PodcastBtcStandard, PodcastWhatIsMoney, PodcastSpeakingOfBtc]
</script>

<template>
  <AboutSection title="Podcasts I enjoy">
    <div
      overflow-x-scroll flex
      gap-1
      pb-5 snap-x
      scroll-mandatory
    >
      <a
        v-for="(pod, i) in podcasts"
        :key="i"
        href=""
        target="_blank"
        flex-shrink-0
      >
        <article
          ref="podCard"
          rounded-lg
          overflow-hidden
          snap-start
          p-1
          class="bg-transparent hover:gradient-warm"
          relative
        >
          <div relative overflow-hidden rounded-md>
            <GrainCover strentgh="weak" />
            <img h-40 :src="pod" alt="">
          </div>
        </article>
      </a>
    </div>
  </AboutSection>
</template>
