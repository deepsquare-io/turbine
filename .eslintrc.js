module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '17',
    },
  },
  env: {
    es2021: true,
    browser: true,
    commonjs: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
};
