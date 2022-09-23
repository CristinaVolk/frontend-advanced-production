module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
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
  ],
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-indent': [2, 5],
    'react/jsx-indent-props': [2, 5],
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
  },
  globals: {
    __IS_DEV__: true,
  },
};
