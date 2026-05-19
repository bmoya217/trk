"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      themes={["light", "dark", "tremens"]}
    >
      {children}
    </NextThemesProvider>
  );
};
