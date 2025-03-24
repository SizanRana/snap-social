import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      "no-console": "warn",
      "@typescript-eslint/explicit-function-return-type": "error",
      "no-empty-function": "warn",
      "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-empty-function": [
        "error",
        {
          allow: ["private-constructors"],
        },
      ],
    },
  },
];

export default eslintConfig;
