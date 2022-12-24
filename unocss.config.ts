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
    colors: {
      accent: 'var(--accent)',
      accentop: 'var(--accent-opaque)',
      creamy: '#F6F5F1',
    },
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
    'text-default': 'text-stone-8 dark:text-stone-3',
    'text-opaque': 'text-stone-8/20 dark:text-stone-2/20',
    'text-opaque-hovered': 'text-stone-8/50 dark:text-stone-2/50',
    'text-dimmed': 'text-stone-7 dark:text-stone-4',
    'text-dimmed-lighter': 'text-stone-7/90 dark:text-stone-4/90',
    // Others
    'hyperlink': '-mx-0.5 -my-0.5 py-0.5 px-1 rounded-sm underline hover:(!text-default underline-accent) transition-base',
    'divider-x': 'divide-x-1 divide-stone-2 dark:divide-stone-8',
    'divider-y': 'divide-y-1 divide-stone-2 dark:divide-stone-8',
    // Backgrounds
    'bg-opaque': 'bg-stone-2/40 dark:bg-stone-8/40',
    'bg-default-1': 'bg-stone-50 dark:bg-stone-9',
    'bg-default-2': 'bg-stone-2 dark:bg-stone-8',
    'bg-default-3': 'bg-[#EFEEED] dark:bg-stone-8',
  },
})
