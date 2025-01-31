import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const getPoppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Spotify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${getPoppins} antialiased`}>
        {children}
      </body>
    </html>
  );
}
