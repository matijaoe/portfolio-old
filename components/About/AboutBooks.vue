<script lang="ts" setup>
import BookAnimalFarm from '~~/assets/images/books/animal-farm.jpeg'
import BookCourageToBeDisliked from '~~/assets/images/books/courage-to-be-disliked.jpg'
import BookMeditations from '~~/assets/images/books/meditations.jpeg'
import BookOfMiceAndMen from '~~/assets/images/books/of-mice-and-men.jpg'
import BookPsychoCybernetics from '~~/assets/images/books/psycho-cybernetics.jpeg'
import BookShoeDog from '~~/assets/images/books/shoe-dog.jpeg'
import BookTheBookThief from '~~/assets/images/books/the-book-thief.jpg'
import BookTheDailyStoic from '~~/assets/images/books/the-daily-stoic.jpg'
import BookTheFourAgreements from '~~/assets/images/books/the-four-agreements.jpeg'
import BookWhyWeSleep from '~~/assets/images/books/why-we-sleep.jpg'

const books = [
  {
    name: 'Animal Farm',
    cover: BookAnimalFarm,
    url: 'https://www.goodreads.com/book/show/170448.Animal_Farm ',
  },
  {
    name: 'Courage to be disliked',
    cover: BookCourageToBeDisliked,
    url: '',
  },
  {
    name: 'Meditations',
    cover: BookMeditations,
    url: '',
  },
  {
    name: 'Of Mice and Men',
    cover: BookOfMiceAndMen,
    url: 'https://www.goodreads.com/book/show/890.Of_Mice_and_Men',
  },
  {
    name: 'Psycho Cybernetics',
    cover: BookPsychoCybernetics,
    url: '',
  },
  {
    name: 'Shoe Dog',
    cover: BookShoeDog,
    url: '',
  },
  {
    name: 'The Book Thief',
    cover: BookTheBookThief,
    url: '',
  },
  {
    name: 'The Daily Stoic',
    cover: BookTheDailyStoic,
    url: '',
  },
  {
    name: 'The Four Agreements',
    cover: BookTheFourAgreements,
    url: '',
  },
  {
    name: 'Why We Sleep',
    cover: BookWhyWeSleep,
    url: '',
  },
]
</script>

<template>
  <AboutSection title="Book favourites">
    <div
      overflow-x-scroll
      flex gap-2
      pb-5
      snap-x scroll-mandatory
    >
      <a
        v-for="(book, i) in books"
        :key="i" inline-block
        :href="book.url" target="_blank"
        flex-shrink-0
        rounded-lg
        overflow-hidden
        snap-start
        p-1
        class="hover:gradient-warm"
      >
        <div bg-blue-5 relative overflow-hidden rounded-md>
          <GrainCover strentgh="weak" />
          <img h-50 :src="book.cover" alt="">
        </div>
      </a>
    </div>

    <div mt--3>
      <p text-dimmed font-light>
        Started my journey in 2020. Building the habit was not easy, but I eventually fell in love with it.
      </p>
      <p text-dimmed font-light>
        Fun fact, haven't missed a day of reading in 914 days (and counting).
      </p>
      <p text-dimmed font-light>
        Find me on
        <a class="group" inline-flex items-center gap-2 group href="https://www.goodreads.com/matijao" target="_blank" hyperlink>
          Goodreads
          <Icon
            name="simple-icons:goodreads"
            text-orange-5
            class="opacity-0 translate-x--2 transition-all group-hover:(opacity-100 translate-x-0)"
          />
        </a>
      </p>
    </div>
  </AboutSection>
</template>
