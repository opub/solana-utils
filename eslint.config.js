import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.ts'], // Specify which files to lint
    ignores: ['dist/**', 'node_modules/**'], // Files to ignore
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      semi: ['error', 'always'],
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
