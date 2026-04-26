import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Notes app",
  keywords: ["notes", "notepad", "online notes", "note-taking app", "digital notebook", "productivity tool", "cloud sync", "checklist", "markdown", "task manager", "organization", "personal wiki", "private notes", "заметки", "блокнот онлайн", "онлайн блокнот", "список дел", "планировщик", "веб-заметки"],
  authors : [{ name: "Harkusha Vladislav"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
        <Header />
        <main>{children}</main>
        <Footer/>
        </TanStackProvider>
        </body>
        
    </html>

  );
}
