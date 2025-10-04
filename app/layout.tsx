import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hubert Matras | Junior Software Engineer",
    template: "%s | Hubert Matras",
  },
  description:
    "Junior Software Engineer. React • Next.js • TypeScript • TailwindCSS.",
  openGraph: {
    title: "Hubert Matras | Junior Software Engineer",
    description: "Portfolio, projects, and contact.",
    url: "https://your-domain.com",
    siteName: "Hubert Matras",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubert Matras",
    description: "Junior Software Engineer",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen md:h-screen">
          <Header />
          <main className="flex-1 md:overflow-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
