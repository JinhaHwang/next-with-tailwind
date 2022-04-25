module.exports = {
  extends: ['next/core-web-vitals', 'plugin:tailwindcss/recommended', 'prettier'],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': [
      2,
      {
        officialSorting: true,
      },
    ],
  },
}
