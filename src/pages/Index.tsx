
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PublicationsSection from '@/components/PublicationsSection';
import CollaboratorsSection from '@/components/CollaboratorsSection';
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
        <CollaboratorsSection />
        <WritingSection />
        <ReadingSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
