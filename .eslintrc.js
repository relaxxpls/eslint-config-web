module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["security", "prettier"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "plugin:security/recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "plugin:import/recommended",
  ],
  env: {
    es2021: true,
  },
  ignorePatterns: [".eslintrc.js", "node_modules/*"],
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    "linebreak-style": "off",
    "no-console": "warn",
    "no-debugger": "warn",
    "no-param-reassign": "error",
    "no-unused-expressions": "warn",
    "no-unused-vars": "warn",
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "off",
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
    // ? Handled by eslint-plugin-import
    "node/no-missing-import": "off",
    "node/no-unpublished-import": "off",
    "node/no-unpublished-require": "off",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
  },
};
