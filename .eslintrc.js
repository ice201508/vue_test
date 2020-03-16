module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 1,
    'no-plusplus': 0,
    'prefer-arrow-callback': 0,
    'space-before-function-paren': 0,
    'func-names': 0,
    'comma-dangle': 0,
    'linebreak-style': 0,
  },
};
