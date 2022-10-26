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
      fonts: {
        sans: 'Rubik',
        serif: 'Prata',
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
    'text-dimmed': 'text-stone-2/65',
    'bg-dimmed': 'bg-stone-1/50',
    'hyperlink': 'underline decoration-underline hover:decoration-current transition-all',
  },
  theme: {
    maxWidth: {
    // 1110px + 2x16px side padding
      app: '1280px',
    },
  },
})
