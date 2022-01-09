module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  //0 = off, 1 = warn, 2 = error
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    quotes: 0,
    curly: 0,
    'prettier/prettier': 0,
    'react/jsx-no-useless-fragment': 1,
    'react-native/no-unused-styles': 1,
    'react/jsx-key': 2,
    'no-spaced-func': 0,
    'react-native/no-single-element-style-arrays': 1,
    'no-trailing-spaces': 0,
    'space-infix-ops': 0,
  },
};
