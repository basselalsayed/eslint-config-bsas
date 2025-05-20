import type { Linter } from 'eslint';

export const configs: {
  recommended: Linter.Config[];
  typescript: Linter.Config[];
  react: Linter.Config[];
  stylistic: Linter.Config[];
};

declare const defaultConfig: Linter.Config[];
export default defaultConfig;
