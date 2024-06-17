import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
      <body className={cn(os.variable, os.className, `pt-14`)}>
        {children}
      </body>
    </html>
  );
}
