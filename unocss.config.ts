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
          name: 'Rubik',
          weights: ['300', '400', '500', '600', '700'],
          italic: true,
        },
        display: 'Palmtick',
        mono: 'Roboto Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: {
    'text-strong': 'font-medium text-base',
    'text-base': 'text-stone-3',
    'text-dimmed': 'text-stone-50/45',
    'text-dimmed-2': 'text-stone-50/65',
    'text-opaque': 'text-white/40',
    'text-opaque-2': 'text-white/80',
    'bg-dimmed': 'bg-stone-1/50',
    'hyperlink': 'font-normal text-dimmed-2 hover:text-base decoration-stone-2/65 decoration-underline hover:decoration-current transition-all',
    'gradient-warm': 'bg-gradient-to-tr from-orange-5 to-rose-4',
    'gradient-warm-2': 'bg-gradient-to-tr from-rose-4 via-amber-5 to-rose-5',
  },
})
