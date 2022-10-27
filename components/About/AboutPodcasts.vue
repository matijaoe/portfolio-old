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
      overflow-x-scroll
      flex gap-4
      pb-5
    >
      <div

        v-for="(pod, i) in podcasts" :key="i"
        flex-shrink-0 aspect-square w-30
        rounded-md
        border-4 border-transparent hover:border-amber-5
        overflow-hidden
      >
        <img :src="pod" alt="">
      </div>
    </div>
  </AboutSection>
</template>
