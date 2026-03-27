import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MARKODEE | DJ i Producent Subotica',
  description: 'Srpski DJ i producent iz Subotice. Rezervacije, miksevi i nastupi. Techno i industrial zvuk.',
  keywords: 'Serbian DJ, Subotica DJ, DJ Subotica, Techno DJ Srbija, Markodee, Tehno muzika, Industrial Techno',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased bg-background text-foreground font-mono selection:bg-accent selection:text-black min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
