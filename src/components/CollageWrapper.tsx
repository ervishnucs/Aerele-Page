'use client';

import { useState } from 'react';
import CollageAnimation from './CollageAnimation';
import HomePage from '@/app/page';
import AboutPage from '@/app/about/page';
import ServicePage from '@/app/service/page';
import ERPNextPage from '@/app/erpnext/page';
import OurTeamPage from '@/app/our-team/page';
import BlogsPage from '@/app/blogs/page';
import ScrollNavigator from '@/components/ScrollNavigator';
import Footer from './Footer';

export default function CollageWrapper() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <ScrollNavigator>
      {/* Render animation on top */}
      {!animationCompleted && (
        <CollageAnimation onComplete={() => setAnimationCompleted(true)} />
      )}

      {/* Sections are always in DOM but hidden until animation completes */}
      <main className={` ${animationCompleted ? '' : 'hidden'}`}>
        <section id="home" data-section>
          <HomePage />
        </section>

        <section id="about" data-section>
          <AboutPage />
        </section>

        <section id="service" data-section>
          <ServicePage />
        </section>

        <section id="erpnext" data-section>
          <ERPNextPage />
        </section>

        <section id="our-team" data-section>
          <OurTeamPage />
        </section>

        <section id="blogs" data-section>
          <BlogsPage />
        </section>

        <Footer />
      </main>
    </ScrollNavigator>
  );
}
