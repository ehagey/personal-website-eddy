
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PublicationsSection from '@/components/PublicationsSection';
import WritingSection from '@/components/WritingSection';
import ReadingSection from '@/components/ReadingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <PublicationsSection />
        <WritingSection />
        <ReadingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
