import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navbar, Footer } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Thiago Suzuki",
  icons: {
    icon: "/profile.svg",
  }
};

type Params = {
  lang: string;
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = await params;

  const messages = await getMessages();

  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={lang} messages={messages}>
          <div className="flex min-h-screen flex-col bg-black text-white">
            <Navbar key="navbar" />
            <main className="flex-1">{children}</main>
            <Footer key="footer" />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
