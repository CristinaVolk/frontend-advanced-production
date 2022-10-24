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
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
  ],
  rules: {
    'no-param-reassign': [0],
    'react-hooks/rules-of-hooks': [2],
    'react-hooks/exhaustive-deps': [2],
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
    'react/jsx-props-no-spreading': [0],
    'no-shadow': [0],
    'react/react-in-jsx-scope': [0],
    'no-underscore-dangle': [0],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [2],
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'no-restricted-syntax': [0],
    'react/jsx-no-useless-fragment': [0],
    'i18next/no-literal-string': [
      2,
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to'],
      },
    ],
    'max-len': [2,
      {
        code: 100,
        ignoreComments: true,

      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx,js}'],
      rules: {
        'i18next/no-literal-string': [0],
        'max-len': [0],
      },
    },
  ],
};
