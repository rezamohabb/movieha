import { fontFamily } from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-vazirmatn)", ...fontFamily.sans],
      },
    },
  },
};

export default tailwindConfig;
