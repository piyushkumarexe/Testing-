export default [
  { ignores: ['dist', 'node_modules', '.astro', '*.config.*'] },
  {
    files: ['**/*.{js,ts,astro}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      'import/resolver': { node: { extensions: ['.js', '.ts', '.astro'] } },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  {
    files: ['**/*.astro'],
    plugins: { astro: await import('eslint-plugin-astro') },
    processor: 'astro/astro',
    rules: {
      'astro/no-unused-define-vars': 'warn',
      'astro/missing-client-only-directive-value': 'warn',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { '@typescript-eslint': await import('@typescript-eslint/eslint-plugin') },
    languageOptions: {
      parser: await import('@typescript-eslint/parser'),
      parserOptions: { project: './tsconfig.json' },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
];