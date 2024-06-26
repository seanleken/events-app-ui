import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import "./globals.css";
import "@radix-ui/themes/styles.css";

import Header from "@/components/Header/Header";
import { Theme } from "@radix-ui/themes";

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
      <UserProvider>
        <body className={inter.className}>
          <Theme accentColor="indigo">
            <Header />
            <div className="body">{children}</div>
          </Theme>
        </body>
      </UserProvider>
    </html>
  );
}
