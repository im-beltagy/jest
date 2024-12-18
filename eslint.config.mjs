import globals from "globals";
import perfectionist from "eslint-plugin-perfectionist";
import unusedImports from "eslint-plugin-unused-imports";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["app/**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  {
    plugins: {
      perfectionist,
      "unused-imports": unusedImports,
    },
    rules: {
      "no-console": 1,
      "no-unused-vars": 0,
      "unused-imports/no-unused-imports": 1,
      "unused-imports/no-unused-vars": [
        1,
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^ignore",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "perfectionist/sort-named-imports": [
        1,
        {
          order: "asc",
          type: "line-length",
        },
      ],
      "perfectionist/sort-named-exports": [
        1,
        {
          order: "asc",
          type: "line-length",
        },
      ],
      "perfectionist/sort-exports": [
        1,
        {
          order: "asc",
          type: "line-length",
        },
      ],
      "perfectionist/sort-imports": [
        1,
        {
          order: "asc",
          type: "line-length",
        },
      ],
    },
  },
];
