import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";
import jsxA11y from "eslint-plugin-jsx-a11y";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "unused-imports": unusedImports,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      // Remove unused imports automatically
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // Disallow blank lines before closing JSX tags
      "react/jsx-newline": ["error", { prevent: true }],

      // Remove unnecessary curly braces around string literals in JSX props
      "react/jsx-curly-brace-presence": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: false,
          reservedFirst: true,
        },
      ],

      // Remove unnecessary curly braces around string literals in JSX props
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],

      // Additional sorting rules for better organization
      "react/jsx-max-props-per-line": [
        "error",
        {
          maximum: 1,
          when: "multiline",
        },
      ],
    },
  },
];

export default eslintConfig;
