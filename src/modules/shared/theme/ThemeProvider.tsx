"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { TCommonProps } from "@/types/global.type";

export const ThemeProvider = (props: TCommonProps) => {
  const { children } = props;

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
};
