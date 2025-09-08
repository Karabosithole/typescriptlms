// import js from "@eslint/js";
// import globals from "globals";
// import tseslint from "typescript-eslint";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
//   tseslint.configs.recommended,
// ]);

// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JavaScript rules
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    extends: [js.configs.recommended],
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off", // allow during development
      "eqeqeq": ["error", "always"],
      "curly": "error",
    },
  },

  // TypeScript rules
  {
    files: ["**/*.{ts,mts,cts}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,

      // General hygiene
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],

      // Avoid type system abuse
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": [
        "warn",
        { "ts-ignore": "allow-with-description" },
      ],

      // Style & consistency
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

      // Safer coding practices
      "no-throw-literal": "error",
      "eqeqeq": ["error", "always"],
      "curly": "error",
    },
  },
]);
