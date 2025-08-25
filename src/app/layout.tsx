
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Aerele Technologies — ERPNext, Portals, DevOps, Consulting',
    template: '%s — Aerele Technologies'
  },
  description:
    'We engineer ERP success with ERPNext customization, enterprise portals, MVPs, and DevOps for scalable, future-ready businesses.',
  openGraph: {
    title: 'Aerele Technologies — ERPNext, Portals, DevOps, Consulting',
    description:
      'We engineer ERP success with ERPNext customization, enterprise portals, MVPs, and DevOps for scalable, future-ready businesses.',
    url: 'https://aerele.example.com',
    siteName: 'Aerele Technologies',
    images: [
      { url: '/assets/logo.png', width: 512, height: 512, alt: 'Aerele Logo' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
