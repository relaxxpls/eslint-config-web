module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    './.eslintrc.js',
    'plugin:import/typescript',
  ],

  // ? Then we add our own custom typescript rules
  rules: {
    'no-redeclare': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    // ? This allows us to use async function on addEventListener().
    // * Discussion: https://twitter.com/wesbos/status/1337074242161172486
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-redeclare': [
      'warn',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
  },
};
