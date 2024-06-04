import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Video Adder",
  description: "It is a video adding application which helps you how to add internal videos ina  nextjs project. It also helps to allow you to add external video links.",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  keywords: ["video", "add video", "nextjs video", "add video in next"],
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
