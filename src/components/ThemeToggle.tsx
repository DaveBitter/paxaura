"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="2"
    >
      {theme === "dark" ? (
        <SunIcon width="20" height="20" />
      ) : (
        <MoonIcon width="20" height="20" />
      )}
    </Button>
  );
}
