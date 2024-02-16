import { ReactQueryProvider } from "@/shared/libs/react-query/query.provider";
import { Toaster } from "@/shared/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </ReactQueryProvider>
    </html>
  );
}
