module.exports = {
  // Only quote properties that are invalid identifiers.
  quoteProps: 'as-needed',
  // Use single quotes instead of double quotes.
  singleQuote: true,
  // Remove parentheses around a sole arrow function parameter.
  arrowParens: 'avoid',
  // Use soft tabs (space character) set to 2 spaces.
  tabWidth: 2,
  useTabs: false,
  // Wrap prose if it exceeds the print width.
  proseWrap: 'always',
  // Specify the line length that the printer will wrap on.
  printWidth: 80,
  // Do not print spaces between brackets in object literals.
  bracketSpacing: false,
  // Print trailing commas wherever possible when multi-line.
  trailingComma: 'es5',
  // Print semicolons at the ends of statements.
  semi: true,
  // Use double quotes in JSX.
  jsxSingleQuote: false,
  // If your component has multi-line properties, close its tag on a new line.
  jsxBracketSameLine: false,
};
