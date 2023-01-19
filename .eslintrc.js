module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
      "@typescript-eslint/eslint-plugin"
  ],
  extends: [
    "alloy",
    "alloy/react",
    "alloy/typescript"
  ],
  settings: {
    react: {
        version: "detect"
    }
  },
  globals: {
    JSX: true,
    NodeJS: true,
  }
};
