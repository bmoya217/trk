import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRK",
  description: "WoW Guild",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <div className="flex flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
