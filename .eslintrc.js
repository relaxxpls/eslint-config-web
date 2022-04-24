module.exports = {
  root: true,

  parser: "@babel/eslint-parser",

  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },

  plugins: ["html", "security", "prettier", "react-hooks"],

  extends: [
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "plugin:security/recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
  ],

  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },

  ignorePatterns: ["build/*", "node_modules/*", ".eslintrc.js"],

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

    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref"],
      },
    ],

    // ? React linting
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".ts", ".tsx", ".mdx"] },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
