module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript',
    './.eslintrc.js',
    'plugin:import/typescript',
  ],

  // ? Then we add our own custom typescript rules
  rules: {
    'no-redeclare': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    // ? This allows us to use async function on addEventListener().
    // * Discussion: https://twitter.com/wesbos/status/1337074242161172486
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/no-redeclare': ['warn', { ignoreDeclarationMerge: true }],
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { args: 'none', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
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
};
