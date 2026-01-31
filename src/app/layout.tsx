import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bogdan Alexandrescu",
  description: "Personal website and bio of Bogdan Alexandrescu",
  openGraph: {
    title: "Bogdan Alexandrescu",
    description: "Personal website and bio of Bogdan Alexandrescu",
    type: "website",
  },
  twitter: {
    card: "summary",
    creator: "@balx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <main className="flex min-h-screen flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
