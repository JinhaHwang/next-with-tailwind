module.exports = {
  extends: ['next/core-web-vitals', 'plugin:tailwindcss/recommended', 'prettier'],
  plugins: ['tailwindcss'],
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'tailwindcss/classnames-order': [
      2,
      {
        officialSorting: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: true,
      },
    ],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
  env: {
    browser: true,
    es2021: true,
  },
}
