import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { LangProvider } from "@/components/lang-provider";
import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clément Viellard — Embedded & AI Engineer",
  description:
    "Portfolio de Clément Viellard — étudiant ingénieur ECE Paris, systèmes embarqués & IA. Stage 6 mois à partir de janvier 2027.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
