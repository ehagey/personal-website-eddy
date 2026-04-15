import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PublicationsSection from '@/components/PublicationsSection';
import WritingSection from '@/components/WritingSection';
import ReadingSection from '@/components/ReadingSection';
import ContactSection from '@/components/ContactSection';
import SectionWrapper from '@/components/SectionWrapper';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SectionWrapper id="about-wrapper" delay={0} showDivider={true}>
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper id="pubs-wrapper" delay={100} showDivider={true}>
          <PublicationsSection />
        </SectionWrapper>
        <SectionWrapper id="writing-wrapper" delay={150} showDivider={true}>
          <WritingSection />
        </SectionWrapper>
        <SectionWrapper id="reading-wrapper" delay={200} showDivider={true}>
          <ReadingSection />
        </SectionWrapper>
        <SectionWrapper id="contact-wrapper" delay={250} showDivider={false}>
          <ContactSection />
        </SectionWrapper>
      </main>
    </>
  );
};

export default Index;
