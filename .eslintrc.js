module.exports = {
  extends: [
    './rules/base',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-airbnb',
    './rules/es',
    './rules/import',
    './rules/jsx-a11y',
    './rules/react',
    './rules/typescript',
  ],
  parser: '@typescript-eslint/parser',
};
