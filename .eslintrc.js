module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:jest/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: ["warn", "double"],
    "react/react-in-jsx-scope": 0
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
      },
    },
  ],
};
