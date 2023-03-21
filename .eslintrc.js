module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],

  plugins: [
    '@typescript-eslint',
  ],

  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'linebreak-style': 0,
    'no-plusplus': 'off',
    'no-multiple-empty-lines': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'max-len': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'arrow-body-style': 'off',
    camelcase: 'off',
    'no-prototype-builtins': 'off',
    'object-curly-newline': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-useless-escape': 'off',
    'class-methods-use-this': 'off',
    'operator-assignment': 'off',
  },
};
