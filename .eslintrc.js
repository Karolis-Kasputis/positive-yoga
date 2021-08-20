module.exports = {
  env: { browser: true, es6: true },
  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      // jsx: true,
    },
  },

  plugins: ["react", "jsx-a11y", "import", "prettier"],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  rules: {
    "react/prop-types": 0,
    "import/order": ["off"],
    "import/prefer-default-export": "off",
    "no-shadow": "off",
  },
};
