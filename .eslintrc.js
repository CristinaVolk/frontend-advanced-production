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
        'plugin:storybook/recommended',
        'prettier',
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
        'kvolk-plugin',
        'unused-imports',
    ],
    rules: {
        'unused-imports/no-unused-imports': [2],
        'kvolk-plugin/layer-import': [
            2,
            {
                alias: '@',
                ignoreImportPatterns: [
                    '**/StoreProvider',
                    '**/ThemeProvider',
                    '**/testing',
                ],
            },
        ],
        'kvolk-plugin/path-checker': [
            2,
            {
                alias: '@',
            },
        ],
        'kvolk-plugin/public-api-imports': [
            2,
            {
                alias: '@',
                testFilePatterns: [
                    '**/*.test.*',
                    '**/*.story.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'react/no-unstable-nested-components': [1],
        'import/no-import-module-exports': [1],
        '@typescript-eslint/ban-ts-comment': [0],
        '@typescript-eslint/no-namespace': [0],
        'import/no-extraneous-dependencies': [0],
        'guard-for-in': [1],
        '@typescript-eslint/no-var-requires': [0],
        'no-param-reassign': [0],
        'react-hooks/rules-of-hooks': [2],
        'react-hooks/exhaustive-deps': [2],
        'import/no-unresolved': [0],
        'import/extensions': [0],
        'react/require-default-props': [1],
        'import/prefer-default-export': [0],
        'react/jsx-filename-extension': [0],
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
        'no-undef': [0],
        'object-curly-newline': [0],
        'i18next/no-literal-string': [
            2,
            {
                markupOnly: true,
                ignoreAttribute: [
                    'modalAlign',
                    'modalTheme',
                    'border',
                    'data-testid',
                    'to',
                    'target',
                    'direction',
                    'justify',
                    'align',
                    'gap',
                    'textColor',
                    'role',
                    'as',
                    'feature',
                    'color',
                    'variant',
                ],
            },
        ],
        'max-len': [
            2,
            {
                code: 145,
                ignoreComments: true,
            },
        ],
        'react/jsx-max-props-per-line': [2, { maximum: 4 }],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
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
