module.exports = {
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  plugins: ['react', 'react-hooks', 'jsx-a11y'],

  extends: [
    'plugin:import/recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],

  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },

  ignorePatterns: ['**/node_modules/', '.eslintrc.js'],

  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'comma-dangle': ['error', 'only-multiline'],
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-param-reassign': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'warn',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
    // ? Handled by eslint-plugin-import
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],

    // ? React rules
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'react/display-name': 'warn',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'] },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
