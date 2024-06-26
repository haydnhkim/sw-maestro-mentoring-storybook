module.exports = {
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '^prop-types',
    '^classnames$',
    '^jotai',
    '^@(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^[./]',
  ],
  importOrderSeparation: false,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
