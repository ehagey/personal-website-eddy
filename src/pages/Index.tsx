
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PublicationsSection from '@/components/PublicationsSection';

import WritingSection from '@/components/WritingSection';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '56px' }}>
        <HeroSection />
        <AboutSection />
        <PublicationsSection />
        
        <WritingSection />
        <ReadingSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
