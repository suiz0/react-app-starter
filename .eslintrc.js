module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:react/jsx-runtime" // We use the new jsx transformation
  ],
  rules: {
    'indent': ["error", 2],
  },
  settings: {
    react: {
      version: 'detect',
    },
  }
};
