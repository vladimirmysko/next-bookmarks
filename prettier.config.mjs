/** @type {import("prettier").Options} */
const config = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  jsxSingleQuote: false,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  tailwindFunctions: ['cn', 'clsx', 'tw', 'twMerge'],
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
