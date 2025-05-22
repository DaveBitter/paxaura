"use client";

import { Theme } from "@radix-ui/themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "@radix-ui/themes/styles.css";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      value={{
        light: "light",
        dark: "dark",
      }}
    >
      <Theme
        accentColor="purple"
        grayColor="slate"
        scaling="100%"
        radius="medium"
        appearance="inherit"
        panelBackground="solid"
      >
        {children}
      </Theme>
    </NextThemesProvider>
  );
}
