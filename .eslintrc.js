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
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 0,
    'no-plusplus': 0,
    'prefer-arrow-callback': 0,
    'space-before-function-paren': 0,
    'func-names': 0,
    'comma-dangle': 0,
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
  },
};
