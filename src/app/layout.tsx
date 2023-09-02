'use client';
import { useEffect } from 'react';
import './globals.css'
import type { Metadata } from 'next'
import ModalProvider from '@/provider/ModalProvider';

export const metadata: Metadata = {
  title: 'Rello',
  description: 'A chatting application for you and your fellow friends!',
  keywords: ["chat"],
  themeColor: "#E0205A",
  viewport: "width=device-width, initial-scale=1",
  creator: "Rello Team"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    window.addEventListener("contextmenu", (event) => event.preventDefault());
    return () => window.removeEventListener("contextmenu", (event) => event.preventDefault());
  }, []);

  return (
    <html lang="en">
      <body className="bg-primary text-primary">
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  )
}
