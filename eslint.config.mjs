export default [
  { ignores: ['dist/', 'node_modules/', '.astro/'] },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: require('astro-eslint-parser'),
      parserOptions: { extraFileExtensions: ['.astro'] },
    },
    plugins: { astro: require('eslint-plugin-astro') },
    processor: 'astro/client-side-ts',
    rules: {
      'astro/no-set-html-directive': 'warn',
      'astro/no-unused-define-vars': 'warn',
      'astro/missing-client-only-directive-value': 'warn',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    },
    plugins: { '@typescript-eslint': require('@typescript-eslint/eslint-plugin') },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx,astro}'],
    plugins: { 'jsx-a11y': require('eslint-plugin-jsx-a11y') },
    rules: {
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    },
  },
];