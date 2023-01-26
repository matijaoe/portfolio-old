import { addMonths, differenceInMonths } from 'date-fns'

export const useJobs = () => {
  const calculateDuration = (from: Date, to: Date) => {
    const months = differenceInMonths(to, from)
    if (months < 12) {
      return `${months} months`
    }
    else {
      const years = Math.floor(months / 12)
      const monthsLeft = months % 12
      if (!monthsLeft) {
        if (years === 1)
          return `${years} year`

        return `${years} years`
      }

      return `${years} years, ${monthsLeft} months`
    }
  }

  const now = new Date()

  const jobs = ref([
    {
      position: 'Frontend Developer',
      company: {
        name: 'Four of them LLC',
        location: 'Zapresic, Croatia',
        url: 'https://www.4ofthem.eu/',
      },
      from: 'Aug 2022',
      to: 'Present',
      duration: calculateDuration(new Date(2022, 8), addMonths(now, 2)),
      remote: true,
      flags: ['circle-flags:hr', 'circle-flags:de'],
    },
    {
      position: 'Junior Frontend Developer',
      company: {
        name: 'Three of them Ltd',
        location: 'Zapresic, Croatia ',
        url: 'https://www.3ofthem.eu/',
      },
      from: 'Aug 2021',
      to: 'July 2022',
      duration: calculateDuration(new Date(2021, 8), new Date(2022, 8)),
      remote: true,
      flags: ['circle-flags:hr', 'circle-flags:de'],
    },
    {
      position: 'Junior Full Stack Developer',
      company: {
        name: 'Infokarta',
        location: 'Split, Croatia',
        url: 'https://infokarta.hr/',
      },
      from: 'May 2021',
      to: 'Jul 2021',
      duration: calculateDuration(new Date(2021, 5), new Date(2021, 8)),
      remote: true,
      flags: ['circle-flags:hr'],
    },
  ])

  return { jobs }
}
