module.exports = {
  globals: {
    React: true,
    JSX: true,
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },

  plugins: ["@typescript-eslint"],

  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    // ? Layer in all the JS Rules
    "./.eslintrc.js",
  ],

  // ? Then we add our own custom typescript rules
  rules: {
    "no-redeclare": "off",
    // ? This allows us to use async function on addEventListener(). Discussion: https://twitter.com/wesbos/status/1337074242161172486
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-redeclare": [
      "warn",
      {
        ignoreDeclarationMerge: true,
      },
    ],
    "@typescript-eslint/interface-name-prefix": "always",
  },
};
