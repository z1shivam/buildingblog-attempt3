import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/global/Header";
import { ThemeProvider } from "@/components/global/ThemeProvider";
import Footer from "@/components/global/Footer";

const os = Open_Sans({
  subsets: ["latin"],
  variable: "--font-os",
});

export const metadata: Metadata = {
  title: "Blog Home Page",
  description: "Homepage of my blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#111827" />
      </head>
      <body className={cn(os.variable, os.className, `pt-14 dark:bg-gray-950 text-gray-900 dark:text-white`)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
