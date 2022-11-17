import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: {
          name: 'Satoshi',
          weights: ['300', '400', '500', '600', '700'],
          provider: 'fontshare',
        },
        display: {
          name: 'Palmtick',
          provider: 'none',
        },
        mono: {
          name: 'JetBrains Mono',
          provider: 'google',
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
  },
  shortcuts: {
    // Transitions
    'transition-smooth': 'transition duration-500 ease transition-colors',
    'transition-base': 'transition duration-150 ease',
    // Sizing
    'row': 'w-full max-w-5xl mx-auto px-5 sm:px-8',
    // Properties
    'text-strong': 'font-medium text-default',
    // Text colors
    // TODO: should i put transition on text colors? nah, seems they stack and ruin it
    'text-default': 'text-stone-8 dark:text-stone-3',
    'text-opaque': 'text-stone-8/30 dark:text-white/30',
    'text-opaque-2': 'text-stone-8/50 dark:text-white/50',
    'text-dimmed': 'text-stone-8/75 dark:text-stone-50/50',
    'text-dimmed-2': 'text-stone-8/90 dark:text-stone-50/65',
    // Others
    'hyperlink': 'font-normal text-dimmed-2 hover:text-default decoration-stone-8/50 dark:decoration-stone-50/50 decoration-underline hover:decoration-current',
    'divider-x': 'divide-x-1 divide-stone-2 dark:divide-stone-8',
    'divider-y': 'divide-y-1 divide-stone-2 dark:divide-stone-8',
    // Backgrounds
    'bg-opaque': 'bg-stone-2/40 dark:bg-stone-8/60',
    'bg-default-1': 'bg-stone-50 dark:bg-stone-9',
    'bg-default-2': 'bg-stone-2 dark:bg-stone-8',
    'bg-default-3': 'bg-stone-1 dark:bg-stone-8',

  },
})
