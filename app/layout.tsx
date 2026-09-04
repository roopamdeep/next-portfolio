import type { Metadata } from "next";
import { Oswald, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roopamdeep Kaur",
  description: "Full stack developer portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
