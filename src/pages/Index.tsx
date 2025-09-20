
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
      <main>
        <HeroSection />
        <AboutSection />
        <PublicationsSection />
        <WritingSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
