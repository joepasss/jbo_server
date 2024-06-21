import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "register-hooks.js",
      "**/node_modules/**/*",
    ],
    rules: {
      "@typescript-eslint/quotes": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/comma-semi": "off",
      "@typescript-eslint/semi": "off",
      "react/no-unescaped-entities": "off",
      "no-sparse-arrays": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",

      quotes: ["error", "double"],
      semi: ["error", "always"],
      "func-style": ["error", "expression"],
    },
  }
];
