module.exports = {
  root: true,
  ecmaFeatures: {
    jsx: true,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,

  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    "no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    'react/react-in-jsx-scope': 'off',
    "no-debugger": "warn"
  },
};
