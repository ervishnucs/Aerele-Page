'use client';

import { useState } from 'react';
import CollageAnimation from './CollageAnimation';

import AboutPage from '@/app/about/page';
import ServicePage from '@/app/service/page';
import ERPNextPage from '@/app/erpnext/page';
import OurTeamPage from '@/app/our-team/page';
import BlogsPage from '@/app/blogs/page';
import HomePage from '@/app/page';
import Footer from './Footer';

export default function CollageWrapper() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {/* 🔹 Collage Animation comes right after Navbar */}
      <CollageAnimation onComplete={() => setShowContent(true)} />

      {/* 🔹 Other content only appears after animation is done */}
      {showContent && (
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
          <Footer />
        </main>
      )}
    </>
  );
}
