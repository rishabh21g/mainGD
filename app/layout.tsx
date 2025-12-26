import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoDraw - Free Infinite Whiteboard",
  description:
    "Sketch, draw, and take quick notes with a lightning-fast canvas whiteboard.",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sketchy antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
