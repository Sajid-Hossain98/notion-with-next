import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sotion",
  description: "A clone of the notion application.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-no-background.svg",
        href: "/logo-no-background.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-no-background.svg",
        href: "/logo-no-background.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="sotion-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
