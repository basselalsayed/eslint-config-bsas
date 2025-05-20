import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import sort from 'eslint-plugin-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import { config, configs } from 'typescript-eslint';

export default config(
  {
    extends: [
      js.configs.recommended,
      ...configs.recommendedTypeChecked,
      ...configs.stylisticTypeChecked,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      sort.configs['flat/recommended'],
      eslintPluginUnicorn.configs.recommended,
    ],
    files: ['**/*.{js,ts,tsx}'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports',

          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          classes: [
            'public-static-field',
            'public-static-accessor',
            'public-static-get',
            'public-static-method',

            'public-field',
            'public-accessor',
            'public-get',
            'public-method',

            'constructor',
            'protected-static-field',
            'protected-static-accessor',
            'protected-static-get',
            'protected-static-method',

            'private-static-field',
            'private-static-get',
            'private-static-accessor',
            'private-static-method',

            'protected-field',
            'protected-accessor',
            'protected-get',
            'protected-method',

            'private-field',
            'private-accessor',
            'private-get',
            'private-method',
          ],
        },
      ],
      'arrow-body-style': [
        'error',
        'as-needed',
        { requireReturnForObjectLiteral: false },
      ],
      'class-methods-use-this': 'error',
      'import/no-cycle': 'error',
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
          named: true,
          'newlines-between': 'always',
          pathGroups: [
            {
              group: 'parent',
              pattern: '@/**',
              position: 'before',
            },
          ],
        },
      ],
      'no-console': 'error',
      'prefer-arrow-callback': 'error',
      'sort/export-members': 'off',
      'sort/exports': 'error',
      'sort/import-members': 'off',
      'sort/imports': 'off',
      'sort/type-properties': 'error',
      'unicorn/consistent-destructuring': 'error',
      'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
      'unicorn/prevent-abbreviations': 'off',
      'unused-imports/no-unused-imports': 'error',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    files: ['**/*.test.{js,ts,tsx}', '**/test/*.{js,ts,tsx}'],
    rules: {
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'unicorn/no-null': 'off',
    },
  }
);
