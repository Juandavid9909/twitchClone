import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streaming platform",
  description: "Streaming platform for any user",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={ inter.className }>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="gamehub-theme"
          >
            <Toaster theme="light" position="bottom-center" />

            { children }
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
