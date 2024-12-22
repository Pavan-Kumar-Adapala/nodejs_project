import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Apply configuration to all JavaScript files
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021, // Use ECMAScript 2021 features
      sourceType: "module", // Specify module type (update if needed)
      globals: {
        ...globals.node, // Include Node.js globals
      },
    },
    rules: {
      // Custom rules can be added here
    },
  },
  // Apply recommended ESLint rules
  pluginJs.configs.recommended,
];
