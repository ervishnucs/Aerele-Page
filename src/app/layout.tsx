import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import AboutPage from './about/page';
import ServicePage from './service/page';
import ERPNextPage from './erpnext/page';
import OurTeamPage from './our-team/page';
import BlogsPage from './blogs/page';
import HomePage from './page';

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
          <main className="pt-15">
            <section id="home" data-section style={{ scrollMarginTop: '80px' }}>
              <HomePage />
            </section>
            <section id="about" data-section style={{ scrollMarginTop: '80px' }}>
              <AboutPage />
            </section>
            <section id="service" data-section style={{ scrollMarginTop: '80px' }}>
              <ServicePage />
            </section>
            <section id="erpnext" data-section style={{ scrollMarginTop: '80px' }}>
              <ERPNextPage />
            </section>
            <section id="our-team" data-section style={{ scrollMarginTop: '80px' }}>
              <OurTeamPage />
            </section>
            <section id="blogs" data-section style={{ scrollMarginTop: '80px' }}>
              <BlogsPage />
            </section>
          </main>
        <Footer />
      </body>
    </html>
  );
}
