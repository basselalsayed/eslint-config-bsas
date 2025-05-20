# eslint-config-bsas

An opinionated ESlint typescript-react config

## 📦 Installation

💡 Requires ESLint v9+ and uses the [Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files) format.

Install the config with your preferred package manager:

### `pnpm`

```sh
pnpm add -D eslint-config-bsas
```

### `npm`

```sh
npm install -D eslint-config-bsas
```

### `bun`

```sh
bun add -d eslint-config-bsas
```

### `yarn`

```sh
yarn add -D eslint-config-bsas
```

## 🛠️ Usage

### 🧭 Recommended (Default) Config

```js
// eslint.config.js
import config from 'eslint-config-bsas';
import tseslint from 'typescript-eslint';

export default tseslint.config(config);
// or
export default tseslint.config(config, ...overrides);

```

### 🧩 Modular Usage

If you'd rather opt in to specific parts of the config:

```js
// eslint.config.js
import { configs } from 'eslint-config-bsas';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  configs.typescript,
  configs.react,
  configs.stylistic
);
```

> ⚠️ stylistic depends on Prettier and eslint-config-prettier. Make sure they are installed if you include it.

## ESLint Config Dependencies

This config relies on the following ESLint plugins and packages:

- [@eslint/js](https://www.npmjs.com/package/@eslint/js) – ^9.26.0
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) – ^8.32.1
- [eslint](https://www.npmjs.com/package/eslint) – ^9.26.0
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) – ^10.1.5
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript) – ^4.3.4
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) – ^2.31.0
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) – ^6.10.2
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) – ^5.4.0
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) – ^7.37.5
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) – ^5.2.0
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh) – ^0.4.20
- [eslint-plugin-sort](https://www.npmjs.com/package/eslint-plugin-sort) – ^4.0.0
- [eslint-plugin-testing-library](https://www.npmjs.com/package/eslint-plugin-testing-library) – ^7.2.0
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) – ^59.0.1
- [eslint-plugin-unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports) – ^4.1.4

## Compatability

This config has only been tested with the new flat config style. It may work with versions of ESLint <8
