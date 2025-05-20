import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import sort from 'eslint-plugin-sort';

export default [
  sort.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
];
