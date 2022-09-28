module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'import/no-unresolved': [0],
    'react/jsx-indent': [2, 5],
    'react/jsx-indent-props': [2, 3],
    'no-tabs': [0],
    'import/extensions': [0],
    'react/require-default-props': [1],
    'import/prefer-default-export': [0],
    'react/jsx-filename-extension': [0],
    'no-mixed-spaces-and-tabs': [0],
    'react/function-component-definition': [0],
    'react/jsx-props-no-spreading': [1],
    'no-shadow': [0],
    'react/react-in-jsx-scope': [0],
    'no-underscore-dangle': [0],
    'i18next/no-literal-string': [2, { markupOnly: true }],
    'max-len': [2, { code: 100, ignoreComments: true }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  globals: {
    __IS_DEV__: true,
  },
};