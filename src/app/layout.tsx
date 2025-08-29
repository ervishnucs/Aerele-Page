
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import AboutPage from './about/page';
import ServicePage from './service/page';
import OurTeamPage from './our-team/page';
import ERPNextPage from './erpnext/page';
import OurBlogs from './blogs/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Aerele Technologies',
    template: '%s — Aerele Technologies'
  },
  description:
    'We engineer ERP success with ERPNext customization, enterprise portals, MVPs, and DevOps for scalable, future-ready businesses.',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-15">{children}</main>
        <section id="about">
          <AboutPage />
        </section>
        <section id="service">
          <ServicePage />
        </section>
        <section id="our-team">
          <OurTeamPage />
        </section>
        <section id="erpnext">
          <ERPNextPage />
        </section>
        <section id="blogs">
          <OurBlogs />
        </section>
        <Footer />
      </body>
    </html>
  );
}
