import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { config } from 'typescript-eslint';

export default config(eslintPluginPrettierRecommended, eslintConfigPrettier, {
  rules: {
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    'prefer-arrow-callback': 'error',
  },
});
