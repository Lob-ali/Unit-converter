import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Unit Converter Tool",
  description: "Convert units quickly and easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* AdSense verification script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2261409015194695"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Footer */}
        <footer style={{ marginTop: "20px", textAlign: "center" }}>
          <p>&copy; 2025 Unit Converter. All Rights Reserved.</p>
          <p>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
        </footer>
      </body>
    </html>
  );
}

