
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PublicationsSection from '@/components/PublicationsSection';
import InTheNewsSection from '@/components/InTheNewsSection';
import InvitedTalksSection from '@/components/InvitedTalksSection';
import WritingSection from '@/components/WritingSection';
import TeachingAssistanceSection from '@/components/TeachingAssistanceSection';
import AwardsSection from '@/components/AwardsSection';
import RevealSection from '@/components/RevealSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const sections = [
  { value: 'in-the-news', title: 'In the News', Content: InTheNewsSection },
  { value: 'invited-talks', title: 'Invited Talks', Content: InvitedTalksSection },
  { value: 'teaching-assistance', title: 'Teaching Assistance', Content: TeachingAssistanceSection },
  { value: 'writing', title: 'Writing', Content: WritingSection },
  { value: 'awards', title: 'Awards and Honors', Content: AwardsSection },
];

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RevealSection>
          <AboutSection />
        </RevealSection>

        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '5px 20px 0 20px' }}>
          <RevealSection>
            <div id="publications" className="border-b border-[var(--site-border)]">
              <h2
                className="py-4"
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'var(--site-text)',
                }}
              >
                Publications and Academic Work
              </h2>
              <div className="pb-4">
                <PublicationsSection />
              </div>
            </div>
          </RevealSection>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px 20px 20px' }}>
          <Accordion type="multiple">
            {sections.map(({ value, title, Content }) => (
              <RevealSection key={value}>
                <AccordionItem value={value} id={value} className="border-[var(--site-border)]">
                  <AccordionTrigger
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      color: 'var(--site-text)',
                    }}
                  >
                    {title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <Content />
                  </AccordionContent>
                </AccordionItem>
              </RevealSection>
            ))}
          </Accordion>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px 20px 20px' }}>
          <p style={{ fontSize: '11px', color: 'var(--site-text-faint)', textAlign: 'left' }}>
            Last updated: October 30, 2026
          </p>
        </div>
      </main>
    </>
  );
};

export default Index;
