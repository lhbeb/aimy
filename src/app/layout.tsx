import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Home - Aimy Sidney Franco",
  description: "WELCOME TO PROFESSIONAL PORTRAIT ARTIST. Capturing the essence of loved ones, bringing avian beauty to life, and empowering through the art of creation. Custom portraits, bird paintings, and art lessons.",
  keywords: "portrait artist, custom portraits, pet portraits, bird paintings, art lessons, watercolor, charcoal, pastel art",
  authors: [{ name: "Aimy Sidney Franco" }],
  openGraph: {
    title: "Home - Aimy Sidney Franco",
    description: "Professional Portrait Artist - Timeless Portraits For Cherished Memories",
    url: "https://aimysidneyfranco.com",
    siteName: "Aimy Sidney Franco",
    images: [
      {
        url: "/images/cropped-Abir_logo_Web.png",
        width: 900,
        height: 329,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Aimy Sidney Franco",
    description: "Professional Portrait Artist - Timeless Portraits For Cherished Memories",
    images: ["/images/cropped-Abir_logo_Web.png"],
  },
  icons: {
    icon: [
      { url: "/images/cropped-Abir_logo_MAIN-32x32.png", sizes: "32x32" },
      { url: "/images/cropped-Abir_logo_MAIN-192x192.png", sizes: "192x192" },
    ],
    apple: [
      { url: "/images/cropped-Abir_logo_MAIN-180x180.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="site" id="page">
          {children}
          <ChatWidget />
        </div>
      </body>
    </html>
  );
}
