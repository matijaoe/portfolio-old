import {
  defineConfig,
  presetAttributify,
  presetIcons,
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
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: {
          // name: 'Maven Pro',
          name: 'Satoshi',
          weights: ['300', '400', '500', '600', '700'],
          italic: true,
        },
        display: 'Palmtick',
        mono: 'JetBrains Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: {
    'row': 'w-full max-w-full xl:max-w-5xl mx-auto px-6',
    // Properties
    'text-strong': 'font-medium text-default',
    // Text colors
    'text-default': 'text-stone-8 dark:text-stone-3',
    'text-opaque': 'text-stone-8/30 dark:text-white/40',
    'text-opaque-2': 'text-stone-8/50 dark:text-white/60',
    'text-dimmed': 'text-stone-8/75 dark:text-stone-50/50',
    'text-dimmed-2': 'text-stone-8/90 dark:text-stone-50/65',
    // Others
    'hyperlink': 'font-normal text-dimmed-2 hover:text-default decoration-stone-8/50 dark:decoration-stone-2/65 decoration-underline hover:decoration-current transition-all',
    // Backgrounds
    'bg-opaque': 'bg-stone-2/40 dark:bg-stone-50/5',
    'bg-shade-1': 'bg-stone-1 dark:bg-stone-9',
    'bg-shade-2': 'bg-stone-2 dark:bg-stone-8',
    'gradient-warm': 'bg-gradient-to-tr from-rose-4 via-amber-5 to-rose-5',
  },
})
