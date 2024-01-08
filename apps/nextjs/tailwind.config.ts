import type { Config } from "tailwindcss";
// @ts-expect-error - no types
import nativewind from "nativewind/preset";
import { fontFamily } from "tailwindcss/defaultTheme";

import baseConfig from "@acme/tailwind-config";

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [
    ...baseConfig.content,
    "../../packages/ui/**/*.{ts,tsx}",
    "../../packages/app/**/*.{ts,tsx}",
  ],
  presets: [baseConfig, nativewind],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
} satisfies Config;
