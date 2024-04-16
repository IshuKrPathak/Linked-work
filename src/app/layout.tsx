import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import {  DM_Sans } from "next/font/google";
import "./globals.css";

const FONT = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lINKED WORK",
  description: "Automate your work path. Organize your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FONT.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider></body>
    </html>
  );
}
