// src/app/about/page.tsx
import AboutHero from '@/components/AboutHero';
import AboutIntro from '@/components/AboutIntro';
import FeatureCards from '@/components/FeatureCards';
import OurValues from '@/components/OurValues';
import CallToAction from '@/components/CallToAction';
import ContactSection from '@/components/ContactSection';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <FeatureCards />
      <OurValues />
      <CallToAction />
      <ContactSection />
    </main>
  );
}
