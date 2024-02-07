import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardNavBar from "@/component/layout/dashboard/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OBR facturation app",
  description: "logiciel de facturation de l'OBR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
