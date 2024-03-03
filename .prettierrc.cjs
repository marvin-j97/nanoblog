module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  endOfLine: "lf",
  printWidth: 100,
  arrowParens: "always",
  bracketSpacing: true,
  plugins: [require.resolve("prettier-plugin-astro")],
};
