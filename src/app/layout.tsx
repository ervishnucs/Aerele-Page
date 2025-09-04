import './globals.css';
import Navbar from '@/components/navbar';
import CollageWrapper from '@/components/CollageWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Aerele Technologies',
    template: '%s — Aerele Technologies',
  },
  description:
    'We engineer ERP success with ERPNext customization, enterprise portals, MVPs, and DevOps for scalable, future-ready businesses.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <div className='pt-15'> 
        {/* CollageWrapper handles animation + sections inside ScrollNavigator */}
        <CollageWrapper />

      </div>
      </body>
    </html>
  );
}
