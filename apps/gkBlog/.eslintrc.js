/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["next-typescript"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-underscore-dangle": "off",
    "@next/next/no-img-element": "off",
    "no-console": "off",
    "simple-import-sort/imports": "off",
    "@next/next/no-html-link-for-pages": ["error", "src/pages"],
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
