import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

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
      <head />
      <body>
        <div className="flex flex-col min-h-screen lg:h-screen">
          <Header />
          <main className="flex-1 md:overflow-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
