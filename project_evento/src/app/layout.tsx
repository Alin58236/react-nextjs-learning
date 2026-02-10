import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evento - Find events near you",
  description: "Discover and attend over 10,000 events worldwide!",
  keywords: [
    "events",
    "event management",
    "find events",
    "local events",
    "event discovery",
    "community events",
    "event planning",
    "attend events",
    "event calendar",
  ],
  authors: [{ name: "Stoia" }],
  creator: "Stoia",
  openGraph: {
    title: "Evento - Find events near you",
    description: "Discover and attend over 10,000 events worldwide!",
    url: "https://evento.com",
    siteName: "Evento",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evento - Find events near you",
    description: "Discover and attend over 10,000 events worldwide!",
    creator: "@stoia",
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white overflow-y-scroll`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
