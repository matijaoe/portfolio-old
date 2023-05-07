<script lang="ts" setup>
import weatherDescriptionJson from '~/data/weather-description.json'

useHead({
  title: 'Home | Matija Osrečki',
})

const now = useNow({ interval: 1000 })

const formattedTime = computed(() => {
  return Intl.DateTimeFormat('en-us', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'Europe/Zagreb',
  }).format(now.value)
})

export type WeatherResponse = {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_weather: CurrentWeather
}

export type CurrentWeather = {
  temperature: number
  windspeed: number
  winddirection: number
  weathercode: number
  is_day: number
  time: string
}

const { data: weatherData } = await useFetch<WeatherResponse>('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true')

const currentWeather = computed(() => {
  return weatherData.value?.current_weather
})
const weatherCode = computed(() => {
  return currentWeather.value?.weathercode
})
const weatherDescription = computed(() => {
  if (!weatherCode.value)
    return
  if (!currentWeather.value)
    return

  return weatherDescriptionJson[weatherCode.value][currentWeather.value.is_day ? 'day' : 'night']
})
</script>

<template>
  <div flex flex-col gap-40 mt-14vh relative>
    <div row flex flex-col gap-8>
      <div z-2 space-y-4 relative>
        <SVGCloud z-1 aspect-square absolute top="-55" left="25vw md:50vw lg:120" />

        <p font-display text-6xl md:text-8xl z-2 relative>
          Matija Osrečki
        </p>
      </div>

      <div max-w-48ch space-y-4 text-stone-7 dark:text-stone-4 leading-relaxed z-2>
        <p>
          Self-motivated front-end oriented software developer, very much in love with all things web development. Obsessed about Bitcoin too.
        </p>

        <div text-sm flex items-center gap-2 text-stone-5 dark:text-stone-5 mt="!8">
          <div flex items-center gap-3>
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-65" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>

            <p>
              Zagreb, Croatia
            </p>
          </div>

          ·

          <p tabular-nums>
            {{ formattedTime }}
          </p>

          <template v-if="currentWeather">
            ·
            <div flex items-center gap-1>
              <!-- <Icon name="ph:sun-duotone" text-base /> -->

              <img :src="weatherDescription.image" alt="" h-2.5ch>
              <p>{{ Math.round(currentWeather.temperature) }}&deg;,</p>

              <p>{{ weatherDescription.description }}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
