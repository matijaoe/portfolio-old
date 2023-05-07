module.exports = {
  extends: '@antfu',
  rules: {
    'vue/dot-location': 'off',
    'vue/comma-dangle': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  },
}
